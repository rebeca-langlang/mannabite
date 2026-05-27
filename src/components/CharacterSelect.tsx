"use client";

import { useState } from "react";
import {
  CHARACTER_EMOJI,
  type Character,
  type CharacterGender,
  type SkinTone,
} from "@/lib/storage";

type Props = {
  onComplete: (character: Character) => void;
};

const SKIN_TONES: { value: SkinTone; label: string; color: string }[] = [
  { value: "light", label: "밝은", color: "#FDEBD0" },
  { value: "medium", label: "중간", color: "#D4A574" },
  { value: "dark", label: "어두운", color: "#8D6E63" },
];

export function CharacterSelect({ onComplete }: Props) {
  const [gender, setGender] = useState<CharacterGender | null>(null);
  const [skinTone, setSkinTone] = useState<SkinTone | null>(null);

  const handleConfirm = () => {
    if (gender && skinTone) {
      onComplete({ gender, skinTone });
    }
  };

  return (
    <section className="flex flex-col items-center gap-6 px-4 pb-28 pt-8">
      <h1 className="font-display text-2xl font-extrabold text-ink">
        나만의 캐릭터 만들기
      </h1>
      <p className="text-sm text-ink-sub">함께 말씀을 외울 친구를 골라요!</p>

      <div className="flex flex-col gap-6 w-full">
        <div>
          <p className="mb-3 text-center text-sm font-semibold text-honey-dark">
            누구와 함께할까요?
          </p>
          <div className="flex justify-center gap-4">
            {(["boy", "girl"] as const).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGender(g)}
                className={`flex flex-col items-center gap-2 rounded-card p-5 transition-all active:scale-95 ${
                  gender === g
                    ? "bg-honey-tint ring-2 ring-honey"
                    : "bg-white shadow-play"
                }`}
              >
                <span className="text-5xl">
                  {CHARACTER_EMOJI[g][skinTone ?? "medium"]}
                </span>
                <span className="text-sm font-semibold text-ink">
                  {g === "boy" ? "남자아이" : "여자아이"}
                </span>
              </button>
            ))}
          </div>
        </div>

        {gender && (
          <div className="animate-pop">
            <p className="mb-3 text-center text-sm font-semibold text-honey-dark">
              피부색을 골라요
            </p>
            <div className="flex justify-center gap-4">
              {SKIN_TONES.map((st) => (
                <button
                  key={st.value}
                  type="button"
                  onClick={() => setSkinTone(st.value)}
                  className={`flex flex-col items-center gap-2 rounded-card p-4 transition-all active:scale-95 ${
                    skinTone === st.value
                      ? "bg-honey-tint ring-2 ring-honey"
                      : "bg-white shadow-play"
                  }`}
                >
                  <span className="text-4xl">
                    {CHARACTER_EMOJI[gender][st.value]}
                  </span>
                  <span className="text-xs font-medium text-ink-sub">
                    {st.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {gender && skinTone && (
        <div className="w-full animate-pop">
          <div className="mb-4 flex flex-col items-center gap-1">
            <span className="text-6xl">
              {CHARACTER_EMOJI[gender][skinTone]}
            </span>
            <p className="text-sm font-semibold text-ink">내 캐릭터</p>
          </div>
          <button
            type="button"
            onClick={handleConfirm}
            className="tap-target w-full rounded-card bg-honey py-4 text-base font-semibold text-white shadow-play active:scale-[0.98]"
          >
            시작하기!
          </button>
        </div>
      )}
    </section>
  );
}
