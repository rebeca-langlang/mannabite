export type CharacterGender = "boy" | "girl";
export type SkinTone = "light" | "medium" | "dark";

export type Character = {
  gender: CharacterGender;
  skinTone: SkinTone;
};

export type SaveData = {
  character: Character;
  currentDay: number;
  completedDays: number[];
  collectedItemSlots: number[];
  collectedChantIds: string[];
  totalStars: number;
  streak: number;
  lastPlayedDate: string;
};

const STORAGE_KEY = "mannabite-save";

export function loadSave(): SaveData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const data = JSON.parse(raw) as SaveData;
    if (!data.collectedItemSlots) data.collectedItemSlots = [];
    if (!data.collectedChantIds) data.collectedChantIds = [];
    return data;
  } catch {
    return null;
  }
}

export function writeSave(data: SaveData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getToday(): string {
  return new Date().toISOString().split("T")[0];
}

export function getYesterday(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().split("T")[0];
}

export function calcStreak(prev: SaveData): number {
  const today = getToday();
  if (prev.lastPlayedDate === today) return prev.streak;
  if (prev.lastPlayedDate === getYesterday()) return prev.streak + 1;
  return 1;
}

export const CHARACTER_EMOJI: Record<CharacterGender, Record<SkinTone, string>> = {
  boy: { light: "👦🏻", medium: "👦🏽", dark: "👦🏿" },
  girl: { light: "👧🏻", medium: "👧🏽", dark: "👧🏿" },
};

export const CHARACTER_IMAGE: Record<CharacterGender, string> = {
  boy: "/characters/boy.png",
  girl: "/characters/girl.png",
};

const LEVELS = [
  { min: 0, title: "말씀 새싹" },
  { min: 10, title: "말씀 탐험가" },
  { min: 30, title: "말씀 전사" },
  { min: 60, title: "말씀 용사" },
  { min: 100, title: "말씀 마스터" },
];

export function getLevel(stars: number): { level: number; title: string } {
  let result = { level: 1, title: LEVELS[0].title };
  for (let i = 0; i < LEVELS.length; i++) {
    if (stars >= LEVELS[i].min) {
      result = { level: i + 1, title: LEVELS[i].title };
    }
  }
  return result;
}

export function getVerseIndex(day: number): number {
  return Math.min(day - 1, 9);
}
