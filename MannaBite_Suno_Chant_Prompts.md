# 🎵 MannaBite — Suno 챈트 프롬프트 10곡

> 4–8세용 성경 암송 챈트. **밝고 중독성 있게.** 가사는 **구절 그대로(verbatim)** — 멜로디·반복·후크로 중독성을 만든다.
> 구절당 한국어(개역한글) + 영어(WEB) 두 곡. data.json의 `song.ko` / `song.en`에 대응.

---

## 사용법 (Suno)

- **3개 필드**: ① Style(스타일) ② Lyrics(가사) ③ Title(제목). 아래 그대로 복붙.
- **한/영 따로 생성**: 한 세트당 한국어 1곡 + 영어 1곡 = 2번 돌린다.
- **길이**: 4–8세 집중 시간 고려해 **45–75초** 목표. 너무 길면 트림.
- **2개 변형 생성 → 더 또렷한 쪽 채택.** 마음에 안 들면 같은 프롬프트로 재생성.
- **파일명**(저장 시):
  - 한국어 → `{id}-ko.mp3` (예: `psalm-56-3-ko.mp3`)
  - 영어 → `{id}-en.mp3` (예: `psalm-56-3-en.mp3`)
  - → `public/audio/songs/`에 저장.

### ⚠️ 개역한글 발음 주의
개역한글은 옛 어미(`하리이다`, `할찌어다`, `함이로다`, `느니라`)가 있어서 Suno가 **잘못 발음하거나 어색하게 끊을 수 있음.** 대응:
- 여러 번 생성해서 발음 또렷한 걸 고른다.
- 가사 표시는 개역한글 그대로 두되, **노래용 음원만** 발음이 너무 뭉개지면 재생성으로 해결 (텍스트는 바꾸지 않음).
- 가사 칸의 `( )` 안 표시(예: `(랄라라)`, 박수)는 **성경 본문 아님 — 선택 사항**. 빼도 됨. 본문 줄은 절대 수정 금지.

---

## 🎼 공통 베이스 스타일 (재사용용)

> 매 곡 스타일 칸은 "베이스 + 그 곡 무드"로 구성. 아래를 기본으로 두고 곡별 한 줄만 갈아끼우면 됨.

```
Korean children's worship song, bright cheerful and very catchy, simple memorable sing-along melody, major key, upbeat kids choir with a sweet young lead voice, hand claps, light playful percussion, glockenspiel and ukulele, warm innocent and joyful, nursery-rhyme hook, around 105 BPM
```

(영어 곡은 맨 앞 `Korean` → `English` 로만 바꾸면 됨.)

---

## 1. 시편 56:3 — 두려울 때 😨🙏😊

**무드**: 부드럽게 시작해 안심시키는 밝은 후렴으로. 포근한 lullaby-pop.

**Style**
```
Korean children's worship song, gentle reassuring intro building into a warm confident sing-along chorus, soft lullaby-pop, bright and comforting, sweet young lead with kids choir, ukulele glockenspiel and soft claps, major key, around 100 BPM
```

**Lyrics (한국어)** — `psalm-56-3-ko.mp3`
```
[Intro]
시편 56편 3절

[Verse]
내가 두려워하는 날에는
주를 의지하리이다

[Chorus]
내가 두려워하는 날에는
주를 의지하리이다
(랄라라)

[Outro]
시편 56편 3절
```

**Lyrics (English)** — `psalm-56-3-en.mp3`
```
[Intro]
Psalm 56, verse 3

[Verse]
When I am afraid,
I will put my trust in you.

[Chorus]
When I am afraid,
I will put my trust in you.
(la la la)

[Outro]
Psalm 56, verse 3
```

---

## 2. 빌립보서 4:4 — 기쁨 🎉😄🔁😄

**무드**: 빵빵 터지는 축제 분위기. 박수·"기뻐하라" 반복 후크.

**Style**
```
Korean children's worship song, super upbeat and celebratory, bouncy clappy party feel, very catchy repeating hook, bright kids choir with cheerful young lead, hand claps tambourine ukulele, major key, around 118 BPM
```

**Lyrics (한국어)** — `philippians-4-4-ko.mp3`
```
[Intro]
빌립보서 4장 4절

[Verse]
주 안에서 항상 기뻐하라
내가 다시 말하노니 기뻐하라

[Chorus]
주 안에서 항상 기뻐하라
내가 다시 말하노니 기뻐하라
(짝짝 짝짝짝)

[Outro]
기뻐하라! 기뻐하라!
```

**Lyrics (English)** — `philippians-4-4-en.mp3`
```
[Intro]
Philippians 4, verse 4

[Verse]
Rejoice in the Lord always!
Again I will say, "Rejoice!"

[Chorus]
Rejoice in the Lord always!
Again I will say, "Rejoice!"
(clap clap clap)

[Outro]
Rejoice! Rejoice!
```

---

## 3. 시편 150:6 — 찬양 🌬️🎵🙌🎉

**무드**: 신나는 행진곡풍, 드럼, "할렐루야!" 큰 마무리.

**Style**
```
Korean children's worship song, energetic festive praise march, big drums and tambourine, triumphant joyful "hallelujah" finish, bright kids choir, sing-along clappy hook, major key, around 120 BPM
```

**Lyrics (한국어)** — `psalm-150-6-ko.mp3`
```
[Intro]
시편 150편 6절

[Verse]
호흡이 있는 자마다
여호와를 찬양할찌어다

[Chorus]
호흡이 있는 자마다
여호와를 찬양할찌어다
할렐루야!

[Outro]
할렐루야! 할렐루야!
```

**Lyrics (English)** — `psalm-150-6-en.mp3`
```
[Intro]
Psalm 150, verse 6

[Verse]
Let everything that has breath
praise the LORD!

[Chorus]
Let everything that has breath
praise the LORD!
Hallelujah!

[Outro]
Hallelujah! Hallelujah!
```

---

## 4. 시편 118:24 — 매일의 기쁨 ☀️🎁🥳🎶

**무드**: 햇살 가득한 아침 팝. 상쾌하게 깨어나는 느낌.

**Style**
```
Korean children's worship song, sunny morning pop, fresh and uplifting wake-up feel, bright bouncy melody, sweet young lead with kids choir, ukulele glockenspiel light claps, major key, around 110 BPM
```

**Lyrics (한국어)** — `psalm-118-24-ko.mp3`
```
[Intro]
시편 118편 24절

[Verse]
이 날은 여호와의 정하신 것이라
이 날에 우리가
즐거워하고 기뻐하리로다

[Chorus]
이 날은 여호와의 정하신 것이라
즐거워하고 기뻐하리로다
(랄라라)

[Outro]
시편 118편 24절
```

**Lyrics (English)** — `psalm-118-24-en.mp3`
```
[Intro]
Psalm 118, verse 24

[Verse]
This is the day that the LORD has made.
We will rejoice
and be glad in it!

[Chorus]
This is the day that the LORD has made.
We will rejoice and be glad in it!
(la la la)

[Outro]
Psalm 118, verse 24
```

---

## 5. 시편 136:1 — 감사 🙏❤️♾️

**무드**: 따뜻하고 감사한 마음. 밝지만 포근한 가스펠 느낌.

**Style**
```
Korean children's worship song, warm thankful and heartfelt, gentle bright gospel feel, cozy sing-along, soft claps and piano with kids choir and sweet young lead, major key, around 100 BPM
```

**Lyrics (한국어)** — `psalm-136-1-ko.mp3`
```
[Intro]
시편 136편 1절

[Verse]
여호와께 감사하라 그는 선하시며
그 인자하심이 영원함이로다

[Chorus]
여호와께 감사하라 그는 선하시며
그 인자하심이 영원함이로다
(감사해요)

[Outro]
시편 136편 1절
```

**Lyrics (English)** — `psalm-136-1-en.mp3`
```
[Intro]
Psalm 136, verse 1

[Verse]
Give thanks to the LORD, for he is good,
for his loving kindness endures forever.

[Chorus]
Give thanks to the LORD, for he is good,
for his loving kindness endures forever.
(thank you, thank you)

[Outro]
Psalm 136, verse 1
```

---

## 6. 빌립보서 4:13 — 용기 💪✝️🌟🏆

**무드**: 힘이 솟는 행진곡. 자신감 "할 수 있다!" 에너지.

**Style**
```
Korean children's worship song, empowering confident march, "I can do it" energy, strong steady beat building to a big bright chorus, kids choir with bold young lead, claps and light drums, major key, around 112 BPM
```

**Lyrics (한국어)** — `philippians-4-13-ko.mp3`
```
[Intro]
빌립보서 4장 13절

[Verse]
내게 능력주시는 자 안에서
내가 모든 것을 할 수 있느니라

[Chorus]
내게 능력주시는 자 안에서
내가 모든 것을 할 수 있느니라
(할 수 있어!)

[Outro]
빌립보서 4장 13절
```

**Lyrics (English)** — `philippians-4-13-en.mp3`
```
[Intro]
Philippians 4, verse 13

[Verse]
I can do all things
through Christ who strengthens me.

[Chorus]
I can do all things
through Christ who strengthens me.
(I can do it!)

[Outro]
Philippians 4, verse 13
```

---

## 7. 누가복음 6:31 — 친구 관계 🤝❤️👫

**무드**: 친근하고 장난스러운 손뼉치기 놀이 느낌. 듀엣 콜앤리스폰스.

**Style**
```
Korean children's worship song, playful friendly hand-clap game feel, call-and-response duet between two kid voices, light bouncy and fun, ukulele claps and shaker, major key, around 114 BPM
```

**Lyrics (한국어)** — `luke-6-31-ko.mp3`
```
[Intro]
누가복음 6장 31절

[Verse]
남에게 대접을 받고자 하는대로
너희도 남을 대접하라

[Chorus]
남에게 대접을 받고자 하는대로
너희도 남을 대접하라
(짝짝)

[Outro]
누가복음 6장 31절
```

**Lyrics (English)** — `luke-6-31-en.mp3`
```
[Intro]
Luke 6, verse 31

[Verse]
As you would like people to do to you,
do exactly so to them.

[Chorus]
As you would like people to do to you,
do exactly so to them.
(clap clap)

[Outro]
Luke 6, verse 31
```

---

## 8. 골로새서 3:20 — 부모 공경 👧👨‍👩‍👧😊✝️

**무드**: 사랑스럽고 다정한 가족 느낌. 부드럽고 따뜻하게.

**Style**
```
Korean children's worship song, sweet gentle and tender, warm family feel, soft sing-along lullaby-pop, kids choir with a sweet young lead, ukulele soft piano gentle claps, major key, around 100 BPM
```

**Lyrics (한국어)** — `colossians-3-20-ko.mp3`
```
[Intro]
골로새서 3장 20절

[Verse]
자녀들아 모든 일에
부모에게 순종하라
이는 주 안에서 기쁘게 하는 것이니라

[Chorus]
자녀들아 모든 일에 부모에게 순종하라
이는 주 안에서 기쁘게 하는 것이니라
(랄라라)

[Outro]
골로새서 3장 20절
```

**Lyrics (English)** — `colossians-3-20-en.mp3`
```
[Intro]
Colossians 3, verse 20

[Verse]
Children,
obey your parents in all things,
for this is well pleasing in the Lord.

[Chorus]
Children, obey your parents in all things,
for this is well pleasing in the Lord.
(la la la)

[Outro]
Colossians 3, verse 20
```

---

## 9. 시편 119:105 — 말씀 📖🔦🦶💡🛤️

**무드**: 반짝반짝 등불·빛 이미지. 글로켄슈필 반짝임, 잔잔한 경이로움.

**Style**
```
Korean children's worship song, twinkly and wondrous, sparkling glockenspiel and bells, gentle bright lamp-and-light imagery, soft dreamy sing-along, kids choir with sweet young lead, major key, around 104 BPM
```

**Lyrics (한국어)** — `psalm-119-105-ko.mp3`
```
[Intro]
시편 119편 105절

[Verse]
주의 말씀은 내 발에 등이요
내 길에 빛이니이다

[Chorus]
주의 말씀은 내 발에 등이요
내 길에 빛이니이다
(반짝반짝)

[Outro]
시편 119편 105절
```

**Lyrics (English)** — `psalm-119-105-en.mp3`
```
[Intro]
Psalm 119, verse 105

[Verse]
Your word is a lamp to my feet,
and a light for my path.

[Chorus]
Your word is a lamp to my feet,
and a light for my path.
(twinkle twinkle)

[Outro]
Psalm 119, verse 105
```

---

## 10. 잠언 3:5 — 믿음 ❤️🙏🧠❌

**무드**: 신뢰감 있게, 차분히 시작해 자신감 있는 합창으로. 살짝 앤섬틱하지만 부드럽게.

**Style**
```
Korean children's worship song, trusting and steady, calm start building into a confident heartfelt chorus, gently anthemic but soft, kids choir with warm young lead, piano ukulele soft claps, major key, around 102 BPM
```

**Lyrics (한국어)** — `proverbs-3-5-ko.mp3`
```
[Intro]
잠언 3장 5절

[Verse]
너는 마음을 다하여 여호와를 의뢰하고
네 명철을 의지하지 말라

[Chorus]
너는 마음을 다하여 여호와를 의뢰하고
네 명철을 의지하지 말라
(랄라라)

[Outro]
잠언 3장 5절
```

**Lyrics (English)** — `proverbs-3-5-en.mp3`
```
[Intro]
Proverbs 3, verse 5

[Verse]
Trust in the LORD with all your heart,
and don't lean on your own understanding.

[Chorus]
Trust in the LORD with all your heart,
and don't lean on your own understanding.
(la la la)

[Outro]
Proverbs 3, verse 5
```

---

## 마무리 노트

- **본문 줄은 절대 수정 금지** (개역한글 동일성유지권). `( )` 안 표시는 본문 아님 — 선택, 빼도 됨.
- **반복 = 중독성 + 암송 효과** 둘 다 잡는 핵심. 후렴에서 구절을 한 번 더 반복.
- **레퍼런스 후크**(시편 56편 3절)는 출처 표기(성명표시권)도 되고 아이가 "어디 말씀인지"도 외우게 함.
- **일관성**: 10곡이 한 앱 안에서 형제처럼 들리게 — 위 공통 베이스 스타일을 유지하고 곡별 무드만 살짝. 너무 장르가 튀면 통일감 깨짐.
- 좋은 결과 나오면 알려줘 — 안 풀리는 곡은 스타일 태그 조정해줄게.
