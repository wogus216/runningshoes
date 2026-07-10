import { BlogPost } from '@/types/blog';

export const posts_2026_04: BlogPost[] = [
  {
    id: 'running-shoe-terminology-guide',
    slug: 'running-shoe-terminology-guide',
    title: '러닝화 용어 총정리 | 미드솔·아웃솔·어퍼, 20만원짜리 신발 제대로 알고 신자',
    description: '러닝화 각 부위 명칭과 역할을 한눈에 정리했습니다. 미드솔 소재(EVA·PU·PEBA)부터 아웃솔·어퍼·인솔·텅까지 — 이 정도는 알고 신어야 20~30만원이 아깝지 않습니다.',
    thumbnail: '/images/blog/running-shoe-terminology-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-04-29',
    category: 'guide' as const,
    readingTime: 6,
    tags: ['러닝화 가이드', '러닝화 용어', '미드솔', '아웃솔', '러닝화 구조', '입문 가이드'],
    content: `
<p>요즘 러닝화, 20~30만원을 훌쩍 넘는 제품이 참 많습니다. 그런데 신발을 살 때 "쿠션 좋다"는 느낌 하나만 믿고 사는 분이 의외로 많아요.</p>

<p>비싼 장비를 단순한 '운동화'로만 신기에는 그 안에 담긴 기술력이 너무나 아깝습니다. <strong>30초만 투자해 각 부위의 역할을 파악해두면</strong>, 다음 번 신발을 살 때 훨씬 현명한 선택을 할 수 있습니다.</p>

<h2>러닝화 해부도 — 어디가 뭔가</h2>

<figure class="my-8">
  <img
    src="/images/blog/running-shoe-terminology-guide.webp"
    alt="러닝화 용어 총정리 — 미드솔·아웃솔·어퍼·인솔 구조 설명"
    class="w-full rounded-2xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">러닝화 주요 부위 4가지 — 각각의 역할이 다릅니다</figcaption>
</figure>

<h2>1. 미드솔 (Midsole) — 러닝화의 심장</h2>

<p>인솔과 아웃솔 사이에 위치한 <strong>쿠션 층</strong>입니다. 러닝화에서 가장 중요한 부위라고 해도 과언이 아닙니다. 충격흡수, 반발력(에너지 리턴), 안정성이 모두 미드솔에서 결정됩니다.</p>

<table>
  <thead>
    <tr><th>소재</th><th>특징</th><th>대표 제품</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>EVA</strong><br><small>에틸렌 비닐 아세테이트</small></td>
      <td>가볍고 저렴, 쿠션감 무난. 가장 널리 쓰이는 기본 소재</td>
      <td>입문화 대부분</td>
    </tr>
    <tr>
      <td><strong>PU</strong><br><small>폴리우레탄</small></td>
      <td>EVA보다 무겁지만 내구성 뛰어남. 장시간 훈련용</td>
      <td>안정화 계열</td>
    </tr>
    <tr>
      <td><strong>PEBA</strong><br><small>폴리에테르 블록 아미드</small></td>
      <td>초경량 + 높은 반발력. 카본화·슈퍼슈즈에 주로 사용</td>
      <td>Vaporfly, Adizero Pro, 1080 v14</td>
    </tr>
    <tr>
      <td><strong>AIR / GEL / 독자 폼</strong></td>
      <td>브랜드별 독자 기술 (Nike Air, Asics Gel, Brooks DNA 등)</td>
      <td>각 브랜드 플래그십</td>
    </tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">PEBA가 왜 비싼가요?</p>
    <p>PEBA 폼은 에너지 리턴율이 EVA 대비 15~25%p 높습니다. 35km 이후 발이 지칠 때도 탄성을 유지하기 때문에 레이스용 카본화에 필수로 쓰입니다. 소재 원가 자체가 높아서 20만원 이하 신발에서는 거의 보기 어렵습니다.</p>
  </div>
</div>

<h2>2. 아웃솔 (Outsole) — 지면과 맞닿는 유일한 층</h2>

<p>신발 바닥, 지면에 직접 닿는 부분입니다. 주요 역할은 세 가지입니다.</p>

<ul>
  <li><strong>접지력</strong> — 노면에 따라 패턴이 다름 (로드용 vs 트레일용)</li>
  <li><strong>마찰력</strong> — 빗길·젖은 노면 미끄럼 방지</li>
  <li><strong>미드솔 보호</strong> — 부드러운 미드솔 폼이 직접 마모되지 않도록 막음</li>
</ul>

<p>소재는 대부분 <strong>고무(Carbon Rubber)</strong>이며, 고성능 레이싱화에는 얇고 가벼운 블로운 러버를 씁니다. 아웃솔이 두꺼울수록 내구성이 높고, 얇을수록 가볍습니다.</p>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">아웃솔이 닳으면 언제 교체?</p>
    <p>일반적으로 러닝화 수명은 500~700km입니다. 아웃솔 고무가 파여 미드솔 폼이 보이기 시작하면 쿠션도 이미 망가진 상태입니다. <a href="/shoes">신발 상세 페이지</a>에서 각 모델의 예상 내구성을 확인할 수 있습니다.</p>
  </div>
</div>

<h2>3. 어퍼 (Upper) — 발을 감싸는 모든 것</h2>

<p>신발의 아웃솔 위, 발등과 발옆면 전체를 감싸는 부분입니다. 핏감과 통기성이 어퍼에서 결정됩니다.</p>

<ul>
  <li><strong>엔지니어드 메시</strong> — 가장 흔한 소재. 가볍고 통기성 우수. 여름 훈련에 적합</li>
  <li><strong>플라이니트 / 니트</strong> — 발을 편하게 감싸는 느낌. 유연성 좋음</li>
  <li><strong>합성 소재</strong> — 안정성과 지지력 강화. 안정화에 많이 사용</li>
</ul>

<p>한국인은 <strong>발볼이 넓은 경우가 많아</strong> 어퍼의 토박스(앞발가락 부분) 너비가 중요합니다. 68mm 미만이면 와이드 버전을 따로 찾아봐야 합니다. 각 신발의 토박스 너비는 상세 페이지에서 확인하세요.</p>

<h2>4. 인솔 (Insole) — 발이 직접 닿는 층</h2>

<p>신발 안쪽, 발바닥이 직접 닿는 깔창입니다. 대부분 분리·교체가 가능합니다.</p>

<ul>
  <li>기본 인솔은 얇고 단순한 경우가 많아 <strong>별도 기능성 깔창으로 교체</strong>하면 핏감과 안정성을 높일 수 있습니다</li>
  <li>평발이거나 발 아치가 낮은 분은 아치 지지형 인솔을 추가하면 무릎·발목 부담이 줄어듭니다</li>
</ul>

<h2>5. 텅 (Tongue) — 발등 보호막</h2>

<p>신발 끈 아래, 발등 전체를 덮는 부분입니다. 끈을 조일 때 발등에 압력이 집중되지 않도록 분산시키는 역할을 합니다. 최근에는 어퍼와 일체형으로 제작해 흘러내림을 방지하는 '슬리브 텅' 구조도 많습니다.</p>

<h2>6. 힐카운터 (Heel Counter) — 뒤꿈치 안정성</h2>

<p>뒤꿈치를 둘러싼 딱딱한 컵 구조입니다. 착지 시 발이 안쪽·바깥쪽으로 틀어지는 것을 막아줍니다. 안정화에서는 이 부분이 더 강화되어 있습니다.</p>

<h2>부위별 내 발에 맞는 선택 기준</h2>

<table>
  <thead>
    <tr><th>고민</th><th>확인할 부위</th><th>기준</th></tr>
  </thead>
  <tbody>
    <tr><td>무릎·발목이 자주 아프다</td><td>미드솔 + 힐카운터</td><td>SA 120 이상, 안정화 고려</td></tr>
    <tr><td>발볼이 넓다</td><td>어퍼 토박스</td><td>73mm 이상, 와이드 옵션 확인</td></tr>
    <tr><td>오래 신어도 쿠션 유지</td><td>미드솔 소재</td><td>PEBA 또는 PU 계열</td></tr>
    <tr><td>레이스 기록 단축</td><td>미드솔 에너지 리턴</td><td>65%+ 반발력, 카본 플레이트</td></tr>
    <tr><td>트레일 러닝</td><td>아웃솔 패턴</td><td>러그 패턴, 방수 소재 어퍼</td></tr>
  </tbody>
</table>

<div class="callout success">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">내 발에 맞는 신발, 1분 만에 찾기</p>
    <p>발볼·아치 유형·주간 거리·목적을 입력하면 적합한 신발을 추천해드립니다. <a href="/recommend">1분 러닝화 추천</a>을 이용해보세요.</p>
  </div>
</div>

<h2>용어 알고 나서 신발 보면 다르게 보입니다</h2>

<p>브랜드 페이지에서 "FF Blast+", "FuelCell", "LightStrike Pro" 같은 이름을 보면 이제 감이 올 겁니다. 전부 미드솔 폼 소재의 브랜드별 이름입니다. 어퍼 소재, 아웃솔 두께, 힐카운터 강도를 체크하는 습관이 생기면 20만원 이상짜리 신발을 살 때 훨씬 후회가 줄어듭니다.</p>

<ul>
  <li>카본 플레이트 신발 궁금하다면 → <a href="/best/carbon-plate-shoes-comparison-2025">카본화 비교 가이드</a></li>
  <li>발볼 넓은 분 → <a href="/blog/wide-feet-running-shoes-korea">와이드 러닝화 가이드</a></li>
  <li>내 발에 맞는 신발 찾기 → <a href="/recommend">1분 러닝화 추천</a></li>
</ul>

<p><small>출처: RIFE 러닝라이프 인스타그램 @runninglife_korea (2026.04.17) / 용어 설명은 RunRepeat·Doctors of Running 데이터를 바탕으로 재구성했습니다.</small></p>
`,
  },
  {
    id: '2026-mudo-run-coupang-play',
    slug: '2026-mudo-run-coupang-play',
    title: '2026 무한도전 Run with 쿠팡플레이 | 상암 10km 이벤트 총정리',
    description: '2026년 6월 7일 상암 문화비축기지에서 열리는 무한도전 Run with 쿠팡플레이 이벤트 정보를 정리했습니다. 10km 단일 코스, 5월 7일 예매 시작 — 스포츠 패스 가입자는 정오부터, 일반은 저녁 8시부터.',
    author: '산초 에디터',
    publishedAt: '2026-04-28',
    category: 'news' as const,
    readingTime: 4,
    thumbnail: '/images/blog/2026-mudo-run-coupang-play.webp',
    tags: ['러닝 이벤트', '무한도전', '쿠팡플레이', '상암', '이색마라톤', '10km', '펀런'],
    content: `
<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">예매 오픈 D-9 — 5월 7일(목)</p>
    <p>쿠팡플레이 스포츠 패스 가입자는 <strong>오후 12시</strong>부터, 일반 예매는 <strong>오후 8시</strong>부터 시작됩니다. 쿠팡플레이 앱을 미리 설치하고 로그인 상태를 확인해두세요.</p>
  </div>
</div>

<h2>어떤 행사인가요?</h2>

<p><strong>2026 무한도전 Run with 쿠팡플레이</strong>는 레전드 예능 '무한도전'을 모티브로 한 참여형 러닝 이벤트입니다. 올해 레이스 테마는 무한도전 대표 에피소드와 최근 놀이 트렌드를 결합한 <strong>'경찰과 도둑(경도)' 추격전 콘셉트</strong>로, 러닝 이벤트 최초로 도입된 방식입니다.</p>

<p><strong>박명수·정준하·하하</strong>가 참석을 확정했으며, 특유의 티키타카와 캐릭터를 직접 만날 수 있습니다.</p>

<h2>핵심 정보 한눈에 보기</h2>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td>일시</td><td>2026년 6월 7일(일) 오전 7시 출발</td></tr>
    <tr><td>장소</td><td>서울 상암 문화비축기지</td></tr>
    <tr><td>코스</td><td>10km 단일 코스</td></tr>
    <tr><td>출연진</td><td>박명수 · 정준하 · 하하</td></tr>
    <tr><td>콘셉트</td><td>'경찰과 도둑' 추격전</td></tr>
    <tr><td>참가비</td><td>99,000원 (전년도 기준, 변동 가능)</td></tr>
    <tr><td>기념품</td><td>참가자 전원 한정판 레이스팩 지급</td></tr>
    <tr><td>신청처</td><td>쿠팡플레이 앱</td></tr>
  </tbody>
</table>

<h2>예매 일정</h2>

<table>
  <thead>
    <tr><th>구분</th><th>날짜·시간</th><th>대상</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>선예매</strong></td><td>5월 7일(목) 오후 12시</td><td>쿠팡플레이 스포츠 패스 가입자</td></tr>
    <tr><td><strong>일반예매</strong></td><td>5월 7일(목) 오후 8시</td><td>쿠팡 와우회원 + 스포츠 패스 가입자</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">스포츠 패스 가입자 우선 혜택</p>
    <p>쿠팡플레이 스포츠 패스 구독자는 일반 예매보다 8시간 먼저 신청할 수 있습니다. 이 행사를 목표로 구독을 고려 중이라면 참가비와 구독료를 함께 계산해보세요.</p>
  </div>
</div>

<h2>어떤 러너에게 어울릴까?</h2>

<p>기록 단축보다 <strong>특별한 러닝 경험</strong>을 원하는 분께 잘 맞는 행사입니다.</p>

<ul>
  <li>무한도전 팬이라면 감성 하나만으로도 충분한 이유가 됩니다</li>
  <li>10km를 달릴 수 있는 체력이면 누구나 참가 가능 — 입문자도 도전할 수 있는 거리</li>
  <li>이색 러닝 이벤트를 찾는 분</li>
  <li>친구·연인과 함께 특별한 주말 활동을 원하는 분</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">10km 이벤트 러닝화 추천</p>
    <p>기록보다 즐거움이 목적인 펀런에는 쿠션 좋은 데일리화가 제격입니다. <a href="/shoes/hoka-clifton-10">호카 클리프톤</a>이나 <a href="/shoes/new-balance-1080-v14">뉴발란스 1080</a> 같은 맥시멀 쿠션화로 발의 피로를 줄이고 행사 자체를 즐기는 데 집중하세요. 맞춤 추천이 필요하면 <a href="/recommend">1분 러닝화 추천</a>을 이용해보세요.</p>
  </div>
</div>

<h2>접수 방법</h2>

<ol>
  <li>쿠팡플레이 앱 설치 (iOS / Android)</li>
  <li>쿠팡 계정 로그인 또는 신규 가입</li>
  <li>5월 7일 오후 12시(스포츠 패스) 또는 오후 8시(일반) 접수 시작</li>
  <li>결제 수단 미리 등록 — 오픈과 동시에 빠르게 진행해야 합니다</li>
</ol>

<p>상세 요강과 최종 참가비는 공식 발표 시 변동될 수 있으니, 쿠팡플레이 앱 공지 또는 <a href="https://www.instagram.com/runjoa_official/" rel="noopener noreferrer">런조아 공식 인스타그램 @runjoa_official</a>을 팔로우해 최신 정보를 확인하세요.</p>

<div class="callout success">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">6월 다른 대회도 함께 검토해보세요</p>
    <p>6월에 열리는 다른 국내 마라톤·러닝 이벤트도 <a href="/marathon">2026 마라톤 캘린더</a>에서 한눈에 확인할 수 있습니다. 무한도전 런 접수에 실패했을 때 대안 찾기에도 유용합니다.</p>
  </div>
</div>

<p><small>출처: 런조아 공식 인스타그램 @runjoa_official / 상세 요강은 쿠팡플레이 앱 공식 공지에서 확인하세요.</small></p>
`,
  },
  {
    id: '2027-seoul-marathon-registration-schedule',
    slug: '2027-seoul-marathon-registration-schedule',
    title: '2027 서울마라톤 접수 일정 완전 정리 | 풀코스 그룹별·10K·우선접수 총정리',
    description: '동마클럽이 공개한 2027 서울마라톤(3/21)과 26/27 시즌 4개 대회 접수 일정을 정리했습니다. 풀코스 그룹별(A~H) 본접수, 10K 선착순, 우선접수·골드패키지 일정까지 한 눈에.',
    thumbnail: '/images/blog/2026-2027-dongma-schedule.webp',
    author: '산초 에디터',
    publishedAt: '2026-04-22',
    category: 'news' as const,
    readingTime: 6,
    tags: ['서울마라톤', '동아마라톤', '대회 일정', '2027 서울마라톤', '마라톤 접수', '서울레이스'],
    content: `
<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">2027 서울마라톤 기록 제출 임박 — 4월 28일(화) 10시 오픈</p>
    <p>풀코스 그룹 배정을 받으려면 유효기간(2024.1.1.~2026.5.10.) 내 공인 기록을 <strong>런카이브</strong>에서 5월 11일(월) 15시까지 제출해야 합니다. 기록 미제출 시 가장 후순위 그룹(H)부터 본접수가 가능합니다.</p>
  </div>
</div>

<h2>한 눈에 보는 26/27 동마 대회 4개</h2>

<p>동마클럽(@dongmaclub)이 <strong>26/27 시즌 4개 대회 접수 일정</strong>을 공식 공개했습니다. 2027 서울마라톤을 포함해 2026 하반기 3개 대회(서울레이스·공주백제·경주국제)까지, 한 장에 정리하면 다음과 같습니다.</p>

<table>
  <thead>
    <tr>
      <th>대회</th>
      <th>대회 일자</th>
      <th>본접수 오픈</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>2027 서울마라톤</strong> (풀·10K)</td>
      <td>2027년 3월 21일(일)</td>
      <td>6월 1~3일 (그룹별)</td>
    </tr>
    <tr>
      <td>2026 공주백제마라톤</td>
      <td>2026년 9월 20일(일)</td>
      <td>5월 21일(목) 19시</td>
    </tr>
    <tr>
      <td>2026 경주국제마라톤</td>
      <td>2026년 10월 17일(토)</td>
      <td>5월 26일(화) 19시</td>
    </tr>
    <tr>
      <td>2026 서울레이스 (하프·10K)</td>
      <td>2026년 10월 11일(일)</td>
      <td>5월 27일(수) 19시 / 21시</td>
    </tr>
  </tbody>
</table>

<p>2026 하반기 3개 대회의 상세 일정·우선접수 대상·러닝화 추천은 <a href="/blog/2026-dongma-halfyear-marathon-schedule">2026 하반기 동마 대회 접수 일정 총정리</a>에서 자세히 다뤘습니다. 이 글에서는 <strong>2027 서울마라톤</strong>에 집중합니다.</p>

<h2>2027 서울마라톤 접수 5단계 타임라인</h2>

<figure class="my-8">
  <img
    src="/images/blog/2026-2027-dongma-schedule-photo.webp"
    alt="2027 서울마라톤 접수 일정 타임라인 - 풀코스 기록 제출부터 10K 본접수까지"
    class="w-full rounded-2xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">2027 서울마라톤 접수 5단계 일정 (출처: 동마클럽 인스타그램 @dongmaclub)</figcaption>
</figure>

<h3>1단계 — 풀코스 기록 제출 (4/28 ~ 5/11)</h3>

<ul>
  <li><strong>기간:</strong> 4월 28일(화) 10시 ~ 5월 11일(월) 15시</li>
  <li><strong>제출처:</strong> 런카이브 홈페이지</li>
  <li><strong>기록 유효기간:</strong> 2024년 1월 1일 ~ 2026년 5월 10일</li>
</ul>

<p>2026 서울마라톤 완주자 기록 분포에 따라 S·A~H 그룹 기준 기록이 설정됩니다. 명예의 전당 헌액자 중 <strong>2024~25 서울·공주·경주마라톤 또는 2026 서울마라톤에서 sub3</strong>를 달성한 러너는 S그룹으로 배정되며, 그 외 헌액자는 풀코스 기록에 따라 그룹별 신청이 가능합니다.</p>

<h3>2단계 — 우선 접수 (5/18 ~ 5/22)</h3>

<ul>
  <li><strong>기간:</strong> 5월 18일(월) 10시 ~ 5월 22일(금) 15시</li>
  <li><strong>접수처:</strong> 동마클럽 홈페이지(dongma.club)</li>
</ul>

<p>우선 접수는 아래 5개 조건 중 하나라도 해당하면 신청할 수 있습니다.</p>

<ul>
  <li>2026 동아마라톤 멤버십 가입자</li>
  <li>2026 서울마라톤 동마크루</li>
  <li>2026 서울마라톤 번호표 반납자</li>
  <li>2026 서울마라톤 대비 공식 클래스 수료자</li>
  <li>명예의 전당 헌액자 중 2024~25 서울/공주/경주마라톤, 2026 서울마라톤 sub3 달성자</li>
</ul>

<h3>3단계 — 골드패키지 (5/18 ~ 마감 시)</h3>

<p>5월 18일(월) 10시부터 마감 시까지 상시 접수입니다. VIP 레이스 키트와 전용 편의를 원하는 러너를 위한 옵션이에요. 정원이 차면 조기 마감되므로 필요한 분은 오픈 초반에 신청하세요.</p>

<h3>4단계 — 풀코스 본접수 (6/1 ~ 6/2, 그룹별)</h3>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">그룹별 접수 시스템이란?</p>
    <p>풀코스 본접수는 제출한 공인 기록을 바탕으로 배정된 그룹(A~H)에 따라 지정 시각에만 접수할 수 있습니다. 빠른 그룹일수록 먼저 접수 창이 열리며, 기록이 좋을수록 선착순 경쟁에서 유리한 구조입니다.</p>
  </div>
</div>

<table>
  <thead>
    <tr><th>날짜</th><th>그룹</th><th>접수 시각</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="4">6월 1일(월)</td><td>A그룹</td><td>19시</td></tr>
    <tr><td>B그룹</td><td>20시</td></tr>
    <tr><td>C그룹</td><td>21시</td></tr>
    <tr><td>D그룹</td><td>22시</td></tr>
    <tr><td rowspan="4">6월 2일(화)</td><td>E그룹</td><td>19시</td></tr>
    <tr><td>F그룹</td><td>20시</td></tr>
    <tr><td>G그룹</td><td>21시</td></tr>
    <tr><td>H그룹</td><td>22시</td></tr>
  </tbody>
</table>

<h3>5단계 — 10K 본접수 (6/3 선착순)</h3>

<p>10K 코스는 그룹 배정 없이 <strong>6월 3일(수) 19시 동마클럽 홈페이지 선착순 접수</strong>입니다. 서울마라톤 10K는 매년 접수 오픈 후 수분 내 마감되는 초경쟁 종목이라 시간 관리가 필수입니다.</p>

<h2>선착순 접수 실전 체크리스트</h2>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">접수 D-Day 전날까지 해야 할 준비</p>
    <p>① 동마클럽 홈페이지 회원가입·로그인 확인 ② 결제 수단(카드·간편결제) 미리 등록 ③ 달력·알람에 접수 시각 저장 ④ 유선랜 연결 PC 준비(모바일보다 안정적) ⑤ 브라우저 자동 입력 저장으로 입력 시간 단축</p>
  </div>
</div>

<p>특히 10K는 <strong>시계 동기화</strong>가 중요합니다. 휴대폰 시계 오차가 1~2초만 있어도 마감 차이가 납니다. 접수 직전 <code>time.navyism.com</code> 같은 국가표준 시각 사이트로 초 단위를 맞춰두세요.</p>

<h2>대회까지 준비할 것들</h2>

<p>접수 성공이 첫 단계라면, 이후 훈련·장비·컨디션 준비가 본 게임입니다. 2027 서울마라톤은 3월 21일(일)이므로 접수 완료 후에도 <strong>9~10개월</strong>의 준비 기간이 있습니다.</p>

<ul>
  <li><strong>훈련 계획:</strong> 대회 16~20주 전부터 본격 빌드업. 2026년 11~12월 시작이 표준</li>
  <li><strong>러닝화 선택:</strong> 레이스용은 대회 6~8주 전 구입해 40~60km 길들이기 권장. <a href="/best/best-carbon-plate-2025">카본 플레이트 신발 비교</a>에서 종류별 특성을 확인하세요</li>
  <li><strong>에너지 전략:</strong> 풀코스는 20km 이후 탄수화물 보충이 필수 — <a href="/gels">에너지젤 가이드</a></li>
  <li><strong>맞춤 추천:</strong> 본인의 발볼·체중·주간 거리에 맞는 러닝화가 궁금하다면 <a href="/recommend">1분 러닝화 추천</a>을 이용하세요</li>
</ul>

<h2>놓치지 말아야 할 공식 공지 채널</h2>

<p>대회별 상세 요강과 해외 참가자 접수 공지는 각 대회 인스타그램·홈페이지에서 별도 공지됩니다.</p>

<ul>
  <li>서울마라톤 — <a href="https://www.instagram.com/seoul_marathon/" rel="noopener noreferrer">@seoul_marathon</a> · seoul-marathon.com</li>
  <li>서울레이스 — <a href="https://www.instagram.com/seoulrace/" rel="noopener noreferrer">@seoulrace</a> · seoul-race.co.kr</li>
  <li>공주백제마라톤 — <a href="https://www.instagram.com/gongju_marathon/" rel="noopener noreferrer">@gongju_marathon</a> · gongjumarathon.com</li>
  <li>경주국제마라톤 — <a href="https://www.instagram.com/gyeongju__marathon/" rel="noopener noreferrer">@gyeongju__marathon</a> · gyeongjumarathon.com</li>
</ul>

<div class="callout success">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">다른 가을 대회도 검토해보세요</p>
    <p>서울마라톤이 목표라도, 가을 대회를 페이스메이커 삼아 출전하면 실전 감각과 PB 기회를 모두 잡을 수 있습니다. <a href="/marathon">2026 마라톤 캘린더</a>에서 국내 43개 대회를 월별로 확인할 수 있어요.</p>
  </div>
</div>

<p><small>출처: 동마클럽 공식 인스타그램 <a href="https://www.instagram.com/dongmaclub/" rel="noopener noreferrer">@dongmaclub</a> · 2026년 4월 18~20일 게시물 / 상세 요강은 각 대회 공식 홈페이지·인스타그램에서 추후 공지됩니다.</small></p>
`,
  },
  {
    id: '2026-icebucket-run-seoul',
    slug: '2026-icebucket-run-seoul',
    title: '2026 아이스버킷 챌린지 RUN in Seoul | 반포한강공원 러닝 이벤트 총정리',
    description: '6월 20일 반포한강공원에서 열리는 아이스버킷 챌린지 런 행사 정보를 정리했습니다. 3/5/8km 그룹 런과 아이스버킷 챌린지, SEAN 오프닝 콘서트까지 — 선착순 2,000명.',
    thumbnail: '/images/blog/2026-icebucket-run-seoul.webp',
    author: '산초 에디터',
    publishedAt: '2026-04-16',
    category: 'news' as const,
    readingTime: 4,
    tags: ['러닝 이벤트', '한강 러닝', '아이스버킷', '서울 대회', '펀런'],
    content: `
<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">접수 오픈 임박 — 4월 20일(일)</p>
    <p>선착순 2,000명 마감입니다. 4월 20일 오픈과 동시에 접수하지 않으면 놓칠 수 있어요. 지금 달력에 저장해두세요.</p>
  </div>
</div>

<h2>어떤 행사인가요?</h2>

<p><strong>2026 아이스버킷 챌린지 RUN in Seoul</strong>은 루게릭병(ALS) 환우와 가족을 위한 희망 러닝 이벤트입니다. 승일희망재단이 주최하고 KB손해보험이 후원하며, 참가비 수익금 전액은 중증근육성 희귀질환자를 위한 승일희망요양병원 운영에 사용됩니다.</p>

<p>단순한 경쟁 레이스가 아니라 <strong>그룹 런 + 아이스버킷 챌린지 + 오프닝 콘서트</strong>가 어우러진 축제형 행사입니다. 기록보다는 함께 달리는 즐거움과 의미 있는 기부에 초점을 맞춘 <a href="/recommend">펀런 이벤트</a>예요.</p>

<h2>핵심 정보 한눈에 보기</h2>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td>일시</td><td>2026년 6월 20일(토) AM 08:30</td></tr>
    <tr><td>장소</td><td>반포 한강공원 달빛광장<br><small>서울시 서초구 신반포로 11길 40</small></td></tr>
    <tr><td>코스</td><td>3km · 5km · 8km (선택)</td></tr>
    <tr><td>정원</td><td>선착순 2,000명</td></tr>
    <tr><td>참가비</td><td>개인 50,000원 / 단체(10인↑) 45,000원</td></tr>
    <tr><td>접수 오픈</td><td>2026년 4월 20일(일)</td></tr>
  </tbody>
</table>

<h2>당일 프로그램</h2>

<figure class="my-8">
  <img
    src="/images/blog/2026-icebucket-run-seoul-photo.webp"
    alt="아이스버킷 챌린지 RUN in Seoul 그룹 러닝 - 한강 산책로"
    class="w-full rounded-2xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">전문 페이서와 함께 한강 산책로를 달리는 그룹 런 (출처: withice.or.kr)</figcaption>
</figure>

<table>
  <thead>
    <tr><th>시간</th><th>프로그램</th></tr>
  </thead>
  <tbody>
    <tr><td>08:30 ~ 09:50</td><td>참가자 체크인</td></tr>
    <tr><td>09:50 ~ 10:30</td><td>개회식 및 오프닝 콘서트 (가수 SEAN)</td></tr>
    <tr><td>10:30 ~ 12:30</td><td>그룹 러닝 (3/5/8km)</td></tr>
    <tr><td>12:30 ~ 13:00</td><td>아이스버킷 챌린지</td></tr>
    <tr><td>13:00 ~</td><td>럭키드로우 추첨 및 행사 마무리</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">그룹 런이란?</p>
    <p>개인 기록 경쟁이 아닌, 10~20명씩 팀을 이루어 전문 페이서와 함께 한강 산책로를 달리는 방식입니다. 코스는 당일 상황에 따라 변경될 수 있습니다.</p>
  </div>
</div>

<h2>셀러브리티 라인업</h2>

<p>오프닝 콘서트는 가수 <strong>SEAN</strong>이 진행합니다. MC는 <strong>이슈 & 박지혜</strong>가 Special Double MC로 함께합니다. 러닝 전에 신나게 몸을 풀고 가볍게 즐길 수 있어요.</p>

<h2>어떤 러너에게 어울릴까?</h2>

<p>기록 단축이 목적인 레이스가 아니라 <strong>의미 있는 참여와 한강 러닝 경험</strong>을 원하는 분께 어울립니다.</p>

<ul>
  <li>러닝을 처음 시작하는 입문자 (3km 코스)</li>
  <li>한강 러닝 코스를 경험해보고 싶은 분</li>
  <li>기부와 러닝을 함께하고 싶은 분</li>
  <li>친구·동료와 단체로 참가하고 싶은 팀 (10인 이상 단체 할인)</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">펀런 이벤트 참가 팁</p>
    <p>이런 축제형 이벤트는 쿠션감 좋은 데일리 러닝화가 제격입니다. 기록보다 편안함 위주로 <a href="/shoes/new-balance-1080-v14">뉴발란스 1080</a>이나 <a href="/shoes/hoka-clifton-10">호카 클리프톤</a> 같은 맥시멀 쿠션화를 추천합니다.</p>
  </div>
</div>

<h2>참가자 기념품</h2>

<p>참가자 전원에게 <strong>The North Face T셔츠</strong>가 제공됩니다.</p>

<h2>접수 방법</h2>

<p>위드아이스 공식 홈페이지(withice.or.kr)에서 4월 20일부터 온라인 접수할 수 있습니다. 단체 참가(10인 이상)는 결제 전 승일희망재단(02-3453-6865)으로 먼저 문의해야 합니다.</p>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">이동 방법</p>
    <p>반포한강공원 달빛광장은 지하철 9호선 <strong>구반포역</strong> 또는 <strong>사평역</strong>에서 도보 10분 거리입니다. 대회 당일 주차는 혼잡하니 대중교통을 이용하세요.</p>
  </div>
</div>

<p><small>출처: 위드아이스(withice.or.kr) 공식 홈페이지</small></p>
`,
  },
  {
    id: '2026-dongma-halfyear-marathon-schedule',
    slug: '2026-dongma-halfyear-marathon-schedule',
    title: '2026 하반기 동마 대회 접수 일정 총정리 | 서울레이스·공주백제·경주국제마라톤',
    description: '동마클럽이 공개한 2026 하반기 3대 마라톤 대회 접수 일정을 정리했습니다. 우선 접수(5/11~15)와 본접수(선착순) 날짜, 대회별 준비 팁까지 한눈에 확인하세요.',
    thumbnail: '/images/blog/2026-dongma-halfyear-marathon-schedule.webp',
    content: `
<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">선착순 마감 주의</p>
    <p>본접수는 선착순으로 마감됩니다. 특히 경주·서울레이스는 인기 대회라 오픈 직후 수분 내 마감된 전례가 있습니다. 접수 시간을 달력에 미리 저장해두세요.</p>
  </div>
</div>

<h2>2026 하반기 동마 대회 3종 한눈에 보기</h2>

<p>동마클럽(@dongmaclub)이 2026 하반기 주요 마라톤 대회 접수 일정을 공식 발표했습니다. 이번 하반기는 <strong>공주백제마라톤</strong>, <strong>경주국제마라톤</strong>, <strong>서울레이스</strong> 3개 대회가 예정되어 있으며, 5월부터 접수가 시작됩니다.</p>

<table>
  <thead>
    <tr>
      <th>대회명</th>
      <th>대회 일자</th>
      <th>본접수 시작</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>공주백제마라톤</strong></td>
      <td>9월 20일 (일)</td>
      <td>5월 21일(목) 19시</td>
    </tr>
    <tr>
      <td><strong>서울레이스</strong></td>
      <td>10월 11일 (일)</td>
      <td>5월 27일(수) 하프 19시 / 10K 21시</td>
    </tr>
    <tr>
      <td><strong>경주국제마라톤</strong></td>
      <td>10월 17일 (토)</td>
      <td>5월 26일(화) 19시</td>
    </tr>
  </tbody>
</table>

<h2>접수 일정 상세 안내</h2>

<h3>1단계 — 우선 접수 (5월 11일 ~ 15일)</h3>

<p>일반 본접수보다 먼저 신청할 수 있는 <strong>우선 접수 기간</strong>이 있습니다. 해당되는 분들은 놓치지 마세요.</p>

<ul>
  <li><strong>기간:</strong> 5월 11일(월) 10시 ~ 5월 15일(금) 15시</li>
  <li><strong>접수처:</strong> 동마클럽 홈페이지 (dongma.club)</li>
  <li><strong>서울레이스 우선 접수 대상:</strong> 2025 서울레이스 동마크루</li>
  <li><strong>공주백제·경주국제 우선 접수 대상:</strong> 2026 동아마라톤 멤버십 가입자</li>
</ul>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">동아마라톤 멤버십이란?</p>
    <p>동마클럽에서 운영하는 멤버십으로 가입 시 하반기 대회 우선 접수 혜택을 받을 수 있습니다. 아직 미가입이라면 우선 접수 전 확인해두세요.</p>
  </div>
</div>

<h3>2단계 — 본접수 (선착순)</h3>

<p>우선 접수 대상이 아니라면 본접수를 노려야 합니다. <strong>선착순</strong>이므로 시간을 정확히 맞춰 접속하는 것이 중요합니다.</p>

<ul>
  <li><strong>공주백제마라톤:</strong> 5월 21일(목) 19시</li>
  <li><strong>경주국제마라톤:</strong> 5월 26일(화) 19시</li>
  <li><strong>서울레이스 하프:</strong> 5월 27일(수) 19시</li>
  <li><strong>서울레이스 10K:</strong> 5월 27일(수) 21시</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">선착순 접수 꿀팁</p>
    <p>접수 10분 전에 동마클럽 홈페이지에 미리 로그인해두세요. 결제 수단도 미리 등록해두면 접수 속도가 훨씬 빨라집니다. 모바일보다 PC 접속이 상대적으로 안정적입니다.</p>
  </div>
</div>

<h2>대회별 특징 & 러닝화 추천</h2>

<h3>공주백제마라톤 (9월 20일)</h3>
<p>9월 초가을에 열리는 대회로, 충남 공주 금강변을 코스로 합니다. 가을 초입이라 기온이 아직 높을 수 있어 <strong>통기성</strong>과 <strong>쿠셔닝</strong>이 중요합니다. 금강 둔치 코스는 비교적 평탄하여 기록을 노리기 좋습니다.</p>

<h3>서울레이스 (10월 11일)</h3>
<p>서울 도심을 달리는 도시형 마라톤. 하프(21.1km)와 10K 두 종목으로 나뉘어 진행됩니다. 서울 시내 복잡한 노면 특성상 <strong>안정성</strong>이 좋은 러닝화가 유리합니다.</p>

<h3>경주국제마라톤 (10월 17일)</h3>
<p>역사 도시 경주를 달리는 국제 마라톤. 10월 중순이라 날씨가 쾌적하고 코스가 아름다워 PB(개인 최고 기록)를 노리기에 좋은 대회입니다. 비교적 평탄한 코스로 카본 플레이트 러닝화 효과를 제대로 볼 수 있습니다.</p>

<h2>하반기 대회를 앞둔 지금, 준비할 것들</h2>

<p>접수만큼 중요한 것이 훈련과 장비 준비입니다. 5월 접수 후 대회까지 넉넉한 준비 기간이 있으니 지금부터 차근차근 준비해보세요.</p>

<ul>
  <li><strong>훈련 계획:</strong> 대회 12~16주 전부터 본격적인 빌드업 시작</li>
  <li><strong>러닝화 선택:</strong> 새 러닝화는 대회 6~8주 전에 구입해 길들이기 필요</li>
  <li><strong>영양 전략:</strong> 하프 이상 거리는 에너지젤 등 보충식 계획 필수</li>
  <li><strong>숙박·이동:</strong> 지방 대회(공주·경주)는 전날 이동 및 숙박 예약 권장</li>
</ul>

<div class="callout success">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">추가 공지 예정</p>
    <p>2027 서울마라톤 접수 일정도 곧 발표될 예정입니다. 동마클럽(@dongmaclub) 인스타그램과 홈페이지를 즐겨찾기해두면 빠르게 확인할 수 있습니다.</p>
  </div>
</div>

<p>하반기 대회 접수 관련 추가 공지는 각 대회 공식 인스타그램(@seoulrace, @gongju_marathon, @gyeongju__marathon)과 동마클럽 홈페이지에서 확인하실 수 있습니다.</p>
`,
    author: '산초 에디터',
    publishedAt: '2026-04-16',
    category: 'news' as const,
    tags: ['마라톤', '대회 일정', '서울레이스', '공주백제마라톤', '경주국제마라톤', '동아마라톤', '하반기 대회'],
    readingTime: 5,
    featured: false,
  },
];
