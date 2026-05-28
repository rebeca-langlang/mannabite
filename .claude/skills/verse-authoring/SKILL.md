---
name: verse-authoring
description: MannaBite 성경 구절의 전체 학습 데이터(한/영 텍스트, 청크, 그림연상, 쉬운설명, 기도문, 빈칸채우기 게임)를 Verse 타입 형식으로 작성한다. 새 구절을 추가하거나 구절 콘텐츠를 작성/수정/보완할 때 반드시 사용. "구절 추가", "구절 데이터 작성", "이 말씀으로 만들어줘" 같은 요청에 적용.
---

# Verse Authoring — 구절 콘텐츠 작성

MannaBite의 구절 하나를 받아 `Verse` 타입의 완전한 데이터를 한국어·영어로 작성하는 방법을 정의한다.

## 왜 이렇게 하는가
이 앱은 6단계 학습(그림→노래→청크→게임→기도→완료)으로 4-8세가 성경을 암송하게 한다. 각 데이터 필드는 검증된 학습 이론과 직접 연결된다. 구조를 정확히 채워야 6단계 플로우가 작동한다.

## 데이터 구조 (Verse 타입)

```typescript
{
  id: "book-chapter-verse",              // 케밥 케이스, 예: "psalm-23-1"
  reference: { display: "Psalm 23:1", displayKo: "시편 23:1" },
  theme: { en: "God cares", ko: "돌보심" },   // 짧은 테마 (1-3단어)
  text: {
    ko: { full: "...", translation: "개역한글" },
    en: { full: "...", translation: "WEB" },
  },
  imageAssociation: {
    sequence: [ { emoji: "🐑", keyword: "shepherd", keywordKo: "목자" }, ... ],
    simpleExplanation: { en: "...", ko: "..." },
  },
  chunks: { ko: ["...", "..."], en: ["...", "..."] },
  prayer: {
    ko: { text: "...", audioHint: "눈을 감고, 작은 목소리로 따라 말해보세요" },
    en: { text: "...", audioHint: "Close your eyes and whisper along" },
  },
  games: {
    fillInBlank: {
      ko: { template: "...{blank}...{blank}...", blanks: [ ... ] },
      en: { template: "...{blank}...{blank}...", blanks: [ ... ] },
    },
  },
}
```

> 실제 완성 예시(시편 56:3, 빌립보서 4:4)는 `src/data/verses.ts`를 참조한다. 기존 구절과 동일한 구조·형식을 따른다.

## 필드별 작성 규칙

### 1. 성경 본문 (text)
- **한국어: 개역한글, 영어: WEB(World English Bible).** 둘 다 퍼블릭 도메인.
- **본문을 절대 변형하지 않는다.** 개역한글은 동일성유지권 때문에 한 글자(조사·띄어쓰기 포함)도 바꾸면 안 된다. 확신이 없으면 불확실하다고 표시한다.
- `translation` 필드는 항상 `"개역한글"` / `"WEB"`.

### 2. 테마 (theme)
- 구절의 핵심 감정/주제를 1-3단어로. 예: "두려울 때"/"When I'm afraid", "기쁨"/"Joy".
- 홈 화면과 헤더에 노출되므로 아이가 직관적으로 알 단어로.

### 3. 청크 (chunks)
- **의미 단위로 2-3개**로 자른다 (Miller의 작업기억 한계 7±2 → 어린이는 더 작게).
- 한국어와 영어 청크 **개수를 맞춘다.** 각 청크가 서로 대응되도록.
- 문법적으로 자연스러운 단위로 자른다 (조사·전치사구 중간에서 끊지 않는다).
- 예: "내가 두려워하는 날에는" / "주를 의지하리이다" (2개)

### 4. 그림연상 (imageAssociation)
- **sequence:** 구절의 핵심 키워드 **3-5개**. 각 키워드마다:
  - `emoji`: 키워드를 표현하는 이모지. **기기 호환성이 좋은 표준 이모지**를 쓴다(잘 안 보이는 최신 이모지·ZWJ 조합 지양).
  - `keyword`: 영어 키워드, `keywordKo`: 한국어 키워드.
  - 구절 흐름 순서대로 나열한다 (스토리처럼).
- **simpleExplanation:** 구절 전체를 4-8세 눈높이로 풀어 쓴 한 문장. 한/영. 예: "무서울 때, 하나님을 믿으면 마음이 편해져요!"

### 5. 기도문 (prayer)
- **자기참조(self-reference)** 효과를 위해 1인칭으로, 구절을 '내 이야기'로 바꾼다.
- 구절의 핵심 키워드를 자연스럽게 녹인다.
- **"아멘" / "Amen."으로 끝낸다.**
- 2-3문장, 4-8세가 따라 말할 길이.
- `audioHint`는 기존 구절과 동일하게: ko `"눈을 감고, 작은 목소리로 따라 말해보세요"`, en `"Close your eyes and whisper along"`.

### 6. 빈칸채우기 게임 (games.fillInBlank)
- `template`: 구절에서 핵심 단어 **2개**를 `{blank}`로 치환한 문장. 나머지는 원문 유지.
- 각 `blank`:
  - `answer`: 정답 단어(원문 그대로).
  - `answerEmoji`: 정답을 표현하는 이모지.
  - `options`: 보기 **3개** (정답 1 + 오답 2). 각 옵션은 `{ emoji, label, labelKo?, correct }`.
    - 정답 옵션은 `correct: true`.
    - **오답은 그럴듯하지만 명백히 틀린 것.** 예: 정답 "두려워하는"의 오답은 "기쁜", "화나는" (같은 감정 범주, 하지만 구절과 안 맞음).
    - 한국어 게임 옵션은 `labelKo`(한글)와 `label`(영어 참고)을 모두 넣는다. 영어 게임은 `label`만.
- **검증:** template의 `{blank}`에 answer를 순서대로 넣으면 원문이 복원되어야 한다.

## 출력 방법
- `_workspace/{verse-id}_draft.ts` 파일에 `Verse` 객체 하나를 작성한다.
- TypeScript 형식, 기존 verses.ts 구절과 동일한 들여쓰기·따옴표 스타일.
- 검수자가 읽을 것이므로 주석으로 불확실한 부분(본문 정확성 의심 등)을 표시한다.

## 재작성 시
- 검수자 피드백(`_workspace/{verse-id}_review.md`)이 있으면 읽고, 지적된 부분만 수정한다. 통과한 필드는 건드리지 않는다.
