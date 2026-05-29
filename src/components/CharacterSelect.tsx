"use client";

import { useState } from "react";
import { AVATARS } from "@/data/verses";

type Props = {
  onComplete: (avatarId: string) => void;
};

export function CharacterSelect({ onComplete }: Props) {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="flex flex-col items-center gap-6 px-4 pb-28 pt-8">
      <h1 className="font-display text-2xl font-extrabold text-ink">
        어떤 친구와 함께할까요?
      </h1>
      <p className="text-sm text-ink-sub">함께 말씀을 외울 친구를 골라요!</p>

      <div className="grid grid-cols-3 gap-3">
        {AVATARS.map((avatar) => (
          <button
            key={avatar.id}
            type="button"
            onClick={() => setSelected(avatar.id)}
            className={`flex flex-col items-center gap-2 rounded-card p-4 transition-all active:scale-95 ${
              selected === avatar.id
                ? "bg-honey-tint ring-2 ring-honey"
                : "bg-white shadow-play"
            }`}
          >
            <span className="text-5xl">{avatar.emoji}</span>
            <span className="text-sm font-semibold text-ink">
              {avatar.nameKo}
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <div className="w-full animate-pop">
          <div className="mb-4 flex flex-col items-center gap-1">
            <span className="text-7xl">
              {AVATARS.find((a) => a.id === selected)?.emoji}
            </span>
            <p className="mt-2 text-sm font-semibold text-ink">내 친구</p>
          </div>
          <button
            type="button"
            onClick={() => onComplete(selected)}
            className="tap-target w-full rounded-card bg-honey py-4 text-base font-semibold text-white shadow-play active:scale-[0.98]"
          >
            시작하기!
          </button>
        </div>
      )}
    </section>
  );
}
