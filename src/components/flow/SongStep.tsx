"use client";

import { useEffect, useState } from "react";
import type { Lang, Verse } from "@/data/verses";
import { LangToggle } from "@/components/LangToggle";
import { VerseCard } from "@/components/VerseCard";
import { speak, stopSpeaking } from "@/lib/speak";

type Props = {
  verse: Verse;
  lang: Lang;
  onLangChange: (l: Lang) => void;
  onNext: () => void;
};

export function SongStep({ verse, lang, onLangChange, onNext }: Props) {
  const [playing, setPlaying] = useState(false);

  useEffect(() => () => stopSpeaking(), []);

  const handlePlay = () => {
    if (playing) {
      stopSpeaking();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    speak(verse.text[lang].full, lang);
    const totalMs = verse.text[lang].full.length * (lang === "ko" ? 180 : 90);
    window.setTimeout(() => setPlaying(false), totalMs);
  };

  return (
    <section className="flex flex-col gap-5 px-4 pb-28 pt-4">
      <p className="text-center text-sm font-semibold text-honey-dark">
        🎵 노래로 만나기
      </p>

      <VerseCard verse={verse} lang={lang} size="lg" />

      <div className="flex flex-col items-center gap-4 py-4">
        <button
          type="button"
          onClick={handlePlay}
          className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-honey to-sun text-3xl text-white shadow-play transition-transform active:scale-95"
          aria-label={playing ? "정지" : "노래 재생"}
        >
          {playing ? "⏸" : "▶"}
        </button>
        <div className="flex items-end gap-1 h-6">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`w-1.5 rounded-full bg-honey transition-all ${
                playing ? "animate-pulse" : ""
              }`}
              style={{
                height: playing ? `${8 + ((i * 7) % 16)}px` : "8px",
                animationDelay: `${i * 0.12}s`,
              }}
            />
          ))}
        </div>
        <p className="text-xs text-ink-sub">
          {playing ? "듣고 있어요…" : "버튼을 눌러 들어보세요"}
        </p>
      </div>

      <LangToggle lang={lang} onChange={onLangChange} />

      <button
        type="button"
        onClick={onNext}
        className="tap-target mt-2 w-full rounded-card bg-honey py-4 text-base font-semibold text-white shadow-play active:scale-[0.98]"
      >
        다음 →
      </button>
    </section>
  );
}
