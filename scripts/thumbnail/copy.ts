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
  // 출처: @runner_iffu 2026-08-25 게시 접수 안내(10/11 안양천 다목적광장·10K·5K·
  // 구민 접수 9/1 10시·일반 9/7 10시). ⚠️ 공식 gcrun.kr 이 접속 불가라 원문 대조를 못 했고,
  // 특히 참가비(3만원)는 2024년 제20회 1만원 보도와 차이가 커 data 줄에 넣지 않았다.
  'geumcheon-health-run': {
    title: '수육런, 일반 접수는 6일 뒤',
    subtitle: '완주하면 수육과 막걸리가 나오는 금천구 대회',
    data: '10월 11일 안양천 · 금천구민 9/1 10시 · 일반 9/7 10시',
  },
  // 출처: 나이키 공식 뉴스룸 발표(ZoomX 미드솔·전족부 노출 곡선형 Air Zoom·1세대 대비
  // 에너지 리턴 최소 18%·플레이트 없음) + GQ 코리아 2026-08-21(한국 9월 초) + SneakerNews(8/30).
  // ⚠️ 무게·스택·드롭과 한국 정가는 미공개라 data 줄에 수치로 넣지 않았다.
  'nike-pegasus-plus-2-release-2026': {
    title: '페가수스 플러스 2, ZoomX가 맞았다',
    subtitle: '갈렸던 미드솔 논쟁의 답 — 전족부에 에어가 드러난다',
    data: '8월 30일 글로벌 · 한국 9월 초 · 에너지 리턴 +18%(1세대 대비, 나이키 발표)',
  },
  // 출처: 88run.kr 공식 홈(2026-08-24 확인 — 9/12 미사경정공원·08:30 출발·전 종목 1만원·
  // 접수 8/14 11시·정원 1,988명) + /apply/apply.php 가 "선착순 1988명 조기 마감" 안내로 응답.
  // 비교 참가비는 우리 marathon DB 의 9월 수도권 대회 값(안산 4만 ~ 런서울런 7만).
  'seoul-olympic-88run': {
    title: '1만원 88RUN, 열흘 만에 마감',
    subtitle: '88올림픽 조정 경기장 자리에서 1,988명이 달린다',
    data: '9월 12일 미사경정공원 · 전 종목 1만원 · 같은 달 수도권 10K는 4만~7만원',
  },
  // 출처: posts/2026-08.ts 요강표 — disneyrunincheon2026.com 대회안내(2026-08-22 확인:
  // 10/24 상상플랫폼·15,000명·10K 8만/5K 6.5만·접수 8/31 10시) + @disneykorea 8/20 티켓 오픈 공지.
  'disney-run-incheon-guide': {
    title: '디즈니런 인천 접수 8/31 10시',
    subtitle: '요강보다 접수가 먼저 열린다 — 코스도 출발 시각도 아직',
    data: '10월 24일 상상플랫폼 · 1.5만 명 선착순 · 10K 8만 / 5K 6.5만원',
  },
  // ⚠️ 이 slug 는 실물 신발 좌우 카드(VS) 썸네일을 수동 제작해 쓰고 있다.
  // render.ts 를 이 slug 로 재실행하면 아래 텍스트 템플릿이 카드 썸네일을 덮어쓴다 — 재생성 금지.
  // 아래 문구는 대체본이 필요할 때를 위한 보존용이다.
  // 출처: posts/2026-08.ts 비교표 — 두 신발 모두 신발 DB 기준(무게·스택·드롭·플레이트),
  // SC 레벨 가격·2E 구성은 뉴발란스 코리아 온라인스토어 2026-08-22 확인. 랩 측정치는 양쪽 다 미게시.
  'new-balance-sc-rebel-vs-asics-superblast-3-super-trainer-2026': {
    title: 'SC 레벨 vs 슈퍼블라스트 3',
    subtitle: '같은 259,000원 — 플레이트로 밀 것인가, 폼으로 받칠 것인가',
    data: '218g·40mm·드롭4 플레이트 有 ↔ 239g·46.5mm·드롭8 플레이트 無',
  },
  // 출처: posts/2026-06.ts 본문 + marathon/november.ts — 공식 대회요강(2026-08-10 확인:
  // 8/9 09시 접수 개시·마감일 없는 선착순·참가비 인상) + 2025년 약 2만 명 일주일 마감 실적.
  'sonkeechung-peace-marathon-2026': {
    title: '손기정마라톤 2026 접수 중',
    subtitle: '마감일이 없는 선착순 — 작년엔 오픈 일주일 만에 2만 명이 찼다',
    data: '11월 15일 임진각 · 풀·하프·10K·6K · 풀 7만원(전 종목 1만원 인상)',
  },
  // 출처: posts/2026-08.ts 요강표 — 교토 마라톤 2027 공식 영문 엔트리/요강 페이지
  // (kyoto-marathon.com, 2026-08-20 확인: 해외 쿼터 3,000명 선착순 · 35,000엔 · 9/30 17시 마감).
  'kyoto-marathon-entry-guide': {
    title: '교토만 신청하면 확정된다',
    subtitle: '도쿄·오사카는 8/28 마감에 추첨 — 교토는 9/30까지 선착순',
    data: '해외 쿼터 3,000명 · 35,000엔 · 마감 9/30 17시(일본시간)',
  },
  // 출처: posts/2026-08.ts 비교표 — 7개 대회 날짜·정원·참가비는 마라톤 캘린더 DB + 각 대회 공식 발표
  // (2026-08-21 갱신). 디즈니 8/31 10시·배불런 9/1 14시(@lotteria_kr 8/20 공지, 정원 2,000명)가 다음 관문.
  'october-fun-run-races-2026-compare': {
    title: '10월 축제형 러닝 대회 7개',
    subtitle: '관문이 이틀 연속 — 디즈니 8/31 10시, 배불런 9/1 14시',
    data: '참가비 7~8만원이 표준가, 배불런만 5만원 · 기록 대회는 0개',
  },
  // 출처: posts/2026-08.ts 출시 정보 표 — 뉴발란스 인스타 공지(2026-08-12 확인, 출시일·가격·체험)
  // + 공식 발표 스펙(218g). 패키지 동가 구조는 런유어웨이 공식 접수 안내 기준.
  'new-balance-sc-rebel-korea-launch-2026': {
    title: 'SC 레벨, 와이드 2E까지 나왔다',
    subtitle: '좁다던 갑피에 답이 붙었다 — 공식명 SC Rebel V1, 8개 SKU 동일가',
    data: '259,000원 · 218g 슈퍼 트레이너 · 남성 D·2E / 여성 D',
  },
  // 출처: posts/2026-08.ts 개요 표 — 롯데리아 공식 인스타그램(@lotteria_kr) 발표 게시물,
  // 2026-08-12 확인. 10/4 서울어린이대공원 5K, 티켓 오픈·참가비 미공개(예매처 롯데잇츠 앱만 확정).
  // 출처: posts/2026-08.ts 요강표 — @lotteria_kr 2026-08-20 참가 신청 안내 카드 판독
  // (신청 9/1 14:00~9/3 23:59 · 정상 50,000원/할인 45,000원 · 2,000명 · 만 19세 이상).
  'lotteria-baebulrun-2026': {
    title: '배불런 5만원, 신청 9월 1~3일',
    subtitle: '10월 브랜드 펀런 중 가장 싸다 — 단 만 19세 이상, 2,000명',
    data: '10/4 서울어린이대공원 5K · 할인가 45,000원(8월 중 리아 불고기·새우 구매 시)',
  },
  // 출처: posts/2026-08.ts 본문 개요 표 — 공식 접수 사이트(kw-marathon.com 라운드랩 RUN),
  // 2026-08-12 확인. 11/8 춘천, 하프·10K·5K, 5,000명 선착순, 완주 기념품 라운드랩 제품 4종.
  'round-lab-run-2026': {
    title: '완주하면 화장품 4종',
    subtitle: '2026 라운드랩 RUN — 접수 진행 중, 5,000명 선착순',
    data: '11월 8일 춘천 의암호 · 하프·10K·5K',
  },
  // 출처: posts/2026-08.ts 본문 개요 표 — 공식 대회요강(busanmarathon.com) + KNN 공지
  // (knn.co.kr/event/493910), 2026-08-12 확인. 12/6 개최, 풀 8만·10K 6만, 12,000명 선착순.
  'busan-bridge-marathon-2026': {
    subtitle: '광안대교·부산항대교·남항대교를 하루에 — 접수 8/24 10시',
    data: '12월 6일 · 풀 8만·10K 6만 · 12,000명 선착순',
  },
  // 출처: posts/2026-08.ts 본문 — 롯데 공식 블로그 2025 발표문(blog.lotte.co.kr/49031) +
  // 파이낸셜뉴스 2025-08-20자(5시간 매진). 2026 일정은 미발표라 작년 실적만 데이터 줄에 쓴다.
  'style-run-2026-preview': {
    subtitle: '작년엔 접수 5시간 매진 — 2026 공지는 아직, 8월 하순 유력',
    data: '작년: 10/19 잠실 · 6,000명 · 마뗑킴 키트',
  },
  // 아래 4건 출처: posts/2026-08.ts 각 글의 비교표 — 전부 신발 DB 실측(가격·무게·내구·km당 비용).
  'nike-pegasus-premium-vs-puma-velocity-nitro-4-2026': {
    title: '페가수스 프리미엄 vs 벨로시티 4',
    subtitle: '10만원 더 비싼데 84g 무겁다',
    data: '27.9만 vs 17.9만 · 308g vs 224g · km당 465원 vs 358원',
  },
  'asics-megablast-vs-nike-vomero-18-max-cushion-2026': {
    title: '메가블라스트 vs 보메로 18',
    subtitle: '둘 다 쿠션 10점인데 80g이 갈린다',
    data: '218g vs 298g · 스택 48.1mm vs 43mm · km당 598원 vs 291원',
  },
  'brooks-ghost-17-vs-nike-pegasus-42-daily-2026': {
    title: '고스트 17 vs 페가수스 42',
    subtitle: '스펙이 거의 같다 — 그래서 수명이 가른다',
    data: '둘 다 16.9만 · 289g vs 286g · 내구 800km vs 600km',
  },
  'adidas-adizero-evo-sl-vs-asics-novablast-6-daily-2026': {
    title: '에보 SL vs 노바블라스트 6',
    subtitle: '3만원 아끼면 km당 비용이 63% 싸진다',
    data: '223g vs 249g · 반발 9 vs 7 · km당 418원 vs 256원',
  },
  // 출처: 나이키 코리아 공식 모집 안내(nike.com/kr/running/swoosh-runners, 2026-08-10 확인) —
  // 접수 8.10~8.20, 최종 30명(선발전 20 + 슈퍼패스 10), 연간 500만원 제품 + 100만원 훈련비.
  'nike-swoosh-runners-2026-recruitment': {
    title: '나이키 스우시 러너스 모집',
    subtitle: '8월 20일 마감 — 기록 없이 뽑히는 10자리가 있다',
    data: '30명 선발 · 연 500만원 제품 + 100만원 훈련비 · 5,000m 트랙 선발전',
  },
  // 출처: posts/2026-08.ts 비교표 — 정가 둘 다 179,000원, 무게 249g/254g,
  // 쿠션·반발 9/7 대 7/9. 전부 신발 DB 실측(asics-novablast-6.ts · adidas-boston-13.ts).
  'asics-novablast-6-vs-adidas-boston-13-daily-2026': {
    title: '노바블라스트 6 vs 보스턴 13',
    subtitle: '같은 17.9만원, 5g 차이인데 성격이 반대',
    data: '쿠션 9 vs 7 · 반발 7 vs 9 · 플레이트 없음 vs 유리섬유 로드',
  },
  // 출처: posts/2026-08.ts 비교표 — 무게 193g/248g, 드롭 7/10mm, 한국 정가 둘 다 229,000원.
  // 전부 신발 DB 실측(asics-magic-speed-5.ts · nike-zoom-fly-6.ts).
  'asics-magic-speed-5-vs-nike-zoom-fly-6-carbon-trainer-2026': {
    title: '매직스피드 5 vs 줌 플라이 6',
    subtitle: '같은 22.9만원, 55g이 갈린다 — 다치는 곳도 정반대',
    data: '193g vs 248g · 드롭 7mm vs 10mm · 가격·수명·목표 페이스는 동일',
  },
  // 출처: posts/2026-08.ts 비교표 — 무게 223g/254g, 한국 정가 209,000/179,000원,
  // 플레이트 유무(에보 SL 없음 / 보스턴 13 유리섬유 Energy Rods 2.0). 전부 신발 DB 실측.
  'adidas-adizero-evo-sl-vs-boston-13-daily-2026': {
    title: '에보 SL vs 보스턴 13',
    subtitle: '3만원 더 주고 31g을 산다 — 비싼 쪽에 플레이트가 없다',
    data: '223g vs 254g · 20.9만 vs 17.9만 · 플레이트 없음 vs 유리섬유',
  },
  // 출처: posts/2026-08.ts 본문 자가진단 1·2 — Knopp et al.(2023) 개인 반응 +11.4%~−11.3%,
  // Day & Hahn(2019) 시속 14km에서 9명 중 7명이 평범한 신발 우세.
  'carbon-shoes-not-for-everyone-2026': {
    title: '카본화가 나한테도 맞을까',
    subtitle: '사기 전 자가진단 5가지 — 안 맞는 사람은 실재한다',
    data: '개인 반응 +11.4% ~ −11.3% · 14km/h에선 9명 중 7명이 일반화 우세',
  },
  // 출처: posts/2026-08.ts 본문 개요·종목 표 — 공식 대회요강(marathon.busan.com/info1,
  // 2026-08-10 확인). 12,000명 선착순, 15K 7만·10K 6만·5K 5만, 10/25 개최.
  'busan-sea-marathon-2026': {
    title: '광안대교 위를 달린다',
    subtitle: '2026 부산바다마라톤 — 마감일 없는 선착순',
    data: '10월 25일 · 15K·10K·5K · 12,000명 선착순',
  },
  // 출처: RunRepeat 랩 실측(두 모델 모두 US M9 동일 기준) — 에너지 리턴 힐 54.4%→66.1%,
  // 저온 경화율 21%→7%, 종합 79점→90점. 가격은 On 코리아 공식 259,000원으로 양쪽 동일.
  'on-cloudmonster-hyper-vs-3-hyper-comparison-2026': {
    title: '클라우드몬스터 하이퍼 vs 3 하이퍼',
    subtitle: '같은 25.9만원, 6g 무거워진 신형이 앞선 이유',
    data: '에너지 리턴 54%→66% · 저온 경화 21%→7% · 랩 79→90',
  },
  // 출처: posts/2026-08.ts 본문 스펙 표 — RN 글로벌 출시 10/8·$150(외신 기준),
  // Fly 2027년 4월. 나이키 공식 뉴스룸 2026-08-03 발표 기준.
  'nike-hybrid-hyrox-shoes-2026': {
    title: '나이키 하이브리드 RN·플라이',
    subtitle: '나이키의 첫 하이록스 대응 신발 — 발표문엔 HYROX가 없다',
    data: 'RN 10/8 글로벌 · $150 · 플라이 2027년 4월',
  },
  // 출처: posts/2026-08.ts 본문 개요 표 — 발표 일정·취소/양도 규정은 카카오프렌즈 런 공식 안내
  // 페이지(b.kakao.com, 2026-08-20 확인), 대회 개요는 카카오 공식 보도자료(2026-08-04).
  'kakao-friends-run-2026': {
    title: '카카오프렌즈 런 당첨 발표',
    subtitle: '1차 8/20, 잔여 티켓 추가 발표는 8/30까지 — 안내는 톡채널 개별 통보',
    data: '10월 10일 탄천 · 5K·10K · 확정 후 취소·양도 불가',
  },
  // 출처: posts/2026-08.ts 요강 — 러너블 대회 페이지(2026-08-20 확인: 10/25 07:30 출발,
  // 만 14세 이상, 9/21 17시까지 100% 환불) + 접수 개시 8/20 14시.
  'brave-cookie-run-seoul-2026': {
    title: '용감한 쿠키RUN 접수 시작',
    subtitle: '쿠키런의 첫 오프라인 대회 — 마감까지 한 달, 그때까지 전액 환불',
    data: '10월 25일 어린이대공원 · 10K · 7만원 · 마감 9/21 17시',
  },
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
  // 출처: posts/2026-08.ts 4단 사다리 표 — 트레일 15종의 한국 공식가 하단(젤 벤처 10
  // 8.9만)과 상단(S/LAB 펄사 4 34만). 종수·브랜드 수는 신발 DB `category: '트레일'`
  // 전수(2026-08-19 실측: 호카 3·살로몬 3·아디다스 2·아식스 2·나이키 2·써코니 2·뉴발란스 1).
  'trail-running-shoes-lineup-tier-guide-2026': {
    data: '7개 브랜드 15종 · 8.9만~34만원 (한국 공식가)',
  },
  // 출처: posts/2026-08.ts 3절 "얼마나 뛰나" — 20~40분·3~6km 권장 범위와
  // 2절의 페이스 기준(대화가 자연스럽게 이어지는 속도). 효과는 조건부라 데이터 줄에 넣지 않는다.
  'recovery-run-vs-lsd-guide-2026': {
    data: '20~40분 · 3~6km · 대화 가능한 페이스',
  },
};
