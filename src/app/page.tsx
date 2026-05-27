"use client";

import { useState } from "react";
import { psalm56_3, type Lang } from "@/data/verses";
import { StepHeader } from "@/components/StepHeader";
import { ImageStep } from "@/components/flow/ImageStep";
import { SongStep } from "@/components/flow/SongStep";
import { ChunkStep } from "@/components/flow/ChunkStep";
import { GameStep } from "@/components/flow/GameStep";
import { PrayerStep } from "@/components/flow/PrayerStep";
import { DoneStep } from "@/components/flow/DoneStep";
import { stopSpeaking } from "@/lib/speak";

type Step = "image" | "song" | "chunk" | "game" | "prayer" | "done";

const STEP_ORDER: Step[] = ["image", "song", "chunk", "game", "prayer", "done"];

const STEP_LABEL: Record<Step, string> = {
  image: "그림으로 이해",
  song: "노래로 만나기",
  chunk: "청크로 쌓기",
  game: "게임으로 외우기",
  prayer: "기도로 새기기",
  done: "오늘의 완료",
};

export default function Page() {
  const [step, setStep] = useState<Step>("image");
  const [lang, setLang] = useState<Lang>("ko");
  const [stars, setStars] = useState(0);

  const stepIndex = STEP_ORDER.indexOf(step);

  const goto = (s: Step) => {
    stopSpeaking();
    setStep(s);
  };

  const restart = () => {
    setStars(0);
    setLang("ko");
    goto("image");
  };

  return (
    <main className="mx-auto flex min-h-dvh max-w-[480px] flex-col bg-cream">
      <StepHeader
        step={stepIndex + 1}
        totalSteps={STEP_ORDER.length}
        label={STEP_LABEL[step]}
        onBack={stepIndex > 0 && step !== "done" ? () => goto(STEP_ORDER[stepIndex - 1]) : undefined}
      />

      {step === "image" && (
        <ImageStep
          verse={psalm56_3}
          lang={lang}
          onLangChange={setLang}
          onNext={() => goto("song")}
        />
      )}
      {step === "song" && (
        <SongStep
          verse={psalm56_3}
          lang={lang}
          onLangChange={setLang}
          onNext={() => goto("chunk")}
        />
      )}
      {step === "chunk" && (
        <ChunkStep
          verse={psalm56_3}
          lang={lang}
          onLangChange={setLang}
          onNext={() => goto("game")}
          onBack={() => goto("song")}
        />
      )}
      {step === "game" && (
        <GameStep
          verse={psalm56_3}
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
          verse={psalm56_3}
          lang={lang}
          onLangChange={setLang}
          onNext={() => goto("done")}
          onBack={() => goto("game")}
        />
      )}
      {step === "done" && (
        <DoneStep verse={psalm56_3} stars={stars} onRestart={restart} />
      )}
    </main>
  );
}
