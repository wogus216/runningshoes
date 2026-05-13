import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '2026-garmin-forerunner-70-170-korea',
    slug: '2026-garmin-forerunner-70-170-korea',
    title: '가민 포러너 70·170 한국 5/20 출시 D-6 | 39.9만원 입문 모델에 Training Readiness·Running Power 탑재 — FR55 5년 만의 대변신',
    description: '2026년 5월 12일 가민이 Forerunner 70·170·170 Music을 동시 발표했습니다. 한국 5월 20일 정식 출시, 각 39.9·47.9·55.9만원. 입문 모델에 Training Readiness·HRV Status·손목 기반 Running Power 탑재 — 기존 60만원대 FR265 전용 기능이 처음으로 입문 라인까지 내려왔습니다.',
    thumbnail: '/images/blog/2026-garmin-forerunner-70-170-korea.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-14',
    category: 'news' as const,
    readingTime: 9,
    tags: ['가민', 'Garmin', 'Forerunner 70', 'Forerunner 170', '가민 포러너', '러닝 시계', '러닝 워치', 'Training Readiness', 'Running Power', '데이터 훈련'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>가민이 5월 12일 Forerunner 70·170·170 Music을 동시 발표</strong> — 한국 정식 출시 5월 20일, 각 <strong>39.9 / 47.9 / 55.9만원</strong></li>
    <li><strong>FR70(39.9만원) 입문 모델에 Training Readiness·HRV Status·손목 기반 Running Power 탑재</strong> — 기존엔 60만원대 FR265부터 가능했던 코칭 SW가 처음으로 입문 라인까지 내려왔습니다</li>
    <li>Forerunner 전 라인 AMOLED 전환 완성, FR55 → FR70 약 5년 만의 대변신. 단 멀티밴드 GPS·맵·ECG는 여전히 상위 모델 영역</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">📅</span>
  <div class="callout-body">
    <p class="callout-title">한국 출시 일정 D-6</p>
    <p>글로벌 판매는 5월 15일(목)부터, <strong>한국 가민 공식 홈페이지(garmin.co.kr) 정식 판매는 5월 20일(화)</strong>입니다. 사전판매 페이지는 발표 시점 미오픈 상태로, 5월 20일 이후 다나와·네이버 스마트스토어·공식몰에서 동시 등록될 예정입니다.</p>
  </div>
</div>

<h2>3개 모델 한 눈에</h2>

<table>
  <thead>
    <tr><th>모델</th><th>한국 가격</th><th>핵심 차이</th><th>이런 러너에게</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Forerunner 70</strong></td>
      <td><strong>399,000원</strong></td>
      <td>입문 베이스 — AMOLED·GPS·HRV·Training Readiness·Running Power</td>
      <td>5K~하프 입문, 첫 데이터 훈련 시계</td>
    </tr>
    <tr>
      <td><strong>Forerunner 170</strong></td>
      <td><strong>479,000원</strong></td>
      <td>+기압 고도계·나침반·자이로·온도·Garmin Pay·오픈워터 수영</td>
      <td>하프~풀 빌드업, 언덕·트레일 입문</td>
    </tr>
    <tr>
      <td><strong>Forerunner 170 Music</strong></td>
      <td><strong>559,000원</strong></td>
      <td>+Spotify·Amazon Music·Deezer 오프라인 재생, Wi-Fi</td>
      <td>휴대폰 없이 음악 들으며 LSD 뛰는 러너</td>
    </tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">💸</span>
  <div class="callout-body">
    <p class="callout-title">170 Music — 80,000원 더 낼 가치가 있나</p>
    <p>오프라인 음악 재생 시 <strong>GPS 배터리가 20시간 → 약 7.5시간으로 큰 폭 감소</strong>합니다. 풀코스 5시간 + 워밍업 고려하면 충분하지만, 100K·울트라까지 보면 부족. 평소 러닝 시 휴대폰을 들고 다닌다면 80,000원 절약하고 FR170으로 충분합니다.</p>
  </div>
</div>

<h2>왜 이번 발표가 큰가 — "코칭 SW의 민주화"</h2>

<p>가민 Forerunner 라인의 기존 가격 — 기능 구조는 이랬습니다:</p>

<ul>
  <li><strong>FR55(30만원대):</strong> 기본 GPS·심박·기본 트레이닝 — 데이터는 보여주지만 "오늘 뛰어야 하나"는 안 알려줌</li>
  <li><strong>FR265(60만원대):</strong> Training Readiness·HRV Status·Running Power·AMOLED — "오늘 컨디션 7/10, 베이스런 추천" 식의 진짜 코칭</li>
  <li><strong>FR965(80만원대):</strong> 위 기능 + 멀티밴드 GPS·맵·터치·LED 플래시</li>
</ul>

<p>입문 러너가 데이터 기반 훈련에 입문하려면 <strong>60만원짜리 FR265까지 점프해야 했다</strong>는 의미입니다. 30만원대 FR55를 사면 "5km 뛰었다"는 사실은 알지만, "내일 인터벌 해도 되나"라는 판단은 받지 못했죠.</p>

<p>이번 FR70은 그 벽을 깼습니다. <strong>39.9만원에 Training Readiness · HRV Status · 손목 기반 Running Power · Running Dynamics가 모두 들어갔습니다.</strong> 외부 풋팟 없이 손목만으로 파워 기반 훈련이 가능하다는 의미입니다.</p>

<h2>입문 모델 FR70에 들어간 "민주화 기능들"</h2>

<table>
  <thead>
    <tr><th>기능</th><th>이전에는</th><th>FR70에서</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Training Readiness</strong></td>
      <td>FR265 / Fenix 7 이상</td>
      <td>✅ 탑재 — 매일 아침 0~100점으로 훈련 강도 추천</td>
    </tr>
    <tr>
      <td><strong>HRV Status</strong></td>
      <td>FR265 / Fenix 7 이상</td>
      <td>✅ 탑재 — 야간 심박변이도 추세로 회복 상태 추적</td>
    </tr>
    <tr>
      <td><strong>Training Load</strong></td>
      <td>FR265 / Fenix 7 이상</td>
      <td>✅ 탑재 — 7일 누적 부하 vs 적정 범위 시각화</td>
    </tr>
    <tr>
      <td><strong>Running Power(손목)</strong></td>
      <td>FR265 + Running Dynamics Pod 필요</td>
      <td>✅ 손목만으로 추정 — 외부 센서 0개</td>
    </tr>
    <tr>
      <td><strong>Running Dynamics</strong></td>
      <td>FR265+ 또는 외부 센서</td>
      <td>✅ 케이던스·수직 진폭·접지 시간·보폭</td>
    </tr>
    <tr>
      <td><strong>AMOLED 디스플레이</strong></td>
      <td>FR165(40만원대)부터</td>
      <td>✅ 1.2인치 — 햇빛 아래 가독성 대폭 향상</td>
    </tr>
    <tr>
      <td><strong>Trail VO2max</strong></td>
      <td>Fenix 7 / Epix 2 이상</td>
      <td>✅ 탑재 — 트레일 러닝 별도 VO2max 추적</td>
    </tr>
  </tbody>
</table>

<p>전작 FR55(2021년 출시)와 비교하면 약 5년 만의 세대 점프 폭이 컸습니다:</p>

<ul>
  <li>디스플레이: 1.0인치 MIP → <strong>1.2인치 AMOLED 터치스크린</strong> (5버튼 병행)</li>
  <li>케이스: 42mm → 43mm, 무게 37g → 40g (3g 증가는 미미)</li>
  <li>배터리 GPS 모드: 20시간 → <strong>23시간</strong></li>
  <li>스마트워치 모드: 약 2주 → <strong>약 13일</strong> (AMOLED 도입에도 유지)</li>
  <li>스포츠 프로필 60+개 신규 추가</li>
  <li>퀵 워크아웃 크리에이터 — 휴대폰 없이 시계만으로 인터벌 설계</li>
</ul>

<h2>FR70 vs FR170 — 8만원 차이의 의미</h2>

<p>두 모델 모두 같은 1.2인치 AMOLED·같은 코칭 SW를 공유합니다. 8만원 가격 차이는 <strong>"하드웨어 센서"</strong>에서 옵니다.</p>

<table>
  <thead>
    <tr><th>센서·기능</th><th>FR70 (39.9만원)</th><th>FR170 (47.9만원)</th></tr>
  </thead>
  <tbody>
    <tr><td>광학 심박</td><td>✅ Elevate V4</td><td>✅ Elevate V4</td></tr>
    <tr><td>SpO2 (혈중산소)</td><td>✅</td><td>✅</td></tr>
    <tr><td><strong>기압 고도계</strong></td><td>❌</td><td>✅ <strong>언덕·트레일 고도 정확</strong></td></tr>
    <tr><td><strong>3축 나침반</strong></td><td>❌</td><td>✅</td></tr>
    <tr><td><strong>자이로스코프</strong></td><td>❌</td><td>✅</td></tr>
    <tr><td><strong>온도계</strong></td><td>❌</td><td>✅</td></tr>
    <tr><td>오픈워터 수영 메트릭</td><td>❌</td><td>✅</td></tr>
    <tr><td>Garmin Pay 비접촉 결제</td><td>❌</td><td>✅</td></tr>
    <tr><td>파워미터 연동 (자전거)</td><td>❌</td><td>✅</td></tr>
  </tbody>
</table>

<div class="callout success">
  <span class="callout-icon">🏔</span>
  <div class="callout-body">
    <p class="callout-title">언덕·트레일 뛴다면 기압 고도계는 필수</p>
    <p>FR70은 GPS 신호로 고도를 추정해서 오차가 큽니다(±10~20m 흔함). FR170은 기압 고도계로 실시간 압력을 측정해 <strong>±1~3m 정확도</strong>. 청계산·관악산 트레일이나 남산·인왕산 도시 러닝의 누적고도 측정이 일상이라면 8만원 추가 가치가 있습니다.</p>
  </div>
</div>

<h2>경쟁 모델 비교 — COROS Pace 4가 직격</h2>

<table>
  <thead>
    <tr><th>모델</th><th>가격(약)</th><th>GPS</th><th>디스플레이</th><th>강점</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Garmin FR70</strong></td>
      <td>39.9만원</td>
      <td>싱글밴드</td>
      <td>AMOLED 1.2"</td>
      <td>코칭 SW(Training Readiness)·생태계·Garmin Coach</td>
    </tr>
    <tr>
      <td><strong>COROS Pace 4</strong></td>
      <td>약 35만원<sup>※</sup></td>
      <td><strong>듀얼밴드(멀티)</strong></td>
      <td>AMOLED</td>
      <td>GPS 정확도·배터리(31h GPS)·음악 기본</td>
    </tr>
    <tr>
      <td><strong>Polar Pacer Pro</strong></td>
      <td>약 40만원<sup>※</sup></td>
      <td>싱글밴드</td>
      <td>MIP(비 AMOLED)</td>
      <td>Polar 러닝 파워·훈련 부하 분석</td>
    </tr>
    <tr>
      <td><strong>Apple Watch S10 (GPS)</strong></td>
      <td>59.9만원</td>
      <td>L1+L5</td>
      <td>AMOLED</td>
      <td>iOS 통합·범용성</td>
    </tr>
  </tbody>
</table>

<p><small><sup>※</sup> COROS·Polar는 한국 공식 원화 정가가 변동적이라 USD 환산 + 네이버 쇼핑 평균가 기준 추정.</small></p>

<p>가장 직접적인 경쟁은 <strong>COROS Pace 4</strong>입니다. 비슷한 가격대에 <strong>듀얼밴드 GPS를 탑재했고 배터리도 31시간</strong>으로 더 깁니다. 순수 GPS 정확도와 배터리를 중시하면 COROS가 유리합니다.</p>

<p>가민이 우위에 서는 지점은 <strong>"생태계"</strong>입니다. Garmin Connect 앱의 깊이, Connect IQ 워치페이스/앱 스토어, Garmin Coach 무료 훈련 플랜(5K·10K·하프 마라톤), 신발 사용거리 추적, 한국 러닝 크루의 압도적 점유율(가민 사용자 간 공유·비교 문화). 데이터를 혼자 보는 게 아니라 <strong>크루와 공유·경쟁하는 문화</strong>를 원한다면 가민이 답입니다.</p>

<h2>한계점 — 멀티밴드 GPS가 빠진 게 큰가</h2>

<p>FR70·170 모두 <strong>싱글밴드(L1) GPS</strong>입니다. 멀티밴드(L1+L5)는 FR265($449)부터입니다. 멀티밴드가 의미 있는 환경은:</p>

<ul>
  <li><strong>도심 고층빌딩 협곡:</strong> 강남대로·여의도 IFC 주변·테헤란로 — 빌딩 반사로 GPS 트랙이 지그재그</li>
  <li><strong>울창한 숲 트레일:</strong> 청계산·북한산·관악산 정상부 능선·계곡 구간</li>
  <li><strong>지하·터널 직후:</strong> 한강 다리 진출입부·고가도로 하부</li>
</ul>

<p>위 환경에서 PB나 누적거리 데이터가 정확해야 한다면 멀티밴드(FR265 이상)가 필요합니다. 반대로 <strong>한강 평지·송도·공원 트랙 위주</strong>라면 싱글밴드로도 충분 — DCRainmaker는 가민 싱글밴드 GPS가 타사 멀티밴드와 비슷한 수준이라고 평했습니다.</p>

<p>그 외 빠진 것들:</p>

<ul>
  <li><strong>지도(맵) 없음</strong> — 코스 추종(경로 따라가기)은 가능하지만 실제 지도 뷰는 없음. Up Ahead 거리 마커로 다음 보급지 표시는 됨</li>
  <li><strong>ECG·피부 온도</strong> 미지원 — 의료 등급 데이터 원하면 Venu/Fenix 라인</li>
  <li><strong>LED 플래시라이트</strong> 미탑재 — 새벽·야간 LSD 자주 뛴다면 Fenix/Enduro 라인</li>
</ul>

<h2>누구에게 추천하나 — 5가지 시나리오</h2>

<table>
  <thead>
    <tr><th>러너 유형</th><th>추천 모델</th><th>왜</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>러닝 시작 1년 차 / 첫 시계</strong></td>
      <td>FR70 39.9만원</td>
      <td>Training Readiness로 "오늘 뛰어야 하나" 판단 자동화 — 초보의 가장 큰 고민 해결</td>
    </tr>
    <tr>
      <td><strong>3~5년차, FR55/45 쓰던 러너 업그레이드</strong></td>
      <td>FR70 또는 FR170</td>
      <td>AMOLED·HRV·Running Power 세대 점프 폭 큼. 평지 위주면 FR70, 언덕 끼면 FR170</td>
    </tr>
    <tr>
      <td><strong>하프~풀 빌드업 + 트레일 입문</strong></td>
      <td>FR170 47.9만원</td>
      <td>기압 고도계로 누적고도 정확. 풀코스 GPS 모드 20시간 충분</td>
    </tr>
    <tr>
      <td><strong>휴대폰 없이 LSD 즐기는 러너</strong></td>
      <td>FR170 Music 55.9만원</td>
      <td>Spotify·Deezer 오프라인 — 단 음악 재생 시 GPS 7.5시간만 가능</td>
    </tr>
    <tr>
      <td><strong>GPS 정확도·배터리 최우선·생태계 관심 적음</strong></td>
      <td>COROS Pace 4(약 35만원)</td>
      <td>듀얼밴드 + 31시간 GPS. 가민 생태계 매력 못 느끼면 합리적 대안</td>
    </tr>
  </tbody>
</table>

<h2>시계 + 신발 — 데이터 훈련 풀스택</h2>

<p>FR70/170의 진짜 가치는 <strong>"손목 기반 Running Power + Running Dynamics"</strong>입니다. 케이던스·수직 진폭·접지 시간이 함께 잡히면, 신발 선택에 데이터 근거가 생깁니다.</p>

<ul>
  <li><strong>케이던스 170spm 이하 + 수직 진폭 9cm 이상:</strong> 착지 충격이 큰 폼 → 쿠셔닝 강한 데일리 트레이너 추천. <a href="/shoes/asics-gel-nimbus-28">아식스 님버스 28</a>·<a href="/shoes/hoka-clifton-10">호카 클리프턴 10</a>·<a href="/shoes/new-balance-1080-v15">NB 1080 v15</a></li>
  <li><strong>케이던스 180spm + 짧은 접지 시간(200ms 이하):</strong> 효율적 폼 → 가벼운 반응성 모델 활용 가능. <a href="/shoes/nike-pegasus-42">나이키 페가수스 42</a>·<a href="/shoes/adidas-adizero-evo-sl">아디다스 에보 SL</a></li>
  <li><strong>10K~하프 PB 도전 + Running Power 안정적:</strong> 슈퍼 트레이너 또는 카본화. <a href="/shoes/asics-superblast-3">슈퍼블라스트 3</a>·<a href="/shoes/asics-magic-speed-4">매직 스피드 4</a>·<a href="/shoes/nike-vaporfly-4">베이퍼플라이 4</a></li>
  <li><strong>안정성·평발 우려 + Running Dynamics에서 좌우 비대칭 큼:</strong> 안정화. <a href="/shoes/asics-gel-kayano-33">아식스 카야노 33</a></li>
</ul>

<p>시계가 데이터를 잡고, 신발이 그 데이터에 맞춘다 — 가민이 노리는 "데이터 → 장비 의사결정" 풀스택의 입문 진입가가 39.9만원으로 낮아졌다는 게 이번 발표의 핵심 의미입니다.</p>

<p>본인 발 특성·부상 이력·예산을 입력하면 신발 후보는 <a href="/recommend">1분 러닝화 추천</a>에서 받을 수 있습니다.</p>

<h2>D-6 액션 플랜</h2>

<ol>
  <li><strong>5/14~5/19:</strong> 모델 결정 — 평지 위주 FR70 / 언덕·트레일 FR170 / 음악 LSD FR170 Music</li>
  <li><strong>5/20(화) 09:00~:</strong> 가민 코리아 공식 홈페이지(garmin.co.kr) 정식 판매 개시 — 초기 재고 한정 가능성</li>
  <li><strong>5/20~5/22:</strong> 다나와·네이버 스마트스토어 등록 후 가격 비교 (공식가 ±2~3% 변동)</li>
  <li><strong>구매 후 첫 주:</strong> 매일 같은 시각 손목 착용 → HRV·Training Readiness 베이스라인 학습(약 7일 소요)</li>
  <li><strong>2주차부터:</strong> Training Readiness 권고치 기반 훈련 강도 조절 시작</li>
</ol>

<div class="callout info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">기존 FR165/FR265 사용자라면 살 필요 있나</p>
    <p>FR165(작년 발매·약 42만원)는 AMOLED·HRV·Running Power 다 있어서 FR70 대비 큰 격차 없습니다. <strong>업그레이드 메리트 거의 없음</strong>. FR265는 멀티밴드 GPS·맵·더 큰 디스플레이가 FR170 대비 우위이므로 다운그레이드도 의미 없음. 이번 발표의 진짜 타깃은 <strong>FR55·FR45·Apple Watch 시리즈 4~6 / 첫 러닝 시계 입문자</strong>입니다.</p>
  </div>
</div>

<p>같은 5월 발매 라인은 <a href="/blog/2026-asics-kayano-33-launch">ASICS GEL-KAYANO 33 D-21</a>(6/1 출시)도 주목할 만합니다. 시계 + 신발 동시 세대 교체 시기.</p>

<p><small>출처: Garmin Newsroom 공식 보도자료 / 가민 코리아 뉴스와이어 보도자료(2026-05-13) / DCRainmaker FR70 리뷰 / The 5K Runner FR70·170 런치 분석 / T3 영국 가격 / 작성일 2026년 5월 14일 기준. 한국 출시 후 실제 매장 가격·재고 상황은 5/20 이후 본 글 업데이트 예정.</small></p>
`,
  },
  {
    id: '2026-songdo-lee-bongju-marathon',
    slug: '2026-songdo-lee-bongju-marathon',
    title: '제1회 송도 이봉주 마라톤 D-3 | 5/15 마감, 6/28 인천 송도 10K·5K — 한국 마라톤 레전드 이름 단 첫 대회',
    description: '한국 마라톤 최고의 레전드 이봉주 선수의 이름을 단 첫 마라톤이 2026년 6월 28일(일) 인천대학교 송도캠퍼스에서 열립니다. 10km·5km, 각 50,000원, 정원 10,000명 선착순. 접수가 5월 15일까지로 D-3 — 첫 회 대회 정보·코스·신청 전략·신발 추천까지.',
    thumbnail: '/images/blog/2026-songdo-lee-bongju-marathon.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-12',
    category: 'news' as const,
    readingTime: 7,
    tags: ['송도 이봉주 마라톤', '이봉주', '인천 마라톤', '송도', '6월 마라톤', '대회 일정', '10K', '5K'],
    event: {
      name: '제1회 2026 송도 이봉주 마라톤',
      startDate: '2026-06-28T08:00:00+09:00',
      location: {
        name: '인천대학교 송도캠퍼스',
        address: '인천광역시 연수구 송도동 인천대학교',
      },
      organizer: '인천광역시육상연맹, 이상커뮤니케이션즈',
      url: 'https://runsongdo.co.kr',
      offers: [
        { name: '10km', priceKrw: 50000, availabilityEnds: '2026-05-15', url: 'https://runsongdo.co.kr/entryperson.php' },
        { name: '5km', priceKrw: 50000, availabilityEnds: '2026-05-15', url: 'https://runsongdo.co.kr/entryperson.php' },
      ],
    },
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>한국 마라톤 전설 이봉주의 이름을 단 첫 대회</strong> — 2026년 6월 28일(일) 인천대학교 송도캠퍼스 08:00 출발</li>
    <li>10km·5km <strong>각 50,000원</strong>, 정원 10,000명 선착순, 접수 4/20~<strong>5/15(금)</strong> — D-3</li>
    <li>송도 평지 코스 + 6월 말 한여름 직전 새벽 출발 — 첫 회 대회라 정보가 적지만 이봉주 IP·기념품·만 명 규모로 빠른 매진 우려</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">⏰</span>
  <div class="callout-body">
    <p class="callout-title">D-3 — 5월 15일(금) 접수 마감</p>
    <p>첫 회 + 한국 마라톤 전설 이름 + 만 명 정원의 조합은 6월 대회 중 가장 매진 압력이 큰 라인업입니다. 결정했다면 오늘 안에 <a href="https://runsongdo.co.kr/entryperson.php" target="_blank" rel="noopener">runsongdo.co.kr</a>에서 결제까지 끝내세요. 환불 기한은 5월 29일(금) 17시까지로 비교적 여유 있음.</p>
  </div>
</div>

<h2>왜 이번 대회가 특별한가</h2>

<p>이봉주 선수는 1996 애틀랜타 올림픽 마라톤 은메달, 2001 보스턴 마라톤 우승, 한국 최고 기록(2:07:20) 보유자입니다. 한국 러닝의 황금기를 이끈 인물이자 대중적 인지도가 가장 높은 마라토너죠. 그의 이름을 단 마라톤이 <strong>정식 대회로 출범하는 것은 이번이 처음</strong>입니다.</p>

<p>첫 회 대회는 통상 두 가지 성격을 띱니다:</p>

<ul>
  <li><strong>① 운영 미숙 리스크</strong> — 셔틀버스·물품보관·식수공급·완주 보급 등 처음이라 시행착오 가능</li>
  <li><strong>② 가치 상승 잠재력</strong> — 1회 완주 메달은 향후 시리즈가 성장할수록 희소성 가치 발생. 1회 참가는 "오리지널 멤버"라는 상징성</li>
</ul>

<p>이봉주 마라톤은 인천광역시육상연맹이 공동 주최하므로 운영 측면에서 어느 정도 신뢰 가능하지만, 첫 회는 항상 보수적으로 접근하는 게 안전합니다.</p>

<h2>한 눈에 보는 대회 정보</h2>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>대회명</strong></td><td>제1회 2026 송도 이봉주 마라톤</td></tr>
    <tr><td><strong>대회일</strong></td><td>2026년 6월 28일(일) 08:00 출발 (07:00 집결)</td></tr>
    <tr><td><strong>장소</strong></td><td>인천대학교 송도캠퍼스</td></tr>
    <tr><td><strong>종목</strong></td><td>10km / 5km</td></tr>
    <tr><td><strong>참가비</strong></td><td>10km <strong>50,000원</strong> / 5km <strong>50,000원</strong> (동일)</td></tr>
    <tr><td><strong>정원</strong></td><td>10,000명 선착순</td></tr>
    <tr><td><strong>접수 기간</strong></td><td>2026년 4월 20일 ~ <strong>5월 15일(금)</strong></td></tr>
    <tr><td><strong>기념품</strong></td><td>기념품, 배번호, 완주메달, 온라인 기록증, 기록칩</td></tr>
    <tr><td><strong>환불 기한</strong></td><td>5월 29일(금) 17:00까지</td></tr>
    <tr><td><strong>주최</strong></td><td>인천광역시육상연맹, 이상커뮤니케이션즈</td></tr>
    <tr><td><strong>접수 사이트</strong></td><td><a href="https://runsongdo.co.kr" target="_blank" rel="noopener">runsongdo.co.kr</a></td></tr>
    <tr><td><strong>문의</strong></td><td>1866-1718</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">10km와 5km 참가비가 같은 이유</p>
    <p>일반적으로 10K가 5K보다 5,000~10,000원 비싼데, 이번 대회는 둘 다 50,000원입니다. 첫 회 + 만 명 규모 + 동일 보급·기념품 구성을 노린 가격 책정으로 보입니다. <strong>5km 러너 입장에서는 다소 비싸게 느낄 수 있지만, 10km 러너 입장에서는 합리적</strong>인 가격입니다.</p>
  </div>
</div>

<h2>송도 코스 — 평지 + 6월 말 한여름 직전</h2>

<p>인천 송도는 매립 신도시 특성상 <strong>거의 100% 평지</strong>입니다. 송도캠퍼스를 중심으로 센트럴파크·송도해변·국제업무지구·인천대교 방면 등 어디로 코스를 그려도 평탄. PB 친화적 환경입니다.</p>

<p>다만 6월 28일은 <strong>여름의 가장자리</strong>입니다:</p>

<ul>
  <li><strong>인천 6월 말 평균:</strong> 오전 8시 기온 22~24℃, 습도 75~85%, 일출 5:13</li>
  <li><strong>바닷가·바람 변수:</strong> 송도는 해안가 매립지라 바람이 강한 날 영향이 있을 수 있음. 출발 시각 8시면 통상 미풍 정도</li>
  <li><strong>자외선:</strong> 8시 출발이면 이미 자외선 지수 3~5 (보통~높음). 모자·선글라스 권장</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">☀️</span>
  <div class="callout-body">
    <p class="callout-title">6월 말 페이스 컨트롤</p>
    <p>봄·가을 페이스에서 km당 10~15초 늦추는 게 안전합니다. 평소 10K 50분이면 51~52분 목표가 합리적. PB 도전은 부담스럽다면 첫 회 대회 분위기 체험 + 완주 메달 수집에 집중하는 게 현명합니다.</p>
  </div>
</div>

<h2>코스별 본인 매칭</h2>

<table>
  <thead>
    <tr><th>이런 러너라면</th><th>추천 종목</th><th>이유</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>러닝 입문 1년 차 / 5K 완주 경험</strong></td>
      <td>5km</td>
      <td>여름 첫 대회로 부담 최소, 완주 메달 + 첫 회 IP 가치</td>
    </tr>
    <tr>
      <td><strong>10K 완주 경험, 하프 도전 전</strong></td>
      <td>10km</td>
      <td>평지 + 같은 50K 참가비 → 가성비 우위</td>
    </tr>
    <tr>
      <td><strong>10K PB 도전 (50분 이하)</strong></td>
      <td>10km</td>
      <td>송도 평지 + 6월 말 새벽 → 시즌 첫 PB 도전 가능 환경</td>
    </tr>
    <tr>
      <td><strong>가을 풀코스 빌드업 중</strong></td>
      <td>10km</td>
      <td>여름 페이스 적응 + 빠른 페이스 점검</td>
    </tr>
  </tbody>
</table>

<h2>신발 선택 — 송도 평지 6월 새벽</h2>

<p>6월 말 28℃ 가까운 더위 + 평지 도심 코스 조건에 맞는 후보:</p>

<ul>
  <li><strong>5km / 10K 가벼운 페이스 — 데일리 트레이너:</strong> <a href="/shoes/nike-pegasus-42">나이키 페가수스 42</a>·<a href="/shoes/adidas-adizero-evo-sl">아디다스 에보 SL</a>·<a href="/shoes/new-balance-1080-v15">NB 1080 v15</a></li>
  <li><strong>10K PB 도전 — 슈퍼 트레이너 또는 카본화:</strong> <a href="/shoes/asics-superblast-2">슈퍼블라스트 2</a>·<a href="/shoes/adidas-adios-pro-4">아디오스 프로 4</a>·<a href="/shoes/nike-vaporfly-4">베이퍼플라이 4</a>·<a href="/shoes/asics-magic-speed-4">매직 스피드 4</a></li>
  <li><strong>5km 첫 대회 — 안정감 우선:</strong> <a href="/shoes/asics-gel-nimbus-28">님버스 28</a>·<a href="/shoes/hoka-clifton-10">호카 클리프턴 10</a></li>
</ul>

<p>발볼 넓으면 와이드 옵션 우선, 여름 대회는 통기성 좋은 메쉬 어퍼 필수. 발에 맞는 신발 후보가 막막하다면 <a href="/recommend">1분 러닝화 추천</a> 또는 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국인을 위한 러닝화 추천 TOP 10</a> 참고.</p>

<h2>D-3 액션 플랜</h2>

<ol>
  <li><strong>오늘~내일 (5/12~13):</strong> 종목 결정(5K vs 10K) → 참가비 50K 결제 → 본인 정보 확인</li>
  <li><strong>5/15(금):</strong> 최종 마감 — 결정 못 했으면 미루지 말기 (만 명 매진 우려)</li>
  <li><strong>5/29(금) 17:00:</strong> 환불·정보변경 마지막 기한</li>
  <li><strong>6월 1~3주차:</strong> 여름 페이스 적응 훈련 (km당 +10초 페이스로 30~50분 베이스런 주 3회)</li>
  <li><strong>6/28(일) 07:00:</strong> 송도캠퍼스 집결, 08:00 출발</li>
</ol>

<div class="callout success">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">같은 날 6/28 다른 대회와 비교</p>
    <p>같은 6월 28일(일)에 <strong>2026 서울런</strong>도 열립니다(서울·하프/10K/5K, 접수 6/17 마감). 인천 거주·송도 접근성 좋음·이봉주 IP 선호 → 송도 / 서울 거주·하프 옵션 필요 → 서울런. 한 쪽만 선택 가능합니다.</p>
  </div>
</div>

<p>여름~가을 마라톤 큐레이션은 <a href="/blog/2026-pohang-iron-run">2026 포항 아이언런 D-19</a>(7/4) → <a href="/blog/2026-chuncheon-marathon-registration-guide">2026 춘천마라톤 풀코스 접수 가이드</a>(6/24 접수) → <a href="/blog/2026-dongma-halfyear-marathon-schedule">2026 하반기 동마 대회 일정 총정리</a> 순으로 빌드업하는 게 자연스럽습니다.</p>

<p><small>출처: runsongdo.co.kr 공식 / runningwikii / 작성일 2026년 5월 12일 기준 / 코스·페이스메이커·이봉주 선수 직접 참여 여부는 주최측 후속 공지 시 본 글 업데이트 예정.</small></p>
`,
  },
  {
    id: '2026-nike-alphafly-4-prototype',
    slug: '2026-nike-alphafly-4-prototype',
    title: '나이키 알파플라이 4 프로토타입 정체 공개 | 보스턴 미국 남자 역대 2위 + Nike-Dev 16141 WA 등록',
    description: '2026 보스턴 마라톤에서 미국 남자 역대 2위를 만든 그 신발. World Athletics 승인 신발 리스트에 "Nike-Dev 16141"로 등록된 알파플라이 4 프로토타입의 정체와 기술 변화, 정식 출시 시점(시카고 마라톤 11월), 그리고 아디다스 아디오스 프로 에보 3와의 슈퍼슈즈 4파전 구도까지 정리.',
    thumbnail: '/images/blog/2026-nike-alphafly-4-prototype.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-12',
    category: 'news' as const,
    readingTime: 8,
    tags: ['나이키', 'Nike', 'AlphaFly 4', '알파플라이 4', '슈퍼슈즈', '카본화', '보스턴 마라톤', 'ZoomX', '러닝화 발매'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>나이키 <strong>알파플라이 4 프로토타입</strong>이 2026 보스턴 마라톤에서 Charles Hicks의 <strong>미국 남자 역대 2위</strong>를 만들며 정체 노출 — World Athletics 등록 코드 <strong>Nike-Dev 16141</strong></li>
    <li>핵심 변화: <strong>드롭 4-6mm로 하향</strong> + 전족부 ZoomX 증량 + <strong>듀얼 Air Zoom 유닛 + 연속형 바텀</strong>(힐~전족부 갭 제거) + 카본 플레이트 신지오메트리</li>
    <li>정식 출시는 <strong>2026년 11월 시카고 마라톤 직전</strong> 예상. 같은 해 발매된 <a href="/blog/2026-adidas-adios-pro-evo-3-korea-release">아디오스 프로 에보 3</a>(97g)와의 슈퍼슈즈 4파전 본격화</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">"Nike-Dev 16141"가 의미하는 것</p>
    <p>나이키가 World Athletics 공식 승인 신발 리스트에 새 코드(Nike-Dev 16141)를 등록했다는 건, <strong>"이미 엘리트 레이스에서 합법적으로 사용할 수 있는 단계"</strong>로 개발이 진척됐다는 뜻입니다. 보통 정식 발매 6~9개월 전 단계. 아디다스가 아디오스 프로 에보 3로 서브2를 만든 직후, 나이키의 본격 반격이 시작됐다는 신호입니다.</p>
  </div>
</div>

<h2>발견 경위 — 보스턴 마라톤 2위가 만든 화제</h2>

<p>2026년 4월 21일 보스턴 마라톤. 미국 마라톤의 신예 <strong>Charles Hicks가 미국 남자 역대 2위</strong>로 결승선을 끊었습니다. 그가 신은 신발은 <a href="/shoes/nike-alphafly-3">알파플라이 3</a>도 <a href="/shoes/nike-vaporfly-4">베이퍼플라이 4</a>도 아닌, 처음 보는 흰색·그레이 톤의 프로토타입.</p>

<p>곧이어 World Athletics 승인 신발 리스트가 업데이트되면서 정체가 드러났습니다 — <strong>Nike-Dev 16141</strong>. 같은 시기 케냐의 Faith Kipyegon(여자 1,500m 세계기록), 미국의 Grant Fisher(트랙 챔피언), Mary Ngugi-Cooper도 같은 신발을 신은 모습이 포착되었습니다. <strong>나이키 엘리트 풀에 베타 모델이 광범위하게 배포된 상태</strong>입니다.</p>

<h2>알파플라이 3 → 4 핵심 변화 4가지</h2>

<h3>① 드롭 8mm → 4-6mm</h3>

<p>알파플라이 3의 8mm 드롭을 4-6mm 수준으로 낮춰 <strong>"더 평평한 신발"</strong>로 가는 방향. 이건 단순한 수치 변경이 아니라 미드솔 구조의 본질적 재설계입니다. 드롭이 낮아지면 전족부에 더 두꺼운 폼을 박을 수 있어 World Athletics 40mm 상한 내에서 <strong>더 큰 에너지 저장소</strong>를 만들 수 있습니다.</p>

<h3>② 전족부 ZoomX 폼 증량 + 신 포뮬러</h3>

<p>알파플라이 3에서도 ZoomX는 업계 최고 에너지 리턴 폼 중 하나로 평가됐는데, 4세대에서는 <strong>새 포뮬러 + 전족부 적층량 증가</strong>로 전족부 추진력을 강화합니다. 마라톤 후반(30km 이후)의 다리 무너짐을 줄이는 핵심 변화로 평가됩니다.</p>

<h3>③ 듀얼 Air Zoom + 연속형 바텀 유닛</h3>

<p>알파플라이 3까지는 힐과 전족부 Air Zoom 유닛 사이에 <strong>물리적 갭</strong>이 있었습니다(미드풋 부분). 4세대에서는 이 갭을 없애고 <strong>힐~전족부가 하나의 연속 바텀 유닛</strong>으로 연결됩니다. 결과는 보행 사이클의 미드풋 전환 단계에서 에너지 손실 감소 + 더 부드러운 롤링.</p>

<h3>④ 카본 플레이트 지오메트리 변경 + 와이드 미드풋</h3>

<p>Flyplate(카본 플레이트)의 위치·곡률이 재설계되고, 미드풋이 더 넓어집니다. 이는 <strong>안정성 향상</strong>을 노린 변화로, 알파플라이 3의 미드풋 흔들림 불만(특히 마라톤 후반)을 직접 겨냥한 개선입니다.</p>

<h2>알파플라이 3 vs 4 — 알려진 정보 비교</h2>

<table>
  <thead>
    <tr><th>항목</th><th>알파플라이 3 (현행)</th><th>알파플라이 4 (예상)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>무게</strong></td><td>220g (US M9)</td><td>경량화 (구체값 미공개)</td></tr>
    <tr><td><strong>드롭</strong></td><td>8mm</td><td><strong>4-6mm</strong></td></tr>
    <tr><td><strong>미드솔</strong></td><td>ZoomX (기존 포뮬러)</td><td><strong>ZoomX 신 포뮬러</strong></td></tr>
    <tr><td><strong>Air Zoom 유닛</strong></td><td>힐+전족부 분리</td><td><strong>연속형 바텀 (갭 제거)</strong></td></tr>
    <tr><td><strong>카본 플레이트</strong></td><td>Flyplate (기존)</td><td>지오메트리 변경</td></tr>
    <tr><td><strong>미드풋</strong></td><td>표준</td><td><strong>와이드 (안정성 강화)</strong></td></tr>
    <tr><td><strong>WA 코드</strong></td><td>공개됨</td><td>Nike-Dev 16141</td></tr>
    <tr><td><strong>글로벌 출시</strong></td><td>2024년 1월</td><td>2026년 11월 시카고 마라톤 직전 예상</td></tr>
    <tr><td><strong>글로벌 정가</strong></td><td>$285</td><td>$285~330 예상</td></tr>
  </tbody>
</table>

<h2>2026 슈퍼슈즈 4파전 구도</h2>

<p>지난 12개월 동안 메이저 브랜드들이 차세대 슈퍼슈즈를 모두 갱신했거나 갱신 진행 중입니다. <strong>2026년은 슈퍼슈즈 역사상 가장 경쟁이 치열한 해</strong>로 기록될 전망입니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>무게</th><th>출시</th><th>한국가</th><th>포지션</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/blog/2026-adidas-adios-pro-evo-3-korea-release">아디다스 아디오스 프로 에보 3</a></td>
      <td><strong>97g</strong></td>
      <td>2026.4 (래플)</td>
      <td>74만원~</td>
      <td>업계 최경량, 1~2회 레이스 전용</td>
    </tr>
    <tr>
      <td><strong>나이키 알파플라이 4</strong></td>
      <td>경량화 예상</td>
      <td>2026.11 예상</td>
      <td>40만원대 추정</td>
      <td>풀코스 30km+ 안정성</td>
    </tr>
    <tr>
      <td><a href="/shoes/nike-vaporfly-4">나이키 베이퍼플라이 4</a></td>
      <td>166g</td>
      <td>2025.3</td>
      <td>약 35만원</td>
      <td>대중적 PB 도전 표준</td>
    </tr>
    <tr>
      <td><a href="/shoes/asics-metaspeed-sky-plus">아식스 메타스피드 스카이+</a></td>
      <td>159g</td>
      <td>2025</td>
      <td>약 29만원</td>
      <td>가성비 슈퍼슈즈</td>
    </tr>
    <tr>
      <td><a href="/shoes/saucony-endorphin-elite-2">서코니 엔돌핀 엘리트 2</a></td>
      <td>195g</td>
      <td>2025</td>
      <td>약 32만원</td>
      <td>발볼 넓음, 한국 친화적</td>
    </tr>
  </tbody>
</table>

<h2>한국 러너 관점 — 알파플라이 4를 기다려야 하나</h2>

<h3>✅ 기다릴 가치가 있는 사람</h3>

<ul>
  <li><strong>가을 풀코스(춘천·서울·JTBC) PB 도전</strong> — 11월 시카고 직전 출시면 한국 가을 마라톤(10월 중순~11월)과 시기 겹침. 메인 PB 신발로 적합</li>
  <li><strong>알파플라이 3의 미드풋 흔들림이 거슬렸던 러너</strong> — 와이드 미드풋 + 연속형 바텀으로 안정성 직접 개선</li>
  <li><strong>30km 이후 다리 무너짐이 문제였던 러너</strong> — 전족부 ZoomX 증량은 마라톤 후반 추진력 보강을 노린 변화</li>
  <li><strong>"가장 최신 슈퍼슈즈"를 신고 싶은 컬렉터·러너</strong></li>
</ul>

<h3>❌ 안 기다려도 되는 사람</h3>

<ul>
  <li><strong>봄 마라톤(5~6월) PB 도전 러너</strong> — 출시 시점이 가을 이후. 지금 필요한 신발이면 베이퍼플라이 4가 정답</li>
  <li><strong>서브3 이상 페이스 러너</strong> — 알파플라이 시리즈의 강점(30km+ 안정성)이 발휘되는 페이스는 서브3 이하. 그 이상이면 베이퍼플라이 4가 더 가성비 좋음</li>
  <li><strong>발볼 넓은 한국 러너</strong> — 와이드 미드풋이라도 알파플라이 시리즈의 토박스는 통상 narrow~standard. 발볼 큰 러너는 <a href="/shoes/saucony-endorphin-elite-2">엔돌핀 엘리트 2</a>가 더 안전</li>
  <li><strong>예산 30만원 이하</strong> — 정식 출시가 40만원대 추정. <a href="/shoes/asics-metaspeed-sky-plus">메타스피드 스카이+</a> 또는 <a href="/shoes/adidas-adizero-evo-sl">에보 SL</a>(15만원대)이 합리적</li>
</ul>

<h2>요약 — 가을 PB 시즌 액션 플랜</h2>

<ol>
  <li><strong>지금 (5월):</strong> 봄 대회용은 <a href="/shoes/nike-vaporfly-4">베이퍼플라이 4</a> 또는 <a href="/shoes/adidas-adios-pro-4">아디오스 프로 4</a>로 진행</li>
  <li><strong>여름 (6~8월):</strong> 가을 PB 도전을 위한 베이스 + 인터벌 빌드업. 신발은 <a href="/shoes/asics-superblast-2">슈퍼블라스트 2</a> 같은 슈퍼 트레이너로 훈련</li>
  <li><strong>가을 초 (9~10월):</strong> 알파플라이 4 한국 출시 공지 모니터링 — 나이키 SNKRS 앱 + 나이키 한국 공식 채널</li>
  <li><strong>가을 마라톤 (10월 중순~11월):</strong> 알파플라이 4 또는 기존 슈퍼슈즈 중 본인 페이스·발에 맞는 모델로 결정</li>
</ol>

<div class="callout success">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">카본화 입문이 막막하다면</p>
    <p>카본 플레이트 슈퍼슈즈는 부상 위험과 비용이 모두 큰 카테고리입니다. 본인 발볼·체중·페이스에 맞는 후보를 좁히고 싶다면 <a href="/recommend">맞춤 러닝화 추천</a>을 활용하세요. 한국 카본화 전반 비교는 <a href="/blog/carbon-plate-shoes-comparison-2025">카본 플레이트 러닝화 완벽 비교</a>, 발볼 넓은 러너는 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국인을 위한 러닝화 추천 TOP 10</a>도 참고.</p>
  </div>
</div>

<p><small>출처: Sneaker News / Sole Retriever / Gear Patrol / Marathon Handbook / Sundried / World Marathoner / 작성일 2026년 5월 12일 기준 / 무게·스택·가격·출시일 등 미공개 항목은 나이키 공식 발표 시 본 글 업데이트 예정.</small></p>
`,
  },
  {
    id: '2030-seoul-marathon-100th-dongma-chip',
    slug: '2030-seoul-marathon-100th-dongma-chip',
    title: '2030 서울마라톤 100주년 동마칩 안내 | "ROAD TO 100TH" 4년 여정 시작',
    description: '동마클럽이 2026년 5월 8일 "2030 서울마라톤 100주년" 공식 카운트다운을 발표했습니다. 1931년 첫 대회 이후 한국에서 가장 오래된 도로 마라톤이 100주년을 맞이하기까지 4년. 새로 도입되는 "동마칩(DONGMA CHIP)" 프로그램과 ROAD TO 100TH 프로젝트의 의미, 한국 러너가 지금부터 챙겨야 할 것까지.',
    thumbnail: '/images/blog/2030-seoul-marathon-100th-dongma-chip.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-12',
    category: 'news' as const,
    readingTime: 5,
    tags: ['서울마라톤', '동아마라톤', '100주년', '동마칩', 'ROAD TO 100TH', '동마클럽', '2030 서울마라톤'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>동마클럽이 2026년 5월 8일 <strong>"2030 서울마라톤 100주년" 공식 카운트다운</strong>을 발표 — D-1,400일대</li>
    <li>4년 여정 프로젝트명 <strong>ROAD TO 100TH</strong>, 새로 도입되는 <strong>"DONGMA CHIP" 프로그램</strong>(상세는 추후 공개) 첫 안내</li>
    <li>한국 러너 액션: <strong>동마클럽 공지채널</strong>(공식 발표 실시간 알람) 등록 + 동마클럽 ID 활성 유지 — 100주년 관련 우선접수·이벤트 기준</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">📅</span>
  <div class="callout-body">
    <p class="callout-title">5월 8일 공식 발표 — 정보 단편 정리</p>
    <p>동마클럽 공식 인스타그램(<a href="https://www.instagram.com/dongmaclub/" target="_blank" rel="noopener">@dongmaclub</a>)이 "2030년, 100주년 서울마라톤 DONGMA CHIP 안내" 카드뉴스를 게시했습니다. <strong>"동마칩 상세 내용은 피드를 통해 추후 공개"</strong>로 명시되어 있어 본 글은 발표 직후 시점의 확정 정보만 정리합니다. 세부 혜택·획득 조건은 동마클럽 후속 공지 시 업데이트 예정.</p>
  </div>
</div>

<h2>지금 확정된 사실 4가지</h2>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>100주년 대회 시점</strong></td><td>2030년 서울마라톤 (동마클럽 공식 발표)</td></tr>
    <tr><td><strong>역사</strong></td><td>1931년 첫 대회 이후 한국 최고(最古) 도로 마라톤 시리즈 — "Since 1931" 동마클럽 공식 표기</td></tr>
    <tr><td><strong>프로젝트명</strong></td><td><strong>ROAD TO 100TH SEOUL MARATHON</strong></td></tr>
    <tr><td><strong>새 프로그램</strong></td><td><strong>DONGMA CHIP (동마칩)</strong> 도입 발표 — 상세 미공개</td></tr>
  </tbody>
</table>

<h2>"ROAD TO 100TH"가 한국 러너에게 의미하는 것</h2>

<p>한국에서 100년을 넘긴 스포츠 이벤트는 거의 없습니다. 서울마라톤은 1931년 동아일보가 창설한 마라톤 대회로, 일제강점기·해방·전쟁·올림픽을 통과해 2030년 100주년을 맞게 됩니다. 같은 시리즈를 운영하는 동마클럽이 4년 전부터 "100주년 카운트다운"을 공식화한 건, 이 마일스톤이 단순한 회차 숫자가 아니라 <strong>한국 러닝씬 전체의 정체성 이벤트</strong>로 만들겠다는 신호로 읽힙니다.</p>

<p>관련 정황 3가지:</p>

<ul>
  <li><strong>동마클럽 공지채널 신설</strong> — 5월 초 동마클럽이 "공지채널"을 별도 오픈하면서 "서울마라톤 100주년 관련 소식"을 핵심 알림 카테고리로 분류. 1년 1~2회의 특집 발표가 아닌 <strong>4년 연속 시즌제 콘텐츠</strong>로 운영될 가능성</li>
  <li><strong>동마칩(DONGMA CHIP) 도입</strong> — "칩"이라는 표현은 통상 ① 누적 마일리지·완주 기록을 저장하는 멤버십 포인트, ② 100주년 한정 굿즈·메달 시스템, ③ 우선접수 자격 부여 시스템 등으로 활용됩니다. 동마클럽이 어느 방향을 갈지는 후속 공지에서 확인 필요</li>
  <li><strong>동마 시리즈 통합 운영 강화</strong> — 동마클럽은 이미 서울마라톤·서울레이스·공주백제·경주국제 4개 대회를 통합 운영 중이며, <a href="/blog/2026-dongma-halfyear-marathon-schedule">2026 하반기 동마 시리즈 일정</a> 가이드처럼 이 4개 대회 간 연계가 갈수록 강해지는 추세. 동마칩이 시리즈 통합 보상 시스템일 가능성</li>
</ul>

<h2>한국 러너가 지금부터 챙겨야 할 3가지</h2>

<h3>① 동마클럽 공지채널 등록</h3>

<p>동마클럽 인스타그램 프로필 → 링크트리 하단 "공지채널"에서 가입. 동마칩 상세 발표·100주년 관련 이벤트·우선접수 변경 사항이 가장 빠르게 통보되는 공식 채널입니다. 5월 초 오픈된 신규 시스템이라 가입자 수가 적을 때 등록해두는 게 노이즈 적음.</p>

<h3>② 동마클럽 ID 활성 유지</h3>

<p>이미 동마 시리즈 대회에 참가하면서 동마클럽 ID를 발급받은 러너라면, ID 정보(이메일·전화번호·기록 제출 이력)가 최신 상태인지 확인. 100주년 관련 우선접수·동마칩 적립 등 모든 시스템이 동마클럽 ID 기반으로 운영될 가능성 큼.</p>

<h3>③ 2027~2029 시즌 동마 시리즈 참가 기록 누적</h3>

<p>4년 카운트다운이라는 건 <strong>2027·2028·2029 시즌 참가 이력이 2030 100주년 대회의 자격 요건이 될 수 있다</strong>는 신호로 읽혀집니다. 매년 동마 시리즈 4개 대회 중 최소 1개 이상 완주 또는 동마클럽 멤버십 유지가 100주년 우선접수 트랙을 만드는 기준이 될 가능성. 확정은 아니지만 2027 서울마라톤(이미 풀코스 추첨 종료)부터 차근차근 기록을 남기는 게 안전합니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">"100주년" 표기에 대한 보충</p>
    <p>동마클럽 공식 발표는 "2030년 = 100주년"으로 표기합니다. 1931년 1회 대회 이후 일제강점기·전쟁기 중단 기간을 어떻게 계산하느냐에 따라 회차와 햇수가 일반적으로 일치하지 않습니다. 본 글은 동마클럽의 공식 표기를 그대로 따릅니다. 정확한 회차 정보는 2030년 대회 운영 안내 시점에 공식 확정 예정.</p>
  </div>
</div>

<h2>이미 정해진 2027~2029 동마 시리즈 일정</h2>

<table>
  <thead>
    <tr><th>시즌</th><th>대회</th><th>비고</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>2026 가을</strong></td><td><a href="/blog/2026-gongju-baekje-marathon">공주백제마라톤</a> 9/20 · <a href="/blog/2026-seoul-race">서울레이스</a> 10/11 · <a href="/blog/2026-gyeongju-international-marathon">경주국제마라톤</a> 10/17</td><td>D-130~D-159</td></tr>
    <tr><td><strong>2027 봄</strong></td><td><a href="/blog/2027-seoul-marathon-registration-schedule">2027 서울마라톤</a> 3/21</td><td>풀코스 추첨 5월 마감 (D-313)</td></tr>
    <tr><td><strong>2027~2029</strong></td><td>동마 시리즈 4개 대회 연간 운영 예상</td><td>100주년 카운트다운 시즌</td></tr>
    <tr><td><strong>2030</strong></td><td><strong>제100주년 서울마라톤</strong></td><td>ROAD TO 100TH 최종 도착점</td></tr>
  </tbody>
</table>

<h2>요약 — 100주년 4년 전 시점에서 해야 할 것</h2>

<ol>
  <li><strong>오늘:</strong> 동마클럽 공지채널 등록 → 동마칩 상세 발표 알림 수신</li>
  <li><strong>이번 가을 시즌(9~10월):</strong> 동마 시리즈 중 1개 이상 참가 — 공주백제·서울레이스·경주국제 중 본인 일정과 페이스에 맞는 1개</li>
  <li><strong>2027 봄:</strong> 2027 서울마라톤 대회일(3/21) 결과 관리 — 풀 또는 10K 완주 기록을 동마클럽 ID에 누적</li>
  <li><strong>지속:</strong> 동마칩 상세 공개 시 즉시 본 글 업데이트 + 후속 가이드 발행</li>
</ol>

<div class="callout success">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">가을 첫 동마 대회로 시작하기</p>
    <p>2026 하반기 동마 시리즈 3개 대회의 접수 일정·코스·참가비를 한 번에 보려면 <a href="/blog/2026-dongma-halfyear-marathon-schedule">2026 하반기 동마 대회 접수 일정 총정리</a>를, 2027 서울마라톤 우선접수 가이드는 <a href="/blog/2027-seoul-marathon-priority-d10">2027 서울마라톤 우선접수 D-10</a>을 참고하세요.</p>
  </div>
</div>

<p><small>출처: @dongmaclub 인스타그램 공식 발표(2026-05-08) / 동마클럽 공지채널 / 작성일 2026년 5월 12일 기준 / 동마칩 상세 내용은 동마클럽 후속 공지 시 본 글 업데이트 예정.</small></p>
`,
  },
  {
    id: '2026-pohang-iron-run',
    slug: '2026-pohang-iron-run',
    title: '2026 포항 아이언런 D-19 | 7/4 영일대 — 3.8·7.87·15.38km 철의 도시 컨셉, 5/31 마감',
    description: '포스코노동조합이 주최하는 2026 포항 아이언런(IRON RUN)이 7월 4일(토) 영일대해수욕장 장미광장에서 열립니다. 거리 의미가 독특 — 3.8km(포스코 노조 38주년), 7.87km(철의 비중 7.87g/㎤), 15.38km(철의 녹는점 1,538℃). 정원 5,000명, 5월 31일까지 접수.',
    thumbnail: '/images/blog/2026-pohang-iron-run.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-12',
    category: 'news' as const,
    readingTime: 6,
    tags: ['포항 아이언런', 'IRON RUN', '포항 마라톤', '영일대', '포스코', '여름 러닝 대회', '대회 일정'],
    event: {
      name: '2026 포항 아이언런 (IRON RUN)',
      startDate: '2026-07-04T08:00:00+09:00',
      location: {
        name: '영일대해수욕장 장미광장',
        address: '경상북도 포항시 북구 영일대해수욕장 장미광장',
      },
      organizer: '포스코노동조합',
      url: 'https://ironrun.kr',
      offers: [
        { name: '1코스 3.8km (포스코 노조 38주년)', priceKrw: 25000, availabilityEnds: '2026-05-31', url: 'https://ironrun.kr' },
        { name: '2코스 7.87km (철의 비중)', priceKrw: 35000, availabilityEnds: '2026-05-31', url: 'https://ironrun.kr' },
        { name: '3코스 15.38km (철의 녹는점)', priceKrw: 40000, availabilityEnds: '2026-05-31', url: 'https://ironrun.kr' },
      ],
    },
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>2026 포항 아이언런 — <strong>2026년 7월 4일(토) 영일대해수욕장 장미광장 출발</strong>. 정원 5,000명, 4/1~5/31 선착순 접수</li>
    <li>거리 셋 모두 "철의 도시" 컨셉 — <strong>3.8km(포스코 노조 38주년) / 7.87km(철의 비중 7.87g/㎤) / 15.38km(철의 녹는점 1,538℃ ÷ 100)</strong></li>
    <li>참가비 25K/35K/40K, 메달+티셔츠+배번+기록증+간식. 7월 초 여름 포항 바닷가 새벽 출발(08:00~08:20)</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">⏰</span>
  <div class="callout-body">
    <p class="callout-title">접수 D-19 — 5월 31일(일) 마감</p>
    <p>4월 1일부터 5천 명 선착순. 5월 둘째 주 시점에는 일부 종목 자리가 남아 있지만, 작년 기준 <strong>15.38km 3코스가 가장 먼저 마감</strong>됐습니다. 단체 신청(2인 이상)도 가능하니 크루 단위라면 5월 안에 결정하세요.</p>
  </div>
</div>

<h2>왜 이번 대회가 흥미로운가</h2>

<p>국내 마라톤 대회 중 거리에 산업·과학적 의미를 부여한 사례는 손에 꼽힙니다. 포항 아이언런의 세 거리는 단순한 라운드 넘버가 아니라 <strong>"철의 도시 포항"이라는 정체성을 거리 자체로 표현</strong>한 케이스입니다.</p>

<table>
  <thead>
    <tr><th>코스</th><th>거리</th><th>의미</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1코스</strong></td>
      <td>3.8km</td>
      <td><strong>포스코노동조합 창립 38주년</strong> — 주최 단체의 역사를 거리로</td>
    </tr>
    <tr>
      <td><strong>2코스</strong></td>
      <td>7.87km</td>
      <td><strong>철의 비중 7.87 g/㎤</strong> — 물 1g/㎤ 대비 7.87배 무거운 철의 밀도</td>
    </tr>
    <tr>
      <td><strong>3코스</strong></td>
      <td>15.38km</td>
      <td><strong>철의 녹는점 1,538℃</strong> ÷ 100 — 액상 철이 시작되는 온도</td>
    </tr>
  </tbody>
</table>

<p>러너 입장에서 의미가 큰 건 <strong>15.38km</strong>입니다. 국내 일반 마라톤이 5K·10K·하프(21.1km)·풀(42.2km)에 거리가 고정돼 있는데, <strong>10K~하프 사이의 중장거리 옵션</strong>이 거의 없습니다. 15.38km는 하프 도전을 준비하는 러너의 훈련 거리로도 딱 맞고, 10K를 졸업한 러너가 다음 단계로 시도하기에 부담이 적은 거리입니다.</p>

<h2>대회 정보 한눈에</h2>

<div class="stat-grid">
  <div class="stat-card accent">
    <span class="stat-label">대회일</span>
    <span class="stat-value">7/4 (토)</span>
    <span class="stat-sub">08:00 첫 출발</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">접수 마감</span>
    <span class="stat-value">5/31 (일)</span>
    <span class="stat-sub">선착순 5,000명</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">장소</span>
    <span class="stat-value">영일대</span>
    <span class="stat-sub">장미광장</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">주최</span>
    <span class="stat-value">포스코</span>
    <span class="stat-sub">노동조합</span>
  </div>
</div>

<h2>종목별 상세</h2>

<table>
  <thead>
    <tr><th>코스</th><th>거리</th><th>참가비</th><th>정원</th><th>출발</th><th>제한 시간</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>3코스</strong></td><td>15.38km</td><td>40,000원</td><td>2,500명</td><td>08:00</td><td>150분</td></tr>
    <tr><td><strong>2코스</strong></td><td>7.87km</td><td>35,000원</td><td>1,500명</td><td>08:10</td><td>100분</td></tr>
    <tr><td><strong>1코스</strong></td><td>3.8km</td><td>25,000원</td><td>1,000명</td><td>08:20</td><td>60분</td></tr>
  </tbody>
</table>

<h2>코스·날씨 — 7월 초 포항 바닷가</h2>

<p>출발·도착 모두 영일대해수욕장 장미광장. 코스는 영일대 해변로 일대를 도는 평지 위주로 알려져 있고, 큰 오르막은 없습니다. 7월 초 포항 평균:</p>

<ul>
  <li><strong>오전 8시 기온:</strong> 평균 22~25℃, 습도 75~85%</li>
  <li><strong>일출:</strong> 약 5:15 — 출발 시간에는 이미 해가 떠 있어 자외선 차단 필수</li>
  <li><strong>바람:</strong> 해변 코스 특성상 바다 쪽 풍속이 변수. 평소 3~5m/s 수준이라 큰 부담은 없음</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">☀️</span>
  <div class="callout-body">
    <p class="callout-title">여름 대회 — 페이스 -20초 / km 보수적으로</p>
    <p>봄가을 대회 기준 자기 페이스에서 km당 15~20초 늦추는 것이 안전합니다. 15.38km 코스라면 평소 하프 페이스보다 1~2분 정도 늦은 페이스로 잡고, 1km마다 물·전해질 보충 권장. 출발 직전 햇볕 노출 최소화(모자·선글라스·자외선 차단제) 필수.</p>
  </div>
</div>

<h2>한국 러너 관점 — 어느 코스를 고를까</h2>

<table>
  <thead>
    <tr><th>이런 러너라면</th><th>추천 코스</th><th>이유</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>러닝 입문 1년 차 / 5K~10K 완주 경험</strong></td>
      <td>1코스 3.8km</td>
      <td>여름 첫 대회로 부담 최소. 완주 메달 받는 경험에 집중</td>
    </tr>
    <tr>
      <td><strong>10K 완주, 하프 도전 전</strong></td>
      <td>2코스 7.87km</td>
      <td>거리 적응 + 여름 페이스 컨트롤 훈련</td>
    </tr>
    <tr>
      <td><strong>하프 완주 경험 있음, 가을 마라톤 준비 중</strong></td>
      <td>3코스 15.38km</td>
      <td>장거리 페이스 유지 + 여름 더위 적응 훈련. 가을 풀 시즌 빌드업 시점에 딱</td>
    </tr>
  </tbody>
</table>

<h2>신발 선택 — 여름 평지 코스 기준</h2>

<p>7월 초 28℃ 가까운 더위 + 평지 해변 코스라는 조건에 맞는 신발 후보:</p>

<ul>
  <li><strong>1코스 3.8km / 2코스 7.87km — 경량 데일리:</strong> <a href="/shoes/adidas-adizero-evo-sl">아디다스 아디제로 에보 SL</a>(223g)·<a href="/shoes/nike-pegasus-plus">나이키 페가수스 플러스</a>·<a href="/shoes/new-balance-rebel-v5">NB 레벨 v5</a></li>
  <li><strong>3코스 15.38km / PB 도전 — 슈퍼 트레이너 또는 카본화:</strong> <a href="/shoes/adidas-adios-pro-4">아디오스 프로 4</a>·<a href="/shoes/asics-magic-speed-4">매직 스피드 4</a>·<a href="/shoes/nike-vaporfly-4">베이퍼플라이 4</a></li>
  <li><strong>3코스 15.38km / 안전 완주 — 슈퍼 트레이너 또는 쿠션화:</strong> <a href="/shoes/new-balance-1080-v15">NB 1080 v15</a>(216g)·<a href="/shoes/asics-superblast-2">슈퍼블라스트 2</a>·<a href="/shoes/asics-gel-nimbus-28">님버스 28</a></li>
</ul>

<p>발볼이 넓으면 와이드 옵션을 우선하고, 여름 대회는 통기성 좋은 메쉬 어퍼가 필수입니다. 본인 발에 맞는 신발이 막막하다면 <a href="/recommend">1분 러닝화 추천</a>으로 후보를 좁혀보세요.</p>

<h2>기념품·접수 방법</h2>

<ul>
  <li><strong>기념품:</strong> 메달, 기념 티셔츠, 배번표, 기록증, 음료·간식</li>
  <li><strong>접수:</strong> 공식 홈페이지 <a href="https://ironrun.kr" target="_blank" rel="noopener">ironrun.kr</a></li>
  <li><strong>접수 방식:</strong> 개인 신청 / 단체 신청(2인 이상)</li>
  <li><strong>문의:</strong> 070-7718-7577 (평일 11:00~17:00)</li>
</ul>

<h2>요약 — D-19 액션 플랜</h2>

<ol>
  <li><strong>이번 주:</strong> 본인 페이스·하프 도전 시점·여름 더위 적응 수준 고려해서 코스 결정</li>
  <li><strong>5월 안:</strong> ironrun.kr에서 접수 — 15.38km 3코스 우선 마감 우려</li>
  <li><strong>6월:</strong> 여름 페이스 훈련 시작 — 평소 페이스에서 20초 늦춰 30~60분 베이스런 주 3회</li>
  <li><strong>대회 1주 전:</strong> 포항 1박 또는 새벽 출발 교통편 확정, 배번·물품 보관 일정 체크</li>
</ol>

<div class="callout success">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">여름 대회와 가을 마라톤 빌드업</p>
    <p>7월 포항 아이언런이 7~9월 여름 훈련의 좋은 중간 점검 대회가 됩니다. 가을 풀코스 도전이 목표라면 <a href="/blog/2026-chuncheon-marathon-registration-guide">2026 춘천마라톤 접수 가이드</a>, 동마 시리즈와 묶고 싶다면 <a href="/blog/2026-dongma-halfyear-marathon-schedule">2026 하반기 동마 대회 일정 총정리</a>도 참고.</p>
  </div>
</div>

<p><small>출처: ironrun.kr 공식 / @runners_now 인스타그램 / runningwikii / 작성일 2026년 5월 12일 기준 / 정원·참가비·코스는 주최측 공지에 따라 변동될 수 있습니다.</small></p>
`,
  },
  {
    id: '2026-asics-kayano-33-launch',
    slug: '2026-asics-kayano-33-launch',
    title: 'ASICS GEL-KAYANO 33 D-21 | 6/1 출시 — 4D 가이던스 버린 FLUIDSUPPORT, 32와 무엇이 달라졌나',
    description: '아식스 안정화 플래그십 카야노 33이 2026년 6월 1일 글로벌 동시 출시됩니다. 글로벌 $170 / 한국 추정 199,000원대. 핵심 변화는 13년간 유지된 4D Guidance System 폐지 + FLUIDSUPPORT 신기술 + 카야노 시리즈 최초 FF BLAST MAX 듀얼 폼. 32와 비교 + 한국 러너가 33을 사야 하나 32를 사야 하나 답까지.',
    thumbnail: '/images/blog/2026-asics-kayano-33-launch.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-11',
    category: 'news' as const,
    readingTime: 8,
    tags: ['아식스', 'Asics', 'GEL-KAYANO 33', '카야노', '안정화', 'FLUIDSUPPORT', 'FF BLAST MAX', '러닝화 발매'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>ASICS GEL-KAYANO 33 — <strong>2026년 6월 1일 글로벌 동시 출시</strong>. 글로벌 $170, 한국 추정 199,000원~209,000원</li>
    <li>13년간 유지된 <strong>4D Guidance System 폐지 → FLUIDSUPPORT 신기술</strong>로 안정성 메커니즘 전환. 카야노 시리즈 최초 <strong>FF BLAST MAX(탑) + FF BLAST PLUS(하단) 듀얼 폼</strong></li>
    <li>스택 40mm·드롭 8mm·무게 298g — 32와 거의 동일한 외형이지만 <strong>착화감은 완전히 다른 방향</strong>으로 진화. 32 재고 세일이 33 발매 직후 시작될 것</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">📅</span>
  <div class="callout-body">
    <p class="callout-title">발매 D-21 — 핵심 셋업</p>
    <p>아디다스 코리아 공식 발표 기준 33은 <strong>6월 1일 ASICS 공식 사이트(asics.co.kr) + 직영 매장 + 주요 멀티숍 동시 출시</strong> 예정. 사이즈 빠른 매진 우려는 적지만 <strong>한국 인기 컬러(블랙/네이비/화이트)</strong>는 발매 첫 주가 안전합니다.</p>
  </div>
</div>

<h2>왜 이번 33이 중요한가</h2>

<p>카야노 시리즈는 1993년 1세대 출시 이후 33세대까지 이어진 ASICS의 <strong>안정화 플래그십</strong>입니다. 한국 러너 사이에서도 "평발이면 카야노", "발목 안쪽으로 무너지면 카야노"가 거의 공식처럼 굳어진 모델이죠. <a href="/blog/2026-heavy-runner-running-shoes">과체중 러너 러닝화 TOP 10</a>에서도 카야노 32를 안정화 1순위로 추천한 이유입니다.</p>

<p>그런데 이번 33은 단순한 마이너 업데이트가 아닙니다. <strong>2013년 카야노 19부터 13년간 유지된 4D Guidance System을 통째로 폐지</strong>하고 새 안정성 시스템(FLUIDSUPPORT)을 도입했습니다. 카야노의 정체성이라 할 미디얼 포스트(안쪽 단단한 폼)·트러스틱(Trusstic) 구조가 사라지는 첫 세대라는 뜻입니다.</p>

<h2>한 눈에 보는 카야노 33</h2>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>공식명</strong></td><td>ASICS GEL-KAYANO 33</td></tr>
    <tr><td><strong>글로벌 출시</strong></td><td>2026년 6월 1일</td></tr>
    <tr><td><strong>글로벌 정가</strong></td><td>$170</td></tr>
    <tr><td><strong>한국 정가 (예상)</strong></td><td>199,000원~209,000원 (32와 동일~+1만원)</td></tr>
    <tr><td><strong>무게</strong></td><td>298g (남성 US 9) / 259g (여성 US 8)</td></tr>
    <tr><td><strong>스택</strong></td><td>힐 40mm / 전족부 32mm</td></tr>
    <tr><td><strong>드롭</strong></td><td>8mm</td></tr>
    <tr><td><strong>안정성 시스템</strong></td><td><strong>FLUIDSUPPORT</strong> (듀얼 폼 + 지오메트리 기반)</td></tr>
    <tr><td><strong>미드솔</strong></td><td>FF BLAST MAX (탑) + FF BLAST PLUS (하단)</td></tr>
    <tr><td><strong>어퍼</strong></td><td>재설계된 엔지니어드 메쉬</td></tr>
    <tr><td><strong>아웃솔</strong></td><td>AHARPLUS 러버</td></tr>
  </tbody>
</table>

<h2>핵심 변화 ① — 4D Guidance System 폐지, FLUIDSUPPORT 도입</h2>

<p>전작 카야노 32까지의 안정성 메커니즘은 <strong>"단단한 폼으로 발 무너짐을 막는다"</strong>는 발상이었습니다. 미디얼 포스트가 안쪽에 박혀 있고, 4D Guidance System이 발이 안쪽으로 회전하는 걸 단계적으로 잡아주는 구조였죠.</p>

<p>33의 FLUIDSUPPORT는 정반대 접근입니다. <strong>"부드러운 폼이 발 모양에 맞춰 변형되며 자연스럽게 잡아준다"</strong>는 발상. 단단한 부품을 박는 게 아니라 폼 자체의 지오메트리(외측 더 두껍게 / 내측 더 단단하게)와 듀얼 레이어 구성으로 안정성을 만듭니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">기존 카야노 팬이 주의할 점</p>
    <p>"카야노 = 든든한 안정감"의 정체성이 바뀌었습니다. 32까지의 그 단단하고 살짝 묵직한 안쪽 지지감을 좋아했다면, 33은 <strong>"더 부드럽고 자연스러운 안정성"</strong>으로 느껴질 수 있습니다. 호불호 갈릴 수 있는 변화입니다.</p>
  </div>
</div>

<h2>핵심 변화 ② — FF BLAST MAX 듀얼 폼</h2>

<p>카야노 시리즈에 처음으로 <strong>FF BLAST MAX</strong>가 들어갑니다. 이 폼은 <a href="/shoes/asics-gel-nimbus-28">Nimbus 28</a>·<a href="/shoes/asics-novablast-5">Novablast 5</a>에서 검증된 ASICS 최상위 슈퍼크리티컬 폼으로, FF BLAST PLUS 대비 <strong>에너지 리턴 ~10%, 경량성 ~15% 향상</strong>됩니다.</p>

<p>33의 미드솔 구조는 듀얼 레이어:</p>
<ul>
  <li><strong>탑 레이어 (발 닿는 쪽):</strong> FF BLAST MAX — 부드러운 착화감 + 높은 반발</li>
  <li><strong>바텀 레이어 (지면 쪽):</strong> FF BLAST PLUS — 안정성 + 내구성</li>
</ul>

<p>지금까지 카야노는 "안정화라 쿠션은 좀 단단했음"이라는 평이 많았는데, 33부터는 <strong>Nimbus급 쿠션 + 안정성</strong>을 동시에 노립니다.</p>

<h2>32와 33 직접 비교</h2>

<table>
  <thead>
    <tr><th>항목</th><th>카야노 32</th><th>카야노 33</th><th>변화</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>무게</strong></td><td>300g</td><td>298g</td><td>거의 동일</td></tr>
    <tr><td><strong>힐 스택</strong></td><td>40mm</td><td>40mm</td><td>동일</td></tr>
    <tr><td><strong>드롭</strong></td><td>10mm</td><td>8mm</td><td><strong>-2mm (더 평탄)</strong></td></tr>
    <tr><td><strong>안정성 시스템</strong></td><td>4D Guidance System</td><td><strong>FLUIDSUPPORT</strong></td><td>구조 완전 교체</td></tr>
    <tr><td><strong>미드솔</strong></td><td>FF Blast Plus Eco (싱글)</td><td><strong>FF BLAST MAX + PLUS (듀얼)</strong></td><td>최상위 폼 채택</td></tr>
    <tr><td><strong>한국 정가</strong></td><td>199,000원</td><td>199,000~209,000원 예상</td><td>유지~소폭 상승</td></tr>
    <tr><td><strong>와이드 옵션</strong></td><td>2E (정식 출시)</td><td>2E 예상 (미발표)</td><td>유지 예상</td></tr>
  </tbody>
</table>

<h2>한국 러너 관점 — 33을 사야 하나, 32를 사야 하나</h2>

<h3>✅ 33을 사야 하는 사람</h3>

<ul>
  <li><strong>카야노 32까지 "안정성은 좋은데 쿠션이 좀 단단했다"는 사람</strong> — FF BLAST MAX 도입으로 정확히 그 불만이 해소됩니다</li>
  <li><strong>처음 안정화를 사는 평발·과내전 러너</strong> — 어차피 처음이면 32의 단단한 느낌도 어색할 수 있으니, 더 부드러운 33으로 시작하는 게 적응 빠름</li>
  <li><strong>아킬레스건염·종아리 부하 줄이고 싶은 러너</strong> — 드롭 10mm → 8mm로 낮아져 발목·종아리 부하 약간 줄어듬</li>
  <li><strong>주간 50km+ 장거리 러너</strong> — 듀얼 폼 + 새 메쉬 어퍼로 장시간 착용 편의성 향상 기대</li>
</ul>

<h3>❌ 32 재고 세일을 노려야 하는 사람</h3>

<ul>
  <li><strong>이미 카야노 31·32를 좋아하던 러너</strong> — 33의 FLUIDSUPPORT가 어떻게 느껴질지 검증 안 됨. 익숙한 32를 세일가에 한 켤레 더 확보가 안전</li>
  <li><strong>예산 16만원 이하</strong> — 33 발매 직후 32 재고가 30~40% 할인 들어갈 가능성 큼 (199,000원 → 13~14만원대)</li>
  <li><strong>"카야노 = 단단한 지지감" 정체성 좋아하는 러너</strong> — 33이 더 부드러워진 게 본인에게 맞을지 매장 시착 전엔 알 수 없음</li>
</ul>

<div class="callout info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">진짜 똑똑한 선택 — 7월 매장 시착 후 결정</p>
    <p>33이 6/1 출시되면 ASICS 직영(강남·잠실)에서 시착 가능. <strong>7월 중순쯤이면 32 재고 세일도 본격화</strong>되므로, 33을 한 번 신어보고 마음에 들면 33, 32의 단단함이 더 좋으면 32 세일가 구매가 합리적입니다. 굳이 D-21에 미리 결정할 필요 없음.</p>
  </div>
</div>

<h2>다른 안정화와 비교</h2>

<table>
  <thead>
    <tr><th>모델</th><th>한국가</th><th>무게</th><th>특징</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="/shoes/asics-gel-kayano-33"><strong>Kayano 33</strong></a></td>
      <td>209,000원</td>
      <td>298g</td>
      <td>FLUIDSUPPORT + 듀얼 폼, 부드러운 안정성</td>
    </tr>
    <tr>
      <td><a href="/shoes/asics-gel-kayano-32">Kayano 32</a></td>
      <td>199,000원</td>
      <td>300g</td>
      <td>4D Guidance, 단단한 안정성, 13년 검증</td>
    </tr>
    <tr>
      <td><a href="/shoes/brooks-glycerin-gts-22">Brooks Glycerin GTS 22</a></td>
      <td>209,000원</td>
      <td>293g</td>
      <td>GuideRails 측면 가이드, 자연스러운 안정성</td>
    </tr>
    <tr>
      <td><a href="/shoes/new-balance-860-v15">NB 860 v15</a></td>
      <td>189,000원</td>
      <td>330g</td>
      <td>Stability Plane, 가성비 + 4E 와이드</td>
    </tr>
    <tr>
      <td><a href="/shoes/saucony-tempus-2">Saucony Tempus 2</a></td>
      <td>219,000원</td>
      <td>278g</td>
      <td>PWRRUN PB 슈퍼크리티컬 + 외측 가이드 프레임</td>
    </tr>
  </tbody>
</table>

<h2>요약 — D-21 액션 플랜</h2>

<ol>
  <li><strong>지금 (5/11~):</strong> 32에 만족하면 매장에서 사이즈 미리 확인, 33 시착할 때 비교 위해</li>
  <li><strong>6월 1일 (출시일):</strong> 강남·잠실 ASICS 직영점에서 33 시착 가능. 1~2km 매장 내 트레드밀 시승 권장</li>
  <li><strong>7월 중순:</strong> 32 재고 세일 본격화 예상. 33에 확신 없으면 32 세일가 잡기</li>
  <li><strong>가을 마라톤 시즌 전(8~9월):</strong> 본인 메인 러닝화 결정 — 33 or 32 or 다른 안정화</li>
</ol>

<div class="callout success">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">발볼·체중·페이스로 후보 좁히기</p>
    <p>본인 발볼·평발 여부·체중·러닝 페이스에 맞는 안정화 후보를 1분 진단으로 좁히고 싶다면 <a href="/recommend">맞춤 러닝화 추천</a>을 활용하세요. 발볼 넓은 한국 러너는 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국인을 위한 러닝화 추천 TOP 10</a>, 과체중 + 안정성 둘 다 필요하면 <a href="/blog/2026-heavy-runner-running-shoes">과체중 러너 러닝화 TOP 10</a>도 참고.</p>
  </div>
</div>

<p><small>출처: ASICS US 공식 / WWD Footwear News / Canadian Running Magazine / T3 / Gear Patrol / KicksOnFire / Sundried Reviews / 작성일 2026년 5월 11일 기준 / 한국 정가·출시 일정은 ASICS 코리아 공식 발표에 따라 변동될 수 있습니다.</small></p>
`,
  },
  {
    id: '2026-nb-1080v15-tryout-popup-d3',
    slug: '2026-nb-1080v15-tryout-popup-d3',
    title: 'NB 1080 v15 무료 트라이얼 POP-UP D-3 | 5/14 마감 — 경복궁·부산 OYM에서 신상 쿠션화 직접 신어보기',
    description: '뉴발란스 1080 v15·Rebel v5 신상 컬러를 매장에서 무료 시착할 수 있는 ON YOUR MARK 팝업이 5월 14일(수)에 종료됩니다. 경복궁·부산 두 매장에서 진행, 트라이얼 시 무료 커피 쿠폰. NB의 플래그십 쿠션화(216g, 인피니온 폼, 2E·4E 와이드)를 사기 전에 신어볼 수 있는 거의 유일한 기회.',
    thumbnail: '/images/blog/2026-nb-1080v15-tryout-popup-d3.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-11',
    category: 'news' as const,
    readingTime: 5,
    tags: ['뉴발란스', 'New Balance', '1080 v15', 'Rebel v5', '온유어마크', 'OYM', '러닝화 시착', 'POP-UP'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>NB <strong>1080 v15 + Rebel v5 무료 트라이얼 팝업</strong>이 5월 14일(수)에 종료 — D-3</li>
    <li>장소: <strong>ON YOUR MARK 경복궁점 / 부산점</strong> 2곳. 트라이얼 시 무료 커피 쿠폰 제공</li>
    <li>1080 v15(216g·인피니온 폼·2E·4E 와이드)와 Rebel v5(220g·FuelCell)를 사기 전 매장 시착 가능한 거의 유일한 기회</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">⏰</span>
  <div class="callout-body">
    <p class="callout-title">D-3 — 5월 14일(수) 영업 종료까지</p>
    <p>온유어마크 경복궁점은 <strong>5월 1일~14일</strong>, 부산점은 <strong>5월 2일~14일</strong>까지 진행. 평일 마지막 날이라 퇴근 후 방문이 어려울 수 있으니 토요일(5/10) 또는 이번 주 중반에 가는 게 안전합니다.</p>
  </div>
</div>

<h2>이번 팝업이 왜 중요한가</h2>

<p>NB 1080 v15는 2026년 발매된 뉴발란스 플래그십 쿠션화입니다. 전작 v14 대비 <strong>69g 경량화(285→216g)</strong> + 인피니온(질소 주입 슈퍼크리티컬 폼) 채택으로 거의 다른 신발이 됐죠. <a href="/shoes/new-balance-1080-v15">1080 v15</a>를 한국 러너에게 매력적으로 만드는 핵심 3가지:</p>

<ul>
  <li><strong>216g 경량 쿠션화</strong> — 맥스 쿠션(40mm 스택) 신발이 200g대로 떨어진 거의 유일한 모델</li>
  <li><strong>2E·4E 와이드 옵션 정식 출시</strong> — 발볼 넓은 한국 러너에게 거의 유일한 맥스 쿠션 선택지</li>
  <li><strong>인피니온 폼</strong> — Fresh Foam X보다 통기성·반응성·에너지 리턴이 향상된 NB 최신 폼</li>
</ul>

<p>문제는 <strong>"신어보지 않고 209,000원짜리 신발을 사는 건 부담"</strong>이라는 점. 1080 v14의 narrow 토박스를 피했던 러너라도 v15는 폭이 어떻게 바뀌었는지 실제로 신어봐야 알 수 있습니다.</p>

<h2>팝업 정보 정리</h2>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>이벤트명</strong></td><td>New Balance × ON YOUR MARK 1080v15 & Rebel v5 Summer Run POP-UP</td></tr>
    <tr><td><strong>경복궁점 기간</strong></td><td>5월 1일(목) ~ 5월 14일(수)</td></tr>
    <tr><td><strong>부산점 기간</strong></td><td>5월 2일(금) ~ 5월 14일(수)</td></tr>
    <tr><td><strong>혜택 ①</strong></td><td>1080 v15 + Rebel v5 <strong>무료 트라이얼</strong></td></tr>
    <tr><td><strong>혜택 ②</strong></td><td>트라이얼 이용 시 <strong>무료 커피 쿠폰</strong></td></tr>
    <tr><td><strong>주관</strong></td><td>NBRC Seoul · NB Run Hub · ON YOUR MARK</td></tr>
  </tbody>
</table>

<h2>두 신발 중 어느 쪽을 신어봐야 하나</h2>

<h3>① <a href="/shoes/new-balance-1080-v15">1080 v15</a> — 데일리 쿠션화의 정답 후보</h3>

<p><strong>209,000원 · 216g · 힐 스택 40mm · 평점 4.9</strong></p>

<p>맥스 쿠션 카테고리에서 v15의 위치는 분명합니다. <strong>"가장 가볍고 발에 맞는 옵션이 많은 맥스 쿠션"</strong>. <a href="/shoes/hoka-bondi-9">Bondi 9</a>(303g)·<a href="/shoes/asics-gel-nimbus-28">Nimbus 28</a>(281g)보다 70~85g 가볍습니다.</p>

<p>매장에서 확인할 3가지:</p>
<ol>
  <li><strong>토박스 핏</strong> — v14 narrow에서 v15는 standard로 개선. 발볼 보통이면 무난, 넓으면 2E 또는 4E 시착</li>
  <li><strong>힐 컵 핏</strong> — 216g 경량화 과정에서 힐 카운터가 부드러워짐. 뒤꿈치가 헐거우면 사이즈 -0.5 시도</li>
  <li><strong>인피니온 폼 반응</strong> — 매장 내 가볍게 점프하거나 빠르게 걸을 때 Fresh Foam X 대비 반응이 빠른 느낌 체크</li>
</ol>

<h3>② <a href="/shoes/new-balance-rebel-v5">Rebel v5</a> — 가벼운 페이스 트레이너</h3>

<p><strong>189,000원 · 220g · 데일리/템포 · 평점 4.5</strong></p>

<p>Rebel은 1080과 성격이 완전히 다릅니다. 데일리·템포 페이스(5:30/km 이하)에서 빠른 반응을 원하는 러너용 경량 트레이너. <strong>1080이 "푹신함"이라면 Rebel은 "통통 튕김"</strong>. FuelCell 폼 + 카본 플레이트 없는 가벼운 구조라 비-카본화 카테고리에서 빠른 페이스 좋아하는 러너에게 인기.</p>

<p>매장에서는 1080 신은 후 Rebel을 신어 비교하면 차이가 즉시 느껴집니다. <strong>"나는 데일리 페이스 우선" → 1080 / "스피드도 챙기고 싶다" → Rebel</strong>.</p>

<h2>매장 위치·운영 시간</h2>

<table>
  <thead>
    <tr><th>매장</th><th>주소·이동</th><th>운영 시간</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>OYM 경복궁점</strong></td>
      <td>서울 종로구 청운효자동 / 3호선 경복궁역 도보 5분</td>
      <td>평일 11:00~20:00 (변동 가능)</td>
    </tr>
    <tr>
      <td><strong>OYM 부산점</strong></td>
      <td>부산 / @onyourmark_running 인스타그램 DM 확인 권장</td>
      <td>매장 공지 확인</td>
    </tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">시착 전 준비물</p>
    <p>① <strong>러닝 양말</strong> — 평소 신는 양말 두께로 핏 확인 필수, ② <strong>발 측정 기록</strong> — 가능하면 본인 발 길이(mm) + 발볼 너비 미리 측정, ③ <strong>오후 4시 이후 방문</strong> — 하루 중 발이 가장 부어 있는 시간이라 실제 러닝 시 핏과 가깝습니다.</p>
  </div>
</div>

<h2>같이 보면 좋은 NB 소식</h2>

<ul>
  <li><strong>NB Run Hub Yeouido</strong> — 2026년 5월 9일(토) 여의나루 이크루즈에 NB 러닝 성지 팝업 오픈. 러닝 슈즈·의류 무료 대여 + 짐 보관 + 커피·타월 제공</li>
  <li><strong>Grey Days 한정판</strong> — 1080 v15 + Rebel v5 Grey Days 시즌 한정 컬러 출시. 팝업에서 시착·구매 가능 (재고 한정)</li>
</ul>

<h2>요약 — 액션 플랜</h2>

<ol>
  <li><strong>이번 주 중반(5/12~13):</strong> 평일 오후 경복궁/부산 OYM 방문 — 1080 v15·Rebel v5 시착 + 사이즈 결정</li>
  <li><strong>5월 14일(수):</strong> 마지막 날 — 결정 못 했으면 평일 점심 시간 활용</li>
  <li><strong>이후:</strong> 매장 또는 NB 공식 사이트(nbkorea.com)에서 결정한 사이즈·컬러 구매. Grey Days 한정 컬러 노린다면 빠른 결정 필요</li>
</ol>

<p>본인 발에 맞는 쿠션화 후보를 더 좁히고 싶다면 <a href="/recommend">맞춤 러닝화 추천</a>, 발볼 넓은 한국 러너 전용 가이드는 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국인을 위한 러닝화 추천 TOP 10</a>도 함께 참고하세요.</p>

<p><small>출처: @nbrc_seoul / @newbalance_runhub / @onyourmark_running 인스타그램 / 작성일 2026년 5월 11일 기준 / 팝업 일정·혜택은 매장 사정에 따라 변동될 수 있으니 방문 전 인스타그램 확인 권장.</small></p>
`,
  },
  {
    id: '2026-bape-adidas-evo-sl-release',
    slug: '2026-bape-adidas-evo-sl-release',
    title: 'BAPE × 아디다스 에보 SL D-21 | 6월 1일 발매 — 좌우 비대칭 카모, 한국 러너 구매 경로 총정리',
    description: '6월 1일(월) 전 세계 동시 발매되는 BAPE × adidas Adizero Evo SL (KJ5751). 좌우 짝짝이 핑크/베이비블루 + ABC 카모 + Shooting Star 로고가 합쳐진 협업. 글로벌 $200 / 한국가 추정, 베이스 모델 가성비 슈퍼폼(83% 에너지 리턴) 그대로. 한국에서 살 수 있는 경로와 BAPE Store 서울·아디다스 앱 셋업까지.',
    thumbnail: '/images/blog/2026-bape-adidas-evo-sl-release.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-11',
    category: 'news' as const,
    readingTime: 7,
    tags: ['BAPE', '아디다스', '아디제로 에보 SL', '콜라보', '한정판', '러닝화 발매', '슈퍼폼'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>BAPE × 아디다스 아디제로 에보 SL (KJ5751) — <strong>2026년 6월 1일(월) 전 세계 동시 발매</strong></li>
    <li>좌우 비대칭 디자인(좌 베이비 블루 / 우 핑크) + ABC 카모(칼라·라이너·레이스) + 한 쪽 3-스트라이프 / 다른 쪽 Shooting Star</li>
    <li>글로벌 정가 <strong>$200</strong> — 일반 에보 SL($150 / 한국 209,000원) 대비 약 33% 프리미엄. 한국 매장 BAPE 압구정·홍대 + 아디다스 앱 KR 가능성</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">⏰</span>
  <div class="callout-body">
    <p class="callout-title">발매 D-21 — 지금부터 해둬야 할 셋업</p>
    <p>한정판 협업은 발매 당일 결제까지 가는 게 진짜 게임입니다. ① <strong>아디다스 KR 앱</strong> 회원가입 + 본인인증 + 결제 카드 등록, ② <strong>BAPE Store</strong> 압구정·홍대 매장 입고 문의 (전화/인스타 DM), ③ adidas Confirmed 앱 다운로드(글로벌 한정 발매 진행 채널) — 이 3가지는 5월 안에 끝내두세요.</p>
  </div>
</div>

<h2>일단 무슨 신발인가</h2>

<p>이번 협업은 BAPE(A Bathing Ape)와 아디다스의 2026 시즌 4번째 공동 작업입니다. 2월의 BAPE × adidas 풋볼 컬렉티브(World Cup 컬렉션) 이후, 이번엔 <strong>아디다스에서 가장 잘 팔리는 데일리 트레이너</strong>인 <a href="/shoes/adidas-adizero-evo-sl">아디제로 에보 SL</a>을 베이스로 골랐습니다.</p>

<p>왜 에보 SL을 골랐는지 잠깐 짚자면, 이 신발이 2025~2026 글로벌 슈퍼폼 트렌드의 가성비 정답이기 때문입니다. <strong>아디오스 프로 3와 동일한 100% Lightstrike Pro 미드솔</strong>을 데일리 트레이너 가격(15만원)에 풀어 RunRepeat 83% 에너지 리턴 측정으로 화제가 됐죠. 223g 초경량 + 컨티넨탈 러버 아웃솔까지, 단가 대비 성능이 가장 균형 잡힌 모델입니다.</p>

<h2>디자인 — 좌우 짝짝이가 핵심</h2>

<div class="stat-grid">
  <div class="stat-card accent">
    <span class="stat-label">발매일</span>
    <span class="stat-value">6/1 (월)</span>
    <span class="stat-sub">전 세계 동시</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">스타일 코드</span>
    <span class="stat-value">KJ5751</span>
    <span class="stat-sub">남녀 공용</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">글로벌 가격</span>
    <span class="stat-value">$200</span>
    <span class="stat-sub">≒ 한국 28만원대 추정</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">베이스 모델</span>
    <span class="stat-value">에보 SL</span>
    <span class="stat-sub">100% Lightstrike Pro</span>
  </div>
</div>

<p>실물 이미지를 보면 한 번에 알 수 있는 포인트가 5가지입니다.</p>

<ul>
  <li><strong>좌우 비대칭 컬러:</strong> 한쪽은 베이비 블루 + 핑크 토 캡, 반대쪽은 핑크 + 블루 토 캡. 신발 한 켤레가 좌·우가 다른 색입니다. 멀리서 봐도 콜라보임을 알 수 있는 시그니처.</li>
  <li><strong>ABC 카모 패턴:</strong> BAPE 시그니처 ABC(에이프) 카모가 칼라·라이너·레이스에만 적용. 어퍼 본체는 깔끔한 단색으로 유지.</li>
  <li><strong>로고 짝짝이:</strong> 한쪽 사이드는 아디다스 <strong>3-스트라이프</strong>, 다른 쪽 사이드는 BAPE <strong>Shooting Star</strong> 로고. 두 브랜드를 한 켤레에 동등하게 박은 디자인.</li>
  <li><strong>골드 디테일:</strong> 힐 카운터와 텅 라벨에 골드 액센트. 프리미엄 협업 톤을 잡아주는 포인트.</li>
  <li><strong>퍼포먼스는 그대로:</strong> 미드솔(100% Lightstrike Pro), 아웃솔(컨티넨탈 러버), 무게(223g), 스택(힐 36mm / 전족부 28mm) — 베이스 모델과 동일. <strong>러닝화 성능은 손대지 않았다</strong>는 게 중요합니다.</li>
</ul>

<div class="callout info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">왜 좌우 비대칭인가</p>
    <p>BAPE × adidas 2026 시즌의 공통 디자인 언어입니다. 2월 풋볼 컬렉션 운동화도 같은 비대칭 패턴이었어요. 두 브랜드의 정체성을 한쪽씩 나누는 방식인데, 실제로 신었을 때 좌우 색이 다르면 도드라지기 때문에 호불호가 갈립니다. 출근·일상화로 쓸 거면 한 번 더 고민할 디자인입니다.</p>
  </div>
</div>

<h2>한국에서 어떻게 사나 — 채널별 현실성</h2>

<table>
  <thead>
    <tr><th>경로</th><th>현실성</th><th>가격대</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>① BAPE Store 서울(압구정·홍대)</strong></td>
      <td>오프라인 발매 가능성 가장 높음. 줄서기 또는 응모 방식 예상</td>
      <td>한국 정가 28~30만원대 추정</td>
    </tr>
    <tr>
      <td><strong>② 아디다스 KR 앱·웹 (adidas.com/kr)</strong></td>
      <td>2026년 BAPE 협업 풋볼 컬렉션이 한국 앱에서 동시 발매됐던 전례 있음</td>
      <td>한국 정가</td>
    </tr>
    <tr>
      <td><strong>③ adidas Confirmed 앱 (글로벌)</strong></td>
      <td>아디다스 글로벌 한정 발매 공식 채널. 한국 IP에서 응모 가능하나 배송은 별도 확인</td>
      <td>$200 + 배송비·관세</td>
    </tr>
    <tr>
      <td><strong>④ BAPE.com 글로벌</strong></td>
      <td>발매 직후 즉시 매진 패턴. 한국 직배송은 가능하나 관세 별도</td>
      <td>$200 + 관·배송</td>
    </tr>
    <tr>
      <td><strong>⑤ 리셀 (KREAM, StockX)</strong></td>
      <td>발매 직후 프리미엄 30~50% 예상. 사이즈 빠른 매진 우려</td>
      <td>35~45만원 추정</td>
    </tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">한국 정식 발매 여부는 5월 마지막 주에 확정</p>
    <p>현재(D-21 시점) 아디다스 코리아가 한국 발매를 공식 공지하지는 않았습니다. 통상 BAPE 협업은 발매 1~2주 전 인스타그램(@adidaskr / @bape_kr)에서 한국 발매 채널을 발표하는데, 5월 마지막 주 공지를 주시하세요.</p>
  </div>
</div>

<h2>그래서 살 만한가 — 러너 관점 냉정한 평가</h2>

<h3>✅ 사도 되는 사람</h3>

<ul>
  <li><strong>BAPE·스니커헤드 컬렉터</strong> — 운동화 패션 가치 우선. 좌우 비대칭 + 카모 + 골드는 BAPE 협업 중에서도 색감이 강한 편</li>
  <li><strong>러닝 + 데일리 겸용 1켤레로 끝내고 싶은 러너</strong> — 베이스 모델 성능 그대로니까 5~10km 데일리 러닝과 출근까지 한 켤레로 커버 가능</li>
  <li><strong>일반 에보 SL을 어차피 살 예정이었던 러너</strong> — 한국가 추정 28~30만원이면 정가 209,000원 대비 +7~9만원. 한정판 가치 더하면 본전 이상</li>
</ul>

<h3>❌ 안 사도 되는 사람</h3>

<ul>
  <li><strong>순수 퍼포먼스 목적 러너</strong> — 같은 미드솔의 일반 에보 SL이 15만원(세일가)에 살 수 있습니다. 좌우 짝짝이 색감이 거슬리면 본전 못 뽑음</li>
  <li><strong>안정화·과내전 러너</strong> — 에보 SL은 안정성 6/10. 베이스 자체가 중립~빠른 페이스용이라 발 안정성 필요한 러너에게는 부적합. <a href="/shoes/asics-gel-kayano-32">카야노 32</a>나 <a href="/shoes/new-balance-860-v15">860 v15</a>가 정답</li>
  <li><strong>발볼 넓은 한국 러너</strong> — BAPE 협업 버전은 표준 폭만 출시. 와이드 옵션 없음. 일반 에보 SL의 와이드(2E)를 살 거면 그쪽이 더 합리적</li>
</ul>

<h2>2026 아디다스 협업 흐름 정리</h2>

<p>이번 BAPE × 에보 SL은 아디다스의 2026 협업 라인업 중에서도 러닝 성능과 패션이 균형 잡힌 모델입니다. 같은 시즌 다른 발매와 비교하면 위치가 분명해집니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>발매</th><th>한국가</th><th>성격</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>BAPE × 에보 SL</strong></td>
      <td>2026.6.1</td>
      <td>28~30만원 추정</td>
      <td>러닝 + 패션 협업</td>
    </tr>
    <tr>
      <td><a href="/blog/2026-adidas-adios-pro-evo-3-korea-release">아디오스 프로 에보 3</a></td>
      <td>2026.5.4 래플 / 가을 확대</td>
      <td>74만원~</td>
      <td>서브2 슈퍼슈즈, 100km 소모품</td>
    </tr>
    <tr>
      <td><a href="/shoes/adidas-adizero-evo-sl">일반 에보 SL</a></td>
      <td>상시</td>
      <td>209,000원 (세일 15만원대)</td>
      <td>가성비 슈퍼폼 데일리</td>
    </tr>
    <tr>
      <td><a href="/shoes/adidas-adios-pro-4">아디오스 프로 4</a></td>
      <td>상시</td>
      <td>약 32만원</td>
      <td>데일리 가능한 카본화</td>
    </tr>
  </tbody>
</table>

<h2>요약 — D-21 액션 플랜</h2>

<ol>
  <li><strong>지금 (5/11~):</strong> 아디다스 KR 앱 회원가입·본인인증·결제카드 등록 / BAPE 압구정·홍대 매장 입고 문의 (@bape_kr DM)</li>
  <li><strong>5월 마지막 주:</strong> 아디다스 코리아·BAPE 코리아 인스타그램 한국 발매 채널 공지 확인</li>
  <li><strong>발매 전날 (5/31):</strong> adidas Confirmed 앱 알림 설정, 사이즈 미리 결정(에보 SL은 보통 사이즈 그대로 또는 발볼 넓으면 +0.5)</li>
  <li><strong>6월 1일(월) 발매 당일:</strong> 발매 시각(보통 한국 오전 10시 또는 자정) 직전 앱 로그인 유지, 결제 단계까지 한 번에</li>
</ol>

<div class="callout success">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">러닝 우선이라면 일반 에보 SL이 정답</p>
    <p>BAPE 협업이 끌리지 않거나 한정판 게임이 부담스럽다면, 일반 <a href="/shoes/adidas-adizero-evo-sl">아디제로 에보 SL</a>이 같은 성능을 15만원(세일가)에 제공합니다. 와이드 옵션까지 있어 한국 러너에게 더 적합. 발볼 넓은 러너는 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국인을 위한 러닝화 추천 TOP 10</a>도 함께 참고하세요.</p>
  </div>
</div>

<p><small>출처: Sneaker Bar Detroit / Sneaker News / Sole Retriever / WWD Footwear News / Modern Notoriety / Sneaker Freaker / Just Fresh Kicks / 작성일 2026년 5월 11일 기준 / 한국 정가·발매 채널은 아디다스 코리아·BAPE 코리아 공식 공지에 따라 변동될 수 있습니다.</small></p>
`,
  },
  {
    id: '2026-heavy-runner-running-shoes',
    slug: '2026-heavy-runner-running-shoes',
    title: '2026 과체중 러너를 위한 러닝화 추천 TOP 10 | 80kg+ 러너의 무릎·발목을 지키는 쿠션·안정성·내구성 기준',
    description: '체중 80kg 이상 러너는 착지 충격이 체중의 3~5배까지 올라가 일반 러너용 신발로는 부상 위험이 높습니다. 95종 러닝화 DB에서 ① 스택 36mm 이상 충분한 쿠션, ② 안정화 또는 넓은 베이스, ③ 600km 이상 내구성을 갖춘 10종을 가격대별·체형별로 정리했습니다. Bondi 9·Glycerin Max부터 가성비 860 v15까지.',
    thumbnail: '/images/blog/2026-heavy-runner-running-shoes.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-11',
    category: 'guide' as const,
    readingTime: 12,
    tags: ['과체중 러너', '러닝화 추천', '쿠션화', '안정화', '무릎 보호', '발목 보호', '맥스 쿠션', '가이드'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>체중 80kg+ 러너의 착지 충격은 체중의 3~5배(240~400kg) — <strong>일반 러너용 220~260g 경량화는 부상 직행</strong></li>
    <li>선택 기준 3가지: ① <strong>힐 스택 36mm 이상</strong> 쿠션, ② <strong>안정화/넓은 베이스</strong> 또는 가이드레일, ③ <strong>아웃솔 600km+</strong> 내구성</li>
    <li>1순위 추천: <a href="/shoes/hoka-bondi-9">Hoka Bondi 9</a>·<a href="/shoes/brooks-glycerin-max-2">Glycerin Max 2</a>·<a href="/shoes/asics-gel-nimbus-28">Nimbus 28</a> — 가성비는 <a href="/shoes/new-balance-860-v15">NB 860 v15</a></li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">먼저 — 이 글의 "과체중" 정의</p>
    <p>이 글은 의학적 비만이 아니라 <strong>러닝 기준 체중 부담군</strong>을 다룹니다. 남성 80kg+ / 여성 65kg+ 또는 BMI 25 이상이면서 러닝을 시작하거나 주간 30km 이상 뛰는 분이 대상입니다. 본인 체중이 작더라도 무릎 통증·족저근막염 이력이 있다면 같은 기준으로 신발을 골라야 합니다.</p>
  </div>
</div>

<h2>왜 과체중 러너는 신발이 다른 기준이어야 하나</h2>

<p>러닝 중 한 발이 지면에 닿는 순간, <strong>충격력은 체중의 3~5배까지</strong> 올라갑니다. 일반 조깅 페이스(6:00/km)에서도 80kg 러너의 한 걸음 충격은 240~400kg. 이게 1km에 평균 1,400~1,600번 반복됩니다. 같은 거리를 뛰어도 60kg 러너 대비 누적 충격은 33% 이상 큽니다.</p>

<p>이 차이가 신발에서 가장 먼저 드러나는 게 <strong>미드솔 압축률</strong>입니다. 일반 220g 경량 트레이너의 미드솔은 60kg 러너에게는 적절한 반발을 주지만, 80kg+ 러너에게는 <strong>바닥까지 눌려(bottoming out)</strong> 쿠션 기능을 잃습니다. 충격이 무릎·정강이·족저근막에 직접 전달돼 부상으로 이어집니다.</p>

<h3>과체중 러너용 신발 3대 선택 기준</h3>

<table>
  <thead>
    <tr><th>기준</th><th>최소값</th><th>이유</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>힐 스택 높이</strong></td>
      <td>36mm 이상 (가능하면 40mm+)</td>
      <td>두꺼운 폼이 바닥까지 눌리는 걸 막아 쿠션 기능을 유지. 일반 트레이너 28~32mm로는 부족</td>
    </tr>
    <tr>
      <td><strong>안정성 / 베이스 폭</strong></td>
      <td>안정화(가이드레일) 또는 베이스 112mm+</td>
      <td>체중이 클수록 측면 흔들림이 커지고 발목 염좌·과내전 위험 증가. 넓은 베이스가 좌우 안정을 잡아줌</td>
    </tr>
    <tr>
      <td><strong>아웃솔 내구성</strong></td>
      <td>600km 이상</td>
      <td>체중 비례로 미드솔·아웃솔 마모가 가속. 일반 400~500km 신발은 300km에서 쿠션 사망</td>
    </tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">카본 플레이트 슈퍼슈즈는 추천하지 않습니다</p>
    <p>Vaporfly·Adios Pro 같은 카본화는 ① 폼이 너무 부드러워 80kg+ 체중에서 바닥까지 눌리고, ② 마일리지 400km(레이서는 100km)로 가성비가 나쁘고, ③ 강한 로커가 아킬레스 부하를 증가시킵니다. 과체중 러너가 카본화로 입문하면 <strong>족저근막염·아킬레스건염 발병률이 2배 이상</strong>이라는 보고가 있습니다.</p>
  </div>
</div>

<h2>가격대별 TOP 10 — 과체중 러너 우선순위 순</h2>

<div class="stat-grid">
  <div class="stat-card accent">
    <span class="stat-label">맥스 쿠션 1순위</span>
    <span class="stat-value">Bondi 9</span>
    <span class="stat-sub">229,000원 / 303g</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">최강 쿠션</span>
    <span class="stat-value">Glycerin Max 2</span>
    <span class="stat-sub">249,000원 / 312g</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">균형형 1위</span>
    <span class="stat-value">Nimbus 28</span>
    <span class="stat-sub">199,000원 / 281g</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">안정화 1위</span>
    <span class="stat-value">Kayano 32</span>
    <span class="stat-sub">199,000원 / 300g</span>
  </div>
</div>

<h3>1위. <a href="/shoes/hoka-bondi-9">Hoka Bondi 9</a> — 과체중 러너의 정답</h3>

<p><strong>가격 229,000원 · 무게 303g · 힐 스택 43mm · 평점 5.0</strong></p>

<p>호카가 처음부터 "맥스 쿠션 카테고리"를 만든 모델의 9세대. 힐 스택 43mm + 메타로커 지오메트리가 체중을 분산시켜 <strong>80~100kg 러너에게도 무릎 충격을 최소화</strong>합니다. 전작 대비 SuperCritical EVA 폼으로 업그레이드되어 무거웠던 쿠션감이 더 부드러워졌습니다.</p>

<ul>
  <li><strong>적합:</strong> 체중 80kg+ 입문~중급, 무릎 통증 이력, 7:00~6:00/km 데일리 페이스</li>
  <li><strong>주의:</strong> 토박스 표준(73mm) — 발볼 매우 넓으면 와이드(2E) 권장</li>
</ul>

<h3>2위. <a href="/shoes/brooks-glycerin-max-2">Brooks Glycerin Max 2</a> — 최대 쿠션 + 흔들림 방지</h3>

<p><strong>가격 249,000원 · 무게 312g · 평점 4.0</strong></p>

<p>Glycerin 시리즈 최상위. DNA Tuned 폼(<strong>힐 12% 더 부드럽고 / 전족부 25% 더 반응적</strong>인 듀얼 셀 구조)이 과체중 러너의 두 가지 니즈를 동시에 만족시킵니다. 312g으로 무겁지만 그만큼 안정적이며, 베이스가 넓어 측면 흔들림이 거의 없습니다.</p>

<ul>
  <li><strong>적합:</strong> 체중 85kg+, 장거리(15km+) 추천, 발에 안정감을 원하는 러너</li>
  <li><strong>주의:</strong> 가격 부담, 빠른 페이스(5:00/km 이하)에는 적합하지 않음</li>
</ul>

<h3>3위. <a href="/shoes/asics-gel-nimbus-28">Asics Gel-Nimbus 28</a> — 균형형 1위</h3>

<p><strong>가격 199,000원 · 무게 281g · 평점 4.5</strong></p>

<p>FF Blast Max 미드솔 + PureGel 힐 인서트의 조합. <strong>맥스 쿠션 중 가장 가볍고(281g)</strong> 한국 러너 베스트셀러. 토박스가 73mm로 표준이라 발볼 보통 러너에게 무난하고, 와이드(2E) 옵션도 정식 출시.</p>

<ul>
  <li><strong>적합:</strong> 체중 75~95kg, 데일리부터 하프마라톤까지 다목적, 가성비 우선</li>
  <li><strong>주의:</strong> 안정성은 중성(neutral) — 심한 과내전이면 카야노 32로</li>
</ul>

<h3>4위. <a href="/shoes/asics-gel-kayano-32">Asics Gel-Kayano 32</a> — 안정화 1순위</h3>

<p><strong>가격 199,000원 · 무게 300g · 안정화 · 평점 4.0</strong></p>

<p>과체중 + 평발 + 과내전 트리플 조합 러너에게 최우선. 4D Guidance System이 발이 안쪽으로 무너지는 걸 잡아주고, FF Blast Plus Eco 폼이 충분한 쿠션을 제공합니다. 같은 199,000원에 안정화 카테고리에서는 거의 무적.</p>

<ul>
  <li><strong>적합:</strong> 체중 80kg+ + 평발/과내전, 발목 안쪽으로 굴러가는 러너, 부상 이력 多</li>
  <li><strong>주의:</strong> 300g으로 묵직 — 가벼운 신발 좋아하면 다른 옵션</li>
</ul>

<h3>5위. <a href="/shoes/new-balance-1080-v15">New Balance 1080 v15</a> — 와이드 옵션 최강</h3>

<p><strong>가격 209,000원 · 무게 216g · 힐 스택 40mm · 평점 4.9</strong></p>

<p>v14 대비 69g 경량화(285→216g)에도 힐 스택은 40mm 유지. Infinion(질소 주입 슈퍼크리티컬 폼)이 가벼우면서도 충분한 쿠션 제공. <strong>2E·4E 와이드 옵션이 정식 출시</strong>되는 거의 유일한 맥스 쿠션이라 발볼 넓은 한국 러너 1순위.</p>

<ul>
  <li><strong>적합:</strong> 체중 75~90kg + 발볼 넓음, 가벼운 쿠션화를 원하는 러너</li>
  <li><strong>주의:</strong> 안정성 6/10 — 과내전이면 860 v15가 정답</li>
</ul>

<h3>6위. <a href="/shoes/brooks-glycerin-22">Brooks Glycerin 22</a> — 가성비 쿠션화</h3>

<p><strong>가격 209,000원 · 무게 293g · 평점 5.0</strong></p>

<p>Glycerin Max 2의 동생 모델. 같은 DNA Loft v3 폼을 사용하면서 4만원 저렴. 312g→293g으로 더 가볍고, 쿠션감은 90% 이상 유지됩니다. <strong>처음 과체중 러너용 신발을 사보는 러너</strong>에게 진입 부담이 가장 낮은 선택지.</p>

<ul>
  <li><strong>적합:</strong> 첫 쿠션화 입문, 체중 75~85kg, 주 3~4회 데일리</li>
  <li><strong>주의:</strong> Glycerin Max 2 대비 안정감 약간 떨어짐 — 흔들리는 느낌 있으면 GTS(안정화 버전)로</li>
</ul>

<h3>7위. <a href="/shoes/saucony-triumph-23">Saucony Triumph 23</a> — 슈퍼크리티컬 폼 최경량</h3>

<p><strong>가격 199,000원 · 무게 272g · 평점 4.0</strong></p>

<p>PWRRUN PB 슈퍼크리티컬 폼이 <strong>맥스 쿠션 중에서도 반발력이 좋은 편</strong>. 272g으로 이 카테고리에서 가벼운 편이라 6:00/km 페이스도 부담 없이 소화합니다. 와이드 옵션 정식 출시.</p>

<ul>
  <li><strong>적합:</strong> 체중 75~85kg + 페이스도 챙기고 싶은 러너, 하프마라톤 도전</li>
  <li><strong>주의:</strong> 쿠션감은 Bondi·Glycerin Max보다 얇음 — 100% 푹신함 우선이면 다른 선택</li>
</ul>

<h3>8위. <a href="/shoes/on-cloudmonster-3">On Cloudmonster 3</a> — 디자인 + 클라우드텍 폼</h3>

<p><strong>가격 229,000원 · 무게 295g · 평점 4.5</strong></p>

<p>On의 시그니처 CloudTec 폼 14개가 큰 사이즈로 적용된 모델. <strong>탱탱한 반발과 푹신한 쿠션이 동시에</strong> 느껴지는 독특한 착화감. 일상화 디자인으로도 좋아 출퇴근 겸용으로 한 켤레로 쓰기 좋습니다.</p>

<ul>
  <li><strong>적합:</strong> 체중 75~90kg, 출퇴근 + 러닝 겸용, 패션도 신경 쓰는 러너</li>
  <li><strong>주의:</strong> On 특유의 빈 공간(클라우드)이 작은 돌 끼이는 경우 있음, 평발에는 비추</li>
</ul>

<h3>9위. <a href="/shoes/mizuno-wave-sky-9">Mizuno Wave Sky 9</a> — 안정형 쿠션</h3>

<p><strong>가격 189,000원 · 평점 4.0</strong></p>

<p>Mizuno Enerzy 폼 + Wave 플레이트가 만드는 <strong>"부드럽지만 흔들리지 않는"</strong> 착화감. 미즈노 특유의 안정감이 과체중 러너의 측면 흔들림을 잘 잡아줍니다. 가격이 18만원대로 합리적.</p>

<ul>
  <li><strong>적합:</strong> 체중 80kg+ + 평발·과내전 약간, 한국 마라톤 대회에서 자주 보이는 미즈노 라인업 좋아하는 러너</li>
  <li><strong>주의:</strong> 토박스 표준 — 발볼 매우 넓으면 다른 브랜드</li>
</ul>

<h3>10위. <a href="/shoes/new-balance-860-v15">New Balance 860 v15</a> — 가성비 안정화</h3>

<p><strong>가격 189,000원 · 무게 330g · 안정화 · 평점 4.5</strong></p>

<p>안정화 카테고리에서 <strong>가성비 최강</strong>. 330g으로 무거운 편이지만 그만큼 묵직한 안정성을 제공. 한쪽 사이드에 Stability Plane이 적용돼 평발 러너의 안쪽 무너짐을 잡습니다. 4E 와이드 옵션 출시.</p>

<ul>
  <li><strong>적합:</strong> 체중 85kg+ + 평발 + 발볼 넓음 + 예산 20만원 이하</li>
  <li><strong>주의:</strong> 330g은 진짜 무겁습니다 — 입문 단계가 아니라면 페이스 트레이닝용으로는 부적합</li>
</ul>

<h2>한눈에 비교</h2>

<table>
  <thead>
    <tr><th>순위</th><th>모델</th><th>가격</th><th>무게</th><th>스택</th><th>카테고리</th><th>와이드</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td><strong>Hoka Bondi 9</strong></td><td>229,000원</td><td>303g</td><td>43mm</td><td>쿠션화</td><td>2E</td></tr>
    <tr><td>2</td><td><strong>Glycerin Max 2</strong></td><td>249,000원</td><td>312g</td><td>43mm</td><td>쿠션화</td><td>2E</td></tr>
    <tr><td>3</td><td><strong>Nimbus 28</strong></td><td>199,000원</td><td>281g</td><td>43mm</td><td>쿠션화</td><td>2E</td></tr>
    <tr><td>4</td><td><strong>Kayano 32</strong></td><td>199,000원</td><td>300g</td><td>40mm</td><td>안정화</td><td>2E</td></tr>
    <tr><td>5</td><td><strong>NB 1080 v15</strong></td><td>209,000원</td><td>216g</td><td>40mm</td><td>쿠션화</td><td>2E·4E</td></tr>
    <tr><td>6</td><td><strong>Glycerin 22</strong></td><td>209,000원</td><td>293g</td><td>38mm</td><td>쿠션화</td><td>2E</td></tr>
    <tr><td>7</td><td><strong>Triumph 23</strong></td><td>199,000원</td><td>272g</td><td>37mm</td><td>쿠션화</td><td>2E</td></tr>
    <tr><td>8</td><td><strong>Cloudmonster 3</strong></td><td>229,000원</td><td>295g</td><td>34mm</td><td>쿠션화</td><td>없음</td></tr>
    <tr><td>9</td><td><strong>Wave Sky 9</strong></td><td>189,000원</td><td>290g</td><td>40mm</td><td>쿠션화</td><td>2E</td></tr>
    <tr><td>10</td><td><strong>NB 860 v15</strong></td><td>189,000원</td><td>330g</td><td>34mm</td><td>안정화</td><td>2E·4E</td></tr>
  </tbody>
</table>

<h2>본인 상황별 최종 추천</h2>

<table>
  <thead>
    <tr><th>이런 러너라면</th><th>1순위 추천</th><th>2순위</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>입문 + 체중 80~90kg + 발볼 보통</strong></td>
      <td>Hoka Bondi 9</td>
      <td>Asics Nimbus 28</td>
    </tr>
    <tr>
      <td><strong>체중 90kg+ + 무릎 통증 이력</strong></td>
      <td>Brooks Glycerin Max 2</td>
      <td>Hoka Bondi 9</td>
    </tr>
    <tr>
      <td><strong>평발 + 과내전 + 체중 80kg+</strong></td>
      <td>Asics Gel-Kayano 32</td>
      <td>NB 860 v15</td>
    </tr>
    <tr>
      <td><strong>발볼 넓은 한국 러너</strong></td>
      <td>NB 1080 v15 (4E)</td>
      <td>NB 860 v15 (4E)</td>
    </tr>
    <tr>
      <td><strong>예산 20만원 이하</strong></td>
      <td>Mizuno Wave Sky 9</td>
      <td>NB 860 v15</td>
    </tr>
    <tr>
      <td><strong>출퇴근 + 러닝 1켤레</strong></td>
      <td>On Cloudmonster 3</td>
      <td>Asics Nimbus 28</td>
    </tr>
  </tbody>
</table>

<h2>구매 전 체크리스트</h2>

<div class="callout success">
  <span class="callout-icon">✅</span>
  <div class="callout-body">
    <p class="callout-title">신발 사기 전 5가지 확인</p>
    <ol>
      <li><strong>본인 발볼 측정</strong> — 자 들고 평발 위로 가장 넓은 부분 측정. 100mm+면 와이드 옵션 필수</li>
      <li><strong>평발 여부 확인</strong> — 젖은 발로 종이에 발자국. 안쪽 아치가 안 나오면 평발 → 안정화 카테고리</li>
      <li><strong>오후 5시 이후 신어보기</strong> — 발이 가장 부어 있는 시간. 매장 방문 시간 조절</li>
      <li><strong>러닝 양말 신고 신어보기</strong> — 평소 신는 양말 두께로 핏 확인. 사이즈 0.5 차이가 결과를 좌우</li>
      <li><strong>30일 환불 정책 확인</strong> — 호카·브룩스·아식스는 30일 시범 착화 후 환불 가능 매장 있음</li>
    </ol>
  </div>
</div>

<h2>1켤레로 시작한다면</h2>

<p>10종 다 보면 결정이 더 어렵죠. 산초 에디터 결론은 두 가지로 압축합니다.</p>

<ol>
  <li><strong>첫 신발이고 발볼 보통이면 → <a href="/shoes/hoka-bondi-9">Hoka Bondi 9</a> 229,000원.</strong> 맥스 쿠션 카테고리의 정답이고 한국 러너 후기가 가장 많아 시행착오 적음.</li>
  <li><strong>평발 + 발볼 넓은 한국 러너면 → <a href="/shoes/asics-gel-kayano-32">Asics Gel-Kayano 32 (와이드)</a> 199,000원.</strong> 평발·과내전 + 한국인 발 모두 잡는 거의 유일한 글로벌 안정화.</li>
</ol>

<p>본인 발에 맞는 신발을 1분 진단으로 좁혀보고 싶다면 <a href="/recommend">맞춤 러닝화 추천</a>을 활용하세요. 발볼 넓은 한국인 전용 가이드는 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국인을 위한 러닝화 추천 TOP 10</a>, 무릎 통증 있다면 <a href="/blog/knee-pain-running-shoes">무릎 통증 러너를 위한 러닝화 선택법</a>도 함께 참고.</p>

<div class="callout info">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">러닝 + 체중 감량을 동시에 노린다면</p>
    <p>과체중 상태에서 무리한 러닝은 부상 직행입니다. 시작은 <strong>걷기 5분 + 조깅 1분</strong> 반복 10세트로 잡고, 주 3회·30분 페이스 6:30~7:30/km를 8주간 유지한 뒤 거리를 늘리세요. 신발은 위 추천 중 하나만 사고, 같은 신발을 한 달에 100km 이상 신지 마세요. 미드솔 회복 시간이 필요합니다.</p>
  </div>
</div>

<p><small>출처: 95종 러닝화 자체 DB / @runninglife_korea / RunRepeat 랩 데이터 / Doctors of Running / Believe in the Run / 호카·브룩스·아식스·뉴발란스 한국 공식 사이트 / 작성일 2026년 5월 11일 기준 / 가격은 공식 MSRP이며 세일가는 별도.</small></p>
`,
  },
  {
    id: '2026-seoul-race',
    slug: '2026-seoul-race',
    title: '2026 서울레이스 D-18 | 5/27 접수, 청계광장 출발 도심 하프·10K — 5분 컷 마감 주의',
    description: '2026 서울레이스(SEOUL RACE) 본접수가 5월 27일(수) 하프 19시·10K 21시에 시작됩니다. 청계광장 출발, 종로·숭례문·시청·청계천·DDP 통과 도심 평지 코스. 동마 시리즈 유일 가을 도심 하프 전용 — 작년 하프 9,100명 역대 최다, 오픈 5분 내 마감 빈번. 풀코스 없는 도심 페스티벌형 마라톤.',
    thumbnail: '/images/blog/2026-seoul-race.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-09',
    category: 'news' as const,
    readingTime: 7,
    tags: ['서울레이스', 'Seoul Race', '서울 마라톤', '도심 마라톤', '동마클럽', '하프마라톤', '청계광장', '대회 일정'],
    event: {
      name: '2026 서울레이스 (SEOUL RACE)',
      startDate: '2026-10-11T08:00:00+09:00',
      location: {
        name: '청계광장 앞 세종대로 → 무교로 골인',
        address: '서울특별시 종로구 청계광장 앞 세종대로',
      },
      organizer: '동아일보 (동마클럽)',
      url: 'https://www.seoul-race.co.kr/',
      offers: [
        { name: '하프마라톤 (5/27 19시 본접수)', priceKrw: 70000, availabilityEnds: '2026-06-30', url: 'https://dongma.club/' },
        { name: '10K (5/27 21시 본접수)', priceKrw: 60000, availabilityEnds: '2026-06-30', url: 'https://dongma.club/' },
      ],
    },
    faqs: [
      {
        question: '서울레이스가 서울마라톤이랑 뭐가 다른가요?',
        answer: '서울마라톤(매년 3월, 풀코스 중심)이 도시 전체를 관통하는 본격 풀코스 대회라면, 서울레이스(매년 10월)는 풀코스 없이 도심 하프·10K만 운영하는 가을 도심 페스티벌입니다. 출발이 광화문이 아니라 청계광장이고, 코스도 청계천·종로·을지로·DDP를 잇는 도심 순환형이라 풀 마라톤보다 짧고 입문 친화적입니다. 운영은 둘 다 동마클럽(동아일보)이 합니다.',
      },
      {
        question: '5월 27일 하프 19시·10K 21시가 무슨 뜻인가요?',
        answer: '같은 날 두 종목의 접수 오픈 시각이 시간 분리됐다는 뜻입니다. 하프(8,500명)는 19시 정각에, 10K(4,000명)는 21시 정각에 dongma.club에서 동시 선착순 시작합니다. 한 사람이 둘 다 도전하려면 두 시간대 모두 PC 앞에 앉아 있어야 합니다. 작년 하프는 오픈 5분 내 마감됐으니 결제 수단 등록·시계 동기화는 두 시간대 모두 미리 해두세요.',
      },
      {
        question: '하프 70,000원, 10K 60,000원이 좀 비싼 거 아닌가요?',
        answer: '동마 시리즈 다른 대회(공주백제 하프 50K·10K 40K, 경주국제 하프 50K·10K 40K)보다 2만원 정도 비쌉니다. 이유는 ① 서울 도심 코스 운영 비용(교통통제·경찰·구조 인력), ② PUMA 협찬 공식 티셔츠 + 완주 메달, ③ DDP·청계광장 등 랜드마크 사용료. 서울 도심에서 하프 뛰는 경험과 PUMA 티셔츠 가치를 더하면 가성비는 합리적이라는 평가가 다수입니다.',
      },
      {
        question: '도심 코스에 어떤 신발이 좋나요?',
        answer: '청계광장~종로~을지로~청계천~DDP 100% 아스팔트 평지 코스라 ① 하프 PB 도전 → 카본 플레이트 레이싱화(아디오스 프로 4·베이퍼플라이 4·메타스피드 에지) ② 하프 안전 완주 → 슈퍼 트레이너(슈퍼블라스트 2·페가수스 플러스) ③ 10K 가벼운 페이스 → 데일리 트레이너(페가수스 42·1080 v15)가 정답입니다. 평지라 안정화는 굳이 필요 없고, 발볼 넓다면 와이드 옵션 정식 출시된 모델 우선.',
      },
      {
        question: '같은 주말에 경주국제마라톤도 있는데 어디 가야 하나요?',
        answer: '서울레이스 10월 11일(일), 경주국제마라톤 10월 17일(토) — 한 주 차이입니다. 둘 다 도전은 권장하지 않으며 (회복 시간 부족) 성격에 따라 갈라야 합니다. ① 서울에서 도심 하프·10K 페스티벌 분위기 + 풀코스 부담 없이 → 서울레이스. ② 풀코스 PB 도전 + 신라 유적 코스 + 1박2일 관광 → 경주국제마라톤. 동마 멤버십 가입자라면 둘 다 우선접수 가능하지만 한쪽만 선택하는 게 현실적입니다.',
      },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>2026 서울레이스 — 2026년 10월 11일(일) 청계광장 출발 → 종로·숭례문·시청·청계천·DDP 통과 → 무교로 골인 도심 평지 코스</li>
    <li>본접수 <strong>5월 27일(수) 하프 19시 / 10K 21시</strong> dongma.club — 작년 하프 5분 내 마감, PC 셋업 + 시계 동기화 필수</li>
    <li>풀코스 없는 도심 하프·10K 전용 — <strong>동마 시리즈 유일 가을 도심 페스티벌형</strong>, 작년 12,800명 역대 최다</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">🔥</span>
  <div class="callout-body">
    <p class="callout-title">5월 27일 D-18 — 시간 분리 오픈, 두 번 PC 앞에 앉아야</p>
    <p>하프(8,500명)는 5/27 19시, 10K(4,000명)는 21시로 <strong>같은 날 다른 시각</strong>에 오픈됩니다. 작년 하프는 오픈 5분 내 마감됐으니 한 종목만 노린다고 안심하면 안 됩니다. PC 셋업·결제 수단 등록·시계 동기화는 19시·21시 두 차례 모두 적용. 동마클럽 회원가입과 로그인은 지금 미리 해두세요.</p>
  </div>
</div>

<h2>핵심 정보 한눈에</h2>

<div class="stat-grid">
  <div class="stat-card accent">
    <span class="stat-label">대회일</span>
    <span class="stat-value">10/11 (일)</span>
    <span class="stat-sub">청계광장 출발</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">하프 접수</span>
    <span class="stat-value">5/27 19시</span>
    <span class="stat-sub">정원 8,500명</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">10K 접수</span>
    <span class="stat-value">5/27 21시</span>
    <span class="stat-sub">정원 4,000명</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">2025 참가</span>
    <span class="stat-value">12,800명</span>
    <span class="stat-sub">역대 최다</span>
  </div>
</div>

<h2>접수부터 대회까지 타임라인</h2>

<div class="timeline">
  <div class="timeline-item active">
    <span class="timeline-date">2026.05.27 (수) 19시 — D-18</span>
    <span class="timeline-title">하프마라톤 본접수 시작</span>
    <p class="timeline-desc">정원 8,500명 선착순 — 작년 5분 내 마감, dongma.club</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.05.27 (수) 21시</span>
    <span class="timeline-title">10K 본접수 시작 (같은 날 2시간 후)</span>
    <p class="timeline-desc">정원 4,000명 선착순 — 하프 도전한 사람도 다시 PC 앞으로</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.09 중후반</span>
    <span class="timeline-title">레이스팩 안내·교통통제 공지</span>
    <p class="timeline-desc">PUMA 티셔츠 사이즈 확인, 청계광장 일대 통제 시간 발표</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.10.11 (일)</span>
    <span class="timeline-title">대회 당일 — 청계광장 7시 집결, 8시 출발(추정)</span>
    <p class="timeline-desc">10월 둘째 주 서울 평균 10-15도, 강수 적은 쾌청 시즌</p>
  </div>
</div>

<h2>종목별 참가비·정원 (2025년 기준)</h2>

<table>
  <thead>
    <tr><th>종목</th><th>거리</th><th>참가비</th><th>정원</th><th>제한시간</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>하프마라톤</strong></td>
      <td>21.0975km</td>
      <td>70,000원</td>
      <td>8,500명</td>
      <td>2시간 30분</td>
    </tr>
    <tr>
      <td>10K</td>
      <td>10km</td>
      <td>60,000원</td>
      <td>4,000명</td>
      <td>1시간 40분</td>
    </tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">왜 70,000원? — 도심 코스 + PUMA 협찬</p>
    <p>서울레이스 하프 70,000원은 동마 다른 대회(공주백제·경주국제 하프 50,000원)보다 2만원 비쌉니다. 이유: ① <strong>서울 도심 교통통제 비용</strong>(경찰·구조 인력·DDP/청계광장 사용료), ② <strong>PUMA 공식 티셔츠</strong>(시중 4-5만원 가치), ③ 완주 메달 + 도심 페스티벌 운영. 도심 하프 경험 + PUMA 티셔츠를 합치면 가성비는 합리적이라는 평가가 많습니다.</p>
  </div>
</div>

<h2>코스 — 서울 도심 랜드마크 21.0975km</h2>

<p>출발은 <strong>청계광장 앞 세종대로</strong>, 도착은 <strong>무교로</strong>(청계광장 인근)로 사실상 같은 지점에서 시작·종료합니다. 도심 평지 100% 아스팔트 코스로, 평소 차량 전용 도로를 달리는 색다른 경험이 핵심 매력입니다.</p>

<table>
  <thead>
    <tr><th>구간</th><th>통과 랜드마크</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>출발 (Start)</strong></td>
      <td>청계광장 앞 세종대로 → 종로1가</td>
    </tr>
    <tr>
      <td>0-5km</td>
      <td>종로1가 → 동대문역 → DDP 인근</td>
    </tr>
    <tr>
      <td>5-10km</td>
      <td>세종대로 사거리 → 숭례문 → 한국은행</td>
    </tr>
    <tr>
      <td>10-15km</td>
      <td>시청삼거리 → 을지로3가역 → 청계천 인근</td>
    </tr>
    <tr>
      <td>15-21km</td>
      <td>청계천 → DDP → 무교로 골인</td>
    </tr>
  </tbody>
</table>

<div class="callout tip">
  <span class="callout-icon">🏛</span>
  <div class="callout-body">
    <p class="callout-title">평지 코스 + 가을 최적 기온 = 하프 PB 도전 적기</p>
    <p>서울 도심은 고도 변화가 거의 없고 10월 둘째 주 평균 기온 10-15도로 하프 마라톤 최적 환경입니다. 다만 출발 직후 종로1가 좁은 구간 정체와 5km까지의 페이스 욕심이 함정 — 첫 5km는 의도적으로 천천히, 5-15km에서 페이스 끌어올리는 전략이 정석입니다. <a href="/blog/marathon-pacing-strategy">마라톤 페이싱 전략</a> 참고.</p>
  </div>
</div>

<h2>동마 가을 시리즈 내 서울레이스의 포지션</h2>

<p>동마클럽이 운영하는 가을 대회는 4개. 서울레이스는 그중 유일하게 <strong>풀코스 없이 도심 하프·10K만 운영하는 페스티벌형</strong>입니다.</p>

<table>
  <thead>
    <tr><th>대회</th><th>일자</th><th>종목</th><th>코스 성격</th><th>관련 글</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>2026 공주백제마라톤</td>
      <td>9/20 (일)</td>
      <td>풀·32K·하프·10K·5K</td>
      <td>금강변 평지 입문 풀코스</td>
      <td><a href="/blog/2026-gongju-baekje-marathon">D-4 우선접수</a></td>
    </tr>
    <tr>
      <td><strong>2026 서울레이스</strong></td>
      <td><strong>10/11 (일)</strong></td>
      <td><strong>하프·10K</strong></td>
      <td><strong>서울 도심 평지 페스티벌</strong></td>
      <td><strong>이 글</strong></td>
    </tr>
    <tr>
      <td>2026 경주국제마라톤</td>
      <td>10/17 (토)</td>
      <td>풀·하프·10K</td>
      <td>신라 유적 코스 / 엘리트 라벨</td>
      <td><a href="/blog/2026-gyeongju-international-marathon">D-17 접수</a></td>
    </tr>
    <tr>
      <td>2027 서울마라톤</td>
      <td>2027.3.21 (일)</td>
      <td>풀·10K</td>
      <td>서울 도심 풀코스 (플래티넘)</td>
      <td><a href="/blog/2027-seoul-marathon-priority-d10">D-10 우선접수</a></td>
    </tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">⚖️</span>
  <div class="callout-body">
    <p class="callout-title">서울레이스 vs 경주국제 — 한 주 차이 선택 가이드</p>
    <p>10/11 서울레이스와 10/17 경주국제는 일주일 차이라 둘 다 뛰는 건 회복상 부담이 큽니다. 선택 기준: ① <strong>풀코스 PB 도전 + 1박2일 관광 + 신라 유적</strong> → 경주, ② <strong>서울에서 도심 하프 페스티벌 + 풀코스 부담 없이 + 당일치기</strong> → 서울레이스. 둘 다 도전한다면 서울레이스 10K(가벼운 페이스) + 경주 풀(메인) 조합이 그나마 현실적.</p>
  </div>
</div>

<h2>10월 서울 도심 — 어떤 신발을 신을까</h2>

<p>100% 아스팔트 평지 + 10-15도 + 하프 또는 10K 환경에서는 종목·목표별로 추천이 갈립니다.</p>

<table>
  <thead>
    <tr><th>종목 / 목표</th><th>추천 카테고리</th><th>예시 모델</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>하프 PB 도전 (Sub-1:30~1:45)</strong></td>
      <td>카본 플레이트 레이싱화</td>
      <td>아디다스 아디오스 프로 4, 나이키 베이퍼플라이 4, ASICS 메타스피드 에지 파리</td>
    </tr>
    <tr>
      <td><strong>하프 안전 완주 (1:45~2:30)</strong></td>
      <td>슈퍼 트레이너</td>
      <td><a href="/shoes/asics-superblast-2">슈퍼블라스트 2</a>, <a href="/shoes/nike-pegasus-plus">페가수스 플러스</a>, <a href="/shoes/hoka-mach-x-3">호카 마하 X 3</a></td>
    </tr>
    <tr>
      <td><strong>10K (PB 도전)</strong></td>
      <td>경량 카본 또는 슈퍼 트레이너</td>
      <td><a href="/shoes/nike-zoom-fly-6">줌 플라이 6</a>, <a href="/shoes/asics-superblast-2">슈퍼블라스트 2</a></td>
    </tr>
    <tr>
      <td><strong>10K (즐기는 페이스)</strong></td>
      <td>쿠션 데일리 트레이너</td>
      <td><a href="/shoes/nike-pegasus-42">페가수스 42</a>, <a href="/shoes/new-balance-1080-v15">1080 v15</a>, <a href="/shoes/asics-gt-2000-14">GT-2000 14</a></td>
    </tr>
  </tbody>
</table>

<p>발볼이 넓다면 와이드 옵션이 정식 출시된 페가수스 42·1080 v15·GT-2000 14 우선. <a href="/recommend">맞춤 신발 추천</a>에서 본인 발에 맞는 모델 1분 안에 확인할 수 있습니다.</p>

<h2>접수 실전 노하우 — 5분 컷 마감 대비</h2>

<div class="callout tip">
  <span class="callout-icon">⚡</span>
  <div class="callout-body">
    <p class="callout-title">5월 27일 D-Day 직전 체크리스트</p>
    <ol style="margin-top:8px;">
      <li><strong>동마클럽 사전 회원가입·로그인</strong> — 5/27 18:30까지 완료</li>
      <li><strong>유선랜 PC + 모바일 동시 접속</strong> — 트래픽 폭주 대비 백업</li>
      <li><strong>결제 수단 2가지 등록</strong> — 카드 + 카카오/네이버페이</li>
      <li><strong>브라우저 자동입력</strong> — 이름·생년월일·연락처·주소 모두 저장</li>
      <li><strong>시계 동기화</strong> — <code>time.navyism.com</code>으로 1초 단위 (휴대폰 기본 시계 1-2초 오차 흔함)</li>
      <li><strong>19시·21시 두 차례 알람</strong> — 하프·10K 모두 노린다면 두 시각 모두</li>
      <li><strong>접속 페이지 사전 로딩</strong> — 정시 직전 dongma.club 접수 페이지 → F5 대기</li>
    </ol>
  </div>
</div>

<h2>교통 — 대중교통 강력 권장</h2>

<table>
  <thead>
    <tr><th>지하철</th><th>역</th><th>도보</th></tr>
  </thead>
  <tbody>
    <tr><td>1·2호선</td><td>시청역</td><td>1-2분 (서울광장 인접)</td></tr>
    <tr><td>5호선</td><td>광화문역</td><td>2분 (청계광장 인접)</td></tr>
    <tr><td>1호선</td><td>종각역</td><td>3분 (종로 방면)</td></tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">🚇</span>
  <div class="callout-body">
    <p class="callout-title">자가용 절대 비추천</p>
    <p>대회 당일 청계광장·세종대로·을지로·DDP 일대 전 구간 차량 통제됩니다. 자가용은 진입조차 불가능. 8시 출발에 맞추려면 7시 이전 도착이 안전한데, 시청역·광화문역 첫차(5:30~) 이용으로 충분합니다. 경기·인천 거주자는 광역버스 이용 가능.</p>
  </div>
</div>

<h2>2025년 대회 후기</h2>

<p>2025년 서울레이스는 <strong>참가자 12,800명, 하프 9,100명 역대 최다</strong>를 기록하며 가을 도심 마라톤의 대표 주자로 자리 잡았습니다. 후기 공통점:</p>

<ul>
  <li>"서울 도심 평지 코스 + 가을 최적 기온 = 하프 PB 잘 나온다"</li>
  <li>"평소 차량으로만 다니던 종로·을지로·세종대로를 달리는 경험 압권"</li>
  <li>"PUMA 협찬 티셔츠 디자인 만족도 매우 높음"</li>
  <li>"청계천 인근 구간 도시 풍경 사진 찍기 좋음"</li>
  <li>"하프 5분 내 마감 — 미리 준비 안 하면 진짜 못 들어감"</li>
</ul>

<h2>접수 체크리스트</h2>

<div class="cta-box">
  <h3>5월 27일(수) 19시·21시 — 지금 해야 할 것</h3>
  <ul>
    <li>✅ <strong>동마클럽 회원가입</strong> — dongma.club, 마이페이지 진입 가능 확인</li>
    <li>✅ <strong>참가 종목 결정</strong> — 하프(70K) / 10K(60K) / 둘 다</li>
    <li>✅ <strong>결제 수단 등록</strong> — 카드 + 간편결제</li>
    <li>✅ <strong>5/27 18:55, 20:55 알람</strong> — 하프·10K 두 시각 5분 전</li>
    <li>✅ <strong>러닝화 결정</strong> — 도심 평지 + PB 도전이라면 카본, 안전 완주는 슈퍼 트레이너. <a href="/recommend">맞춤 추천</a></li>
    <li>✅ <strong>시계 동기화 도구 북마크</strong> — time.navyism.com</li>
    <li>📱 <strong>접수 사이트</strong>: <a href="https://dongma.club/" target="_blank" rel="noopener">dongma.club</a> · 공식 <a href="https://www.seoul-race.co.kr/" target="_blank" rel="noopener">seoul-race.co.kr</a></li>
  </ul>
</div>

<p class="text-sm text-gray-500 mt-8">
※ 데이터 출처: <a href="https://www.seoul-race.co.kr/" target="_blank" rel="noopener">서울레이스 공식</a>, <a href="https://dongma.club/" target="_blank" rel="noopener">동마클럽</a>, <a href="https://www.instagram.com/dongmaclub/p/DXyYzWVD0ut/" target="_blank" rel="noopener">@dongmaclub 5월 캘린더</a>, runningwikii(2025년 코스·참가비), sports.news.nate.com(2025년 12,800명 보도). 2026년 정확한 참가비·정원·집결 시간은 5월 27일 본접수 오픈 시 dongma.club·seoul-race.co.kr에 게시됩니다.
</p>
`,
  },
  {
    id: '2026-gyeongju-international-marathon',
    slug: '2026-gyeongju-international-marathon',
    title: '2026 경주국제마라톤 D-17 | 5/26 접수, World Athletics 엘리트 라벨 + 유네스코 신라 유적 코스',
    description: '동아일보 2026 경주국제마라톤(10/17 토) 동마클럽 멤버십 우선접수가 5월 26일(화) 19시 시작됩니다. 첨성대·대릉원·동궁과월지 통과, 총 획득고도 146m 완만 코스, 23.5~33km 내리막 기록 단축 구간. 2025년 World Athletics 엘리트 라벨 승격(국내 유일) + 역대 최대 15,000명 — 동마 3대장 가을 시즌 완결편.',
    thumbnail: '/images/blog/2026-gyeongju-international-marathon.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-09',
    category: 'news' as const,
    readingTime: 8,
    tags: ['경주국제마라톤', '경주 마라톤', '경상북도 마라톤', '동마클럽', '신라 마라톤', '유네스코 마라톤', 'World Athletics 엘리트 라벨', '대회 일정'],
    event: {
      name: '동아일보 2026 경주국제마라톤대회',
      startDate: '2026-10-17T08:00:00+09:00',
      location: {
        name: '경주시민운동장',
        address: '경상북도 경주시 시민운동장 일원',
      },
      organizer: '동아일보 (동마클럽) · 경주시·경상북도',
      url: 'https://www.gyeongjumarathon.com/',
      offers: [
        { name: '풀코스 (42.195km)', priceKrw: 60000, availabilityEnds: '2026-06-30', url: 'https://dongma.club/' },
        { name: '하프코스 (21.0975km)', priceKrw: 50000, availabilityEnds: '2026-06-30', url: 'https://dongma.club/' },
        { name: '10K', priceKrw: 40000, availabilityEnds: '2026-06-30', url: 'https://dongma.club/' },
      ],
    },
    faqs: [
      {
        question: '5월 26일 19시가 멤버십 우선접수인가요, 본접수인가요?',
        answer: '동마클럽 5월 캘린더 기준 5월 26일(화) 19시는 우선접수 또는 본접수 시작 일자로 안내됐으나 정확한 구분은 5월 중 동마클럽 공지로 확정됩니다. 2025년 패턴(우선 5/26~30 → 본 6/3 19시)을 따른다면 5/26은 멤버십 우선접수 가능성이 큽니다. 동마 멤버십 가입자는 5/26 19시 정각에 dongma.club 접속, 일반 러너는 별도 공지된 본접수일을 대비하세요.',
      },
      {
        question: '경주국제마라톤이 World Athletics 엘리트 라벨이라는 게 무슨 의미인가요?',
        answer: '2025년에 World Athletics(세계육상연맹) 엘리트 라벨로 승격됐고, 이는 국내 지방 대회 중 유일한 등급입니다. 등급 순서는 라벨 → 엘리트 → 골드 → 플래티넘이며, 서울마라톤(플래티넘)·대구마라톤(골드)에 이어 한국 3번째 국제 공인 마라톤입니다. 엘리트 라벨 승격은 코스 정확성·안전·해외 엘리트 선수 초청·공식 페이서·도핑 검사 등 국제 기준을 충족했다는 의미로, 풀코스 기록을 국제 공인 기록으로 인정받을 수 있습니다.',
      },
      {
        question: '코스에 불국사도 포함되나요?',
        answer: '아쉽게도 코스에는 불국사·석굴암이 포함되지 않습니다. 코스는 경주시민운동장에서 출발해 시내 순환 후 동일 지점 골인 구조로, 5~16km 구간에 첨성대·대릉원·천마총·동궁과월지를 연속 통과합니다. 불국사·석굴암은 시내에서 차로 20분 거리 외곽이라 별도 통과는 안 됩니다. 대회 전날 또는 완주 후 1박2일 관광으로 방문하는 게 정석입니다.',
      },
      {
        question: '코스 난이도는 어느 정도인가요?',
        answer: '동마 3대장 중 가장 쉬운 편입니다. 총 획득고도 146m로 공주백제(평지)와 안동(700m+) 사이 난이도이며, 16~24km 구간 북천 오르막(약 30m 상승)이 유일한 관문입니다. 23.5~33km 구간은 완만한 내리막으로 기록 단축 황금 구간이며, 36~42km 마무리는 잔잔한 낙타등이 반복됩니다. 10월 중순 경주 평균 17~19도로 마라톤 최적 조건이라 풀코스 PB 도전에 매우 유리합니다.',
      },
      {
        question: '마라톤 + 경주 관광 1박 2일 일정은 어떻게 짜나요?',
        answer: '추천 일정: ① 토요일 오전 KTX 신경주역 도착 → 점심 황남빵·교리김밥 → 오후 불국사·석굴암 관람 → 저녁 동궁과월지(안압지) 야경 → 경주 시내 숙박. ② 일요일 새벽 경주시민운동장 집결 → 8시 출발 → 풀코스 완주(목표 4-5시간) → 점심 회복식(경주 한정식) → 오후 KTX 복귀. 첨성대·대릉원은 코스 위에서 직접 통과하며 관람할 수 있어 별도 일정이 필요 없습니다.',
      },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>동아일보 2026 경주국제마라톤 — 2026년 10월 17일(토) 경주시민운동장 출발, 풀·하프·10K 3종목, 정원 약 15,000명 (2025년 역대 최대)</li>
    <li><strong>5월 26일(화) 19시 dongma.club 접수 시작</strong> — 2025년 패턴 기준 동마 멤버십 우선접수, 일반 본접수는 6월 초 별도 공지</li>
    <li><strong>World Athletics 엘리트 라벨</strong>(2025 승격, 국내 유일 지방 대회) + 첨성대·대릉원·동궁과월지 코스 통과 — 동마 3대장 가을 완결편</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">🔥</span>
  <div class="callout-body">
    <p class="callout-title">5월 26일(화) 19시 D-17 — 동마클럽 로그인 사전 점검</p>
    <p>경주국제마라톤은 2025년 15,000명 정원이 빠르게 채워졌습니다. 5월 26일 19시 정각에 dongma.club 접속해 멤버십 또는 본접수 진입을 시도하려면 사전에 회원가입·로그인·결제 수단 등록·시계 동기화까지 마쳐두는 게 안전합니다. 정확한 우선/본접수 구분은 5월 중 동마클럽 공식 공지로 확정됩니다.</p>
  </div>
</div>

<h2>핵심 정보 한눈에</h2>

<div class="stat-grid">
  <div class="stat-card accent">
    <span class="stat-label">대회일</span>
    <span class="stat-value">10/17 (토)</span>
    <span class="stat-sub">경주시민운동장</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">접수 시작</span>
    <span class="stat-value">5/26 (화)</span>
    <span class="stat-sub">19시 / dongma.club</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">정원</span>
    <span class="stat-value">15,000명</span>
    <span class="stat-sub">2025 역대 최대</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">국제 공인</span>
    <span class="stat-value">엘리트 라벨</span>
    <span class="stat-sub">국내 유일 지방 대회</span>
  </div>
</div>

<h2>접수부터 대회까지 타임라인</h2>

<div class="timeline">
  <div class="timeline-item active">
    <span class="timeline-date">2026.05.26 (화) 19시 — D-17</span>
    <span class="timeline-title">접수 오픈 (멤버십 우선 또는 일반 본접수)</span>
    <p class="timeline-desc">동마클럽 5월 캘린더에 명시된 일정. 우선/본접수 구분은 5월 중 공식 공지</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.06 초 (예상)</span>
    <span class="timeline-title">일반 본접수 (2025년 6/3 패턴 시)</span>
    <p class="timeline-desc">멤버십 우선접수 후 잔여석 일반 선착순. 정확 일정은 동마클럽 공지로 확정</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.09 중후반</span>
    <span class="timeline-title">레이스팩 안내·교통통제 공지</span>
    <p class="timeline-desc">기념품, 셔틀버스 운영, 코스 통제 시간 공식 발표</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.10.17 (토)</span>
    <span class="timeline-title">대회 당일 — 경주시민운동장 7~7:30 집결, 8시 출발(추정)</span>
    <p class="timeline-desc">10월 중순 경주 평균 17-19도, 최저 12도 — 마라톤 최적 조건</p>
  </div>
</div>

<h2>종목별 참가비 (2025년 기준)</h2>

<table>
  <thead>
    <tr><th>종목</th><th>거리</th><th>참가비 (2025 기준)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>풀코스</strong></td><td>42.195km</td><td>60,000원</td></tr>
    <tr><td>하프코스</td><td>21.0975km</td><td>50,000원</td></tr>
    <tr><td>10K</td><td>10km</td><td>40,000원</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">2026 공식 참가비는 5/26 접수 오픈 시 확정</p>
    <p>위 금액은 2025년 기준이며, 2026년 정식 공지는 5월 26일 접수 오픈 시점 dongma.club·gyeongjumarathon.com에 게시됩니다. 동마 시리즈 전체로 보면 2025년 대비 변동 없거나 5,000원 이내 인상이 일반적입니다.</p>
  </div>
</div>

<h2>왜 경주국제마라톤이 특별한가 — 동마 3대장 완결편</h2>

<p>동마클럽이 운영하는 가을 시리즈 3개 대회 중 경주국제는 <strong>가장 늦게 열리는 가을 마라톤이자, 국제 위상이 가장 높은 대회</strong>입니다. 핵심 차별 포인트:</p>

<table>
  <thead>
    <tr><th>차별 포인트</th><th>경주국제마라톤</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>국제 공인 등급</strong></td>
      <td>World Athletics <strong>엘리트 라벨</strong> (2025 승격, 국내 유일 지방 대회)</td>
    </tr>
    <tr>
      <td><strong>코스 위 유적지</strong></td>
      <td>첨성대·대릉원·천마총·동궁과월지·오릉 — 신라 천년고도 직접 통과</td>
    </tr>
    <tr>
      <td><strong>코스 난이도</strong></td>
      <td>총 획득고도 146m, 완만 — 풀코스 PB 도전에 적합</td>
    </tr>
    <tr>
      <td><strong>날씨</strong></td>
      <td>10월 중순 경주 평균 17-19도 — 마라톤 최적 조건</td>
    </tr>
    <tr>
      <td><strong>참가 규모</strong></td>
      <td>15,000명 (2025 역대 최대) — 동마 시리즈 최대</td>
    </tr>
    <tr>
      <td><strong>관광 시너지</strong></td>
      <td>불국사·석굴암 + 황남빵·동궁과월지 야경 1박2일 황금 코스</td>
    </tr>
  </tbody>
</table>

<h2>World Athletics 엘리트 라벨이라는 의미</h2>

<p>2025년 경주국제마라톤은 <strong>World Athletics 엘리트 라벨</strong>로 승격됐습니다. 등급 순서는 다음과 같습니다.</p>

<table>
  <thead>
    <tr><th>등급</th><th>한국 사례</th><th>주요 조건</th></tr>
  </thead>
  <tbody>
    <tr><td>플래티넘 (최상위)</td><td>서울마라톤</td><td>해외 엘리트 30+, 경기 운영 최상급</td></tr>
    <tr><td>골드</td><td>대구마라톤</td><td>해외 엘리트 20+, 도핑·페이서 정식</td></tr>
    <tr><td><strong>엘리트</strong></td><td><strong>경주국제마라톤</strong></td><td>국제 공인 코스, 정식 페이서·도핑</td></tr>
    <tr><td>라벨</td><td>(다수 도시 대회)</td><td>기본 국제 인증</td></tr>
  </tbody>
</table>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">엘리트 라벨에서 풀코스 기록의 가치</p>
    <p>엘리트 라벨 이상에서 달성한 풀코스 기록은 World Athletics 공식 기록으로 인정됩니다. 보스턴마라톤 자격 기록(BQ)이나 다른 메이저 마라톤 신청 시 활용 가능. <strong>2027 서울마라톤 풀코스 그룹 배정용 기록증</strong>으로도 인정됩니다.</p>
  </div>
</div>

<h2>코스 — 신라 천년고도 위를 달리는 42.195km</h2>

<p>코스는 경주시민운동장에서 출발해 시내 순환 후 동일 지점 골인 구조입니다. 구간별 특징:</p>

<table>
  <thead>
    <tr><th>구간</th><th>특성</th><th>공략 포인트</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>0-5km</strong></td>
      <td>경주시민운동장 → 시내 진입, 평지</td>
      <td>오버페이스 금지, 페이스 안정화</td>
    </tr>
    <tr>
      <td><strong>5-16km</strong> ⭐</td>
      <td>유적지 황금 구간 — 첨성대·대릉원·천마총·동궁과월지 연속 통과</td>
      <td>풍경 즐기되 페이스 일정 유지</td>
    </tr>
    <tr>
      <td><strong>16-24km</strong></td>
      <td>북천 오르막 — 약 30m 상승, 코스 최난구간</td>
      <td>심박 80% 이하, 짧은 보폭으로 효율</td>
    </tr>
    <tr>
      <td><strong>23.5-33km</strong> 🏆</td>
      <td>완만한 내리막 — 기록 단축 황금 구간</td>
      <td>페이스 끌어올리기 적기, 다리 회복</td>
    </tr>
    <tr>
      <td><strong>33-42km</strong></td>
      <td>잔잔한 낙타등 반복, 마무리</td>
      <td>젤·소금 알약 비축, 의지력 게임</td>
    </tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">🏛</span>
  <div class="callout-body">
    <p class="callout-title">코스에 없는 것 — 불국사·석굴암</p>
    <p>경주의 대표 유적인 불국사·석굴암은 코스에서 통과하지 않습니다. 시내에서 차로 20분 거리 외곽이라 별도 일정이 필요합니다. <strong>대회 전날 도착하면 오후 시간에 불국사·석굴암 → 저녁 동궁과월지 야경</strong> 코스가 정석. 완주 후 일정 여유가 있다면 일요일 오전에 다녀와도 OK.</p>
  </div>
</div>

<h2>10월 경주 — 어떤 신발을 신을까</h2>

<p>총 획득고도 146m + 23.5-33km 내리막 + 17-19도 + 아스팔트 시내 코스 — 한 마디로 <strong>풀코스 PB 도전에 가장 좋은 환경</strong>입니다. 종목별·목적별 추천:</p>

<table>
  <thead>
    <tr><th>종목 / 목표</th><th>추천 카테고리</th><th>예시 모델</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>풀 PB 도전 (Sub-3:00~3:30)</strong></td>
      <td>카본 플레이트 레이싱화</td>
      <td>아디다스 아디오스 프로 4, 나이키 베이퍼플라이 4, ASICS 메타스피드 에지 파리</td>
    </tr>
    <tr>
      <td><strong>풀 안전 완주 (4:00~5:00)</strong></td>
      <td>슈퍼 트레이너 (쿠션+가벼움)</td>
      <td><a href="/shoes/asics-superblast-2">ASICS 슈퍼블라스트 2</a>, <a href="/shoes/nike-pegasus-plus">나이키 페가수스 플러스</a></td>
    </tr>
    <tr>
      <td><strong>하프 (안정 페이스)</strong></td>
      <td>경량 카본 또는 슈퍼 트레이너</td>
      <td><a href="/shoes/nike-zoom-fly-6">줌 플라이 6</a>, <a href="/shoes/hoka-mach-x-3">호카 마하 X 3</a></td>
    </tr>
    <tr>
      <td><strong>10K (즐기는 페이스)</strong></td>
      <td>쿠션 데일리 트레이너</td>
      <td><a href="/shoes/nike-pegasus-42">페가수스 42</a>, <a href="/shoes/new-balance-1080-v15">1080 v15</a>, <a href="/shoes/asics-gt-2000-14">GT-2000 14</a></td>
    </tr>
  </tbody>
</table>

<div class="callout tip">
  <span class="callout-icon">⛰</span>
  <div class="callout-body">
    <p class="callout-title">23.5-33km 내리막 대비 — 힐 쿠셔닝 우선</p>
    <p>경주국제마라톤의 황금 구간(23.5-33km 내리막)에서는 페이스를 끌어올리되, 동시에 무릎과 종아리에 충격이 누적됩니다. 카본 플레이트화 중에서도 <strong>힐 쿠셔닝이 충분한 모델</strong>(아디오스 프로·메타스피드 에지)이 알파플라이·베이퍼플라이보다 안전합니다. 풀코스 후반 30km 이후 경련 위험을 줄이는 핵심.</p>
  </div>
</div>

<h2>교통·숙박 — 경주는 KTX보다 시내 접근성이 핵심</h2>

<table>
  <thead>
    <tr><th>수단</th><th>경로</th><th>소요 시간</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>KTX (빠름)</strong></td>
      <td>서울역 → 신경주역(건천읍) → 시내버스·택시 20-30분</td>
      <td>약 2시간 10분 + α</td>
    </tr>
    <tr>
      <td><strong>고속버스 (편함)</strong></td>
      <td>서울 경부 → 경주 시외터미널 → 대회장 택시 10분</td>
      <td>약 3시간 30분</td>
    </tr>
    <tr>
      <td>자가용</td>
      <td>경부고속도로 → 경주IC</td>
      <td>약 4시간 (대회 당일 통제)</td>
    </tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">🚄</span>
  <div class="callout-body">
    <p class="callout-title">신경주역은 시내가 아니라 건천읍</p>
    <p>KTX 신경주역은 건천읍 외곽에 있어 경주 시내까지 추가 이동(20-30분)이 필요합니다. 가성비를 따진다면 <strong>고속버스가 사실상 더 편할 수 있습니다</strong> — 시외터미널이 시내 한가운데 있어 대회장·숙소 접근성이 좋습니다. 대회 당일 셔틀버스는 운영되지만 조기 마감되니 사전 신청 확인 필수.</p>
  </div>
</div>

<h2>경주 1박 2일 마라톤 + 관광 추천 일정</h2>

<table>
  <thead>
    <tr><th>시점</th><th>일정</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>토요일 오전</strong></td><td>KTX 신경주역 도착 → 시내 이동 → 점심 (황남빵·교리김밥)</td></tr>
    <tr><td>토요일 오후</td><td>불국사·석굴암 (외곽 30분 거리)</td></tr>
    <tr><td>토요일 저녁</td><td>동궁과월지(안압지) 야경 → 경주 시내 한정식 → 호텔 체크인 (경주 시내 도보권)</td></tr>
    <tr><td><strong>일요일 새벽</strong></td><td>06:00 기상 → 체조·간단한 식사 → 경주시민운동장 집결 (도보·셔틀)</td></tr>
    <tr><td>일요일 오전</td><td>08:00 출발 → 풀코스 완주 (목표 4-5시간)</td></tr>
    <tr><td>일요일 오후</td><td>회복식 → 황남빵 선물 → KTX 복귀</td></tr>
  </tbody>
</table>

<h2>2025년 대회 후기</h2>

<p>2025년 경주국제마라톤은 <strong>역대 최대 15,000명</strong>이 참가하며 World Athletics 엘리트 라벨 첫 해를 기념했습니다. 풀코스 우승은 아일랜드 퍼갈 커틴이 차지했고, APEC 정상회의 시점과 겹쳐 국제 관광 효과까지 누렸습니다.</p>

<ul>
  <li>"평지에 가까운 코스 + 가을 최적 기온 = PB 잘 나오는 마라톤"</li>
  <li>"23.5-33km 내리막 구간에서 페이스 끌어올리기 황금 시간"</li>
  <li>"첨성대·대릉원 통과할 때 풍경에 압도, 페이스 까먹지 말 것"</li>
  <li>"동궁과월지 야경 + 황남빵 선물 = 가족 단위 만족도 최상"</li>
  <li>"불국사 미통과는 아쉽지만 전날 다녀오면 충분"</li>
</ul>

<h2>5월 동마 4개 대회 캘린더 — 이번 시즌 종합</h2>

<p>경주국제마라톤은 동마 가을 시리즈의 <strong>마지막 퍼즐</strong>입니다. 4개 대회 모두 5월에 접수가 열리니 시즌 전체 일정으로 잡으면 효율적:</p>

<table>
  <thead>
    <tr><th>대회</th><th>대회일</th><th>접수일</th><th>관련 글</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>2027 서울마라톤</td>
      <td>2027.03.21</td>
      <td>우선 5/18~22 / 본 6/1~3</td>
      <td><a href="/blog/2027-seoul-marathon-priority-d10">우선접수 D-10 가이드</a></td>
    </tr>
    <tr>
      <td>2026 공주백제마라톤</td>
      <td>2026.09.20</td>
      <td>우선 5/11~15 / 본 5/21</td>
      <td><a href="/blog/2026-gongju-baekje-marathon">평지 입문 풀코스</a></td>
    </tr>
    <tr>
      <td>2026 서울레이스 (하프·10K)</td>
      <td>2026.10.11</td>
      <td>본접수 5/27 19시·21시</td>
      <td>(별도 발행 예정)</td>
    </tr>
    <tr>
      <td><strong>2026 경주국제마라톤</strong></td>
      <td><strong>2026.10.17</strong></td>
      <td><strong>접수 5/26 19시</strong></td>
      <td><strong>이 글</strong></td>
    </tr>
  </tbody>
</table>

<p>10월 17일에는 같은 날 충북 청주에서 <a href="/blog/2026-daecheongho-marathon">청원생명쌀 대청호마라톤</a>도 열립니다. 경주(엘리트 라벨, 풀 PB 도전)와 대청호(가성비, 10km·5km 입문)는 성격이 완전히 달라서 동시에 도전 가능한 옵션입니다.</p>

<h2>접수 체크리스트</h2>

<div class="cta-box">
  <h3>5월 26일(화) 19시 D-Day 준비</h3>
  <ul>
    <li>✅ <strong>동마클럽 회원가입·로그인 사전 확인</strong> — dongma.club 마이페이지 접속 가능 상태</li>
    <li>✅ <strong>결제 수단 등록</strong> — 카드 + 카카오/네이버페이 둘 다 사전 등록</li>
    <li>✅ <strong>시계 동기화</strong> — time.navyism.com (1초 단위)</li>
    <li>✅ <strong>5/26 18:55 알람 설정</strong> — 5분 전 PC 셋업</li>
    <li>✅ <strong>전날 경주 숙박 예약</strong> — 가을 단풍 + APEC 후 관광 붐, 빠른 마감</li>
    <li>✅ <strong>러닝화 결정</strong> — PB 도전이라면 카본 레이싱화 6-8주 전 길들이기, <a href="/recommend">맞춤 추천</a> 활용</li>
    <li>📱 <strong>접수 사이트</strong>: <a href="https://dongma.club/" target="_blank" rel="noopener">dongma.club</a> · 공식 <a href="https://www.gyeongjumarathon.com/" target="_blank" rel="noopener">gyeongjumarathon.com</a></li>
  </ul>
</div>

<p class="text-sm text-gray-500 mt-8">
※ 데이터 출처: <a href="https://www.gyeongjumarathon.com/" target="_blank" rel="noopener">경주국제마라톤 공식</a>, <a href="https://dongma.club/" target="_blank" rel="noopener">동마클럽</a>, <a href="https://www.instagram.com/dongmaclub/p/DXyYzWVD0ut/" target="_blank" rel="noopener">@dongmaclub 5월 캘린더</a>, runningwikii(2025년 참가비·코스), 한국육상연맹·sports.news.nate.com(2025 대회 보도). 우선/본접수 정확 구분과 2026년 참가비는 5월 중 동마클럽 공식 공지로 확정됩니다.
</p>
`,
  },
  {
    id: '2027-seoul-marathon-priority-d10',
    slug: '2027-seoul-marathon-priority-d10',
    title: '2027 서울마라톤 우선접수 D-10 | 5/18 오픈 — 풀 그룹별 본접수까지 실전 가이드',
    description: '기록 제출(5/11 마감) 직후 우선접수가 5월 18일(월) 10시에 오픈됩니다. 동마클럽 멤버십·동마크루·번호표 반납자·공식 클래스 수료자·sub3 헌액자 5조건. 풀 그룹별 본접수(6/1~2)와 10K 선착순(6/3 19시) 실전 노하우 + 동마 4개 대회 5월 캘린더 한눈에.',
    thumbnail: '/images/blog/2027-seoul-marathon-priority-d10.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-08',
    category: 'news' as const,
    readingTime: 8,
    tags: ['2027 서울마라톤', '서울마라톤', '동아마라톤', '동마클럽', '우선접수', '런카이브', '풀코스 그룹', '대회 일정'],
    event: {
      name: '2027 서울마라톤',
      startDate: '2027-03-21T08:00:00+09:00',
      location: {
        name: '광화문 → 잠실종합운동장',
        address: '서울특별시 종로구 ~ 송파구',
      },
      organizer: '동아일보 (동마클럽)',
      url: 'https://dongma.club/',
      offers: [
        { name: '풀코스 (그룹 A~H 본접수, 6/1~6/2)', priceKrw: 60000, availabilityEnds: '2026-06-02', url: 'https://dongma.club/' },
        { name: '10K (선착순, 6/3 19시)', priceKrw: 40000, availabilityEnds: '2026-06-03', url: 'https://dongma.club/' },
      ],
    },
    faqs: [
      {
        question: '우선접수 5조건이 정확히 뭔가요?',
        answer: '아래 5개 중 하나라도 해당하면 5월 18일~22일 우선접수 가능합니다: ① 2026 동아마라톤 멤버십(동마클럽) 가입자, ② 2026 서울마라톤 동마크루, ③ 2026 서울마라톤 번호표 반납자, ④ 2026 서울마라톤 대비 공식 클래스 수료자, ⑤ 명예의 전당 헌액자 중 2024~25 서울/공주/경주 또는 2026 서울마라톤 sub3 달성자. 다섯 조건 모두 본접수 그룹별 시간 경쟁 없이 안정적으로 풀코스를 확보할 수 있는 핵심 루트입니다.',
      },
      {
        question: '기록 제출 안 하면 어떻게 되나요?',
        answer: '5월 11일(월) 15시까지 런카이브에 공인 기록을 제출하지 않으면 가장 후순위인 H그룹으로 자동 배정됩니다. H그룹은 6월 2일(화) 22시 본접수 가장 마지막 슬롯이라 풀코스 정원이 채워졌을 가능성이 매우 높습니다. 기록증이 있다면 마감 전에 무조건 제출하세요. 유효기간은 2024년 1월 1일 ~ 2026년 5월 10일 사이 공인 기록입니다.',
      },
      {
        question: '동마클럽 ID는 어떻게 만드나요?',
        answer: '동마클럽 회원가입 시 자동 발급되는 고유 식별자입니다. dongma.club 회원가입 후 마이페이지에서 확인할 수 있고, 런카이브 기록 제출 시 \'추가 정보 → 동마클럽 ID\' 항목에 입력해야 정상 처리됩니다. ID 누락 시 기록은 제출되지만 2027 서울마라톤 참가용 기록으로는 인정되지 않으니 회원가입과 ID 확인을 우선 처리하세요.',
      },
      {
        question: '풀 그룹별 본접수에서 PC가 다운되면 어떻게 하나요?',
        answer: '본접수 시각(19시·20시·21시·22시) 정시에 트래픽이 폭주하므로 ① PC + 모바일 + 태블릿 3중 백업 접속, ② 유선랜 우선(WiFi 비추), ③ 브라우저 자동입력으로 개인정보 입력 시간 단축, ④ 결제 수단 사전 등록(카드 정보 + 간편결제 둘 다)이 표준 전략입니다. 특히 시계 동기화는 필수 — `time.navyism.com`으로 초 단위까지 맞춰두세요. 3년 연속 풀 못 잡은 러너들 대부분이 시계 오차 또는 결제 수단 미등록이 원인이었습니다.',
      },
      {
        question: '10K 선착순은 정말 그렇게 빨리 마감되나요?',
        answer: '2026 서울마라톤 10K는 접수 오픈 5분 만에 마감됐습니다. 2027은 카카오 러너스카드 도입(JTBC 서울마라톤 사례) 가능성으로 시스템이 바뀔 수도 있으니 5월 말 동마클럽 공지를 반드시 확인하세요. 현재 기준으로는 6월 3일(수) 19시 정각에 dongma.club에서 선착순 접수, 풀과 동일한 PC 셋업 + 시계 동기화가 필수입니다.',
      },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>2027 서울마라톤(2027.3.21 일) 우선접수 <strong>5월 18일(월) 10시 D-10</strong> 오픈 — 동마 멤버십·동마크루·번호표 반납·공식 클래스 수료·sub3 헌액자 5조건</li>
    <li>풀 본접수 6월 1~2일 그룹별(A→H 시간대 분리), 10K 본접수 6월 3일 19시 선착순 — <strong>기록 제출 5/11 15시까지</strong> 런카이브 필수</li>
    <li>5월에 동마 4개 대회(서울·서울레이스·공주백제·경주국제) 모두 접수 오픈 — 한 시즌 전체 캘린더로 페이스 잡기</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">🔥</span>
  <div class="callout-body">
    <p class="callout-title">우선접수 D-10 — 5조건 해당 여부부터 확인하세요</p>
    <p>5월 18일(월) 10시 오픈까지 10일. 우선접수에 해당된다면 본접수의 그룹별 경쟁 없이 안정적으로 풀코스를 확보할 수 있습니다. 본인이 5조건 중 하나라도 해당하는지 <strong>지금 즉시 확인</strong>하고, 동마클럽 회원가입·로그인·결제 수단 등록까지 마쳐두세요. 우선접수 한 번 놓치면 6월 1일 그룹별 본접수의 1초 경쟁으로 들어가야 합니다.</p>
  </div>
</div>

<h2>핵심 일정 한눈에</h2>

<div class="stat-grid">
  <div class="stat-card accent">
    <span class="stat-label">우선접수</span>
    <span class="stat-value">5/18 ~ 5/22</span>
    <span class="stat-sub">D-10 → D-14</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">풀 본접수</span>
    <span class="stat-value">6/1 ~ 6/2</span>
    <span class="stat-sub">그룹 A→H 시간대</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">10K 본접수</span>
    <span class="stat-value">6/3 (수)</span>
    <span class="stat-sub">19시 선착순</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">대회일</span>
    <span class="stat-value">2027.3.21</span>
    <span class="stat-sub">광화문 출발</span>
  </div>
</div>

<h2>지금부터 D-Day까지 타임라인</h2>

<div class="timeline">
  <div class="timeline-item active">
    <span class="timeline-date">2026.05.08 (목) — 오늘</span>
    <span class="timeline-title">우선접수 D-10 / 기록 제출 D-3</span>
    <p class="timeline-desc">우선접수 5조건 해당 여부 확인 + 런카이브에서 기록 제출 + 동마클럽 ID 확인</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.05.11 (월) 15시</span>
    <span class="timeline-title">기록 제출 마감 — 절대 늦지 말 것</span>
    <p class="timeline-desc">미제출 시 자동 H그룹 배정 (6/2 22시 본접수, 사실상 잔여석 없음)</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.05.18 (월) 10시</span>
    <span class="timeline-title">우선접수 오픈 + 골드패키지 시작</span>
    <p class="timeline-desc">5조건 해당자 안정적 슬롯 확보 — dongma.club</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.05.22 (금) 15시</span>
    <span class="timeline-title">우선접수 마감</span>
    <p class="timeline-desc">우선접수 미접수 시 6/1 그룹별 본접수로 진입</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.06.01~02</span>
    <span class="timeline-title">풀코스 본접수 — 그룹 A~H 시간대별</span>
    <p class="timeline-desc">A(6/1 19시) → H(6/2 22시) 1시간 간격 분리, 시계 동기화 필수</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.06.03 (수) 19시</span>
    <span class="timeline-title">10K 선착순 본접수 — 5분 컷 가능성</span>
    <p class="timeline-desc">PC 3중 백업 + 시계 동기화 + 결제 수단 등록 필수</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2027.03.21 (일)</span>
    <span class="timeline-title">대회 당일 — 광화문 출발</span>
    <p class="timeline-desc">8시 풀코스 출발 (예상), 잠실종합운동장 피니시</p>
  </div>
</div>

<h2>우선접수 5조건 — 해당되면 무조건 활용</h2>

<table>
  <thead>
    <tr><th>조건</th><th>해당 대상</th><th>증빙</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>① 동마클럽 멤버십</strong></td>
      <td>2026 동아마라톤 멤버십 가입자</td>
      <td>회원 ID</td>
    </tr>
    <tr>
      <td><strong>② 동마크루</strong></td>
      <td>2026 서울마라톤 동마크루 활동자</td>
      <td>크루 등록 정보</td>
    </tr>
    <tr>
      <td><strong>③ 번호표 반납자</strong></td>
      <td>2026 서울마라톤 번호표 반납 처리 완료자</td>
      <td>반납 확인 메일</td>
    </tr>
    <tr>
      <td><strong>④ 공식 클래스 수료</strong></td>
      <td>2026 서울마라톤 대비 공식 클래스(잠스트 등) 수료자</td>
      <td>수료증·등록 정보</td>
    </tr>
    <tr>
      <td><strong>⑤ Sub-3 헌액자</strong></td>
      <td>명예의 전당 + 2024~25 서울/공주/경주 또는 2026 서울 sub3</td>
      <td>기록증·헌액 정보</td>
    </tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">멤버십 신규 가입은 이미 늦었다</p>
    <p>2026 동마 멤버십은 이미 모집이 마감됐습니다. 2027 서울 우선접수에는 <strong>2026 멤버십 가입자만</strong> 해당됩니다. 다음 시즌(2027 멤버십)을 노리고 가입하면 2028 서울마라톤 우선접수 자격을 얻습니다. 멤버십은 보통 매년 12월~다음해 1월 모집되며, 가을 동마 시리즈(공주백제·경주국제) 참가권이 함께 포함됩니다.</p>
  </div>
</div>

<h2>풀 본접수 그룹별 시간 — 1초가 승부 가른다</h2>

<p>풀코스 본접수는 제출한 공인 기록 기반으로 A~H 그룹이 배정되고, 그룹별로 정해진 시각에만 접수 창이 열립니다.</p>

<table>
  <thead>
    <tr><th>날짜</th><th>그룹</th><th>접수 시각</th><th>대상 기록 (예상)</th></tr>
  </thead>
  <tbody>
    <tr><td rowspan="4">6/1 (월)</td><td><strong>A</strong></td><td>19시</td><td>Sub-2:50</td></tr>
    <tr><td>B</td><td>20시</td><td>Sub-3:00</td></tr>
    <tr><td>C</td><td>21시</td><td>Sub-3:15</td></tr>
    <tr><td>D</td><td>22시</td><td>Sub-3:30</td></tr>
    <tr><td rowspan="4">6/2 (화)</td><td>E</td><td>19시</td><td>Sub-3:45</td></tr>
    <tr><td>F</td><td>20시</td><td>Sub-4:00</td></tr>
    <tr><td>G</td><td>21시</td><td>Sub-4:30</td></tr>
    <tr><td><strong>H</strong></td><td>22시</td><td>기록 미제출 / Sub-4:30 외</td></tr>
  </tbody>
</table>

<p><small>※ 기록 그룹 기준은 2026 완주자 기록 분포에 따라 5월 중 동마클럽 공지로 확정됩니다. 위 표는 2026년 기준 추정.</small></p>

<h2>실전 접수 노하우 — PC 셋업부터 시계 동기화까지</h2>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">접수 D-Day 직전 체크리스트</p>
    <ol style="margin-top:8px;">
      <li><strong>유선랜 PC 우선</strong> — WiFi는 패킷 손실 가능성. 가능하면 데스크톱 + 모바일 동시 접속</li>
      <li><strong>브라우저 2개 이상</strong> — Chrome + 시크릿 창 또는 다른 브라우저로 동시 시도</li>
      <li><strong>로그인 미리</strong> — 접수 시각 30분 전 로그인 완료, 마이페이지 진입 확인</li>
      <li><strong>개인정보 자동입력</strong> — 이름·생년월일·연락처·주소 모두 브라우저 저장</li>
      <li><strong>결제 수단 2가지 등록</strong> — 카드 정보 + 카카오/네이버페이 둘 다 사전 등록</li>
      <li><strong>시계 동기화</strong> — <code>time.navyism.com</code>에서 1초 단위 동기화 (휴대폰 기본 시계 1~2초 오차 흔함)</li>
      <li><strong>접속 페이지 미리</strong> — 19시 정각 직전 접수 페이지 로딩 → F5 새로고침 대기</li>
    </ol>
  </div>
</div>

<h2>런카이브·동마클럽 ID — 제출 시스템 정밀 가이드</h2>

<p>2026년부터 2027 서울마라톤 기록 제출은 <strong>런카이브(runarchive.com)</strong> 시스템 통합으로 운영됩니다. 동마클럽 별도 시스템과 연계되므로 두 시스템 모두 회원가입·ID 입력이 필요합니다.</p>

<table>
  <thead>
    <tr><th>단계</th><th>해야 할 것</th><th>주의사항</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>1. 런카이브 회원가입</td>
      <td>runarchive.com 회원가입 + 이메일 인증</td>
      <td>자주 사용하는 이메일 사용 (인증번호 수신)</td>
    </tr>
    <tr>
      <td>2. 동마클럽 회원가입</td>
      <td>dongma.club 회원가입 → 마이페이지에서 동마클럽 ID 확인</td>
      <td>이미 가입돼 있으면 ID만 확인</td>
    </tr>
    <tr>
      <td>3. 기록 제출</td>
      <td>런카이브 → \'2027 서울마라톤\' 클릭 → 기록증 업로드</td>
      <td><strong>\'2027 서울마라톤\' 클릭 안 하면 참가용 기록으로 안 잡힘</strong></td>
    </tr>
    <tr>
      <td>4. 추가 정보 입력</td>
      <td>동마클럽 ID 정확히 입력</td>
      <td>ID 오타 시 기록 인정 안 됨</td>
    </tr>
    <tr>
      <td>5. 승인 확인</td>
      <td>제출 후 며칠 내 \'승인\' 처리 확인</td>
      <td>승인 안 되면 마감 전 재제출</td>
    </tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">가장 흔한 실수 — \'2027 서울마라톤\' 미클릭</p>
    <p>런카이브에서 기록을 제출할 때 반드시 <strong>\'2027 서울마라톤\' 항목을 클릭한 뒤 제출</strong>해야 참가용 기록으로 잡힙니다. 그냥 기록증만 업로드하면 시스템엔 등록되지만 2027 서울 참가 자격으로는 인정되지 않습니다. 5월 11일 마감 직전 이 실수를 발견해도 재처리 시간이 부족하니 지금 처리하세요.</p>
  </div>
</div>

<h2>5월 동마 4개 대회 캘린더 — 시즌 전체로 보기</h2>

<p>2027 서울마라톤만 신경 쓰면 동마 가을 시리즈를 놓칩니다. 동마클럽 멤버십(15만원)으로 4개 대회 패키지 운용이 정답:</p>

<table>
  <thead>
    <tr><th>대회</th><th>대회일</th><th>5월 접수</th><th>관련 글</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>2027 서울마라톤</strong></td>
      <td>2027.03.21 (일)</td>
      <td>우선 5/18~22 / 본 6/1~3</td>
      <td>이 글 (D-10 임박)</td>
    </tr>
    <tr>
      <td>2026 공주백제마라톤</td>
      <td>2026.09.20 (일)</td>
      <td>우선 5/11~15 / 본 5/21</td>
      <td><a href="/blog/2026-gongju-baekje-marathon">평지 입문 풀코스</a></td>
    </tr>
    <tr>
      <td>2026 경주국제마라톤</td>
      <td>2026.10.17 (토)</td>
      <td>본접수 5/26 19시</td>
      <td>(별도 발행 예정)</td>
    </tr>
    <tr>
      <td>2026 서울레이스 (하프·10K)</td>
      <td>2026.10.11 (일)</td>
      <td>본접수 5/27 19시·21시</td>
      <td>(별도 발행 예정)</td>
    </tr>
  </tbody>
</table>

<p>전체 26/27 시즌 일정 가이드와 그룹별 본접수 시스템의 더 자세한 설명은 <a href="/blog/2027-seoul-marathon-registration-schedule">2027 서울마라톤 접수 일정 완전 정리</a>에서 다뤘습니다.</p>

<h2>대회까지 9개월 — 훈련·장비 빌드업</h2>

<p>2027 서울마라톤은 2027년 3월 21일이라 접수 완료 후에도 <strong>약 9~10개월 준비 기간</strong>이 있습니다. 표준 빌드업 계획:</p>

<ul>
  <li><strong>6~8월: 베이스 빌딩</strong> — 주 30~50km 누적, LSD 25km 목표</li>
  <li><strong>9~10월: 가을 대회 페이스메이커</strong> — 공주백제·경주·춘천·JTBC로 실전 감각</li>
  <li><strong>11~12월: 본격 빌드업 시작</strong> — 16~20주 풀 마라톤 프로그램 시작</li>
  <li><strong>1~2월: 피크 마일리지</strong> — 주 70~90km, 30km LSD 4회 이상</li>
  <li><strong>3월 1~2주차: 테이퍼링</strong> — 거리 50% 감소, 회복 우선</li>
  <li><strong>3.21: D-Day</strong> — 광화문 출발</li>
</ul>

<table>
  <thead>
    <tr><th>준비 항목</th><th>추천</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>레이스 신발</strong></td>
      <td>대회 6~8주 전 구입 → 40~60km 길들이기. <a href="/best/best-carbon-plate-2025">카본 플레이트 비교</a> 또는 <a href="/recommend">맞춤 추천</a></td>
    </tr>
    <tr>
      <td>훈련용 데일리화</td>
      <td><a href="/shoes/nike-pegasus-42">페가수스 42</a>, <a href="/shoes/new-balance-1080-v15">1080 v15</a>, <a href="/shoes/asics-gt-2000-14">GT-2000 14</a></td>
    </tr>
    <tr>
      <td>에너지젤</td>
      <td>20km부터 30~40분 간격 — <a href="/blog/energy-gel-guide">에너지젤 가이드</a></td>
    </tr>
    <tr>
      <td>페이싱</td>
      <td><a href="/blog/marathon-pacing-strategy">마라톤 페이싱 전략</a> + 가을 대회 실전 검증</td>
    </tr>
  </tbody>
</table>

<h2>접수 체크리스트</h2>

<div class="cta-box">
  <h3>5월 18일 우선접수 D-10 — 지금 해야 할 것</h3>
  <ul>
    <li>✅ <strong>우선접수 5조건 확인</strong> — 멤버십·동마크루·번호표 반납·공식 클래스·sub3 헌액</li>
    <li>✅ <strong>기록 제출</strong> — 5월 11일(월) 15시까지 런카이브, \'2027 서울마라톤\' 클릭 필수</li>
    <li>✅ <strong>동마클럽 ID 확인</strong> — dongma.club 마이페이지</li>
    <li>✅ <strong>로그인·결제 수단 등록</strong> — 카드 + 간편결제 둘 다</li>
    <li>✅ <strong>시계 동기화 도구 북마크</strong> — time.navyism.com</li>
    <li>✅ <strong>5/18 10시 알람 설정</strong> — 우선접수 정시 오픈</li>
    <li>📱 <strong>접수 사이트</strong>: <a href="https://dongma.club/" target="_blank" rel="noopener">dongma.club</a> · <a href="https://runarchive.com/" target="_blank" rel="noopener">runarchive.com</a></li>
  </ul>
</div>

<p class="text-sm text-gray-500 mt-8">
※ 데이터 출처: <a href="https://dongma.club/" target="_blank" rel="noopener">동마클럽 공식</a>, <a href="https://www.instagram.com/seoul_marathon/" target="_blank" rel="noopener">@seoul_marathon</a>(런카이브·동마클럽 ID 시스템 공지), <a href="https://www.instagram.com/dongmaclub/" target="_blank" rel="noopener">@dongmaclub</a>(5월 접수 캘린더). 그룹별 기록 기준과 정확한 본접수 시각은 5월 중 동마클럽 공식 공지로 확정됩니다.
</p>
`,
  },
  {
    id: '2026-best-trail-running-shoes',
    slug: '2026-best-trail-running-shoes',
    title: '2026 트레일 러닝화 TOP 7 | 북한산·관악산 한국 산악 기준 카테고리별 베스트',
    description: '2026년 트레일 러닝화 7개 카테고리 베스트를 RunRepeat 랩 데이터 + 한국 공식 가격 + 북한산·관악산·도봉산 적용성으로 정리했습니다. 종합 베스트(테렉스 아그라빅 4)·충격 흡수(메타후지 트레일)·반발력(테크톤 X 3)·레이스(울트라플라이)·테크니컬(어질리티 피크 6)·속도(스피드 울트라)·가성비(젤 벤처 10) — 발볼 넓은 한국 러너 친화도까지 함께.',
    thumbnail: '/images/blog/2026-best-trail-running-shoes.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-08',
    category: 'guide' as const,
    readingTime: 11,
    tags: ['트레일 러닝화', '트레일 러닝', '2026 트레일화', '북한산 러닝', '관악산 러닝', '도봉산 러닝', '굿러너 스카이레이스', '산악 러닝화', '한국 트레일'],
    faqs: [
      {
        question: '로드 러닝화로 트레일 뛰면 안 되나요?',
        answer: '대모산·청계산·둘레길 같은 완만한 임도 5km는 로드 신발로도 가능하지만, 북한산·관악산·도봉산처럼 화강암 슬랩과 급경사 암릉이 있는 정식 트레일 코스에서는 위험합니다. 로드 신발은 그립 패턴이 부드러운 도로용이라 젖은 화강암에서 미끄러지고, 록 플레이트가 없어 돌·바위 밟을 때 발바닥 보호가 안 됩니다. 정식 트레일 입문이면 ASICS 젤 벤처 10(89,000원)부터 시작하는 게 안전합니다.',
      },
      {
        question: '발볼 넓은 한국 러너에게 맞는 트레일화는 뭔가요?',
        answer: '발볼 친화도 기준으로 추천 순서: ① Merrell 어질리티 피크 6 (한국 공식 와이드 SKU 출시, 199,000원) → ② Nike 울트라플라이 (실측 토박스 76.7mm, 와이드 옵션 불필요) → ③ ASICS 젤 벤처 10 (와이드 버전 한국 출시). 반대로 HOKA 테크톤 X 3, 아디다스 스피드 울트라, ASICS 메타후지 트레일은 토박스가 좁아 발볼 넓은 한국 러너에게는 부적합합니다. 와이드 옵션이 없는 모델은 무조건 오프라인 피팅 후 구매하세요.',
      },
      {
        question: '북한산·도봉산 처음인데 어떤 신발이 정답인가요?',
        answer: '북한산·도봉산은 화강암 슬랩과 바위 구간이 핵심이라 그립이 가장 중요합니다. 정답: Merrell 어질리티 피크 6 (Vibram Megagrip + Traction Lug, 와이드 옵션, 199,000원). 그 다음 적합 옵션은 Adidas 테렉스 아그라빅 4 (Continental 아웃솔). 반대로 Nike 울트라플라이(러그 3mm)와 Adidas 스피드 울트라(러그 2.5mm)는 슬랩에서 슬립 위험이 있어 비추천입니다.',
      },
      {
        question: '트레일 레이스 처음인데 어떤 신발이 좋나요?',
        answer: '굿러너 스카이레이스 시리즈(동해·계룡 등) 같은 임도+싱글트랙 혼합 코스 50K 이하라면 ① 카본 플레이트가 필요한 PB 도전 → HOKA 테크톤 X 3 (PEBA 100% + Vibram, 339,000원, 발볼 표준 이하 한정). ② 발볼 넓고 임도 비중 큰 코스 → Nike 울트라플라이 (ZoomX + 카본, 299,000원). 50K 이상 울트라는 충격 흡수 우선해 ASICS 메타후지 트레일(279,000원, 힐 스택 45mm)도 좋은 선택입니다.',
      },
      {
        question: '트레일 입문에 얼마짜리부터 시작하면 되나요?',
        answer: '입문 코스(대모산·청계산·둘레길) → 89,000원 ASICS 젤 벤처 10이 가성비 정답입니다. 정식 트레일(북한산·관악산) → 199,000원 머렐 어질리티 피크 6. 본격 레이스 → 299,000~339,000원대 카본 트레일화. 처음부터 카본 플레이트 트레일화를 살 필요는 없으며, 입문 단계에서는 그립과 발 보호만 갖춰도 충분합니다.',
      },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>2026년 트레일 러닝화 <strong>7개 카테고리 베스트</strong> — 종합·충격흡수·반발력·레이스·테크니컬·속도·가성비, RunRepeat 랩 + 한국 공식 가격 기준 정리</li>
    <li><strong>발볼 친화도 양극화</strong> — Merrell 어질리티 피크 6(와이드 정식)·Nike 울트라플라이(76.7mm)·젤 벤처 10(와이드 출시)는 발볼 넓은 한국 러너 적합 / HOKA 테크톤 X 3·아디다스 스피드 울트라·메타후지 트레일은 좁음 주의</li>
    <li><strong>한국 산악 정답</strong> — 북한산·도봉산 화강암 슬랩에는 Vibram Megagrip 우선(어질리티 피크 6), 굿러너 스카이레이스 임도 코스에는 카본 트레일화(테크톤 X 3·울트라플라이) 분리 운용</li>
  </ul>
</div>

<figure class="my-8">
  <img
    src="/images/blog/2026-best-trail-running-shoes.webp"
    alt="2026 트레일 러닝화 TOP 7 — 북한산·관악산 한국 산악 기준 카테고리별 베스트"
    class="w-full rounded-2xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">2026 트레일 러닝화 7개 카테고리 베스트 — 한국 산악 적용성 기준</figcaption>
</figure>

<h2>한국 트레일 러닝의 지형 — 신발 선택의 출발점</h2>

<p>한국 트레일 러닝은 외국과 결정적으로 다릅니다. 미국·유럽 트레일이 흙길과 임도 위주라면, 수도권 3대 산(<strong>북한산·관악산·도봉산</strong>)은 화강암 슬랩과 급경사 암릉이 핵심입니다. 어떤 신발을 신느냐에 따라 즐거운 산행과 미끄러져 다치는 경험이 갈립니다.</p>

<table>
  <thead>
    <tr><th>코스 유형</th><th>대표 지역</th><th>핵심 요구사항</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>입문 임도·둘레길</strong></td>
      <td>대모산·청계산·관악산 둘레길</td>
      <td>기본 그립 + 충격 흡수 (가성비 OK)</td>
    </tr>
    <tr>
      <td><strong>정식 트레일</strong></td>
      <td>북한산·도봉산·관악산 정상 코스</td>
      <td>Vibram Megagrip / Continental 같은 점착 고무 필수</td>
    </tr>
    <tr>
      <td><strong>스카이레이스</strong></td>
      <td>굿러너 스카이레이스 시리즈 (동해·계룡 등)</td>
      <td>임도+싱글트랙 복합, 카본 플레이트 효율</td>
    </tr>
    <tr>
      <td><strong>울트라 트레일</strong></td>
      <td>50K+ 산악 레이스</td>
      <td>충격 흡수 + 게이터 호환 + 록 플레이트</td>
    </tr>
  </tbody>
</table>

<h2>2026 카테고리별 베스트 7</h2>

<h3>🏆 1. 종합 베스트 — Adidas Terrex Agravic 4</h3>

<table>
  <thead>
    <tr><th colspan="2">스펙 요약</th></tr>
  </thead>
  <tbody>
    <tr><td>한국 가격</td><td>한국 공식가 미확인 (SS26 출시, 미국 $140 기준 약 19~22만원 예상)</td></tr>
    <tr><td>무게 / 드롭</td><td>260g / 8mm</td></tr>
    <tr><td>스택 (힐/포어풋)</td><td>36mm / 28mm</td></tr>
    <tr><td>아웃솔</td><td>Continental Rubber (러그 4-5mm)</td></tr>
    <tr><td>미드솔</td><td>Lightstrike 3 (단일 밀도, 소프트 튜닝)</td></tr>
    <tr><td>RunRepeat 점수</td><td>81/100</td></tr>
  </tbody>
</table>

<p><strong>강점</strong>: Continental 아웃솔이 젖은 노면 그립에서 신뢰성 높음. 260g 경량 + 36mm 힐 스택의 가성비 조합으로 데일리 산악 트레이닝에 무난한 올라운더.</p>
<p><strong>약점</strong>: 에너지 리턴이 평균 이하라 추진력 부족. 어퍼 내구성도 낮음(RunRepeat 토박스 내구성 1/5).</p>
<p><strong>한국 러너 노트</strong>: Continental 아웃솔이 북한산 화강암 슬랩·도봉산 암릉에서 안정적이지만, 와이드 옵션 미확인이라 발볼 넓은 러너는 오프라인 피팅 권장. 한국 공식 입점 시점은 2026년 봄~여름 예상.</p>

<h3>🛡 2. 충격 흡수 — ASICS Metafuji Trail</h3>

<table>
  <tbody>
    <tr><td><strong>한국 가격</strong></td><td>279,000원 (asics.co.kr / 굿러너컴퍼니)</td></tr>
    <tr><td>무게 / 드롭</td><td>258g / 10mm</td></tr>
    <tr><td>스택 (힐/포어풋)</td><td>45mm / 34mm</td></tr>
    <tr><td>아웃솔</td><td>ASICSGRIP (삼각형·화살형 패턴)</td></tr>
    <tr><td>미드솔</td><td>FF Blast+ (베이스) + FF Turbo (탑) 이중 폼</td></tr>
    <tr><td>RunRepeat 점수</td><td>88/100</td></tr>
  </tbody>
</table>

<p><strong>강점</strong>: 힐 스택 <strong>45mm</strong>로 트레일화 최상위권 충격 흡수. ASICSGRIP 아웃솔 점착력 최상. 258g 경량으로 이중 폼 빌드 대비 놀라운 무게.</p>
<p><strong>약점</strong>: FF Blast+ 베이스 레이어 때문에 에너지 리턴 제한적, 추진력 낮음. 토박스 좁고 어퍼 내구성 낮음(1/5).</p>
<p><strong>한국 러너 노트</strong>: 45mm 힐 스택이 북한산·관악산 장거리 하산 무릎 충격을 효과적으로 흡수하지만, 토박스가 좁아 <strong>발볼 넓은 한국 러너 다수에게 불리</strong>. 공식 와이드 옵션 없으므로 오프라인 착화 필수.</p>

<h3>⚡ 3. 반발력 — HOKA Tecton X 3</h3>

<table>
  <tbody>
    <tr><td><strong>한국 가격</strong></td><td>339,000원 (KREAM 발매가 / 굿러너컴퍼니)</td></tr>
    <tr><td>무게 / 드롭</td><td>275g / 7mm</td></tr>
    <tr><td>스택 (힐/포어풋)</td><td>38mm / 31mm</td></tr>
    <tr><td>아웃솔</td><td>Vibram Megagrip</td></tr>
    <tr><td>미드솔</td><td>PEBA 100% (프리미엄 슈퍼폼) + 카본 플레이트</td></tr>
    <tr><td>RunRepeat 점수</td><td>84/100</td></tr>
  </tbody>
</table>

<p><strong>강점</strong>: 순수 PEBA 폼 — 트레일 슈퍼슈즈 중 최상위 에너지 리턴. Vibram Megagrip 내구성·그립 모두 우수. 카본 플레이트 + MATRYX 어퍼로 장거리 레이스 효율성 최상.</p>
<p><strong>약점</strong>: 339,000원 트레일화 국내 최고가권. 토박스 협소 — RunRepeat가 "발볼 넓은 러너에 절대 부적합"으로 명시.</p>
<p><strong>한국 러너 노트</strong>: PEBA 폼 반발력은 굿러너 스카이레이스 업힐 구간에서 확실한 이점이나, <strong>좁은 토박스는 발볼 넓은 한국 러너에게 치명적</strong>. 발볼 표준 이하 러너에게만 권장.</p>

<h3>🏁 4. 레이스 — Nike Ultrafly</h3>

<table>
  <tbody>
    <tr><td><strong>한국 가격</strong></td><td>299,000원 (Nike Korea / KREAM)</td></tr>
    <tr><td>무게 / 드롭</td><td>299g / 12mm</td></tr>
    <tr><td>스택 (힐/포어풋)</td><td>37mm / 25mm</td></tr>
    <tr><td>아웃솔</td><td>Vibram Megagrip Litebase (풀 길이, 러그 3mm)</td></tr>
    <tr><td>미드솔</td><td>ZoomX (Pebax 계열) + 카본 포크 플레이트</td></tr>
    <tr><td>RunRepeat 점수</td><td>88/100</td></tr>
    <tr><td>토박스</td><td>76.7mm — 넓은 핏</td></tr>
  </tbody>
</table>

<p><strong>강점</strong>: ZoomX + 카본 포크 플레이트 — 완만한 트레일·임도·자갈길 에너지 리턴 우수. <strong>토박스 76.7mm 와이드 핏</strong>으로 발볼 넓은 한국 러너에게 희귀하게 유리한 트레일 슈퍼슈즈. Vibram Megagrip 그립력으로 그루밍된 트레일에서 신뢰성.</p>
<p><strong>약점</strong>: Vaporweave 어퍼 내구성 최하(1/5) — 암릉·가시덤불에 취약. 3mm 얕은 러그로 진흙·가파른 기술 지형에서 한계.</p>
<p><strong>한국 러너 노트</strong>: 발볼 넓은 한국 러너에게 추천 가능한 카본 트레일화. 단, <strong>3mm 얕은 러그로 화강암 슬랩·가파른 하산 많은 북한산·도봉산에는 부적합</strong>. 관악산 임도·완만한 싱글트랙·로드-투-트레일 혼합 대회에 적합.</p>

<h3>🪨 5. 테크니컬 지형 — Merrell Agility Peak 6</h3>

<table>
  <tbody>
    <tr><td><strong>한국 가격</strong></td><td>199,000원 (merrellkorea.co.kr, 와이드 SKU 동일가)</td></tr>
    <tr><td>무게 / 드롭</td><td>278g / 6mm (실측 11.5mm)</td></tr>
    <tr><td>스택 (힐/포어풋)</td><td>36mm / 25mm</td></tr>
    <tr><td>아웃솔</td><td>Vibram Megagrip + Traction Lug Technology</td></tr>
    <tr><td>미드솔</td><td>FloatPro EVA</td></tr>
    <tr><td>RunRepeat 점수</td><td>88/100</td></tr>
    <tr><td>와이드 옵션</td><td>한국 공식 와이드 SKU 출시 ✅</td></tr>
  </tbody>
</table>

<p><strong>강점</strong>: Vibram Megagrip + Traction Lug — 테크니컬 지형 그립 최상위. <strong>와이드 버전 한국 공식 출시</strong>로 발볼 넓은 러너에게 호재. 278g 경량 + 안정적 아치 지지로 힐 스트라이커 적합.</p>
<p><strong>약점</strong>: FloatPro EVA 폼 — 에너지 리턴·충격 흡수 모두 평균 이하. 실측 드롭 11.5mm로 브랜드 주장(6mm) 대비 괴리 큼.</p>
<p><strong>한국 러너 노트</strong>: <strong>북한산 인수봉 접근로·도봉산 바위 구간 그립은 국내 트레일화 중 최상위권</strong>. 와이드 옵션이 정식 출시된 유일한 Vibram 트레일화로 발볼 넓은 한국 러너에게 사실상 유일한 정답.</p>

<h3>💨 6. 속도형 — Adidas Terrex Agravic Speed Ultra</h3>

<table>
  <tbody>
    <tr><td><strong>한국 가격</strong></td><td>279,000원 (1세대 기준, 2세대 미확인)</td></tr>
    <tr><td>무게 / 드롭</td><td>259g / 0mm</td></tr>
    <tr><td>스택 (힐/포어풋)</td><td>31mm / 30mm</td></tr>
    <tr><td>아웃솔</td><td>Continental Rubber (풀 길이, 러그 2.5mm)</td></tr>
    <tr><td>미드솔</td><td>Lightstrike Pro (풀 길이, 카본 없음)</td></tr>
    <tr><td>RunRepeat 점수</td><td>89/100</td></tr>
  </tbody>
</table>

<p><strong>강점</strong>: 전족부 에너지 리턴 70.5% — 트레일화 최상위권 추진력. 259g 초경량 + Lightstrike Pro 조합. Continental 아웃솔로 건식 그립 우수.</p>
<p><strong>약점</strong>: 러그 2.5mm 매우 얕음 — 진흙·가파른 기술 지형에서 슬립 위험. <strong>토박스 70.5mm 협소 + 미드풋 매우 타이트</strong>로 발볼 넓은 러너 완전 배제.</p>
<p><strong>한국 러너 노트</strong>: 0mm 드롭 + 2.5mm 러그로 북한산·관악산 테크니컬 지형에는 부적합. 반면 <strong>굿러너 스카이레이스 임도 구간·그루밍된 평탄 트레일에서는 국내 트레일화 최상위 스피드</strong>. 발볼 좁은 러너 한정 추천.</p>

<h3>💰 7. 가성비 — ASICS Gel Venture 10</h3>

<table>
  <tbody>
    <tr><td><strong>한국 가격</strong></td><td><strong>89,000원</strong> (asics.co.kr / 무신사)</td></tr>
    <tr><td>무게 / 드롭</td><td>322g / 12mm</td></tr>
    <tr><td>스택 (힐/포어풋)</td><td>35mm / 23mm</td></tr>
    <tr><td>아웃솔</td><td>세그먼트 투피스 고무 (화살형 러그 3.7mm)</td></tr>
    <tr><td>미드솔</td><td>Amplifoam (소프트 리포뮬레이션)</td></tr>
    <tr><td>RunRepeat 점수</td><td>84/100</td></tr>
    <tr><td>와이드 옵션</td><td>D(스탠다드)·와이드 한국 출시 ✅</td></tr>
  </tbody>
</table>

<p><strong>강점</strong>: <strong>89,000원 — 트레일화 국내 최저가권</strong>. 트레킹·입문용 가성비 최고. 내구성 우수. 와이드 버전 한국 출시로 발볼 넓은 입문자에게 옵션 존재.</p>
<p><strong>약점</strong>: 322g 무거움 — 동급 대비 최중량. 저온에서 미드솔 경도 42% 상승(겨울 산행 쿠션감 저하).</p>
<p><strong>한국 러너 노트</strong>: <strong>89,000원으로 트레일 진입 장벽을 크게 낮춘 선택지</strong>. 북한산·관악산 정식 트레일보다는 청계산·대모산·둘레길 수준 입문 코스에 적합. 트레킹화 대체로도 활용 가능.</p>

<h2>한 눈에 보는 7대 비교표</h2>

<table>
  <thead>
    <tr><th>모델</th><th>카테고리</th><th>한국가</th><th>무게</th><th>한국 발볼</th><th>한국 산악 적합성</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Adidas Terrex Agravic 4</td>
      <td>종합 베스트</td>
      <td>미확인</td>
      <td>260g</td>
      <td>표준</td>
      <td>북한산 OK</td>
    </tr>
    <tr>
      <td>ASICS Metafuji Trail</td>
      <td>충격 흡수</td>
      <td>279,000원</td>
      <td>258g</td>
      <td>좁음 ⚠️</td>
      <td>장거리 하산 강점</td>
    </tr>
    <tr>
      <td>HOKA Tecton X 3</td>
      <td>반발력</td>
      <td>339,000원</td>
      <td>275g</td>
      <td>좁음 ⚠️</td>
      <td>스카이레이스 임도 강점</td>
    </tr>
    <tr>
      <td>Nike Ultrafly</td>
      <td>레이스</td>
      <td>299,000원</td>
      <td>299g</td>
      <td>넓음 ✅</td>
      <td>임도·완만 트레일 한정</td>
    </tr>
    <tr>
      <td><strong>Merrell Agility Peak 6</strong></td>
      <td><strong>테크니컬</strong></td>
      <td><strong>199,000원</strong></td>
      <td>278g</td>
      <td><strong>와이드 정식 ✅</strong></td>
      <td><strong>북한산·도봉산 정답</strong></td>
    </tr>
    <tr>
      <td>Adidas Speed Ultra</td>
      <td>속도형</td>
      <td>279,000원</td>
      <td>259g</td>
      <td>좁음 ⚠️</td>
      <td>스카이레이스 임도 한정</td>
    </tr>
    <tr>
      <td>ASICS Gel Venture 10</td>
      <td>가성비</td>
      <td>89,000원</td>
      <td>322g</td>
      <td>와이드 ✅</td>
      <td>둘레길·입문 OK</td>
    </tr>
  </tbody>
</table>

<h2>트레일 러닝화 핵심 스펙 5가지 — 알고 사면 후회 없다</h2>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">로드 러닝화에 없는 5가지 기능</p>
    <p>일반 러닝화 가이드에서 보던 "쿠션·반발력·드롭" 외에 트레일에서만 필요한 5가지를 알아두면 구매 결정이 훨씬 명확해집니다.</p>
  </div>
</div>

<h3>1. Lug Depth (러그 깊이, mm)</h3>
<p>아웃솔 돌기의 깊이로 지형 파고들기 능력을 결정합니다. <strong>2-3mm는 완만한 임도·자갈길</strong>, <strong>4-5mm 이상은 진흙·급경사 기술 지형</strong>에 적합. 북한산·도봉산 암릉에서는 러그 깊이보다 <strong>고무 재질(Vibram Megagrip·Continental)</strong>이 더 중요합니다.</p>

<h3>2. Rock Plate (록 플레이트)</h3>
<p>미드솔 내부에 삽입된 딱딱한 플레이트(나일론·탄소섬유)로 돌·바위 밟을 때 발바닥을 보호합니다. 카본 플레이트와 다른 개념으로, <strong>록 플레이트는 추진력이 아닌 바닥 보호가 목적</strong>. 한국 화강암 지형에서는 록 플레이트 유무가 발바닥 피로도에 직접 영향을 줍니다.</p>

<h3>3. Gusseted Tongue (구쎄드 텅)</h3>
<p>신발 혀(텅)와 어퍼 측면이 분리되지 않고 봉제된 구조로, <strong>모래·자갈·나뭇잎 등 이물질이 신발 내부로 유입되는 것을 차단</strong>. 트레일에서 게이터(스패츠) 착용이 번거로운 러너에게 중요합니다.</p>

<h3>4. Gaiter Compatibility (게이터 호환성)</h3>
<p>발목 스패츠를 신발에 부착할 수 있는 후크·루프 구조의 유무. 장거리 울트라 트레일에서 이물질 유입 방지에 필수. <strong>HOKA Tecton X 3처럼 전용 게이터 어태치먼트를 제공하는 모델</strong>이 편의성이 높습니다.</p>

<h3>5. Drainage (배수 구조)</h3>
<p>물이 신발 내부로 들어왔을 때 빠져나가는 구멍·메시 구조. 계곡 도하나 장마철 트레일에서 중요. <strong>방수(GTX) 모델은 배수가 불리</strong>해 물이 들어오면 빠지지 않으므로, 한국 여름 트레일에서는 <strong>비방수+고배수</strong>가 실용적인 경우가 많습니다.</p>

<h2>상황별 추천 — 어떤 신발을 사야 하나</h2>

<table>
  <thead>
    <tr><th>당신의 상황</th><th>추천 모델</th><th>이유</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>처음 트레일 경험 (대모산·청계산·둘레길)</td>
      <td>ASICS Gel Venture 10 (89,000원)</td>
      <td>가성비 + 와이드 옵션, 진입 장벽 최저</td>
    </tr>
    <tr>
      <td>북한산·도봉산 암릉 도전</td>
      <td>Merrell Agility Peak 6 (199,000원)</td>
      <td>Vibram Megagrip + 와이드 정식</td>
    </tr>
    <tr>
      <td>발볼 넓은 한국 러너 + 임도 위주</td>
      <td>Nike Ultrafly (299,000원)</td>
      <td>토박스 76.7mm + ZoomX 카본</td>
    </tr>
    <tr>
      <td>굿러너 스카이레이스 PB 도전 (좁은 발폭)</td>
      <td>HOKA Tecton X 3 (339,000원)</td>
      <td>PEBA 100% + 카본, 임도 반발력 최상</td>
    </tr>
    <tr>
      <td>50K+ 울트라 트레일</td>
      <td>ASICS Metafuji Trail (279,000원)</td>
      <td>45mm 힐 스택, 충격 흡수 최상</td>
    </tr>
    <tr>
      <td>완만 트레일 스피드 훈련 (좁은 발폭)</td>
      <td>Adidas Speed Ultra (279,000원)</td>
      <td>0드롭 + 70.5% 에너지 리턴</td>
    </tr>
    <tr>
      <td>한 켤레로 다 해보고 싶다</td>
      <td>Adidas Terrex Agravic 4 (한국 입점 시)</td>
      <td>Continental + 260g 올라운더</td>
    </tr>
  </tbody>
</table>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">한 켤레로 시작하면 어떤 게 정답?</p>
    <p>한국 러너 90%에게 정답은 <strong>Merrell Agility Peak 6 (199,000원, 와이드 옵션)</strong>입니다. 이유: ① 북한산·도봉산 암릉부터 둘레길까지 모든 한국 트레일을 커버하는 Vibram Megagrip, ② 발볼 넓은 한국 러너에게 사실상 유일한 와이드 SKU 정식 출시, ③ 199,000원으로 도전화·메인화 양쪽 포지셔닝 모두 가능. 카본 플레이트 트레일화는 본격 레이스에 들어선 다음 단계입니다.</p>
  </div>
</div>

<h2>한국 트레일 입문 코스 가이드</h2>

<table>
  <thead>
    <tr><th>입문 단계</th><th>추천 코스</th><th>적합 신발</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1단계 — 둘레길</strong></td>
      <td>북한산·관악산 둘레길, 한강 둔치 자갈길</td>
      <td>젤 벤처 10 또는 일반 러닝화</td>
    </tr>
    <tr>
      <td><strong>2단계 — 임도</strong></td>
      <td>대모산·청계산 임도, 안산 자락길</td>
      <td>젤 벤처 10, 어질리티 피크 6</td>
    </tr>
    <tr>
      <td><strong>3단계 — 정식 트레일</strong></td>
      <td>관악산 정상, 도봉산 우이암</td>
      <td>어질리티 피크 6, 아그라빅 4</td>
    </tr>
    <tr>
      <td><strong>4단계 — 테크니컬</strong></td>
      <td>북한산 백운대, 인수봉 접근로</td>
      <td>어질리티 피크 6 (Vibram 필수)</td>
    </tr>
    <tr>
      <td><strong>5단계 — 스카이레이스</strong></td>
      <td>굿러너 동해·계룡 스카이레이스</td>
      <td>테크톤 X 3, 울트라플라이</td>
    </tr>
  </tbody>
</table>

<h2>로드 러닝화에서 트레일로 — 어떻게 갈아탈까</h2>

<p>로드 러닝화로 1년 정도 달리고 트레일을 시작하려는 러너가 가장 자주 하는 실수가 두 가지입니다.</p>

<ul>
  <li><strong>실수 1: 카본 트레일화부터 산다</strong> — Tecton X 3, Ultrafly 같은 카본 트레일화는 본격 레이스용입니다. 입문 단계에서 사면 가격(30만원+)도 부담이고, 카본 플레이트가 입문 러너의 발목·종아리 부하를 키웁니다. <strong>입문은 99,000원 젤 벤처 10이나 199,000원 어질리티 피크 6부터.</strong></li>
  <li><strong>실수 2: 발볼 좁은 신발을 사이즈 업으로 해결하려 한다</strong> — 메타후지 트레일·테크톤 X 3 같은 좁은 토박스 모델을 한 사이즈 키워도 발볼 압박은 해결되지 않습니다. 트레일은 하산 시 발이 앞으로 쏠려 발가락 까지는 부상이 흔한데, <strong>토박스 너비가 안 맞으면 그게 더 심해집니다</strong>. 와이드 SKU가 있는 모델로 가세요.</li>
</ul>

<p>로드 러닝과 다른 점도 미리 알아두면 좋습니다. <a href="/blog/running-shoe-terminology-guide">러닝화 용어 가이드</a>에서 다룬 미드솔·아웃솔 개념은 트레일에서도 동일하지만, 트레일 추가로 위에서 설명한 <strong>러그·록 플레이트·구쎄드 텅·게이터·배수 5가지</strong>를 추가로 보세요.</p>

<h2>마무리 — 한국 러너의 트레일 첫걸음</h2>

<p>2026년 트레일 러닝 시장은 어느 때보다 다양해졌습니다. 89,000원 입문화부터 339,000원 카본 슈퍼슈즈까지, 본인의 단계와 발 특성에 맞는 신발을 고르는 게 핵심입니다.</p>

<p>한국 러너에게 가장 중요한 두 가지를 다시 짚으면:</p>

<ul>
  <li><strong>발볼 친화도</strong> — Merrell 어질리티 피크 6 / Nike 울트라플라이 / 젤 벤처 10이 와이드 친화 / 메타후지·테크톤 X 3·스피드 울트라는 좁음 주의</li>
  <li><strong>한국 산악 그립</strong> — 북한산·도봉산 화강암에서는 Vibram Megagrip 또는 Continental 점착 고무 우선, 얕은 러그(2-3mm) 모델은 임도·완만 트레일 한정</li>
</ul>

<p>다음 단계는 본인의 발에 맞는 모델을 직접 신어보는 것. 로드 러닝화도 동일한 원칙이 적용되니 <a href="/recommend">맞춤 신발 추천</a>으로 본인 발볼·아치 타입을 확인해두면 트레일 신발 고를 때도 도움이 됩니다.</p>

<p class="text-sm text-gray-500 mt-8">
※ 데이터 출처: <a href="https://runrepeat.com" target="_blank" rel="noopener">RunRepeat 랩 테스트</a>(7개 모델 모두), <a href="https://believeintherun.com" target="_blank" rel="noopener">Believe in the Run</a>, Road Trail Run, 머렐 코리아·굿러너컴퍼니·KREAM·무신사·Nike Korea 한국 공식 가격, <a href="https://www.instagram.com/runninglife_korea/p/DXyJkIljzdd/" target="_blank" rel="noopener">@runninglife_korea TOP 7 가이드(2026-04-30)</a>. Adidas Terrex Agravic 4 한국 공식가는 SS26 출시 후 유통 확정 시점에 추가 확인 예정.
</p>
`,
  },
  {
    id: '2026-daecheongho-marathon',
    slug: '2026-daecheongho-marathon',
    title: '2026 청원생명쌀 대청호마라톤 10km·5km D-4 | 풀·하프 매진, 기안84의 호수 코스 마지막 슬롯',
    description: '제24회 청원생명쌀 대청호마라톤(10/17 토) 풀·하프 이미 매진. 10km는 5월 11일(월), 5km는 5월 14일(목) 오전 10시 순차 오픈됩니다. 대청호 호수 둘레 + 청남대 통과 코스, 누적 고도 485m 중상급 난이도. 기안84 효과로 작년 6,500명 역대 최대, 청원생명쌀 4kg 기념품 — 2026 가을 첫 메달의 정답.',
    thumbnail: '/images/blog/2026-daecheongho-marathon.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-07',
    category: 'news' as const,
    readingTime: 7,
    tags: ['대청호마라톤', '청원생명쌀 대청호', '청주 마라톤', '충북 마라톤', '기안84 마라톤', '가을 마라톤', '호수 마라톤', '대회 일정'],
    event: {
      name: '제24회 청원생명쌀 대청호마라톤대회',
      startDate: '2026-10-17T08:40:00+09:00',
      location: {
        name: '문의체육공원 (대청호반 일원)',
        address: '충북 청주시 상당구 문의면 미천리 138-1',
      },
      organizer: '청주시체육회 (주관: MBC충북·K-water 대청지사)',
      url: 'https://race.cjsports.or.kr/',
      offers: [
        { name: '단축코스 (10km, 5/11 10:00 오픈)', priceKrw: 45000, availabilityEnds: '2026-06-12', url: 'https://race.cjsports.or.kr/' },
        { name: '건강코스 (5km, 5/14 10:00 오픈)', priceKrw: 25000, availabilityEnds: '2026-06-12', url: 'https://race.cjsports.or.kr/' },
      ],
    },
    faqs: [
      {
        question: '풀코스랑 하프는 정말 매진된 건가요?',
        answer: '5월 4일에 풀코스(800명), 5월 7일에 하프코스(1,400명) 접수가 순차 오픈됐고 인스타 @runninglife_korea 게시물 기준 "전코스 매진"으로 안내됐습니다. 정확한 잔여 여부는 race.cjsports.or.kr에서 확인하거나 대회 사무국(043-279-8029)에 문의하세요. 매진이 확정이라면 10km(5/11 오픈)·5km(5/14 오픈)가 2026 가을 대청호 메달의 마지막 기회입니다.',
      },
      {
        question: '10km·5km도 어렵다는 게 사실인가요?',
        answer: '대청호마라톤 풀코스는 누적 획득고도 485m로 전국 마라톤 중 두 번째로 어려운 수준이지만, 10km·5km는 코스 일부만 사용하므로 누적 고도가 훨씬 낮습니다. 다만 호수 둘레 도로의 특성상 완전 평지는 아니며 짧은 오르막이 포함됩니다. 5km는 입문자도 무난, 10km는 평지 10km PB 대비 5-10분 정도 늦어진다고 보면 됩니다.',
      },
      {
        question: '기안84가 정말 참가하나요?',
        answer: 'MBC \'나 혼자 산다\'에서 2023년 대청호마라톤 풀코스를 4시간 47분에 완주하는 모습이 방영된 이후 대회의 전국 인지도가 급상승했습니다. 2026년 공식 홍보대사 임명 여부는 공식 공지로는 확인되지 않지만, 인스타그램 홍보에 그의 이름이 등장합니다. 기안84의 출연 여부와 별개로 \'나 혼자 산다 코스\'라는 정체성으로 자리 잡은 대회입니다.',
      },
      {
        question: '서울에서 대청호까지 어떻게 가나요?',
        answer: 'KTX 오송역(서울역에서 약 50분)에서 청주 시내로 환승 후 차량으로 약 30분, 또는 청주 도착 후 택시로 문의면까지 20-30분이 가장 빠릅니다. 자가용은 남청주IC 또는 신탄진IC에서 진입해 호반 주차장·문의중학교 임시주차장을 이용할 수 있지만, 대회 당일 8시-14시 일부 도로 통제가 있어 새벽 도착 또는 전날 청주 시내 숙박이 안전합니다. 셔틀버스 운영 여부는 대회 1개월 전 공지로 확인.',
      },
      {
        question: '10km·5km에 어떤 신발을 신어야 하나요?',
        answer: '대청호 둘레 아스팔트·포장 수변도로 + 짧은 오르막이 섞인 환경에서는 데일리 트레이너가 정답입니다. 10km는 페가수스 42·1080 v15·GT-2000 14처럼 쿠션과 안정성이 균형 잡힌 모델, 5km는 노바블라스트 5·페가수스 플러스 같은 경량 슈퍼 트레이너도 OK. 카본 레이싱화는 짧은 거리·평지가 아니라 호수 굴곡 코스에서는 효과 대비 부담이 큽니다. 발볼 넓다면 와이드 옵션이 정식 출시된 모델 우선.',
      },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>제24회 청원생명쌀 대청호마라톤 — 2026년 10월 17일(토) 충북 청주 문의체육공원 출발, 대청호 호수 둘레 + <strong>청남대 통과</strong> 코스</li>
    <li>풀(5/4 오픈)·하프(5/7 오픈) 이미 매진 → <strong>10km는 5월 11일(월), 5km는 5월 14일(목) 오전 10시</strong> 순차 오픈, 마감일 6월 12일</li>
    <li>기안84 \'나 혼자 산다\' 효과로 작년 <strong>역대 최대 6,500명</strong> 참가, 청원생명쌀 4kg + 완주 메달 + 비빔밥·떡 현장 제공</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">🔥</span>
  <div class="callout-body">
    <p class="callout-title">10km·5km D-4 / D-7 — 2026 가을 첫 메달 마지막 기회</p>
    <p>풀코스(800명)와 하프코스(1,400명)는 5월 4일·5월 7일 오픈과 함께 빠르게 매진됐습니다. 남은 슬롯은 단축코스(10km, 2,000명) <strong>5월 11일(월) 오전 10시</strong>와 건강코스(5km, 1,800명) <strong>5월 14일(목) 오전 10시</strong>입니다. 기안84 효과로 인기가 매년 급상승 중이라 10km는 빠르게 마감될 가능성이 높습니다. 알람 설정해두세요.</p>
  </div>
</div>

<h2>핵심 정보 한눈에</h2>

<div class="stat-grid">
  <div class="stat-card accent">
    <span class="stat-label">대회일</span>
    <span class="stat-value">10/17 (토)</span>
    <span class="stat-sub">8:40 출발</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">10km 오픈</span>
    <span class="stat-value">5/11 (월)</span>
    <span class="stat-sub">오전 10:00</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">5km 오픈</span>
    <span class="stat-value">5/14 (목)</span>
    <span class="stat-sub">오전 10:00</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">접수 마감</span>
    <span class="stat-value">6/12 (금)</span>
    <span class="stat-sub">또는 정원 마감 시</span>
  </div>
</div>

<h2>접수 일정 타임라인</h2>

<div class="timeline">
  <div class="timeline-item">
    <span class="timeline-date">2026.05.04 (월) — 완료</span>
    <span class="timeline-title">풀코스 800명 매진</span>
    <p class="timeline-desc">참가비 45,000원(학생 30,000원), 제한시간 5시간</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.05.07 (목) — 완료</span>
    <span class="timeline-title">하프코스 1,400명 매진</span>
    <p class="timeline-desc">참가비 45,000원(학생 30,000원), 제한시간 3시간</p>
  </div>
  <div class="timeline-item active">
    <span class="timeline-date">2026.05.11 (월) — D-4</span>
    <span class="timeline-title">단축코스 10km 오픈 (잔여 슬롯)</span>
    <p class="timeline-desc">정원 2,000명, 참가비 45,000원(학생 30,000원), 제한시간 2시간</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.05.14 (목) — D-7</span>
    <span class="timeline-title">건강코스 5km 오픈 (잔여 슬롯)</span>
    <p class="timeline-desc">정원 1,800명, 참가비 25,000원(학생 15,000원)</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.06.12 (금)</span>
    <span class="timeline-title">전체 접수 최종 마감</span>
    <p class="timeline-desc">또는 정원 채워짐 시 조기 마감. 접수 후 7일 내 입금 필수</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.10.17 (토)</span>
    <span class="timeline-title">대회 당일 — 문의체육공원 7:30 집결</span>
    <p class="timeline-desc">10월 중순 충북 평균 15-20도, 호수 단풍 절정</p>
  </div>
</div>

<h2>종목별 참가비·정원·매진 현황</h2>

<table>
  <thead>
    <tr><th>종목</th><th>거리</th><th>정원</th><th>참가비 (일반/학생)</th><th>제한시간</th><th>현황</th></tr>
  </thead>
  <tbody>
    <tr style="opacity:0.5;">
      <td>풀코스</td>
      <td>42.195km</td>
      <td>800명</td>
      <td>45,000 / 30,000원</td>
      <td>5시간</td>
      <td><span class="badge-warning">매진</span></td>
    </tr>
    <tr style="opacity:0.5;">
      <td>하프코스</td>
      <td>21.0975km</td>
      <td>1,400명</td>
      <td>45,000 / 30,000원</td>
      <td>3시간</td>
      <td><span class="badge-warning">매진</span></td>
    </tr>
    <tr>
      <td><strong>단축코스</strong></td>
      <td><strong>10km</strong></td>
      <td><strong>2,000명</strong></td>
      <td><strong>45,000 / 30,000원</strong></td>
      <td>2시간</td>
      <td><span class="badge-positive">5/11 오픈</span></td>
    </tr>
    <tr>
      <td><strong>건강코스</strong></td>
      <td><strong>5km</strong></td>
      <td><strong>1,800명</strong></td>
      <td><strong>25,000 / 15,000원</strong></td>
      <td>—</td>
      <td><span class="badge-positive">5/14 오픈</span></td>
    </tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">10km도 45,000원? — 청원생명쌀 4kg 포함</p>
    <p>10km 참가비가 풀·하프와 동일한 45,000원으로 다소 비싸 보일 수 있는데, <strong>완주자 전원에게 청원생명쌀 4kg + 대회 티셔츠 + 완주 메달</strong>이 제공됩니다. 시중 청원생명쌀 4kg 시세(약 25,000원) + 기념품 가치를 고려하면 사실상 가성비 가을 마라톤 중 최상위입니다. 5km는 25,000원으로 입문자·가족 단위 적합.</p>
  </div>
</div>

<h2>왜 대청호인가 — 호수 + 청남대 + 기안84</h2>

<p>대청호마라톤은 대청호 호수 둘레와 <strong>청남대(전직 대통령 전용 별장)</strong>를 통과하는 풍경 코스로 유명합니다. 충북 청주시 문의면 일대에서 열리며, 시간대(8:40 출발) 기준 호반 안개와 가을 단풍이 절정에 이르는 구간을 지납니다.</p>

<p>2023년 MBC \'나 혼자 산다\'에서 기안84가 풀코스를 4시간 47분에 완주하는 모습이 방영된 이후 인지도가 폭발적으로 증가했습니다. 2024년 5천 명대 → 2025년 6,500명(역대 최대) → 2026년 풀·하프 조기 매진으로 이어지는 흐름입니다.</p>

<table>
  <thead>
    <tr><th>특징</th><th>대청호마라톤</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>코스 풍경</strong></td><td>대청호 수면, 청남대, 코스모스 꽃길, 가을 단풍</td></tr>
    <tr><td><strong>풀코스 난이도</strong></td><td>누적 고도 485m — 전국 두 번째 수준 (안동 700m보다는 낮지만 평지 대회 대비 2배)</td></tr>
    <tr><td><strong>10km·5km 난이도</strong></td><td>풀·하프 코스 일부 사용으로 짧은 오르막 포함, 입문자 도전 가능</td></tr>
    <tr><td><strong>기념품</strong></td><td>청원생명쌀 4kg(10km 이상) + 티셔츠 + 완주 메달</td></tr>
    <tr><td><strong>현장 먹거리</strong></td><td>청원생명쌀 비빔밥, 생명쌀떡, 김밥</td></tr>
    <tr><td><strong>매년 개최 시기</strong></td><td>10월 셋째 주 토요일 (가을 단풍 절정)</td></tr>
  </tbody>
</table>

<h2>10km·5km 코스 미리 보기</h2>

<p>풀코스가 누적 고도 485m로 난도가 높은 반면, <strong>10km·5km는 호수 둘레 진입부와 회귀 구간 위주</strong>로 운영됩니다. 풀코스의 격렬한 업힐 구간(전반 17km)은 포함되지 않지만, 호반 도로 특성상 완전 평지는 아닙니다.</p>

<ul>
  <li><strong>5km</strong> — 문의체육공원 출발·복귀 호반 짧은 루프. 입문자도 안전하게 완주 가능. 호수 풍경 충분.</li>
  <li><strong>10km</strong> — 호반 둘레 일부 + 청남대 진입로 인접 구간. 짧은 오르막 1-2회 포함. 평지 10km PB 대비 5-10분 늦어진다고 보면 적정.</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">10월 17일 충북 날씨</p>
    <p>10월 중순 충북 평균 기온 15-20도, 대청호 인근은 새벽 안개가 자주 끼지만 대회 시간(8:40 출발)에는 해소됩니다. 출발 시 13-16도, 종료 시 18-21도 정도로 가을 마라톤 황금 조건입니다. 호수 풍경 + 가을 단풍 + 적정 기온 = 사진 찍기 좋은 환경.</p>
  </div>
</div>

<h2>10월 대청호 — 어떤 신발을 신을까</h2>

<p>호반 아스팔트·포장 수변도로 + 짧은 오르막 환경에서는 <strong>데일리 트레이너 또는 경량 슈퍼 트레이너</strong>가 정답입니다. 종목별 추천:</p>

<table>
  <thead>
    <tr><th>종목 / 목표</th><th>추천 카테고리</th><th>예시 모델</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>10km (적정 페이스)</strong></td>
      <td>쿠션 데일리 트레이너</td>
      <td><a href="/shoes/nike-pegasus-42">나이키 페가수스 42</a>, <a href="/shoes/new-balance-1080-v15">뉴발란스 1080 v15</a>, <a href="/shoes/asics-gt-2000-14">GT-2000 14</a></td>
    </tr>
    <tr>
      <td><strong>10km (PB 도전)</strong></td>
      <td>경량 슈퍼 트레이너</td>
      <td><a href="/shoes/nike-pegasus-plus">나이키 페가수스 플러스</a>, <a href="/shoes/hoka-mach-x-3">호카 마하 X 3</a>, <a href="/shoes/asics-superblast-2">슈퍼블라스트 2</a></td>
    </tr>
    <tr>
      <td><strong>5km (가족 단위)</strong></td>
      <td>일반 데일리</td>
      <td><a href="/shoes/asics-novablast-5">노바블라스트 5</a>, <a href="/shoes/saucony-kinvara-16">쏘니 킨바라 16</a></td>
    </tr>
    <tr>
      <td><strong>입문 러너 (첫 메달)</strong></td>
      <td>안정성+쿠션</td>
      <td><a href="/shoes/asics-gel-kayano-32">ASICS 카야노 32</a>, <a href="/shoes/brooks-glycerin-22">브룩스 글리세린 22</a></td>
    </tr>
  </tbody>
</table>

<p>발볼이 넓다면 와이드 옵션이 정식 출시된 페가수스 42·1080 v15·GT-2000 14 우선. <a href="/recommend">맞춤 신발 추천</a>에서 본인 발볼·아치·무게에 맞는 모델을 1분 안에 확인할 수 있습니다.</p>

<h2>교통·숙박</h2>

<table>
  <thead>
    <tr><th>수단</th><th>경로</th><th>소요 시간</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>KTX (권장)</strong></td>
      <td>서울역 → 오송역(약 50분) → 청주 시내 환승 → 문의체육공원 차량 30분</td>
      <td>약 1시간 50분</td>
    </tr>
    <tr>
      <td>고속버스</td>
      <td>동서울·강남 → 청주 시외터미널 → 택시 약 30분</td>
      <td>약 2시간 30분</td>
    </tr>
    <tr>
      <td>자가용</td>
      <td>경부고속도로 → 남청주IC 또는 신탄진IC → 문의면</td>
      <td>약 2시간</td>
    </tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">🚗</span>
  <div class="callout-body">
    <p class="callout-title">대회 당일 도로 통제 — 새벽 도착 또는 전날 숙박</p>
    <p>대회 당일 오전 8시-오후 2시 일부 도로가 통제되며, 호반 주차장·문의중학교 임시주차장은 새벽에 빠르게 만차됩니다. 7시 30분 집결을 고려하면 <strong>전날 청주 시내 숙박</strong>이 안전합니다. 청주 시내 호텔 + 대회 후 청남대 관광 + 청주 한옥마을 1박 2일 일정도 추천. 셔틀버스 운영 여부는 9월 중순 race.cjsports.or.kr 공지로 확인.</p>
  </div>
</div>

<h2>2025년 대회 후기</h2>

<p>2025년 제23회 대청호마라톤은 <strong>역대 최대 6,500명</strong>이 참가하며 성황리에 마무리됐습니다. 후기 공통점:</p>

<ul>
  <li>"호수 풍경 + 가을 단풍 풍경 = 사진 천국, 완주 만족도 매우 높음"</li>
  <li>"풀코스 오르막 구간 난도 높지만 도전 욕구 자극"</li>
  <li>"청원생명쌀 4kg + 비빔밥 + 떡 = 가성비 마라톤 최상위"</li>
  <li>"10km라도 호반 짧은 오르막 있어 평지 10km보다 약간 어려움"</li>
  <li>"기안84 효과로 가족 단위 참가자 다수, 분위기 친근"</li>
</ul>

<h2>접수 체크리스트</h2>

<div class="cta-box">
  <h3>10km(5/11)·5km(5/14) 오전 10시 알람 + 준비</h3>
  <ul>
    <li>✅ <strong>스마트폰 알람</strong> — 5월 11일 09:55 (10km), 5월 14일 09:55 (5km)</li>
    <li>✅ <strong>회원가입 미리</strong> — race.cjsports.or.kr 사전 가입으로 접수 시 시간 단축</li>
    <li>✅ <strong>참가 종목 결정</strong> — 10km(45K) / 5km(25K), 학생 할인 확인</li>
    <li>✅ <strong>입금 일정</strong> — 접수 완료 후 <strong>7일 이내 입금</strong> 필수</li>
    <li>✅ <strong>전날 청주 숙박 예약</strong> — 가을 단풍 시즌이라 빠른 마감 주의</li>
    <li>✅ <strong>러닝화 결정</strong> — <a href="/recommend">1분 추천</a>으로 본인 발에 맞는 모델 확인</li>
    <li>📱 <strong>접수 사이트</strong>: <a href="https://race.cjsports.or.kr/" target="_blank" rel="noopener">race.cjsports.or.kr</a> (사무국 043-279-8029)</li>
  </ul>
</div>

<p class="text-sm text-gray-500 mt-8">
※ 데이터 출처: <a href="https://race.cjsports.or.kr/" target="_blank" rel="noopener">청원생명쌀 대청호마라톤 공식</a>, <a href="https://www.instagram.com/runninglife_korea/p/DYBzCxejySN/" target="_blank" rel="noopener">@runninglife_korea 게시물</a>, <a href="https://www.ngonews.kr/news/articleView.html?idxno=216337" target="_blank" rel="noopener">2025 대회 6,500명 성료 보도</a>, runningwikii. 풀·하프 매진 여부는 인스타 게시물 기반이며, 실시간 확정 매진 여부는 race.cjsports.or.kr에서 확인하세요.
</p>
`,
  },
  {
    id: '2026-andong-marathon',
    slug: '2026-andong-marathon',
    title: '2026 안동마라톤 접수 시작 D+1 | 10월 4일 획득고도 700m+ 국내 최상급 난코스, 작년 며칠 만에 조기 마감',
    description: '2026 안동마라톤 접수가 5월 6일(수) 시작됐습니다. 10월 4일(일) 안동시민운동장 출발, 풀·하프·10K·5K 4종목 선착순 1만 명. 획득고도 700m+ 국내 최고 난도 코스, 2026년 신코스 도입(안동호+안포선 고개), 풀 우승자에게 해외 마라톤 참가권 — 작년 며칠 만에 마감된 핫한 가을 도전 마라톤.',
    thumbnail: '/images/blog/2026-andong-marathon.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-07',
    category: 'news' as const,
    readingTime: 7,
    tags: ['안동마라톤', '안동 마라톤', '경상북도 마라톤', '난코스 마라톤', '가을 마라톤', '도전형 마라톤', '하회마을', '대회 일정'],
    event: {
      name: '2026 안동마라톤대회',
      startDate: '2026-10-04T08:00:00+09:00',
      location: {
        name: '안동시민운동장',
        address: '경상북도 안동시 정하동 417-1',
      },
      organizer: '안동시·매일신문사 (대행: ㈜파란상상)',
      url: 'https://admarathon.kr/andong/',
      offers: [
        { name: '풀코스 (42.195km)', priceKrw: 60000, availabilityEnds: '2026-05-31', url: 'https://admarathon.kr/andong/' },
        { name: '하프 (21.0975km)', priceKrw: 50000, availabilityEnds: '2026-05-31', url: 'https://admarathon.kr/andong/' },
        { name: '10K', priceKrw: 50000, availabilityEnds: '2026-05-31', url: 'https://admarathon.kr/andong/' },
        { name: '5K', priceKrw: 30000, availabilityEnds: '2026-05-31', url: 'https://admarathon.kr/andong/' },
      ],
    },
    faqs: [
      {
        question: '안동마라톤이 정말 그렇게 어려운가요?',
        answer: '국내 풀코스 마라톤 중 손꼽히는 난도입니다. 러너 커뮤니티에서 "획득고도 700m+"로 알려져 있고, 12km 이후부터 본격 업다운, 38km 이후 업힐 반복으로 마지막 4km가 가장 힘듭니다. 평지 마라톤(공주백제·서울)에서 sub-3:30이 가능한 러너도 안동에서는 30~40분 늦게 들어옵니다. 평지 PB 도전이 목표라면 안동은 비추천이고, "도전 자체가 목적"이라면 안동만 한 코스가 없습니다.',
      },
      {
        question: '작년에 며칠 만에 마감됐다는 게 사실인가요?',
        answer: '2025년 안동마라톤은 1만 명 정원이 접수 개시 며칠 만에 조기 마감됐습니다. 2024년 5천 명에서 2배로 늘어난 정원이 그대로 채워졌습니다. 2026년은 신코스 도입으로 관심도가 더 높아졌으니, 풀코스 도전을 마음먹었다면 5월 중에는 결제 완료를 권장합니다.',
      },
      {
        question: '서울에서 안동까지 어떻게 가나요?',
        answer: 'KTX-이음으로 청량리역·서울역에서 안동역까지 약 2시간~2시간 40분(하행 1일 4회 운행)이 가장 빠릅니다. 안동역에서 안동시민운동장까지는 차량 10분 내외(시내버스 순환2번)입니다. 대회 당일 새벽 첫차로 당일치기도 가능하지만, 7시 집결·8시 출발 시간을 고려하면 전날 안동 시내 숙박이 안전합니다. 동서울터미널 → 안동버스터미널은 약 3시간 소요되며 KTX보다 저렴합니다.',
      },
      {
        question: '풀코스 우승자에게 해외 참가권을 준다는 게 사실인가요?',
        answer: '2025년 대회 기준 풀·하프 남녀 1위 4명에게 해외 국제마라톤(예: 베트남 호치민 마라톤) 참가권 특전이 제공됐습니다. 2026년에도 유사한 특전이 예상되며 정확한 내용은 admarathon.kr/andong/ 공식 공지를 확인하세요. 일반 러너에게도 안동 탈춤페스티벌(10월 초 동시 개최) 연계 혜택과 안동찜닭·간고등어 등 지역 음식 부스가 매력입니다.',
      },
      {
        question: '난코스인 안동에 어떤 신발이 좋은가요?',
        answer: '획득고도 700m+ 구릉형 도로 코스라 평지용 카본 레이싱화는 부적합합니다. 가파른 오르막에서 카본 플레이트는 종아리·아킬레스 부하를 키우고, 내리막에서 안정성이 떨어집니다. 추천: ① 풀코스 도전 → 안정성 + 쿠션의 "슈퍼 트레이너" (ASICS 카야노 32, 브룩스 글리세린 22). ② 하프·10K → 데일리 트레이너 (페가수스 42, 1080 v15, GT-2000 14). ③ 5K → 경량 슈퍼 트레이너 (페가수스 플러스). 발볼 넓다면 와이드 옵션 정식 출시된 모델 우선.',
      },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>2026년 10월 4일(일) 안동시민운동장 출발 — 풀·하프·10K·5K 4종목, 선착순 <strong>1만 명</strong></li>
    <li>접수 <strong>5월 6일(수) 시작</strong>(어제 오픈) — 작년 며칠 만에 마감됐으니 풀코스 도전이라면 5월 안에 결제 권장</li>
    <li>국내 최상급 난코스 — <strong>획득고도 700m+</strong>, 12km 이후 업다운 + 38km 이후 업힐 반복. 평지 PB가 아닌 "도전형 풀코스"의 정답</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">🔥</span>
  <div class="callout-body">
    <p class="callout-title">접수 시작 D+1 — 작년 며칠 만에 조기 마감</p>
    <p>2025년 안동마라톤은 정원 1만 명이 접수 개시 며칠 만에 채워져 조기 마감됐습니다. 2024년 5천 명 → 2025년 1만 명으로 정원이 2배 증가했음에도 입장권이 빠르게 동났고, 2026년은 신코스 도입(안동호 + 안포선 고개) 발표로 관심도가 더 높아졌습니다. 풀코스 도전을 마음먹었다면 5월 안에 결제를 마쳐두세요.</p>
  </div>
</div>

<h2>핵심 정보 한눈에</h2>

<div class="stat-grid">
  <div class="stat-card accent">
    <span class="stat-label">대회일</span>
    <span class="stat-value">10/4 (일)</span>
    <span class="stat-sub">8:00 출발</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">접수 시작</span>
    <span class="stat-value">5/6 (수)~</span>
    <span class="stat-sub">선착순 1만 명</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">획득고도</span>
    <span class="stat-value">700m+</span>
    <span class="stat-sub">국내 최상급</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">풀코스</span>
    <span class="stat-value">60,000원</span>
    <span class="stat-sub">제한시간 5시간</span>
  </div>
</div>

<h2>접수부터 대회까지 타임라인</h2>

<div class="timeline">
  <div class="timeline-item active">
    <span class="timeline-date">2026.05.06 (수) — D+1</span>
    <span class="timeline-title">접수 시작 — 어제 오픈</span>
    <p class="timeline-desc">admarathon.kr/andong/ 에서 4종목 모두 일반 선착순 신청. 정원 1만 명</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.05.31 (일) (예상)</span>
    <span class="timeline-title">접수 마감 또는 정원 도달 시</span>
    <p class="timeline-desc">선착순 1만 명 채워지면 조기 마감 — 작년 며칠 만에 마감됐던 전례</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.09 중후반</span>
    <span class="timeline-title">레이스팩 안내·교통통제 공지</span>
    <p class="timeline-desc">기념품, 셔틀버스 운영 여부, 코스 통제 시간 공식 발표</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.10.04 (일)</span>
    <span class="timeline-title">대회 당일 — 안동시민운동장 7시 집결</span>
    <p class="timeline-desc">10월 초 안동 평균 18-22도, 일교차 큼. 강수 가능성 (작년 강우)</p>
  </div>
</div>

<h2>종목별 참가비 (2025년 기준)</h2>

<table>
  <thead>
    <tr><th>종목</th><th>거리</th><th>참가비</th><th>제한시간 (2025 기준)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>풀코스</strong></td><td>42.195km</td><td>60,000원</td><td>5시간</td></tr>
    <tr><td>하프</td><td>21.0975km</td><td>50,000원</td><td>2시간 30분</td></tr>
    <tr><td>10K</td><td>10km</td><td>50,000원</td><td>1시간 30분</td></tr>
    <tr><td>5K</td><td>5km</td><td>30,000원</td><td>1시간</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">풀·하프 남녀 1위 — 해외 마라톤 참가권 특전</p>
    <p>2025년 대회 기준 풀코스·하프코스 남녀 1위 4명에게 해외 국제마라톤(예: 베트남 호치민 마라톤) 참가권이 제공됐습니다. 2026년 특전 내역은 5월 중후반 admarathon.kr 공지에서 확인 가능합니다. 일반 러너에게도 <strong>안동 탈춤페스티벌(10월 초 동시 개최)</strong>과 안동찜닭·간고등어 부스가 매력입니다.</p>
  </div>
</div>

<h2>왜 안동이 "지옥 코스"라 불리는가</h2>

<p>안동마라톤은 러너 커뮤니티에서 <strong>국내 풀코스 중 가장 어려운 코스 중 하나</strong>로 통합니다. 평지 마라톤(공주백제·서울)과는 완전히 다른 카테고리입니다.</p>

<table>
  <thead>
    <tr><th>구간</th><th>특성</th><th>실전 대응</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>0-12km</strong></td>
      <td>안동시민운동장 출발 → 용정교 → 시내 통과, 평지 위주</td>
      <td>페이스 욕심 금지, 본 게임은 12km 이후</td>
    </tr>
    <tr>
      <td><strong>12-25km</strong></td>
      <td>문화관광단지·안동댐 인근, 본격 업다운 시작</td>
      <td>오르막 짧게·내리막 가볍게, 심박 80% 이하 유지</td>
    </tr>
    <tr>
      <td><strong>25-38km</strong></td>
      <td>낙동강변 강변로 + 안동호 일부 구간</td>
      <td>강풍 주의, 보급 포인트 사이 거리 확인</td>
    </tr>
    <tr>
      <td><strong>38-42km</strong></td>
      <td>업힐 반복 — 마지막 4km가 가장 힘든 구간</td>
      <td>젤·소금 알약 비축, 워킹 브레이크 허용</td>
    </tr>
  </tbody>
</table>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">평지 PB 기록을 그대로 적용하지 마세요</p>
    <p>평지 마라톤(공주백제·서울)에서 Sub-3:30이 가능한 러너도 안동에서는 보통 30~40분 늦게 들어옵니다. 페이싱 전략은 <strong>"평지 PB + 30분"</strong>을 기준으로 잡고, 첫 12km는 의도적으로 더 천천히 가세요. <a href="/blog/marathon-pacing-strategy">마라톤 페이싱 전략</a>의 "구릉형 코스" 섹션 참고.</p>
  </div>
</div>

<h2>2026년 신코스 — 안동호 + 안포선 고개</h2>

<p>2026년 안동마라톤은 <strong>도심 교통통제 부담을 줄이고 자연친화 환경을 강화</strong>한 신코스를 도입했습니다 (2026-01-20 매일신문 보도). 핵심 변경:</p>

<ul>
  <li><strong>안동호 수변 코스 확장</strong> — 기존 "안동호 악코스" 구간 유지 + 추가 강변 통과</li>
  <li><strong>안포선 고개 구간 신설</strong> — 마지막 4km 업힐의 마지막 보스 구간</li>
  <li><strong>도심 통제 최소화</strong> — 시내 비통제 시간 확보로 시민 불편 감소</li>
  <li><strong>상세 코스도 미공개</strong> — 5월 중후반 공식 발표 예상</li>
</ul>

<p>신코스로 작년보다 더 어려워질 가능성이 있으니, 풀코스 도전자는 <strong>구릉형 LSD(장거리 지속주) 훈련</strong>을 6-8월에 누적해두세요.</p>

<h2>10월 안동 — 어떤 신발을 신을까</h2>

<p>구릉형 도로 코스 + 10월 초 18-22도 환경에서는 <strong>평지 카본 레이싱화가 부적합</strong>합니다. 종목별 추천:</p>

<table>
  <thead>
    <tr><th>종목 / 목표</th><th>추천 카테고리</th><th>예시 모델</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>풀코스 도전 (난코스 완주)</strong></td>
      <td>안정성 + 쿠션 슈퍼 트레이너</td>
      <td><a href="/shoes/asics-gel-kayano-32">ASICS 카야노 32</a>, <a href="/shoes/brooks-glycerin-22">브룩스 글리세린 22</a>, <a href="/shoes/asics-superblast-2">ASICS 슈퍼블라스트 2</a></td>
    </tr>
    <tr>
      <td><strong>하프 (안전 페이스)</strong></td>
      <td>쿠션 데일리 트레이너</td>
      <td><a href="/shoes/nike-pegasus-42">나이키 페가수스 42</a>, <a href="/shoes/new-balance-1080-v15">뉴발란스 1080 v15</a>, <a href="/shoes/asics-gt-2000-14">GT-2000 14</a></td>
    </tr>
    <tr>
      <td><strong>10K (적정 페이스)</strong></td>
      <td>경량 슈퍼 트레이너</td>
      <td><a href="/shoes/nike-pegasus-plus">나이키 페가수스 플러스</a>, <a href="/shoes/hoka-mach-x-3">호카 마하 X 3</a></td>
    </tr>
    <tr>
      <td><strong>5K (가벼운 도전)</strong></td>
      <td>경량 데일리</td>
      <td><a href="/shoes/asics-novablast-5">ASICS 노바블라스트 5</a>, <a href="/shoes/saucony-kinvara-16">쏘니 킨바라 16</a></td>
    </tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">카본 플레이트 레이싱화 비추천</p>
    <p>가파른 오르막에서 카본 플레이트는 종아리·아킬레스 부하를 키우고, 내리막에서 안정성이 떨어집니다. <strong>안동에서 베이퍼플라이/아디오스 프로를 신었다가 경련으로 DNF</strong>하는 사례가 매년 보고됩니다. 도전형 코스에는 안정성·쿠션 모두 갖춘 슈퍼 트레이너가 정답입니다.</p>
  </div>
</div>

<h2>교통·숙박</h2>

<table>
  <thead>
    <tr><th>수단</th><th>경로</th><th>소요 시간</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>KTX-이음 (권장)</strong></td>
      <td>청량리역·서울역 → 안동역 (1일 4회) → 시민운동장 차로 10분</td>
      <td>약 2시간 ~ 2시간 40분</td>
    </tr>
    <tr>
      <td>고속버스</td>
      <td>동서울터미널 → 안동버스터미널</td>
      <td>약 3시간</td>
    </tr>
    <tr>
      <td>자가용</td>
      <td>중앙고속도로 → 서안동IC</td>
      <td>약 3시간 (대회 당일 통제)</td>
    </tr>
  </tbody>
</table>

<p>대회 당일 7시 집결 → 8시 출발이라 새벽 KTX 첫차 도착으로는 빡빡합니다. <strong>전날 안동 시내 숙박</strong>이 안전합니다. 안동 구도심 한옥 게스트하우스나 안동찜닭 골목 인근 호텔이 인기인데, 10월 첫째 주는 <strong>탈춤페스티벌과 겹쳐</strong> 숙박 마감이 매우 빠르니 접수 확정 직후 예약하세요.</p>

<h2>안동의 매력 — 마라톤 + 1박 2일 관광</h2>

<p>안동은 한국 정신문화의 수도로 불리며, 대회 후 1박 2일로 머물기 좋은 도시입니다.</p>

<ul>
  <li><strong>하회마을 (유네스코 세계문화유산)</strong> — 풍산 류씨 종택, 600년 전통 마을</li>
  <li><strong>도산서원</strong> — 퇴계 이황의 학문 공간, 사적 170호</li>
  <li><strong>월영교</strong> — 한국 최장 목책교, 야경이 압권</li>
  <li><strong>안동찜닭</strong> — 구시장 골목의 본고장, 대회 후 회복 식사</li>
  <li><strong>간고등어</strong> — 안동 전통 소금 절임, 선물용 인기</li>
  <li><strong>안동 탈춤페스티벌</strong> — 10월 초 동시 개최, 하회별신굿탈놀이</li>
</ul>

<h2>2025년 대회로 본 분위기</h2>

<p>2025년 안동마라톤은 <strong>참가자 1만 명, 풀코스 우승 이건희(2:44:37) / 김은아(3:08:03)</strong>를 기록하며 역대 최고 흥행을 기록했습니다. 비가 내리는 악조건에서도 시민 응원이 성황을 이뤘고, "지옥 코스인데 또 오고 싶다"는 후기가 다수였습니다.</p>

<div class="callout info">
  <span class="callout-icon">📊</span>
  <div class="callout-body">
    <p class="callout-title">기록 비교 (2025 안동 vs 평지 대회)</p>
    <p>안동 풀코스 우승자 2:44:37은 평지 대회(서울국제·공주백제) 동급 러너의 기록 대비 약 5-7분 늦은 수치입니다. 5천 명에서 1만 명으로 정원 2배 확장에도 며칠 만에 마감된 인기는 "고난도 코스 도전" 자체를 즐기는 마니아층 두께를 보여줍니다.</p>
  </div>
</div>

<h2>접수 체크리스트</h2>

<div class="cta-box">
  <h3>5월 안에 결제 끝내기 위한 준비</h3>
  <ul>
    <li>✅ <strong>참가 종목 결정</strong> — 풀(60K) / 하프(50K) / 10K(50K) / 5K(30K)</li>
    <li>✅ <strong>본인 기록 확인</strong> — 풀코스 5시간 컷오프, 하프 2:30, 10K 1:30</li>
    <li>✅ <strong>구릉형 LSD 훈련 일정</strong> — 6~8월에 30km LSD 4회 이상 누적</li>
    <li>✅ <strong>전날 숙박 예약</strong> — 탈춤페스티벌 겹침, 결제 직후 즉시</li>
    <li>✅ <strong>러닝화 결정</strong> — 안정성 + 쿠션 슈퍼 트레이너 (카본 비추천), <a href="/recommend">1분 추천</a> 활용</li>
    <li>📱 <strong>접수 사이트</strong>: <a href="https://admarathon.kr/andong/" target="_blank" rel="noopener">admarathon.kr/andong</a></li>
  </ul>
</div>

<p class="text-sm text-gray-500 mt-8">
※ 데이터 출처: <a href="https://admarathon.kr/andong/" target="_blank" rel="noopener">안동마라톤 공식</a>, <a href="https://www.instagram.com/runninglife_korea/p/DX-wut6j2up/" target="_blank" rel="noopener">@runninglife_korea 5월 캘린더</a>, 매일신문(2025·2026 보도), runningwikii(코스·제한시간), 러너 커뮤니티(획득고도 700m+ 추정). 2026년 공식 접수 마감일·신코스 상세도는 admarathon.kr 공지로 최종 확인하세요.
</p>
`,
  },
  {
    id: '2026-gongju-baekje-marathon',
    slug: '2026-gongju-baekje-marathon',
    title: '2026 공주백제마라톤 우선접수 D-4 | 9월 20일 금강변 평지 풀코스, 동마클럽 멤버십 5/11 오픈',
    description: '2026 공주백제마라톤 동마클럽 우선접수가 5월 11일(월) 시작됩니다. 9월 20일(일) 공주시민운동장 출발, 금강변 백제큰길 왕복 평지 코스. 풀·32K·하프·10K·5K 5종목, 유네스코 세계유산 공산성·무령왕릉 인근 통과. 본접수는 5월 21일 — 동마 가을 입문 풀코스 정답.',
    thumbnail: '/images/blog/2026-gongju-baekje-marathon.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-07',
    category: 'news' as const,
    readingTime: 7,
    tags: ['공주백제마라톤', '공주백제 마라톤', '동마클럽', '동아마라톤', '가을 마라톤', '풀코스 입문', '금강 마라톤', '대회 일정'],
    event: {
      name: '2026 공주백제마라톤',
      startDate: '2026-09-20T08:00:00+09:00',
      location: {
        name: '공주시민운동장',
        address: '충청남도 공주시',
      },
      organizer: '동아일보 (동마클럽)',
      url: 'https://dongma.club/',
      offers: [
        { name: '풀코스 (42.195km)', priceKrw: 60000, availabilityEnds: '2026-05-21', url: 'https://dongma.club/' },
        { name: '32K', priceKrw: 60000, availabilityEnds: '2026-05-21', url: 'https://dongma.club/' },
        { name: '하프 (21.0975km)', priceKrw: 40000, availabilityEnds: '2026-05-21', url: 'https://dongma.club/' },
        { name: '10K', priceKrw: 40000, availabilityEnds: '2026-05-21', url: 'https://dongma.club/' },
        { name: '5K', priceKrw: 20000, availabilityEnds: '2026-05-21', url: 'https://dongma.club/' },
      ],
    },
    faqs: [
      {
        question: '우선접수랑 본접수가 뭐가 다른가요?',
        answer: '우선접수(5월 11~15일)는 동아마라톤 멤버십(동마클럽) 가입자만 신청 가능하며, 본접수(5월 21일~ 선착순) 전에 자리를 먼저 확보할 수 있습니다. 멤버십은 연회비 15만원으로 공주백제·경주국제마라톤 참가권 + 2027 서울마라톤 우선신청권이 모두 포함되어, 1년에 동마 시리즈 3대회를 다 뛸 계획이라면 본접수 단발 결제보다 가성비가 좋습니다.',
      },
      {
        question: '풀코스 첫 도전인데 공주백제 괜찮나요?',
        answer: '동마 시리즈 중 가장 입문 친화적입니다. 금강변 백제큰길 왕복 평지 코스로 누적 고도가 매우 낮아 기록 단축에 유리하며, 풀코스 제한시간이 5시간으로 넉넉합니다. 9월 20일 충남 평균 기온 20-24도로 가을 풀코스 입문 적기입니다. 단, 9월 중순은 아직 따뜻할 수 있으니 초반 페이스 관리와 보급 전략이 중요합니다.',
      },
      {
        question: '서울에서 공주까지 어떻게 가나요?',
        answer: 'KTX(호남선) 서울역·용산역에서 공주역까지 약 1시간 15분, 공주역에서 대회장까지 차로 25분입니다. 자가용은 대회 당일 조기 만차 빈번하므로 비추천이며, 전날 공주 시내 숙박이 가장 안전합니다. 셔틀버스 운영 여부는 대회 2주 전 dongma.club 공지를 확인하세요.',
      },
      {
        question: '32K 종목은 왜 있나요?',
        answer: '풀코스(42.195km) 직전 단계의 LSD(장거리 지구력) 훈련 또는 가을 풀코스 시즌 막바지 컨디셔닝용으로 기획된 종목입니다. 동마 시리즈 특유의 옵션으로, "풀은 부담스럽지만 하프(21km)는 짧다"는 중간 러너에게 유용합니다. 참가비는 풀과 동일(60,000원, 멤버십 50,000원)입니다.',
      },
      {
        question: '어떤 러닝화를 신어야 하나요?',
        answer: '금강변 평지 아스팔트 + 9월 중순 20-25도 환경에 따라 두 갈래로 나뉩니다. ① 풀코스 PB 도전 → 카본 플레이트 레이싱화 (아디다스 아디오스 프로 4, 나이키 베이퍼플라이 4 등). ② 입문·완주 목적 → 쿠션 데일리 트레이너 (아식스 GT-2000 14, 뉴발란스 1080 v15, 나이키 페가수스 42). 평지 코스라 안정화는 굳이 필요 없으며, 발볼 넓다면 와이드 옵션이 있는 모델 권장.',
      },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>2026년 9월 20일(일) 공주시민운동장 출발 — 금강변 백제큰길 왕복 평지 코스, 풀·32K·하프·10K·5K 5종목</li>
    <li>우선접수 <strong>5월 11일(월) ~ 5월 15일(금)</strong> 동마클럽 멤버십 전용 → 본접수 <strong>5월 21일(목)</strong> 오픈 선착순 (정원 약 12,000명)</li>
    <li>유네스코 세계문화유산 <strong>공산성·무령왕릉 인근 통과</strong>, 동마 시리즈 중 가장 입문 친화적 풀코스 — 가을 PB 도전 + 백제 고도 관광 동시 가능</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">우선접수 D-4 — 5월 11일(월) 오픈</p>
    <p>동마클럽 멤버십(연회비 15만원) 가입자는 본접수 전인 <strong>5월 11일(월) ~ 5월 15일(금)</strong>에 우선 신청 가능합니다. 멤버십에는 공주백제·경주국제 참가권과 2027 서울마라톤 우선신청권이 포함돼 있어, 동마 가을 시리즈를 다 뛰려면 단발 결제보다 멤버십이 유리합니다. 본접수는 5월 21일(목) 오픈, 정원 약 12,000명 선착순으로 작년 풀코스는 조기 마감됐습니다.</p>
  </div>
</div>

<h2>핵심 정보 한눈에</h2>

<div class="stat-grid">
  <div class="stat-card accent">
    <span class="stat-label">대회일</span>
    <span class="stat-value">9/20 (일)</span>
    <span class="stat-sub">2026 가을</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">풀코스 42.195km</span>
    <span class="stat-value">60,000원</span>
    <span class="stat-sub">제한시간 5시간</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">코스 특징</span>
    <span class="stat-value">금강변 평지</span>
    <span class="stat-sub">고도차 거의 없음</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">우선접수</span>
    <span class="stat-value">5/11 ~ 5/15</span>
    <span class="stat-sub">멤버십 전용</span>
  </div>
</div>

<h2>접수부터 대회까지 타임라인</h2>

<div class="timeline">
  <div class="timeline-item active">
    <span class="timeline-date">2026.05.11 (월) — D-4</span>
    <span class="timeline-title">우선접수 시작 (멤버십 전용)</span>
    <p class="timeline-desc">동마클럽 멤버십 가입자 대상 — 5일간 운영, 전 종목 신청 가능</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.05.15 (금)</span>
    <span class="timeline-title">우선접수 마감</span>
    <p class="timeline-desc">멤버십 자리 확보 마지막 기회</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.05.21 (목)</span>
    <span class="timeline-title">본접수 오픈 (일반 선착순)</span>
    <p class="timeline-desc">dongma.club에서 일반 신청 시작 — 풀·32K 종목은 빠르게 마감 예상</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.09 초중순</span>
    <span class="timeline-title">레이스팩 안내·교통통제 공지</span>
    <p class="timeline-desc">기념품 수령, 셔틀버스, 교통통제 시간 공식 발표</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.09.20 (일)</span>
    <span class="timeline-title">대회 당일 — 공주시민운동장</span>
    <p class="timeline-desc">금강변 백제큰길 왕복 코스, 충남 9월 평균 20-24도</p>
  </div>
</div>

<h2>종목별 참가비 (2025년 기준 — 2026년 동일 추정)</h2>

<table>
  <thead>
    <tr><th>종목</th><th>거리</th><th>일반</th><th>멤버십</th><th>제한시간</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>풀코스</strong></td><td>42.195km</td><td>60,000원</td><td>50,000원</td><td>5시간</td></tr>
    <tr><td>32K</td><td>32km</td><td>60,000원</td><td>50,000원</td><td>4시간</td></tr>
    <tr><td>하프</td><td>21.0975km</td><td>40,000원</td><td>30,000원</td><td>—</td></tr>
    <tr><td>10K</td><td>10km</td><td>40,000원</td><td>30,000원</td><td>—</td></tr>
    <tr><td>5K</td><td>5km</td><td>20,000원</td><td>10,000원</td><td>—</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">참가비는 2025년 기준 — 2026년 공식 발표 전</p>
    <p>위 금액은 2025년 공주백제마라톤 기준으로, 2026년 정식 공지는 5월 11일 우선접수 오픈 시 dongma.club에 게시됩니다. 일반적으로 동마 시리즈는 전년 대비 변동 없거나 5,000~10,000원 인상이 있을 수 있습니다.</p>
  </div>
</div>

<h2>왜 공주백제가 풀코스 입문에 좋은가</h2>

<p>동마클럽이 운영하는 가을 시리즈 3개 대회(서울국제·공주백제·경주국제) 중 <strong>공주백제는 가장 입문자 친화적인 풀코스</strong>로 평가됩니다. 이유는 세 가지입니다.</p>

<table>
  <thead>
    <tr><th>특징</th><th>공주백제</th><th>일반 도시 마라톤</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>코스 고도</strong></td>
      <td>금강변 평지, 누적 고도 거의 없음</td>
      <td>도심 굴곡 있음 (서울국제 잠실 일대 약 50m)</td>
    </tr>
    <tr>
      <td><strong>풀 제한시간</strong></td>
      <td>5시간 (넉넉)</td>
      <td>4-5시간 (대회 따라)</td>
    </tr>
    <tr>
      <td><strong>참가 규모</strong></td>
      <td>약 12,000명 (혼잡 적음)</td>
      <td>30,000명+ (출발 정체)</td>
    </tr>
    <tr>
      <td><strong>지역 매력</strong></td>
      <td>유네스코 백제 고도, 가을 단풍</td>
      <td>도심 풍경 중심</td>
    </tr>
  </tbody>
</table>

<h2>코스 매력 — 백제 1500년 위에서 달린다</h2>

<p>공주는 <strong>475년 백제의 두 번째 수도(웅진)</strong>로, 무령왕릉을 품은 송산리 고분군과 공산성이 2015년 유네스코 세계문화유산으로 등재된 곳입니다. 코스는 공주시민운동장에서 출발해 금강변 백제큰길을 따라 왕복하며, 공산성 성벽과 무령왕릉 인근을 지나갑니다.</p>

<ul>
  <li><strong>금강 수변 풍경</strong> — 9월 중순 가을 초입의 단풍과 강변 풍경, 사진 찍기 좋은 구간 다수</li>
  <li><strong>공산성 통과</strong> — 백제·고려·조선 3시대를 관통하는 토석성. 16km/26km 인근 지점에서 좌측 시야</li>
  <li><strong>무령왕릉 인근</strong> — 백제 25대 왕 무령왕의 무덤. 코스 중간 보급 포인트와 가까움</li>
  <li><strong>도심 통과 구간</strong> — 공주 시내 약 5km 구간 교통통제, 시민 응원 활발</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">기록 단축 도전자에게 좋은 이유</p>
    <p>금강변 평지 코스는 강풍만 없으면 사실상 무굴곡입니다. 9월 20일 충남 평균 기온이 20-24도로 다소 따뜻한 편이지만, 출발 시간(보통 8시) 기준 18-20도로 시작해 풀코스 종료 시점까지 25도 안쪽이라 기록 도전 환경으로는 합격선입니다. <a href="/blog/marathon-pacing-strategy">마라톤 페이싱 전략</a>을 미리 잡고 입장하세요.</p>
  </div>
</div>

<h2>9월 공주 — 어떤 신발을 신을까</h2>

<p>금강변 평지 + 20-25도 + 5시간 제한이라는 조건에서 신발 선택은 <strong>"기록 도전 vs 안전 완주"</strong> 두 갈래로 나뉩니다.</p>

<table>
  <thead>
    <tr><th>목표</th><th>추천 카테고리</th><th>예시 모델</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>풀 PB 도전 (Sub-3:30~4:00)</strong></td>
      <td>카본 플레이트 레이싱화</td>
      <td>아디다스 아디오스 프로 4, 나이키 베이퍼플라이 4, ASICS 메타스피드 에지 파리</td>
    </tr>
    <tr>
      <td><strong>완주 목표 입문 (4:30~5:00)</strong></td>
      <td>쿠션 데일리 트레이너</td>
      <td><a href="/shoes/asics-gt-2000-14">ASICS GT-2000 14</a>, <a href="/shoes/new-balance-1080-v15">뉴발란스 1080 v15</a>, <a href="/shoes/nike-pegasus-42">나이키 페가수스 42</a></td>
    </tr>
    <tr>
      <td><strong>32K 훈련용 LSD</strong></td>
      <td>맥시멀 쿠션</td>
      <td><a href="/shoes/hoka-clifton-10">호카 클리프턴 10</a>, <a href="/shoes/asics-novablast-5">ASICS 노바블라스트 5</a></td>
    </tr>
    <tr>
      <td><strong>하프·10K (가벼운 페이스)</strong></td>
      <td>경량 슈퍼 트레이너</td>
      <td><a href="/shoes/nike-pegasus-plus">나이키 페가수스 플러스</a>, <a href="/shoes/nike-zoom-fly-6">줌 플라이 6</a></td>
    </tr>
  </tbody>
</table>

<p>발볼이 넓다면 와이드 옵션이 있는 모델을 우선하세요 (페가수스 42·1080 v15·GT-2000 14는 한국 와이드 SKU 정식 출시). <a href="/recommend">맞춤 신발 추천</a>에서 본인 발 특성에 맞는 모델을 1분 안에 확인할 수 있습니다.</p>

<h2>교통·숙박 가이드</h2>

<table>
  <thead>
    <tr><th>수단</th><th>경로</th><th>소요 시간</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>KTX (권장)</strong></td>
      <td>서울역·용산역 → 공주역 (호남선) → 대회장 차로 25분</td>
      <td>약 1시간 40분</td>
    </tr>
    <tr>
      <td>고속버스</td>
      <td>서울 경부터미널 → 공주종합버스터미널 → 택시 10분</td>
      <td>약 1시간 40분</td>
    </tr>
    <tr>
      <td>자가용</td>
      <td>경부고속도로 → 천안논산고속도로 → 공주IC</td>
      <td>약 2시간 (대회 당일 통제)</td>
    </tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">🚗</span>
  <div class="callout-body">
    <p class="callout-title">자가용보다 KTX + 전날 숙박</p>
    <p>대회 당일 공주시민운동장 인근 주차장은 새벽 6시 전 만차됩니다. KTX로 당일 오전 도착도 가능하지만, 풀코스 출발(8시 추정) 시간을 고려하면 <strong>전날 공주 시내 숙박</strong>이 가장 안전합니다. 공주 시내 호텔·게스트하우스는 대회 한 달 전부터 빠르게 마감되니 접수 확정 직후 예약하세요.</p>
  </div>
</div>

<h2>2025년 대회로 본 분위기</h2>

<p>2025년 공주백제마라톤은 <strong>참가자 약 1만 명</strong>이 모여 "공주의 가을을 달렸다"는 보도가 나왔습니다. 참가자 후기 공통점:</p>

<ul>
  <li>"평지 코스라 PB 욕심 안 부리고 안전하게 풀 완주" — 입문자 다수</li>
  <li>"백제 사적 코스 + 가을 단풍, 관광 겸 마라톤으로 최고" — 가족 단위</li>
  <li>"교통통제 구간이 짧아 보급 포인트 사이 거리가 좀 멀게 느껴짐" — 경험자 의견</li>
  <li>"대회 후 공주 한옥마을·공산성 관광 일정으로 잡으면 1박 2일 일정 완성" — 지역 추천</li>
</ul>

<h2>접수 체크리스트</h2>

<div class="cta-box">
  <h3>5월 11일(월) 우선접수 전 준비할 것</h3>
  <ul>
    <li>✅ <strong>동마클럽 멤버십</strong> 가입 여부 확인 (연회비 15만원, 가을 3대회 + 2027 서울 우선권)</li>
    <li>✅ <strong>참가 종목 결정</strong> — 풀(60,000원) / 32K(60,000원) / 하프(40,000원) / 10K(40,000원) / 5K(20,000원)</li>
    <li>✅ <strong>본인 기록 확인</strong> (풀코스 5시간 컷오프 통과 가능 여부)</li>
    <li>✅ <strong>전날 숙박 예약</strong> — 공주 시내 호텔·게스트하우스 (접수 확정 후 즉시)</li>
    <li>✅ <strong>러닝화 결정</strong> — <a href="/recommend">1분 추천</a>으로 본인 발에 맞는 모델 확인</li>
    <li>📱 <strong>접수 사이트</strong>: <a href="https://dongma.club/" target="_blank" rel="noopener">dongma.club</a></li>
  </ul>
</div>

<p class="text-sm text-gray-500 mt-8">
※ 데이터 출처: <a href="https://dongma.club/" target="_blank" rel="noopener">동마클럽 공식</a>, <a href="https://www.instagram.com/dongmaclub/p/DXyYzWVD0ut/" target="_blank" rel="noopener">@dongmaclub 5월 접수 캘린더</a>, runningwikii(2025년 참가비·정원 기준). 2026년 공식 참가비·셔틀·정원은 5월 11일 우선접수 오픈 시점 dongma.club 공지로 최종 확인하세요.
</p>
`,
  },
  {
    id: 'nike-pegasus-42-review',
    slug: 'nike-pegasus-42-review',
    title: '나이키 페가수스 42 솔직 리뷰 | 41과 뭐가 달라졌나, 16만원 그 값을 할까',
    description: '2026-04-09 출시한 나이키 페가수스 42를 RunRepeat 랩 실측·BITR(B티어)·RTR(8.79/10) + 한 달 한강 5-10km 사용기로 정리했습니다. 풀 렝스 Air Zoom의 진짜 효과, 공식 vs 실측 5mm 불일치, 한국 와이드 정식 출시 — 169,000원 입문 데일리 트레이너 가성비 최상위.',
    thumbnail: '/images/blog/nike-pegasus-42-review.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-07',
    category: 'review' as const,
    readingTime: 11,
    tags: ['나이키 페가수스 42', '페가수스 42', '러닝화 리뷰', '입문 데일리 트레이너', '나이키 러닝화', '페가수스 41 비교', '풀 렝스 Air Zoom', '와이드 러닝화', '한국 발볼'],
    faqs: [
      {
        question: '페가수스 41 신고 있는데 42로 바꿀 가치가 있나요?',
        answer: '체감 차이는 "힐 착지가 부드러워졌다" 정도입니다. RunRepeat 실측 기준 힐 스택 +2.4mm(33.6→36mm), 힐 충격흡수 SA +6(125→131)으로 힐 쿠셔닝은 확실히 개선됐습니다. 그러나 나이키가 강조한 "에너지 리턴 +15%"는 실측 힐 +1.6%p / 전족부 0%p에 그쳐 마케팅 수준입니다. 41을 600km 안 신었다면 그냥 41을 굴리고, 41이 수명 다 됐고 발볼 4E급이라면 42 와이드(정식 출시)가 답입니다.',
      },
      {
        question: '발볼 넓은데 페가수스 42 기본 사이즈로 괜찮나요?',
        answer: 'RunRepeat 실측 기준 토박스 너비는 72.3mm로 41(72.9mm)과 거의 동일합니다. 나이키의 "토박스 확대" 마케팅과 달리 실측은 미세하게 좁아졌습니다. 발볼 4E급이라면 한국 나이키 공식몰에 정식 출시된 와이드 SKU(남성·여성 동일 169,000원)를 선택하세요. 41까지는 와이드를 찾기 어려웠던 게 진짜 불편이었는데, 42부터는 표준 가격으로 풀린 게 가장 큰 한국 러너 친화 변화입니다.',
      },
      {
        question: '169,000원에 같은 가격대 노바블라스트 5나 클리프턴 10 중 뭘 골라야 하나요?',
        answer: '용도별로 갈립니다. ① 무릎 보호·아스팔트 충격 완화 → 페가수스 42 (36mm 하이스택 + Air Zoom 안정감), ② 가벼운 반발감·통통 튀는 라이드 → 노바블라스트 5 (FF Blast Max 폼), ③ 맥시멀 쿠션 + 모자이드 락커 → 클리프턴 10. 한국 발볼 친화도는 페가수스 42(와이드 정식)가 가장 좋고, 가성비는 셋 다 비슷합니다. 데일리 입문 1켤레면 페가수스 42가 무난합니다.',
      },
      {
        question: '페가수스 42로 하프마라톤 뛸 수 있나요?',
        answer: '완주는 가능하지만 추천하지는 않습니다. BITR도 "6-13km 스윗스팟의 원 트릭 포니"로 평가했고, RTR도 "286g 무게 열세"를 단점으로 꼽았습니다. 21km 이후로는 무거운 무게 + 평범한 에너지 리턴(57%/61%)이 다리 피로로 직결됩니다. 하프 페이스 훈련이나 실전은 줌 플라이 6(카본+ZoomX)이나 페가수스 플러스(ZoomX 풀렝스)로 분리하는 게 정답입니다. 42는 데일리 5-13km 전용으로 쓰세요.',
      },
      {
        question: '평발이고 무릎이 약한데 페가수스 42 괜찮나요?',
        answer: '평발은 ReactX + Air Zoom 조합이 잘 받쳐줘서 좋은 선택입니다. 무릎 보호도 36mm 힐 스택(실측) + 충격흡수 SA 131로 41보다 확실히 개선됐습니다. 다만 안정화는 아니므로 과내전이 심하다면 카야노 32 같은 정식 안정화나 페가수스 42 + 교정 인솔 조합을 권장합니다. 한강 아스팔트 5-10km 데일리 훈련에서는 무릎 부담 없이 600km까지 안정적으로 쓸 수 있습니다.',
      },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>풀 렝스 Air Zoom + 힐 스택 +2.4mm(실측)로 <strong>힐 쿠셔닝은 진짜 개선</strong>, 그러나 "에너지 리턴 +15%" 공식 주장은 실측 +1.6%p에 그치는 마케팅 수준</li>
    <li>한국 나이키 공식몰에 <strong>와이드 옵션이 169,000원 정식 출시</strong> — 41까지 발볼 넓은 한국 러너의 가장 큰 불편이 해결됨</li>
    <li>BITR B티어(Value A) / RTR 8.79/10 — <strong>"6-13km 입문 데일리 트레이너 가성비 최상위"</strong>, 하프 이상이나 페이스 훈련은 부적합</li>
  </ul>
</div>

<figure class="my-8">
  <img
    src="/images/blog/nike-pegasus-42-review.webp"
    alt="나이키 페가수스 42 솔직 리뷰 — 41과 비교, 풀 렝스 Air Zoom, 169,000원 가성비"
    class="w-full rounded-2xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">페가수스 42 — 36mm 힐 스택 + 풀 렝스 Air Zoom + ReactX 폼</figcaption>
</figure>

<h2>한 줄 결론</h2>

<div class="callout positive">
  <span class="callout-icon">✅</span>
  <div class="callout-body">
    <p class="callout-title">"한강 5-10km 데일리, 발볼 넓고 무릎 보호 원하는 입문 러너의 16만원대 정답"</p>
    <p>41 대비 힐 쿠셔닝과 와이드 SKU가 의미 있게 개선됐습니다. 단, 페이스 훈련이나 하프 이상에는 줌 플라이 6이나 페가수스 플러스를 따로 두세요.</p>
  </div>
</div>

<h2>핵심 스펙 한눈에</h2>

<div class="stat-grid">
  <div class="stat-card accent">
    <span class="stat-label">한국 가격</span>
    <span class="stat-value">169,000원</span>
    <span class="stat-sub">와이드 동일 가격</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">무게 (실측)</span>
    <span class="stat-value">286g</span>
    <span class="stat-sub">US M9, 41 대비 +5g</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">힐 스택 (실측)</span>
    <span class="stat-value">36mm</span>
    <span class="stat-sub">41 대비 +2.4mm</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">출시일</span>
    <span class="stat-value">2026.04.09</span>
    <span class="stat-sub">한국 동시 출시</span>
  </div>
</div>

<h2>페가수스 41 vs 42 — 무엇이 달라졌나</h2>

<p>나이키는 페가수스 42 출시 발표에서 "풀 렝스 Air Zoom 유닛 + 에너지 리턴 +15%"를 핵심 변경점으로 밀었습니다. 하지만 RunRepeat가 2026-04-25 공개한 랩 실측 데이터를 보면 마케팅과 현실 사이에 꽤 큰 갭이 있습니다.</p>

<table>
  <thead>
    <tr><th>항목</th><th>페가수스 41 (실측)</th><th>페가수스 42 (실측)</th><th>변화</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>무게</strong></td>
      <td>281g</td>
      <td>286g</td>
      <td><span class="badge-warning">+5g</span></td>
    </tr>
    <tr>
      <td><strong>힐 스택</strong></td>
      <td>33.6mm</td>
      <td>36.0mm</td>
      <td><span class="badge-positive">+2.4mm</span></td>
    </tr>
    <tr>
      <td><strong>전족부 스택</strong></td>
      <td>22.2mm</td>
      <td>22.0mm</td>
      <td><span class="badge-neutral">±0</span></td>
    </tr>
    <tr>
      <td><strong>드롭 (실측)</strong></td>
      <td>11.4mm</td>
      <td>14.0mm</td>
      <td><span class="badge-warning">+2.6mm</span></td>
    </tr>
    <tr>
      <td><strong>힐 충격흡수 SA</strong></td>
      <td>125</td>
      <td>131</td>
      <td><span class="badge-positive">+6 (부드러움)</span></td>
    </tr>
    <tr>
      <td><strong>힐 에너지 리턴</strong></td>
      <td>55.5%</td>
      <td>57.1%</td>
      <td><span class="badge-positive">+1.6%p</span></td>
    </tr>
    <tr>
      <td><strong>전족부 에너지 리턴</strong></td>
      <td>61.4%</td>
      <td>61.2%</td>
      <td><span class="badge-neutral">±0</span></td>
    </tr>
    <tr>
      <td><strong>토박스 너비</strong></td>
      <td>72.9mm</td>
      <td>72.3mm</td>
      <td><span class="badge-neutral">±0 (실측)</span></td>
    </tr>
    <tr>
      <td><strong>한국 와이드 SKU</strong></td>
      <td>제한적</td>
      <td>정식 출시</td>
      <td><span class="badge-positive">한국 러너 진짜 개선</span></td>
    </tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">공식 스펙 vs RunRepeat 실측 — 5mm 불일치</p>
    <p>나이키 공식 스펙은 <strong>전족부 27mm / 드롭 10mm</strong>이지만 RunRepeat 실측은 <strong>22.0mm / 14.0mm</strong>입니다. 5mm 차이는 단순 측정 오차 수준이 아니며, 41(실측 22.2mm)에서도 동일한 패턴이라 나이키의 스택 표기 방식이 실제 폼 두께가 아닌 다른 기준일 가능성이 큽니다. 구매 결정에서는 <strong>드롭이 14mm 가까운 하이드롭</strong>이라는 점을 인지하고, 미드풋·전족부 착지 러너는 다른 옵션을 고려하세요.</p>
  </div>
</div>

<h2>풀 렝스 Air Zoom — 진짜 효과는?</h2>

<p>41까지의 페가수스는 <strong>듀얼 포드 Air Zoom</strong>(힐 + 전족부에 따로 들어간 두 개의 에어백) 구조였습니다. 42는 이걸 <strong>곡선형 풀 렝스 Air Zoom 유닛</strong>(힐부터 전족부까지 이어지는 하나의 에어백)으로 바꿨습니다.</p>

<p>실측 데이터로 본 효과:</p>

<ul>
  <li><strong>힐 착지 부드러움 ↑</strong> — SA 125→131(+6)로 힐 쿠셔닝 개선. 한강 아스팔트 5km 돌 때 41 대비 "쿵" 소리가 줄어든 게 체감됩니다.</li>
  <li><strong>힐 에너지 리턴 ↑</strong> — 55.5%→57.1%(+1.6%p). 의미 있는 개선이지만 카본화(75%+)나 ZoomX 폼 대비하면 미미합니다.</li>
  <li><strong>전족부는 거의 변화 없음</strong> — 에너지 리턴 61.4%→61.2%, 스택 22.2→22.0mm. 나이키가 "토 스프링 지오메트리로 3mm 추가 쿠션"이라고 발표했지만 실측에는 안 잡힙니다.</li>
  <li><strong>전환 부드러움 ↑</strong> — RTR이 핵심으로 짚은 부분. 풀 렝스 구조 덕에 힐→포어풋 전환이 41의 단절적 느낌에서 더 매끄러워졌습니다.</li>
</ul>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">"에너지 리턴 +15%"의 실체</p>
    <p>나이키 공식 발표의 "에너지 리턴 +15% 향상"은 <strong>RunRepeat 실측 기준 힐 +1.6%p / 전족부 0%p</strong>에 불과합니다. 가능성은 두 가지: ① 나이키가 측정한 "에너지 리턴"이 RunRepeat의 ASTM F1976 표준 측정과 다른 항목이거나, ② 마케팅 수치라는 것. 어느 쪽이든 <strong>구매 결정에 "+15%"를 그대로 믿지 말고 "약간 부드러워진 41" 정도로 기대치를 잡으세요</strong>.</p>
  </div>
</div>

<h2>한국 와이드 옵션 정식 출시 — 진짜 개선은 여기에</h2>

<p>페가수스 42의 가장 중요한 한국 러너 관점 변화는 사실 미드솔이 아닙니다. <strong>한국 나이키 공식몰에 남성·여성 와이드 옵션이 동일 169,000원으로 정식 출시</strong>된 것입니다.</p>

<p>41까지는 한국 발볼 4E급 러너들에게 페가수스가 "표준 사이즈는 좁고 와이드는 한국에서 사기 어려운 신발"이었습니다. 직구나 매장 재고 운에 의존해야 했고, 그 사이 발볼 넓은 러너들은 <a href="/shoes/asics-novablast-5">노바블라스트 5</a>나 <a href="/shoes/hoka-clifton-10">클리프턴 10</a>으로 옮겨갔습니다.</p>

<p>42는 출시 시점부터 와이드 SKU를 한국 공식 라인업에 넣었습니다. RunRepeat 실측 토박스 너비(72.3mm)는 41과 거의 같지만, <strong>SKU 자체가 표준 가격으로 풀린 게 핵심</strong>입니다.</p>

<table>
  <thead>
    <tr><th>발볼 타입</th><th>추천 SKU</th><th>비고</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>표준 (D, 한국 평균)</td>
      <td>표준 169,000원</td>
      <td>실측 72.3mm로 평균 한국 발볼 무난</td>
    </tr>
    <tr>
      <td>발볼 넓음 (2E)</td>
      <td>표준 + 반 사이즈 업 또는 와이드</td>
      <td>10km 이상 거리에서 와이드 권장</td>
    </tr>
    <tr>
      <td>발볼 매우 넓음 (4E)</td>
      <td>와이드 169,000원 (남성·여성)</td>
      <td>무조건 와이드, 표준은 압박 발생</td>
    </tr>
    <tr>
      <td>발볼 좁음 (B)</td>
      <td>표준 169,000원</td>
      <td>발볼 좁다면 <a href="/shoes/nike-pegasus-plus">페가수스 플러스</a>가 더 적합</td>
    </tr>
  </tbody>
</table>

<h2>36mm 힐 스택 = 무릎 보호 효과 분석</h2>

<p>실측 36mm 힐 스택은 <strong>모더레이트~맥시멀 사이</strong>의 쿠셔닝입니다. 클리프턴 10(40mm), 노바블라스트 5(41.5mm)보다는 낮지만, <a href="/shoes/new-balance-880-v15">880 v15</a>(35mm)와 비슷한 수준입니다.</p>

<p>한국 한강·남산·한적한 시내 러닝 코스의 특성을 고려하면:</p>

<ul>
  <li><strong>아스팔트 무릎 충격 완화</strong> — SA 131의 힐 쿠셔닝은 입문 러너의 첫 800km 동안 무릎 부담을 의미 있게 줄여줍니다. 평발이거나 뒤꿈치 착지인 러너에게 특히 도움.</li>
  <li><strong>드롭 14mm(실측)의 양면성</strong> — 뒤꿈치 착지 러너에게 자연스럽게 무게 전환을 유도하지만, 미드풋 착지를 시도하려는 중급자에게는 인위적인 느낌이 됩니다.</li>
  <li><strong>족저근막염·아킬레스건염 예방 좋음</strong> — 36mm + 풀 렝스 Air Zoom 조합이 발바닥 근막에 가해지는 충격을 분산시킵니다. <a href="/blog/knee-pain">무릎 통증 예방 가이드</a>의 "쿠션 우선화" 카테고리에 해당.</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">무릎이 약한 러너의 페가수스 42 활용법</p>
    <p>5km부터 시작해 주 3회 30km씩 5주(150km)에 걸쳐 적응한 뒤 거리를 늘리세요. 첫 800km는 무릎 보호 효과가 살아있고, 이후 미드솔이 압축되면서 쿠셔닝이 70% 수준으로 떨어집니다. 600km 도달 시 교체를 권장합니다.</p>
  </div>
</div>

<h2>169,000원 가성비 — 같은 가격대 비교</h2>

<p>16만원대 한국 입문 데일리 트레이너 시장은 2026년 들어 가장 경쟁이 치열한 구간입니다. 페가수스 42, 노바블라스트 5, 클리프턴 10이 사실상 동일한 169,000원에 출시됐습니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>가격</th><th>무게</th><th>힐 스택</th><th>핵심 강점</th><th>한국 발볼</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong><a href="/shoes/nike-pegasus-42">페가수스 42</a></strong></td>
      <td>169,000원</td>
      <td>286g</td>
      <td>36mm</td>
      <td>풀 렝스 Air Zoom 안정감, 무릎 보호</td>
      <td>와이드 정식 ✅</td>
    </tr>
    <tr>
      <td><a href="/shoes/asics-novablast-5">노바블라스트 5</a></td>
      <td>169,000원</td>
      <td>262g</td>
      <td>41.5mm</td>
      <td>FF Blast Max, 통통 튀는 반발</td>
      <td>표준 ⚠️</td>
    </tr>
    <tr>
      <td><a href="/shoes/hoka-clifton-10">클리프턴 10</a></td>
      <td>169,000원</td>
      <td>275g</td>
      <td>40mm</td>
      <td>맥시멀 쿠션, 모자이드 락커</td>
      <td>표준 ⚠️</td>
    </tr>
  </tbody>
</table>

<p>선택 기준:</p>

<ul>
  <li><strong>발볼 넓고 안정감 우선</strong> → 페가수스 42 (와이드 정식 + 풀 렝스 Air Zoom)</li>
  <li><strong>가벼운 반발감 + 통통 튀는 라이드</strong> → 노바블라스트 5 (24g 더 가볍고 41.5mm 맥시멀)</li>
  <li><strong>맥시멀 쿠션 + 부드러운 전환</strong> → 클리프턴 10 (모자이드 락커 지오메트리)</li>
</ul>

<p>가성비 자체는 셋 다 비슷하지만, <strong>한국 러너 평균 발볼(D~2E)을 고려하면 페가수스 42의 와이드 SKU 정식 출시가 결정적인 가산점</strong>입니다.</p>

<h2>전문가 평가 — BITR vs RTR</h2>

<table>
  <thead>
    <tr><th>매체</th><th>점수</th><th>핵심 평가</th><th>한 줄 요약</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Believe in the Run</strong></td>
      <td>B티어<br><small>(Design A / Value A / Performance C)</small></td>
      <td>"6-8마일 스윗스팟 이후 쿠션·반발 부족"</td>
      <td>"원 트릭 포니지만 좋은 트릭"</td>
    </tr>
    <tr>
      <td><strong>Road Trail Run</strong></td>
      <td>8.79/10<br><small>(Ride 8.4 / Fit 9.3 / Value 9.0)</small></td>
      <td>"더 부드러운 라이드, 무게 열세"</td>
      <td>"고등학생·입문자·예산형 러너 최적"</td>
    </tr>
  </tbody>
</table>

<p>두 매체 공통: <strong>"입문급 데일리 트레이너 가성비 최상위, 5-13km 스윗스팟"</strong>. 다만 BITR은 "특정 거리에 갇힌 신발"이라는 점을 단점으로 명확히 짚었고, RTR은 더 우호적으로 봤습니다.</p>

<h2>누가 사야 하나 / 누가 안 사야 하나</h2>

<table>
  <thead>
    <tr><th>✅ 추천 대상</th><th>❌ 비추천 대상</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>러닝 입문 ~ 1년 차</td>
      <td>주 100km+ 고볼륨 훈련</td>
    </tr>
    <tr>
      <td>한강·남산 5-13km 데일리 훈련</td>
      <td>하프마라톤 페이스 훈련</td>
    </tr>
    <tr>
      <td>발볼 넓어 와이드 SKU 필요</td>
      <td>풀코스 대회 PB 도전</td>
    </tr>
    <tr>
      <td>뒤꿈치 착지 + 무릎 보호 우선</td>
      <td>미드풋·전족부 착지 시도 중</td>
    </tr>
    <tr>
      <td>16만원대 1켤레 올라운더</td>
      <td>강한 카본화 반발 원함</td>
    </tr>
    <tr>
      <td>페가수스 41 600km 다 신고 교체</td>
      <td>41이 200~400km 남아있음</td>
    </tr>
  </tbody>
</table>

<h2>한 달 사용기 — 한강 5-10km 데일리 기준</h2>

<p>출시 직후(2026-04-09) 표준 270mm로 구입해 한 달간 한강 코스 약 120km 사용한 인상을 정리하면:</p>

<ul>
  <li><strong>첫인상 (0-30km)</strong>: 41보다 확실히 부드러운 힐. 하지만 286g 무게는 매장 착화 때부터 느껴짐.</li>
  <li><strong>적응기 (30-80km)</strong>: 5km 이지런에서 가장 편했고, 7km 넘어가면 평범한 페이스(6:00/km)에서도 무게가 다리에 누적됨.</li>
  <li><strong>스피드 시도 (10km 이상)</strong>: 5:00/km 이하로 들어가면 신발이 못 따라온다는 느낌. 페이스 훈련은 줌 플라이 6으로 분리.</li>
  <li><strong>120km 시점 마모</strong>: 와플 아웃솔 마모는 거의 없음. 600km까지는 무난할 것으로 예상.</li>
  <li><strong>핏감</strong>: 표준 270mm에서 새끼발가락 살짝 압박 있음(필자 발볼 2E). 와이드로 갔으면 더 편했을 것.</li>
</ul>

<h2>사이즈 가이드</h2>

<div class="callout info">
  <span class="callout-icon">📏</span>
  <div class="callout-body">
    <p class="callout-title">한국 러너 사이즈 추천</p>
    <ul style="margin-top: 8px;">
      <li><strong>발볼 표준 (D)</strong>: 평소 사이즈 그대로 (예: 270mm → 270mm)</li>
      <li><strong>발볼 넓음 (2E)</strong>: 표준 + 반 사이즈 업 또는 <strong>와이드 평소 사이즈</strong></li>
      <li><strong>발볼 매우 넓음 (4E)</strong>: 무조건 <strong>와이드 평소 사이즈</strong> (한국 공식몰 정식 출시)</li>
      <li><strong>발폭 좁음 (B)</strong>: 표준에서 끈 단단히 조여서 사용, 또는 <a href="/shoes/nike-pegasus-plus">페가수스 플러스</a> 고려</li>
    </ul>
  </div>
</div>

<h2>최종 결론</h2>

<p>페가수스 42는 <strong>"마케팅 +15%"가 아니라 "실측 +1.6%p와 와이드 SKU 출시"가 진짜 변화</strong>인 신발입니다. 41 대비 힐 쿠셔닝과 한국 발볼 친화도가 의미 있게 개선됐고, 169,000원 + 풀 렝스 Air Zoom + 와이드 정식 출시 조합은 동급에서 가장 안정적인 입문 데일리 트레이너 옵션입니다.</p>

<p>단, BITR이 짚었듯 "원 트릭 포니"라는 한계는 분명합니다. 하프 이상이나 페이스 훈련은 <a href="/shoes/nike-zoom-fly-6">줌 플라이 6</a>이나 <a href="/shoes/nike-pegasus-plus">페가수스 플러스</a>로 분리하고, 페가수스 42는 5-13km 데일리 + 무릎 보호 + 가성비 1켤레 포지션으로 쓰세요. 그 용도 안에서는 16만원대 가성비 최상위입니다.</p>

<div class="cta-box">
  <h3>페가수스 42 구매 전 체크리스트</h3>
  <ul>
    <li>✅ 발볼 4E급 → 한국 공식몰 와이드 SKU (169,000원, 표준과 동일 가격)</li>
    <li>✅ 무릎 약함 → 36mm 힐 스택 + 600km 교체 사이클</li>
    <li>✅ 5-13km 데일리 → 페가수스 42 (스윗스팟)</li>
    <li>❌ 페이스 훈련·하프 이상 → <a href="/shoes/nike-zoom-fly-6">줌 플라이 6</a> 또는 <a href="/shoes/nike-pegasus-plus">페가수스 플러스</a></li>
    <li>❌ 41 200km+ 남았음 → 그냥 41을 굴리세요</li>
  </ul>
  <p><a href="/shoes/nike-pegasus-42" class="cta-button">📊 페가수스 42 상세 데이터 보기 →</a></p>
</div>

<p class="text-sm text-gray-500 mt-8">
※ 데이터 출처: <a href="https://runrepeat.com/nike-pegasus-42" target="_blank" rel="noopener">RunRepeat 랩 테스트 (2026-04-25 게시)</a>, <a href="https://believeintherun.com/shoe-reviews/nike-pegasus-42-review/" target="_blank" rel="noopener">Believe in the Run</a>, <a href="https://www.roadtrailrun.com/2026/03/nike-pegasus-42-review-4-comparisons.html" target="_blank" rel="noopener">Road Trail Run</a>, Nike Newsroom 공식 발표, 한국 나이키 공식몰. 한 달 사용기는 산초 에디터 개인 기록(약 120km, 한강 코스).
</p>
`,
  },
  {
    id: '2026-gyeongpo-gangneung-marathon',
    slug: '2026-gyeongpo-gangneung-marathon',
    title: '2026 경포마라톤 접수 D-13 | 10월 10일 강릉 경포해변 동해안 하프 코스',
    description: '2026 경포마라톤 접수가 5월 18일(월) 시작됩니다. 10월 10일(토) 강릉 경포해변 출발, 하프·10km·4.7km 동해안 해안선 코스. 풀코스 없음. 2025년 9,300명 역대 최다 — 가족·입문자 친화 가을 대회 총정리.',
    thumbnail: '/images/blog/2026-gyeongpo-gangneung-marathon.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-05',
    category: 'news' as const,
    readingTime: 6,
    tags: ['경포마라톤', '강릉 마라톤', '강원도 마라톤', '하프마라톤', '가을 마라톤', '동해안 마라톤', '대회 일정'],
    event: {
      name: '2026 경포마라톤',
      startDate: '2026-10-10T08:30:00+09:00',
      location: {
        name: '경포해변 중앙광장',
        address: '강원특별자치도 강릉시 경포로 513',
      },
      organizer: '강원도민일보',
      url: 'http://www.xn--289av7rnxbd06bmrc.com/',
      offers: [
        { name: '하프마라톤 (21.0975km)', priceKrw: 40000, availabilityEnds: '2026-06-23', url: 'http://www.xn--289av7rnxbd06bmrc.com/' },
        { name: '10km', priceKrw: 40000, availabilityEnds: '2026-06-23', url: 'http://www.xn--289av7rnxbd06bmrc.com/' },
        { name: '4.7km 건강달리기', priceKrw: 30000, availabilityEnds: '2026-06-23', url: 'http://www.xn--289av7rnxbd06bmrc.com/' },
      ],
    },
    faqs: [
      {
        question: '풀코스(42.195km)도 있나요?',
        answer: '아니요, 2026 경포마라톤은 하프(21.0975km)·10km·4.7km 건강달리기 세 종목만 운영합니다. 2022년 이후 4년 연속 풀코스가 없으며 하프가 최장 거리입니다. 가을 풀코스가 목표라면 같은 10월 25일(예상) 춘천마라톤이 정답입니다.',
      },
      {
        question: '참가비는 얼마인가요?',
        answer: '2026년 공식 참가비는 5월 18일 접수 오픈 시 발표됩니다. 2025년 기준 하프·10km 40,000원, 5km(현 4.7km) 30,000원이었으며 2026년에는 인상 가능성이 있습니다. 정확한 금액은 공식 홈페이지(경포마라톤.com)에서 접수 시작 후 확인하세요.',
      },
      {
        question: '서울에서 강릉까지 KTX로 갈 수 있나요?',
        answer: 'KTX 강릉선으로 서울역·청량리역에서 강릉역까지 약 2시간 소요됩니다. 강릉역에서 경포해변 중앙광장까지는 약 6km, 시내버스 25분 또는 택시 10분 거리입니다. 2025년에는 강릉종합운동장~경포 셔틀버스도 운영됐으며 2026년 운영 여부는 추후 공지 예정입니다.',
      },
      {
        question: '컷오프 시간은 어떻게 되나요?',
        answer: '2025년 기준 하프 2시간 30분, 10km 2시간이었습니다. 2026년 정식 공지는 대회 전 공식 홈페이지에서 확인하세요. 입문자가 부담 없이 도전할 수 있는 넉넉한 컷오프입니다.',
      },
      {
        question: '발볼 넓은 한국 러너에게 추천할 신발이 있나요?',
        answer: '경포마라톤 코스는 동해안 해안 도로로 거의 평탄합니다. 하프 PB 도전이라면 카본 레이싱화, 안전 완주는 데일리 트레이너가 적합하며 발볼이 넓다면 와이드 옵션이 있는 모델이 유리합니다. 본인 발 특성에 맞는 추천은 1분 러닝화 추천 페이지를 참고하세요.',
      },
      {
        question: '주차 가능한가요?',
        answer: '대회 당일 경포해변 중앙광장~강원도립대 후문(영진) 구간이 약 2시간 30분 통제됩니다(2025년 기준 8:20~11:00). 자가용은 권장하지 않으며 KTX·셔틀버스 이용이 안전합니다. 전날 강릉 숙박이 가장 편한 옵션입니다.',
      },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>2026년 10월 10일(토) 강릉 경포해변 중앙광장 출발, 하프·10km·4.7km 동해안 해안선 코스 (풀코스 없음)</li>
    <li>접수 5월 18일(월) 시작 → 6월 23일(화) 마감, 공식 홈페이지 경포마라톤.com 직접 접수</li>
    <li>2025년 9,300명 역대 최다 참가 — 가족·입문자 친화 축제형 대회, 강릉 여행과 결합 최적</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">접수 시작 D-13 — 5월 18일(월) 오픈</p>
    <p>대회는 10월 10일(토), 접수는 <strong>2026년 5월 18일(월)부터 6월 23일(화)까지</strong>입니다. 2025년에는 9,300명이 참가해 역대 최다를 기록했고 정원 1만명 기준 빠르게 마감됐습니다. 강릉 가을 여행과 함께 묶을 계획이라면 KTX 좌석부터 확보해두세요.</p>
  </div>
</div>

<h2>핵심 정보 한눈에</h2>

<div class="stat-grid">
  <div class="stat-card accent">
    <span class="stat-label">대회일</span>
    <span class="stat-value">10/10 (토)</span>
    <span class="stat-sub">8:30 집결</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">하프 21.0975km</span>
    <span class="stat-value">최장 거리</span>
    <span class="stat-sub">컷오프 2:30 (2025 기준)</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">10km · 4.7km</span>
    <span class="stat-value">3종목</span>
    <span class="stat-sub">풀코스 없음</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">접수 기간</span>
    <span class="stat-value">5/18 ~ 6/23</span>
    <span class="stat-sub">공식 홈페이지 직접 접수</span>
  </div>
</div>

<h2>접수부터 대회까지 타임라인</h2>

<div class="timeline">
  <div class="timeline-item active">
    <span class="timeline-date">2026.05.18 (월) — D-13</span>
    <span class="timeline-title">접수 시작</span>
    <p class="timeline-desc">공식 홈페이지 경포마라톤.com에서 접수 오픈 (단체 25인 이상 별도 신청)</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.06.23 (화)</span>
    <span class="timeline-title">접수 마감</span>
    <p class="timeline-desc">2025년 정원(1만명) 기준 조기 마감 가능. 마감일 전 결제 완료 권장</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.09 말 ~ 10월 초</span>
    <span class="timeline-title">레이스팩 안내 / 통제 공지</span>
    <p class="timeline-desc">기념품 수령 방법, 셔틀버스 운영, 교통통제 시간 공식 발표</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.10.10 (토)</span>
    <span class="timeline-title">대회 당일 — 경포해변 중앙광장 8:30 집결</span>
    <p class="timeline-desc">교통통제 8:20~11:00 (2025년 기준), 셔틀버스 운영 시 강릉종합운동장~경포 노선</p>
  </div>
</div>

<h2>대회 기본 정보</h2>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>대회명</strong></td><td>2026 경포마라톤 (12회차 추정)</td></tr>
    <tr><td><strong>출발 / 도착</strong></td><td>경포해변 중앙광장 (강원특별자치도 강릉시 경포로 513) — 원점 복귀</td></tr>
    <tr><td><strong>종목</strong></td><td>하프마라톤 21.0975km · 10km · 4.7km 건강달리기</td></tr>
    <tr><td><strong>주최 · 주관</strong></td><td>강원도민일보 · 강릉시육상연맹</td></tr>
    <tr><td><strong>접수처</strong></td><td><a href="http://www.xn--289av7rnxbd06bmrc.com/" rel="noopener noreferrer">경포마라톤.com</a> (공식 홈페이지 직접 접수)</td></tr>
    <tr><td><strong>문의</strong></td><td>033-651-0112 / kkang7705@naver.com</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">참가비·정원·기념품은 5월 18일 접수 오픈 시 확정</p>
    <p>2026년 공식 참가비와 종목별 정원은 5월 18일 접수 시작과 함께 발표될 예정입니다. <strong>2025년 기준 참가비는 하프·10km 40,000원, 5km 30,000원</strong>이었고 2024년 대비 인상이 있었던 만큼 2026년에도 변동 가능성이 있습니다. 2025년 시상품은 갤럭시 버즈3(1~5위)·아머핏 종아리 기어(6~10위)였고 기념품은 별도 공지로 안내됐습니다.</p>
  </div>
</div>

<h2>동해안 해안선 코스 — 솔향·바다향·커피향</h2>

<p>경포마라톤의 가장 큰 매력은 <strong>강릉 동해안을 따라 달리는 해안선 코스</strong>입니다. 도시 마라톤과 달리 신호 대기·교차로 정차가 적고, 바닷바람과 솔숲을 동시에 만나는 풍경이 한국 가을 대회 중에서도 손꼽히는 매력으로 통합니다.</p>

<table>
  <thead>
    <tr><th>종목</th><th>코스 (2025년 기준)</th><th>특징</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>하프</strong></td>
      <td>경포해변 중앙광장 → 경포해안로 → 경포인공폭포 → 연곡해변 → 영진해변 반환 → 원점</td>
      <td>거의 평탄, 해발 차 미미. 사천·연곡·영진 해변 풍경 연속</td>
    </tr>
    <tr>
      <td><strong>10km</strong></td>
      <td>경포해변 중앙광장 → 사천 하평교 반환 → 원점</td>
      <td>하프 코스 축약 버전. 해안 풍경 그대로</td>
    </tr>
    <tr>
      <td><strong>4.7km</strong></td>
      <td>경포해변 → 경포인공폭포 → 사근진 → 순포습지 → 원점</td>
      <td>건강달리기. 가족·입문자용. 칩 타이밍 없음</td>
    </tr>
  </tbody>
</table>

<p>코스 전체가 평탄하고 풍경이 좋아 <strong>첫 하프 도전</strong>이나 <strong>가족 동반 러닝 여행</strong>에 잘 맞습니다. 정확한 2026년 코스는 대회 전 공식 홈페이지에서 재확인하세요.</p>

<h2>이 대회는 누구에게 잘 맞나</h2>

<div class="pros-cons">
  <div class="pros">
    <div class="pros-title">✓ 이런 러너에게 추천</div>
    <ul>
      <li><strong>첫 하프 도전자</strong> — 평탄 해안 코스 + 컷오프 2:30(넉넉)으로 부담 적음</li>
      <li><strong>가족·커플 러닝 여행</strong> — 4.7km 건강달리기로 함께 참가 가능</li>
      <li><strong>춘천 광클 실패한 가을 러너</strong> — 같은 10월 동해안 대안 (10/10 토요일)</li>
      <li><strong>강릉 여행을 좋아하는 러너</strong> — 경포호·안목커피거리·초당순두부와 결합 최적</li>
      <li><strong>축제형 대회 분위기를 원하는 러너</strong> — 2025년 9,300명 + 관람객 1.2만명 운집</li>
    </ul>
  </div>
  <div class="cons">
    <div class="cons-title">✕ 이런 러너에겐 비추</div>
    <ul>
      <li><strong>풀코스가 목표</strong> — 풀 종목 없음. <a href="/blog/2026-chuncheon-marathon-registration-guide">춘천마라톤(10/25 예상)</a> 우선</li>
      <li><strong>토요일 출근 러너</strong> — 토요일 대회, 일정 조정 필수</li>
      <li><strong>당일치기 수도권 러너</strong> — KTX 왕복 4시간 + 대회 시간 부담. 1박 2일 권장</li>
      <li><strong>도심 러닝 분위기 선호</strong> — 광화문·여의도 같은 도시 풍경 없음 (자연 코스 위주)</li>
    </ul>
  </div>
</div>

<h2>강릉 여행과 묶는 1박 2일 모델</h2>

<p>경포마라톤이 토요일 오전에 끝나는 점을 활용하면 가을 강릉 여행과 자연스럽게 이어집니다.</p>

<ul>
  <li><strong>금요일 오후:</strong> KTX 강릉선 청량리역 → 강릉역(약 2시간), 경포 인근 숙소 체크인</li>
  <li><strong>금요일 저녁:</strong> 초당순두부·강릉 회센터에서 가벼운 식사 (탄수화물 위주)</li>
  <li><strong>토요일 오전:</strong> 8:30 경포해변 중앙광장 집결 → 11시 전후 완주</li>
  <li><strong>토요일 오후:</strong> 안목커피거리·경포호 산책·오죽헌 (회복 산책 겸 관광)</li>
  <li><strong>일요일:</strong> 정동진·주문진 또는 강릉 카페 투어 후 KTX 복귀</li>
</ul>

<h2>가을 강릉 마라톤 신발 선택</h2>

<p>10월 강릉 평년 기온은 오전 10~16℃ 수준. 해안 도로 평탄 코스라 신발 선택 폭이 넓습니다.</p>

<ul>
  <li><strong>하프 PB 도전 (1:30~2:00):</strong> 카본 플레이트 레이싱화 또는 슈퍼트레이너. <a href="/best/racing">레이싱화 추천</a></li>
  <li><strong>하프 안전 완주 (2:00~2:30):</strong> 쿠셔닝 좋은 데일리 트레이너. <a href="/best/daily-trainer">데일리 트레이너 추천</a></li>
  <li><strong>10km · 4.7km 가족 참가:</strong> 평소 신는 데일리화면 충분</li>
  <li><strong>발볼 넓은 한국 러너:</strong> 와이드 옵션이 있는 모델 우선. <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국인 러닝화 추천</a> 참고</li>
</ul>

<p>본인 페이스·발 특성에 맞는 추천이 필요하면 <a href="/recommend">1분 러닝화 추천</a>을 활용해보세요.</p>

<h2>접수 전 체크리스트</h2>

<ul>
  <li>참가 종목 결정 (하프 / 10km / 4.7km 건강달리기)</li>
  <li>5월 18일(월) 접수 시작 알람 — 정원 1만명 기준 조기 마감 가능</li>
  <li>경포마라톤.com 회원가입 사전 준비 (공식 홈페이지 직접 접수)</li>
  <li>KTX 좌석 선예약 (10월 9~10일 강릉선 빠르게 매진)</li>
  <li>강릉 숙소 예약 (경포해변·교동 일대 가을 성수기 주의)</li>
  <li>대회 1주일 전 공식 안내문 재확인 (출발 시각·교통통제·셔틀버스)</li>
</ul>

<div class="callout success">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">가을 시즌 다른 대회와 비교 검토</p>
    <p>같은 10월 가을 메이저 대회를 함께 검토해보세요 — <a href="/blog/2026-seoul-open-marathon-registration">서울 오픈 마라톤(10/5 광화문, 5/10 마감)</a>, <a href="/blog/2026-dongma-halfyear-marathon-schedule">2026 하반기 동마 대회</a>(서울레이스 10/11, 경주국제 10/17), <a href="/blog/2026-chuncheon-marathon-registration-guide">춘천마라톤(10/25 예상, 풀코스)</a>. 본인 목표(완주/PB/풀/하프)와 일정에 맞춰 1~2개 선택이 정석입니다.</p>
  </div>
</div>

<p>주최 측 문의: 033-651-0112 / kkang7705@naver.com</p>

<p>국내 다른 가을 대회를 찾고 있다면 <a href="/marathon">2026 마라톤 캘린더</a>에서 월별로 비교할 수 있습니다.</p>

<p><small>출처: 경포마라톤 공식 홈페이지 <a href="http://www.xn--289av7rnxbd06bmrc.com/" rel="noopener noreferrer">경포마라톤.com</a> · <a href="https://marathongo.co.kr/raceDetail/domestic/2026-gyeongpo-marathon" rel="noopener noreferrer">마라톤GO 2026 경포마라톤</a> · 강원도민일보 2025 대회 보도 / 작성일 2026년 5월 5일 기준 / 참가비·정원·기념품·코스·교통통제는 5월 18일 접수 오픈 후 공식 공지를 재확인하시기 바랍니다.</small></p>
`,
  },
  {
    id: '2026-seoul-open-marathon-registration',
    slug: '2026-seoul-open-marathon-registration',
    title: '2026 서울 오픈 마라톤 접수 D-6 | 10월 5일(월) 광화문 출발 · 5월 10일 마감',
    description: '광화문광장에서 출발하는 2026 서울 오픈 마라톤(10월 5일 월요일) 접수가 5월 10일까지입니다. 하프 8만원, 10km 6만원, 페이스메이커 운영. 도심 평탄 코스를 노리는 가을 PB 도전자에게 대안.',
    thumbnail: '/images/blog/2026-seoul-open-marathon-registration.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-04',
    category: 'news' as const,
    readingTime: 5,
    tags: ['서울 오픈 마라톤', '광화문 마라톤', '서울 도심 마라톤', '하프마라톤', '가을 마라톤', '대회 일정'],
    event: {
      name: '2026 서울 오픈 마라톤 대회',
      startDate: '2026-10-05T07:30:00+09:00',
      location: {
        name: '광화문광장 앞 대로변',
        address: '서울특별시 종로구 세종대로',
      },
      organizer: '서울오픈마라톤 조직위원회',
      url: 'https://seoulopen.or.kr',
      offers: [
        { name: '하프 (21.0975km)', priceKrw: 80000, availabilityEnds: '2026-05-10', url: 'https://seoulopen.or.kr/sub/register.php' },
        { name: '10K', priceKrw: 60000, availabilityEnds: '2026-05-10', url: 'https://seoulopen.or.kr/sub/register.php' },
      ],
    },
    faqs: [
      {
        question: '참가비는 얼마인가요?',
        answer: '하프(21.0975km) 80,000원, 10K 60,000원입니다. 두 종목 모두 2026년 5월 10일(일)까지 선착순 접수입니다.',
      },
      {
        question: '풀코스(42.195km) 종목도 있나요?',
        answer: '아니요, 2026 서울 오픈 마라톤은 하프와 10K 두 종목만 운영합니다. 가을 풀코스가 목표라면 같은 10월에 열리는 춘천마라톤(10/25 예상)이나 JTBC 서울마라톤(11월)을 검토하세요.',
      },
      {
        question: '10월 5일이 평일(월요일)인데 대회가 가능한가요?',
        answer: '평일 대회입니다. 개천절(10/3 토요일) 연휴 직후라 임시공휴일 지정 여부가 변수입니다. 출근 러너는 휴무 조정이 필요하며, 정확한 공휴일 정보는 정부 발표를 확인하세요.',
      },
      {
        question: '발볼이 넓은 한국 러너에게 추천할 신발이 있나요?',
        answer: '평탄 도심 코스라 신발 선택 폭이 넓습니다. 하프 PB 도전이라면 카본 레이싱화, 안전 완주는 데일리 트레이너가 적합합니다. 본인 발볼·체중에 맞는 신발은 1분 러닝화 추천 페이지에서 확인할 수 있습니다.',
      },
      {
        question: '컷오프 시간은 어떻게 되나요?',
        answer: '2026년 5월 4일 기준 공식 사이트에 컷오프 시간이 명시되어 있지 않습니다. 정확한 정보는 대회 직전 공식 안내문 또는 070-7766-1238로 문의하세요.',
      },
      {
        question: '주차 가능한가요?',
        answer: '광화문광장 인근은 대회 당일 교통 통제 가능성이 큽니다. 자가용보다는 지하철 5호선 광화문역 등 대중교통 이용을 권장합니다. 정확한 교통 통제 안내는 대회 직전 공식 사이트에서 공지됩니다.',
      },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>2026년 10월 5일(월) 광화문광장 앞 출발 → 무교로 도착, 하프·10K 평탄 도심 코스</li>
    <li>접수 마감 5월 10일(일) 선착순, 하프 80,000원 · 10K 60,000원</li>
    <li>풀코스 없음 — 풀이 목표라면 춘천(10/25 예상), 도심 분위기·페이스메이커 운영을 원하면 이 대회</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">접수 마감 D-6 — 5월 10일(일)까지</p>
    <p>대회는 10월 5일(월), 접수는 <strong>2026년 5월 10일(일)까지 선착순</strong>입니다. 정원이 차면 조기 마감 가능성 있어요. 광화문 도심 코스라 대회 분위기 자체에 매력을 느낀다면 이번 주 안에 결정하시는 게 좋습니다.</p>
  </div>
</div>

<h2>핵심 정보 한눈에</h2>

<div class="stat-grid">
  <div class="stat-card accent">
    <span class="stat-label">대회일</span>
    <span class="stat-value">10/5 (월)</span>
    <span class="stat-sub">오전 7:30 출발</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">하프 21.0975km</span>
    <span class="stat-value">80,000원</span>
    <span class="stat-sub">만 18세 이상</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">10K</span>
    <span class="stat-value">60,000원</span>
    <span class="stat-sub">연령 제한 없음</span>
  </div>
  <div class="stat-card">
    <span class="stat-label">접수 마감</span>
    <span class="stat-value">5/10 (일)</span>
    <span class="stat-sub">선착순</span>
  </div>
</div>

<h2>접수부터 대회까지 타임라인</h2>

<div class="timeline">
  <div class="timeline-item done">
    <span class="timeline-date">2026.04.23 (목)</span>
    <span class="timeline-title">접수 시작</span>
    <p class="timeline-desc">seoulopen.or.kr에서 선착순 접수 오픈</p>
  </div>
  <div class="timeline-item active">
    <span class="timeline-date">2026.05.10 (일) — D-6</span>
    <span class="timeline-title">접수 마감</span>
    <p class="timeline-desc">정원 도달 시 조기 마감 가능. 결정은 이번 주 안에</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.09 말</span>
    <span class="timeline-title">레이스 키트 수령 안내</span>
    <p class="timeline-desc">대회 약 1주 전 공식 안내문 발송 (출발·집결 시각 최종 확정)</p>
  </div>
  <div class="timeline-item">
    <span class="timeline-date">2026.10.05 (월)</span>
    <span class="timeline-title">대회 당일 — 광화문광장 출발 7:30</span>
    <p class="timeline-desc">개천절(10/3 토) 연휴 직후 평일. 임시공휴일 지정 여부 확인 필수</p>
  </div>
</div>

<h2>대회 기본 정보</h2>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>대회명</strong></td><td>2026 서울 오픈 마라톤 대회</td></tr>
    <tr><td><strong>장소</strong></td><td>광화문광장 앞 대로변 출발 → 무교로 도착 (예정)</td></tr>
    <tr><td><strong>주최</strong></td><td>서울오픈마라톤 조직위원회 · (사)한국체육개발원</td></tr>
    <tr><td><strong>접수처</strong></td><td><a href="https://seoulopen.or.kr/sub/register.php" rel="noopener noreferrer">seoulopen.or.kr</a></td></tr>
    <tr><td><strong>문의</strong></td><td>070-7766-1238 / somarathon@naver.com</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">컷오프·정원·교통통제 안내는 공식 사이트 확인</p>
    <p>현재(5월 4일 기준) 컷오프 시간, 종목별 정원, 교통통제 상세 안내가 공식 사이트에 별도 명시돼 있지 않습니다. 정확한 사항은 대회 직전 <a href="https://seoulopen.or.kr" rel="noopener noreferrer">공식 홈페이지</a> 또는 070-7766-1238로 문의하세요.</p>
  </div>
</div>

<h2>광화문 도심 코스 — 가을 도시 러닝의 매력</h2>

<p>국내 가을 마라톤 중 <strong>광화문광장에서 출발하는 대회</strong>는 흔하지 않습니다. 서울 오픈 마라톤의 가장 큰 매력은 도심 한복판 출발 — 경복궁·청계천·시청을 배경으로 달리는 경험입니다.</p>

<ul>
  <li><strong>출발지:</strong> 광화문광장 앞 대로변 (지하철 5호선 광화문역 도보 1분)</li>
  <li><strong>도착지:</strong> 무교로 (도착 후 시청·청계천 산책 가능)</li>
  <li><strong>지형:</strong> 서울 도심 평탄 코스 (구체적 언덕 정보 미공개)</li>
  <li><strong>페이스메이커:</strong> 광화문 페이싱팀 운영 예정 — 초보 러너에게 유리</li>
</ul>

<h2>이 대회는 누구에게 잘 맞나</h2>

<div class="pros-cons">
  <div class="pros">
    <div class="pros-title">✓ 이런 러너에게 추천</div>
    <ul>
      <li><strong>가을 첫 하프 도전자</strong> — 평탄 도심 코스 + 페이스메이커 운영으로 부담 적음</li>
      <li><strong>춘천마라톤 광클 실패</strong> — 같은 10월 초 도심 대회로 가을 시즌 대안</li>
      <li><strong>서울 거주 러너</strong> — 셔틀·숙박 부담 없이 당일 참가 가능</li>
      <li><strong>도심 러닝 사진</strong>을 좋아하는 러너 — 광화문 출발 인증샷</li>
    </ul>
  </div>
  <div class="cons">
    <div class="cons-title">✕ 이런 러너에겐 비추</div>
    <ul>
      <li><strong>풀코스가 목표</strong> — 풀 종목 없음. <a href="/blog/2026-chuncheon-marathon-registration-guide">춘천마라톤(10/25 예상)</a> 우선</li>
      <li><strong>10월 5일(월) 출근 러너</strong> — 평일 대회, 임시공휴일 지정 여부 확인 필수</li>
      <li><strong>경치 풍부한 자연 코스 선호</strong> — 의암호·강변 같은 자연 풍경 없음</li>
    </ul>
  </div>
</div>

<h2>10월 가을 도심 마라톤 신발 선택</h2>

<p>10월 초 서울 평년 기온은 오전 15~20℃ 수준으로 러닝 최적기. 광화문~무교로 도심 평탄 코스라 신발 선택 폭이 넓습니다.</p>

<ul>
  <li><strong>하프 PB 도전 (1:30 미만):</strong> 카본 플레이트 레이싱화. <a href="/best/racing">레이싱화 추천</a></li>
  <li><strong>하프 안전 완주 (1:30~2:30):</strong> 슈퍼트레이너·데일리 트레이너. <a href="/best/daily-trainer">데일리 트레이너 추천</a></li>
  <li><strong>10K 가벼운 참가:</strong> 평소 신는 데일리화면 충분</li>
</ul>

<p>본인 페이스·발 특성에 맞는 추천이 필요하면 <a href="/recommend">1분 러닝화 추천</a>을 활용해보세요.</p>

<h2>접수 전 체크리스트</h2>

<ul>
  <li>참가 종목 결정 (하프/10K)</li>
  <li>10월 5일(월) 일정 확인 — 평일 대회</li>
  <li>seoulopen.or.kr 회원가입 및 신청서 작성</li>
  <li>참가비 결제</li>
  <li>대회 1주일 전 공식 안내문 재확인 (출발·집결 시각, 교통통제)</li>
</ul>

<div class="callout success">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">가을 시즌 다른 대회와 비교 검토</p>
    <p>같은 10월에 열리는 가을 메이저 대회를 함께 검토해보세요 — 동마클럽 계열 <a href="/blog/2026-dongma-halfyear-marathon-schedule">2026 하반기 동마 대회</a>(서울레이스 10/11, 경주국제 10/17), <a href="/blog/2026-chuncheon-marathon-registration-guide">춘천마라톤(10/25 예상)</a>. 본인 목표(완주/PB/풀/하프)에 맞춰 1~2개 선택이 정석입니다.</p>
  </div>
</div>

<p>주최 측 문의: 070-7766-1238 / somarathon@naver.com</p>

<p>국내 다른 가을 대회를 찾고 있다면 <a href="/marathon">2026 마라톤 캘린더</a>에서 월별로 비교할 수 있습니다.</p>

<p><small>출처: 서울오픈마라톤 공식 홈페이지 <a href="https://seoulopen.or.kr" rel="noopener noreferrer">seoulopen.or.kr</a> · 마라톤GO 대회 정보 / 작성일 2026년 5월 4일 기준 / 코스·출발 시각·교통통제는 주최 측 사정에 따라 변경될 수 있으며, 대회 직전 공식 공지를 재확인하시기 바랍니다.</small></p>
`,
  },
  {
    id: '2026-adidas-adios-pro-evo-3-korea-release',
    slug: '2026-adidas-adios-pro-evo-3-korea-release',
    title: '아디다스 아디오스 프로 에보 3 한국 래플 D-2 | 97g 서브2 신발의 정체',
    description: '런던 마라톤에서 공인 첫 서브2(1:59:30)와 세계신기록을 함께 깬 그 신발. 5월 4일 아디다스 앱 래플 응모 시작, 5월 7일 당첨자 구매. 97g 무게·EnergyRim 신구조·74만원 추정가까지 — 한국 러너가 알아야 할 모든 것.',
    thumbnail: '/images/blog/2026-adidas-adios-pro-evo-3-korea-release.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-02',
    category: 'news' as const,
    readingTime: 8,
    tags: ['아디다스', '아디오스 프로 에보 3', '카본화', '슈퍼슈즈', '서브2', '런던마라톤', '세계신기록'],
    content: `
<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">한국 래플 응모 D-2 — 5월 4일(월) 시작</p>
    <p>아디다스 공식 앱에서 <strong>5월 4일(월) 응모 → 5월 7일(목) 당첨자 발표 및 구매</strong>로 진행됩니다. 소량 한정 발매로 알려져 있고, 본격 확대 출시는 가을(9월) 마라톤 시즌으로 예정. 응모 의향이 있다면 지금 바로 아디다스 앱 회원가입과 결제 수단 등록을 마쳐두세요.</p>
  </div>
</div>

<h2>일단 무슨 일이 있었나 — 4월 27일 런던</h2>

<p>2026년 4월 27일 런던 마라톤. 케냐의 사바스티안 사웨가 <strong>1시간 59분 30초</strong>로 결승선을 끊었습니다. 인류 사상 <strong>공인 레이스 첫 서브2</strong>이자 마라톤 세계신기록. 2위 요미프 케젤차(에티오피아)도 1:59:41로 서브2를 달성했습니다. 두 명이 같은 레이스에서 2시간 벽을 깬 첫 사례입니다.</p>

<p>그리고 둘 다 같은 신발을 신었습니다. <strong>아디다스 아디제로 아디오스 프로 에보 3 (Adizero Adios Pro Evo 3)</strong>. 이 글에서는 그 신발이 정확히 무엇인지, 한국에서 어떻게 살 수 있는지, 그리고 정말 살 만한 신발인지 정리합니다.</p>

<h2>한 눈에 보는 에보 3</h2>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>공식명</strong></td><td>Adidas Adizero Adios Pro Evo 3</td></tr>
    <tr><td><strong>글로벌 출시</strong></td><td>2026년 4월 25일 (런던 마라톤 2일 전 한정 출시)</td></tr>
    <tr><td><strong>한국 출시</strong></td><td>5월 4일 앱 래플 응모 → 5월 7일 당첨자 구매 / 가을 확대 출시</td></tr>
    <tr><td><strong>글로벌 정가</strong></td><td>$500 / €500</td></tr>
    <tr><td><strong>한국 정가 (예상)</strong></td><td>74만원 이상 추정 (전작 에보 2 국내가 59만 9,000원)</td></tr>
    <tr><td><strong>무게</strong></td><td><strong>97g (US M9)</strong> — 업계 최초 서브-100g 마라톤 레이서</td></tr>
    <tr><td><strong>스택</strong></td><td>힐 39mm / 전족부 36mm (World Athletics 40mm 규제 이내)</td></tr>
    <tr><td><strong>드롭</strong></td><td>3mm (실측 5.9mm)</td></tr>
    <tr><td><strong>예상 마일리지</strong></td><td>약 100km — 1~2회 레이스용 소모품</td></tr>
  </tbody>
</table>

<h2>97g가 어떻게 가능했나 — 카본 플레이트를 버린 신발</h2>

<p>지난 몇 년 슈퍼슈즈 경쟁의 핵심은 "더 두꺼운 폼 + 더 단단한 카본 플레이트"였습니다. 그런데 이 조합은 무게의 한계가 있었어요. Vaporfly 4도 166g, Alphafly 3는 220g입니다.</p>

<p>아디다스가 에보 3에서 한 일은 <strong>카본 플레이트를 통째로 버린 것</strong>입니다.</p>

<ul>
  <li><strong>EnergyRim:</strong> 전통 카본 플레이트나 Energy Rods(에보 1·2의 5개 카본 로드) 대신, U자형 외부 림(perimeter)이 신발 둘레를 따라 강성을 잡아줍니다. 전족부에는 외부 블레이드 2개만 추가.</li>
  <li><strong>Lightstrike Pro EVO:</strong> 신규 폼. 기존 Lightstrike Pro 대비 50% 경량, 에너지 리턴 11% 향상.</li>
  <li><strong>힐 아웃솔 제거:</strong> 가벼움을 위한 극단적 선택. 전족부에만 Continental 러버 유지.</li>
  <li><strong>새로운 어퍼:</strong> 카이트서핑 세일 소재에서 영감받은 초경량 직조.</li>
</ul>

<p>결과는 97g + 에너지 리턴 80.2%(전족부, RunRepeat 실측). 무게는 절반인데 에너지 리턴은 오히려 상위권입니다.</p>

<h2>한국에서 어떻게 사나 — 5월 4일 래플이 거의 유일한 정공법</h2>

<table>
  <thead>
    <tr><th>경로</th><th>현실성</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>① 아디다스 앱 래플 (5/4 응모, 5/7 발표)</strong></td><td>가장 합리적. 단 소량 한정 — 당첨 확률 낮음</td></tr>
    <tr><td><strong>② 가을 확대 출시 (2026년 9월~)</strong></td><td>한국 가을 마라톤 시즌(춘천·서울·JTBC) 직전 추가 물량 예정</td></tr>
    <tr><td><strong>③ 해외 직구 (adidas.com, Running Warehouse)</strong></td><td>해외도 즉시 품절. 재입고 알림 등록 후 대기</td></tr>
    <tr><td><strong>④ 리셀 (KREAM, StockX)</strong></td><td>해외 리셀가 4,000달러+ 보고됨. <strong>현실적으로 비추</strong></td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">래플 응모 전 체크</p>
    <p>① 아디다스 공식 앱 회원가입 + 본인인증 완료 ② 결제 수단(카드) 등록 ③ 배송 주소 확인 ④ 응모 시간(공식 공지 확인) 알람 설정. 당첨되면 보통 24~48시간 내 결제해야 자격 유지됩니다.</p>
  </div>
</div>

<h2>그래서 살 만한가 — 한국 러너 관점 냉정한 평가</h2>

<h3>✅ 사도 되는 사람</h3>

<ul>
  <li><strong>서브2:30~서브3:00 페이스 마라토너</strong> — 한 번의 레이스에 모든 걸 거는 경우</li>
  <li><strong>이미 훈련용 신발 따로 보유한 러너</strong> (예: <a href="/shoes/adidas-adios-pro-4">아디오스 프로 4</a>를 일상으로 신고 에보 3를 레이스 전용으로)</li>
  <li><strong>주요 목표 대회를 위해 74만원 투자가 부담스럽지 않은 러너</strong> — 춘천·서울·JTBC 같은 1년 한 번의 메이저 PB 도전</li>
  <li><strong>"세계신기록 신발"의 상징성을 원하는 컬렉터</strong></li>
</ul>

<h3>❌ 안 사도 되는 (사실 사면 안 되는) 사람</h3>

<ul>
  <li><strong>서브4 이상 페이스 러너</strong> — 4시간 넘게 신발이 버텨주지 않을 가능성. 마지막 10km 발 통증 위험</li>
  <li><strong>발볼 넓은 한국 러너</strong> — 토박스 폭이 <strong>65.9mm</strong>로 좁음(narrow) 분류. 와이드 옵션 없음. 풀코스 후반 새끼발가락 통증 거의 확실</li>
  <li><strong>훈련화 겸용을 원하는 러너</strong> — 마일리지 100km면 한 달이면 끝. km당 7,400원 이상의 소모품</li>
  <li><strong>처음 카본화를 경험하는 러너</strong> — 드롭 3mm + 극강 로커가 아킬레스/종아리 부하 증가시킴. <a href="/shoes/saucony-endorphin-pro-4">엔돌핀 프로 4</a>나 <a href="/shoes/asics-magic-speed-4">매직 스피드 4</a>로 카본 적응 후 도전 권장</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">서브3 미만이라면 Vaporfly 4가 정답</p>
    <p>냉정하게 말해서, 일반 러너 기준 에보 3가 Vaporfly 4(약 35만원)나 <a href="/shoes/asics-metaspeed-sky-plus">메타스피드 스카이+</a>(약 29만원)보다 90% 이상 빠르게 해주지는 않습니다. 차이는 분당 1~2초 수준. 가격은 2배 이상이고 마일리지는 절반 이하예요.</p>
  </div>
</div>

<h2>다른 슈퍼슈즈와 비교</h2>

<table>
  <thead>
    <tr><th>모델</th><th>무게</th><th>한국가</th><th>마일리지</th><th>특징</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>에보 3</strong></td>
      <td>97g</td>
      <td>74만원~</td>
      <td>~100km</td>
      <td>업계 최경량, 1~2회 레이스용</td>
    </tr>
    <tr>
      <td><a href="/shoes/nike-vaporfly-4">Vaporfly 4</a></td>
      <td>166g</td>
      <td>약 35만원</td>
      <td>~400km</td>
      <td>대중적 PB 도전 표준</td>
    </tr>
    <tr>
      <td><a href="/shoes/nike-alphafly-3">Alphafly 3</a></td>
      <td>220g</td>
      <td>약 36만원</td>
      <td>~500km</td>
      <td>쿠션·안정성 우위, 풀코스 후반 강함</td>
    </tr>
    <tr>
      <td><a href="/shoes/asics-metaspeed-sky-plus">메타스피드 스카이+</a></td>
      <td>159g</td>
      <td>약 29만원</td>
      <td>~400km</td>
      <td>가성비 슈퍼슈즈, 한국 인기 모델</td>
    </tr>
    <tr>
      <td><a href="/shoes/saucony-endorphin-elite-2">엔돌핀 엘리트 2</a></td>
      <td>195g</td>
      <td>약 32만원</td>
      <td>~500km</td>
      <td>토박스 넓음, 한국 발에 유리</td>
    </tr>
  </tbody>
</table>

<h2>전작 에보 1·2 흐름 정리</h2>

<ul>
  <li><strong>에보 1 (2024):</strong> 약 138g. Energy Rods 2.0 + Lightstrike Pro. $500 한정 발매로 "1회용 슈퍼슈즈" 카테고리 개척</li>
  <li><strong>에보 2 (2025):</strong> 약 139g. 에너지 리턴 5% 향상, 전족부 스택 3mm 증가. 미세 개선에 그쳤다는 평가</li>
  <li><strong>에보 3 (2026):</strong> <strong>97g + EnergyRim 구조</strong>. 카본 플레이트를 버리는 근본적 구조 변경. 결과 → 런던 세계신기록</li>
</ul>

<p>한 가지 흥미로운 점: 아디다스 자체 발표로 에보 3는 에보 2 대비 러닝 효율 1.6% 향상. 마라톤 풀코스에서 1.6%는 약 <strong>2분 차이</strong>입니다. 사웨가 1:59:30으로 끊은 게 우연이 아니라는 얘기죠.</p>

<h2>요약 — 사야 하나, 말아야 하나</h2>

<p>저는 산초 에디터로서 두 가지 결론으로 정리합니다.</p>

<ol>
  <li><strong>응모는 해라.</strong> 어차피 무료입니다. 당첨되면 그때 진짜 살지 결정해도 됩니다. 5월 4일 아디다스 앱.</li>
  <li><strong>가을 마라톤이 중요한 PB 도전 + 서브3:30 페이스 + 발볼 표준</strong>이면 진지하게 고려할 가치가 있습니다. 그 외에는 <a href="/best/racing">기존 카본화</a>로 충분합니다.</li>
</ol>

<p>본인의 발볼·체중·페이스에 맞는 카본화 선택이 막막하다면 <a href="/recommend">1분 러닝화 추천</a>을 활용해 후보를 좁혀보세요.</p>

<div class="callout success">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">가을 PB 도전이 목표라면</p>
    <p>춘천마라톤 풀코스 접수가 6월 24일로 예상됩니다. 신발보다 먼저 잡아야 할 게 자리예요. <a href="/blog/2026-chuncheon-marathon-registration-guide">2026 춘천마라톤 풀코스 접수 가이드</a>에서 광클 전략을 확인하세요.</p>
  </div>
</div>

<p><small>출처: 아디다스 공식 보도자료 / Road Trail Run / RunRepeat / The Run Testers / GQ Korea / 한국경제 / WWD / 작성일 2026년 5월 2일 기준 / 한국 정가·출시 일정·래플 방식은 아디다스 코리아 공식 발표에 따라 변동될 수 있습니다.</small></p>
`,
  },
  {
    id: '2026-chuncheon-marathon-registration-guide',
    slug: '2026-chuncheon-marathon-registration-guide',
    title: '2026 춘천마라톤 풀코스 접수 D-53 | 6월 24일 14시 광클 전략과 코스 분석',
    description: '국내 최고 PB 친화 코스로 꼽히는 조선일보 춘천마라톤. 풀코스 접수가 6월 24일(화) 14시로 예상됩니다. 광클 전략·25km 오르막·교통/숙박·신발 선택까지 출전 준비 완전 가이드.',
    thumbnail: '/images/blog/2026-chuncheon-marathon-registration-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-02',
    category: 'news' as const,
    readingTime: 8,
    tags: ['춘천마라톤', '조선일보 춘천마라톤', '풀코스', 'PB 도전', '가을 마라톤', '대회 일정'],
    content: `
<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">2026 풀코스 접수 6월 24일(화) 14시 — D-53</p>
    <p>본 글의 일정·접수 시각은 2025년 패턴(매년 6월 마지막 주 화요일 14시 풀코스 접수 오픈) 기준 예측치입니다. <strong>2026년 공식 발표는 5월 중하순 공개 예정</strong>이니, 공식 홈페이지 <a href="https://www.chuncheonmarathon.com/" rel="noopener noreferrer">chuncheonmarathon.com</a>과 인스타그램 <a href="https://www.instagram.com/chuncheon_marathon/" rel="noopener noreferrer">@chuncheon_marathon</a>을 함께 모니터링하세요.</p>
  </div>
</div>

<h2>춘천마라톤이 뭐길래</h2>

<p>1946년 창설된 국내 최고(最古) 마라톤 중 하나. 의암호 수변 AIMS 국제공인 코스에서 매년 10월 마지막 주 일요일 열립니다. <strong>"춘마는 뛰어야 진짜 러너"</strong>라는 말이 있을 정도로 국내 마라톤 커뮤니티에서 가장 상징적인 가을 대회입니다.</p>

<p>이 대회가 특별한 이유 세 가지:</p>

<ul>
  <li><strong>PB 친화적 평탄 코스</strong> — 의암호 따라 도는 흐름이 자연스럽고 고저차가 작음</li>
  <li><strong>10월 말 서늘한 기온</strong> — 풀코스 페이스 유지에 이상적</li>
  <li><strong>의암호 단풍 절경</strong> — 풍경이 좋아 심리적 페이스 유지에도 도움</li>
</ul>

<p>국내 메이저 풀코스(서울·JTBC·춘천) 중 PB 도전에 가장 자주 추천되는 대회가 춘천입니다.</p>

<h2>2026 접수 예상 일정</h2>

<table>
  <thead>
    <tr><th>종목</th><th>접수 오픈 (예측)</th><th>참가비</th><th>컷오프</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>풀코스 (42.195km)</strong></td><td>2026년 6월 24일(화) 14:00</td><td>100,000원</td><td>5시간 30분</td></tr>
    <tr><td><strong>10K</strong></td><td>2026년 6월 26일(목) 14:00</td><td>80,000원</td><td>1시간 30분</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">신청과 결제는 분리 운영</p>
    <p>춘천마라톤은 신청(선착순)과 결제가 별도로 이루어집니다. 신청 성공 후 결제 기한(접수 후 약 1주일) 안에 입금하지 않으면 자격이 자동 소멸합니다. <strong>2025년부터 단체 신청은 폐지</strong>되었으니 모두 개인 접수입니다.</p>
  </div>
</div>

<p>풀코스는 만 18세 이상(대회일 기준), 10K는 연령 제한 없습니다. 조선일보 정기 구독자 본인은 결제 시 <strong>10% 할인</strong>이 적용되며, 대리신청·타인 적용은 불가합니다.</p>

<h2>광클 D-Day 전 준비 — 7단계 체크리스트</h2>

<p>풀코스 접수는 매년 오픈 후 수분 내 마감됩니다. 시간이 아니라 <strong>초 단위 경쟁</strong>이라고 보면 됩니다.</p>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">접수 전날까지 끝낼 7가지</p>
    <p>① 공식 홈페이지(chuncheonmarathon.com) 회원가입 ② 개인정보·비상연락처 사전 입력 ③ 카드 결제 한도 확인(10만원 이상 가능) ④ <strong>유선랜 연결 PC 준비</strong> — 모바일보다 압도적 안정 ⑤ 브라우저 캐시 삭제, 불필요한 탭 모두 닫기 ⑥ 자동 입력 저장으로 입력 시간 단축 ⑦ <code>time.navyism.com</code>으로 시계 동기화</p>
  </div>
</div>

<p>당일 13시 50분에는 로그인 상태로 대기하세요. 평소엔 5분 일찍 들어가도 충분하지만, 춘마 같은 빅 이벤트는 트래픽 폭주로 로그인 자체가 안 되는 경우가 종종 발생합니다.</p>

<p>접수 성공 후 <strong>결제 기한(7월 1~2일경)</strong>은 캘린더에 알람 설정해두세요. 신청만 하고 결제 깜빡해서 자격 잃는 사례가 매년 반복됩니다.</p>

<h2>코스 분석 — 의암호 한 바퀴</h2>

<p>출발 후 의암호 서쪽 수변길을 따라 신매대교까지 내려갔다가 반환, 귀로에서 서상대교·춘천댐 쪽으로 진행하는 구조입니다. 전반적으로 평탄하지만 <strong>오르막이 3구간 집중</strong>됩니다.</p>

<table>
  <thead>
    <tr><th>구간</th><th>특징</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>0~5km</strong></td><td>출발 직후 삼천사거리까지 완만한 오르막. 무리하지 말 것</td></tr>
    <tr><td><strong>약 17km</strong></td><td>강원애니고 방향 약 300m 단거리 오르막. 짧지만 가파름</td></tr>
    <tr><td><strong>25~30km</strong></td><td>서상대교·춘천댐 구간 — <strong>가장 가파르고 체력 최저점과 겹침</strong>. 매년 기권자 최다 발생</td></tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">초반 의암호 풍경에 오버페이스 주의</p>
    <p>춘천 풀코스에서 가장 흔한 실패 패턴: 0~15km 구간 풍경에 들떠 목표보다 빠르게 달리고, 25km 댐 구간에서 무너집니다. 처음 20km는 목표 페이스보다 5~10초 느리게, 안정 페이스를 유지하는 게 정석입니다.</p>
  </div>
</div>

<h2>교통과 숙박 — 접수와 동시에 예약</h2>

<h3>공식 셔틀버스 (왕복 2만원)</h3>

<p>서울 4개 거점에서 새벽 6시 일제 출발, 귀가편은 오후 2시 30분~4시 만차순 출발입니다. 공식 홈페이지 사전 예약 필수이며 매년 조기 마감.</p>

<ul>
  <li>시청역 2번 출구</li>
  <li>잠실역 6번 출구</li>
  <li>신도림역 1번 출구</li>
  <li>사당역 12번 출구</li>
</ul>

<h3>ITX 청춘 (강력 추천)</h3>

<table>
  <thead>
    <tr><th>출발역</th><th>소요 시간</th><th>요금</th></tr>
  </thead>
  <tbody>
    <tr><td>용산역 → 춘천역</td><td>74~80분</td><td>9,800원</td></tr>
    <tr><td>청량리역 → 춘천역</td><td>58~64분</td><td>7,100원</td></tr>
  </tbody>
</table>

<p>대회 당일 오전 5시 30분 이전 출발 권장. 주말 좌석은 빠른 매진 — <strong>대회 접수 직후 기차표도 함께 예매</strong>하세요. 춘천역에서 대회장(공지천 의암공원)까지는 도보 20분 또는 택시 5~10분.</p>

<h3>숙박 — 전날 1박 강력 권장</h3>

<p>당일치기는 셔틀(새벽 6시) 또는 ITX(새벽 5시 30분) 출발이라 체력 소모가 큽니다. 풀코스 PB가 목표라면 무조건 전날 숙박이 유리합니다.</p>

<ul>
  <li>공지천 인근(더잭슨나인스호텔, 에스턴호텔, 호텔공지천): 도보 5~10분 — 최적</li>
  <li>대회 시즌 9월부터 만실 시작 — 접수 성공 즉시 예약 필수</li>
  <li>저녁 메뉴는 익숙한 한식 카보로딩 권장. 처음 가는 닭갈비집은 모험 금물</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">자가용은 비추천</p>
    <p>대회 당일 오전 7시~오후 3시 30분 교통통제. 자가용 이용 시 새벽 5시 이전 도착해야 하며, 공지천 공영주차장(약 50대)은 조기 만차됩니다.</p>
  </div>
</div>

<h2>풀코스 신발 선택 — 평탄 PB 코스에 맞춰</h2>

<p>춘천 풀코스는 평탄·서늘 조건이 갖춰져 카본 플레이트 레이싱화가 가장 빛을 발하는 환경입니다. 다만 본인 페이스에 맞는 선택이 중요합니다.</p>

<ul>
  <li><strong>서브3 (목표 4:15/km 이하):</strong> 카본 슈퍼슈즈 — <a href="/best/racing">레이싱화 추천</a>에서 비교</li>
  <li><strong>서브4 (목표 5:40/km):</strong> 카본화 또는 슈퍼트레이너. 30km 이후 쿠션 유지가 관건</li>
  <li><strong>완주 목표 (5시간 내외):</strong> 쿠션 든든한 데일리 트레이너가 안전 — <a href="/best/max-cushion">맥스 쿠션 신발</a></li>
  <li><strong>처음 풀코스 도전:</strong> 카본화 신지 마세요. 페이스 유지 + 부상 방지가 우선 — <a href="/best/daily-trainer">데일리 트레이너 추천</a></li>
</ul>

<p>레이스용 신발은 <strong>대회 6~8주 전 구입</strong>해 40~60km 정도 길들이고 출전하세요. 본인 발에 맞는 신발을 빠르게 좁히려면 <a href="/recommend">1분 러닝화 추천</a>을 활용해보세요.</p>

<h2>훈련 일정 — 5월 시작이 표준</h2>

<p>10월 25일 전후 대회 기준, <strong>16~20주 빌드업이 표준</strong>입니다. 지금(5월 초) 시작하면 정확히 24주 — 기초 체력부터 다질 시간이 충분합니다.</p>

<ul>
  <li><strong>5~7월 (기초기):</strong> 주 30~50km, LSD 위주로 베이스 구축</li>
  <li><strong>8~9월 (강화기):</strong> 인터벌·템포런 추가, 주 50~70km</li>
  <li><strong>10월 초중순 (피크):</strong> 32~35km 장거리 1회 필수</li>
  <li><strong>대회 2주 전 (테이퍼링):</strong> 거리 절반으로 감소, 회복 우선</li>
</ul>

<p>풀코스 후반(20km+) 에너지 보충 전략은 <a href="/gels">에너지젤 가이드</a>에서 확인하세요.</p>

<h2>접수 마감 후 대안</h2>

<p>풀코스는 매년 분 단위로 마감되므로 광클 실패 가능성이 적지 않습니다. 실패 시 대안:</p>

<ul>
  <li><strong>공식 인스타 추가접수 공지 모니터링</strong> — 결제 기한 내 미납자가 발생하면 추가 오픈하는 경우 있음</li>
  <li><strong>10K로 종목 변경</strong> — 6/26 접수 오픈, 풀코스보다 경쟁 덜함</li>
  <li><strong>JTBC 서울마라톤 (11월 1일)</strong> — 추첨제이지만 도시형 코스라는 다른 매력</li>
  <li><strong>경주국제마라톤 (10월 17일)</strong> — 동마클럽 계열 메이저 대회. 자세한 일정은 <a href="/blog/2026-dongma-halfyear-marathon-schedule">2026 하반기 동마 대회 접수 일정</a>에서</li>
</ul>

<div class="callout success">
  <span class="callout-icon">🍂</span>
  <div class="callout-body">
    <p class="callout-title">춘마는 PB 도전과 가을 여행을 함께</p>
    <p>대회 자체도 좋지만, 가족·친구와 함께 1박 2일 춘천 여행 코스로 묶으면 추억까지 남습니다. 의암호 단풍, 닭갈비, 카페 — 풀코스 완주 후 보상으로 더할 나위 없죠.</p>
  </div>
</div>

<p>주최 측 문의: 02-724-6333~6336</p>

<p>국내 다른 가을 마라톤도 함께 검토하시려면 <a href="/marathon">2026 마라톤 캘린더</a>에서 월별로 비교해보세요.</p>

<p><small>출처: 춘천마라톤 공식 홈페이지 <a href="https://www.chuncheonmarathon.com/" rel="noopener noreferrer">chuncheonmarathon.com</a> · 러닝위키 춘천마라톤 가이드 / 작성일 2026년 5월 2일 기준 / 2026년 정확한 접수 일정은 공식 발표(5월 중하순 예정) 후 업데이트 예정입니다.</small></p>
`,
  },
  {
    id: '2026-anyangcheon-rose-marathon',
    slug: '2026-anyangcheon-rose-marathon',
    title: '2026 안양천 장미꽃축제 마라톤 | 5월 23일(토) · 접수 5월 14일 마감',
    description: '서울 영등포 신정교에서 열리는 2026 안양천 장미꽃축제 마라톤 정보를 정리했습니다. 하프·10K·5K 종목별 참가비, 평탄 코스, 5월 하순 무더위 대응까지 — 접수 마감은 5월 14일.',
    thumbnail: '/images/blog/2026-anyangcheon-rose-marathon.webp',
    author: '산초 에디터',
    publishedAt: '2026-05-02',
    category: 'news' as const,
    readingTime: 5,
    tags: ['안양천 마라톤', '장미꽃축제', '서울 마라톤', '봄 마라톤', '하프마라톤', '대회 일정'],
    content: `
<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">접수 마감 D-12 — 5월 14일(목)까지</p>
    <p>대회는 5월 23일(토), 접수는 5월 14일(목)까지입니다. 매년 정원이 차면 조기 마감되는 종목이 있어 참가 의향이 있다면 이번 주 안에 결정하시는 게 좋습니다.</p>
  </div>
</div>

<h2>한 눈에 보는 대회 정보</h2>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>대회명</strong></td><td>2026 안양천 장미꽃축제 마라톤</td></tr>
    <tr><td><strong>일시</strong></td><td>2026년 5월 23일(토)</td></tr>
    <tr><td><strong>장소</strong></td><td>신정교 하부 영롱이 억새구장 (서울 영등포구 영등포로2길 62)</td></tr>
    <tr><td><strong>종목</strong></td><td>하프(21.1km) · 10K · 5K</td></tr>
    <tr><td><strong>접수 마감</strong></td><td>2026년 5월 14일(목)</td></tr>
    <tr><td><strong>주최</strong></td><td>(사)대한생활체육연맹</td></tr>
    <tr><td><strong>접수처</strong></td><td><a href="https://roserun.kr/join/register.asp" rel="noopener noreferrer">roserun.kr</a></td></tr>
  </tbody>
</table>

<h2>종목별 참가비와 출발 시간</h2>

<table>
  <thead>
    <tr><th>종목</th><th>참가비</th><th>출발 시간 (공식 홈페이지 기준)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>하프 (21.1km)</strong></td><td>50,000원</td><td>오전 8:00</td></tr>
    <tr><td><strong>10K</strong></td><td>50,000원</td><td>오전 8:15</td></tr>
    <tr><td><strong>5K</strong></td><td>45,000원</td><td>오전 8:45</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">출발 시간은 공식 홈페이지 재확인 필수</p>
    <p>외부 집계 사이트마다 출발 시간이 09:00 단일로 표기된 곳도 있습니다. 위 시간은 공식 홈페이지(roserun.kr) 기준이며, 대회 1주일 전 최종 안내 문자/이메일을 반드시 확인하세요.</p>
  </div>
</div>

<h2>평탄 안양천 자전거도로 — 페이스 유지에 유리</h2>

<p>안양천 마라톤 코스의 가장 큰 매력은 <strong>거의 평탄한 직선 위주의 자전거도로</strong>라는 점입니다. 신정교 출발 후 안양천 수변로를 따라 왕복하는 형태로, 고저차가 거의 없어서 페이스 유지가 쉽습니다.</p>

<ul>
  <li><strong>노면:</strong> 자전거도로·수변 산책로 포장 양호 — 발목 부담 적음</li>
  <li><strong>고저차:</strong> 무시할 수준 — PB 도전이나 첫 하프 도전 모두 적합</li>
  <li><strong>풍경:</strong> 5월 하순 안양천변 장미와 녹음, 강변 자전거도로 특유의 개방감</li>
  <li><strong>혼잡:</strong> 주말 자전거·산책객과 공유 구간 — 우측 주행 엄수 필수</li>
</ul>

<h2>5월 23일 — 무더위 대응이 핵심</h2>

<p>5월 하순 서울의 오전 기온은 이미 한여름에 가깝습니다. 평년 5월 23일 서울 일 최고기온은 <strong>약 23~26℃</strong>이며, 자외선 지수는 '매우 높음' 수준입니다. 하프 종목은 8시 출발이라도 골인 직전 10시경에는 이미 20℃를 훌쩍 넘는 경우가 많습니다.</p>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">초여름 마라톤 체크리스트</p>
    <p>① 모자/선캡 + 선글라스 필수 ② 자외선 차단제는 땀에 강한 스포츠용 ③ 급수대에서 물 + 머리·목 적시기 ④ 컨디션 이상 시 즉시 페이스 다운 — 이 시기는 PB보다 안전 완주가 우선입니다.</p>
  </div>
</div>

<h2>봄~초여름 어떤 러닝화로 뛸까</h2>

<p>안양천 평탄 코스는 신발 선택의 폭이 넓은 편입니다. 본인 목표에 맞춰 고르면 됩니다.</p>

<ul>
  <li><strong>첫 하프 도전:</strong> 쿠셔닝 든든한 데일리 트레이너가 정답입니다. 안전 완주가 목표라면 무리해서 카본화를 신을 필요가 없어요. <a href="/best/max-cushion">쿠션 러닝화 추천</a>에서 확인하세요.</li>
  <li><strong>PB 도전 (하프 1:30~2:00 권):</strong> 평탄·서늘한 시간대라면 <a href="/best/daily-trainer">데일리 트레이너 추천</a>도 충분합니다.</li>
  <li><strong>PB 도전 (서브3 페이스):</strong> 카본 플레이트 레이싱화. <a href="/best/racing">레이싱화 추천</a>을 참고하세요.</li>
  <li><strong>5K 가족 참여:</strong> 평소 신는 데일리화면 충분합니다.</li>
</ul>

<p>본인 발볼·체중·주간 거리에 맞는 러닝화가 궁금하다면 <a href="/recommend">1분 러닝화 추천</a>으로 후보를 좁혀보세요.</p>

<h2>접수 전 마지막 체크리스트</h2>

<ul>
  <li>참가 종목 결정 (하프/10K/5K)</li>
  <li>roserun.kr 회원가입 및 신청서 작성</li>
  <li>참가비 입금 — 하나은행 364-910019-84004 / (사)대한생활체육연맹</li>
  <li>대중교통 이용 권장 — 5호선 오목교역·까치산역 도보 15~20분</li>
  <li>대회 1주일 전 공식 안내문 재확인 (출발 시각·집결 시각)</li>
</ul>

<div class="callout success">
  <span class="callout-icon">🌹</span>
  <div class="callout-body">
    <p class="callout-title">대회 후엔 장미꽃축제도 함께</p>
    <p>안양천 장미꽃축제는 5월 중순부터 6월 초까지 이어집니다. 완주 후 메달 걸고 장미터널 산책 — 봄 시즌 대회만의 특권입니다.</p>
  </div>
</div>

<p>주최 측 문의: 02-2636-7775 / start@roserun.kr</p>

<p>국내 다른 봄·여름 대회를 찾고 있다면 <a href="/marathon">2026 마라톤 캘린더</a>에서 월별로 확인할 수 있습니다.</p>

<p><small>출처: 안양천 장미꽃축제 마라톤 공식 홈페이지 <a href="https://roserun.kr/" rel="noopener noreferrer">roserun.kr</a> · 작성일 2026년 5월 2일 기준 / 출발 시각·코스는 주최 측 사정에 따라 변경될 수 있으며, 대회 직전 공식 공지를 재확인하시기 바랍니다.</small></p>
`,
  },
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
    <p>기록보다 즐거움이 목적인 펀런에는 쿠션 좋은 데일리화가 제격입니다. <a href="/shoes/hoka-clifton-9">호카 클리프톤</a>이나 <a href="/shoes/new-balance-1080-v14">뉴발란스 1080</a> 같은 맥시멀 쿠션화로 발의 피로를 줄이고 행사 자체를 즐기는 데 집중하세요. 맞춤 추천이 필요하면 <a href="/recommend">1분 러닝화 추천</a>을 이용해보세요.</p>
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
    <p>이런 축제형 이벤트는 쿠션감 좋은 데일리 러닝화가 제격입니다. 기록보다 편안함 위주로 <a href="/shoes/new-balance-1080-v14">뉴발란스 1080</a>이나 <a href="/shoes/hoka-clifton-9">호카 클리프톤</a> 같은 맥시멀 쿠션화를 추천합니다.</p>
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
  {
    id: 'wide-feet-korea',
    slug: 'wide-feet-running-shoes-korea',
    title: '발볼 넓은 한국인을 위한 러닝화 추천 TOP 10',
    description: '한국인의 발이 서양인보다 넓다는 연구 결과와 RunRepeat 700개 신발 실측 데이터를 바탕으로 발볼 넓은 러너를 위한 러닝화를 추천합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1600&q=80',
    content: `
<figure class="my-8 -mx-4 sm:mx-0">
  <img
    src="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1600&q=80"
    alt="러닝화 매장 진열 - 발볼 넓은 한국인을 위한 러닝화 가이드"
    class="w-full rounded-2xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">
    Photo by <a href="https://unsplash.com" class="underline hover:text-gray-700" target="_blank" rel="noopener">Unsplash</a>
  </figcaption>
</figure>

<div class="callout tip">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">핵심 팁</p>
    <p>발볼 넓은 러너는 표준 사이즈 구매 전 반드시 와이드 옵션을 먼저 확인하세요. 와이드 버전이 없다면 토박스 76mm 이상 모델을 선택하는 것이 안전합니다.</p>
  </div>
</div>

<h2>왜 발볼이 중요한가?</h2>
<p>
  "신발이 예쁜데 발이 안 들어가요", "양쪽 새끼발가락이 눌려서 아파요"
  한국 러너들이 자주 겪는 문제입니다.
</p>
<p>
  이유는 간단합니다. <strong>대부분의 러닝화가 서양인 발 기준</strong>으로 만들어지기 때문입니다.
  한국인은 서양인에 비해 발볼이 넓고 발등이 높은 경우가 많습니다.
  특히 남성의 경우 이 차이가 더 두드러집니다.
</p>

<h3>한국인 발이 정말 더 넓을까? 연구 데이터로 확인하기</h3>
<p>
  "한국인은 발볼이 넓다"는 말은 단순한 속설이 아니라 <strong>과학적 사실</strong>입니다.
  Nature Scientific Reports에 발표된 연구(120만 건의 발 스캔 분석)에 따르면,
  아시아인의 발은 유럽인과 북미인에 비해 같은 발 길이 대비 <strong>발볼 너비가 유의미하게 넓습니다.</strong>
</p>
<p>
  한국 남성의 경우 더욱 두드러집니다. 2019년 국방부 연구에서 56만 명의 19세 남성을 조사한 결과,
  <strong>평발 비율이 20% 이상</strong>으로 나타났으며, 이는 발볼이 넓고 발등이 낮은 특성과 관련이 있습니다.
  평발은 아치가 낮아 발이 지면에 닿을 때 발볼이 더 퍼지는 구조이기 때문입니다.
</p>
<p>
  문제는 대부분의 글로벌 러닝화 브랜드가 유럽과 북미 시장을 기준으로 제작된다는 점입니다.
  나이키, 아디다스 등은 서양인의 평균적인 발 형태를 기준으로 토박스 너비를 설계하기 때문에,
  한국 러너들이 "발이 안 들어가요", "새끼발가락이 눌려요"라는 불만을 토로하는 것입니다.
</p>

<h3>에디터의 한마디: 5년간 발볼 때문에 겪은 시행착오</h3>
<p>
  저도 발볼이 넓은 편입니다. 처음 러닝을 시작했을 때 나이키 페가수스가 좋다는 후기를 보고 구매했는데,
  신발 끈을 최대한 느슨하게 해도 발가락이 눌리는 느낌이 들었습니다. 5km만 뛰어도 새끼발가락이 아파서
  결국 3번 신고 창고행이 되었죠.
</p>
<p>
  그 후로 "발볼 넓은 사람한테 맞는 신발"을 찾기 위해 다양한 브랜드를 신어봤습니다.
  매장에서 신어볼 때는 괜찮았는데 막상 러닝하면 발가락이 눌리는 경우도 많았고,
  반 사이즈를 올리면 뒤꿈치가 헐거워지는 문제도 있었습니다.
</p>
<p>
  전환점은 아식스 카야노 와이드 버전을 만났을 때였습니다. "이게 신발이구나" 싶을 정도로
  발가락이 편했고, 처음으로 20km를 발 통증 없이 뛸 수 있었습니다. 그때 깨달았습니다.
  <strong>"좋은 신발"이 아니라 "내 발에 맞는 신발"</strong>이 중요하다는 것을요.
</p>
<p>
  발볼 문제는 단순히 "불편함"을 넘어 부상으로 이어질 수 있습니다.
  발가락이 압박되면 발톱이 검게 변하거나 무좀이 생길 수 있고,
  장시간 누르면 신경 압박으로 저림 증상이 나타날 수도 있습니다.
  러닝은 즐거워야 하는데, 발이 아프면 즐거울 수가 없죠.
</p>
<p>
  이 글은 제가 5년간 겪은 시행착오를 바탕으로, 발볼 넓은 한국 러너들이
  시간과 돈을 낭비하지 않고 편한 신발을 찾을 수 있도록 정리한 실전 가이드입니다.
</p>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">에디터 경험담 요약</p>
    <p>"좋은 신발"이 아니라 <strong>"내 발에 맞는 신발"</strong>이 중요합니다. 아무리 리뷰가 좋아도 내 발볼에 맞지 않으면 의미가 없습니다. 매장에서 30분 이상 걷거나 가볍게 뛰어본 후 구매를 결정하세요.</p>
  </div>
</div>

<figure class="my-8">
  <img
    src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=80"
    alt="러닝화 측면 클로즈업 - 토박스 너비 비교"
    class="w-full rounded-xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">
    토박스 너비는 발볼 넓은 러너에게 가장 중요한 스펙입니다 · Photo by Unsplash
  </figcaption>
</figure>

<h2>토박스 너비 기준</h2>
<p>러닝화의 앞코 너비(토박스)를 기준으로 분류하면:</p>
<ul>
  <li><strong>좁음 (Narrow):</strong> 70mm 미만 - 발볼 넓은 사람은 피해야 함</li>
  <li><strong>표준 (Standard):</strong> 70~76mm - 대부분의 러너에게 적합</li>
  <li><strong>넓음 (Wide):</strong> 76mm 초과 - 발볼 넓은 러너에게 추천</li>
</ul>
<p><strong>참고:</strong> RunRepeat이 700개 이상의 러닝화를 US M9 기준으로 실측한 결과, 평균 토박스 너비는 73.3mm입니다.</p>

<h3>주요 러닝화 토박스 너비 실측 비교 (RunRepeat Lab)</h3>
<p>아래는 RunRepeat 연구소에서 젤 몰드 방식으로 정밀 측정한 엄지발가락 부위 토박스 너비입니다 (US M9 기준, new method).</p>
<table>
  <thead>
    <tr><th>모델</th><th>토박스 너비</th><th>전체 너비</th><th>판정</th></tr>
  </thead>
  <tbody>
    <tr><td>Altra Torin 8</td><td><strong>83.6mm</strong></td><td>95.3mm</td><td>매우 넓음</td></tr>
    <tr><td>Mizuno Wave Rider 28</td><td><strong>77.2mm</strong></td><td>96.7mm</td><td>넓음</td></tr>
    <tr><td>Asics Gel-Kayano 31</td><td>74.8mm</td><td>98.9mm</td><td>표준 (넉넉)</td></tr>
    <tr><td>Asics Gel-Nimbus 27</td><td>73.8mm</td><td>-</td><td>표준</td></tr>
    <tr><td>Saucony Triumph 22</td><td>73.6mm</td><td>97.5mm</td><td>표준</td></tr>
    <tr><td>Asics GT-2000 13</td><td>73.3mm</td><td>96.0mm</td><td>표준 (평균)</td></tr>
    <tr><td>Hoka Clifton 10</td><td>73.1mm</td><td>-</td><td>표준</td></tr>
    <tr><td>Nike Pegasus 41</td><td>72.9mm</td><td>94.6mm</td><td>표준 (좁은 편)</td></tr>
    <tr><td>Brooks Ghost 16</td><td>72.1mm</td><td>96.1mm</td><td>좁은 편</td></tr>
    <tr><td>New Balance 1080 v14</td><td>69.8mm</td><td>-</td><td>좁음 (주의!)</td></tr>
    <tr><td>Hoka Bondi 8</td><td>69.2mm</td><td>92.2mm</td><td>좁음 (주의!)</td></tr>
  </tbody>
</table>
<p>
  <strong>주목할 점:</strong> New Balance 1080 v14(69.8mm)는 v13(77.9mm) 대비 토박스가 <strong>8mm 이상 좁아졌습니다.</strong>
  1080 시리즈를 발볼 때문에 선택하셨다면 v14부터는 반드시 와이드(2E) 이상을 선택하세요.
  Hoka Bondi 8도 69.2mm로 의외로 좁습니다. <strong>반드시 Wide 버전</strong>을 선택해야 합니다.
</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">버전 업그레이드 시 반드시 재확인</p>
    <p>New Balance 1080 v13 → v14처럼 신발 버전이 바뀌면 토박스 너비가 크게 달라질 수 있습니다. 이전 버전을 잘 신었더라도 새 버전은 꼭 매장에서 직접 착용해보세요.</p>
  </div>
</div>

<h2>러닝화 너비 시스템 이해하기</h2>
<p>브랜드별로 "Wide"의 기준이 다르기 때문에, 국제 너비 코드를 이해하면 도움이 됩니다.</p>
<table>
  <thead>
    <tr><th>너비 코드</th><th>남성 기준</th><th>여성 기준</th><th>표준 대비</th></tr>
  </thead>
  <tbody>
    <tr><td>B</td><td>좁음 (Narrow)</td><td><strong>표준 (Standard)</strong></td><td>-6mm</td></tr>
    <tr><td>D</td><td><strong>표준 (Standard)</strong></td><td>넓음 (Wide)</td><td>기준</td></tr>
    <tr><td>2E</td><td>넓음 (Wide)</td><td>매우 넓음 (Extra Wide)</td><td>+6mm</td></tr>
    <tr><td>4E</td><td>매우 넓음 (Extra Wide)</td><td>-</td><td>+12mm</td></tr>
  </tbody>
</table>
<p>
  <strong>알아두세요:</strong> 대부분의 브랜드는 와이드 버전을 만들 때 <strong>어퍼(갑피)만 넓히고 미드솔 플랫폼은 동일</strong>하게 유지합니다.
  즉, 착지 안정성은 같으면서 발가락 공간만 넓어지는 구조입니다.
  발볼이 넓다면 남성은 2E, 발이 아주 넓다면 4E를 선택하세요.
</p>

<h2>브랜드별 특징</h2>

<h3>와이드 옵션이 좋은 브랜드</h3>
<ul>
  <li><strong>Asics:</strong> Wide(2E), Extra Wide(4E) 옵션 풍부, 한국인 발에 잘 맞음</li>
  <li><strong>New Balance:</strong> 2E, 4E, 6E까지 다양한 너비 옵션</li>
  <li><strong>Brooks:</strong> Wide, Extra Wide 옵션 제공</li>
  <li><strong>Altra:</strong> FootShape 토박스로 발가락이 자연스럽게 펴짐</li>
  <li><strong>Mizuno:</strong> 일본 브랜드로 아시아인 발형에 맞게 설계</li>
</ul>

<h3>주의가 필요한 브랜드</h3>
<ul>
  <li><strong>Nike:</strong> 대체로 좁은 편, Pegasus 정도가 그나마 무난</li>
  <li><strong>Adidas:</strong> Ultraboost 등 니트 소재는 늘어나지만 기본은 좁음</li>
  <li><strong>On:</strong> 전반적으로 좁고 날씬한 핏</li>
</ul>

<h2>발볼 넓은 러너를 위한 TOP 10</h2>

<figure class="my-8">
  <img
    src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=80"
    alt="러닝화 컬렉션 - 발볼 넓은 러너를 위한 추천 모델"
    class="w-full rounded-xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">
    발볼에 맞는 신발을 찾으면 러닝이 훨씬 즐거워집니다 · Photo by Unsplash
  </figcaption>
</figure>

<h3>1. Altra Torin 8 - 토박스 83.6mm (최고 추천)</h3>
<p>
  RunRepeat 실측 <strong>83.6mm</strong>로 주요 러닝화 중 가장 넓은 토박스를 자랑합니다.
  FootShape 디자인으로 발가락이 자연스럽게 펴지는 구조이며,
  일반 신발 대비 테이퍼(좁아지는 비율)가 12.3%에 불과합니다(평균 23%).
  제로 드롭이라 2~4주 적응 기간이 필요하지만, 발볼 문제로 고생하셨다면 꼭 신어보세요.
  "발가락이 숨 쉰다"는 후기가 가장 많은 모델입니다.
</p>

<h3>2. Mizuno Wave Rider 28 - 토박스 77.2mm</h3>
<p>
  일본 브랜드답게 아시아인 발형을 잘 이해합니다.
  실측 토박스 <strong>77.2mm</strong>로 기본 버전도 평균보다 4mm 넓습니다.
  웨이브 플레이트의 안정감이 특징이고, Wide 옵션도 제공합니다.
  다만 드롭이 14.7mm로 높은 편이니 참고하세요.
</p>

<h3>3. Asics Gel-Kayano 31 Wide (4E) - 토박스 74.8mm</h3>
<p>
  안정화의 대명사 카야노의 와이드 버전입니다.
  표준 버전도 토박스 <strong>74.8mm</strong>, 전체 너비 98.9mm로 넉넉하고,
  4E 와이드는 +12mm 추가되어 발볼 걱정이 없습니다.
  평발이면서 발볼이 넓은 분들에게 최적의 선택입니다.
  FF Blast+ 폼으로 쿠셔닝과 반발력 모두 우수합니다.
</p>

<h3>4. Asics GT-2000 13 Wide - 토박스 73.3mm</h3>
<p>
  카야노보다 가볍고 저렴한 라이트 안정화입니다.
  표준 토박스 <strong>73.3mm</strong>로 평균 수준이지만, 와이드(2E/4E) 옵션이 있어
  발볼 넓은 평발 러너에게 가성비 좋은 선택입니다.
  가격이 카야노보다 5만원 이상 저렴합니다.
</p>

<h3>5. New Balance Fresh Foam 1080 v14 (2E/4E)</h3>
<p>
  뉴발란스의 플래그십 쿠션화입니다.
  <strong>주의:</strong> v14 표준 토박스가 69.8mm로 v13(77.9mm) 대비 크게 좁아졌습니다.
  <strong>반드시 2E 또는 4E를 선택하세요.</strong>
  4E 옵션은 표준 대비 +12mm로 충분한 여유를 제공합니다.
  Fresh Foam X가 푹신하면서도 반응성이 좋습니다.
</p>

<h3>6. Saucony Triumph 22 - 토박스 73.6mm</h3>
<p>
  삭소니의 프리미엄 쿠션화입니다.
  기본 토박스 <strong>73.6mm</strong>, 전체 너비 97.5mm로 평균보다 넉넉합니다.
  PWRRUN+ 폼의 에너지 리턴(60.9%)이 인상적이며, Wide 옵션도 있습니다.
</p>

<h3>7. Brooks Ghost 16 Wide - 토박스 72.1mm</h3>
<p>
  브룩스의 베스트셀러 뉴트럴화입니다.
  표준 토박스 72.1mm는 좁은 편이므로 <strong>반드시 Wide 버전</strong>을 선택하세요.
  DNA LOFT 폼이 편안하고, Wide 옵션은 실제로 넓다는 평가입니다.
  "신발 신는 게 아니라 신발이 발을 감싸는 느낌"이라는 후기가 많습니다.
</p>

<h3>8. Hoka Bondi 8 (Wide) - 토박스 69.2mm (표준)</h3>
<p>
  맥스 쿠셔닝의 대명사 본다이입니다.
  <strong>주의:</strong> 표준 버전 토박스가 69.2mm로 상당히 좁습니다.
  발볼 넓은 분은 <strong>반드시 Wide 버전</strong>을 선택해야 합니다.
  푹신한 착화감은 장거리에 탁월하지만, 무게(307g)가 있어 속도를 내기엔 부적합합니다.
</p>

<h3>9. New Balance Fresh Foam More v4 (2E/4E)</h3>
<p>
  1080보다 더 푹신한 맥스 쿠션화입니다.
  2E, 4E 옵션이 있어 넓은 발에 안성맞춤이며,
  발볼 넓은 러너들이 "처음으로 편한 러닝화를 만났다"고 하는 모델입니다.
</p>

<h3>10. Nike Pegasus 41 - 토박스 72.9mm</h3>
<p>
  나이키 중에서 그나마 시도해볼 만한 모델입니다.
  실측 토박스 72.9mm, 전체 너비 94.6mm로 나이키 중에서는 넉넉한 편이며
  니트 어퍼가 어느 정도 늘어납니다.
  하지만 테이퍼 비율이 22.9%(Altra는 12.3%)로 발가락 쪽이 좁아지므로,
  발볼이 많이 넓다면 다른 브랜드를 권장합니다.
</p>

<figure class="my-8">
  <img
    src="https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?auto=format&fit=crop&w=1200&q=80"
    alt="러닝화 매장에서 피팅하는 모습"
    class="w-full rounded-xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">
    첫 구매는 반드시 매장에서 직접 신어보세요 · Photo by Unsplash
  </figcaption>
</figure>

<h2>집에서 하는 DIY 피팅 테스트</h2>
<p>
  매장에 가기 전에 현재 신발이 본인 발볼에 맞는지 간단히 확인할 수 있습니다.
  RunRepeat 연구팀이 권장하는 방법입니다.
</p>
<ol>
  <li>러닝화에서 <strong>인솔(깔창)을 꺼내세요.</strong></li>
  <li>인솔을 바닥에 놓고, 그 위에 <strong>체중을 실어 서세요</strong> (러닝할 때처럼).</li>
  <li>아래를 내려다보세요. <strong>발이 인솔 가장자리 밖으로 삐져나오면</strong> 그 신발은 너무 좁은 것입니다.</li>
  <li>특히 <strong>새끼발가락 쪽</strong>과 <strong>엄지발가락 측면</strong>을 확인하세요.</li>
</ol>
<p>
  이 테스트에서 발이 삐져나온다면 와이드(2E) 이상 모델로 교체를 고려하세요.
  양쪽 모두 1~2mm 정도 여유가 있는 것이 이상적입니다.
</p>

<h2>구매 팁</h2>
<ol>
  <li><strong>반드시 매장에서 신어보기:</strong> 온라인으로 Wide 버전을 사도 브랜드마다 차이가 있습니다.</li>
  <li><strong>오후에 방문:</strong> 발은 하루 종일 부으므로 러닝하는 시간대에 피팅하세요.</li>
  <li><strong>두꺼운 양말로 테스트:</strong> 실제 러닝할 때 신을 양말과 함께 신어보세요.</li>
  <li><strong>사이즈업 고려:</strong> 너비가 안 맞으면 반 사이즈 올려보는 것도 방법입니다.</li>
  <li><strong>끈 조절:</strong> 발등이 높다면 끈을 느슨하게 묶는 테크닉도 있습니다.</li>
  <li><strong>양말 두께로 미세 조정:</strong> 약간 헐렁하다면 두꺼운 양말, 타이트하다면 얇은 양말로 핏을 조절할 수 있습니다.</li>
</ol>

<h2>발볼 넓은 러너가 피해야 할 실수</h2>
<p>
  지난 5년간 발볼 문제로 고생하며 배운 교훈을 공유합니다.
  이런 실수를 피하면 시간과 돈을 크게 절약할 수 있습니다.
</p>

<h3>실수 1: "늘어날 거야" 기대하기</h3>
<p>
  매장에서 신어볼 때 약간 타이트해도 "며칠 신으면 늘어나겠지" 생각하고 샀다가 후회한 적이 많습니다.
  러닝화 어퍼는 어느 정도 늘어나지만, <strong>토박스 너비 자체는 거의 안 늘어납니다.</strong>
  특히 카본 플레이트가 들어간 레이싱화는 구조상 전혀 늘어나지 않습니다.
  처음부터 편한 신발을 선택해야 합니다.
</p>

<h3>실수 2: 온라인 구매만 하기</h3>
<p>
  가격이 싸다고 해외 직구로 주문했다가 맞지 않아 반품 비용이 더 나온 경험이 있습니다.
  특히 발볼이 넓다면 <strong>첫 구매는 반드시 매장에서</strong> 하는 것을 권장합니다.
  한 번 브랜드별로 본인에게 맞는 사이즈를 알아두면, 그 다음부터는 온라인 구매도 안전합니다.
</p>

<h3>실수 3: "Wide"라고 다 같은 Wide가 아니다</h3>
<p>
  브랜드마다 Wide의 기준이 다릅니다. 나이키 Wide는 아식스 표준보다 좁을 수 있습니다.
  뉴발란스의 2E는 다른 브랜드의 Wide와 비슷하고, 4E는 정말 넓습니다.
  브랜드별로 직접 신어보는 것이 가장 확실합니다.
</p>

<h2>마무리: 발이 편해야 러닝이 즐겁다</h2>
<p>
  발볼 때문에 러닝화 고르기가 어려우셨다면, 위 리스트에서 시작해보세요.
  특히 Asics Wide, New Balance 2E/4E, Altra는 한국 러너들 사이에서 검증된 선택입니다.
</p>
<p>
  저는 이제 "발볼 넓어서 신을 신발이 없다"는 생각을 하지 않습니다.
  오히려 "내 발에 맞는 브랜드"를 알고 있어서 선택이 명확합니다.
  여러분도 이 글을 통해 자신에게 맞는 신발을 찾아 즐거운 러닝 라이프를 누리시길 바랍니다.
</p>
<p>
  편안한 신발을 찾으면 러닝이 훨씬 즐거워집니다.
  발이 편해야 멀리, 오래 달릴 수 있으니까요!
</p>
    `,
    author: '산초 에디터',
    publishedAt: '2025-01-28',
    category: 'review',
    tags: ['발볼', '와이드', '한국인', '추천', '토박스', 'RunRepeat', '넓은발'],
    readingTime: 12,
    featured: true,
  },
  {
    id: 'knee-pain',
    slug: 'knee-pain-running-shoes',
    title: '무릎 통증 러너를 위한 러닝화 선택법',
    description: '무릎이 아프면 러닝을 포기해야 할까요? 연구 기반 신발 선택과 주법 개선으로 무릎 통증을 줄일 수 있습니다.',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80',
    content: `
<figure class="my-8 -mx-4 sm:mx-0">
  <img
    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1600&q=80"
    alt="러닝 중 무릎 스트레칭 - 무릎 통증 관리 가이드"
    class="w-full rounded-2xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">
    Photo by <a href="https://unsplash.com" class="underline hover:text-gray-700" target="_blank" rel="noopener">Unsplash</a>
  </figcaption>
</figure>

<h2>무릎 통증, 왜 생길까?</h2>
<p>
  러닝 중 무릎 통증은 가장 흔한 부상입니다.
  슬개대퇴통증증후군(Runner's Knee, PFPS)은 전체 러닝 부상의 약 25%를 차지하는 가장 흔한 러닝 부상입니다
  (출처: "A Contemporary Approach to Patellofemoral Pain in Runners", PMC7740062).
  하지만 무릎 통증이 있다고 러닝을 완전히 포기할 필요는 없습니다.
</p>

<h3>에디터의 무릎 통증 극복기</h3>
<p>
  3년 전, 저도 무릎 통증으로 3개월간 러닝을 쉰 적이 있습니다.
  당시 하프 마라톤 준비를 하던 중 주간 거리를 갑자기 30km에서 50km로 늘렸는데,
  2주 후부터 무릎 안쪽이 뻐근하기 시작했죠. "며칠 쉬면 괜찮아지겠지" 생각하고 계속 뛰었는데
  결국 계단 내려갈 때마다 찌릿한 통증이 생겼습니다.
</p>
<p>
  정형외과에서 장경인대증후군(ITBS) 진단을 받았습니다.
  의사 선생님은 "급격한 운동량 증가"와 "불충분한 쿠셔닝"을 원인으로 꼽았습니다.
  당시 저는 가볍고 빠른 템포화만 고집했는데, 장거리에는 적합하지 않은 신발이었던 거죠.
</p>
<p>
  3개월 휴식 후 복귀할 때는 아식스 카야노를 선택했습니다.
  충분한 쿠셔닝과 안정성을 갖춘 신발로, 주간 거리를 천천히 늘려갔습니다.
  지금은 무릎 통증 없이 주 40km를 달리고 있습니다.
  그때 배운 교훈은 "빠르게 달리는 것보다 오래 달리는 것이 중요하다"는 것이었습니다.
</p>
<p>무릎 통증의 주요 원인:</p>
<ul>
  <li><strong>과사용 (Overuse):</strong> 급격한 운동량 증가</li>
  <li><strong>충격 누적:</strong> 불충분한 쿠셔닝</li>
  <li><strong>근력 불균형:</strong> 대퇴사두근, 햄스트링 약화</li>
  <li><strong>잘못된 주법:</strong> 오버스트라이딩, 과도한 힐 스트라이크</li>
  <li><strong>부적절한 신발:</strong> 본인 발에 안 맞는 신발</li>
</ul>

<figure class="my-8">
  <img
    src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=1200&q=80"
    alt="러닝 중인 러너의 다리 - 쿠셔닝과 무릎 보호"
    class="w-full rounded-xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">
    올바른 러닝화 선택은 무릎 부담을 크게 줄여줍니다 · Photo by Unsplash
  </figcaption>
</figure>

<h2>러닝화가 무릎에 미치는 영향</h2>

<h3>쿠셔닝의 역할</h3>
<p>
  착지할 때 발에 가해지는 충격은 체중의 2~3배입니다.
  쿠셔닝이 좋은 신발은 이 충격을 흡수해 무릎에 전달되는 힘을 줄여줍니다.
  <strong>하지만 쿠셔닝만으로 모든 문제가 해결되진 않습니다.</strong>
</p>
<p>
  최근 연구에 따르면 너무 푹신한 신발은 오히려 불안정성을 높여
  무릎 주변 근육이 더 많이 일해야 할 수 있습니다.
  <strong>적당한 쿠셔닝</strong>이 핵심입니다.
</p>

<h3>쿠셔닝 효과: 연구 결과</h3>
<p>
  쿠셔닝이 부상 예방에 도움이 된다는 연구 결과가 있지만, <strong>개인차가 큽니다</strong>:
</p>
<ul>
  <li><strong>2020년 RCT 연구 (848명 러너):</strong> 부드러운 신발이 <strong>가벼운 러너</strong>의 부상 위험을 줄였지만, 무거운 러너에게는 차이가 없었습니다.</li>
  <li><strong>2025 European Journal of Sport Science:</strong> 충격 흡수율이 높은 신발일수록 부상 위험이 낮았습니다.</li>
  <li><strong>2025 Nature Scientific Reports:</strong> 첨단 러닝화는 착지를 중족부/전족부로 이동시켜 부상 관련 생체역학적 요인을 감소시켰습니다.</li>
</ul>
<p>
  <strong>핵심 교훈:</strong> 쿠셔닝은 도움이 되지만, 체중과 러닝 스타일에 따라 개인화되어야 합니다.
  가벼운 러너라면 부드러운 쿠셔닝이 효과적이지만, 무거운 러너는 안정성이 더 중요할 수 있습니다.
</p>

<h3>맥시멀리스트 vs 트래디셔널: 스택 높이의 함정</h3>
<p>
  높은 스택 높이(맥시멀리스트 신발)는 쿠셔닝이 많아 보이지만, 실제로는 복잡합니다:
</p>
<ul>
  <li><strong>충격이 사라지지 않고 이동합니다:</strong> 지면 충격은 줄지만, 무릎과 고관절에 가해지는 힘이 증가합니다.</li>
  <li><strong>로딩률(loading rates)과 최대 충격력 증가:</strong> 전통적인 신발보다 관절에 더 높은 순간 부하가 걸릴 수 있습니다.</li>
  <li><strong>지면 감각 감소:</strong> 두꺼운 폼은 발의 고유감각(proprioception)을 감소시켜 착지 조절 능력이 떨어집니다.</li>
  <li><strong>회복 러닝에는 유용:</strong> 피로한 상태나 부상 회복 중에는 두꺼운 쿠셔닝이 도움이 될 수 있습니다.</li>
</ul>
<p>
  (출처: Doctors of Running 생체역학 분석)
</p>

<h3>드롭(Drop)과 무릎 부하: 생체역학적 근거</h3>
<p>
  힐-투-토 드롭은 무릎 부하에 영향을 줍니다:
</p>
<ul>
  <li><strong>낮은 드롭 (4mm 이하):</strong> 무릎 내전(knee adduction)을 감소시켜 무릎과 고관절에 가해지는 힘을 줄입니다. 슬개대퇴 관절 부하를 약 30% 감소시킵니다.</li>
  <li><strong>하지만:</strong> 낮은 드롭은 아킬레스건과 종아리 근육에 부담을 증가시킵니다.</li>
  <li><strong>높은 드롭 (10mm+):</strong> 발목 모멘트를 최소화하여 아킬레스건을 보호하지만, 뒤꿈치 착지를 유도해 무릎에 수직 충격이 증가할 수 있습니다.</li>
</ul>
<p>
  <strong>부상 이력에 따라 선택하세요:</strong>
</p>
<ul>
  <li>무릎 통증이 있다면 → 낮은 드롭(4-6mm) 고려</li>
  <li>아킬레스건 통증이 있다면 → 높은 드롭(10mm+) 유지</li>
  <li>부상 이력이 없다면 → 8mm 중간 드롭으로 시작</li>
</ul>
<p>
  <strong>주의:</strong> 드롭을 갑자기 바꾸지 마세요. 점진적으로 적응하는 것이 중요합니다.
</p>

<h3>안정성과 프로네이션</h3>
<p>
  오버프로네이션(발이 안쪽으로 과도하게 꺾임)은 무릎 내측에 스트레스를 줍니다.
  평발이거나 발목이 안쪽으로 무너지는 경향이 있다면
  <strong>안정화(Stability Shoe)</strong>가 도움될 수 있습니다.
</p>

<h2>무릎 통증 러너를 위한 추천 신발</h2>

<figure class="my-8">
  <img
    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=1200&q=80"
    alt="쿠셔닝이 좋은 러닝화 - 무릎 보호에 적합한 모델"
    class="w-full rounded-xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">
    충분한 쿠셔닝은 무릎 충격을 효과적으로 흡수합니다 · Photo by Unsplash
  </figcaption>
</figure>

<h3>쿠셔닝 + 안정성: Asics Gel-Kayano</h3>
<p>
  무릎 보호에 가장 많이 언급되는 신발입니다.
  4D Guidance System으로 과도한 회내를 제어하고,
  GEL 기술과 FF Blast+ 폼이 충격을 흡수합니다.
  "무릎 수술 후 복귀할 때 이 신발로 시작했다"는 후기가 많습니다.
</p>

<h3>맥스 쿠셔닝: Hoka Bondi</h3>
<p>
  두꺼운 미드솔로 충격 흡수가 탁월합니다.
  무릎에 가해지는 직접적인 충격을 최소화하고 싶다면 좋은 선택입니다.
  다만 무겁고, 지면 감각이 떨어져 발목 안정성에 주의해야 합니다.
</p>

<h3>균형잡힌 선택: Brooks Adrenaline GTS</h3>
<p>
  GuideRails 기술로 과도한 움직임을 제어합니다.
  카야노보다 가볍고 반응성이 좋아 일상 훈련에 적합합니다.
  "무릎 통증으로 3개월 쉬었다가 이 신발로 복귀했다"는 후기가 있습니다.
</p>

<h3>라이트 안정화: Asics GT-2000</h3>
<p>
  카야노의 가벼운 버전입니다.
  무릎 보호 기능은 유지하면서 무게를 줄였습니다.
  가성비도 좋아 입문자에게 추천합니다.
</p>

<h3>뉴트럴 + 쿠셔닝: New Balance 1080</h3>
<p>
  오버프로네이션이 없는 러너라면 뉴트럴화도 좋은 선택입니다.
  Fresh Foam X의 쿠셔닝이 충격을 흡수하고,
  안정적인 플랫폼이 무릎에 가해지는 비틀림을 줄여줍니다.
</p>

<figure class="my-8">
  <img
    src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=80"
    alt="야외 러닝 - 다양한 지면에서 훈련하기"
    class="w-full rounded-xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">
    신발 선택과 함께 훈련 방법 개선도 중요합니다 · Photo by Unsplash
  </figcaption>
</figure>

<h2>신발 외에 할 수 있는 것들</h2>

<h3>1. 점진적 운동량 증가</h3>
<p>
  "10% 규칙"을 따르세요. 주간 운동량을 10% 이상 늘리지 마세요.
  급격한 증가는 무릎 통증의 가장 큰 원인입니다.
</p>
<p>
  <strong>예시:</strong> 이번 주 20km를 뛰었다면, 다음 주는 최대 22km까지만 늘리세요.
  20km → 30km는 50% 증가로 부상 위험이 매우 높습니다!
</p>

<h3>2. 케이던스 높이기</h3>
<p>
  분당 보폭 수(SPM)를 5~10% 올려보세요.
  짧은 보폭으로 빠르게 착지하면 각 착지의 충격이 줄어듭니다.
  이상적인 케이던스는 분당 170~180회입니다.
</p>

<h3>3. 근력 강화</h3>
<p>
  무릎 주변 근육을 강화하면 관절에 가해지는 부담이 줄어듭니다.
  스쿼트, 런지, 클램셀, 브릿지 등을 꾸준히 하세요.
</p>

<h3>4. 표면 선택</h3>
<p>
  아스팔트보다 흙길이나 트랙이 충격이 적습니다.
  가능하면 다양한 표면에서 러닝하세요.
</p>

<h2>신발로 해결 vs 병원 가야 할 때</h2>
<p>
  무릎 통증이 생겼을 때, 신발을 바꾸면 해결될까요? 아니면 병원에 가야 할까요?
  다음 가이드를 참고하세요:
</p>

<h3>즉시 병원에 가야 하는 경우</h3>
<ul>
  <li><strong>무릎이 붓거나 열이 나는 경우</strong></li>
  <li><strong>무릎이 꺾이거나 힘이 빠지는 경우 (giving way)</strong></li>
  <li><strong>체중을 실을 수 없을 정도로 아픈 경우</strong></li>
</ul>

<h3>2-3주 내에 병원 방문이 필요한 경우</h3>
<ul>
  <li>RICE 요법(휴식, 냉찜질, 압박, 거상)을 해도 통증이 개선되지 않는 경우</li>
  <li>한 달 이상 통증이 지속되는 경우</li>
  <li>한 달에 여러 번 진통제를 복용해야 하는 경우</li>
</ul>

<h3>신발 교체로 개선 가능한 경우</h3>
<ul>
  <li>신발이 500km 이상 닳아서 쿠셔닝이 소진된 경우</li>
  <li>러닝 중에만 가벼운 불편감이 있는 경우 (일상생활 통증 없음)</li>
  <li>구조적 손상 없이 오버유즈로 인한 통증인 경우</li>
</ul>

<p>
  <strong>중요:</strong> 새 신발은 증상을 완화할 수 있지만, 근본 원인을 해결하지는 못합니다.
  통증이 지속되면 물리치료사나 스포츠의학 전문의의 생체역학 평가를 받으세요.
</p>

<h2>주의사항</h2>
<p>
  <strong>심한 통증이나 붓기가 있다면 전문의 상담을 먼저 받으세요.</strong>
  신발은 도움을 줄 수 있지만, 근본적인 문제를 해결하진 못합니다.
  러닝 폼 분석, 물리치료, 근력 강화 등 종합적인 접근이 필요합니다.
</p>

<h2>마무리</h2>
<p>
  무릎 통증 때문에 러닝을 포기하지 마세요.
  올바른 신발 선택, 점진적 훈련, 근력 강화를 병행하면
  무릎 통증을 관리하면서 러닝을 즐길 수 있습니다.
  천천히, 꾸준히, 현명하게 달리세요!
</p>
    `,
    author: '산초 에디터',
    publishedAt: '2025-01-25',
    category: 'tips',
    tags: ['무릎', '부상', '안정화', '쿠셔닝', 'PFPS', '러너스니', '드롭'],
    readingTime: 12,
    featured: true,
  },
  {
    id: 'carbon-plate-2025',
    slug: 'carbon-plate-shoes-comparison-2025',
    title: '2025 카본 플레이트 러닝화 완벽 비교',
    description: '바포플라이부터 메타스피드까지, 2025 최신 연구 데이터로 분석한 카본화의 모든 것. 일반 러너에게 카본화가 필요한지도 솔직하게 분석합니다.',
    thumbnail: 'https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1600&q=80',
    content: `
<figure class="my-8 -mx-4 sm:mx-0">
  <img
    src="https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1600&q=80"
    alt="러닝화 클로즈업 - 카본 플레이트 러닝화 비교 가이드"
    class="w-full rounded-2xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">
    Photo by <a href="https://unsplash.com" class="underline hover:text-gray-700" target="_blank" rel="noopener">Unsplash</a>
  </figcaption>
</figure>

<h2>카본 플레이트, 어떻게 작동하나?</h2>
<p>
  2017년 나이키 바포플라이가 등장한 이후, 카본 플레이트 러닝화는 러닝 업계를 뒤흔들었습니다.
  세계 기록이 잇달아 경신되었고, 이제 거의 모든 엘리트 러너가 카본화를 신습니다.
</p>

<h3>에디터의 관점: 카본화 혁명을 지켜보며</h3>
<p>
  2017년, 엘리우드 키프초게가 나이키 바포플라이 4%를 신고 2시간의 벽에 도전했을 때
  많은 사람들이 회의적이었습니다. "신발이 기록을 만들어주는 건 아니지 않나?"
  하지만 2019년 비엔나에서 1:59:40이라는 믿기 어려운 기록을 세운 순간,
  모든 것이 바뀌었습니다.
</p>
<p>
  카본화 논쟁은 여전히 뜨겁습니다. 일부는 "기술 도핑"이라고 비판하고,
  일부는 "기술 발전의 자연스러운 결과"라고 옹호합니다.
  세계육상연맹(World Athletics)은 스택 높이 40mm, 플레이트 1개 제한 규정을 만들었고,
  이제 카본화는 "규칙 내에서 허용된 기술"이 되었습니다.
</p>
<p>
  개인적으로는 카본화가 러닝을 더 대중화하는 데 기여했다고 봅니다.
  과거에는 서브3(3시간 이내 완주)가 소수의 엘리트만 달성할 수 있는 영역이었다면,
  카본화 덕분에 일반 시민 러너도 도전할 수 있게 되었으니까요.
</p>

<h3>카본 플레이트 기술의 역사</h3>
<p>
  카본 플레이트 아이디어는 사실 새로운 것이 아닙니다.
  1990년대에도 실험적인 카본 플레이트 신발이 있었지만, 당시 폼 기술이 따라주지 못했습니다.
  2017년 혁명의 핵심은 <strong>카본 플레이트 + ZoomX 폼 조합</strong>이었습니다.
</p>
<p>
  ZoomX는 PEBA(Polyether Block Amide) 기반 폼으로, EVA보다 85% 가볍고 에너지 리턴이 높습니다.
  두꺼운 폼 층 안에 카본 플레이트를 삽입하면 폼이 쿠션을 제공하면서
  플레이트가 "스프링보드" 역할을 하는 것이죠.
</p>

<p>카본 플레이트의 작동 원리:</p>
<ul>
  <li><strong>에너지 리턴:</strong> 단단한 플레이트가 휘었다 펴지면서 추진력 제공</li>
  <li><strong>레버 효과:</strong> 발가락 관절의 에너지 손실 감소 (발가락 관절이 굽는 대신 플레이트가 굽힘)</li>
  <li><strong>폼과의 시너지:</strong> PEBA 등 초경량 고반발 폼과 함께 작동</li>
  <li><strong>로커 지오메트리:</strong> 자연스러운 발 굴림(roll-over) 유도</li>
</ul>

<h3>실제 효과는 어느 정도일까?</h3>
<p>
  2023년 메타 분석에 따르면 카본화의 러닝 이코노미 향상 효과는 <strong>평균 2~4%</strong>이지만,
  개인차가 매우 큽니다. 연구 결과를 정리하면:
</p>
<ul>
  <li><strong>평균 효과:</strong> -1.1%부터 +9.7%까지, 평균 약 2~4% 향상</li>
  <li><strong>플레이트 형태:</strong> 커브드 플레이트 3.45% vs 플랫 플레이트 0.19% (커브드가 압도적)</li>
  <li><strong>속도 의존성:</strong> 14-18km/h에서 2.7-4.2% 향상, 12km/h에서는 1.4%에 불과</li>
  <li><strong>개인차:</strong> 러너의 31%는 오히려 효율이 감소 (모든 러너에게 유리하지 않음)</li>
</ul>
<p>
  마라톤에서 2%는 3~4분, 4%는 6~8분에 해당합니다.
  하지만 <strong>빠른 페이스(킬로당 3:20~4:15, 14-18km/h)에서만 최대 효과</strong>를 볼 수 있고,
  느린 페이스(킬로당 5:00 이상, 12km/h 이하)에서는 효과가 미미합니다.
</p>

<figure class="my-8">
  <img
    src="https://images.unsplash.com/photo-1562183241-b937e95585b6?auto=format&fit=crop&w=1200&q=80"
    alt="마라톤 레이스 현장 - 카본 플레이트 러닝화를 신은 러너들"
    class="w-full rounded-xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">
    이제 거의 모든 엘리트 러너가 카본화를 신고 레이스에 나섭니다 · Photo by Unsplash
  </figcaption>
</figure>

<h2>2025 주요 카본화 비교</h2>

<p>
  에너지 리턴(Energy Return)은 가장 중요한 성능 지표입니다.
  RunRepeat Lab Test 데이터 기준으로 주요 모델을 비교했습니다.
</p>

<table class="w-full border-collapse">
  <thead>
    <tr class="bg-gray-100">
      <th class="border p-2 text-left">모델</th>
      <th class="border p-2">무게</th>
      <th class="border p-2">스택 (힐/전족)</th>
      <th class="border p-2">드롭</th>
      <th class="border p-2">에너지 리턴 (힐/전족)</th>
      <th class="border p-2">가격</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border p-2"><strong>Nike Vaporfly 3</strong></td>
      <td class="border p-2">184g</td>
      <td class="border p-2">38-40mm / 30-32mm</td>
      <td class="border p-2">8mm</td>
      <td class="border p-2"><strong>78.1% / 74.5%</strong></td>
      <td class="border p-2">289,000원</td>
    </tr>
    <tr>
      <td class="border p-2"><strong>Nike Alphafly 3</strong></td>
      <td class="border p-2">184g</td>
      <td class="border p-2">40mm / 32mm</td>
      <td class="border p-2">8mm</td>
      <td class="border p-2"><strong>73.7% / 76.7%</strong></td>
      <td class="border p-2">349,000원</td>
    </tr>
    <tr>
      <td class="border p-2"><strong>Adidas Adios Pro 4</strong></td>
      <td class="border p-2">200g</td>
      <td class="border p-2">39mm / 33mm</td>
      <td class="border p-2">6mm</td>
      <td class="border p-2"><strong>80.4% / 80.3%</strong> (최고!)</td>
      <td class="border p-2">299,000원</td>
    </tr>
    <tr>
      <td class="border p-2"><strong>Asics Metaspeed Sky Paris</strong></td>
      <td class="border p-2">183g</td>
      <td class="border p-2">39mm / 34mm</td>
      <td class="border p-2">5mm</td>
      <td class="border p-2"><strong>78.5% / 78.2%</strong></td>
      <td class="border p-2">269,000원</td>
    </tr>
    <tr>
      <td class="border p-2"><strong>Asics Metaspeed Edge Paris</strong></td>
      <td class="border p-2">185g</td>
      <td class="border p-2">39.5mm / 34.5mm</td>
      <td class="border p-2">5mm</td>
      <td class="border p-2"><strong>-</strong> (커브드 플레이트)</td>
      <td class="border p-2">269,000원</td>
    </tr>
    <tr>
      <td class="border p-2"><strong>Saucony Endorphin Elite 2</strong></td>
      <td class="border p-2">203g</td>
      <td class="border p-2">40mm / 32mm</td>
      <td class="border p-2">8mm</td>
      <td class="border p-2"><strong>80.6% / 82.1%</strong> (전족 최고!)</td>
      <td class="border p-2">299,000원</td>
    </tr>
    <tr class="bg-yellow-50">
      <td class="border p-2"><strong>Hoka Cielo X1 2.0</strong></td>
      <td class="border p-2">207g</td>
      <td class="border p-2">46mm / 39mm</td>
      <td class="border p-2">7mm</td>
      <td class="border p-2"><strong>-</strong></td>
      <td class="border p-2">-</td>
    </tr>
  </tbody>
</table>

<p class="mt-4 text-sm text-gray-600">
  ⚠️ <strong>Hoka Cielo X1 2.0</strong>는 46mm 스택으로 World Athletics 규정(40mm 제한)을 초과하여
  <strong>공식 대회 착용 금지</strong> 신발입니다.
</p>

<h3>모델별 상세 분석</h3>

<h4>Nike Vaporfly 3 - 카본화의 기준</h4>
<p>
  ZoomX 폼의 탁월한 에너지 리턴(78.1%)과 풀 카본 플레이트의 조합이 여전히 최고 수준입니다.
  184g의 초경량이며, 28만원대로 가격도 합리적입니다.
  단점은 좁은 토박스(발볼 좁음)와 그립력이 약한 아웃솔입니다.
</p>

<h4>Nike Alphafly 3 - 최대 쿠션, 최대 추진력</h4>
<p>
  바포플라이에 Air Zoom 유닛을 추가한 "맥시멀" 카본화입니다.
  에너지 리턴은 바포플라이와 비슷하지만(73.7%/76.7%), 듀얼 에어 줌 유닛이 폭발적인 반발력을 제공합니다.
  35만원으로 가장 비싸며, 적응 기간이 필요합니다. "로켓을 신은 느낌"이라는 평가가 많습니다.
</p>

<h4>Adidas Adios Pro 4 - 에너지 리턴 챔피언</h4>
<p>
  Lightstrike Pro 폼과 Energy Rods(5개의 탄소 막대)가 특징입니다.
  <strong>에너지 리턴 80.4%/80.3%로 테스트된 모델 중 최고 수준</strong>입니다.
  바포플라이보다 안정적이고 편안하다는 평가가 많습니다.
  200g으로 약간 무겁지만, 내구성이 뛰어나며 세계 기록 보유 신발이기도 합니다.
</p>

<h4>Asics Metaspeed Sky Paris - 스트라이드 러너의 선택</h4>
<p>
  FF Turbo+ 폼과 풀 카본 플레이트 조합입니다.
  에너지 리턴 78.5%/78.2%로 우수하며, 스트라이드 러너(보폭이 긴 러너)에 최적화되어 있습니다.
  <strong>토박스가 넉넉해 발볼 넓은 한국 러너에게도 맞습니다.</strong>
  183g으로 가장 가볍고, 26만원대로 가성비도 훌륭합니다.
</p>

<h4>Asics Metaspeed Edge Paris - 케이던스 러너의 선택</h4>
<p>
  Sky와 달리 커브드 플레이트를 사용하여 높은 케이던스(보폭 짧고 빠른 회전) 러너에게 최적화되었습니다.
  연구에 따르면 커브드 플레이트는 플랫 플레이트보다 3.45% 더 효율적입니다.
  스펙은 Sky와 유사하며 가격도 26만원대입니다.
</p>

<h4>Saucony Endorphin Elite 2 - 전족부 에너지 리턴 최강</h4>
<p>
  PWRRUN PB 폼이 바운시하면서도 안정적입니다.
  <strong>전족부 에너지 리턴 82.1%로 테스트된 모델 중 최고</strong>이며, 힐도 80.6%로 우수합니다.
  "처음 신는 카본화로 좋다"는 평가가 많으며, 29만원으로 합리적인 가격입니다.
  203g으로 약간 무겁지만, 안정성이 뛰어나 초보 카본화 러너에게 추천합니다.
</p>

<h4>Hoka Cielo X1 2.0 - 대회 착용 불가 (참고용)</h4>
<p>
  46mm 스택으로 극한의 쿠셔닝을 제공하지만, <strong>World Athletics 규정(40mm 제한) 위반으로
  공식 대회에서 착용할 수 없습니다.</strong> 훈련용이나 비공인 레이스에서만 사용 가능합니다.
</p>

<figure class="my-8">
  <img
    src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&fit=crop&w=1200&q=80"
    alt="러닝화 밑창 - 카본 플레이트 구조"
    class="w-full rounded-xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">
    카본화는 훈련용이 아닌 레이스 데이를 위한 도구입니다 · Photo by Unsplash
  </figcaption>
</figure>

<h2>World Athletics 규정: 대회에서 신을 수 있는 신발</h2>
<p>
  2020년 이후 카본화가 급증하자, World Athletics(세계육상연맹)는 공정성을 위해 신발 규정을 강화했습니다.
  <strong>공식 대회에 출전한다면 반드시 규정을 확인하세요.</strong>
</p>

<h3>2025년 기준 World Athletics 신발 규정</h3>
<ul>
  <li><strong>로드 레이스 (마라톤, 하프 등):</strong> 최대 스택 높이 40mm</li>
  <li><strong>트랙 경기 (800m 이상):</strong> 최대 스택 높이 25mm</li>
  <li><strong>플레이트 개수:</strong> 단단한(rigid) 플레이트 1개만 허용</li>
  <li><strong>상업적 판매:</strong> 대회 4개월 전부터 일반 판매되어야 함</li>
</ul>

<h3>2025년 대회 착용 금지 신발</h3>
<p>다음 신발들은 스택 높이 초과로 공식 대회에서 착용할 수 없습니다:</p>
<ul>
  <li><strong>Adidas Prime X2 Strung:</strong> 50mm 스택 (훈련용 전용)</li>
  <li><strong>Asics Superblast:</strong> 45.5mm 스택 (카본화 아님, 훈련용)</li>
  <li><strong>Hoka Cielo X1 2.0:</strong> 46mm 스택 (규정 위반)</li>
</ul>

<p>
  국내 마라톤 대회 대부분은 World Athletics 규정을 따르므로,
  공식 기록을 목표로 한다면 <strong>40mm 이하 스택의 신발</strong>을 선택하세요.
</p>

<h2>훈련용 vs 레이스용</h2>
<p>
  <strong>카본화는 레이스용입니다.</strong> 훈련에서 매일 신으면 안 됩니다.
</p>

<h3>카본화의 내구성: 생각보다 오래 간다?</h3>
<p>
  과거에는 "카본화는 200-300km만 버틴다"는 말이 많았지만, 2025년 연구 결과는 다릅니다:
</p>
<ul>
  <li><strong>실제 수명:</strong> 240-480km (러너 체중과 러닝 스타일에 따라 차이)</li>
  <li><strong>피크 성능:</strong> 처음 160km까지가 최고 성능 구간</li>
  <li><strong>400km 테스트:</strong> 400km를 달린 Alphafly도 새 신발과 비슷한 성능 유지 (2025년 연구)</li>
  <li><strong>PEBA 폼 특성:</strong> 사용하지 않아도 시간이 지나면 경화됨 (1-2년 후 성능 저하)</li>
</ul>

<p><strong>카본화를 레이스용으로만 써야 하는 이유:</strong></p>
<ul>
  <li><strong>가격 문제:</strong> 25~35만원짜리 신발을 훈련에 쓰면 비용 부담이 큽니다</li>
  <li><strong>적응 문제:</strong> 매일 신으면 카본화 없이는 달리기 어려워질 수 있습니다</li>
  <li><strong>부상 위험:</strong> 두꺼운 스택과 불안정한 플랫폼은 발목 부상 위험을 높입니다</li>
  <li><strong>훈련 효과:</strong> 일반 러닝화로 훈련해야 근력과 안정성이 발달합니다</li>
</ul>

<p><strong>카본화 사용 전략 (권장):</strong></p>
<ul>
  <li>레이스 당일 + 레이스 전 마지막 스피드 워크아웃 2-3회</li>
  <li>총 사용: 마라톤 1회당 약 60-100km (적응 훈련 포함)</li>
  <li>이렇게 하면 한 켤레로 3-4번의 마라톤 레이스 가능</li>
</ul>

<p>
  훈련용으로는 <strong>Saucony Endorphin Speed</strong>나 <strong>New Balance FuelCell Rebel</strong>처럼
  카본 느낌의 나일론/TPU 플레이트화를 추천합니다. 가격은 절반(15-18만원)이고 내구성은 2배(600km+)입니다.
</p>

<h2>일반 러너에게 카본화가 필요한가?</h2>
<p>솔직히 말씀드리면, <strong>대부분의 일반 러너에게 카본화는 필수가 아닙니다.</strong></p>

<h3>페이스별 카본화 효과 (연구 기반)</h3>
<p>카본화의 효과는 페이스에 따라 극명하게 달라집니다:</p>
<ul>
  <li><strong>14-18 km/h (3:20-4:15/km):</strong> 2.7-4.2% 향상 → <strong>큰 효과</strong></li>
  <li><strong>12 km/h (5:00/km):</strong> 1.4% 향상 → <strong>제한적 효과</strong></li>
  <li><strong>12 km/h 미만 (5:00/km 이상):</strong> 거의 효과 없음, 불편할 수 있음</li>
</ul>

<p><strong>카본화가 유용한 러너:</strong></p>
<ul>
  <li>풀/하프 마라톤에서 기록 단축이 목표인 경우</li>
  <li>이미 충분한 훈련 베이스가 있는 경우 (주 30km 이상)</li>
  <li><strong>페이스가 킬로당 4:15 이내</strong> (특히 3:20-4:15 구간에서 최대 효과)</li>
  <li>서브3, 서브3:30, 서브4 같은 목표 시간이 명확한 경우</li>
</ul>

<p><strong>카본화가 불필요하거나 위험한 러너:</strong></p>
<ul>
  <li>러닝을 막 시작한 초보 러너 (부상 위험)</li>
  <li>건강/취미 목적의 조깅</li>
  <li>10km 이하 단거리 러닝</li>
  <li><strong>페이스가 킬로당 5:00 이상</strong> (효과 미미, 불편함만 증가)</li>
</ul>

<h3>초보 러너를 위한 경고: 카본화는 부상 위험이 있다</h3>
<p>
  카본화는 초보 러너에게 다음과 같은 부상 위험을 증가시킵니다:
</p>
<ul>
  <li><strong>중족골 스트레스 골절:</strong> 카본 플레이트가 발 앞부분에 과도한 압력을 가함</li>
  <li><strong>족저근막염:</strong> 높은 스택과 불안정한 플랫폼이 발바닥에 부담</li>
  <li><strong>발목 염좌:</strong> 두꺼운 스택이 불안정하여 넘어지기 쉬움, 특히 과회내(overpronation) 러너</li>
  <li><strong>느린 페이스에서 불편함:</strong> 카본화는 빠른 페이스에 최적화되어 조깅 속도에서는 어색함</li>
</ul>

<p>
  <strong>연구 결과:</strong> 초보 러너는 숙련 러너와 다른 생체역학적 반응을 보입니다.
  카본화가 주는 효율 향상보다 불안정성으로 인한 에너지 손실이 더 클 수 있습니다.
</p>

<p>
  <strong>권장:</strong> 최소 6개월 이상 꾸준히 달리고, 주 30km 이상 소화할 수 있으며,
  킬로당 5분 이내 페이스를 유지할 수 있을 때 카본화를 고려하세요.
</p>

<h2>카본화 적응 기간</h2>
<p>
  카본화는 일반 러닝화와 다르게 작동합니다.
  처음 신으면 어색하거나 불안정하게 느껴질 수 있습니다.
</p>
<p><strong>권장 적응 기간: 4~8주</strong></p>
<ol>
  <li>1~2주: 짧은 거리(3~5km)로 감각 익히기</li>
  <li>3~4주: 템포런이나 인터벌에서 사용</li>
  <li>5~6주: 롱런 일부 구간에서 테스트</li>
  <li>7~8주: 레이스 컨디션에서 테스트</li>
</ol>
<p>
  <strong>레이스 당일 처음 신는 것은 금물입니다.</strong>
  반드시 충분히 적응한 후에 레이스에서 신으세요.
</p>

<h2>카본화 논쟁: "기술 도핑인가, 혁신인가?"</h2>
<p>
  카본화가 등장한 후 러닝 커뮤니티는 뜨거운 논쟁에 휩싸였습니다.
  "신발이 너무 좋아지면 순수한 경쟁이 아니지 않나?"
  "기록은 인간의 한계를 측정하는 것인데, 신발 기술이 개입하면 공정한가?"
</p>
<p>
  반대 의견도 만만치 않습니다.
  "러닝 트랙도, 훈련 과학도 모두 발전했다. 신발만 예외일 이유가 있나?"
  "자전거, 수영복, 스키 등 모든 스포츠에서 장비는 발전한다."
</p>

<h3>개인적인 생각</h3>
<p>
  저는 카본화를 긍정적으로 봅니다. 이유는 간단합니다.
  <strong>더 많은 사람들이 러닝을 즐기고, 도전하게 만들었기 때문입니다.</strong>
</p>
<p>
  서브4(4시간 이내 완주)를 목표로 하는 일반 러너에게 카본화는 "해볼 만하다"는 자신감을 줍니다.
  3분이라도 빨라질 수 있다면, 그것은 몇 달간의 훈련에 대한 보상이 됩니다.
  물론 카본화가 훈련을 대신할 수는 없지만, 훈련과 함께라면 시너지를 만들어냅니다.
</p>
<p>
  다만, 초보 러너에게 카본화를 권하지는 않습니다.
  기초 체력과 주법이 잡히지 않은 상태에서 카본화를 신으면
  오히려 부상 위험만 높아질 수 있습니다.
  카본화는 "마법의 신발"이 아니라 "도구"입니다. 올바르게 사용해야 효과가 있습니다.
</p>

<h2>결론: 카본화는 도구다, 마법이 아니다</h2>
<p>
  카본화는 분명히 성능을 높여주는 도구입니다.
  하지만 마법의 신발은 아닙니다. 훈련 없이 카본화만 신는다고 기록이 좋아지진 않습니다.
</p>
<p>
  러닝 입문자라면 15~20만원대의 좋은 뉴트럴화에 투자하고,
  카본화는 훈련이 쌓인 후 특별한 레이스를 위해 고려하세요.
</p>
<p>
  주 30km 이상 꾸준히 뛰고, 킬로당 5분 이내 페이스를 유지할 수 있다면
  카본화는 당신의 기록을 한 단계 끌어올릴 수 있는 강력한 무기가 될 것입니다.
  하지만 그 전에는 <strong>신발보다 중요한 건 꾸준한 훈련</strong>이라는 것을 잊지 마세요.
</p>
<p>
  카본화는 결승선을 먼저 통과하게 해주는 신발이 아니라,
  당신이 흘린 땀에 날개를 달아주는 신발입니다.
</p>
    `,
    author: '산초 에디터',
    publishedAt: '2025-01-20',
    category: 'review',
    tags: ['카본', '레이싱', '바포플라이', '비교', '메타스피드', '아디오스프로', '에너지리턴'],
    readingTime: 13,
    featured: false,
  },
  {
    id: 'shoe-lifespan',
    slug: 'running-shoe-lifespan-replacement-guide',
    title: '러닝화 수명과 관리법: 언제 교체해야 할까? (2025 과학적 가이드)',
    description: '러닝화 교체 시기(500~800km), 슈퍼슈즈 수명, 신발 로테이션의 과학적 효과(39% 부상 감소), 올바른 관리법까지. 학술 연구 기반 러닝화 관리 완벽 가이드.',
    content: `
<figure class="my-10">
  <img
    src="https://images.unsplash.com/photo-1632211431184-0b7a60509930?auto=format&fit=crop&w=1600&q=80"
    alt="함께 묶인 러닝화 한 켤레"
    class="w-full rounded-xl border border-border"
    loading="eager"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    이미지: <a href="https://unsplash.com/photos/rHrfD5I0mmU" target="_blank" rel="noopener noreferrer">Unsplash</a> / Hasan Almasi
  </figcaption>
</figure>

<p>
  "이 러닝화 아직 멀쩡한데 왜 바꿔야 해요?" 많은 러너들이 하는 질문입니다.
  겉보기엔 괜찮아 보여도, 러닝화의 핵심 기능인 <strong>충격 흡수력</strong>은 눈에 보이지 않게 저하됩니다.
  오래된 러닝화로 계속 달리면 무릎, 발목, 허리에 부담이 누적되어 부상으로 이어질 수 있습니다.
</p>
<p>
  이 글에서는 과학적 연구와 전문가 의견을 바탕으로, 러닝화를 언제 교체해야 하는지,
  어떻게 관리하면 수명을 늘릴 수 있는지 상세히 알려드립니다.
</p>

<h2>러닝화 교체 주기: 500~800km의 과학</h2>

<figure class="my-10">
  <img
    src="/images/blog/shoe-lifespan/Gemini_Generated_Image_rxacq9rxacq9rxac.webp"
    alt="러닝화 수명주기: 0km 새 신발에서 800km 마모까지의 변화 과정. 체중, 착지 유형, 노면이 수명에 영향을 미칩니다."
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    러닝화 수명에 영향을 미치는 요인: 체중, 착지 유형(뒤꿈치/중간발/앞발), 노면(아스팔트/흙길/콘크리트)
  </figcaption>
</figure>

<p>
  대부분의 러닝화 제조사와 스포츠 의학 전문가들은 <strong>500~800km</strong>를 러닝화 교체 주기로 권장합니다.
  이 거리를 기준으로 삼는 데는 과학적 근거가 있습니다.
</p>

<h3>왜 500~800km일까?</h3>
<p>
  미드솔(중창)에 사용되는 EVA나 폴리우레탄 폼은 반복적인 압축과 회복 과정을 거칩니다.
  착지할 때 압축되고, 발이 떨어지면 원래 형태로 돌아오죠.
  하지만 이 과정이 수천, 수만 번 반복되면 폼의 <strong>탄성이 저하</strong>됩니다.
</p>
<p>
  2019년 British Journal of Sports Medicine에 발표된 연구에 따르면,
  러닝화의 충격 흡수 능력은 <strong>500km 이후 유의미하게 감소</strong>하기 시작합니다.
  600km 지점에서는 새 신발 대비 약 30~40%의 쿠셔닝 성능이 저하되었으며,
  이는 <strong>하지 부상 위험 증가</strong>와 통계적으로 연관되었습니다.
</p>

<h3>주행 거리별 교체 시기 (주간 기준)</h3>
<table class="w-full my-6 border-collapse border border-border">
  <thead>
    <tr class="bg-surface">
      <th class="border border-border px-4 py-2 text-left">주간 거리</th>
      <th class="border border-border px-4 py-2 text-left">500km 도달</th>
      <th class="border border-border px-4 py-2 text-left">800km 도달</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-border px-4 py-2">20km</td>
      <td class="border border-border px-4 py-2">약 6개월</td>
      <td class="border border-border px-4 py-2">약 10개월</td>
    </tr>
    <tr>
      <td class="border border-border px-4 py-2">30km</td>
      <td class="border border-border px-4 py-2">약 4개월</td>
      <td class="border border-border px-4 py-2">약 6.5개월</td>
    </tr>
    <tr>
      <td class="border border-border px-4 py-2">50km</td>
      <td class="border border-border px-4 py-2">약 2.5개월</td>
      <td class="border border-border px-4 py-2">약 4개월</td>
    </tr>
    <tr>
      <td class="border border-border px-4 py-2">80km (마라토너)</td>
      <td class="border border-border px-4 py-2">약 6주</td>
      <td class="border border-border px-4 py-2">약 10주</td>
    </tr>
  </tbody>
</table>

<h3>교체 주기에 영향을 미치는 요인</h3>
<ul>
  <li><strong>체중:</strong> 체중이 무거울수록 미드솔 압축이 빨라집니다. 80kg 이상이면 500km 쪽으로 교체 권장.</li>
  <li><strong>주로 노면:</strong> 아스팔트 > 트랙 > 트레일 순으로 마모가 빠릅니다.</li>
  <li><strong>주법:</strong> 뒤꿈치 착지(힐스트라이크)는 힐 부분 마모가 빠르고, 앞발 착지는 전족부 마모가 빠릅니다.</li>
  <li><strong>신발 품질:</strong> 프리미엄 폼(ZoomX, FF Blast 등)은 저가 EVA보다 내구성이 좋을 수 있습니다.</li>
</ul>

<h2>슈퍼슈즈(PEBA 폼) 수명: 450km의 한계</h2>

<figure class="my-10">
  <img
    src="/images/blog/shoe-lifespan/Gemini_Generated_Image_slsaffslsaffslsa.webp"
    alt="슈퍼슈즈의 딜레마: 성능 vs 내구성. 레이싱화는 수명이 짧고, 트레이닝화는 수명이 길다."
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    슈퍼슈즈(좌)는 고성능이지만 수명이 짧고, 일반 트레이닝화(우)는 내구성이 뛰어납니다.
  </figcaption>
</figure>

<p>
  Vaporfly, Alphafly, Metaspeed 같은 <strong>카본 플레이트 레이싱화</strong>는 일반 트레이닝화와 다릅니다.
  고반발 PEBA 폼(ZoomX, FF Turbo 등)은 가볍고 탄성이 뛰어나지만, <strong>내구성은 상대적으로 낮습니다.</strong>
</p>
<p>
  2022년 Footwear Science 학술지에 게재된 연구에 따르면,
  PEBA 기반 슈퍼슈즈의 <strong>에너지 리턴 효과는 약 450km 지점에서 급격히 감소</strong>합니다.
  겉으로 보기엔 멀쩡해도, 4%대 에너지 효율 이점이 사라지며 <strong>일반 러닝화 수준</strong>으로 떨어집니다.
</p>
<p>
  따라서 슈퍼슈즈는 <strong>레이스 전용</strong>으로 사용하고, 일상 훈련은 일반 트레이닝화로 하는 것이 경제적입니다.
  풀마라톤 기준 약 10회 정도 사용할 수 있습니다.
</p>

<h2>신발 로테이션: 부상 위험 39% 감소</h2>

<figure class="my-10">
  <img
    src="/images/blog/shoe-lifespan/Gemini_Generated_Image_7u22d77u22d77u22.webp"
    alt="러닝화 교체 착용에 따른 부상 위험 39% 감소. 한 켤레만 사용하면 높은 위험, 여러 켤레를 번갈아 신으면 낮은 위험."
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    연구 결과: 러닝화를 번갈아 신으면 부상 위험이 39% 감소합니다 (Malisoux et al., 2015)
  </figcaption>
</figure>

<p>
  여러 켤레의 러닝화를 번갈아 신는 <strong>신발 로테이션</strong>은 단순한 취향이 아닌, 과학적으로 입증된 부상 예방 전략입니다.
</p>
<p>
  2015년 Scandinavian Journal of Medicine & Science in Sports에 발표된 연구(Malisoux et al.)에서는
  264명의 러너를 22주간 추적 조사했습니다. 결과는 놀라웠습니다.
  <strong>여러 켤레(2개 이상)의 러닝화를 로테이션한 그룹은 한 켤레만 사용한 그룹 대비 부상 위험이 39% 낮았습니다.</strong>
</p>

<h3>로테이션이 효과적인 이유</h3>
<ul>
  <li><strong>폼 회복 시간:</strong> 미드솔 폼이 압축 후 완전히 회복되려면 <strong>24~48시간</strong>이 필요합니다. 매일 같은 신발을 신으면 폼이 완전히 회복되지 않은 상태에서 다시 사용하게 됩니다.</li>
  <li><strong>근육 균형:</strong> 드롭이나 쿠셔닝이 다른 신발을 교대로 신으면 발과 하지 근육이 <strong>다양한 자극</strong>을 받아 특정 부위에 스트레스가 집중되는 것을 방지합니다.</li>
  <li><strong>아웃솔 건조:</strong> 러닝 후 땀과 습기로 젖은 신발이 마를 시간을 확보해 <strong>박테리아 번식과 냄새를 줄입니다.</strong></li>
  <li><strong>수명 연장:</strong> 전체 주행 거리가 여러 신발에 분산되어 개별 신발 수명이 늘어납니다.</li>
</ul>

<h3>효과적인 로테이션 구성 예시</h3>
<ul>
  <li><strong>데일리 트레이너:</strong> Nike Pegasus, Asics Nimbus 등 – 대부분의 훈련에 사용</li>
  <li><strong>쿠셔닝화:</strong> Hoka Bondi, Asics Gel-Kayano 등 – 장거리 회복런에 사용</li>
  <li><strong>템포/스피드화:</strong> Saucony Kinvara, Adidas Boston 등 – 인터벌, 템포런에 사용</li>
  <li><strong>레이싱화:</strong> Nike Vaporfly, Asics Metaspeed 등 – 레이스 전용</li>
</ul>

<h2>러닝화 교체 신호 5가지</h2>
<p>
  주행 거리를 기록하지 않더라도, 다음 신호가 보이면 교체를 고려하세요.
</p>

<h3>1. 미드솔 주름(Creasing)</h3>
<p>
  신발 옆면의 미드솔에 깊은 <strong>가로 주름</strong>이 보이면 폼이 과도하게 압축된 상태입니다.
  손가락으로 미드솔을 눌렀을 때 탄성이 느껴지지 않으면 쿠셔닝이 거의 소진된 것입니다.
</p>

<h3>2. 아웃솔 마모</h3>
<p>
  밑창의 고무(아웃솔)가 닳아 <strong>미드솔 폼이 직접 노출</strong>되면 그립력과 내구성이 급격히 저하됩니다.
  특히 힐이나 전족부가 한쪽으로 심하게 닳았다면 주법 점검도 필요합니다.
</p>

<h3>3. 통증 발생</h3>
<p>
  동일한 코스, 동일한 페이스로 달리는데 갑자기 <strong>무릎, 발목, 발바닥에 통증</strong>이 느껴진다면
  신발 쿠셔닝 저하가 원인일 수 있습니다. 새 신발로 바꾸고 통증이 사라지면 원인이 확인됩니다.
</p>

<h3>4. 한 발 균형 테스트</h3>
<p>
  러닝화를 신고 한 발로 30초 서기를 해보세요.
  균형 잡기가 이전보다 어렵거나 발목이 흔들리면 <strong>신발의 지지력이 저하</strong>된 신호입니다.
</p>

<h3>5. 새 신발과 비교</h3>
<p>
  같은 모델의 새 신발과 나란히 놓고 비교해보세요.
  힐 카운터가 휘어지거나, 전체적으로 한쪽으로 기울어져 있다면 교체 시기입니다.
</p>

<h2>러닝화 관리법: 수명 늘리는 5가지 팁</h2>

<figure class="my-10">
  <img
    src="/images/blog/shoe-lifespan/Gemini_Generated_Image_x73px2x73px2x73p.webp"
    alt="러닝화 관리: 권장 사항(부드럽게 손세탁, 신문지 자연 건조, 신발 교체 착용)과 금지 사항(세탁기/건조기 사용, 뒤꿈치 꺾어 신기, 고온 방치)"
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    러닝화 관리의 핵심: 손세탁, 자연 건조, 로테이션 / 세탁기, 건조기, 고온 방치는 금지
  </figcaption>
</figure>

<h3>1. 세탁기/건조기 사용 금지</h3>
<p>
  <strong>러닝화는 절대 세탁기에 돌리지 마세요.</strong>
  강한 물살과 세제가 미드솔 폼의 구조를 손상시키고, 접착제를 약화시킵니다.
  건조기 열은 폼을 수축시키고 갑피를 변형시킵니다.
</p>

<h3>2. 올바른 손세탁 방법</h3>
<ul>
  <li>미온수(30℃ 이하)에 중성 세제를 풀어 부드러운 솔로 가볍게 문지르세요.</li>
  <li>인솔(깔창)과 끈은 분리해서 따로 세탁합니다.</li>
  <li>흐르는 물에 세제를 완전히 헹궈내세요.</li>
</ul>

<h3>3. 신문지 건조법</h3>
<p>
  세탁 후 또는 비에 젖었을 때, <strong>신발 안에 신문지를 꾸깃꾸깃 채워 넣으세요.</strong>
  신문지가 수분을 흡수하고, 신발 형태를 유지해줍니다.
  직사광선, 히터, 드라이기는 폼을 손상시키므로 <strong>서늘하고 통풍 좋은 그늘</strong>에서 자연 건조하세요.
</p>

<h3>4. 러닝 전용으로만 사용</h3>
<p>
  러닝화를 일상 신발로 신으면 불필요한 마모가 발생합니다.
  <strong>러닝할 때만 신고, 평소에는 일반 스니커즈</strong>를 신으세요.
  러닝 후에는 신발을 벗어 통풍이 잘 되는 곳에 두세요.
</p>

<h3>5. 보관 시 주의사항</h3>
<ul>
  <li>장기간 보관 시 <strong>슈트리(신발 골)</strong>를 넣어 형태를 유지하세요.</li>
  <li>습하거나 직사광선이 드는 곳은 피하세요.</li>
  <li>신발 박스에 실리카겔(방습제)을 함께 넣어두면 습기를 방지할 수 있습니다.</li>
</ul>

<h2>새 러닝화 길들이기: 2~4주 적응 기간</h2>
<p>
  새 러닝화를 바로 장거리나 레이스에 투입하면 물집, 통증, 부상 위험이 있습니다.
  <strong>2~4주간 점진적으로 적응 기간</strong>을 가지세요.
</p>

<h3>길들이기 스케줄 예시</h3>
<ul>
  <li><strong>1주차:</strong> 5km 미만의 짧은 조깅 2~3회. 착화감과 핏 확인.</li>
  <li><strong>2주차:</strong> 10km 미만 러닝. 페이스를 다양하게 테스트.</li>
  <li><strong>3주차:</strong> 평소 훈련 거리의 70% 수준으로 확대.</li>
  <li><strong>4주차:</strong> 풀 훈련에 투입 가능. 필요 시 레이스 투입.</li>
</ul>
<p>
  특히 드롭이나 쿠셔닝 레벨이 이전 신발과 크게 다르면 적응 기간을 더 길게 가지세요.
  갑작스러운 변화는 종아리, 아킬레스건에 부담을 줄 수 있습니다.
</p>

<h2>마무리: 러닝화는 소모품, 부상은 예방품</h2>
<p>
  좋아하는 러닝화가 있어도 <strong>500~800km를 넘기면 과감히 교체</strong>하세요.
  겉으로 멀쩡해 보여도 충격 흡수력은 이미 크게 저하되어 있습니다.
</p>
<p>
  러닝화는 <strong>러너를 부상으로부터 지키는 보호 장비</strong>입니다.
  10만 원대 신발 교체를 아끼다가 수십만 원 병원비와 몇 달간의 러닝 공백을 겪지 않으려면,
  정기적인 교체와 로테이션을 습관화하세요.
</p>
<p>
  <strong>좋은 신발로 오래오래 건강하게 달리세요!</strong>
</p>

<hr class="my-10" />

<h3>참고 문헌</h3>
<ul class="text-sm text-secondary">
  <li>Malisoux, L., Ramesh, J., Mann, R., Seil, R., Urhausen, A., & Theisen, D. (2015). Can parallel use of different running shoes decrease running-related injury risk? <em>Scandinavian Journal of Medicine & Science in Sports</em>, 25(1), 110-115.</li>
  <li>Hannigan, J. J., & Pollard, C. D. (2019). A 6-month simulated use evaluation of a commercial carbon fiber running shoe. <em>Footwear Science</em>, 11(sup1), S162-S163.</li>
  <li>British Journal of Sports Medicine (2019). The effect of shoe age on running biomechanics. 53(7), 389-395.</li>
</ul>
    `,
    author: '산초 에디터',
    publishedAt: '2025-02-04',
    category: 'guide',
    tags: ['러닝화', '수명', '교체주기', '관리법', '로테이션', '슈퍼슈즈', '부상예방', '500km', 'PEBA', '과학'],
    readingTime: 12,
    featured: true,
  },
  {
    id: 'energy-gel-guide',
    slug: 'energy-gel-science-guide',
    title: '에너지젤 성분 완벽 분석: 말토덱스트린부터 하이드로젤까지',
    description: '에너지젤의 핵심 성분을 과학적으로 분석합니다. 탄수화물 종류, 위장 안정성, 카페인까지 알아야 할 모든 것.',
    content: `
<figure class="my-10">
  <img
    src="https://images.pexels.com/photos/33417694/pexels-photo-33417694.jpeg?cs=srgb&dl=pexels-wesleydavi-33417694.jpg&fm=jpg"
    alt="러닝 트랙에서 에너지젤을 들고 있는 러너"
    class="w-full rounded-xl border border-border"
    loading="eager"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    이미지: <a href="https://www.pexels.com/photo/athlete-holding-energy-gel-on-running-track-33417694/" target="_blank" rel="noopener noreferrer">Pexels</a> / Wesley Davi
  </figcaption>
</figure>

<h2>에너지젤, 왜 먹어야 할까?</h2>
<p>
  마라톤을 뛰다 보면 30km 즈음에서 갑자기 힘이 빠지는 경험을 합니다.
  이것이 바로 <strong>"벽에 부딪힌다(Hitting the Wall)"</strong>는 표현의 유래입니다.
  우리 몸에 저장된 글리코겐(탄수화물)이 고갈되면서 발생하는 현상이죠.
</p>

<h3>에디터의 첫 마라톤 실패담</h3>
<p>
  제 첫 풀 마라톤은 완전한 실패였습니다. 32km까지는 목표 페이스를 잘 유지했는데,
  그 순간부터 갑자기 다리가 납덩이처럼 무거워지더니 페이스가 급격히 떨어졌습니다.
  "좀만 참으면 된다"고 생각했지만, 결국 마지막 10km를 거의 걷다시피 했죠.
</p>
<p>
  나중에 안 사실인데, 저는 에너지젤을 한 번도 먹지 않았습니다.
  "42km 정도는 먹지 않고도 뛸 수 있지 않을까?" 하는 순진한 생각이었죠.
  경험 많은 러너 선배가 그러더군요. "30km 벽은 과학이야. 글리코겐이 고갈되면 누구나 무너져."
</p>
<p>
  두 번째 풀 마라톤에서는 에너지젤 전략을 세웠습니다.
  출발 전 1개, 그리고 45분마다 1개씩 총 5개를 먹었습니다.
  결과는 놀라웠습니다. 30km 지점에서도 힘이 있었고, 마지막까지 페이스를 유지할 수 있었습니다.
  기록은 첫 마라톤보다 23분이나 단축됐죠.
</p>

<p>
  인체는 약 <strong>2,000kcal</strong>의 글리코겐을 저장할 수 있습니다.
  마라톤 풀코스를 완주하려면 약 2,500~3,000kcal가 필요하니,
  외부에서 에너지를 보충하지 않으면 후반부에 급격한 페이스 저하가 불가피합니다.
</p>
<p>
  에너지젤은 빠르게 흡수되는 탄수화물을 농축한 형태로,
  러닝 중에도 쉽게 섭취할 수 있도록 설계되었습니다.
  제 경험상, 에너지젤은 선택이 아니라 <strong>필수</strong>입니다.
</p>

<h2>탄수화물의 종류와 흡수 속도</h2>

<figure class="my-10">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/d/df/Clif_Energy_Gels.jpg"
    alt="여러 종류의 에너지젤 패키지"
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    이미지: <a href="https://commons.wikimedia.org/wiki/File:Clif_Energy_Gels.jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a> / Richard Masoner (Cyclelicious), <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
  </figcaption>
</figure>

<h3>1. 말토덱스트린 (Maltodextrin)</h3>
<p>
  가장 흔히 사용되는 탄수화물입니다.
  포도당 분자가 여러 개 연결된 <strong>복합 탄수화물</strong>이지만,
  분해가 빨라 혈당을 빠르게 올립니다.
</p>
<ul>
  <li><strong>GI 지수:</strong> 85~105 (매우 높음)</li>
  <li><strong>장점:</strong> 빠른 흡수, 저렴한 가격, 맛이 덜 달음</li>
  <li><strong>단점:</strong> 고농도 시 위장 장애 가능</li>
  <li><strong>사용 제품:</strong> GU, SiS, 대부분의 에너지젤</li>
</ul>

<h3>2. 과당 (Fructose)</h3>
<p>
  과일에 많이 들어있는 단당류입니다.
  포도당과 <strong>다른 경로(GLUT5)</strong>로 흡수되어,
  포도당과 함께 섭취하면 총 탄수화물 흡수량을 높일 수 있습니다.
</p>
<ul>
  <li><strong>GI 지수:</strong> 19 (낮음)</li>
  <li><strong>장점:</strong> 포도당과 병용 시 흡수 극대화</li>
  <li><strong>단점:</strong> 과다 섭취 시 위장 장애, 단독 사용 시 효과 떨어짐</li>
  <li><strong>최적 비율:</strong> 포도당:과당 = 2:1 또는 1:0.8</li>
</ul>

<h3>3. 포도당 (Glucose/Dextrose)</h3>
<p>
  가장 기본적인 단당류로, 체내에서 바로 에너지로 사용됩니다.
  <strong>SGLT1</strong> 수송체를 통해 흡수되며, 분당 약 60g까지 흡수 가능합니다.
</p>
<ul>
  <li><strong>GI 지수:</strong> 100 (기준)</li>
  <li><strong>장점:</strong> 가장 빠른 에너지 전환</li>
  <li><strong>단점:</strong> 매우 달고 끈적임</li>
</ul>

<h3>4. 클러스터 덱스트린 (Cluster Dextrin / HBCD)</h3>
<p>
  고분자 탄수화물로, <strong>위 배출 속도가 빠르고</strong> 삼투압이 낮습니다.
  위장 문제가 적어 장거리 러너들에게 인기가 높습니다.
</p>
<ul>
  <li><strong>장점:</strong> 위장 안정성 우수, 지속적인 에너지 공급</li>
  <li><strong>단점:</strong> 가격이 비쌈</li>
  <li><strong>사용 제품:</strong> Maurten (일부), 226ERS</li>
</ul>

<h2>하이드로젤 기술: Maurten의 혁신</h2>
<p>
  <strong>Maurten</strong>이 개발한 하이드로젤 기술은 에너지젤 시장에 혁명을 가져왔습니다.
  일반 젤은 위에서 소화 과정을 거치지만, 하이드로젤은 위의 산성 환경에서
  <strong>젤 형태로 캡슐화</strong>되어 소장까지 빠르게 이동합니다.
</p>

<h3>하이드로젤의 원리</h3>
<ol>
  <li>알긴산(해초 추출물)과 펙틴(과일 추출물)을 탄수화물에 첨가</li>
  <li>위의 낮은 pH에서 젤 형태로 굳음</li>
  <li>위를 빠르게 통과해 소장에서 흡수</li>
  <li>결과: 위장 장애 최소화 + 고농도 탄수화물 섭취 가능</li>
</ol>

<h3>하이드로젤 제품</h3>
<ul>
  <li><strong>Maurten Gel 100:</strong> 25g 탄수화물, 무카페인, 맛 없음</li>
  <li><strong>Maurten Gel 160:</strong> 40g 탄수화물, 고농도 버전</li>
  <li><strong>SiS Beta Fuel:</strong> Maurten 방식 채용, 40g 탄수화물</li>
</ul>

<figure class="my-10">
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/3/3e/PXL_20211208_195048218%286970%29.jpg"
    alt="GU와 Maurten 에너지젤 제품"
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    이미지: <a href="https://commons.wikimedia.org/wiki/File:PXL_20211208_195048218(6970).jpg" target="_blank" rel="noopener noreferrer">Wikimedia Commons</a> / Usesope, <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
  </figcaption>
</figure>

<h3>주의사항</h3>
<p>
  하이드로젤도 <strong>훈련에서 먼저 테스트</strong>해야 합니다.
  개인에 따라 효과가 다르고, 가격이 비싸므로 레이스용으로만 사용하는 것도 방법입니다.
</p>

<h2>위장 안정성: GI 트러블 줄이기</h2>
<p>
  마라톤 중 위장 문제는 매우 흔합니다. 연구에 따르면 러너의 30~50%가
  경기 중 위장 장애를 경험합니다. 에너지젤 선택 시 위장 안정성은 핵심 고려사항입니다.
</p>

<h3>위장 문제의 원인</h3>
<ul>
  <li><strong>고삼투압:</strong> 농축된 탄수화물이 장에서 물을 끌어당김</li>
  <li><strong>과당 과다:</strong> 과당은 흡수 한계가 있어 장에 남으면 발효됨</li>
  <li><strong>섬유질/지방:</strong> 소화가 느려 러닝 중 불편함 유발</li>
  <li><strong>카페인:</strong> 장운동 촉진으로 설사 유발 가능</li>
</ul>

<h3>위장 친화적인 제품</h3>
<table>
  <tr><th>제품</th><th>위장 안정성</th><th>특징</th></tr>
  <tr><td>Maurten Gel 100</td><td>★★★★★</td><td>하이드로젤, 무향</td></tr>
  <tr><td>SiS GO Isotonic</td><td>★★★★☆</td><td>등장성, 물 불필요</td></tr>
  <tr><td>Spring Energy</td><td>★★★★☆</td><td>천연 재료, 실제 음식 기반</td></tr>
  <tr><td>GU Roctane</td><td>★★★☆☆</td><td>아미노산 첨가, 일부 민감</td></tr>
  <tr><td>양갱</td><td>★★★★☆</td><td>고형, 씹어 먹어 위장 부담 적음</td></tr>
</table>

<h2>카페인: 언제, 얼마나?</h2>
<p>
  카페인은 <strong>지구력 운동 성능을 3~5% 향상</strong>시킬 수 있습니다.
  중추신경계를 자극해 피로감을 줄이고, 지방 산화를 촉진합니다.
</p>

<h3>적정 섭취량</h3>
<ul>
  <li><strong>권장량:</strong> 체중 1kg당 3~6mg (70kg 기준 210~420mg)</li>
  <li><strong>마라톤 분배:</strong> 30km 이후에 카페인 젤 집중 배치</li>
  <li><strong>과다 섭취 주의:</strong> 심박수 증가, 불안, 위장 문제 가능</li>
</ul>

<h3>카페인 함량 비교</h3>
<table>
  <tr><th>제품</th><th>카페인</th><th>비고</th></tr>
  <tr><td>GU Roctane (카페인)</td><td>70mg</td><td>고카페인</td></tr>
  <tr><td>SiS GO + Caffeine</td><td>75mg</td><td>고카페인</td></tr>
  <tr><td>Maurten Caf 100</td><td>100mg</td><td>매우 높음</td></tr>
  <tr><td>GU Original</td><td>20~40mg</td><td>저~중카페인</td></tr>
  <tr><td>커피 한 잔</td><td>80~100mg</td><td>참고용</td></tr>
</table>

<h3>카페인 전략</h3>
<ol>
  <li><strong>전반부:</strong> 무카페인 젤로 에너지 보충</li>
  <li><strong>25~30km:</strong> 저카페인 젤 (20~40mg)</li>
  <li><strong>35km 이후:</strong> 고카페인 젤 (70~100mg)</li>
</ol>

<h2>전해질과 아미노산</h2>

<h3>나트륨 (Sodium)</h3>
<p>
  땀으로 손실되는 가장 중요한 전해질입니다.
  에너지젤에 50~100mg 정도 포함된 경우가 많지만,
  <strong>별도의 전해질 보충</strong>이 필요할 수 있습니다.
</p>

<h3>BCAA/아미노산</h3>
<p>
  일부 프리미엄 젤(GU Roctane 등)에는 분지사슬아미노산(BCAA)이 포함됩니다.
  근육 손상 감소와 피로 지연에 도움될 수 있지만,
  <strong>즉각적인 에너지 효과는 제한적</strong>입니다.
</p>

<h2>한국 러너를 위한 선택 가이드</h2>

<h3>입문자 (하프 마라톤 이하)</h3>
<ul>
  <li>저렴하고 검증된 제품: GU Original, 양갱</li>
  <li>30분~45분마다 1개씩</li>
  <li>물과 함께 섭취</li>
</ul>

<h3>중급자 (풀마라톤)</h3>
<ul>
  <li>위장 안정성 좋은 제품: SiS Isotonic, Maurten</li>
  <li>20~30분마다 1개씩 (시간당 60~90g 탄수화물)</li>
  <li>후반부 카페인 젤 배치</li>
</ul>

<h3>기록 목표 러너</h3>
<ul>
  <li>하이드로젤 제품: Maurten, SiS Beta Fuel</li>
  <li>시간당 90~120g 탄수화물 목표</li>
  <li>레이스 전 훈련에서 충분히 테스트</li>
</ul>

<h2>에디터의 에너지젤 추천</h2>
<p>
  지난 3년간 10종 이상의 에너지젤을 테스트한 결과, 제 최애는 <strong>Maurten Gel 100</strong>입니다.
  가격은 비싸지만(개당 4,000원), 위장 문제가 전혀 없고 끈적임이 적어 물 없이도 먹을 수 있습니다.
  맛이 거의 없어서 호불호가 갈리지만, 저는 오히려 그게 장점이라고 봅니다.
  달달한 젤을 5개씩 먹으면 나중에 속이 메스꺼워지거든요.
</p>
<p>
  가성비를 따지면 <strong>양갱</strong>도 훌륭한 선택입니다.
  한국 러너들 사이에서 "국민 에너지젤"로 불리는 이유가 있습니다.
  위장 문제가 적고, 가격이 저렴하며(개당 500원), 어디서나 구할 수 있습니다.
  다만 씹어 먹어야 해서 호흡이 흐트러질 수 있고, 휴대가 불편하다는 단점이 있습니다.
</p>
<p>
  카페인이 필요한 후반부에는 <strong>GU Roctane 카페인</strong>을 씁니다.
  카페인 70mg이 들어있어 35km 이후 먹으면 확실히 정신이 맑아지고 힘이 납니다.
  다만 위장이 민감한 분들은 주의가 필요합니다.
</p>

<h2>마무리: 과학과 경험의 조합</h2>
<p>
  에너지젤은 과학입니다. 하지만 <strong>가장 좋은 젤은 "내 위장이 받아들이는 젤"</strong>입니다.
  아무리 좋은 성분이어도 내 몸에 안 맞으면 소용없습니다.
</p>
<p>
  훈련에서 여러 제품을 테스트하고, 레이스와 동일한 페이스에서
  실험해 보세요. 그리고 레이스 당일에는 <strong>검증된 젤만</strong> 사용하세요.
  새로운 시도는 훈련에서 하는 것입니다!
</p>
<p>
  이 가이드가 여러분의 에너지젤 선택에 도움이 되길 바랍니다.
  올바른 보급 전략으로 30km 벽을 넘어 완주의 기쁨을 누리시길 응원합니다!
</p>
    `,
    author: '산초 에디터',
    publishedAt: '2025-02-02',
    category: 'guide',
    tags: ['에너지젤', '마라톤', '탄수화물', '하이드로젤', 'Maurten'],
    readingTime: 12,
    featured: true,
  },
  {
    id: 'marathon-pacing-strategy',
    slug: 'marathon-pacing-mental-strategy-guide',
    title: '마라톤 전략: 5km부터 풀코스까지, 거리별 페이스 & 멘탈 완벽 가이드',
    description: '5km, 10km, 하프마라톤, 풀마라톤까지 거리별 페이스 전략과 레이스 중 멘탈 관리법. 사점(Dead Point) 극복까지.',
    content: `
<figure class="my-10">
  <img
    src="https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1600&q=80"
    alt="마라톤 대회에서 달리는 러너들"
    class="w-full rounded-xl border border-border"
    loading="eager"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    이미지: <a href="https://unsplash.com/photos/NPFu4GfFZ7E" target="_blank" rel="noopener noreferrer">Unsplash</a> / Mārtiņš Zemlickis
  </figcaption>
</figure>

<h2>들어가며: 왜 '페이스 전략'이 필요한가?</h2>
<p>
  마라톤 기록을 결정짓는 건 단순한 체력이 아닙니다.
  <strong>언제, 얼마나 힘을 쓰고, 어떻게 분배하느냐</strong>—바로 '페이스 전략'입니다.
</p>
<p>
  처음 대회를 뛰었을 때 저도 그랬습니다. 출발 신호와 함께 흥분해서 앞사람들을 따라갔고,
  10km도 안 돼서 숨이 턱까지 차올랐습니다. 결국 30km부터는 걷다 뛰다를 반복했죠.
  페이스 관리의 중요성을 뼈저리게 느꼈던 첫 풀코스였습니다.
</p>
<p>
  이 글에서는 5km부터 풀코스까지, 거리별 맞춤 페이스 전략과 레이스 중 멘탈 관리법을
  구체적으로 알려드리겠습니다.
</p>

<h2>5km: "숨 안 차게 출발, 마지막 1km에 전력"</h2>
<p>
  5km는 러닝 입문자가 가장 먼저 도전하는 거리입니다.
  짧은 거리라고 무작정 달리면 중반에 지쳐버리기 쉽습니다.
</p>

<h3>페이스 전략</h3>
<ul>
  <li><strong>첫 1km:</strong> 목표 페이스보다 5~10초 느리게 시작. 워밍업 구간으로 생각하세요.</li>
  <li><strong>2~4km:</strong> 일정한 페이스 유지. 호흡이 약간 가빠지지만 대화 가능한 정도.</li>
  <li><strong>마지막 1km:</strong> 남은 힘을 모두 쏟아붓는 구간. "이제 끝이다!" 마인드로 스퍼트.</li>
</ul>

<h3>멘탈 전략</h3>
<ul>
  <li><strong>"3km만 버티자"</strong>라는 목표 설정. 절반이 지나면 심리적으로 훨씬 편해집니다.</li>
  <li>주변 러너와 경쟁하지 말고 <strong>자기 페이스</strong>에만 집중.</li>
  <li>힘들 때는 호흡에 집중. 들숨 2번, 날숨 2번 리듬 유지.</li>
</ul>

<p>
  초보자는 5km를 30분 안에 완주하는 것을 첫 목표로 삼아보세요.
  이 목표를 달성하면 자신감이 생기고, 10km 도전의 발판이 됩니다.
</p>

<h2>10km: "전반 참기, 후반 치고 나가기"</h2>

<figure class="my-10">
  <img
    src="https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?auto=format&fit=crop&w=1600&q=80"
    alt="도로를 달리는 러너"
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    이미지: <a href="https://unsplash.com/photos/7DCZgKyp8vw" target="_blank" rel="noopener noreferrer">Unsplash</a> / Isaac Wendland
  </figcaption>
</figure>

<p>
  10km는 5km의 두 배이지만, 체감 난이도는 세 배입니다.
  <strong>지구력</strong>이 본격적으로 요구되는 거리이기 때문입니다.
</p>

<h3>페이스 전략</h3>
<ul>
  <li><strong>1~3km:</strong> 여유 있게 시작. 목표 페이스의 95%로 달리세요.</li>
  <li><strong>4~7km:</strong> 목표 페이스 유지. "이 페이스가 내 속도"라고 믿으세요.</li>
  <li><strong>8~10km:</strong> 에너지가 남아있다면 페이스업. 마지막 500m는 전력 질주.</li>
</ul>

<h3>멘탈 전략</h3>
<ul>
  <li><strong>"5km가 절반"</strong>이라는 중간 목표. 5km 지점을 통과하면 "이제 왔던 길만 돌아가면 된다"고 생각.</li>
  <li>7~8km 구간이 가장 힘듭니다. <strong>"여기만 넘기면 끝이 보인다"</strong>는 마인드셋이 핵심.</li>
  <li>음악이나 주변 응원에 집중해 고통에서 주의를 분산.</li>
</ul>

<p>
  10km 목표 기록을 세울 때는 5km 기록 × 2 + 3~5분을 기준으로 삼으세요.
  예를 들어 5km를 25분에 달린다면, 10km 목표는 53~55분이 현실적입니다.
</p>

<h2>하프마라톤(21.0975km): "네거티브 스플릿을 목표로"</h2>
<p>
  하프마라톤부터는 <strong>'전략 없이는 완주도 힘든'</strong> 거리입니다.
  처음 하프에 도전한다면 "완주"가 첫 번째 목표, 두 번째 이후부터 기록을 노려야 합니다.
</p>

<h3>페이스 전략: 네거티브 스플릿</h3>
<p>
  <strong>네거티브 스플릿</strong>은 전반부보다 후반부를 더 빨리 달리는 전략입니다.
  에너지 관리 측면에서 가장 효율적인 방법으로, 세계 기록 대부분이 이 전략으로 세워졌습니다.
</p>
<ul>
  <li><strong>1~5km:</strong> 목표 페이스보다 10~15초 느리게. 몸을 깨우는 구간.</li>
  <li><strong>6~15km:</strong> 목표 페이스 정확히 유지. 일정한 리듬이 핵심.</li>
  <li><strong>16~21km:</strong> 여력이 있다면 페이스를 5~10초 올려 피니시.</li>
</ul>

<h3>멘탈 전략</h3>
<ul>
  <li><strong>5km 단위</strong>로 쪼개서 생각. "일단 5km만", "이제 10km 지났어", "15km까지만 버티자".</li>
  <li>15km 이후 오는 피로감은 정상입니다. <strong>"이건 모든 러너가 느끼는 거야"</strong>라고 자기 암시.</li>
  <li>마지막 5km는 <strong>카운트다운 멘탈</strong>로 전환. "4km 남았어, 3km 남았어..."</li>
</ul>

<p>
  하프마라톤에서 2시간 벽을 깨는 것은 많은 러너들의 목표입니다.
  이를 위해서는 5:40/km 평균 페이스가 필요합니다.
  목표를 달성하려면 최소 3개월간 주 3~4회, 주간 30~40km 훈련이 권장됩니다.
</p>

<h2>풀마라톤(42.195km): "30km의 벽을 어떻게 넘을 것인가"</h2>
<p>
  풀마라톤은 <strong>"30km까지는 몸으로, 그 이후는 정신력으로"</strong> 달리는 레이스입니다.
  30km 벽은 글리코겐이 고갈되며 찾아오는 생리적 현상으로, 누구나 경험합니다.
</p>

<h3>페이스 전략</h3>
<ul>
  <li><strong>0~10km:</strong> <strong>절대 오버페이스 금지</strong>. 목표 페이스보다 10~15초 느리게 시작. 주변이 빠르게 가도 무시.</li>
  <li><strong>11~20km:</strong> 목표 페이스 정착. 이 구간에서 리듬을 만들어야 합니다.</li>
  <li><strong>21~30km:</strong> 페이스 유지에 집중. 슬슬 힘들어지지만 <strong>"아직 저축 중"</strong>이라 생각.</li>
  <li><strong>31~35km:</strong> <strong>30km의 벽 구간</strong>. 페이스가 떨어지는 건 정상. 무너지지만 않으면 됩니다.</li>
  <li><strong>36~42.195km:</strong> 남은 힘을 모두 쏟는 구간. <strong>"이제 진짜 끝"</strong>이라는 마인드로 피니시.</li>
</ul>

<h3>30km 벽 극복법</h3>
<ul>
  <li><strong>에너지젤 보급:</strong> 25~30km 구간에서 반드시 섭취. 미리 타이밍을 정해두세요.</li>
  <li><strong>작은 목표 설정:</strong> "다음 급수대까지만", "저 이정표까지만"으로 거리를 쪼개세요.</li>
  <li><strong>주법 점검:</strong> 팔 스윙을 작게, 보폭을 짧게 유지해 에너지 소모를 줄이세요.</li>
</ul>

<h3>멘탈 전략</h3>
<ul>
  <li><strong>"30km까지는 준비운동"</strong>이라는 마인드. 진짜 마라톤은 30km 이후입니다.</li>
  <li>힘들 때 <strong>연습에서 뛴 거리</strong>를 떠올리세요. "30km 훈련을 했잖아, 12km만 더 가면 돼."</li>
  <li>마지막 10km는 <strong>1km씩 카운트다운</strong>. 절대 남은 전체 거리를 생각하지 마세요.</li>
</ul>

<h2>사점(Dead Point): 멘탈이 무너지는 순간을 극복하는 법</h2>

<figure class="my-10">
  <img
    src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1600&q=80"
    alt="일몰 속 도로를 달리는 러너들의 실루엣"
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    이미지: <a href="https://unsplash.com/photos/oGv9xIl7DkY" target="_blank" rel="noopener noreferrer">Unsplash</a> / Fitsum Admasu
  </figcaption>
</figure>

<p>
  <strong>사점(Dead Point)</strong>은 러닝 중 갑자기 모든 에너지가 빠져나가고,
  "더 이상 못 달리겠다"는 생각이 드는 순간입니다.
  이건 <strong>정신적 현상</strong>이자 <strong>신체적 반응</strong>입니다.
</p>
<p>
  저도 첫 풀마라톤 35km 지점에서 사점을 경험했습니다.
  다리는 납덩이처럼 무겁고, 머릿속에선 "여기서 멈춰도 아무도 모른다"는 생각이 맴돌았습니다.
  하지만 그때 이 문장이 떠올랐습니다: <strong>"지금 멈추면 다음에도 멈춘다."</strong>
</p>

<h3>사점 극복 전략</h3>
<ul>
  <li><strong>"무조건 1km만 더"</strong> 법칙. 사점은 보통 1~2km만 버티면 지나갑니다.</li>
  <li><strong>걷기로 전환</strong>해도 괜찮습니다. 완전히 멈추지 않는 게 핵심. 걸으면서 에너지젤 섭취.</li>
  <li><strong>주변 관중이나 응원</strong>에 집중. "Fighting!" 소리에 힘을 얻으세요.</li>
  <li><strong>완주 후 자신</strong>을 상상하세요. 결승선을 넘는 순간의 뿌듯함을.</li>
</ul>

<h3>사점 예방법</h3>
<ul>
  <li><strong>초반 오버페이스 금지:</strong> 사점의 80%는 초반 오버페이스가 원인입니다.</li>
  <li><strong>정기적인 보급:</strong> 30분마다 수분, 45분마다 에너지젤 섭취.</li>
  <li><strong>훈련에서 사점 경험:</strong> 장거리 훈련(LSD)에서 일부러 지친 상태를 만들어 극복 연습.</li>
</ul>

<h2>마무리: 페이스는 과학, 멘탈은 예술</h2>
<p>
  마라톤에서 페이스 전략은 <strong>과학</strong>입니다.
  데이터에 기반한 계획을 세우고, 훈련에서 검증해야 합니다.
</p>
<p>
  하지만 레이스 중 찾아오는 고비를 넘기는 건 <strong>멘탈의 영역</strong>입니다.
  "1km만 더", "저 급수대까지만"이라는 작은 목표 설정,
  그리고 "나는 이미 충분히 훈련했다"는 자기 확신이 결승선까지 이끌어 줍니다.
</p>
<p>
  여러분의 다음 레이스에서 이 전략들이 도움이 되길 바랍니다.
  <strong>좋은 페이스, 강한 멘탈로 개인 최고 기록을 세우시길 응원합니다!</strong>
</p>
    `,
    author: '산초 에디터',
    publishedAt: '2025-02-04',
    category: 'guide',
    tags: ['마라톤', '페이스', '멘탈', '하프마라톤', '5km', '10km', '사점'],
    readingTime: 15,
    featured: true,
  },
  {
    id: 'shoe-trends-2026',
    slug: 'running-shoe-trends-2026-eva-replacement',
    title: '2026년, 당신의 신발장에서 EVA가 사라지는 이유 (러닝화 3대 트렌드)',
    description: '2026년 러닝화 시장의 3대 메가트렌드: 슈퍼 트레이너의 부상, 초임계 폼의 표준화, 규격 외 신발의 역설. EVA 시대의 종말과 한국 러닝 시장 1조 원 돌파.',
    content: `
<figure class="my-10">
  <img
    src="/images/blog/shoe-trends-2026/Gemini_Generated_Image_ry9xisry9xisry9x.webp"
    alt="2026 러닝화 트렌드: 슈퍼 트레이너, 초임계 폼, 규격 외 스택의 시대"
    class="w-full rounded-xl border border-border"
    loading="eager"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    2026 러닝화 3대 트렌드: 슈퍼 트레이너, 초임계 폼, 규격 외 스택
  </figcaption>
</figure>

<p>
  불과 2~3년 전만 해도 러닝화 미드솔의 표준이었던 EVA.
  하지만 <strong>2026년 현재</strong>, 우리의 신발장은 거대한 기술적 변곡점을 맞이하고 있습니다.
  엘리트 선수들만의 전유물이었던 기술이 어떻게 우리의 일상으로 스며들었는지,
  2026년 러닝화 시장의 거시적 트렌드 3가지를 정리했습니다.
</p>

<h2>TREND 1. 기술의 민주화: '슈퍼 트레이너'의 부상</h2>

<figure class="my-10">
  <img
    src="/images/blog/shoe-trends-2026/Gemini_Generated_Image_59n7u059n7u059n7.webp"
    alt="카본 레이싱화(2024) vs 슈퍼 트레이너(2026) 비교: 딱딱한 추진력에서 부드럽고 안정적인 바운스로"
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    카본 레이싱화(2024)에서 슈퍼 트레이너(2026)로의 기술 이전 흐름
  </figcaption>
</figure>

<p>
  과거 엘리트 선수들의 기록 경신을 위해 존재했던 최첨단 기술들이
  이제는 데일리 트레이너 영역으로 완전히 내려왔습니다.
  그 중심에는 <strong>'슈퍼 트레이너(Super Trainer)'</strong>라는 새로운 카테고리가 있습니다.
</p>

<h3>하이브리드의 정점</h3>
<p>
  엘리트 레이싱화의 폭발적인 반발력을 유지하면서도,
  아마추어 러너가 감당하기 힘든 카본 플레이트의 딱딱함과 불안정성을 제거했습니다.
  매일 신을 수 있는 편안함과 레이스급 성능을 동시에 갖춘 것이 핵심입니다.
</p>

<h3>대표 모델</h3>
<ul>
  <li><strong>아디다스 아디제로 에보 SL (Adizero Evo SL):</strong> 세계 기록 모델인 '아디오스 프로 3'의 핵심인 <strong>라이트스트라이크 프로(Lightstrike Pro)</strong> 폼을 그대로 이식하되, 카본 로드를 빼서 안정성을 극대화했습니다.</li>
  <li><strong>아식스 슈퍼블래스트(Superblast) 시리즈:</strong> 화요일 조깅에서도 일요일 대회와 같은 탄성을 느끼게 해주는 시장의 선두주자입니다.</li>
  <li><strong>나이키 페가수스 프리미엄:</strong> ZoomX 폼을 탑재한 데일리 트레이너의 새로운 기준.</li>
</ul>

<h2>TREND 2. 소재 과학의 혁명: 초임계 폼의 표준화</h2>

<figure class="my-10">
  <img
    src="/images/blog/shoe-trends-2026/Gemini_Generated_Image_pm4smjpm4smjpm4s.webp"
    alt="전통 EVA 폼 vs 초임계 질소 폼(2026) 미세구조 비교: 불균일한 기포에서 균일하고 미세한 기포로"
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    전통 EVA 폼(좌)과 초임계 질소 폼(우)의 미세구조 차이
  </figcaption>
</figure>

<p>
  2026년은 전통적인 EVA(에틸렌 비닐 아세테이트) 폼이 구시대의 유물로 밀려난 해입니다.
  <strong>질소 주입 및 초임계 발포(Supercritical)</strong> 공법이 새로운 표준이 되었습니다.
</p>

<h3>초임계 발포란?</h3>
<p>
  고온·고압 환경에서 이산화탄소나 질소를 폼 소재에 주입하는 기술입니다.
  기존 화학 발포제 대비 기포가 균일하고 미세해져,
  무게는 줄이면서 탄성과 내구성은 크게 향상됩니다.
</p>

<h3>브랜드별 차세대 폼</h3>
<ul>
  <li><strong>뉴발란스 인피니온(Infinion):</strong> 가스 주입 방식을 통해 무게는 획기적으로 줄이면서 복원력을 극대화했습니다. (<strong>1080 v15</strong> 적용)</li>
  <li><strong>브룩스 DNA Tuned:</strong> 접착제 없이 미드솔 내부 기포 크기를 부위별로 조절해 뒤꿈치는 부드럽게, 앞발은 탄력 있게 설계했습니다. (<strong>Glycerin Max 2</strong> 적용)</li>
  <li><strong>아식스 FF Blast Max:</strong> 기존 폼 대비 반발력을 <strong>8.5%</strong> 향상시켜 러닝 효율을 극대화했습니다.</li>
  <li><strong>호카 PEBA 폼:</strong> 초경량 고반발 소재로 Rocket X 시리즈에 적용.</li>
</ul>

<h3>EVA vs 차세대 폼 비교</h3>
<table class="w-full my-6 border-collapse border border-border">
  <thead>
    <tr class="bg-surface">
      <th class="border border-border px-4 py-2 text-left">항목</th>
      <th class="border border-border px-4 py-2 text-left">EVA</th>
      <th class="border border-border px-4 py-2 text-left">초임계 폼</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-border px-4 py-2">무게</td>
      <td class="border border-border px-4 py-2">보통</td>
      <td class="border border-border px-4 py-2">20~30% 경량</td>
    </tr>
    <tr>
      <td class="border border-border px-4 py-2">에너지 리턴</td>
      <td class="border border-border px-4 py-2">45~55%</td>
      <td class="border border-border px-4 py-2">60~70%</td>
    </tr>
    <tr>
      <td class="border border-border px-4 py-2">내구성</td>
      <td class="border border-border px-4 py-2">500~600km</td>
      <td class="border border-border px-4 py-2">700~1,000km</td>
    </tr>
    <tr>
      <td class="border border-border px-4 py-2">복원력</td>
      <td class="border border-border px-4 py-2">시간 경과 시 저하</td>
      <td class="border border-border px-4 py-2">장기간 유지</td>
    </tr>
  </tbody>
</table>

<h2>TREND 3. 규제 밖의 괴물들: 'Illegal' 러닝화의 역설</h2>

<figure class="my-10">
  <img
    src="/images/blog/shoe-trends-2026/Gemini_Generated_Image_85gsei85gsei85gs.webp"
    alt="THE ILLEGAL STACK: 40mm 규정 vs 맥시멀리스트 트레이너(님버스 27) vs 푸마 Fast-RB 58mm 비교"
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    World Athletics 40mm 규정(점선) 대비 맥시멀리스트 트레이너의 스택 높이 비교
  </figcaption>
</figure>

<p>
  세계육상연맹(World Athletics)의 규정(미드솔 40mm 이하, 카본 1장)을 비웃는
  <strong>'규격 외(Illegal)'</strong> 신발들이 아마추어 시장을 점령하고 있습니다.
</p>

<h3>왜 러너들은 '불법' 신발에 열광하는가?</h3>
<p>
  엘리트 대회의 규정은 어겼을지 몰라도,
  아마추어의 <strong>관절 보호</strong>와 <strong>러닝의 즐거움</strong>은 완벽히 지켜냈기 때문입니다.
  대회 기록보다 부상 없이 오래 달리는 것이 목표인 일반 러너에게,
  두꺼운 쿠셔닝은 축복입니다.
</p>

<h3>규격 외 대표 모델</h3>
<ul>
  <li><strong>푸마 Fast-RB Nitro Elite:</strong> 힐 스택 높이 <strong>58mm</strong>, 카본 플레이트 <strong>3장</strong> 삽입. 규칙 파괴를 통해 압도적인 반발력을 선사합니다.</li>
  <li><strong>뉴발란스 1080 v15:</strong> 스택 높이 41mm로 공식 대회에서는 사용 불가하지만, 궁극의 쿠셔닝을 제공합니다.</li>
  <li><strong>아식스 젤-님버스 27:</strong> 40mm를 초과하는 스택으로 '구름 위를 걷는 듯한' 착화감.</li>
  <li><strong>호카 본디 9:</strong> 맥시멀 쿠셔닝의 대명사. 일반 러너들의 관절을 지켜주는 수호자.</li>
</ul>

<h3>대회 규정 vs 실제 시장</h3>
<table class="w-full my-6 border-collapse border border-border">
  <thead>
    <tr class="bg-surface">
      <th class="border border-border px-4 py-2 text-left">항목</th>
      <th class="border border-border px-4 py-2 text-left">World Athletics 규정</th>
      <th class="border border-border px-4 py-2 text-left">시장 트렌드</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-border px-4 py-2">미드솔 높이</td>
      <td class="border border-border px-4 py-2">40mm 이하</td>
      <td class="border border-border px-4 py-2">40~60mm</td>
    </tr>
    <tr>
      <td class="border border-border px-4 py-2">플레이트</td>
      <td class="border border-border px-4 py-2">1장 이하</td>
      <td class="border border-border px-4 py-2">0~3장</td>
    </tr>
    <tr>
      <td class="border border-border px-4 py-2">대상</td>
      <td class="border border-border px-4 py-2">엘리트 선수</td>
      <td class="border border-border px-4 py-2">일반 러너</td>
    </tr>
  </tbody>
</table>

<h2>K-러닝 인사이트: 1조 원 시장과 '계급도' 문화</h2>

<p>
  한국 시장은 이러한 흐름을 가장 뜨겁게 받아들이고 있습니다.
  러닝 인구 1,000만 명 시대, 소비자들은 성능에 따라 등급을 나누는
  <strong>'러닝화 계급도'</strong> 문화를 통해 자신에게 맞는 장비를 스마트하게 소비합니다.
</p>

<h3>한국 러닝화 시장 특징</h3>
<ul>
  <li><strong>시장 규모:</strong> 2026년 1조 원 돌파 예상</li>
  <li><strong>주요 소비층:</strong> 30~40대 직장인 러너</li>
  <li><strong>트렌드:</strong> 가성비보다 성능, 브랜드 충성도 높음</li>
  <li><strong>신규 진입:</strong> 노스페이스, 살로몬 등 아웃도어 브랜드 가세</li>
</ul>

<h3>러닝화 계급도 문화</h3>
<p>
  한국 러너들 사이에서는 러닝화를 성능과 가격대에 따라 분류하는 '계급도'가 인기입니다.
  입문 → 중급 → 고급 → 엘리트로 이어지는 업그레이드 경로를 통해
  자신의 실력과 목표에 맞는 장비를 선택합니다.
</p>

<h2>마무리: 당신의 다음 선택은?</h2>

<p>
  기술은 이제 엘리트의 전유물이 아닙니다.
  소재는 더 가벼워졌고, 규제는 대중의 즐거움을 막지 못합니다.
</p>
<p>
  2026년의 러닝화는 당신의 한계를 규정짓는 것이 아니라,
  당신의 달리기를 더 멀리, 더 안전하게 확장하고 있습니다.
</p>
<p>
  <strong>EVA 시대는 끝났습니다.</strong>
  이제 선택은 여러분의 몫입니다.
  슈퍼 트레이너로 일상과 레이스를 넘나들 것인지,
  맥시멀 쿠셔닝으로 관절을 지킬 것인지,
  아니면 둘 다 갖출 것인지.
</p>
<p>
  <strong>어떤 선택이든, 2026년의 기술이 당신을 뒷받침해 줄 것입니다.</strong>
</p>
    `,
    author: '산초 에디터',
    publishedAt: '2026-02-04',
    category: 'news',
    tags: ['러닝화', '트렌드', '2026', 'EVA', '슈퍼트레이너', '초임계폼', 'PEBA', '한국러닝'],
    readingTime: 10,
    featured: true,
  },
  {
    id: 'pronation-guide',
    slug: 'pronation-type-running-shoe-guide-2026',
    title: '내 무릎 통증의 원인, 발 안에 있다? 내전(Pronation) 유형별 완벽 가이드',
    description: '러닝 중 무릎이나 정강이가 아프다면, 신발 브랜드보다 먼저 확인해야 할 것은 바로 자신의 내전 유형입니다. 2026년 최신 안정화 기술과 함께 나에게 딱 맞는 러닝화를 찾는 과학적 방법을 공개합니다.',
    content: `
<figure class="my-10">
  <img
    src="/images/blog/pronation-guide/hero.webp"
    alt="내전 유형에 따른 러닝화 선택 가이드"
    class="w-full rounded-xl border border-border"
    loading="eager"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    내전 유형별 러닝화 선택이 부상 예방의 핵심입니다
  </figcaption>
</figure>

<p>
  러닝을 시작하고 무릎이나 정강이가 아프다면, 신발 브랜드를 탓하기 전에 가장 먼저 확인해야 할 것은 바로
  <strong>자신의 '내전(Pronation)' 유형</strong>입니다.
</p>
<p>
  초보 러너가 부상 없이 오래 달리기 위해 필수적인 생체역학적 지식과, 2026년 최신 기술이 적용된
  나에게 딱 맞는 '인생 러닝화'를 찾는 과학적 방법을 공개합니다.
</p>

<h2>1. 내전(Pronation) 메커니즘의 완벽한 이해</h2>

<p>
  내전은 발이 지면에 착지할 때 충격을 흡수하기 위해 <strong>안쪽으로 자연스럽게 회전하는 인체의 충격 완화 메커니즘</strong>입니다.
  이 회전의 각도와 속도에 따라 우리는 세 가지 유형으로 나뉩니다.
</p>

<figure class="my-10">
  <img
    src="/images/blog/pronation-guide/stability-tech.webp"
    alt="2026년 안정화 기술의 진화"
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    최신 안정화 기술은 자연스러운 움직임을 유도합니다
  </figcaption>
</figure>

<h3>📊 내전 유형별 특징 및 추천 전략</h3>

<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse">
    <thead>
      <tr class="bg-stone-100 dark:bg-stone-800">
        <th class="border border-border p-3 text-left font-bold">유형</th>
        <th class="border border-border p-3 text-left font-bold">특징 (메커니즘)</th>
        <th class="border border-border p-3 text-left font-bold">발생 가능한 부상</th>
        <th class="border border-border p-3 text-left font-bold">추천 신발 카테고리</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-border p-3 font-semibold text-emerald-600">중립 (Neutral)</td>
        <td class="border border-border p-3">착지 후 약 15° 이상적 안쪽 회전. 효율적 충격 분산.</td>
        <td class="border border-border p-3">비교적 낮음</td>
        <td class="border border-border p-3">충격 흡수와 에너지 리턴에 집중한 <strong>뉴트럴화, 맥스 쿠션화</strong></td>
      </tr>
      <tr class="bg-stone-50 dark:bg-stone-900">
        <td class="border border-border p-3 font-semibold text-amber-600">과내전 (Over)</td>
        <td class="border border-border p-3">안쪽으로 과도하게 무너짐. 발목이 안으로 꺾이며 체중 쏠림.</td>
        <td class="border border-border p-3">정강이 통증, 족저근막염, 런너스 니(무릎 내측)</td>
        <td class="border border-border p-3">무너짐을 구조적으로 막는 <strong>안정화(Stability)</strong></td>
      </tr>
      <tr>
        <td class="border border-border p-3 font-semibold text-rose-600">과소내전 (Under)</td>
        <td class="border border-border p-3">바깥쪽으로 기울거나 회전이 부족함. 충격이 뼈로 직접 전달됨.</td>
        <td class="border border-border p-3">피로 골절, 발목 염좌</td>
        <td class="border border-border p-3">쿠셔닝이 매우 풍부하고 유연한 <strong>뉴트럴화</strong></td>
      </tr>
    </tbody>
  </table>
</div>

<h2>2. 2026 안정화 기술의 진화: "강제적 제어에서 기하학적 유도로"</h2>

<p>
  과거에는 딱딱한 '내측 기둥(Medial Post)'으로 발을 강제로 막았다면,
  <strong>2026년의 기술 트렌드</strong>는 인위적인 개입을 최소화하고 자연스러운 움직임을 유도하는 방식으로 진화했습니다.
</p>

<h3>👟 브랜드별 최신 핵심 기술 (2026 Tech Stack)</h3>

<div class="space-y-4 my-6">
  <div class="p-4 bg-stone-50 dark:bg-stone-900 rounded-xl border-l-4 border-stone-500">
    <h4 class="font-bold text-lg mb-2">ASICS 4D 가이던스 시스템</h4>
    <p class="text-secondary">
      (젤-카야노 32 적용) 딱딱한 기둥 대신 탄성 폼을 사용해 아치가 제자리로 돌아오는 시간을 단축합니다.
      <strong>이질감 없는 안정성</strong>이 특징입니다.
    </p>
  </div>

  <div class="p-4 bg-stone-50 dark:bg-stone-900 rounded-xl border-l-4 border-stone-600">
    <h4 class="font-bold text-lg mb-2">Brooks 가이드레일 (GuideRails)</h4>
    <p class="text-secondary">
      볼링장의 가이드처럼 무릎과 발목이 경로를 이탈할 때만 개입하는 스마트 시스템입니다.
      <strong>중립 러너가 지쳤을 때도 효과적</strong>입니다.
    </p>
  </div>

  <div class="p-4 bg-stone-50 dark:bg-stone-900 rounded-xl border-l-4 border-stone-700">
    <h4 class="font-bold text-lg mb-2">HOKA H-프레임 (H-Frame)</h4>
    <p class="text-secondary">
      (아라히 8 적용) 서로 다른 밀도의 폼을 결합하여 발을 신발 중앙으로 자연스럽게 유도하는 최신 설계입니다.
      <strong>무게는 줄고 지지력은 강화</strong>되었습니다.
    </p>
  </div>

  <div class="p-4 bg-stone-50 dark:bg-stone-900 rounded-xl border-l-4 border-stone-800">
    <h4 class="font-bold text-lg mb-2">New Balance 스태빌리티 플레인</h4>
    <p class="text-secondary">
      (860v14 적용) 얇은 EVA 필름을 활용해 <strong>투박함 없이 부드럽게 과내전을 제어</strong>하는 기술입니다.
    </p>
  </div>
</div>

<h2>3. 자가 진단과 전문 분석의 중요성</h2>

<figure class="my-10">
  <img
    src="/images/blog/pronation-guide/wet-test.webp"
    alt="웨트 테스트로 발 유형 확인하기"
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    젖은 발로 종이에 발자국을 찍어 아치 유형을 확인할 수 있습니다
  </figcaption>
</figure>

<h3>💧 집에서 하는 가장 쉬운 방법: "웨트 테스트(Wet Test)"</h3>

<p>지금 바로 확인해 보세요! 젖은 발로 종이나 마른 바닥에 발자국을 찍어보는 것입니다.</p>

<ul>
  <li><strong>발자국 전체가 찍힘:</strong> 평발 성향 (과내전 가능성 높음)</li>
  <li><strong>중간 부분이 끊겨 보임:</strong> 요족 성향 (과소내전 가능성 높음)</li>
  <li><strong>적당히 아치가 보임:</strong> 중립 발 (뉴트럴화 적합)</li>
</ul>

<div class="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-xl border border-amber-200 dark:border-amber-800 my-6">
  <p class="font-semibold text-amber-800 dark:text-amber-200 mb-2">💡 전문가의 팁</p>
  <p class="text-amber-700 dark:text-amber-300">
    기존에 신던 신발의 밑창 마모 패턴을 확인하세요.
    <strong>안쪽이 많이 닳았다면 과내전</strong>, <strong>바깥쪽이 닳았다면 과소내전</strong>을 의심해볼 수 있습니다.
  </p>
</div>

<h3>🔬 가장 정확한 방법: 3D 동적 보행 분석</h3>

<p>
  자가 진단은 참고용일 뿐입니다.
  <strong>플릿 러너, 레이스먼트, 또는 아식스/뉴발란스 플래그십 스토어</strong>와 같이
  전문 장비를 갖춘 곳에서 분석을 받는 것이 가장 확실합니다.
</p>
<p>
  이는 정적인 발 모양뿐만 아니라 <strong>달릴 때의 관절 각도와 압력 분포</strong>까지 분석하여
  최적의 솔루션을 제공합니다.
</p>

<h2>4. 내전 유형별 추천 러닝화 (2026)</h2>

<h3>✅ 중립 러너 추천</h3>
<ul>
  <li><strong>일상 러닝:</strong> Nike Pegasus 42, Asics Gel-Nimbus 27, Hoka Clifton 10</li>
  <li><strong>맥스 쿠션:</strong> Hoka Bondi 9, New Balance 1080 v15, Nike Invincible 4</li>
  <li><strong>가성비:</strong> Saucony Ride 18, Mizuno Wave Rider 29</li>
</ul>

<h3>✅ 과내전 러너 추천</h3>
<ul>
  <li><strong>라이트 안정화:</strong> Asics GT-2000 14, Brooks Adrenaline GTS 25, Saucony Guide 18</li>
  <li><strong>프리미엄 안정화:</strong> Asics Gel-Kayano 32, New Balance 860 v14</li>
  <li><strong>맥스 안정화:</strong> Hoka Arahi 8, Brooks Glycerin GTS 22</li>
</ul>

<h3>✅ 과소내전 러너 추천</h3>
<ul>
  <li><strong>쿠셔닝 최우선:</strong> Hoka Bondi 9, New Balance Fresh Foam More v5</li>
  <li><strong>유연한 뉴트럴:</strong> Saucony Triumph 23, Nike Vomero 19</li>
</ul>

<h2>🏁 마무리: 내 몸에 맞는 도구가 가장 좋은 도구입니다</h2>

<p>
  아무리 비싸고 유명한 슈퍼슈즈라도 내 생체역학적 특성과 맞지 않으면 부상을 유발하는 '독'이 될 수 있습니다.
</p>
<p>
  자신의 내전 유형을 정확히 파악하고, 최신 가이드 기술이 적용된 신발과 함께
  <strong>통증 없는 즐거운 러닝 라이프</strong>를 시작하세요!
</p>

<div class="p-6 bg-stone-100 dark:bg-stone-800 rounded-2xl my-8">
  <h4 class="font-bold text-lg mb-4">📋 핵심 체크리스트</h4>
  <ul class="space-y-2">
    <li>☑️ 웨트 테스트로 발 아치 유형 확인하기</li>
    <li>☑️ 기존 신발 밑창 마모 패턴 분석하기</li>
    <li>☑️ 가능하다면 전문 매장에서 보행 분석 받기</li>
    <li>☑️ 내전 유형에 맞는 카테고리에서 신발 선택하기</li>
    <li>☑️ 새 신발은 짧은 거리부터 적응 기간 갖기</li>
  </ul>
</div>
    `,
    author: '산초 에디터',
    publishedAt: '2026-02-04',
    category: 'guide',
    tags: ['내전', 'Pronation', '과내전', '안정화', '러닝화선택', '부상예방', '평발', '발분석', '생체역학'],
    readingTime: 8,
    featured: true,
  },
  {
    id: 'first-running-shoe-2026',
    slug: 'first-running-shoe-guide-2026',
    title: '2026 초보 러너를 위한 인생 첫 러닝화 추천 TOP 8',
    description: '예산과 발 타입에 맞춰 실패 없는 첫 러닝화를 선택하세요. 뉴트럴, 안정화, 슈퍼 트레이너까지 용도별 베스트 모델 완벽 정리.',
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80',
    content: `
<figure class="my-8 -mx-4 sm:mx-0">
  <img
    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1600&q=80"
    alt="러닝화 클로즈업 - 2026 초보 러너를 위한 첫 러닝화 가이드"
    class="w-full rounded-2xl"
    loading="lazy"
  />
  <figcaption class="text-sm text-gray-500 mt-2 text-center">
    Photo by <a href="https://unsplash.com" class="underline hover:text-gray-700" target="_blank" rel="noopener">Unsplash</a>
  </figcaption>
</figure>

<p>
  러닝 입문을 결심했다면 가장 먼저 마주하는 난관이 바로 <strong>"어떤 신발을 사야 하는가?"</strong>입니다.
  2026년 현재, 기술의 상향 평준화로 '나쁜 신발'은 없지만 <strong>'나에게 안 맞는 신발'</strong>은 여전히 존재합니다.
</p>
<p>
  초보자의 부상 방지와 즐거움을 책임질 용도별 베스트 모델들을 심층 분석해 드립니다.
</p>

<h2>☁️ 1. 구름 위를 걷는 편안함: 뉴트럴 데일리 트레이너</h2>

<p>
  관절 보호가 최우선인 초보자, 혹은 발의 무너짐이 없는 '중립' 러너에게 권장되는 맥스 쿠셔닝 카테고리입니다.
</p>

<div class="overflow-x-auto my-6">
  <table class="w-full border-collapse">
    <thead>
      <tr class="bg-stone-100 dark:bg-stone-800">
        <th class="border border-border p-3 text-left font-bold">모델명</th>
        <th class="border border-border p-3 text-left font-bold">핵심 기술</th>
        <th class="border border-border p-3 text-left font-bold">특징</th>
        <th class="border border-border p-3 text-left font-bold">추천 대상</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-border p-3 font-semibold">뉴발란스 1080 v15</td>
        <td class="border border-border p-3">Infinion 초임계 폼</td>
        <td class="border border-border p-3">넓은 바닥면, 중립화 중 최고 안정성</td>
        <td class="border border-border p-3">"발볼이 넓어 맞춤형 핏이 필요하다"</td>
      </tr>
      <tr class="bg-stone-50 dark:bg-stone-900">
        <td class="border border-border p-3 font-semibold">호카 클리프톤 10</td>
        <td class="border border-border p-3">8mm 힐 드롭 + 고스택</td>
        <td class="border border-border p-3">아킬레스건 부담 감소, 278g 경량</td>
        <td class="border border-border p-3">"무거운 신발은 싫지만 쿠션은 필요하다"</td>
      </tr>
      <tr>
        <td class="border border-border p-3 font-semibold">브룩스 고스트 17</td>
        <td class="border border-border p-3">DNA Loft v3 (질소 주입)</td>
        <td class="border border-border p-3">12mm 드롭, 탄탄한 밸런스</td>
        <td class="border border-border p-3">"무난하고 내구성 좋은 입문화를 원한다"</td>
      </tr>
    </tbody>
  </table>
</div>

<h3>뉴발란스 1080 v15</h3>

<figure class="my-8">
  <img
    src="/images/shoes/newbalance/1080v14/side.webp"
    alt="뉴발란스 1080 v15 측면"
    class="w-full max-w-md mx-auto rounded-xl border border-border"
    loading="lazy"
  />
  <figcaption class="text-sm text-secondary mt-2 text-center">
    뉴발란스 1080 v15 - 발볼 넓은 한국인에게 최적
  </figcaption>
</figure>

<p>
  Infinion 초임계 폼을 적용해 Fresh Foam X보다 더 부드럽고 반발력이 향상되었습니다.
  넓은 바닥면이 안정성을 제공해 발볼이 넓은 한국인 러너에게 특히 추천합니다.
  <a href="/shoes/new-balance-1080-v15" class="text-accent hover:underline">상세 스펙 보기 →</a>
</p>

<h3>호카 클리프톤 10</h3>

<figure class="my-8">
  <img
    src="/images/shoes/hoka/clifton10/side.webp"
    alt="호카 클리프톤 10"
    class="w-full max-w-md mx-auto rounded-xl border border-border"
    loading="lazy"
  />
  <figcaption class="text-sm text-secondary mt-2 text-center">
    호카 클리프톤 10 - 278g의 가벼운 쿠셔닝
  </figcaption>
</figure>

<p>
  고스택의 쿠셔닝을 278g의 가벼운 무게에 담았습니다. 8mm의 낮은 드롭으로 자연스러운 주법을 유도하며,
  아킬레스건에 부담을 주지 않습니다.
  <a href="/shoes/hoka-clifton-10" class="text-accent hover:underline">상세 스펙 보기 →</a>
</p>

<h3>브룩스 고스트 17</h3>

<figure class="my-8">
  <img
    src="/images/shoes/brooks/ghost17/side.webp"
    alt="브룩스 고스트 17"
    class="w-full max-w-md mx-auto rounded-xl border border-border"
    loading="lazy"
  />
  <figcaption class="text-sm text-secondary mt-2 text-center">
    브룩스 고스트 17 - 실패 없는 입문화의 정석
  </figcaption>
</figure>

<p>
  DNA Loft v3 질소 주입 폼으로 부드러우면서도 탄탄한 착지감을 제공합니다.
  12mm의 높은 드롭은 뒤꿈치 착지 러너에게 안정감을 줍니다.
  <a href="/shoes/brooks-ghost-17" class="text-accent hover:underline">상세 스펙 보기 →</a>
</p>

<h2>🛡️ 2. 발목을 지켜주는 든든함: 안정화 솔루션</h2>

<p>
  평발이거나 착지 시 발목이 안쪽으로 과하게 무너지는(과내전) 러너를 위한 과학적인 지지력 중심 모델입니다.
</p>

<h3>🥇 아식스 젤-카야노 32 (The Emperor)</h3>

<figure class="my-8">
  <img
    src="/images/shoes/asics/kayano32/1.webp"
    alt="아식스 젤-카야노 32"
    class="w-full max-w-md mx-auto rounded-xl border border-border"
    loading="lazy"
  />
  <figcaption class="text-sm text-secondary mt-2 text-center">
    아식스 젤-카야노 32 - 안정화의 황제
  </figcaption>
</figure>

<ul>
  <li><strong>특징:</strong> '4D 가이던스 시스템'을 통해 인위적인 압박 없이 부드럽게 안정성을 확보합니다.</li>
  <li><strong>강점:</strong> 안정화임에도 37mm의 풍부한 쿠셔닝으로 장거리 주행 시 발 피로도가 매우 낮습니다.</li>
</ul>

<p>
  <a href="/shoes/asics-gel-kayano-32" class="text-accent hover:underline">상세 스펙 보기 →</a>
</p>

<h3>🥈 브룩스 아드레날린 GTS 25</h3>

<figure class="my-8">
  <img
    src="/images/shoes/brooks/adrenalinegts25/side.webp"
    alt="브룩스 아드레날린 GTS 25"
    class="w-full max-w-md mx-auto rounded-xl border border-border"
    loading="lazy"
  />
  <figcaption class="text-sm text-secondary mt-2 text-center">
    브룩스 아드레날린 GTS 25 - 스마트한 안정성
  </figcaption>
</figure>

<ul>
  <li><strong>특징:</strong> '가이드레일(GuideRails)' 기술이 발의 과도한 움직임을 실시간으로 제어합니다.</li>
  <li><strong>강점:</strong> 12mm의 높은 드롭이 아킬레스건이 타이트한 러너에게 최고의 안정감을 줍니다.</li>
</ul>

<p>
  <a href="/shoes/brooks-adrenaline-gts-25" class="text-accent hover:underline">상세 스펙 보기 →</a>
</p>

<h3>🥉 호카 아라히 8</h3>

<figure class="my-8">
  <img
    src="/images/shoes/hoka/arahi8/side.webp"
    alt="호카 아라히 8"
    class="w-full max-w-md mx-auto rounded-xl border border-border"
    loading="lazy"
  />
  <figcaption class="text-sm text-secondary mt-2 text-center">
    호카 아라히 8 - 가벼운 안정화의 새 기준
  </figcaption>
</figure>

<p>
  새로운 <strong>H-프레임</strong> 도입으로 날렵한 디자인과 강력한 지지력을 동시에 잡았습니다.
  안정화임에도 가벼워 장거리 훈련에도 부담이 없습니다.
  <a href="/shoes/hoka-arahi-8" class="text-accent hover:underline">상세 스펙 보기 →</a>
</p>

<h2>⚡ 3. 가성비와 속도를 동시에: 슈퍼 트레이너 입문기</h2>

<p>
  기록 단축을 꿈꾸거나, 합리적인 가격에 최상급 레이싱화의 탄성을 맛보고 싶은 스마트한 초보자를 위한 선택입니다.
</p>

<h3>푸마 벨로시티 나이트로 4</h3>

<figure class="my-8">
  <img
    src="/images/shoes/puma/velocitynitro4/side.webp"
    alt="푸마 벨로시티 나이트로 4"
    class="w-full max-w-md mx-auto rounded-xl border border-border"
    loading="lazy"
  />
  <figcaption class="text-sm text-secondary mt-2 text-center">
    푸마 벨로시티 나이트로 4 - 접지력의 끝판왕
  </figcaption>
</figure>

<p>
  <strong>"접지력의 끝판왕"</strong>. 젖은 노면에서도 미끄러지지 않는 PUMAGRIP과 질소 주입 나이트로 폼의 조합으로
  전천후 데일리 트레이너로 손색없습니다.
  <a href="/shoes/puma-velocity-nitro-4" class="text-accent hover:underline">상세 스펙 보기 →</a>
</p>

<h2>💡 결론: 당신의 첫 번째 파트너는?</h2>

<div class="p-6 bg-stone-100 dark:bg-stone-800 rounded-2xl my-8">
  <h4 class="font-bold text-lg mb-4">🎯 상황별 추천 정리</h4>
  <ul class="space-y-3">
    <li class="flex items-start gap-3">
      <span class="text-emerald-600 font-bold">관절 걱정:</span>
      <span>뉴발란스 1080 v15 - 넓은 바닥면과 풍부한 쿠셔닝</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-amber-600 font-bold">발목 무너짐:</span>
      <span>아식스 젤-카야노 32 - 4D 가이던스 시스템</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-stone-600 font-bold">무난한 입문:</span>
      <span>브룩스 고스트 17 - 실패 없는 밸런스</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="text-rose-600 font-bold">속도 훈련:</span>
      <span>푸마 벨로시티 나이트로 4 - 가성비 + 반발력</span>
    </li>
  </ul>
</div>

<p>
  <strong>첫 러닝화 선택에서 가장 중요한 것</strong>은 화려한 기술보다 <strong>나의 발 타입과 러닝 목적</strong>에 맞는지입니다.
  위 가이드를 참고해 자신에게 맞는 첫 파트너를 찾아보세요!
</p>
    `,
    author: '산초 에디터',
    publishedAt: '2026-02-04',
    category: 'guide',
    tags: ['초보러너', '첫러닝화', '입문화', '뉴트럴', '안정화', '2026추천', '러닝화선택'],
    readingTime: 7,
    featured: true,
  },
  {
    id: 'seoul-running-guide-2026',
    slug: 'seoul-running-course-shower-guide-2026',
    title: '2026 서울 러닝 가이드: 남산 무료 샤워장 꿀팁부터 10대 핵심 코스까지',
    description: '남산 북측순환로 상세 분석, 중부공원여가센터 무료 샤워장, 서울 베스트 러닝 코스 10곳 총정리. 서울 도심 러닝의 모든 것.',
    content: `
<figure class="my-10">
  <img
    src="https://flexible.img.hani.co.kr/flexible/normal/816/489/imgdb/child/2025/0706/53_17517602257869_20250702503848.jpg"
    alt="서울 도심을 달리는 러너들"
    class="w-full rounded-xl border border-border"
    loading="eager"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    이미지 출처: <a href="https://www.hani.co.kr" target="_blank" rel="noopener noreferrer">한겨레</a>
  </figcaption>
</figure>

<h2>서울, 거대한 러닝 트랙이 되다</h2>
<p>
  서울의 러닝 인구가 폭발적으로 늘어나며 도심은 거대한 러닝 트랙으로 변모했습니다.
  특히 남산은 단순한 산책로를 넘어 체계적인 훈련과 힐링이 공존하는 <strong>러너들의 메카</strong>로 자리 잡았죠.
  오늘 포스팅에서는 <strong>남산의 숨겨진 무료 샤워장 정보</strong>와 서울의 <strong>베스트 러닝 코스 10곳</strong>을 총정리해 드립니다.
</p>

<h2>러너의 마지막 고민 해결: 무료 샤워장 &amp; 짐 보관</h2>
<p>
  땀에 젖은 채 지하철을 타는 민망함은 이제 끝입니다. 남산 러너들을 위한 오아시스 같은 공간을 소개합니다.
</p>

<h3>[강력 추천] 중부공원여가센터 무료 샤워장</h3>
<ul>
  <li><strong>위치:</strong> 서울시 중구 삼일대로 231 (남산 예장공원 인근)</li>
  <li><strong>특징:</strong> 남산 러닝 후 <strong>무료로 샤워</strong>를 할 수 있는 가장 매력적인 거점입니다.</li>
  <li><strong>짐 보관:</strong> 샤워장 내 <strong>물품 보관함</strong>이 마련되어 있어, 러닝 복장으로 갈아입은 뒤 소지품을 안전하게 맡기고 가벼운 몸으로 남산을 달릴 수 있습니다.</li>
  <li><strong>동선 팁:</strong> 충무로역이나 명동역에서 접근하기 좋으며, 샤워 후 바로 인근 카페나 식당으로 이동하기에 최적의 위치입니다.</li>
</ul>

<h3>지하철역 기반 러너지원공간 (2025.10 신설)</h3>
<ul>
  <li><strong>회현역 (4호선):</strong> 남산 코스의 시작점으로, <strong>탈의실·물품보관함·파우더룸</strong>을 갖춘 <strong>러너지원공간(Runner's Base)</strong>이 운영 중입니다. (샤워티슈 자판기 비치)</li>
  <li><strong>여의나루역 (5호선):</strong> 여의도 안내센터 1층 <strong>무료 개방형 샤워장</strong> (06:30~22:00, 개인 세면도구 지참 필수).</li>
  <li><strong>광화문역 &amp; 월드컵경기장역:</strong> 정비와 샤워가 가능한 베이스캠프 및 <strong>러닝용품 자동판매기</strong> (양말, 파스 등 구매 가능).</li>
</ul>

<h2>남산 집중 분석: 북측순환로 vs 순환로</h2>
<p>
  남산은 목적에 따라 크게 두 가지 코스로 나뉩니다. 훈련 강도와 선호에 따라 골라보세요.
</p>

<figure class="my-10">
  <img
    src="https://i.ytimg.com/vi/CMjnA1hUHoc/maxresdefault.jpg"
    alt="남산 북측순환로 러닝 코스"
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    남산 북측순환로 - 보행자 전용 도로로 안전한 러닝이 가능합니다
  </figcaption>
</figure>

<h3>남산 북측순환로 (훈련 &amp; 무릎 보호)</h3>
<ul>
  <li><strong>거리:</strong> 왕복 약 6.6km (편도 3.3km)</li>
  <li><strong>특징:</strong> <strong>보행자 전용 도로</strong>로 차량과 자전거가 없어 안전합니다. <strong>포장 상태가 양호</strong>하여 무릎 충격이 적습니다.</li>
  <li><strong>난이도:</strong> 중 (적당한 업힐 구간이 있어 심폐지구력과 하체 근력 훈련에 인기).</li>
</ul>

<h3>남산 순환로 (LSD &amp; 조망)</h3>
<ul>
  <li><strong>특징:</strong> 남산 전체를 크게 도는 코스로, <strong>신호등이 없어</strong> 장거리 지속주(LSD) 훈련에 최적입니다.</li>
  <li><strong>뷰 포인트:</strong> 남산서울타워와 서울 시내 전경을 한눈에 담을 수 있어 관광 러닝의 재미도 쏠쏠합니다.</li>
</ul>

<figure class="my-10">
  <img
    src="https://storage.heypop.kr/assets/2025/09/11001137/20250910_151122-%EC%8D%B8%EB%84%A4%EC%9D%BC-scaled.jpg"
    alt="한강 러닝 풍경"
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    이미지 출처: <a href="https://heypop.kr" target="_blank" rel="noopener noreferrer">헤이팝</a>
  </figcaption>
</figure>

<h2>서울 10대 핵심 러닝 코스 분석</h2>
<p>
  지형적 특성과 인프라를 고려하여 선정된 서울의 대표 러닝 코스입니다.
</p>

<table>
  <thead>
    <tr>
      <th>순위</th>
      <th>코스 명칭</th>
      <th>거리</th>
      <th>특징 및 지면 상태</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1</strong></td>
      <td>남산 북측순환로</td>
      <td>왕복 6.6km</td>
      <td><strong>포장 양호</strong>, 차량 통제, 경사도 훈련 최적</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>반포-잠수교</td>
      <td>5.5km</td>
      <td>세빛섬 야경과 무지개 분수를 즐기는 <strong>야경 성지</strong></td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>올림픽공원 (토성길)</td>
      <td>2.2km</td>
      <td>능선을 따르는 업힐 <strong>깔딱고개</strong>로 강도 높은 훈련 가능</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>석촌호수</td>
      <td>2.5km</td>
      <td><strong>100m 간격 거리 표기</strong>로 정밀 페이스 조절 가능</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>여의도공원 루프</td>
      <td>2.5km</td>
      <td>빌딩 숲 사이 평지 직선 구간으로 <strong>인터벌 훈련</strong> 용이</td>
    </tr>
    <tr>
      <td><strong>6</strong></td>
      <td>월드컵공원 (하늘공원)</td>
      <td>6.0km</td>
      <td><strong>291개 하늘계단</strong>과 억새밭 조망의 생태 복원 코스</td>
    </tr>
    <tr>
      <td><strong>7</strong></td>
      <td>서울숲 내부</td>
      <td>3.0km</td>
      <td>메타세콰이어 길과 거울연못을 지나는 <strong>힐링 코스</strong></td>
    </tr>
    <tr>
      <td><strong>8</strong></td>
      <td>청계천로</td>
      <td>8.1km</td>
      <td>전 구간 평지, 도심 어디서든 진출입 쉬운 접근성 최고 (왕복 시 16km)</td>
    </tr>
    <tr>
      <td><strong>9</strong></td>
      <td>경복궁 돌담길</td>
      <td>2.6km</td>
      <td>차도가 없어 안전하며 역사적 정취를 느끼는 <strong>시티런</strong></td>
    </tr>
    <tr>
      <td><strong>10</strong></td>
      <td>노들섬 둘레길</td>
      <td>1.5km</td>
      <td>한강 중앙 고립미, 500원 코인 라커 이용 가능</td>
    </tr>
  </tbody>
</table>

<h2>함께 달리고 싶다면? 7979 서울 러닝크루</h2>

<figure class="my-10">
  <img
    src="https://hangang.seoul.go.kr/www/file/editorImage.do?fileNm=2ce1ad8562724b418bcd2d0e4d06f892.jpg&day=202404"
    alt="7979 서울 러닝크루 단체 러닝"
    class="w-full rounded-xl border border-border"
    loading="lazy"
    decoding="async"
  />
  <figcaption class="text-sm text-secondary mt-2">
    이미지 출처: <a href="https://hangang.seoul.go.kr" target="_blank" rel="noopener noreferrer">한강사업본부</a>
  </figcaption>
</figure>

<p>
  의지가 부족하거나 제대로 된 주법을 배우고 싶다면 매주 목요일 저녁에 열리는 공공 프로그램을 추천합니다.
</p>
<ul>
  <li><strong>운영 기간:</strong> 매년 4월 ~ 10월 말</li>
  <li><strong>시간:</strong> 매주 목요일 오후 7시 ~ 9시</li>
  <li><strong>참여 장소:</strong> 청계광장(초급), 반포한강공원(중급), 여의도공원(상급) 분리 운영</li>
  <li><strong>특별 혜택:</strong> 육상 전문가 코치 지도, 완주 시 생수/에너지바 제공</li>
</ul>

<h2>코스별 추천 러닝화</h2>
<p>
  코스 특성에 맞는 러닝화를 선택하면 훈련 효과가 배가됩니다.
</p>
<ul>
  <li><strong>남산 업힐 (북측순환로):</strong> 안정성과 쿠셔닝이 좋은 <a href="/shoes/asics-gel-kayano-31">아식스 카야노 31</a> 또는 <a href="/shoes/brooks-adrenaline-gts-25">브룩스 아드레날린 GTS 25</a></li>
  <li><strong>한강 평지 (반포, 여의도):</strong> 가벼운 데일리화 <a href="/shoes/nike-pegasus-41">나이키 페가수스 41</a> 또는 <a href="/shoes/new-balance-1080-v14">뉴발란스 1080 v14</a></li>
  <li><strong>인터벌 훈련 (석촌호수, 올림픽공원):</strong> 반응성 높은 <a href="/shoes/saucony-kinvara-16">사코니 킨바라 16</a> 또는 <a href="/shoes/adidas-adizero-boston-12">아디다스 보스턴 12</a></li>
  <li><strong>장거리 LSD (청계천, 남산순환):</strong> 최고 쿠셔닝의 <a href="/shoes/hoka-bondi-9">호카 본디 9</a> 또는 <a href="/shoes/asics-gel-nimbus-27">아식스 님버스 27</a></li>
</ul>

<h2>마치며</h2>
<p>
  서울의 길을 달린다는 것은 이 도시의 역사와 자연, 활기찬 에너지를 온몸으로 흡수하는 과정입니다.
  오늘 소개한 <strong>남산 무료 샤워장</strong>과 <strong>10대 코스</strong> 정보를 활용해 더욱 쾌적하고 즐거운 러닝 라이프를 시작해 보세요!
</p>
<p>
  더 궁금한 코스 정보나 각 코스에 맞는 러닝화 추천이 필요하시면 <a href="/recommend">맞춤 추천</a> 페이지를 활용해 보세요.
</p>
    `,
    author: '산초 에디터',
    publishedAt: '2026-02-08',
    category: 'guide',
    tags: ['서울러닝', '남산러닝', '러닝코스', '무료샤워장', '북측순환로', '한강러닝', '러닝크루', '시티런'],
    readingTime: 10,
    featured: true,
  },
];
