"use client";

import { useMemo, useState } from "react";
import type { Lang, Verse } from "@/data/verses";
import type { FirstLetterWord } from "@/data/types";
import { LangToggle } from "@/components/LangToggle";

type Props = {
  verse: Verse;
  lang: Lang;
  onLangChange: (l: Lang) => void;
  onNext: () => void;
  onBack: () => void;
};

type Segment =
  | { type: "text"; value: string }
  | { type: "hint"; index: number; word: string; hint: string };

function buildSegments(text: string, words: FirstLetterWord[]): Segment[] {
  const positioned = words
    .map((w, i) => ({ ...w, index: i, pos: text.indexOf(w.word) }))
    .filter((w) => w.pos >= 0)
    .sort((a, b) => a.pos - b.pos);

  const segments: Segment[] = [];
  let offset = 0;

  for (const w of positioned) {
    if (w.pos > offset) {
      segments.push({ type: "text", value: text.slice(offset, w.pos) });
    }
    segments.push({ type: "hint", index: w.index, word: w.word, hint: w.hint });
    offset = w.pos + w.word.length;
  }
  if (offset < text.length) {
    segments.push({ type: "text", value: text.slice(offset) });
  }
  return segments;
}

export function FirstLetterStep({
  verse,
  lang,
  onLangChange,
  onNext,
  onBack,
}: Props) {
  const [revealed, setRevealed] = useState<Record<Lang, Set<number>>>({
    ko: new Set(),
    en: new Set(),
  });

  const words = verse.games.firstLetter[lang];
  const text = verse.text[lang].full;
  const segments = useMemo(() => buildSegments(text, words), [text, words]);
  const revealedSet = revealed[lang];
  const allRevealed = words.length > 0 && words.every((_, i) => revealedSet.has(i));

  const handleReveal = (index: number) => {
    setRevealed((prev) => ({
      ...prev,
      [lang]: new Set([...prev[lang], index]),
    }));
  };

  return (
    <section className="flex flex-col gap-5 px-4 pb-28 pt-4">
      <p className="text-center text-sm font-semibold text-honey-dark">
        🔤 {lang === "ko" ? "초성 게임" : "First Letter Game"}
      </p>

      <p className="text-center text-xs text-ink-sub">
        {lang === "ko"
          ? "초성을 보고 단어를 맞춰보세요! 탭하면 정답이 나와요"
          : "Guess the word from the first letter! Tap to reveal"}
      </p>

      <div className="rounded-card bg-honey-tint p-5">
        <p className="verse-text text-center text-xl leading-relaxed text-ink">
          {segments.map((seg, i) =>
            seg.type === "text" ? (
              <span key={i}>{seg.value}</span>
            ) : (
              <button
                key={i}
                type="button"
                onClick={() => handleReveal(seg.index)}
                className={`mx-0.5 inline-flex items-center justify-center rounded-pill px-3 py-1 align-middle text-base font-semibold transition-all ${
                  revealedSet.has(seg.index)
                    ? "bg-sage text-white animate-pop"
                    : "bg-white text-honey-dark ring-2 ring-honey active:scale-95"
                }`}
              >
                {revealedSet.has(seg.index) ? seg.word : seg.hint}
              </button>
            ),
          )}
        </p>
      </div>

      {allRevealed && (
        <div className="rounded-card bg-sage-tint p-4 text-center animate-pop">
          <p className="text-2xl">👏</p>
          <p className="mt-1 text-sm font-semibold text-sage-dark">
            {lang === "ko" ? "잘했어요!" : "Great job!"}
          </p>
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
          onClick={onNext}
          className="tap-target flex-[2] rounded-card bg-honey py-4 text-base font-semibold text-white shadow-play active:scale-[0.98]"
        >
          {allRevealed ? "다음 →" : "읽었어요! →"}
        </button>
      </div>
    </section>
  );
}
