// 세계 메이저 마라톤 접수/마감 SSOT (Single Source of Truth)
//
// 시의성 리뉴얼 원칙: 메이저 마라톤 블로그 글은 접수 상태가 빠르게 낡는다(news).
// 마감일·금액을 글 본문에 하드코딩하지 말고 이 파일에서만 관리한다.
// → 이 파일 한 곳만 갱신하면 모든 글이 다음 빌드에서 함께 갱신된다.
//
// 자동 리뉴얼: "세계 메이저 마라톤 상태 감시" cloud routine이 매월 7개 대회
// 공식 상태를 재검증해 이 파일의 갱신 항목(현재값 → 새값)을 보고한다.
//
// 모든 수치는 공식 발표 기준. 미확정은 명시. 환율은 근사/범위로만.

export const MAJOR_DEADLINES_AS_OF = '2026-08-15';

// ISO('2026-07-09') → 'M/D'('7/9'). SSOT 날짜를 본문 프로즈에 주입할 때 사용.
export function md(iso: string): string {
  const [, m, d] = iso.split('-');
  return `${Number(m)}/${Number(d)}`;
}

export const MAJOR_DEADLINES = {
  // ── 도쿄 2027 (유일하게 현재 접수 사이클 진행 중) ─────────
  tokyo2027: {
    name: '도쿄마라톤 2027',
    raceDate: '2027-03-07',
    statusLabel: '일반추첨 접수중 ~8/28 · 정원 초과로 추첨 확정',
    // 자선(RUN with HEART): 신청 6/24~7/9, 기부금 납부 마감 8/31, 41개 단체, 최소 ¥100,000
    // ⚠️ 단체별로 해외 거주자 수락 여부가 다름(일부 일본 거주자 한정) — 개별 확인 필요
    // ⚠️ 기부금 ¥100,000은 참가비와 별도(참가비 추가 납부)
    charity: {
      open: '2026-06-24',
      close: '2026-07-09',
      donatePayBy: '2026-08-31',
      minDonationJpy: 100000,
      minDonationKrwApprox: '약 95만~97만원',
      charities: 41,
      intlNote: '단체별 상이(일부 일본 거주자 한정) — 개별 확인 필요',
    },
    // 일반 추첨: 8/14 11:00 ~ 8/28 17:00 JST, 결과 9/18 발표(My Entry), 참가비 납부 9/18~9/30
    // 2026-08-14 11:00 접수 오픈 → 같은 날 15:19 공식 "정원 초과, 추첨 실시" 공지.
    // ⚠️ 선착순이 아니다 — 공식이 "혼잡하면 나중에 다시 접속하라"고 명시. 마감 전 아무 때나 넣으면 동일.
    // 참가비는 2027 요강에서 확정(국내 ¥19,800 / 해외 $230, 사무수수료·소비세 포함) — 2026과 동액.
    ballot: {
      open: '2026-08-14',
      close: '2026-08-28',
      openTimeJst: '11:00',
      closeTimeJst: '17:00',
      feeDomesticJpy: 19800,
      feeOverseasUsd: 230,
      baggageFeeJpy: 1200, // 짐 보관은 별도 결제(세금 포함)
      resultMonth: '2026년 9월 18일(금)',
      feePayFrom: '2026-09-18',
      feePayBy: '2026-09-30',
      drawingConfirmed: true, // 2026-08-14 공식 공지로 추첨 확정
      fieldSize: 40000,
    },
    // 해외 거주자 전용 창구(영어 사이트). 2026-08-13 17:00 마감 — 일반응모보다 2주 먼저 닫힘.
    // ⚠️ 공식 FAQ: "해외 거주자는 국적 불문 영어 사이트에서 엔트리" → 한국 거주자가 지금 열린
    //    국내 일반응모에 넣어도 유효한지는 공식에 명시 없음(=불명, 본문에서 단정 금지).
    oneTokyoGlobal: {
      open: '2026-07-31',
      close: '2026-08-13',
      annualFeeJpy: 30000,
      closed: true,
      overseasRoute: '해외 거주자는 국적 불문 영어 사이트에서 엔트리(공식 FAQ)',
    },
    intlEligible: true,
    flightFromICN: '인천→하네다 약 2시간 (가장 가까운 메이저)',
    timezone: '한일 시차 0 (KST = JST)',
    note: '20주년 대회. 도쿄도청→긴자→도쿄역 평지 고속 코스. Abbott 에이지그룹 세계선수권 병행.',
  },

  // ── 나머지 6개 (현 사이클 접수 마감 — 허브/감시용 상태) ─────
  sydney2026: {
    name: '시드니마라톤 2026',
    raceDate: '2026-08-30',
    statusLabel: '추첨 마감 · 국제 자선만 잔여',
    charityNote: '국제 자선 파트너 경로($3,000 USD 수준), 대회 임박으로 막차',
    intlEligible: true,
    note: '2025년 7번째 메이저로 승격.',
  },
  chicago2026: {
    name: '시카고마라톤 2026',
    raceDate: '2026-10-11',
    statusLabel: '추첨 마감 · 자선 ~9/15 · 투어 ~8/16',
    charity: { close: '2026-09-15', minFundUsd: 2200 },
    tourClose: '2026-08-16',
    intlEligible: true,
    note: '완전 평지 = PB/BQ 최적. 2027 추첨은 2026년 10월 말 오픈 예정.',
  },
  boston2027: {
    name: '보스턴마라톤 2027',
    raceDate: '2027-04-19',
    statusLabel: 'BQ 기록자만 · 등록주간 2026년 9월',
    note: '추첨 없음. BQ(Boston Qualifying) 기록 보유자만. 커트오프는 기준 대비 수 분 여유 필요. 자선 경로 별도.',
    intlEligible: true,
  },
  newyork2026: {
    name: '뉴욕시티마라톤 2026',
    raceDate: '2026-11-01',
    statusLabel: '추첨 마감 · 자선 일부 잔여',
    charity: { minFundUsd: 2500 },
    intlEligible: true,
    note: '50주년 기념. 5개 자치구 난코스라 기록보다 경험.',
  },
  london2027: {
    name: '런던마라톤 2027',
    raceDate: '2027-04-25',
    statusLabel: '추첨 마감(5/1) · 7월 결과 발표',
    ballotResult: '2026-07',
    intlEligible: true,
    note: '세계 최다 추첨 경쟁(113만+ 신청). 다음 발롯 대비 + 코스 가이드 각도.',
  },
  berlin2026: {
    name: '베를린마라톤 2026',
    raceDate: '2026-09-27',
    statusLabel: '2026 추첨 종료 · 다음은 2027 발롯(대회 직후 오픈 패턴)',
    intlEligible: true,
    // 2027 발롯: 2026-08-15 기준 공식(bmw-berlin-marathon.com) 미게시 = 불명.
    // 확인된 것은 직전 사이클 실적뿐 — 2026 발롯은 2025-09-25 오픈 ~ 11-05 마감,
    // 결과 2025-11-27 통보. 즉 "대회 직후 주에 오픈"이 관측된 패턴.
    // ⚠️ 2차 소스에 '2026-10-01~11-12' 표기가 있으나 공식 확인 불가 → 본문에 쓰지 말 것.
    nextBallot: {
      year: 2027,
      officialAnnouncement: '미게시(2026-08-15 확인)',
      priorCycleOpen: '2025-09-25',
      priorCycleClose: '2025-11-05',
      priorCycleResult: '2025-11-27',
      watchFrom: '2026-09-27',
    },
    note: '세계 최속 평지 코스(세계기록 무대). 2027 발롯 대비 + 코스·PB 에버그린 각도.',
  },
} as const;
