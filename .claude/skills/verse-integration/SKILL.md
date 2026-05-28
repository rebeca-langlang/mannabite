---
name: verse-integration
description: 승인된 MannaBite 구절 데이터를 src/data/verses.ts에 TypeScript로 통합하고 npx next build로 검증한다. 구절을 코드에 반영/통합/추가하거나 verses.ts를 수정할 때 반드시 사용. "코드에 넣어줘", "verses.ts 추가", "통합해줘", "빌드 확인" 요청에 적용.
---

# Verse Integration — 구절 코드 통합

검수를 통과한 구절 데이터를 `src/data/verses.ts`에 통합하고 빌드로 검증하는 절차를 정의한다.

## 왜 이렇게 하는가
콘텐츠가 아무리 좋아도 코드에 올바른 형식으로 들어가야 앱에서 작동한다. TypeScript 타입 에러가 하나라도 있으면 Vercel 배포가 실패한다. 그래서 통합 후 빌드 검증이 필수다.

## verses.ts 구조
파일은 다음 순서로 구성된다:
1. 타입 정의 (`Lang`, `EmojiOption`, `Blank`, `FillInBlank`, `Prayer`, `Verse`)
2. 개별 구절 상수들 (`export const psalm56_3: Verse = {...}`)
3. 맨 끝에 `export const VERSES: Verse[] = [psalm56_3, philippians4_4, ...]`

## 통합 절차

### 1. 초안 읽기
- `_workspace/{verse-id}_draft.ts`에서 승인된 `Verse` 객체를 읽는다.

### 2. 상수 선언 추가
- 기존 구절 상수들 뒤, `export const VERSES` 배열 선언 **앞**에 새 상수를 추가한다.
- **상수명 컨벤션:** `bookCamel_chapter_verse`
  - 예: 시편 23:1 → `psalm23_1`, 요한복음 3:16 → `john3_16`, 빌립보서 4:4 → `philippians4_4`
- 타입 주석 포함: `export const psalm23_1: Verse = { ... };`

### 3. VERSES 배열 갱신
- 새 상수를 `VERSES` 배열에 추가한다.
- **순서 = Day 순서.** 기획서의 30일 플랜 순서(또는 사용자가 지정한 추가 순서)를 따른다. 보통 배열 끝에 추가.

### 4. 형식 일관성
- 기존 구절 상수와 **동일한 들여쓰기(2 스페이스), 따옴표(쌍따옴표), 트레일링 콤마** 스타일을 유지한다.
- 영어 본문에 큰따옴표가 포함되면 이스케이프(`\"`)한다. 예: `"Rejoice in the Lord always! Again I will say, \"Rejoice!\""`

### 5. 빌드 검증 (필수)
```bash
npx next build
```
- 타입 에러·린트 에러가 없는지 확인한다.
- 출력 마지막의 라우트 테이블(`Route (app)`)이 나오면 성공.
- 에러가 나면 메시지를 분석해 수정하고 재빌드한다. (흔한 원인: 필드 누락, 따옴표 미이스케이프, 콤마 오류)

## 출력
- 수정된 `src/data/verses.ts`
- 오케스트레이터에 보고: 통합한 구절 id, VERSES 배열 위치, 빌드 성공/실패 + (실패 시) 에러 요약

## 이전 산출물이 있을 때
- 해당 구절 상수가 이미 verses.ts에 존재하면, 새로 추가하지 않고 기존 상수를 갱신한다 (중복 선언 방지).

## 주의
- 콘텐츠 내용(텍스트·의미)은 변경하지 않는다. 명백한 형식 오류(따옴표·콤마)만 고친다. 내용 의심 시 오케스트레이터를 통해 작가에게 확인을 요청한다.
- 커밋·푸시는 이 스킬의 범위가 아니다. 사용자가 별도로 요청할 때만 수행한다.
