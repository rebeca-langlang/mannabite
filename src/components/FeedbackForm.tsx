"use client";

import { useState, useEffect } from "react";
import { sendFeedback } from "@/lib/feedback";
import { loadSave } from "@/lib/storage";

type Props = {
  type: "feedback" | "verse_request";
  onBack: () => void;
};

export function FeedbackForm({ type, onBack }: Props) {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{ text: string; ok: boolean } | null>(null);

  useEffect(() => {
    if (!toast) return;
    const t = window.setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(t);
  }, [toast]);

  const title = type === "feedback" ? "피드백 보내기" : "구절 추가 요청";
  const placeholder =
    type === "feedback"
      ? "어떤 점이 좋았나요? 개선할 점이 있나요?"
      : "함께 외우고 싶은 말씀 구절을 알려주세요!";

  const handleSubmit = async () => {
    if (!message.trim()) return;
    setSending(true);
    const save = loadSave();
    const ok = await sendFeedback({
      type,
      message: message.trim(),
      email: email.trim() || undefined,
      avatarId: save?.avatarId,
      day: save?.currentDay,
    });
    setSending(false);
    if (ok) {
      setToast({ text: "감사합니다! 소중히 읽을게요 💛", ok: true });
      setMessage("");
      setEmail("");
    } else {
      setToast({ text: "전송에 실패했어요. 잠시 후 다시 시도해주세요", ok: false });
    }
  };

  return (
    <section className="flex flex-col gap-5 px-5 pb-28 pt-6">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="tap-target rounded-pill px-2 text-2xl text-ink-sub"
        >
          ←
        </button>
        <h1 className="font-display text-lg font-extrabold text-ink">
          {title}
        </h1>
        <div className="w-8" />
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className="mb-1 block text-xs font-semibold text-ink-sub">
            내용 *
          </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={placeholder}
            rows={5}
            className="w-full rounded-card border border-honey/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-sub/50 focus:border-honey focus:outline-none"
          />
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold text-ink-sub">
            이메일 (선택)
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="답변 받으실 이메일"
            className="w-full rounded-card border border-honey/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-sub/50 focus:border-honey focus:outline-none"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={!message.trim() || sending}
        className="tap-target w-full rounded-card bg-honey py-4 text-base font-semibold text-white shadow-play active:scale-[0.98] disabled:opacity-40 disabled:active:scale-100"
      >
        {sending ? "보내는 중..." : "보내기"}
      </button>

      {toast && (
        <div
          className={`rounded-card p-4 text-center text-sm font-semibold animate-pop ${
            toast.ok
              ? "bg-sage-tint text-sage-dark"
              : "bg-coral-tint text-coral-dark"
          }`}
        >
          {toast.text}
        </div>
      )}
    </section>
  );
}
