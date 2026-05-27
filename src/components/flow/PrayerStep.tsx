"use client";

import { useState } from "react";
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

export function PrayerStep({ verse, lang, onLangChange, onNext, onBack }: Props) {
  const [playing, setPlaying] = useState(false);
  const prayer = verse.prayer[lang];

  const handlePlay = () => {
    if (playing) {
      stopSpeaking();
      setPlaying(false);
      return;
    }
    setPlaying(true);
    speak(prayer.text, lang);
    const totalMs = prayer.text.length * (lang === "ko" ? 180 : 90);
    window.setTimeout(() => setPlaying(false), totalMs);
  };

  return (
    <section className="flex flex-col gap-5 px-4 pb-28 pt-4">
      <p className="text-center text-sm font-semibold text-honey-dark">
        🙏 기도로 새기기
      </p>

      <p className="text-center text-xs text-ink-sub">
        {prayer.audioHint}
      </p>

      <div className="rounded-card bg-honey-tint p-6">
        <p className="text-center text-4xl">🙏</p>
        <p className="verse-text mt-4 text-center text-lg leading-relaxed text-ink">
          {prayer.text}
        </p>
      </div>

      <button
        type="button"
        onClick={handlePlay}
        className="tap-target mx-auto flex items-center gap-2 rounded-pill bg-white px-6 py-3 text-sm font-semibold text-honey-dark shadow-play active:scale-95"
      >
        {playing ? "⏸ 멈추기" : "🔊 들으며 따라하기"}
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
          className="tap-target flex-[2] rounded-card bg-honey py-4 text-base font-semibold text-white shadow-play active:scale-[0.98]"
        >
          완료 →
        </button>
      </div>
    </section>
  );
}
