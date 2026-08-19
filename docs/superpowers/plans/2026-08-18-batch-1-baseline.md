# 1차 묶음 기준선 (2026-08-18 측정)

측정: `npm run gsc:pages -- --since=2026-05-25 unique-running-courses-7`
기간: 2026-05-25 ~ 2026-08-15 / 속성: https://allrunabout.com/

## L2 대상 9편 (수리 전)

| slug | 노출 | 클릭 | CTR | 순위 |
|---|---|---|---|---|
| suwon-unique-running-courses-7 | 770 | 31 | 4.0% | 8.2 |
| ulsan-unique-running-courses-7 | 359 | 16 | 4.5% | 7.5 |
| gwangju-unique-running-courses-7 | 349 | 15 | 4.3% | 8.1 |
| jeju-unique-running-courses-7 | 242 | 13 | 5.4% | 8.3 |
| daegu-unique-running-courses-7 | 154 | 9 | 5.8% | 9.4 |
| daejeon-unique-running-courses-7 | 138 | 9 | 6.5% | 7.9 |
| chuncheon-unique-running-courses-7 | 17 | 0 | 0.0% | 8.2 |
| busan-unique-running-courses-7 | 13 | 1 | 7.7% | 8.0 |
| incheon-unique-running-courses-7 | 12 | 0 | 0.0% | 7.8 |
| **합계** | **2,054** | **94** | — | — |

## 핵심 검색어 기준선

| 검색어 | 노출 | 클릭 | 순위 |
|---|---|---|---|
| 수원달리기 | 120 | 0 | 8.6 |
| 수원 달리기 | 54 | 0 | 8.5 |
| 수원 러닝코스 | 45 | 4 | 8.8 |
| 울산 러닝코스 | 23 | 0 | 7.7 |

## 판정 기준 (4주 후 = 2026-09-15경)

- **성공**: 합계 클릭 94 → 증가, 또는 평균 순위 8.2 → 7 이하
- **중립**: 노출·클릭 유지, 순위 변동 ±0.5 이내 → 4주 더 관찰
- **롤백**: 합계 노출 2,054의 70%(1,438) 미만 → 제목 원복

## 신규 2편 (T0·R2) — 기준선 없음

노출 0에서 시작. 4주 뒤 **노출 발생 여부**가 1차 기준.

## 4주 후 측정 (2026-09-15 이후 실행)

```bash
# L2 — 수리 효과
npm run gsc:pages -- --since=2026-08-18 unique-running-courses-7

# T0 — 신규 노출 발생 여부
npm run gsc:pages -- --since=2026-08-18 trail-running-shoes-lineup-tier-guide-2026

# R2 — 신규 노출 발생 여부
npm run gsc:pages -- --since=2026-08-18 recovery-run-vs-lsd-guide-2026
```

**판정 후 행동**

- L2 성공 → 노출 0인 4편에도 같은 수리 적용 검토
- L2 롤백 조건 충족 → 제목 원복 (slug는 안 바꿨으므로 원복만 하면 됨)
- T0·R2 노출 0 → 각도 가설 재검토. 스펙 12절 "가장 유리한 조건에서 실패" 조항 발동
