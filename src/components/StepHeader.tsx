"use client";

type Props = {
  step: number;
  totalSteps: number;
  label: string;
  onBack?: () => void;
};

export function StepHeader({ step, totalSteps, label, onBack }: Props) {
  const pct = Math.round((step / totalSteps) * 100);
  return (
    <header className="sticky top-0 z-10 bg-cream/95 px-4 pt-3 pb-2 backdrop-blur">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          disabled={!onBack}
          className="tap-target -ml-2 rounded-pill px-2 text-2xl text-ink-sub disabled:opacity-30"
          aria-label="뒤로가기"
        >
          ‹
        </button>
        <span className="rounded-pill bg-honey-tint px-3 py-1 text-xs font-semibold text-honey-dark">
          Step {step}/{totalSteps} · {label}
        </span>
        <span className="w-8" />
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-pill bg-honey-tint">
        <div
          className="h-full rounded-pill bg-gradient-to-r from-honey to-sun transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </header>
  );
}
