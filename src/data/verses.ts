import rawData from "./mannabite-data.json";
import type { Verse, RawPrayer, MannaBiteData } from "./types";

export type { Lang, Verse, Avatar, Character, Plan, EmojiOption, Blank, FillInBlank } from "./types";

const data = rawData as unknown as Omit<MannaBiteData, "verses"> & {
  verses: Array<Omit<Verse, "prayer"> & { prayer: RawPrayer }>;
};

const AUDIO_HINT_KO = "눈을 감고, 작은 목소리로 따라 말해보세요";
const AUDIO_HINT_EN = "Close your eyes and whisper along";

export const VERSES: Verse[] = data.verses.map((v) => ({
  ...v,
  prayer: {
    ko: { text: v.prayer.ko, audioHint: AUDIO_HINT_KO },
    en: { text: v.prayer.en, audioHint: AUDIO_HINT_EN },
    audioKo: v.prayer.audioKo,
    audioEn: v.prayer.audioEn,
  },
}));

export const PLAN = data.plan;
export const AVATARS = data.avatars;
export const CHARACTERS = data.characters;
