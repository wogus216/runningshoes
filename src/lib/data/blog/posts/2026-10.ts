import type { BlogPost } from '@/types/blog';

export const posts_2026_10: BlogPost[] = [
  {
    id: 'garmin-vo2max-estimate-guide',
    slug: 'garmin-vo2max-estimate-guide',
    title: '가민 VO₂ Max 떨어지는 이유 | 워치 추정치와 실제 체력, 이렇게 구분하세요',
    description: '꾸준히 뛰는데 가민 VO₂ Max가 내려갔다면 무엇부터 확인해야 할까요? 심박수·속도로 계산하는 워치 추정치와 호흡가스 검사값의 차이, 더위·고도·설정·측정 조건, 가민과 애플워치의 갱신 조건을 공식 매뉴얼과 INTERLIVE 연구로 정리했습니다.',
    thumbnail: '/images/blog/garmin-vo2max-estimate-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-14',
    category: 'tips' as const,
    readingTime: 7,
    tags: ['가민 VO2 Max', 'VO2max 떨어지는 이유', '최대산소섭취량', '러닝 워치', '애플워치 심폐 피트니스', '러닝 훈련'],
    faqs: [
      { question: '가민 VO₂ Max가 떨어지면 체력이 떨어진 건가요?', answer: '워치 수치 하나만으로 단정하기 어렵습니다. 워치는 운동 중 심박수와 속도 등의 데이터로 최대산소섭취량을 추정합니다. 설정·환경·입력 데이터와 실제 컨디션을 함께 확인하고, 비슷한 조건에서의 훈련 수행 능력과 수치 추이를 비교하세요.' },
      { question: 'VO₂ Max가 안 올라가면 더 빨리 뛰어야 하나요?', answer: '추정치 갱신에 필요한 운동 조건과 훈련 처방은 다릅니다. 포러너 970 매뉴얼의 최대심박 70% 이상·실외 10분 이상 조건은 측정 조건입니다. 수치를 올리려고 회복런까지 강하게 바꾸기보다 설정과 기록 품질, 훈련 목적을 먼저 확인하세요.' },
      { question: '애플워치는 실내 러닝으로도 심폐 피트니스를 계산하나요?', answer: 'Apple 공식 안내상 실외 걷기·실외 달리기·하이킹 활동을 사용하며 실내 운동은 심폐 피트니스 추정에 포함하지 않습니다. 초기 추정값이 나오기까지 여러 차례의 실외 활동과 착용 데이터가 필요할 수 있습니다.' },
      { question: '가민과 애플워치의 VO₂ Max 숫자를 비교해도 되나요?', answer: '기기별 입력 정보와 갱신 조건이 달라 두 수치를 같은 검사 결과처럼 비교하기 어렵습니다. 같은 기기에서 비슷한 조건으로 기록한 추이부터 보는 편이 해석에 유리합니다.' },
    ],
    content: `
<div class="tldr"><span class="tldr-label">3줄 요약</span><ul>
<li><strong>워치의 VO₂ Max는 최대산소섭취량의 추정치입니다.</strong> 운동 중 호흡가스를 분석하는 검사와 측정 방법이 다릅니다.</li>
<li><strong>숫자가 내려가면 환경·설정·심박 기록부터 확인하세요.</strong> 더위, 고도, 최대심박 설정과 운동 종류가 해석에 영향을 줍니다.</li>
<li><strong>같은 조건의 추이와 실제 달리기를 함께 봅니다.</strong> 하루 숫자에 맞춰 훈련 강도를 바꾸기보다, 비슷한 페이스에서의 심박과 훈련 수행을 같이 확인하세요.</li>
</ul></div>

<p>훈련은 꾸준히 했는데 러닝을 저장하자 VO₂ Max가 내려갑니다. 대회 준비가 잘못되고 있는 것인지, 쉬어야 하는 것인지 신경 쓰이죠. 이때 먼저 구분할 것은 <strong>몸의 능력과 워치가 그 능력을 계산한 값</strong>입니다. 둘은 연결돼 있지만 같은 방식으로 얻은 숫자는 아닙니다.</p>
<p>이 글의 중심은 <strong>추정치와 실제 수행의 구분</strong>입니다. 숫자를 무시하자는 뜻은 아닙니다. 숫자가 왜 달라졌는지 확인하고, 훈련 판단에 어느 정도 반영할지 정하자는 이야기입니다.</p>

<h2>VO₂ Max는 무엇을 말하는 숫자인가</h2>
<p>VO₂ Max는 운동할 때 몸이 사용할 수 있는 <strong>최대 산소 섭취 능력</strong>입니다. 러닝 워치에서는 보통 체중 1kg당 1분에 사용할 수 있는 산소량인 <strong>mL/kg/min</strong>으로 표시합니다. 심장·폐가 산소를 전달하고 근육이 활용하는 능력을 보는 심폐 체력 지표입니다.</p>
<p>검사실에서는 운동 강도를 높이면서 호흡가스를 분석합니다. 반면 워치는 일상에서 얻은 데이터로 이 능력을 추정합니다. Firstbeat는 자사 알고리즘이 <strong>운동 속도와 심박수의 관계</strong>를 분석하고, 신뢰할 수 있는 구간을 골라 계산한다고 설명합니다. 워치를 차고 달릴 때 산소 섭취량을 직접 측정하는 것은 아닙니다.</p>
<table><thead><tr><th>구분</th><th>호흡가스 검사</th><th>러닝 워치</th></tr></thead><tbody>
<tr><td>얻는 방법</td><td>운동 중 호흡가스를 분석</td><td>심박·속도 등의 입력 정보로 추정</td></tr>
<tr><td>확인할 것</td><td>검사 방식·운동 조건</td><td>기기·설정·갱신 조건·기록 품질</td></tr>
<tr><td>이 글에서의 활용</td><td>추정값과 구별하는 기준</td><td>실제 수행과 함께 읽는 참고 지표</td></tr>
</tbody></table>
<p><small>측정·추정 방식은 <a href="https://www.firstbeat.com/en/science-and-physiology/fitness-level/" target="_blank" rel="noopener noreferrer">Firstbeat 공식 설명</a>과 <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9213394/" target="_blank" rel="noopener noreferrer">INTERLIVE 연구</a>를 대조했습니다.</small></p>

<h2>숫자가 떨어졌을 때 먼저 살필 네 가지</h2>
<h3>1. 같은 길을 같은 환경에서 뛰었는가</h3>
<p>평지에서 선선하게 달린 기록과 더운 날 언덕에서 달린 기록을 그대로 나란히 놓으면 해석이 어렵습니다. Garmin은 고온과 고도가 훈련 수행에 영향을 주며, 고도에 노출된 동안 VO₂ Max가 일시적으로 내려갈 수 있다고 안내합니다.</p>
<p>포러너 970에는 <strong>22°C 초과·고도 800m 초과</strong> 환경에서 추정치와 훈련 상태를 보정하는 기능이 있습니다. 더위 적응 기능은 GPS 활동과 연결된 휴대전화의 날씨 정보가 필요합니다. 이 기준은 해당 모델의 기능 조건이며, 모든 워치가 같은 보정을 한다는 뜻은 아닙니다.</p>
<p>숫자가 달라진 러닝의 코스·기온·고도를 먼저 확인하세요. 도심 평지 이지런과 산길 트레일을 같은 테스트로 취급하지 않는 것만으로도 해석의 출발점이 달라집니다. <a href="https://www8.garmin.com/manuals/webhelp/GUID-025D75CF-3445-49E1-8D81-1AA74AB4E00F/EN-US/GUID-70386BCC-5682-4C5C-9A87-C32AF9B6473B.html" target="_blank" rel="noopener noreferrer">Garmin 환경 보정 안내</a></p>

<h3>2. 최대심박과 사용자 정보가 맞는가</h3>
<p>포러너 970 매뉴얼은 정확도를 위해 <strong>사용자 프로필과 최대심박 설정</strong>을 확인하라고 안내합니다. 처음에는 러닝 수행을 학습하기 위해 여러 차례의 기록이 필요할 수 있습니다. 새 워치를 쓰기 시작한 직후의 숫자도 이 맥락에서 읽어야 합니다.</p>
<p>설정이 바뀐 시점과 숫자가 바뀐 시점이 겹치는지 살펴보세요. 다만 숫자를 높이기 위해 최대심박을 임의로 바꾸면 비교 기준 자체를 바꾸는 셈입니다. 입력 정보의 정확성을 확인하는 것이 목적입니다.</p>

<h3>3. 심박·GPS 기록에 이상한 구간이 있는가</h3>
<p>심박과 속도가 계산의 입력이라면, 갑자기 튀는 심박이나 끊긴 GPS 궤적도 확인 대상입니다. Firstbeat가 신뢰할 수 있는 구간을 선별한다고 설명하는 만큼, <strong>원본 그래프를 보지 않고 마지막 숫자만 읽는 방식</strong>은 정보가 부족합니다.</p>
<p>기록이 어색한 날은 활동 그래프와 기기 착용 상태를 먼저 확인하고, 기기 매뉴얼의 측정 안내를 따르세요. 이 점검으로 원인이 확정되는 것은 아니지만 훈련을 바꾸기 전에 입력 데이터를 검토할 수 있습니다.</p>

<h3>4. 숫자만 달라졌는가, 달리기도 달라졌는가</h3>
<p>워치 숫자는 내려갔는데 비슷한 조건의 러닝을 계획대로 수행하고 있다면, 그것도 함께 기록할 정보입니다. 반대로 동일한 코스·페이스에서 심박과 체감 부담이 계속 높아지고 훈련을 반복해서 끝내기 어렵다면, 수치 변화와 실제 수행을 함께 살펴볼 이유가 있습니다.</p>
<p><strong>이것은 원인을 판정하는 자가진단표가 아닙니다.</strong> 에디터가 권하는 기록 비교 순서입니다. 수면·피로·최근 훈련량을 함께 적어 두고 회복 상태를 검토하세요. 성능 저하가 이어지거나 몸에 이상이 느껴진다면 숫자를 만회하는 훈련보다 원인을 확인하는 것이 먼저입니다.</p>

<h2>연구에서도 ‘평균이 맞는다’와 ‘내 값이 맞는다’는 달랐습니다</h2>
<p>2022년 INTERLIVE 체계적 문헌고찰·메타분석은 <strong>14개 검증 연구, 총 403명</strong>을 살폈습니다. 운동 데이터를 쓰는 기기는 전체 집단의 평균 차이가 작았지만, 개인 수준의 추정 오차는 여전히 컸습니다. 즉, 여러 사람의 평균이 검사값과 가까워도 한 사람의 숫자를 정밀한 검사 결과처럼 다룰 수 있다는 뜻은 아닙니다.</p>
<p>이 연구는 2021년 1월까지의 문헌을 검색했으므로 <strong>2026년 최신 워치 한 모델의 오차율로 그대로 적용할 수 없습니다.</strong> 개인 오차와 하루 사이의 변동도 다른 문제입니다. 연구 결과를 근거로 “몇 포인트 하락은 무조건 오차”라고 선을 긋지 않습니다. 여기서 가져올 핵심은 측정 방법과 개인 오차를 구분하는 태도입니다. <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9213394/" target="_blank" rel="noopener noreferrer">연구 원문</a></p>

<h2>가민과 애플워치, 갱신 조건부터 다릅니다</h2>
<table><thead><tr><th>기기 예시</th><th>공식 안내상 조건</th><th>읽을 때 주의할 점</th></tr></thead><tbody>
<tr><td>Garmin 포러너 970</td><td>실외 러닝, 최대심박의 70% 이상, 최소 10분 후 저장</td><td>해당 모델의 추정치 갱신 조건이며 훈련 처방이 아님</td></tr>
<tr><td>Apple Watch</td><td>실외 걷기·실외 달리기·하이킹을 사용. 실내 운동은 제외</td><td>나이·성별·체중·키·심박에 영향을 주는 약물 정보 등을 고려</td></tr>
</tbody></table>
<p>가민의 다른 모델이나 다른 활동 모드는 조건이 다를 수 있습니다. Apple도 처음 추정값이 나오기까지 착용 데이터와 여러 실외 활동이 필요할 수 있다고 안내합니다. 워치를 바꾼 뒤 숫자가 달라졌거나 실내 러닝만 기록했는데 숫자가 갱신되지 않았다면, 먼저 <strong>그 기기가 어떤 활동을 계산에 사용하는지</strong> 확인하세요.</p>
<p><small>출처: <a href="https://www8.garmin.com/manuals/webhelp/GUID-025D75CF-3445-49E1-8D81-1AA74AB4E00F/EN-US/GUID-015C6746-435D-48E0-8ED8-CA2C81684E38.html" target="_blank" rel="noopener noreferrer">포러너 970 러닝 VO₂ Max 매뉴얼</a> · <a href="https://support.apple.com/en-us/108790" target="_blank" rel="noopener noreferrer">Apple 심폐 피트니스 안내</a>.</small></p>

<h2>수치를 만회하기보다 훈련 목적을 지키세요</h2>
<p>“최대심박 70% 이상, 10분”은 가민의 계산 조건입니다. 모든 러닝을 그 이상으로 하라는 지시도, 수치가 떨어질 때 인터벌을 추가하라는 처방도 아닙니다. 회복을 위해 잡은 날까지 숫자에 맞춰 강하게 바꾸면 원래 훈련 계획과 멀어집니다.</p>
<p>훈련 기록에는 <strong>코스·날씨, 페이스·심박, 체감 부담, 수면·피로</strong>를 함께 남겨 보세요. 같은 기기에서 비슷한 조건으로 누적한 추이와 실제 러닝을 비교할 자료가 됩니다. 한 번의 하락보다 반복되는 변화가 판단에 더 많은 맥락을 줍니다.</p>
<p>쉬운 러닝의 목적이 헷갈린다면 <a href="/blog/recovery-run-vs-lsd-guide-2026">회복런과 LSD의 차이</a>, 장거리 훈련을 구성하려면 <a href="/blog/lsd-training-beginner-guide-korea">초보 러너 LSD 가이드</a>를 함께 보세요. 워치 숫자를 읽는 법과 훈련 계획을 짜는 법을 연결하되, 하나의 수치가 계획 전체를 대신하게 하지는 마세요.</p>

<h2>자주 묻는 질문</h2>
<div class="faq"><p class="faq-q">Q. 가민 VO₂ Max와 애플워치 수치 중 무엇이 정답인가요?</p><p class="faq-a">A. 두 기기의 숫자만으로 정답을 고르기 어렵습니다. 계산 조건과 입력 정보가 다르며 둘 다 추정치입니다. 같은 기기의 추이를 먼저 보고, 정확한 평가가 필요한 경우에는 검사 목적에 맞는 방법을 전문가와 상의하세요.</p></div>
<div class="faq"><p class="faq-q">Q. 체력이 좋아졌는데도 숫자가 그대로일 수 있나요?</p><p class="faq-a">A. 숫자 하나가 훈련 결과의 전부를 보여주지는 않습니다. 계획한 러닝을 수행하는지, 비슷한 조건에서의 페이스와 심박이 어떻게 달라지는지 함께 확인하세요. 추정치가 갱신되는 활동 조건도 점검할 항목입니다.</p></div>
<div class="faq"><p class="faq-q">Q. 하루 하락은 무시해도 되나요?</p><p class="faq-a">A. 한 번의 수치만으로 체력 저하를 단정하지 않는다는 뜻이지, 모든 하락을 무시하라는 뜻은 아닙니다. 환경과 설정, 원본 활동 기록을 먼저 확인하고 반복되는 변화와 실제 컨디션을 함께 살피세요.</p></div>

<h2>확인한 출처</h2>
<ul>
<li><a href="https://www.firstbeat.com/en/science-and-physiology/fitness-level/" target="_blank" rel="noopener noreferrer">Firstbeat Fitness Level</a> — VO₂ Max와 심박·속도 기반 추정 방식.</li>
<li><a href="https://www8.garmin.com/manuals/webhelp/GUID-025D75CF-3445-49E1-8D81-1AA74AB4E00F/EN-US/GUID-015C6746-435D-48E0-8ED8-CA2C81684E38.html" target="_blank" rel="noopener noreferrer">Garmin 포러너 970 매뉴얼</a> — 프로필·최대심박·러닝 갱신 조건.</li>
<li><a href="https://www8.garmin.com/manuals/webhelp/GUID-025D75CF-3445-49E1-8D81-1AA74AB4E00F/EN-US/GUID-70386BCC-5682-4C5C-9A87-C32AF9B6473B.html" target="_blank" rel="noopener noreferrer">Garmin 더위·고도 적응 안내</a> — 환경 영향과 모델별 보정 조건.</li>
<li><a href="https://support.apple.com/en-us/108790" target="_blank" rel="noopener noreferrer">Apple 심폐 피트니스 안내</a> — 사용 활동과 사용자 정보.</li>
<li><a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC9213394/" target="_blank" rel="noopener noreferrer">Molina-Garcia 외, Sports Medicine, 2022</a> — INTERLIVE 체계적 문헌고찰·메타분석.</li>
</ul>
<p><small>2026년 10월 14일 공식 안내와 연구 원문 확인. 글감 트리거는 같은 날 게시된 @daily__dear의 VO₂ Max 카드이며, 본문은 제조사 자료와 연구를 대조해 작성했습니다. 기기 조건은 모델·소프트웨어에 따라 달라질 수 있습니다.</small></p>
`,
  },
  {
    id: 'jebudo-sea-road-festival',
    slug: 'jebudo-sea-road-festival',
    title: '제부도 씨로드 페스티벌 2026 접수·참가비 | 11월 14일 바닷길 5·10km, 셔틀은 별도 3만원',
    description: '제부도 바닷길을 달리는 2026 씨로드 페스티벌은 11월 14일 개최, 5K·10K 모두 참가비 6만원입니다. 10월 25일 접수 마감, 왕복 셔틀 별도 3만원, 케이블카·지역상품권 혜택과 환불 10월 25일 21시, 공식 안내의 미확정 항목까지 직접 확인했습니다.',
    thumbnail: '/images/blog/jebudo-sea-road-festival.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-14',
    category: 'news' as const,
    readingTime: 6,
    tags: ['제부도 씨로드 페스티벌', '제부도 마라톤', '제부도 바다런', '제부도 러닝', '화성 러닝 대회', '바닷길 러닝', '5km 마라톤', '10km 마라톤'],
    event: {
      name: '2026 제부도 씨로드 페스티벌',
      startDate: '2026-11-14T08:30:00+09:00',
      endDate: '2026-11-14T10:30:00+09:00',
      location: { name: '제부도 바닷길 일원·화성 황금해안길' },
      organizer: '제부도주민회·콜스에듀케이션',
      url: 'https://www.jebudorun.com/',
      offers: [
        { name: '5K 섬내 일주', priceKrw: 60000, availabilityEnds: '2026-10-25', url: 'https://www.jebudorun.com/apply' },
        { name: '10K 바닷길 왕복·섬 일주', priceKrw: 60000, availabilityEnds: '2026-10-25', url: 'https://www.jebudorun.com/apply' },
      ],
    },
    raceMeta: {
      displayTitle: '바닷길을 달리는 제부도 씨로드 페스티벌',
      displaySubtitle: '5K는 섬 한 바퀴, 10K는 바닷길 왕복까지 — 이동비를 함께 계산하세요',
      raceDate: '2026-11-14',
      registrationEnd: '2026-10-25',
      registrationOpen: { verifiedAt: '2026-10-14T12:58:02+09:00' },
      registrationVia: '공식 홈페이지 · 계좌이체 입금 확인 후 참가 확정',
      action: {
        what: '종목과 이동 방법을 정한 뒤 신청하세요',
        how: '공식 신청 폼에서 코스·티셔츠·배송 정보를 입력하고 입금 안내를 확인하세요. 왕복 셔틀을 선택하면 참가비에 1인 3만원이 추가됩니다. 정원에 따라 조기 마감될 수 있습니다.',
      },
      facts: [
        { label: '대회일', value: '11월 14일', sub: '토 · 러닝 08:30~10:30' },
        { label: '장소', value: '제부도 바닷길', sub: '화성 황금해안길 일원' },
        { label: '종목', value: '5K · 10K', sub: '섬내 일주 / 바닷길 왕복·섬 일주' },
        { label: '참가비', value: '60,000원', sub: '두 종목 동일 · 셔틀 별도' },
        { label: '접수 마감', value: '10월 25일', sub: '정원에 따라 조기 마감 가능' },
        { label: '환불 마감', value: '10월 25일 21시', sub: '사무국 이메일 신청' },
      ],
      highlights: [
        { badge: '바닷길', title: '10K는 섬 밖 연결도로까지', desc: '섬내 일주에 모세길 왕복이 더해집니다. 5K는 섬내 일주 코스입니다.' },
        { badge: '왕복권', title: '해상케이블카 혜택', desc: '배번호표가 탑승 티켓을 대신합니다. 사용 시간과 방법은 최종 공지를 확인하세요.' },
        { badge: '+3만원', title: '이동 선택이 총비용을 바꿉니다', desc: '참가비 6만원에 왕복 셔틀 3만원을 더하면 1인 9만원입니다.' },
      ],
    },
    faqs: [
      { question: '제부도 씨로드 페스티벌은 언제 열리나요?', answer: '2026년 11월 14일(토) 제부도 바닷길·화성 황금해안길 일원에서 열립니다. 공식 러닝 시간은 08:30~10:30이며 참가자는 07:30까지 도착하도록 안내됩니다. 기존 10월 4일 일정에서 변경됐습니다.' },
      { question: '참가비와 셔틀 요금은 얼마인가요?', answer: '5K·10K 모두 1인 60,000원입니다. 왕복 셔틀은 별도 30,000원이므로 선택하면 합계 90,000원입니다. 식비 등 개인 지출은 별도입니다.' },
      { question: '접수와 환불은 언제까지인가요?', answer: '접수 마감일은 10월 25일이며 정원에 따라 조기 마감될 수 있습니다. 환불 요청은 10월 25일 21시까지 신청번호·참가자 성명을 사무국 이메일로 보내야 합니다. 접수 마감 시각은 별도로 확인되지 않았습니다.' },
      { question: '티셔츠는 택배로 오나요, 현장에서 받나요?', answer: '공식 배송 공지는 사전 배송, 공식 FAQ는 현장 지급으로 안내가 다릅니다. 본문에서 한쪽을 확정하지 않았습니다. 최종 참가자 안내나 사무국에 수령 방식을 확인하세요.' },
    ],
    content: `
<p>바다를 사이에 둔 길을 달리고, 완주 후 케이블카로 제부도를 둘러보는 하루. <strong>2026 제부도 씨로드 페스티벌</strong>은 러닝과 여행을 함께 계획하고 싶은 사람에게 맞는 대회입니다. 다만 참가비 6만원만 보고 신청하기 전에 이동 방법을 먼저 정하는 편이 좋습니다. 왕복 셔틀을 쓰면 비용이 9만원으로 달라집니다.</p>
<p>런플리의 10월 13일 게시물을 출발점으로 <a href="https://www.jebudorun.com/" target="_blank" rel="noopener noreferrer">대회 공식 홈페이지</a>의 요강·코스·신청 폼·공지·FAQ를 직접 대조했습니다. 일정은 <strong>10월 4일에서 11월 14일로 변경</strong>됐습니다. 예전 포스터나 기사로 여행 일정을 잡았다면 날짜부터 다시 확인하세요.</p>

<h2>5K와 10K, 바닷길 구간이 다릅니다</h2>
<table><thead><tr><th>종목</th><th>공식 코스 설명</th><th>선택할 때 볼 점</th></tr></thead><tbody>
<tr><td><strong>5K</strong></td><td>제부도 섬내 일주</td><td>섬을 한 바퀴 도는 코스</td></tr>
<tr><td><strong>10K</strong></td><td>바닷길 왕복 + 섬내 일주</td><td>섬과 육지를 연결하는 길까지 달리는 코스</td></tr>
</tbody></table>
<p>두 종목 모두 바다 풍경을 만나는 대회지만, <strong>바닷길을 왕복하는 경험이 목적이면 10K</strong>입니다. 5K에도 같은 구간이 있다고 생각하고 신청하지 마세요. 거리·코스 지도는 <a href="https://www.jebudorun.com/info?tab=course" target="_blank" rel="noopener noreferrer">공식 코스 안내</a>에서 확인할 수 있습니다.</p>
<p>모세길은 물때와 날씨의 영향을 받는 구간입니다. 공식은 상황에 따라 출발 시각 조정, 코스 변경·단축이나 중단이 있을 수 있다고 안내합니다. “바닷길 코스니까 평탄한 기록 대회”라고 단정하기보다, 풍경과 현장 운영을 함께 받아들일 수 있는지 보고 선택하세요.</p>

<h2>참가비 6만원, 셔틀을 쓰면 합계 9만원</h2>
<table><thead><tr><th>선택</th><th>1인 비용</th><th>포함 범위</th></tr></thead><tbody>
<tr><td>5K 또는 10K 참가</td><td><strong>60,000원</strong></td><td>참가비·공식 참가자 혜택</td></tr>
<tr><td>참가 + 왕복 셔틀</td><td><strong>90,000원</strong></td><td>참가비 60,000원 + 셔틀 30,000원</td></tr>
</tbody></table>
<p>9만원은 공식 요금 두 항목을 더한 계산입니다. 식비나 개인 여행 비용까지 포함한 총예산은 아닙니다. 자가용을 쓴다면 연료비·주차 조건도 따로 확인해야 하므로, 차를 가져가는 편이 무조건 저렴하다고 판단할 수는 없습니다.</p>
<p>공식 혜택에는 기념 티셔츠·메달·에너지젤과 <strong>제부도 지역상품권 1만원 상당, 서해랑 해상케이블카 왕복권 2만2천원 상당</strong>이 안내돼 있습니다. 상품권과 이용권은 현금 환급이 아니므로 참가비에서 3만2천원을 빼 “실질 참가비”라고 계산하지 않습니다. 실제로 사용할 계획이 있는 혜택인지가 더 중요합니다.</p>

<h2>셔틀은 06:20 출발, 귀가는 15시 또는 17시</h2>
<p><a href="https://www.jebudorun.com/info" target="_blank" rel="noopener noreferrer">공식 행사 안내</a>에 올라온 왕복 셔틀 출발지는 아래 다섯 곳입니다. 모두 <strong>06:20 출발</strong>로 안내돼 있습니다.</p>
<table><thead><tr><th>출발지</th><th>안내된 탑승 위치</th></tr></thead><tbody>
<tr><td>시청광장</td><td>시청역 5번 출구 도로면</td></tr>
<tr><td>이수역</td><td>총신대입구(이수역) 13번 출구 도로면</td></tr>
<tr><td>종합운동장역</td><td>1번 출구 도로면</td></tr>
<tr><td>KTX 동탄역</td><td>1번 출구 도로면</td></tr>
<tr><td>평택역</td><td>2번 출구 광장 도로면</td></tr>
</tbody></table>
<p>귀가편은 행사장에서 <strong>15:00 또는 17:00</strong> 출발 중 선택하며 원래 탑승지로 돌아갑니다. 공식 러닝 시간이 10:30까지여도 셔틀로 바로 귀가하는 구조는 아닙니다. 완주 후 제부도에서 머무를 시간을 고려해 선택하세요. 버스번호와 최종 탑승 장소는 출발 전 별도 안내 예정입니다.</p>

<h2>자가용은 주차 후 케이블카 이동을 확인하세요</h2>
<p>공식은 <strong>전곡항 입구 대송지구 임시주차장에 주차한 뒤, 전곡항에서 케이블카로 제부도에 이동</strong>하는 경로를 안내합니다. 대회 도로 통제는 08:00~10:30입니다. 제부도 집결지 바로 옆까지 차로 들어갈 수 있다고 가정하면 이동 계획이 어긋날 수 있습니다.</p>
<p>배번호표가 케이블카 탑승 티켓을 대신한다는 안내는 있지만, 참가자 이용권의 <strong>사용 방법·탑승 시간은 최종 공지를 확인</strong>해야 합니다. 주차장에서 출발선까지 이동할 시간을 남기세요. 상세 집결지 주소도 확인일 기준 추가 안내 대상입니다.</p>

<h2>신청은 입금 확인까지, 접수 마감은 10월 25일</h2>
<p>10월 14일 확인 시 <a href="https://www.jebudorun.com/apply" target="_blank" rel="noopener noreferrer">공식 참가 신청 폼</a>이 열려 있습니다. 코스·티셔츠 사이즈·배송 주소를 입력하고 안내에 따라 <strong>계좌이체</strong>합니다. FAQ는 입금 확인 후 참가 확정이라고 설명하므로 신청서 작성만으로 완료됐다고 생각하지 마세요.</p>
<p><strong>접수 마감일은 10월 25일</strong>이며 정원에 따라 조기 마감될 수 있습니다. 등록 마감의 정확한 시각은 확인되지 않았습니다. 환불 마감 시각과 같다고 임의로 맞추지 않았습니다.</p>
<p>연령은 실제 신청 폼에서 <strong>5K 만 8세 이상, 10K 만 14세 이상</strong>으로 안내합니다. FAQ에는 5K 보호자 동의·유모차 가능 문구도 있지만 세부 조건이 충분히 정리돼 있지 않습니다. 어린 자녀와 참가하려면 신청 폼의 조건을 우선 확인하고, 경계 연도나 유모차 동반은 사무국에 문의하세요.</p>

<h2>환불은 10월 25일 21시까지 이메일로 요청</h2>
<p><a href="https://www.jebudorun.com/notice" target="_blank" rel="noopener noreferrer">공식 환불 공지</a>에 따르면 <strong>10월 25일 오후 9시까지</strong> 신청번호와 참가자 성명을 적어 <strong>jebudorun@awesomecomm.co.kr</strong>로 요청해야 합니다. 처리는 10월 26일 오전 9시 이후 순차 진행한다고 안내합니다.</p>
<p>기한 이후 개인 사정에 따른 환불은 제한되지만 행사 취소·연기와 법령에 따른 권리는 예외로 안내돼 있습니다. 참가권 양도·판매와 대리 참가는 금지입니다.</p>

<h2>기념품 안내에서 아직 확인할 부분</h2>
<div class="callout warning"><strong>티셔츠 수령 방식이 공식 문서 안에서도 다릅니다.</strong><p>배송 공지는 티셔츠를 사전 배송 품목에 넣었지만, FAQ는 현장 지급 품목으로 적었습니다. 배번호·기록칩의 사전 배송 안내는 공통입니다. 티셔츠는 한쪽을 확정해 안내하지 않으며 최종 문자나 사무국 확인이 필요합니다.</p></div>
<p>케이블카 이용 조건과 집결지 상세 주소도 최종 참가자 안내를 다시 확인하세요. 안내의 빈칸을 일반적인 대회 운영 방식으로 채우지 않았습니다. 출발 전에 챙길 물건은 <a href="/blog/fall-marathon-race-day-checklist-2026">가을 대회 준비물 체크리스트</a>에서, 러닝 양말을 고르는 기준은 <a href="/blog/running-socks-guide-fiber-composition-2026">소재별 러닝 양말 가이드</a>에서 확인할 수 있습니다.</p>

<h2>자주 묻는 질문</h2>
<div class="faq"><p class="faq-q">Q. 5K도 제부도 바닷길을 왕복하나요?</p><p class="faq-a">A. 공식 설명상 5K는 섬내 일주입니다. 바닷길 왕복과 섬내 일주를 함께 달리는 종목은 10K입니다.</p></div>
<div class="faq"><p class="faq-q">Q. 비가 와도 개최하나요?</p><p class="faq-a">A. FAQ는 우천 시 원칙적 진행으로 안내하지만, 기상특보·해상 안전·관계기관 통제에 따라 변경이나 취소가 가능하다고 설명합니다. 출발 전 공식 공지와 문자 안내를 확인하세요.</p></div>
<div class="faq"><p class="faq-q">Q. 배번호를 현장에서 받아도 되나요?</p><p class="faq-a">A. 공식은 배번호를 사전 배송한다고 안내합니다. 케이블카에서도 배번호표를 사용하므로 미수령 상태라면 출발 전에 사무국에 문의하세요. 현장 재발급 가능 여부를 확인하지 못해 가능하다고 안내하지 않습니다.</p></div>

<h2>확인한 출처</h2>
<ul>
<li><a href="https://www.jebudorun.com/" target="_blank" rel="noopener noreferrer">공식 홈페이지</a> — 변경된 대회일·참가비·접수 마감일·혜택.</li>
<li><a href="https://www.jebudorun.com/info" target="_blank" rel="noopener noreferrer">행사 안내</a> · <a href="https://www.jebudorun.com/info?tab=course" target="_blank" rel="noopener noreferrer">코스 안내</a> — 코스·집결·셔틀·주차·통제.</li>
<li><a href="https://www.jebudorun.com/apply" target="_blank" rel="noopener noreferrer">신청 폼</a> — 실제 신청 화면·연령·추가 셔틀 요금.</li>
<li><a href="https://www.jebudorun.com/notice" target="_blank" rel="noopener noreferrer">공지·FAQ</a> — 일정 변경·배송·입금·환불·양도 규정.</li>
</ul>
<p><small>2026년 10월 14일 공식 원문·실제 신청 화면 확인. 이후 운영 변경은 주최 측 최종 안내가 우선합니다.</small></p>
`,
  },
  {
    id: 'shall-we-run-movie-2026',
    slug: 'shall-we-run-movie-2026',
    title: '션 쉘위런 개봉일·예매 | 세계 7대 마라톤 다큐멘터리, 10월 16일 메가박스',
    description: '션의 세계 7대 마라톤 도전을 다룬 다큐멘터리 쉘위런(Shall We Run)이 2026년 10월 16일 개봉합니다. 메가박스 공식 영화 페이지에서 개봉일·전체관람가·예매 경로를 확인하고, 러너가 읽을 관람 포인트와 상영관 확인 순서를 정리했습니다.',
    thumbnail: '/images/blog/shall-we-run-movie-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-14',
    category: 'news' as const,
    readingTime: 4,
    tags: ['쉘위런', '션 다큐멘터리', '쉘위런 개봉일', '쉘위런 예매', 'Shall We Run', '러닝 영화', '세계 7대 마라톤', '메가박스'],
    faqs: [
      { question: '쉘위런 개봉일은 언제인가요?', answer: '메가박스 공식 영화 페이지 기준 2026년 10월 16일입니다. 이 글은 10월 14일 공개 정보와 예매 경로를 확인해 작성했습니다.' },
      { question: '쉘위런은 어디서 예매하나요?', answer: '메가박스 공식 영화 상세 페이지의 예매 메뉴에서 날짜·극장·회차를 확인할 수 있습니다. 메가박스 단독 표시를 확인했으며 모든 지점에서 상영한다는 뜻은 아닙니다.' },
      { question: '쉘위런 관람 등급과 러닝타임은 어떻게 되나요?', answer: '공식 영화 페이지에서 전체관람가를 확인했습니다. 러닝타임은 확인일 기준 0분으로 표시돼 있어 확정된 상영시간으로 안내하지 않습니다. 예매 전에 최신 상세 정보를 확인하세요.' },
      { question: '영화를 직접 본 리뷰인가요?', answer: '개봉 전 공식 소개·예매 정보에 기반한 안내입니다. 작품의 장면·완성도·평점을 관람 결과처럼 평가하지 않았습니다.' },
    ],
    content: `
<div class="tldr"><span class="tldr-label">3줄 요약</span><ul>
<li><strong>「쉘위런」은 션의 세계 7대 마라톤 도전을 다룬 다큐멘터리입니다.</strong> 영문 제목은 Shall We Run입니다.</li>
<li><strong>메가박스 공식 개봉일은 2026년 10월 16일, 전체관람가.</strong> 단독 표시와 예매 경로를 확인했습니다.</li>
<li><strong>상영 지점·회차는 예매 화면에서 따로 확인하세요.</strong> 개봉 전 공개 정보에 기반한 관람 안내입니다.</li>
</ul></div>

<p>대회 결과를 보면 가장 먼저 눈에 들어오는 것은 기록입니다. 이번에는 달린 시간을 잠시 내려놓고, 한 사람이 여러 출발선에 서는 이유를 따라가 볼 기회가 생겼습니다. <strong>션의 마라톤 도전을 다룬 「쉘위런」이 10월 16일 개봉</strong>합니다.</p>
<p>러닝라이프의 10월 13일 소개 게시물을 확인한 뒤 <a href="https://www.megabox.co.kr/movie-detail?rpstMovieNo=26066200" target="_blank" rel="noopener noreferrer">메가박스 공식 영화 페이지</a>에서 개봉일·등급·예매 경로를 대조했습니다. 이 글은 공개된 소개를 바탕으로 영화를 고르는 데 필요한 정보를 정리한 안내입니다.</p>

<h2>개봉일·관람 등급·예매, 확인된 정보</h2>
<table><thead><tr><th>항목</th><th>확인한 내용</th></tr></thead><tbody>
<tr><td>제목</td><td><strong>쉘위런</strong> / Shall We Run</td></tr>
<tr><td>장르</td><td>다큐멘터리</td></tr>
<tr><td>중심 인물·소재</td><td>가수 션의 세계 7대 마라톤 도전</td></tr>
<tr><td>개봉일</td><td><strong>2026년 10월 16일(금)</strong></td></tr>
<tr><td>관람 등급</td><td>전체관람가</td></tr>
<tr><td>상영 안내</td><td>메가박스 영화 목록의 단독 표시 확인</td></tr>
<tr><td>예매</td><td>메가박스 공식 상세 페이지에서 날짜·극장·회차 선택</td></tr>
</tbody></table>
<p>메가박스에 올라온 공식 소개는 완주 과정과 러너의 내면, 공동체와의 연결을 다루는 작품으로 설명합니다. 러닝 자세나 훈련 계획을 알려주는 교육 영상보다는 <strong>달리는 사람과 그 여정을 따라가는 다큐멘터리</strong>라는 점에서 접근하는 편이 맞겠습니다.</p>

<h2>2025년 션의 도전, 영화 속 ‘세계 7대’의 맥락</h2>
<p>러닝라이프 소개에 따르면 영화의 배경은 션이 <strong>2025년 한 해 도쿄·보스턴·런던·시드니·베를린·시카고·뉴욕을 달린 여정</strong>입니다. 그래서 작품을 소개하는 “세계 7대 마라톤”은 이 도전을 가리키는 맥락으로 읽으면 됩니다.</p>
<p>도시 이름만으로도 러너에게는 서로 다른 목표가 떠오릅니다. 해외 대회를 여행과 함께 계획하는 사람, 언젠가 보스턴 출발선에 서고 싶은 사람, 첫 풀코스를 준비하는 사람에게 영화의 출발점이 다르게 다가갈 수 있습니다.</p>
<p>각 대회의 신청 방식까지 알고 싶다면 <a href="/blog/world-marathon-majors-guide-2026">세계 메이저 마라톤 가이드</a>를 함께 보세요. 보스턴 참가를 목표로 한다면 <a href="/blog/boston-marathon-2027-bq-guide">보스턴 자격기록과 국내 대회 활용 가이드</a>가 별도로 있습니다. 영화의 도전과 본인의 현실적인 참가 계획을 연결하는 데 쓸 자료입니다.</p>

<h2>러너라면 이런 질문을 가지고 볼 만합니다</h2>
<p>공식 소개에 기대어 제안하는 <strong>에디터의 관람 관점</strong>은 세 가지입니다. 실제 장면이나 연출을 미리 평가한 목록은 아닙니다.</p>
<h3>1. 내가 다음 출발선에 서고 싶은 이유는 무엇인가</h3>
<p>개인 최고기록, 낯선 도시의 풍경, 크루와의 약속. 같은 마라톤을 신청해도 목표는 다를 수 있습니다. 공식 소개가 던지는 “우리는 왜 달리는가?”를 본인의 이유와 나란히 놓고 보면, 기록표와 다른 관점으로 러닝을 생각해 볼 수 있습니다.</p>
<h3>2. 혼자 달리는 도전과 함께하는 경험은 어떻게 연결되는가</h3>
<p>공식 소개에는 공동체와의 연결이 작품의 주제로 들어 있습니다. 러닝을 개인의 성취로 보는 사람과 모임의 경험으로 보는 사람이 함께 보고 이야기를 나눌 출발점입니다. 크루원과 관람한다면 같은 작품에서 무엇이 다르게 남았는지 이야기해 보세요.</p>
<h3>3. 영화 속 목표를 내 일정에 옮기면 무엇이 필요한가</h3>
<p>해외 마라톤을 달리고 싶은 마음이 생겼다면, 다음 단계는 항공권보다 접수 방식·참가 자격·대회일을 확인하는 일입니다. 영화의 감상과 훈련 처방은 구별하세요. 다른 사람의 도전 일정을 자신의 훈련량이나 회복 기준으로 그대로 옮길 필요는 없습니다.</p>

<h2>예매 전에 상영 지점·회차를 확인하세요</h2>
<p>메가박스 단독이라는 표시는 <strong>모든 메가박스 지점에서 같은 회차로 상영한다는 뜻은 아닙니다.</strong> 공식 상세 페이지의 예매 메뉴에서 원하는 날짜와 방문 가능한 극장을 함께 확인하세요. 관람료도 지점·회차·좌석 선택과 적용 혜택에 따라 예매 화면에서 확인하는 편이 정확합니다.</p>
<ol>
<li><a href="https://www.megabox.co.kr/movie-detail?rpstMovieNo=26066200" target="_blank" rel="noopener noreferrer">「쉘위런」 공식 영화 페이지</a>를 엽니다.</li>
<li>예매 메뉴에서 방문할 날짜와 극장, 상영 회차를 확인합니다.</li>
<li>관람료·좌석·취소 조건을 확인한 뒤 자신의 일정에 맞게 선택합니다.</li>
</ol>
<p>대회나 주말 러닝과 같은 날로 계획한다면 이동 시간을 먼저 확보하세요. 가까운 지점에서 원하는 시간에 상영하는지는 실제 예매 화면으로 판단해야 합니다.</p>

<h2>아직 확정해 적지 않은 정보</h2>
<p>10월 14일 공식 상세 페이지의 러닝타임은 <strong>‘0분’으로 표시</strong>돼 있습니다. 입력되지 않은 값으로 보일 수 있지만, 이를 실제 상영시간으로 안내하거나 다른 소개 자료의 숫자로 임의 보완하지 않았습니다. 관람 전 최신 상세 정보를 확인하세요.</p>
<p>OTT 공개 일정이나 별도의 전국 상영관 목록도 이번 확인에서 확보하지 못했습니다. 해당 정보가 필요하면 배급·극장 측 후속 안내를 확인하세요. 개봉 전 페이지의 관객수나 평점으로 작품의 완성도를 판단하지 않습니다.</p>

<h2>자주 묻는 질문</h2>
<div class="faq"><p class="faq-q">Q. 러닝을 하지 않는 사람도 볼 만한가요?</p><p class="faq-a">A. 공식 소개는 기록 경쟁뿐 아니라 개인의 도전과 공동체를 소재로 제시합니다. 그 주제에 관심이 있다면 선택할 이유가 있습니다. 재미나 감동의 정도를 관람한 것처럼 보장하지는 않습니다.</p></div>
<div class="faq"><p class="faq-q">Q. 쉘위런을 보고 마라톤 훈련법을 배울 수 있나요?</p><p class="faq-a">A. 공식 소개상 션의 도전을 따라가는 다큐멘터리입니다. 개인별 훈련 프로그램이나 회복 지침을 제공하는 자료로 소개하지 않습니다. 훈련 계획은 본인의 경험과 몸 상태를 기준으로 별도로 정하세요.</p></div>
<div class="faq"><p class="faq-q">Q. 온라인으로도 볼 수 있나요?</p><p class="faq-a">A. 확인한 정보는 10월 16일 메가박스 극장 개봉입니다. OTT 공개일은 확인하지 못했습니다.</p></div>

<h2>확인한 출처</h2>
<ul>
<li><a href="https://www.megabox.co.kr/movie-detail?rpstMovieNo=26066200" target="_blank" rel="noopener noreferrer">메가박스 「쉘위런」 상세 페이지</a> — 제목·장르·공식 소개·개봉일·관람 등급·예매 경로.</li>
<li><a href="https://www.megabox.co.kr/movie/comingsoon" target="_blank" rel="noopener noreferrer">메가박스 상영예정작 목록</a> — 작품 등록·단독 표시.</li>
<li><a href="https://www.instagram.com/runninglife_korea/p/DebZfEOP9Pq/" target="_blank" rel="noopener noreferrer">러닝라이프 10월 13일 게시물</a> — 글감 트리거·2025년 도전 배경. 개봉일은 극장 공식 정보로 대조했습니다.</li>
</ul>
<p><small>2026년 10월 14일 공개 원문 확인. 상영 일정과 제공 정보는 이후 바뀔 수 있으므로 관람 전 공식 예매 화면을 확인하세요.</small></p>
`,
  },
  {
    id: 'chicago-marathon-2026-results',
    slug: 'chicago-marathon-2026-results',
    title: '시카고마라톤 2026 결과 | 여자 3명 2시간 15분 이내, 키프루토 2:01:09 우승',
    description: '10월 11일 시카고마라톤에서 하위 페이사가 2:13:33으로 2연패, 아모스 키프루토가 2:01:09로 우승했습니다. 여자 상위 3명 모두 2시간 15분 이내 완주한 첫 마라톤입니다. 남녀 결과와 개인 기록 조회, 신청 중인 2027 대회 안내를 공식 자료로 정리했습니다.',
    thumbnail: '/images/blog/chicago-marathon-2026-results.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-12',
    category: 'news' as const,
    readingTime: 3,
    tags: ['시카고마라톤', '시카고마라톤 2026', '마라톤 결과', '하위 페이사', '아모스 키프루토', '시카고마라톤 2027'],
    faqs: [
      { question: '2026 시카고마라톤 우승자는 누구인가요?', answer: '남자는 케냐의 아모스 키프루토(2:01:09), 여자는 에티오피아의 하위 페이사(2:13:33)입니다. World Athletics의 10월 11일 공식 보고 기준입니다.' },
      { question: '내 완주 기록은 어디서 확인하나요?', answer: '대회 공식 홈페이지의 Results에서 2026 RESULTS를 선택하면 개인 기록 조회 페이지로 연결됩니다. 공식 완주증은 참가자 계정에서 제공될 예정이라고 안내돼 있습니다.' },
      { question: '2027 시카고마라톤은 지금 신청할 수 있나요?', answer: '네. 추첨 및 기록 보장 신청은 한국시간 2026년 10월 30일 새벽 4시까지이며 추첨 결과는 12월 8일 이메일로 안내됩니다. 대회일은 2027년 10월 10일입니다.' },
    ],
    content: `
<div class="tldr"><span class="tldr-label">3줄 요약</span><ul>
<li><strong>남자 키프루토 2:01:09, 여자 페이사 2:13:33 우승.</strong> 2026년 10월 11일 열린 시카고마라톤 결과입니다.</li>
<li><strong>여자 1~3위 모두 2시간 15분 이내.</strong> World Athletics가 마라톤 사상 최초라고 발표했습니다.</li>
<li><strong>다음 대회 신청은 진행 중.</strong> 2027년 대회 지원 마감은 한국시간 10월 30일 새벽 4시입니다.</li>
</ul></div>

<h2>여자 결과 — 페이사 2연패, 상위 3명 모두 2:15 이내</h2>
<table><thead><tr><th>순위</th><th>선수</th><th>국가</th><th>기록</th></tr></thead><tbody>
<tr><td>1</td><td>하위 페이사 (Hawi Feysa)</td><td>에티오피아</td><td><strong>2:13:33</strong></td></tr>
<tr><td>2</td><td>샤론 로케디 (Sharon Lokedi)</td><td>케냐</td><td>2:14:07</td></tr>
<tr><td>3</td><td>브리짓 코스게이 (Brigid Kosgei)</td><td>케냐</td><td>2:14:55</td></tr>
</tbody></table>
<p>페이사는 지난해 우승 기록 2:14:57을 <strong>1분 24초 단축</strong>하며 타이틀을 지켰습니다. 이번 경기의 중심은 <strong>시상대에 오른 세 선수 모두가 2:15 안에 들어온 것</strong>입니다. World Athletics는 이런 결과가 나온 첫 마라톤이라고 설명했습니다.</p>

<h2>남자 결과 — 키프루토, 3위·2위 다음은 우승</h2>
<table><thead><tr><th>순위</th><th>선수</th><th>국가</th><th>기록</th></tr></thead><tbody>
<tr><td>1</td><td>아모스 키프루토 (Amos Kipruto)</td><td>케냐</td><td><strong>2:01:09</strong></td></tr>
<tr><td>2</td><td>타데세 비킬라 (Tadese Bikila)</td><td>에티오피아</td><td>2:02:56</td></tr>
<tr><td>3</td><td>밀케사 멩게샤 (Milkesa Mengesha)</td><td>에티오피아</td><td>2:03:46</td></tr>
</tbody></table>
<p>키프루토는 시카고에서 2024년 3위, 2025년 2위를 기록한 뒤 올해 정상에 올랐습니다. <strong>종전 개인 최고기록보다 30초 빠른 기록</strong>입니다. 후반부에 선두 경쟁을 벌이던 제이컵 키플리모를 따돌렸고, 비킬라와 멩게샤가 2·3위로 들어왔습니다.</p>
<p><small>표는 남녀 엘리트 상위 3명이며 휠체어·연령별 결과는 포함하지 않았습니다. 출처: <a href="https://worldathletics.org/news/report/feysa-kipruto-2026-chicago-marathon" target="_blank" rel="noopener noreferrer">World Athletics 공식 경기 보고</a>(10월 11일).</small></p>

<h2>참가했다면 — 개인 기록·사진·완주증 확인</h2>
<p><a href="https://www.chicagomarathon.com/results/" target="_blank" rel="noopener noreferrer">대회 공식 결과 페이지</a>에서 <strong>2026 RESULTS</strong>를 선택해 개인 기록을 확인할 수 있습니다. 같은 페이지에 사진을 제공하는 MarathonFoto 링크도 있습니다.</p>
<p>공식 안내는 완주증을 <strong>참가자 계정에서 출력하거나 PDF로 저장할 수 있도록 제공할 예정</strong>이라고 설명합니다. 지금 모두 발급됐다는 뜻은 아니므로 계정의 제공 상태를 확인하세요. 기록집은 12월 발송 예정이며 완주자에게 디지털판도 제공한다고 안내합니다.</p>

<h2>다음 출발선 — 2027 신청은 열려 있습니다</h2>
<p><strong>2027년 대회일은 10월 10일</strong>입니다. <a href="https://www.chicagomarathon.com/apply/" target="_blank" rel="noopener noreferrer">공식 Apply 페이지</a> 기준 추첨·기록 보장 신청 마감은 미국 중부시간 10월 29일 오후 2시, <strong>한국시간 10월 30일(금) 새벽 4시</strong>입니다.</p>
<p>추첨은 마감 후 전체 지원자 중에서 뽑으며 선착순이 아닙니다. 결과는 12월 8일 이메일로 통보됩니다. 한국 거주자의 일반 참가비는 <strong>260달러에 처리 수수료가 추가</strong>됩니다. 연령별 기록 보장 기준과 당첨 후 납부 순서는 <a href="/blog/chicago-marathon-2027-application-guide">2027 접수 가이드</a>에서 확인하세요.</p>

<h2>확인한 출처</h2>
<ul>
<li><a href="https://worldathletics.org/news/report/feysa-kipruto-2026-chicago-marathon" target="_blank" rel="noopener noreferrer">World Athletics 경기 보고</a>: 남녀 순위·기록·경기 내용.</li>
<li><a href="https://www.chicagomarathon.com/results/" target="_blank" rel="noopener noreferrer">시카고마라톤 Results</a>: 기록·사진·완주증·기록집.</li>
<li><a href="https://www.chicagomarathon.com/apply/" target="_blank" rel="noopener noreferrer">시카고마라톤 Apply</a>: 2027 신청 기간·추첨·참가비.</li>
</ul>
<p><small>2026년 10월 12일 원문 확인. 이후 기록 정정이 있으면 공식 결과가 우선합니다.</small></p>
`,
  },
  {
    id: 'daegu-marathon-application-guide',
    slug: 'daegu-marathon-application-guide',
    title: '2027 대구마라톤 접수 시작 | 풀코스 10/12~18·9만원, 결제는 10/19~25',
    description: '2027 대구마라톤 풀코스 신청이 10월 12일 10시에 시작됐습니다. 18일 23:59까지 신청하고 19~25일 별도 결제하는 구조입니다. 참가비 9만원, 10km·건강달리기는 10월 26일 신청 시작. 공식 접수 상품의 실제 개시와 12월 10일 환불 기한을 확인해 정리했습니다.',
    thumbnail: '/images/blog/daegu-marathon-application-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-11',
    updatedAt: '2026-10-12',
    category: 'news' as const,
    readingTime: 4,
    tags: ['대구마라톤', '대구국제마라톤', '풀코스 접수', '풀코스', '마라톤 접수', '2027 마라톤'],
    event: {
      name: '2027 대구국제마라톤',
      startDate: '2027-02-28T08:00:00+09:00',
      location: { name: '국채보상공원 및 대구 시내 일원' },
      organizer: '대구광역시',
      url: 'https://daegumarathon.daegu.go.kr/kor/index.do',
      offers: [
        { name: '마스터즈 풀코스', priceKrw: 90000, availabilityEnds: '2026-10-18', url: 'https://daegumarathon.daegu.go.kr/korAply/index.do' },
        { name: '10km', priceKrw: 60000, availabilityEnds: '2026-11-01', url: 'https://daegumarathon.daegu.go.kr/korAply/index.do' },
      ],
    },
    raceMeta: {
      displayTitle: '2027 대구마라톤, 풀코스 접수 시작',
      displaySubtitle: '2월 28일 일요일 — 국채보상공원·대구 시내 일원',
      raceDate: '2027-02-28',
      registrationStart: '2026-10-12T10:00',
      registrationOpen: { verifiedAt: '2026-10-12T10:09:53+09:00' },
      registrationEnd: '2026-11-01',
      registrationVia: '대구마라톤 공식 홈페이지 접수 페이지',
      action: {
        what: '풀코스 신청 개시 확인 — 10월 18일 23:59까지',
        how: '<a href="https://daegumarathon.daegu.go.kr/korAply/index.do" target="_blank" rel="noopener noreferrer">공식 접수 페이지</a>에서 종목별 접수 기간에 신청합니다. 접수와 결제가 분리돼 있으니, 접수 후 결제 기간에 반드시 결제해야 참가가 확정됩니다.',
      },
      facts: [
        { label: '대회일', value: '2027년 2월 28일', sub: '일요일 · 08:00 출발' },
        { label: '장소', value: '국채보상공원', sub: '대구 시내 일원' },
        { label: '종목', value: '풀·10km·건강달리기', sub: '엘리트 풀코스 별도' },
        { label: '참가비', value: '풀 9만 / 10km 6만원', sub: '건강달리기 — 공식 미게시' },
        { label: '풀 접수', value: '10/12(월)~18(일)', sub: '10:00 시작 · 결제 10/19~25' },
        { label: '10km·건강', value: '10/26(월)~11/1(일)', sub: '결제 11/2~8' },
      ],
      highlights: [
        { badge: '2/28', title: '대회일은 2027년 2월 28일입니다', desc: '국채보상공원 및 대구 시내 일원에서 열립니다. <strong>오전 8시 출발</strong>로 안내되며, 신청일과 대회일을 구분해 준비하세요.' },
        { badge: '접수≠확정', title: '접수와 결제가 분리돼 있습니다', desc: '접수 기간에 신청한 뒤, <strong>별도 결제 기간에 참가비를 내야 참가가 확정</strong>됩니다. 풀코스는 접수 10/12~18, 결제 10/19~25입니다. 결제 기간을 놓치면 접수가 취소될 수 있습니다.' },
        { badge: '2월', title: '겨울 훈련 후 첫 풀코스 시즌', desc: '2월 말은 겨울 훈련을 마치고 봄 시즌을 여는 시점입니다. 국내 메이저 풀코스 중 가장 이른 시기에 열리므로, <strong>상반기 기록 도전 첫 기회</strong>로 삼는 러너가 많습니다.' },
      ],
    },
    faqs: [
      { question: '2027 대구마라톤 접수는 언제, 어디서 하나요?', answer: '풀코스(마스터즈)는 2026년 10월 12일(월) 10시부터 18일(일) 23시 59분까지, 10km·건강달리기는 10월 26일(월) 10시부터 11월 1일(일) 23시 59분까지 공식 접수 페이지(daegumarathon.daegu.go.kr)에서 신청합니다. 단체접수는 11월 16~19일입니다.' },
      { question: '대구마라톤 참가비는 얼마인가요?', answer: '풀코스 90,000원, 10km 60,000원입니다. 건강달리기(5km) 참가비는 공식 접수 페이지에 아직 게시되지 않았습니다.' },
      { question: '취소·환불은 언제까지 가능한가요?', answer: '2026년 12월 10일(목) 23:59까지 가능합니다. 공식 참가접수 유의사항은 참가신청-환불신청 메뉴에서 본인이 직접 처리해야 한다고 안내합니다.' },
      { question: '접수하면 바로 참가가 확정되나요?', answer: '아닙니다. 접수와 결제가 분리돼 있습니다. 풀코스는 10월 19~25일, 10km·건강달리기는 11월 2~8일 결제 기간에 참가비를 내야 참가가 확정됩니다.' },
    ],
    content: `
<div class="deadline-strip"><span class="dl-badge">📢 풀코스 신청 시작</span><span class="dl-text"><strong>2027 대구국제마라톤(2027년 2월 28일)</strong> 풀코스(마스터즈) 신청이 <strong>2026년 10월 12일(월) 10시에 시작됐습니다.</strong> 10km·건강달리기는 10월 26일(월) 10시부터 접수합니다. 접수와 결제가 분리돼 있으니, 접수 후 결제 기간을 반드시 확인하세요.</span></div>

<h2>10월 12일 풀코스 신청, 이렇게 확인하세요</h2>
<ol>
<li><a href="https://daegumarathon.daegu.go.kr/korAply/index.do" target="_blank" rel="noopener noreferrer">공식 참가접수 페이지</a>에서 <strong>풀코스(42.195km)</strong> 상품을 선택합니다. 10월 12일 10:09 기준 이 상품 1종과 참가신청 버튼이 표시됐습니다.</li>
<li><strong>참가신청</strong>을 누르고 공식 화면의 로그인·입력 안내를 따라 진행합니다. 접속이 지연되면 대기열 화면의 안내에 따라 기다리세요.</li>
<li>신청을 마쳤다면 신청 내역을 확인하고 <strong>10월 19~25일 결제</strong>를 준비하세요.</li>
</ol>
<p>대회일은 <strong>2027년 2월 28일(일) 오전 8시</strong>이고, 10월 12일 시작된 것은 참가 신청입니다. 신청 완료 뒤에는 내 신청 내역이 남았는지 확인하고 결제일을 달력에 적어두세요.</p>

<h2>종목별 접수·결제 일정</h2>
<p>2027 대구국제마라톤은 <strong>엘리트 풀코스·마스터즈 풀코스·10km·건강달리기(5km)</strong> 네 종목으로 나뉩니다. 일반 러너가 신청하는 것은 마스터즈 풀코스·10km·건강달리기이며, <strong>접수와 결제가 분리된 2단계 구조</strong>입니다.</p>
<table>
  <thead><tr><th>종목</th><th>접수 기간</th><th>결제 기간</th><th>참가비</th></tr></thead>
  <tbody>
    <tr><td><strong>마스터즈 풀코스</strong></td><td>10/12(월) 10:00 ~ 10/18(일) 23:59</td><td>10/19(월) ~ 10/25(일)</td><td>90,000원</td></tr>
    <tr><td><strong>10km</strong></td><td>10/26(월) 10:00 ~ 11/1(일) 23:59</td><td>11/2(월) ~ 11/8(일)</td><td>60,000원</td></tr>
    <tr><td><strong>건강달리기(5km)</strong></td><td>10/26(월) 10:00 ~ 11/1(일) 23:59</td><td>11/2(월) ~ 11/8(일)</td><td>공식 미게시</td></tr>
    <tr><td><strong>단체접수</strong></td><td>11/16(월) 10:00 ~ 11/19(목) 23:59</td><td colspan="2">공식 안내 확인</td></tr>
  </tbody>
</table>
<div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-body"><p class="callout-title">접수 ≠ 참가 확정</p><p>접수 기간에 신청만 하면 끝이 아닙니다. <strong>별도 결제 기간에 참가비를 납부해야 참가가 확정</strong>됩니다. 풀코스는 신청 마감 다음 날인 10월 19일부터 결제 주간이 시작됩니다. 신청을 마쳤다면 달력에 결제 시작일과 마감일을 함께 적어두세요.</p></div></div>
<p>건강달리기(5km) 참가비는 공식 접수 페이지에 아직 게시되지 않았습니다. 10월 26일 접수가 열리면 확인할 수 있습니다.</p>

<h2>대회 개요 — 2월 28일 대구 도심에서 출발</h2>
<p>2027 대구마라톤은 <strong>국채보상공원 및 대구 시내 일원</strong>에서 열립니다. 풀코스 신청이 시작된 10월 12일과 실제 대회일인 2027년 2월 28일을 구분하세요.</p>
<ul>
  <li><strong>대회일:</strong> 2027년 2월 28일(일) 08:00 출발</li>
  <li><strong>장소:</strong> 국채보상공원 및 대구 시내 일원</li>
  <li><strong>종목:</strong> 엘리트 풀코스 / 마스터즈 풀코스 / 10km / 건강달리기(5km)</li>
  <li><strong>접수:</strong> <a href="https://daegumarathon.daegu.go.kr/korAply/index.do" target="_blank" rel="noopener noreferrer">대구마라톤 공식 접수 페이지</a></li>
</ul>
<p>2월 말은 겨울 훈련을 마치고 봄 시즌을 여는 시점입니다. 국내 메이저 풀코스 중 가장 이른 시기에 열리므로, 상반기 기록 도전의 첫 기회로 삼는 러너가 많습니다.</p>

<h2>접수 전 확인할 것</h2>
<ul>
  <li><strong>정원·선발 방식:</strong> 이번에 확인한 공개 접수 상품 목록에서는 정원과 선착순·추첨 여부를 확인하지 못했습니다. 신청 전에 공식 대회개요·공지의 최신 조건을 함께 확인하세요.</li>
  <li><strong>WMAC 사전접수:</strong> WMAC(세계마스터즈육상선수권) 참가자 대상 사전접수가 10월 5~11일로 이미 진행됐습니다. 일반 접수와 별개입니다.</li>
  <li><strong>환불·취소:</strong> 공식 참가접수 유의사항은 <strong>2026년 12월 10일(목) 23:59까지</strong> 취소·환불이 가능하며, 참가신청-환불신청 페이지에서 본인이 직접 처리해야 한다고 안내합니다.</li>
</ul>

<h2>풀코스 준비가 처음이라면</h2>
<p>대회일까지 약 <strong>4개월 반</strong>입니다. 풀코스가 처음이라면 16~20주 훈련 프로그램을 시작하기에 적절한 시점입니다. 이미 하프 이상 경험이 있다면 장거리 주간 주행량을 점진적으로 늘려가는 계획을 세울 수 있습니다.</p>
<p>본인 러닝 스타일과 목표에 맞는 러닝화는 <a href="/recommend">1분 러닝화 추천</a>으로 후보를 좁힐 수 있습니다. 국내 마라톤 일정 전체는 <a href="/marathon">마라톤 일정 페이지</a>에서 확인하세요.</p>

<h2>출처</h2>
<p><a href="https://daegumarathon.daegu.go.kr/kor/index.do" target="_blank" rel="noopener noreferrer">대구국제마라톤 공식 홈페이지</a> 및 <a href="https://daegumarathon.daegu.go.kr/korAply/index.do" target="_blank" rel="noopener noreferrer">접수 페이지</a> — 2026년 10월 11일 확인. 기존 일정 안내는 10월 11일 확인 자료 기준입니다. <strong>10월 12일 10:09 공식 참가접수 목록에서 풀코스 상품·신청 버튼·9만원·신청 종료 10월 18일 23:59를 확인</strong>했습니다. 같은 페이지의 유의사항에서 취소·환불 기한 12월 10일 23:59를 확인했습니다.</p>
<p><small>10월 12일 공개 접수 목록에는 풀코스 1종만 표시됐습니다. 건강달리기(5km) 상품의 참가비는 이번 확인에서 확보하지 못했습니다. 선착순·추첨 여부와 정원은 이번에 확인한 접수 상품 목록에는 명시되지 않았습니다. 10월 12일 브라우저가 대기열 주소로 이동하는 현상도 확인했으므로, 접속이 지연되면 공식 화면 안내에 따라 기다리세요.</small></p>
`,
  },
  {
    id: 'chicago-marathon-2027-application-guide',
    slug: 'chicago-marathon-2027-application-guide',
    title: '시카고마라톤 2027 접수 시작 | 한국시간 10/30 새벽 4시 마감·12/8 추첨 발표 — 기록 기준표·자선 $2,500·참가비 $260',
    description: '2027 시카고마라톤(10월 10일, 49회) 지원이 한국시간 10월 8일 22시에 열려 10월 30일 새벽 4시에 닫힙니다. 추첨은 선착순이 아니고 결과는 12월 8일 이메일, 당첨자는 한국시간 12월 16일 14시 59분까지 참가비 $260을 냅니다. 추첨 없이 확정되는 기록 보장 기준표(16~34세 남 2:50·여 3:20 등)와 자선·투어 경로, 신청 순서를 공식 페이지 원문으로 정리했습니다.',
    thumbnail: '/images/blog/chicago-marathon-2027-application-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-10',
    event: {
      name: '시카고마라톤 2027',
      startDate: '2027-10-10',
      location: { name: '시카고 (그랜트파크)', address: '미국 시카고' },
      organizer: 'Bank of America Chicago Marathon',
      url: 'https://www.chicagomarathon.com/',
    },
    category: 'news' as const,
    readingTime: 7,
    tags: ['시카고마라톤', '시카고마라톤 2027', '시카고마라톤 신청', '월드 메이저 마라톤', '마라톤 추첨', '해외 마라톤 신청', '기록 보장', 'PB 마라톤'],
    faqs: [
      { question: '시카고마라톤 2027은 언제까지 신청하나요?', answer: '한국시간 10월 30일(금) 새벽 4시(미국 중부 10월 29일 오후 2시)까지입니다. 추첨과 기록·레거시 보장 신청이 모두 이 기간에만 열립니다. 자선은 2027년 9월 10일, 투어는 2027년 8월 10일까지 따로 받습니다.' },
      { question: '빨리 신청하면 당첨 확률이 올라가나요?', answer: '아니요. 마감 뒤 전체 지원자 중에서 뽑고, 여러 번 지원해도 확률은 오르지 않으며 중복 지원은 추첨 전에 지워집니다(공식). 다만 기록 보장 신청은 검토에 최대 10영업일이 걸려, 승인되지 않았을 때 추첨으로 다시 지원하려면 일찍 내는 편이 좋습니다.' },
      { question: '참가비는 얼마이고 언제 내나요?', answer: '해외 거주자 $260(자선 경로 $335)에 처리 수수료가 붙습니다. 지원할 때가 아니라 당첨되거나 보장 신청이 승인된 뒤에 냅니다. 납부 기한은 보장 경로 승인자가 미국 중부 11월 10일, 추첨 당첨자가 12월 15일 밤 11시 59분이고, 모든 비용은 환불되지 않습니다.' },
      { question: '기록으로 확정 출전하려면 몇 분이 필요한가요?', answer: '대회일(2027년 10월 10일) 나이 기준으로 16~34세 남자 2시간 50분·여자 3시간 20분, 40~44세 남자 3시간·여자 3시간 30분 등입니다. 2025년 1월 1일~2026년 10월 29일에 공인 코스에서 낸 풀코스 기록만 인정하고, 하프 등 다른 거리 기록은 받지 않습니다.' },
    ],
    content: `
<div class="deadline-strip"><span class="dl-badge">📢 접수중</span><span class="dl-text">2027 시카고마라톤(2027년 10월 10일) 지원이 <strong>한국시간 10월 8일 22시에 열렸고 10월 30일(금) 새벽 4시에 닫힙니다.</strong> 추첨과 기록·레거시 보장 신청은 이 기간에만 받습니다. 자선(2027년 9월 10일까지)과 투어(2027년 8월 10일까지)는 따로 더 길게 열립니다.</span></div>

<div class="tldr"><span class="tldr-label">3줄 요약</span><ul>
<li><strong>2027 시카고마라톤(10월 10일, 49회) 지원이 열렸습니다.</strong> 한국시간 10월 8일 22시~10월 30일 새벽 4시입니다. 추첨 결과는 12월 8일(미국 시간) 이메일로 오고, 당첨되면 한국시간 12월 16일 14시 59분까지 참가비를 내야 합니다.</li>
<li><strong>추첨은 선착순이 아닙니다.</strong> 마감 뒤 전체 지원자 중에서 뽑고, 여러 번 지원해도 확률이 오르지 않습니다. 참가비는 해외 거주자 $260(처리 수수료 별도)이고 당첨·승인된 뒤에 냅니다.</li>
<li><strong>추첨 없이 확정되는 "보장 경로"도 있습니다.</strong> 연령별 기록 기준(16~34세 남 2:50·여 3:20 등)을 넘은 풀코스 기록, 최소 $2,500 모금의 공식 자선, 공식 투어 여행사 패키지 등입니다.</li>
</ul></div>

<div class="callout info"><span class="callout-icon">🏁</span><div class="callout-body"><p class="callout-title">한 줄 결론</p><p><strong>기록 기준 안에 들면 보장 경로로, 아니면 추첨으로 — 둘 다 한국시간 10월 30일 새벽 4시 전에 신청해야 합니다.</strong> 보장 신청이 승인되지 않으면 추첨으로 다시 지원할 수 있고, 추첨에서 떨어져도 자선·투어로 등록할 길이 남습니다(공식 안내). 다만 보장 신청 검토에 최대 10영업일이 걸리고 추첨 지원도 같은 기간에만 받으므로, <strong>보장 신청은 마감 직전이 아니라 10월 중순 전에 내야</strong> 떨어졌을 때 추첨으로 갈아탈 시간이 남습니다.</p></div></div>

<h2>2027 일정 — 한국 시간으로 옮기면</h2>
<p>공식 일정은 모두 미국 중부 시간입니다. 아래는 10월 일정은 서머타임(UTC−5), 11월 1일 이후 일정은 표준시(UTC−6)로 계산해 한국 시간으로 옮긴 값입니다.</p>
<table>
  <thead><tr><th>단계</th><th>공식(미국 중부)</th><th>한국 시간</th></tr></thead>
  <tbody>
    <tr><td><strong>지원 시작</strong></td><td>10월 8일(목) 오전 8시</td><td>10월 8일(목) 22시</td></tr>
    <tr><td><strong>지원 마감</strong></td><td>10월 29일(목) 오후 2시</td><td><strong>10월 30일(금) 새벽 4시</strong></td></tr>
    <tr><td>보장 경로 승인자 참가비 납부</td><td>11월 10일(화) 밤 11시 59분</td><td>11월 11일(수) 14시 59분</td></tr>
    <tr><td>추첨 결과 통보</td><td>12월 8일(화) 하루 동안 이메일</td><td>12월 8일 15시~9일 15시 사이</td></tr>
    <tr><td>당첨자 참가비 납부</td><td>12월 15일(화) 밤 11시 59분</td><td>12월 16일(수) 14시 59분</td></tr>
    <tr><td><strong>대회</strong></td><td colspan="2">2027년 10월 10일(일) · 49회</td></tr>
  </tbody>
</table>
<p class="caption">참가비를 기한 안에 내지 않으면 등록되지 않고 배번도 받지 못합니다(공식). 보장 경로 신청은 검토에 최대 10영업일이 걸린다고 안내돼 있어, 마감 직전보다는 일찍 내는 편이 안전합니다.</p>

<h2>추첨 — 선착순이 아니다</h2>
<p>보장 경로에 해당하지 않는 사람은 <strong>비보장 추첨(non-guaranteed entry drawing)</strong>으로 지원합니다. 공식 안내의 핵심은 세 가지입니다.</p>
<ul>
  <li><strong>마감 뒤에 한꺼번에 뽑습니다.</strong> 지원 기간이 끝나면 전체 지원자 중에서 이름을 뽑으므로, 접수 첫날 신청과 마감 전날 신청이 다르지 않습니다.</li>
  <li><strong>여러 번 내도 확률은 그대로입니다.</strong> 공식은 "중복 지원은 확률을 높이지 않는다"고 밝히고, 추첨 전에 중복 지원을 모두 지운다고 적었습니다.</li>
  <li><strong>떨어져도 끝이 아닙니다.</strong> 추첨에서 떨어진 사람도 공식 자선 단체나 투어 여행사를 통해 등록할 수 있다고 안내합니다.</li>
</ul>
<p>당첨률이나 지원자 수는 이 공식 지원 페이지에 나와 있지 않습니다. 그래서 이 글은 확률을 짐작하지 않습니다.</p>

<h2>보장 경로 — 추첨 없이 확정되는 길</h2>
<p>조건을 채우거나 약정에 동의하면 추첨을 거치지 않고 출전이 확정되는 길입니다. 한국 러너에게 현실적인 건 앞의 세 줄입니다.</p>
<table>
  <thead><tr><th>경로 · 조건</th><th>신청 기간 · 비용</th></tr></thead>
  <tbody>
    <tr><td><strong>기록 보장(Time Qualifier)</strong><br><small>연령별 기준 안의 공인 풀코스 기록(아래 표)</small></td><td>10월 8~29일(미국 시간)<br><small>승인 뒤 11월 10일까지 참가비 $260</small></td></tr>
    <tr><td><strong>자선(Charity)</strong><br><small>공식 자선 단체 소속으로 모금</small></td><td>선착순, 2027년 9월 10일 또는 단체 정원 소진까지<br><small>최소 모금 $2,500 + 참가비 $335(해외 거주자)</small></td></tr>
    <tr><td><strong>투어(Tour Operator)</strong><br><small>공식 투어 프로그램 여행사의 패키지</small></td><td>2027년 8월 10일까지 · 2027 안내는 12월 8일 공개 예정<br><small>배번·항공·호텔 등 묶음 가격, 업체마다 다름</small></td></tr>
    <tr><td>레거시(Legacy)<br><small>최근 10년 안에 시카고마라톤 5회 이상 완주</small></td><td>10월 8~29일(미국 시간)</td></tr>
    <tr><td>디스턴스 시리즈<br><small>2026 셰머록 셔플 8K·시카고 13.1·시카고마라톤 3개 모두 완주</small></td><td>대상자에게 10월 13일 이메일 안내</td></tr>
  </tbody>
</table>
<p class="caption">이 밖에 엘리트 기준의 하이 퍼포먼스 프로그램(정원 300명), 2026 출전권 취소자·임신·출산 정책 대상자 경로가 있습니다. 투어 경로는 공식이 "모든 나라에 공인 여행사가 있는 것은 아니다"라고 밝혀, 한국 여행사가 있는지는 12월 8일 안내를 봐야 합니다.</p>

<h2>기록 보장 기준표 (2027)</h2>
<p>나이는 <strong>2027년 대회일(10월 10일) 기준</strong>입니다. 지금 34세여도 대회일에 35세가 되면 35~39세 기준을 적용받습니다.</p>
<table>
  <thead><tr><th>나이(대회일 기준)</th><th>남자</th><th>여자 · 논바이너리</th></tr></thead>
  <tbody>
    <tr><td>16~34</td><td>2:50:00</td><td>3:20:00</td></tr>
    <tr><td>35~39</td><td>2:55:00</td><td>3:25:00</td></tr>
    <tr><td>40~44</td><td>3:00:00</td><td>3:30:00</td></tr>
    <tr><td>45~49</td><td>3:10:00</td><td>3:40:00</td></tr>
    <tr><td>50~54</td><td>3:15:00</td><td>3:50:00</td></tr>
    <tr><td>55~59</td><td>3:25:00</td><td>3:55:00</td></tr>
    <tr><td>60~64</td><td>3:40:00</td><td>4:15:00</td></tr>
    <tr><td>65~69</td><td>3:55:00</td><td>4:30:00</td></tr>
    <tr><td>70~74</td><td>4:15:00</td><td>4:45:00</td></tr>
    <tr><td>75~79</td><td>4:30:00</td><td>5:00:00</td></tr>
    <tr><td>80 이상</td><td>4:50:00</td><td>5:20:00</td></tr>
  </tbody>
</table>
<ul>
  <li><strong>인정 기간</strong> — 2025년 1월 1일~2026년 10월 29일에 완주한 풀코스 기록만 인정합니다.</li>
  <li><strong>풀코스만</strong> — 하프·50K 같은 다른 거리 기록은 받지 않습니다.</li>
  <li><strong>공인 코스만</strong> — USATF·World Athletics 또는 이와 비슷한 관리 단체가 공인한 코스여야 하고, 날씨·코스 조건은 고려하지 않습니다.</li>
</ul>
<p>국내 대회 기록이 이 "공인 코스"에 해당하는지는 공식이 대회별로 적어 두지 않았습니다. 신청 전에 기록을 낸 대회의 코스 공인 여부를 주최 측에 확인하는 편이 안전합니다. 기준 기록을 노린다면 평지 대회에서 신을 레이싱화는 <a href="/blog/carbon-plate-running-shoes-lineup-tier-guide-2026">카본화 계급도</a>에 정리해 두었습니다.</p>

<h2>참가비와 취소 규정</h2>
<ul>
  <li><strong>참가비</strong> — 해외 거주자 $260(미국 거주자 $250), 자선 경로는 해외 $335·미국 $325입니다. 모든 참가비에 처리 수수료가 붙습니다(금액은 공식 페이지에 없음).</li>
  <li><strong>환불 불가</strong> — 참가비와 부가 상품은 모두 환불되지 않습니다. 대신 지원 단계에서 <strong>환불형 예약(refundable booking)</strong>을 따로 살 수 있습니다.</li>
  <li><strong>취소하면 2028 보장 출전권</strong> — 등록 뒤 출전을 취소하면 2028 대회 보장 출전권을 받을 수 있지만, 이미 낸 돈은 넘어가지 않습니다.</li>
  <li><strong>나이·수령</strong> — 대회일 기준 만 16세 이상이어야 하고, 배번과 계측 칩은 엑스포에서 본인이 사진이 있는 신분증을 보여 주고 직접 받아야 합니다.</li>
</ul>

<h2>한국 러너가 정할 순서</h2>
<ol>
  <li><strong>내 기록이 기준표 안인가?</strong> 안이면 기록 보장으로 <strong>일찍</strong> 신청합니다. 검토에 최대 10영업일이 걸리고, 승인되지 않았을 때 추첨으로 다시 지원하려면 그때가 아직 지원 기간 안이어야 합니다.</li>
  <li><strong>기준 밖이면 추첨에 지원합니다.</strong> 마감 전 언제 내도 같으니 서두를 필요는 없지만, 한국시간 10월 30일 새벽 4시는 넘기지 마세요.</li>
  <li><strong>추첨에서 떨어지면</strong> 자선(최소 모금 $2,500, 참가비와 별도)이나 투어 패키지를 봅니다. 자선은 선착순이라 단체 정원이 먼저 찰 수 있습니다.</li>
</ol>
<p>항공편·시차·ESTA 같은 원정 준비와 코스 특징은 <a href="/blog/chicago-marathon-2026-registration-guide">시카고마라톤 2026 가이드</a>에 정리했습니다. 다른 메이저 2027 일정은 <a href="/blog/london-marathon-2027-registration-guide">런던 2027</a>·<a href="/blog/tokyo-marathon-2027-registration-guide">도쿄 2027</a>·<a href="/blog/sydney-marathon-2027-registration-guide">시드니 2027</a> 가이드에서 볼 수 있습니다.</p>

<div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-body"><p class="callout-title">아직 확인되지 않은 것</p><p>① 지원자 수와 당첨률은 공식 지원 페이지에 없습니다. ② 한국에 공식 투어 여행사가 있는지는 확인하지 못했습니다 — 투어 페이지가 10월 9일 기준 아직 2026 내용이고, 2027 안내는 12월 8일 공개 예정입니다. ③ 처리 수수료 금액은 공식 페이지에 적혀 있지 않습니다. ④ 국내 대회 기록의 공인 코스 인정 여부는 대회별로 확인해야 합니다.</p></div></div>

<p><small>출처: Bank of America Chicago Marathon 공식 지원 페이지(chicagomarathon.com/apply) — 지원 기간·추첨 방식·보장 경로·기록 기준표·참가비·취소 규정·FAQ, 공식 투어 프로그램 페이지(chicagomarathon.com/apply/tour-program). 2026년 10월 9일 원문 확인. 한국 시간은 미국 중부 시간 기준으로 계산한 값입니다. 이 소식의 최초 트리거는 인스타그램 @runner_iffu 게시물이었고, 사실 관계는 공식 페이지를 근거로 했습니다.</small></p>
`,
  },
  {
    id: 'mizuno-hyperwarp-2-lineup-announcement-2026',
    slug: 'mizuno-hyperwarp-2-lineup-announcement-2026',
    title: '미즈노 하이퍼워프 2세대 4종 공개 | 퓨어 2·엘리트 2·레이서·페이서 — 목표 기록별로 나눈 사다리, 한국 출시는 미정',
    description: '미즈노가 10월 8일 하이퍼워프 2세대 4종을 발표했습니다. 풀코스 3시간 안쪽을 노리는 퓨어 2(¥35,200)·엘리트 2(¥29,700)는 11월 6일, 3~4시간대용 카본화 레이서(¥22,000, 와이드 있음)와 플레이트 없는 훈련화 페이서(¥18,700)는 12월 10일 일본 발매입니다. 전작 대비 두께·무게 변화와, 한국에서 지금 살 수 있는 1세대(정가 24.9만~30.9만 원)와의 관계를 미즈노 보도자료 원문으로 정리했습니다.',
    thumbnail: '/images/blog/mizuno-hyperwarp-2-lineup-announcement-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-09',
    category: 'news' as const,
    readingTime: 7,
    tags: ['미즈노 하이퍼워프', '하이퍼워프 2', 'HYPERWARP', '하이퍼워프 퓨어 2', '하이퍼워프 엘리트 2', '하이퍼워프 레이서', '카본화', '러닝화 발매'],
    faqs: [
      { question: '하이퍼워프 2세대는 한국에 언제 나오나요?', answer: '2026년 10월 9일 기준 미즈노 한국에서 발표된 것이 없습니다. 일본 발매는 퓨어 2·엘리트 2가 11월 6일, 레이서·페이서가 12월 10일입니다. 한국 공식몰에는 아직 1세대 3종(퓨어·엘리트·프로)만 있습니다.' },
      { question: '하이퍼워프 레이서는 카본화가 처음이어도 괜찮나요?', answer: '미즈노는 레이서를 풀코스 3~4시간대 러너용으로 만들었고, 상위 모델보다 플레이트 강성을 낮춰 "처음 카본 플레이트 신발을 신는 러너에게도 추천"한다고 밝혔습니다. 다만 카본화는 맞는 사람과 안 맞는 사람이 갈리고, 레이서는 아직 외부 랩 실측이 없습니다.' },
      { question: '지금 하이퍼워프 1세대를 사도 되나요?', answer: '11월 대회에 신을 신발이라면 한국에서 살 수 있는 건 1세대뿐입니다. 한국 공식몰 정가는 퓨어 309,000원·엘리트 279,000원·프로 249,000원이고, 10월 9일에는 출시 색상 일부가 20% 할인 중이었습니다. 내년 봄 대회가 목표라면 한국 공지를 기다려 볼 수 있지만, 2세대의 한국 가격은 아직 알 수 없습니다.' },
      { question: '하이퍼워프 프로는 단종됐나요?', answer: '2세대 4종에 프로라는 이름은 없지만, 미즈노는 보도자료에서 프로의 단종 여부를 밝히지 않았습니다. 10월 9일 한국 공식몰에서 프로는 정가 249,000원(출시 색상 20% 할인)으로 판매 중이었습니다.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>미즈노가 10월 8일 하이퍼워프 2세대 4종을 발표했습니다.</strong> 일본 발매는 퓨어 2·엘리트 2가 11월 6일, 레이서·페이서가 12월 10일입니다. 한국 가격과 출시일은 아직 공식 발표가 없습니다</li>
    <li><strong>4종은 미즈노가 직접 목표 기록별로 나눈 "목표 기록 사다리"입니다.</strong> 풀코스 3시간 안쪽을 노리면 퓨어 2(가벼움 135g)·엘리트 2(균형 160g), 3~4시간대면 새로 나온 카본화 레이서(¥22,000, 와이드 있음), 레이스 페이스 훈련용은 플레이트 없는 페이서입니다</li>
    <li><strong>한국에서 지금 살 수 있는 건 1세대입니다.</strong> 한국 공식몰 정가는 퓨어 309,000원·엘리트 279,000원·프로 249,000원이고, 출시 색상 일부는 20% 할인 중입니다(10월 9일). 11월 대회용이면 1세대가 현실적이고, 2세대는 한국 공지가 나와야 판단할 수 있습니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">👟</span>
  <div class="callout-body">
    <p class="callout-title">한 줄 결론</p>
    <p><strong>2세대에서 가장 큰 변화는 신발 하나가 아니라 사다리의 빈칸이 메워졌다는 점입니다.</strong> 1세대는 퓨어·엘리트·프로 3종이었는데, 2세대는 미즈노가 대상 기록대를 직접 나눠 적고, 3~4시간대 러너용 카본화(레이서)와 훈련화(페이서)를 같은 이름 아래 넣었습니다. 다만 한국 출시가 정해지지 않아, 이번 가을 대회를 앞둔 한국 러너에게는 아직 "구경"에 가까운 소식입니다.</p>
  </div>
</div>

<h2>먼저, 미즈노가 공식적으로 말한 것</h2>
<p>아래는 미즈노 본사 보도자료(2026년 10월 8일)와 일본 공식 하이퍼워프 페이지에서 그대로 옮긴 값입니다. 가격은 일본 세금 포함가, 무게는 미즈노가 27.0cm 한 짝으로 잰 공식값, 두께는 전족부/뒤꿈치 순입니다.</p>
<table>
  <thead><tr><th>모델 · 미즈노가 정한 대상</th><th>일본 가격·발매일 · 무게·두께·플레이트</th></tr></thead>
  <tbody>
    <tr><td><strong>퓨어 2</strong><br><small>풀코스 3시간 안쪽 · 가벼움 중심</small></td><td>¥35,200 · 11월 6일<br><small>약 135g · 35.0/38.0mm · 카본(앞쪽 8mm 연장)</small></td></tr>
    <tr><td><strong>엘리트 2</strong><br><small>풀코스 3시간 안쪽 · 균형 중심</small></td><td>¥29,700 · 11월 6일<br><small>약 160g · 36.0/39.0mm · 카본(앞쪽 8mm 연장)</small></td></tr>
    <tr><td><strong>레이서</strong> (신규)<br><small>풀코스 3~4시간 · 균형 중심</small></td><td>¥22,000 · 12월 10일<br><small>약 200g · 34.0/37.0mm · 카본(상위 모델보다 덜 단단하게)</small></td></tr>
    <tr><td><strong>페이서</strong> (신규)<br><small>레이스 페이스 훈련용</small></td><td>¥18,700 · 12월 10일<br><small>약 205g · 32.5/35.5mm · 플레이트 없음</small></td></tr>
  </tbody>
</table>
<p class="caption">레이서는 발볼이 넓은 <strong>와이드 버전</strong>을 같은 날 같은 가격(¥22,000)에 따로 냅니다. 미즈노는 시리즈 4종의 일본 판매 목표를 발매 후 1년간 2만 켤레로 잡았습니다.</p>

<h2>목표 기록 사다리 — 왜 4종인가</h2>
<p>미즈노 일본 페이지는 4종을 "목표 타임별 추천 모델"로 소개합니다. 이 글은 이를 <strong>목표 기록 사다리</strong>라고 부르겠습니다. 위 칸일수록 빠른 러너용이고, 아래 칸일수록 가격과 진입 장벽이 낮아집니다.</p>
<ul>
  <li><strong>맨 위 두 칸(퓨어 2·엘리트 2)</strong> — 둘 다 풀코스 3시간 안쪽을 노리는 러너용입니다. 미즈노는 퓨어 2를 "피치(발 구름 횟수)로 달리는 러너", 엘리트 2를 "보폭으로 밀고 나가는 러너"에게 권합니다. 같은 기록대에서 달리는 방식으로 한 번 더 나눈 셈입니다.</li>
  <li><strong>새로 생긴 셋째 칸(레이서)</strong> — 풀코스 3~4시간대 러너용입니다. 보도자료는 "지금까지 이 대상의 모델에는 유리섬유 플레이트를 썼다"고 밝혔는데, 레이서는 상위 모델처럼 <strong>풀렝스 카본 플레이트</strong>를 넣되 강성을 낮췄습니다. 미즈노는 "처음 카본 플레이트 신발을 신는 러너에게도 추천"한다고 적었습니다.</li>
  <li><strong>사다리 옆 훈련 칸(페이서)</strong> — 레이스용이 아니라 대회 페이스로 연습하는 훈련화입니다. "하이퍼워프의 주행감을 유지하면서 플레이트 없는 신발로 레이스 페이스 훈련을 하고 싶다"는 톱 선수들의 요청으로 만들었다고 합니다. 플레이트 대신 중족부에 섕크(보강 부품)를 넣어 안정성을 보탰습니다.</li>
</ul>
<p>사다리에서 한국 러너에게 가장 눈여겨볼 칸은 레이서입니다. 4종 중 가장 싼 카본화이고, 와이드 버전이 있고, 미즈노가 정한 대상이 엘리트가 아닌 풀코스 3~4시간대 러너이기 때문입니다. 다만 카본화가 누구에게나 기록을 줄여 주는 건 아닙니다. 맞는 사람과 안 맞는 사람이 갈린다는 연구 정리는 <a href="/blog/carbon-shoes-not-for-everyone-2026">카본화가 나한테도 맞을까</a>에 있습니다.</p>

<h2>1세대보다 무엇이 바뀌었나 — 퓨어 2·엘리트 2</h2>
<p>수치를 보기 전에 한 가지를 먼저 짚습니다. 아래 차이는 모두 <strong>미즈노가 보도자료에서 "전작 대비"라고 직접 밝힌 값</strong>입니다. 우리 신발 페이지의 1세대 무게·두께는 외부 랩(RunRepeat)이 US 남성 9 사이즈로 잰 값이라 재는 방식이 달라, 두 숫자를 서로 빼면 안 됩니다.</p>
<table>
  <thead><tr><th>모델</th><th>미즈노가 밝힌 변화(전작 대비)</th></tr></thead>
  <tbody>
    <tr><td><strong>퓨어 2</strong><br><small>vs <a href="/shoes/mizuno-hyperwarp-pure">하이퍼워프 퓨어</a></small></td><td>두께 전족부·뒤꿈치 모두 <strong>3.5mm 두꺼워짐</strong>(35.0/38.0mm), 무게 <strong>약 2g 가벼워짐</strong>(약 135g). 미드솔 전체를 전작보다 가벼운 ENERZY XP+로 바꿨고, 카본 플레이트를 앞쪽으로 8mm 늘렸습니다. 어퍼는 비치는 TPEE 우븐 소재입니다</td></tr>
    <tr><td><strong>엘리트 2</strong><br><small>vs <a href="/shoes/mizuno-hyperwarp-elite">하이퍼워프 엘리트</a></small></td><td>두께 전족부 <strong>1.5mm</strong>·뒤꿈치 <strong>1.0mm 두꺼워짐</strong>(36.0/39.0mm), 무게 <strong>약 10g 가벼워짐</strong>(약 160g). 위층 ENERZY XP+·아래층 ENERZY XP의 2층 미드솔이고, 퓨어 2와 같은 연장 카본 플레이트입니다</td></tr>
  </tbody>
</table>
<p>두 모델 모두 <strong>두꺼워졌는데 가벼워졌고</strong>, 바닥을 평평하게 다듬어 안정성에도 신경 썼다는 게 미즈노의 설명입니다. 다만 반발이나 안정성이 실제로 얼마나 좋아졌는지는 아직 외부 랩 실측이 없어 확인할 수 없습니다. 1세대의 실측 성격은 <a href="/blog/mizuno-hyperwarp-pure-review">퓨어 리뷰</a>와 <a href="/blog/mizuno-hyperwarp-elite-review">엘리트 리뷰</a>에 정리돼 있습니다.</p>

<h2>"프로"는 어디로 갔나</h2>
<p>2세대 4종에는 <strong>"프로"라는 이름이 없습니다.</strong> 한국에서 하이퍼워프 3종 가운데 가장 싸게 팔리는 <a href="/shoes/mizuno-hyperwarp-pro">하이퍼워프 프로</a>(카본을 섞은 나일론 플레이트, <a href="/blog/mizuno-hyperwarp-pro-review">프로 리뷰</a>)의 자리는 사다리 셋째 칸의 레이서가 이어받는 모양새입니다. 하지만 미즈노는 보도자료에서 프로의 단종 여부를 밝히지 않았고, 보도자료가 말한 "유리섬유 플레이트를 쓰던 이전 모델"이 어느 모델인지도 이름을 적지 않았습니다. 그래서 <strong>프로가 단종됐다고 단정하지는 않습니다.</strong></p>

<h2>한국 러너에게 — 지금 살 수 있는 것과 없는 것</h2>
<p>미즈노 한국 공식몰(kor.mizuno.com)에는 10월 9일 기준 <strong>1세대 3종만</strong> 있고, 2세대 공지는 없습니다.</p>
<table>
  <thead><tr><th>1세대 모델</th><th>한국 정가 · 10월 9일 판매 상태</th></tr></thead>
  <tbody>
    <tr><td><a href="/shoes/mizuno-hyperwarp-pure"><strong>하이퍼워프 퓨어</strong></a></td><td>309,000원<br><small>출시 색상(화이트/옐로/블루)은 20% 할인가 247,200원이었으나 전 사이즈 품절, 다른 색상은 정가 판매</small></td></tr>
    <tr><td><a href="/shoes/mizuno-hyperwarp-elite"><strong>하이퍼워프 엘리트</strong></a></td><td>279,000원<br><small>출시 색상 2종은 20% 할인가 223,200원, 다른 색상은 정가 판매</small></td></tr>
    <tr><td><a href="/shoes/mizuno-hyperwarp-pro"><strong>하이퍼워프 프로</strong></a></td><td>249,000원<br><small>출시 색상 2종은 20% 할인가 199,200원, 전 색상 재고 있음</small></td></tr>
  </tbody>
</table>
<p class="caption">할인 색상과 남은 사이즈는 수시로 바뀝니다. 이 사이트의 1세대 신발 페이지는 그동안 정가를 7만~9만 원 높게 적고 있었고, 10월 9일 공식몰 기준으로 바로잡았습니다.</p>
<ul>
  <li><strong>11월 대회에 신을 신발이 필요하다면 → 1세대.</strong> 2세대는 한국 출시일이 정해지지 않았고, 일본 발매도 11월 6일·12월 10일입니다. 레이싱화는 대회 전에 몇 번 신어 적응할 시간도 필요합니다.</li>
  <li><strong>내년 봄 대회가 목표라면 → 한국 공지를 기다려 볼 여지가 있습니다.</strong> 다만 한국 가격은 아직 아무도 모르니, "2세대가 더 싸다/비싸다"는 판단은 공지 전까지 할 수 없습니다.</li>
  <li><strong>풀코스 3~4시간대 러너가 첫 카본화를 찾는다면</strong> → 레이서가 겨냥한 자리지만 한국 출시 전입니다. 지금 한국에서 살 수 있는 비슷한 가격대의 카본화는 <a href="/blog/carbon-plate-running-shoes-lineup-tier-guide-2026">카본화 계급도</a>의 1단·2단에 모아 두었습니다.</li>
  <li><strong>발볼이 넓다면</strong> → 2세대 4종 중 와이드 버전이 따로 나오는 건 레이서뿐입니다(일본 기준).</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">아직 확인되지 않은 것</p>
    <p>① 한국 가격·출시일은 미즈노 한국에서 발표된 것이 없습니다. 일본 엔화 가격을 환산해 한국 가격을 짐작하지 마세요. ② 무게·두께는 모두 미즈노 공식값이고, 외부 랩 실측(토박스 폭 포함)은 아직 없습니다. ③ 반발·안정성이 좋아졌다는 부분은 미즈노의 설명이며 시험 조건이 공개되지 않았습니다. ④ 하이퍼워프 프로의 단종 여부는 공식 발표가 없습니다.</p>
  </div>
</div>

<p>미즈노 러닝화 전체에서 하이퍼워프가 어디쯤인지는 <a href="/blog/mizuno-running-shoes-lineup-tier-guide-2026">미즈노 러닝화 계급도</a>, 다른 브랜드 카본화와의 위치는 <a href="/blog/carbon-plate-running-shoes-lineup-tier-guide-2026">카본화 계급도</a>에서 볼 수 있습니다.</p>

<p><small>출처: 미즈노 주식회사 보도자료 「스피드 레이싱 슈즈 HYPERWARP 시리즈 제2세대를 발매」(2026년 10월 8일, corp.mizuno.com) — 발매일·가격·무게·두께·플레이트·대상 러너·판매 목표, 미즈노 일본 공식 온라인 하이퍼워프 특집 페이지(jpn.mizuno.com/running/hyperwarp) — 목표 타임별 추천 모델 표. 2026년 10월 9일 원문 확인. 미즈노 한국 공식몰(kor.mizuno.com) 하이퍼워프 퓨어·엘리트·프로 상품 페이지 — 한국 정가·할인가(2026년 10월 9일 확인). 이 소식의 최초 트리거는 인스타그램 @daily__dear 게시물이었고, 사실 관계는 미즈노 공식 자료를 근거로 했습니다. 이 사이트는 착용 테스트를 하지 않습니다.</small></p>
`,
  },
  {
    id: 'running-socks-guide-fiber-composition-2026',
    slug: 'running-socks-guide-fiber-composition-2026',
    title: '러닝 양말 추천 2026 | 22종 공식 혼용률로 본 4갈래 — "면 금지"는 반만 맞다',
    description: '국내에서 파는 러닝 양말 22종(나이키·아식스·뉴발란스·브룩스·데상트·데카트론·인진지·타비오·삭스업·스마트울·단터프·쿠팡 상위 국내 제품)의 공식 혼용률을 모아 섬유 성질별로 다시 계산했습니다. 나일론·폴리에스터·면 혼방·메리노 4갈래로 갈리고, 쿠팡 상위 국내 제품은 면 70%였습니다. 소재로 알 수 있는 것과 없는 것을 나눠, 땀·물집·겨울·조이는 핏 상황별로 고르는 법을 정리했습니다.',
    thumbnail: '/images/blog/running-socks-guide-fiber-composition-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-09',
    category: 'guide' as const,
    readingTime: 9,
    tags: ['러닝 양말 추천', '러닝 양말', '마라톤 양말', '발가락양말', '메리노 양말', '쿨맥스 양말', '러닝 양말 소재'],
    faqs: [
      { question: '러닝 양말은 면이 들어가면 안 되나요?', answer: '면은 폴리에스터보다 물을 훨씬 많이 머금는 섬유입니다(수분율 면 7.3% vs 폴리에스터 0.3%). 그래서 면 100% 양말을 피하라는 조언에는 근거가 있습니다. 다만 이번에 모은 러닝 양말 중 혼용률 비율이 공개된 21종에서 6종이 면을 18~70% 섞었고(나머지 1종은 비율 없이 면을 표기), 혼방 비율에 따라 실제로 얼마나 더 젖고 물집이 느는지 잰 자료는 찾지 못했습니다. 땀이 많고 물집이 잦다면 면·울 0% 쪽부터 시작하는 것이 소재 성향상 안전한 선택입니다.' },
      { question: '메리노 양말은 여름에도 신나요?', answer: '울은 섬유 중 수분율이 가장 높아 땀을 섬유 안에 머금는 쪽입니다. 동시에 피부에 젖은 느낌을 줄 수 있다는 연구 정리도 있습니다. 여름 장거리에 맞는지 잰 자료는 이번 조사 범위에 없었습니다. 이번 22종 중 메리노는 스마트울(울 56%)·단터프(울 50%) 2종이고, 정가가 38,000~53,000원으로 가장 비싼 축입니다.' },
      { question: '발가락양말은 왜 신나요?', answer: '발가락이 서로 닿는 면을 원단으로 나누는 구조입니다. 이번 22종 중 인진지 2종·타비오 2종·뉴발란스 1종이 발가락양말이었습니다. 물집 예방 효과를 같은 조건에서 비교한 시험 자료는 이번 조사에서 찾지 못해, 이 글은 구조와 소재만 비교했습니다.' },
      { question: '비싼 러닝 양말이 더 좋은가요?', answer: '가격과 성능을 같은 기준으로 잰 자료가 없어 단정할 수 없습니다. 이번 22종의 1켤레 가격은 1,650원(쿠팡 판매가)부터 53,000원(정가)까지 30배 넘게 차이 났습니다. 비싼 쪽은 대체로 메리노·발가락양말·특수 기능을 내세운 제품입니다. 혼용률은 가격과 상관없이 모두 공개돼 있으니 원하는 소재 성향부터 정하고 가격을 비교하는 순서를 권합니다.' },
      { question: '이 글의 양말을 직접 신어 보고 쓴 건가요?', answer: '아닙니다. 이 사이트는 착용 테스트를 하지 않습니다. 모든 수치는 한국 공식 판매처에 표기된 혼용률·가격·길이·두께 표기를 2026년 10월 8일 직접 확인해 옮긴 것이고, 섬유 성질은 동료심사 논문을 근거로 했습니다.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>고르는 기준은 혼용률 하나면 됩니다.</strong> 땀·물집이 걱정이면 면·울 0%(나일론·폴리에스터 위주), 겨울 새벽엔 울 50%대 메리노, 발을 꽉 잡아 주는 핏을 원하면 신축 섬유 10% 이상.</li>
    <li><strong>'러닝 양말'이라는 이름이 면 없음을 보장하지 않습니다.</strong> 비율이 공개된 21종 중 6종이 면을 18~70% 섞었고, 쿠팡 '러닝양말' 상위 국내 제품은 면 70%였습니다.</li>
    <li>착용 테스트 없이 공식 혼용률로 본 <strong>소재 성향</strong>이지 성능 순위가 아닙니다. 1켤레 가격은 1,650원(쿠팡 판매가)부터 53,000원(정가)까지 갈립니다.</li>
  </ul>
</div>

<p>"양말이 절반이다." <a href="/blog/running-foot-care-blisters-toenails-2026">물집·발톱 가이드</a>와 <a href="/blog/fall-marathon-race-day-checklist-2026">가을 마라톤 준비물</a>에서 이렇게 적었지만, 정작 어떤 양말을 고를지는 쓰지 않았습니다. 양말에는 러닝화 같은 랩 실측이 없는 대신 <strong>법으로 표기해야 하는 숫자</strong>가 하나 있습니다. 어떤 섬유가 몇 %씩 들어갔는지 적은 <strong>혼용률</strong>입니다. 국내에서 파는 러닝 양말 22종의 혼용률을 2026년 10월 8일 공식 판매처에서 모아, 섬유 성질에 따라 4갈래로 묶었습니다.</p>

<h2>내 상황부터 — 어느 갈래를 볼까</h2>
<ul>
  <li><strong>땀이 많고 물집이 잦다 → ①·②</strong> 면·울 0%인 합성섬유 갈래부터 보세요. 발가락 사이 물집이 잦다면 발가락양말이 구조상 대안인데, 면이 없는 건 ②의 인진지 2종이고 타비오·뉴발란스 발가락양말은 ③ 면 혼방입니다. 물집이 생기는 원인은 <a href="/blog/running-foot-care-blisters-toenails-2026">물집·발톱 가이드</a>에 있습니다.</li>
  <li><strong>겨울 새벽 러닝 → ④</strong> 울 50%대 메리노(스마트울·단터프)가 성향상 맞습니다. 다만 한국 겨울 조건에서 잰 자료는 아닙니다.</li>
  <li><strong>발을 꽉 잡아 주는 핏 → 신축 섬유 10% 이상</strong> 삭스업 컴프레션(15%)·어텐션 드라이 PRO(10%)가 가장 높고, 타비오 레이싱 런(1%)·뉴발란스 발가락양말(2%)이 가장 낮습니다.</li>
  <li><strong>여러 켤레 돌려 신을 가성비 → ①</strong> 공식몰 정가 기준 가장 싼 건 데카트론 런 500(1켤레 2,650원, 나일론 94%)입니다.</li>
  <li><strong>대회 당일 얇은 양말</strong> '얇다'고 공식 표기한 건 데카트론 파인 런 900(①)과 타비오 레이싱 런 프로(③, "기존보다 얇게") 정도였습니다. 신어 보지 않은 양말을 대회 날 처음 쓰지 않는 것이 <a href="/blog/fall-marathon-race-day-checklist-2026">준비물 체크리스트</a>의 원칙입니다.</li>
</ul>
<p>같은 갈래 안에서 어느 제품이 더 나은지는 판단하지 않았습니다. 혼용률로는 순위를 매길 수 없기 때문입니다(아래 '혼용률로 알 수 있는 것과 없는 것').</p>

<h2>러닝 양말 22종 혼용률 지도 — 4갈래</h2>
<p>판매처가 표기한 혼용률을 그대로 옮겨 갈래별로 나눴습니다(숫자는 %, 원문으로 검산할 수 있습니다). 가격은 1켤레 기준 정가이고 묶음은 켤레 수로 나눴습니다. <strong>신축</strong>은 폴리우레탄·스판덱스·엘라스테인·라이크라(같은 계열의 다른 이름), <strong>PP</strong>는 폴리프로필렌입니다.</p>
<p>구매 버튼은 네이버 쇼핑 커넥트나 쿠팡에서 같은 모델을 확인한 12종에만 달았습니다(브랜드 제품은 판매가가 공식 정가의 50~115%인 것만). 나머지 10종은 두 곳에서 같은 모델을 확인하지 못해 링크가 없을 뿐, <strong>링크가 있는 제품이 더 좋은 제품이라는 뜻은 아닙니다.</strong></p>

<h3>① 나일론 위주 (8종) — 나일론 50~94%, 면·울 0%</h3>
<p>가장 많은 갈래이고 가격 폭도 가장 넓습니다. 갈래 안에서 갈리는 건 <strong>신축 섬유 비율</strong>입니다.</p>
<table>
  <thead><tr><th>제품 · 길이·두께 표기</th><th>1켤레 · 혼용률</th></tr></thead>
  <tbody>
    <tr><td><strong>데카트론 런 500</strong><br><small>2켤레 묶음 · 중목 · 두께 표기 없음</small></td><td>2,650원<br><small>나일론 94 · 신축 6</small></td></tr>
    <tr><td><strong>데카트론 파인 런 900</strong><br><small>중목 · 얇음</small></td><td>11,900원<br><small>나일론 94 · 신축 6</small></td></tr>
    <tr><td><strong>브룩스 고스트 크루 삭스</strong><br><small>크루 · 쿠션 강화형</small></td><td>19,900원<br><small>나일론 58 · 폴리에스터 37 · 신축 5</small></td></tr>
    <tr><td><strong>나이키 런 라이트웨이트 크루</strong><br><small>크루 · 라이트웨이트</small></td><td>25,000원<br><small>나일론 50 · 폴리에스터 45 · 신축 5</small></td></tr>
    <tr><td><strong>삭스업 컴프레션 러닝 크루</strong><br><small>크루 · 앞코·뒤꿈치 쿠션</small></td><td>26,000원<br><small>나일론 85 · 신축 15</small></td></tr>
    <tr><td><strong>아식스 퍼포먼스 런 삭스 크루</strong><br><small>크루 · 두께 표기 없음</small></td><td>27,000원<br><small>나일론 87 · PP 10 · 신축 3</small></td></tr>
    <tr><td><strong>삭스업 어텐션 드라이 PRO</strong><br><small>크루 · 앞코·뒤꿈치 쿠션</small></td><td>33,000원<br><small>나일론 56 · PP 30 · 신축 10 · 미끄럼 방지사 4</small></td></tr>
    <tr><td><strong>아식스 메타스피드 크루 삭스 2.0</strong><br><small>크루 · 두께 표기 없음</small></td><td>35,000원<br><small>나일론 81 · PP 11 · 폴리에스터 2 · 신축 6</small></td></tr>
  </tbody>
</table>
<div class="affiliate-cta">
  <p class="affiliate-cta-label">바로 구매 — ① 갈래</p>
  <div class="affiliate-cta-buttons">
    <a href="https://naver.me/xcgBUIua" class="affiliate-btn naver" target="_blank" rel="nofollow sponsored noopener">
      <span class="affiliate-btn-store">네이버</span>
      <span class="affiliate-btn-product">삭스업 컴프레션 러닝 크루 →</span>
    </a>
    <a href="https://naver.me/5XcyEHYd" class="affiliate-btn naver" target="_blank" rel="nofollow sponsored noopener">
      <span class="affiliate-btn-store">네이버</span>
      <span class="affiliate-btn-product">삭스업 어텐션 드라이 PRO →</span>
    </a>
    <a href="https://link.coupang.com/a/hG9MclhCMK" class="affiliate-btn coupang" target="_blank" rel="nofollow sponsored noopener">
      <span class="affiliate-btn-store">쿠팡</span>
      <span class="affiliate-btn-product">나이키 런 라이트웨이트 크루 →</span>
    </a>
    <a href="https://link.coupang.com/a/hG9MKQfldI" class="affiliate-btn coupang" target="_blank" rel="nofollow sponsored noopener">
      <span class="affiliate-btn-store">쿠팡</span>
      <span class="affiliate-btn-product">아식스 퍼포먼스 런 삭스 크루 →</span>
    </a>
  </div>
  <p class="affiliate-disclosure">광고 표기: 네이버 링크는 네이버 브랜드 커넥트 추적 코드가 포함되며, 일정 수수료를 받을 수 있습니다(판매처 삭스업 공식 스토어). 이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. 가격은 바뀔 수 있습니다.</p>
</div>

<h3>② 폴리에스터 위주 (5종) — 폴리에스터 70~96%, 면·울 0%</h3>
<p>인진지 2종의 폴리에스터는 <a href="/fabrics/coolmax">COOLMAX</a>로 표기돼 있습니다. COOLMAX는 대개 폴리에스터로 만드는 섬유 브랜드이고, 공식 문서는 성능 수치를 공개하지 않습니다.</p>
<table>
  <thead><tr><th>제품 · 길이·두께 표기</th><th>1켤레 · 혼용률</th></tr></thead>
  <tbody>
    <tr><td><strong>인진지 러너 미니크루</strong> (발가락양말)<br><small>미니크루 · 두께 표기 없음</small></td><td>14,800원<br><small>폴리에스터(COOLMAX) 70 · 나일론 25 · 신축 5</small></td></tr>
    <tr><td><strong>인진지 러너 세미크루</strong> (발가락양말)<br><small>세미크루 · "3겹 원사"</small></td><td>15,500원<br><small>폴리에스터(COOLMAX) 75 · 나일론 20 · 신축 5</small></td></tr>
    <tr><td><strong>데상트 러닝 크루 삭스</strong><br><small>크루 · 발바닥 쿠션</small></td><td>16,000원<br><small>폴리에스터 96 · 신축 4</small></td></tr>
    <tr><td><strong>데상트 델타 아치서포트 크루</strong><br><small>크루 · 발가락·뒤꿈치 쿠션</small></td><td>16,000원<br><small>폴리에스터 96 · 신축 4</small></td></tr>
    <tr><td><strong>나이키 런 미드웨이트 크루</strong><br><small>크루 · 미드웨이트</small></td><td>19,000원<br><small>폴리에스터 93 · 신축 7</small></td></tr>
  </tbody>
</table>
<div class="affiliate-cta">
  <p class="affiliate-cta-label">바로 구매 — ② 갈래</p>
  <div class="affiliate-cta-buttons">
    <a href="https://naver.me/xxoNbCRb" class="affiliate-btn naver" target="_blank" rel="nofollow sponsored noopener">
      <span class="affiliate-btn-store">네이버</span>
      <span class="affiliate-btn-product">인진지 러너 세미크루 (발가락) →</span>
    </a>
    <a href="https://naver.me/GFshvMC1" class="affiliate-btn naver" target="_blank" rel="nofollow sponsored noopener">
      <span class="affiliate-btn-store">네이버</span>
      <span class="affiliate-btn-product">인진지 러너 미니크루 (발가락) →</span>
    </a>
  </div>
  <p class="affiliate-disclosure">광고 표기: 위 링크는 네이버 브랜드 커넥트 추적 코드가 포함되며, 일정 수수료를 받을 수 있습니다. 판매처는 아웃도어 판매점 에어마운틴이고 가격은 바뀔 수 있습니다.</p>
</div>

<h3>③ 면 혼방 (7종) — 면 18~70%</h3>
<p>면 비율이 낮은 순서입니다. 타비오 2종은 면과 함께 리오셀(텐셀 계열)도 섞었습니다. 왜 이 갈래를 따로 봐야 하는지는 바로 아래 "면 금지는 반만 맞다"에 있습니다.</p>
<table>
  <thead><tr><th>제품 · 길이·두께 표기</th><th>1켤레 · 혼용률</th></tr></thead>
  <tbody>
    <tr><td><strong>타비오 레이싱 런 프로</strong> (발가락양말)<br><small>"기존보다 얇게" · 길이 표기 없음</small></td><td>38,000원<br><small>나일론 40 · 폴리에스터 28 · 면 18 · 리오셀 8 · 신축 6</small></td></tr>
    <tr><td><strong>브룩스 아드레날린 삭스</strong><br><small>길이·두께 표기 없음</small></td><td>12,900원<br><small>폴리에스터 74 · 면 22 · 신축 4</small></td></tr>
    <tr><td><strong>뉴발란스 드라이쿨 논슬립 크루</strong><br><small>크루 · 두께 표기 없음 · 면은 바닥면에 사용(공식 표기)</small></td><td>19,900원<br><small>폴리에스터 55 · 면 42 · 신축 3</small></td></tr>
    <tr><td><strong>타비오 레이싱 런</strong> (발가락양말)<br><small>길이·두께 표기 없음</small></td><td>32,000원<br><small>면 44 · 폴리에스터 35 · 리오셀 12 · 나일론 7 · 신축 1 (공식 표기 합계 99)</small></td></tr>
    <tr><td><strong>뉴발란스 러닝 발가락양말</strong><br><small>길이·두께 표기 없음</small></td><td>19,900원<br><small>면 49 · 폴리에스터 48 · 신축 2 · 나일론 1</small></td></tr>
    <tr><td><strong>탑브로 러닝 중목 쿠션</strong><br><small>6켤레 묶음 · 쿠팡 '러닝양말' 3위 · 중목 · 쿠션</small></td><td>1,650원*<br><small>면 70 · 폴리에스터·나일론 27(합산 표기) · 신축 3</small></td></tr>
    <tr><td><strong>라이프모아 삼중 쿠션 장목</strong><br><small>7켤레 묶음 · 쿠팡 '러닝양말' 4위 · 장목 · 삼중 쿠션</small></td><td>약 2,257원*<br><small>비율 미표기 — "폴리에스터, 면, 스판덱스"</small></td></tr>
  </tbody>
</table>
<p class="caption">*쿠팡 상품은 표시 할인 전 가격 대신 2026년 10월 8일 판매가를 켤레 수로 나눴습니다.</p>
<div class="affiliate-cta">
  <p class="affiliate-cta-label">바로 구매 — ③ 갈래</p>
  <div class="affiliate-cta-buttons">
    <a href="https://link.coupang.com/a/hG9NWlvexw" class="affiliate-btn coupang" target="_blank" rel="nofollow sponsored noopener">
      <span class="affiliate-btn-store">쿠팡</span>
      <span class="affiliate-btn-product">타비오 레이싱 런 프로 (발가락) →</span>
    </a>
    <a href="https://link.coupang.com/a/hG9NkqlL88" class="affiliate-btn coupang" target="_blank" rel="nofollow sponsored noopener">
      <span class="affiliate-btn-store">쿠팡</span>
      <span class="affiliate-btn-product">타비오 레이싱 런 (발가락) →</span>
    </a>
    <a href="https://link.coupang.com/a/hG9OvABlQa" class="affiliate-btn coupang" target="_blank" rel="nofollow sponsored noopener">
      <span class="affiliate-btn-store">쿠팡</span>
      <span class="affiliate-btn-product">탑브로 러닝 중목 쿠션 6켤레 →</span>
    </a>
    <a href="https://link.coupang.com/a/hG9O7iQD2O" class="affiliate-btn coupang" target="_blank" rel="nofollow sponsored noopener">
      <span class="affiliate-btn-store">쿠팡</span>
      <span class="affiliate-btn-product">라이프모아 삼중 쿠션 장목 7켤레 →</span>
    </a>
  </div>
  <p class="affiliate-disclosure">광고 표기: 이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. 쿠팡 판매가는 바뀔 수 있습니다.</p>
</div>

<h3>④ 메리노 (2종) — 울 50~56%</h3>
<p>나머지는 대부분 나일론이고, 정가 38,000~53,000원으로 22종 중 가장 비쌉니다. 울은 땀을 섬유 안에 흡수하는 쪽이라 ①·② 합성섬유 양말과 성향이 정반대입니다. 울이 젖었을 때 열을 내는 성질(흡습발열)과, 관련 연구 상당수가 울 업계 지원을 받았다는 사실은 <a href="/fabrics/merino-wool">메리노 울 원단 해설</a>에 정리했습니다.</p>
<table>
  <thead><tr><th>제품 · 길이·두께 표기</th><th>1켤레 · 혼용률</th></tr></thead>
  <tbody>
    <tr><td><strong>단터프 런 쿼터</strong><br><small>쿼터 · 초경량+쿠션</small></td><td>38,000원<br><small>메리노 울 50 · 나일론 45 · 신축 5</small></td></tr>
    <tr><td><strong>스마트울 애슬리트 에디션 런 크루</strong><br><small>크루 · 부분 쿠션 · 확인 당일 37,000원 할인 판매</small></td><td>53,000원<br><small>메리노 울 56 · 나일론 41(재생 나일론 29 포함) · 신축 3</small></td></tr>
  </tbody>
</table>
<div class="affiliate-cta">
  <p class="affiliate-cta-label">바로 구매 — ④ 갈래</p>
  <div class="affiliate-cta-buttons">
    <a href="https://naver.me/Fz8ijJpA" class="affiliate-btn naver" target="_blank" rel="nofollow sponsored noopener">
      <span class="affiliate-btn-store">네이버</span>
      <span class="affiliate-btn-product">스마트울 애슬리트 에디션 런 크루 →</span>
    </a>
    <a href="https://link.coupang.com/a/hG9KcuUKwm" class="affiliate-btn coupang" target="_blank" rel="nofollow sponsored noopener">
      <span class="affiliate-btn-store">쿠팡</span>
      <span class="affiliate-btn-product">단터프 런 쿼터 →</span>
    </a>
  </div>
  <p class="affiliate-disclosure">광고 표기: 네이버 링크는 네이버 브랜드 커넥트 추적 코드가 포함되며, 일정 수수료를 받을 수 있습니다(판매처 아웃도어 판매점 고캠프). 이 포스팅은 쿠팡 파트너스 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받습니다. 가격은 바뀔 수 있습니다.</p>
</div>

<h2>"면 금지"는 반만 맞다</h2>
<p>러닝 양말 조언에서 가장 흔한 말이 "면 양말은 피하라"입니다. 면은 폴리에스터보다 물을 약 24배 더 머금는 섬유라, <strong>면 100% 양말을 피하라는 조언에는 근거가 있습니다.</strong></p>
<p>그런데 위 ③ 갈래처럼 비율이 공개된 21종 중 <strong>6종이 면을 18~70% 섞은 러닝 양말</strong>이었습니다. 러닝 브랜드인 뉴발란스·브룩스, 레이싱 양말을 내세운 타비오도 포함되고, 쿠팡 '러닝양말' 상위 국내 제품 탑브로는 <strong>면 70%</strong>였습니다. '러닝 양말'이라는 이름만으로는 면이 없다고 볼 수 없다는 뜻입니다. 다만 면 혼방 비율에 따라 실제로 얼마나 더 젖고 물집이 느는지 잰 자료는 찾지 못해, 혼방이 나쁘다고 단정하지는 않습니다. 땀이 많다면 상세페이지의 혼용률을 먼저 확인하는 습관이면 충분합니다.</p>

<h2>혼용률로 알 수 있는 것과 없는 것</h2>
<p>4갈래는 섬유가 공기 중 수분을 얼마나 흡수하는지를 나타내는 <strong>수분율</strong>로 나눴습니다.</p>
<ul>
  <li><a href="/fabrics/polyester">폴리에스터</a> <strong>0.3%</strong>, 면 <strong>7.3%</strong>(Abdul-Bari 외, 2020). 리오셀(텐셀 계열)은 약 <strong>11%</strong>입니다(Islam 외, 2023 리뷰).</li>
  <li><a href="/fabrics/merino-wool">울</a>은 섬유 가운데 수분율이 가장 높고, 수분을 흡수하면 피부에 젖은 느낌을 줄 수 있다고 정리돼 있습니다(Nasrin 외, 2023 리뷰).</li>
  <li><a href="/fabrics/nylon">나일론</a>과 폴리프로필렌의 수분율은 1차 자료로 확인하지 못했습니다. 그래서 나일론은 따로 갈래를 두고, 성질은 단정하지 않았습니다.</li>
</ul>
<p>하지만 <strong>혼용률만으로는 성능 순위를 매길 수 없습니다.</strong></p>
<ul>
  <li><strong>편직 구조가 결과를 바꿉니다.</strong> 당뇨 양말 연구를 모은 체계적 문헌고찰에서 파일(테리) 편직 양말이 싱글저지 편직 양말보다 두껍고 무겁고 수분을 더 머금었습니다(Venkatraman 외, 2026).</li>
  <li><strong>가공이 결과를 바꿉니다.</strong> 같은 폴리에스터 원단이 친수 처리 전에는 물이 퍼지는 데 312초, 처리 후에는 68초가 걸렸습니다(Pauly 외, 2025). 혼용률에는 이런 가공이 드러나지 않습니다.</li>
  <li><strong>두께·쿠션 표기가 없는 제품이 많습니다.</strong> 위 표의 '두께 표기 없음'이 그 경우입니다. 같은 혼용률이라도 두께가 다르면 신는 느낌이 달라집니다.</li>
  <li><strong>근거 없이 적힌 수치는 회사 주장으로만 옮깁니다.</strong> 데상트 "충격을 30% 이상 흡수", 삭스업 "면보다 56배 빠른 땀 배출", 타비오 "한쪽 무게 약 30% 감소"는 시험 조건이나 근거가 상세페이지에 없었습니다.</li>
</ul>

<div class="callout warning"><strong>조사 범위와 한계</strong> — 2026년 10월 8일, 한국 공식 판매처(브랜드 공식몰·공식 수입원)와 쿠팡 '러닝양말' 검색 상위 국내 제품의 상품정보 고시에서 혼용률·가격·길이·두께 표기를 옮겼습니다. 대상은 러닝화 브랜드 6곳, 양말 전문·메리노 브랜드 5곳, 쿠팡 상위 국내 브랜드 2곳입니다. 쿠팡 순위는 기본 정렬('쿠팡 랭킹순', 기준 비공개)이고 광고 표시 상품은 뺐습니다. 쿠팡 검색 1위 미즈노 플레이 더블 쿠션은 상품 페이지에서 혼용률을 찾지 못해 표에서 뺐습니다. <strong>착용 테스트·자체 시험은 하지 않았습니다.</strong> 가격과 재고는 할인·품절로 바뀝니다. 인진지 한국 공식 스토어 제품은 상세 이미지에 '제조국 대한민국'으로 적힌 국내 생산품이고 미국 본사와의 관계는 확인하지 못했습니다. 스마트울 판매처가 공식 수입원인지는 추정 단계입니다. 나이키는 '스파크' 라인을 한국 공식몰에서 찾지 못해 현재 판매 중인 '런' 라인으로 대신했고, 런 미드웨이트의 혼용률은 그래픽 색상 상품에서 확인한 값입니다.</div>

<h2>출처와 확인 범위</h2>
<ul>
  <li>혼용률·가격·길이·두께: 나이키 코리아·아식스코리아·뉴발란스 코리아(nbkorea.com)·브룩스러닝 코리아·데상트(DK 온라인스토어)·데카트론 코리아·인진지코리아 공식 스토어·타비오 한국 공식 총판·삭스업 공식몰·스마트울 한국 판매처·단터프 공식 수입원(호상사) 상품 페이지, 쿠팡 상품정보 고시 — 2026년 10월 8일 확인. 일부는 상세 이미지에서 판독했습니다.</li>
  <li><a href="https://doi.org/10.1177/0040517520914411" target="_blank" rel="noopener noreferrer">Abdul-Bari 외 (2020), Textile Research Journal</a> — 폴리에스터 0.3%·면 7.3% 수분율.</li>
  <li><a href="https://doi.org/10.3390/textiles3040024" target="_blank" rel="noopener noreferrer">Islam, Golovin, Dolez (2023), Textiles 3(4)</a> — 리오셀 수분율 약 11%. CC BY.</li>
  <li><a href="https://doi.org/10.3390/textiles3030022" target="_blank" rel="noopener noreferrer">Nasrin 외 (2023), Textiles 3(3)</a> — 울의 수분율과 젖은 느낌. CC BY.</li>
  <li><a href="https://doi.org/10.1002/dmrr.70138" target="_blank" rel="noopener noreferrer">Venkatraman 외 (2026), Diabetes/Metabolism Research and Reviews 42</a> — 파일(테리) 편직 양말과 싱글저지 양말 비교.</li>
  <li><a href="https://doi.org/10.3390/fib13080103" target="_blank" rel="noopener noreferrer">Pauly 외 (2025), Fibers 13(8):103</a> — 같은 폴리에스터 원단의 친수 처리 전후 312초 vs 68초. CC BY 4.0.</li>
</ul>
`,
  },
  {
    id: 'asics-gel-slowcush-korea-launch-2026',
    slug: 'asics-gel-slowcush-korea-launch-2026',
    title: '아식스 젤 슬로우쿠시 한국 출시 | 249,000원 회복런 전용화 — 님버스 28과 무엇이 다른가',
    description: '아식스 젤 슬로우쿠시(GEL-SLOWCUSH)가 10월 7일 한국에 출시됐습니다. 공식몰 249,000원으로 님버스 28보다 5만원 비쌉니다. 공식 298g·스택 48/40mm·드롭 8mm와 RTINGS 실측 279.7g·드롭 10.4mm를 나눠 정리하고, 쿠션은 님버스 28보다 많지만 가성비는 밀린다는 랩 평가와 로커·발볼·무릎 관점에서 누구에게 맞는지 정리했습니다.',
    thumbnail: '/images/blog/asics-gel-slowcush-korea-launch-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-08',
    category: 'review' as const,
    readingTime: 7,
    tags: ['젤 슬로우쿠시', '젤 슬로우쿠쉬', 'GEL-SLOWCUSH', '아식스 신상', '회복런 러닝화', '맥스쿠션 러닝화', '젤 님버스 28'],
    faqs: [
      { question: '젤 슬로우쿠시 한국 가격과 출시일은 언제인가요?', answer: '아식스코리아 공식몰 가격은 249,000원이고, 한국 출시일은 10월 7일입니다(아식스코리아 공식 인스타그램 공지). 남여공용 230~285 사이즈, 2색으로 등재돼 있습니다(10월 8일 확인). 글로벌 출시는 10월 1일, 미국 공식가는 $200입니다.' },
      { question: '젤 님버스 28과 무엇이 다른가요?', answer: '아식스는 두 신발을 모두 Maximum 쿠션·중립으로 분류합니다. 슬로우쿠시는 공식 힐 스택 48mm로 님버스 28(43.5mm)보다 높고, 미드솔이 FF LUXE PLUS와 PureGEL PLUS로 바뀌었습니다. RTINGS는 슬로우쿠시의 쿠션이 더 많고 부드럽지만, 이지런·회복런 용도의 가성비는 님버스 28이 낫다고 평가했습니다. 한국 가격 차이는 5만원입니다.' },
      { question: '발볼이 넓은데 젤 슬로우쿠시를 신어도 되나요?', answer: '와이드 옵션이 없습니다. 미국 공식몰 폭 옵션이 Standard 하나이고 한국 공식몰도 남여공용 단일 폭입니다. Doctors of Running은 토박스가 안쪽은 곧고 바깥쪽은 조금 더 좁아지는 형태라고 했고, 힐 칼라 패딩 때문에 뒤꿈치가 약간 조인다고 했습니다. 토박스 실측 너비는 아직 공개된 랩 수치가 없어 매장에서 신어 보고 고르는 편이 안전합니다.' },
      { question: '무릎이 안 좋은데 도움이 되나요?', answer: '높은 스택으로 착지 충격을 줄이는 쪽으로 설계됐지만, 부상 예방 효과를 시험한 자료는 없습니다. Doctors of Running 리뷰어는 로커 덕분에 아킬레스건 부담이 줄었다고 하면서도 고관절과 무릎의 압력은 늘었다고 적었습니다. 로커가 강한 신발에서 흔한 힘의 이동이라는 설명입니다. 통증이 이어지면 신발보다 진료가 먼저입니다.' },
      { question: '초보 러너의 첫 러닝화로 괜찮나요?', answer: '느린 페이스에 맞춘 신발이라는 점은 입문 단계와 맞지만, 첫 신발 한 켤레로 모든 훈련을 해야 한다면 가격과 범용성에서 님버스 28(199,000원)이나 노바블라스트 6(179,000원)이 먼저입니다. 페이스를 올리면 둔하게 느껴질 수 있다는 것이 RTINGS와 Doctors of Running의 공통 평가입니다.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>10월 7일 한국 출시, 아식스코리아 공식몰 249,000원</strong>입니다. 아식스가 이지런·회복 주행용으로 새로 만든 맥스쿠션화로, 공식 스택 48/40mm·드롭 8mm·298g이고 <a href="/shoes/asics-gel-nimbus-28">님버스 28</a>(199,000원)보다 5만원 비쌉니다.</li>
    <li><strong>RTINGS 랩은 "쿠션은 님버스 28보다 많고 부드럽지만, 가성비는 님버스 28"</strong>로 정리했습니다. 탄력(에너지 리턴) 점수는 10점 만점에 3.1로, 페이스를 올리면 둔하게 느껴질 수 있다는 평입니다.</li>
    <li><strong>느린 날만 맡기는 신발, 즉 '전용화'</strong>입니다. 빠른 날 신을 신발이 따로 있을 때 값을 하고, 한 켤레로 모든 훈련을 해야 한다면 님버스 28이나 노바블라스트 6이 먼저입니다. 와이드 옵션은 없습니다.</li>
  </ul>
</div>

<p>아식스가 '빠르게'가 아니라 '천천히'를 이름에 건 러닝화를 냈습니다. <a href="/shoes/asics-gel-slowcush">젤 슬로우쿠시(GEL-SLOWCUSH)</a>는 9월 17일 글로벌 보도자료로 공개돼 10월 1일 글로벌 출시됐고, 한국에는 10월 7일 들어왔습니다. 판매처에 따라 '젤 슬로우쿠쉬'로도 표기하는데, 이 글은 아식스코리아 공식몰 표기인 '젤 슬로우쿠시'를 씁니다.</p>
<p>아식스 보도자료가 밝힌 용도는 <strong>이지런, 회복 주행, 저강도 훈련</strong>입니다. 속도나 기록에 대한 약속은 한 줄도 없습니다. 이 글에서는 이렇게 한 가지 페이스 구간을 잘하려고 나머지를 내려놓은 신발을 <strong>전용화</strong>라고 부르겠습니다. 전용화를 살지 말지는 결국 "그 구간이 내 훈련에서 신발을 따로 둘 만큼 큰가"의 문제라서, 아래 수치도 그 질문에 답하는 순서로 놓았습니다.</p>

<div class="callout info"><strong>이 글의 수치는 출처가 셋입니다</strong> — ① 아식스 공식 표기(미국·뉴질랜드·한국 공식몰과 보도자료), ② RTINGS 랩 측정(10월 7일 게시, 남성 US 9), ③ Doctors of Running 리뷰(9월 18일 게시). 공식 표기와 랩 측정은 같은 항목이라도 값이 다르게 나오므로 표에서 칸을 나눴습니다. 신발을 절단해 폼 경도·토박스 너비까지 재는 RunRepeat 랩은 10월 8일 기준 아직 없습니다.</div>

<h2>한국 출시 정보 — 249,000원, 남여공용 단일 폭</h2>
<table>
  <thead><tr><th>항목</th><th>내용</th></tr></thead>
  <tbody>
    <tr><td>출시일</td><td>한국 10월 7일(아식스코리아 공식 인스타그램 공지) · 글로벌 10월 1일</td></tr>
    <tr><td>가격</td><td><strong>249,000원</strong>(아식스코리아 공식몰) · 미국 공식가 $200</td></tr>
    <tr><td>사이즈</td><td>230~285(남여공용)</td></tr>
    <tr><td>색상</td><td>2색(공식몰 목록 기준) — 오렌지 글로우/체리 토마토(1013A187.800) 포함</td></tr>
    <tr><td>폭</td><td>표준 1종 — 와이드 없음(미국 공식몰도 Standard만)</td></tr>
    <tr><td>공식몰 상세 표기</td><td>298g · 미드솔 FF LUXE+ · 아웃솔 AHAR+ · 엔지니어드 메시</td></tr>
  </tbody>
</table>
<p>10월 8일 오후 공식몰에서 오렌지 글로우 색상은 260~285 사이즈가 품절로 표시돼 있었습니다. 출시 직후 재고라 바뀔 수 있습니다.</p>
<p>가격 위치를 보면 성격이 보입니다. 같은 아식스 쿠션 라인의 님버스 28이 199,000원, 장거리와 빠른 훈련까지 겸하는 <a href="/shoes/asics-superblast-3">슈퍼블라스트 3</a>가 259,000원입니다(10월 8일 공식몰 기준). <strong>느린 날 전용 신발이 다목적 프리미엄 트레이너와 1만원 차이</strong>입니다. 미국 공식가로는 슬로우쿠시 $200, 님버스 28 $170으로 약 18% 차이인데, 한국에서는 5만원, 약 25% 차이로 벌어집니다.</p>

<h2>스펙 — 공식 수치와 랩 수치를 나눠 읽어야 합니다</h2>
<p>공식 표기와 랩 측정은 재는 주체도 기준도 다릅니다. 같은 신발인데도 무게가 18g, 드롭이 2.4mm 차이 납니다. 그래서 님버스 28과 비교할 때도 공식은 공식끼리, 실측은 실측끼리 맞췄습니다.</p>
<table>
  <thead><tr><th>항목</th><th>슬로우쿠시 공식</th><th>슬로우쿠시 RTINGS 실측</th><th>님버스 28 공식</th><th>님버스 28 RunRepeat 실측</th></tr></thead>
  <tbody>
    <tr><td>무게</td><td>298g</td><td>279.7g</td><td>281g</td><td>278g</td></tr>
    <tr><td>힐 스택</td><td>48mm</td><td>46.6mm</td><td>43.5mm</td><td>39.5mm</td></tr>
    <tr><td>포어풋 스택</td><td>40mm</td><td>미공개</td><td>—</td><td>—</td></tr>
    <tr><td>드롭</td><td>8mm</td><td>10.4mm</td><td>8mm</td><td>—</td></tr>
    <tr><td>쿠션 등급(아식스 분류)</td><td>Maximum</td><td>—</td><td>Maximum</td><td>—</td></tr>
    <tr><td>미드솔</td><td>FF LUXE PLUS + PureGEL PLUS</td><td>플레이트 없음</td><td>FF BLAST PLUS + PureGEL</td><td>—</td></tr>
  </tbody>
</table>
<p>표에서 읽을 것은 두 가지입니다. 첫째, <strong>공식끼리는 슬로우쿠시가 님버스 28보다 17g 무겁고 힐이 4.5mm 높지만, 실측끼리는 무게가 비슷합니다.</strong> 측정 기관이 달라 1~2g 차이는 의미 있게 읽지 않았습니다. 둘째, RTINGS가 잰 드롭은 10.4mm로 공식 8mm보다 높습니다. 드롭이 낮은 신발을 신다가 넘어온다면 '8mm'라는 숫자보다 높게 느낄 수 있습니다.</p>

<h2>무엇이 새로운가 — FF LUXE PLUS와 PureGEL PLUS</h2>
<p>미드솔 소재 두 가지가 이 신발에서 처음 나옵니다. <strong>FF LUXE PLUS</strong>는 아식스가 '구름 같은' 착지감을 내세운 새 폼으로, 미국 공식몰 설명에 따르면 기존 FF LUXE보다 반발 수준을 높였습니다. 뒤꿈치의 <strong>PureGEL PLUS</strong>는 님버스 28에도 들어가는 PureGEL의 다음 세대입니다. 젤을 물리적으로 발포해 기존 PureGEL보다 <strong>약 20% 가볍고</strong>, 육각기둥을 틈을 두고 배열해 부드럽게 눌리다가 하중이 끝까지 실리면 틈이 메워지면서 바닥까지 꺼지는 느낌을 막는 구조라고 아식스는 설명합니다.</p>
<p>보도자료에서 아식스 글로벌 제품 담당 Paul Lang은 개발의 출발점이 "속도나 퍼포먼스 향상이 아니라, 이지런을 어떻게 더 즐겁게 만들까라는 질문"이었다고 밝혔습니다. 브랜드가 처음부터 전용화로 기획했다는 뜻이고, 아래 랩 결과도 같은 방향을 가리킵니다.</p>

<h2>랩과 리뷰가 본 것 — 쿠션은 위, 탄력과 가성비는 아래</h2>
<h3>RTINGS(10월 7일 게시)</h3>
<ul>
  <li>쿠셔닝 점수 8.9/10. 님버스 28과 비교해 <strong>"쿠션이 전반적으로 더 많고 더 부드럽다"</strong>고 했습니다.</li>
  <li>그런데 같은 비교의 결론은 <strong>"이지런·회복런 용도의 가성비는 님버스 28이 낫다"</strong>입니다.</li>
  <li>에너지 리턴 점수 3.1/10(전족부 3.5, 뒤꿈치 2.2). "페이스를 올리면 무겁고 탄력이 부족하게 느껴질 수 있다"고 적었고, 5K·10K 레이스 용도 점수는 5.6입니다.</li>
  <li>슈퍼블라스트 3에 대해서는 "훨씬 가볍고 탄력 있으며 쿠션도 많아" 장거리와 빠른 훈련에 더 강한 선택이라고 봤습니다.</li>
  <li>통기성 점수 6.0/10이고, 젖은 뒤 마르는 데 48시간 넘게 걸렸습니다. 한여름이나 장마철에는 따져 볼 부분입니다.</li>
</ul>
<h3>Doctors of Running(9월 18일 게시, Matt Klein)</h3>
<p>이 리뷰를 읽으려면 <strong>로커</strong>를 먼저 알아 두면 좋습니다. 밑창을 흔들의자 다리처럼 둥글게 깎아, 발목을 많이 접지 않아도 뒤꿈치에서 앞꿈치로 굴러가듯 넘어가게 만든 구조입니다.</p>
<ul>
  <li>뒤꿈치 로커를 "지금까지 본 아식스 트레이너 중 가장 좋고 매끄러운 설계"로 평가했습니다. 전족부는 잘 휘지 않지만 긴 로커가 전환을 쉽게 만든다고 했습니다.</li>
  <li>바닥이 꽤 넓고 라스트가 곧은 데다 안쪽 측벽이 높아 <strong>안정적인 중립화(stable neutral)</strong>로 분류했습니다. 별도 지지 장치는 없지만 뒤꿈치·미드풋에 가벼운 안정성이 필요한 정도까지는 맞는다는 평입니다.</li>
  <li>아킬레스건 재활 중인 리뷰어 본인은 로커가 <strong>힘줄 부담을 눈에 띄게 덜어 준다</strong>고 했습니다. 대신 <strong>고관절과 무릎의 압력은 늘었다</strong>고 함께 적었고, 로커 신발에서 흔한 힘의 이동이라고 설명했습니다. 부드러운 미드솔은 고관절이 불안정한 러너에게 다소 불리할 수 있다는 주의도 남겼습니다.</li>
  <li>페이스를 올리면 폼이 충분히 빠르게 반응하지 않는다고 했습니다. RTINGS의 낮은 탄력 점수와 같은 방향입니다.</li>
  <li>아웃솔 고무가 성겨 노출된 미드솔이 많고, 틈에 돌과 가시가 잘 끼어 <strong>매끈한 길 외에는 피하라</strong>고 했습니다. 약 35마일(56km)을 달린 뒤 마모는 뒤꿈치 바깥쪽과 전족부에 경미한 정도였습니다.</li>
</ul>

<h2>전용화의 값은 로테이션 안에서만 돌아옵니다</h2>
<p>두 매체의 평가를 겹치면 그림이 선명합니다. 느린 페이스에서는 님버스 28보다 푹신하고, 페이스를 올리면 둔합니다. 전용화다운 결과입니다. 문제는 값입니다. 5만원을 더 내고 얻는 것은 느린 날의 착지감이고, 그 차이는 다른 신발이 빠른 날을 맡아 줄 때만 의미가 생깁니다.</p>
<ul>
  <li><strong>후보가 되는 경우</strong> — 주 4회 이상 달리고 템포·인터벌용 신발이 이미 있으며, 그 사이 이지런·회복런을 대화가 될 만큼 느리게 달리는 러너. 다리가 무거운 날 부드러운 착지를 최우선으로 둔다면 전용화의 장점이 가장 크게 남습니다. 회복런을 어떤 페이스와 시간으로 달려야 하는지는 <a href="/blog/recovery-run-vs-lsd-guide-2026">회복런 vs LSD 가이드</a>에 정리했습니다.</li>
  <li><strong>님버스 28이 먼저인 경우</strong> — 한 켤레로 이지런부터 장거리까지 소화해야 하는 러너. RTINGS 결론대로 쿠션은 조금 덜해도 가성비는 님버스 28이 낫고, 5만원이 남습니다. 더 가볍고 통통 튀는 쪽이 좋다면 <a href="/shoes/asics-novablast-6">노바블라스트 6</a>(179,000원)도 있습니다.</li>
  <li><strong>슈퍼블라스트 3가 나은 경우</strong> — 장거리에서 페이스를 올리는 날도 같은 신발로 달리고 싶은 러너. 1만원 차이로 무게와 탄력을 얻습니다.</li>
  <li><strong>다른 브랜드의 같은 성격</strong> — 두 매체가 모두 비교한 <a href="/shoes/saucony-paramount-max">써코니 파라마운트 맥스</a>(259,000원, 8월 15일 써코니코리아 공식몰 기준)는 더 탄력 있는 쪽이고, Doctors of Running은 로커와 안정성에서 슬로우쿠시를 더 높게 봤습니다. RTINGS는 <a href="/shoes/hoka-bondi-9">호카 본디 9</a>가 더 탄력 있지만 안정성은 낮다고 비교했습니다. 맥스쿠션화 전체 비교는 <a href="/blog/max-cushion-running-shoes-knee-protection-2026">맥스쿠션 러닝화 추천</a>에, 아식스 안에서의 위치는 <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스 러닝화 계급도</a>에 있습니다.</li>
</ul>

<div class="callout warning"><strong>아직 확정되지 않은 것</strong> — ① RunRepeat 랩이 없어 폼 경도·에너지 리턴 %·토박스 실측 너비가 비어 있습니다. 사이트 신발 페이지의 발볼 등급 '표준'은 잠정입니다. ② 신발 페이지의 내구성 450~550km는 Doctors of Running의 56km 주행 소견과 성긴 아웃솔 구조로 매긴 <strong>추정</strong>입니다. 교체 주기 숫자를 읽는 법은 <a href="/blog/running-shoe-500km-replacement-myth-2026">500km 교체설 검증</a>에 있습니다. ③ 품절 사이즈는 10월 8일 오후 공식몰 표시 기준입니다. RunRepeat 랩이 올라오면 이 글과 신발 페이지를 갱신합니다.</div>

<h2>출처와 확인 범위</h2>
<ul>
  <li><a href="https://corp.asics.com/en/press/article/asics-introduces-the-all-new-gel-slowcushtm-shoe-more-comfort-to-move-body-and-mind" target="_blank" rel="noopener noreferrer">아식스 글로벌 보도자료</a> — 2026년 9월 17일. 용도, FF LUXE PLUS·PureGEL PLUS, 10월 1일 글로벌 출시·$200, Paul Lang 발언.</li>
  <li><a href="https://www.asics.com/us/en-us/gel-slowcush/p/ANA_1013A187-250.html" target="_blank" rel="noopener noreferrer">아식스 미국 공식몰 젤 슬로우쿠시</a> — 드롭 8mm·298g·Maximum·Neutral·폭 Standard, FF LUXE PLUS·PureGEL PLUS 설명. 님버스 28 공식값(281g·드롭 8mm·$170)은 같은 공식몰 <a href="https://www.asics.com/us/en-us/gel-nimbus-28/p/ANA_1011C127-800.html" target="_blank" rel="noopener noreferrer">님버스 28 상품 페이지</a>에서 확인했습니다.</li>
  <li>스택 48/40mm는 아식스 뉴질랜드 공식몰 상품 정보와 Doctors of Running 표기가 같습니다.</li>
  <li><a href="https://www.asics.co.kr/p/AKR_112631101-800" target="_blank" rel="noopener noreferrer">아식스코리아 공식몰</a> — 249,000원·남여공용 230~285·298g·FF LUXE+·AHAR+(10월 8일 확인). 님버스 28·슈퍼블라스트 3·노바블라스트 6 가격도 같은 날 공식몰 기준입니다.</li>
  <li><a href="https://www.rtings.com/running-shoes/reviews/asics/gel-slowcush" target="_blank" rel="noopener noreferrer">RTINGS 리뷰</a> — 10월 7일 게시, 남성 US 9 측정.</li>
  <li><a href="https://www.doctorsofrunning.com/asics-gel-slowcush-review/" target="_blank" rel="noopener noreferrer">Doctors of Running 리뷰</a> — 9월 18일 게시, Matt Klein.</li>
  <li>님버스 28 실측(278g·힐 39.5mm)과 공식 힐 스택 43.5mm는 <a href="https://runrepeat.com/asics-gel-nimbus-28" target="_blank" rel="noopener noreferrer">RunRepeat 님버스 28 랩</a> 기준입니다.</li>
</ul>
<p><small>공식 표기와 랩 측정값을 같은 칸에 섞지 않았습니다. RTINGS 점수(10점 만점)는 RunRepeat 랩 수치나 이 사이트 신발 점수로 환산하지 않았습니다. 이 사이트는 신발을 직접 시착·시승하지 않으며, 착화감 서술은 모두 위 매체의 기록을 옮긴 것입니다. 2026년 10월 8일 확인.</small></p>
`,
  },
  {
    id: 'kca-carbon-running-shoes-test-2026',
    slug: 'kca-carbon-running-shoes-test-2026',
    title: '한국소비자원 카본화 7종 시험 | 줌플라이 6·푸마 충격흡수 우수, 무릎 평가는 따로 봐야 합니다',
    description: '한국소비자원이 10월 6일 카본 러닝화 7종 시험 결과를 발표했습니다. 줌플라이 6·디비에이트 나이트로 4는 충격흡수, 스카이워드 X는 발바닥 압력 분산에서 우수했습니다. 제품별 평가·270mm 실측 무게·조사 당시 가격을 비교하고, 20대 남성 30명이라는 시험 조건과 무릎 피로도·추진력 결과의 해석 범위를 정리했습니다.',
    thumbnail: '/images/blog/kca-carbon-running-shoes-test-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-07',
    category: 'news' as const,
    readingTime: 7,
    tags: ['한국소비자원', '카본화 비교', '카본 러닝화', '줌플라이 6', '디비에이트 나이트로 4', '매직스피드 5', '러닝화 충격흡수'],
    faqs: [
      { question: '한국소비자원이 비교한 카본화 7종은 무엇인가요?', answer: '줌플라이 6, SC 트레이너 V3, 에어로 스파크, 아디스타 BYD, 매직스피드 5, 디비에이트 나이트로 4, 스카이워드 X입니다. 조사 대상은 소비자 구입 경험이 많은 7개 브랜드에서 선정한 제품이며, 모든 카본화나 최상위 레이싱화를 비교한 것은 아닙니다.' },
      { question: '충격흡수가 가장 좋았던 제품은 무엇인가요?', answer: '시험 대상 중 나이키 줌플라이 6와 푸마 디비에이트 나이트로 4가 뒤꿈치 충격흡수에서 상대적으로 우수했습니다. 무릎 피로도에서는 줌플라이 6가 양호, 디비에이트 나이트로 4가 상대적으로 우수로 평가돼 두 항목의 결과가 같지는 않았습니다.' },
      { question: '무릎 피로도 우수 제품이면 무릎 부상을 예방하나요?', answer: '이번 무릎 피로도는 지면반력과 3차원 동작 데이터를 분석한 생체역학 평가입니다. 장기간 착용 후 부상 발생률을 추적한 시험이 아니므로, 무릎 질환의 치료나 부상 예방 효과가 입증됐다고 해석할 수 없습니다.' },
      { question: '추진력은 7종 모두 우수했는데 기록도 똑같이 좋아지나요?', answer: '그렇게 단정할 수 없습니다. 추진력 평가는 지면반력 측정기를 통해 발의 움직임과 방향에 따라 발생하는 힘을 측정한 결과입니다. 에너지 리턴 비율이나 산소 소비량, 마라톤 기록 개선율을 제품별로 비교한 결과는 아닙니다.' },
      { question: '표에 나온 가격과 무게는 어떤 기준인가요?', answer: '가격은 소비자원 보고서의 2026년 6월 공식 홈페이지 표시가격입니다. 무게는 270mm 사이즈 좌우 신발 무게의 평균으로 한 짝 기준입니다. 현재 판매가나 다른 기준 사이즈의 제조사·리뷰 수치와 차이가 있을 수 있습니다.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>충격흡수는 줌플라이 6·디비에이트 나이트로 4, 발바닥 압력 분산은 스카이워드 X</strong>가 상대적으로 우수했습니다. 착용 만족도 최고는 푸마 4.6점입니다.</li>
    <li><strong>뒤꿈치 충격흡수와 무릎 피로도는 다른 평가</strong>입니다. 줌플라이 6는 충격흡수에서 우수했지만 무릎 피로도는 양호였습니다. 이 시험으로 장기 부상 예방 효과까지 확정할 수는 없습니다.</li>
    <li><strong>270mm를 신는 20대 남성 30명의 시험 결과</strong>입니다. 가격은 보고서의 2026년 6월 표시가격, 무게는 270mm 한 짝 기준으로 읽어야 합니다.</li>
  </ul>
</div>

<p>‘충격흡수는 나이키·푸마, 가격은 스케쳐스.’ <a href="https://www.hani.co.kr/arti/economy/consumer/1281079.html" target="_blank" rel="noopener noreferrer">한겨레의 카본 러닝화 비교 기사</a>를 읽으면 어떤 제품부터 신어볼지 힌트를 얻을 수 있습니다. 다만 실제 구매에 쓰려면 브랜드 이름보다 <strong>어떤 모델이 어떤 항목에서 좋았는지</strong>를 한 단계 더 내려가 봐야 합니다.</p>
<p>한국소비자원은 <strong>2026년 10월 6일</strong> 카본 러닝화 7종의 기능성·내구성·안전성·착용 만족도 등을 발표했습니다. 기사와 <a href="https://www.kca.go.kr/home/sub.do?menukey=4002&amp;mode=view&amp;no=1004569062" target="_blank" rel="noopener noreferrer">소비자원 공식 보도자료</a>의 21쪽 첨부 원문을 대조해, 한국 러너가 선택에 쓸 수 있는 결과와 해석할 때의 조건을 정리했습니다.</p>

<h2>어떤 카본화를 골라 시험했나요?</h2>
<p>소비자원은 최근 3년 안에 카본 러닝화를 구입한 소비자 <strong>1,000명 설문</strong>(2026년 3월)과 전문가 검토를 바탕으로 구입 경험이 많은 7개 브랜드를 골랐습니다. 각 브랜드에서는 <strong>밝은 색상·저렴한 로드 카본 러닝화 1종</strong>을 선정했습니다. 브랜드의 최상위 마라톤 레이싱화를 하나씩 맞붙인 구성이 아닙니다.</p>
<table>
  <thead><tr><th>제품</th><th>조사 당시 표시가격</th><th>270mm 무게</th><th>착용 만족도</th></tr></thead>
  <tbody>
    <tr><td><a href="/shoes/nike-zoom-fly-6">나이키 줌플라이 6</a></td><td>209,000원</td><td>242g</td><td>4.3 / 5</td></tr>
    <tr><td><a href="/shoes/new-balance-sc-trainer-v3">뉴발란스 SC 트레이너 V3</a></td><td>249,000원</td><td>265g</td><td>4.2 / 5</td></tr>
    <tr><td>스케쳐스 에어로 스파크</td><td>189,000원</td><td>277g</td><td>4.0 / 5</td></tr>
    <tr><td>아디다스 아디스타 BYD</td><td>209,000원</td><td>278g</td><td>4.0 / 5</td></tr>
    <tr><td><a href="/shoes/asics-magic-speed-5">아식스 매직스피드 5</a></td><td>209,000원</td><td>198g</td><td>4.3 / 5</td></tr>
    <tr><td><a href="/shoes/puma-deviate-nitro-4">푸마 디비에이트 나이트로 4</a></td><td>219,000원</td><td>244g</td><td>4.6 / 5</td></tr>
    <tr><td>호카 스카이워드 X</td><td>279,000원</td><td>301g</td><td>4.3 / 5</td></tr>
  </tbody>
</table>
<p><small>출처: 소비자원 보고서 17·21쪽. <strong>가격은 2026년 6월 공식 홈페이지 표시가격</strong>으로 현재 판매가가 아닙니다. 무게는 <strong>270mm 신발 좌·우 평균, 한 짝 기준</strong>입니다. 만족도는 20대 남성 30명의 시험 착용 후 평가이며 산초 자체 별점이나 장기 사용 후기 점수가 아닙니다.</small></p>
<p>표의 가격은 <strong>소비자원이 조사한 시점의 값</strong>입니다. 신발 상세 페이지나 현재 공식몰에 다른 금액이 표시돼 있어도 이 값을 현재 정가로 덮어 읽으면 안 됩니다. 할인이나 가격 변경 여부까지 이번 시험이 확인한 것은 아니므로 실제 구매 금액은 공식 판매 화면에서 확인하세요.</p>

<h2>기능성 결과: 같은 ‘우수’라도 항목을 나눠 보세요</h2>
<p>아래는 보고서의 8·11쪽 평가입니다. <strong>★★★는 상대적으로 우수, ★★는 양호, ★는 보통</strong>입니다. 별 하나가 안전기준 미달이라는 뜻은 아닙니다. 추진력은 7종 모두 ★★★였으므로 표에서 반복하지 않았습니다.</p>
<table>
  <thead><tr><th>제품</th><th>충격흡수</th><th>무릎 피로도</th><th>발바닥 압력</th><th>압력중심</th><th>최대견인력</th></tr></thead>
  <tbody>
    <tr><td>줌플라이 6</td><td>★★★</td><td>★★</td><td>★★</td><td>★★★</td><td>★★</td></tr>
    <tr><td>SC 트레이너 V3</td><td>★★</td><td>★★★</td><td>★★</td><td>★★</td><td>★★</td></tr>
    <tr><td>에어로 스파크</td><td>★</td><td>★★★</td><td>★★</td><td>★</td><td>★★★</td></tr>
    <tr><td>아디스타 BYD</td><td>★★</td><td>★</td><td>★★</td><td>★★</td><td>★</td></tr>
    <tr><td>매직스피드 5</td><td>★★</td><td>★★★</td><td>★</td><td>★★</td><td>★★★</td></tr>
    <tr><td>디비에이트 나이트로 4</td><td>★★★</td><td>★★★</td><td>★★</td><td>★★</td><td>★★</td></tr>
    <tr><td>스카이워드 X</td><td>★★</td><td>★★★</td><td>★★★</td><td>★★</td><td>★★</td></tr>
  </tbody>
</table>
<p><small>항목별 별을 합산한 종합 순위는 만들지 않았습니다. 충격흡수는 뒤꿈치 착지 충격, 무릎 피로도는 관절에 작용하는 힘과 동작 분석, 발바닥 압력은 압력 분산, 압력중심은 좌우 이동폭, 최대견인력은 아스팔트에서 미끄러지지 않는 정도를 평가합니다.</small></p>

<h3>충격흡수를 먼저 본다면: 줌플라이 6와 푸마</h3>
<p><strong>줌플라이 6·디비에이트 나이트로 4</strong>는 뒤꿈치에 전달되는 충격력이 적어 상대적으로 우수했습니다. 하지만 줌플라이 6의 무릎 피로도 평가는 ★★, 푸마는 ★★★입니다. <strong>뒤꿈치에서 충격을 잘 흡수한다는 결과와 무릎 평가가 같지는 않다</strong>는 것이 이번 표에서 가장 실용적인 읽을거리입니다.</p>
<p>푸마는 이 두 항목과 함께 착용 만족도에서도 4.6점으로 가장 높았습니다. 여러 강점이 겹친 제품이라 비교 착화 후보로 넣을 이유가 있습니다. 다만 내 발볼과 발등에도 잘 맞는다는 보장은 아니므로, ‘30명에게 가장 만족스러웠다’를 ‘모든 한국 러너에게 편하다’로 넓히지는 마세요.</p>

<h3>발바닥 압력 분산을 먼저 본다면: 스카이워드 X</h3>
<p><strong>스카이워드 X</strong>는 발바닥 압력 분산에서 유일하게 ★★★를 받았고 무릎 피로도도 ★★★였습니다. 대신 270mm 기준 <strong>301g·279,000원</strong>으로 조사 대상 중 가장 무겁고 비쌌습니다. 압력 분산을 중시할 때의 장점과 무게·예산을 함께 놓고 판단할 제품입니다.</p>
<p>반대쪽에는 <strong>매직스피드 5</strong>가 있습니다. 같은 기준에서 <strong>198g</strong>으로 가장 가볍지만 발바닥 압력은 ★였습니다. 가벼운 신발이 모든 편안함 지표에서도 가장 좋을 것이라는 가정은 이 표와 맞지 않습니다.</p>

<h3>접지와 예산을 함께 본다면: 에어로 스파크의 장단점</h3>
<p><strong>에어로 스파크·매직스피드 5</strong>는 최대견인력에서 ★★★였습니다. 에어로 스파크는 조사 가격도 <strong>189,000원</strong>으로 가장 낮았습니다. 하지만 충격흡수와 압력중심은 ★라서, ‘가장 저렴하다’만으로 모든 러너에게 추천하기에는 다른 조건도 봐야 합니다.</p>
<p>이 접지 평가는 <strong>아스팔트에서 고정된 물체를 최대 힘으로 끌 때 발생하는 힘</strong>을 측정한 결과입니다. 보고서에서 젖은 노면 시험 조건은 확인되지 않았으므로 빗길·눈길에서 가장 안전하다는 순위로 바꾸지는 않습니다.</p>

<h2>추진력 전부 우수: 무엇까지 말할 수 있나요?</h2>
<p>소비자원은 지면반력 측정기로 러닝 중 발의 움직임·방향에 따라 생기는 힘을 측정했습니다. 이 시험에서 <strong>7종의 추진력 등급은 모두 우수</strong>였습니다.</p>
<p>하지만 이것은 <strong>폼의 에너지 리턴 %, 산소 소비량으로 본 러닝 이코노미, 마라톤 완주기록 개선율</strong>과 같은 값이 아닙니다. ‘추진력 ★★★’를 ‘에너지 리턴이 모두 같다’거나 ‘어떤 카본화를 사도 기록이 똑같이 줄어든다’고 읽으면 측정하지 않은 결론까지 붙게 됩니다.</p>
<p>이번 대상에는 비카본 러닝화 대조군도 없습니다. 따라서 이 표만으로 카본판 유무가 만들어낸 효과를 분리하거나 모든 카본화가 일반 러닝화보다 낫다고 결론 낼 수는 없습니다. 플레이트·폼·로커의 역할을 함께 보고 싶다면 <a href="/blog/running-shoe-plate-guide-2026">러닝화 플레이트 가이드</a>를 참고하세요.</p>

<h2>시험 조건: 20대 남성 30명, 족저압 시험은 6.5km/h</h2>
<p>보고서 9·11쪽에 따르면 착용 시험 참여자는 <strong>발 사이즈 270mm인 20대 남성 30명</strong>입니다. 족저압·압력중심 시험의 참여 조건은 발의 형태학적 변형이 없는 정상족이며 근골격계 질환 징후와 상해가 없는 사람입니다.</p>
<ul>
  <li><strong>발바닥 압력·압력중심:</strong> 트레드밀에서 <strong>6.5km/h</strong>의 일정 속도를 유지하며 반복 측정했습니다. 페이스로 환산하면 약 <strong>9분 14초/km</strong>입니다.</li>
  <li><strong>무릎 피로도·충격흡수·추진력:</strong> 신체 21곳에 반사형 마커를 붙이고 왼발로 지면반력 측정기를 밟고 지나가며 분석했습니다. 해당 시험 설명에는 러닝 속도가 별도로 적혀 있지 않습니다.</li>
  <li><strong>착용 만족도:</strong> 시험 제품을 신은 뒤 편안함·치수 맞음새 등에 따른 전체 만족감을 5점 척도로 평가했습니다.</li>
</ul>
<p><strong>6.5km/h는 족저압·압력중심 시험에 명시된 속도</strong>입니다. 다른 모든 시험도 그 속도였다고 확대하지 않았습니다. 또한 여성, 다른 발 사이즈, 평발, 부상 이력이 있는 러너나 더 빠른 레이스 페이스에서도 같은 순서가 유지되는지는 이번 결과만으로 알 수 없습니다.</p>
<div class="callout info"><strong>‘무릎 피로도 우수’의 범위</strong> — 지면반력과 3차원 동작 데이터를 분석한 시험 결과입니다. 장기간 신은 뒤 부상 발생률을 추적한 연구가 아니므로, 특정 신발이 무릎 질환을 치료하거나 부상을 예방한다고 확정하는 근거로 쓰지 않았습니다.</div>

<h2>내구성은 겉창 마모와 접착강도를 따로 봐야 합니다</h2>
<p>보고서 13쪽의 겉창 마모량은 <strong>스카이워드 X 2.4mm</strong>가 가장 적었습니다. 나머지는 푸마 4.8mm, 매직스피드 5 5.0mm, 아디스타 BYD 5.3mm, SC 트레이너 V3 5.5mm, 줌플라이 6 5.7mm, 에어로 스파크 6.8mm였습니다. <strong>모두 준용 기준인 14mm 이하</strong>를 충족했습니다.</p>
<p>이 숫자는 정해진 마모 시험에서 닳은 양이지 실제 달릴 수 있는 거리(km)가 아닙니다. 2.4mm를 ‘몇 km 보장’이나 ‘다른 제품의 두 배 수명’으로 환산할 근거는 없습니다.</p>
<p>갑피와 겉창을 붙인 부위의 <strong>접착강도는 SC 트레이너 V3·아디스타 BYD·매직스피드 5·스카이워드 X가 상대적으로 우수</strong>했고 다른 3종은 양호했습니다. 겉감·안감 내마모성은 전 제품이 소비자원 권장품질기준을 만족했습니다. 밑창 마모 하나가 신발 전체 수명을 대표하는 것은 아닙니다.</p>

<h2>안전성과 표시 개선: 불량 신발이라는 뜻은 아닙니다</h2>
<p>시험 대상 7종은 <strong>pH·폼알데하이드·유기주석화합물 등 확인한 안전성 항목에서 모두 기준에 적합</strong>했습니다. 이것은 해당 물질·항목에 대한 시험 결과이고, 러닝 중 부상 위험이 없다는 의미는 아닙니다.</p>
<p>별도로 <strong>아디다스·푸마·호카</strong>는 갑피 혼용률이나 소재 표기, 안감 표시 누락 등 표시사항 개선이 필요했습니다. 보고서에 적힌 업체 회신은 아디다스 <strong>8월 13일 기준 개선 완료</strong>, 푸마 <strong>2027년 1월 말 이후 개선 예정</strong>, 호카 수입사 조이웍스 <strong>2026년 9월 30일 이후 개선 예정</strong>입니다. 발표일이 지났다고 예정된 조치가 실제로 끝났다고 가정하지는 않았습니다.</p>
<p>표시 개선 요청과 유해물질 안전성 시험은 서로 다른 항목입니다. 이를 합쳐 해당 브랜드의 신발 전체가 안전하지 않다고 해석하면 안 됩니다.</p>

<h2>구매에 적용한다면: 우수 항목으로 후보를 좁히고 착화하세요</h2>
<p><strong>뒤꿈치 충격흡수가 우선이면 줌플라이 6·디비에이트 나이트로 4, 압력 분산이 우선이면 스카이워드 X, 가벼운 무게와 최대견인력이 우선이면 매직스피드 5</strong>를 비교 착화 후보로 삼을 수 있습니다. 예산이 우선이면 에어로 스파크의 가격과 다른 기능성 평가를 함께 대조하세요. 이는 시험 결과를 바탕으로 한 에디터의 선택 기준이며 소비자원 종합 순위가 아닙니다.</p>
<p>발볼이 넓은 한국 러너에게 중요한 발볼·발등 여유와 와이드 옵션은 이 시험 표만으로 정할 수 없습니다. 소비자원 사용 가이드도 <strong>양발을 신어보고 큰 쪽 발을 기준으로 고르며, 오후에 착화할 것</strong>을 권합니다. 발가락 끝에는 약 <strong>0.5~1cm 여유</strong>를 안내합니다.</p>
<p>소비자원은 초보자에게 카본 러닝화가 발목·종아리에 무리를 줄 수 있어 <strong>용도와 숙련도에 맞춰 선택</strong>하라고 당부했습니다. 이번 표의 별 개수만으로 입문 러너의 데일리화까지 결정하기보다, 내 발에 맞는지와 실제 사용할 훈련을 먼저 정하세요.</p>

<h2>출처와 확인 범위</h2>
<ul>
  <li><a href="https://www.kca.go.kr/home/sub.do?menukey=4002&amp;mode=view&amp;no=1004569062" target="_blank" rel="noopener noreferrer">한국소비자원 공식 보도자료</a> — 2026년 10월 6일 등록.</li>
  <li><a href="https://www.kca.go.kr/home/board/download.do?menukey=4002&amp;fno=10056149&amp;bid=00000013&amp;did=1004569062" target="_blank" rel="noopener noreferrer">소비자원 공식 PDF 첨부 원문</a> — 제품 선정 6쪽, 기능성·시험 방법 8~11쪽, 내구성 13~14쪽, 만족도·안전성 15쪽, 무게·가격 17쪽, 표시사항 18쪽, 사용 가이드 19쪽, 종합표 21쪽.</li>
  <li><a href="https://www.korea.kr/briefing/pressReleaseView.do?newsId=156784371" target="_blank" rel="noopener noreferrer">대한민국 정책브리핑 보도자료</a> 및 첨부 PDF와 대조했습니다.</li>
  <li><a href="https://www.hani.co.kr/arti/economy/consumer/1281079.html" target="_blank" rel="noopener noreferrer">한겨레 관련 기사</a> — 이번 글의 출발점. 제품별 값과 시험 조건은 소비자원 원문을 기준으로 작성했습니다.</li>
</ul>
<p><small>원문과 종합표를 2026년 10월 7일 확인했습니다. 이 글의 ★ 평가는 소비자원 등급이며 사이트 신발 점수나 RunRepeat 랩 점수로 환산하지 않았습니다. 가격·무게·시험 조건이 다른 자료를 같은 수치로 섞지 않았습니다.</small></p>
`,
  },
  {
    id: 'mexicana-run-with-pepsi',
    slug: 'mexicana-run-with-pepsi',
    title: '멕시카나런 with 펩시 접수 마감 | 11월 7일 파주 5km, 참가비 2만원',
    description: '2026 멕시카나런 with 펩시는 11월 7일 오전 8시 30분 파주출판도시에서 열리는 5km 펀런입니다. 10월 13일 공식 공지와 이벤터스에서 인원 마감을 확인했습니다. 참가비는 2만원, 정원은 500명입니다. 공식 완주 기프트에는 멕시카나 3만원 모바일 금액권이 안내돼 있습니다. 신청 방법과 미공개 혜택 조건을 구분해 정리했습니다.',
    thumbnail: '/images/blog/mexicana-run-with-pepsi.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-07',
    category: 'news' as const,
    readingTime: 4,
    tags: ['멕시카나런', '펩시', '파주 러닝', '5km 펀런', '대회 접수'],
    event: {
      name: '2026 멕시카나런 with 펩시',
      startDate: '2026-11-07T08:30:00+09:00',
      location: { name: '파주출판도시 일대' },
      url: 'https://www.mexicana.co.kr/mobile/community/notice.asp?idx=35557&mode=view',
      offers: [{ name: '5km FUN RUN', priceKrw: 20000, availabilityEnds: '2026-10-15', url: 'https://event-us.kr/mexicanarunwithpepsi/event/135419' }],
    },
    raceMeta: {
      displayTitle: '멕시카나런, 파주에서 5km 치킨레이스',
      displaySubtitle: '11월 7일 토요일 — 2만원 · 접수 마감',
      raceDate: '2026-11-07',
      registrationStart: '2026-10-12',
      registrationEnd: '2026-10-15',
      registrationVia: '이벤터스 — 10월 13일 인원 마감 확인',
      action: {
        what: '접수 마감 — 기존 신청 내역 확인',
        how: '10월 13일 공식 공지의 SOLD OUT·접수 마감 안내와 이벤터스의 인원마감을 확인했습니다. 신청자는 이벤터스 마이페이지에서 신청 내역과 취소·환불 조건을 확인하세요.',
      },
      facts: [
        { label: '대회일', value: '11월 7일', sub: '토요일 · 08:30 출발' },
        { label: '장소', value: '파주출판도시', sub: '공식 표기: 파주출판도시 일대' },
        { label: '종목', value: '5km FUN RUN', sub: '기록 측정 여부는 미확인' },
        { label: '참가비', value: '20,000원', sub: '선착순 500명' },
        { label: '접수', value: '인원 마감', sub: '10월 13일 공식 확인' },
      ],
      highlights: [
        { badge: '마감', title: '참가 신청이 마감됐습니다', desc: '10월 13일 공식 공지에 <strong>SOLD OUT·접수 마감</strong>이 표시됐고, 실제 신청처인 이벤터스도 인원마감 상태입니다. 이벤터스의 신청 기간 표기는 10월 12일 10:00~15일 15:00이지만 정원이 먼저 마감됐습니다.' },
        { badge: '3만원', title: '금액권은 완주 기프트, 다른 구성은 아직 물음표입니다', desc: '공식 포스터의 <strong>완주 기프트에 멕시카나 모바일 금액권 30,000원</strong>이 안내돼 있습니다. 스타트 패키지와 다른 기프트, 애프터 파티의 상세 구성은 대부분 물음표로 가렸습니다. 금액권 사용·수령 조건은 신청 전에 확인해야 합니다.' },
      ],
    },
    faqs: [
      { question: '멕시카나런 접수는 언제, 어디서 하나요?', answer: '10월 13일 공식 공지에서 접수 마감을, 실제 신청처인 이벤터스에서 인원마감을 확인했습니다. 기존 신청자는 이벤터스 마이페이지에서 신청 내역을 확인하세요.' },
      { question: '참가비와 대회 날짜는 어떻게 되나요?', answer: '참가비는 20,000원입니다. 11월 7일 토요일 오전 8시 30분 파주출판도시 일대에서 출발하는 5km 펀런입니다.' },
      { question: '멕시카나 3만원 금액권을 주나요?', answer: '공식 포스터의 완주 기프트에 멕시카나 모바일 금액권 30,000원이 안내돼 있습니다. 지급 절차·유효기간·사용 조건은 포스터에서 확인되지 않아 신청 페이지의 최종 안내를 확인해야 합니다.' },
    ],
    content: `
<div class="callout info"><strong>10월 13일 갱신: 접수 마감</strong> — 멕시카나 공식 공지에 SOLD OUT과 참가신청 접수 마감이 표시됐습니다. 공식 공지가 연결한 <a href="https://event-us.kr/mexicanarunwithpepsi/event/135419" target="_blank" rel="noopener noreferrer">이벤터스 신청 페이지</a>도 인원마감 상태입니다. 신청 기간 표기는 10월 12일 10:00~15일 15:00으로 기존 포스터(12~14일)와 다르지만, 정원이 먼저 마감됐습니다. 기존 신청자는 이벤터스 마이페이지에서 신청 내역과 취소·환불 규정을 확인하세요. 행사별 환불 마감과 금액권 사용·수령 세부 조건은 추가 확인이 필요합니다. 아래는 10월 7일 포스터를 기준으로 작성한 행사 소개입니다.</div>
<p>5km를 달리고 치킨과 펩시를 즐기는 가을 펀런이 파주에 열립니다. <strong>멕시카나런 with 펩시</strong>입니다. 광고 게시물만 떠돌던 단계에서 벗어나, 멕시카나가 <strong>10월 6일 공식 홈페이지에 행사 포스터</strong>를 올렸습니다.</p>
<p>신청 전에 볼 것은 두 가지입니다. <strong>2만원에 선착순 500명</strong>이라는 접수 조건, 그리고 <strong>완주 기프트의 3만원 금액권</strong>과 아직 공개되지 않은 다른 기념품을 구분하는 것입니다. 이 글은 10월 7일 확인한 공식 포스터를 기준으로 씁니다.</p>

<h2>접수는 10월 12~14일, 신청 경로는 멕시카나 홈페이지</h2>
<p>공식 포스터에 적힌 신청 기간은 <strong>2026년 10월 12일(월)~14일(수)</strong>입니다. 참가비는 <strong>20,000원</strong>, 정원은 <strong>선착순 500명</strong>입니다. 신청 경로로 <a href="https://www.mexicana.co.kr/" target="_blank" rel="noopener noreferrer">멕시카나 홈페이지</a>를 안내합니다.</p>
<p>포스터에는 접수 시작·마감 시각이나 별도 신청 폼 주소가 없습니다. SNS 댓글이나 DM으로 링크를 받는 방식만 기다리기보다 <a href="https://www.mexicana.co.kr/mobile/community/notice.asp?idx=35557&amp;mode=view" target="_blank" rel="noopener noreferrer">공식 행사 공지</a>를 기준으로 신청 경로를 확인하세요. 정원이 작은 만큼 관심이 있다면 접수 첫날 확인하는 편이 낫습니다.</p>

<h2>11월 7일 오전 8시 30분, 파주출판도시에서 5km</h2>
<table>
  <thead><tr><th>항목</th><th>공식 포스터 안내</th></tr></thead>
  <tbody>
    <tr><td>일시</td><td>2026년 11월 7일(토) · 오전 8시 30분 출발</td></tr>
    <tr><td>장소</td><td>파주출판도시 일대</td></tr>
    <tr><td>종목</td><td>5km FUN RUN</td></tr>
    <tr><td>정원·참가비</td><td>선착순 500명 · 20,000원</td></tr>
    <tr><td>신청 기간</td><td>10월 12일(월)~14일(수)</td></tr>
  </tbody>
</table>
<p>오전 8시 30분은 <strong>출발 시각</strong>입니다. 집결 시각으로 읽으면 안 됩니다. 정확한 집결 위치와 배번 수령 시간, 교통·주차 안내는 신청 페이지나 후속 공지에서 확인해야 합니다.</p>
<p>포스터에 코스 프리뷰가 있지만, 주최 측은 <strong>이해를 돕기 위한 그림으로 실제와 다를 수 있으며 안전을 위해 코스를 바꿀 수 있다</strong>고 안내합니다. 이 그림만으로 반환점·급수대·고도를 확정하지 않았습니다. 기록칩, 제한시간, 시상 여부도 확인한 포스터에는 없습니다.</p>

<h2>‘참가비보다 더 돌려받는다’는 말은 조건부터 확인</h2>
<p>공식 포스터는 <strong>스타트 패키지, 완주 기프트, 애프터 파티</strong>를 예고합니다. 완주 기프트에는 <strong>멕시카나 모바일 금액권 30,000원</strong>이 명시돼 있습니다. 다만 티셔츠·가방처럼 보이는 다른 이미지 대부분에는 물음표가 붙어 있어 구성과 규격을 확정할 수 없습니다.</p>
<p>금액권의 액면가는 참가비보다 1만원 높습니다. 그래도 바로 <strong>2만원 내고 1만원 이득</strong>이라고 결론 내리기는 이릅니다. 사용처, 유효기간, 최소 주문금액, 수령 절차를 공식 신청 화면에서 확인해야 실제로 쓸 수 있는 혜택인지 판단할 수 있습니다. 특히 공식은 이를 ‘완주 기프트’에 넣었으므로 신청만 하면 받는다고 단정하지 마세요.</p>
<div class="callout info"><strong>신청 전 체크</strong> — 금액권과 기념품의 최종 구성, 환불 마감, 미성년자 참가 조건을 확인하세요. 10월 7일 확인한 공식 포스터에서는 이 조건들을 확인하지 못했습니다.</div>

<h2>이런 러너에게 어울립니다</h2>
<p><strong>기록보다 친구와의 가벼운 5km와 행사 분위기가 목적</strong>이라면 관심을 가질 만합니다. 반대로 공식 기록증이나 순위 경쟁이 필요하다면 기록 측정 안내부터 확인해야 합니다. 같은 11월 7일에는 <a href="/blog/purme-run">월드컵공원 푸르메런</a>도 열리니, 날짜가 겹치는 다른 대회를 이미 신청했다면 일정을 먼저 대조하세요.</p>
<p>신발은 새 레이싱화를 마련하기보다 이미 길들인 데일리 러닝화가 실용적입니다. 5km 거리보다 아침 이동과 현장 대기까지 편하게 소화할 수 있는지가 선택 기준입니다.</p>

<h2>확인한 출처</h2>
<p><a href="https://www.mexicana.co.kr/mobile/community/notice.asp?idx=35557&amp;mode=view" target="_blank" rel="noopener noreferrer">멕시카나 공식 「2026 멕시카나런 with 펩시」 공지</a> — 2026년 10월 6일 등록, 첨부 포스터 원문을 10월 7일 확인했습니다. 날짜·출발 시각·장소·거리·정원·참가비·신청 기간은 이 포스터 기준입니다. 10월 13일 공식 공지의 접수 마감 표시와 연결된 이벤터스 신청 페이지를 추가 확인했습니다. 혜택 세부 조건은 공개 확인 시 갱신하겠습니다.</p>
`,
  },
  {
    id: 'beatempo-korea-f45',
    slug: 'beatempo-korea-f45',
    title: '비템포 코리아 × F45 접수·가격 | 크리스마스 킨텍스 실내 5·10km, 1차 얼리버드 종료·후속 판매 확인',
    description: '2026년 12월 25~27일 킨텍스에서 열리는 비템포 코리아 × F45는 실내 러닝·피트니스 축제입니다. 러닝 5km 55,000원·10km 70,000원, 공지된 1차 얼리버드 기간은 10월 11일 종료됐습니다. 후속 판매 일정은 확인되지 않았습니다. 러닝과 F45·파티 티켓의 차이, 회차당 정원과 환불 기한을 공식 안내로 정리했습니다.',
    thumbnail: '/images/blog/beatempo-korea-f45.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-07',
    updatedAt: '2026-10-12',
    category: 'news' as const,
    readingTime: 5,
    tags: ['비템포 코리아', 'BEATEMPO', 'F45', '킨텍스', '실내 러닝', '크리스마스 러닝'],
    event: {
      name: 'BEATEMPO KOREA 2026 × F45',
      startDate: '2026-12-25',
      endDate: '2026-12-27',
      location: { name: '킨텍스 제2전시장 7·8홀 및 회의실' },
      organizer: '킨텍스 · F45',
      url: 'https://beatempokorea.com/home/',
      offers: [
        { name: 'BEATEMPO 150 · 5km 러닝', priceKrw: 55000, availabilityEnds: '2026-10-11', url: 'https://display.cjonstyle.com/p/mocode/M1242889' },
        { name: 'BEATEMPO 150 · 10km 러닝', priceKrw: 70000, availabilityEnds: '2026-10-11', url: 'https://display.cjonstyle.com/p/mocode/M1242889' },
      ],
    },
    raceMeta: {
      displayTitle: '비템포, 크리스마스에 실내 5·10km',
      displaySubtitle: '12월 25~27일 킨텍스 — 러닝과 F45는 별도 티켓',
      raceDate: '2026-12-25',
      registrationStart: '2026-10-06T20:00',
      registrationEnd: '2026-10-11',
      registrationVia: 'CJ온스타일 — 1차 얼리버드 판매 기간 기준',
      action: {
        what: '1차 얼리버드 기간 종료 — 후속 판매 여부 확인',
        how: '<a href="https://display.cjonstyle.com/p/mocode/M1242889" target="_blank" rel="noopener noreferrer">CJ온스타일 구매 페이지</a>에서 러닝 거리·참가 날짜·오전 또는 오후 회차를 확인하세요. 일반관람권이나 F45 티켓을 러닝 참가권으로 혼동하지 마세요. 10월 12일 공식 티켓 안내는 기존 가격과 구매 링크를 유지하나, 실제 구매 페이지가 열리지 않아 후속 일정·잔여 수량을 확인하지 못했습니다.',
      },
      facts: [
        { label: '행사일', value: '12월 25~27일', sub: '금~일 · 크리스마스 주말' },
        { label: '장소', value: '킨텍스 제2전시장', sub: '7·8홀 및 회의실' },
        { label: '러닝', value: '실내 5km · 10km', sub: '회차당 최대 1,000명' },
        { label: '러닝 참가비', value: '5.5만 / 7만원', sub: '5km / 10km · 공식 티켓 안내 기준' },
        { label: '1차 판매', value: '10/6~11', sub: '10월 6일 20:00 개시' },
      ],
      highlights: [
        { badge: 'INDOOR', title: '한겨울 실내에서 음악과 조명 터널을 달립니다', desc: 'BEATEMPO 150은 킨텍스 실내 트랙에서 달리는 <strong>5km·10km 러닝 프로그램</strong>입니다. 공인 기록 대회로 소개할 근거는 확보하지 못했고, 기록칩과 순위 산정 여부도 확인한 안내에 없습니다.' },
        { badge: '별도 티켓', title: '러닝권 하나로 F45와 파티까지 모두 참가하는 구조는 아닙니다', desc: '러닝, F45 PEAK500, 요가·명상, 나이트 펀런·공연은 티켓이 구분됩니다. 여러 프로그램을 묶은 패키지도 있으니 <strong>이름보다 포함 항목</strong>을 보고 골라야 합니다.' },
        { badge: '10/31', title: '러닝 환불 기한은 행사일보다 훨씬 앞입니다', desc: '공식 FAQ는 PEAK500을 제외한 프로그램에 대해 <strong>10월 31일 오후 6시 이후 취소·환불 불가</strong>를 안내합니다. 12월 행사라고 환불 결정도 12월에 할 수 있는 것은 아닙니다.' },
      ],
    },
    faqs: [
      { question: '비템포 러닝 참가비는 얼마인가요?', answer: '공식 티켓 안내 기준 BEATEMPO 150 러닝은 5km 55,000원, 10km 70,000원입니다. 일반관람권 35,000원은 러닝 참가권이 아닙니다.' },
      { question: '얼리버드는 언제까지 구매할 수 있나요?', answer: '공지된 1차 판매 기간(10월 6일 오후 8시~11일)은 지났습니다. 10월 12일 후속 판매 일정과 실제 구매 가능 여부는 확인되지 않았으므로 공식 판매 페이지에서 확인하세요.' },
      { question: '러닝 참가권에 F45와 파티도 포함되나요?', answer: '러닝·F45 PEAK500·요가·명상·나이트 펀런·공연은 별도 티켓이 구분되어 있습니다. 함께 참가하려면 해당 프로그램이나 포함 항목이 맞는 패키지를 선택하세요.' },
      { question: '러닝 참가권은 언제까지 환불할 수 있나요?', answer: '공식 FAQ는 PEAK500 외 프로그램에 대해 2026년 10월 31일 오후 6시 이후 취소·환불 불가를 안내합니다. 최종 구매 화면의 상품별 약관도 확인하세요.' },
    ],
    content: `
<p>크리스마스에 달리고 싶은데 추운 바깥은 부담스럽다면, 킨텍스에서 열리는 <strong>비템포 코리아 × F45</strong>가 선택지가 될 수 있습니다. 12월 25~27일 실내 러닝과 F45 운동, 요가·명상, 음악 프로그램을 모은 행사입니다.</p>
<p>러너가 먼저 알아둘 것은 <strong>러닝 참가권과 F45·파티 티켓이 구분된다는 점</strong>입니다. 가장 저렴한 관람권을 사면 러닝까지 할 수 있다고 생각하면 안 됩니다. 아래는 10월 7일 공식 홈페이지·FAQ·CJ온스타일 판매 페이지를 확인한 내용입니다.</p>

<h2>1차 얼리버드 기간 종료 — 러닝 안내 가격 5.5만·7만원</h2>
<p><a href="https://corp.cjonstyle.com/ko/newsroom/press/145" target="_blank" rel="noopener noreferrer">CJ온스타일 공식 발표</a>에 따르면 1차 얼리버드 판매는 <strong>10월 6일 오후 8시~11일</strong>입니다. <a href="https://display.cjonstyle.com/p/mocode/M1242889" target="_blank" rel="noopener noreferrer">실제 구매 페이지</a>에서 러닝의 오전·오후 회차와 프로그램별 상품이 구분된 것을 확인했습니다. 해당 판매 기간은 지났습니다. 10월 12일 공식 티켓 안내에 가격과 구매 링크는 남아 있으나 구매 페이지 접근이 되지 않아 후속 판매 개시 여부는 확인하지 못했습니다.</p>
<table>
  <thead><tr><th>티켓</th><th>공식 안내 가격</th><th>고를 때 확인할 것</th></tr></thead>
  <tbody>
    <tr><td>BEATEMPO 150 · 5km</td><td>55,000원</td><td>러닝 날짜·오전/오후 회차</td></tr>
    <tr><td>BEATEMPO 150 · 10km</td><td>70,000원</td><td>러닝 날짜·오전/오후 회차</td></tr>
    <tr><td>일반관람</td><td>35,000원</td><td>러닝 참가권과 구분</td></tr>
    <tr><td>러닝 + 파티 패키지</td><td>5km 120,000원 / 10km 130,000원</td><td>선택 날짜와 포함 파티</td></tr>
    <tr><td>F45 PEAK500</td><td>개인 140,000원 / 2인 페어 125,000원 / 4인 페어 110,000원</td><td>각 가격은 1인 기준 · 팀 사전 구성</td></tr>
  </tbody>
</table>
<p>표는 <a href="https://beatempokorea.com/home/t1.php?s=11" target="_blank" rel="noopener noreferrer">공식 티켓 안내</a>의 가격입니다. 실제 결제가는 선택 상품·옵션의 최종 화면이 기준입니다. 공식 가격에 쿠폰 할인을 임의로 빼서 ‘최저가’로 소개하지 않았습니다.</p>

<h2>실내 5·10km는 어떤 방식인가요?</h2>
<p><a href="https://beatempokorea.com/home/p2.php?s=32" target="_blank" rel="noopener noreferrer">BEATEMPO 150 공식 프로그램 안내</a>는 음악과 조명 터널을 즐기는 실내 트랙 러닝으로 소개합니다. 운영일은 <strong>12월 25~27일</strong>, 장소는 <strong>킨텍스 제2전시장 7·8홀 및 회의실</strong>입니다. <strong>회차당 최대 1,000명</strong>을 안내합니다.</p>
<p>주최 측의 예상 소요시간은 5km 20~40분, 10km 40~90분이며, <strong>90분을 초과하면 러닝을 종료</strong>한다고 적혀 있습니다. 예상 소요시간은 내가 꼭 그 안에 들어와야 한다는 기록 기준과는 다르지만, 종료 규정은 선택 전에 확인할 필요가 있습니다.</p>
<p>확인한 안내에는 한 바퀴 길이와 기록칩·순위 산정 방식이 없습니다. 따라서 일반 도로 마라톤처럼 공식 기록을 남기는 행사라고 단정하지 않습니다. 겨울 실내에서 달리는 경험이 목적이라면 어울리고, 기록증이 필요하다면 운영사무국에 측정 방식을 먼저 물어보세요.</p>

<h2>F45와 나이트 펀런은 날짜도 내용도 다릅니다</h2>
<ul>
  <li><strong>12월 25일:</strong> 러닝·요가·명상, 밤에는 NIGHT FUN RUN. 공식 티켓 안내의 나이트 펀런은 80,000원이며 DJ EDM Festival을 포함합니다.</li>
  <li><strong>12월 26일:</strong> 러닝·F45·요가·명상, 밤에는 ANTIDOTE FESTIVAL. 공연 티켓은 81,000원으로 별도 안내됩니다.</li>
  <li><strong>12월 27일:</strong> 러닝·F45·요가·명상 프로그램.</li>
</ul>
<p><a href="https://beatempokorea.com/home/p1.php?s=31" target="_blank" rel="noopener noreferrer">F45 PEAK500</a>은 5개 스테이션에서 총 30분 동안 운동하는 프로그램입니다. 실내 5km·10km 러닝과는 별개입니다. 2인·4인 페어는 팀을 먼저 구성한 뒤 신청해야 하므로 혼자 신청하면 현장에서 자동으로 팀을 만들어준다고 생각하면 안 됩니다.</p>
<p>달리기만 하고 싶다면 BEATEMPO 150 러닝권부터, 운동과 파티까지 함께 즐기려면 패키지의 <strong>거리·참가일·포함 프로그램</strong>을 함께 확인하세요. 패키지 이름만 보고 모든 프로그램이 포함된다고 가정하면 불필요한 지출이 생길 수 있습니다.</p>

<h2>10월에 사는 12월 티켓, 환불 기한은 10월 31일</h2>
<p><a href="https://beatempokorea.com/home/f1.php?s=71" target="_blank" rel="noopener noreferrer">공식 FAQ</a>는 <strong>PEAK500 외 프로그램의 취소·환불이 10월 31일 오후 6시 이후 불가</strong>하다고 안내합니다. 러닝을 신청할 때도 이 날짜를 확인하세요. 행사일보다 약 두 달 앞서 환불 가능 여부를 결정해야 하는 구조입니다.</p>
<p>PEAK500은 별도 규정을 씁니다. 1차 판매 기준 프로그램 운영일 50일 전 오전 9시까지 100%, 30일 전 오전 9시까지 50% 환불, 이후 취소·환불 불가이며 7일 전 오전 9시까지 선수 변경이 가능하다고 안내합니다. <strong>러닝 환불 기한을 PEAK500에 그대로 적용하면 안 됩니다.</strong> 최종 결제 화면의 상품별 약관을 함께 보세요.</p>
<p>입장은 모바일 티켓 QR코드를 확인한 뒤 팔찌를 받는 방식입니다. 실제 참가자 본인 명의로 예매하고, 티켓 양도나 증여·재판매가 가능한지는 약관을 먼저 확인하세요. 참가 연령과 보호자 동반 규정은 이번에 확인한 프로그램·티켓·FAQ 본문에서 확인하지 못했습니다.</p>

<h2>장비보다 먼저 고를 것은 참가 목적</h2>
<p>겨울 실내 러닝과 음악을 함께 즐기려는 러너에게는 흥미로운 선택입니다. 반대로 공인 기록을 목표로 하거나, 러닝권 하나로 모든 운동을 체험하고 싶다면 신청 전에 확인할 항목이 더 있습니다.</p>
<p>러닝만 참가한다면 익숙한 데일리 러닝화부터 생각하면 됩니다. F45까지 한다면 달리기용 신발이 각 스테이션 운동에도 맞는지 따로 점검하세요. 킨텍스 주차는 행사 시간대에 혼잡할 수 있으므로 이동 시간도 여유 있게 잡는 편이 좋습니다.</p>

<h2>확인한 출처</h2>
<p><a href="https://beatempokorea.com/home/" target="_blank" rel="noopener noreferrer">비템포 공식 홈페이지</a>의 행사·프로그램·티켓·FAQ, <a href="https://corp.cjonstyle.com/ko/newsroom/press/145" target="_blank" rel="noopener noreferrer">CJ온스타일 10월 6일 공식 발표</a>, <a href="https://display.cjonstyle.com/p/mocode/M1242889" target="_blank" rel="noopener noreferrer">CJ온스타일 실제 구매 페이지</a>를 2026년 10월 7일 확인했습니다. 회차별 잔여 수량·최종 결제 조건·프로그램 변경은 구매 전 공식 안내를 다시 확인하세요.</p>
`,
  },
  {
    id: 'nike-pegasus-42-vs-pegasus-plus-2-daily-2026',
    slug: 'nike-pegasus-42-vs-pegasus-plus-2-daily-2026',
    title:
      '페가수스 42 vs 페가수스 플러스 2 — 5만원 더 내고 얻는 것과 잃는 것 | 한국 판매 시작 후 구매 선택',
    description:
      '나이키 코리아에서 페가수스 플러스 2(219,000원)가 판매 중으로 바뀌었습니다. 페가수스 42(169,000원)와는 5만원 차이입니다. 그 돈으로 ZoomX와 전족부 에어 줌, 개선된 핏을 얻는 대신 와이드 옵션과 좁은 힐 걱정 없는 안정감을 내줍니다. 무게·스택·핏·와이드·부상 이력별로 어느 쪽이 맞는지 기준 사이즈와 근거 출처를 밝혀 정리했습니다.',
    thumbnail: '/images/blog/nike-pegasus-42-vs-pegasus-plus-2-daily-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-02',
    category: 'review' as const,
    readingTime: 8,
    tags: [
      '페가수스 42',
      '페가수스 플러스 2',
      '나이키 데일리 러닝화',
      '러닝화 비교',
      'ZoomX',
      '와이드 러닝화',
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>둘의 성격이 다릅니다.</strong> 페가수스 42는 ReactX 폼에 풀 렝스 에어 줌을 얹은 <strong>169,000원 입문·데일리</strong>, 플러스 2는 ZoomX에 전족부 에어 줌을 노출한 <strong>219,000원 템포 겸용 데일리</strong>입니다. 값 차이는 5만원입니다</li>
    <li>플러스 2를 사면 <strong>핏(Doctors of Running 평가 A)과 반발</strong>이 나아지고, 42를 사면 <strong>와이드 옵션(남·여 모두 정식 편성)과 안정적인 힐</strong>을 갖습니다</li>
    <li>발볼이 넓거나 평발이거나 뒤꿈치로 착지한다면 42, 데일리에 업템포를 섞고 1세대 플러스의 헐거운 핏이 불만이었다면 플러스 2가 맞습니다</li>
  </ul>
</div>

<div class="callout info">
  <strong>한 줄 결론</strong> — 5~10km 이지런이 대부분이고 발볼이 넓다면 <a href="/shoes/nike-pegasus-42">페가수스 42</a>가 5만원을 아끼면서 더 안전한 선택입니다. 이지런 사이에 속도 변화를 섞고 핏과 반발을 중시한다면 <a href="/shoes/nike-pegasus-plus-2">페가수스 플러스 2</a>입니다. 플러스 2의 출시 소식과 1세대와의 차이는 <a href="/blog/nike-pegasus-plus-2-release-2026">출시 정리 글</a>에 있습니다.
</div>

<h2>두 켤레 한눈에 보기</h2>

<p>먼저 짚을 것이 있습니다. 아래 표의 수치는 <strong>측정 방식이 서로 다릅니다.</strong> 42는 RunRepeat 랩 실측이 있고, 플러스 2는 아직 랩이 게시되지 않아 나이키 공식 스펙과 해외 리뷰어 실측을 씁니다. 같은 행이라도 같은 잣대가 아니니 표 아래 주석을 함께 보세요.</p>

<table>
  <thead>
    <tr><th>항목</th><th>페가수스 42</th><th>페가수스 플러스 2</th></tr>
  </thead>
  <tbody>
    <tr><td>한국 정가</td><td><strong>169,000원</strong></td><td><strong>219,000원</strong> (5만원 차)</td></tr>
    <tr><td>무게</td><td>286g (RunRepeat 실측, US M9)</td><td>258g (나이키 공식, US M9) · 270g (Doctors of Running 실측, US M10)</td></tr>
    <tr><td>힐/전족부 스택</td><td>37/27mm (공식) · 36/22mm (RunRepeat 실측)</td><td>38/28mm (공식, 랩 실측 없음)</td></tr>
    <tr><td>드롭</td><td>10mm (공식) · 14mm (RunRepeat 실측)</td><td>10mm (공식)</td></tr>
    <tr><td>미드솔</td><td>ReactX + 풀 렝스 에어 줌</td><td><strong>ZoomX + 전족부 노출형 에어 줌</strong></td></tr>
    <tr><td>카본 플레이트</td><td>없음</td><td>없음</td></tr>
    <tr><td>토박스</td><td>72.3mm (RunRepeat 실측)</td><td>랩 실측 없음 · 1세대보다 넓어졌다는 평가</td></tr>
    <tr><td>와이드 옵션</td><td><strong>남·여 정식 편성</strong></td><td><strong>없음</strong> (나이키 코리아 9/3 확인)</td></tr>
    <tr><td>외부 평가</td><td>Believe in the Run B 티어 (디자인 A·가치 A·퍼포먼스 C)</td><td>Believe in the Run A 티어 (디자인 A·가치 A·퍼포먼스 B)</td></tr>
  </tbody>
</table>

<p><small>무게는 기준 사이즈가 달라 258g과 286g을 바로 빼서 28g 차이라고 읽으면 안 됩니다. 같은 US M9 기준으로 맞춘 비교 실측은 아직 없습니다. 스택은 42의 공식값과 실측이 전족부에서 5mm 어긋나므로, 플러스 2의 공식 38/28mm도 랩이 나오면 달라질 수 있습니다. 내구성은 두 모델 모두 랩 마모 실측이 없어 표에 넣지 않았습니다. 42·플러스 2의 가격과 와이드 여부는 나이키 코리아 기준이며 플러스 2는 2026년 10월 2일 판매 페이지에서 확인했습니다.</small></p>

<h2>페가수스 42 — 169,000원에 와이드까지, 안전한 기본값</h2>

<p>RunRepeat 랩에서 42의 힐 스택은 36mm, 힐 충격흡수(SA)는 131로 41보다 올랐습니다. 나이키가 내세운 에너지 리턴 +15%는 실측으로는 힐 55.5%에서 57.1%, 전족부 61.4%에서 61.2%라 사실상 같았습니다. 즉 이 모델의 진짜 개선은 폼이 아니라 <strong>힐 착지 부드러움과 한국 와이드 정식 편성</strong>입니다. 발볼이 넓은 러너가 표준과 와이드 중에서 고를 수 있다는 점이 한국 러너에게 실용적인 변화입니다.</p>

<p>약점은 무게와 속도감입니다. 286g이라 10km를 넘기면 가벼운 신발은 아니고, Believe in the Run도 퍼포먼스는 C로 봤습니다. 템포나 인터벌에 쓰려면 아쉽습니다.</p>

<p><strong>✅ 이런 분께</strong> — 5~10km 데일리가 중심인 입문·초중급, 발볼이 넓어 와이드가 필요한 러너, 평발 성향이거나 뒤꿈치 착지가 익숙한 러너.</p>

<h2>페가수스 플러스 2 — 5만원으로 핏과 반발을 산다</h2>

<p>플러스 2는 1세대의 약점이던 미드풋 헐거움과 좁은 토박스를 손봤습니다. Doctors of Running은 자신이 테스트한 나이키 트레이너 중 핏이 가장 좋다고 평가했고, 1세대의 딱딱하던 ZoomX가 중간 정도로 유연해졌다고 짚었습니다. Believe in the Run은 A 티어를 줬지만 전족부 에어 줌의 반발이 템포 훈련을 감당할 만큼은 아니라서 <strong>이름이 말하는 템포 트레이너보다 데일리 트레이너에 가깝다</strong>고 봤습니다.</p>

<p>이 모델에서 조심할 구조는 힐입니다. Doctors of Running은 뒤꿈치가 좁고 미드풋 플랫폼이 매우 좁아 힐 스트라이커에게 불안정할 수 있다고 지적했습니다. 또 와이드 옵션이 없어서 발볼 걱정이 있으면 매장 착화가 먼저입니다. 랩 수치(충격흡수·에너지 리턴·토박스)는 확인한 범위에서 아직 게시되지 않았습니다.</p>

<p><strong>✅ 이런 분께</strong> — 이지런 위주지만 가끔 속도를 올리는 러너, 1세대 플러스의 핏이 불만이었던 러너, 앞볼 여유가 표준 폭이면 충분한 러너.</p>

<h2>내게 맞는 건?</h2>

<ul>
  <li><strong>발볼이 넓다 / 4E급이다</strong> → <a href="/shoes/nike-pegasus-42">페가수스 42</a> 와이드. 플러스 2는 와이드가 없습니다</li>
  <li><strong>평발·과내전 성향이다</strong> → 42. 플러스 2는 아치 지지가 없는 중립 전용 구조라 권하기 어렵습니다</li>
  <li><strong>뒤꿈치 착지가 중심이다</strong> → 42. 플러스 2의 좁은 힐·미드풋이 걸릴 수 있습니다</li>
  <li><strong>이지런에 템포를 섞는다</strong> → <a href="/shoes/nike-pegasus-plus-2">플러스 2</a>. 다만 본격 인터벌·레이스용은 플레이트가 있는 모델을 따로 두세요</li>
  <li><strong>1세대 <a href="/shoes/nike-pegasus-plus">페가수스 플러스</a>에서 넘어온다</strong> → 핏이 개선됐으므로 플러스 2. 무게는 1세대 실측 244g보다 늘었습니다</li>
  <li><strong>예산이 가장 중요하다</strong> → 42. 5만원을 아끼는 쪽이 합리적인 구간이 넓습니다</li>
</ul>

<h2>자주 묻는 질문</h2>

<div class="faq">
  <div class="faq-item">
    <p class="faq-q">Q. 플러스 2는 지금 한국에서 살 수 있나요?</p>
    <p class="faq-a">A. 2026년 10월 2일 나이키 코리아 상품 페이지(스타일 번호 IM2541-600)에서 219,000원에 사이즈 선택과 장바구니가 활성화된 상태를 확인했습니다. 9월 3일에는 "출시 예정"이었습니다. 색상 3종 이상이 등록돼 있지만 사이즈별 재고는 확인하지 않았습니다.</p>
  </div>
  <div class="faq-item">
    <p class="faq-q">Q. 플러스 2가 42보다 28g 가벼운가요?</p>
    <p class="faq-a">A. 그렇게 읽으면 안 됩니다. 258g은 나이키 공식 US M9 값이고 42의 286g은 RunRepeat 실측입니다. 측정 주체가 다릅니다. Doctors of Running이 US M10으로 잰 270g을 감안하면 차이는 이보다 작을 가능성이 있습니다(추정).</p>
  </div>
  <div class="faq-item">
    <p class="faq-q">Q. 발볼이 넓은데 플러스 2를 신어도 되나요?</p>
    <p class="faq-a">A. 1세대보다 앞볼 여유가 늘었지만 와이드 옵션이 없고 토박스 실측도 없습니다. 발볼이 넓다면 와이드가 있는 42가 안전하고, 플러스 2는 매장 착화 후 결정하세요.</p>
  </div>
  <div class="faq-item">
    <p class="faq-q">Q. 42 가격이 169,000원이 맞나요?</p>
    <p class="faq-a">A. 사이트 데이터 기준 한국 정가이며 남·여 와이드도 같은 값으로 편성돼 있습니다. 이번 글 작성 시점에 42 페이지를 다시 열어 확인하지는 않았으니 구매 전 공식몰 가격을 한 번 더 보세요.</p>
  </div>
</div>

<p><small>출처: 나이키 코리아 페가수스 플러스 2 상품 페이지(2026년 10월 2일 확인) · 페가수스 42 RunRepeat 랩 데이터(2026년 4월 25일 게시분) · Believe in the Run·Doctors of Running 플러스 2 리뷰 · 나이키 공식 스펙 · 작성 2026년 10월 2일. 플러스 2의 RunRepeat 랩은 확인한 범위에서 미게시이며 게시되면 수치를 갱신합니다.</small></p>
`,
  },
  {
    id: 'nike-apex-announcement-super-shoe-baseline-2026',
    slug: 'nike-apex-announcement-super-shoe-baseline-2026',
    title:
      '나이키 에이펙스 공개 | 가격·무게는 없고 "40%"만 있다 — 알파플라이 4·아디오스 프로 5와 기준점부터 맞춰 봤습니다',
    description:
      '나이키가 9월 30일 새 마라톤 레이싱화 에이펙스(Apex)를 공식 공개했습니다. 출시는 2027년 1월, 가격과 무게는 공개되지 않았고 "알파플라이 3 대비 에너지 리턴 최대 40%"만 있습니다. 같은 주 나온 아디오스 프로 5의 "+9%", 알파플라이 4의 "+10%"와 나란히 놓으면 각자 다른 기준점을 쓰고 있어 그대로 비교할 수 없습니다. 한국에서 지금 살 수 있는 것과 없는 것까지 1차 소스로 정리했습니다.',
    thumbnail: '/images/blog/nike-apex-announcement-super-shoe-baseline-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-10-01',
    updatedAt: '2026-10-06',
    category: 'news' as const,
    readingTime: 9,
    tags: [
      '나이키 에이펙스',
      'Nike Apex',
      '알파플라이 4',
      '아디오스 프로 5',
      '슈퍼슈즈',
      '카본화',
      '러닝화 발매',
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>나이키가 9월 30일 마라톤 레이싱화 "에이펙스"를 공개했고, 출시는 2027년 1월입니다.</strong> 에어 줌 유닛 4개를 2개씩 겹쳐 쌓고, 힐·전족부 스택 40mm에 드롭 0mm인 신발입니다. 가격과 무게는 공식 자료에 없습니다</li>
    <li><strong>"알파플라이 3 대비 에너지 리턴 최대 40%"는 기준점이 알파플라이 3인 숫자입니다.</strong> 기준점이란 "무엇에 비해 몇 % 좋아졌다"고 할 때의 비교 대상입니다. 같은 주 아디다스는 아디오스 프로 4를, 나이키는 알파플라이 4에 대해 알파플라이 3을 기준점으로 잡아서, 세 숫자를 크기 순으로 줄 세우면 안 됩니다</li>
    <li><strong>한국에서는 오늘 에이펙스도 알파플라이 4도 나이키 코리아에 없습니다.</strong> 지금 살 수 있는 쪽은 알파플라이 3(정가 339,000원)과 아디오스 프로 5(339,000원)입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">👟</span>
  <div class="callout-body">
    <p class="callout-title">한 줄 결론</p>
    <p><strong>에이펙스는 "2027년 봄 시즌을 겨냥한 예고"이지 이번 가을 구매 대상이 아닙니다.</strong> 가격도 무게도 없는 상태라 "알파플라이 4보다 얼마나 나은가"는 아직 계산할 수 없고, 계산해서도 안 됩니다. 이 글은 나이키가 공식 자료에서 실제로 말한 것만 골라 적고, 같은 주에 나온 아디오스 프로 5와 기준점을 맞춰 "무엇이 비교되고 무엇이 안 되는지"를 갈라 놓았습니다.</p>
  </div>
</div>

<h2>먼저, 나이키가 공식적으로 말한 것</h2>

<p>아래 표는 나이키 뉴스룸 보도자료(2026년 9월 30일)에서 그대로 옮긴 항목입니다. 해석이 섞이지 않은 값만 담았고, 보도자료에 없는 항목은 "미공개"로 적었습니다.</p>

<table>
  <thead>
    <tr><th>항목</th><th>나이키 공식 표기</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>출시</strong></td><td>2027년 1월, nike.com과 일부 리테일 매장</td></tr>
    <tr><td><strong>미드솔</strong></td><td>에어 줌 유닛 4개(2개씩 2단 적층) + 신규 폼 ZoomX LT</td></tr>
    <tr><td><strong>플레이트</strong></td><td>재설계한 카본 파이버 플라이플레이트(역파형으로 솟은 형태)</td></tr>
    <tr><td><strong>스택·드롭</strong></td><td>힐 40mm / 전족부 40mm, 드롭 0mm</td></tr>
    <tr><td><strong>어퍼</strong></td><td>플라이니트 X, 라이너 없는 구조</td></tr>
    <tr><td><strong>아웃솔</strong></td><td>GOATEK + Fast Shot, 더 넓은 아웃솔과 락커 지오메트리</td></tr>
    <tr><td><strong>성능 주장</strong></td><td>알파플라이 3 대비 에너지 리턴 최대 40%, 10% 넘게 가벼움(남성 사이즈 10 기준)</td></tr>
    <tr><td><strong>무게(g)</strong></td><td>미공개</td></tr>
    <tr><td><strong>가격</strong></td><td>미공개</td></tr>
    <tr><td><strong>한국 출시</strong></td><td>미공개</td></tr>
  </tbody>
</table>

<p>나이키는 이번 발표에서 레이싱화를 <strong>"위계가 아니라 선택지로"</strong> 설계했다고 밝혔습니다(보도자료 원문 "Rather than organizing racing footwear as a hierarchy, Nike designed its race-day lineup as a choice"). 역할을 옮기면 <strong>스우시플라이(Swooshfly)는 "레이스 데이의 문을 여는" 신발, 알파플라이 4는 "속도와 반응성·편안함·안정성·효율의 균형"을 맞춘 신발, 에이펙스는 "마라톤 성능의 끝을 쫓는 러너"를 위한 신발</strong>입니다. 출시는 알파플라이 4가 10월, 에이펙스가 2027년 1월, 스우시플라이가 2027년 2월 중국 출시 뒤 봄에 글로벌입니다. 에이펙스의 에어 줌은 <a href="/blog/nike-alphafly-4-official-specs-2026">알파플라이 4에서 새로 도입한 것과 같은 기술</a>이고, 그걸 2단으로 쌓았다는 게 구조상 가장 큰 차이입니다.</p>

<h2>"40%"는 어디에 대한 40%인가 — 세 숫자의 기준점</h2>

<p>이번 주 공개된 슈퍼슈즈 세 켤레는 모두 "전작보다 좋아졌다"는 숫자를 들고 나왔습니다. 그런데 이 숫자들은 <strong>서로 다른 기준점을 재고 있어서</strong>, 나란히 놓는 순간 착시가 생깁니다. 수치를 꺼내기 전에 먼저 단서를 하나 답니다. 세 숫자는 모두 각 브랜드가 자사 실험실에서 잰 값이고, 외부 기관이 같은 조건으로 재현한 결과는 아직 없습니다.</p>

<table>
  <thead>
    <tr><th>신발</th><th>공식 주장</th><th>기준점</th><th>무게 기준 사이즈</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>나이키 에이펙스</strong></td><td>에너지 리턴 최대 40%↑, 10% 넘게 가벼움</td><td><strong>알파플라이 3</strong>(2세대 전 모델)</td><td>남성 10</td></tr>
    <tr><td><a href="/shoes/nike-alphafly-4"><strong>나이키 알파플라이 4</strong></a></td><td>에너지 리턴 10%↑, 5% 가벼움</td><td>알파플라이 3</td><td>에너지 리턴 쪽은 조건 미표기, 무게는 265mm</td></tr>
    <tr><td><a href="/shoes/adidas-adios-pro-5"><strong>아디다스 아디오스 프로 5</strong></a></td><td>에너지 리턴 9%↑, 12% 가벼움(23g)</td><td><strong>아디오스 프로 4</strong>(직전 모델)</td><td>UK 8.5 평균 샘플</td></tr>
  </tbody>
</table>

<p>여기서 읽을 수 있는 것은 두 가지입니다.</p>

<ol>
  <li><strong>에이펙스의 40%와 아디오스 프로 5의 9%는 비교 대상이 아닙니다.</strong> 하나는 2세대 전 나이키 모델 대비이고, 하나는 직전 아디다스 모델 대비입니다. 40이 9보다 크다고 해서 에이펙스가 네 배 낫다는 뜻이 아닙니다.</li>
  <li><strong>에이펙스와 알파플라이 4의 차이도 숫자로 직접 계산할 수 없습니다.</strong> 둘 다 알파플라이 3을 기준점으로 삼았으니 1.40÷1.10(약 27%)처럼 나눠 보고 싶어지지만, 두 주장이 같은 조건·같은 사이즈에서 잰 값이라는 보장이 없습니다. 에이펙스는 "최대" 40%이고 알파플라이 4는 별도 조건에서의 10%라서, <strong>이 계산은 참고로만</strong> 두는 게 맞습니다.</li>
</ol>

<p>무게도 같은 방식으로 읽습니다. 에이펙스가 "알파플라이 3보다 10% 넘게 가볍다"고 했는데, 알파플라이 3의 나이키 공식 표기는 남성 US 10 기준 218g이므로 <strong>에이펙스는 같은 사이즈에서 약 196g 미만이라는 계산이 나옵니다(추정: 218g×0.9, 보도자료에 g 표기는 없음)</strong>. 이 값을 아디오스 프로 5의 177g(UK 8.5)과 곧바로 비교하면 안 됩니다. 사이즈 기준이 다르고, 슈퍼슈즈는 한 사이즈 차이만으로도 무게가 크게 달라지기 때문입니다. 같은 함정은 <a href="/blog/nike-alphafly-4-official-specs-2026">알파플라이 4 공식 발표 글</a>에서 188g과 218g이 "30g 차이"가 아니라 "10g 차이"였던 사례로 이미 한 번 짚었습니다.</p>

<h2>같은 주, 아디다스는 이미 출시했다</h2>

<p>아디다스는 나이키보다 8일 먼저 <strong>아디제로 아디오스 프로 5</strong>를 공개했고, 발표 당일(9월 22일) 전 세계 출시를 시작했습니다. 아래는 아디다스 보도자료(2026년 9월 22일)에서 옮긴 값입니다.</p>

<table>
  <thead>
    <tr><th>항목</th><th>아디다스 공식 표기</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>무게</strong></td><td>평균 177g(UK 8.5 샘플), 아디오스 프로 4보다 약 23g(12%) 가벼움</td></tr>
    <tr><td><strong>스택·드롭</strong></td><td>힐 39mm / 전족부 35mm, 드롭 4mm</td></tr>
    <tr><td><strong>핵심 구조</strong></td><td>기존 에너지로드 대신 카본 혼입 구조 ENERGYRIM 첫 적용 + 최신 세대 라이트스트라이크 프로 폼</td></tr>
    <tr><td><strong>성능 주장</strong></td><td>아디오스 프로 4 대비 에너지 리턴 +9%</td></tr>
    <tr><td><strong>아웃솔·어퍼</strong></td><td>컨티넨탈 러버 아웃솔, 라이트락 2.0 어퍼</td></tr>
    <tr><td><strong>글로벌 정가</strong></td><td>$275 / €275</td></tr>
    <tr><td><strong>한국 정가</strong></td><td>339,000원(아디다스 코리아 공식몰 제품 페이지, 10월 1일 확인, 장바구니 담기 가능)</td></tr>
  </tbody>
</table>

<p>아디다스는 이 신발을 "2시간 벽을 깬 아디오스 프로 에보 3의 기술을 가져와 프로 시리즈를 다시 만든 것"이라고 설명합니다. 이 서사는 아디다스의 주장이고, 공식 보도자료에서 마라톤 2시간 이내 기록을 세운 선수로 세바스찬 사웨를 들었다는 점까지만 확인했습니다. 에보 3 자체가 궁금하다면 <a href="/blog/2026-adidas-adios-pro-evo-3-korea-release">아디오스 프로 에보 3 한국 출시 글</a>, 프로 5의 구조 설명은 <a href="/blog/adidas-adizero-adios-pro-5-release-2026">아디오스 프로 5 공개 글</a>에 있습니다.</p>

<h2>스택·드롭만 놓고 보면 세 켤레의 성격이 갈린다</h2>

<p>기준점이 달라 성능 %는 비교가 안 되지만, 구조 수치는 브랜드 표기끼리 나란히 볼 수 있습니다. 다만 표기 경로가 제각각이라 출처 열을 같이 읽어야 합니다.</p>

<table>
  <thead>
    <tr><th>신발</th><th>힐 / 전족부 스택</th><th>드롭</th><th>출처</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>나이키 에이펙스</strong></td><td>40mm / 40mm</td><td>0mm</td><td>나이키 보도자료</td></tr>
    <tr><td><a href="/shoes/nike-alphafly-4">알파플라이 4</a></td><td>39mm / 31mm</td><td>8mm</td><td>미디어 브리핑 경로(제품 페이지 표기 아님)</td></tr>
    <tr><td><a href="/shoes/adidas-adios-pro-5">아디오스 프로 5</a></td><td>39mm / 35mm</td><td>4mm</td><td>아디다스 보도자료 편집자 노트</td></tr>
    <tr><td><a href="/shoes/adidas-adios-pro-4">아디오스 프로 4</a></td><td>37mm / 29mm</td><td>8mm</td><td>브랜드 공식(신발 DB)</td></tr>
  </tbody>
</table>

<p>눈에 띄는 것은 <strong>에이펙스가 힐과 전족부를 모두 40mm로 맞춘 제로 드롭</strong>이라는 점입니다. 40mm는 <a href="/blog/nike-alphafly-4-official-specs-2026">알파플라이 4 글</a>에서 다룬 World Athletics의 스택 상한과 같은 숫자입니다. 나이키도 보도자료에서 "오늘의 레이싱 규정 안에서 가능한 것을 다시 그렸다"고 적었습니다. 전족부 스택만 보면 표기상 알파플라이 4(31mm)와 9mm, 아디오스 프로 5(35mm)와 5mm 차이가 나지만, 브랜드가 적은 스택은 실제로 잘라서 재면 대체로 더 낮게 나오기 때문에 <strong>세 신발의 절단 실측이 나오기 전에는 이 차이를 "9mm 더 높다"로 읽으면 안 됩니다.</strong> 제로 드롭이 실제 주행에서 어떻게 작용하는지도 에이펙스 자체의 주행 데이터가 공개된 것이 없어 지금은 알 수 없습니다.</p>

<h2>한국 러너에게 오늘 확정된 것과 아닌 것</h2>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">아직 확정되지 않은 것 (2026년 10월 1일 기준)</p>
    <ul>
      <li><strong>에이펙스 가격</strong> — 나이키 공식 자료에 없습니다. 인스타그램의 한 게시물은 "외부 보도 기준 350달러"라고 전했지만 나이키 공식 확인이 아니므로 이 글에서는 가격으로 쓰지 않습니다</li>
      <li><strong>에이펙스 무게</strong> — 공식 g 표기 없음. 위의 196g 미만은 제가 계산한 <strong>(추정)</strong>입니다</li>
      <li><strong>한국 출시일·정가</strong> — 나이키 코리아에 에이펙스 상품이 없고(검색 결과 0건), 출시일 공지도 없습니다. 글로벌 출시가 2027년 1월이라는 사실만 확정입니다</li>
      <li><strong>알파플라이 4 한국 출시</strong> — 나이키 코리아 검색 결과에 여전히 올라오지 않습니다. 같은 검색에서 알파플라이 3은 정가 339,000원에 할인가로 판매 중이고 일부 품절 표시도 있습니다</li>
      <li><strong>실측 랩 데이터</strong> — 에이펙스·알파플라이 4·아디오스 프로 5 모두 RunRepeat 등 독립 절단 실측이 공개되지 않았습니다</li>
    </ul>
  </div>
</div>

<p>그래서 구매 판단은 시기로 나뉩니다.</p>

<table>
  <thead>
    <tr><th>대회 시점</th><th>지금 살 수 있는 선택지</th><th>근거</th></tr>
  </thead>
  <tbody>
    <tr><td>이번 가을(10~11월)</td><td><a href="/shoes/adidas-adios-pro-5">아디오스 프로 5</a>(339,000원) 또는 할인 중인 <a href="/shoes/nike-alphafly-3">알파플라이 3</a></td><td>한국에서 실제로 구매 가능한 것은 이 둘뿐입니다. 에이펙스는 이번 시즌에 해당이 없습니다</td></tr>
    <tr><td>2027년 봄</td><td>에이펙스를 기다릴지 지금 결정할 필요 없음</td><td>출시가 1월인데 한국 출시일·가격이 없어, 기다려도 언제 어떤 값에 살 수 있을지 지금은 계산 불가입니다</td></tr>
  </tbody>
</table>

<p>알파플라이 3과 베이퍼플라이 4 중 어느 쪽이 맞는지는 <a href="/blog/nike-vaporfly-4-vs-alphafly-3-comparison">베이퍼플라이 4 vs 알파플라이 3 비교 글</a>에 실측 기준으로 정리돼 있습니다.</p>

<h2>다른 1티어 브랜드는 어땠나</h2>

<p>이 글에서 공식 자료로 직접 확인한 브랜드는 <strong>나이키·아디다스·아식스</strong> 세 곳입니다. 아식스는 공식 홈페이지 보도자료 목록(2026년 6월~9월)에서 새 레이싱 플래그십 발표를 찾지 못했습니다. 8월 17일 <a href="/shoes/asics-sonicblast-2">소닉블라스트 2</a> 공개, 8월 26일 블룸스트라이드(여성용), 9월 17일 젤 슬로우쿠쉬가 올라와 있는데 모두 데일리·컴포트 계열입니다. <strong>호카·푸마·뉴발란스·써코니는 이번 글에서 공식 발표를 확인하지 못했습니다(불명).</strong> "나머지 브랜드에 새 레이싱화가 없다"는 뜻이 아니라 확인하지 않았다는 뜻입니다.</p>

<div class="faq">
  <h2>자주 묻는 질문</h2>

  <h3>Q. 에이펙스는 알파플라이 4를 대체하나요?</h3>
  <p>나이키는 대체가 아니라 선택지를 나눴습니다. 보도자료는 레이싱화를 "위계가 아니라 선택지로" 설계했다고 적고, 스우시플라이는 레이스에 처음 나서는 러너, 알파플라이 4는 거리 내내 균형을 원하는 러너, 에이펙스는 마라톤 성능의 끝을 쫓는 러너로 역할을 구분합니다. 세 신발이 동시에 카탈로그에 공존하는 구조이고, 베이퍼플라이는 이번 시스템 발표에 포함되지 않았습니다.</p>

  <h3>Q. 에너지 리턴 40%면 기록이 40% 빨라지나요?</h3>
  <p>아닙니다. 에너지 리턴은 폼이 압축된 뒤 되돌려주는 에너지의 비율을 잰 값이고, 기록 단축과 1 대 1로 연결되지 않습니다. 나이키는 "최대 40%"라고 했고 측정 조건도 자사 실험실입니다. 같은 이유로 아디다스의 9%도 기록 9% 단축이 아닙니다.</p>

  <h3>Q. 에이펙스 가격은 얼마인가요?</h3>
  <p>공식 가격은 공개되지 않았습니다. 일부 게시물이 $350 전후를 언급하지만 나이키 공식 확인이 아니라서 믿고 계산하지 마세요. 한국 가격은 미국 가격을 환산해서 나오지 않는다는 것이 알파플라이 3($295, 339,000원)에서 이미 확인됩니다.</p>

  <h3>Q. 발볼이 넓은데 에이펙스는 괜찮을까요?</h3>
  <p>지금은 답할 수 없습니다. 나이키는 "더 넓은 아웃솔"을 언급했지만 이는 지면 접촉면의 이야기이고 어퍼 폭이나 토박스 폭의 수치가 아닙니다. 폭 실측이 공개되기 전에는 판단을 미루는 게 맞습니다.</p>

  <h3>Q. 지금 아디오스 프로 5를 사도 괜찮을까요?</h3>
  <p>한국에서는 10월 1일 기준 아디다스 코리아 공식몰에서 339,000원에 구매할 수 있습니다. 다만 독립 실측이 아직 없고, 나이키 에이펙스는 2027년 1월 출시라 같은 시즌의 직접 경쟁 상대가 아닙니다. 이번 가을 대회에 쓸 계획이라면 고려할 수 있습니다.</p>
</div>

<p><small>출처: 나이키 뉴스룸 공식 보도자료 "Introducing Nike Apex: The Next Leap in Marathon Speed"(2026-09-30, about.nike.com) · 아디다스 뉴스룸 공식 보도자료 "adidas unveils the Adizero Adios Pro 5"(2026-09-22, news.adidas.com) · 아디다스 코리아 공식몰 아디오스 프로 5(스타일 KI8294, 339,000원, 2026-10-01 확인) · 나이키 코리아 검색 결과(알파플라이 4·에이펙스 상품 없음, 알파플라이 3 정가 339,000원, 2026-10-01 확인) · ASICS 공식 홈페이지 보도자료 목록(corp.asics.com/en/press, 2026-06~09) · 알파플라이 3 무게(나이키 공식 남성 US 10 218g)·알파플라이 4 수치는 이 사이트 <a href="/blog/nike-alphafly-4-official-specs-2026">알파플라이 4 공식 발표 글</a>의 1차 소스 대조 결과. 에이펙스 가격 언급은 2026-09-30 게시된 한 인스타그램 게시물에 따른 미확인 정보입니다. 이 글의 공개일 기준 정보이며 한국 출시 정보는 각 브랜드 공지로 다시 확인하세요.</small></p>
`,
  },
];
