"use client";

import { CHARACTERS } from "@/data/verses";
import type { SaveData } from "@/lib/storage";

type Props = {
  save: SaveData;
  onBack: () => void;
};

export function DavidCollection({ save, onBack }: Props) {
  const david = CHARACTERS[0];
  const { collectedItemSlots, currentDay } = save;

  const currentStage = david.stages
    .filter((s) => s.dayFrom <= currentDay)
    .at(-1) ?? david.stages[0];

  return (
    <section className="flex flex-col gap-5 px-4 pb-28 pt-6">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="tap-target rounded-pill px-2 text-2xl text-ink-sub"
        >
          ←
        </button>
        <h1 className="font-display text-lg font-extrabold text-ink">
          다윗 도감
        </h1>
        <div className="w-8" />
      </div>

      <div className="flex flex-col items-center gap-3 py-4">
        <div className="flex h-24 w-24 items-center justify-center rounded-card bg-honey-tint text-6xl">
          ⚔️
        </div>
        <div className="text-center">
          <p className="text-base font-bold text-ink">{currentStage.nameKo}</p>
          <p className="text-xs text-ink-sub">
            Stage {currentStage.stage}/{david.stages.length}
          </p>
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold text-ink-sub">성장 단계</p>
        <div className="flex gap-2">
          {david.stages.map((s) => {
            const reached = s.dayFrom <= currentDay;
            return (
              <div
                key={s.stage}
                className={`flex-1 rounded-card p-3 text-center ${
                  s.stage === currentStage.stage
                    ? "border-2 border-honey bg-honey-tint"
                    : reached
                    ? "bg-sage-tint"
                    : "bg-white/60 opacity-40"
                }`}
              >
                <p className="text-lg">
                  {s.stage === 1 ? "🐑" : s.stage === 2 ? "⚔️" : "👑"}
                </p>
                <p className="mt-1 text-[11px] font-semibold text-ink">
                  {s.nameKo}
                </p>
                <p className="text-[10px] text-ink-sub">Day {s.dayFrom}~</p>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold text-ink-sub">
          아이템 ({collectedItemSlots.length}/{david.items.length})
        </p>
        <div className="grid grid-cols-5 gap-2">
          {david.items.map((item) => {
            const collected = collectedItemSlots.includes(item.slot);
            return (
              <div
                key={item.slot}
                className={`flex flex-col items-center gap-1 rounded-card p-2 ${
                  collected
                    ? "border-2 border-sun bg-sun-tint"
                    : "border border-honey/10 bg-white/60 opacity-40"
                }`}
              >
                <span className="text-2xl">
                  {collected ? item.emoji : "❓"}
                </span>
                <span className="text-[10px] font-medium text-ink-sub">
                  {collected ? item.nameKo : `Day ${item.slot}`}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-card bg-honey-tint p-4 text-center">
        <p className="text-xs text-ink-sub">
          🚀 다음 캐릭터 곧 추가!
        </p>
      </div>

      <button
        type="button"
        onClick={onBack}
        className="tap-target w-full rounded-card bg-honey py-4 text-base font-semibold text-white shadow-play active:scale-[0.98]"
      >
        ← 홈으로
      </button>
    </section>
  );
}
