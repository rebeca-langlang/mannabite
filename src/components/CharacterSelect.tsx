"use client";

import { useState } from "react";
import Image from "next/image";
import {
  CHARACTER_IMAGE,
  type Character,
  type CharacterGender,
} from "@/lib/storage";

type Props = {
  onComplete: (character: Character) => void;
};

export function CharacterSelect({ onComplete }: Props) {
  const [gender, setGender] = useState<CharacterGender | null>(null);

  const handleConfirm = () => {
    if (gender) {
      onComplete({ gender, skinTone: "medium" });
    }
  };

  return (
    <section className="flex flex-col items-center gap-6 px-4 pb-28 pt-8">
      <h1 className="font-display text-2xl font-extrabold text-ink">
        나만의 캐릭터 만들기
      </h1>
      <p className="text-sm text-ink-sub">함께 말씀을 외울 친구를 골라요!</p>

      <div className="flex justify-center gap-4">
        {(["boy", "girl"] as const).map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGender(g)}
            className={`flex flex-col items-center gap-2 rounded-card p-4 transition-all active:scale-95 ${
              gender === g
                ? "bg-honey-tint ring-2 ring-honey"
                : "bg-white shadow-play"
            }`}
          >
            <Image
              src={CHARACTER_IMAGE[g]}
              alt={g === "boy" ? "남자아이" : "여자아이"}
              width={120}
              height={120}
              className="rounded-card"
            />
            <span className="text-sm font-semibold text-ink">
              {g === "boy" ? "남자아이" : "여자아이"}
            </span>
          </button>
        ))}
      </div>

      {gender && (
        <div className="w-full animate-pop">
          <div className="mb-4 flex flex-col items-center gap-1">
            <Image
              src={CHARACTER_IMAGE[gender]}
              alt="내 캐릭터"
              width={160}
              height={160}
              className="rounded-card"
            />
            <p className="mt-2 text-sm font-semibold text-ink">내 캐릭터</p>
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
