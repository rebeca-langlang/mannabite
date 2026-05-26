"use client";

import type { Verse } from "@/data/verses";

type Props = {
  verse: Verse;
  stars: number;
  onRestart: () => void;
};

export function DoneStep({ verse, stars, onRestart }: Props) {
  const xp = stars * 5 + 10;
  return (
    <section className="flex flex-col items-center gap-6 px-4 pb-28 pt-8 text-center">
      <div className="text-7xl animate-pop">🎉</div>
      <h2 className="font-display text-2xl font-extrabold text-ink">
        잘했어요!
      </h2>
      <p className="text-sm text-ink-sub">오늘의 구절을 외웠어요</p>

      <div className="w-full rounded-card border border-honey/20 bg-white p-4">
        <p className="text-xs font-medium text-honey-dark">
          {verse.reference.displayKo} · {verse.reference.display}
        </p>
        <p className="verse-text mt-2 text-base text-ink">
          {verse.text.ko.full}
        </p>
        <p className="mt-1 text-sm text-ink-sub">{verse.text.en.full}</p>
        <p className="mt-2 text-xl">✅</p>
      </div>

      <div className="flex gap-3">
        <div className="rounded-pill bg-sun-tint px-4 py-2 text-sm font-bold text-honey-dark">
          ⭐ +{stars}
        </div>
        <div className="rounded-pill bg-sage-tint px-4 py-2 text-sm font-bold text-sage-dark">
          XP +{xp}
        </div>
      </div>

      <div className="rounded-pill bg-honey-tint px-4 py-2 text-xs font-semibold text-honey-dark">
        🔥 1일 연속 학습!
      </div>

      <button
        type="button"
        onClick={onRestart}
        className="tap-target mt-2 w-full rounded-card bg-honey py-4 text-base font-semibold text-white shadow-play active:scale-[0.98]"
      >
        처음부터 다시 하기
      </button>
      <p className="text-xs text-ink-sub">내일 다시 만나요! 🌙</p>
    </section>
  );
}
