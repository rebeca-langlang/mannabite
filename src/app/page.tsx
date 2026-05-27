"use client";

import { useState } from "react";
import { VERSES, type Lang, type Verse } from "@/data/verses";
import { StepHeader } from "@/components/StepHeader";
import { ImageStep } from "@/components/flow/ImageStep";
import { SongStep } from "@/components/flow/SongStep";
import { ChunkStep } from "@/components/flow/ChunkStep";
import { GameStep } from "@/components/flow/GameStep";
import { PrayerStep } from "@/components/flow/PrayerStep";
import { DoneStep } from "@/components/flow/DoneStep";
import { stopSpeaking } from "@/lib/speak";

type Step = "select" | "image" | "song" | "chunk" | "game" | "prayer" | "done";

const FLOW_STEPS: Step[] = ["image", "song", "chunk", "game", "prayer", "done"];

const STEP_LABEL: Record<Step, string> = {
  select: "구절 선택",
  image: "그림으로 이해",
  song: "노래로 만나기",
  chunk: "청크로 쌓기",
  game: "게임으로 외우기",
  prayer: "기도로 새기기",
  done: "오늘의 완료",
};

function VerseSelect({ onSelect }: { onSelect: (v: Verse) => void }) {
  return (
    <section className="flex flex-col gap-5 px-4 pb-28 pt-6">
      <h1 className="font-display text-2xl font-extrabold text-ink">
        오늘의 말씀
      </h1>
      <p className="text-sm text-ink-sub">어떤 구절을 외워볼까요?</p>

      <div className="flex flex-col gap-3">
        {VERSES.map((v, i) => (
          <button
            key={v.id}
            type="button"
            onClick={() => onSelect(v)}
            className="flex items-center gap-4 rounded-card bg-white p-4 text-left shadow-play transition-all active:scale-[0.98]"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-honey text-lg font-bold text-white">
              {i + 1}
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-ink">
                {v.reference.displayKo}
              </p>
              <p className="mt-0.5 text-xs text-ink-sub">{v.theme.ko}</p>
              <p className="mt-1 text-xs leading-relaxed text-ink-sub">
                {v.text.ko.full}
              </p>
            </div>
            <span className="text-honey-dark">→</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default function Page() {
  const [step, setStep] = useState<Step>("select");
  const [verse, setVerse] = useState<Verse>(VERSES[0]);
  const [lang, setLang] = useState<Lang>("ko");
  const [stars, setStars] = useState(0);

  const flowIndex = FLOW_STEPS.indexOf(step);

  const goto = (s: Step) => {
    stopSpeaking();
    setStep(s);
  };

  const handleSelect = (v: Verse) => {
    setVerse(v);
    setLang("ko");
    setStars(0);
    goto("image");
  };

  const restart = () => {
    setStars(0);
    setLang("ko");
    goto("select");
  };

  return (
    <main className="mx-auto flex min-h-dvh max-w-[480px] flex-col bg-cream">
      {step !== "select" && (
        <StepHeader
          step={flowIndex + 1}
          totalSteps={FLOW_STEPS.length}
          label={STEP_LABEL[step]}
          onBack={flowIndex > 0 && step !== "done" ? () => goto(FLOW_STEPS[flowIndex - 1]) : undefined}
        />
      )}

      {step === "select" && <VerseSelect onSelect={handleSelect} />}

      {step === "image" && (
        <ImageStep
          verse={verse}
          lang={lang}
          onLangChange={setLang}
          onNext={() => goto("song")}
        />
      )}
      {step === "song" && (
        <SongStep
          verse={verse}
          lang={lang}
          onLangChange={setLang}
          onNext={() => goto("chunk")}
        />
      )}
      {step === "chunk" && (
        <ChunkStep
          verse={verse}
          lang={lang}
          onLangChange={setLang}
          onNext={() => goto("game")}
          onBack={() => goto("song")}
        />
      )}
      {step === "game" && (
        <GameStep
          verse={verse}
          lang={lang}
          onLangChange={setLang}
          onBack={() => goto("chunk")}
          onComplete={(earned) => {
            setStars(earned);
            goto("prayer");
          }}
        />
      )}
      {step === "prayer" && (
        <PrayerStep
          verse={verse}
          lang={lang}
          onLangChange={setLang}
          onNext={() => goto("done")}
          onBack={() => goto("game")}
        />
      )}
      {step === "done" && (
        <DoneStep verse={verse} stars={stars} onRestart={restart} />
      )}
    </main>
  );
}
