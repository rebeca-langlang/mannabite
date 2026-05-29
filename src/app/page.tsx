"use client";

import { useEffect, useState } from "react";
import { VERSES, CHARACTERS, type Lang } from "@/data/verses";
import {
  calcStreak,
  getToday,
  getVerseIndex,
  loadSave,
  writeSave,
  type Character,
  type SaveData,
} from "@/lib/storage";
import { StepHeader } from "@/components/StepHeader";
import { CharacterSelect } from "@/components/CharacterSelect";
import { HomeScreen } from "@/components/HomeScreen";
import { Settings } from "@/components/Settings";
import { ImageStep } from "@/components/flow/ImageStep";
import { SongStep } from "@/components/flow/SongStep";
import { ChunkStep } from "@/components/flow/ChunkStep";
import { GameStep } from "@/components/flow/GameStep";
import { FirstLetterStep } from "@/components/flow/FirstLetterStep";
import { PrayerStep } from "@/components/flow/PrayerStep";
import { DoneStep } from "@/components/flow/DoneStep";
import { DavidCollection } from "@/components/DavidCollection";
import { stopSpeaking } from "@/lib/speak";

type Screen = "loading" | "onboarding" | "home" | "settings" | "collection" | "flow";
type FlowStep = "image" | "song" | "chunk" | "game" | "firstLetter" | "prayer" | "done";

const FLOW_STEPS: FlowStep[] = ["image", "song", "chunk", "game", "firstLetter", "prayer", "done"];

const STEP_LABEL: Record<FlowStep, string> = {
  image: "그림으로 이해",
  song: "노래로 만나기",
  chunk: "청크로 쌓기",
  game: "게임으로 외우기",
  firstLetter: "초성으로 복습",
  prayer: "기도로 새기기",
  done: "오늘의 완료",
};

function newSave(character: Character): SaveData {
  return {
    character,
    currentDay: 1,
    completedDays: [],
    collectedItemSlots: [],
    collectedChantIds: [],
    totalStars: 0,
    streak: 0,
    lastPlayedDate: "",
  };
}

type UnlockedItem = { emoji: string; nameKo: string } | null;

export default function Page() {
  const [screen, setScreen] = useState<Screen>("loading");
  const [save, setSave] = useState<SaveData | null>(null);
  const [flowStep, setFlowStep] = useState<FlowStep>("image");
  const [lang, setLang] = useState<Lang>("ko");
  const [stars, setStars] = useState(0);
  const [unlockedItem, setUnlockedItem] = useState<UnlockedItem>(null);

  useEffect(() => {
    const loaded = loadSave();
    if (loaded) {
      setSave(loaded);
      setScreen("home");
    } else {
      setScreen("onboarding");
    }
  }, []);

  const persist = (data: SaveData) => {
    setSave(data);
    writeSave(data);
  };

  const handleCharacterDone = (character: Character) => {
    const data = save
      ? { ...save, character }
      : newSave(character);
    persist(data);
    setScreen("home");
  };

  const handleStartFlow = () => {
    setFlowStep("image");
    setLang("ko");
    setStars(0);
    setScreen("flow");
  };

  const gotoFlow = (s: FlowStep) => {
    stopSpeaking();
    setFlowStep(s);
  };

  const handleGameComplete = (earned: number) => {
    setStars(earned);
    gotoFlow("firstLetter");
  };

  const handlePrayerDone = () => {
    if (!save) return;
    const completedDay = save.currentDay;
    const streak = calcStreak(save);
    const verseId = VERSES[getVerseIndex(completedDay)]?.id;
    const david = CHARACTERS[0];
    const item = david?.items.find((it) => it.slot === completedDay);

    const updated: SaveData = {
      ...save,
      completedDays: [...save.completedDays, completedDay],
      collectedItemSlots: save.collectedItemSlots.includes(completedDay)
        ? save.collectedItemSlots
        : [...save.collectedItemSlots, completedDay],
      collectedChantIds:
        verseId && !save.collectedChantIds.includes(verseId)
          ? [...save.collectedChantIds, verseId]
          : save.collectedChantIds,
      currentDay: completedDay + 1,
      totalStars: save.totalStars + stars,
      streak,
      lastPlayedDate: getToday(),
    };
    setUnlockedItem(item ? { emoji: item.emoji, nameKo: item.nameKo } : null);
    persist(updated);
    gotoFlow("done");
  };

  const handleHome = () => {
    stopSpeaking();
    setScreen("home");
  };

  const handleReset = () => {
    if (!save) return;
    const data = newSave(save.character);
    persist(data);
    setScreen("home");
  };

  if (screen === "loading") {
    return (
      <main className="mx-auto flex min-h-dvh max-w-[480px] items-center justify-center bg-cream">
        <p className="text-lg text-ink-sub">로딩 중...</p>
      </main>
    );
  }

  if (screen === "onboarding" || (screen === "settings" && !save)) {
    return (
      <main className="mx-auto flex min-h-dvh max-w-[480px] flex-col bg-cream">
        <CharacterSelect onComplete={handleCharacterDone} />
      </main>
    );
  }

  if (!save) return null;

  if (screen === "settings") {
    return (
      <main className="mx-auto flex min-h-dvh max-w-[480px] flex-col bg-cream">
        <Settings
          save={save}
          onChangeCharacter={() => setScreen("onboarding")}
          onReset={handleReset}
          onClose={handleHome}
        />
      </main>
    );
  }

  if (screen === "collection") {
    return (
      <main className="mx-auto flex min-h-dvh max-w-[480px] flex-col bg-cream">
        <DavidCollection save={save} onBack={handleHome} />
      </main>
    );
  }

  if (screen === "home") {
    return (
      <main className="mx-auto flex min-h-dvh max-w-[480px] flex-col bg-cream">
        <HomeScreen
          save={save}
          onStart={handleStartFlow}
          onSettings={() => setScreen("settings")}
          onCollection={() => setScreen("collection")}
        />
      </main>
    );
  }

  const verseIndex = getVerseIndex(save.currentDay);
  const verse = VERSES[verseIndex];
  const flowIndex = FLOW_STEPS.indexOf(flowStep);

  return (
    <main className="mx-auto flex min-h-dvh max-w-[480px] flex-col bg-cream">
      <StepHeader
        step={flowIndex + 1}
        totalSteps={FLOW_STEPS.length}
        label={STEP_LABEL[flowStep]}
        onBack={
          flowIndex > 0 && flowStep !== "done"
            ? () => gotoFlow(FLOW_STEPS[flowIndex - 1])
            : flowStep === "image"
            ? handleHome
            : undefined
        }
      />

      {flowStep === "image" && (
        <ImageStep
          verse={verse}
          lang={lang}
          onLangChange={setLang}
          onNext={() => gotoFlow("song")}
        />
      )}
      {flowStep === "song" && (
        <SongStep
          verse={verse}
          lang={lang}
          onLangChange={setLang}
          onNext={() => gotoFlow("chunk")}
        />
      )}
      {flowStep === "chunk" && (
        <ChunkStep
          verse={verse}
          lang={lang}
          onLangChange={setLang}
          onNext={() => gotoFlow("game")}
          onBack={() => gotoFlow("song")}
        />
      )}
      {flowStep === "game" && (
        <GameStep
          verse={verse}
          lang={lang}
          onLangChange={setLang}
          onBack={() => gotoFlow("chunk")}
          onComplete={handleGameComplete}
        />
      )}
      {flowStep === "firstLetter" && (
        <FirstLetterStep
          verse={verse}
          lang={lang}
          onLangChange={setLang}
          onNext={() => gotoFlow("prayer")}
          onBack={() => gotoFlow("game")}
        />
      )}
      {flowStep === "prayer" && (
        <PrayerStep
          verse={verse}
          lang={lang}
          onLangChange={setLang}
          onNext={handlePrayerDone}
          onBack={() => gotoFlow("game")}
        />
      )}
      {flowStep === "done" && (
        <DoneStep
          verse={verse}
          stars={stars}
          streak={save.streak}
          unlockedItem={unlockedItem}
          onHome={handleHome}
        />
      )}
    </main>
  );
}
