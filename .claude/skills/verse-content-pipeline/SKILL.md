---
name: verse-content-pipeline
description: MannaBite 성경 구절을 작성→검수→코드통합까지 완성하는 3인 에이전트 팀을 오케스트레이션한다. 새 구절 추가, 여러 구절 일괄 추가, 기존 구절 수정/재작성/보완, "이 말씀들 추가해줘", "다음 구절 만들어줘", "구절 다시 다듬어줘", "구절 콘텐츠 작업" 같은 요청에 반드시 사용. 단일 구절·다중 구절·부분 재작업 모두 처리.
---

# Verse Content Pipeline — 구절 콘텐츠 제작 오케스트레이터

MannaBite에 성경 구절을 추가/수정하는 전 과정을 verse-author → content-reviewer → code-integrator 3인 팀으로 조율한다.

## 실행 모드
**에이전트 팀** (생성-검증 패턴). 작가와 검수자가 SendMessage로 반복 협업하고, 통합자가 최종 코드화한다. 모든 에이전트는 `model: "opus"`.

## 팀 구성
| 에이전트 | 역할 | 스킬 |
|----------|------|------|
| verse-author | 구절 데이터 작성 (한/영) | verse-authoring |
| content-reviewer | 5축 검수 | content-review |
| code-integrator | verses.ts 통합 + 빌드 | verse-integration |

## Phase 0: 컨텍스트 확인
시작 시 실행 모드를 판별한다:
- `_workspace/{verse-id}_draft.ts` 존재 + 사용자가 부분 수정 요청 → **부분 재실행** (해당 에이전트만)
- 해당 구절이 이미 `src/data/verses.ts`에 존재 → code-integrator가 신규 추가 대신 갱신
- 그 외 → **초기 실행** (전체 파이프라인)

요청에 여러 구절이 있으면 구절별로 파이프라인을 반복하되, 작성·검수는 병렬화할 수 있다.

## Phase 1: 입력 정리
1. 사용자 요청에서 대상 구절(들)과 테마·추가 순서를 파악한다.
2. 구절이 모호하면(책·장·절 불명확) 사용자에게 확인한다.
3. `_workspace/` 디렉토리를 준비한다.

## Phase 2: 팀 생성 및 작업 할당
1. `TeamCreate`로 3인 팀을 만든다 (verse-author, content-reviewer, code-integrator).
2. `TaskCreate`로 구절별 작업을 의존 관계와 함께 등록한다:
   - Task A: verse-author가 `_workspace/{verse-id}_draft.ts` 작성
   - Task B: content-reviewer가 검수 (A 의존) → 반려 시 author와 반복
   - Task C: code-integrator가 verses.ts 통합 + 빌드 (B 승인 의존)

## Phase 3: 생성-검증 루프
1. verse-author가 초안을 쓰고 content-reviewer에게 알린다.
2. content-reviewer가 5축 검수:
   - **승인** → code-integrator에게 통합 요청
   - **반려** → `_workspace/{verse-id}_review.md`에 문제 기록 → author가 수정 → 재검수
3. 무한 루프 방지: 같은 구절 검수가 **3회 반복**되면 오케스트레이터가 개입해 사용자에게 현황 보고 후 판단을 구한다.

## Phase 4: 코드 통합
1. code-integrator가 승인된 초안을 verses.ts에 통합한다.
2. `npx next build`로 검증한다.
3. 빌드 실패 시 1회 재시도, 재실패하면 에러를 사용자에게 보고한다.

## Phase 5: 종합 보고
- 추가/수정된 구절 목록, VERSES 배열 현황, 빌드 결과를 사용자에게 보고한다.
- 검수에서 "확인 필요"로 표시된 본문 정확성 항목이 있으면 강조한다.
- 커밋·푸시는 사용자가 별도로 요청할 때만 수행한다(자동 커밋 금지).

## 데이터 전달 프로토콜
- **파일 기반:** `_workspace/{verse-id}_draft.ts` (초안), `_workspace/{verse-id}_review.md` (검수 피드백). 최종 산출물은 `src/data/verses.ts`. `_workspace/`는 감사 추적용으로 보존.
- **메시지 기반:** author↔reviewer 피드백, 에이전트→오케스트레이터 완료 통보.
- **태스크 기반:** 구절별 진행 상태와 의존 관계 추적.

## 에러 핸들링
| 상황 | 대응 |
|------|------|
| 본문 정확성 확신 불가 | 추측 금지. "확인 필요"로 표시하고 최종 보고에 명시. |
| 검수 3회 이상 반복 | 오케스트레이터 개입, 사용자에게 현황 보고. |
| 빌드 실패 | code-integrator가 1회 재시도, 재실패 시 에러 보고. |
| 구절 모호 | Phase 1에서 사용자에게 확인. |

## 팀 크기
3명 (소규모, 구절당 3개 작업). 다중 구절도 같은 팀이 순차/병렬 처리.

## 테스트 시나리오
- **정상 흐름:** "잠언 17:17 추가해줘" → author 작성 → reviewer 승인 → integrator 통합 + 빌드 성공 → 보고.
- **반려 흐름:** author가 게임 template 빈칸 정답 불일치로 초안 작성 → reviewer가 위치+이유로 반려 → author 수정 → reviewer 승인 → integrator 통합.
- **에러 흐름:** integrator 통합 후 따옴표 미이스케이프로 빌드 실패 → 수정 후 재빌드 성공.

## 후속 작업
- "방금 구절의 기도문만 다시" → Phase 0에서 부분 재실행 판별, verse-author만 재호출 후 재검수.
- "이전에 만든 시편 23편 게임 너무 쉬워" → 해당 draft 읽고 게임 부분만 수정.
