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

export const psalm118_24: Verse = {
  id: "psalm-118-24",
  reference: { display: "Psalm 118:24", displayKo: "시편 118:24" },
  theme: { en: "Daily joy", ko: "매일의 기쁨" },
  text: {
    ko: {
      full: "이 날은 여호와의 정하신 것이라 이 날에 우리가 즐거워하고 기뻐하리로다",
      translation: "개역한글",
    },
    en: {
      full: "This is the day that the LORD has made. We will rejoice and be glad in it!",
      translation: "WEB",
    },
  },
  imageAssociation: {
    sequence: [
      { emoji: "☀️", keyword: "this day", keywordKo: "이 날" },
      { emoji: "🎁", keyword: "the LORD made", keywordKo: "여호와의 정하신" },
      { emoji: "🥳", keyword: "rejoice", keywordKo: "즐거워하고" },
      { emoji: "🎶", keyword: "be glad", keywordKo: "기뻐하리로다" },
    ],
    simpleExplanation: {
      en: "Today is a gift from God! Let's be happy and enjoy it!",
      ko: "오늘은 하나님이 주신 선물이에요! 기뻐하며 즐겨요!",
    },
  },
  chunks: {
    ko: ["이 날은 여호와의 정하신 것이라", "이 날에 우리가", "즐거워하고 기뻐하리로다"],
    en: ["This is the day that the LORD has made.", "We will rejoice", "and be glad in it!"],
  },
  prayer: {
    ko: {
      text: "하나님, 오늘 하루를 주셔서 감사해요. 오늘도 기쁘고 즐거운 하루가 되게 해주세요. 아멘.",
      audioHint: "눈을 감고, 작은 목소리로 따라 말해보세요",
    },
    en: {
      text: "God, thank You for today. Help me to be happy and grateful all day long. Amen.",
      audioHint: "Close your eyes and whisper along",
    },
  },
  games: {
    fillInBlank: {
      ko: {
        template: "이 날은 여호와의 {blank} 것이라 이 날에 우리가 즐거워하고 {blank}",
        blanks: [
          {
            answer: "정하신",
            answerEmoji: "🎁",
            options: [
              { emoji: "🎁", label: "made", labelKo: "정하신", correct: true },
              { emoji: "🚫", label: "denied", labelKo: "거부하신", correct: false },
              { emoji: "😴", label: "forgot", labelKo: "잊으신", correct: false },
            ],
          },
          {
            answer: "기뻐하리로다",
            answerEmoji: "🎶",
            options: [
              { emoji: "🎶", label: "be glad", labelKo: "기뻐하리로다", correct: true },
              { emoji: "😢", label: "cry", labelKo: "울리로다", correct: false },
              { emoji: "😴", label: "sleep", labelKo: "자리로다", correct: false },
            ],
          },
        ],
      },
      en: {
        template: "This is the {blank} that the LORD has made. We will rejoice and be {blank} in it!",
        blanks: [
          {
            answer: "day",
            answerEmoji: "☀️",
            options: [
              { emoji: "☀️", label: "day", correct: true },
              { emoji: "🌙", label: "night", correct: false },
              { emoji: "🌧️", label: "storm", correct: false },
            ],
          },
          {
            answer: "glad",
            answerEmoji: "🥳",
            options: [
              { emoji: "🥳", label: "glad", correct: true },
              { emoji: "😢", label: "sad", correct: false },
              { emoji: "😡", label: "mad", correct: false },
            ],
          },
        ],
      },
    },
  },
};

export const psalm136_1: Verse = {
  id: "psalm-136-1",
  reference: { display: "Psalm 136:1", displayKo: "시편 136:1" },
  theme: { en: "Gratitude", ko: "감사" },
  text: {
    ko: {
      full: "여호와께 감사하라 그는 선하시며 그 인자하심이 영원함이로다",
      translation: "개역한글",
    },
    en: {
      full: "Give thanks to the LORD, for he is good, for his loving kindness endures forever.",
      translation: "WEB",
    },
  },
  imageAssociation: {
    sequence: [
      { emoji: "🙏", keyword: "give thanks", keywordKo: "감사하라" },
      { emoji: "❤️", keyword: "good", keywordKo: "선하시며" },
      { emoji: "♾️", keyword: "forever", keywordKo: "영원함" },
    ],
    simpleExplanation: {
      en: "Thank God because He is good and His love never ends!",
      ko: "하나님은 선하시고 사랑이 끝이 없어요! 감사해요!",
    },
  },
  chunks: {
    ko: ["여호와께 감사하라", "그는 선하시며", "그 인자하심이 영원함이로다"],
    en: ["Give thanks to the LORD,", "for he is good,", "for his loving kindness endures forever."],
  },
  prayer: {
    ko: {
      text: "하나님, 감사합니다. 하나님은 선하시고, 하나님의 사랑은 끝이 없어요. 항상 감사할게요. 아멘.",
      audioHint: "눈을 감고, 작은 목소리로 따라 말해보세요",
    },
    en: {
      text: "God, thank You. You are good and Your love never ends. I will always be thankful. Amen.",
      audioHint: "Close your eyes and whisper along",
    },
  },
  games: {
    fillInBlank: {
      ko: {
        template: "여호와께 {blank} 그는 선하시며 그 인자하심이 {blank}",
        blanks: [
          {
            answer: "감사하라",
            answerEmoji: "🙏",
            options: [
              { emoji: "🙏", label: "thanks", labelKo: "감사하라", correct: true },
              { emoji: "😡", label: "complain", labelKo: "불평하라", correct: false },
              { emoji: "🏃", label: "run", labelKo: "도망가라", correct: false },
            ],
          },
          {
            answer: "영원함이로다",
            answerEmoji: "♾️",
            options: [
              { emoji: "♾️", label: "forever", labelKo: "영원함이로다", correct: true },
              { emoji: "⏱️", label: "short", labelKo: "짧음이로다", correct: false },
              { emoji: "🔚", label: "ended", labelKo: "끝남이로다", correct: false },
            ],
          },
        ],
      },
      en: {
        template: "Give {blank} to the LORD, for he is good, for his loving kindness endures {blank}.",
        blanks: [
          {
            answer: "thanks",
            answerEmoji: "🙏",
            options: [
              { emoji: "🙏", label: "thanks", correct: true },
              { emoji: "😡", label: "complaints", correct: false },
              { emoji: "💰", label: "money", correct: false },
            ],
          },
          {
            answer: "forever",
            answerEmoji: "♾️",
            options: [
              { emoji: "♾️", label: "forever", correct: true },
              { emoji: "⏱️", label: "briefly", correct: false },
              { emoji: "🔚", label: "never", correct: false },
            ],
          },
        ],
      },
    },
  },
};

export const philippians4_13: Verse = {
  id: "philippians-4-13",
  reference: { display: "Philippians 4:13", displayKo: "빌립보서 4:13" },
  theme: { en: "Courage", ko: "용기" },
  text: {
    ko: {
      full: "내게 능력주시는 자 안에서 내가 모든 것을 할 수 있느니라",
      translation: "개역한글",
    },
    en: {
      full: "I can do all things through Christ who strengthens me.",
      translation: "WEB",
    },
  },
  imageAssociation: {
    sequence: [
      { emoji: "💪", keyword: "strengthens", keywordKo: "능력주시는" },
      { emoji: "✝️", keyword: "Christ", keywordKo: "그리스도" },
      { emoji: "🌟", keyword: "all things", keywordKo: "모든 것" },
      { emoji: "🏆", keyword: "I can do", keywordKo: "할 수 있느니라" },
    ],
    simpleExplanation: {
      en: "With God's strength, I can do anything!",
      ko: "하나님이 힘을 주시면 뭐든지 할 수 있어요!",
    },
  },
  chunks: {
    ko: ["내게 능력주시는 자 안에서", "내가 모든 것을 할 수 있느니라"],
    en: ["I can do all things", "through Christ who strengthens me."],
  },
  prayer: {
    ko: {
      text: "하나님, 힘들 때 하나님이 힘을 주세요. 하나님과 함께면 뭐든지 할 수 있어요. 감사합니다. 아멘.",
      audioHint: "눈을 감고, 작은 목소리로 따라 말해보세요",
    },
    en: {
      text: "God, when things are hard, please give me strength. I can do anything with You. Thank You. Amen.",
      audioHint: "Close your eyes and whisper along",
    },
  },
  games: {
    fillInBlank: {
      ko: {
        template: "내게 {blank} 자 안에서 내가 모든 것을 {blank}",
        blanks: [
          {
            answer: "능력주시는",
            answerEmoji: "💪",
            options: [
              { emoji: "💪", label: "strengthens", labelKo: "능력주시는", correct: true },
              { emoji: "😴", label: "sleepy", labelKo: "졸리게하는", correct: false },
              { emoji: "🚫", label: "stops", labelKo: "막으시는", correct: false },
            ],
          },
          {
            answer: "할 수 있느니라",
            answerEmoji: "🏆",
            options: [
              { emoji: "🏆", label: "can do", labelKo: "할 수 있느니라", correct: true },
              { emoji: "🚫", label: "cannot", labelKo: "할 수 없느니라", correct: false },
              { emoji: "😰", label: "afraid", labelKo: "두려우니라", correct: false },
            ],
          },
        ],
      },
      en: {
        template: "I can do {blank} through Christ who {blank} me.",
        blanks: [
          {
            answer: "all things",
            answerEmoji: "🌟",
            options: [
              { emoji: "🌟", label: "all things", correct: true },
              { emoji: "🚫", label: "nothing", correct: false },
              { emoji: "😴", label: "some things", correct: false },
            ],
          },
          {
            answer: "strengthens",
            answerEmoji: "💪",
            options: [
              { emoji: "💪", label: "strengthens", correct: true },
              { emoji: "😴", label: "tires", correct: false },
              { emoji: "🚫", label: "stops", correct: false },
            ],
          },
        ],
      },
    },
  },
};

export const luke6_31: Verse = {
  id: "luke-6-31",
  reference: { display: "Luke 6:31", displayKo: "누가복음 6:31" },
  theme: { en: "Friendship", ko: "친구 관계" },
  text: {
    ko: {
      full: "남에게 대접을 받고자 하는대로 너희도 남을 대접하라",
      translation: "개역한글",
    },
    en: {
      full: "As you would like people to do to you, do exactly so to them.",
      translation: "WEB",
    },
  },
  imageAssociation: {
    sequence: [
      { emoji: "🤝", keyword: "do to you", keywordKo: "대접을 받고자" },
      { emoji: "❤️", keyword: "same way", keywordKo: "하는대로" },
      { emoji: "👫", keyword: "to others", keywordKo: "남을 대접하라" },
    ],
    simpleExplanation: {
      en: "Treat your friends the way you want them to treat you!",
      ko: "내가 대접받고 싶은 대로 친구를 대접해요!",
    },
  },
  chunks: {
    ko: ["남에게 대접을 받고자 하는대로", "너희도 남을 대접하라"],
    en: ["As you would like people to do to you,", "do exactly so to them."],
  },
  prayer: {
    ko: {
      text: "하나님, 친구에게 친절하게 대해줄 수 있도록 도와주세요. 내가 받고 싶은 대로 먼저 사랑할게요. 아멘.",
      audioHint: "눈을 감고, 작은 목소리로 따라 말해보세요",
    },
    en: {
      text: "God, help me to be kind to my friends. I will love others the way I want to be loved. Amen.",
      audioHint: "Close your eyes and whisper along",
    },
  },
  games: {
    fillInBlank: {
      ko: {
        template: "남에게 {blank} 받고자 하는대로 너희도 남을 {blank}",
        blanks: [
          {
            answer: "대접을",
            answerEmoji: "🤝",
            options: [
              { emoji: "🤝", label: "treat", labelKo: "대접을", correct: true },
              { emoji: "👊", label: "hit", labelKo: "때림을", correct: false },
              { emoji: "🚫", label: "ignore", labelKo: "무시를", correct: false },
            ],
          },
          {
            answer: "대접하라",
            answerEmoji: "❤️",
            options: [
              { emoji: "❤️", label: "treat", labelKo: "대접하라", correct: true },
              { emoji: "😡", label: "hate", labelKo: "미워하라", correct: false },
              { emoji: "🏃", label: "avoid", labelKo: "피하라", correct: false },
            ],
          },
        ],
      },
      en: {
        template: "As you would like people to {blank} to you, do exactly so to {blank}.",
        blanks: [
          {
            answer: "do",
            answerEmoji: "🤝",
            options: [
              { emoji: "🤝", label: "do", correct: true },
              { emoji: "😡", label: "hurt", correct: false },
              { emoji: "🚫", label: "lie", correct: false },
            ],
          },
          {
            answer: "them",
            answerEmoji: "👫",
            options: [
              { emoji: "👫", label: "them", correct: true },
              { emoji: "🙈", label: "nobody", correct: false },
              { emoji: "🤖", label: "robots", correct: false },
            ],
          },
        ],
      },
    },
  },
};

export const colossians3_20: Verse = {
  id: "colossians-3-20",
  reference: { display: "Colossians 3:20", displayKo: "골로새서 3:20" },
  theme: { en: "Honoring parents", ko: "부모 공경" },
  text: {
    ko: {
      full: "자녀들아 모든 일에 부모에게 순종하라 이는 주 안에서 기쁘게 하는 것이니라",
      translation: "개역한글",
    },
    en: {
      full: "Children, obey your parents in all things, for this is well pleasing in the Lord.",
      translation: "WEB",
    },
  },
  imageAssociation: {
    sequence: [
      { emoji: "👧", keyword: "children", keywordKo: "자녀들아" },
      { emoji: "👨‍👩‍👧", keyword: "parents", keywordKo: "부모" },
      { emoji: "😊", keyword: "obey", keywordKo: "순종하라" },
      { emoji: "✝️", keyword: "pleasing", keywordKo: "기쁘게" },
    ],
    simpleExplanation: {
      en: "When we listen to mom and dad, it makes God happy!",
      ko: "엄마 아빠 말씀을 잘 들으면 하나님이 기뻐하세요!",
    },
  },
  chunks: {
    ko: ["자녀들아", "모든 일에 부모에게 순종하라", "이는 주 안에서 기쁘게 하는 것이니라"],
    en: ["Children, obey your parents", "in all things,", "for this is well pleasing in the Lord."],
  },
  prayer: {
    ko: {
      text: "하나님, 엄마 아빠 말씀을 잘 듣는 아이가 되게 해주세요. 순종하면 하나님이 기뻐하시는 거죠? 아멘.",
      audioHint: "눈을 감고, 작은 목소리로 따라 말해보세요",
    },
    en: {
      text: "God, help me to listen to mom and dad. I know it makes You happy when I obey. Amen.",
      audioHint: "Close your eyes and whisper along",
    },
  },
  games: {
    fillInBlank: {
      ko: {
        template: "자녀들아 모든 일에 부모에게 {blank} 이는 주 안에서 {blank} 하는 것이니라",
        blanks: [
          {
            answer: "순종하라",
            answerEmoji: "😊",
            options: [
              { emoji: "😊", label: "obey", labelKo: "순종하라", correct: true },
              { emoji: "😡", label: "disobey", labelKo: "반항하라", correct: false },
              { emoji: "🏃", label: "run", labelKo: "도망가라", correct: false },
            ],
          },
          {
            answer: "기쁘게",
            answerEmoji: "✝️",
            options: [
              { emoji: "✝️", label: "pleasing", labelKo: "기쁘게", correct: true },
              { emoji: "😢", label: "sad", labelKo: "슬프게", correct: false },
              { emoji: "😡", label: "angry", labelKo: "화나게", correct: false },
            ],
          },
        ],
      },
      en: {
        template: "Children, {blank} your parents in all things, for this is well {blank} in the Lord.",
        blanks: [
          {
            answer: "obey",
            answerEmoji: "😊",
            options: [
              { emoji: "😊", label: "obey", correct: true },
              { emoji: "😡", label: "ignore", correct: false },
              { emoji: "🏃", label: "leave", correct: false },
            ],
          },
          {
            answer: "pleasing",
            answerEmoji: "✝️",
            options: [
              { emoji: "✝️", label: "pleasing", correct: true },
              { emoji: "😢", label: "upsetting", correct: false },
              { emoji: "😡", label: "annoying", correct: false },
            ],
          },
        ],
      },
    },
  },
};

export const psalm119_105: Verse = {
  id: "psalm-119-105",
  reference: { display: "Psalm 119:105", displayKo: "시편 119:105" },
  theme: { en: "God's Word", ko: "말씀의 소중함" },
  text: {
    ko: {
      full: "주의 말씀은 내 발에 등이요 내 길에 빛이니이다",
      translation: "개역한글",
    },
    en: {
      full: "Your word is a lamp to my feet, and a light for my path.",
      translation: "WEB",
    },
  },
  imageAssociation: {
    sequence: [
      { emoji: "📖", keyword: "Your word", keywordKo: "주의 말씀" },
      { emoji: "🔦", keyword: "lamp", keywordKo: "등" },
      { emoji: "🦶", keyword: "feet", keywordKo: "발" },
      { emoji: "💡", keyword: "light", keywordKo: "빛" },
      { emoji: "🛤️", keyword: "path", keywordKo: "길" },
    ],
    simpleExplanation: {
      en: "God's Word is like a flashlight that shows us the way!",
      ko: "하나님 말씀은 우리 길을 비춰주는 손전등이에요!",
    },
  },
  chunks: {
    ko: ["주의 말씀은", "내 발에 등이요", "내 길에 빛이니이다"],
    en: ["Your word is a lamp", "to my feet,", "and a light for my path."],
  },
  prayer: {
    ko: {
      text: "하나님, 말씀으로 제 길을 밝혀 주세요. 하나님 말씀대로 살고 싶어요. 아멘.",
      audioHint: "눈을 감고, 작은 목소리로 따라 말해보세요",
    },
    en: {
      text: "God, light my way with Your Word. I want to follow Your path. Amen.",
      audioHint: "Close your eyes and whisper along",
    },
  },
  games: {
    fillInBlank: {
      ko: {
        template: "주의 말씀은 내 발에 {blank} 내 길에 {blank}",
        blanks: [
          {
            answer: "등이요",
            answerEmoji: "🔦",
            options: [
              { emoji: "🔦", label: "lamp", labelKo: "등이요", correct: true },
              { emoji: "🌑", label: "darkness", labelKo: "어둠이요", correct: false },
              { emoji: "🪨", label: "stone", labelKo: "돌이요", correct: false },
            ],
          },
          {
            answer: "빛이니이다",
            answerEmoji: "💡",
            options: [
              { emoji: "💡", label: "light", labelKo: "빛이니이다", correct: true },
              { emoji: "🌑", label: "shadow", labelKo: "그림자니이다", correct: false },
              { emoji: "🌧️", label: "rain", labelKo: "비니이다", correct: false },
            ],
          },
        ],
      },
      en: {
        template: "Your word is a {blank} to my feet, and a {blank} for my path.",
        blanks: [
          {
            answer: "lamp",
            answerEmoji: "🔦",
            options: [
              { emoji: "🔦", label: "lamp", correct: true },
              { emoji: "🌑", label: "shadow", correct: false },
              { emoji: "🪨", label: "rock", correct: false },
            ],
          },
          {
            answer: "light",
            answerEmoji: "💡",
            options: [
              { emoji: "💡", label: "light", correct: true },
              { emoji: "🌧️", label: "rain", correct: false },
              { emoji: "🌑", label: "darkness", correct: false },
            ],
          },
        ],
      },
    },
  },
};

export const proverbs3_5: Verse = {
  id: "proverbs-3-5",
  reference: { display: "Proverbs 3:5", displayKo: "잠언 3:5" },
  theme: { en: "Faith", ko: "믿음" },
  text: {
    ko: {
      full: "너는 마음을 다하여 여호와를 의뢰하고 네 명철을 의지하지 말라",
      translation: "개역한글",
    },
    en: {
      full: "Trust in the LORD with all your heart, and don't lean on your own understanding.",
      translation: "WEB",
    },
  },
  imageAssociation: {
    sequence: [
      { emoji: "❤️", keyword: "all your heart", keywordKo: "마음을 다하여" },
      { emoji: "🙏", keyword: "trust", keywordKo: "의뢰하고" },
      { emoji: "🧠", keyword: "understanding", keywordKo: "명철" },
      { emoji: "❌", keyword: "don't lean", keywordKo: "의지하지 말라" },
    ],
    simpleExplanation: {
      en: "Trust God with your whole heart, not just your own brain!",
      ko: "내 생각만 믿지 말고, 온 마음으로 하나님을 믿어요!",
    },
  },
  chunks: {
    ko: ["너는 마음을 다하여", "여호와를 의뢰하고", "네 명철을 의지하지 말라"],
    en: ["Trust in the LORD", "with all your heart,", "and don't lean on your own understanding."],
  },
  prayer: {
    ko: {
      text: "하나님, 제 생각보다 하나님을 더 믿을게요. 마음을 다해 하나님을 의지합니다. 아멘.",
      audioHint: "눈을 감고, 작은 목소리로 따라 말해보세요",
    },
    en: {
      text: "God, I will trust You more than my own thoughts. I put my whole heart in You. Amen.",
      audioHint: "Close your eyes and whisper along",
    },
  },
  games: {
    fillInBlank: {
      ko: {
        template: "너는 마음을 다하여 여호와를 {blank} 네 명철을 {blank} 말라",
        blanks: [
          {
            answer: "의뢰하고",
            answerEmoji: "🙏",
            options: [
              { emoji: "🙏", label: "trust", labelKo: "의뢰하고", correct: true },
              { emoji: "🚫", label: "deny", labelKo: "부인하고", correct: false },
              { emoji: "😴", label: "forget", labelKo: "잊어버리고", correct: false },
            ],
          },
          {
            answer: "의지하지",
            answerEmoji: "❌",
            options: [
              { emoji: "❌", label: "don't lean", labelKo: "의지하지", correct: true },
              { emoji: "💪", label: "rely on", labelKo: "의지하여", correct: false },
              { emoji: "🧠", label: "think about", labelKo: "생각하지", correct: false },
            ],
          },
        ],
      },
      en: {
        template: "{blank} in the LORD with all your heart, and don't {blank} on your own understanding.",
        blanks: [
          {
            answer: "Trust",
            answerEmoji: "🙏",
            options: [
              { emoji: "🙏", label: "Trust", correct: true },
              { emoji: "😡", label: "Doubt", correct: false },
              { emoji: "🏃", label: "Run", correct: false },
            ],
          },
          {
            answer: "lean",
            answerEmoji: "❌",
            options: [
              { emoji: "❌", label: "lean", correct: true },
              { emoji: "💪", label: "depend", correct: false },
              { emoji: "🧠", label: "think", correct: false },
            ],
          },
        ],
      },
    },
  },
};

export const VERSES: Verse[] = [
  psalm56_3,
  philippians4_4,
  psalm150_6,
  psalm118_24,
  psalm136_1,
  philippians4_13,
  luke6_31,
  colossians3_20,
  psalm119_105,
  proverbs3_5,
];
