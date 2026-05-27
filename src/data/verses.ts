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

export type Prayer = {
  text: string;
  audioHint: string;
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
  prayer: { ko: Prayer; en: Prayer };
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
  prayer: {
    ko: {
      text: "하나님, 제가 무서울 때 하나님을 믿을게요. 항상 저와 함께해 주셔서 감사합니다. 아멘.",
      audioHint: "눈을 감고, 작은 목소리로 따라 말해보세요",
    },
    en: {
      text: "God, when I am afraid, I will trust in You. Thank You for always being with me. Amen.",
      audioHint: "Close your eyes and whisper along",
    },
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

export const philippians4_4: Verse = {
  id: "philippians-4-4",
  reference: { display: "Philippians 4:4", displayKo: "빌립보서 4:4" },
  theme: { en: "Joy", ko: "기쁨" },
  text: {
    ko: {
      full: "주 안에서 항상 기뻐하라 내가 다시 말하노니 기뻐하라",
      translation: "개역한글",
    },
    en: {
      full: "Rejoice in the Lord always! Again I will say, \"Rejoice!\"",
      translation: "WEB",
    },
  },
  imageAssociation: {
    sequence: [
      { emoji: "🎉", keyword: "rejoice", keywordKo: "기뻐하라" },
      { emoji: "✝️", keyword: "the Lord", keywordKo: "주 안에서" },
      { emoji: "🔁", keyword: "again", keywordKo: "다시" },
      { emoji: "😄", keyword: "rejoice!", keywordKo: "기뻐하라!" },
    ],
    simpleExplanation: {
      en: "Be happy because God loves us! So happy we say it twice!",
      ko: "하나님이 사랑하시니까 기뻐해요! 너무 기뻐서 두 번 말해요!",
    },
  },
  chunks: {
    ko: ["주 안에서 항상 기뻐하라", "내가 다시 말하노니", "기뻐하라"],
    en: ["Rejoice in the Lord always!", "Again I will say,", "\"Rejoice!\""],
  },
  prayer: {
    ko: {
      text: "하나님, 주 안에서 항상 기쁘게 해주세요. 슬플 때도 기뻐할 수 있게 도와주세요. 감사합니다. 아멘.",
      audioHint: "눈을 감고, 작은 목소리로 따라 말해보세요",
    },
    en: {
      text: "God, help me to always be joyful in You. Even when I'm sad, help me find joy. Thank You. Amen.",
      audioHint: "Close your eyes and whisper along",
    },
  },
  games: {
    fillInBlank: {
      ko: {
        template: "주 안에서 항상 {blank} 내가 다시 말하노니 {blank}",
        blanks: [
          {
            answer: "기뻐하라",
            answerEmoji: "🎉",
            options: [
              { emoji: "🎉", label: "rejoice", labelKo: "기뻐하라", correct: true },
              { emoji: "😢", label: "cry", labelKo: "울어라", correct: false },
              { emoji: "😴", label: "sleep", labelKo: "자라", correct: false },
            ],
          },
          {
            answer: "기뻐하라",
            answerEmoji: "😄",
            options: [
              { emoji: "😄", label: "rejoice", labelKo: "기뻐하라", correct: true },
              { emoji: "😡", label: "angry", labelKo: "화내라", correct: false },
              { emoji: "🤫", label: "quiet", labelKo: "조용하라", correct: false },
            ],
          },
        ],
      },
      en: {
        template: "{blank} in the Lord always! Again I will say, \"{blank}\"",
        blanks: [
          {
            answer: "Rejoice",
            answerEmoji: "🎉",
            options: [
              { emoji: "🎉", label: "Rejoice", correct: true },
              { emoji: "😢", label: "Cry", correct: false },
              { emoji: "😴", label: "Sleep", correct: false },
            ],
          },
          {
            answer: "Rejoice!",
            answerEmoji: "😄",
            options: [
              { emoji: "😄", label: "Rejoice!", correct: true },
              { emoji: "😡", label: "Complain!", correct: false },
              { emoji: "🤫", label: "Be quiet!", correct: false },
            ],
          },
        ],
      },
    },
  },
};

export const psalm150_6: Verse = {
  id: "psalm-150-6",
  reference: { display: "Psalm 150:6", displayKo: "시편 150:6" },
  theme: { en: "Praise", ko: "찬양" },
  text: {
    ko: {
      full: "호흡이 있는 자마다 여호와를 찬양할찌어다 할렐루야",
      translation: "개역한글",
    },
    en: {
      full: "Let everything that has breath praise the LORD! Hallelujah!",
      translation: "WEB",
    },
  },
  imageAssociation: {
    sequence: [
      { emoji: "🌬️", keyword: "breath", keywordKo: "호흡" },
      { emoji: "🎵", keyword: "praise", keywordKo: "찬양" },
      { emoji: "🙌", keyword: "the LORD", keywordKo: "여호와" },
      { emoji: "🎉", keyword: "Hallelujah", keywordKo: "할렐루야" },
    ],
    simpleExplanation: {
      en: "Everyone who breathes can praise God! Hallelujah!",
      ko: "숨 쉬는 모든 사람이 하나님을 찬양해요! 할렐루야!",
    },
  },
  chunks: {
    ko: ["호흡이 있는 자마다", "여호와를 찬양할찌어다", "할렐루야"],
    en: ["Let everything that has breath", "praise the LORD!", "Hallelujah!"],
  },
  prayer: {
    ko: {
      text: "하나님, 숨 쉴 수 있는 것도 감사해요. 매일 하나님을 찬양할게요. 할렐루야! 아멘.",
      audioHint: "눈을 감고, 작은 목소리로 따라 말해보세요",
    },
    en: {
      text: "God, thank You for every breath I take. I will praise You every day. Hallelujah! Amen.",
      audioHint: "Close your eyes and whisper along",
    },
  },
  games: {
    fillInBlank: {
      ko: {
        template: "{blank} 있는 자마다 여호와를 {blank} 할렐루야",
        blanks: [
          {
            answer: "호흡이",
            answerEmoji: "🌬️",
            options: [
              { emoji: "🌬️", label: "breath", labelKo: "호흡이", correct: true },
              { emoji: "💪", label: "strength", labelKo: "힘이", correct: false },
              { emoji: "👀", label: "eyes", labelKo: "눈이", correct: false },
            ],
          },
          {
            answer: "찬양할찌어다",
            answerEmoji: "🎵",
            options: [
              { emoji: "🎵", label: "praise", labelKo: "찬양할찌어다", correct: true },
              { emoji: "🤫", label: "be quiet", labelKo: "잠잠할찌어다", correct: false },
              { emoji: "👋", label: "goodbye", labelKo: "떠날찌어다", correct: false },
            ],
          },
        ],
      },
      en: {
        template: "Let everything that has {blank} praise the LORD! {blank}",
        blanks: [
          {
            answer: "breath",
            answerEmoji: "🌬️",
            options: [
              { emoji: "🌬️", label: "breath", correct: true },
              { emoji: "💪", label: "strength", correct: false },
              { emoji: "👀", label: "sight", correct: false },
            ],
          },
          {
            answer: "Hallelujah!",
            answerEmoji: "🎉",
            options: [
              { emoji: "🎉", label: "Hallelujah!", correct: true },
              { emoji: "👋", label: "Goodbye!", correct: false },
              { emoji: "😴", label: "Goodnight!", correct: false },
            ],
          },
        ],
      },
    },
  },
};

export const VERSES: Verse[] = [psalm56_3, philippians4_4, psalm150_6];
