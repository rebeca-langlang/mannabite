"use client";

import type { Verse } from "@/data/verses";

type Props = {
  verse: Verse;
  stars: number;
  streak: number;
  unlockedItem: { emoji: string; nameKo: string } | null;
  onHome: () => void;
};

export function DoneStep({ verse, stars, streak, unlockedItem, onHome }: Props) {
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

      {unlockedItem && (
        <div className="w-full rounded-card border-2 border-sun bg-sun-tint p-4 animate-pop">
          <p className="text-4xl animate-bounce">{unlockedItem.emoji}</p>
          <p className="mt-2 text-sm font-bold text-honey-dark">
            새 아이템 획득!
          </p>
          <p className="mt-1 text-xs text-ink-sub">{unlockedItem.nameKo}</p>
        </div>
      )}

      <div className="flex gap-3">
        <div className="rounded-pill bg-sun-tint px-4 py-2 text-sm font-bold text-honey-dark">
          ⭐ +{stars}
        </div>
        <div className="rounded-pill bg-sage-tint px-4 py-2 text-sm font-bold text-sage-dark">
          XP +{xp}
        </div>
      </div>

      <div className="rounded-pill bg-honey-tint px-4 py-2 text-xs font-semibold text-honey-dark">
        🔥 {streak}일 연속 학습!
      </div>

      <button
        type="button"
        onClick={onHome}
        className="tap-target mt-2 w-full rounded-card bg-honey py-4 text-base font-semibold text-white shadow-play active:scale-[0.98]"
      >
        홈으로 돌아가기
      </button>
      <p className="text-xs text-ink-sub">내일 다시 만나요! 🌙</p>
    </section>
  );
}
