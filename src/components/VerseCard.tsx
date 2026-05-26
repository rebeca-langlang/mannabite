import type { Lang, Verse } from "@/data/verses";

type Props = {
  verse: Verse;
  lang: Lang;
  size?: "sm" | "md" | "lg";
};

export function VerseCard({ verse, lang, size = "md" }: Props) {
  const text = verse.text[lang];
  const ref = lang === "ko" ? verse.reference.displayKo : verse.reference.display;
  const sizeClass =
    size === "lg"
      ? "text-2xl md:text-3xl"
      : size === "sm"
      ? "text-base"
      : "text-xl";
  return (
    <div className="rounded-card bg-honey-tint p-5 text-center">
      <p className={`verse-text ${sizeClass} font-medium text-ink`}>
        {text.full}
      </p>
      <p className="mt-3 text-xs text-ink-sub">
        {ref} ({text.translation})
      </p>
    </div>
  );
}
