"use client";

import { VERSES, PLAN, CHARACTERS, AVATARS } from "@/data/verses";
import {
  getLevel,
  getVerseIndex,
  type SaveData,
} from "@/lib/storage";

type Props = {
  save: SaveData;
  onStart: () => void;
  onSettings: () => void;
  onCollection: () => void;
};

export function HomeScreen({ save, onStart, onSettings, onCollection }: Props) {
  const { avatarId, currentDay, completedDays, totalStars, streak, collectedItemSlots } = save;
  const { level, title } = getLevel(totalStars);
  const verseIndex = getVerseIndex(currentDay);
  const verse = VERSES[verseIndex];
  const totalDays = PLAN.totalDays;
  const allDone = currentDay > totalDays;

  const avatar = AVATARS.find((a) => a.id === avatarId);
  const avatarEmoji = avatar?.emoji ?? "👦";

  const david = CHARACTERS[0];
  const currentStage = david.stages
    .filter((s) => s.dayFrom <= currentDay)
    .at(-1) ?? david.stages[0];

  return (
    <section className="flex flex-col gap-5 px-4 pb-28 pt-6">
      <div className="flex items-center justify-between">
        <div className="rounded-pill bg-coral-tint px-3 py-1.5 text-xs font-bold text-coral-dark">
          {streak > 0 ? `🔥 ${streak}일 연속!` : "🔥 오늘 시작해요!"}
        </div>
        <button
          type="button"
          onClick={onSettings}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-play active:scale-95"
          aria-label="설정"
        >
          ⚙️
        </button>
      </div>

      <div className="flex flex-col items-center gap-1 py-2">
        <div className="flex h-[100px] w-[100px] items-center justify-center rounded-card bg-honey-tint text-6xl">
          {avatarEmoji}
        </div>
        <p className="mt-1 text-sm font-bold text-ink">
          Lv.{level} {title}
        </p>
        <p className="text-xs text-ink-sub">⭐ {totalStars}</p>
      </div>

      <button
        type="button"
        onClick={onCollection}
        className="flex items-center gap-3 rounded-card bg-white p-4 shadow-play transition-all active:scale-[0.98]"
      >
        <span className="text-3xl">⚔️</span>
        <div className="flex-1 text-left">
          <p className="text-sm font-bold text-ink">{currentStage.nameKo}</p>
          <p className="text-xs text-ink-sub">
            아이템 {collectedItemSlots.length}/{david.items.length}
          </p>
        </div>
        <span className="text-sm text-ink-sub">도감 →</span>
      </button>

      {!allDone ? (
        <button
          type="button"
          onClick={onStart}
          className="flex items-center gap-4 rounded-card bg-gradient-to-r from-honey to-sun p-5 text-left shadow-play transition-all active:scale-[0.98]"
        >
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/30 text-2xl">
            ▶
          </span>
          <div className="flex-1">
            <p className="text-xs font-medium text-white/80">
              Day {currentDay} · 오늘의 말씀
            </p>
            <p className="mt-0.5 text-base font-bold text-white">
              {verse.reference.displayKo}
            </p>
            <p className="mt-0.5 text-xs text-white/80">{verse.theme.ko}</p>
          </div>
          <span className="text-xl text-white">→</span>
        </button>
      ) : (
        <div className="rounded-card bg-sage-tint p-5 text-center">
          <p className="text-2xl">🎉</p>
          <p className="mt-1 text-sm font-bold text-sage-dark">
            {totalDays}일 챌린지 완료!
          </p>
          <p className="mt-1 text-xs text-ink-sub">
            모든 구절을 외웠어요! 대단해요!
          </p>
        </div>
      )}

      <div>
        <div className="mb-2 flex items-center justify-between text-xs">
          <span className="font-semibold text-ink-sub">나의 진도</span>
          <span className="font-bold text-honey-dark">
            Day {Math.min(currentDay, totalDays)}/{totalDays}
          </span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-honey-tint">
          <div
            className="h-full rounded-full bg-gradient-to-r from-honey to-sun transition-all"
            style={{ width: `${(Math.min(currentDay - 1, totalDays) / totalDays) * 100}%` }}
          />
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold text-ink-sub">외운 구절</p>
        <div className="flex flex-col gap-2">
          {VERSES.map((v, i) => {
            const day = i + 1;
            const done = completedDays.includes(day);
            const isCurrent = verseIndex === i && !allDone;
            return (
              <div
                key={v.id}
                className={`flex items-center gap-3 rounded-card p-3 ${
                  done
                    ? "bg-sage-tint"
                    : isCurrent
                    ? "bg-honey-tint"
                    : "bg-white/60"
                }`}
              >
                <span className="text-sm">
                  {done ? "✅" : isCurrent ? "📖" : "🔒"}
                </span>
                <div className="flex-1">
                  <p
                    className={`text-xs font-semibold ${
                      done || isCurrent ? "text-ink" : "text-ink-sub"
                    }`}
                  >
                    {v.reference.displayKo}
                  </p>
                  <p className="text-[11px] text-ink-sub">{v.theme.ko}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
