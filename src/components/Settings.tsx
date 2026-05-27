"use client";

import { useState } from "react";
import Image from "next/image";
import { CHARACTER_IMAGE, type SaveData } from "@/lib/storage";

type Props = {
  save: SaveData;
  onChangeCharacter: () => void;
  onReset: () => void;
  onClose: () => void;
};

export function Settings({ save, onChangeCharacter, onReset, onClose }: Props) {
  const [confirmReset, setConfirmReset] = useState(false);
  const charSrc = CHARACTER_IMAGE[save.character.gender];

  return (
    <section className="flex flex-col gap-5 px-4 pb-28 pt-6">
      <div className="flex items-center justify-between">
        <h1 className="font-display text-xl font-extrabold text-ink">설정</h1>
        <button
          type="button"
          onClick={onClose}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-lg shadow-play active:scale-95"
          aria-label="닫기"
        >
          ✕
        </button>
      </div>

      <div className="rounded-card bg-white p-4 shadow-play">
        <p className="mb-3 text-sm font-semibold text-ink">내 캐릭터</p>
        <div className="flex items-center gap-4">
          <Image src={charSrc} alt="내 캐릭터" width={80} height={80} className="h-[80px] w-[80px] rounded-card object-cover" />
          <button
            type="button"
            onClick={onChangeCharacter}
            className="rounded-pill border border-honey/20 px-4 py-2 text-sm font-semibold text-honey-dark active:scale-95"
          >
            다시 선택
          </button>
        </div>
      </div>

      <div className="rounded-card bg-white p-4 shadow-play">
        <p className="mb-3 text-sm font-semibold text-ink">학습 데이터</p>
        <div className="flex flex-col gap-2 text-xs text-ink-sub">
          <p>진도: Day {save.currentDay}/30</p>
          <p>총 별: ⭐ {save.totalStars}</p>
          <p>연속 학습: 🔥 {save.streak}일</p>
        </div>
        {!confirmReset ? (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="mt-3 text-xs text-coral-dark"
          >
            진도 초기화
          </button>
        ) : (
          <div className="mt-3 rounded-card bg-coral-tint p-3">
            <p className="text-xs font-semibold text-coral-dark">
              정말 초기화할까요? 모든 진도가 사라져요.
            </p>
            <div className="mt-2 flex gap-2">
              <button
                type="button"
                onClick={onReset}
                className="rounded-pill bg-coral-dark px-4 py-1.5 text-xs font-semibold text-white active:scale-95"
              >
                초기화
              </button>
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="rounded-pill border border-coral-dark/20 px-4 py-1.5 text-xs font-semibold text-coral-dark active:scale-95"
              >
                취소
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
