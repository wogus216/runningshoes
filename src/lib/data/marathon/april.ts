import type { MarathonEvent } from '@/types/marathon';

export const aprilEvents: MarathonEvent[] = [
  {
    id: 'gyeongju-cherry-blossom-2026',
    name: '제33회 경주벚꽃마라톤',
    date: '2026-04-04',
    month: '4월',
    location: '경주 보덕동행정복지센터 옆 헬기장',
    region: '경북',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: true,
    website: 'https://www.cherrymarathon.co.kr/',
    description: '경주시가 주최하고 경주시체육회가 주관한 2026년 봄 대회로, 하프·10K·5K를 운영했습니다. 보덕동행정복지센터 앞에서 출발해 종목별 반환점을 거쳐 돌아오는 코스입니다.',
    courseInfo: {
      courseDescription: '하프는 보덕동행정복지센터 앞에서 출발해 경주여고 뒤 반환점과 보문단지를 지나 돌아오는 경로입니다. 10K는 경주월드 방향 반환점을, 5K는 바르게살자 표지석 앞 2.5km 반환점을 이용합니다. 주최 측 코스 안내에는 육상연맹 공식 인증 코스라고 명시돼 있습니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 50000 },
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 30000 },
      ],
      timeLimits: [
        { distance: '하프', hours: 2, minutes: 30 },
        { distance: '10K', hours: 1, minutes: 30 },
        { distance: '5K', hours: 1, minutes: 30 },
      ],
      startTime: '08:00',
    },
    logistics: {
      parking: '공식 안내상 경주엑스포대공원 동·서편 주차장은 당일 07:00 이후 입차가 제한됐습니다. 무료 주차 여부는 확인하지 못했습니다.',
      shuttle: '2026년 3월 30일 공지: 고속버스터미널 → 행사장(엑스포 삼거리·천군휴게소) 06:00~07:00, 행사장 → 고속버스터미널 09:00~12:00. 만차 또는 10분 간격 출발 안내입니다.',
      bagStorage: true,
    },
    lastVerified: '2026-11-11',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '2026 참가부문·참가비·제한시간', url: 'https://www.cherrymarathon.co.kr/info/index02.php' },
        { title: '공식 코스 안내', url: 'https://www.cherrymarathon.co.kr/course/index01.php' },
        { title: '참가자 유의사항·물품보관', url: 'https://www.cherrymarathon.co.kr/info/index05.php' },
        { title: '주차장 안내', url: 'https://www.cherrymarathon.co.kr/course/index04.php' },
        {
          title: '2026년 3월 30일 셔틀버스 공지',
          url: 'https://www.cherrymarathon.co.kr/community/index01.php?abmode=view&code=B5&no=12394',
        },
      ],
      note: '2026년 개최분 안내입니다. 누적 상승고도·난이도 등급·급수대 수와 간격은 원문에서 확인하지 못해 표시하지 않습니다. 차기 대회에 그대로 적용하지 마세요.',
    },
  },
  {
    id: 'jeju-ultra-2026',
    name: '제25회 제주 국제울트라마라톤',
    date: '2026-11-07',
    month: '11월',
    location: '제주 탑동공원 출발 · 보존 요강 기준',
    region: '제주',
    distances: ['울트라'],
    status: '대회종료',
    isMajor: false,
    description: '7월 6일 개인 블로그에 보존된 제25회 요강은 2026년 11월 7~8일 제주 도로 울트라를 안내한다. 기존 4월 4일 일정을 그대로 종료된 대회로 소개하지 않도록 참고 날짜를 수정했으며, 공식 원문·최종 변경·실제 개최 여부 대조는 미완료다. 보존본은 200km·100km·50km 도로 종목을 구분하며, 종전 4월 안내에 섞였던 트레일 종목을 11월 확정 종목으로 옮기지 않았다.',
    scheduleUnverified: true,
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '7월 6일 개인 블로그의 KUMF 요강 보존본 · 공식 직접 확인 아님', url: 'https://blog.naver.com/tiffany9/224338261042' },
        { title: '러닝온 11월 일정 소개 · 2차 자료', url: 'https://runningon.co.kr/races/jeju-international-ultra-2026' },
      ],
      note: '공식 일정 확인을 완료한 대회가 아니다. 7월 6일 보존본은 4월 4일 취소와 11월 7일 재공지를 설명하고 요강 본문도 11월 7~8일로 적혀 있다. 원문 KUMF의 HTTPS 연결은 실패했으며 보존본의 현재성·누락 여부는 검증하지 못했다. 참고 날짜·종목만 재정리하고 요금·출발 시각·컷오프·참가 자격·숙박 할인·완주 집계는 확정값으로 추가하지 않았다. 일정이 지난 사실과 실제 개최 여부를 구분한다.',
    },
    lastVerified: '2026-11-11',
  },
  {
    id: 'gunsan-saemangeum-2026',
    name: '2026 군산 새만금마라톤',
    date: '2026-04-05',
    month: '4월',
    location: '전북 군산 월명종합경기장',
    region: '전북',
    distances: ['풀코스', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://www.gunsanmarathon.com/contents.htm?code=1_2',
    description: '2026년 4월 5일 군산 월명종합경기장에서 출발한 대회다. 공식 개인전은 풀·10km·5km이며, 하프앤하프는 2명이 42.195km를 나누는 별도 팀 종목이다. 개인전 참가비는 풀 6만원·10km 4만원·5km 2만5천원, 하프앤하프는 팀당 9만원으로 안내했다.',
    registrationStart: '2026-01-05',
    registrationNote: '기본 접수는 1월 5일 10시 선착순이었다. 본 접수 조기마감 뒤 별도 공지는 잔여분 추가접수를 1월 27일 14시부터, 입금은 1월 29일 23:59까지로 구분했다. 추가접수 종목·기념티 사이즈는 잔여분에 한정됐다. 기본 취소·환불 안내의 2월 13일은 접수 개시일이나 추가접수 입금 기한이 아니다.',
    raceInfo: {
      entryFees: [
        { distance: '풀코스 개인', fee: 60000 },
        { distance: '10K 개인', fee: 40000 },
        { distance: '5K 개인', fee: 25000 },
        { distance: '하프앤하프 2인 1팀 · 합계 42.195km', fee: 90000 },
      ],
      startTime: '07:30',
      timeLimits: [
        { distance: '풀코스', hours: 5, minutes: 0 },
        { distance: '10K', hours: 1, minutes: 50 },
        { distance: '5K', hours: 1, minutes: 0 },
      ],
      aidInterval: '주최 유의사항상 급수는 5km부터 매 5km, 스폰지는 7.5km부터 매 5km 간격 안내',
    },
    courseInfo: {
      courseDescription: '개인 풀과 2인 하프앤하프는 합계 42.195km 코스를 사용한다. 공식 개요는 월명종합운동장에서 내항·서래교·금강하구둑·나포 방면을 거쳐 돌아오는 풀과 별도 10km·5km 코스를 구분한다. 하프앤하프를 개인 하프 접수로 해석하지 않는다.',
    },
    logistics: { bagStorage: true },
    postRaceNote: '4월 6일 공식 공지는 성명·종목·배번·기록과 직인을 포함하도록 기록증 양식을 변경했다고 알렸다. 변경 양식이 필요한 참가자에게 기록 조회 후 다운로드를 안내했으며, 개인 기록이나 5km 전자기록의 존재를 이번에 확인한 것은 아니다.',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '2026 공식 종목·팀 구성·참가비·장소', url: 'https://www.gunsanmarathon.com/contents.htm?code=1_2' },
        { title: '집결 06시·제한시간·급수·5km 기록칩 제외', url: 'https://www.gunsanmarathon.com/contents.htm?code=1_3' },
        { title: '개인전과 단체전·기본 접수 안내', url: 'https://www.gunsanmarathon.com/contents.htm?code=3_1' },
        {
          title: '1월 27일 잔여분 추가접수·입금 기한 공지',
          url: 'https://www.gunsanmarathon.com/contents.htm?code=5_1&idx=9&mode=view&page=3',
        },
        {
          title: '4월 6일 기록증 양식 변경 공지',
          url: 'https://www.gunsanmarathon.com/contents.htm?code=5_1&idx=98&page=1&mode=view',
        },
      ],
      note: '2026년 개최분이다. 집결 06:00와 출발 07:30를 구분하며 5km는 기록칩 제공 대상이 아니다. 팀당 9만원을 개인 하프 참가비로 표시하지 않는다. 요강의 종목별 모집 인원은 실제 참가·완주 인원과 다르다. 개별 물품 수령·환불 입금·기록증 다운로드 결과는 확인하지 않았다.',
    },
    lastVerified: '2026-11-11',
  },
  {
    id: 'yeongju-sobaeksan-2026',
    name: '2026 영주소백산마라톤',
    date: '2026-04-05',
    month: '4월',
    location: '경북 영주시민운동장',
    region: '경북',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://www.sobaekmarathon.go.kr/yeongju/',
    description: '2026년 4월 5일 영주시민운동장 집결의 풀·하프·10km·5km 대회다. 공식은 08:00 집결·09:00부터 종목별 출발을 안내했다. 당시 참가비는 풀 5만원·하프 4만원·10km 3만원·5km 2만원이며, 5km는 기록칩과 공식 개인 기록을 제공하지 않는다고 별도 안내했다.',
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 50000 },
        { distance: '하프', fee: 40000 },
        { distance: '10K', fee: 30000 },
        { distance: '5K', fee: 20000 },
      ],
      startTime: '09:00부터 종목별 순차 출발',
      timeLimits: [
        { distance: '풀코스', hours: 5, minutes: 0 },
        { distance: '하프', hours: 3, minutes: 0 },
        { distance: '10K', hours: 2, minutes: 0 },
        { distance: '5K', hours: 1, minutes: 30 },
      ],
      aidInterval: '주최 유의사항은 약 2.5km 간격 급수·약 5km 간격 간식을 안내하며 위치·구성은 운영 상황에 따라 바뀔 수 있다고 고지했다.',
    },
    registrationNote: '기본 유의사항의 환불 접수는 1월 25일 자정까지였지만, 2월 3일 별도 2차 환불 공지는 접수를 2월 28일 24시까지 연장하고 3월 1~31일 순차 지급 예정이라고 안내했다. 첫 안내만으로 최종 환불 기한을 1월 25일로 확정하지 않는다. 실제 개별 환불 완료 여부는 확인하지 않았다.',
    logistics: {
      bagStorage: true,
      shuttle: '당시 무료 셔틀은 개인 참가 신청 시 별도 신청한 본인 대상이었다. 단체 참가·동반자 이용은 제외되며 지역 신청 인원에 따라 취소될 수 있다는 조건이 있었다. 현재 또는 다음 회차 이용 가능을 뜻하지 않는다.',
    },
    postRaceNote: '공식 홈페이지는 기록 조회와 협력 사진 서비스 이용 방법을 안내하고 있다. 5km 공식 기록 제외 조건을 구분해야 하며, 사진 검색·고화질 구매 및 개인별 사진 유무는 확인하지 않았다.',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '2026 공식 홈페이지·5km 공식기록 제외 안내', url: 'https://www.sobaekmarathon.go.kr/yeongju/' },
        { title: '공식 요강·참가비·개인 셔틀 조건', url: 'https://www.sobaekmarathon.go.kr/yeongju/text/info' },
        { title: '공식 집결·제한시간·급수 유의사항', url: 'https://www.sobaekmarathon.go.kr/yeongju/text/notice' },
        {
          title: '2월 3일 2차 환불 접수·지급 계획 공지',
          url: 'https://www.sobaekmarathon.go.kr/yeongju/board/notice/?action=view&f_idx=43117&page=1',
        },
      ],
      note: '2026년 회차의 현재 표시 원문과 2차 환불 공지 이미지를 대조했다. 2차 환불 접수 마감은 2월 28일 24시, 지급 계획은 3월 1~31일로 기본 안내의 1월 25일과 구분한다. 기본 유의사항의 넷타임 설명을 5km에 일괄 적용하지 않는다. 종목별 모집 계획과 참가·완주 실적은 구분하며, 셔틀 신청 마감·현재 환불 상태·개인 기록을 조회하지 않았다.',
    },
    lastVerified: '2026-11-11',
  },
  {
    id: 'jinju-namgang-2026',
    name: '공군과 함께하는 2026 진주남강마라톤',
    date: '2026-04-05',
    month: '4월',
    location: '경남 진주 공군교육사령부 연병장 · 남강 일원',
    region: '경남',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://www.gnmarathon.co.kr/ko/sub1_1.html',
    description: '2026년 4월 5일 공군교육사령부 연병장 집결의 하프·10km·5km 대회다. 공식 일정은 08:00 집결, 하프 09:30·10km 09:45·5km 10:00 출발로 구분했다. 12월 진주마라톤과 별개이며 이번 4월 대회에는 풀코스가 안내되지 않았다.',
    registrationStart: '2026-02-05',
    registrationNote: '공식 신청안내는 2월 5일 10시 접수 개시, 별도 공지는 카드·실시간 계좌이체 결제를 2월 6일 10시부터로 구분했다. 후속 환불 공지는 2월 10일 미결제 신청 삭제와 2월 25일 자정 환불 신청 마감을 안내했다. 앞선 마감 공지 이미지의 결제 기한은 1월 10일로 적혀 있어 후속 공지의 2월 10일과 차이가 남아 있다. 추가접수는 진행하지 않는다고 공지했다.',
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 40000 },
        { distance: '10K', fee: 35000 },
        { distance: '5K 일반', fee: 20000 },
        { distance: '5K 학생부', fee: 15000 },
      ],
      startTime: '하프 09:30 · 10K 09:45 · 5K 10:00',
      timeLimits: [
        { distance: '하프', hours: 3, minutes: 0 },
        { distance: '10K', hours: 2, minutes: 0 },
      ],
    },
    logistics: { bagStorage: true },
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '2026 공식 장소·3개 종목·참가비', url: 'https://www.gnmarathon.co.kr/ko/sub1_1.html' },
        { title: '하프·10km·5km 출발 일정표', url: 'https://www.gnmarathon.co.kr/ko/sub1_2.html' },
        { title: '2월 5일 접수·학생부 참가비', url: 'https://www.gnmarathon.co.kr/ko/sub2_1.html' },
        { title: '5km 칩 미지급·제한시간 유의사항', url: 'https://www.gnmarathon.co.kr/ko/sub2_2.html' },
        { title: '2월 6일 카드·실시간 계좌이체 개시 공지', url: 'https://www.gnmarathon.co.kr/bbs/board.php?bo_table=notice&wr_id=1' },
        { title: '모집 완료·결제 기한 원문 이미지', url: 'https://www.gnmarathon.co.kr/bbs/board.php?bo_table=notice&wr_id=3' },
        {
          title: '2월 10일 미결제 삭제·2월 25일 환불 마감 이미지',
          url: 'https://www.gnmarathon.co.kr/bbs/board.php?bo_table=notice&wr_id=5',
        },
        { title: '추가접수 없음 공지 이미지', url: 'https://www.gnmarathon.co.kr/bbs/board.php?bo_table=notice&wr_id=6' },
      ],
      note: '2026년 4월 남강 대회에서 기존 풀코스 표기를 제외했다. 5km는 기록칩이 없고 제한시간은 심판부 지시로 안내되어 고정 수치를 넣지 않았다. 접수·카드결제 개시·입금 마감·환불 마감을 구분했으며 원문의 날짜 오기는 후속 공지와 함께 밝혔다. 군부대 별도 신청분과 일반 모집 계획을 합쳐 실제 완주 인원으로 사용하지 않는다.',
    },
    lastVerified: '2026-11-11',
  },
  {
    id: 'naju-yeongsangang-2026',
    name: '제12회 나주영산강마라톤',
    date: '2026-04-05',
    month: '4월',
    location: '전남 나주종합스포츠파크',
    region: '전남',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://www.newsis.com/view/NISX20260405_0003578209',
    description: '주최사 뉴시스의 2026년 4월 5일 개최 보도는 나주종합스포츠파크에서 제12회 나주영산강마라톤을 운영했다고 알렸다. 하프·10km·5km의 3개 종목이며, 같은 해 10월의 MBN 전국 나주마라톤과는 별개다.',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '주최사 뉴시스 2026 개최 결과·장소·3개 종목', url: 'https://www.newsis.com/view/NISX20260405_0003578209' },
      ],
      note: '뉴시스 광주전남본부·엠디에스앤씨·나주마라톤동호회가 주최·주관한 2026년 4월 회차다. 주최사 기사에 나온 약 6,500명 참여를 종목별 칩 기록 또는 실제 완주자 집계로 사용하지 않는다. 대회 홈페이지는 현재 접속하지 못해 주최사의 개최 결과를 연결했다. 참가비·최종 접수/환불 기한·정확한 출발 시각·컷오프는 이 기사로 확정하지 않았다.',
    },
    lastVerified: '2026-11-11',
  },
  {
    id: 'daecheongho-cherry-2026',
    name: '대청호 벚꽃길 마라톤',
    date: '2026-04-11',
    month: '4월',
    location: '대전 동구 신상동 282번지 벚꽃한터',
    region: '대전',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://www.donggu.go.kr/dg/kor/article/photoNews/141848',
    description: '2026년 4월 11일 대전 동구 벚꽃한터에서 열린 봄 벚꽃길 대회다. 공식 안내의 검색 보존본은 하프·10km·5km를 구분하고, 08:00 식전행사 뒤 08:30부터 마라톤 출발을 안내했다. 10월 대덕구 대청호마라톤과는 다른 대회다.',
    raceInfo: { startTime: '08:30부터 · 08:00 식전행사와 구분' },
    courseInfo: {
      courseDescription: '공식 2026 코스 안내의 검색 보존본 기준, 벚꽃한터에서 출발·도착한다. 5km는 절골입구를 지나 밤실 도입부, 10km는 사성모래재 부근, 하프는 주촌동 토방터 부근에서 돌아오는 코스로 안내됐다. 이 설명을 독립 실측 거리·누적 고도 확인으로 확대하지 않는다.',
    },
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '대전 동구 4월 11일 개최 사진·장소 확인', url: 'https://www.donggu.go.kr/dg/kor/article/photoNews/141848' },
        { title: '공식 2026 대회안내 · 검색 보존본', url: 'https://www.dcrace.co.kr/page/page141' },
        { title: '공식 2026 종목별 반환점 · 검색 보존본', url: 'https://www.dcrace.co.kr/page/page143' },
        { title: '공식 홈페이지·3월 5일 17시 환불 공지 요약 · 검색 보존본', url: 'https://www.dcrace.co.kr/' },
      ],
      note: '현재 동구의 개최 기록과 공식 홈페이지 검색 보존본을 대조했다. 공식 식순의 출발은 08:30부터이며 표지의 08:00는 행사 시작 안내다. 최초 접수 계획은 2월 2일~3월 6일, 홈페이지 3월 3일 공지 요약의 환불 요청은 3월 5일 17시까지로 다르다. 대회 홈페이지는 11월 11일 인증서 오류로 현재 원문을 직접 재확인하지 못했다. 참가비·종목별 최종 컷오프·개인 지급 결과는 확정하지 않는다.',
    },
    lastVerified: '2026-11-11',
  },
  {
    id: 'seomjingang-flower-2026',
    name: '제15회 MBC섬진강꽃길마라톤',
    date: '2026-04-12',
    month: '4월',
    location: '전남 광양시 다압면 신원리 섬진강둔치 · 섬진강매화로 1300',
    region: '전남',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://gwangyang.go.kr/kor/board.es?act=view&bid=0057&list_no=199171&mid=a11007000000&tag=',
    description: '광양시의 2026년 개최·성료 자료로 확인한 제15회 MBC 섬진강 꽃길 대회다. 4월 12일 광양시 다압면 신원리 섬진강둔치에서 하프·10km·5km를 운영했다. 하프 09:00, 10km 09:10, 5km 09:20 순차 출발로 안내됐다.',
    raceInfo: {
      startTime: '하프 09:00 · 10K 09:10 · 5K 09:20',
      timeLimits: [
        { distance: '하프', hours: 3, minutes: 0 },
        { distance: '10K', hours: 2, minutes: 0 },
        { distance: '5K', hours: 1, minutes: 0 },
      ],
    },
    courseInfo: {
      courseDescription: '광양시 성료 자료 기준, 하프는 섬진강 끝들마을 자전거도로 방면 왕복, 10km는 중도마을 유채꽃단지, 5km는 매화마을 방향으로 구분됐다. 2026년 출발·도착 행사장은 광양시 다압면 신원리 섬진강둔치이며 다른 연도의 하동 개최 장소를 대입하지 않는다.',
    },
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        {
          title: '광양시 3월 25일 개최 공지·종목별 출발·제한시간',
          url: 'https://gwangyang.go.kr/kor/board.es?act=view&bid=0057&list_no=198533&mid=a11007000000&tag=',
        },
        {
          title: '광양시 4월 14일 성료·종목별 경유지',
          url: 'https://gwangyang.go.kr/kor/board.es?act=view&bid=0057&list_no=199171&mid=a11007000000&tag=',
        },
      ],
      note: '2026년 제15회 광양 개최분이다. 개최 공지와 성료 자료를 함께 대조했으며 08:30 개회식과 첫 종목 09:00 출발을 구분했다. 시의 약 5천 명 참여 발표를 개별 기록 검증이나 전원 완주 증명으로 확대하지 않는다. 참가비·개별 기념품 수령·실제 스포츠마사지 이용 여부는 확인하지 않았다.',
    },
    lastVerified: '2026-11-11',
  },
  {
    id: 'chuncheon-hoban-2026',
    name: '제23회 춘천호반마라톤',
    date: '2026-04-18',
    month: '4월',
    location: '춘천 송암스포츠타운 종합경기장',
    region: '강원',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: true,
    website: 'https://www.chuncheon.go.kr/happiness/life-news/?bbsId=BBSMSTR_000000000294&flag=view&nttId=464567',
    description: '함기용 선생의 보스턴마라톤 우승을 기념해 강원일보사가 주최한 2026년 봄 대회입니다. 하프·10K·5K를 운영했으며, 송암스포츠타운에서 출발해 종목별 반환점을 돌아오는 코스였습니다.',
    courseInfo: {
      courseDescription: '춘천시의 2026년 교통통제 안내 기준입니다. 하프는 의암댐·삼악산 입구·덕두원교를 지나 춘천파크골프장 입구에서, 10K는 별카페에서, 5K는 자전거쉼터에서 반환해 송암스포츠타운으로 돌아옵니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 55000 },
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 45000 },
      ],
      startTime: '09:00',
    },
    registrationEnd: '2026-04-08',
    registrationNote: '주최사 2026년 4월 7일 안내: 4월 8일 14:00 접수 마감. 모집 안내는 선착순 5,000명이었으며 실제 완주자 수와 구분합니다.',
    lastVerified: '2026-11-11',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        {
          title: '춘천시 2026 교통통제·반환점 안내',
          url: 'https://www.chuncheon.go.kr/happiness/life-news/?bbsId=BBSMSTR_000000000294&flag=view&nttId=464567',
        },
        { title: '주최사 2026 참가비·접수 마감 안내', url: 'https://www.kwnews.co.kr/article/202604062106620' },
        { title: '주최사 제23회 대회 공고', url: 'https://www.kwnews.co.kr/article/202603052099407' },
      ],
      note: '기존 접속처 kw-marathon.com은 현재 다른 대회인 2026 라운드랩 RUN을 안내해, 4월 호반마라톤의 춘천시 보존 공지로 연결합니다. 2026년 호반 대회의 제한시간·누적 상승고도·급수·주차 대수·셔틀은 확인하지 못해 표시하지 않습니다.',
    },
  },
  {
    id: 'gyeonggi-marathon-2026',
    name: '제24회 경기마라톤',
    date: '2026-04-19',
    month: '4월',
    location: '수원종합운동장 (경수대로 893)',
    region: '경기',
    distances: ['풀코스', '하프', '10K', '5K'],
    status: '대회종료',
    isMajor: true,
    website: 'https://www.kgmarathon.co.kr/kgmarathon/',
    description: '경기일보·경기도육상연맹이 공동 주최한 제24회 대회입니다. 수원종합운동장을 출발·도착지로 운영했으며, 주최사 공고는 풀코스의 화성 융·건릉 경유와 풀·하프의 대한육상연맹 공인을 안내했습니다.',
    courseInfo: {
      courseDescription: '주최사 2026 공고는 수원종합운동장 기점과 화성 융·건릉을 돌아오는 풀코스를 안내했습니다. 기존 광교호수·수원천 경유 설명은 근거를 확인하지 못해 철회했습니다. 풀·하프 공인 안내를 10K·5K 전체 공인으로 확대하지 않습니다.',
    },
    raceInfo: {
      entryFees: [
        { distance: '풀코스', fee: 70000 },
        { distance: '하프', fee: 60000 },
        { distance: '10K', fee: 50000 },
        { distance: '5K', fee: 40000 },
      ],
      timeLimits: [
        { distance: '풀코스', hours: 5, minutes: 0 },
        { distance: '하프', hours: 2, minutes: 30 },
        { distance: '10K', hours: 1, minutes: 30 },
        { distance: '5K', hours: 1, minutes: 0 },
      ],
      aidInterval: '공식 유의사항: 최초 5km 이후 약 2.5km 간격, 간식은 약 5km 간격',
      startTime: '08:30',
    },
    logistics: {
      publicTransport: '공식 교통 안내는 수원역·화서역 등에서 종합운동장행 버스 이용을 안내했습니다. 수원시청역에서 도보 10분이라는 기존 설명은 철회했습니다.',
      bagStorage: true,
    },
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '2026 공식 요강·참가비', url: 'https://www.kgmarathon.co.kr/kgmarathon/text/info' },
        { title: '공식 종목별 출발 일정', url: 'https://www.kgmarathon.co.kr/kgmarathon/text/time' },
        { title: '공식 제한시간·급수·물품보관', url: 'https://www.kgmarathon.co.kr/kgmarathon/text/notice' },
        { title: '공식 교통 안내', url: 'https://www.kgmarathon.co.kr/kgmarathon/text/map' },
        { title: '주최사 2026 대회 공고·공인 종목', url: 'https://www.kyeonggi.com/article/20260119580530' },
      ],
      note: '2026년 개최분입니다. 최종 공식 일정은 풀 08:30·하프 08:40·10K 08:50·5K 09:00입니다. 초기 주최사 기사 속 08:00과 구분했습니다. 난이도·상승고도 50m·급수대 10곳·예상 1만5천 명·IAAF/AIMS 전 종목 공인 표기는 확인하지 못해 표시하지 않습니다.',
    },
    lastVerified: '2026-11-11',
  },
  {
    id: 'dmz-peace-marathon-2026',
    name: '2026 DMZ 평화마라톤',
    date: '2026-04-19',
    month: '4월',
    location: '경기 파주 임진각 평화누리 공연장',
    region: '경기',
    distances: ['하프', '10K', '5K'],
    status: '대회종료',
    isMajor: false,
    website: 'https://dmzmarathon.newstomato.com/info/outline.aspx',
    registrationStart: '2026-01-23',
    description: '공식 요강은 2026년 4월 19일 임진각 평화누리 공연장 08:30 집결·09:30 출발, 하프·10km·5km를 안내했다. 일반 참가비는 종목별 5만원이며 모집 계획은 총 5,000명이다. 15,000원 표시는 통통쿠폰을 보유한 구독회원 등 조건부 할인으로, 일반 참가비와 구분해야 한다.',
    raceInfo: {
      entryFees: [
        { distance: '하프 일반', fee: 50000 },
        { distance: '10K 일반', fee: 50000 },
        { distance: '5K 일반', fee: 50000 },
      ],
      expectedParticipants: 5000,
      startTime: '09:30',
    },
    courseInfo: {
      courseDescription: '공식은 5km·10km·하프 지도와 민간인통제구역을 구분해 안내했다. 10km의 통일대교~통일촌사거리, 하프의 통일대교~남북출입사무소 구간은 군 작전 상황에 따라 코스가 조정될 수 있다고 고지했다. 민통선 내 촬영장비 사용·코스 이탈에 관한 주최 측 제한도 해당 안내에서 확인해야 한다. 독립 GPS·고도는 확인하지 않았다.',
    },
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '2026 공식 요강·집결/출발·일반 참가비', url: 'https://dmzmarathon.newstomato.com/info/outline.aspx' },
        { title: '종목별 코스·민통선 구간 운영 안내', url: 'https://dmzmarathon.newstomato.com/course/courseInfo.aspx' },
        { title: '참가·기록칩·변경 유의사항', url: 'https://dmzmarathon.newstomato.com/info/caution.aspx' },
      ],
      note: '2026년 4월 파주 개최분이며 철원 DMZ 대회와 구분한다. 모집 계획은 실제 참가·완주 인원이 아니다. 통통쿠폰 할인은 보유·구독회원 확인 등 조건이 있고 단체 신청에는 적용되지 않는다는 주최 안내다. 정확한 접수 마감 시각·고도·현재 거래 조건은 확정하지 않았다.',
    },
    lastVerified: '2026-11-11',
  },
  {
    id: 'songdo-walk-run-2026',
    name: '2026 송도 WALK & RUN',
    date: '2026-04-26',
    month: '4월',
    location: '인천 송도달빛축제공원',
    region: '인천',
    distances: ['하프', '10K', '5K', '트레일'],
    status: '대회종료',
    isMajor: false,
    website: 'https://blog.naver.com/npa2023/224157041339',
    description: '주최기관 인천광역시걷기협회의 원문 포스터는 2026년 4월 25~26일 송도달빛축제공원 행사를 안내한다. 달리기는 원문의 “런 당일 26일” 안내를 기준으로 4월 26일로 정리했다. 종전 4월 19일 정보와 11월 연수구청장배 대회를 구분해야 한다. 하프·10km·5km, 걷기·트레일런 등 여러 프로그램이 함께 있었다.',
    logistics: { publicTransport: '주최기관 원문은 송도달빛축제공원역 4번 출구에서 도보 약 7분, 주차장 부족으로 대중교통 이용을 안내했다. 이는 2026년 해당 회차 안내다.' },
    postRaceNote: '주최기관 원문은 달리기 당일 4월 26일 08:00부터 현장에서 배번을 교부한다고 안내했다. 배번 교부 시각을 출발 시각으로 쓰지 않으며, 개인별 실제 기념품 수령·기록증 전송 여부는 확인하지 않았다.',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '인천광역시걷기협회 공식 원문·수정 포스터·26일 배번 교부', url: 'https://blog.naver.com/npa2023/224157041339' },
      ],
      note: '2026 봄 송도 글로벌 헬스 페스타 회차다. 주최기관 원문의 2026년 4월 25~26일 수정 포스터와 “런 당일 26일” 문구를 대조해 달리기 날짜를 4월 19일에서 26일로 바로잡았다. EXPO 입장 무료를 달리기 참가비 무료로 해석하지 않는다. 종목별 최종 출발 시각·참가비·컷오프·실제 완주 집계는 미확인이다. 오래된 외부 일정의 20km 표기를 현행 하프 종목과 동일한 확정 거리로 사용하지 않는다.',
    },
    lastVerified: '2026-11-11',
  },
  {
    id: 'mudeungsan-trail-2026',
    name: '제2회 무등산 트레일런',
    date: '2026-04-19',
    month: '4월',
    location: '광주 조선대학교 운동장 출발·도착 · 무등산 권역',
    region: '광주',
    distances: ['울트라', '트레일'],
    status: '대회종료',
    isMajor: false,
    description: '주최사 CUK스포츠는 2026년 4월 19일 조선대학교 운동장 출발·도착의 무등산 트레일런을 안내했다. 현재 상품 제목은 33km지만 본문은 35km로 적혀 있고, ITRA의 2026 등록 설명은 51.8km·33km·15km를 구분한다. 최종 종목별 실제 거리·운영 결과를 한 가지 숫자로 확정하지 않았다.',
    website: 'https://www.cuk-sports.com/%EC%8A%A4%ED%86%A0%EC%96%B4/view/5640255',
    courseInfo: {
      courseDescription: '주최사 상품 본문의 33/35km 안내에는 조선대·깃대봉·팔각정·4수원지·충장사·원효봉·서석대·입석대 등을 거치는 경로가 적혀 있다. 제목과 본문 종목명이 달라 이 설명을 최종 GPX·실측 거리·누적 고도 확인으로 사용하지 않는다. 모든 종목이 같은 봉우리·반환점을 지난다고 단정하지 않는다.',
    },
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        {
          title: 'CUK스포츠 2026년 4월 19일 상품·장소·본문 조건',
          url: 'https://www.cuk-sports.com/%EC%8A%A4%ED%86%A0%EC%96%B4/view/5640255',
        },
        {
          title: 'ITRA 2026 대회 등록 설명 · 검색 보존본',
          url: 'https://itra.run/Races/RaceDetails/Mudeungsan.International.Trail.Running.51.8k/2026/113632',
        },
      ],
      note: '2026년 4월 안내분이다. 주최사 상품 제목 33km와 본문 35km, 상단 접수 마감 4월 5일과 본문 4월 1일이 달라 최종 거리·접수 기한을 단정하지 않았다. 상단의 요일 표기도 2026년 달력과 맞지 않는다. 현재 상품 할인 표시를 당시 전 종목 참가비로 사용하지 않았으며 07:00~16:00 행사 표시를 전 종목 공통 출발·컷오프로 옮기지 않았다. ITRA 직접 응답은 빈 본문으로 검색 보존 설명과 구분했고, 성료·완주·ITRA 포인트·최종 GPX는 확인하지 않았다.',
    },
    lastVerified: '2026-11-11',
  },
  {
    id: 'seoul-half-marathon-2026',
    name: '2026 서울하프마라톤',
    date: '2026-04-26',
    month: '4월',
    location: '서울 광화문광장',
    region: '서울',
    distances: ['하프', '10K'],
    status: '대회종료',
    isMajor: true,
    website: 'https://www.seoulhalfmarathon.com/index.html',
    description: '조선일보·서울특별시·서울특별시체육회가 공동 주최한 2026년 대회입니다. 두 종목 모두 광화문광장에서 출발했으며 하프는 상암 월드컵공원 평화광장, 10K는 여의도공원에 도착했습니다.',
    courseInfo: {
      courseDescription: '하프: 광화문광장 출발 → 상암 월드컵공원 평화광장 도착. 10K: 광화문광장 출발 → 여의도공원 도착. 종목에 따라 도착지가 다릅니다.',
      isLoopCourse: false,
    },
    raceInfo: {
      entryFees: [
        { distance: '하프', fee: 80000 },
        { distance: '10K', fee: 70000 },
      ],
      timeLimits: [
        { distance: '하프', hours: 2, minutes: 30 },
        { distance: '10K', hours: 1, minutes: 30 },
      ],
      aidInterval: '공식 유의사항: 주로 음료 공급대는 매 5km, 골인지 별도 급수',
      startTime: '07:30',
    },
    logistics: { bagStorage: true },
    lastVerified: '2026-11-11',
    factCheck: {
      checkedAt: '2026-11-11',
      sources: [
        { title: '2026 공식 대회 일정·종목별 도착지', url: 'https://www.seoulhalfmarathon.com/index.html' },
        { title: '서울시 2026 종목별 참가비', url: 'https://sports.seoul.go.kr/main/SP03140000_user/program_view.do' },
        { title: '공식 제한시간·급수·물품보관 유의사항', url: 'https://www.seoulhalfmarathon.com/rally/notes.html' },
      ],
      note: '2026년 개최분 안내입니다. 10K 제한시간은 출발 기준 1시간 30분으로 정정했습니다. 난이도 등급·누적 상승고도·IAAF 공인 표기·급수대 총수·예상 참가인원은 이번 원문에서 확인하지 못해 표시하지 않습니다.',
    },
  },
  // --- 2027 시즌 ---
  {
  "id": "incheon-k-marathon-2027",
  "name": "2027 인천 K-마라톤",
  "date": "2027-04-11",
  "month": "4월",
  "location": "인천아시아드주경기장 (예정 · 인천 서해구 봉수대로 806)",
  "region": "인천",
  "distances": [
    "풀코스",
    "10K",
    "5K"
  ],
  "status": "마감",
  "isMajor": false,
  "website": "https://k-player.or.kr/incheon2027/",
  "registrationStart": "2026-10-22",
  "registrationEnd": "2026-11-12",
  "registrationNote": "2026-11-13 공식 참가신청 페이지에서 참가 접수 마감 문구를 확인했습니다(https://k-player.or.kr/incheon2027/apply). 개요·개최 공지의 접수기간은10/22~11/12이며 홈에는 접수 중 문구가 남아 있어 실제 신청 페이지의 마감 안내를 우선했습니다. 이전 확인 기록: 11/10 공식 개요·공개 신청·한국어FAQ·유의사항 대조. 접수는10/22~11/12 선착순이며 신청일 포함3일 이내 입금·확인 순으로 참가 확정 안내입니다. 풀 자격기록은2027/3/31까지 제출 가능 조건이고 그룹 배정용은 접수 마감 전이라는 별도 문구가 있습니다. 현재 기록 미보유 풀·10km는D,5km는B 안내입니다. 가안·경계기록 차이·영문 장소 문구는 사무국 확인이 필요합니다. 실제 신청·입금·잔여 정원은 미검증입니다. 11/12 재대조: 대회 FAQ의 서구 봉오대로806과 시설 운영자 주소가 달라 시설 오시는 길의 서해구 봉수대로806으로 경기장 주소를 맞췄습니다. 집결지는 여전히 예정이며 최신 대회 공지로 확인해야 합니다.",
  "lastVerified": "2026-11-13",
  "description": "2027년4월11일08시,풀코스·10km·5km를 운영하는 대회로 인천아시아드주경기장 출발·도착은 예정입니다. 공식 한국어 개요·FAQ의 풀 참가자격은2027/3/31까지 하프2시간20분 또는 풀5시간 이내 공식 기록증을 제출 가능한 사람이며 지금 미보유자는D그룹 신청 안내가 있습니다. 그룹용 제출 기한과 경계기록 표기는 별도 확인해야 합니다. 코스·기념품 상세는 준비 중이며 소개문의 청라 스카이라인 코스를 확정 경로로 해석하지 않습니다. 영문FAQ의서울장소는 한국어 인천 예정 안내와 달라 사무국 확인이 필요합니다.",
  "raceInfo": {
    "entryFees": [
      {
        "distance": "풀코스",
        "fee": 80000
      },
      {
        "distance": "10K",
        "fee": 60000
      },
      {
        "distance": "5K",
        "fee": 40000
      }
    ],
    "timeLimits": [
      {
        "distance": "풀코스",
        "hours": 5,
        "minutes": 0
      },
      {
        "distance": "10K",
        "hours": 1,
        "minutes": 40
      },
      {
        "distance": "5K",
        "hours": 1,
        "minutes": 0
      }
    ],
    "aidInterval": "5km마다 음료 공급대",
    "startTime": "08:00"
  },
  "raceKit": {
    "items": [
      "번호표·기록칩·물품보관백(대회 전 택배)",
      "완주메달(완주자)",
      "기록증(완주자, 대회 후 발송)"
    ],
    "pending": "11/10 공식 기념품 상세는 구성 준비 중입니다. 한국어FAQ의 대회7일전 택배 발송은 가안·확인 필요로 표시되며 현재 실제 배송 계획으로 확정하지 않습니다.",
    "verifiedAt": "2026-11-10"
  }
},
];
