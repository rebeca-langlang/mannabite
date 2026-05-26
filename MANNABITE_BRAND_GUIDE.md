# 🍞 MannaBite — Brand Guide v1.0

> **작성일**: 2026-05-19
> **서비스명**: MannaBite
> **태그라인**: "말씀을 한 입씩, 매일 맛보다"
> **English tagline**: "God's Word, one bite at a time"

---

## 1. 브랜드 스토리

### 이름의 의미

**Manna** (만나): 출애굽기 16장에서 하나님이 이스라엘 백성에게 하늘에서 내려주신 양식. 매일 아침 필요한 만큼만 거두어 먹었던 기적의 빵.

**Bite** (바이트): 한 입 크기. 작고 소화하기 쉬운 단위.

**MannaBite** = 하늘의 말씀을 매일 한 입씩 맛보는 경험. 아이들이 부담 없이, 재미있게, 매일 조금씩 성경을 암송하는 것을 표현.

### 브랜드 성격 (Brand Personality)

| 특성 | 설명 | 느낌 |
|------|------|------|
| **Friendly** | 아이가 처음 보고도 친근하게 느끼는 | 동글동글, 부드러운 곡선 |
| **Playful** | 학습이 아닌 놀이처럼 느끼게 하는 | 밝은 색상, 이모지, 애니메이션 |
| **Trustworthy** | 부모가 안심하고 맡길 수 있는 | 깔끔한 레이아웃, 연구 기반 |
| **Encouraging** | 실패해도 괜찮다고 말해주는 | 긍정적 피드백, 성장 보상 |
| **Gender-neutral** | 남녀 모두 좋아하는 | 오렌지+그린 따뜻한 중성 팔레트 |

### 톤 & 보이스

- **아이에게**: "잘했어!", "다시 해볼까?", "거의 다 왔어!" — 격려하는 친구 같은 톤
- **부모에게**: "과학적으로 검증된 6가지 암기법", "아이의 학습 현황을 확인하세요" — 신뢰감 있는 톤
- **절대 하지 않는 말**: "틀렸어", "못했어", "다시 해" — 부정적 표현 배제

---

## 2. 로고

### 로고 컨셉

**Primary Mark**: 만나 빵(둥근 빵) + 한 입 베어 먹은 모양 + 반짝이는 빛

만나는 성경에서 "작고 둥글며 서리 같은" 것으로 묘사됨 (출 16:14). 둥근 빵에서 한 입 베어 먹은 형태가 "Bite"를 자연스럽게 표현하고, 빵 위의 반짝임(✨)이 하늘에서 내려온 신비로운 양식을 상징.

### 로고 변형

```
[Primary]    🍞✨ MannaBite         ← 아이콘 + 워드마크 (기본)
[Icon only]  🍞✨                    ← 앱 아이콘, 파비콘
[Wordmark]   MannaBite              ← 텍스트만 (좁은 공간)
[Korean]     🍞✨ 만나바이트          ← 한국어 병기 시
```

### 로고 사용 시 Canva/디자인 프롬프트

```
Logo concept: A cute round bread (manna) with a bite taken out of the right side. 
The bread has a warm golden-beige color with subtle texture.
Small sparkles (2-3) floating above the bread in honey orange (#F0932B) and sunflower yellow (#F9CA24).
Style: Minimal, rounded, friendly, suitable for children's app.
The bite mark creates a subtle crescent moon shape.
Background: transparent.
```

### 앱 아이콘 가이드

- 형태: 둥근 모서리 사각형 (iOS/Android 표준)
- 배경: 오렌지-골드 그라데이션 (#F0932B → #F9CA24)
- 중앙: 흰색 만나 빵 아이콘 (한 입 베어 먹은 형태)
- 반짝임: 밝은 골드(#F9CA24) 작은 별 2-3개

---

## 3. 컬러 시스템

### Primary Colors

| 이름 | HEX | 용도 |
|------|-----|------|
| **Honey Orange** (꿀 오렌지) | `#F0932B` | 메인 브랜드 컬러. 버튼, 강조, 링크 |
| **Sage Green** (세이지 그린) | `#6AB04C` | 보조 컬러. 정답, 완료, 성공 상태 |
| **Sunflower** (해바라기) | `#F9CA24` | 포인트 컬러. 스트릭, 보상, 갑옷 |

### Secondary Colors

| 이름 | HEX | 용도 |
|------|-----|------|
| **Soft Coral** (소프트 코랄) | `#FF7675` | 오답, 경고 (부드러운 빨강) |
| **Light Sage** (라이트 세이지) | `#BADC58` | 정답 하이라이트, 완료 체크 |

### Background & Surface Colors

| 이름 | Light Mode | Dark Mode | 용도 |
|------|-----------|-----------|------|
| **Background** | `#FFFAF5` | `#1E1A16` | 앱 전체 배경 (따뜻한 크림) |
| **Card** | `#FFFFFF` | `#2A2520` | 카드, 모달 |
| **Text Primary** | `#2D2B3D` | `#FFF5EB` | 본문 텍스트 |
| **Text Secondary** | `#8B8A99` | `#A09890` | 보조 텍스트 |

### Tint Colors (배경/하이라이트용)

| Base Color | Tint (Light Mode) | Tint (Dark Mode) |
|-----------|-------------------|-------------------|
| Honey Orange | `#FFF3E0` | `#2E2518` |
| Sage Green | `#E8F5E9` | `#1E2D1B` |
| Sunflower | `#FFF8E1` | `#2E2918` |
| Soft Coral | `#FFF0EE` | `#2E2020` |

### 그라데이션

```css
/* Primary Gradient — 프로그레스 바, 플레이 버튼 */
background: linear-gradient(135deg, #F0932B, #F9CA24);

/* Success Gradient — 완료/성공 */
background: linear-gradient(135deg, #6AB04C, #BADC58);

/* Avatar Background */
background: linear-gradient(135deg, #FFF3E0, #E8F5E9);
```

### 컬러 사용 원칙

- 오렌지(#F0932B)가 전체 면적의 **30% 이하** — 과하면 산만해짐
- 세이지 그린(#6AB04C)은 **정답/완료에만** — 남발 금지
- 해바라기(#F9CA24)는 **보상/성취에만** — 스트릭, 갑옷, XP
- 코랄(#FF7675)은 **틀렸을 때만**, "다시 해보자" 느낌으로
- 배경은 **따뜻한 크림(#FFFAF5)** — 동화책 느낌

---

## 4. 타이포그래피

### 추천 폰트 (웹/앱)

| 용도 | 폰트 | 대안 | 이유 |
|------|------|------|------|
| **Display/제목** | Nunito (Google Fonts) | Quicksand | 둥글고 친근함, 아이 친화적 |
| **Body/본문** | Pretendard (한/영 겸용) | Noto Sans KR | 한국어 가독성 최고, 무료 |
| **구절 본문** | 나눔명조 (Nanum Myeongjo) | KoPub Batang | 성경 구절의 격식 + 가독성 |
| **이모지/숫자** | System Default | - | 디바이스 네이티브 이모지 |

### 타이포 스케일

```
Display (로고/대제목):  24px / Bold (Nunito)
Heading (화면 제목):    18-20px / SemiBold (Nunito)
Body Large (구절):      15-16px / Regular (Pretendard)
Body (본문):            14px / Regular (Pretendard)
Caption (보조):         11-12px / Regular (Pretendard)
Button:                 14px / Medium (Pretendard)
```

### 한국어 구절 표기

- 폰트: 나눔명조 또는 Pretendard
- 줄간격: 1.7~1.8 (넉넉하게)
- 출처 표기: "시편 56:3 (개역한글)" — 항상 번역본 명시 (저작권 성명표시권)

### 영어 구절 표기

- 폰트: Nunito 또는 Pretendard — **Regular체 (이탤릭 사용하지 않음)**
- 줄간격: 1.6
- 색상: Text Secondary (#8B8A99) — 한국어보다 약간 연하게 구분
- 출처 표기: "Psalm 56:3 (WEB)" — 항상 번역본 명시
- 한/영 구절은 동등한 비중으로 취급 — 이탤릭으로 "부차적" 느낌 주지 않음

---

## 5. 컴포넌트 스타일

### Border Radius (모서리 둥글기)

```
Small (pill, badge):     20px (완전 둥글림)
Medium (button, input):  16px
Large (card):            16-20px
XL (screen container):   20-24px
```

→ "동글동글" 브랜드 느낌의 핵심. 날카로운 모서리는 **절대 사용하지 않음**.

### 버튼 스타일

```
[Primary]   배경: #F0932B, 글자: #FFFFFF, radius: 16px, padding: 14px
[Ghost]     배경: transparent, 테두리: rgba(240,147,43,0.2), 글자: #E58E26
[Disabled]  opacity: 0.35, pointer-events: none
```

- 버튼 최소 높이: 48px (아이 손가락 터치 고려)
- 터치 시: scale(0.97) 효과
- 틀렸을 때: shake 애니메이션 (0.3초)

### 카드 스타일

```
배경: #FFFFFF
테두리: 0.5px solid rgba(240,147,43,0.1)
radius: 16px
padding: 14px
그림자: 없음 (플랫 디자인)
```

- Accent 카드: 배경에 tint color 사용 (오렌지틴트, 그린틴트, 골드틴트)
- 클릭 가능한 카드: cursor: pointer + 미세한 hover 효과

### 프로그레스 바

```
높이: 8px
배경: #FFF3E0 (오렌지 틴트)
채우기: linear-gradient(90deg, #F0932B, #F9CA24)
radius: 4px
```

### Pill / Badge

```
padding: 4px 10px
radius: 20px (완전 둥글림)
font-size: 11px, font-weight: 500
```

- Fire pill: 배경 #FFF8E1, 글자 #F0932B
- XP pill: 배경 #E8F5E9, 글자 #6AB04C
- Step pill: 배경 #FFF3E0, 글자 #E58E26

---

## 6. 아이코노그래피

### 아이콘 라이브러리

**Tabler Icons** (tabler-icons.io) — 둥글고 친근한 라인 아이콘. MIT 라이선스(무료).

### 주요 아이콘 매핑

| 기능 | 아이콘 | Tabler 이름 |
|------|--------|------------|
| 홈 | 🏠 | ti-home |
| 구절 목록 | 📖 | ti-book |
| 아바타 | 👤 | ti-user-circle |
| 설정 | ⚙️ | ti-settings |
| 재생 | ▶️ | ti-player-play |
| 노래 | 🎵 | ti-music |
| 그림 | 🖼️ | ti-photo |
| 청크 | 📦 | ti-layers-subtract |
| 게임 | 🧩 | ti-puzzle |
| 완료 | 🎉 | ti-confetti |
| 스트릭 | 🔥 | ti-flame |
| XP/별 | ⭐ | ti-star |
| 힌트 | 💡 | ti-bulb |
| 마이크 | 🎤 | ti-microphone |
| 반복 | 🔄 | ti-repeat |
| 체크 | ✅ | ti-check |
| 반짝임 | ✨ | ti-sparkles |

### 이모지 사용 원칙

- 구절 연상용 이모지: 각 구절별 3-5개 시퀀스 (기획서 10장 참고)
- 게임 선택지: 이모지 + 영어 라벨 (글 못 읽는 아이 고려)
- UI 장식용: 제목 옆에 1개 정도만, 과하면 산만해짐

---

## 7. 아바타 & 갑옷 시스템

### 아바타 컨셉

아이가 직접 키우는 "말씀 전사(Word Warrior)" 캐릭터. 처음엔 기본 모습이고, 구절을 외울수록 에베소서 6:11-17의 "하나님의 전신갑주"를 하나씩 장착.

### 갑옷 아이템 (에베소서 6장 기반)

| 순서 | 아이템 | 성경 근거 | 해금 조건 (예시) |
|------|--------|----------|----------------|
| 1 | 🪖 진리의 투구 (Helmet of Salvation) | 엡 6:17 | 첫 구절 암송 완료 |
| 2 | 🛡 믿음의 방패 (Shield of Faith) | 엡 6:16 | 3일 연속 학습 |
| 3 | 🗡 성령의 검 (Sword of the Spirit) | 엡 6:17 | 구절 3개 마스터 |
| 4 | 🦺 의의 흉배 (Breastplate of Righteousness) | 엡 6:14 | 7일 스트릭 |
| 5 | 👟 복음의 신 (Shoes of Peace) | 엡 6:15 | 구절 5개 마스터 |
| 6 | ⚔️ 진리의 허리띠 (Belt of Truth) | 엡 6:14 | 30일 플랜 완료 |

### 아바타 디자인 가이드

- 기본 형태: 둥글고 귀여운 캐릭터 (성별 중립)
- 표정: 항상 밝고 긍정적
- 갑옷은 캐릭터 위에 레이어로 표시
- 잠긴 갑옷: ❓ 아이콘, 흐릿하게 (opacity 0.4)
- 해금된 갑옷: 밝은 색상 + 골드 테두리

---

## 8. 모션 & 인터랙션

### 기본 원칙

- 모든 전환: 0.15~0.3초 (빠르고 부드럽게)
- 아이용이므로 **피드백이 즉각적**이어야 함
- 정답: 초록 배경 + 부드러운 확대
- 오답: shake 애니메이션 (0.3초) + 코랄 배경 → 바로 복구
- 완료: 🎉 confetti 또는 큰 이모지 + scale up 애니메이션

### 주요 인터랙션

```
버튼 터치:     scale(0.97) → 복구 (0.15초)
정답 선택:     배경 #A8E6CF fade in (0.2초)
오답 선택:     translateX ±4px shake (0.3초) + 배경 #FFF0EE
페이지 전환:   fade + slide left/right (0.25초)
프로그레스:    width transition (0.4초, ease-out)
완료 축하:     scale 0→1 bounce (0.5초)
갑옷 해금:     glow effect + bounce (0.5초)
```

---

## 9. 레이아웃 원칙

### 화면 구조

```
┌─ Header (고정) ──────────┐
│  ← Back    Step 2/4    ⋮ │
├──────────────────────────┤
│                          │
│  Body (스크롤 가능)       │
│  - 프로그레스 바          │
│  - 메인 콘텐츠           │
│  - 카드/게임 영역         │
│                          │
├──────────────────────────┤
│  Bottom (고정) ─ CTA 버튼 │
└──────────────────────────┘
```

### 간격

```
화면 패딩:      14px (좌우)
카드 간격:      10-12px
카드 내부:      14px
섹션 간격:      16-20px
```

### 터치 타겟

- 최소 크기: **48px × 48px** (아이 손가락 고려)
- 이모지 선택지: **최소 60px × 60px**
- 버튼 간 간격: **최소 10px**

---

## 10. 다크 모드

자동 감지 (`prefers-color-scheme: dark`). 수동 토글은 Phase 2에서.

### 다크 모드 원칙

- 배경: 순흑(#000) 아닌 **따뜻한 다크 브라운(#1E1A16)** — 따뜻함 유지
- 카드: **#2A2520** — 배경보다 한 톤 밝게
- 컬러는 동일하게 유지하되, tint color만 어두운 버전으로
- 텍스트: #FFF5EB (밝은 크림)

---

## 11. 접근성 (Accessibility)

- 색상 대비: WCAG AA 기준 충족 (4.5:1 이상)
- 이모지에 항상 **텍스트 라벨** 동반 (스크린 리더 + 글 못 읽는 아이)
- 터치 타겟 48px 이상
- 오답 표시: 색상 + shake 모션 (색맹 대응)
- 정답 표시: 색상 + 체크 아이콘 (색상만 의존 X)

---

## 12. 브랜드 에셋 체크리스트

### MVP에 필요한 에셋

- [ ] 로고 (SVG) — Primary, Icon only, Wordmark
- [ ] 앱 아이콘 (1024x1024, 둥근 모서리)
- [ ] 파비콘 (32x32, 16x16)
- [ ] 기본 아바타 이미지 (갑옷 없는 상태)
- [ ] 갑옷 아이템 6개 (개별 이미지 or SVG)
- [ ] OG Image (소셜 공유용, 1200x630)

### Phase 2에서 필요한 에셋

- [ ] 아바타 커스텀 옵션 (머리색, 피부색 등)
- [ ] 추가 갑옷/아이템 디자인
- [ ] 인스타그램/마케팅용 템플릿
- [ ] 앱스토어 스크린샷 (Phone + Tablet)

---

*Version 1.1 — 2026-05-19*
*변경사항: Honey & Sage 팔레트 확정, 영어 구절 이탤릭 제거, 다크모드 따뜻한 톤 적용*
*MannaBite Brand Guide*
