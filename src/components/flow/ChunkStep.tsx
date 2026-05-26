"use client";

import { useEffect, useState } from "react";
import type { Lang, Verse } from "@/data/verses";
import { LangToggle } from "@/components/LangToggle";
import { speak, stopSpeaking } from "@/lib/speak";

type Props = {
  verse: Verse;
  lang: Lang;
  onLangChange: (l: Lang) => void;
  onNext: () => void;
  onBack: () => void;
};

export function ChunkStep({ verse, lang, onLangChange, onNext, onBack }: Props) {
  const chunks = verse.chunks[lang];
  const [revealed, setRevealed] = useState(1);

  useEffect(() => {
    setRevealed(1);
    return () => stopSpeaking();
  }, [lang]);

  const playChunk = (idx: number) => {
    speak(chunks[idx], lang);
  };

  const handleAdvance = () => {
    if (revealed < chunks.length) {
      const next = revealed + 1;
      setRevealed(next);
      playChunk(next - 1);
    } else {
      speak(verse.text[lang].full, lang);
    }
  };

  const allRevealed = revealed >= chunks.length;

  return (
    <section className="flex flex-col gap-5 px-4 pb-28 pt-4">
      <p className="text-center text-sm font-semibold text-honey-dark">
        📦 청크로 쌓기
      </p>

      <p className="text-center text-xs text-ink-sub">
        한 덩이씩 듣고 따라 말해보세요
      </p>

      <div className="flex flex-col gap-3">
        {chunks.map((chunk, i) => {
          const visible = i < revealed;
          return (
            <button
              key={i}
              type="button"
              onClick={() => visible && playChunk(i)}
              disabled={!visible}
              className={`flex items-center gap-3 rounded-card p-4 text-left transition-all ${
                visible
                  ? "bg-honey-tint animate-pop"
                  : "bg-honey-tint/40 opacity-40"
              }`}
              style={{ animationDelay: `${i * 0.05}s` }}
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-honey text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="verse-text flex-1 text-base text-ink">
                {visible ? chunk : "·  ·  ·"}
              </span>
              {visible && <span className="text-honey-dark">🔊</span>}
            </button>
          );
        })}
      </div>

      <button
        type="button"
        onClick={handleAdvance}
        className="tap-target w-full rounded-card border border-honey/20 py-3 text-sm font-semibold text-honey-dark active:scale-[0.98]"
      >
        {allRevealed ? "🔊 전체 다시 듣기" : `+ 다음 청크 (${revealed}/${chunks.length})`}
      </button>

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
          disabled={!allRevealed}
          className="tap-target flex-[2] rounded-card bg-honey py-4 text-base font-semibold text-white shadow-play active:scale-[0.98] disabled:opacity-40 disabled:active:scale-100"
        >
          게임으로 →
        </button>
      </div>
    </section>
  );
}
