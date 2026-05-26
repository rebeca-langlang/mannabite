import { useState, useRef, useEffect } from "react";

const VERSE = {
  id: "psalm-56-3",
  ref: "Psalm 56:3",
  refKo: "시편 56:3",
  theme: { en: "When I'm afraid", ko: "두려울 때" },
  text: {
    ko: { full: "내가 두려워하는 날에는 주를 의지하리이다", translation: "개역한글" },
    en: { full: "When I am afraid, I will put my trust in you.", translation: "WEB" },
  },
  emoji: [
    { emoji: "😨", word: "afraid", wordKo: "두려워하는" },
    { emoji: "🙏", word: "trust", wordKo: "의지" },
    { emoji: "😊", word: "peace", wordKo: "평안" },
  ],
  simpleExplain: {
    en: "When I'm scared, I trust God and feel safe!",
    ko: "무서울 때, 하나님을 믿으면 마음이 편해져요!",
  },
  chunks: {
    ko: ["내가 두려워하는 날에는", "주를 의지하리이다"],
    en: ["When I am afraid,", "I will put my trust in you."],
  },
  game: {
    ko: {
      parts: ["{b}", " 날에는 주를 ", "{b}", " 하리이다"],
      blanks: [
        {
          answer: "😨",
          options: [
            { emoji: "😨", label: "두려워하는", correct: true },
            { emoji: "😊", label: "기쁜", correct: false },
          ],
        },
        {
          answer: "🙏",
          options: [
            { emoji: "🙏", label: "의지", correct: true },
            { emoji: "💪", label: "강한", correct: false },
          ],
        },
      ],
    },
    en: {
      parts: ["When I am ", "{b}", ", I will put my ", "{b}", " in you."],
      blanks: [
        {
          answer: "😨",
          options: [
            { emoji: "😨", label: "afraid", correct: true },
            { emoji: "😊", label: "happy", correct: false },
          ],
        },
        {
          answer: "🙏",
          options: [
            { emoji: "🙏", label: "trust", correct: true },
            { emoji: "💪", label: "strength", correct: false },
          ],
        },
      ],
    },
  },
};

const ARMOR = [
  { emoji: "🪖", name: "Helmet", nameKo: "투구", unlocked: true },
  { emoji: "🛡", name: "Shield", nameKo: "방패", unlocked: true },
  { emoji: "🗡", name: "Sword", nameKo: "검", unlocked: false },
  { emoji: "🦺", name: "Breastplate", nameKo: "흉배", unlocked: false },
  { emoji: "👟", name: "Shoes", nameKo: "신발", unlocked: false },
  { emoji: "⚔️", name: "Belt", nameKo: "허리띠", unlocked: false },
];

// === STYLES ===
const colors = {
  orange: "#F0932B",
  orangeLt: "#FFF3E0",
  orangeDk: "#E58E26",
  green: "#6AB04C",
  greenLt: "#E8F5E9",
  greenDk: "#4E8A38",
  yellow: "#F9CA24",
  yellowLt: "#FFF8E1",
  yellowDk: "#CC9B1D",
  coral: "#FF7675",
  coralLt: "#FFF0EE",
  sage: "#BADC58",
  bg: "#FFFAF5",
  card: "#FFFFFF",
  text: "#2D2B3D",
  sub: "#8B8A99",
  border: "rgba(240,147,43,0.1)",
};

const base = {
  fontFamily: "'Nunito', system-ui, -apple-system, sans-serif",
  background: colors.bg,
  color: colors.text,
  minHeight: "100vh",
  maxWidth: 480,
  margin: "0 auto",
  position: "relative",
  overflow: "hidden",
};

const headerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "14px 18px",
  position: "sticky",
  top: 0,
  background: colors.bg,
  zIndex: 10,
};

const bodyStyle = {
  padding: "0 18px 24px",
  display: "flex",
  flexDirection: "column",
  gap: 14,
};

const btnPrimary = {
  width: "100%",
  padding: "16px",
  borderRadius: 16,
  border: "none",
  background: colors.orange,
  color: "#fff",
  fontSize: 15,
  fontWeight: 600,
  cursor: "pointer",
  fontFamily: "inherit",
  transition: "transform 0.15s",
};

const btnGhost = {
  ...btnPrimary,
  background: "transparent",
  border: `1px solid ${colors.border}`,
  color: colors.orangeDk,
};

const cardStyle = {
  background: colors.card,
  border: `0.5px solid ${colors.border}`,
  borderRadius: 16,
  padding: 16,
};

const pillStyle = (bg, color) => ({
  display: "inline-flex",
  alignItems: "center",
  gap: 4,
  padding: "4px 12px",
  borderRadius: 20,
  fontSize: 12,
  fontWeight: 600,
  background: bg,
  color: color,
});

const progressBar = (pct) => ({
  height: 8,
  background: colors.orangeLt,
  borderRadius: 4,
  overflow: "hidden",
  width: "100%",
});

const progressFill = (pct) => ({
  height: "100%",
  width: `${pct}%`,
  background: `linear-gradient(90deg, ${colors.orange}, ${colors.yellow})`,
  borderRadius: 4,
  transition: "width 0.5s ease",
});

const verseBox = {
  padding: 16,
  borderRadius: 16,
  background: colors.orangeLt,
  fontSize: 16,
  lineHeight: 1.8,
  color: colors.text,
  textAlign: "center",
};

// === COMPONENTS ===
const Pill = ({ children, bg, color }) => (
  <span style={pillStyle(bg, color)}>{children}</span>
);

const Progress = ({ pct }) => (
  <div style={progressBar(pct)}>
    <div style={progressFill(pct)} />
  </div>
);

const BackBtn = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: "none",
      border: "none",
      cursor: "pointer",
      fontSize: 20,
      color: colors.sub,
      padding: 4,
    }}
  >
    ‹
  </button>
);

const PlayButton = ({ size = 64 }) => {
  const [playing, setPlaying] = useState(false);
  return (
    <button
      onClick={() => setPlaying(!playing)}
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: `linear-gradient(135deg, ${colors.orange}, ${colors.yellow})`,
        color: "#fff",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        fontSize: size * 0.35,
        boxShadow: `0 4px 16px rgba(240,147,43,0.25)`,
        transition: "transform 0.15s",
        margin: "0 auto",
      }}
    >
      {playing ? "⏸" : "▶"}
    </button>
  );
};

const LangToggle = ({ lang, setLang }) => (
  <div
    style={{
      display: "flex",
      borderRadius: 20,
      overflow: "hidden",
      background: colors.orangeLt,
      alignSelf: "center",
      fontSize: 13,
    }}
  >
    {["ko", "en"].map((l) => (
      <span
        key={l}
        onClick={() => setLang(l)}
        style={{
          padding: "7px 18px",
          cursor: "pointer",
          fontWeight: 600,
          background: lang === l ? colors.orange : "transparent",
          color: lang === l ? "#fff" : colors.orangeDk,
          transition: "all 0.15s",
        }}
      >
        {l === "ko" ? "한국어" : "English"}
      </span>
    ))}
  </div>
);

// === SCREENS ===

function HomeScreen({ onStart }) {
  return (
    <div style={base}>
      <div style={headerStyle}>
        <div style={{ fontSize: 17, fontWeight: 700, display: "flex", alignItems: "center", gap: 6 }}>
          <span style={{ fontSize: 20 }}>🍞✨</span> MannaBite
        </div>
        <Pill bg={colors.yellowLt} color={colors.orange}>🔥 1</Pill>
      </div>
      <div style={bodyStyle}>
        {/* Avatar */}
        <div style={{ textAlign: "center", padding: "8px 0" }}>
          <div
            style={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${colors.orangeLt}, ${colors.greenLt})`,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 46,
              border: `3px solid ${colors.orange}`,
              position: "relative",
            }}
          >
            🧒
            <div
              style={{
                position: "absolute",
                bottom: -4,
                right: -4,
                background: colors.yellow,
                color: "#fff",
                width: 26,
                height: 26,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 13,
                fontWeight: 700,
                border: `2px solid ${colors.card}`,
              }}
            >
              1
            </div>
          </div>
          <p style={{ fontSize: 15, fontWeight: 600, margin: "8px 0 2px" }}>My Little Warrior</p>
          <p style={{ fontSize: 12, color: colors.sub }}>Lv.1 · 0 XP</p>
          <div style={{ display: "flex", gap: 6, justifyContent: "center", marginTop: 8 }}>
            {ARMOR.map((a, i) => (
              <div
                key={i}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 15,
                  background: a.unlocked ? colors.yellowLt : colors.orangeLt,
                  border: a.unlocked
                    ? `1.5px solid ${colors.yellow}`
                    : `1.5px dashed rgba(240,147,43,0.2)`,
                  opacity: a.unlocked ? 1 : 0.4,
                }}
              >
                {a.unlocked ? a.emoji : "❓"}
              </div>
            ))}
          </div>
        </div>

        {/* Today's Verse */}
        <div style={{ ...cardStyle, cursor: "pointer" }} onClick={onStart}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ fontSize: 12, color: colors.orange, fontWeight: 600, margin: 0 }}>
                Today's verse
              </p>
              <p style={{ fontSize: 17, fontWeight: 600, margin: "4px 0 0" }}>
                {VERSE.refKo}
              </p>
            </div>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${colors.orange}, ${colors.yellow})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: 20,
              }}
            >
              ▶
            </div>
          </div>
          <p style={{ fontSize: 14, color: colors.text, lineHeight: 1.6, margin: "8px 0 0" }}>
            {VERSE.text.en.full}
          </p>
        </div>

        {/* 30 Day Plan */}
        <div>
          <p style={{ fontSize: 12, color: colors.sub, margin: "0 0 6px" }}>30 day plan</p>
          <Progress pct={3} />
          <p style={{ fontSize: 11, color: colors.sub, margin: "4px 0 0" }}>
            Day 1 / 30 · Let's start!
          </p>
        </div>

        {/* Start Button */}
        <button style={btnPrimary} onClick={onStart}>
          Start Learning ▶
        </button>

        {/* Bottom Tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            padding: "12px 0 4px",
            borderTop: `0.5px solid ${colors.border}`,
            marginTop: 8,
          }}
        >
          {[
            { icon: "🏠", label: "Home", active: true },
            { icon: "📖", label: "Verses", active: false },
            { icon: "👤", label: "Avatar", active: false },
            { icon: "⚙️", label: "Settings", active: false },
          ].map((tab) => (
            <div
              key={tab.label}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                fontSize: 10,
                color: tab.active ? colors.orange : colors.sub,
                cursor: "pointer",
              }}
            >
              <span style={{ fontSize: 20 }}>{tab.icon}</span>
              {tab.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SongScreen({ onNext, onBack }) {
  const [lang, setLang] = useState("ko");
  const v = VERSE.text[lang];
  return (
    <div style={base}>
      <div style={headerStyle}>
        <BackBtn onClick={onBack} />
        <Pill bg={colors.orangeLt} color={colors.orangeDk}>🎵 Step 1/4</Pill>
        <div style={{ width: 24 }} />
      </div>
      <div style={{ ...bodyStyle, alignItems: "center", textAlign: "center" }}>
        <Progress pct={25} />
        <p style={{ fontSize: 16, color: colors.orange, fontWeight: 600, margin: "8px 0 0" }}>
          {VERSE.refKo}
        </p>
        <p style={{ fontSize: 14, color: colors.sub, margin: "4px 0 16px" }}>
          Listen and sing along! 🎵
        </p>
        <PlayButton size={68} />
        <p style={{ fontSize: 11, color: colors.sub, margin: "6px 0 16px" }}>Tap to play</p>
        <LangToggle lang={lang} setLang={setLang} />
        <div style={{ ...verseBox, width: "100%", marginTop: 12, textAlign: "left" }}>
          <span style={{ fontSize: 20 }}>🎵</span>{" "}
          <span style={{ color: colors.orange, fontWeight: 600 }}>
            {lang === "ko" ? "내가 두려워하는 날에는" : "When I am afraid,"}
          </span>
          <br />
          <span style={{ paddingLeft: 28, display: "inline-block" }}>
            {lang === "ko" ? "주를 의지하리이다 ~" : "I will put my trust in you ~"}
          </span>
        </div>
        <p style={{ fontSize: 11, color: colors.sub, margin: "2px 0 0" }}>
          {VERSE.refKo} ({v.translation})
        </p>
        <div style={{ marginTop: "auto", width: "100%", paddingTop: 16 }}>
          <button style={btnPrimary} onClick={onNext}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

function ImageScreen({ onNext, onBack }) {
  return (
    <div style={base}>
      <div style={headerStyle}>
        <BackBtn onClick={onBack} />
        <Pill bg={colors.orangeLt} color={colors.orangeDk}>🖼️ Step 2/4</Pill>
        <div style={{ width: 24 }} />
      </div>
      <div style={{ ...bodyStyle, textAlign: "center" }}>
        <Progress pct={50} />
        <p style={{ fontSize: 16, color: colors.orange, fontWeight: 600, margin: "8px 0 0" }}>
          {VERSE.refKo}
        </p>
        <p style={{ fontSize: 14, color: colors.sub, margin: "4px 0 10px" }}>
          Connect pictures with words! 🖼️
        </p>

        {/* Emoji sequence */}
        <div
          style={{
            display: "flex",
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
            padding: "14px 0",
            flexWrap: "wrap",
          }}
        >
          {VERSE.emoji.map((e, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 68,
                  height: 76,
                  borderRadius: 16,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  background: colors.orangeLt,
                  border: `0.5px solid ${colors.border}`,
                }}
              >
                <span style={{ fontSize: 28 }}>{e.emoji}</span>
                <span style={{ fontSize: 11, color: colors.sub }}>{e.word}</span>
              </div>
              {i < VERSE.emoji.length - 1 && (
                <span style={{ color: colors.orange, fontSize: 16 }}>→</span>
              )}
            </div>
          ))}
        </div>

        {/* Verse with emoji */}
        <div style={{ ...verseBox, textAlign: "left" }}>
          <span style={{ fontSize: 20 }}>😨</span>{" "}
          내가 <b style={{ color: colors.orange }}>두려워하는</b> 날에는
          <br />
          <span style={{ fontSize: 20 }}>🙏</span>{" "}
          주를 <b style={{ color: colors.green }}>의지</b>하리이다
        </div>

        {/* Simple explanation */}
        <div
          style={{
            ...cardStyle,
            background: colors.yellowLt,
            border: "none",
            padding: "12px 16px",
          }}
        >
          <p style={{ fontSize: 13, color: colors.yellowDk, margin: 0 }}>
            💡 "When I'm scared, I trust God and feel safe!"
          </p>
        </div>

        <div style={{ marginTop: "auto", width: "100%", paddingTop: 16 }}>
          <button style={btnPrimary} onClick={onNext}>
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

function ChunkScreen({ onNext, onBack }) {
  const [activeChunk, setActiveChunk] = useState(0);
  const [lang, setLang] = useState("ko");
  const chunks = VERSE.chunks[lang];

  return (
    <div style={base}>
      <div style={headerStyle}>
        <BackBtn onClick={onBack} />
        <Pill bg={colors.orangeLt} color={colors.orangeDk}>🧱 Step 3/4</Pill>
        <div style={{ width: 24 }} />
      </div>
      <div style={{ ...bodyStyle, textAlign: "center" }}>
        <Progress pct={75} />
        <p style={{ fontSize: 16, color: colors.orange, fontWeight: 600, margin: "8px 0 0" }}>
          {VERSE.refKo}
        </p>
        <p style={{ fontSize: 14, color: colors.sub, margin: "4px 0 10px" }}>
          Build it piece by piece! 🧱
        </p>

        <LangToggle lang={lang} setLang={setLang} />

        {/* Chunks */}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, width: "100%", marginTop: 8 }}>
          {chunks.map((chunk, i) => (
            <div
              key={i}
              onClick={() => setActiveChunk(i)}
              style={{
                padding: 14,
                borderRadius: 16,
                textAlign: "center",
                fontSize: 14,
                cursor: "pointer",
                transition: "all 0.2s",
                border:
                  i < activeChunk
                    ? `1.5px solid ${colors.green}`
                    : i === activeChunk
                    ? `1.5px solid ${colors.orange}`
                    : `1.5px solid rgba(240,147,43,0.1)`,
                background:
                  i < activeChunk
                    ? "rgba(186,220,88,0.2)"
                    : i === activeChunk
                    ? colors.orangeLt
                    : "transparent",
                color:
                  i < activeChunk
                    ? colors.greenDk
                    : i === activeChunk
                    ? colors.orangeDk
                    : colors.sub,
              }}
            >
              {i < activeChunk ? "✅ " : i === activeChunk ? "→ " : ""}
              "{chunk}"
            </div>
          ))}
        </div>

        <PlayButton size={52} />
        <p style={{ fontSize: 11, color: colors.sub, margin: "4px 0" }}>Listen and repeat</p>

        {/* Combined verse */}
        <div style={verseBox}>
          {chunks.map((chunk, i) => (
            <span
              key={i}
              style={{
                color: i <= activeChunk ? (i < activeChunk ? colors.green : colors.orange) : colors.sub,
                fontWeight: i === activeChunk ? 600 : 400,
                transition: "color 0.3s",
              }}
            >
              {chunk}{" "}
            </span>
          ))}
        </div>

        {activeChunk < chunks.length - 1 ? (
          <button style={btnPrimary} onClick={() => setActiveChunk(activeChunk + 1)}>
            Next chunk →
          </button>
        ) : (
          <button style={btnPrimary} onClick={onNext}>
            I'm ready for the game! 🎯
          </button>
        )}
      </div>
    </div>
  );
}

function GameScreen({ onNext, onBack }) {
  const [lang, setLang] = useState("ko");
  const game = VERSE.game[lang];
  const [filled, setFilled] = useState(Array(game.blanks.length).fill(null));
  const [wrong, setWrong] = useState(null);
  const [score, setScore] = useState(0);
  const allFilled = filled.every((f) => f !== null);

  useEffect(() => {
    setFilled(Array(VERSE.game[lang].blanks.length).fill(null));
    setWrong(null);
  }, [lang]);

  const pick = (blankIdx, option) => {
    if (filled[blankIdx] !== null) return;
    if (option.correct) {
      const newFilled = [...filled];
      newFilled[blankIdx] = option.emoji;
      setFilled(newFilled);
      setScore(score + 1);
    } else {
      setWrong(`${blankIdx}-${option.emoji}`);
      setTimeout(() => setWrong(null), 500);
    }
  };

  const currentGame = VERSE.game[lang];

  // Find first unfilled blank
  const activeBlank = filled.findIndex((f) => f === null);

  return (
    <div style={base}>
      <div style={headerStyle}>
        <BackBtn onClick={onBack} />
        <Pill bg={colors.orangeLt} color={colors.orangeDk}>🎯 Step 4/4</Pill>
        <Pill bg={colors.greenLt} color={colors.greenDk}>⭐ {score}/{game.blanks.length}</Pill>
      </div>
      <div style={{ ...bodyStyle, textAlign: "center" }}>
        <Progress pct={90} />
        <p style={{ fontSize: 14, color: colors.sub, margin: "6px 0 4px" }}>
          Pick the right pictures! 🎯
        </p>

        <LangToggle lang={lang} setLang={setLang} />

        {/* Verse with blanks */}
        <div style={{ ...verseBox, fontSize: 17, lineHeight: 2.2 }}>
          {currentGame.parts.map((part, i) => {
            if (part === "{b}") {
              const blankIdx = currentGame.parts.slice(0, i).filter((p) => p === "{b}").length;
              return (
                <span
                  key={i}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minWidth: 50,
                    height: 40,
                    borderRadius: 12,
                    background: filled[blankIdx] ? colors.greenLt : colors.card,
                    border: filled[blankIdx]
                      ? `2px solid ${colors.green}`
                      : blankIdx === activeBlank
                      ? `2px dashed ${colors.orange}`
                      : `2px dashed ${colors.sub}`,
                    margin: "0 3px",
                    padding: "0 6px",
                    fontSize: 22,
                    verticalAlign: "middle",
                    transition: "all 0.2s",
                  }}
                >
                  {filled[blankIdx] || ""}
                </span>
              );
            }
            return <span key={i}>{part}</span>;
          })}
        </div>

        {activeBlank >= 0 && (
          <>
            <p style={{ fontSize: 12, color: colors.sub, margin: "6px 0 8px" }}>
              Blank {activeBlank + 1}: tap the matching emoji
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: 10,
                width: "100%",
              }}
            >
              {currentGame.blanks[activeBlank].options.map((opt, j) => {
                const isWrong = wrong === `${activeBlank}-${opt.emoji}`;
                return (
                  <div
                    key={j}
                    onClick={() => pick(activeBlank, opt)}
                    style={{
                      padding: 16,
                      borderRadius: 16,
                      border: `1.5px solid ${
                        isWrong ? colors.coral : "rgba(240,147,43,0.1)"
                      }`,
                      fontSize: 26,
                      cursor: "pointer",
                      textAlign: "center",
                      background: isWrong ? colors.coralLt : colors.card,
                      transition: "all 0.15s",
                      animation: isWrong ? "shake 0.3s" : "none",
                    }}
                  >
                    {opt.emoji}
                    <br />
                    <span style={{ fontSize: 12, color: colors.sub }}>{opt.label}</span>
                  </div>
                );
              })}
            </div>
          </>
        )}

        {allFilled && (
          <div style={{ marginTop: 12, width: "100%" }}>
            <div
              style={{
                ...cardStyle,
                background: colors.greenLt,
                border: "none",
                textAlign: "center",
                padding: "14px 16px",
                marginBottom: 12,
              }}
            >
              <p style={{ fontSize: 14, fontWeight: 600, color: colors.greenDk, margin: 0 }}>
                ✅ Perfect! You got it!
              </p>
            </div>
            <button style={btnPrimary} onClick={onNext}>
              Complete 🎉
            </button>
          </div>
        )}
      </div>
      <style>{`@keyframes shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-4px)}75%{transform:translateX(4px)}}`}</style>
    </div>
  );
}

function CompleteScreen({ onHome, onRestart }) {
  return (
    <div style={base}>
      <div style={headerStyle}>
        <div />
        <Pill bg={colors.orangeLt} color={colors.orangeDk}>🎉 Complete!</Pill>
        <div />
      </div>
      <div
        style={{
          ...bodyStyle,
          alignItems: "center",
          textAlign: "center",
          justifyContent: "center",
          minHeight: "70vh",
        }}
      >
        <div style={{ fontSize: 56, padding: "8px 0" }}>🎉</div>
        <p style={{ fontSize: 24, fontWeight: 700, margin: 0 }}>Great job!</p>
        <p style={{ fontSize: 15, color: colors.sub, margin: "4px 0" }}>
          You memorized today's verse!
        </p>

        <div style={{ ...cardStyle, width: "100%", marginTop: 16 }}>
          <p style={{ fontSize: 14, color: colors.orange, fontWeight: 600, margin: 0 }}>
            {VERSE.refKo}
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.7, margin: "6px 0 0" }}>
            {VERSE.text.ko.full}
          </p>
          <p
            style={{
              fontSize: 14,
              color: colors.sub,
              margin: "6px 0 0",
              lineHeight: 1.6,
            }}
          >
            {VERSE.text.en.full}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 10,
            width: "100%",
            marginTop: 14,
          }}
        >
          <div
            style={{
              background: colors.orangeLt,
              borderRadius: 16,
              padding: 16,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 600, color: colors.orange }}>+10</div>
            <div style={{ fontSize: 11, color: colors.sub, marginTop: 2 }}>XP earned</div>
          </div>
          <div
            style={{
              background: colors.yellowLt,
              borderRadius: 16,
              padding: 16,
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 24, fontWeight: 600, color: colors.yellowDk }}>🔥 1</div>
            <div style={{ fontSize: 11, color: colors.sub, marginTop: 2 }}>Day streak</div>
          </div>
        </div>

        {/* New armor */}
        <div
          style={{
            ...cardStyle,
            background: colors.greenLt,
            border: "none",
            width: "100%",
            marginTop: 12,
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "14px 16px",
          }}
        >
          <span style={{ fontSize: 28 }}>🗡</span>
          <div style={{ textAlign: "left" }}>
            <p style={{ fontSize: 14, fontWeight: 600, color: colors.greenDk, margin: 0 }}>
              New armor unlocked!
            </p>
            <p style={{ fontSize: 12, color: colors.sub, margin: "2px 0 0" }}>
              Sword of the Spirit equipped
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            width: "100%",
            marginTop: 16,
          }}
        >
          <button style={btnPrimary} onClick={onHome}>
            🏠 Home
          </button>
          <button style={btnGhost} onClick={onRestart}>
            🔄 Practice again
          </button>
        </div>
      </div>
    </div>
  );
}

// === MAIN APP ===
export default function MannaBite() {
  const [screen, setScreen] = useState("home");

  const screens = {
    home: (
      <HomeScreen onStart={() => setScreen("song")} />
    ),
    song: (
      <SongScreen onNext={() => setScreen("image")} onBack={() => setScreen("home")} />
    ),
    image: (
      <ImageScreen onNext={() => setScreen("chunk")} onBack={() => setScreen("song")} />
    ),
    chunk: (
      <ChunkScreen onNext={() => setScreen("game")} onBack={() => setScreen("image")} />
    ),
    game: (
      <GameScreen onNext={() => setScreen("complete")} onBack={() => setScreen("chunk")} />
    ),
    complete: (
      <CompleteScreen
        onHome={() => setScreen("home")}
        onRestart={() => setScreen("song")}
      />
    ),
  };

  return screens[screen];
}
