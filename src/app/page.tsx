"use client";

import { useState } from "react";
import { psalm56_3, type Lang } from "@/data/verses";
import { StepHeader } from "@/components/StepHeader";
import { SongStep } from "@/components/flow/SongStep";
import { ImageStep } from "@/components/flow/ImageStep";
import { ChunkStep } from "@/components/flow/ChunkStep";
import { GameStep } from "@/components/flow/GameStep";
import { DoneStep } from "@/components/flow/DoneStep";
import { stopSpeaking } from "@/lib/speak";

type Step = "song" | "image" | "chunk" | "game" | "done";

const STEP_ORDER: Step[] = ["song", "image", "chunk", "game", "done"];

const STEP_LABEL: Record<Step, string> = {
  song: "노래로 만나기",
  image: "그림으로 이해",
  chunk: "청크로 쌓기",
  game: "게임으로 외우기",
  done: "오늘의 완료",
};

export default function Page() {
  const [step, setStep] = useState<Step>("song");
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
    goto("song");
  };

  return (
    <main className="mx-auto flex min-h-dvh max-w-[480px] flex-col bg-cream">
      <StepHeader
        step={stepIndex + 1}
        totalSteps={STEP_ORDER.length}
        label={STEP_LABEL[step]}
        onBack={stepIndex > 0 && step !== "done" ? () => goto(STEP_ORDER[stepIndex - 1]) : undefined}
      />

      {step === "song" && (
        <SongStep
          verse={psalm56_3}
          lang={lang}
          onLangChange={setLang}
          onNext={() => goto("image")}
        />
      )}
      {step === "image" && (
        <ImageStep
          verse={psalm56_3}
          lang={lang}
          onLangChange={setLang}
          onNext={() => goto("chunk")}
          onBack={() => goto("song")}
        />
      )}
      {step === "chunk" && (
        <ChunkStep
          verse={psalm56_3}
          lang={lang}
          onLangChange={setLang}
          onNext={() => goto("game")}
          onBack={() => goto("image")}
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
            goto("done");
          }}
        />
      )}
      {step === "done" && (
        <DoneStep verse={psalm56_3} stars={stars} onRestart={restart} />
      )}
    </main>
  );
}
