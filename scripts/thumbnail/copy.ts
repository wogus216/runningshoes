/**
 * 썸네일 문구 파생.
 *
 * 이 사이트의 블로그 제목은 `주제 | 후크 — 부연` 구조가 일관된다.
 * 첫 구분자 앞을 제목으로, 그 다음 조각을 부제로 쓴다.
 * 파싱이 어색한 글은 OVERRIDES 로 손으로 고친다 — 자동 파생은 초안일 뿐이다.
 */

/**
 * `kicker` 는 타입에 남겨 둔다 — 자동 파생하지 않지만(카드 하단에 카테고리가 이미
 * "리뷰 · 2026년 6월 5일"로 표기되고, 상세 페이지도 헤더/히어로에서 같은 정보를
 * 반복해 썸네일 안 킥커 텍스트가 중복이었다), OVERRIDES 로 "▬ 소재 해설 · 2편" 같은
 * 편집 킥커를 넣을 수 있는 자리는 유지한다.
 */
export type ThumbCopy = { kicker: string; title: string; subtitle: string; data: string };

/** `|` 와 `—` 중 먼저 나오는 것을 첫 구분자로 삼는다. */
export function splitTitle(raw: string): { head: string; rest: string } {
  const parts = raw.split(/\s+[|—]\s+/);
  return {
    head: (parts[0] ?? '').trim(),
    rest: (parts[1] ?? '').trim(),
  };
}

export function deriveCopy(post: { title: string; category: string }): ThumbCopy {
  const { head, rest } = splitTitle(post.title);
  return {
    kicker: '',
    title: head,
    subtitle: rest,
    data: '',
  };
}

/**
 * 자동 파생이 어색한 글의 수동 교정.
 * Task 3·4에서 육안 검수하며 채운다. 비어 있어도 파이프라인은 돈다.
 */
export const OVERRIDES: Record<string, Partial<ThumbCopy>> = {
  // 출처: posts/2026-08.ts 본문 개요 표 — 종목 하프·10K, 정상가 70,000원,
  // 얼리버드 65,000원(서울신문 회원 선착순 3,000명). 공식 홈페이지 2026-08-06 확인 기준.
  'asics-go-free-run-2026': {
    subtitle: '아식스가 이름을 건 여의도 하프 — 11월 21일(토)',
    data: '하프·10K · 정상가 7만원 · 얼리버드 6.5만(선착순 3,000명)',
  },
  // 원제목 "노바블라스트 5 vs 6 | 세대 비교 — 전족 FF Turbo Squared로 뭐가 달라졌나, ..."
  // 자동 파생 부제 "세대 비교"는 정보가 없다. 다음 조각(변경점 핵심)으로 교체.
  'asics-novablast-5-vs-6-comparison-2026': {
    subtitle: '전족 FF Turbo Squared로 뭐가 달라졌나',
    // 출처: posts/2026-07.ts 본문 표 — 가격 179,000원(line 3612), 무게 249g 실측(line 3604),
    // RunRepeat 종합 93/100(line 3644). 셋 다 제목·부제에 없는 실측치.
    data: '179,000원 · 249g · 종합 93/100',
  },
  // 원제목 "... | 7/1 출시 — 폼·스택 그대로, 어퍼만 바뀐 신형 살 이유 있나"
  // 자동 파생 부제 "7/1 출시"는 출시일이 이미 지나(오늘 2026-08-02) 낡은 정보다.
  // 다음 조각(비교 글의 실제 결론)으로 교체.
  'hoka-clifton-11-vs-10-comparison': {
    subtitle: '폼·스택 그대로, 어퍼만 바뀐 신형 살 이유 있나',
    // 출처: posts/2026-06.ts 본문 표 — 무게 공식 280g·핸즈온 실측 258g(line 1241),
    // 한국 정가 199,000원(추정, line 1246). 출시 전 신상이라 실측·추정을 구분해 표기.
    data: '공식 280g·실측 258g · 199,000원(추정)',
  },
  // 출처: posts/2026-07.ts 본문 표 — 가격 $165(line 3509), 무게 296g(+16g, line 3512),
  // Believe in the Run Tier B(line 3516/3527). 제목엔 없는 실측·평가치.
  'hoka-clifton-pro-preview-2026': {
    data: '$165 · 296g(+16g) · Tier B',
  },
  // 출처: posts/2026-06.ts 본문 — 무게 298g(line 9302), 실측 힐 스택 36.8mm(line 9303),
  // SA(충격흡수) 132(line 9304). 신발 DB(shoes/asics/asics-gel-kayano-33.ts)의
  // weight:298, stackHeight.heel(detailedSpecs 36.8mm)와 대조 일치 확인.
  // 본문의 "209,000원"은 DB price(199000)와 불일치해 가격은 데이터 줄에서 제외.
  'asics-gel-kayano-33-review': {
    data: '298g · 힐 36.8mm · SA 132',
  },
  // 출처: posts/2026-05.ts 본문 표 — 힐 SA 125→131(line 4888), 힐 스택 +2.4mm(line 4884).
  // 제목은 가격(1만원 차이)만 말하므로 스펙 변화로 보완.
  'nike-pegasus-41-vs-42-comparison': {
    data: '힐 SA 125→131 · 스택 +2.4mm',
  },
  // 출처: posts/2026-06.ts 본문 표 — 스택 힐/전족 47/42mm(line 10792), 무게 220~246g(line 10791),
  // 중국 공식가 CNY 599(line 10805).
  'li-ning-red-hare-9-ultra-budget-supertrainer': {
    data: '스택 47/42mm · 220~246g · CNY 599',
  },
  // 출처: posts/2026-06.ts 본문 표 — 3종 직구가(line 7655~7657): 울트라 ~15만, 프로 ~14만, 베이스 ~9.5만원.
  'li-ning-red-hare-9-lineup-2026': {
    data: '울트라 15만·프로 14만·베이스 9.5만원',
  },
  // 출처: posts/2026-05.ts 본문 표 — 무게 v14 295g/v15 330g(line 3072), 드롭 v14 9mm/v15 6mm(line 3075).
  'new-balance-860-v14-vs-v15-comparison': {
    data: 'v14 295g·9mm / v15 330g·6mm',
  },
  // 출처: posts/2026-05.ts stat-grid — 무게 286g(line 10740), 힐 스택 36mm(line 10745);
  // 본문 표 SA 131(line 10792). 제목의 "16만원"과 중복을 피해 가격 대신 스펙 수치로 구성.
  'nike-pegasus-42-review': {
    data: '286g · 힐 스택 36mm · SA 131',
  },
  // 출처: posts/2026-05.ts 본문 — 드롭 4-6mm(line 7003), 2026년 11월 시카고 마라톤 직전 예상(line 7009),
  // 글로벌 정가 $285~330 예상(line 7010).
  '2026-nike-alphafly-4-prototype': {
    data: '드롭 4-6mm · 11월 시카고 직전 · $285~330',
  },
  // '2026-mudo-run-gyeongju' 는 의도적으로 미등록 — 본문이 "종목·참가비·접수 일정·접수처
  // 모두 미발표"라고 명시한다(posts/2026-07.ts line 2603). 검증 가능한 수치가 없어 data 를
  // 비운다(기본값 '' 유지). 규칙선·데이터 줄이 통째로 사라진다.

  // --- Task 4 (나머지 19편 + 비율 이탈 3편) ---

  // 출처: posts/2026-06.ts 본문 표 — "9종"(line 2862/2864), 벨로시티 나이트로4 17.9만(line 2871),
  // 패스트알 엘리트3 37.9만(line 2879). 라인업 종수·가격 범위는 제목·부제에 없다.
  'puma-running-shoes-lineup-tier-guide-2026': {
    data: '9종 · 17.9만~37.9만원',
  },
  // 원제목 세 번째 조각(카드 미노출) "와이드 옵션과 800km 내구성으로 갈아탄 가성비 카본
  // 슈퍼트레이너" 대신, 부제(450km)와 겹치지 않는 무게·드롭 변화로 데이터 줄 구성.
  // 출처: posts/2026-06.ts 본문 표 — 무게 268→250g(line 6090), 드롭 10→8mm(line 6093).
  'puma-deviate-nitro-3-vs-4-comparison': {
    data: '268→250g · 드롭 10→8mm',
  },
  // 출처: posts/2026-07.ts 스펙 표 — 무게 218g(line 1774), 스택 40/36mm(line 1775),
  // 드롭 4mm(line 1776). 제목·부제(RTR 점수·8월 출시)엔 없는 실측 스펙.
  'new-balance-sc-rebel-preview-2026': {
    data: '218g · 스택 40/36mm · 드롭 4mm',
  },
  // 출처: posts/2026-06.ts 발볼 옵션 표 — 뉴발 860 V14 "Narrow / 표준 / 2E / X-Wide"
  // 4단계(line 4150), FAQ에서도 동일 사실 확인(line 4073). 제목·부제는 "와이드 옵션
  // 총정리"라고만 하고 구체 단계 수는 말하지 않는다.
  'stability-shoes-self-diagnosis-fit-guide-2026': {
    data: '860 V14 와이드 4단계',
  },
  // 출처: posts/2026-07.ts 본문 — 고스트맥스4 $165 / 하이페리온엘리트6 $275 동시 출시
  // (line 2811), 하이페리온엘리트6 BITR A Tier(line 2853). 두 모델의 가격은 제목·부제에 없다.
  'brooks-ghost-max-4-hyperion-elite-6-preview-2026': {
    data: '$165 · $275 · BITR A Tier',
  },
  // 출처: posts/2025-01.ts 본문 — "RunRepeat이 700개 이상의 러닝화를 실측한 결과,
  // 평균 토박스 너비는 73.3mm"(line 113). 제목(TOP 10)엔 없는 근거 수치.
  'wide-feet-running-shoes-korea': {
    data: 'RunRepeat 700종 실측 · 평균 73.3mm',
  },
  // 출처: posts/2026-06.ts 본문 표 — "15종"(line 3633/3635), 젤 벤처10 8.9만(line 3642),
  // 메타스피드 레이 39.9만(line 3656).
  'asics-running-shoes-lineup-tier-guide-2026': {
    data: '15종 · 8.9만~39.9만원',
  },
  // 출처: posts/2026-06.ts 본문 표 — "9종"(line 3958/3960), 860 V14 17.9만(line 3968),
  // SC Elite V5 31.9만(line 3975).
  'new-balance-running-shoes-lineup-tier-guide-2026': {
    data: '9종 · 17.9만~31.9만원',
  },
  // 부제(여의도 10km·5만원·선착순 6,500명)에 없는 대회일·기부 규모로 구성.
  // 출처: posts/2026-07.ts 본문 표 — 대회일 2026-09-12(토)(line 5151), 1인당 약 15그루
  // (기존 1그루에서 확대, line 5163).
  '2026-hyundai-forest-run-september': {
    data: '대회일 9/12(토) · 1인당 약 15그루',
  },
  // 출처: posts/2026-06.ts 본문 — "위험 단계(통상 WBGT 31°C 이상)"(line 9833),
  // "시간당 0.5~1L 수분 + 전해질"(line 9816). 제목·부제("몇 도부터 위험할까")는
  // 질문만 던지고 답(임계값)은 없어 데이터 줄로 보완.
  'hot-weather-summer-running-safety-guide-korea': {
    data: 'WBGT 31°C↑ 위험 · 시간당 0.5~1L',
  },
  // 출처: posts/2026-05.ts 본문 표 — Sub-T 강도 80~88% HRmax(line 5873, 본문 재확인
  // line 5952), 주간 빈도 2~3회(line 5856).
  'nsm-norwegian-singles-method-training': {
    data: '심박 80~88% · 주 2~3회',
  },
  // 부제(30만원 vs 35만원)와 겹치지 않게 에너지 리턴·무게차로 구성.
  // 출처: posts/2026-05.ts 본문 — 베이퍼 78% vs 알파 74.9% 에너지 리턴 + 무게차 -35g
  // (line 4166), 표에서 78%/74.9% 재확인(line 4195).
  'nike-vaporfly-4-vs-alphafly-3-comparison': {
    data: '에너지리턴 78% vs 74.9% · -35g',
  },
  // 원제목(posts/2026-02.ts line 7)에 | 나 — 구분자가 없어 자동 파생 시 78자 제목이
  // 통째로 head 가 된다(2줄 클램프 초과, 뒷부분 잘림). 본문 h2 "TREND 1..." 구조를
  // 반영해 짧은 제목/부제로 축약.
  'running-shoe-trends-2026-eva-replacement': {
    title: '2026 러닝화 3대 트렌드',
    subtitle: 'EVA가 사라지는 이유',
    // 출처: posts/2026-02.ts 본문 — "2026년 1조 원 돌파 예상"(line 208), "러닝 인구
    // 1,000만 명 시대"(line 202). 축약 제목엔 없는 시장 규모 수치.
    data: '시장 1조 원 돌파 예상 · 러닝인구 1,000만',
  },
  // 가격대별 4단계 로드맵 글 — 개별 모델 스펙을 하나 뽑으면 전체 4단계를 대표하지
  // 못해 자의적이다. 검증 가능하면서 제목·부제와 겹치지 않는 전역 수치가 없어 data 비움.
  'running-shoes-recommend-by-price-2026': {},
  // 부제(자선·추첨·OTG 3가지 길)에 없는, 원제목 세 번째 조각(카드 미노출)의
  // "비행 2시간·시차 0"을 재사용 + 20주년 사실 추가.
  // 출처: posts/2026-06.ts 본문 — 인천→하네다 약 2시간·시차 0(line 5350, 재확인 5358),
  // "2027년은 20주년 대회"(line 5358).
  'tokyo-marathon-2027-registration-guide': {
    data: '인천~하네다 2시간 · 시차 0 · 20주년',
  },
  // 출처: posts/2026-06.ts 본문 표 — "8종"(line 3168/3170), 슈퍼노바 라이즈2 14.9만
  // (line 3177), 아디오스 프로4 29.9만(line 3184).
  'adidas-running-shoes-lineup-tier-guide-2026': {
    data: '8종 · 14.9만~29.9만원',
  },
  // 출처: posts/2026-07.ts 스펙 비교 표 — 무게 286g vs 249g(line 1504),
  // 힐 스택 37mm vs 39.2mm(line 1505). 제목·부제("검증된 안정 vs 경쾌한 고스택")는
  // 정성적 표현뿐이라 실측 수치로 보완.
  'nike-pegasus-42-vs-asics-novablast-6-daily-2026': {
    data: '286g vs 249g · 37 vs 39.2mm',
  },
  // 출처: posts/2026-07.ts 본문 — 기성 2~5만원(line 4984), 맞춤 15~30만원+(line 5019).
  // 제목·부제는 "기성 vs 맞춤" 구도만 말하고 가격 자체는 없다.
  'plantar-fasciitis-insoles-guide-2026': {
    data: '기성 2~5만원 vs 맞춤 15~30만원',
  },
  // 출처: posts/2026-07.ts 스펙 표 — 가격 219,000원(line 1144, 신발 DB
  // shoes/mizuno/mizuno-neo-vista-3.ts line 10과 일치), 무게 266g(line 1145, DB line 16과
  // 일치), 에너지 리턴 57.7%/57.1%(line 1150). 부제에 이미 SA 167 이 있어 겹치지 않게
  // 가격·무게·반발률로 구성.
  'mizuno-neo-vista-3-review-2026': {
    data: '219,000원 · 266g · 리턴 57%',
  },
  // 출처: posts/2026-04.ts 본문 표 — 대회 일시 2026-06-07(일)(line 190),
  // 선예매 5월 7일(목) 오후 12시(line 208). 제목·부제("상암 10km 이벤트 총정리")와
  // 겹치지 않는 개최일·예매 시각.
  '2026-mudo-run-coupang-play': {
    data: '2026.6.7(일) 개최 · 예매 5/7 정오',
  },
  // 출처: posts/2026-05.ts 본문 — "2025년 9,300명 역대 최다 참가"(line 11120).
  // 제목·부제(접수 D-13·10월 10일 하프 코스)엔 없는 참가 규모.
  '2026-gyeongpo-gangneung-marathon': {
    data: '2025년 9,300명 역대 최다 참가',
  },
  // 본문·썸네일 이중 사용 이미지라 원본은 running-shoe-terminology-guide-diagram.webp 로
  // 백업 후 본문 <img> 를 그쪽으로 재연결했다(posts/2026-04.ts line 24). 썸네일 슬롯만
  // 새 카드 렌더로 교체.
  // 출처: posts/2026-04.ts 본문 — "러닝화 주요 부위 4가지"(figcaption, line 29),
  // "68mm 미만이면 와이드 버전"(line 102).
  'running-shoe-terminology-guide': {
    data: '핵심 부위 4가지 · 토박스 68mm↓ 와이드',
  },
};
