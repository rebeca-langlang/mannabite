"use client";

import type { Lang, Verse } from "@/data/verses";
import { LangToggle } from "@/components/LangToggle";

type Props = {
  verse: Verse;
  lang: Lang;
  onLangChange: (l: Lang) => void;
  onNext: () => void;
  onBack: () => void;
};

export function ImageStep({ verse, lang, onLangChange, onNext, onBack }: Props) {
  const { sequence, simpleExplanation } = verse.imageAssociation;

  return (
    <section className="flex flex-col gap-5 px-4 pb-28 pt-4">
      <p className="text-center text-sm font-semibold text-honey-dark">
        🖼️ 그림으로 이해하기
      </p>

      <p className="text-center text-xs text-ink-sub">
        {lang === "ko" ? verse.reference.displayKo : verse.reference.display}
      </p>

      <div className="flex items-center justify-center gap-2 py-2">
        {sequence.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className="flex flex-col items-center gap-2 animate-pop" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="flex h-16 w-16 items-center justify-center rounded-card bg-honey-tint text-4xl">
                {item.emoji}
              </div>
              <span className="text-xs font-medium text-ink-sub">
                {lang === "ko" ? item.keywordKo : item.keyword}
              </span>
            </div>
            {i < sequence.length - 1 && (
              <span className="text-xl text-honey-dark/60">→</span>
            )}
          </div>
        ))}
      </div>

      <div className="rounded-card bg-sage-tint p-4">
        <p className="flex items-start gap-2 text-sm leading-relaxed text-ink">
          <span>💡</span>
          <span>{lang === "ko" ? simpleExplanation.ko : simpleExplanation.en}</span>
        </p>
      </div>

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
          다음 →
        </button>
      </div>
    </section>
  );
}
