"use client";

import { useMemo, useState } from "react";
import type { Lang, Verse } from "@/data/verses";
import { LangToggle } from "@/components/LangToggle";

type Props = {
  verse: Verse;
  lang: Lang;
  onLangChange: (l: Lang) => void;
  onComplete: (stars: number) => void;
  onBack: () => void;
};

type Status = "playing" | "wrong" | "correct";

type LangProgress = {
  filled: (string | null)[];
  active: number;
  mistakes: number;
};

const emptyProgress = (n: number): LangProgress => ({
  filled: Array(n).fill(null),
  active: 0,
  mistakes: 0,
});

export function GameStep({ verse, lang, onLangChange, onComplete, onBack }: Props) {
  const [progress, setProgress] = useState<Record<Lang, LangProgress>>(() => ({
    ko: emptyProgress(verse.games.fillInBlank.ko.blanks.length),
    en: emptyProgress(verse.games.fillInBlank.en.blanks.length),
  }));
  const [wrongKey, setWrongKey] = useState<string | null>(null);
  const [stars, setStars] = useState(0);

  const game = verse.games.fillInBlank[lang];
  const cur = progress[lang];
  const other = progress[lang === "ko" ? "en" : "ko"];
  const parts = useMemo(() => game.template.split("{blank}"), [game.template]);
  const allFilled = cur.filled.every((f) => f !== null);
  const otherDone = other.filled.every((f) => f !== null);

  const handleSelect = (optionIdx: number) => {
    if (allFilled) return;
    const blankIdx = cur.active;
    const option = game.blanks[blankIdx].options[optionIdx];
    const key = `${lang}-${blankIdx}-${optionIdx}`;

    if (!option.correct) {
      setWrongKey(key);
      setProgress((p) => ({
        ...p,
        [lang]: { ...p[lang], mistakes: p[lang].mistakes + 1 },
      }));
      window.setTimeout(() => setWrongKey(null), 350);
      return;
    }

    setProgress((p) => ({
      ...p,
      [lang]: {
        ...p[lang],
        filled: p[lang].filled.map((f, i) =>
          i === blankIdx ? game.blanks[blankIdx].answer : f,
        ),
        active: p[lang].active + 1,
      },
    }));
    setStars((s) => s + 1);
  };

  const status: Status = wrongKey ? "wrong" : allFilled ? "correct" : "playing";

  const handleFinish = () => {
    const mistakes = progress.ko.mistakes + progress.en.mistakes;
    const bothDone = allFilled && otherDone;
    const base = bothDone ? 3 : 2;
    const earned = Math.max(1, base - Math.floor(mistakes / 2));
    onComplete(earned);
  };

  return (
    <section className="flex flex-col gap-5 px-4 pb-28 pt-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-honey-dark">🧩 게임으로 외우기</p>
        <span className="rounded-pill bg-sun-tint px-3 py-1 text-xs font-bold text-honey-dark">
          ⭐ {stars}
        </span>
      </div>

      <p className="text-center text-xs text-ink-sub">
        빈칸에 맞는 이모지를 골라요
      </p>

      <div className="flex justify-center gap-2">
        {(["ko", "en"] as const).map((l) => {
          const p = progress[l];
          const done = p.filled.every((f) => f !== null);
          const filledCount = p.filled.filter(Boolean).length;
          return (
            <span
              key={l}
              className={`rounded-pill px-2.5 py-1 text-[11px] font-semibold ${
                done
                  ? "bg-sage-tint text-sage-dark"
                  : l === lang
                  ? "bg-honey text-white"
                  : "bg-honey-tint text-honey-dark"
              }`}
            >
              {l === "ko" ? "한국어" : "English"}{" "}
              {done ? "✓" : `${filledCount}/${p.filled.length}`}
            </span>
          );
        })}
      </div>

      <div
        className={`rounded-card p-5 transition-colors ${
          status === "wrong"
            ? "bg-coral-tint animate-shake"
            : status === "correct"
            ? "bg-sage-tint"
            : "bg-honey-tint"
        }`}
      >
        <p className="verse-text text-center text-xl leading-relaxed text-ink">
          {parts.map((part, i) => (
            <span key={i}>
              {part}
              {i < game.blanks.length && (
                <span
                  className={`mx-1 inline-flex min-w-[2.5em] items-center justify-center rounded-pill px-3 py-1 align-middle text-base font-semibold ${
                    cur.filled[i]
                      ? "bg-sage text-white"
                      : i === cur.active
                      ? "bg-white text-honey-dark ring-2 ring-honey animate-pulse"
                      : "bg-white text-ink-sub"
                  }`}
                >
                  {cur.filled[i] ?? "___"}
                </span>
              )}
            </span>
          ))}
        </p>
      </div>

      {!allFilled && (
        <div className="flex flex-col gap-3">
          <p className="text-center text-xs font-semibold text-ink-sub">
            ({cur.active + 1}번째 빈칸)
          </p>
          <div className="grid grid-cols-3 gap-3">
            {game.blanks[cur.active].options.map((opt, oi) => {
              const key = `${lang}-${cur.active}-${oi}`;
              const isWrong = wrongKey === key;
              return (
                <button
                  key={oi}
                  type="button"
                  onClick={() => handleSelect(oi)}
                  className={`flex aspect-square flex-col items-center justify-center gap-1 rounded-card border bg-white p-2 transition-all active:scale-95 ${
                    isWrong
                      ? "border-coral bg-coral-tint animate-shake"
                      : "border-honey/20 hover:border-honey/40"
                  }`}
                >
                  <span className="text-3xl">{opt.emoji}</span>
                  <span className="text-[11px] font-medium text-ink-sub">
                    {lang === "ko" ? opt.labelKo ?? opt.label : opt.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {allFilled && (
        <div className="rounded-card bg-sage-tint p-4 text-center animate-pop">
          <p className="text-2xl">🎉</p>
          <p className="mt-1 text-sm font-semibold text-sage-dark">
            {lang === "ko" ? "한국어 완료!" : "English done!"}
          </p>
          {!otherDone && (
            <p className="mt-1 text-xs text-ink-sub">
              {lang === "ko"
                ? "영어로도 해볼까요? 별이 더 쌓여요 ⭐"
                : "한국어로도 해볼까요? 별이 더 쌓여요 ⭐"}
            </p>
          )}
        </div>
      )}

      <LangToggle lang={lang} onChange={onLangChange} />

      <div className="mt-2 flex gap-3">
        <button
          type="button"
          onClick={onBack}
          className="tap-target flex-1 rounded-card border border-honey/20 py-4 text-base font-semibold text-honey-dark active:scale-[0.98]"
        >
          ← 이전
        </button>
        <button
          type="button"
          onClick={handleFinish}
          disabled={!allFilled}
          className="tap-target flex-[2] rounded-card bg-honey py-4 text-base font-semibold text-white shadow-play active:scale-[0.98] disabled:opacity-40 disabled:active:scale-100"
        >
          완료 →
        </button>
      </div>
    </section>
  );
}
