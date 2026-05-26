"use client";

import type { Lang } from "@/data/verses";

type Props = {
  lang: Lang;
  onChange: (lang: Lang) => void;
};

export function LangToggle({ lang, onChange }: Props) {
  return (
    <div className="mx-auto inline-flex items-center rounded-pill bg-honey-tint p-1 text-sm font-semibold">
      {(["ko", "en"] as const).map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => onChange(l)}
          className={`tap-target rounded-pill px-4 transition-colors ${
            lang === l
              ? "bg-honey text-white"
              : "bg-transparent text-honey-dark"
          }`}
        >
          {l === "ko" ? "한국어" : "English"}
        </button>
      ))}
    </div>
  );
}
