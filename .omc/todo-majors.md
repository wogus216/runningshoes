# 세계 메이저 마라톤 시리즈 — 시의성 리뉴얼 트리거

접수 상태가 빠르게 낡는 news 클러스터. **마감일·금액은 `src/lib/data/blog/major-deadlines.ts`(SSOT) 한 곳에서만 관리** → 블로그 본문에 주입됨. SSOT만 갱신하면 모든 글이 다음 빌드에서 함께 갱신된다.

## 자동 리뉴얼
- **Cloud routine**: `trig_01MVVHXVgqL3YmooHCn1iZyT` (세계 메이저 마라톤 상태 월간 리뉴얼) — 매월 1일 09:00 KST. 7개 대회 공식 상태 재검증 → SSOT 갱신 항목 `[메이저 갱신]` 보고. 코드 수정은 안 함(보고만), 알림 받으면 세션에서 SSOT 갱신 후 build·push.
- 갱신 시 `MAJOR_DEADLINES_AS_OF` 날짜도 함께 올릴 것. `next-sitemap`이 lastmod 자동 반영.

## 날짜 트리거 (지나면 SSOT statusLabel + 스포크 글 프레임 갱신)
- [ ] **2026-07 초**: 런던 2027 추첨 결과 발표 → 당락 안내로 전환
- [ ] **2026-07-09**: 도쿄 자선 신청 마감 → "자선 마감, 일반추첨 대기"로 전환(deadline-strip)
- [ ] **2026-07-31~08-13**: 도쿄 One Tokyo Global 선행추첨
- [ ] **2026-08-14~08-28**: 도쿄 일반추첨 접수 → "지금 무료추첨 접수중"으로 강조
- [ ] **2026-08-30**: 시드니 2026 대회 개최 → season 종료
- [ ] **2026-09**: 도쿄 추첨 결과 발표 / 보스턴 2027 등록주간 / 베를린 2026 대회(9/27)
- [ ] **2026-09-15**: 시카고 자선 마감
- [ ] **2026-10-11**: 시카고 2026 대회 / 2027 추첨 오픈(10월 말)
- [ ] **2026-11-01**: 뉴욕 2026 대회(50주년)
- [ ] **2026 Q4**: EU ETIAS 출시 예정 → B1 원정 매뉴얼의 "EU=ETIAS 올해 불필요" 문구 재검증·갱신 (베를린·솅겐). 영국 ETA 비용/요건 변동도 함께

## 시리즈 진행도 (허브 1 + 스포크 7 + 보조 2 = 10편)
- [x] **S1 도쿄 2027** (`tokyo-marathon-2027-registration-guide`, 2026-06-13 발행) — 1차 배치
- [x] **S2 시드니 2026** (`sydney-marathon-2026-registration-guide`, 2026-06-13 발행) — 비PB 경관코스(식스스타 포지셔닝)
- [x] **S3 시카고 2026** (`chicago-marathon-2026-registration-guide`, 2026-06-13 발행) — 평지 PB. 자선 9/15·투어 8/16
  - ✅ 도쿄 글 major-next 레트로핏 완료 → 도쿄↔시드니↔시카고 3노드 상호링크 가동
- [x] **B1 해외 원정 매뉴얼** (`overseas-marathon-travel-checklist-korea`, 2026-06-13 발행) — RPM 허브. 7대 도시 입국 매트릭스(ESTA/영국ETA/EU ETIAS), FAQ JSON-LD
- [x] **S4 보스턴 BQ** (`boston-marathon-2027-bq-guide`, 2026-06-13 발행) — 차별화 심장. BQ 기준표 + 국내 WA공인 대회(서울/경주/춘천)로 자격, 2027 내리막 페널티
- [ ] S5 뉴욕 50주년 (`new-york-marathon-2026-registration-guide`)
- [ ] B2 식스스타 메달 (`six-star-medal-challenge-korea-guide`)
- [ ] S6 런던 2027 (`london-marathon-2027-registration-guide`)
- [ ] S7 베를린 PB코스 (`berlin-marathon-2026-guide`)
- [ ] **HUB 세계 6대 마라톤 완전정복** (`world-marathon-majors-guide-2026`) — **맨 마지막**(ItemList JSON-LD가 전부 실링크 되도록)

## 분기 CTA 레트로핏 (스포크 누적 시)
- 도쿄 글의 `.major-next`는 현재 신발/거리/국내일정으로만 분기. 스포크가 쌓이면 "기록파→베를린/시카고, 축제파→뉴욕" 등 **메이저 상호링크로 1줄 Edit 추가**.
- 식스스타 트래커(P1)·D-카운트다운 client 컴포넌트는 스포크 3편 발행 후 도입.
