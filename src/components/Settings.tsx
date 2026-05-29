"use client";

import { useState } from "react";
import type { SaveData } from "@/lib/storage";
import { PLAN, AVATARS } from "@/data/verses";

type Props = {
  save: SaveData;
  onChangeCharacter: () => void;
  onReset: () => void;
  onStory: () => void;
  onFeedback: () => void;
  onVerseRequest: () => void;
  onClose: () => void;
};

export function Settings({ save, onChangeCharacter, onReset, onStory, onFeedback, onVerseRequest, onClose }: Props) {
  const [confirmReset, setConfirmReset] = useState(false);
  const avatar = AVATARS.find((a) => a.id === save.avatarId);
  const avatarEmoji = avatar?.emoji ?? "👦";

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
        <p className="mb-3 text-sm font-semibold text-ink">내 친구</p>
        <div className="flex items-center gap-4">
          <div className="flex h-[80px] w-[80px] items-center justify-center rounded-card bg-honey-tint text-5xl">
            {avatarEmoji}
          </div>
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
          <p>진도: Day {save.currentDay}/{PLAN.totalDays}</p>
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

      <button
        type="button"
        onClick={onFeedback}
        className="rounded-card bg-white p-4 text-left shadow-play transition-all active:scale-[0.98]"
      >
        <p className="text-sm font-semibold text-ink">💌 피드백 보내기</p>
        <p className="mt-1 text-xs text-ink-sub">좋은 점, 개선할 점을 알려주세요</p>
      </button>

      <button
        type="button"
        onClick={onVerseRequest}
        className="rounded-card bg-white p-4 text-left shadow-play transition-all active:scale-[0.98]"
      >
        <p className="text-sm font-semibold text-ink">📖 구절 추가 요청</p>
        <p className="mt-1 text-xs text-ink-sub">함께 외우고 싶은 말씀을 알려주세요</p>
      </button>

      <button
        type="button"
        onClick={onStory}
        className="rounded-card bg-white p-4 text-left shadow-play transition-all active:scale-[0.98]"
      >
        <p className="text-sm font-semibold text-ink">✨ 만든이 이야기</p>
        <p className="mt-1 text-xs text-ink-sub">MannaBite를 만든 사람</p>
      </button>
    </section>
  );
}
