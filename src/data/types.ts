export type Lang = "ko" | "en";

// ── Avatars ──

export type Avatar = {
  id: string;
  nameKo: string;
  type: "person" | "animal";
  emoji: string;
  image: string;
};

// ── Characters ──

export type CharacterStage = {
  stage: number;
  nameKo: string;
  dayFrom: number;
  image: string;
};

export type CharacterItem = {
  slot: number;
  nameKo: string;
  emoji: string;
  icon: string;
  reference: string;
};

export type Character = {
  id: string;
  nameKo: string;
  stages: CharacterStage[];
  itemsAreDraft?: boolean;
  items: CharacterItem[];
};

// ── Plan ──

export type PlanVerse = {
  id: string;
  day: number;
};

export type Plan = {
  id: string;
  title: string;
  titleKo: string;
  totalDays: number;
  characterId: string;
  verses: PlanVerse[];
};

// ── Verses ──

export type EmojiOption = {
  emoji: string;
  label: string;
  labelKo?: string;
  correct: boolean;
};

export type Blank = {
  answer: string;
  answerEmoji: string;
  options: EmojiOption[];
};

export type FillInBlank = {
  template: string;
  blanks: Blank[];
};

export type FirstLetterWord = {
  word: string;
  hint: string;
};

export type FirstLetterGame = {
  ko: FirstLetterWord[];
  en: FirstLetterWord[];
};

export type ImageSequenceItem = {
  emoji: string;
  keyword: string;
  keywordKo: string;
  label: string;
};

export type Song = {
  ko: string;
  en: string;
};

export type Tts = {
  ko: string;
  en: string;
  chunksKo: string[];
  chunksEn: string[];
};

export type RawPrayer = {
  ko: string;
  en: string;
  audioKo: string;
  audioEn: string;
};

export type Prayer = {
  ko: { text: string; audioHint: string };
  en: { text: string; audioHint: string };
  audioKo: string;
  audioEn: string;
};

export type Verse = {
  id: string;
  reference: {
    book: string;
    bookKo: string;
    chapter: number;
    verse: number;
    display: string;
    displayKo: string;
  };
  theme: { en: string; ko: string };
  text: {
    ko: { full: string; translation: string };
    en: { full: string; translation: string };
  };
  song: Song;
  imageAssociation: {
    sequence: ImageSequenceItem[];
    simpleExplanation: { en: string; ko: string };
  };
  chunks: { ko: string[]; en: string[] };
  prayer: Prayer;
  tts: Tts;
  games: {
    fillInBlank: { ko: FillInBlank; en: FillInBlank };
    firstLetter: FirstLetterGame;
  };
};

// ── Root ──

export type MannaBiteData = {
  version: string;
  avatars: Avatar[];
  characters: Character[];
  plan: Plan;
  verses: Verse[];
};
