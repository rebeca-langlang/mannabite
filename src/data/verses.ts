export type Lang = "ko" | "en";

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

export type Verse = {
  id: string;
  reference: { display: string; displayKo: string };
  theme: { en: string; ko: string };
  text: {
    ko: { full: string; translation: string };
    en: { full: string; translation: string };
  };
  imageAssociation: {
    sequence: { emoji: string; keyword: string; keywordKo: string }[];
    simpleExplanation: { en: string; ko: string };
  };
  chunks: { ko: string[]; en: string[] };
  games: {
    fillInBlank: { ko: FillInBlank; en: FillInBlank };
  };
};

export const psalm56_3: Verse = {
  id: "psalm-56-3",
  reference: { display: "Psalm 56:3", displayKo: "시편 56:3" },
  theme: { en: "When I'm afraid", ko: "두려울 때" },
  text: {
    ko: {
      full: "내가 두려워하는 날에는 주를 의지하리이다",
      translation: "개역한글",
    },
    en: {
      full: "When I am afraid, I will put my trust in you.",
      translation: "WEB",
    },
  },
  imageAssociation: {
    sequence: [
      { emoji: "😨", keyword: "afraid", keywordKo: "두려워하는" },
      { emoji: "🙏", keyword: "trust", keywordKo: "의지" },
      { emoji: "😊", keyword: "peace", keywordKo: "평안" },
    ],
    simpleExplanation: {
      en: "When I'm scared, I trust God and feel safe!",
      ko: "무서울 때, 하나님을 믿으면 마음이 편해져요!",
    },
  },
  chunks: {
    ko: ["내가 두려워하는 날에는", "주를 의지하리이다"],
    en: ["When I am afraid,", "I will put my trust in you."],
  },
  games: {
    fillInBlank: {
      ko: {
        template: "{blank} 날에는 주를 {blank} 하리이다",
        blanks: [
          {
            answer: "두려워하는",
            answerEmoji: "😨",
            options: [
              { emoji: "😨", label: "afraid", labelKo: "두려워하는", correct: true },
              { emoji: "😊", label: "happy", labelKo: "기쁜", correct: false },
              { emoji: "😡", label: "angry", labelKo: "화나는", correct: false },
            ],
          },
          {
            answer: "의지",
            answerEmoji: "🙏",
            options: [
              { emoji: "🙏", label: "trust", labelKo: "의지", correct: true },
              { emoji: "💪", label: "strong", labelKo: "강한", correct: false },
              { emoji: "🏃", label: "run", labelKo: "도망", correct: false },
            ],
          },
        ],
      },
      en: {
        template: "When I am {blank}, I will put my {blank} in you.",
        blanks: [
          {
            answer: "afraid",
            answerEmoji: "😨",
            options: [
              { emoji: "😨", label: "afraid", correct: true },
              { emoji: "😊", label: "happy", correct: false },
              { emoji: "😡", label: "angry", correct: false },
            ],
          },
          {
            answer: "trust",
            answerEmoji: "🙏",
            options: [
              { emoji: "🙏", label: "trust", correct: true },
              { emoji: "💪", label: "strength", correct: false },
              { emoji: "🏃", label: "run away", correct: false },
            ],
          },
        ],
      },
    },
  },
};
