import { BlogPost } from '@/types/blog';
import { MAJOR_DEADLINES, md } from '../major-deadlines';

export const posts_2026_06: BlogPost[] = [
  {
    id: 'salomon-pulsar-vs-ultra-glide-vs-s-lab-trail-2026',
    slug: 'salomon-pulsar-vs-ultra-glide-vs-s-lab-trail-2026',
    title: '살로몬 트레일 3종 비교 | 펄사 vs 울트라 글라이드 4 vs S/LAB 펄사 4 — 근교·울트라·레이싱 뭘 신지',
    description: '한국 트레일 1위 브랜드 살로몬의 핵심 3종 — 펄사(21만, 올라운드 데일리), 울트라 글라이드 4(23만, 맥스쿠션 울트라), S/LAB 펄사 4(34만, 엘리트 기술 레이서). 같은 살로몬이지만 용도·쿠션·발볼·가격이 완전히 갈립니다. 근교 트레일을 빠르게 즐길지, 50km+ 울트라를 푹신하게 갈지, VK·스카이러닝을 레이싱할지 — 내 트레일에 맞는 한 켤레를 골라드립니다.',
    thumbnail: '/images/blog/salomon-pulsar-vs-ultra-glide-vs-s-lab-trail-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-30',
    category: 'review' as const,
    readingTime: 9,
    tags: ['살로몬', '살로몬 펄사', '울트라 글라이드 4', 'S/LAB 펄사', '트레일 러닝화', '트레일화 비교'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>같은 살로몬 트레일이지만 셋은 <strong>용도가 완전히 다릅니다</strong> — <a href="/shoes/salomon-pulsar">펄사</a>는 근교 트레일·도로 겸용 <strong>올라운드 데일리</strong>(21만), <a href="/shoes/salomon-ultra-glide-4">울트라 글라이드 4</a>는 50~100km <strong>맥스쿠션 울트라</strong>(23만), <a href="/shoes/salomon-s-lab-pulsar-4">S/LAB 펄사 4</a>는 VK·스카이러닝용 <strong>엘리트 기술 레이서</strong>(34만)</li>
    <li>핵심 갈림 — <strong>쿠션</strong>은 울트라 글라이드 4(9/10), <strong>경량</strong>은 S/LAB 펄사 4(247g), <strong>가성비·만능</strong>은 펄사. <strong>발볼 넓은 한국 러너는 와이드 옵션이 있는 울트라 글라이드 4</strong>가 사실상 유일한 선택입니다(펄사·S/LAB은 와이드 없음)</li>
    <li><strong>근교 트레일·입문~중급 → 펄사</strong>, <strong>울트라 장거리·발 편함 → 울트라 글라이드 4</strong>, <strong>빠르고 험한 기술 레이스 → S/LAB 펄사 4</strong>입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">⛰️</span>
  <div class="callout-body">
    <p class="callout-title">살로몬은 한국 트레일 1위 브랜드</p>
    <p>트레일 러닝을 시작하면 가장 먼저 듣는 이름이 <strong>살로몬</strong>입니다. Contagrip 아웃솔의 그립과 quickLACE·SensiFit의 발 잠금이 험지에서 검증됐죠. 다만 라인업이 헷갈립니다 — "펄사? 울트라 글라이드? S/LAB?" 이름만 봐선 뭐가 뭔지 모르겠죠. 결론부터 말하면 이 셋은 <strong>"근교 데일리 / 울트라 컴포트 / 기술 레이싱"</strong>으로 역할이 명확히 나뉩니다. 한국 산악 트레일(북한산·관악산처럼 암반·급경사가 많은) 기준으로 어떤 게 내게 맞는지 정리합니다.</p>
  </div>
</div>

<h2>스펙 비교</h2>
<table>
  <thead><tr><th>항목</th><th>펄사</th><th>울트라 글라이드 4</th><th>S/LAB 펄사 4</th></tr></thead>
  <tbody>
    <tr><td><strong>정가</strong></td><td><strong>210,000원</strong></td><td>230,000원</td><td>340,000원</td></tr>
    <tr><td>무게(US 9)</td><td>290g</td><td>295g</td><td><strong>247g</strong></td></tr>
    <tr><td>힐 / 전족 스택</td><td>29 / 23mm</td><td><strong>39 / 31mm</strong></td><td>33 / 26mm</td></tr>
    <tr><td>드롭</td><td>6mm</td><td>8mm</td><td>7mm</td></tr>
    <tr><td>미드솔</td><td>optiFOAM2 (eTPU)</td><td>OptiFoam + RelieveSphere</td><td>optiFOAM+ PEBA 듀얼</td></tr>
    <tr><td>쿠션 / 반응</td><td>6 / 7</td><td><strong>9</strong> / 5</td><td>7 / 7</td></tr>
    <tr><td>러그(아웃솔)</td><td>4mm</td><td>3.9mm</td><td>3mm</td></tr>
    <tr><td>발볼 / 와이드</td><td>좁음 · <strong>없음</strong></td><td>좁음 · <strong>와이드 O</strong></td><td>표준(74mm) · 없음</td></tr>
    <tr><td>내구성 / km당</td><td>500km / 약 420원</td><td>450km / 약 511원</td><td>350km / 약 971원</td></tr>
    <tr><td>주력 거리</td><td>하프~40km</td><td>50~100km</td><td>20~80km 기술</td></tr>
  </tbody>
</table>
<p><small>※ 무게·스택은 전문 리뷰(BITR·RTR) 실측, 가격은 살로몬 코리아 공식 정가. 세 모델 모두 카본 플레이트는 없습니다(폼·구조 추진).</small></p>

<h2>핵심 차이 3가지</h2>
<h3>① 용도 — 거리와 지형이 다르다</h3>
<p><strong>펄사</strong>는 단종된 센스 라이드의 후속으로, <strong>근교 트레일을 빠르게 즐기고 도로까지 겸용</strong>하는 만능 데일리입니다. 29mm 스택에 6mm 드롭으로 경쾌해 업템포 트레일 훈련에 맞죠. <strong>울트라 글라이드 4</strong>는 정반대로 <strong>50~100km 울트라를 푹신하게</strong> 가는 컴포트화고, <strong>S/LAB 펄사 4</strong>는 <strong>VK·스카이러닝처럼 빠르고 험한 기술 코스</strong>를 레이싱하는 엘리트용입니다. "어떤 트레일을, 얼마나 멀리"가 먼저 정해져야 답이 나옵니다.</p>

<h3>② 쿠션 vs 스피드 — 정반대의 두 극단</h3>
<p>울트라 글라이드 4는 <strong>41mm 스택 + RelieveSphere 충격분산</strong>으로 "바위 위가 평지보다 편하다"는 평이 나올 만큼 쿠션이 강합니다(쿠션 9/10). 대신 에너지 리턴이 낮아(47~51%) 빠른 페이스엔 둔하죠. 반대로 S/LAB 펄사 4는 <strong>247g 초경량 + optiFOAM+ PEBA</strong>로 발놀림이 빠르고 급경사 제어가 정밀합니다. 펄사는 그 중간에서 쿠션과 반응의 균형을 잡습니다. <strong>"편하게 오래"면 울트라 글라이드, "빠르고 가볍게"면 S/LAB</strong>입니다.</p>

<h3>③ 발볼·가격 — 한국 러너에겐 발볼이 결정적</h3>
<p>살로몬은 전통적으로 <strong>발볼이 좁기로</strong> 유명합니다. 펄사는 전족부가 좁고 낮은데 <strong>와이드 옵션이 없어</strong> 발볼 넓은 한국 러너에겐 불편할 수 있고, S/LAB 펄사 4는 토박스가 74mm로 전작보다 넓어졌지만 역시 와이드는 없습니다. <strong>울트라 글라이드 4만 와이드 옵션(한국 공식몰)이 있어</strong>, 발볼이 넓다면 사실상 이 모델이 답입니다. 가격은 펄사(21만) → 울트라 글라이드(23만) → S/LAB(34만) 순으로, S/LAB은 350km 내구성에 km당 약 971원이라 <strong>레이스 전용 운용</strong>이 전제입니다.</p>

<div class="callout success">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">한 줄 정리</p>
    <p><strong>펄사 = 근교 트레일·도로 겸용 가성비 올라운더</strong>(트레일 입문~중급의 첫 한 켤레). <strong>울트라 글라이드 4 = 맥스쿠션 울트라 컴포트</strong>(50km+ 장거리, 발볼 넓어도 와이드로 OK). <strong>S/LAB 펄사 4 = 빠르고 험한 기술 레이스용 엘리트 경량</strong>(VK·스카이러닝, 고가). 세 모델 모두 카본은 없지만 살로몬 특유의 그립·발 잠금은 공통입니다.</p>
  </div>
</div>

<h2>누가 어느 쪽?</h2>
<table>
  <thead><tr><th>이런 러너라면</th><th>추천</th></tr></thead>
  <tbody>
    <tr><td>트레일 입문~중급 · 근교 위주 · 도로도 함께 뛴다</td><td><strong>펄사</strong></td></tr>
    <tr><td>50~100km 울트라 · 발 편함이 최우선</td><td><strong>울트라 글라이드 4</strong></td></tr>
    <tr><td>발볼이 넓다 (와이드 필요)</td><td><strong>울트라 글라이드 4</strong> (펄사·S/LAB은 와이드 없음)</td></tr>
    <tr><td>VK·스카이러닝·기술 코스 레이싱 · 경량 우선</td><td><strong>S/LAB 펄사 4</strong></td></tr>
    <tr><td>가성비 · 한 켤레로 두루</td><td><strong>펄사</strong> (21만, 500km)</td></tr>
  </tbody>
</table>

<h2>한국 러너 관점 FAQ</h2>
<div class="faq">
  <p class="faq-q">Q. 트레일 입문인데 셋 중 뭘 사야 하나요?</p>
  <p class="faq-a">A. <strong>펄사</strong>입니다. 근교 트레일과 도로를 겸할 수 있고, 21만원으로 가장 합리적이며, 290g 경량이라 부담이 적습니다. 울트라 글라이드는 입문자에게 과한 쿠션·거리용이고, S/LAB은 엘리트 레이스 전용이라 입문용이 아닙니다. 트레일이 처음이라면 <a href="/blog/trail-running-appeal-beginner-guide-2026">트레일 러닝 입문 가이드</a>도 함께 보세요.</p>
  <p class="faq-q">Q. 발볼이 넓은데 살로몬 신어도 되나요?</p>
  <p class="faq-a">A. 살로몬은 전반적으로 좁습니다. 발볼이 넓다면 <strong>와이드 옵션이 있는 울트라 글라이드 4</strong>가 사실상 유일한 선택입니다. 펄사와 S/LAB은 와이드가 없어, 발볼 넓은 러너는 장거리에서 새끼발가락 눌림이 올 수 있습니다.</p>
  <p class="faq-q">Q. 북한산·관악산 같은 암반 코스엔 어떤 게 좋나요?</p>
  <p class="faq-a">A. 펄사는 록플레이트가 없어 날카로운 암반에서 발바닥 보호가 약합니다. <strong>암반 충격이 걱정되면 RelieveSphere로 충격을 분산하는 울트라 글라이드 4</strong>, 빠른 기술 주행이면 Active Chassis로 제어가 좋은 <strong>S/LAB 펄사 4</strong>가 낫습니다. 단 셋 다 젖은 바위·진흙에서는 그립에 한계가 있으니 우천 시 주의하세요.</p>
  <p class="faq-q">Q. 살로몬 말고 다른 트레일화 대안은?</p>
  <p class="faq-a">A. 만능 그립이면 <a href="/shoes/hoka-speedgoat-6">호카 스피드고트 6</a>, 카본 트레일 레이서면 <a href="/shoes/hoka-tecton-x-3">호카 테크톤 X 3</a>, 빠른 울트라면 <a href="/shoes/adidas-terrex-agravic-speed-ultra">아디다스 테렉스 아그라빅 스피드 울트라</a>가 대표 대안입니다. 한국 산악 기준 트레일화 전체 순위는 <a href="/blog/2026-best-trail-running-shoes">2026 트레일 러닝화 TOP 7</a>에서 정리했습니다.</p>
</div>

<div class="callout info">
  <span class="callout-icon">🔗</span>
  <div class="callout-body">
    <p class="callout-title">한 걸음 더</p>
    <p>각 모델 전체 스펙·구매 링크는 <a href="/shoes/salomon-pulsar">펄사</a> · <a href="/shoes/salomon-ultra-glide-4">울트라 글라이드 4</a> · <a href="/shoes/salomon-s-lab-pulsar-4">S/LAB 펄사 4</a> 상세에서 확인하세요. 트레일화를 더 넓게 비교하려면 <a href="/best/trail">트레일 베스트</a>와 <a href="/blog/2026-best-trail-running-shoes">트레일 러닝화 TOP 7</a>, 대회를 찾는다면 <a href="/blog/korea-trail-skyrace-guide-2026">한국 트레일·스카이레이스 가이드</a>를 보세요. 내 발·목적 추천은 <a href="/recommend">맞춤 추천</a>을 이용하세요.</p>
  </div>
</div>

<p class="post-disclaimer"><small>※ 가격은 살로몬 코리아 공식 정가 기준이며 시기·채널에 따라 달라질 수 있습니다. 무게·스택 등은 전문 리뷰(Believe in the Run·Road Trail Run) 실측 기준이며, 일부 모델은 RunRepeat 정량 랩이 미게시된 신모델로 공식·전문 리뷰를 종합했습니다.</small></p>
`,
  },
  {
    id: 'running-shoe-size-conversion-chart-korea-2026',
    slug: 'running-shoe-size-conversion-chart-korea-2026',
    title: '러닝화 사이즈 변환표 (US·cm·EU·UK) | "US 9는 몇 mm?" — 한국 러너가 정사이즈 고르는 법',
    description: '나이키 US 9는 270mm, 아디다스 UK 8.5는? 헷갈리는 러닝화 사이즈를 US·cm(mm)·EU·UK로 한 번에 변환합니다. 핵심은 숫자 암기가 아니라 "내 발 길이(mm) + 러닝 여유 5~10mm"로 고르는 것. 발 길이 재는 법, 러닝화는 왜 크게 신는지, 브랜드별 핏 편차(나이키는 좁고 뉴발은 넉넉)까지 한국 러너 기준으로 정리합니다.',
    thumbnail: '/images/blog/running-shoe-size-conversion-chart-korea-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-30',
    category: 'guide' as const,
    readingTime: 8,
    tags: ['러닝화 사이즈', '신발 사이즈 변환', 'US 사이즈', '발 길이 측정', '러닝화 핏', '사이즈 가이드'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>러닝화 사이즈는 <strong>US·EU·UK 숫자를 외울 필요 없이 "내 발 길이(mm)"</strong> 하나만 알면 됩니다. 한국 표기(mm)가 곧 발 실측 길이 기준이라 가장 직관적입니다</li>
    <li><strong>러닝화는 평소 신발보다 5~10mm 크게</strong> 신는 게 정석입니다 — 장거리·내리막에서 발이 붓고 앞으로 쏠려, 엄지발가락 앞에 약 1cm 여유가 없으면 발톱이 멍들거나 빠집니다</li>
    <li><strong>길이(사이즈)는 브랜드 간 큰 차이가 없지만 발볼·볼륨은 다릅니다</strong> — 나이키·아디다스는 좁은 편, 뉴발란스·미즈노는 넉넉, 아식스는 표준. 발볼이 고민이면 사이즈업보다 <strong>와이드</strong>가 정답입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">📏</span>
  <div class="callout-body">
    <p class="callout-title">"US 9가 도대체 몇 mm야?"</p>
    <p>해외 직구나 리뷰를 보다 보면 US·EU·UK 사이즈가 뒤섞여 헷갈리죠. 결론부터 말하면 — <strong>한국 mm 표기가 발 길이(mondopoint) 기준이라 가장 정확</strong>합니다. US 9 ≒ 270mm, US 10 ≒ 280mm처럼요. 아래 변환표로 한 번에 맞춰보고, 그다음 "내 발에 맞게 고르는 법"까지 정리하겠습니다.</p>
  </div>
</div>

<h2>사이즈 변환표 (남성)</h2>
<table>
  <thead><tr><th>cm(mm)</th><th>US</th><th>EU</th><th>UK</th></tr></thead>
  <tbody>
    <tr><td>250mm</td><td>7</td><td>40</td><td>6</td></tr>
    <tr><td>255mm</td><td>7.5</td><td>40.5</td><td>6.5</td></tr>
    <tr><td>260mm</td><td>8</td><td>41</td><td>7</td></tr>
    <tr><td>265mm</td><td>8.5</td><td>42</td><td>7.5</td></tr>
    <tr><td><strong>270mm</strong></td><td><strong>9</strong></td><td><strong>42.5</strong></td><td><strong>8</strong></td></tr>
    <tr><td>275mm</td><td>9.5</td><td>43</td><td>8.5</td></tr>
    <tr><td>280mm</td><td>10</td><td>44</td><td>9</td></tr>
    <tr><td>285mm</td><td>10.5</td><td>44.5</td><td>9.5</td></tr>
    <tr><td>290mm</td><td>11</td><td>45</td><td>10</td></tr>
    <tr><td>295mm</td><td>11.5</td><td>45.5</td><td>10.5</td></tr>
    <tr><td>300mm</td><td>12</td><td>46</td><td>11</td></tr>
  </tbody>
</table>

<h2>사이즈 변환표 (여성)</h2>
<table>
  <thead><tr><th>cm(mm)</th><th>US</th><th>EU</th><th>UK</th></tr></thead>
  <tbody>
    <tr><td>225mm</td><td>5.5</td><td>36</td><td>3.5</td></tr>
    <tr><td>230mm</td><td>6</td><td>36.5</td><td>4</td></tr>
    <tr><td>235mm</td><td>6.5</td><td>37.5</td><td>4.5</td></tr>
    <tr><td>240mm</td><td>7</td><td>38</td><td>5</td></tr>
    <tr><td>245mm</td><td>7.5</td><td>38.5</td><td>5.5</td></tr>
    <tr><td>250mm</td><td>8</td><td>39</td><td>6</td></tr>
    <tr><td>255mm</td><td>8.5</td><td>40</td><td>6.5</td></tr>
    <tr><td>260mm</td><td>9</td><td>40.5</td><td>7</td></tr>
    <tr><td>265mm</td><td>9.5</td><td>41</td><td>7.5</td></tr>
    <tr><td>270mm</td><td>10</td><td>42</td><td>8</td></tr>
  </tbody>
</table>
<p><small>※ 일반적인 변환 기준입니다. 브랜드·모델에 따라 EU·UK 표기가 ±0.5 정도 다를 수 있으니, mm(발 길이)를 기준으로 보는 게 가장 안전합니다.</small></p>

<h2>내 발 길이부터 재자 (1분)</h2>
<p>변환표를 제대로 쓰려면 <strong>내 발 길이(mm)</strong>를 정확히 알아야 합니다.</p>
<ol>
  <li>벽에 발뒤꿈치를 붙이고 <strong>종이 위에 선다</strong>(체중을 실어야 정확)</li>
  <li>가장 긴 발가락 끝에 <strong>수직으로 선을 긋는다</strong></li>
  <li>뒤꿈치~선까지 거리를 mm로 잰다 → 그게 <strong>내 발 길이</strong></li>
  <li><strong>양발을 다 재서 더 큰 쪽</strong>을 기준으로(보통 좌우 차이가 있음)</li>
  <li><strong>저녁에 측정</strong>한다 — 발은 오후·저녁에 붓기 때문</li>
</ol>

<div class="callout success">
  <span class="callout-icon">👟</span>
  <div class="callout-body">
    <p class="callout-title">러닝화 = 발 길이 + 5~10mm</p>
    <p>러닝화는 평소 구두·캐주얼화보다 <strong>5~10mm 크게</strong> 신습니다. 예를 들어 발 길이가 263mm라면, 러닝화는 <strong>270mm(US 9)</strong>가 보통 맞습니다. 이유는 — 달릴 때 발이 앞으로 쏠리고(특히 내리막), 장거리에서 발이 붓기 때문입니다. <strong>엄지발가락 끝과 신발 앞 사이에 약 1cm(엄지손가락 너비)</strong>의 여유가 기준이에요. 이 여유가 없으면 발톱이 검게 멍들거나 빠지는 "러너 발톱"이 생깁니다.</p>
  </div>
</div>

<h2>브랜드별 핏 편차 — 길이는 같아도 발볼이 다르다</h2>
<p>같은 270mm라도 브랜드마다 <strong>발볼(가로폭)과 볼륨</strong>이 달라 체감 핏이 다릅니다. 길이 자체는 표준에 가깝지만, 발볼 넓은 한국 러너는 이 차이가 중요합니다.</p>
<table>
  <thead><tr><th>브랜드</th><th>발볼·핏 경향</th></tr></thead>
  <tbody>
    <tr><td><strong>나이키</strong></td><td>좁은 편 — 발볼 넓으면 압박, 와이드 옵션도 적음</td></tr>
    <tr><td><strong>아디다스</strong></td><td>좁은 편 (특히 아디제로 레이싱 라인)</td></tr>
    <tr><td><strong>아식스</strong></td><td>표준~약간 넉넉, 와이드 옵션 다양</td></tr>
    <tr><td><strong>뉴발란스</strong></td><td>넉넉 + 2E/4E 와이드가 가장 풍부</td></tr>
    <tr><td><strong>호카</strong></td><td>토박스는 좁은 편이나 길이는 정사이즈, 와이드 있음</td></tr>
    <tr><td><strong>미즈노·브룩스</strong></td><td>대체로 넉넉한 편</td></tr>
    <tr><td><strong>온(On)</strong></td><td>좁은 편 + 와이드 옵션 거의 없음</td></tr>
  </tbody>
</table>
<p>발볼이 넓다면 <strong>사이즈를 올리는 것보다 와이드(2E·4E)를 고르는 게 정답</strong>입니다. 사이즈업하면 발볼은 조금 넓어지지만 길이가 헐렁해져 발이 신발 안에서 놀고, 오히려 물집·발톱 문제가 생깁니다. 자세한 건 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 가이드</a>를 보세요.</p>

<h2>사이즈 고를 때 체크 5</h2>
<table>
  <thead><tr><th>체크</th><th>이유</th></tr></thead>
  <tbody>
    <tr><td>발 길이 + 5~10mm</td><td>발가락 앞 1cm 여유 (발 쏠림·붓기)</td></tr>
    <tr><td>저녁에 신어보기</td><td>오후·저녁에 발이 가장 큼</td></tr>
    <tr><td>러닝 양말 신고 측정</td><td>두꺼운 양말이면 핏이 달라짐</td></tr>
    <tr><td>발볼 넓으면 와이드 우선</td><td>사이즈업은 길이만 헐렁해짐</td></tr>
    <tr><td>양발 큰 쪽 기준</td><td>좌우 발은 보통 다름</td></tr>
  </tbody>
</table>

<h2>한국 러너 FAQ</h2>
<div class="faq">
  <p class="faq-q">Q. 평소 270mm 신는데 러닝화도 270mm 사면 되나요?</p>
  <p class="faq-a">A. 평소 신발이 이미 여유 있게 270이면 맞을 수 있지만, 발 실측이 263mm 같은 식이라면 러닝화는 270~275를 권합니다. 핵심은 "내가 신던 사이즈"가 아니라 <strong>발 실측 + 5~10mm</strong>입니다. 모델·브랜드마다 다르니 가능하면 착화 후 결정하세요.</p>
  <p class="faq-q">Q. US랑 mm 중 뭘 믿어야 하나요?</p>
  <p class="faq-a">A. <strong>mm(발 길이)를 믿으세요.</strong> US·EU·UK는 브랜드마다 표기가 조금씩 달라 ±0.5 오차가 생깁니다. 반면 mm는 발 실측 기준이라 가장 일관적입니다. 직구할 때도 그 모델의 "mm 표기"를 찾아 맞추는 게 안전합니다.</p>
  <p class="faq-q">Q. 발볼이 넓은데 반 사이즈 올리면 되나요?</p>
  <p class="faq-a">A. 임시방편은 되지만 권하지 않습니다. 사이즈업은 길이가 같이 늘어 발이 신발 안에서 미끄러지고, 장거리에서 물집·발톱 문제를 키웁니다. <a href="/blog/wide-feet-running-shoes-korea">와이드(2E·4E) 옵션</a>이 있는 모델을 고르는 게 정답입니다.</p>
  <p class="faq-q">Q. 발 길이 모르면 어떻게 시작하나요?</p>
  <p class="faq-a">A. 위 "발 길이 재기" 1분 측정을 먼저 하세요. 그게 어렵다면, 발볼·아치·목적을 입력하면 후보를 추려주는 <a href="/recommend">맞춤 추천</a>으로 방향부터 잡아도 됩니다.</p>
</div>

<div class="callout info">
  <span class="callout-icon">🔗</span>
  <div class="callout-body">
    <p class="callout-title">한 걸음 더</p>
    <p>발볼이 고민이면 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 가이드</a>, 평발·과내전이면 <a href="/blog/stability-running-shoes-overpronation-flat-feet-2026">안정화 가이드</a>를 보세요. 발 조건·목적에 맞는 신발 후보는 <a href="/recommend">맞춤 추천</a>에서, 여러 모델을 핏·스펙으로 나란히 보려면 <a href="/compare">비교 도구</a>를 이용하세요.</p>
  </div>
</div>

<p class="post-disclaimer"><small>※ 변환표는 일반적 기준이며 브랜드·모델에 따라 ±0.5 사이즈 차이가 날 수 있습니다. 가능하면 구매 전 착화를 권장하며, 직구 시 해당 모델의 mm(발 길이) 표기를 기준으로 맞추세요.</small></p>
`,
  },
  {
    id: 'it-band-syndrome-running-shoes-2026',
    slug: 'it-band-syndrome-running-shoes-2026',
    title: 'IT밴드 증후군(장경인대) 완전 가이드 | 무릎 바깥쪽이 콕콕 — 원인·자가진단·회복과 신발의 진짜 역할',
    description: '러너의 무릎 바깥쪽 통증 1위 원인, IT밴드 증후군(장경인대 증후군). "늘 3~4km쯤 되면 무릎 옆이 아프고 내리막에서 심해진다"면 의심해야 합니다. 둔근 약화·거리 급증·낮은 케이던스가 진짜 원인이고, 신발은 보조일 뿐입니다. 자가진단 체크리스트부터 둔근 강화·케이던스 교정·회복 루틴, 그리고 신발이 도울 수 있는 부분과 없는 부분까지 솔직하게 정리합니다.',
    thumbnail: '/images/blog/it-band-syndrome-running-shoes-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-30',
    category: 'guide' as const,
    readingTime: 9,
    tags: ['IT밴드', '장경인대', '무릎 바깥쪽 통증', '러닝 부상', '러닝 무릎', '부상 예방'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>IT밴드 증후군은 러너의 무릎 "바깥쪽" 통증 1위 원인</strong>입니다. 장경인대가 무릎 외측에서 반복 마찰되며 염증이 생기는 과사용 부상으로, <strong>늘 비슷한 거리(예: 3~4km)에서 시작되고 내리막·계단에서 심해지는 게 특징</strong>입니다</li>
    <li>진짜 원인은 신발이 아니라 <strong>둔근(엉덩이 근육) 약화 · 주행거리 갑작스런 증가 · 낮은 케이던스(보폭 과대)</strong>입니다. 그래서 해결도 <strong>둔근 강화 + 케이던스 교정 + 점진적 복귀</strong>가 핵심입니다</li>
    <li><strong>신발은 보조 역할</strong>입니다 — 과내전이 심하면 안정화화가, 닳은 신발이면 교체가 도움이 되지만, "신발만 바꾸면 낫는다"는 기대는 금물입니다</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">⚕️</span>
  <div class="callout-body">
    <p class="callout-title">먼저 — 이 글은 일반 정보입니다</p>
    <p>아래 내용은 러너를 위한 일반적인 정보로, 의학적 진단을 대체하지 않습니다. <strong>통증이 2주 이상 지속되거나, 부었거나, 일상생활에서도 아프다면</strong> 정형외과·스포츠의학과 전문의 진료를 받으세요. 특히 무릎 안쪽이나 관절 깊은 곳 통증은 IT밴드가 아닌 다른 문제일 수 있습니다.</p>
  </div>
</div>

<h2>IT밴드 증후군이 뭔가요</h2>
<p><strong>IT밴드(장경인대, Iliotibial Band)</strong>는 골반 바깥쪽에서 무릎 바깥쪽까지 허벅지 옆면을 따라 길게 이어지는 두꺼운 결합조직 띠입니다. 달릴 때 무릎을 굽혔다 펴는 동작이 반복되면, 이 띠가 <strong>무릎 외측의 뼈 돌출부(대퇴골 외측상과)와 계속 마찰</strong>합니다. 평소엔 문제없지만, 마찰이 과해지면 그 부위에 염증과 통증이 생기죠. 이게 <strong>IT밴드 증후군(ITBS)</strong>이고, 러너의 무릎 바깥쪽 통증에서 가장 흔한 원인입니다.</p>

<h2>자가진단 — 이런 통증이라면 의심</h2>
<table>
  <thead><tr><th>체크 항목</th><th>IT밴드 증후군 가능성</th></tr></thead>
  <tbody>
    <tr><td>통증 위치가 <strong>무릎 "바깥쪽"</strong>(새끼발가락 방향)</td><td>높음 ✓</td></tr>
    <tr><td>늘 <strong>비슷한 거리·시간</strong>에서 통증이 시작된다</td><td>높음 ✓</td></tr>
    <tr><td><strong>내리막·계단 내려갈 때</strong> 더 아프다</td><td>높음 ✓</td></tr>
    <tr><td>달릴 땐 아픈데 <strong>쉬면 금방 가라앉는다</strong></td><td>높음 ✓</td></tr>
    <tr><td>무릎 <strong>안쪽</strong>이나 관절 <strong>깊은 곳</strong>이 아프다</td><td>낮음 — 다른 원인 의심</td></tr>
    <tr><td>붓거나, 가만히 있어도 욱신거린다</td><td>낮음 — 전문의 진료 권장</td></tr>
  </tbody>
</table>
<p>위쪽 4가지에 해당한다면 IT밴드 증후군일 가능성이 큽니다. 무릎 <strong>앞쪽</strong> 통증(슬개골 주변)이라면 다른 문제(러너스 니 등)일 수 있으니 구분이 필요합니다.</p>

<h2>진짜 원인 3가지 — 신발이 아닙니다</h2>
<h3>① 둔근(엉덩이 근육) 약화 — 가장 흔한 원인</h3>
<p>중둔근이 약하면 착지할 때 <strong>골반이 무너지고 무릎이 안쪽으로 쏠립니다.</strong> 그러면 IT밴드의 마찰이 커지죠. 사실상 IT밴드 증후군의 가장 흔한 뿌리입니다. 책상에 오래 앉아 둔근이 "잠든" 한국 직장인 러너에게 특히 많습니다. <strong>해결의 80%는 둔근 강화</strong>라고 봐도 됩니다.</p>

<h3>② 주행거리 갑작스런 증가</h3>
<p>"이번 주부터 열심히 해야지" 하고 거리를 확 늘리면 IT밴드가 적응할 시간이 없습니다. <strong>주간 거리는 한 번에 10% 이상 늘리지 않는 게 원칙</strong>입니다. 대회를 앞두고 무리하게 거리를 쌓다가 터지는 경우가 정말 많습니다.</p>

<h3>③ 낮은 케이던스(보폭 과대)</h3>
<p>분당 발걸음 수(케이던스)가 낮으면 보폭이 커지고, 발이 몸보다 앞에 착지(오버스트라이드)하면서 무릎 충격과 IT밴드 마찰이 커집니다. <strong>케이던스를 5~10% 높이면(보폭을 줄이면) IT밴드 부담이 눈에 띄게 줄어듭니다.</strong> 구체적인 방법은 <a href="/blog/running-cadence-guide-2026">러닝 케이던스 가이드</a>에서 다뤘습니다.</p>

<h2>회복·예방 루틴</h2>
<div class="callout success">
  <span class="callout-icon">🦵</span>
  <div class="callout-body">
    <p class="callout-title">통증이 있을 때 (급성기)</p>
    <p><strong>1) 달리기를 줄이거나 멈춥니다</strong> — 참고 뛰면 만성화됩니다. 통증 없이 걷는 수준까지 회복 후 복귀하세요. <strong>2) 둔근·대퇴 외측을 폼롤러로 이완</strong>합니다(IT밴드 띠 자체를 세게 미는 것보다 둔근·허벅지 옆 근육을 푸는 게 효과적 — IT밴드는 거의 늘어나지 않습니다). <strong>3) 내리막·계단을 피합니다</strong>(마찰 최대 구간).</p>
  </div>
</div>
<p><strong>근본 해결 — 둔근 강화 3종</strong>(통증이 가라앉으면 시작):</p>
<ul>
  <li><strong>클램셸</strong>: 옆으로 누워 무릎 굽힌 채 위쪽 무릎만 조개처럼 벌리기 (중둔근)</li>
  <li><strong>사이드 레그 레이즈</strong>: 옆으로 누워 다리를 곧게 들어올리기</li>
  <li><strong>힙 힌지·싱글레그 데드리프트</strong>: 한 발로 균형 잡으며 둔근·고관절 안정성</li>
</ul>
<p>주 3회, 한 달만 꾸준히 해도 재발률이 크게 떨어집니다. 달리기 전 <a href="/blog/running-warmup-cooldown-guide-2026">동적 워밍업</a>으로 둔근을 "깨우는" 것도 예방에 좋습니다.</p>

<h2>신발의 진짜 역할 — 보조, 그 이상도 이하도 아닙니다</h2>
<p>"IT밴드 아픈데 무슨 신발 신어요?"라는 질문을 많이 받습니다. 솔직히 말하면 <strong>신발은 IT밴드 증후군을 "고치는" 도구가 아닙니다.</strong> 근력과 폼이 핵심이죠. 다만 신발이 <strong>악화 요인을 줄여줄</strong> 수는 있습니다.</p>
<table>
  <thead><tr><th>상황</th><th>신발 선택</th></tr></thead>
  <tbody>
    <tr><td>발이 안쪽으로 무너지는 과내전이 있다</td><td>가벼운 <strong>안정화화</strong> — <a href="/shoes/hoka-arahi-8">호카 아라히 8</a>, <a href="/shoes/brooks-adrenaline-gts-25">브룩스 아드레날린 GTS 25</a></td></tr>
    <tr><td>충격이 부담된다 / 회복기 조깅</td><td>충분한 <strong>쿠션화</strong> — <a href="/shoes/asics-gel-nimbus-28">아식스 님버스 28</a>, <a href="/shoes/hoka-bondi-9">호카 본디 9</a></td></tr>
    <tr><td>신발 밑창이 한쪽만 닳았다</td><td>마모된 신발은 <strong>교체</strong> (틀어진 정렬이 마찰을 키움)</td></tr>
    <tr><td>특별한 발 문제가 없다</td><td>신발보다 <strong>둔근 강화·케이던스</strong>에 집중</td></tr>
  </tbody>
</table>
<p>과내전 여부가 헷갈린다면 <a href="/recommend">맞춤 추천</a>에서 발 유형을 입력해 후보를 받아보세요. 단, 다시 강조하면 <strong>신발은 보조</strong>입니다 — 둔근 운동을 건너뛰고 신발만 바꾸면 재발합니다.</p>

<div class="callout info">
  <span class="callout-icon">🔗</span>
  <div class="callout-body">
    <p class="callout-title">다른 러닝 부상도 함께 보기</p>
    <p>무릎·다리 통증은 부위별로 원인이 다릅니다 — 정강이 안쪽이면 <a href="/blog/shin-splints-running-shoes-2026">신스플린트</a>, 발뒤꿈치·발바닥이면 <a href="/blog/plantar-fasciitis-running-shoes-2026">족저근막염</a>, 아킬레스건이면 <a href="/blog/achilles-tendon-running-shoes-prevention-2026">아킬레스건염</a>, 무릎 충격 전반이면 <a href="/blog/max-cushion-running-shoes-knee-protection-2026">맥스 쿠션 가이드</a>를 참고하세요.</p>
  </div>
</div>

<h2>한국 러너 FAQ</h2>
<div class="faq">
  <p class="faq-q">Q. 신발만 바꾸면 IT밴드 통증이 나을까요?</p>
  <p class="faq-a">A. 아닙니다. 신발은 과내전·충격 같은 악화 요인을 줄여주는 보조일 뿐, 근본 원인(둔근 약화·낮은 케이던스)을 해결하진 못합니다. 둔근 강화 운동을 병행하지 않으면 어떤 신발을 신어도 재발하기 쉽습니다.</p>
  <p class="faq-q">Q. 폼롤러로 IT밴드를 세게 밀면 되나요?</p>
  <p class="faq-a">A. IT밴드 띠 자체는 매우 단단해 거의 늘어나지 않습니다. 세게 밀면 아프기만 하고 효과는 제한적이에요. 그보다 <strong>둔근(엉덩이)·대퇴근막장근·허벅지 옆 근육</strong>을 풀어주는 게 마찰을 줄이는 데 더 효과적입니다.</p>
  <p class="faq-q">Q. 얼마나 쉬어야 하나요?</p>
  <p class="faq-a">A. 정해진 기간은 없지만, <strong>통증 없이 걸을 수 있을 때까지</strong> 달리기를 줄이는 게 기본입니다. 보통 가벼우면 1~2주, 만성화됐으면 더 걸립니다. 쉬는 동안 둔근 운동·수영·자전거(통증 없는 범위)로 체력을 유지하세요. 아픈 걸 참고 뛰면 회복이 훨씬 길어집니다.</p>
  <p class="faq-q">Q. 다 나으면 바로 예전 거리로 돌아가도 되나요?</p>
  <p class="faq-a">A. 안 됩니다. 통증이 사라져도 한 번에 거리를 늘리면 재발합니다. 짧은 거리부터 시작해 <strong>주간 10% 룰</strong>로 천천히 늘리고, 내리막·한 방향 트랙 반복은 당분간 피하세요.</p>
</div>

<div class="callout info">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">핵심 정리</p>
    <p>IT밴드 증후군은 <strong>"무릎 바깥쪽 + 일정 거리에서 시작 + 내리막 악화"</strong>가 신호입니다. 해결의 순서는 <strong>① 통증 시 휴식 → ② 둔근 강화 → ③ 케이던스 교정 → ④ 점진적 복귀</strong>이고, 신발은 그다음입니다. 케이던스 교정은 <a href="/blog/running-cadence-guide-2026">케이던스 가이드</a>, 발 유형별 신발은 <a href="/recommend">맞춤 추천</a>에서 이어 보세요.</p>
  </div>
</div>

<p class="post-disclaimer"><small>※ 본 글은 일반적인 정보 제공 목적이며 의학적 진단·치료를 대체하지 않습니다. 통증이 지속·악화되면 반드시 전문의와 상담하세요.</small></p>
`,
  },
  {
    id: 'saucony-endorphin-elite-3-preview-2026',
    slug: 'saucony-endorphin-elite-3-preview-2026',
    title: '써코니 엔돌핀 엘리트 3 출시 (7/1) | 엘리트 2 대비 뭐가 바뀌나 — 안정성·발볼 손본 신형 카본 레이서',
    description: '써코니 최상위 카본 레이싱화 엔돌핀 엘리트 3가 2026년 7월 1일 한국 출시됩니다(정가 36.9만). RunRepeat 역대 최고 80%대 반발의 IncrediRUN 폼은 그대로 두고, 전작 엘리트 2의 약점이던 낮은 안정성과 좁은 토박스를 정조준해 손봤습니다. 측면 컷아웃 제거·포크형 카본 플레이트·직각형 와이드 토박스로 바뀐 변경점을 전작과 나란히 정리하고, 발볼 넓은 한국 러너가 살지 기다릴지 판단을 도와드립니다.',
    thumbnail: '/images/blog/saucony-endorphin-elite-3-preview-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-30',
    category: 'review' as const,
    readingTime: 8,
    tags: ['엔돌핀 엘리트3', '써코니 엔돌핀', '카본 레이싱화', '신상 러닝화', '엔돌핀 엘리트2', '러닝화 출시'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><a href="/shoes/saucony-endorphin-elite-3">써코니 엔돌핀 엘리트 3</a>가 <strong>2026년 7월 1일 한국 출시</strong>(정가 36.9만). RunRepeat 역대 최고 <strong>80%대 반발의 IncrediRUN 폼은 계승</strong>하면서, 전작의 약점만 손봤습니다</li>
    <li>핵심 변경 — ① <strong>측면 컷아웃 제거</strong>로 안정성 개선 ② <strong>카본 플레이트 포크형 재설계</strong>로 추진력↑ ③ <strong>토박스가 직각형으로 넓어져</strong> 발볼 넓은 한국 러너에게 <a href="/shoes/saucony-endorphin-elite-2">엘리트 2</a>(narrow 71mm)보다 우호적. 대가는 <strong>무게 +10g(197→207g)</strong></li>
    <li><strong>서브3 도전 + 발볼이 부담이던 러너에겐 반가운 업데이트</strong>입니다. 단 RunRepeat 랩 데이터는 아직 미게시라 충격흡수·에너지 리턴 수치는 엘리트 2 기준 추정입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🆕</span>
  <div class="callout-body">
    <p class="callout-title">엔돌핀 엘리트 3, 7월 1일 한국 상륙</p>
    <p>써코니 라인업의 꼭대기 — 카본 마라톤 레이싱화 <a href="/shoes/saucony-endorphin-elite-3">엔돌핀 엘리트 3</a>가 <strong>7월 1일 한국 공식몰에 론칭</strong>합니다(정가 369,000원, White/Multi). 전작 <a href="/shoes/saucony-endorphin-elite-2">엘리트 2</a>는 RunRepeat 측정 <strong>역대 최고 에너지 리턴 80.6%</strong>로 <a href="/shoes/nike-alphafly-3">알파플라이 3</a>(78.2%)마저 능가했던 "반발 괴물"이었지만, 동시에 <strong>"너무 불안정하고 발볼이 좁다"</strong>는 평이 따라다녔죠. 엘리트 3는 바로 그 두 약점을 겨냥했습니다. 어떤 점이 바뀌었는지 전작과 나란히 보겠습니다.</p>
  </div>
</div>

<h2>엘리트 2 → 엘리트 3, 무엇이 바뀌었나</h2>
<table>
  <thead><tr><th>항목</th><th>엘리트 2</th><th>엘리트 3</th></tr></thead>
  <tbody>
    <tr><td><strong>정가</strong></td><td>339,000원</td><td>369,000원</td></tr>
    <tr><td>무게(US 9)</td><td><strong>197g</strong></td><td>207g (+10g)</td></tr>
    <tr><td>힐 / 전족 스택</td><td>39.9 / 32.4mm</td><td>39.5 / 31.5mm</td></tr>
    <tr><td>드롭</td><td>7.5mm</td><td>8mm</td></tr>
    <tr><td>미드솔 폼</td><td>IncrediRUN</td><td>IncrediRUN <small>(약간 더 부드럽게)</small></td></tr>
    <tr><td>카본 플레이트</td><td>평탄형</td><td><strong>리지드+포크형</strong> <small>(추진력↑)</small></td></tr>
    <tr><td>미드솔 측면</td><td>깊은 컷아웃</td><td><strong>컷아웃 제거</strong> <small>(안정성↑)</small></td></tr>
    <tr><td>토박스</td><td>좁음(narrow 71mm)</td><td><strong>직각형·넓어짐</strong></td></tr>
    <tr><td>어퍼</td><td>거친 메시</td><td>부드러운 니트</td></tr>
    <tr><td>힐 카운터</td><td>있음</td><td><strong>없음</strong> <small>(아킬레스 친화)</small></td></tr>
  </tbody>
</table>
<p><small>※ 무게·스택은 전문 리뷰(BITR·DOR·RTR) 실측, 가격·출시일은 써코니 코리아 공식 기준. 충격흡수·에너지 리턴 등 RunRepeat 랩 수치는 엘리트 3 미게시 상태로, 본문은 엘리트 2 실측 기반 추정입니다.</small></p>

<h2>한국 러너가 주목할 변화 3가지</h2>
<h3>① 토박스가 넓어졌다 — 가장 반가운 소식</h3>
<p>엘리트 2의 가장 큰 진입장벽은 <strong>좁은 토박스(narrow, 약 71mm)</strong>였습니다. "반발은 최고인데 발볼 넓은 사람은 도박"이라는 평이 많았죠. 엘리트 3는 <strong>토박스를 직각형(squared-off)으로 넓혀</strong> 표준~약간 넓은 발까지 수용합니다. 와이드 옵션 자체는 없지만 기본 핏이 넉넉해진 거라, 발볼 때문에 엘리트를 포기했던 한국 러너에게는 가장 중요한 변화입니다. 발볼이 고민이라면 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 가이드</a>도 함께 보세요.</p>

<h3>② 안정성을 손봤다 — 컷아웃 제거 + 포크형 플레이트</h3>
<p>엘리트 2는 안정성이 4/10에 불과해 "완성된 러닝 폼이 없으면 착지가 불안하다"는 지적을 받았습니다. 엘리트 3는 <strong>미드솔 측면의 깊은 컷아웃을 메우고 힐·측면 폼 볼륨을 키워</strong> 미드풋을 채웠고, 카본 플레이트를 <strong>리지드+포크 형태로 재설계</strong>해 앞쪽 추진력과 강성을 높였습니다. 덕분에 중립 안정성이 한 단계 올라왔다는 평가(Doctors of Running B+)지만, 비틀림 강성은 여전히 낮아 <strong>코너나 요철보다는 평탄한 코스(하프~풀)</strong>에 어울립니다.</p>

<h3>③ 무게는 10g 늘었다 — 유일한 대가</h3>
<p>안정성과 폼 볼륨을 얻은 대가로 무게가 <strong>197g → 207g으로 약 10g 증가</strong>했습니다. 슈퍼슈즈 기준으론 여전히 가볍지만, "가장 가볍고 예리한 레이서"를 찾는 엘리트에겐 아쉬운 지점이죠. Road Trail Run 5인 테스터는 <strong>"엘리트 1의 반발 + 엘리트 2의 부드러움을 결합했다"</strong>고 평하며 평균 9.4/10을 줬는데, 무게 증가가 거의 유일한 약점으로 꼽혔습니다.</p>

<div class="callout success">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">한 줄 정리</p>
    <p><strong>엘리트 3 = "반발은 그대로, 약점만 손본" 신형</strong>입니다. 80%대 IncrediRUN 반발을 유지하면서 <strong>안정성·발볼·어퍼를 개선</strong>했고, 대가는 10g. 특히 <strong>발볼이 부담이던 한국 러너</strong>와 <strong>아킬레스 부착부 통증이 있는 러너</strong>(힐 카운터 없음)에게는 전작보다 확실히 친화적입니다. 단 부드러운 폼 특성상 <strong>평발·과내전 러너에겐 여전히 비추천</strong>입니다.</p>
  </div>
</div>

<h2>살까, 기다릴까 — 엘리트 2 vs 엘리트 3</h2>
<table>
  <thead><tr><th>이런 러너라면</th><th>선택</th></tr></thead>
  <tbody>
    <tr><td>발볼이 넓어 엘리트 2를 포기했었다</td><td><strong>엘리트 3</strong> (토박스 개선)</td></tr>
    <tr><td>안정성·포용력 있는 슈퍼슈즈를 원한다</td><td><strong>엘리트 3</strong></td></tr>
    <tr><td>아킬레스 부착부 통증이 있다</td><td><strong>엘리트 3</strong> (힐 카운터 없음)</td></tr>
    <tr><td>1g이라도 가벼운 게 최우선이다</td><td><a href="/shoes/saucony-endorphin-elite-2">엘리트 2</a> (197g) 또는 다른 경량 레이서</td></tr>
    <tr><td>엘리트급은 부담, 검증된 카본이 좋다</td><td><a href="/shoes/saucony-endorphin-pro-5">엔돌핀 프로 5</a> (29.9만)</td></tr>
  </tbody>
</table>
<p>엘리트 라인이 부담된다면 써코니 엔돌핀은 아주라→스피드 5→프로 5→엘리트 3의 사다리 구조입니다. 내 레이스·예산에 맞는 칸을 고르는 건 <a href="/blog/saucony-endorphin-lineup-2026-guide">엔돌핀 4종 라인업 가이드</a>에서 정리했습니다.</p>

<div class="callout warning">
  <span class="callout-icon">⏳</span>
  <div class="callout-body">
    <p class="callout-title">아직 '미공개'인 수치들</p>
    <p>엘리트 3는 출시 직후라 <strong>RunRepeat 랩 테스트(충격흡수 SA·경도 HA·정확한 에너지 리턴%)가 아직 게시되지 않았습니다.</strong> 본문의 반발·쿠션 관련 수치는 전작 엘리트 2 실측(에너지 리턴 80.6%)을 기준으로 한 추정이며, 무게·스택·플레이트 형상 등 확정된 항목과는 구분됩니다. 정확한 랩 데이터는 출시 후 RunRepeat 게시 시점에 <a href="/shoes/saucony-endorphin-elite-3">상세 페이지</a>를 업데이트하겠습니다.</p>
  </div>
</div>

<h2>한국 러너 관점 FAQ</h2>
<div class="faq">
  <p class="faq-q">Q. 발볼 넓은데 엘리트 3 신어도 되나요?</p>
  <p class="faq-a">A. 전작보다 한결 낫습니다. 엘리트 2는 narrow(71mm)라 발볼 넓으면 사실상 비추천이었지만, 엘리트 3는 토박스를 직각형으로 넓혀 표준~약간 넓은 발까지 수용합니다. 와이드 옵션은 없으니, 발볼이 매우 넓다면 출시 후 매장 착화를 권합니다.</p>
  <p class="faq-q">Q. 엘리트 2를 이미 가지고 있으면 굳이 바꿀 필요 있나요?</p>
  <p class="faq-a">A. 순수 반발과 최저 무게가 목적이면 엘리트 2(197g)로 충분합니다. 다만 엘리트 2의 불안정함이나 좁은 발볼이 불편했다면, 엘리트 3의 안정성·토박스 개선이 체감될 겁니다. 반발 자체는 같은 IncrediRUN 폼이라 큰 차이가 없습니다.</p>
  <p class="faq-q">Q. 초보·서브4 러너가 사도 되나요?</p>
  <p class="faq-a">A. 권하지 않습니다. 엘리트 3는 빠른 페이스(km당 4:30 이내)와 완성된 폼을 전제로 한 레이스 전용 카본화이고, 200km 내구성에 km당 약 1,845원으로 운용 비용도 높습니다. 서브4 이하라면 <a href="/shoes/saucony-endorphin-speed-5">엔돌핀 스피드 5</a>나 <a href="/shoes/saucony-endorphin-pro-5">프로 5</a>가 현실적입니다. 카본화가 처음이면 <a href="/blog/carbon-plate-shoes-comparison-2025">카본 플레이트화 비교 가이드</a>를 먼저 보세요.</p>
  <p class="faq-q">Q. 알파플라이·메타스피드랑 비교하면?</p>
  <p class="faq-a">A. <a href="/shoes/nike-alphafly-3">알파플라이 3</a>는 더 통통 튀는 에어 기반, <a href="/shoes/asics-metaspeed-sky-plus">메타스피드 스카이+</a>는 더 단단하고 예리한 라이드입니다. 엘리트 3는 그중에서 <strong>가장 부드럽고 포용력 있는</strong> 슈퍼슈즈로, "딱딱한 카본이 부담스럽다"는 러너에게 어울립니다.</p>
</div>

<div class="callout info">
  <span class="callout-icon">🔗</span>
  <div class="callout-body">
    <p class="callout-title">한 걸음 더</p>
    <p>전체 스펙·실측·구매 링크는 <a href="/shoes/saucony-endorphin-elite-3">엔돌핀 엘리트 3 상세</a>에서 확인하세요(랩 데이터 게시 시 갱신). 전작과 비교하려면 <a href="/shoes/saucony-endorphin-elite-2">엘리트 2 상세</a>, 써코니 엔돌핀 4종 중 내게 맞는 걸 고르려면 <a href="/blog/saucony-endorphin-lineup-2026-guide">엔돌핀 라인업 가이드</a>를 보세요. 여러 카본화를 나란히 보려면 <a href="/compare">비교 도구</a>, 내 발·목표 추천은 <a href="/recommend">맞춤 추천</a>을 이용하세요.</p>
  </div>
</div>

<p class="post-disclaimer"><small>※ 가격·출시일은 써코니 코리아 공식 기준이며 시기·채널에 따라 달라질 수 있습니다. 무게·스택·변경점은 전문 리뷰(Believe in the Run·Doctors of Running·Road Trail Run) 교차 확인, 충격흡수·에너지 리턴 등은 전작 엘리트 2 실측 기반 추정으로 RunRepeat 랩 게시 후 갱신합니다.</small></p>
`,
  },
  {
    id: 'marathon-club-runners-pick-running-shoes-2026',
    slug: 'marathon-club-runners-pick-running-shoes-2026',
    title: '마라톤 클럽 러너들이 직접 뽑은 러닝화 | 첫 러닝화 TOP3 & 인생 러닝화 TOP5 — 초보의 선택 vs 고수의 정착',
    description: '국내 최대 러닝 커뮤니티 동마클럽 러너들이 설문으로 직접 뽑은 러닝화 순위. 초보가 처음 고른 "첫 러닝화 TOP3"(페가수스·리액트 인피니티·노바블라스트)와 고수가 정착한 "인생 러닝화 TOP5"(노바블라스트·아디오스 프로·메타스피드·베이퍼플라이·슈퍼블라스트)를 우리 사이트 실측 데이터로 해설합니다. 초보는 왜 데일리화를 고르고, 고수는 왜 카본으로 갔다가 다시 데일리로 돌아오는지 — 한국 러너의 신발 여정이 보입니다.',
    thumbnail: '/images/blog/marathon-club-runners-pick-running-shoes-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-29',
    category: 'guide' as const,
    readingTime: 9,
    tags: ['러너 추천 러닝화', '첫 러닝화', '인생 러닝화', '마라톤 클럽', '러닝화 추천', '러닝화 순위'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>국내 최대 러닝 커뮤니티 <strong>동마클럽 러너들의 설문 집계</strong>입니다. <strong>첫 러닝화 TOP3</strong>는 <a href="/shoes/nike-pegasus-41">나이키 페가수스</a>·나이키 리액트 인피니티 런·<a href="/shoes/asics-novablast-5">아식스 노바블라스트</a>로 <strong>전부 쿠션·안정 데일리화</strong> — 초보는 "편하고 안 다치는" 신발을 고릅니다</li>
    <li><strong>인생 러닝화 TOP5</strong>는 <a href="/shoes/asics-novablast-5">노바블라스트</a>·<a href="/shoes/adidas-adios-pro-4">아디오스 프로</a>·<a href="/shoes/asics-metaspeed-sky-plus">메타스피드</a>·<a href="/shoes/nike-vaporfly-4">베이퍼플라이</a>·<a href="/shoes/asics-superblast-3">슈퍼블라스트</a>. 2~4위는 <strong>카본 레이싱화</strong>지만 <strong>1·5위는 데일리·슈퍼트레이너</strong>입니다</li>
    <li>핵심 인사이트: 고수도 <strong>매일 신는 신발은 결국 편한 데일리</strong>(레이싱화는 대회용). 그리고 인생 러닝화 5개 중 <strong>3개가 아식스</strong> — 한국 러너의 아식스 신뢰가 드러납니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">👟</span>
  <div class="callout-body">
    <p class="callout-title">이 순위는 어디서 나왔나</p>
    <p>국내 최대 마라톤 커뮤니티 중 하나인 <strong>동마클럽</strong>이 러너들에게 "첫 러닝화"와 "인생 러닝화"를 물었고, 댓글·스토리로 쏟아진 수많은 모델을 집계해 순위를 냈습니다. 즉 <strong>전문가 랩 테스트가 아니라 실제로 달리는 사람들이 직접 뽑은 결과</strong>죠. 이 글은 그 순위를 가져와, 각 신발이 <strong>왜 뽑혔는지</strong>를 우리 사이트의 실측 스펙·한국 러너 관점으로 풀어드립니다. 점수(데일리/안정성/템포/레이스)는 동마클럽이 매긴 항목별 평가입니다.</p>
  </div>
</div>

<h2>첫 러닝화 TOP3 — 초보가 처음 고른 신발</h2>
<table>
  <thead><tr><th>순위</th><th>모델</th><th>동마클럽 평가</th><th>성격</th></tr></thead>
  <tbody>
    <tr><td><strong>1위</strong></td><td><a href="/shoes/nike-pegasus-41">나이키 페가수스</a></td><td>데일리 90 · 안정성 84</td><td>가장 무난한 입문 데일리</td></tr>
    <tr><td><strong>2위</strong></td><td>나이키 리액트 인피니티 런</td><td>데일리 86 · 안정성 88</td><td>부상 방지 특화(안정성 최고)</td></tr>
    <tr><td><strong>3위</strong></td><td><a href="/shoes/asics-novablast-5">아식스 노바블라스트</a></td><td>데일리 92 · 안정성 86</td><td>통통 튀는 올라운드 데일리</td></tr>
  </tbody>
</table>
<p><strong>첫 러닝화는 셋 다 데일리·안정화 계열</strong>입니다. 흥미롭게도 카본화나 빠른 신발은 한 켤레도 없죠. 초보에게 가장 중요한 건 속도가 아니라 <strong>"편하게, 다치지 않고, 오래"</strong>라는 걸 러너들의 선택이 그대로 보여줍니다. 1위 <a href="/shoes/nike-pegasus-41">페가수스</a>는 "첫 러닝화 추천"에서 거의 항상 1순위로 꼽히는 가장 안전한 데일리고, 2위 리액트 인피니티 런은 넓은 베이스로 발이 흔들리지 않게 잡아주는 부상 방지 특화 모델입니다(현재는 단종돼 중고·재고로만 만날 수 있어, 비슷한 안정 데일리를 찾는다면 <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 가이드</a>를 참고하세요). 3위 <a href="/shoes/asics-novablast-5">노바블라스트</a>는 초보도 재미를 느낄 만큼 반발이 살아있는 올라운더라, 첫 신발이자 한동안 쓰는 데일리로 인기가 높습니다.</p>

<h2>인생 러닝화 TOP5 — 고수가 정착한 신발</h2>
<table>
  <thead><tr><th>순위</th><th>모델</th><th>동마클럽 평가</th><th>성격</th></tr></thead>
  <tbody>
    <tr><td><strong>1위</strong></td><td><a href="/shoes/asics-novablast-5">아식스 노바블라스트</a></td><td>데일리 92 · 안정성 86</td><td>매일 신는 만능 데일리</td></tr>
    <tr><td><strong>2위</strong></td><td><a href="/shoes/adidas-adios-pro-4">아디다스 아디제로 아디오스(프로)</a></td><td>템포 89 · 레이스 94</td><td>카본 마라톤 레이싱</td></tr>
    <tr><td><strong>3위</strong></td><td><a href="/shoes/asics-metaspeed-sky-plus">아식스 메타스피드</a></td><td>템포 92 · 레이스 95</td><td>아식스 최상위 카본 레이서</td></tr>
    <tr><td><strong>4위</strong></td><td><a href="/shoes/nike-vaporfly-4">나이키 베이퍼플라이</a></td><td>템포 91 · 레이스 94</td><td>카본화의 원조·기준점</td></tr>
    <tr><td><strong>5위</strong></td><td><a href="/shoes/asics-superblast-3">아식스 슈퍼블라스트</a></td><td>데일리 93 · 안정성 93</td><td>카본 없는 고스택 슈퍼트레이너</td></tr>
  </tbody>
</table>
<p>여기서 풍경이 바뀝니다. <strong>2·3·4위가 모두 카본 레이싱화</strong>(<a href="/shoes/adidas-adios-pro-4">아디오스 프로</a>·<a href="/shoes/asics-metaspeed-sky-plus">메타스피드</a>·<a href="/shoes/nike-vaporfly-4">베이퍼플라이</a>)예요. 달리기에 빠지고 기록 욕심이 생기면 결국 <strong>"속도를 만들어주는 신발"</strong>로 손이 간다는 뜻입니다. 특히 베이퍼플라이는 카본화 시대를 연 기준점이고, 메타스피드와 아디오스 프로는 그 대항마로 한국 마라토너들이 가장 많이 신는 슈퍼슈즈죠. 카본화가 처음이라면 <a href="/blog/carbon-plate-shoes-comparison-2025">카본 플레이트화 비교 가이드</a>를 먼저 보는 걸 권합니다.</p>

<h2>이 순위가 말해주는 3가지</h2>
<h3>① 고수도 매일 신는 건 결국 "편한 데일리"다</h3>
<p>인생 러닝화 <strong>1위가 카본화가 아니라 데일리화 <a href="/shoes/asics-novablast-5">노바블라스트</a></strong>이고, 5위도 카본 없는 슈퍼트레이너 <a href="/shoes/asics-superblast-3">슈퍼블라스트</a>라는 점이 핵심입니다. 카본 레이싱화는 <strong>대회·포인트 훈련 전용</strong>이고, 훈련의 대부분을 차지하는 일상 러닝은 결국 편하고 내구성 좋은 데일리·슈퍼트레이너로 굴린다는 현실이죠. "인생 러닝화 = 가장 빠른 신발"이 아니라 <strong>"가장 오래, 가장 자주 함께한 신발"</strong>이라는 겁니다.</p>

<h3>② 첫 신발 → 인생 신발, 한국 러너의 여정이 보인다</h3>
<p>첫 러닝화는 <strong>100% 데일리·안정화</strong>, 인생 러닝화는 <strong>카본 레이싱이 절반</strong>. 두 순위를 나란히 놓으면 한 러너의 성장 곡선이 그려집니다 — <strong>"편하게 시작 → 기록 욕심 → 레이싱화 입문 → 결국 데일리로 회귀"</strong>. 지금 막 시작했다면 첫 러닝화 TOP3에서, 대회·기록에 욕심이 생겼다면 인생 러닝화 2~4위에서 다음 신발을 찾으면 됩니다.</p>

<h3>③ 인생 러닝화 5개 중 3개가 아식스</h3>
<p><a href="/shoes/asics-novablast-5">노바블라스트</a>(1위)·<a href="/shoes/asics-metaspeed-sky-plus">메타스피드</a>(3위)·<a href="/shoes/asics-superblast-3">슈퍼블라스트</a>(5위) — <strong>인생 러닝화 절반 이상이 아식스</strong>이고, 첫 러닝화 3위도 노바블라스트입니다. 데일리(노바블라스트)부터 카본 레이싱(메타스피드), 슈퍼트레이너(슈퍼블라스트)까지 카테고리별로 고르게 신뢰받는다는 뜻이죠. 토박스가 넉넉해 발볼 넓은 한국 러너와 궁합이 좋은 것도 한몫합니다. 슈퍼블라스트가 궁금하다면 <a href="/blog/superblast-3-vs-evo-sl-vs-mach-6-super-trainer-2026">슈퍼트레이너 3파전 비교</a>에서 더 깊게 다뤘습니다.</p>

<div class="callout success">
  <span class="callout-icon">🎯</span>
  <div class="callout-body">
    <p class="callout-title">그래서 나는 뭘 사야 하나</p>
    <p><strong>이제 막 달리기를 시작했다면</strong> → 첫 러닝화 TOP3, 그중 <a href="/shoes/nike-pegasus-41">페가수스</a>나 <a href="/shoes/asics-novablast-5">노바블라스트</a>가 가장 무난합니다. <strong>데일리는 있고 기록에 욕심이 생겼다면</strong> → 인생 러닝화 2~4위 카본화. <strong>대회용 따로, 훈련용 따로 두고 싶다면</strong> → 카본 레이싱화 한 켤레 + <a href="/shoes/asics-superblast-3">슈퍼블라스트</a> 같은 슈퍼트레이너 한 켤레 조합이 정석입니다. 내 발·목표에 맞는 추천은 <a href="/recommend">맞춤 추천</a>에서 받아보세요.</p>
  </div>
</div>

<h2>한국 러너 관점 FAQ</h2>
<div class="faq">
  <p class="faq-q">Q. 첫 러닝화로 카본화 사면 안 되나요?</p>
  <p class="faq-a">A. 권하지 않습니다. 러너들의 첫 러닝화 TOP3가 전부 데일리·안정화인 데는 이유가 있어요. 카본화는 발·종아리에 부담이 크고 딱딱해서, 근력이 덜 갖춰진 초보가 매일 신으면 부상 위험이 큽니다. 먼저 데일리화로 기초 체력과 폼을 만든 뒤 카본화로 넘어가는 게 안전합니다.</p>
  <p class="faq-q">Q. 인생 러닝화 1위가 왜 카본화가 아니라 노바블라스트인가요?</p>
  <p class="faq-a">A. "인생 러닝화"는 가장 빠른 신발이 아니라 <strong>가장 자주·오래 함께한 신발</strong>이기 때문입니다. 대회는 1년에 몇 번뿐이고, 훈련의 90%는 일상 러닝이죠. 그래서 매일 편하게 신는 데일리(<a href="/shoes/asics-novablast-5">노바블라스트</a>)나 슈퍼트레이너(<a href="/shoes/asics-superblast-3">슈퍼블라스트</a>)가 카본화보다 더 깊은 애착을 받습니다.</p>
  <p class="faq-q">Q. 발볼이 넓은데 이 순위 신발들 신어도 되나요?</p>
  <p class="faq-a">A. 아식스 3종(노바블라스트·메타스피드·슈퍼블라스트)은 토박스가 비교적 넉넉해 발볼 넓은 러너에게 유리합니다. 반면 나이키(페가수스·베이퍼플라이)는 좁은 편이라 매장 착화를 권합니다. 자세한 건 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 가이드</a>를 보세요.</p>
  <p class="faq-q">Q. 다른 러너들의 신발 선택도 궁금해요.</p>
  <p class="faq-a">A. 유명 러너·셀럽들이 어떤 신발을 신는지는 <a href="/blog/celebrity-runners-shoe-choices-guide">셀럽 러너 신발 선택 가이드</a>에서 다뤘습니다. 함께 보면 한국 러너의 신발 트렌드가 더 선명해집니다.</p>
</div>

<div class="callout info">
  <span class="callout-icon">🔗</span>
  <div class="callout-body">
    <p class="callout-title">한 걸음 더</p>
    <p>순위에 오른 신발들의 전체 스펙·실측·구매 링크는 각 상세에서 확인하세요 — <a href="/shoes/nike-pegasus-41">페가수스 41</a> · <a href="/shoes/asics-novablast-5">노바블라스트 5</a> · <a href="/shoes/adidas-adios-pro-4">아디오스 프로 4</a> · <a href="/shoes/asics-metaspeed-sky-plus">메타스피드 스카이+</a> · <a href="/shoes/nike-vaporfly-4">베이퍼플라이 4</a> · <a href="/shoes/asics-superblast-3">슈퍼블라스트 3</a>. 첫 러닝화를 고르는 중이라면 <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 가이드</a>, 여러 신발을 나란히 비교하려면 <a href="/compare">비교 도구</a>를 이용하세요.</p>
  </div>
</div>

<p class="post-disclaimer"><small>※ 순위·항목별 점수는 동마클럽이 러너 설문(댓글·스토리 언급)을 집계해 발표한 결과를 인용한 것이며, 각 신발의 스펙·해설은 본 사이트의 실측·브랜드 공식 기준입니다. 모델명은 러너들이 언급한 시리즈명 기준으로, 세부 버전은 사이트 상세 페이지를 참고하세요.</small></p>
`,
  },
  {
    id: 'superblast-3-vs-evo-sl-vs-mach-6-super-trainer-2026',
    slug: 'superblast-3-vs-evo-sl-vs-mach-6-super-trainer-2026',
    title: '슈퍼블라스트 3 vs 에보 SL vs 마하 6 비교 | 카본 없는 슈퍼트레이너 3파전 — 한 켤레로 훈련 끝내기',
    description: '카본 없이 한 켤레로 데일리부터 업템포까지 책임지는 경량 트레이너 3종 — 아식스 슈퍼블라스트 3(25.9만), 아디다스 아디제로 에보 SL(20.9만), 호카 마하 6(18.5만). "슈퍼트레이너"로 묶이지만 실은 고스택 슈퍼트레이너·슈퍼폼 가성비 데일리·전통 EVA 올라운더로 결이 다릅니다. 스택·폼 등급·발볼·예산으로 내게 맞는 한 켤레를 골라드립니다.',
    thumbnail: '/images/blog/superblast-3-vs-evo-sl-vs-mach-6-super-trainer-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-29',
    category: 'review' as const,
    readingTime: 10,
    tags: ['슈퍼블라스트 3', '아디제로 에보 SL', '마하 6', '슈퍼트레이너', '데일리 트레이너', '러닝화 비교'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>셋 다 카본 없는 200g대 경량 트레이너</strong>지만 급이 다릅니다. <a href="/shoes/asics-superblast-3">슈퍼블라스트 3</a>만 <strong>46.5mm 고스택 + 슈퍼폼</strong>의 진짜 "슈퍼트레이너"이고, <a href="/shoes/adidas-adizero-evo-sl">에보 SL</a>은 <strong>슈퍼폼을 가장 싸고 가볍게</strong>(36mm·223g·세일 15만대), <a href="/shoes/hoka-mach-6">마하 6</a>은 <strong>EVA 기반 통기성 올라운더</strong>(36mm·최저가 18.5만)입니다</li>
    <li><strong>한 켤레로 롱런·마라톤 페이스 훈련·업템포를 다 → 슈퍼블라스트 3</strong>. <strong>슈퍼폼 반발을 최저가·최경량·와이드로 → 에보 SL</strong>. <strong>예산 최소 + 여름 통기성 + 전통적 데일리감 → 마하 6</strong>입니다</li>
    <li><strong>발볼 넓으면 슈퍼블라스트 3는 탈락</strong>(와이드 없음) — 에보 SL이나 마하 6의 와이드를 고르세요. 무릎 보호·고스택 안정감을 최우선으로 보면 46.5mm 슈퍼블라스트 3가 한 수 위입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">⚙️</span>
  <div class="callout-body">
    <p class="callout-title">"슈퍼트레이너"는 하나의 신발이 아니라 한 카테고리입니다</p>
    <p>요즘 "카본 레이싱화는 부담되고, 그렇다고 평범한 데일리화는 심심한" 러너들이 찾는 게 <strong>슈퍼트레이너</strong>입니다. 카본 플레이트 없이 <strong>슈퍼폼(PEBA 계열) + 높은 스택</strong>으로 레이싱화와 훈련화 사이를 한 켤레로 메우는 신발이죠. 그런데 검색하면 가격이 18만~26만으로 천차만별이고, 같은 "슈퍼트레이너"인데 스펙이 제각각입니다. 이 글은 한국에서 가장 많이 비교되는 세 켤레 — <a href="/shoes/asics-superblast-3">슈퍼블라스트 3</a>·<a href="/shoes/adidas-adizero-evo-sl">에보 SL</a>·<a href="/shoes/hoka-mach-6">마하 6</a>을 나란히 놓고, <strong>"어느 게 더 좋냐"가 아니라 "내 훈련·발·예산에 어느 게 맞냐"</strong>를 정리합니다.</p>
  </div>
</div>

<h2>스펙 비교</h2>
<table>
  <thead><tr><th>항목</th><th>슈퍼블라스트 3</th><th>아디제로 에보 SL</th><th>마하 6</th></tr></thead>
  <tbody>
    <tr><td><strong>정가</strong></td><td>259,000원</td><td>209,000원<br><small>(세일 15만대)</small></td><td><strong>185,000원</strong></td></tr>
    <tr><td>무게(US 9)</td><td>239g</td><td><strong>223g</strong></td><td>232g</td></tr>
    <tr><td>힐 / 전족 스택</td><td><strong>46.5 / 38.5mm</strong></td><td>36 / 28mm</td><td>36 / 26mm</td></tr>
    <tr><td>드롭</td><td>8mm</td><td>8mm</td><td>10mm</td></tr>
    <tr><td>미드솔 폼</td><td>FF LEAP + FF BLAST PLUS<br><small>(슈퍼폼)</small></td><td>100% Lightstrike Pro<br><small>(슈퍼폼)</small></td><td>Supercritical EVA<br><small>(일반 EVA)</small></td></tr>
    <tr><td>쿠션 / 반발</td><td><strong>10 / 9</strong></td><td>8 / 9</td><td>7 / 8</td></tr>
    <tr><td>최적 페이스</td><td>4:00~5:30/km</td><td>4:00~6:00/km</td><td>4:30~6:00/km</td></tr>
    <tr><td>발볼 / 와이드</td><td>표준 · <strong>와이드 없음</strong></td><td>표준 · <strong>와이드 O</strong></td><td>표준(체감 좁음) · <strong>와이드 O</strong></td></tr>
    <tr><td>내구성 / km당</td><td>550km / 약 471원</td><td>500km / 약 418원</td><td>450km / <strong>약 411원</strong></td></tr>
    <tr><td>한 줄 성격</td><td>고스택 슈퍼트레이너</td><td>슈퍼폼 가성비 데일리</td><td>여름·통기성 올라운더</td></tr>
  </tbody>
</table>
<p><small>※ 무게·스택은 RunRepeat 실측 및 브랜드 공식 기준, 가격은 각 브랜드 코리아 공식 정가. 에보 SL은 정가 20.9만이나 공홈/세일 시 15만대 형성.</small></p>

<h2>핵심 차이 3가지</h2>
<h3>① 스택·쿠션 — 슈퍼블라스트 3만 "급"이 다르다</h3>
<p>표에서 가장 눈에 띄는 줄입니다. 슈퍼블라스트 3는 <strong>힐 46.5mm</strong>로, 에보 SL·마하 6(둘 다 36mm)보다 <strong>1cm 이상 두껍습니다.</strong> 이 차이는 후반부에 그대로 나타나요. 25km가 넘어가는 롱런이나 마라톤 페이스 훈련에서 46.5mm 스택은 발·무릎이 받는 충격을 확실히 줄여줍니다. 쿠션 점수가 10/10인 이유죠. 반대로 에보 SL과 마하 6은 36mm로 <strong>"날렵하게 지면을 느끼는"</strong> 쪽이라, 10km 안팎 템포런이나 가벼운 일상 러닝에서 더 경쾌합니다. <strong>장거리 보호가 목적이면 슈퍼블라스트 3, 짧고 빠른 러닝이 주력이면 나머지 둘</strong>로 갈립니다.</p>

<h3>② 폼 등급 — 슈퍼폼이냐 EVA냐</h3>
<p>이름은 다 비슷해 보여도 미드솔 폼의 "급"이 다릅니다. 슈퍼블라스트 3(FF LEAP)와 에보 SL(100% Lightstrike Pro)은 <strong>레이싱화에 쓰이는 슈퍼폼</strong>입니다 — 특히 에보 SL의 Lightstrike Pro는 아디다스 최상위 레이싱화 <a href="/shoes/adidas-adios-pro-4">아디오스 프로</a>와 같은 폼으로, RunRepeat 실측 에너지 리턴 83%의 톡톡 튀는 반발이 무기입니다. 반면 마하 6는 <strong>Supercritical EVA</strong>로, 슈퍼폼은 아니지만 65.4% 에너지 리턴에 호카 특유의 메타 로커로 부드럽게 굴러갑니다. 대신 마하 6의 EVA는 <strong>겨울에 폼이 약 42% 단단해지는</strong> 약점이 있어, 한겨울 새벽 러닝이 잦다면 감안해야 합니다.</p>

<h3>③ 가격·발볼 — 와이드가 필요하면 답이 좁아진다</h3>
<p>가격은 마하 6(18.5만) → 에보 SL(20.9만, 세일 15만대) → 슈퍼블라스트 3(25.9만) 순입니다. 단순 가성비로는 마하 6와 세일가의 에보 SL이 앞서죠. 그런데 <strong>발볼이 변수입니다.</strong> 슈퍼블라스트 3는 전작보다 토박스가 넓어졌지만 <strong>와이드 옵션 자체가 없습니다.</strong> 발볼 넓은 한국 러너라면 매장에서 신어보고 맞아야만 선택지가 되고, 안 맞으면 대안이 없어요. 반면 에보 SL과 마하 6은 <strong>와이드 옵션이 있어</strong> 발볼 고민을 덜 수 있습니다. 발볼이 신경 쓰인다면 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 신발 가이드</a>를 함께 보세요.</p>

<div class="callout success">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">한 줄 정리</p>
    <p><strong>슈퍼블라스트 3 = 46.5mm 고스택 + 슈퍼폼의 진짜 슈퍼트레이너</strong>(한 켤레로 롱런·마라톤 훈련까지, 단 비싸고 와이드 없음). <strong>에보 SL = 슈퍼폼 반발을 가장 싸고 가볍게</strong>(최경량 223g·세일 15만대·와이드, 단 스택 낮음). <strong>마하 6 = 통기성 최강 가성비 올라운더</strong>(최저가 18.5만·여름 쾌적, 단 EVA라 겨울에 단단). 세 켤레 모두 카본 없는 경량 트레이너라는 큰 틀은 같습니다.</p>
  </div>
</div>

<h2>누가 어느 쪽?</h2>
<table>
  <thead><tr><th>이런 러너라면</th><th>추천</th></tr></thead>
  <tbody>
    <tr><td>한 켤레로 롱런·마라톤 페이스 훈련·업템포를 다 소화</td><td><strong>슈퍼블라스트 3</strong></td></tr>
    <tr><td>25km+ 장거리에서 무릎·발 보호(고스택)가 최우선</td><td><strong>슈퍼블라스트 3</strong></td></tr>
    <tr><td>슈퍼폼 반발을 최저가·최경량으로 + 발볼 넓음</td><td><strong>에보 SL</strong> (세일 15만대·223g·와이드)</td></tr>
    <tr><td>인터벌·짧은 템포처럼 가볍고 날렵한 느낌</td><td><strong>에보 SL</strong> 또는 <strong>마하 6</strong></td></tr>
    <tr><td>예산이 가장 빠듯하다 / 한여름 통기성 중시</td><td><strong>마하 6</strong> (18.5만·통기성 5/5)</td></tr>
    <tr><td>발볼이 넓다 (와이드 필요)</td><td><strong>에보 SL</strong> 또는 <strong>마하 6</strong> (슈블 3는 와이드 없음)</td></tr>
  </tbody>
</table>

<h2>한국 러너 관점 FAQ</h2>
<div class="faq">
  <p class="faq-q">Q. 슈퍼트레이너가 정확히 뭔가요? 카본화랑 뭐가 다른가요?</p>
  <p class="faq-a">A. 슈퍼트레이너는 <strong>카본 플레이트 없이 슈퍼폼 + 높은 스택</strong>으로 만든 다목적 훈련화입니다. 카본화처럼 강하게 튕겨주진 않지만, 플레이트 특유의 불안정함·딱딱함이 없어 <strong>매일 훈련해도 발·종아리 부담이 적습니다.</strong> 그래서 카본화는 대회·포인트 훈련 전용으로 아끼고, 평소 롱런·템포는 슈퍼트레이너로 굴리는 조합이 요즘 정석이에요. 셋 중 슈퍼블라스트 3가 가장 슈퍼트레이너 정의에 부합하고, 마하 6는 EVA 기반이라 엄밀히는 "경량 데일리"에 가깝습니다.</p>
  <p class="faq-q">Q. 첫 슈퍼트레이너로는 어느 걸 추천하나요?</p>
  <p class="faq-a">A. 예산이 허락하면 <strong>슈퍼블라스트 3</strong>입니다 — 46.5mm 고스택이 어떤 페이스에서도 실패가 없고, 한 켤레로 훈련 대부분을 커버합니다. 다만 26만원이 부담되거나 발볼이 넓다면 <strong>에보 SL(세일 15만대)</strong>이 슈퍼폼 입문으로 가장 현실적입니다. 가볍고, 와이드도 있고, 가성비가 압도적이에요.</p>
  <p class="faq-q">Q. 발볼이 넓은데 슈퍼블라스트 3 신어도 되나요?</p>
  <p class="faq-a">A. 권하기 어렵습니다. 전작보다 토박스가 넓어졌다지만 표준은 표준이고, <strong>와이드 옵션이 아예 없습니다.</strong> 발볼 넓은 한국 러너는 장거리에서 눌릴 수 있어요. 같은 용도라면 와이드가 있는 <strong>에보 SL</strong>이나 <strong>마하 6</strong>이 안전합니다.</p>
  <p class="faq-q">Q. 이 신발들로 마라톤 대회에 나가도 되나요?</p>
  <p class="faq-a">A. 됩니다. 특히 슈퍼블라스트 3는 46.5mm 슈퍼폼으로 <strong>서브-4~서브-3.5 러너의 풀코스 레이스화로도 충분</strong>합니다. 다만 기록 단축이 목적인 빠른 러너라면 카본화가 한 수 위예요. "완주·꾸준한 페이스"가 목표면 이 세 켤레로도 대회를 잘 치를 수 있습니다. 카본화와의 차이가 궁금하면 <a href="/blog/carbon-plate-shoes-comparison-2025">카본 플레이트화 비교 가이드</a>를 보세요.</p>
  <p class="faq-q">Q. 더 보고 싶은 대안이 있나요?</p>
  <p class="faq-a">A. 같은 슈퍼트레이너 계열로 <a href="/shoes/new-balance-sc-trainer-v3">뉴발란스 SC 트레이너 v3</a>, <a href="/shoes/saucony-endorphin-speed-5">써코니 엔돌핀 스피드 5</a>(나일론 플레이트로 더 탄력적), <a href="/shoes/nike-zoom-fly-6">나이키 줌 플라이 6</a>도 검토 후보입니다.</p>
</div>

<div class="callout info">
  <span class="callout-icon">🔗</span>
  <div class="callout-body">
    <p class="callout-title">한 걸음 더</p>
    <p>각 신발 전체 스펙·실측·구매 링크는 <a href="/shoes/asics-superblast-3">슈퍼블라스트 3 상세</a> · <a href="/shoes/adidas-adizero-evo-sl">에보 SL 상세</a> · <a href="/shoes/hoka-mach-6">마하 6 상세</a>에서 확인하세요. 슈퍼블라스트를 더 깊게 보려면 <a href="/blog/asics-superblast-2-vs-3-comparison">슈퍼블라스트 2 vs 3 세대 비교</a>, 에보 SL의 가성비를 더 파고들려면 <a href="/blog/adidas-adizero-evo-sl-value-supershoe-2026">에보 SL 가치 분석</a>을 보세요. 세 켤레를 항목별로 나란히 놓으려면 <a href="/compare">비교 도구</a>, 내 발·목표 기반 추천은 <a href="/recommend">맞춤 추천</a>을 이용하세요.</p>
  </div>
</div>

<p class="post-disclaimer"><small>※ 가격은 각 브랜드 코리아 공식 정가 기준이며 시기·채널에 따라 달라질 수 있습니다. 스펙은 RunRepeat 실측 및 브랜드 공식 기준입니다.</small></p>
`,
  },
  {
    id: 'hoka-bondi-9-vs-asics-nimbus-28',
    slug: 'hoka-bondi-9-vs-asics-nimbus-28',
    title: '호카 본디 9 vs 아식스 님버스 28 비교 | 맥스쿠션 양대산맥 — 안정감이냐 가성비냐',
    description: '무릎 보호 맥스쿠션의 양대산맥, 호카 본디 9(22.9만)와 아식스 젤 님버스 28(19.9만). 둘 다 부상 보호 최상위지만 성격이 갈립니다. 본디는 123mm 초광폭 플랫폼의 안정감, 님버스는 22g 가벼운 무게·발볼 여유·가성비. 체중·발볼·예산으로 내게 맞는 한 켤레를 골라드립니다.',
    thumbnail: '/images/blog/hoka-bondi-9-vs-asics-nimbus-28.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-26',
    category: 'review' as const,
    readingTime: 9,
    tags: ['본디 9', '님버스 28', '맥스 쿠션', '무릎 보호 러닝화', '쿠션화 비교', '러닝화 비교'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>둘 다 부상 보호(족저근막염·아킬레스·무릎·신스플린트) 전부 최상위</strong>인 맥스쿠션의 정점입니다. 무릎이 걱정되는 러너라면 어느 쪽을 골라도 실패는 없습니다</li>
    <li><strong>본디 9</strong>는 <strong>123.2mm 초광폭 플랫폼의 안정감</strong>이 무기(체중 있는 러너·최대 지지력). <strong>님버스 28</strong>은 <strong>22g 가벼운 281g + 발볼 여유 + 3만원 저렴 + 긴 내구성(650km)</strong>으로 균형이 좋습니다</li>
    <li><strong>발볼이 넓거나 가성비·가벼움이 중요하면 님버스 28</strong>, <strong>체중이 있고 최대 안정감을 원하면 본디 9</strong>입니다. 대부분의 한국 러너에겐 무게·발볼·가격에서 님버스가 더 무난합니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🛡️</span>
  <div class="callout-body">
    <p class="callout-title">"무릎 보호 쿠션화" 검색의 끝판왕 둘</p>
    <p>"무릎이 걱정되는데 푹신한 신발"을 찾으면 결국 만나는 두 이름이 <a href="/shoes/hoka-bondi-9">호카 본디 9</a>와 <a href="/shoes/asics-gel-nimbus-28">아식스 젤 님버스 28</a>입니다. 둘 다 40mm대 두꺼운 스택에 부상 보호가 전부 최상위라, <strong>"어느 게 더 좋냐"가 아니라 "내 몸·발에 어느 게 맞냐"가 진짜 질문</strong>입니다. 본디 단독 후기는 <a href="/blog/hoka-bondi-9-review">여기</a>서 더 깊게 다뤘으니, 이 글은 둘을 나란히 놓고 갈림길을 정리합니다.</p>
  </div>
</div>

<h2>스펙 비교</h2>
<table>
  <thead><tr><th>항목</th><th>본디 9</th><th>님버스 28</th></tr></thead>
  <tbody>
    <tr><td><strong>정가</strong></td><td>229,000원</td><td><strong>199,000원</strong></td></tr>
    <tr><td>무게(US 9)</td><td>303g</td><td><strong>281g</strong></td></tr>
    <tr><td>힐 / 전족 스택</td><td>41 / 32mm</td><td><strong>43.5 / 35.5mm</strong></td></tr>
    <tr><td>드롭</td><td>9mm</td><td>8mm</td></tr>
    <tr><td>미드솔</td><td>Supercritical EVA</td><td>FF BLAST PLUS</td></tr>
    <tr><td>안정성</td><td>8 (123mm 초광폭)</td><td>8</td></tr>
    <tr><td>발볼 / 와이드</td><td>좁은 편 · 와이드 O</td><td>표준 · <strong>와이드·X-와이드 O</strong></td></tr>
    <tr><td>내구성</td><td>550km</td><td><strong>650km</strong></td></tr>
    <tr><td>부상 보호</td><td>4종 excellent</td><td>4종 excellent</td></tr>
  </tbody>
</table>
<p><small>※ 무게·스택은 RunRepeat 실측 기준, 가격은 각 브랜드 코리아 공식 정가.</small></p>

<h2>핵심 차이 3가지</h2>
<h3>① 무게·가격 — 님버스가 더 가볍고 싸다</h3>
<p>님버스 28은 전작 대비 20g 빠진 <strong>281g</strong>으로, 본디(303g)보다 22g 가볍습니다. 맥스쿠션화에서 22g은 장거리 후반에 체감되는 차이죠. 게다가 정가도 <strong>3만원 저렴(19.9만 vs 22.9만)</strong>하고 내구성은 100km 더 깁니다(650 vs 550km). 순수하게 "가성비 + 가벼움"만 보면 님버스가 앞섭니다.</p>

<h3>② 안정감 — 본디의 초광폭 플랫폼</h3>
<p>그렇다고 본디가 밀리는 건 아닙니다. 본디의 무기는 <strong>123.2mm 초광폭 플랫폼</strong>입니다. 바닥 면적이 넓어 "푹신한데 흔들리지 않는" 안정감이 맥스쿠션 중에서도 정점이라, <strong>체중이 있는 러너나 발이 안쪽으로 무너지는 느낌이 싫은 러너</strong>에게 본디의 받쳐주는 느낌이 더 안심됩니다. 무게(303g)는 그 안정감의 대가입니다.</p>

<h3>③ 발볼 — 둘 다 와이드 있지만 기본 핏이 다르다</h3>
<p>본디는 전통적으로 <strong>토박스가 좁은 편</strong>(실측 72.5mm)이라 표준으로 사면 발볼 넓은 러너는 와이드가 사실상 필수입니다. 반면 님버스 28은 기본 핏이 좀 더 여유롭고 <strong>와이드·X-와이드 옵션도 풍부</strong>합니다. 발볼이 고민이라면 님버스가 선택이 더 편합니다. 자세한 건 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 가이드</a>를 참고하세요.</p>

<div class="callout success">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">한 줄 정리</p>
    <p><strong>님버스 28 = 가볍고·저렴하고·발볼 여유 있는 균형형 맥스쿠션</strong>(대부분의 러너에게 무난). <strong>본디 9 = 초광폭 플랫폼으로 안정감을 극한까지 끌어올린 특화형</strong>(체중 있거나 최대 지지력을 원하는 러너). 둘 다 무릎 보호는 동급 최상위입니다.</p>
  </div>
</div>

<h2>누가 어느 쪽?</h2>
<table>
  <thead><tr><th>이런 러너라면</th><th>추천</th></tr></thead>
  <tbody>
    <tr><td>가볍고 경쾌한 맥스쿠션 · 가성비 · 긴 내구성</td><td><strong>님버스 28</strong></td></tr>
    <tr><td>발볼이 넓다 (기본 핏 여유 + 와이드 풍부)</td><td><strong>님버스 28</strong></td></tr>
    <tr><td>체중이 있어 최대 지지력·안정감이 필요</td><td><strong>본디 9</strong></td></tr>
    <tr><td>"흔들림 없이 받쳐주는" 느낌을 가장 중시</td><td><strong>본디 9</strong></td></tr>
    <tr><td>리커버리런·LSD 데일리 올라운더</td><td>둘 다 (취향)</td></tr>
  </tbody>
</table>

<h2>한국 러너 FAQ</h2>
<div class="faq">
  <p class="faq-q">Q. 무릎 보호만 보면 어느 쪽이 나은가요?</p>
  <p class="faq-a">A. 둘 다 족저근막염·아킬레스·무릎·신스플린트 보호가 모두 최상위라 사실상 동급입니다. 굳이 나누면 본디는 초광폭 플랫폼의 안정감, 님버스는 43.5mm 더 높은 스택의 충격 흡수가 강점입니다. 맥스쿠션을 더 넓게 비교하려면 <a href="/blog/max-cushion-running-shoes-knee-protection-2026">맥스 쿠션 가이드</a>를 보세요.</p>
  <p class="faq-q">Q. 발볼 넓은데 본디 신으려면?</p>
  <p class="faq-a">A. 본디는 반드시 와이드 옵션을 선택하세요. 표준은 72.5mm로 좁아 장거리에서 눌릴 수 있습니다. 같은 값이면 기본 핏이 여유로운 님버스 28이 발볼 스트레스가 덜합니다.</p>
  <p class="faq-q">Q. 초보 첫 신발로는 어느 쪽?</p>
  <p class="faq-a">A. 둘 다 느린 페이스(5~7분/km)에서 편한 입문~데일리 쿠션화입니다. 예산·가벼움을 보면 님버스 28(19.9만)이, 최대 안정감을 보면 본디 9가 맞습니다. 단 둘 다 무거운 편이라 빠른 훈련용은 아닙니다.</p>
  <p class="faq-q">Q. 다른 맥스쿠션 대안은?</p>
  <p class="faq-a">A. <a href="/shoes/new-balance-1080-v14">뉴발란스 1080 V14</a>(더 경쾌한 롤링), <a href="/shoes/brooks-glycerin-22">브룩스 글리세린 22</a>(부드러운 쿠션)도 같은 카테고리 대안입니다.</p>
</div>

<div class="callout info">
  <span class="callout-icon">🔗</span>
  <div class="callout-body">
    <p class="callout-title">한 걸음 더</p>
    <p>각 신발 전체 스펙·구매 링크는 <a href="/shoes/hoka-bondi-9">본디 9 상세</a> · <a href="/shoes/asics-gel-nimbus-28">님버스 28 상세</a>에서 확인하세요. 본디를 더 깊게 보려면 <a href="/blog/hoka-bondi-9-review">본디 9 단독 후기</a>, 두 신발을 항목별로 나란히 보려면 <a href="/compare">비교 도구</a>를 이용하세요.</p>
  </div>
</div>

<p class="post-disclaimer"><small>※ 가격은 각 브랜드 코리아 공식 정가 기준이며 시기·채널에 따라 달라질 수 있습니다. 스펙은 RunRepeat 실측 및 브랜드 공식 기준입니다.</small></p>
`,
  },
  {
    id: 'nike-pegasus-premium-vs-vomero-18',
    slug: 'nike-pegasus-premium-vs-vomero-18',
    title: '나이키 페가수스 프리미엄 vs 보메로 18 비교 | 같은 ZoomX, 9만원 차이 — 뭘 사야 하나',
    description: '나이키 페가수스 프리미엄(27.9만)과 보메로 18(18.9만), 둘 다 ZoomX+ReactX 듀얼 폼에 43mm 힐 스택입니다. 그런데 가격은 9만원이나 차이 나죠. 핵심은 Full-length Air Zoom Unit(반발력)과 와이드 옵션 유무입니다. 반발이냐 순수 쿠션이냐, 발볼·예산까지 따져 한국 러너에게 맞는 한 켤레를 골라드립니다.',
    thumbnail: '/images/blog/nike-pegasus-premium-vs-vomero-18.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-26',
    category: 'review' as const,
    readingTime: 9,
    tags: ['페가수스 프리미엄', '보메로 18', '나이키 데일리', 'ZoomX', '맥스 쿠션', '러닝화 비교'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>둘 다 ZoomX+ReactX 듀얼 폼 + 43mm 힐 스택</strong>이지만, <a href="/shoes/nike-pegasus-premium">페가수스 프리미엄</a>에는 <strong>Full-length Air Zoom Unit</strong>이 추가돼 반발력(8/10)이 살아있고, <a href="/shoes/nike-vomero-18">보메로 18</a>은 그게 없는 대신 <strong>순수 맥스 쿠션</strong>(반발 6/10)에 집중합니다</li>
    <li><strong>가격이 9만원 차이</strong>(프리미엄 27.9만 vs 보메로 18.9만). 그리고 결정적으로 <strong>보메로만 와이드·X-와이드 옵션이 있고, 프리미엄은 와이드가 없습니다</strong>. 발볼 넓은 한국 러너에겐 이게 사실상 결론을 정합니다</li>
    <li><strong>통통 튀는 데일리 + 발볼 좁음 + 예산 여유 → 페가수스 프리미엄</strong>, <strong>순수 쿠션·무릎 보호 + 발볼 넓음 + 가성비 → 보메로 18</strong>입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">⚖️</span>
  <div class="callout-body">
    <p class="callout-title">같은 ZoomX인데 왜 9만원이나 차이 날까</p>
    <p>두 신발은 미드솔 폼(ZoomX+ReactX)도, 힐 스택(43mm)도 같습니다. 그래서 "어차피 같은 거 아냐?"라고 생각하기 쉽죠. 하지만 <a href="/shoes/nike-pegasus-premium">페가수스 프리미엄</a>은 발 전체 길이의 <strong>Air Zoom Unit</strong>을 더 넣어 <strong>반발과 추진</strong>을 만들고, <a href="/shoes/nike-vomero-18">보메로 18</a>은 그 부품 없이 <strong>푹신함과 관절 보호</strong>에 올인합니다. 9만원의 차이는 곧 "통통 튀는 다재다능함이냐, 순수한 쿠션 가성비냐"의 차이입니다. 여기에 발볼 옵션까지 더하면 답이 꽤 명확해집니다.</p>
  </div>
</div>

<h2>스펙 비교</h2>
<table>
  <thead><tr><th>항목</th><th>페가수스 프리미엄</th><th>보메로 18</th></tr></thead>
  <tbody>
    <tr><td><strong>정가</strong></td><td>279,000원</td><td><strong>189,000원</strong></td></tr>
    <tr><td>무게(US 9)</td><td>308g</td><td>298g</td></tr>
    <tr><td>힐 / 전족 스택</td><td>43 / 31mm</td><td>43 / 29mm</td></tr>
    <tr><td>드롭</td><td>12mm</td><td>14mm</td></tr>
    <tr><td>미드솔</td><td>ZoomX+ReactX+<strong>Air Zoom Unit</strong></td><td>ZoomX+ReactX</td></tr>
    <tr><td>반발력</td><td><strong>8 / 10</strong></td><td>6 / 10</td></tr>
    <tr><td>쿠션</td><td>10 / 10</td><td>10 / 10</td></tr>
    <tr><td><strong>발볼 / 와이드</strong></td><td>좁음 · <strong>와이드 없음</strong></td><td>좁음 · <strong>와이드·X-와이드 O</strong></td></tr>
    <tr><td>최적 페이스</td><td>5:00~6:30/km</td><td>5:30~7:00/km</td></tr>
    <tr><td>내구성 / km당</td><td>600km / 약 300원</td><td>650km / 약 306원</td></tr>
  </tbody>
</table>
<p><small>※ 무게·스택·드롭은 실측/공식 기준, 가격은 나이키 코리아 공식 정가.</small></p>

<h2>핵심 차이 3가지</h2>
<h3>① Air Zoom Unit — "반발이 필요한가"</h3>
<p>가장 큰 구조적 차이입니다. 페가수스 프리미엄에는 발 전체에 걸친 <strong>Air Zoom Unit</strong>이 들어가 발을 앞으로 밀어주는 <strong>반발(8/10)</strong>을 만듭니다. 덕분에 같은 쿠션이라도 "통통 튀는" 느낌이고, 가끔 페이스를 올리는 날에도 대응이 됩니다. 보메로 18은 이 부품이 없어 <strong>순수하게 푹신한(반발 6/10)</strong> 쪽입니다. 회복런·LSD처럼 "편하게 오래"가 목적이면 보메로가, "쿠션은 두껍되 굴러가는 맛도 원한다"면 프리미엄이 맞습니다.</p>

<h3>② 와이드 옵션 — 발볼 넓으면 사실상 결론</h3>
<p>둘 다 표준은 좁은 편(narrow)입니다. 그런데 <strong>보메로 18은 와이드·X-와이드 옵션이 있고, 페가수스 프리미엄은 와이드가 없습니다.</strong> 발볼 넓은 한국 러너라면 이 한 줄로 답이 정해집니다 — 프리미엄은 매장에서 신어보고 맞아야만 선택지가 되고, 안 맞으면 대안이 없습니다. 발볼이 고민이라면 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 신발 가이드</a>를 함께 보세요.</p>

<h3>③ 가격 — 9만원으로 뭘 사는가</h3>
<p>프리미엄이 9만원 비쌉니다. 그 돈으로 사는 건 <strong>Air Zoom Unit의 반발 + 프리미엄 니트 어퍼</strong>입니다. 반대로 보메로는 9만원 아끼면서 와이드 선택지와 더 긴 내구성(650km)을 얻죠. 순수 쿠션 데일리로만 쓸 거라면 <strong>보메로 18의 가성비가 분명히 앞섭니다.</strong></p>

<div class="callout success">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">한 줄 정리</p>
    <p><strong>페가수스 프리미엄 = 반발 있는 다재다능 프리미엄 데일리</strong>(발볼 좁고 예산 여유 있는 러너). <strong>보메로 18 = 순수 맥스 쿠션의 가성비 정석</strong>(발볼 넓거나 무릎 보호·회복런 우선 러너). 대부분의 한국 러너에게는 와이드 옵션과 9만원 절약 때문에 <strong>보메로 18이 더 현실적인 선택</strong>입니다.</p>
  </div>
</div>

<h2>누가 어느 쪽?</h2>
<table>
  <thead><tr><th>이런 러너라면</th><th>추천</th></tr></thead>
  <tbody>
    <tr><td>쿠션은 두껍되 반발·페이스 변화도 원한다 · 발볼 좁음 · 예산 여유</td><td><strong>페가수스 프리미엄</strong></td></tr>
    <tr><td>순수 푹신함·무릎 보호·회복런/LSD 위주</td><td><strong>보메로 18</strong></td></tr>
    <tr><td>발볼이 넓다 (와이드 필요)</td><td><strong>보메로 18</strong> (프리미엄은 와이드 없음)</td></tr>
    <tr><td>가성비·내구성 우선</td><td><strong>보메로 18</strong> (9만원 저렴, 650km)</td></tr>
    <tr><td>나이키 니트 어퍼 프리미엄 감성</td><td><strong>페가수스 프리미엄</strong></td></tr>
  </tbody>
</table>

<h2>한국 러너 관점 FAQ</h2>
<div class="faq">
  <p class="faq-q">Q. 발볼 넓은데 페가수스 프리미엄 신어도 되나요?</p>
  <p class="faq-a">A. 권하기 어렵습니다. 표준이 좁은 편인데 와이드 옵션이 없어, 발볼 넓은 한국 러너는 장거리에서 눌림이 올 수 있습니다. 같은 ZoomX 쿠션을 원하면 와이드가 있는 보메로 18이 안전합니다.</p>
  <p class="faq-q">Q. 무릎이 걱정인데 어느 쪽이 낫나요?</p>
  <p class="faq-a">A. 둘 다 43mm 힐 스택으로 충격 흡수가 우수하지만, 보메로 18은 족저근막염·아킬레스·신스플린트 보호가 모두 최상위라 관절 보호 종합력이 살짝 앞섭니다. 맥스 쿠션을 더 넓게 비교하려면 <a href="/blog/max-cushion-running-shoes-knee-protection-2026">맥스 쿠션 가이드</a>를 보세요.</p>
  <p class="faq-q">Q. 초보 첫 신발로는?</p>
  <p class="faq-a">A. 둘 다 입문~데일리로 무난합니다. 예산이 빠듯하면 보메로 18(18.9만)이, 반발 있는 다재다능함을 원하면 페가수스 프리미엄이 맞습니다. 단 둘 다 308·298g으로 무거운 편이라, 빠른 훈련용으로는 별도의 가벼운 신발을 두는 걸 권합니다.</p>
  <p class="faq-q">Q. 보메로 18 대신 볼 만한 맥스 쿠션은?</p>
  <p class="faq-a">A. <a href="/shoes/hoka-bondi-9">호카 본디 9</a>, <a href="/shoes/asics-gel-nimbus-28">아식스 젤 님버스 28</a>이 같은 맥스 쿠션 카테고리의 대표 대안입니다.</p>
</div>

<div class="callout info">
  <span class="callout-icon">🔗</span>
  <div class="callout-body">
    <p class="callout-title">한 걸음 더</p>
    <p>각 신발의 전체 스펙·실측·구매 링크는 <a href="/shoes/nike-pegasus-premium">페가수스 프리미엄 상세</a> · <a href="/shoes/nike-vomero-18">보메로 18 상세</a>에서 확인하세요. 두 신발을 항목별로 나란히 보려면 <a href="/compare">비교 도구</a>를, 내 발·목표에 맞는 추천은 <a href="/recommend">맞춤 추천</a>을 이용하세요.</p>
  </div>
</div>

<p class="post-disclaimer"><small>※ 가격은 나이키 코리아 공식 정가 기준이며 시기·채널에 따라 달라질 수 있습니다. 스펙은 RunRepeat 실측 및 브랜드 공식 기준입니다.</small></p>
`,
  },
  {
    id: 'new-balance-sc-elite-v5-review',
    slug: 'new-balance-sc-elite-v5-review',
    title: '뉴발란스 SC Elite V5 후기 | 발볼 넓어도 신는 카본 슈퍼슈즈 — 74.5mm 토박스·198g 솔직 리뷰',
    description: '뉴발란스 SC Elite V5, 발볼 넓어서 베이퍼플라이를 포기했던 한국 러너에게 답이 되는 카본 슈퍼슈즈입니다. 74.5mm 토박스는 슈퍼슈즈 중 가장 넓고, v4 대비 30g 빠진 198g로 드디어 경쟁력에 도달했죠. 가을 레이싱을 앞두고 74.8% 에너지 리턴·가성비·약점까지 솔직하게 정리했습니다.',
    thumbnail: '/images/blog/new-balance-sc-elite-v5-review.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-26',
    category: 'review' as const,
    readingTime: 9,
    tags: ['뉴발란스 SC Elite', 'SC Elite V5', '카본 슈퍼슈즈', '레이싱화', '넓은 토박스', '마라톤 레이싱'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>SC Elite V5의 정체성은 "발볼 넓어도 신을 수 있는 카본 슈퍼슈즈"</strong>입니다. 토박스 74.5mm로 <a href="/shoes/nike-vaporfly-4">베이퍼플라이</a>(67.8mm)·<a href="/shoes/nike-alphafly-3">알파플라이</a>(68.4mm)보다 압도적으로 넓어, 레이스 후반 발가락 눌림이 고질병이던 한국 러너에게 사실상 유일한 선택지입니다</li>
    <li><strong>v4 대비 30g 빠진 198g</strong>로 드디어 경쟁 슈퍼슈즈 수준에 도달했습니다. 100% PEBA FuelCell 폼(HA 15.2 울트라소프트)이 74.8% 에너지 리턴을 내고, 0.61 그립으로 젖은 노면도 안정적입니다</li>
    <li><strong>29만원(할인가)으로 베이퍼플라이(31만원)보다 저렴</strong>합니다. 다만 최상위 슈퍼슈즈만큼의 순수 반발력은 아니라, 서브3 이하 엘리트보다 <strong>서브3~3:30 + 넓은 발볼</strong> 러너에게 가장 잘 맞습니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">👟</span>
  <div class="callout-body">
    <p class="callout-title">"발볼 넓은데 카본화 신을 게 없어요"의 답</p>
    <p>카본 슈퍼슈즈는 대부분 발을 꽉 잡는 좁은 레이싱 핏입니다. 그래서 발볼 넓은 한국 러너는 <a href="/shoes/nike-vaporfly-4">베이퍼플라이</a>를 신고 30km 지나면 새끼발가락이 비명을 지르죠. <a href="/shoes/new-balance-sc-elite-v5">뉴발란스 SC Elite V5</a>는 정확히 그 지점을 노린 신발입니다. 슈퍼슈즈의 추진력은 가져가되 <strong>토박스를 가장 넓게</strong> 풀어, "발볼 때문에 카본을 포기했던" 러너를 다시 레이스로 불러옵니다. 가을 마라톤 시즌을 앞두고 카본화를 고민한다면 후보에 꼭 넣어야 할 모델입니다.</p>
  </div>
</div>

<h2>스펙 한눈에</h2>
<table>
  <thead><tr><th>항목</th><th>SC Elite V5</th><th>의미</th></tr></thead>
  <tbody>
    <tr><td>카테고리</td><td>카본 레이싱</td><td>뉴발 최상위 슈퍼슈즈</td></tr>
    <tr><td>무게(US 9)</td><td><strong>198g</strong></td><td>v4 대비 30g+ 감량, 경쟁력 도달</td></tr>
    <tr><td>힐 / 전족 스택</td><td>39 / 29mm</td><td>드롭 8mm(공식) / 실측 약 10.7mm</td></tr>
    <tr><td>미드솔</td><td>FuelCell (100% PEBA)</td><td>HA 15.2 울트라소프트</td></tr>
    <tr><td>플레이트</td><td>풀렝스 카본</td><td>Energy Arc 곡률로 빠른 전환</td></tr>
    <tr><td>에너지 리턴</td><td>74.8%</td><td>상위권 (SA 144 충격흡수)</td></tr>
    <tr><td><strong>토박스</strong></td><td><strong>74.5mm</strong></td><td>슈퍼슈즈 중 가장 넓음 + 와이드 옵션</td></tr>
    <tr><td>최적 페이스</td><td>3:30~4:30/km</td><td>서브3~3:30 마라토너</td></tr>
    <tr><td>내구성 / 가격</td><td>300km / 319,000원</td><td>할인가 29만, km당 약 1,000원</td></tr>
  </tbody>
</table>
<p><small>※ 무게·스택·SA·에너지 리턴·토박스는 RunRepeat 실측 기준. 가격은 뉴발란스 코리아 공식 정가(할인 시 299,000원 안팎).</small></p>

<h2>실제로 어떤 느낌이냐</h2>
<h3>넓은 토박스 — 이게 전부라고 해도 될 만큼</h3>
<p>SC Elite V5를 사는 이유의 8할은 여기 있습니다. <strong>74.5mm 토박스</strong>는 베이퍼플라이(67.8mm), 알파플라이(68.4mm)보다 6~7mm 넓습니다. 숫자로는 작아 보여도, 레이스 후반 발이 부으면 이 차이가 "완주 가능"과 "고통"을 가릅니다. 발볼 넓은 한국 러너가 <strong>카본의 추진력을 누리면서 발가락 눌림에서 자유로운</strong> 거의 유일한 슈퍼슈즈입니다. 와이드 옵션까지 있어 선택이 더 쉽습니다.</p>

<h3>반발 — 부드럽게 굴러가되 폭발적이진 않다</h3>
<p>100% PEBA FuelCell 폼은 HA 15.2로 매우 부드럽고, 74.8% 에너지 리턴은 분명 상위권입니다. 새 Energy Arc 플레이트 곡률이 중족부에서 전족부로의 전환을 매끄럽게 만들어, 3:30~4:30/km 페이스에서 자연스럽게 굴러갑니다. 다만 솔직히 말하면 <strong>알파플라이 같은 "튕겨내는" 폭발력은 아닙니다.</strong> 부드럽게 밀어주는 쪽이라, 순수 반발 최대치를 원하는 서브3 이하 엘리트에겐 다른 선택이 나을 수 있습니다.</p>

<h3>무게·그립 — 드디어 경쟁권, 비 와도 안심</h3>
<p>v4의 가장 큰 약점이 무게였는데, V5는 <strong>30g 이상 빼서 198g</strong>이 됐습니다. 이제 "뉴발은 무겁다"는 말은 옛말입니다. 0.61의 뛰어난 그립력은 한국 가을 대회의 변덕스러운 날씨(이슬·비)에서도 미끄러짐 걱정을 덜어줍니다.</p>

<div class="callout success">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">한 줄 정리: "넓은 발 + 카본"의 교집합</p>
    <p>SC Elite V5는 "가장 빠른 슈퍼슈즈"를 노리는 신발이 아닙니다. <strong>발볼이 넓어서 그동안 카본화를 못 신었던 서브3~3:30 마라토너</strong>에게 추진력과 편안함을 동시에 주는, 교집합을 정조준한 신발입니다. 거기에 베이퍼플라이보다 싼 가격은 덤입니다.</p>
  </div>
</div>

<h2>이런 러너에게 추천 / 이런 러너는 다시 생각</h2>
<table>
  <thead><tr><th>✅ 잘 맞는 러너</th><th>❌ 안 맞는 러너</th></tr></thead>
  <tbody>
    <tr><td>발볼이 넓어 좁은 카본화가 불편했다</td><td>서브3 이하, 순수 반발 최대치가 목표</td></tr>
    <tr><td>서브3~3:30 마라톤 목표</td><td>안정성이 꼭 필요한 과내전 러너</td></tr>
    <tr><td>이전 SC Elite가 무거워 포기했다</td><td>최경량(180g대) 슈퍼슈즈를 원한다</td></tr>
    <tr><td>베이퍼플라이보다 싼 카본을 찾는다</td><td>데일리·훈련용으로도 쓰려는 러너</td></tr>
  </tbody>
</table>

<h2>경쟁 카본 슈퍼슈즈와 비교</h2>
<p>같은 30만원대 카본 레이서를 함께 보면 SC Elite V5의 자리가 명확해집니다. 카본화가 처음이라면 <a href="/blog/carbon-plate-shoes-comparison-2025">카본 플레이트화의 원리</a>부터 보세요.</p>
<ul>
  <li><strong><a href="/shoes/nike-alphafly-3">나이키 알파플라이 3</a></strong> — 순수 반발·기록 최대치. 단 좁은 토박스. SC Elite는 "편한 발볼"로 차별화.</li>
  <li><strong><a href="/shoes/asics-metaspeed-sky-plus">아식스 메타스피드 스카이+</a></strong> — 스트라이드 주자용 폭발력. 토박스는 SC Elite가 더 여유.</li>
  <li><strong><a href="/shoes/saucony-endorphin-pro-5">써코니 엔돌핀 프로 5</a></strong> — 29.9만으로 비슷한 가격대 + 넉넉한 핏. SC Elite와 직접 경쟁. <a href="/blog/saucony-endorphin-lineup-2026-guide">엔돌핀 라인업 가이드</a> 참고.</li>
  <li><strong><a href="/shoes/adidas-adios-pro-4">아디다스 아디오스 프로 4</a></strong> — EnergyRods의 통통 튀는 감각. 발볼은 좁은 편.</li>
</ul>

<h2>자주 묻는 질문</h2>
<div class="faq">
  <p class="faq-q">Q. 발볼이 넓은데 베이퍼플라이 대신 이거 신어도 되나요?</p>
  <p class="faq-a">A. 바로 그 케이스를 위한 신발입니다. 토박스 74.5mm는 슈퍼슈즈 중 가장 넓고 와이드 옵션도 있어, 발볼 때문에 카본화를 포기했던 러너에게 1순위로 권합니다. 레이스 후반 발가락 눌림이 확연히 줄어듭니다.</p>
  <p class="faq-q">Q. 초보도 신을 수 있나요?</p>
  <p class="faq-a">A. 권하지 않습니다. 카본 슈퍼슈즈는 3:30~4:30/km 페이스 이상에서 진가가 나오고, 내구성도 300km로 짧아 레이스 전용입니다. 입문~중급이라면 훈련용 슈퍼폼화(예: <a href="/shoes/saucony-endorphin-speed-5">엔돌핀 스피드 5</a>)부터 경험하는 게 순서입니다.</p>
  <p class="faq-q">Q. 무릎은 괜찮나요?</p>
  <p class="faq-a">A. 39mm 힐 스택과 부드러운 FuelCell 폼이 충격을 잘 흡수해 무릎 부담은 적은 편이고, 아킬레스 보호는 특히 우수합니다. 다만 카본 플레이트 특성상 종아리·발바닥에 평소와 다른 부하가 걸리니, 대회 전 몇 차례 적응 런으로 길들이세요.</p>
  <p class="faq-q">Q. 가격값을 하나요?</p>
  <p class="faq-a">A. 할인가 29만원으로 베이퍼플라이(31만)보다 싸고, "넓은 발볼 + 카본"이라는 교집합에서는 대안이 거의 없어 그 가치가 분명합니다. 단 300km 내구성이라 풀마라톤 3~4회 분량, km당 약 1,000원의 레이스 전용 신발이라는 점은 감안하세요.</p>
</div>

<div class="callout info">
  <span class="callout-icon">🔗</span>
  <div class="callout-body">
    <p class="callout-title">한 걸음 더</p>
    <p>SC Elite V5의 전체 스펙·실측 데이터·구매 링크는 <a href="/shoes/new-balance-sc-elite-v5">SC Elite V5 상세 페이지</a>에서 확인하세요. 발볼 고민이 늘 있다면 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 신발 가이드</a>, 가을 대회 준비라면 <a href="/marathon">마라톤 대회 일정</a>에서 목표 레이스를 정하고 거리에 맞는 신발을 골라보세요.</p>
  </div>
</div>

<p class="post-disclaimer"><small>※ 가격은 뉴발란스 코리아 공식 정가 기준이며 시기·채널에 따라 달라질 수 있습니다. 랩 수치(무게·스택·SA·에너지 리턴·토박스)는 RunRepeat 실측 기준입니다. 카본화는 빠른 페이스 레이스 전용으로, 적응 기간을 두고 사용하길 권합니다.</small></p>
`,
  },
  {
    id: 'hoka-bondi-9-review',
    slug: 'hoka-bondi-9-review',
    title: '호카 본디 9 후기 | 무릎·관절 보호 최강 맥시멀 쿠션 — 발볼·무게·가성비 솔직 리뷰',
    description: '호카 본디 9, 무릎이 걱정되는 러너에게 가장 먼저 추천되는 맥시멀 쿠션화입니다. 41mm 스택과 SA 146 충격흡수로 관절 보호는 최상위급이지만, 303g 무게와 좁은 토박스(72.5mm)는 분명한 약점이죠. 부상 이력·체중·회복런 러너에게 맞는지, 발볼 넓은 한국 러너의 와이드 선택까지 솔직하게 정리했습니다.',
    thumbnail: '/images/blog/hoka-bondi-9-review.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-26',
    category: 'review' as const,
    readingTime: 9,
    tags: ['호카 본디 9', '본디 9 후기', '맥시멀 쿠션', '무릎 보호 러닝화', '관절 보호', '쿠션화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>본디 9는 "무릎이 걱정될 때 가장 먼저 떠오르는" 맥시멀 쿠션의 정석</strong>입니다. 41mm 힐 스택과 SA 146 충격흡수, 123.2mm 초광폭 플랫폼으로 무릎·발목·족저근막 보호가 전부 최상위급(excellent). 부상 이력·체중 있는 러너·회복런 러너의 '관절 보험'입니다</li>
    <li><strong>대가는 무게(303g)와 느린 반응성(5/10)</strong>입니다. 빠른 템포·인터벌엔 안 맞고, 6~8분/km의 편안한 페이스에서 진가가 나옵니다. 스피드를 원하면 본디가 아니라 <a href="/shoes/hoka-clifton-10">클리프톤</a>이나 다른 신발을 보세요</li>
    <li><strong>토박스가 72.5mm로 좁은 편</strong>이라 발볼 넓은 한국 러너는 <strong>와이드 옵션이 사실상 필수</strong>입니다. 정가 22.9만(세일 19.5만~), 550km 내구성에 km당 약 400원으로 가성비도 합리적입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🦵</span>
  <div class="callout-body">
    <p class="callout-title">"무릎 괜찮은 쿠션화 추천해주세요"의 단골 정답</p>
    <p>러닝 커뮤니티에서 무릎·발목 걱정이 나올 때마다 빠지지 않고 등장하는 이름이 <a href="/shoes/hoka-bondi-9">호카 본디 9</a>입니다. 호카 라인업에서 <strong>가장 두껍게 쿠션을 깐 맥시멀 쿠션화</strong>이고, 그게 정확히 이 신발의 존재 이유죠. 다만 "푹신하다=좋다"로 끝나는 신발이 아닙니다. 무게·발볼·페이스라는 분명한 트레이드오프가 있어서, <strong>내가 본디를 신어야 할 사람인지부터 가려야</strong> 후회가 없습니다. 이 글은 그 판단을 도와드립니다.</p>
  </div>
</div>

<h2>스펙 한눈에</h2>
<table>
  <thead><tr><th>항목</th><th>본디 9</th><th>의미</th></tr></thead>
  <tbody>
    <tr><td>카테고리</td><td>맥시멀 쿠션화</td><td>호카 최대 쿠션 라인</td></tr>
    <tr><td>무게(US 9)</td><td><strong>303g</strong></td><td>무거운 편 (글리세린 22보다 +20g)</td></tr>
    <tr><td>힐 / 전족 스택</td><td>41 / 32mm</td><td>드롭 9mm, 두툼한 힐</td></tr>
    <tr><td>미드솔</td><td>Supercritical EVA</td><td>일반 EVA보다 탄성 오래 유지</td></tr>
    <tr><td>충격흡수(SA)</td><td>146</td><td>관절 보호 최상위급</td></tr>
    <tr><td>플랫폼 폭</td><td>123.2mm</td><td>초광폭 → 안정성 8/10</td></tr>
    <tr><td>토박스</td><td>72.5mm (좁은 편)</td><td><strong>발볼 넓으면 와이드 필수</strong></td></tr>
    <tr><td>최적 페이스</td><td>6:00~8:00/km</td><td>느린 조깅·회복런 전용</td></tr>
    <tr><td>내구성 / 가격</td><td>550km / 229,000원</td><td>km당 약 400원</td></tr>
  </tbody>
</table>
<p><small>※ 무게·스택·SA·토박스는 RunRepeat 실측 기준. 가격은 호카 코리아 공식 정가(세일 시 195,000원 안팎).</small></p>

<h2>실제로 어떤 느낌이냐</h2>
<h3>쿠션 — "바닥이 안 꺼진다"는 안정감</h3>
<p>본디 9의 핵심은 <strong>41mm 힐 스택 + SA 146</strong> 조합이 만드는 두툼하면서도 무너지지 않는 발밑입니다. Supercritical EVA 폼이 일반 EVA보다 탄성을 오래 유지해서, 25km 롱런 후반에도 발바닥 피로가 확연히 적습니다. 무엇보다 <strong>123.2mm 초광폭 플랫폼</strong>이 받쳐줘서 "푹신한데 흔들리지 않는다"는 게 본디의 진짜 장점입니다. 맥시멀 쿠션화는 자칫 물렁해서 불안정하기 쉬운데, 본디는 안정성을 8/10까지 끌어올렸습니다.</p>

<h3>무게·반응성 — 빠르게 달릴 신발은 아니다</h3>
<p>솔직하게, <strong>303g은 무겁습니다.</strong> 반응성도 5/10이라 발을 차고 나가는 탄발력은 약합니다. 그룹런에서 페이스가 4~5분대로 올라가면 발이 무겁게 느껴지고, 인터벌·템포 훈련엔 전혀 맞지 않습니다. 본디는 <strong>6~8분/km의 편안한 페이스에서 가장 행복한 신발</strong>입니다. 회복런, 장거리 LSD, 출퇴근·산책 겸용으로 쓸 때 무게는 거의 문제가 되지 않습니다.</p>

<div class="callout success">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">한 줄 요약: 본디는 '속도'가 아니라 '보호'를 사는 신발</p>
    <p>본디 9를 사면서 빠른 기록을 기대하면 실망합니다. 반대로 <strong>"오래, 다치지 않고, 편하게 달리고 싶다"</strong>가 목표라면 이만한 신발이 드뭅니다. 무릎·발목·족저근막 보호가 모두 최상위(excellent)라, 부상 이력이 있거나 관절이 걱정되는 러너에게는 사실상 '러닝 보험'에 가깝습니다.</p>
  </div>
</div>

<h2>이런 러너에게 추천 / 이런 러너는 다시 생각</h2>
<table>
  <thead><tr><th>✅ 잘 맞는 러너</th><th>❌ 안 맞는 러너</th></tr></thead>
  <tbody>
    <tr><td>무릎·발목 부상 이력이 있다</td><td>인터벌·템포 등 빠른 훈련 위주</td></tr>
    <tr><td>체중이 있는 편이라 충격이 걱정</td><td>가벼운 신발을 선호한다</td></tr>
    <tr><td>회복런·LSD 장거리용을 찾는다</td><td>민첩한 방향 전환이 필요하다</td></tr>
    <tr><td>장시간 서있는 직업 + 러닝 겸용</td><td>대회 기록 단축이 1순위</td></tr>
    <tr><td>평발이라 안정적 베이스가 필요</td><td>발볼이 아주 넓은데 와이드가 싫다</td></tr>
  </tbody>
</table>

<h2>한국 러너가 꼭 체크할 것</h2>
<ul>
  <li><strong>① 발볼 — 본디는 전통적으로 토박스가 좁습니다.</strong> 9에서도 실측 72.5mm로 좁은 편이라, 발볼 넓은 한국 러너 평균 기준으로는 <strong>표준(D)보다 와이드 옵션을 강력 권장</strong>합니다. 다행히 본디는 와이드가 정식 발매돼 선택이 쉽습니다. 발볼이 늘 고민이라면 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 신발 가이드</a>를 함께 보세요.</li>
  <li><strong>② 무릎·관절 — 본디의 최대 강점입니다.</strong> SA 146 충격흡수 + 41mm 스택은 무릎 통증 이력 러너에게 체감이 확실합니다. 다만 신발이 만능은 아니니, 통증 관리 전반은 <a href="/blog/knee-pain-running-shoes">무릎 통증 러너를 위한 신발 가이드</a>와 <a href="/blog/plantar-fasciitis-running-shoes-2026">족저근막염 러닝화 가이드</a>를 참고하세요.</li>
  <li><strong>③ 여름 통기성은 '보통'입니다.</strong> 두툼한 구조 특성상 한여름 고온다습 환경에선 발이 더울 수 있습니다(통기성 fair). 장마·폭염철 데일리로 쓴다면 양말·통풍을 신경 쓰세요.</li>
</ul>

<h2>비슷한 맥시멀 쿠션화와 비교</h2>
<p>"본디가 답인가, 다른 게 나은가"를 고민한다면 같은 맥시멀 쿠션 3종을 함께 보세요. 무릎 보호용 맥스 쿠션을 폭넓게 비교한 <a href="/blog/max-cushion-running-shoes-knee-protection-2026">맥스 쿠션 러닝화 가이드</a>도 도움이 됩니다.</p>
<ul>
  <li><strong><a href="/shoes/asics-gel-nimbus-28">아식스 젤 님버스 28</a></strong> — 본디만큼 푹신하면서 토박스가 더 넉넉한 편. 발볼 때문에 본디가 부담되면 1순위 대안.</li>
  <li><strong><a href="/shoes/new-balance-1080-v14">뉴발란스 1080 V14</a></strong> — 부드러운 착화감과 데일리 활용도. 쿠션+가벼운 만능형을 원할 때.</li>
  <li><strong><a href="/shoes/brooks-glycerin-22">브룩스 글리세린 22</a></strong> — 본디보다 20g 가벼우면서 부드러운 쿠션. 무게가 거슬리면 검토.</li>
</ul>

<h2>자주 묻는 질문</h2>
<div class="faq">
  <p class="faq-q">Q. 무릎이 안 좋은데 본디 9 신어도 되나요?</p>
  <p class="faq-a">A. 본디가 빛나는 지점이 바로 그것입니다. SA 146 충격흡수와 41mm 스택으로 무릎·발목 보호가 최상위급이라, 통증 이력이 있는 러너에게 가장 자주 추천됩니다. 단 신발이 치료는 아니니, 통증이 지속되면 페이스·거리 조절과 함께 전문의 상담을 병행하세요.</p>
  <p class="faq-q">Q. 러닝 초보인데 본디 9 괜찮을까요?</p>
  <p class="faq-a">A. 좋습니다. 느린 페이스에서 가장 편한 신발이라 입문자의 천천히 달리기·걷뛰기에 잘 맞습니다. 다만 본격적으로 속도를 올리는 단계가 오면 무게(303g)가 걸림돌이 될 수 있어, 그때는 가벼운 데일리화를 한 켤레 더 두는 걸 권합니다.</p>
  <p class="faq-q">Q. 발볼이 넓은데 표준으로 살까요, 와이드로 살까요?</p>
  <p class="faq-a">A. 발볼이 넓다면 <strong>와이드</strong>입니다. 본디는 토박스가 72.5mm로 좁은 편이라, 표준(D)으로 사면 장거리에서 발가락이 눌릴 수 있습니다. 와이드를 선택한 한국 러너 후기가 "딱 맞는다"로 일관됩니다.</p>
  <p class="faq-q">Q. 체중이 좀 나가는 편인데 쿠션이 꺼지지 않을까요?</p>
  <p class="faq-a">A. 본디의 123.2mm 초광폭 플랫폼과 Supercritical EVA가 체중 있는 러너에게 특히 유리합니다. 90kg대 러너도 "바닥이 안 꺼진다"는 후기를 남길 만큼 지지력이 좋습니다. 맥시멀 쿠션 중에서도 안정성(8/10)이 높은 편이라 안심하고 신을 수 있습니다.</p>
</div>

<div class="callout info">
  <span class="callout-icon">🔗</span>
  <div class="callout-body">
    <p class="callout-title">한 걸음 더</p>
    <p>본디 9의 전체 스펙·실측 데이터·구매 링크는 <a href="/shoes/hoka-bondi-9">본디 9 상세 페이지</a>에서 확인하세요. 호카 안에서 더 가볍고 빠른 데일리를 찾는다면 <a href="/shoes/hoka-clifton-10">클리프톤 10</a>, 무릎 보호 맥스 쿠션을 폭넓게 비교하려면 <a href="/blog/max-cushion-running-shoes-knee-protection-2026">맥스 쿠션 가이드</a>를 추천합니다.</p>
  </div>
</div>

<p class="post-disclaimer"><small>※ 가격은 호카 코리아 공식 정가 기준이며 시기·채널에 따라 달라질 수 있습니다. 랩 수치(무게·스택·SA·토박스)는 RunRepeat 실측 기준입니다. 부상 관련 내용은 일반적 정보이며, 통증이 지속되면 전문의 상담을 권합니다.</small></p>
`,
  },
  {
    id: 'saucony-endorphin-lineup-2026-guide',
    slug: 'saucony-endorphin-lineup-2026-guide',
    title: '써코니 엔돌핀 4종 완벽 가이드 | 7/1 라인업 — 아주라·스피드5·프로5·엘리트3, 내 레이스엔 어떤 거?',
    description: '써코니가 2026 엔돌핀 라인을 전면 리뉴얼했습니다. 한국 공식몰 7/1 기준 아주라(18.9만)·스피드 5(21.9만)·프로 5(29.9만)·엘리트 3(36.9만) 4단 구성으로 정비됐죠. 데일리 슈퍼폼부터 풀카본 레이서까지 — 목표 기록·주간 거리·예산·발볼로 내게 맞는 엔돌핀 한 켤레를 골라드립니다.',
    thumbnail: '/images/blog/saucony-endorphin-lineup-2026-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-26',
    category: 'guide' as const,
    readingTime: 10,
    tags: ['써코니 엔돌핀', '엔돌핀 스피드 5', '엔돌핀 프로 5', '엔돌핀 아주라', '엔돌핀 엘리트', '러닝화 추천'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>써코니 엔돌핀이 2026년 4단 라인업으로 정비됐습니다</strong> — 한국 공식몰 7/1 기준 <a href="/shoes/saucony-endorphin-azura">아주라(18.9만)</a> → <a href="/shoes/saucony-endorphin-speed-5">스피드 5(21.9만)</a> → <a href="/shoes/saucony-endorphin-pro-5">프로 5(29.9만)</a> → 엘리트 3(36.9만, 신형). 폼·플레이트·가격이 한 칸씩 올라가는 '사다리' 구조입니다</li>
    <li><strong>고민은 딱 두 축</strong>입니다 — ① 카본 플레이트가 필요한가(레이스 위주) ② 예산이 어디까지인가. 데일리·입문이면 <strong>아주라</strong>, 훈련+하프 대회를 한 켤레로 잡고 싶으면 <strong>스피드 5(가성비 갓신발)</strong>, 본격 풀마라톤 카본이면 <strong>프로 5</strong>, 서브3 엘리트면 <strong>엘리트 3</strong></li>
    <li><strong>4종 모두 와이드 옵션이 없습니다.</strong> 아주라·스피드·프로는 표준 토박스라 시착하면 대부분 괜찮지만, 엘리트는 좁은 편이라 발볼 넓은 한국 러너는 주의하세요</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🪜</span>
  <div class="callout-body">
    <p class="callout-title">엔돌핀 = 써코니의 '스피드 사다리'</p>
    <p>써코니의 스피드 라인은 전부 <strong>엔돌핀</strong>이라는 이름을 답니다. 2026년 들어 라인이 대거 갱신되면서 한국 공식몰 기준 <strong>아주라 → 스피드 5 → 프로 5 → 엘리트 3</strong> 4단으로 정리됐습니다. 핵심은 위로 갈수록 <strong>플레이트가 강해지고(없음 → 나일론 → 카본) 폼이 비싸지고(PWRRUN PB → IncrediRUN) 가격이 오른다</strong>는 것. 그래서 "엔돌핀 뭐 사지?"의 답은 모델 스펙 암기가 아니라 <strong>내가 사다리의 어느 칸에 서 있나</strong>를 정하는 데서 나옵니다. 엘리트 3는 7/1 출시됐지만 아직 RunRepeat 랩 데이터가 없어, 본문 수치는 <a href="/shoes/saucony-endorphin-elite-2">엘리트 2</a> 실측 + 공식 라인업 기준입니다. 확정 변경점은 <a href="/blog/saucony-endorphin-elite-3-preview-2026">엘리트 3 프리뷰</a> 참고.</p>
  </div>
</div>

<h2>엔돌핀 4종 한눈 비교</h2>
<table>
  <thead>
    <tr><th>항목</th><th>아주라</th><th>스피드 5</th><th>프로 5</th><th>엘리트 3</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>포지션</strong></td><td>데일리 슈퍼폼</td><td>만능 템포</td><td>카본 레이서</td><td>엘리트 레이스</td></tr>
    <tr><td><strong>정가</strong></td><td>189,000원</td><td>219,000원</td><td>299,000원</td><td>369,000원<br><small>(신형·잠정)</small></td></tr>
    <tr><td>무게(US 9)</td><td>240g</td><td>241g</td><td><strong>206g</strong></td><td>~197g<br><small>(엘리트 2)</small></td></tr>
    <tr><td>스택(힐/전족)</td><td>40 / 32mm</td><td>37 / 27mm</td><td>40 / 32mm</td><td>40 / 32mm</td></tr>
    <tr><td>드롭</td><td>8mm</td><td>8mm</td><td>8mm</td><td>8mm</td></tr>
    <tr><td><strong>플레이트</strong></td><td>없음</td><td>나일론</td><td>슬롯 카본</td><td>풀 카본</td></tr>
    <tr><td>미드솔 폼</td><td>PWRRUN PB</td><td>PWRRUN PB</td><td>PWRRUN HG+PB</td><td><strong>IncrediRUN</strong></td></tr>
    <tr><td>주 용도</td><td>이지~템포</td><td>템포·하프</td><td>하프~풀 레이스</td><td>풀 레이스데이</td></tr>
    <tr><td>발볼(토박스)</td><td>표준</td><td>표준</td><td>표준</td><td><strong>좁음</strong></td></tr>
    <tr><td>km당 비용</td><td><strong>315원</strong></td><td>438원</td><td>997원</td><td>1,695원</td></tr>
  </tbody>
</table>
<p><small>※ 무게·스택·km당 비용은 RunRepeat 실측 및 한국 공식 정가 기준. 엘리트 3는 한국 미입고로 엘리트 2 실측치를 참고로 표기했으며, 정가 369,000원은 잠정값입니다.</small></p>

<h2>한 켤레씩 뜯어보기</h2>

<h3>1. 아주라 — 카본 없이도 굴러가는 '입문 슈퍼폼' (18.9만)</h3>
<p><a href="/shoes/saucony-endorphin-azura">엔돌핀 아주라</a>는 스피드에서 <strong>나일론 플레이트를 빼고 스택을 40mm로 높인 '플레이트리스 퍼포먼스 트레이너'</strong>입니다. 비싼 <strong>PWRRUN PB 슈퍼폼(PEBA 계열)</strong>과 SPEEDROLL 로커가 만드는 스냅피한 전환감이 핵심이라, 플레이트 없이도 충분히 빠르게 굴러갑니다. 6분/km 이지런부터 4분 30초/km 템포런까지 한 켤레로 커버하죠.</p>
<p>플레이트가 없다는 건 <strong>발목·아킬레스 부담이 적어 매일 신기 편하다</strong>는 뜻입니다. 600km 내구성에 km당 315원으로 엔돌핀 4종 중 <strong>가성비 1위</strong>. "써코니 슈퍼폼이 궁금한데 카본은 부담스럽다"는 입문~중급 러너의 첫 엔돌핀으로 가장 안전한 선택입니다. 경쟁작은 <a href="/shoes/adidas-adizero-evo-sl">아디제로 에보 SL</a>, <a href="/shoes/new-balance-rebel-v5">뉴발란스 레벨 v5</a>, <a href="/shoes/puma-velocity-nitro-4">푸마 벨로시티 나이트로 4</a>입니다.</p>

<h3>2. 스피드 5 — 커뮤니티가 인정한 '가성비 갓신발' (21.9만)</h3>
<p>러닝 커뮤니티에서 "<strong>갓신발</strong>"이라 불리는 데는 이유가 있습니다. <a href="/shoes/saucony-endorphin-speed-5">엔돌핀 스피드 5</a>는 21만 9천원에 <strong>73.2% 에너지 리턴(슈퍼슈즈급)</strong>을 제공하면서, 카본이 아닌 <strong>나일론 플레이트</strong>를 써서 매일 훈련에 투입해도 무리가 없습니다. v4 대비 폼이 소프트(HA 18.5)해지고 토박스가 넓어져 착화감도 개선됐죠.</p>
<p>이 신발의 진짜 가치는 <strong>'한 켤레로 다 된다'</strong>는 만능성입니다. 평일 템포·인터벌 훈련은 물론, 하프마라톤 레이스에 그대로 신고 나가도 손색이 없습니다. 통기성도 5/5라 여름 템포런에 쾌적하고, 500km 내구성에 km당 438원. "슈퍼슈즈 사기 전에 실력부터 키우자"는 서브4~서브3:30 목표 러너에게 최적이고, 솔직히 많은 러너에게는 <strong>이 한 켤레면 충분</strong>합니다.</p>

<div class="callout success">
  <span class="callout-icon">💡</span>
  <div class="callout-body">
    <p class="callout-title">엔돌핀 입문이라면 90%는 여기서 끝</p>
    <p>"엔돌핀 라인 중에 뭐 살까"로 검색해서 여기까지 왔다면, 높은 확률로 답은 <strong>아주라 아니면 스피드 5</strong>입니다. 프로·엘리트는 <strong>대회 기록을 1초라도 당기려는 사람의 무기</strong>이고, 그만큼 내구성(300km/200km)이 짧아 데일리로 쓰면 손해입니다. 훈련 위주면 아주라, 훈련+가끔 레이스면 스피드 5 — 이 둘로 시작하세요.</p>
  </div>
</div>

<h3>3. 프로 5 — 발볼 넉넉한 '풀마라톤 카본' (29.9만)</h3>
<p><a href="/shoes/saucony-endorphin-pro-5">엔돌핀 프로 5</a>는 본격 카본 레이서입니다. <strong>풀렝스 슬롯형 카본 플레이트</strong>와 PWRRUN HG(상층)+PB(하층) 듀얼 폼으로 206g 경량에 강한 추진력을 냅니다. 전작과 동일한 206g/39.5mm 스택을 유지하면서 카본을 슬롯 디자인으로 바꿔 <strong>전환 효율</strong>을 높였고, PWRTRAC 아웃솔이 새로 적용돼 젖은 노면 그립도 좋아졌습니다.</p>
<p>한국 러너에게 프로 5의 강점은 <strong>넉넉한 토박스</strong>입니다. <a href="/shoes/nike-vaporfly-4">베이퍼플라이 4</a>(30.9만)보다 1만원 싸면서 핏이 넓고 플랫폼이 안정적이라, 발볼 때문에 나이키 레이서를 포기했던 러너에게 현실적인 대안이 됩니다. 다만 300km 내구성에 km당 997원이라 <strong>대회·핵심 훈련 전용</strong>으로 운용하세요. 서브3:30~4 마라토너의 풀코스 카본으로 추천합니다. 둘을 더 깊게 비교한 <a href="/blog/saucony-endorphin-pro-4-vs-5-comparison">프로 4 vs 5 글</a>도 참고하세요.</p>

<h3>4. 엘리트 3 — 순수 반발력 최강의 '레이스데이 무기' (36.9만, 신형)</h3>
<p>라인 최상단입니다. 엘리트 2가 <strong>RunRepeat 역대 최고 80.6% 에너지 리턴</strong>(<a href="/shoes/nike-alphafly-3">알파플라이 3</a> 78.2%를 능가)을 기록했던 그 <strong>IncrediRUN 폼</strong>에 풀카본 플레이트를 얹은 모델로, 엘리트 3는 그 계보를 잇는 신형입니다. 197g대 초경량과 극소프트 폼이 만드는 반발력은 경이적이지만, 그 대가로 <strong>안정성이 낮아 완성된 러닝 폼이 필수</strong>입니다.</p>
<p>냉정하게, 이건 <strong>월 200km 이상 훈련하는 서브3 러너의 레이스데이 전용 무기</strong>입니다. 200km 내구성에 km당 1,695원, 토박스도 좁아 발볼 넓은 한국 러너에겐 도전적이죠. 서브3:30 이상 페이스가 안 나오면 잠재력을 끌어내기 어려우니, 대부분의 러너에게는 프로 5나 스피드 5가 더 현명합니다.</p>

<div class="callout warning">
  <span class="callout-icon">🆕</span>
  <div class="callout-body">
    <p class="callout-title">엘리트 3는 아직 '미공개'가 많습니다</p>
    <p>엘리트 3는 <strong>2026년 7월 1일 한국 출시됐습니다</strong>(정가 369,000원). 확정된 변경점 — 207g(전작 +10g)·포크형 카본 플레이트·넓어진 직각형 토박스·측면 컷아웃 제거로 개선된 안정성 — 은 <a href="/blog/saucony-endorphin-elite-3-preview-2026">엘리트 3 출시 프리뷰</a>에서 따로 정리했습니다. 다만 RunRepeat 랩 수치(에너지 리턴·충격흡수)는 아직 미게시라 그 부분만 엘리트 2 기준(80% 안팎 계승 추정)입니다. 검증된 <a href="/shoes/saucony-endorphin-elite-2">엘리트 2</a>도 현행 판매 중입니다.</p>
  </div>
</div>

<h2>그래서 당신은 어느 엔돌핀?</h2>
<table>
  <thead>
    <tr><th>이런 러너라면</th><th>추천 모델</th><th>이유</th></tr>
  </thead>
  <tbody>
    <tr><td>러닝 1년 미만 · 데일리 훈련 위주 · 예산 20만 이하</td><td><strong>아주라</strong></td><td>플레이트 부담 0, 슈퍼폼 입문, km당 315원</td></tr>
    <tr><td>훈련도 하고 가끔 하프 대회도 · 한 켤레로 끝내고 싶다</td><td><strong>스피드 5</strong></td><td>나일론 플레이트 만능형, 가성비 갓신발</td></tr>
    <tr><td>풀마라톤 카본이 필요 · 발볼이 넓은 편 · 서브3:30~4</td><td><strong>프로 5</strong></td><td>넉넉한 토박스 + 안정적 카본, 베이퍼보다 저렴</td></tr>
    <tr><td>서브3 도전 · 순수 반발 최강 · 발이 좁은 편</td><td><strong>엘리트 3</strong></td><td>IncrediRUN 80%대 반발, 레이스데이 전용</td></tr>
  </tbody>
</table>

<h2>한국 러너가 꼭 알아야 할 3가지</h2>
<ul>
  <li><strong>① 와이드 옵션이 4종 모두 없습니다.</strong> 아주라·스피드·프로는 표준(D) 토박스라 발볼 넓어도 시착하면 대부분 맞지만, 정 불안하면 반 사이즈 업을 고려하세요. <strong>엘리트는 좁은 편</strong>이라 넓은 발볼엔 비추천입니다. 발볼이 고민이라면 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 신발 가이드</a>를 먼저 보세요.</li>
  <li><strong>② 카본은 '항상 빠른 신발'이 아닙니다.</strong> 프로·엘리트의 카본 플레이트는 일정 페이스(3:30~4:30/km) 이상에서 진가가 나옵니다. 그보다 느리면 딱딱하기만 하고 오히려 불편할 수 있어요. <a href="/blog/carbon-plate-shoes-comparison-2025">카본화의 작동 원리</a>를 이해하고 사세요.</li>
  <li><strong>③ 가성비는 아래 두 칸이 압도적입니다.</strong> 내구성까지 반영한 km당 비용은 아주라 315원 · 스피드 438원 vs 프로 997원 · 엘리트 1,695원. 위 두 칸은 대회 전용 무기라 '비싸게 사서 아껴 신는' 신발이라는 점을 감안하세요.</li>
</ul>

<h2>자주 묻는 질문</h2>
<div class="faq">
  <p class="faq-q">Q. 초보인데 엔돌핀 신어도 되나요?</p>
  <p class="faq-a">A. <strong>아주라와 스피드 5는 OK</strong>입니다. 둘 다 플레이트가 없거나(아주라) 부드러운 나일론(스피드)이라 부상 위험이 낮습니다. 반면 프로 5·엘리트 3는 빠른 페이스와 완성된 폼을 전제로 한 카본화라, 입문 단계에선 권하지 않습니다.</p>
  <p class="faq-q">Q. 스피드 5 하나로 훈련이랑 대회 둘 다 되나요?</p>
  <p class="faq-a">A. 됩니다. 그게 스피드 5가 "갓신발"로 불리는 이유예요. 73.2% 에너지 리턴으로 하프 레이스에 직접 투입 가능하면서, 나일론 플레이트라 매일 템포·인터벌 훈련에도 부담이 없습니다. 풀마라톤에서 1초까지 짜내는 게 아니라면 이 한 켤레로 충분합니다.</p>
  <p class="faq-q">Q. 발볼이 넓은데 어떤 게 맞나요?</p>
  <p class="faq-a">A. 4종 다 와이드 옵션은 없지만, <strong>프로 5의 토박스가 가장 넉넉</strong>합니다. 데일리로는 아주라·스피드 5(표준)도 시착하면 대부분 괜찮습니다. 엘리트만은 좁아서 넓은 발볼엔 비추천이에요.</p>
  <p class="faq-q">Q. 엘리트 3가 7/1에 나온다는데 기다릴까요?</p>
  <p class="faq-a">A. 서브3 도전급이 아니라면 굳이 기다릴 이유는 적습니다. 엘리트는 페이스가 받쳐줘야 진가가 나오는 극단적 레이서라, 대부분의 러너에겐 프로 5가 더 합리적입니다. 정말 엘리트급 반발이 지금 필요하면 검증된 엘리트 2가 현행 판매 중입니다.</p>
</div>

<div class="callout info">
  <span class="callout-icon">🔗</span>
  <div class="callout-body">
    <p class="callout-title">한 걸음 더</p>
    <p>써코니 전체 라인을 등급·폼으로 읽는 법은 <a href="/blog/saucony-running-shoes-lineup-tier-guide-2026">써코니 러닝화 계급도 가이드</a>에 정리했습니다. 다른 브랜드 카본 레이서와 비교하려면 <a href="/shoes/nike-vaporfly-4">베이퍼플라이 4</a>, <a href="/shoes/asics-metaspeed-sky-plus">메타스피드 스카이+</a>, <a href="/shoes/adidas-adios-pro-4">아디오스 프로 4</a>, <a href="/shoes/new-balance-sc-elite-v5">SC 엘리트 v5</a>를 함께 보세요. 만능 트레이너 비교는 <a href="/shoes/asics-superblast-3">슈퍼블라스트 3</a>도 추천합니다.</p>
  </div>
</div>

<p class="post-disclaimer"><small>※ 가격은 써코니 코리아 공식 정가 기준이며 시기·채널에 따라 달라질 수 있습니다. 엘리트 3 정가·출시일은 잠정값으로, 한국 공식 입고 후 갱신합니다. 랩 수치는 RunRepeat 실측, 엘리트 3는 전작(엘리트 2) 기준 참고치입니다.</small></p>
`,
  },
  {
    id: 'hoka-clifton-11-vs-10-comparison',
    slug: 'hoka-clifton-11-vs-10-comparison',
    title: '호카 클리프톤 11 vs 10 비교 | 7/1 출시 — 폼·스택 그대로, 어퍼만 바뀐 신형 살 이유 있나',
    description: '7월 1일 출시되는 호카 클리프톤 11, 클리프톤 10과 뭐가 다를까요? 결론부터 — 미드솔 폼(CMEVA)·스택(42/34mm)·드롭(8mm)·라스트가 전부 동일하고 어퍼(엔지니어드 메시)와 삭라이너(3D 프린트)만 바뀐 \'evolution\'입니다. 할인 시작한 클리프톤 10을 사도 충분한지, 한국 발볼·예산 기준으로 정리했습니다.',
    thumbnail: '/images/blog/hoka-clifton-11-vs-10-comparison.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-25',
    category: 'review' as const,
    readingTime: 8,
    tags: ['클리프톤 11', '클리프톤 10', '호카 클리프톤', '데일리 트레이너', '신상 러닝화', '러닝화 비교'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>클리프톤 11(7/1 출시)은 클리프톤 10의 '마이너 업데이트'</strong>입니다. 미드솔 폼(CMEVA)·스택(42/34mm)·드롭(8mm)·라스트가 전부 그대로고, 바뀐 건 <strong>어퍼와 삭라이너</strong>뿐입니다</li>
    <li>어퍼가 자카드 니트 → <strong>엔지니어드 메시</strong>로, 삭라이너가 <strong>3D 프린트 오픈셀</strong>로 바뀌어 착화감이 조금 더 부드러워졌습니다. 가격도 $154.95로 동일</li>
    <li><strong>발밑 느낌(쿠션·반발)은 사실상 같습니다.</strong> 새 착화감이 끌리면 11, 가성비라면 할인 시작한 10이 합리적입니다. 더 통통 튀는 라이드를 원하면 같은 날 나온 클리프톤 프로를 보세요</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🔄</span>
  <div class="callout-body">
    <p class="callout-title">'레볼루션'이 아니라 '에볼루션'</p>
    <p>호카가 클리프톤 11을 <strong>2026년 7월 1일</strong> 출시합니다. 그런데 이번엔 미드솔을 손대지 않았습니다. 폼·스택·드롭·핏이 <a href="/shoes/hoka-clifton-10">클리프톤 10</a>과 완전히 같고, <strong>어퍼와 삭라이너만 새로 다듬은 tune-up</strong>입니다. 그래서 핵심 질문은 "11이 10보다 얼마나 좋아졌나"가 아니라 <strong>"굳이 신형을 살 이유가 있나"</strong>가 됩니다. 아직 출시 전이라 아래 수치는 <strong>호카 공식 발표 + 클리프톤 10 실측·리뷰 기준</strong>이며, 정량 랩(RunRepeat)·한국 정가는 출시 후 업데이트합니다.</p>
  </div>
</div>

<h2>스펙 한눈 비교</h2>
<table>
  <thead><tr><th>항목</th><th>클리프톤 11</th><th>클리프톤 10</th></tr></thead>
  <tbody>
    <tr><td>출시</td><td>2026-07-01</td><td>2025 (현행)</td></tr>
    <tr><td><strong>미드솔 폼</strong></td><td>CMEVA</td><td><strong>CMEVA (동일)</strong></td></tr>
    <tr><td>힐 / 전족 스택</td><td>42 / 34mm</td><td><strong>42 / 34mm (동일)</strong></td></tr>
    <tr><td>드롭</td><td>8mm</td><td><strong>8mm (동일)</strong></td></tr>
    <tr><td>무게(M9)</td><td>공식 약 280g<br>(핸즈온 실측 258g 보고)</td><td>약 275g</td></tr>
    <tr><td><strong>어퍼</strong></td><td><strong>엔지니어드 메시 (신규)</strong></td><td>자카드 니트</td></tr>
    <tr><td><strong>삭라이너</strong></td><td><strong>3D 프린트 오픈셀 (신규)</strong></td><td>일반</td></tr>
    <tr><td>토박스 / 와이드</td><td>넓은 핏 / 와이드·X와이드</td><td>넓은 핏 / 와이드</td></tr>
    <tr><td>가격(US)</td><td>$154.95</td><td>$154.95 (동일)</td></tr>
    <tr><td>한국 정가</td><td>약 199,000원 (추정)</td><td>199,000원</td></tr>
  </tbody>
</table>
<p class="caption">※ 클리프톤 11은 출시 전이라 RunRepeat 정량 랩(SA·에너지 리턴·실측 스택)은 미게시입니다. 스택·드롭·무게는 호카 공식 표기이며, RunRepeat 클리프톤 10 실측은 힐 44.4mm·드롭 12.4mm로 공식 표기와 측정 기준이 다릅니다. 한국 정가는 클리프톤 10 동가($155 동결) 기준 추정입니다.</p>

<h2>실제로 바뀐 것 — 어퍼와 삭라이너</h2>
<p>미드솔이 그대로이니 차이는 <strong>발등과 발바닥에 닿는 부분</strong>에 몰려 있습니다.</p>
<ul>
  <li><strong>어퍼: 자카드 니트 → 엔지니어드 메시</strong> — 클리프톤 10의 니트보다 더 부드럽고 발에 즉시 순응하는 소재로 바뀌었습니다. 후족부 패딩이 강화됐고 반사 디테일이 추가됐죠. 핸즈온 리뷰들은 "최근 클리프톤 라인 중 가장 좋은 착화감"이라고 평합니다</li>
  <li><strong>삭라이너: 3D 프린트 오픈셀 구조</strong> — 발바닥에 닿는 깔창이 새로워져 쿠션감이 소폭 올라가고 수분 배출이 개선됐습니다. 체감은 크지 않지만 '조금 더 폭신하고 쾌적한 발밑'이라고 보면 됩니다</li>
</ul>
<p>즉 클리프톤 11의 개선은 <strong>'타는 느낌(라이드)'이 아니라 '신는 느낌(핏)'</strong>에 있습니다.</p>

<h2>폼이 그대로라는 게 무슨 뜻인가</h2>
<p>가장 중요한 포인트입니다. 미드솔이 <strong>CMEVA로 동일</strong>하기 때문에 <strong>쿠션의 양, 반발력, 무릎 충격 흡수가 클리프톤 10과 사실상 같습니다.</strong> 클리프톤 10은 부드럽고 든든한 쿠션이 장점이지만, 에너지 리턴(약 52%)이 요즘 PEBA·질소 발포 폼을 쓴 경쟁작(65%+)보다 낮아 <strong>'통통 튀는 반발'은 약한</strong> 편입니다. 클리프톤 11도 이 성격을 그대로 물려받습니다.</p>
<p>그래서 여러 해외 리뷰어가 입을 모읍니다 — <strong>"어퍼만 바뀐 업데이트라, 할인 시작한 클리프톤 10을 사는 게 더 합리적일 수 있다"</strong>고요. 신형 프리미엄을 주고 살 만큼의 성능 도약은 아니라는 평가입니다. 호카 라인업 전체에서 클리프톤이 어떤 위치인지는 <a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카 러닝화 계급도</a>에서 확인할 수 있습니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚖️</span>
  <div class="callout-body">
    <p class="callout-title">무게는 소스마다 다릅니다</p>
    <p>클리프톤 11 무게는 출시 전이라 출처별로 엇갈립니다. <strong>공식 스펙시트·리테일러는 약 280g</strong>(전작과 비슷하거나 소폭 증가)으로 표기하는 반면, 한 핸즈온 리뷰(저울 실측)는 <strong>258g</strong>으로 약 6% 가볍다고 보고했습니다. 측정 기준·샘플 차이일 뿐 서로 모순은 아닙니다. 무게가 구매의 핵심이라면 출시 후 공식 페이지·RunRepeat 실측을 한 번 더 확인하세요.</p>
  </div>
</div>

<h2>누가 11을 사고, 누가 10을 사야 하나</h2>
<table>
  <thead><tr><th>이런 분</th><th>추천</th></tr></thead>
  <tbody>
    <tr><td>지금 새로 입문화를 처음 사는 분</td><td><strong>클리프톤 11</strong> — 어차피 비슷한 값이면 최신 어퍼·삭라이너</td></tr>
    <tr><td>가성비 우선 / 클리프톤 10 할인 발견</td><td><strong>클리프톤 10</strong> — 라이드 동일, 신형 대비 저렴</td></tr>
    <tr><td>니트 어퍼가 답답했던 분</td><td><strong>클리프톤 11</strong> — 엔지니어드 메시로 통기·순응성 개선</td></tr>
    <tr><td>더 통통 튀는 반발을 원하는 분</td><td><strong>클리프톤 프로</strong>(아래 참고) 또는 다른 반발형 데일리</td></tr>
  </tbody>
</table>

<div class="callout tip">
  <span class="callout-icon">🚀</span>
  <div class="callout-body">
    <p class="callout-title">업템포가 당긴다면 — 같은 날 나온 '클리프톤 프로'</p>
    <p>호카는 클리프톤 11과 함께 <strong>클리프톤 프로($165)</strong>를 같은 시기에 냈습니다. 클리프톤 11과 스택·드롭·라스트는 같지만 <strong>미드솔에 반발형 ProGlide+(초임계 EVA)를 얹어</strong> 더 경쾌하게 굴러갑니다. '클리프톤의 편안함 + 조금 더 빠른 라이드'를 원하면 프로가 답입니다. 11과 프로의 차이·해외 리뷰는 <a href="/blog/hoka-clifton-pro-preview-2026">클리프톤 프로 미리보기</a>에, 같은 7월 신상인 아식스 노바블라스트 6와 어떻게 갈리는지는 <a href="/blog/asics-novablast-6-vs-hoka-clifton-pro-2026">노바블라스트 6 vs 클리프톤 프로</a>에서 정리했습니다.</p>
  </div>
</div>

<h2>한국 러너 관점 — 발볼·가격</h2>
<p>클리프톤 11은 클리프톤 10과 <strong>동일한 라스트</strong>를 써서 핏 성격이 같습니다. 호카 클리프톤은 본래 <strong>넓고 여유로운 토박스</strong>로 발볼 넓은 한국 러너에게 잘 맞는 편이고, <strong>와이드·엑스와이드 옵션</strong>까지 제공돼 발볼 걱정이 큰 분도 선택지가 있습니다. 발볼이 넓다면 처음부터 와이드를 고려하세요.</p>
<p>가격은 미국 정가가 $154.95로 전작과 같아, 한국 정가도 <strong>클리프톤 10과 같은 199,000원 안팎</strong>으로 책정될 가능성이 높습니다(출시 전 추정). 정가가 같다면 신형/구형 선택은 결국 <strong>'할인 폭'</strong> 싸움입니다. 클리프톤 10이 세일에 들어가면 라이드가 동일한 만큼 가성비에서 앞섭니다. 무릎 보호 중심의 맥시멀 쿠션이 목적이라면 <a href="/blog/max-cushion-running-shoes-knee-protection-2026">맥스 쿠션 러닝화 가이드</a>도 함께 참고하세요.</p>

<h2>결론</h2>
<p>클리프톤 11은 <strong>'더 좋아진 신발'이라기보다 '더 다듬어진 같은 신발'</strong>입니다. 부드러운 쿠션과 넓은 핏으로 입문·회복주·장시간 서 있는 일상에 두루 좋은 클리프톤의 강점은 그대로고, 어퍼·삭라이너가 한 단계 세련돼졌습니다. <strong>새 착화감과 최신형이 끌리면 11, 한 푼이라도 아끼고 싶고 라이드만 같으면 된다면 할인된 10</strong> — 둘 다 합리적인 선택입니다. 본인 발·예산에 맞는 데일리 후보를 빠르게 좁히려면 <a href="/recommend">1분 러닝화 추천</a>이나 <a href="/best/daily-trainer">데일리 트레이너 추천</a>을 활용해보세요.</p>

<h2>FAQ</h2>

<h3>Q. 클리프톤 11과 10, 발밑 느낌이 정말 같나요?</h3>
<p>네, 사실상 같습니다. 미드솔 폼(CMEVA)·스택·드롭이 동일해 쿠션의 양과 반발, 무릎 충격 흡수가 거의 차이 없습니다. 다른 건 어퍼(엔지니어드 메시)와 삭라이너(3D 프린트)로 인한 '신는 느낌'이지 '타는 느낌'이 아닙니다.</p>

<h3>Q. 그럼 굳이 11을 살 필요가 없나요?</h3>
<p>가격이 같다면 새로 사는 입장에선 최신 어퍼의 11이 무난합니다. 다만 클리프톤 10이 세일에 들어갔다면, 라이드가 동일한 만큼 할인된 10이 가성비에서 앞섭니다. 여러 해외 리뷰어도 "할인된 10이 합리적"이라고 평합니다.</p>

<h3>Q. 더 반발력 있는 호카 데일리를 원하면요?</h3>
<p>같은 날 출시된 클리프톤 프로($165)가 반발형 ProGlide+ 폼을 써서 더 경쾌합니다. 또는 마하 6처럼 더 빠른 데일리를 보세요. 클리프톤 11/10은 '부드러운 쿠션' 쪽이라 업템포·반발 위주 러너에겐 다소 물렁하게 느껴질 수 있습니다.</p>

<h3>Q. 발볼이 넓은데 괜찮을까요?</h3>
<p>클리프톤은 토박스가 넓고 여유로운 편이라 발볼 넓은 한국 러너에게 잘 맞습니다. 11도 10과 같은 라스트를 써서 동일하며, 와이드·엑스와이드 옵션까지 있어 발볼이 많이 넓다면 와이드를 선택하면 됩니다.</p>
`,
    faqs: [
      {
        question: '호카 클리프톤 11과 클리프톤 10의 차이는 무엇인가요?',
        answer: '미드솔 폼(CMEVA)·스택(42/34mm)·드롭(8mm)·라스트가 전부 동일합니다. 바뀐 것은 어퍼(자카드 니트 → 엔지니어드 메시)와 삭라이너(3D 프린트 오픈셀)뿐입니다. 즉 발밑 느낌(쿠션·반발)은 사실상 같고 착화감만 조금 더 부드러워진 마이너 업데이트입니다.',
      },
      {
        question: '클리프톤 11이 출시되면 클리프톤 10을 사면 안 되나요?',
        answer: '아닙니다. 라이드가 동일하므로 클리프톤 10이 할인에 들어가면 오히려 가성비에서 앞섭니다. 여러 해외 리뷰어도 "어퍼만 바뀐 업데이트라 할인된 클리프톤 10이 합리적일 수 있다"고 평가합니다. 새 착화감과 최신형을 원하면 11, 가성비라면 10입니다.',
      },
      {
        question: '클리프톤 11과 클리프톤 프로는 뭐가 다른가요?',
        answer: '같은 날 출시된 클리프톤 프로($165)는 클리프톤 11과 스택·드롭·라스트는 같지만 미드솔에 반발형 ProGlide+(초임계 EVA)를 써서 더 경쾌하게 굴러갑니다. 클리프톤 11은 기존 CMEVA 폼의 부드러운 쿠션 성격이라, 더 빠르고 통통 튀는 라이드를 원하면 프로가 적합합니다.',
      },
    ],
  },
  {
    id: '2026-trans-jeju-utmb-registration',
    slug: '2026-trans-jeju-utmb-registration',
    title: '트랜스제주 by UTMB 2026 — 10월 2~4일 제주, 접수 7월 31일 마감 | 종목·참가비·UTMB Index 총정리',
    description: 'UTMB 월드시리즈 아시아 공식 대회 트랜스제주 by UTMB가 2026년 10월 2~4일 제주에서 열립니다. 20K·60K·100K·100M 4개 종목, 접수는 7월 31일 선착순 마감. 종목별 출발 시각·거리·참가비(USD)·UTMB Index 자격, 어떤 종목부터 시작할지, 필수 트레일 장비까지 한 번에 정리했습니다.',
    thumbnail: '/images/blog/2026-trans-jeju-utmb-registration.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-25',
    category: 'news' as const,
    readingTime: 8,
    tags: ['트랜스제주', '트랜스제주 UTMB', 'UTMB', '제주 트레일', '트레일 러닝 대회', 'UTMB Index'],
    event: {
      name: '트랜스제주 by UTMB 2026',
      startDate: '2026-10-02',
      endDate: '2026-10-04',
      location: {
        name: '제주 (제주월드컵경기장·가시리 한라마 파크 등)',
      },
      organizer: '서귀포시 (운영 에이플랜)',
      url: 'https://transjeju.utmb.world/',
    },
    content: `
<div class="callout warning">
  <span class="callout-icon">⏳</span>
  <div class="callout-body">
    <p class="callout-title">접수 마감 2026년 7월 31일(금) — 선착순</p>
    <p>2026 트랜스제주 by UTMB는 <strong>2026-10-02(금)~10-04(일)</strong> 제주에서 열립니다. 접수는 2026-03-18 오픈돼 진행 중이며 <strong>7월 31일 선착순 마감</strong>입니다. 인기 종목은 마감 전 조기 소진될 수 있으니 출전 계획이 있다면 서두르세요. 신청·최신 정보는 공식 <a href="https://transjeju.utmb.world/" rel="noopener noreferrer">transjeju.utmb.world</a>에서 확인하세요.</p>
  </div>
</div>

<h2>트랜스제주가 뭔가요</h2>

<p>트랜스제주 by UTMB는 프랑스 몽블랑에서 열리는 세계 최고 권위의 울트라 트레일 대회 <strong>UTMB</strong>의 <strong>아시아 공식 시리즈(UTMB World Series)</strong> 대회입니다. UTMB는 2023년 대회를 '공식 9회(ninth edition)'로 발표했고, UTMB 월드시리즈에 편입된 이후 매년 제주에서 개최되고 있습니다. 한라산 권역의 거친 화산 지형과 오름·곶자왈을 무대로 하는, 국내에서 가장 권위 있는 트레일 대회로 꼽힙니다.</p>

<p>이 대회가 특별한 이유는 <strong>UTMB Index(완주 기록 적립)</strong>입니다. 트랜스제주를 완주하면 UTMB Index가 쌓여, 언젠가 본토 몽블랑 UTMB에 도전할 자격을 만들어 갈 수 있습니다. 스카이레이스·트레일 대회 전반의 개념과 시즌 흐름이 궁금하다면 <a href="/blog/korea-trail-skyrace-guide-2026">한국 트레일·스카이레이스 대회 가이드</a>를 먼저 보면 이해가 빠릅니다.</p>

<h2>2026 종목과 일정</h2>

<p>2026년은 <strong>20K·60K·100K·100M</strong> 4개 종목으로 열립니다. 거리 구성은 매년 조금씩 바뀌는데, 2026년 기준 수치는 아래와 같습니다.</p>

<table>
  <thead>
    <tr><th>종목</th><th>출발</th><th>출발지</th><th>성격</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>100M</strong> (약 148km)</td><td>2026-10-02(금) 21:00</td><td>—</td><td>최상급 야간 포함 울트라</td></tr>
    <tr><td><strong>100K</strong></td><td>2026-10-03(토) 05:00</td><td>제주월드컵경기장</td><td>상급 울트라</td></tr>
    <tr><td><strong>60K</strong></td><td>2026-10-03(토) 08:00</td><td>—</td><td>중상급 (2025년 70K에서 변경)</td></tr>
    <tr><td><strong>20K</strong></td><td>2026-10-03(토) 10:00</td><td>가시리 한라마 파크</td><td>입문·UTMB 분위기 체험</td></tr>
  </tbody>
</table>

<p class="caption">※ 거리·코스·출발지는 주최 측 공지 기준이며 변경될 수 있습니다. 신청 전 공식 페이지에서 최종 확인하세요. 제3자 대회 캘린더에는 다른 날짜가 떠도는 경우가 있으니 <strong>공식 사이트 날짜만 신뢰</strong>하세요.</p>

<h2>참가비</h2>

<p>국제 등록 포털 기준 참가비는 다음과 같습니다(USD 표기). 원화 결제 금액은 국내 등록 시 로그인 후 확인됩니다.</p>

<table>
  <thead>
    <tr><th>종목</th><th>참가비 (USD)</th></tr>
  </thead>
  <tbody>
    <tr><td>100M</td><td>$280</td></tr>
    <tr><td>100K</td><td>$220</td></tr>
    <tr><td>60K</td><td>$160</td></tr>
    <tr><td>20K</td><td>$90</td></tr>
  </tbody>
</table>

<h2>UTMB Index·참가 자격</h2>

<p>UTMB 월드시리즈 대회는 종목에 따라 <strong>UTMB Index(또는 러닝스톤·추첨 등)</strong> 자격 체계가 적용될 수 있습니다. 일반적으로 거리가 길수록(100K·100M) 사전 완주 실적이나 자격 요건이 요구되는 경향이 있습니다. <strong>정확한 자격·추첨 방식은 매년·종목별로 달라지므로 반드시 공식 등록 페이지에서 본인 종목 기준을 확인</strong>하세요. 트레일이 처음이라면 자격 부담이 적은 <strong>20K</strong>로 UTMB 대회 분위기를 먼저 경험하는 걸 권합니다.</p>

<h2>어떤 종목부터 시작할까</h2>

<ul>
  <li><strong>트레일 입문 / 첫 UTMB</strong> — <strong>20K</strong>. 누적고도와 컷오프 부담이 가장 작아 로드 러너의 첫 트레일 대회로 적합합니다</li>
  <li><strong>로드 풀코스 경험자 → 본격 트레일</strong> — <strong>60K</strong>. 거리·고도가 확 올라가므로 사전에 실제 산악 훈련이 필요합니다</li>
  <li><strong>울트라 도전</strong> — <strong>100K·100M</strong>. 야간 구간·필수장비·자격 요건까지 갖춰야 하는 상급자 영역입니다</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">⛰️</span>
  <div class="callout-body">
    <p class="callout-title">같은 거리라도 '누적고도'가 난이도를 가른다</p>
    <p>트레일은 거리보다 누적고도(D+)가 체감 난이도를 좌우합니다. 로드 20K를 뛸 수 있어도 화산 지형 20K는 1.5~2배 힘들 수 있습니다. 대회 전 북한산·관악산 등 실제 산에서 몇 번 달려보고 페이스를 가늠하세요. 트레일이 낯설다면 <a href="/blog/trail-running-appeal-beginner-guide-2026">트레일 러닝 입문 가이드</a>부터 보는 걸 권합니다.</p>
  </div>
</div>

<h2>필수 트레일 장비</h2>

<p>UTMB 대회는 안전을 위해 <strong>필수장비(mandatory gear) 규정</strong>이 엄격합니다. 미충족 시 출발이 제한되거나 페널티가 부과됩니다. 종목별 규정은 공식 페이지에 고지되며, 공통적으로 다음이 요구됩니다.</p>

<ul>
  <li><strong>트레일화</strong> — 러그(돌기) 아웃솔 필수. 로드화는 화산암 지형에서 위험합니다</li>
  <li><strong>러닝 베스트</strong> — 물·보급·필수장비 수납용</li>
  <li><strong>물 1L 이상 + 개인컵</strong> — 친환경 정책으로 1회용컵 미제공이 표준</li>
  <li><strong>방풍·방수 자켓</strong>, <strong>서바이벌 블랭킷·호루라기·휴대폰</strong> — 급변 날씨·생존 대비</li>
  <li><strong>헤드랜턴</strong> — 야간 구간이 있는 장거리 종목 필수</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">👟</span>
  <div class="callout-body">
    <p class="callout-title">코스 난이도별 트레일화</p>
    <p>입문·가성비는 <a href="/shoes/asics-gel-venture-10">아식스 젤 벤처 10</a>, 접지력·안정성 균형은 <a href="/shoes/adidas-terrex-agravic-4">아디다스 테렉스 아그라빅 4</a>, 장거리 울트라는 <a href="/shoes/asics-metafuji-trail">아식스 메타후지 트레일</a>·<a href="/shoes/hoka-speedgoat-6">호카 스피드고트 6</a>, 카본 레이싱은 <a href="/shoes/hoka-tecton-x-3">호카 테크톤 X 3</a>가 대표적입니다. 코스별 자세한 비교는 <a href="/blog/2026-best-trail-running-shoes">2026 트레일 러닝화 TOP 7</a>에서 확인하세요.</p>
  </div>
</div>

<h2>준비 — 제주 원정 체크</h2>

<p>제주 대회는 사실상 '원정'입니다. 접수 성공 직후 <strong>항공권·숙소를 함께 예약</strong>하세요. 10월 초는 제주 성수기라 대회 참가자 수요까지 겹치면 숙소가 빠르게 찹니다. 대회 전날 도착해 1박 하며 컨디션을 잡는 게 안전합니다. 원정 대회 짐·준비물 체크는 <a href="/blog/overseas-marathon-travel-checklist-korea">원정 마라톤 준비물 체크리스트</a>가 트레일 원정에도 그대로 유용합니다. 가을 로드 대회와 일정을 함께 짜려면 <a href="/marathon">마라톤 캘린더</a>를 참고하세요.</p>

<h2>FAQ</h2>

<h3>Q. 지금(6월 말) 접수해도 자리가 있나요?</h3>
<p>접수는 2026년 3월 18일 오픈돼 7월 31일 선착순 마감입니다. 6월 말 기준 아직 접수 기간이지만, 인기 종목은 마감 전 소진될 수 있습니다. 출전 의향이 있다면 공식 페이지에서 잔여 여부를 빨리 확인하고 신청하세요.</p>

<h3>Q. 트레일 경험이 전혀 없는데 도전할 수 있나요?</h3>
<p>20K 종목이라면 가능합니다. 다만 로드와 달리 러그 아웃솔 트레일화·러닝 베스트 등 장비가 필요하고, 대회 전 실제 산에서 달려본 경험이 있어야 안전합니다. 60K 이상은 충분한 산악 훈련과 장비, 종목별 자격 확인이 선행돼야 합니다.</p>

<h3>Q. UTMB Index가 꼭 있어야 참가할 수 있나요?</h3>
<p>종목과 해마다 기준이 다릅니다. 입문 종목은 자격 부담이 적은 편이고, 장거리(100K·100M)일수록 사전 실적·자격이 요구되는 경향이 있습니다. 정확한 기준은 본인 종목의 공식 등록 페이지에서 반드시 확인하세요.</p>
`,
    faqs: [
      {
        question: '트랜스제주 by UTMB 2026 대회는 언제 열리나요?',
        answer: '2026년 10월 2일(금)부터 10월 4일(일)까지 제주에서 열립니다. 100M은 10월 2일 21시, 100K·60K·20K는 10월 3일에 출발합니다. 접수는 2026년 3월 18일 오픈돼 7월 31일 선착순 마감입니다.',
      },
      {
        question: '트랜스제주 2026 종목과 참가비는 어떻게 되나요?',
        answer: '20K·60K·100K·100M 4개 종목으로 열립니다. 국제 등록 포털 기준 참가비는 100M $280, 100K $220, 60K $160, 20K $90입니다. 원화 결제 금액은 국내 등록 시 로그인 후 확인됩니다.',
      },
      {
        question: '트레일 입문자는 어떤 종목에 나가야 하나요?',
        answer: '20K 종목을 권장합니다. 누적고도와 컷오프 부담이 가장 작아 로드 러너의 첫 트레일 대회로 적합하며, UTMB 대회 분위기를 낮은 난이도로 경험할 수 있습니다. 다만 러그 아웃솔 트레일화와 러닝 베스트 등 필수 장비는 갖춰야 합니다.',
      },
    ],
  },
  {
    id: 'wet-running-shoes-drying-care-guide-korea',
    slug: 'wet-running-shoes-drying-care-guide-korea',
    title: '장마철 젖은 러닝화 빠르게 살리는 법 | 건조·냄새·세탁 — 드라이어·세탁기가 신발을 망치는 이유',
    description: '우중런 한 번에 흠뻑 젖은 러닝화, 어떻게 말려야 할까요? 신문지·선풍기·신발건조기 건조법부터 직사광선·드라이어·세탁기를 절대 쓰면 안 되는 이유(미드솔 폼 변형·접착제 분리)까지. 냄새·곰팡이 잡는 법, 2켤레 로테이션, 언제 교체할지 장마철 러닝화 관리를 한 번에 정리했습니다.',
    thumbnail: '/images/blog/wet-running-shoes-drying-care-guide-korea.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-25',
    category: 'guide' as const,
    readingTime: 8,
    tags: ['장마철 러닝', '러닝화 관리', '신발 건조', '러닝화 세탁', '러닝화 수명', '우중런'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>젖은 러닝화는 '열'이 아니라 '바람'으로 말립니다.</strong> 안창·끈을 빼고 신문지로 속 수분을 뺀 뒤, 통풍 그늘에서 선풍기·서큘레이터 바람을 쐬는 게 정석입니다</li>
    <li><strong>드라이어·직사광선·세탁기·라디에이터는 금지.</strong> 고열이 EVA·PEBA 미드솔 폼을 변형·경화시키고, 미드솔과 아웃솔을 붙인 접착제를 녹여 밑창이 떨어집니다</li>
    <li><strong>장마철엔 2켤레 로테이션이 답.</strong> 폼이 다시 부풀고 신발이 완전히 마르는 데 하루 이상 걸리므로, 번갈아 신어야 수명도 반발력도 지킵니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🌧️</span>
  <div class="callout-body">
    <p class="callout-title">장마가 시작됐습니다</p>
    <p>우중런 자체의 안전·페이스 요령은 <a href="/blog/rainy-season-running-guide-korea">장마철 우중런 가이드</a>에서 다뤘습니다. 이 글은 <strong>달리고 난 뒤 '젖은 신발을 어떻게 살리느냐'</strong>에만 집중합니다. 한 번 잘못 말리면 비싼 러닝화 수명이 몇 달씩 깎이거든요.</p>
  </div>
</div>

<h2>왜 '말리는 법'이 중요한가 — 폼은 물과 열에 약하다</h2>

<p>러닝화의 핵심은 미드솔 <strong>폼</strong>입니다. EVA, 슈퍼크리티컬 EVA, PEBA, TPU 같은 폼이 충격을 흡수하고 반발력을 만들죠. 그런데 이 폼들은 두 가지에 약합니다 — <strong>장시간 머금은 물</strong>과 <strong>고열</strong>입니다.</p>

<ul>
  <li><strong>젖은 채 방치</strong> — 폼과 어퍼가 물을 머금으면 무거워지고, 마르기 전까지 반발이 둔해집니다. 더 큰 문제는 <strong>축축한 어둠 속에서 번식하는 세균·곰팡이</strong>로, 냄새의 진짜 원인입니다</li>
  <li><strong>고열 건조</strong> — 드라이어·라디에이터·직사광선의 열은 EVA 폼을 수축·경화시켜 쿠션을 죽이고, <strong>미드솔과 아웃솔을 붙인 접착제를 약하게 만들어 밑창이 들뜨거나 떨어지게</strong> 합니다. 고무 아웃솔에 잔금이 가기도 하죠</li>
</ul>

<p>즉 "빨리 말리려고" 열을 가하는 순간, 그게 바로 신발을 망치는 길입니다. 핵심 원칙은 하나 — <strong>저온 + 통풍</strong>.</p>

<h2>젖은 러닝화 건조 4단계</h2>

<h3>① 안창(인솔)과 끈을 분리한다</h3>
<p>가장 먼저, 그리고 가장 중요한 단계입니다. 안창은 빼서 따로 말려야 그 아래 갇힌 물기가 빠지고, 신발 내부도 공기가 통합니다. 끈도 풀어 텅(혀)을 활짝 젖혀두세요. 이것만 해도 건조 속도가 확 빨라집니다.</p>

<h3>② 신문지·키친타올로 속 수분을 흡수한다</h3>
<p>신발 안에 구겨 넣은 신문지가 물을 빨아들입니다. <strong>2~3시간마다 젖은 신문지를 새것으로 교체</strong>하는 게 포인트 — 한 번 넣고 방치하면 오히려 축축한 상태가 유지됩니다. 신문지 잉크가 밝은 색 어퍼에 묻는 게 걱정되면 키친타올이나 흰 종이타올을 쓰세요.</p>

<h3>③ 통풍 그늘에서 바람을 쐬어준다</h3>
<p>속 수분을 어느 정도 뺀 뒤엔 <strong>바람</strong>이 일을 합니다. 직사광선이 닿지 않는 통풍 잘 되는 곳에 두고 <strong>선풍기·서큘레이터를 신발 입구 쪽으로</strong> 틀어주세요. 신발코를 살짝 위로 기울여 세우면 안쪽 깊은 곳까지 공기가 통합니다. 가정에서 가장 빠르고 안전한 방법입니다.</p>

<div class="callout tip">
  <span class="callout-icon">🌀</span>
  <div class="callout-body">
    <p class="callout-title">신발건조기를 쓴다면 '저온 송풍' 모드만</p>
    <p>신발건조기는 편하지만 <strong>열풍이 강한 모드는 금물</strong>입니다. 상온~미지근한 바람(대략 40℃ 이하)의 <strong>송풍·저온 모드</strong>로, 가능하면 타이머를 걸어 장시간 가열을 피하세요. UV 살균 기능이 있으면 냄새 관리에 도움이 됩니다.</p>
  </div>
</div>

<h3>④ 완전히 마른 뒤 보관·재착용</h3>
<p>겉만 말랐다고 끝이 아닙니다. 미드솔과 어퍼 안쪽까지 완전히 마르려면 보통 <strong>하루 안팎</strong>이 걸립니다. 덜 마른 신발을 신발장에 넣으면 그 안에서 곰팡이가 핍니다. 손을 넣었을 때 서늘한 습기가 느껴지지 않을 때까지 기다리세요.</p>

<h2>하지 말아야 할 건조법 — 신발을 망치는 4가지</h2>

<table>
  <thead><tr><th>금지</th><th>왜 안 되나</th></tr></thead>
  <tbody>
    <tr><td><strong>헤어드라이어 / 온풍</strong></td><td>국소 고열이 EVA 폼을 변형·경화시키고 접착제를 녹임. 어퍼 소재도 수축</td></tr>
    <tr><td><strong>직사광선(땡볕)</strong></td><td>자외선+열로 폼·고무가 삭고 변색. "햇볕에 바짝"이 가장 흔한 실수</td></tr>
    <tr><td><strong>세탁기·건조기</strong></td><td>회전 충격으로 미드솔-아웃솔 접착 분리, 폼 구조 붕괴. 러닝화엔 사실상 사형선고</td></tr>
    <tr><td><strong>라디에이터·보일러 위</strong></td><td>지속 고열로 밑창 들뜸·갈라짐. 겨울에도 같은 이유로 금지</td></tr>
  </tbody>
</table>

<p>요약하면 <strong>'뜨거운 것 위·안·옆은 전부 금지'</strong>입니다. 손으로 만져 따뜻하면 신발에는 너무 뜨겁다고 보면 됩니다.</p>

<h2>냄새와 곰팡이 잡기</h2>

<p>장마철 러닝화 냄새의 범인은 땀이 아니라 <strong>축축한 환경에서 번식한 박테리아</strong>입니다. 그래서 1순위 해결책은 언제나 <strong>완전 건조</strong>입니다. 그 위에 더할 수 있는 관리:</p>

<ul>
  <li><strong>베이킹소다</strong> — 마른 신발 안에 한 스푼 뿌리거나 면주머니에 담아 하룻밤. 다음 날 털어내면 냄새·습기 흡수</li>
  <li><strong>신발 탈취제·제습제</strong> — 신발장에 실리카겔이나 제습제를 함께 두면 장마 내내 도움</li>
  <li><strong>안창 따로 세척</strong> — 냄새의 상당 부분은 안창에 뱁니다. 미지근한 물에 손빨래 후 그늘 건조</li>
  <li><strong>두 켤레 번갈아 신기</strong> — 한 켤레가 완전히 마르고 통풍될 시간을 확보하는 게 냄새 예방의 근본</li>
</ul>

<h2>흙탕물·심하게 더러워졌을 때 — 손세탁 요령</h2>

<p>트레일이나 침수 구간을 지나 진흙·오염이 심하면 헹궈야 합니다. 단 <strong>세탁기 대신 손세탁</strong>이 원칙입니다.</p>

<ul>
  <li>겉흙은 마른 뒤 솔로 털어냅니다(젖은 흙을 문지르면 섬유 속으로 더 박힘)</li>
  <li>미지근한 물 + 중성세제를 부드러운 솔이나 천에 묻혀 부분 세척</li>
  <li>세제가 남지 않게 헹군 뒤, 위의 4단계 건조법으로 말립니다</li>
  <li>표백제·강알칼리 세제는 어퍼 변색·접착 손상을 일으키니 피하세요</li>
</ul>

<h2>근본 해결 — 2켤레 로테이션</h2>

<p>미드솔 폼은 한 번 달리며 압축된 뒤 <strong>원래 두께와 반발력으로 회복하는 데 시간</strong>이 필요합니다. 매일 같은 신발을 신으면 폼이 회복할 틈 없이 눌린 채 다음 런을 맞고, 그만큼 빨리 주저앉습니다. 장마철엔 여기에 <strong>'마를 시간'</strong>까지 더해지죠.</p>

<p>그래서 비 시즌일수록 <strong>최소 2켤레를 번갈아 신는 로테이션</strong>이 정답입니다. 한 켤레가 마르고 폼이 회복하는 동안 다른 켤레를 신는 식이죠. 데일리 트레이너 한 켤레를 더 들일 계획이라면 본인 발·예산에 맞는 후보를 <a href="/recommend">1분 러닝화 추천</a>으로 좁히거나, <a href="/best/daily-trainer">데일리 트레이너 추천</a>을 참고하세요. 통기성이 좋아 잘 마르는 여름용 신발이 궁금하면 <a href="/blog/summer-breathable-running-shoes-2026">여름 통기성 러닝화</a> 글도 도움이 됩니다.</p>

<div class="callout warning">
  <span class="callout-icon">📉</span>
  <div class="callout-body">
    <p class="callout-title">반복해서 젖고 잘못 말린 신발은 수명이 깎입니다</p>
    <p>아무리 잘 관리해도 침수와 건조를 여러 번 반복한 신발은 폼 반발과 쿠션이 평소보다 빨리 떨어집니다. 쿠션이 꺼지고 발·무릎이 평소보다 피로하다면 교체 신호일 수 있습니다. 판단 기준은 <a href="/blog/running-shoe-lifespan-replacement-guide">러닝화 수명·교체 시기 가이드</a>에서 확인하세요.</p>
  </div>
</div>

<h2>FAQ</h2>

<h3>Q. 비 오는 날 신어도 되는 방수 러닝화가 따로 있나요?</h3>
<p>고어텍스(GTX) 같은 방수 멤브레인을 적용한 러닝화가 있습니다. 빗물이 위에서 떨어지는 상황엔 도움이 되지만, <strong>물웅덩이를 밟아 발목 위로 물이 넘어오면 오히려 안에 물이 갇혀 더 안 마릅니다.</strong> 한여름 장마엔 방수보다 <strong>배수·통기가 잘 되는 메시 신발</strong>이 더 쾌적한 경우가 많습니다. 폭우 예보엔 어차피 젖는다고 보고, 잘 마르는 신발 + 빠른 건조 루틴이 현실적입니다.</p>

<h3>Q. 신문지가 없으면 뭘 쓰나요?</h3>
<p>키친타올·흰 종이타올·마른 수건 조각으로 대체할 수 있습니다. 핵심은 '흡수성 종이를 자주 갈아주는 것'이지 신문지 자체가 아닙니다. 제습용 실리카겔 팩을 함께 넣어도 좋습니다.</p>

<h3>Q. 신발건조기를 사도 괜찮을까요?</h3>
<p>저온·송풍 위주 제품이라면 장마철에 유용합니다. 다만 <strong>강한 열풍 모드의 장시간 사용은 피하세요.</strong> 미지근한 바람으로 충분히 말리고, UV 살균 기능이 있으면 냄새 관리에 보탬이 됩니다.</p>

<h3>Q. 카본화(레이싱화)도 똑같이 관리하면 되나요?</h3>
<p>네, 원칙은 같습니다. 오히려 PEBA 폼과 카본 플레이트를 쓴 고가 레이싱화일수록 <strong>고열은 더 치명적</strong>입니다. 비 오는 대회 후엔 즉시 안창·끈을 빼고 저온 통풍 건조하세요. 레이싱화는 평소에도 훈련용과 분리해 아껴 신는 게 수명에 좋습니다.</p>
`,
    faqs: [
      {
        question: '젖은 러닝화를 드라이어로 말려도 되나요?',
        answer: '안 됩니다. 드라이어·라디에이터·직사광선의 고열은 EVA·PEBA 미드솔 폼을 변형·경화시키고, 미드솔과 아웃솔을 붙인 접착제를 약하게 만들어 밑창이 떨어질 수 있습니다. 안창·끈을 빼고 신문지로 속 수분을 흡수한 뒤 통풍 그늘에서 선풍기 바람으로 말리는 게 정석입니다.',
      },
      {
        question: '러닝화를 세탁기에 빨아도 되나요?',
        answer: '권장하지 않습니다. 세탁기·건조기의 회전 충격은 미드솔과 아웃솔의 접착을 분리시키고 폼 구조를 망가뜨립니다. 오염이 심하면 미지근한 물과 중성세제로 부드러운 솔을 이용해 손세탁하고, 저온 통풍으로 말리세요.',
      },
      {
        question: '장마철 러닝화 냄새는 어떻게 없애나요?',
        answer: '냄새의 원인은 축축한 환경에서 번식한 박테리아이므로 완전 건조가 1순위입니다. 마른 신발에 베이킹소다를 뿌려 하룻밤 두거나, 안창을 따로 세척·건조하고, 신발장에 제습제를 두면 도움이 됩니다. 근본적으로는 2켤레를 번갈아 신어 마를 시간을 확보하는 것이 가장 효과적입니다.',
      },
    ],
  },
  {
    id: 'asics-novablast-6-vs-hoka-clifton-pro-2026',
    slug: 'asics-novablast-6-vs-hoka-clifton-pro-2026',
    title: '아식스 노바블라스트 6 vs 호카 클리프톤 프로 | 7월 신상 데일리 정면승부 — 노바6 가벼운 반발 vs 클프로 넓은 토박스·롤링',
    description:
      '7월에 데일리 트레이너 신상 둘이 동시에 나옵니다. 노바블라스트 6(7/1)와 호카 클리프톤 프로(7/9). 외신 T3가 "호카가 노바블라스트를 겨냥해 만든 신발"이라 콕 집을 만큼 정면승부 구도죠. 스택·드롭은 거의 같지만 폼 성격이 갈립니다 — 노바6는 전족 FF Turbo Squared(ATPU) 반발과 약 30g 가벼운 무게, 클프로는 클리프톤10 라스트의 넓은 토박스·와이드 옵션·MetaRocker 롤링. 한국 발볼·예산 기준으로 누가 뭘 골라야 하는지 정리했습니다.',
    thumbnail: '/images/blog/asics-novablast-6-vs-hoka-clifton-pro-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-23',
    category: 'review' as const,
    readingTime: 8,
    tags: ['노바블라스트 6', '클리프톤 프로', '호카 클리프톤', '데일리 트레이너', '신상 러닝화', '러닝화 비교'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>7월 데일리 신상 맞대결</strong> — 노바블라스트 6(7/1)와 호카 클리프톤 프로(7/9)가 비슷한 시기에 출시됩니다. 외신은 "호카가 노바블라스트를 겨냥한 신발"로 봅니다</li>
    <li>스택(41.5/33.5 vs 42/34mm)·드롭(8mm)은 사실상 동일 — <strong>차이는 폼</strong>입니다. 노바6는 전족 FF Turbo Squared(ATPU) 반발, 클프로는 ProGlide+(슈퍼크리티컬 EVA) 롤링</li>
    <li><strong>가볍고 통통 튀는 반발이면 노바6, 넓은 발볼·와이드·부드러운 롤링이면 클프로</strong>. 노바6가 약 30g 가볍고 $10 저렴합니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🥊</span>
  <div class="callout-body">
    <p class="callout-title">왜 이 둘을 나란히 놓나</p>
    <p>호카가 클리프톤 라인을 둘로 쪼갰습니다. 기존 <a href="/shoes/hoka-clifton-10">클리프톤</a>(부드러운 데일리·CMEVA)은 그대로 두고, 반발 폼을 얹은 <strong>클리프톤 프로</strong>를 새로 냈죠. 외신 T3는 이를 두고 <strong>"호카가 아식스 노바블라스트를 겨냥해 만든 신발"</strong>이라고 못 박았습니다. 즉 둘은 같은 자리를 노리는 <strong>'반응형 고스택 데일리 트레이너'</strong> 경쟁작입니다. 아직 둘 다 출시 전이라(노바6 7/1·클프로 7/9) 아래 수치는 <strong>제조사 공식 발표 + 전작·리뷰 기준 추정</strong>입니다.</p>
  </div>
</div>

<h2>스펙 한눈 비교</h2>
<table>
  <thead><tr><th>항목</th><th>아식스 노바블라스트 6</th><th>호카 클리프톤 프로</th></tr></thead>
  <tbody>
    <tr><td>출시(글로벌)</td><td>2026-07-01</td><td>2026-07-09</td></tr>
    <tr><td>힐 / 전족 스택</td><td>41.5 / 33.5mm</td><td>42 / 34mm</td></tr>
    <tr><td>드롭</td><td>8mm</td><td>8mm</td></tr>
    <tr><td>무게(M9 추정)</td><td><strong>약 253g</strong></td><td>약 282g</td></tr>
    <tr><td><strong>미드솔 폼</strong></td><td>FF Blast Max + <strong>FF Turbo Squared(전족, ATPU)</strong></td><td><strong>ProGlide+</strong>(슈퍼크리티컬 EVA)</td></tr>
    <tr><td>플레이트</td><td>없음</td><td>없음</td></tr>
    <tr><td>로커</td><td>완만한 가이던스</td><td><strong>공격적 MetaRocker</strong></td></tr>
    <tr><td>토박스 / 와이드</td><td>표준(힐 폭 85mm) / 와이드 없음</td><td><strong>넓음(클리프톤10 라스트) / 와이드 옵션 ○</strong></td></tr>
    <tr><td>가격</td><td><strong>179,000원</strong> (한국 확정 · $155)</td><td>$165 (한국 21~22만 추정)</td></tr>
  </tbody>
</table>
<p class="caption">※ 두 신발 모두 출시 전이라 RunRepeat 정량 랩(SA·에너지 리턴·토박스 mm)은 미게시입니다. 무게는 사이즈 기준을 M9로 통일한 추정치(외신 실측은 노바6 269g·M10.5, 클프로 296g·M10)입니다. 출시 후 실측·한국 정가가 나오면 업데이트합니다.</p>

<h2>가장 큰 차이 — 폼</h2>
<p>스택과 드롭이 같으니 <strong>발밑 느낌은 폼이 결정</strong>합니다. 노바블라스트 6은 힐에 FF Blast Max(폴리올레핀)를 두고 <strong>전족부에 FF Turbo Squared</strong>를 처음 넣었습니다. FF Turbo Squared는 아식스 상위 폼(<a href="/shoes/asics-megablast">메가블라스트</a> 계열)에 쓰인 ATPU 기반으로, PEBA에 가까운 <strong>통통 튀는 반발(pop)</strong>이 특징입니다. 전작 5의 약점이던 '힐-전족 전환 끊김'을 정조준한 설계죠. 더 자세한 변경점은 <a href="/blog/asics-novablast-6-preview-2026">노바블라스트 6 미리보기</a>에 정리해 뒀습니다.</p>
<p>클리프톤 프로는 <strong>ProGlide+</strong>라는 슈퍼크리티컬 EVA를 씁니다. 일반 클리프톤의 CMEVA보다 가볍고 탄성이 살아 있어 "클리프톤 이름값보다 훨씬 경쾌하다"(Believe in the Run)는 평을 받았습니다. 다만 <strong>EVA 계열이라 ATPU·PEBA급 에너지 리턴까지는 못 간다</strong>는 게 공통된 지적입니다. 대신 <strong>공격적인 MetaRocker</strong>로 발이 자연스럽게 굴러가는 부드러운 전환을 만듭니다. 정리하면 <strong>노바6는 '튕기는 반발', 클프로는 '굴러가는 롤링'</strong>입니다.</p>

<h2>발볼·핏 — 한국 러너의 핵심</h2>
<p>한국 러너에게 가장 갈리는 지점은 <strong>토박스</strong>입니다. 노바블라스트 6은 표준 핏인데 6세대에서 <strong>힐 폭이 90→85mm로 약간 좁아졌습니다</strong>(와이드 옵션 없음). 발볼이 넓다면 출시 후 시착이 필수입니다.</p>
<p>반면 클리프톤 프로는 발볼 넓은 호카 유저에게 익숙한 <strong>클리프톤10 라스트를 그대로 쓰고 와이드(2E) 옵션도 제공</strong>합니다. 발볼이 넓거나 체중이 좀 나가는 러너, 장거리 이지런 위주라면 클프로 쪽이 편안합니다. 발볼 기준으로 더 넓은 선택지가 필요하면 <a href="/best/wide-toebox">발볼 넓은 러너 추천</a>도 참고하세요.</p>

<h2>무게·가격 — 노바6가 우위</h2>
<p>무게는 <strong>노바6가 약 30g 가볍습니다</strong>(M9 253g vs 282g). 30g이면 가벼운 템포·업템포에서 체감되는 차이입니다. 가격도 노바6가 $155로 클프로($165)보다 $10 쌉니다. <strong>노바6 한국 정가는 179,000원으로 확정</strong>됐고(7/9 출시), 클프로는 한국가 미확정(클리프톤10 199,000원 기준 21~22만 원대 예상)입니다. <strong>가볍고 저렴한 쪽은 명확히 노바6</strong>입니다.</p>

<h2>누가 뭘 골라야 하나</h2>
<ul>
  <li><strong>노바블라스트 6</strong> — 가볍고 통통 튀는 반발을 원하는 러너, 조깅~가벼운 템포를 한 켤레로 굴리는 만능화가 필요한 러너, 예산을 아끼고 싶은 러너. 표준~약간 좁은 발에 맞습니다</li>
  <li><strong>클리프톤 프로</strong> — 발볼이 넓거나 와이드가 필요한 러너, 체중이 좀 나가거나 장거리 이지런·LSD 위주인 러너, 호카 특유의 부드러운 롤링을 좋아하는 러너</li>
  <li><strong>둘 다 애매하면</strong> — "가벼운 반발 vs 넓은 안정감"이 결정 기준입니다. 반발·경쾌함이면 노바6, 편안함·롤링이면 클프로. 더 넓은 데일리 후보는 <a href="/best/daily-trainer">데일리 트레이너 추천</a>, 푹신함 우선이면 <a href="/best/max-cushion">맥스 쿠션 추천</a>에서 비교해 보세요</li>
</ul>
<p>같은 아식스 FF Blast 계열로는 <a href="/shoes/asics-novablast-5">노바블라스트 5</a>(세일 시 여전히 좋은 선택), 한 단계 위 쿠션은 <a href="/shoes/asics-gel-nimbus-28">님버스 28</a>도 함께 보면 좋습니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">출시 전 비교 — 추정 주의</p>
    <p>본 글은 <strong>두 신발 출시 전</strong>(노바6 7/1·클프로 7/9) 작성으로, RunRepeat 정량 랩과 한국 정가는 아직 확정되지 않았습니다. 스펙은 제조사 공식 발표 + 전작·해외 리뷰(Believe in the Run·The Running Channel) 기준 추정이며, 무게는 M9 기준으로 환산했습니다. 출시 후 실측·한국 정가가 나오면 업데이트하겠습니다.</p>
  </div>
</div>
`,
  },
  {
    id: '2026-run-seoul-run-registration',
    slug: '2026-run-seoul-run-registration',
    title: '런서울런 2026(제20회 일간스포츠 서울마라톤) | 9/13 서울광장 도심 하프·10K — 6/29 10시 선착순, 정원 20% 줄어 광클 주의',
    description:
      '서울 도심 한복판을 달리는 런서울런이 9월 13일 서울광장에서 열립니다. 광화문·종로·흥인지문·숭례문을 잇는 평지 헤리티지 코스에 하프·10K 두 종목. 접수는 6월 29일(월) 오전 10시 선착순으로 열리는데, 작년 1.5만 명에서 올해 정원이 1.2만 명으로 약 20% 줄어 조기 마감 가능성이 큽니다. 일시·코스·종목·참가비·기념품을 한 장에 정리했습니다.',
    thumbnail: '/images/blog/2026-run-seoul-run-registration.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-23',
    category: 'news' as const,
    readingTime: 6,
    tags: ['런서울런', '일간스포츠 서울마라톤', '서울 마라톤', '도심 하프', '가을 마라톤', '마라톤 접수'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>런서울런(제20회 일간스포츠 서울마라톤)</strong>이 2026년 9월 13일(일) 서울광장에서 열립니다 — 도심 평지 헤리티지 코스, 하프·10K</li>
    <li>접수는 <strong>6월 29일(월) 오전 10시 선착순</strong>. 공식 홈페이지(runseoulrun.com)에서 온라인 접수</li>
    <li>작년 정원 1.5만 명 → <strong>올해 1.2만 명으로 약 20% 축소</strong>. 도심 인기 대회라 조기 마감 가능성이 높으니 오픈런 권장</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏙️</span>
  <div class="callout-body">
    <p class="callout-title">6월 29일 오전 10시, 선착순 오픈</p>
    <p>런서울런은 서울 도심 한복판(광화문~종로~을지로)을 통제하고 달리는 초가을 도심 대회입니다. 차로 가득하던 도로를 러너가 점령하는 매력에 매년 1만 명 이상이 몰리죠. 올해는 <strong>정원이 줄어 경쟁이 더 치열</strong>할 전망입니다.</p>
  </div>
</div>

<h2>대회 개요</h2>
<table>
  <thead><tr><th>항목</th><th>내용</th></tr></thead>
  <tbody>
    <tr><td>대회명</td><td>제20회 일간스포츠 서울마라톤 (2026 RUN SEOUL RUN)</td></tr>
    <tr><td>일시</td><td>2026년 9월 13일(일)</td></tr>
    <tr><td>출발·도착</td><td>서울광장 (서울 중구 세종대로 110)</td></tr>
    <tr><td>출발 시각</td><td>하프 07:30 / 10K 07:50</td></tr>
    <tr><td>종목</td><td>하프마라톤(21km), 10km</td></tr>
    <tr><td>정원</td><td>약 12,000명 (작년 약 15,000명에서 축소)</td></tr>
    <tr><td>접수</td><td>6월 29일(월) 10:00 선착순 · 공식 홈페이지</td></tr>
    <tr><td>주최</td><td>이데일리M(일간스포츠)</td></tr>
  </tbody>
</table>

<h2>코스 — 서울 도심 평지 헤리티지</h2>
<p>서울광장에서 출발해 <strong>종각·종로3가를 지나 흥인지문(동대문)에서 반환</strong>, 시청·숭례문·무교로를 거쳐 을지로3가에서 다시 반환해 서울광장으로 들어옵니다. 600년 도읍의 랜드마크(흥인지문·숭례문)를 잇는 코스라 '헤리티지 코스'로 불리죠. <strong>큰 오르막이 없는 평지</strong>라 도심 초행 러너나 하프 입문자도 부담이 적고, 기록을 노리기에도 좋습니다.</p>

<h2>접수·참가비</h2>
<p>접수는 <strong>6월 29일(월) 오전 10시</strong>부터 <a href="https://runseoulrun.com/" target="_blank" rel="noopener">공식 홈페이지</a>에서 선착순으로 진행됩니다. 2026년 참가비는 접수 오픈 시점에 공식 발표될 예정인데, <strong>작년(제19회) 기준 하프 79,000원 / 10km 59,000원</strong>이었습니다(올해 확정가는 접수 페이지에서 확인하세요). 환불 신청 마감은 8월 14일(금)로 안내돼 있습니다.</p>

<h2>정원 20% 축소 → 광클 주의</h2>
<p>2025년(제19회)은 정원 약 1.5만 명에 실제 15,524명이 참가해 성황리에 끝났습니다. 그런데 <strong>2026년은 정원이 약 1.2만 명으로 줄었습니다</strong>(약 20% 축소, 사유 미공개). 수요는 그대로인데 자리가 줄었으니 <strong>하프부터 빠르게 마감될 가능성</strong>이 큽니다. 접수일 오전 10시에 맞춰 미리 로그인·결제 정보를 준비해 두는 '오픈런'을 권합니다.</p>

<h2>기념품·혜택</h2>
<ul>
  <li>기념 티셔츠 · 배번호 — <strong>택배 사전 발송</strong>(현장 수령 대기 없음)</li>
  <li>완주 메달 · 완주 간식 — 현장 지급</li>
  <li>칩 계측 기록 측정(1만 명 이상 규모 도심 대회 표준)</li>
</ul>
<p>같은 가을 서울 도심 대회로는 <a href="/blog/2026-mbn-seoul-marathon-registration">MBN 서울마라톤</a>(11/15 광화문~잠실), <a href="/blog/ytn-seoul-tour-marathon-2026">YTN 서울투어마라톤</a>(9/6)도 있습니다. 가을 전체 일정을 한 번에 보려면 <a href="/blog/2026-second-half-marathon-schedule-korea">2026 하반기 마라톤 완전정복</a>과 <a href="/marathon">마라톤 캘린더</a>를 참고하세요.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">접수 전 확인</p>
    <p>2026년 참가비·세부 정원·접수 마감일은 <strong>6월 29일 접수 오픈 시 공식 발표</strong>됩니다. 본 글의 참가비는 작년(제19회) 기준 참고값이며, 정확한 금액과 코스 통제 안내는 <a href="https://runseoulrun.com/" target="_blank" rel="noopener">공식 홈페이지</a>에서 최종 확인하세요.</p>
  </div>
</div>
`,
  },
  {
    id: 'saucony-triumph-24-review',
    slug: 'saucony-triumph-24-review',
    title: '써코니 트라이엄프 24 리뷰 | 스택 +6mm인데 -22g — incrediLUX 폼으로 갈아탄 209,000원 맥스쿠션 가성비',
    description:
      '써코니 최고급 데일리 쿠션화 트라이엄프가 24세대에서 폼을 통째로 바꿨습니다. PWRRUN PB(ePEBA) → incrediLUX(ATPU). 그 결과 스택은 +6mm 높아졌는데 무게는 오히려 22g 가벼워진 250g — "부드러운데 멍청하지 않다"는 평을 받으며 BITR A티어, DOR A-를 받았죠. 한국 정가 209,000원으로 본디9·님버스28보다 저렴합니다. 발볼 넓은 한국 러너를 위한 와이드 옵션과 평발·무릎 적합성까지 정리했습니다.',
    thumbnail: '/images/blog/saucony-triumph-24-review.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-23',
    category: 'review' as const,
    readingTime: 8,
    tags: ['써코니 트라이엄프 24', '트라이엄프', 'incrediLUX', '쿠션화', '맥스쿠션', '러닝화 리뷰'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>트라이엄프 24가 폼을 통째로 교체</strong> — PWRRUN PB(ePEBA)에서 신형 incrediLUX(ATPU)로. 그 결과 스택은 +6mm 높아졌는데 무게는 22g 줄어 250g</li>
    <li>"부드러운데 멍청하지 않다"는 평 — <strong>맥스쿠션이면서 에너지 리턴이 살아 있는</strong> 데일리 쿠션화. BITR A티어, Doctors of Running A-</li>
    <li>한국 정가 <strong>209,000원</strong>으로 본디9·님버스28보다 저렴, <strong>와이드(2E) 옵션</strong>도 한국몰 판매. 단 안정화 기능은 없는 완전 중립화</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🛋️</span>
  <div class="callout-body">
    <p class="callout-title">"소파인데 살짝 튕기는 소파"</p>
    <p>트라이엄프는 써코니의 <strong>최고급 데일리 쿠션화</strong>입니다. 매일 편하게 거리를 쌓고 롱런까지 소화하는 '푹신한 만능화' 포지션이죠. 24세대는 한국에 이미 출시돼 <strong>209,000원</strong>에 판매 중이며(와이드 포함), 폼 교체로 시리즈 사상 가장 큰 변화를 맞았습니다.</p>
  </div>
</div>

<h2>23 → 24, 무엇이 달라졌나</h2>
<table>
  <thead><tr><th>항목</th><th>트라이엄프 23</th><th>트라이엄프 24</th><th>변경</th></tr></thead>
  <tbody>
    <tr><td>무게(M9)</td><td>272g</td><td><strong>250g</strong></td><td>-22g</td></tr>
    <tr><td>힐 / 전족 스택</td><td>42.3 / 32.3mm</td><td>43 / 33mm</td><td>+6mm 안팎</td></tr>
    <tr><td>드롭</td><td>10mm</td><td>10mm</td><td>동일</td></tr>
    <tr><td><strong>미드솔 폼</strong></td><td>PWRRUN PB (ePEBA)</td><td><strong>incrediLUX (ATPU)</strong></td><td>전면 교체</td></tr>
    <tr><td>어퍼</td><td>엔지니어드 메시</td><td>더 오픈된 메시(통기성↑)</td><td>여름 쾌적</td></tr>
    <tr><td>와이드 옵션</td><td>제공</td><td>제공(한국몰 판매)</td><td>유지</td></tr>
    <tr><td>한국 정가</td><td>—</td><td>209,000원</td><td>—</td></tr>
  </tbody>
</table>
<p class="caption">※ 트라이엄프 24의 RunRepeat 정량 랩(SA·에너지 리턴·토박스 mm)은 2026-06-23 기준 미게시입니다. 참고로 23 실측은 SA 힐 149·전족 136, 에너지 리턴 힐 67.6%·전족 71.2%, 토박스 71.4mm였습니다(24는 게시되면 업데이트).</p>

<h2>핵심 — incrediLUX 폼의 역설</h2>
<p>이번 세대의 모든 것은 <strong>incrediLUX 폼</strong>으로 통합니다. 기존 PWRRUN PB(ePEBA)를 ATPU(알리파틱 TPU) 기반 슈퍼크리티컬 폼으로 바꿨는데, 결과가 흥미롭습니다. 써코니 공식 발표 그대로 <strong>"발밑 폼을 11% 더 넣었는데 트라이엄프 23보다 거의 0.5온스(약 14g) 가벼워졌다"</strong>는 것. 실측으로는 스택 +6mm에 무게 -22g입니다. <strong>더 두툼해졌는데 더 가벼워진</strong> 셈이죠.</p>
<p>주행 느낌도 좋아졌습니다. Believe in the Run은 <strong>"트라이엄프 역사상 가장 활기찬(pep) 폼"</strong>이라 했고, Doctors of Running은 <strong>"트라이엄프가 진짜 프리미엄 데일리 트레이너처럼 느껴지는 첫 버전"</strong>이라 평했습니다(A-). Road Trail Run 멀티 테스터는 평균 9.3/10. 공통된 칭찬은 <strong>"부드러운데 둔하지 않다"</strong> — 맥스쿠션이면서 에너지 리턴이 살아 있다는 점입니다.</p>

<h2>맥스쿠션 3대장 비교 — 어디에 설까</h2>
<p>한국에서 트라이엄프 24의 라이벌은 명확합니다. <a href="/shoes/hoka-bondi-9">호카 본디 9</a>, <a href="/shoes/asics-gel-nimbus-28">아식스 님버스 28</a>, <a href="/shoes/new-balance-1080-v15">뉴발란스 1080 v15</a>죠.</p>
<ul>
  <li><strong>vs 본디 9</strong> — 본디는 더 무겁고(약 298g) 구조화된 로커로 '완전 소파'. 트라이엄프 24는 약 48g 가볍고 에너지 리턴이 더 살아 '튕기는 소파'입니다</li>
  <li><strong>vs 님버스 28</strong> — 스택은 비슷(43.5/35.5mm). 님버스는 FF BLAST+ + PureGEL로 플랫폼 안정감이 우위, 트라이엄프 24는 무게·반발과 가격(209K vs 약 23만)에서 우위</li>
  <li><strong>vs 1080 v15</strong> — 1080은 드롭이 6mm로 낮아(트라이엄프 24는 10mm) 더 자연스러운 발걸음. <strong>힐 착지가 많다면 드롭 10mm의 트라이엄프 24</strong>가 편합니다</li>
</ul>
<p>정리하면 <strong>'쿠션 + 반발 균형 + 가성비'가 트라이엄프 24의 자리</strong>입니다. 푹신함 끝판왕은 본디, 안정감은 님버스, 낮은 드롭은 1080. 세 신발을 한 번에 보려면 <a href="/best/max-cushion">맥스 쿠션 러닝화 추천</a>을 참고하세요.</p>

<h2>한국 러너 관점 — 발볼·평발·무릎</h2>
<ul>
  <li><strong>발볼 넓은 러너</strong> — <strong>와이드(2E) 옵션이 한국몰에 정식 판매</strong>됩니다. 표준형도 23(71.4mm)보다 소폭 넉넉해졌지만, 발볼이 넓다면 와이드를 권합니다(<a href="/best/wide-toebox">발볼 넓은 러너 추천</a> 참고)</li>
  <li><strong>평발·과내전</strong> — <strong>완전 중립화라 교정 기능이 없습니다.</strong> 경미한 평발 + 쿠션 우선이면 43mm 스택이 발바닥 부하를 줄여줘 허용 범위지만, 오버프로네이션이 뚜렷하면 안정화인 <a href="/shoes/saucony-hurricane-25">써코니 허리케인</a> 계열이 맞습니다</li>
  <li><strong>무릎</strong> — 43mm 힐 스택의 충격 흡수로 무릎 부하 분산에 유리합니다. 단 무릎 통증 원인이 과내전이라면 쿠션만으로는 부족하니 안정화를 고려하세요</li>
</ul>

<h2>누구에게 추천하나</h2>
<ul>
  <li><strong>추천</strong> — 이지런·롱런용 최고급 쿠션 중립화를 찾는 러너, 맥스쿠션을 원하지만 '무겁고 둔한' 느낌이 싫은 러너, 초~중급 마라톤 훈련용, 발바닥 부하를 줄이고 싶은 러너</li>
  <li><strong>비추천</strong> — 안정화가 필요한 과내전 러너(→ 허리케인), 낮은 드롭·그라운드 필을 좋아하는 러너, 비 오는 노면 위주로 달리는 러너(젖은 노면 트랙션은 평범)</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">두 가지 주의</p>
    <p>① <strong>안정화가 아닙니다.</strong> 트라이엄프 24는 완전 중립화로, 안정성이 필요하면 써코니 허리케인 26 등 안정화 라인을 보세요. ② <strong>RunRepeat 정량 랩은 아직 미게시</strong>(2026-06-23 기준)라, 본문의 SA·에너지 리턴 수치는 트라이엄프 23 참고값입니다. 24 랩이 나오면 업데이트하겠습니다.</p>
  </div>
</div>
`,
  },
  {
    id: 'asics-novablast-6-preview-2026',
    slug: 'asics-novablast-6-preview-2026',
    title: '아식스 노바블라스트 6 미리보기 | 7월 1일 출시 — 5와 무엇이 달라졌나 (FF Turbo Squared 전족부·AsicsGrip)',
    description:
      '아식스 인기 데일리 쿠션화 노바블라스트의 6세대가 7월 1일 글로벌 출시됩니다. 핵심 변화는 전족부에 처음 적용된 FF Turbo Squared(ATPU 트램폴린 폼) — 전작 5의 약점이던 힐-전족 전환을 개선할 카드죠. 스택·무게는 5와 거의 같고, 어퍼는 슈퍼블라스트 3 위브로 리뉴얼, 전족 AsicsGrip으로 빗길 접지가 좋아졌습니다. 5 대비 변경점과 한국 출시·예상 가격을 출시 전 미리 정리했습니다.',
    thumbnail: '/images/blog/asics-novablast-6-preview-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-23',
    updatedAt: '2026-07-08',
    category: 'review' as const,
    readingTime: 7,
    tags: ['아식스 노바블라스트 6', '노바블라스트', 'FF Turbo Squared', '쿠션화', '데일리 트레이너', '신상 러닝화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>노바블라스트 6이 7월 1일 글로벌 출시</strong> — 아식스의 인기 데일리 쿠션화 노바블라스트의 6세대입니다(한국 출시 임박)</li>
    <li>핵심 변화는 <strong>전족부에 처음 적용된 FF Turbo Squared</strong>(ATPU 트램폴린 폼) — 전작 5의 약점이던 힐-전족 전환·전족 반발을 개선할 카드</li>
    <li>스택·무게는 5와 거의 동일, <strong>어퍼는 슈퍼블라스트 3 위브로 리뉴얼, 전족 AsicsGrip으로 빗길 접지↑</strong></li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">👀</span>
  <div class="callout-body">
    <p class="callout-title">7월 1일 출시 — 무엇을 미리 알아둘까</p>
    <p>노바블라스트는 <a href="/shoes/asics-gel-nimbus-28">님버스</a>보다 가볍고 통통 튀는 "데일리 쿠션화"로, 한국에서도 가성비 만능화로 인기가 높습니다. 6세대는 2026년 7월 1일 글로벌 출시됐고, <strong>한국은 2026년 7월 9일(목) 오전 10시 출시 — 정가 179,000원 확정</strong>입니다(5의 169,000원 대비 +1만원). 상세 스펙은 <a href="/shoes/asics-novablast-6">노바블라스트 6 상세 페이지</a>에 정리해 뒀습니다. 다만 RunRepeat 정량 랩(SA·에너지 리턴·토박스)은 아직 미게시 상태 — 아래 세부 수치는 <strong>아식스 공식 발표 변경점 + 노바블라스트 5 실측 기준 추정</strong>이며, 실측 게시 시 업데이트합니다.</p>
  </div>
</div>

<h2>노바블라스트, 어떤 신발인가</h2>
<p>노바블라스트는 아식스의 <strong>FF Blast 폼 기반 데일리 쿠션화</strong>입니다. 안정화 카야노·맥스쿠션 님버스와 달리, "가볍고 반발 좋은 만능 트레이너"를 지향하죠. 조깅부터 가벼운 템포까지 한 켤레로 굴리기 좋아 입문자·중급자 모두에게 추천되는 스테디셀러입니다. 전작 5는 부드러운 FF Blast Max로 호평받았지만, <strong>힐에서 전족으로 넘어가는 전환이 다소 끊긴다</strong>(Doctors of Running)는 지적이 있었습니다.</p>

<h2>5 → 6, 무엇이 달라졌나</h2>
<table>
  <thead><tr><th>항목</th><th>노바블라스트 5 (실측)</th><th>노바블라스트 6 (공식)</th><th>변경</th></tr></thead>
  <tbody>
    <tr><td>무게</td><td>254g</td><td>253g</td><td>사실상 동일</td></tr>
    <tr><td>힐 스택</td><td>40.9mm</td><td>41.5mm</td><td>+0.6mm</td></tr>
    <tr><td>전족 스택</td><td>33.5mm</td><td>33.5mm</td><td>동일</td></tr>
    <tr><td>드롭</td><td>7.4mm</td><td>8mm</td><td>+0.6mm</td></tr>
    <tr><td><strong>미드솔</strong></td><td>FF Blast Max 단일</td><td><strong>FF Blast Max + FF Turbo Squared(전족)</strong></td><td>전족 듀얼 폼 신규</td></tr>
    <tr><td>아웃솔</td><td>AHAR LO</td><td>+ <strong>AsicsGrip 전족부</strong></td><td>빗길 접지↑</td></tr>
    <tr><td>어퍼</td><td>엔지니어드 메시</td><td>엔지니어드 위브(슈퍼블라스트 3 원단)</td><td>리뉴얼</td></tr>
    <tr><td>힐 폭</td><td>90mm</td><td>85mm</td><td>-5mm(약간 좁아짐)</td></tr>
    <tr><td>가격</td><td>169,000원</td><td><strong>179,000원</strong> (글로벌 $155)</td><td>+1만원 (7/9 한국 출시)</td></tr>
  </tbody>
</table>
<p class="caption">※ 6세대 수치는 아식스 공식 발표 + 노바블라스트 5 실측 기준 추정입니다. RunRepeat 정량 랩(SA·에너지 리턴·토박스)은 출시 후 게시되면 업데이트합니다.</p>

<h2>핵심 변화 — 전족부 FF Turbo Squared</h2>
<p>이번 세대의 가장 큰 변화는 <strong>전족부에 FF Turbo Squared를 처음 넣은 것</strong>입니다. FF Turbo Squared는 아식스 최상위 폼 계열(메가블라스트 등에 쓰인 ATPU 기반)로, <strong>전족부에서 트램폴린 같은 반발</strong>을 더해줍니다. 힐은 기존 FF Blast Max를 유지하고 전족만 고반발 폼을 얹은 <strong>듀얼 폼 구조</strong>죠.</p>
<p>이는 5의 "힐-전족 전환이 끊긴다"는 약점을 정조준한 설계로 보입니다. 전족 반발이 살아나면 가벼운 템포·업템포에서 더 경쾌해질 가능성이 큽니다. 같은 위브 어퍼를 쓰는 <a href="/shoes/asics-superblast-3">슈퍼블라스트 3</a>, FF Turbo 계열을 공유하는 <a href="/shoes/asics-megablast">메가블라스트</a>와의 관계도 흥미로운 지점입니다.</p>

<h2>한국 출시·가격 (확정)</h2>
<p>한국 출시는 <strong>2026년 7월 9일(목) 오전 10시</strong>, 정가는 <strong>179,000원</strong>으로 확정됐습니다(글로벌 $155). 노바블라스트 5(169,000원) 대비 <strong>1만원 인상</strong>으로, 글로벌 인상폭($140→$155)과 비례하는 수준입니다. 아식스 온라인스토어를 비롯해 무신사·ABC마트·플릿러너 등에서 구매할 수 있고, 출시일부터 asics.co.kr·직영점 시착이 가능합니다. 와이드(2E) 옵션은 전작 5엔 있었으나 6은 출시 시점 확인이 필요합니다. 확인된 컬러웨이로는 'Champagne Rose' 등이 있습니다.</p>

<h2>5에서 갈아탈까 — 누구에게</h2>
<ul>
  <li><strong>5의 전환 끊김이 아쉬웠다면</strong> — 6의 전족 FF Turbo Squared가 핵심 개선이라 갈아탈 가치가 있습니다</li>
  <li><strong>빗길·여름 트레일 임도를 자주 달린다면</strong> — 전족 AsicsGrip 추가로 접지가 좋아져 장마철에 유리</li>
  <li><strong>5를 잘 쓰고 있고 600km 이내라면</strong> — 스택·무게가 거의 같아 급히 갈아탈 이유는 적습니다. 세일 들어간 5도 여전히 좋은 선택</li>
  <li><strong>발볼 넓은 러너</strong> — 힐 폭이 90→85mm로 약간 좁아졌으니, 출시 후 시착으로 확인하세요</li>
</ul>
<p>전작과 세대별로 꼼꼼히 비교하려면 <a href="/blog/asics-novablast-5-vs-6-comparison-2026">노바블라스트 5 vs 6 세대 비교</a>를, 같은 시기 데일리 신상과 겨루는 구도는 <a href="/blog/asics-novablast-6-vs-hoka-clifton-pro-2026">노바블라스트 6 vs 클리프톤 프로</a>를 보세요. 데일리 쿠션화를 더 넓게 보려면 <a href="/best/daily-trainer">데일리 트레이너 추천</a>, 같은 아식스 FF Blast 계열(<a href="/shoes/asics-novablast-5">노바블라스트 5</a>·<a href="/shoes/asics-superblast-3">슈퍼블라스트 3</a>)과의 위치도 참고하세요.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">출시 전 미리보기 — 추정 주의</p>
    <p>본 글은 <strong>2026년 7월 1일 출시 전</strong> 작성으로, RunRepeat 정량 랩(SA·에너지 리턴·토박스 너비)은 아직 없습니다. 위 수치는 <strong>아식스 공식 발표 변경점 + 노바블라스트 5 실측 기준 추정</strong>이며, 한국 정가도 미확정(5 기준 추정)입니다. 출시 후 실측·한국 정가가 나오면 업데이트하겠습니다.</p>
  </div>
</div>

<h2>마무리</h2>
<p>노바블라스트 6은 "스택은 그대로, 전족 반발을 키운" 세대 교체로 보입니다. 5의 부드러움에 <strong>전족 FF Turbo Squared의 경쾌함</strong>이 더해진다면, 데일리 만능화로서 매력이 한 단계 올라갈 가능성이 큽니다. 7월 1일 출시 후 실제 착화감·랩 데이터가 나오면 이 글을 업데이트할 예정이니, 구매를 고민 중이라면 출시 직후 시착 후 결정하세요. 🏃</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 아식스 공식 프레스릴리스(2026-05-29)와 노바블라스트 5 실측 데이터를 바탕으로 한 출시 전 미리보기입니다. 6세대 RunRepeat 정량 랩·한국 공식 가격은 미게시/미확정 상태로, 출시(7/1) 후 업데이트합니다. (작성 2026-06-23)</p>
`,
  },
  {
    id: 'shin-splints-running-shoes-2026',
    slug: 'shin-splints-running-shoes-2026',
    title: '러너의 정강이 통증(신 스플린트) — 왜 생기고 러닝화로 어떻게 줄일까 | 충격흡수·점진적 거리·추천화 (님버스 28·본디 9·페가수스 41)',
    description:
      '정강이 통증(신 스플린트)은 초보 러너와 훈련량을 갑자기 늘린 러너가 가장 많이 겪는 부상입니다. 정강이 안쪽이 욱신거리면 의심해야 하죠. 러닝화에서는 충격을 잘 흡수하는 쿠션과 적절한 드롭이 핵심이지만, 사실 가장 큰 원인은 갑작스러운 거리 증가입니다. 신 스플린트가 왜 생기는지, 충격흡수 좋은 러닝화(님버스 28·본디 9·페가수스 41)와 10% 룰 같은 예방법까지 정리했습니다.',
    thumbnail: '/images/blog/shin-splints-running-shoes-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-23',
    category: 'guide' as const,
    readingTime: 8,
    tags: ['신 스플린트', '정강이 통증', '부상 예방', '충격흡수', '초보 러너', '러닝 부상'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>신 스플린트(정강이 통증)는 <strong>갑작스러운 거리·강도 증가</strong>가 가장 큰 원인 — 초보 러너와 훈련량을 급히 늘린 러너에게 흔합니다</li>
    <li>러닝화 핵심은 <strong>충격을 잘 흡수하는 쿠션 + 적절한 드롭(8mm 이상)</strong>. 얇은 미니멀화·다 닳은 신발은 정강이 부담을 키웁니다</li>
    <li>신발만으론 부족 — <strong>10% 룰(주간 거리 점진 증가)과 정강이·종아리 강화</strong>가 근본 예방입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🦵</span>
  <div class="callout-body">
    <p class="callout-title">신 스플린트란</p>
    <p>신 스플린트(정강이 통증, 정강이 부목)는 정강이뼈(경골)를 따라 붙은 근육·골막에 반복 충격이 쌓여 생기는 통증입니다. <strong>정강이 안쪽 아래쪽이 욱신거리거나, 달리기 시작·끝에 뻐근</strong>하면 의심해야 하죠. 러닝을 막 시작했거나 거리를 갑자기 늘렸을 때 가장 흔하고, 방치하면 피로골절로 이어질 수 있어 초기 관리가 중요합니다.</p>
  </div>
</div>

<h2>왜 생길까 — 주요 원인</h2>
<ul>
  <li><strong>갑작스러운 거리·강도 증가</strong> — 가장 큰 원인. 정강이 근육·뼈가 적응할 시간 없이 충격이 누적됩니다</li>
  <li><strong>충격 흡수가 부족한 신발</strong> — 쿠션이 얇거나 다 닳은 신발은 착지 충격을 정강이로 그대로 전달합니다</li>
  <li><strong>과회내(오버프로네이션)</strong> — 발이 안쪽으로 무너지면 정강이 안쪽 근육에 비틀림 부담이 몰립니다</li>
  <li><strong>딱딱한 노면 + 낮은 드롭으로 급전환</strong> — 아스팔트 과다, 미니멀화 급전환은 정강이 부담을 키웁니다</li>
  <li><strong>약한 정강이·종아리 근육</strong> — 근력이 부족하면 충격을 뼈·골막이 받습니다</li>
</ul>

<h2>러닝화로 줄이기 — '충격 흡수'가 핵심</h2>
<p>아킬레스건염이 <strong>드롭</strong>, 족저근막염이 <strong>아치 서포트</strong>가 핵심이라면, 신 스플린트는 <strong>착지 충격을 얼마나 흡수하느냐</strong>가 핵심입니다. 세 가지를 보세요.</p>
<ol>
  <li><strong>충분한 쿠션</strong> — 부드럽고 두툼한 미드솔이 정강이로 가는 충격을 줄입니다</li>
  <li><strong>드롭 8mm 이상</strong> — 낮은 드롭(0~4mm)은 전경골근 부담이 커 회복기엔 불리합니다</li>
  <li><strong>과회내라면 안정화</strong> — 발 무너짐이 정강이 비틀림으로 이어지므로 가이드 기능이 도움됩니다</li>
</ol>
<table>
  <thead><tr><th>모델</th><th>유형</th><th>신 스플린트에 좋은 이유</th></tr></thead>
  <tbody>
    <tr><td><a href="/shoes/asics-gel-nimbus-28">아식스 님버스 28</a></td><td>쿠션화</td><td>맥스쿠션 + FF Blast 폼으로 충격 흡수 최상위</td></tr>
    <tr><td><a href="/shoes/hoka-bondi-9">호카 본디 9</a></td><td>맥스쿠션</td><td>두꺼운 스택 + 넓은 베이스로 충격 분산</td></tr>
    <tr><td><a href="/shoes/nike-vomero-18">나이키 보메로 18</a></td><td>쿠션(드롭 14mm)</td><td>높은 드롭 + 맥스쿠션, 정강이·종아리에 너그러움</td></tr>
    <tr><td><a href="/shoes/nike-pegasus-41">나이키 페가수스 41</a></td><td>데일리</td><td>균형잡힌 쿠션, 초보 입문에 무난</td></tr>
    <tr><td><a href="/shoes/asics-gel-kayano-33">아식스 카야노 33</a></td><td>안정화</td><td>과회내 동반 시 — 발 무너짐 억제로 정강이 비틀림 완화</td></tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">신 스플린트일 때 피해야 할 것</p>
    <ul>
      <li><strong>얇은 미니멀·레이싱화</strong> — 충격 흡수가 적어 정강이 부담이 큽니다(회복기 비추천)</li>
      <li><strong>쿠션이 죽은 낡은 신발</strong> — 500~700km 넘으면 미드솔 반발이 떨어지니 교체하세요</li>
      <li><strong>통증 참고 거리 늘리기</strong> — 신 스플린트를 방치하면 피로골절로 악화될 수 있습니다</li>
    </ul>
  </div>
</div>

<h2>신발보다 중요한 예방 — 점진성과 근력</h2>
<p>신 스플린트는 다른 부상보다 특히 <strong>"얼마나 갑자기 달렸나"</strong>가 결정적입니다. 신발은 보조일 뿐, 훈련 관리가 근본입니다.</p>
<ul>
  <li><strong>10% 룰</strong> — 주간 거리를 한 번에 10% 이상 늘리지 않기. 초보일수록 보수적으로(<a href="/blog/race-distance-difficulty-guide-2026">거리·강도 관리</a> 참고)</li>
  <li><strong>정강이·종아리 강화</strong> — 발끝 들기(토 레이즈), 카프 레이즈로 충격을 근육이 받게 합니다</li>
  <li><strong>부드러운 노면 병행</strong> — 아스팔트만 달리지 말고 트랙·흙길을 섞으면 부담이 줄어듭니다</li>
  <li><strong>워밍업</strong> — 달리기 전 <a href="/blog/running-warmup-cooldown-guide-2026">동적 워밍업</a>으로 정강이·발목을 풀기</li>
  <li><strong>통증 시 휴식</strong> — 욱신거리면 며칠 쉬고 얼음찜질. 2주 이상 지속되면 피로골절 감별을 위해 병원에서 확인하세요</li>
</ul>

<h2>마무리</h2>
<p>신 스플린트는 "신발 하나"로 막기보다, <strong>충격 흡수 좋은 쿠션화 + 점진적 거리 증가 + 정강이 근력</strong>의 조합으로 예방하는 부상입니다. 특히 막 달리기를 시작했거나 거리를 늘리는 중이라면 욕심내지 말고 천천히 쌓으세요. 더 많은 모델은 <a href="/best/shin-splints">정강이 통증 러닝화 추천</a>에서 비교할 수 있고, 다른 부위가 함께 아프다면 <a href="/blog/plantar-fasciitis-running-shoes-2026">족저근막염</a>·<a href="/blog/achilles-tendon-running-shoes-prevention-2026">아킬레스건염</a>·<a href="/blog/knee-pain-running-shoes">무릎 통증</a> 가이드도 참고하세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 일반적인 부상 예방 정보로, 개인의 의학적 진단을 대체하지 않습니다. 통증이 2주 이상 지속되거나 특정 지점을 누를 때 날카롭게 아프면(피로골절 의심) 정형외과·스포츠의학 전문의의 진료를 받으세요.</p>
`,
  },
  {
    id: 'plantar-fasciitis-running-shoes-2026',
    slug: 'plantar-fasciitis-running-shoes-2026',
    title: '러너의 족저근막염 — 아침 첫발이 아프다면 | 아치 서포트·안정화 러닝화로 줄이는 법 (카야노 33·본디 9·아드레날린 GTS)',
    description:
      '족저근막염은 러너가 가장 많이 호소하는 만성 통증입니다. 아침에 일어나 첫발을 디딜 때 뒤꿈치~아치가 찌릿하다면 의심해야 하죠. 평발·과회내가 가장 큰 원인이라, 러닝화에서는 강한 아치 서포트와 안정화, 단단한 힐 카운터, 드롭 8mm 이상이 핵심입니다. 카야노 33·본디 9·아드레날린 GTS 25 등 족저근막염 등급이 좋은 모델과, 발바닥 스트레칭 같은 예방법까지 정리했습니다.',
    thumbnail: '/images/blog/plantar-fasciitis-running-shoes-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-22',
    category: 'guide' as const,
    readingTime: 8,
    tags: ['족저근막염', '부상 예방', '아치 서포트', '평발', '안정화 러닝화', '러닝 부상'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>족저근막염은 <strong>발바닥 아치를 받치는 근막에 생기는 염증</strong> — 아침 첫발의 찌릿한 통증이 대표 신호입니다</li>
    <li>러닝화 핵심은 <strong>강한 아치 서포트 + 단단한 힐 카운터 + 드롭 8mm 이상</strong>. 평발·과회내라면 안정화가 1순위입니다</li>
    <li>신발만으론 부족 — <strong>발바닥·종아리 스트레칭과 점진적 거리 증가</strong>가 근본 예방이고, <a href="/blog/plantar-fasciitis-insoles-guide-2026">아치 서포트 인솔</a>로 보완할 수 있습니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🦶</span>
  <div class="callout-body">
    <p class="callout-title">족저근막염이란</p>
    <p>족저근막은 발뒤꿈치뼈에서 발가락까지 <strong>발바닥 아치를 받치는 두꺼운 섬유띠</strong>입니다. 여기에 미세 손상과 염증이 쌓이면 통증이 생기죠. 가장 특징적인 신호는 <strong>아침에 일어나 첫발을 디딜 때, 또는 오래 앉았다 일어설 때 뒤꿈치~아치가 찌릿한 것</strong>입니다. 러너에게 흔하지만 <strong>한번 오면 오래 가는</strong> 부상이라, 예방과 초기 관리가 중요합니다.</p>
  </div>
</div>

<h2>왜 생길까 — 주요 원인</h2>
<ul>
  <li><strong>평발·과회내(오버프로네이션)</strong> — 가장 큰 위험 요인. 착지할 때 아치가 안쪽으로 무너지면서 근막이 과도하게 늘어납니다</li>
  <li><strong>갑작스러운 거리·강도 증가</strong> — 근막이 적응할 시간 없이 부하가 몰림</li>
  <li><strong>종아리·아킬레스 긴장</strong> — 종아리가 뻣뻣하면 발바닥 근막까지 당겨져 부담이 커집니다(<a href="/blog/achilles-tendon-running-shoes-prevention-2026">아킬레스건염</a>과 자주 같이 옵니다)</li>
  <li><strong>쿠션·지지력이 죽은 낡은 신발</strong> — 미드솔이 주저앉으면 충격이 그대로 발바닥으로</li>
  <li><strong>딱딱한 바닥 + 미니멀·플랫 신발</strong> — 아치를 받쳐주지 못해 근막 부하가 큼</li>
</ul>

<h2>러닝화로 줄이기 — '아치 서포트'가 핵심</h2>
<p>아킬레스건염이 <strong>드롭</strong>이 핵심이라면, 족저근막염은 <strong>아치를 받쳐 근막이 과도하게 늘어나는 걸 막는 것</strong>이 핵심입니다. 세 가지를 보세요.</p>
<ol>
  <li><strong>아치 서포트·안정화</strong> — 평발·과회내라면 가이드레일·3D 가이던스 같은 안정 시스템이 아치 무너짐을 잡아줍니다</li>
  <li><strong>단단한 힐 카운터 + 비틀림 강성</strong> — 뒤꿈치와 중족부가 안정되어야 근막이 덜 휩니다</li>
  <li><strong>드롭 8mm 이상</strong> — 종아리·근막의 긴장을 덜어줍니다(낮은 드롭은 부담이 큼)</li>
</ol>
<table>
  <thead><tr><th>모델</th><th>유형</th><th>족저근막염에 좋은 이유</th></tr></thead>
  <tbody>
    <tr><td><a href="/shoes/asics-gel-kayano-33">아식스 카야노 33</a></td><td>안정화</td><td>평발+족저근막 1순위. FF Blast 쿠션 + 안정 시스템으로 아치 무너짐 억제</td></tr>
    <tr><td><a href="/shoes/brooks-adrenaline-gts-25">브룩스 아드레날린 GTS 25</a></td><td>안정화</td><td>가이드레일이 발·무릎 정렬을 잡아주는 대표 안정화</td></tr>
    <tr><td><a href="/shoes/mizuno-wave-inspire-21">미즈노 웨이브 인스파이어 21</a></td><td>안정화</td><td>Wave 플레이트의 단단한 지지 + 넉넉한 발볼</td></tr>
    <tr><td><a href="/shoes/hoka-bondi-9">호카 본디 9</a></td><td>맥스쿠션</td><td>중립발용. 넓고 단단한 베이스 + 맥스쿠션으로 충격 분산</td></tr>
    <tr><td><a href="/shoes/nike-vomero-18">나이키 보메로 18</a></td><td>쿠션(드롭 14mm)</td><td>높은 드롭 + 맥스쿠션이라 종아리·근막에 너그러움</td></tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">족저근막염일 때 피해야 할 신발</p>
    <ul>
      <li><strong>드롭 0~4mm 미니멀·플랫화</strong> — 아치 지지가 약하고 근막 신장이 큽니다</li>
      <li><strong>비틀면 쉽게 휘는 너무 유연한 신발</strong> — 중족부를 못 잡아줍니다</li>
      <li><strong>쿠션이 죽은 낡은 신발</strong> — 보통 500~700km면 미드솔 반발이 떨어지니 교체하세요</li>
    </ul>
  </div>
</div>

<h2>평발이면 더 주의 — 안정화 우선</h2>
<p>평발·과회내는 족저근막염의 <strong>가장 큰 위험 인자</strong>입니다. 아치가 받쳐지지 않으면 근막이 매 착지마다 과하게 늘어나기 때문이죠. 본인이 과회내인지 모르겠다면 <a href="/blog/stability-running-shoes-overpronation-flat-feet-2026">과회내·평발 자가진단</a>으로 먼저 확인하고, 안정화 위주로 고르세요. 평발 전용 추천은 <a href="/best/flat-feet">평발 러닝화</a>에서 비교할 수 있습니다.</p>

<h2>신발보다 중요한 예방 — 스트레칭과 점진성</h2>
<ul>
  <li><strong>발바닥 마사지·스트레칭</strong> — 마사지볼이나 얼린 물병을 발바닥 아래 굴려 근막을 풀어줍니다. 아침 첫발을 딛기 전이 특히 효과적</li>
  <li><strong>종아리 스트레칭</strong> — 종아리가 부드러워야 근막 당김이 줄어듭니다(벽 밀기 스트레칭 하루 2~3회)</li>
  <li><strong>발 내재근 강화</strong> — 타월 컬(수건 발가락으로 끌어당기기), 발가락 집기로 아치 근육을 키우기</li>
  <li><strong>10% 룰</strong> — 주간 거리를 한 번에 10% 이상 늘리지 않기(<a href="/blog/race-distance-difficulty-guide-2026">거리·강도 관리</a> 참고)</li>
  <li><strong>워밍업</strong> — 달리기 전 <a href="/blog/running-warmup-cooldown-guide-2026">동적 워밍업</a>으로 발·종아리를 데우기</li>
</ul>

<h2>마무리</h2>
<p>족저근막염은 "신발 하나"로 막을 순 없지만, <strong>아치를 받쳐주는 안정화·쿠션 신발 + 발바닥·종아리 스트레칭 + 점진적 거리 증가</strong>의 조합으로 위험을 크게 줄일 수 있습니다. 평발이라면 안정화가 우선이고, 이미 아침 첫발 통증이 있다면 무리하지 말고 스트레칭·휴식으로 관리하세요. 더 많은 모델은 <a href="/best/plantar-fasciitis">족저근막염 러닝화 추천</a>에서 비교할 수 있습니다. 무릎이 함께 아프다면 <a href="/blog/knee-pain-running-shoes">무릎 통증 러닝화</a>, 정강이가 욱신거리면 <a href="/blog/shin-splints-running-shoes-2026">정강이 통증(신 스플린트) 가이드</a>도 참고하세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 일반적인 부상 예방 정보로, 개인의 의학적 진단을 대체하지 않습니다. 통증이 2주 이상 지속되거나 심하면 정형외과·스포츠의학 전문의의 진료를 받으세요.</p>
`,
  },
  {
    id: 'ytn-seoul-tour-marathon-2026',
    slug: 'ytn-seoul-tour-marathon-2026',
    title: '서울 한복판을 달리는 시티투어 — 2026 YTN 서울투어마라톤 | 9/6 서울광장 출발, 하프·11K 접수 중',
    description:
      'YTN이 주최하는 도심 시티투어 마라톤이 9월 6일(일) 서울광장에서 출발합니다. 동대문·숭례문·청계천 등 서울 구도심 랜드마크를 잇는 평탄한 하프·11K 코스로, 가을 레이스 시즌의 첫 문을 여는 대회죠. 접수는 6/17~7/15 선착순(하프 8만·11K 7만 원). 종목·참가비·코스·2025년 대비 변경점까지 정리했습니다.',
    thumbnail: '/images/blog/ytn-seoul-tour-marathon-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-22',
    category: 'news' as const,
    readingTime: 6,
    tags: ['YTN 서울투어마라톤', '서울투어마라톤', '서울 마라톤', '하프 마라톤', '9월 마라톤', '도심 마라톤', '러닝 대회', '마라톤 접수', '가을 마라톤'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>2026 YTN 서울투어마라톤이 9월 6일(일) 서울광장에서 출발</strong> — 서울 구도심 랜드마크를 잇는 평탄한 <strong>하프·11K 도심 코스</strong>입니다(풀코스 없음, 07:30 출발)</li>
    <li><strong>접수 진행 중</strong> — 6/17(수)~7/15(수) 선착순, 공식 홈페이지(run.ytn.co.kr). 참가비 <strong>하프 8만 원·11K 7만 원</strong></li>
    <li>방송사 YTN이 직접 주최하는 <strong>"시티투어" 마라톤</strong>으로, 10월 춘천·11월 도심 대회에 앞서 <strong>가을 레이스 시즌의 문을 여는</strong> 9월 초 대회입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏙️</span>
  <div class="callout-body">
    <p class="callout-title">서울 도심을 관광하듯 달린다</p>
    <p>YTN(와이티엔)이 주최하는 <strong>"서울투어"</strong> 마라톤은 이름 그대로 서울 구도심의 대표 랜드마크를 한 코스에 담은 시티투어형 대회입니다. 서울광장(시청 앞)을 기점으로 동대문·숭례문·청계천을 잇는 평탄한 도심 코스라, <strong>첫 하프에 도전하거나 가을 시즌을 가볍게 시작하려는 러너</strong>에게 잘 맞습니다. 방송사 주최라 코스 곳곳에 카메라가 따라붙는 것도 소소한 매력이죠.</p>
  </div>
</div>

<h2>핵심 정보 한눈에</h2>
<table>
  <tbody>
    <tr><td><strong>대회일</strong></td><td>2026년 9월 6일(일) — 07:30 출발</td></tr>
    <tr><td><strong>종목</strong></td><td>하프(21.0975km) · 11K (풀코스 없음)</td></tr>
    <tr><td><strong>출발/도착</strong></td><td>서울광장 (서울 중구 세종대로 110)</td></tr>
    <tr><td><strong>참가비</strong></td><td>하프 80,000원 · 11K 70,000원</td></tr>
    <tr><td><strong>접수</strong></td><td>6/17(수) 14시 ~ 7/15(수) 17시 · 선착순 (run.ytn.co.kr)</td></tr>
    <tr><td><strong>규모</strong></td><td>약 1만 5천 명 (2025년 기준)</td></tr>
    <tr><td><strong>주최</strong></td><td>YTN(와이티엔)</td></tr>
  </tbody>
</table>
<p class="caption">※ 대회일·참가비·접수 일정·출발지는 공식 홈페이지(run.ytn.co.kr) 확정 정보입니다. 규모·세부 코스·기념품은 2025년 자료 기준 참고값으로, 2026년 내용은 공식 발표로 확인하세요.</p>

<h2>접수 — 지금 진행 중</h2>
<p>접수는 <strong>6월 17일(수) 14시에 이미 열렸고, 7월 15일(수) 17시까지 선착순</strong>으로 받습니다. 공식 홈페이지(run.ytn.co.kr)에서 직접 신청하며, 배번호·기록칩은 대회 전 택배로 발송됩니다.</p>
<p>도심 대형 대회는 마감 시각보다 일찍 정원이 차는 경우가 있으니, 출전이 확실하다면 마감(7/15)을 기다리지 말고 미리 신청해두는 편이 안전합니다.</p>

<h2>코스 — 서울 구도심 역사 벨트</h2>
<p>서울광장(시청 앞)을 출발해 <strong>동대문(DDP 인근) → 숭례문(남대문) → 청계천</strong>으로 이어지는 서울 구도심의 역사 랜드마크를 잇는 코스입니다. 고저차가 거의 없는 평탄한 포장도로라 <strong>기록 도전이나 첫 하프 완주에 유리</strong>합니다.</p>
<div class="callout warning">
  <span class="callout-icon">🗺️</span>
  <div class="callout-body">
    <p class="callout-title">2026년 출발지가 바뀌었습니다</p>
    <p>2025년에는 광화문광장에서 출발했지만, <strong>2026년은 서울광장 출발로 변경</strong>됐습니다. 위 경유지는 2025년 코스를 기준으로 한 참고이며, 출발지 변경에 따라 세부 경로가 달라질 수 있으니 <strong>공식 코스맵을 반드시 확인</strong>하세요.</p>
  </div>
</div>

<h2>2025 → 2026, 무엇이 달라졌나</h2>
<table>
  <thead>
    <tr><th>항목</th><th>2025</th><th>2026</th></tr>
  </thead>
  <tbody>
    <tr><td>대회 시기</td><td>11월 23일</td><td><strong>9월 6일</strong> (가을 초입)</td></tr>
    <tr><td>출발지</td><td>광화문광장</td><td>서울광장</td></tr>
    <tr><td>종목</td><td>하프 · 10K</td><td>하프 · <strong>11K</strong></td></tr>
    <tr><td>참가비</td><td>하프 7만 · 10K 6만</td><td>하프 8만 · 11K 7만</td></tr>
  </tbody>
</table>
<p>가장 큰 변화는 <strong>대회 시기가 11월 말에서 9월 초로 앞당겨진 것</strong>입니다. 9월 초는 아직 늦더위가 남아 있을 수 있으니, 당일 기온을 확인하고 수분·페이스 전략을 보수적으로 잡는 게 좋습니다.</p>

<h2>누구에게 좋은 대회일까</h2>
<ul>
  <li><strong>첫 하프 도전자</strong> — 평탄한 도심 코스라 부담이 적습니다. 거리별 체감 난이도가 궁금하면 <a href="/blog/race-distance-difficulty-guide-2026">거리별 난이도 가이드</a>를 참고하세요.</li>
  <li><strong>가을 PB를 준비하는 러너</strong> — 9월 YTN(하프)으로 몸을 풀고 10월 <a href="/blog/2026-chuncheon-marathon-registration-guide">춘천마라톤</a>(풀코스), 11월 <a href="/blog/2026-mbn-seoul-marathon-registration">MBN 서울마라톤</a>으로 이어지는 가을 레이스 시즌을 설계하기 좋습니다.</li>
  <li><strong>서울 도심을 달려보고 싶은 러너</strong> — 평소 차로 지나던 시청·숭례문·청계천을 두 발로 통과하는 경험이 매력입니다.</li>
</ul>
<p>평탄한 도심 하프에는 가볍고 반응 좋은 신발이 어울립니다. 목표 페이스에 따라 <a href="/best/daily-trainer">데일리 트레이너</a> 또는 <a href="/best/half-marathon">하프 추천 신발</a>에서 골라보세요. 본인 발에 맞는 신발을 빠르게 좁히려면 <a href="/recommend">1분 러닝화 추천</a>도 도움이 됩니다.</p>

<div class="callout info">
  <span class="callout-icon">📌</span>
  <div class="callout-body">
    <p class="callout-title">참가 전 체크</p>
    <ul>
      <li><strong>교통</strong>: 서울광장은 지하철 1·2호선 시청역 바로 앞입니다. 도심 교통통제가 있으니 <strong>대중교통 이용</strong>을 권장합니다.</li>
      <li><strong>완주 기념품·제한시간·시상</strong> 등 세부 정보는 공식 홈페이지(run.ytn.co.kr)에서 최신 공지를 확인하세요.</li>
    </ul>
  </div>
</div>

<h2>마무리</h2>
<p>YTN 서울투어마라톤은 <strong>"기록 경쟁"보다 "서울 도심을 관광하듯 달리는 경험"</strong>에 무게가 실린 대회입니다. 9월 초 개최라 본격적인 가을 레이스 시즌의 문을 여는 대회이기도 하죠. 첫 하프에 도전하거나 가을 시즌을 가볍게 시작하려는 러너라면 좋은 선택지입니다. 핵심은 <strong>7월 15일 접수 마감</strong>을 놓치지 않는 것 — 신청 전 공식 홈페이지에서 코스맵과 세부 정보를 한 번 더 확인하세요. 🏃</p>
<p>가을 대회 전체 일정은 <a href="/marathon">마라톤 캘린더</a>에서 월별로 비교할 수 있습니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 YTN 서울투어마라톤 공식 홈페이지(run.ytn.co.kr)와 2025년 대회 자료를 종합했습니다. 대회일·참가비·접수 일정·출발지는 공식 확정 정보이며, 규모·세부 코스 경유지·기념품은 2025년 기준 참고값으로 2026년 발표 시 변동될 수 있습니다. 신청 전 공식 홈페이지를 반드시 확인하세요. (작성 2026-06-22)</p>
`,
  },
  {
    id: 'sonkeechung-peace-marathon-2026',
    slug: 'sonkeechung-peace-marathon-2026',
    title: '차 대신 사람이 달리는 도로 — 손기정평화마라톤 | 국내 유일 제2자유로 코스, 손기정의 이름으로 달리는 11월 가을 풀코스',
    description:
      '1936 베를린올림픽 금메달리스트 손기정 선생을 기리는 손기정평화마라톤. 평소 차량전용인 제2자유로를 두 발로 달리는 국내 유일 코스로, 직선·평지라 기록 경신에 유리합니다. 고양종합운동장 출발, 풀·하프·10K, 약 2만 명 규모로 매년 조기 마감(2025년 일주일). 2026 제22회 일정·코스·접수와 이 대회가 특별한 이유를 정리했습니다.',
    thumbnail: '/images/blog/sonkeechung-peace-marathon-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'news' as const,
    readingTime: 7,
    tags: ['손기정평화마라톤', '손기정 마라톤', '제2자유로', '평화마라톤', '고양 마라톤', '가을 마라톤', '11월 마라톤', '풀코스 마라톤', '러닝 대회', '손기정'],
    faqs: [
      { question: '손기정평화마라톤은 언제 열리나요?', answer: '매년 11월(둘째~셋째 일요일)에 열립니다. 2025년은 11월 16일이었고, 2026 제22회 일정은 아직 공식 발표 전입니다(2026-06 기준). 통상 패턴상 11월 셋째 일요일(11/15) 전후가 유력하며, 접수는 보통 9월에 시작됩니다.' },
      { question: '제2자유로 코스가 뭐가 특별한가요?', answer: '제2자유로는 평소 보행·자전거가 금지된 자동차 전용도로입니다. 손기정평화마라톤은 대회 당일에만 이 도로를 러너에게 개방하는 국내 유일 대회예요. 직선·평지 위주라 신호·꺾임이 없어 기록 경신(PB)에 유리하고, 북한 방향으로 뻗은 도로를 달린다는 점에서 평화·통일의 상징성도 담겨 있습니다.' },
      { question: '접수는 언제 시작하나요?', answer: '통상 9월에 시작합니다. 2025년에는 9월 13일 오후 4시에 열려 약 2만 명 정원이 일주일 안에 조기 마감됐습니다. 인기가 높아 빠르게 매진되니, 접수 오픈일에 맞춰 신청하는 게 안전합니다. 2026 접수 일정은 공식 발표를 기다려야 합니다.' },
      { question: '종목과 참가비는 어떻게 되나요?', answer: '풀코스·하프·10K로 운영됩니다. 2025년 기준 참가비는 풀코스 60,000원, 하프 55,000원, 10K 50,000원이었습니다(제한시간 풀 5시간·하프 3시간·10K 1시간 30분). 2026년 금액은 공식 발표 시 확정됩니다.' },
      { question: '대회장까지 어떻게 가나요?', answer: '출발지는 경기 고양종합운동장입니다. 대회 당일 제2자유로가 오전 7시~오후 3시 차량 통제되므로 대중교통을 강력 권장합니다. 지하철 3호선 화정역·능곡역에서 접근할 수 있습니다.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>손기정평화마라톤 = 손기정 선생의 이름으로 달리는 11월 가을 풀코스</strong> — 경기 고양종합운동장 출발, 2005년 시작해 2026년 제22회를 맞습니다.</li>
    <li>핵심은 <strong>제2자유로</strong> — 평소 차량전용인 도로를 대회 당일에만 러너에게 개방하는 <strong>국내 유일 코스</strong>. 직선·평지라 기록 경신에 유리합니다.</li>
    <li>풀·하프·10K, <strong>약 2만 명 규모로 매년 조기 마감</strong>(2025년 일주일). 접수는 통상 9월 시작 — 2026 일정은 공식 발표 대기 중입니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🕊️</span>
  <div class="callout-body">
    <p class="callout-title">기록보다 의미가 먼저인 대회</p>
    <p>1936년 베를린올림픽 마라톤에서 금메달을 딴 <strong>손기정 선생</strong>. 일장기를 달고 달려야 했던 그의 이야기를 기억하며, 후배 러너들이 그의 이름으로 달리는 대회입니다. 평소 차가 달리는 길을 사람이 달리고, 북녘으로 뻗은 도로를 향해 <strong>평화와 통일</strong>의 메시지를 담아 달리죠. 기록도 노릴 수 있지만, 의미를 찾는 러너에게 특별한 대회입니다.</p>
  </div>
</div>

<h2>어떤 대회인가 — 손기정, 그리고 평화</h2>

<p>손기정평화마라톤은 <strong>손기정기념재단</strong>이 주최하는 가을 마라톤으로, 2005년 제1회를 시작해 2026년이면 제22회가 됩니다. 단순한 레이스가 아니라 <strong>손기정 선생의 항일·애국 정신을 기리고 한반도 평화·통일을 염원</strong>하는 테마가 핵심이에요. 2025년 슬로건이 광복 80주년과 맞물린 "광복은 자유다"였던 것도 같은 맥락입니다.</p>

<p>국내 마스터즈 마라톤 중에서도 규모가 큰 편으로, <strong>약 2만 명</strong>이 참가합니다. 그만큼 인기가 높아 접수가 빠르게 마감되는 대회이기도 합니다.</p>

<h2>제2자유로 — 차 대신 사람이 달리는, 국내 유일 코스</h2>

<p>이 대회의 정체성은 <strong>제2자유로</strong>에 있습니다. 제2자유로는 평소 보행·자전거가 금지된 <strong>자동차 전용도로</strong>인데, 손기정평화마라톤은 대회 당일에만 이 도로를 러너에게 통째로 내어주는 <strong>국내 유일 대회</strong>예요.</p>

<ul>
  <li><strong>직선·평지 기록 코스</strong> — 신호도, 급격한 꺾임도 없는 곧게 뻗은 도로라 페이스를 일정하게 유지하기 좋습니다. PB(개인 최고기록)를 노리는 러너에게 유리한 코스죠.</li>
  <li><strong>고양종합운동장 출발 왕복</strong> — 풀코스는 현천IC·능곡IC를 반환점으로 도는 구조입니다. 25km 부근이 페이스 관리의 분기점입니다.</li>
  <li><strong>평화·통일의 상징</strong> — 북한 방향으로 뻗은 도로를 달린다는 점에서, 이 코스 자체가 대회의 메시지를 담고 있습니다.</li>
</ul>

<p>단, 11월 개최라 <strong>기온이 낮고 강변 바람이 변수</strong>입니다. 출발 전 체온 유지와 바람 대비(아암슬리브·바람막이)를 챙기는 게 좋습니다.</p>

<h2>종목·참가비·제한시간</h2>

<table>
  <thead>
    <tr><th>종목</th><th>참가비(2025 기준)</th><th>제한시간</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>풀코스</strong></td><td>60,000원</td><td>5시간</td></tr>
    <tr><td><strong>하프</strong></td><td>55,000원</td><td>3시간</td></tr>
    <tr><td><strong>10K</strong></td><td>50,000원</td><td>1시간 30분</td></tr>
  </tbody>
</table>

<p>※ 참가비·제한시간은 <strong>2025년 기준</strong>이며, 2026 금액은 공식 발표 시 확정됩니다. 출발 시각은 오전 9시입니다.</p>

<h2>접수 — 9월 오픈, 빠른 조기 마감</h2>

<p>손기정평화마라톤의 가장 큰 주의점은 <strong>속도</strong>입니다. 2025년에는 <strong>9월 13일 오후 4시 접수 오픈 → 약 2만 명 정원이 일주일 안에 마감</strong>됐어요. 가을 인기 대회라 매진이 빠릅니다.</p>

<ul>
  <li><strong>접수 시작</strong>: 통상 9월 (2025년 9/13). 2026 일정은 공식 발표 대기 중</li>
  <li><strong>접수처</strong>: 공식 홈페이지 <a href="https://www.sonkeechungrun.com/" target="_blank" rel="noopener">sonkeechungrun.com</a></li>
  <li><strong>방식</strong>: 선착순. 접수 오픈일에 바로 신청하는 것을 권장</li>
</ul>

<div class="callout info">
  <span class="callout-icon">📅</span>
  <div class="callout-body">
    <p class="callout-title">2026 일정은 아직 미발표 (2026-06 기준)</p>
    <p>2026 제22회의 정확한 대회일·접수일·참가비는 공식 발표 전입니다. 역대 패턴(11월 둘째~셋째 일요일 개최, 9월 접수)으로 보면 일정을 가늠할 수 있지만, 신청 전 <a href="https://www.sonkeechungrun.com/" target="_blank" rel="noopener">공식 홈페이지</a>와 인스타그램(@sonkeechung_peace_marathon)에서 최종 확인하세요. 대회 상세는 <a href="/marathon/sonkeechung-peace-marathon-2026">손기정평화마라톤 캘린더 페이지</a>에서도 볼 수 있습니다.</p>
  </div>
</div>

<h2>교통·준비</h2>

<ul>
  <li><strong>대중교통 필수</strong> — 대회 당일 제2자유로가 오전 7시~오후 3시 차량 통제됩니다. 지하철 3호선 <strong>화정역·능곡역</strong>에서 접근하세요.</li>
  <li><strong>11월 추위 대비</strong> — 출발 대기 시간이 길 수 있어 버리는 옷·우의로 체온을 유지하세요. 강변 바람이 셉니다.</li>
  <li><strong>완주 기념품</strong> — 완주 메달·기록칩·기념 티셔츠가 제공되며, 배번·기념품은 사전 우편 발송되는 경우가 많습니다(회차별 상이, 공식 안내 확인).</li>
</ul>

<h2>한 걸음 더</h2>

<ul>
  <li>🗓️ 가을 대회 일정 한눈에 → <a href="/marathon">마라톤 캘린더</a> · <a href="/blog/2026-second-half-marathon-schedule-korea">2026 하반기 마라톤 완전정복</a></li>
  <li>🏅 손기정과 한국 마라톤의 뿌리 → <a href="/blog/seoul-marathon-100-years-history-1931-2030">서울마라톤 100년의 길(손기정·일장기 말소사건)</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 대회 공식 자료와 언론 보도, 러닝 커뮤니티 자료를 교차 정리한 내용입니다. 2026 제22회의 대회일·접수 일정·참가비는 공식 발표 전이며 일부 정보는 2025년 기준입니다. 신청 전 손기정평화마라톤 공식 홈페이지(sonkeechungrun.com)에서 최종 확인하시기 바랍니다.</p>
`,
  },
  {
    id: 'danyang-moonlight-race-2026',
    slug: 'danyang-moonlight-race-2026',
    title: '달리고 나면 치킨에 맥주 — 2026 단양 달빛레이스 | 오후 7시 출발 야간 러닝, 남한강 달맞이길·도담삼봉 + 피니시 푸드 축제',
    description:
      '한여름 더위를 피해 오후 7시 출발하는 야간 러닝, 2026 단양 달빛레이스. 남한강 수변 달맞이길과 도담삼봉을 달빛 아래 달리고, 피니시 후엔 치킨·맥주·막걸리 푸드부스가 기다립니다. 8/29(토) 단양생태체육공원, 10K 5만·5K 3만, 6/10~7/17 선착순 5,000명. 코스·야간 준비물·접수까지 정리했습니다.',
    thumbnail: '/images/blog/danyang-moonlight-race-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'news' as const,
    readingTime: 6,
    tags: ['단양 달빛레이스', '단양 마라톤', '야간 러닝', '야간 마라톤', '여름 마라톤', '단양 러닝', '치킨 마라톤', '충북 마라톤', '러닝 대회', '달빛레이스'],
    event: {
      name: '2026 단양 달빛레이스',
      startDate: '2026-08-29T19:00:00+09:00',
      location: {
        name: '단양생태체육공원',
        address: '충청북도 단양군',
      },
      organizer: '단양군육상연맹',
      url: 'http://danyangmarathon.kr/',
      offers: [
        { name: '10km', priceKrw: 50000, availabilityEnds: '2026-07-17', url: 'http://danyangmarathon.kr/' },
        { name: '5km', priceKrw: 30000, availabilityEnds: '2026-07-17', url: 'http://danyangmarathon.kr/' },
      ],
    },
    faqs: [
      { question: '단양 달빛레이스는 언제 열리나요?', answer: '2026년 8월 29일(토) 오후 7시에 출발하는 야간 대회입니다(개회식 18:30 예상). 한여름 낮 더위를 피해 저녁에 달리는 게 핵심 콘셉트로, 장소는 충북 단양의 단양생태체육공원입니다.' },
      { question: '정말 치킨을 주나요?', answer: '피니시 후 행사장에 치킨·맥주·막걸리 등 푸드부스가 운영되어 "치킨 마라톤"으로 불립니다. 2024년에는 우리쌀 치킨 브랜드가 협찬사로 참여하기도 했습니다. 다만 완주자 전원 증정인지, 현장 부스에서 즐기는 방식인지는 회차마다 다를 수 있으니 정확한 기념품·먹거리 구성은 공식 요강에서 확인하세요.' },
      { question: '야간 대회인데 뭘 준비해야 하나요?', answer: '어두운 수변 코스를 달리므로 헤드랜턴이나 암밴드 라이트, 야광·반사 소품을 챙기는 게 좋습니다. 8월 말 저녁이라 낮보다 시원하지만 습도가 높을 수 있어 수분 보충과 통기성 좋은 러닝화·복장을 권장합니다.' },
      { question: '종목과 참가비는 어떻게 되나요?', answer: '10km(50,000원)와 5km(30,000원) 두 종목입니다. 5km는 입문자나 가족 단위 참가에도 부담이 적습니다.' },
      { question: '접수는 언제, 어디서 하나요?', answer: '2026년 6월 10일부터 7월 17일까지 공식 홈페이지(danyangmarathon.kr)에서 선착순 5,000명 접수합니다. 참가 규모가 매년 빠르게 늘고 있어 조기 마감 가능성이 있으니 서두르는 게 안전합니다.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>2026 단양 달빛레이스 = 8월 29일(토) 오후 7시 출발 야간 러닝</strong> — 충북 단양생태체육공원에서 한여름 더위를 피해 저녁에 달립니다.</li>
    <li>코스는 <strong>남한강 수변 달맞이길·도담삼봉</strong> 방향 평지(10K·5K). 달빛 아래 단양 야경을 달리는 게 매력입니다.</li>
    <li>달리고 나면 <strong>치킨·맥주·막걸리 푸드부스</strong>가 열려 "치킨 마라톤"으로 불립니다. 10K 5만·5K 3만, <strong>6/10~7/17 선착순 5,000명</strong>.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🌙</span>
  <div class="callout-body">
    <p class="callout-title">한여름엔 낮에 못 달린다 — 그래서 밤에 달린다</p>
    <p>8월 한낮 러닝은 위험합니다. 단양 달빛레이스는 그 답을 <strong>야간 출발(19:00)</strong>로 풀었어요. 해가 진 뒤 시원해진 남한강변을 달리고, 끝나면 축제처럼 먹고 마시는 <strong>러닝+페스티벌</strong> 콘셉트입니다. 기록 경쟁보다 분위기를 즐기러 가는 대회죠.</p>
  </div>
</div>

<h2>어떤 대회인가 — 야간 러닝 + 푸드 페스티벌</h2>

<p>단양 달빛레이스는 충북 단양군육상연맹이 주최하는 <strong>야간 러닝 대회</strong>입니다. 가장 큰 특징은 오후 7시 출발 — 8월 말 한여름 더위를 피해 해가 진 뒤 달립니다. 낮보다 시원하고, 무엇보다 <strong>달빛과 단양 도심 야경</strong>을 배경으로 달리는 분위기가 이 대회의 정체성이에요.</p>

<p>참가 규모도 빠르게 커지고 있습니다. 1회 약 2,000명에서 시작해 회차를 거듭하며 3,500명 규모로 성장했고, 2026년은 정원을 5,000명으로 늘렸습니다. 기록을 노리는 본격 마라톤이라기보다 <strong>여름밤을 즐기는 러닝 축제</strong>에 가깝습니다.</p>

<h2>코스 — 남한강 달맞이길과 도담삼봉</h2>

<p>출발·도착은 <strong>단양생태체육공원</strong>입니다. 코스는 남한강 수변을 따라가는 <strong>평지 위주</strong>라 야간에도 부담이 적습니다.</p>

<ul>
  <li><strong>10km</strong> — 생태체육공원에서 출발해 달맞이길·도담삼봉 방향 남한강 수변로를 달리는 코스. 단양팔경의 야경을 가장 길게 즐길 수 있습니다.</li>
  <li><strong>5km</strong> — 수변 구간을 짧게 도는 코스. 입문자·가족 단위에 적합합니다.</li>
</ul>

<p>강변 수변로는 <strong>가로등이 충분치 않은 어두운 구간</strong>이 있을 수 있어, 야간 안전 장비가 중요합니다(아래 준비물 참고). 평지라 페이스 부담은 적지만 8월 말 저녁은 습도가 높을 수 있습니다.</p>

<h2>종목·참가비</h2>

<table>
  <thead>
    <tr><th>종목</th><th>참가비</th><th>추천 대상</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>10km</strong></td><td>50,000원</td><td>러닝에 익숙한 러너, 야경 길게 즐기기</td></tr>
    <tr><td><strong>5km</strong></td><td>30,000원</td><td>입문자·가족·런데이트</td></tr>
  </tbody>
</table>

<p>※ 정원 <strong>선착순 5,000명</strong>. 참가비에는 보통 기념품·기록측정·간식이 포함되며, 구체적 구성은 회차·공식 요강에 따릅니다.</p>

<h2>야간 레이스, 이건 꼭 챙기자</h2>

<ul>
  <li><strong>라이트</strong> — 헤드랜턴 또는 암밴드 라이트. 어두운 수변 구간 안전 필수입니다.</li>
  <li><strong>야광·반사 소품</strong> — 야광 팔찌·반사 조끼 등. 분위기도 살고 시인성도 좋아집니다.</li>
  <li><strong>수분·전해질</strong> — 8월 말 저녁은 시원해도 습합니다. 탈수 주의.</li>
  <li><strong>통기성 좋은 러닝화·복장</strong> — 여름밤 러닝엔 통풍이 핵심입니다. <a href="/blog/summer-breathable-running-shoes-2026">여름 통기성 러닝화 추천</a>과 <a href="/blog/hot-weather-summer-running-safety-guide-korea">여름 러닝 안전 가이드</a>를 함께 보세요.</li>
</ul>

<h2>달리고 나면 — 치킨·맥주가 기다린다</h2>

<p>단양 달빛레이스가 러너들 사이에서 "치킨 마라톤"으로 불리는 이유가 여기 있습니다. 피니시 라인을 통과하면 행사장에 <strong>치킨·맥주·막걸리 등 푸드부스</strong>가 열려, 시원한 여름밤에 완주의 보람을 먹거리로 즐길 수 있어요. 2024년엔 우리쌀 치킨 브랜드가 협찬사로 참여하기도 했습니다.</p>

<div class="callout info">
  <span class="callout-icon">🍗</span>
  <div class="callout-body">
    <p class="callout-title">"완주하면 치킨 줘요?" — 정확히 짚으면</p>
    <p>치킨은 이 대회의 상징이지만, <strong>완주자 전원에게 현물·쿠폰으로 증정하는지, 현장 푸드부스에서 즐기는 방식인지는 회차마다 다를 수 있습니다.</strong> 협찬·먹거리 부스 운영은 확인되지만 "완주 기념품=치킨"이라고 단정하긴 어려워요. 기념품·먹거리 구성을 꼭 챙기고 싶다면 접수 전 <a href="http://danyangmarathon.kr/" target="_blank" rel="noopener">공식 홈페이지</a>나 대회 안내(☎ 1600-3949)로 확인하세요.</p>
  </div>
</div>

<h2>접수 안내</h2>

<ul>
  <li><strong>접수 기간</strong>: 2026년 6월 10일 ~ 7월 17일 (선착순 5,000명)</li>
  <li><strong>접수처</strong>: 공식 홈페이지 <a href="http://danyangmarathon.kr/" target="_blank" rel="noopener">danyangmarathon.kr</a></li>
  <li><strong>대회일</strong>: 2026년 8월 29일(토) 오후 7시 출발</li>
  <li><strong>장소</strong>: 충북 단양 단양생태체육공원</li>
</ul>

<p>참가 인원이 매년 빠르게 늘고 있어 <strong>조기 마감 가능성</strong>이 있습니다. 여름밤 러닝 축제를 노린다면 접수 오픈 초반에 신청하는 편이 안전합니다.</p>

<h2>한 걸음 더</h2>

<ul>
  <li>🗓️ 다른 대회 일정도 보고 싶다면 → <a href="/marathon">마라톤 캘린더</a></li>
  <li>☀️ 여름 러닝 준비 → <a href="/blog/hot-weather-summer-running-safety-guide-korea">여름 러닝 안전 가이드</a> · <a href="/blog/summer-breathable-running-shoes-2026">여름 통기성 러닝화</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 대회 공식 안내와 단양군·언론 보도, 러닝 커뮤니티 자료를 교차 정리한 내용입니다. 단양 달빛레이스는 매년 장소·종목·기념품 구성이 일부 바뀌어 왔고, 치킨 등 먹거리 제공 방식과 정확한 코스·일정은 공식 홈페이지(danyangmarathon.kr) 또는 대회 안내(☎ 1600-3949)에서 최종 확인하시기 바랍니다.</p>
`,
  },
  {
    id: 'saucony-running-shoes-lineup-tier-guide-2026',
    slug: 'saucony-running-shoes-lineup-tier-guide-2026',
    title: '사코니 러닝화 계급도 2026 — 엔돌핀·라이드·가이드, PWRRUN 폼과 엔돌핀 라인으로 읽는 전체 라인업 | 입문부터 카본 슈퍼슈즈까지 한 장 정리',
    description:
      '사코니 러닝화 12종을 전통 PWRRUN 라인(라이드 데일리·트라이엄프 쿠션·가이드/허리케인 안정화·킨바라 경량)과 엔돌핀 스피드 라인으로 한 장에. 라이드 15.9만부터 엔돌핀 엘리트 33.9만까지 가격·무게·폼 비교표 + 엔돌핀 6형제 차이 + 엔돌핀 스피드가 갓신발인 이유 + PWRRUN 폼 등급까지 정리했습니다.',
    thumbnail: '/images/blog/saucony-lineup-tier-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 13,
    tags: ['사코니 러닝화', '소커니 러닝화', '사코니 계급도', '러닝화 라인업', '러닝화 등급', '엔돌핀 스피드', '엔돌핀 프로', '라이드', '가이드', 'PWRRUN'],
    faqs: [
      { question: '사코니 "엔돌핀(Endorphin)"이 뭔가요?', answer: '사코니의 스피드·레이싱 서브브랜드입니다. 이름에 엔돌핀이 붙으면 빠르게 달리기 위한 신발이에요. SPEEDROLL이라는 록커 지오메트리로 자연스럽게 굴러가게 하고, PWRRUN PB(PEBA) 슈퍼폼을 씁니다. 스피드·프로·엘리트·트레이너·아주라까지 변형이 많아 사코니 라인업의 핵심을 이룹니다.' },
      { question: '엔돌핀 스피드·프로·엘리트는 뭐가 다른가요?', answer: '플레이트와 등급으로 갈립니다. 스피드는 나일론 플레이트(카본 아님)로 카본값 없이 빠른 슈퍼트레이너, 프로는 카본 플레이트 레이싱화, 엘리트는 IncrediRUN 폼에 카본을 넣은 최상위(80.6% 에너지 리턴, RunRepeat 역대 최고)입니다. 가성비 훈련이면 스피드, 대회면 프로, 기록 끝장이면 엘리트입니다.' },
      { question: '엔돌핀 스피드가 왜 "갓신발"이라고 불리나요?', answer: '카본 플레이트 대신 나일론 플레이트를 써서 카본 레이싱화 못지않은 73.2% 에너지 리턴을 20만원대에 내기 때문입니다. 카본만큼 빳빳하지 않아 데일리·템포·롱런까지 폭넓게 쓸 수 있고 내구성도 좋아, 한 켤레로 여러 용도를 커버하려는 러너에게 가성비 끝판왕으로 꼽힙니다.' },
      { question: '사코니 안정화는 가이드랑 허리케인 중 뭘 사야 하나요?', answer: '가이드 18(15.9만)은 카야노 절반 가격의 가성비 안정화로 121.9mm 광폭 플랫폼이 강점, 허리케인 25(19.9만)는 PWRRUN PB 슈퍼폼과 크래들 구조로 151 SA의 심한 과내전까지 잡는 프리미엄입니다. 가벼운 지지면 가이드, 심한 과내전이면 허리케인입니다.' },
      { question: '사코니는 발볼 넓은 한국 러너에게 맞나요?', answer: '대체로 표준 토박스라 무난한 편입니다. 라이드·가이드·트라이엄프·엔돌핀 스피드 모두 표준이고, 가이드는 121.9mm 광폭 플랫폼으로 안정감도 좋아요. 다만 엔돌핀 프로·엘리트 같은 카본 레이싱은 좁으니 발볼이 많이 넓으면 반 치수 크게 신으세요.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>사코니는 두 갈래</strong> — 전통 PWRRUN 라인(라이드·가이드·트라이엄프·허리케인·킨바라)과 스피드 서브브랜드 <strong>엔돌핀</strong>.</li>
    <li><strong>엔돌핀이 핵심</strong> — SPEEDROLL 록커 + PWRRUN PB 슈퍼폼. 스피드·프로·엘리트·트레이너·아주라로 변형이 가장 많습니다.</li>
    <li><strong>엔돌핀 스피드 = 갓신발</strong> — 나일론 플레이트로 카본값 없이 73% 에너지, 20만원대 가성비 슈퍼트레이너입니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🟧</span>
  <div class="callout-body">
    <p class="callout-title">이 글의 역할 — 사코니 계급도 한 장</p>
    <p>"엔돌핀에 스피드, 프로, 엘리트, 트레이너… 사코니는 엔돌핀이 너무 많아 헷갈린다"는 분을 위한 지도입니다. 추천 순위가 아니라 <strong>라인과 폼으로 전체 라인업을 한 번에 이해</strong>시키는 글이에요. 가격은 한국 공식가, 무게는 RunRepeat 실측 기준이며 각 모델은 상세 페이지로 연결됩니다. <a href="/blog/mizuno-running-shoes-lineup-tier-guide-2026">미즈노</a>·<a href="/blog/puma-running-shoes-lineup-tier-guide-2026">푸마</a>·<a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a> 등 다른 브랜드 계급도와 함께 보면 비교가 쉽습니다.</p>
  </div>
</div>

<h2>1. 사코니 읽는 법 — 전통 PWRRUN vs 엔돌핀 스피드</h2>

<p>사코니 라인업은 크게 두 갈래입니다. 매일 신는 <strong>전통 라인</strong>과, 빠르게 달리기 위한 스피드 서브브랜드 <strong>엔돌핀(Endorphin)</strong>이에요. 엔돌핀이 붙으면 SPEEDROLL 록커로 굴러가는 스피드 라인이라고 보면 됩니다.</p>

<table>
  <thead>
    <tr><th>라인</th><th>용도</th><th>한 줄</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>라이드 Ride</strong></td><td>데일리 만능</td><td>"처음이면 라이드" — 부드러운 기준점</td></tr>
    <tr><td><strong>트라이엄프 Triumph</strong></td><td>맥스 쿠션</td><td>풀 PEBA를 19만원대에, 본디 킬러</td></tr>
    <tr><td><strong>가이드 / 허리케인</strong></td><td>안정화</td><td>가이드=가성비 / 허리케인=심한 과내전</td></tr>
    <tr><td><strong>킨바라 Kinvara</strong></td><td>경량 미니멀</td><td>198g, 지면을 느끼는 데일리</td></tr>
    <tr><td><strong>엔돌핀 Endorphin</strong></td><td>스피드·레이싱</td><td>스피드·프로·엘리트 — 사코니의 핵심</td></tr>
  </tbody>
</table>

<h2>2. PWRRUN 폼이 등급을 만든다</h2>

<p>사코니 폼은 "PWRRUN(파워런)" 패밀리입니다. 데일리는 PWRRUN, 레이싱은 PWRRUN PB(PEBA)와 신형 IncrediRUN으로 올라갑니다.</p>

<table>
  <thead>
    <tr><th>폼</th><th>성격</th><th>들어가는 모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>PWRRUN / PWRRUN+</strong></td><td>부드러운 데일리·안정화</td><td>라이드 · 가이드 · 킨바라</td></tr>
    <tr><td><strong>PWRRUN PB (PEBA)</strong></td><td>슈퍼폼 — 반발·경량</td><td>트라이엄프 · 허리케인 · 엔돌핀 스피드</td></tr>
    <tr><td><strong>IncrediRUN</strong></td><td>최상위 신형 폼(역대 최고 반발)</td><td>엔돌핀 엘리트 · 트레이너</td></tr>
    <tr><td><strong>+ 카본 플레이트</strong></td><td>레이싱 추진</td><td>엔돌핀 프로 · 엘리트 · 트레이너</td></tr>
  </tbody>
</table>

<p>요약하면 <strong>PWRRUN PB가 슈퍼폼, IncrediRUN이 최상위</strong>입니다. 특히 엔돌핀 스피드는 이 PWRRUN PB에 <strong>카본 대신 나일론 플레이트</strong>를 넣어 가성비 슈퍼트레이너로 유명해졌어요(아래 5번).</p>

<h2>3. 사코니 러닝화 계급도 — 12종 한눈에</h2>

<p>라인 × 폼으로 현재 한국에서 살 수 있는 사코니 러닝화 12종을 줄 세우면 이렇게 됩니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>라인·용도</th><th>폼</th><th>가격</th><th>무게</th><th>한 줄 성격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/saucony-ride-18"><strong>라이드 18</strong></a></td><td>입문 데일리</td><td>PWRRUN+</td><td>15.9만</td><td>255g</td><td>통기성 최상, 여름 가성비</td></tr>
    <tr><td><a href="/shoes/saucony-guide-18"><strong>가이드 18</strong></a></td><td>가성비 안정화</td><td>PWRRUN</td><td>15.9만</td><td>278g</td><td>카야노 절반가, 121.9mm 광폭</td></tr>
    <tr><td><a href="/shoes/saucony-kinvara-16"><strong>킨바라 16</strong></a></td><td>경량 미니멀</td><td>PWRRUN</td><td>15.9만</td><td>198g</td><td>198g·4mm, 지면 감각</td></tr>
    <tr><td><a href="/shoes/saucony-ride-19"><strong>라이드 19</strong></a></td><td>입문 데일리 신상</td><td>SCF PWRRUN+</td><td>17.9만</td><td>255g</td><td>더 부드럽고 넓어진 트레이너</td></tr>
    <tr><td><a href="/shoes/saucony-endorphin-azura"><strong>엔돌핀 아주라</strong></a></td><td>엔돌핀 데일리</td><td>PWRRUN PB</td><td>18.9만</td><td>240g</td><td>무플레이트 데일리 스피드</td></tr>
    <tr><td><a href="/shoes/saucony-triumph-23"><strong>트라이엄프 23</strong></a></td><td>맥스 쿠션</td><td>PWRRUN PB (PEBA)</td><td>19.9만</td><td>272g</td><td>풀 PEBA 19만원대, 본디 킬러</td></tr>
    <tr><td><a href="/shoes/saucony-hurricane-25"><strong>허리케인 25</strong></a></td><td>프리미엄 안정화</td><td>PWRRUN PB + 크래들</td><td>19.9만</td><td>286g</td><td>151 SA, 심한 과내전 제어</td></tr>
    <tr><td><a href="/shoes/saucony-endorphin-speed-5"><strong>엔돌핀 스피드 5</strong></a></td><td>무카본 슈퍼트레이너</td><td>PWRRUN PB + 나일론</td><td>21.9만</td><td>241g</td><td>73% 리턴 20만대, 갓신발</td></tr>
    <tr><td><a href="/shoes/saucony-endorphin-trainer"><strong>엔돌핀 트레이너</strong></a></td><td>카본 슈퍼트레이너</td><td>IncrediRUN + PWRRUN</td><td>21.9만</td><td>285g</td><td>IncrediRUN 매일 훈련에</td></tr>
    <tr><td><a href="/shoes/saucony-endorphin-pro-4"><strong>엔돌핀 프로 4</strong></a></td><td>카본 레이싱</td><td>PWRRUN PB + HG · 카본</td><td>26.9만</td><td>220g</td><td>118.9mm 광폭, 슈퍼슈즈 초심자</td></tr>
    <tr><td><a href="/shoes/saucony-endorphin-pro-5"><strong>엔돌핀 프로 5</strong></a></td><td>카본 레이싱 신상</td><td>PWRRUN HG + PB · 카본</td><td>29.9만</td><td>206g</td><td>슬롯 카본, 검증된 장거리</td></tr>
    <tr><td><a href="/shoes/saucony-endorphin-elite-2"><strong>엔돌핀 엘리트 2</strong></a></td><td>최상위 레이싱</td><td>IncrediRUN · 카본</td><td>33.9만</td><td>197g</td><td>80.6% 리턴, 역대 최고 기록</td></tr>
  </tbody>
</table>

<p>※ 무게는 남성 US 9 기준, 가격은 한국 공식가입니다. 스택·드롭·발볼 상세는 각 모델 상세 페이지에 있습니다.</p>

<h2>4. 목적별로 — 나는 뭘 사야 할까</h2>

<ul>
  <li><strong>🟢 첫 사코니·만능 데일리</strong> → <a href="/shoes/saucony-ride-18">라이드 18</a> 또는 더 부드러운 신형 <a href="/shoes/saucony-ride-19">라이드 19</a>. 둘의 차이는 <a href="/blog/saucony-ride-18-vs-19-comparison">라이드 18 vs 19</a>에.</li>
  <li><strong>🦶 평발·안정</strong> → 가성비 <a href="/shoes/saucony-guide-18">가이드 18</a>(카야노 절반가) 또는 심한 과내전용 <a href="/shoes/saucony-hurricane-25">허리케인 25</a>. 다른 브랜드 안정화 비교는 <a href="/blog/stability-shoes-self-diagnosis-fit-guide-2026">안정화 자가진단 가이드</a>에.</li>
  <li><strong>☁️ 푹신한 맥스 쿠션</strong> → <a href="/shoes/saucony-triumph-23">트라이엄프 23</a>. 풀 PEBA를 19만원대에 담은 본디 킬러.</li>
  <li><strong>⚡ 카본 없이 빠른 만능</strong> → <a href="/shoes/saucony-endorphin-speed-5">엔돌핀 스피드 5</a>. 데일리부터 템포·롱런까지 한 켤레로(아래 5번).</li>
  <li><strong>🏃 카본 훈련+대회</strong> → <a href="/shoes/saucony-endorphin-trainer">엔돌핀 트레이너</a>(IncrediRUN 슈퍼트레이너).</li>
  <li><strong>🏅 풀마라톤 레이스</strong> → <a href="/shoes/saucony-endorphin-pro-5">엔돌핀 프로 5</a>(검증된 장거리). 둘의 세대 차이는 <a href="/blog/saucony-endorphin-pro-4-vs-5-comparison">프로 4 vs 5</a>에. 기록 끝장이면 <a href="/shoes/saucony-endorphin-elite-2">엔돌핀 엘리트 2</a>(80.6% 역대 최고).</li>
</ul>

<h2>5. 엔돌핀 6형제 — 사코니의 스피드 서브브랜드</h2>

<p>사코니가 헷갈리는 이유는 <strong>엔돌핀 변형이 가장 많아서</strong>입니다. 같은 엔돌핀인데 플레이트와 폼으로 여섯 갈래로 갈려요.</p>

<table>
  <thead>
    <tr><th>모델</th><th>성격</th><th>플레이트</th><th>가격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/saucony-endorphin-azura">엔돌핀 아주라</a></td><td>데일리 스피드</td><td>없음</td><td>18.9만</td></tr>
    <tr><td><a href="/shoes/saucony-endorphin-speed-5">엔돌핀 스피드 5</a></td><td>무카본 슈퍼트레이너</td><td>나일론</td><td>21.9만</td></tr>
    <tr><td><a href="/shoes/saucony-endorphin-trainer">엔돌핀 트레이너</a></td><td>카본 슈퍼트레이너</td><td>카본</td><td>21.9만</td></tr>
    <tr><td><a href="/shoes/saucony-endorphin-pro-4">엔돌핀 프로 4</a></td><td>카본 레이싱(광폭)</td><td>카본</td><td>26.9만</td></tr>
    <tr><td><a href="/shoes/saucony-endorphin-pro-5">엔돌핀 프로 5</a></td><td>신형 카본 레이싱</td><td>슬롯 카본</td><td>29.9만</td></tr>
    <tr><td><a href="/shoes/saucony-endorphin-elite-2">엔돌핀 엘리트 2</a></td><td>최상위 IncrediRUN</td><td>카본</td><td>33.9만</td></tr>
  </tbody>
</table>

<p>정리하면 — <strong>데일리면 아주라, 카본 없이 만능이면 스피드, 훈련+대회 카본이면 트레이너, 대회 전용이면 프로, 기록 끝장이면 엘리트</strong>입니다. 특히 <strong>엔돌핀 스피드</strong>는 나일론 플레이트로 카본값 없이 빠른 "갓신발"로 커뮤니티에서 가성비 1순위로 꼽힙니다.</p>

<h2>6. 발볼 — 사코니는 대체로 무난</h2>

<p>사코니는 대부분 <strong>표준 토박스</strong>라 발볼 넓은 한국 러너에게도 무난한 편입니다. 특히 가이드는 121.9mm 광폭 플랫폼으로 안정감까지 좋아요.</p>

<table>
  <thead>
    <tr><th>발볼</th><th>모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>표준 (무난)</strong></td><td>라이드 18·19 · 가이드 18 · 트라이엄프 · 허리케인 · 킨바라 · 엔돌핀 스피드·트레이너·아주라</td></tr>
    <tr><td><strong>좁음 (주의)</strong></td><td>엔돌핀 프로 4 · 엔돌핀 엘리트 2(레이싱)</td></tr>
  </tbody>
</table>

<p>데일리·안정화는 발볼 걱정 없이 무난하고, 카본 레이싱(엔돌핀 프로 4·엘리트 2)만 좁으니 발볼 넓으면 반 치수 크게 신으세요. 발볼별 선택은 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너를 위한 러닝화</a>에 정리돼 있습니다.</p>

<h2>한 걸음 더</h2>

<ul>
  <li>🟧 사코니 브랜드 전체 신발 보기 → <a href="/brands/saucony">사코니 브랜드 페이지</a></li>
  <li>🦶 안정화 베스트 → <a href="/best/stability">안정화 러닝화 추천</a> · 레이싱 → <a href="/best/racing">레이싱 러닝화 추천</a></li>
  <li>🟦 다른 브랜드 계급도 → <a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> · <a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a> · <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a> · <a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카</a> · <a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a> · <a href="/blog/adidas-running-shoes-lineup-tier-guide-2026">아디다스</a> · <a href="/blog/on-running-shoes-lineup-tier-guide-2026">온</a> · <a href="/blog/puma-running-shoes-lineup-tier-guide-2026">푸마</a> · <a href="/blog/mizuno-running-shoes-lineup-tier-guide-2026">미즈노</a> · <a href="/blog/li-ning-red-hare-9-lineup-2026">라이닝</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 한국 공식 판매 모델과 RunRepeat 실측·사코니 공식 자료를 토대로 작성했습니다. 라인업·가격·발볼 옵션은 시즌마다 바뀔 수 있으니 구매 전 각 모델 상세 페이지와 공식몰에서 최신 정보를 확인하세요.</p>
`,
  },
  {
    id: 'mizuno-running-shoes-lineup-tier-guide-2026',
    slug: 'mizuno-running-shoes-lineup-tier-guide-2026',
    title: '미즈노 러닝화 계급도 2026 — 웨이브 라이더·인스파이어·하이퍼워프, Wave 플레이트로 읽는 전체 라인업 | 입문부터 카본 슈퍼슈즈까지 한 장 정리',
    description:
      '미즈노 러닝화 9종을 전통 Wave 라인(라이더 데일리·스카이 쿠션·인스파이어/호라이즌 안정화·리벨리온 템포)과 신세대 하이퍼워프 카본으로 한 장에. 인스파이어 15.9만부터 하이퍼워프 퓨어 39.9만까지 가격·무게·폼 비교표 + Wave 플레이트가 뭔지 + 하이퍼워프 3형제 거리별 차이 + 미즈노가 의외로 발볼 넓은 이유까지 정리했습니다.',
    thumbnail: '/images/blog/mizuno-lineup-tier-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 12,
    tags: ['미즈노 러닝화', '미즈노 계급도', '러닝화 라인업', '러닝화 등급', '웨이브 라이더', '웨이브 인스파이어', '하이퍼워프', 'Wave 플레이트', '안정화', '일본 러닝화'],
    faqs: [
      { question: '미즈노 "웨이브(Wave)"가 뭔가요?', answer: '미즈노의 정체성인 미드솔 플레이트입니다. 파도 모양의 플라스틱 판이 들어가 충격을 분산하고 반발과 안정성을 동시에 제공해요. 그래서 미즈노 특유의 "딴딴하고 안정적인" 착지감이 나옵니다. 전통 라인은 모두 "웨이브 OO"(라이더·스카이·인스파이어·호라이즌·리벨리온)로 시작합니다.' },
      { question: '하이퍼워프는 웨이브랑 뭐가 다른가요?', answer: '하이퍼워프(HyperWarp)는 미즈노의 신세대 카본 슈퍼슈즈 라인입니다. 전통 Wave 플레이트 대신 카본 플레이트와 PEBA 폼을 넣어 슈퍼슈즈 경쟁에 본격 참전한 모델이에요. 즉 "웨이브"는 안정·데일리의 전통, "하이퍼워프"는 레이싱 최상위 신세대라고 보면 됩니다.' },
      { question: '하이퍼워프 퓨어·엘리트·프로는 뭐가 다른가요?', answer: '거리와 용도로 갈립니다. 퓨어는 139g 극한 경량으로 5K·10K 단거리 특화(최고가 39.9만), 엘리트는 170g으로 풀마라톤 레이스용, 프로는 201g 슈퍼트레이너로 훈련+대회 겸용입니다. 단거리 PB면 퓨어, 풀코스 레이스면 엘리트, 카본 훈련까지 겸하면 프로입니다.' },
      { question: '미즈노 안정화는 인스파이어랑 호라이즌 중 뭘 사야 하나요?', answer: '웨이브 인스파이어 21(15.9만)은 가성비 안정화로 km당 177원·900km 내구성의 끝판왕, 웨이브 호라이즌 8(17.9만)은 미디얼 러버월과 Wave로 시장 최강 수준의 과내전 제어를 제공하는 프리미엄입니다. 가벼운 지지면 인스파이어, 심한 과내전·강한 교정이면 호라이즌입니다. 둘 다 와이드 옵션이 있습니다.' },
      { question: '미즈노는 발볼 넓은 한국 러너에게 맞나요?', answer: '의외로 잘 맞습니다. 일본 브랜드라 좁을 것 같지만, 웨이브 라이더 29는 토박스가 76.7mm로 넓고 인스파이어·호라이즌은 와이드 옵션이 있어요. 데일리·안정화 라인은 발볼 넓은 러너에게 좋은 선택입니다. 다만 하이퍼워프 같은 카본 레이싱은 좁으니 주의하세요.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>미즈노는 Wave 플레이트가 정체성</strong> — 파도 모양 플레이트로 "딴딴하고 안정적인" 착지감. 전통 라인은 다 "웨이브 OO"입니다.</li>
    <li><strong>두 시대로 나뉩니다</strong> — 전통 <strong>웨이브</strong>(데일리·안정화) vs 신세대 <strong>하이퍼워프</strong>(카본 슈퍼슈즈).</li>
    <li><strong>안정화 강자 + 의외로 넓은 발볼</strong> — 인스파이어·호라이즌의 과내전 제어가 강하고, 데일리·안정화는 토박스가 넉넉해 한국 러너에게 좋습니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🌊</span>
  <div class="callout-body">
    <p class="callout-title">이 글의 역할 — 미즈노 계급도 한 장</p>
    <p>"웨이브 라이더, 인스파이어, 호라이즌에 하이퍼워프까지… 뭐가 윗급인지 헷갈린다"는 분을 위한 지도입니다. 추천 순위가 아니라 <strong>라인과 폼으로 전체 라인업을 한 번에 이해</strong>시키는 글이에요. 가격은 한국 공식가, 무게는 RunRepeat 실측 기준이며 각 모델은 상세 페이지로 연결됩니다. <a href="/blog/puma-running-shoes-lineup-tier-guide-2026">푸마</a>·<a href="/blog/on-running-shoes-lineup-tier-guide-2026">온</a>·<a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a> 등 다른 브랜드 계급도와 함께 보면 비교가 쉽습니다.</p>
  </div>
</div>

<h2>1. 미즈노 읽는 법 — Wave 전통 vs 하이퍼워프 신세대</h2>

<p>미즈노의 정체성은 <strong>Wave(웨이브) 플레이트</strong>입니다. 미드솔에 파도 모양 플라스틱 판을 넣어 충격을 분산하고 안정성과 반발을 동시에 잡아요. 그래서 미즈노는 "딴딴하고 안정적"이라는 평이 많습니다. 라인업은 크게 두 시대로 갈립니다.</p>

<table>
  <thead>
    <tr><th>라인</th><th>용도</th><th>한 줄</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>웨이브 라이더 Wave Rider</strong></td><td>데일리 만능</td><td>"처음이면 라이더" — 베스트셀러</td></tr>
    <tr><td><strong>웨이브 스카이 Wave Sky</strong></td><td>맥스 쿠션</td><td>44mm 질소 폼, 푹신 장거리</td></tr>
    <tr><td><strong>웨이브 인스파이어 / 호라이즌</strong></td><td>안정화</td><td>인스파이어=가성비 / 호라이즌=최강 과내전</td></tr>
    <tr><td><strong>웨이브 리벨리온 플래시</strong></td><td>미드풋 템포</td><td>극단적 힐 베벨, 빠른 훈련</td></tr>
    <tr><td><strong>하이퍼워프 HyperWarp</strong></td><td>카본 레이싱(신세대)</td><td>퓨어·엘리트·프로 — 슈퍼슈즈</td></tr>
  </tbody>
</table>

<p>즉 <strong>"웨이브"가 붙으면 전통 라인(데일리·안정화), "하이퍼워프"면 신세대 카본 슈퍼슈즈</strong>입니다. 미즈노가 슈퍼슈즈 경쟁에 늦게 참전하며 내놓은 게 하이퍼워프예요.</p>

<h2>2. 폼이 등급을 만든다 — Enerzy → PEBA + Wave/카본</h2>

<p>미즈노 폼은 "Enerzy(에너지)" 패밀리입니다. 데일리는 Enerzy, 레이싱은 PEBA에 플레이트를 더합니다.</p>

<table>
  <thead>
    <tr><th>폼·플레이트</th><th>성격</th><th>들어가는 모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Enerzy / Enerzy NXT</strong></td><td>부드러운 데일리·쿠션</td><td>라이더 · 스카이 · 인스파이어 · 호라이즌</td></tr>
    <tr><td><strong>Enerzy Lite+ / XP (PEBA·TPEE)</strong></td><td>템포·반발 폼</td><td>리벨리온 플래시</td></tr>
    <tr><td><strong>Wave 플레이트</strong></td><td>안정·반발(전통)</td><td>웨이브 전 라인</td></tr>
    <tr><td><strong>PEBA + 카본 플레이트</strong></td><td>레이싱 최상위</td><td>하이퍼워프 퓨어·엘리트·프로</td></tr>
  </tbody>
</table>

<h2>3. 미즈노 러닝화 계급도 — 9종 한눈에</h2>

<p>라인 × 폼으로 현재 한국에서 살 수 있는 미즈노 러닝화 9종을 줄 세우면 이렇게 됩니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>라인·용도</th><th>폼</th><th>가격</th><th>무게</th><th>한 줄 성격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/mizuno-wave-inspire-21"><strong>웨이브 인스파이어 21</strong></a></td><td>가성비 안정화</td><td>Enerzy + NXT · Wave</td><td>15.9만</td><td>286g</td><td>km당 177원, 900km 내구성</td></tr>
    <tr><td><a href="/shoes/mizuno-wave-rider-29"><strong>웨이브 라이더 29</strong></a></td><td>데일리 만능</td><td>Enerzy NXT · Wave</td><td>16.9만</td><td>258g</td><td>76.7mm 넓은 토박스, 발볼 해답</td></tr>
    <tr><td><a href="/shoes/mizuno-wave-horizon-8"><strong>웨이브 호라이즌 8</strong></a></td><td>프리미엄 안정화</td><td>Enerzy NXT + Enerzy · Wave</td><td>17.9만</td><td>323g</td><td>미디얼 러버월, 최강 과내전 제어</td></tr>
    <tr><td><a href="/shoes/mizuno-wave-rebellion-flash-2"><strong>웨이브 리벨리온 플래시 2</strong></a></td><td>미드풋 템포</td><td>Enerzy Lite+ (PEBA)</td><td>18.9만</td><td>239g</td><td>극단적 힐 베벨 로커</td></tr>
    <tr><td><a href="/shoes/mizuno-wave-sky-9"><strong>웨이브 스카이 9</strong></a></td><td>맥스 쿠션</td><td>Enerzy NXT (질소)</td><td>18.9만</td><td>290g</td><td>44mm 질소 폼, 구름 위 러닝</td></tr>
    <tr><td><a href="/shoes/mizuno-wave-rebellion-flash-3"><strong>웨이브 리벨리온 플래시 3</strong></a></td><td>미드풋 템포 신상</td><td>Enerzy XP (TPEE) + NXT</td><td>19.9만</td><td>244g</td><td>TPEE 듀얼폼, 플래시 2 진화형</td></tr>
    <tr><td><a href="/shoes/mizuno-hyperwarp-pro"><strong>하이퍼워프 프로</strong></a></td><td>슈퍼트레이너</td><td>Enerzy XP + 카본</td><td>31.9만</td><td>201g</td><td>39mm, 훈련+대회 겸용</td></tr>
    <tr><td><a href="/shoes/mizuno-hyperwarp-elite"><strong>하이퍼워프 엘리트</strong></a></td><td>풀 레이싱</td><td>PEBA + 카본</td><td>34.9만</td><td>170g</td><td>38mm, 풀마라톤 특화</td></tr>
    <tr><td><a href="/shoes/mizuno-hyperwarp-pure"><strong>하이퍼워프 퓨어</strong></a></td><td>단거리 레이싱</td><td>PEBA + 카본</td><td>39.9만</td><td>139g</td><td>139g 극한 경량, 5K·10K 특화</td></tr>
  </tbody>
</table>

<p>※ 무게는 남성 US 9 기준, 가격은 한국 공식가입니다. 스택·드롭·발볼 상세는 각 모델 상세 페이지에 있습니다.</p>

<h2>4. 목적별로 — 나는 뭘 사야 할까</h2>

<ul>
  <li><strong>🟢 첫 미즈노·만능 데일리</strong> → <a href="/shoes/mizuno-wave-rider-29">웨이브 라이더 29</a>. 76.7mm 넓은 토박스로 발볼 넓은 한국 러너에게 특히 좋습니다.</li>
  <li><strong>🦶 평발·안정(가성비)</strong> → <a href="/shoes/mizuno-wave-inspire-21">웨이브 인스파이어 21</a>(15.9만, 900km). 강한 과내전이면 <a href="/shoes/mizuno-wave-horizon-8">웨이브 호라이즌 8</a>(미디얼 러버월). 다른 브랜드 안정화와 비교는 <a href="/blog/stability-shoes-self-diagnosis-fit-guide-2026">안정화 자가진단 가이드</a>에.</li>
  <li><strong>☁️ 푹신한 맥스 쿠션</strong> → <a href="/shoes/mizuno-wave-sky-9">웨이브 스카이 9</a>(44mm 질소 폼).</li>
  <li><strong>⚡ 미드풋 템포·빠른 훈련</strong> → <a href="/shoes/mizuno-wave-rebellion-flash-3">리벨리온 플래시 3</a>. 2세대와의 차이는 <a href="/blog/mizuno-wave-rebellion-flash-2-vs-3-comparison">플래시 2 vs 3</a>에.</li>
  <li><strong>🏃 카본 훈련+대회 겸용</strong> → <a href="/shoes/mizuno-hyperwarp-pro">하이퍼워프 프로</a>(슈퍼트레이너).</li>
  <li><strong>🏅 풀마라톤 레이스</strong> → <a href="/shoes/mizuno-hyperwarp-elite">하이퍼워프 엘리트</a>(170g). 5K·10K 단거리 PB면 <a href="/shoes/mizuno-hyperwarp-pure">퓨어</a>(139g).</li>
</ul>

<h2>5. 하이퍼워프 3형제 — 거리로 갈린다</h2>

<p>미즈노 신세대 카본 <strong>하이퍼워프</strong>는 다른 브랜드와 달리 <strong>거리·용도로 모델이 나뉩니다.</strong> 단순 등급이 아니라 쓰임이 다른 게 특징이에요.</p>

<table>
  <thead>
    <tr><th>모델</th><th>특화 거리</th><th>무게·가격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/mizuno-hyperwarp-pure"><strong>퓨어</strong></a></td><td>5K·10K 단거리</td><td>139g · 39.9만</td></tr>
    <tr><td><a href="/shoes/mizuno-hyperwarp-elite"><strong>엘리트</strong></a></td><td>풀마라톤 레이스</td><td>170g · 34.9만</td></tr>
    <tr><td><a href="/shoes/mizuno-hyperwarp-pro"><strong>프로</strong></a></td><td>훈련+대회 슈퍼트레이너</td><td>201g · 31.9만</td></tr>
  </tbody>
</table>

<p>재밌는 건 가장 가벼운 <strong>퓨어(139g)가 최고가</strong>라는 점입니다. 단거리 전용 초경량이라 그래요. 대부분의 마라토너에게는 <strong>엘리트(풀코스)</strong>가, 카본을 훈련에도 쓰고 싶으면 <strong>프로</strong>가 현실적입니다.</p>

<h2>6. 발볼 — 미즈노는 의외로 한국 러너 친화적</h2>

<p>일본 브랜드라 좁을 것 같지만, <strong>미즈노의 데일리·안정화는 의외로 토박스가 넉넉</strong>합니다. 발볼 넓은 한국 러너에게 좋은 선택이에요.</p>

<table>
  <thead>
    <tr><th>발볼</th><th>모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>넓음·와이드 (한국 친화)</strong></td><td>웨이브 라이더 29(76.7mm) · 인스파이어(와이드) · 호라이즌(와이드)</td></tr>
    <tr><td><strong>표준</strong></td><td>웨이브 스카이 · 리벨리온 플래시 · 하이퍼워프 프로</td></tr>
    <tr><td><strong>좁음 (주의)</strong></td><td>하이퍼워프 퓨어 · 엘리트(레이싱)</td></tr>
  </tbody>
</table>

<p>데일리는 라이더, 안정화는 인스파이어·호라이즌이 발볼 걱정 없이 무난합니다. 레이싱(하이퍼워프 퓨어·엘리트)만 좁으니 발볼 넓으면 반 치수 크게 신으세요. 발볼별 선택은 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너를 위한 러닝화</a>에 정리돼 있습니다.</p>

<h2>한 걸음 더</h2>

<ul>
  <li>🌊 미즈노 브랜드 전체 신발 보기 → <a href="/brands/mizuno">미즈노 브랜드 페이지</a></li>
  <li>🦶 안정화 베스트 → <a href="/best/stability">안정화 러닝화 추천</a> · 레이싱 → <a href="/best/racing">레이싱 러닝화 추천</a></li>
  <li>🟦 다른 브랜드 계급도 → <a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> · <a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a> · <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a> · <a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카</a> · <a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a> · <a href="/blog/adidas-running-shoes-lineup-tier-guide-2026">아디다스</a> · <a href="/blog/on-running-shoes-lineup-tier-guide-2026">온</a> · <a href="/blog/puma-running-shoes-lineup-tier-guide-2026">푸마</a> · <a href="/blog/saucony-running-shoes-lineup-tier-guide-2026">사코니</a> · <a href="/blog/li-ning-red-hare-9-lineup-2026">라이닝</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 한국 공식 판매 모델과 RunRepeat 실측·미즈노 공식 자료를 토대로 작성했습니다. 라인업·가격·발볼 옵션은 시즌마다 바뀔 수 있으니 구매 전 각 모델 상세 페이지와 공식몰에서 최신 정보를 확인하세요.</p>
`,
  },
  {
    id: 'puma-running-shoes-lineup-tier-guide-2026',
    slug: 'puma-running-shoes-lineup-tier-guide-2026',
    title: '푸마 러닝화 계급도 2026 — 디비에이트·벨로시티·패스트알, 나이트로 폼과 엘리트로 읽는 전체 라인업 | 입문부터 서브2 슈퍼슈즈까지 한 장 정리',
    description:
      '푸마 러닝화 9종을 라인(벨로시티 입문·매그니파이/매그맥스 쿠션·디비에이트 슈퍼트레이너·엘리트 레이싱)과 나이트로 폼 등급으로 한 장에. 벨로시티 17.9만부터 패스트알 엘리트 37.9만까지 가격·무게·폼 비교표 + "나이트로/엘리트/퓨어" 수식어 뜻 + 디비에이트 5형제 + 가성비 카본의 강자 푸마까지 정리했습니다.',
    thumbnail: '/images/blog/puma-lineup-tier-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 12,
    tags: ['푸마 러닝화', '푸마 계급도', '러닝화 라인업', '러닝화 등급', '디비에이트 나이트로', '벨로시티 나이트로', '패스트알', 'NITRO', '가성비 카본', '레이싱화'],
    faqs: [
      { question: '푸마 러닝화 이름에 다 붙는 "나이트로(NITRO)"가 뭔가요?', answer: '푸마의 질소 주입 슈퍼크리티컬 폼입니다. 거의 모든 푸마 러닝화에 들어가서 이름에 "나이트로"가 붙어요. 기본 Nitro Foam(데일리)부터 Nitro Elite(레이싱용 PEBA급)까지 등급이 나뉩니다. 즉 나이트로는 "푸마 폼이 들어갔다"는 공통 표시이고, 앞의 라인 이름(벨로시티·디비에이트 등)이 용도를 나타냅니다.' },
      { question: '"엘리트"랑 "퓨어"는 무슨 뜻인가요?', answer: '"엘리트(Elite)"가 붙으면 카본 플레이트 레이싱화입니다(디비에이트 엘리트, 패스트알 엘리트). "퓨어(Pure)"는 반대로 카본을 뺀 100% PEBA 슈퍼폼 버전이에요(디비에이트 퓨어). 대회용은 엘리트, 카본 없이 부드럽게 빠른 훈련은 퓨어로 기억하면 됩니다.' },
      { question: '디비에이트 나이트로 종류가 너무 많은데 차이가 뭔가요?', answer: '디비에이트는 푸마의 카본/슈퍼트레이너 핵심 라인이라 변형이 많습니다. 퓨어(무카본 100% PEBA)·3·4(카본 슈퍼트레이너)·엘리트 3·4(카본 레이싱)로 나뉘어요. 빠른 훈련이면 퓨어나 디비에이트 3·4, 대회면 엘리트, 둘 다 잡고 싶으면 디비에이트 4(800km 내구성)입니다.' },
      { question: '푸마 러닝화는 가성비가 좋나요?', answer: '네, 가성비가 푸마의 핵심 강점입니다. 후발 주자로서 비슷한 성능을 더 싸게 내놓는 전략이에요. 벨로시티 나이트로 4는 17만원대 가성비 데일리, 디비에이트 엘리트는 29만원대로 베이퍼플라이보다 저렴한 카본 레이싱입니다. 카본 슈퍼트레이너(디비에이트 3·4)도 경쟁작보다 쌉니다.' },
      { question: '푸마는 발볼 넓은 한국 러너에게 맞나요?', answer: '모델마다 다릅니다. 벨로시티 나이트로 4와 레이싱(엘리트 3·패스트알)은 좁은 편이라 주의가 필요하고, 디비에이트 나이트로 4·매그니파이·매그맥스는 표준입니다. 디비에이트는 3세대까지 좁다는 평이 많았으나 4세대에서 와이드 옵션이 추가됐습니다. 발볼이 많이 넓으면 표준 모델 중에서도 반 치수 크게 신으세요.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>푸마는 모든 모델이 "나이트로(NITRO)"</strong> — 질소 폼이 정체성이라 이름에 다 붙습니다. 앞의 라인 이름(벨로시티·디비에이트 등)이 용도예요.</li>
    <li><strong>수식어가 등급</strong> — "엘리트"=카본 레이싱, "퓨어"=카본 뺀 100% PEBA. 디비에이트가 슈퍼트레이너~레이싱의 핵심 라인입니다.</li>
    <li><strong>가성비가 강점</strong> — 17만원대 데일리부터 29만원대 카본 레이싱까지, 경쟁작보다 저렴합니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🐆</span>
  <div class="callout-body">
    <p class="callout-title">이 글의 역할 — 푸마 계급도 한 장</p>
    <p>"디비에이트에 나이트로, 엘리트, 퓨어… 푸마는 죄다 나이트로라 뭐가 윗급인지 모르겠다"는 분을 위한 지도입니다. 추천 순위가 아니라 <strong>라인과 폼으로 전체 라인업을 한 번에 이해</strong>시키는 글이에요. 가격은 한국 공식가, 무게는 RunRepeat 실측 기준이며 각 모델은 상세 페이지로 연결됩니다. <a href="/blog/on-running-shoes-lineup-tier-guide-2026">온</a>·<a href="/blog/adidas-running-shoes-lineup-tier-guide-2026">아디다스</a>·<a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a> 등 다른 브랜드 계급도와 함께 보면 비교가 쉽습니다.</p>
  </div>
</div>

<h2>1. 푸마 읽는 법 — 다 "나이트로", 라인이 용도</h2>

<p>푸마 러닝화의 공통분모는 <strong>나이트로(NITRO)</strong>입니다. 질소를 주입한 슈퍼크리티컬 폼이 거의 모든 모델에 들어가서 이름에 다 붙어요. 그래서 "나이트로"는 등급이 아니라 <strong>"푸마 폼이 들어갔다"는 공통 표시</strong>이고, 앞의 라인 이름이 진짜 용도를 알려줍니다.</p>

<table>
  <thead>
    <tr><th>라인</th><th>용도</th><th>한 줄</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>벨로시티 Velocity</strong></td><td>입문·데일리</td><td>"처음이면 벨로시티" — 가성비 만능</td></tr>
    <tr><td><strong>매그니파이 / 매그맥스 Magnify/MagMax</strong></td><td>맥스 쿠션</td><td>푹신함 — 매그맥스가 더 맥시멀</td></tr>
    <tr><td><strong>디비에이트 Deviate</strong></td><td>슈퍼트레이너~레이싱</td><td>"푸마의 핵심" — 변형이 가장 많음</td></tr>
    <tr><td><strong>패스트알 Fast-R</strong></td><td>최상위 레이싱</td><td>분리형 디자인의 서브2급 무기</td></tr>
  </tbody>
</table>

<p>그리고 수식어로 등급을 읽습니다.</p>
<ul>
  <li><strong>"엘리트(Elite)" = 카본 플레이트 레이싱</strong> — 디비에이트 엘리트, 패스트알 엘리트.</li>
  <li><strong>"퓨어(Pure)" = 카본 뺀 100% PEBA 슈퍼폼</strong> — 디비에이트 퓨어(무플레이트).</li>
</ul>

<h2>2. 나이트로 폼이 등급을 만든다</h2>

<p>같은 나이트로라도 종류로 등급이 갈립니다. 데일리는 기본 Nitro Foam, 레이싱은 Nitro Elite(PEBA급)예요.</p>

<table>
  <thead>
    <tr><th>폼</th><th>성격</th><th>들어가는 모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Nitro Foam</strong></td><td>기본 질소 데일리 폼</td><td>벨로시티 · 매그니파이</td></tr>
    <tr><td><strong>NITROFOAM (100% PEBA)</strong></td><td>무플레이트 슈퍼폼</td><td>디비에이트 퓨어</td></tr>
    <tr><td><strong>Nitro Elite (A-TPU/PEBA)</strong></td><td>레이싱 최상위 반발</td><td>디비에이트 엘리트 · 패스트알</td></tr>
    <tr><td><strong>+ PWRPLATE 카본</strong></td><td>추진 플레이트</td><td>디비에이트 3·4 · 엘리트 · 패스트알</td></tr>
  </tbody>
</table>

<h2>3. 푸마 러닝화 계급도 — 9종 한눈에</h2>

<p>라인 × 폼으로 현재 한국에서 살 수 있는 푸마 러닝화 9종을 줄 세우면 이렇게 됩니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>라인·용도</th><th>폼</th><th>가격</th><th>무게</th><th>한 줄 성격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/puma-velocity-nitro-4"><strong>벨로시티 나이트로 4</strong></a></td><td>입문 데일리</td><td>Nitro Foam</td><td>17.9만</td><td>224g</td><td>가성비 최강 데일리 트레이너</td></tr>
    <tr><td><a href="/shoes/puma-deviate-pure-nitro"><strong>디비에이트 퓨어</strong></a></td><td>무카본 슈퍼폼</td><td>100% PEBA NITROFOAM</td><td>18.9만</td><td>220g</td><td>무플레이트, 데일리+스피드</td></tr>
    <tr><td><a href="/shoes/puma-magnify-nitro-3"><strong>매그니파이 나이트로 3</strong></a></td><td>맥스 쿠션</td><td>Nitro Foam (PEBA)</td><td>19.9만</td><td>264g</td><td>PEBA 맥시멀, 20만↓ 관절 보호</td></tr>
    <tr><td><a href="/shoes/puma-deviate-nitro-3"><strong>디비에이트 나이트로 3</strong></a></td><td>카본 슈퍼트레이너</td><td>Nitro + Nitro Elite + 카본</td><td>21.9만</td><td>268g</td><td>22만 카본, 마하X보다 절약</td></tr>
    <tr><td><a href="/shoes/puma-deviate-nitro-4"><strong>디비에이트 나이트로 4</strong></a></td><td>카본 슈퍼트레이너 신상</td><td>Dual NITROFOAM + 카본</td><td>21.9만</td><td>250g</td><td>800km 내구성, 와이드 추가</td></tr>
    <tr><td><a href="/shoes/puma-magmax-nitro-2"><strong>매그맥스 나이트로 2</strong></a></td><td>맥시멀 쿠션</td><td>Nitro Elite Foam</td><td>23.9만</td><td>268g</td><td>엘리트 폼 + 훈련용 내구성</td></tr>
    <tr><td><a href="/shoes/puma-deviate-nitro-elite-3"><strong>디비에이트 엘리트 3</strong></a></td><td>카본 레이싱</td><td>Nitro Elite (A-TPU) + 카본</td><td>28.9만</td><td>204g</td><td>77% 리턴, 베이퍼플라이 킬러</td></tr>
    <tr><td><a href="/shoes/puma-deviate-nitro-elite-4"><strong>디비에이트 엘리트 4</strong></a></td><td>카본 레이싱 신상</td><td>NITROFOAM Elite 듀얼 + 카본</td><td>28.9만</td><td>170g</td><td>170g 초경량, 부드러운 ATPU</td></tr>
    <tr><td><a href="/shoes/puma-fast-r-nitro-elite-3"><strong>패스트알 엘리트 3</strong></a></td><td>최상위 레이싱</td><td>Nitro Elite (A-TPU) + 카본</td><td>37.9만</td><td>173g</td><td>분리형, 알파플라이에 도전</td></tr>
  </tbody>
</table>

<p>※ 무게는 남성 US 9 기준, 가격은 한국 공식가입니다. 스택·드롭·발볼 상세는 각 모델 상세 페이지에 있습니다.</p>

<h2>4. 목적별로 — 나는 뭘 사야 할까</h2>

<ul>
  <li><strong>🟢 첫 푸마·가성비 데일리</strong> → <a href="/shoes/puma-velocity-nitro-4">벨로시티 나이트로 4</a>(17.9만, 224g). 입문 가성비 만능.</li>
  <li><strong>⚡ 카본 없이 빠른 훈련</strong> → <a href="/shoes/puma-deviate-pure-nitro">디비에이트 퓨어</a>. 100% PEBA 무플레이트로 220g 경량. <a href="/blog/puma-deviate-pure-nitro-review">디비에이트 퓨어 리뷰</a> 참고.</li>
  <li><strong>☁️ 푹신한 맥스 쿠션</strong> → <a href="/shoes/puma-magnify-nitro-3">매그니파이 나이트로 3</a>(20만↓ PEBA) 또는 더 두툼한 <a href="/shoes/puma-magmax-nitro-2">매그맥스 나이트로 2</a>.</li>
  <li><strong>🏃 카본 슈퍼트레이너(가성비)</strong> → <a href="/shoes/puma-deviate-nitro-4">디비에이트 나이트로 4</a>(800km 내구성·와이드). 3세대와의 차이는 <a href="/blog/puma-deviate-nitro-3-vs-4-comparison">디비에이트 3 vs 4</a>에.</li>
  <li><strong>🏅 풀마라톤 레이스(가성비 카본)</strong> → <a href="/shoes/puma-deviate-nitro-elite-3">디비에이트 엘리트 3</a>(29만, 베이퍼 킬러) 또는 170g <a href="/shoes/puma-deviate-nitro-elite-4">엘리트 4</a>.</li>
  <li><strong>🚀 최상위 슈퍼슈즈</strong> → <a href="/shoes/puma-fast-r-nitro-elite-3">패스트알 엘리트 3</a>(173g 분리형). 알파플라이에 맞서는 푸마의 최종 무기.</li>
</ul>

<h2>5. 디비에이트 5형제 — 푸마의 핵심 라인</h2>

<p>온의 클라우드몬스터처럼, 푸마의 헷갈림은 <strong>디비에이트 변형이 많아서</strong>입니다. 같은 디비에이트인데 수식어와 세대로 갈려요.</p>

<table>
  <thead>
    <tr><th>모델</th><th>성격</th><th>카본</th><th>가격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/puma-deviate-pure-nitro">디비에이트 퓨어</a></td><td>무플레이트 100% PEBA</td><td>없음</td><td>18.9만</td></tr>
    <tr><td><a href="/shoes/puma-deviate-nitro-3">디비에이트 나이트로 3</a></td><td>카본 슈퍼트레이너</td><td>PWRPLATE</td><td>21.9만</td></tr>
    <tr><td><a href="/shoes/puma-deviate-nitro-4">디비에이트 나이트로 4</a></td><td>신형, 800km·와이드</td><td>PWRPLATE</td><td>21.9만</td></tr>
    <tr><td><a href="/shoes/puma-deviate-nitro-elite-3">디비에이트 엘리트 3</a></td><td>카본 레이싱</td><td>PWRPLATE</td><td>28.9만</td></tr>
    <tr><td><a href="/shoes/puma-deviate-nitro-elite-4">디비에이트 엘리트 4</a></td><td>신형 170g 레이싱</td><td>PWRPLATE</td><td>28.9만</td></tr>
  </tbody>
</table>

<p>정리하면 — <strong>카본 없이 부드럽게면 퓨어, 훈련+레이스 겸용 카본이면 디비에이트 3·4, 대회 전용이면 엘리트</strong>입니다. "나이트로"는 디비에이트 슈퍼트레이너, "엘리트"가 붙으면 레이싱으로 한 단계 올라간다고 보면 됩니다.</p>

<h2>6. 발볼 — 모델 따라 다름, 한국 러너 확인 필수</h2>

<p>푸마는 모델별로 토박스 편차가 큽니다. 레이싱·입문 일부가 좁은 편이라 발볼 넓은 한국 러너는 확인이 필요해요.</p>

<table>
  <thead>
    <tr><th>발볼</th><th>모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>표준 (무난)</strong></td><td>디비에이트 나이트로 3·4 · 엘리트 4 · 매그니파이 · 매그맥스 · 디비에이트 퓨어</td></tr>
    <tr><td><strong>좁음 (주의)</strong></td><td>벨로시티 나이트로 4 · 디비에이트 엘리트 3 · 패스트알 엘리트 3</td></tr>
  </tbody>
</table>

<p>디비에이트는 3세대까지 좁다는 평이 많았으나 <strong>4세대에서 와이드 옵션이 추가</strong>됐습니다. 발볼이 많이 넓다면 토박스가 넉넉한 <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a>·<a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a>를 함께 보세요. 발볼별 선택은 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너를 위한 러닝화</a>에 정리돼 있습니다.</p>

<h2>한 걸음 더</h2>

<ul>
  <li>🐆 푸마 브랜드 전체 신발 보기 → <a href="/brands/puma">푸마 브랜드 페이지</a></li>
  <li>🏁 레이싱 카본화 베스트 → <a href="/best/racing">레이싱 러닝화 추천</a></li>
  <li>🟦 다른 브랜드 계급도 → <a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> · <a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a> · <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a> · <a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카</a> · <a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a> · <a href="/blog/adidas-running-shoes-lineup-tier-guide-2026">아디다스</a> · <a href="/blog/on-running-shoes-lineup-tier-guide-2026">온</a> · <a href="/blog/mizuno-running-shoes-lineup-tier-guide-2026">미즈노</a> · <a href="/blog/saucony-running-shoes-lineup-tier-guide-2026">사코니</a> · <a href="/blog/li-ning-red-hare-9-lineup-2026">라이닝</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 한국 공식 판매 모델과 RunRepeat 실측·푸마 공식 자료를 토대로 작성했습니다. 라인업·가격·발볼 옵션은 시즌마다 바뀔 수 있으니 구매 전 각 모델 상세 페이지와 공식몰에서 최신 정보를 확인하세요.</p>
`,
  },
  {
    id: 'on-running-shoes-lineup-tier-guide-2026',
    slug: 'on-running-shoes-lineup-tier-guide-2026',
    title: '온(On) 러닝화 계급도 2026 — 클라우드몬스터·클라우드서퍼·클라우드붐, 수식어로 읽는 전체 라인업 | 입문부터 카본 레이싱까지 한 장 정리',
    description:
      '온(On) 러닝화 11종을 라인(클라우드러너 입문·클라우드몬스터 쿠션·클라우드플로우 스피드·클라우드붐 레이싱)과 수식어(하이퍼·맥스·라이트스프레이)로 한 장에. 클라우드러너 18.9만부터 클라우드붐 32.9만까지 가격·무게·폼 비교표 + CloudTec 구름 포드가 뭔지 + 클라우드몬스터 5형제 차이 + On은 발볼 좁다는 점까지 정리했습니다.',
    thumbnail: '/images/blog/on-lineup-tier-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 13,
    tags: ['온 러닝화', 'On 러닝화', '온 계급도', '러닝화 라인업', '러닝화 등급', '클라우드몬스터', '클라우드서퍼', '클라우드붐', 'CloudTec', '스위스 러닝화'],
    faqs: [
      { question: '온(On) 모델명이 다 "클라우드"인데 어떻게 구분하나요?', answer: '라인 이름과 수식어로 읽습니다. 라인은 클라우드러너(입문)·클라우드서퍼(부드러운 쿠션)·클라우드몬스터(맥시멀 쿠션)·클라우드플로우(스피드)·클라우드붐(레이싱)입니다. 거기에 수식어가 붙으면 등급이 올라가요 — "하이퍼"=PEBA 슈퍼트레이너, "맥스"=맥시멀 스택, "라이트스프레이"=초경량 어퍼입니다.' },
      { question: 'CloudTec(클라우드텍)이 뭔가요?', answer: '온의 정체성인 밑창 기술입니다. 바닥에 구멍 뚫린 "구름(Cloud)" 포드가 줄지어 있어, 착지할 때 눌리며 충격을 흡수하고 발을 굴려줍니다. 이 독특한 착지감이 온의 시그니처예요. 호불호가 갈리지만 한 번 적응하면 특유의 굴러가는 느낌을 좋아하는 러너가 많습니다.' },
      { question: '클라우드몬스터 하이퍼랑 라이트스프레이는 뭐가 다른가요?', answer: '둘 다 클라우드몬스터의 상위 버전입니다. 하이퍼는 Pebax(PEBA) 폼을 넣어 가볍고 반발이 좋은 무플레이트 슈퍼트레이너(258~271g), 라이트스프레이는 거기에 로봇이 분사해 만든 초경량 어퍼를 더해 205g까지 줄인 최상위 버전입니다. 가격은 하이퍼 25.9만, 라이트스프레이 31.9만입니다.' },
      { question: '온에도 안정화 러닝화가 있나요?', answer: '클라우드러너 3가 안정화로 분류됩니다. 다만 아식스 카야노 같은 강한 교정 방식이 아니라, 힐 가이던스로 뒤꿈치를 안정적으로 잡아주는 가벼운 지지에 가깝습니다. 러닝과 워킹 겸용으로 좋지만, 심한 평발·과내전이라면 카야노·아드레날린 같은 전문 안정화를 함께 보세요.' },
      { question: '온은 발볼 넓은 한국 러너에게 맞나요?', answer: '주의가 필요합니다. 온은 토박스가 좁은 편이고 와이드 옵션을 거의 제공하지 않습니다. 3세대(클라우드몬스터 3 등)에서 핏이 다소 넓어졌지만, 발볼이 많이 넓다면 반 치수 크게 신거나 토박스가 넉넉한 아식스·뉴발란스를 함께 고려하세요.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>온은 모든 모델이 "클라우드(Cloud)~"</strong> — 라인 이름(러너·서퍼·몬스터·플로우·붐)으로 용도를, 수식어로 등급을 읽습니다.</li>
    <li><strong>수식어가 등급</strong> — "하이퍼"=PEBA 슈퍼트레이너, "맥스"=맥시멀, "라이트스프레이"=로봇 어퍼 초경량.</li>
    <li><strong>CloudTec 구름 포드가 정체성</strong> — 밑창 구멍이 착지를 흡수합니다. 단 발볼은 좁은 편이라 한국 러너는 사이즈 주의.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">☁️</span>
  <div class="callout-body">
    <p class="callout-title">이 글의 역할 — 온(On) 계급도 한 장</p>
    <p>"클라우드몬스터, 클라우드서퍼, 클라우드붐에 하이퍼·맥스·라이트스프레이까지… 다 클라우드라 헷갈린다"는 분을 위한 지도입니다. 추천 순위가 아니라 <strong>라인과 수식어로 전체 라인업을 한 번에 이해</strong>시키는 글이에요. 가격은 한국 공식가, 무게는 RunRepeat 실측 기준이며 각 모델은 상세 페이지·개별 리뷰로 연결됩니다. <a href="/blog/adidas-running-shoes-lineup-tier-guide-2026">아디다스</a>·<a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a>·<a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카</a> 등 다른 브랜드 계급도와 함께 보면 비교가 쉽습니다.</p>
  </div>
</div>

<h2>1. 온 읽는 법 — 다 "클라우드~", 수식어가 등급</h2>

<p>온(On)은 스위스 브랜드로, <strong>모든 러닝화가 "클라우드(Cloud)"로 시작</strong>합니다. 그래서 더 헷갈리죠. 핵심은 라인 이름으로 용도를, 뒤에 붙는 수식어로 등급을 읽는 겁니다.</p>

<table>
  <thead>
    <tr><th>라인</th><th>용도</th><th>한 줄</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>클라우드러너 Cloudrunner</strong></td><td>입문·안정 데일리</td><td>"처음이면 클라우드러너" — 안정적</td></tr>
    <tr><td><strong>클라우드서퍼 Cloudsurfer</strong></td><td>부드러운 쿠션</td><td>CloudTec Phase의 세련된 전환</td></tr>
    <tr><td><strong>클라우드몬스터 Cloudmonster</strong></td><td>맥시멀 쿠션</td><td>"베스트셀러" — 큰 구름 포드</td></tr>
    <tr><td><strong>클라우드플로우 Cloudflow</strong></td><td>경량 스피드</td><td>Speedboard로 날카로운 전환</td></tr>
    <tr><td><strong>클라우드붐 Cloudboom</strong></td><td>카본 레이싱</td><td>대회용 슈퍼슈즈</td></tr>
  </tbody>
</table>

<p>그리고 수식어가 등급을 올립니다.</p>
<ul>
  <li><strong>"하이퍼(Hyper)" = Pebax(PEBA) 슈퍼트레이너</strong> — 가볍고 반발 좋은 무플레이트 버전(클라우드몬스터 하이퍼).</li>
  <li><strong>"맥스(Max)" = 맥시멀 스택</strong> — 더 두툼한 버전(클라우드서퍼 맥스).</li>
  <li><strong>"라이트스프레이(LightSpray)" = 로봇 분사 초경량 어퍼</strong> — 205g까지 줄인 최상위(클라우드몬스터 3 하이퍼 라이트스프레이).</li>
</ul>

<h2>2. CloudTec과 폼 — 구름 포드 + Helion</h2>

<p>온의 정체성은 밑창의 <strong>CloudTec(클라우드텍)</strong> — 구멍 뚫린 구름 포드가 착지를 흡수하고 발을 굴려줍니다. 여기에 <strong>Helion 슈퍼폼</strong>이 쿠션을, <strong>Speedboard</strong>가 추진을 담당해요.</p>

<table>
  <thead>
    <tr><th>기술</th><th>역할</th><th>들어가는 모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>CloudTec</strong></td><td>구름 포드 착지 쿠션</td><td>전 라인 공통</td></tr>
    <tr><td><strong>Helion</strong></td><td>기본 슈퍼폼</td><td>클라우드러너 · 클라우드서퍼 맥스</td></tr>
    <tr><td><strong>Helion HF (PEBA)</strong></td><td>경량·고반발 슈퍼폼</td><td>클라우드몬스터 · 하이퍼 · 클라우드붐</td></tr>
    <tr><td><strong>Speedboard</strong></td><td>미드솔 플레이트(추진)</td><td>클라우드플로우 · 클라우드붐(카본)</td></tr>
  </tbody>
</table>

<h2>3. 온 러닝화 계급도 — 11종 한눈에</h2>

<p>라인 × 수식어로 현재 한국에서 살 수 있는 온 러닝화 11종을 줄 세우면 이렇게 됩니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>라인·용도</th><th>폼</th><th>가격</th><th>무게</th><th>한 줄 성격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/on-cloudrunner-2"><strong>클라우드러너 2</strong></a></td><td>입문 데일리</td><td>Helion + CloudTec</td><td>18.9만</td><td>275g</td><td>힐 카운터 최강 안정 (단종)</td></tr>
    <tr><td><a href="/shoes/on-cloudsurfer-2"><strong>클라우드서퍼 2</strong></a></td><td>입문 쿠션</td><td>Helion HF + CloudTec Phase</td><td>19.9만</td><td>254g</td><td>세련된 전환, On 입문 첫 선택</td></tr>
    <tr><td><a href="/shoes/on-cloudrunner-3"><strong>클라우드러너 3</strong></a></td><td>안정화</td><td>Helion + CloudTec</td><td>19.9만</td><td>317g</td><td>힐 가이던스, 러닝+워킹 겸용</td></tr>
    <tr><td><a href="/shoes/on-cloudmonster-2"><strong>클라우드몬스터 2</strong></a></td><td>맥시멀 쿠션</td><td>Helion HF + CloudTec</td><td>21.9만</td><td>292g</td><td>더블 CloudTec 독특한 착지감</td></tr>
    <tr><td><a href="/shoes/on-cloudsurfer-max"><strong>클라우드서퍼 맥스</strong></a></td><td>맥시멀 쿠션</td><td>Helion + CloudTec Phase</td><td>21.9만</td><td>292g</td><td>안정적 CloudTec, 미드풋 친화</td></tr>
    <tr><td><a href="/shoes/on-cloudflow-5"><strong>클라우드플로우 5</strong></a></td><td>경량 스피드</td><td>Helion + Speedboard</td><td>21.9만</td><td>278g</td><td>Speedboard 스피드 훈련 전용</td></tr>
    <tr><td><a href="/shoes/on-cloudmonster-3"><strong>클라우드몬스터 3</strong></a></td><td>맥시멀 쿠션 신상</td><td>Helion HF + CloudTec</td><td>22.9만</td><td>295g</td><td>넓어진 핏·강한 록커, easy run</td></tr>
    <tr><td><a href="/shoes/on-cloudmonster-hyper"><strong>클라우드몬스터 하이퍼</strong></a></td><td>슈퍼트레이너</td><td>Helion HF (Pebax)</td><td>25.9만</td><td>258g</td><td>몬스터 2에서 34g 뺀 경량판</td></tr>
    <tr><td><a href="/shoes/on-cloudmonster-3-hyper"><strong>클라우드몬스터 3 하이퍼</strong></a></td><td>슈퍼트레이너 신상</td><td>Helion HF + Helion</td><td>25.9만</td><td>271g</td><td>무플레이트, 장거리·템포 균형</td></tr>
    <tr><td><a href="/shoes/on-cloudmonster-3-hyper-lightspray"><strong>몬스터 3 하이퍼 라이트스프레이</strong></a></td><td>초경량 슈퍼트레이너</td><td>Helion HF + Helion 이중밀도</td><td>31.9만</td><td>205g</td><td>로봇이 만든 어퍼, 205g 초경량</td></tr>
    <tr><td><a href="/shoes/on-cloudboom-strike"><strong>클라우드붐 스트라이크</strong></a></td><td>카본 레이싱</td><td>Helion HF + 카본</td><td>32.9만</td><td>201g</td><td>72% 리턴, 사계절 슈퍼슈즈</td></tr>
  </tbody>
</table>

<p>※ 무게는 남성 US 9 기준, 가격은 한국 공식가입니다. 클라우드러너 2는 단종됐으나 참고용으로 포함했습니다. 스택·드롭 상세는 각 모델 상세 페이지에 있습니다.</p>

<h2>4. 목적별로 — 나는 뭘 사야 할까</h2>

<ul>
  <li><strong>🟢 첫 온·부드러운 쿠션</strong> → <a href="/shoes/on-cloudsurfer-2">클라우드서퍼 2</a>. CloudTec Phase의 세련된 전환감, 입문 첫 선택. <a href="/blog/on-cloudsurfer-2-review-2026">클라우드서퍼 2 리뷰</a> 참고.</li>
  <li><strong>☁️ 맥시멀 쿠션·회복런</strong> → <a href="/shoes/on-cloudmonster-3">클라우드몬스터 3</a>. 베스트셀러, 넓어진 핏. <a href="/blog/on-cloudmonster-3-review-2026">몬스터 3 리뷰</a>·<a href="/blog/on-cloudmonster-2-vs-3-comparison">몬스터 2 vs 3</a>에서 차이를 확인하세요.</li>
  <li><strong>🦶 안정·워킹 겸용</strong> → <a href="/shoes/on-cloudrunner-3">클라우드러너 3</a>. 힐 가이던스 안정화(강한 교정은 아님). <a href="/blog/on-cloudrunner-3-review-2026">클라우드러너 3 리뷰</a>·다른 브랜드 안정화는 <a href="/blog/stability-shoes-self-diagnosis-fit-guide-2026">안정화 자가진단</a>에.</li>
  <li><strong>⚡ 카본 없이 빠른 훈련</strong> → <a href="/shoes/on-cloudmonster-3-hyper">클라우드몬스터 3 하이퍼</a>. 무플레이트 슈퍼트레이너. <a href="/blog/on-cloudmonster-3-hyper-review-2026">하이퍼 리뷰</a> 참고.</li>
  <li><strong>🪶 가벼운 게 최우선</strong> → <a href="/shoes/on-cloudmonster-3-hyper-lightspray">라이트스프레이</a>(205g). 로봇 어퍼의 최상위. <a href="/blog/on-lightspray-cloudmonster-3-hyper-review-2026">라이트스프레이 리뷰</a>에.</li>
  <li><strong>🏅 풀마라톤 레이스</strong> → <a href="/shoes/on-cloudboom-strike">클라우드붐 스트라이크</a>(201g 카본). 겨울에도 경화가 적어 사계절 레이싱.</li>
</ul>

<h2>5. 클라우드몬스터 5형제 — 베스트셀러의 변형들</h2>

<p>온 라인업이 헷갈리는 가장 큰 이유가 <strong>베스트셀러 클라우드몬스터의 변형이 많아서</strong>입니다. 같은 몬스터인데 세대와 수식어로 다섯 갈래로 갈려요.</p>

<table>
  <thead>
    <tr><th>모델</th><th>성격</th><th>무게</th><th>가격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/on-cloudmonster-2">클라우드몬스터 2</a></td><td>구형 맥시멀(토박스 좁음)</td><td>292g</td><td>21.9만</td></tr>
    <tr><td><a href="/shoes/on-cloudmonster-3">클라우드몬스터 3</a></td><td>신형, 넓어진 핏·강한 록커</td><td>295g</td><td>22.9만</td></tr>
    <tr><td><a href="/shoes/on-cloudmonster-hyper">클라우드몬스터 하이퍼</a></td><td>PEBA 경량 슈퍼트레이너</td><td>258g</td><td>25.9만</td></tr>
    <tr><td><a href="/shoes/on-cloudmonster-3-hyper">클라우드몬스터 3 하이퍼</a></td><td>신형 무플레이트 슈퍼트레이너</td><td>271g</td><td>25.9만</td></tr>
    <tr><td><a href="/shoes/on-cloudmonster-3-hyper-lightspray">3 하이퍼 라이트스프레이</a></td><td>로봇 어퍼 초경량 최상위</td><td>205g</td><td>31.9만</td></tr>
  </tbody>
</table>

<p>정리하면 — <strong>푹신한 데일리·회복런이면 일반 몬스터(2·3), 가볍게 빠른 훈련이면 하이퍼, 무게가 최우선이면 라이트스프레이</strong>입니다. 일반 vs 하이퍼의 결은 <a href="/blog/on-cloudmonster-3-hyper-review-2026">하이퍼 리뷰</a>에서 다룹니다.</p>

<h2>6. 발볼 — 온은 좁은 편, 한국 러너 주의</h2>

<p>온의 약점은 <strong>좁은 토박스</strong>입니다. 와이드 옵션도 거의 없어 발볼 넓은 한국 러너는 주의해야 해요. 3세대에서 핏이 다소 넓어졌지만 여전히 넉넉하다고 보긴 어렵습니다.</p>

<ul>
  <li><strong>그나마 넓어진 쪽</strong>: 클라우드몬스터 3(넓어진 핏), 클라우드서퍼 계열.</li>
  <li><strong>좁은 편(주의)</strong>: 클라우드몬스터 2, 레이싱·하이퍼 라인.</li>
</ul>

<p>발볼이 많이 넓다면 반 치수 크게 신거나, 토박스가 넉넉한 <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a>·<a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a>를 함께 보세요. 발볼별 선택은 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너를 위한 러닝화</a>에 정리돼 있습니다.</p>

<h2>한 걸음 더</h2>

<ul>
  <li>☁️ 온 브랜드 전체 신발 보기 → <a href="/brands/on">온(On) 브랜드 페이지</a></li>
  <li>🏁 레이싱 카본화 베스트 → <a href="/best/racing">레이싱 러닝화 추천</a></li>
  <li>🟦 다른 브랜드 계급도 → <a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> · <a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a> · <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a> · <a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카</a> · <a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a> · <a href="/blog/adidas-running-shoes-lineup-tier-guide-2026">아디다스</a> · <a href="/blog/puma-running-shoes-lineup-tier-guide-2026">푸마</a> · <a href="/blog/mizuno-running-shoes-lineup-tier-guide-2026">미즈노</a> · <a href="/blog/saucony-running-shoes-lineup-tier-guide-2026">사코니</a> · <a href="/blog/li-ning-red-hare-9-lineup-2026">라이닝</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 한국 공식 판매 모델과 RunRepeat 실측·On 공식 자료를 토대로 작성했습니다. 라인업·가격·발볼 옵션은 시즌마다 바뀔 수 있으니 구매 전 각 모델 상세 페이지와 공식몰에서 최신 정보를 확인하세요.</p>
`,
  },
  {
    id: 'adidas-running-shoes-lineup-tier-guide-2026',
    slug: 'adidas-running-shoes-lineup-tier-guide-2026',
    title: '아디다스 러닝화 계급도 2026 — 아디제로·슈퍼노바·보스턴, 스피드 사다리와 EnergyRods로 읽는 전체 라인업 | 입문부터 카본 레이싱까지 한 장 정리',
    description:
      '아디다스 러닝화 8종을 아디제로 스피드 사다리(SL2→보스턴→Evo SL→아디오스 프로)와 데일리(슈퍼노바)·트레일(테렉스)로 한 장에. 슈퍼노바 14.9만부터 아디오스 프로 29.9만까지 가격·무게·폼 비교표 + EnergyRods(카본 막대)가 뭔지 + Evo SL이 카본 없이 빠른 이유 + Boost가 사라진 자리까지 정리했습니다.',
    thumbnail: '/images/blog/adidas-lineup-tier-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 12,
    tags: ['아디다스 러닝화', '아디다스 계급도', '러닝화 라인업', '러닝화 등급', '아디제로', '아디오스 프로', '슈퍼노바', '보스턴', 'EnergyRods', 'Lightstrike'],
    faqs: [
      { question: '아디다스 "아디제로(Adizero)"는 무슨 뜻인가요?', answer: '아디제로는 아디다스의 스피드·레이싱 서브브랜드입니다. 이름에 아디제로가 붙으면 빠르게 달리기 위한 신발이에요. 입문 SL2부터 보스턴(슈퍼트레이너), Evo SL(카본 없는 슈퍼폼), 아디오스 프로(카본 레이싱), 그리고 97g 서브2 신발 아디오스 프로 에보까지 하나의 스피드 사다리를 이룹니다.' },
      { question: 'EnergyRods(에너지로드)가 뭔가요?', answer: '아디다스만의 추진 기술로, 통짜 카본 플레이트 대신 발가락뼈를 본뜬 카본 막대를 넣은 구조입니다. 아디오스 프로는 5개, 보스턴은 2.0 버전을 씁니다. 통판 플레이트보다 발의 자연스러운 굽힘을 살리면서 추진력을 더하는 게 특징입니다.' },
      { question: '아디제로 Evo SL은 왜 카본도 없는데 빠른가요?', answer: '레이싱화 아디오스 프로에 쓰는 고급 폼(100% Lightstrike Pro)을 카본 플레이트·로드 없이 통째로 넣었기 때문입니다. 223g 경량에 83% 에너지 리턴으로, 20만원대에 슈퍼슈즈에 가까운 반발을 줍니다. 카본의 부담 없이 빠른 훈련을 원하는 러너에게 가성비 끝판왕으로 꼽힙니다.' },
      { question: '아디다스 Boost(부스트)는 어디 갔나요?', answer: '러닝 퍼포먼스 라인에서는 사실상 세대교체됐습니다. 지금 아디다스 러닝화는 데일리에 Dreamstrike+, 레이싱에 Lightstrike Pro를 씁니다. Boost는 이제 울트라부스트 같은 라이프스타일·캐주얼 쪽에 주로 남아 있어요.' },
      { question: '아디다스는 발볼 넓은 한국 러너에게 맞나요?', answer: '아디다스는 토박스가 좁은 편이라 발볼 넓으면 주의가 필요합니다. 다만 슈퍼노바 라이즈 2와 아디제로 SL2는 와이드 옵션이 있어 그나마 낫습니다. 아디오스 프로·아그라빅 같은 레이싱·트레일은 좁으니 발볼 넓으면 반 치수 크게 신거나 다른 브랜드를 함께 보세요.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>아디다스는 "아디제로"가 핵심</strong> — 이름에 아디제로가 붙으면 스피드·레이싱 라인입니다. 데일리는 슈퍼노바 하나뿐이고, 나머지는 거의 아디제로예요.</li>
    <li><strong>EnergyRods = 카본 막대</strong> — 통짜 플레이트 대신 발가락뼈를 본뜬 카본 막대로 추진합니다(아디오스 프로 5개, 보스턴 2.0).</li>
    <li><strong>Boost는 퇴장, Lightstrike 시대</strong> — 퍼포먼스 폼은 Dreamstrike+(데일리)·Lightstrike Pro(레이싱)로 세대교체됐습니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🔺</span>
  <div class="callout-body">
    <p class="callout-title">이 글의 역할 — 아디다스 계급도 한 장</p>
    <p>"아디제로에 SL, 보스턴, Evo, 아디오스 프로… 같은 아디제로인데 뭐가 다른지 모르겠다"는 분을 위한 지도입니다. 추천 순위가 아니라 <strong>라인과 폼으로 전체 라인업을 한 번에 이해</strong>시키는 글이에요. 가격은 한국 공식가, 무게는 RunRepeat 실측 기준이며 각 모델은 상세 페이지로 연결됩니다. <a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a>·<a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카</a>·<a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a>·<a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a>·<a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> 계급도와 함께 보면 브랜드 비교가 쉽습니다.</p>
  </div>
</div>

<h2>1. 아디다스 읽는 법 — 아디제로(스피드) vs 슈퍼노바(데일리)</h2>

<p>아디다스 러닝화를 이해하는 열쇠는 단어 하나, <strong>아디제로(Adizero)</strong>입니다. 아디제로가 붙으면 <strong>빠르게 달리기 위한 스피드 라인</strong>이에요. 아디다스는 다른 브랜드와 달리 데일리보다 레이싱(아디제로)에 무게를 둡니다.</p>

<table>
  <thead>
    <tr><th>라인</th><th>용도</th><th>한 줄</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>슈퍼노바 Supernova</strong></td><td>데일리 쿠션</td><td>"매일 편하게" — 사실상 유일한 순수 데일리</td></tr>
    <tr><td><strong>아디제로 Adizero</strong></td><td>스피드·레이싱</td><td>SL2 → 보스턴 → Evo SL → 아디오스 프로</td></tr>
    <tr><td><strong>테렉스 Terrex</strong></td><td>트레일</td><td>아그라빅 — Continental 그립</td></tr>
  </tbody>
</table>

<p>그리고 아디다스만의 추진 기술이 <strong>EnergyRods(에너지로드)</strong>입니다. 다른 브랜드가 통짜 카본 플레이트를 넣을 때, 아디다스는 <strong>발가락뼈를 본뜬 카본 막대</strong>를 넣어요(아디오스 프로 5개, 보스턴 2.0). 발의 자연스러운 굽힘을 살리면서 추진력을 더하는 방식입니다.</p>

<h2>2. 폼이 등급을 만든다 — Lightstrike → Dreamstrike+ → Lightstrike Pro</h2>

<p>아디다스 폼은 데일리와 레이싱이 확실히 갈립니다. 한때 상징이던 Boost는 러닝 퍼포먼스에서 물러나고, 지금은 Lightstrike 계열이 중심이에요.</p>

<table>
  <thead>
    <tr><th>폼</th><th>성격</th><th>들어가는 모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Lightstrike (EVA)</strong></td><td>기본 트레일·쿠션</td><td>테렉스 아그라빅</td></tr>
    <tr><td><strong>Dreamstrike+</strong></td><td>데일리 슈퍼크리티컬</td><td>슈퍼노바 라이즈</td></tr>
    <tr><td><strong>Lightstrike Pro (PEBA급)</strong></td><td>레이싱 최상위 반발</td><td>SL2 · 보스턴 · Evo SL · 아디오스 프로</td></tr>
    <tr><td><strong>+ EnergyRods (카본 막대)</strong></td><td>추진력 강화</td><td>보스턴(2.0) · 아디오스 프로(5개)</td></tr>
  </tbody>
</table>

<p>핵심은 <strong>Lightstrike Pro가 아디다스 최상위 레이싱 폼</strong>이라는 점입니다. 재밌는 건 <a href="/shoes/adidas-adizero-evo-sl">Evo SL</a>이 이 Lightstrike Pro를 <strong>카본·로드 없이 100%</strong> 넣어 20만원대에 슈퍼슈즈급 반발을 낸다는 거예요(아래 5번).</p>

<h2>3. 아디다스 러닝화 계급도 — 8종 한눈에</h2>

<p>라인 × 폼으로 현재 한국에서 살 수 있는 아디다스 러닝화 8종을 줄 세우면 이렇게 됩니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>라인·용도</th><th>폼</th><th>가격</th><th>무게</th><th>한 줄 성격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/adidas-supernova-rise-2"><strong>슈퍼노바 라이즈 2</strong></a></td><td>입문 데일리</td><td>Dreamstrike+</td><td>14.9만</td><td>257g</td><td>와이드 옵션, 힐스트라이커 친화</td></tr>
    <tr><td><a href="/shoes/adidas-adizero-sl2"><strong>아디제로 SL2</strong></a></td><td>가성비 트레이닝</td><td>Lightstrike 듀얼</td><td>14.9만</td><td>245g</td><td>경량 멀티 트레이너, 아디제로 입문</td></tr>
    <tr><td><a href="/shoes/adidas-supernova-rise-3"><strong>슈퍼노바 라이즈 3</strong></a></td><td>데일리 쿠션</td><td>Dreamstrike+ (20%↑)</td><td>15.9만</td><td>270g</td><td>37mm 스택, 쿠션 중심 데일리</td></tr>
    <tr><td><a href="/shoes/adidas-boston-13"><strong>보스턴 13</strong></a></td><td>슈퍼트레이너</td><td>Lightstrike Pro + 로드 2.0</td><td>17.9만</td><td>254g</td><td>Energy Rods, 훈련+레이스 겸용</td></tr>
    <tr><td><a href="/shoes/adidas-terrex-agravic-4"><strong>테렉스 아그라빅 4</strong></a></td><td>올라운드 트레일</td><td>Lightstrike (EVA)</td><td>20.9만</td><td>283g</td><td>Continental 그립 1순위</td></tr>
    <tr><td><a href="/shoes/adidas-adizero-evo-sl"><strong>아디제로 Evo SL</strong></a></td><td>카본 없는 슈퍼폼</td><td>100% Lightstrike Pro</td><td>20.9만</td><td>223g</td><td>83% 에너지, 가성비 끝판왕</td></tr>
    <tr><td><a href="/shoes/adidas-terrex-agravic-speed-ultra"><strong>아그라빅 스피드 울트라 2</strong></a></td><td>트레일 레이싱</td><td>Lightstrike Pro</td><td>27.9만</td><td>265g</td><td>2세대 트레일 슈퍼슈즈</td></tr>
    <tr><td><a href="/shoes/adidas-adios-pro-4"><strong>아디오스 프로 4</strong></a></td><td>카본 레이싱</td><td>Lightstrike Pro + 5 로드</td><td>29.9만</td><td>200g</td><td>알파플라이보다 안정적인 서브3</td></tr>
  </tbody>
</table>

<p>※ 무게는 남성 US 9 기준, 가격은 한국 공식가입니다. 더 위에는 97g 서브2 신발 <a href="/blog/2026-adidas-adios-pro-evo-3-korea-release">아디오스 프로 에보 3</a>가 있지만, 한국 래플 한정으로 일반 판매 라인업과 별개입니다.</p>

<h2>4. 목적별로 — 나는 뭘 사야 할까</h2>

<ul>
  <li><strong>🟢 매일 편한 데일리</strong> → <a href="/shoes/adidas-supernova-rise-3">슈퍼노바 라이즈 3</a>(쿠션) 또는 와이드 되는 <a href="/shoes/adidas-supernova-rise-2">라이즈 2</a>. 세대 차이는 <a href="/blog/adidas-supernova-rise-2-vs-3-comparison">슈퍼노바 라이즈 2 vs 3</a>에.</li>
  <li><strong>💰 가성비 멀티 트레이너</strong> → <a href="/shoes/adidas-adizero-sl2">아디제로 SL2</a>(14.9만). 데일리부터 가벼운 템포까지.</li>
  <li><strong>⚡ 카본 없이 빠른 훈련</strong> → <a href="/shoes/adidas-adizero-evo-sl">아디제로 Evo SL</a>. 223g에 슈퍼폼, 가성비 슈퍼슈즈로 화제작입니다. 자세한 분석은 <a href="/blog/adidas-adizero-evo-sl-value-supershoe-2026">Evo SL 리뷰</a>에.</li>
  <li><strong>🏃 훈련+레이스 겸용 카본</strong> → <a href="/shoes/adidas-boston-13">보스턴 13</a>. Energy Rods 2.0으로 템포·하프에.</li>
  <li><strong>🏅 풀마라톤 레이스</strong> → <a href="/shoes/adidas-adios-pro-4">아디오스 프로 4</a>(200g). 5개 Energy Rods로 알파플라이보다 안정적인 서브3 무기.</li>
  <li><strong>⛰️ 트레일</strong> → 올라운드 <a href="/shoes/adidas-terrex-agravic-4">아그라빅 4</a>(Continental 그립) 또는 레이싱 <a href="/shoes/adidas-terrex-agravic-speed-ultra">아그라빅 스피드 울트라 2</a>.</li>
</ul>

<h2>5. 아디제로 스피드 사다리 — SL2에서 아디오스 프로까지</h2>

<p>아디다스 라인업의 진짜 핵심은 <strong>아디제로 안에서의 단계</strong>입니다. 같은 아디제로라도 폼·플레이트·가격이 사다리처럼 올라가요.</p>

<table>
  <thead>
    <tr><th>단계</th><th>모델</th><th>핵심</th></tr>
  </thead>
  <tbody>
    <tr><td>① 입문 트레이닝</td><td><a href="/shoes/adidas-adizero-sl2">아디제로 SL2</a></td><td>Lightstrike 듀얼폼, 데일리+템포</td></tr>
    <tr><td>② 슈퍼트레이너</td><td><a href="/shoes/adidas-boston-13">보스턴 13</a></td><td>Energy Rods 2.0, 훈련+레이스</td></tr>
    <tr><td>③ 카본 없는 슈퍼폼</td><td><a href="/shoes/adidas-adizero-evo-sl">Evo SL</a></td><td>100% Lightstrike Pro, 가성비</td></tr>
    <tr><td>④ 카본 레이싱</td><td><a href="/shoes/adidas-adios-pro-4">아디오스 프로 4</a></td><td>5개 Energy Rods, 서브3</td></tr>
    <tr><td>⑤ 서브2 (한정)</td><td><a href="/blog/2026-adidas-adios-pro-evo-3-korea-release">아디오스 프로 에보 3</a></td><td>97g, 래플 한정</td></tr>
  </tbody>
</table>

<p>즉 <strong>데일리는 슈퍼노바, 빠르게는 아디제로 사다리를 올라가면</strong> 됩니다. 입문은 SL2, 대회는 아디오스 프로, 그 사이를 보스턴·Evo SL이 채웁니다.</p>

<h2>6. 발볼 — 아디다스는 좁은 편, 한국 러너 주의</h2>

<p>아디다스는 나이키처럼 <strong>토박스가 좁은 편</strong>이라 발볼 넓은 한국 러너는 확인이 필요합니다.</p>

<table>
  <thead>
    <tr><th>발볼</th><th>모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>와이드 옵션 (그나마 낫다)</strong></td><td>슈퍼노바 라이즈 2 · 아디제로 SL2</td></tr>
    <tr><td><strong>표준</strong></td><td>슈퍼노바 라이즈 3 · 보스턴 13 · Evo SL · 아그라빅 4</td></tr>
    <tr><td><strong>좁음 (주의)</strong></td><td>아디오스 프로 4 · 아그라빅 스피드 울트라</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">📏</span>
  <div class="callout-body">
    <p class="callout-title">발볼 넓으면 슈퍼노바 2·SL2부터</p>
    <p>아디다스에서 발볼이 걱정이라면 와이드가 나오는 <strong>슈퍼노바 라이즈 2·아디제로 SL2</strong>가 무난합니다. 레이싱(아디오스 프로)은 좁으니 발볼 넓으면 토박스 넉넉한 <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a>·<a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a>를 함께 보세요. 발볼별 선택은 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너를 위한 러닝화</a>에 정리돼 있습니다.</p>
  </div>
</div>

<h2>한 걸음 더</h2>

<ul>
  <li>🔺 아디다스 브랜드 전체 신발 보기 → <a href="/brands/adidas">아디다스 브랜드 페이지</a></li>
  <li>🏁 레이싱 카본화 베스트 → <a href="/best/racing">레이싱 러닝화 추천</a></li>
  <li>🟦 다른 브랜드 계급도 → <a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> · <a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a> · <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a> · <a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카</a> · <a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a> · <a href="/blog/on-running-shoes-lineup-tier-guide-2026">온</a> · <a href="/blog/puma-running-shoes-lineup-tier-guide-2026">푸마</a> · <a href="/blog/mizuno-running-shoes-lineup-tier-guide-2026">미즈노</a> · <a href="/blog/saucony-running-shoes-lineup-tier-guide-2026">사코니</a> · <a href="/blog/li-ning-red-hare-9-lineup-2026">라이닝</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 한국 공식 판매 모델과 RunRepeat 실측·아디다스 공식 자료를 토대로 작성했습니다. 라인업·가격·발볼 옵션은 시즌마다 바뀔 수 있으니 구매 전 각 모델 상세 페이지와 공식몰에서 최신 정보를 확인하세요.</p>
`,
  },
  {
    id: 'brooks-running-shoes-lineup-tier-guide-2026',
    slug: 'brooks-running-shoes-lineup-tier-guide-2026',
    title: '브룩스 러닝화 계급도 2026 — 고스트·글리세린·아드레날린, GTS와 DNA폼으로 읽는 전체 라인업 | 입문부터 카본 레이싱까지 한 장 정리',
    description:
      '브룩스 러닝화 9종을 라인(고스트 데일리·글리세린 쿠션·아드레날린 GTS 안정화·하이페리온 레이싱)과 DNA 폼 등급으로 한 장에. 고스트 16.9만부터 하이페리온 엘리트 29.9만까지 가격·무게·폼 비교표 + "GTS=GuideRails 안정화" 신호 + "맥스" 접미사 + 안정화 명가 브룩스의 아드레날린 vs 글리세린 GTS까지 정리했습니다.',
    thumbnail: '/images/blog/brooks-lineup-tier-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 12,
    tags: ['브룩스 러닝화', '브룩스 계급도', '러닝화 라인업', '러닝화 등급', '고스트', '글리세린', '아드레날린 GTS', 'GuideRails', 'DNA Loft', '안정화'],
    faqs: [
      { question: '브룩스 "GTS"는 무슨 뜻인가요?', answer: 'GTS는 "Go-To-Support"의 약자로, 브룩스의 GuideRails 안정화 기술이 들어갔다는 신호입니다. 같은 모델에도 일반 버전과 GTS 버전이 따로 있어요 — 예를 들어 글리세린 22(중립)와 글리세린 GTS 22(안정화)입니다. 평발·과내전이면 GTS가 붙은 모델을 보세요.' },
      { question: '고스트랑 글리세린은 뭐가 다른가요?', answer: '고스트는 만능 데일리(DNA Loft v3, 16.9만), 글리세린은 프리미엄 쿠션(DNA Tuned, 20.9만)입니다. 매일 부담 없이 다양하게 쓸 거면 고스트, 더 푹신하고 고급스러운 쿠션을 원하면 글리세린입니다. 둘 다 "맥스" 버전(고스트 맥스·글리세린 맥스)이 있는데, 스택을 키운 맥시멀 쿠션입니다.' },
      { question: '브룩스 안정화는 아드레날린이랑 글리세린 GTS 중 뭘 사야 하나요?', answer: '아드레날린 GTS 25(18.9만)는 가성비 안정화로 과내전 입문자의 정답, 글리세린 GTS 22(20.9만)는 글리세린의 프리미엄 쿠션에 GuideRails를 더한 상위 버전입니다. 처음 안정화면 아드레날린, 쿠션까지 욕심나면 글리세린 GTS입니다. 둘 다 카야노보다 저렴합니다.' },
      { question: 'GuideRails 안정화는 다른 안정화랑 어떻게 다른가요?', answer: '대부분의 안정화가 발 안쪽을 단단한 판으로 받친다면, GuideRails는 양옆에 가드레일을 두고 무릎의 과도한 움직임을 제한하는 방식입니다. 발이 아니라 무릎 정렬을 잡아주는 셈이라 과교정 느낌이 적고 자연스럽습니다. 그래서 "안정화는 딱딱하다"는 분께 잘 맞습니다.' },
      { question: '브룩스는 발볼 넓은 한국 러너에게 맞나요?', answer: '잘 맞습니다. 브룩스는 토박스가 넉넉한 편이고 와이드 옵션도 풍부합니다. 특히 고스트 맥스·글리세린 맥스는 기본 토박스가 넓어요. 다만 하이페리온 엘리트 같은 카본 레이싱은 좁으니 주의하세요.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>브룩스는 "부드러움 + 안정화 명가"</strong> — 레이싱보다 부상 없는 데일리·안정화가 강점입니다. GuideRails 안정화는 발이 아니라 무릎을 잡는 독특한 방식이에요.</li>
    <li><strong>접미사가 신호입니다</strong> — <strong>"GTS"=GuideRails 안정화</strong>(아드레날린 GTS·글리세린 GTS), <strong>"맥스"=스택 키운 맥시멀</strong>(고스트 맥스·글리세린 맥스).</li>
    <li><strong>라인이 곧 용도</strong> — 고스트(만능 데일리)·글리세린(프리미엄 쿠션)·아드레날린(안정화)·하이페리온(레이싱).</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🔻</span>
  <div class="callout-body">
    <p class="callout-title">이 글의 역할 — 브룩스 계급도 한 장</p>
    <p>"고스트, 글리세린, 아드레날린에 GTS랑 맥스까지 붙으니 헷갈린다"는 분을 위한 지도입니다. 추천 순위가 아니라 <strong>라인과 폼으로 전체 라인업을 한 번에 이해</strong>시키는 글이에요. 가격은 한국 공식가, 무게는 RunRepeat 실측 기준이며 각 모델은 상세 페이지로 연결됩니다. <a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카</a>·<a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a>·<a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a>·<a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> 계급도와 함께 보면 브랜드 비교가 쉽습니다.</p>
  </div>
</div>

<h2>1. 브룩스 읽는 법 — 라인 + "GTS" + "맥스"</h2>

<p>브룩스는 화려한 레이싱보다 <strong>"부상 없이 부드럽게"</strong>가 정체성입니다. 그래서 데일리와 안정화가 특히 강해요. 라인 이름으로 용도를, 두 접미사로 변형을 읽으면 됩니다.</p>

<table>
  <thead>
    <tr><th>라인</th><th>용도</th><th>한 줄</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>고스트 Ghost</strong></td><td>만능 데일리</td><td>"처음이면 고스트" — 부드러운 베스트셀러</td></tr>
    <tr><td><strong>글리세린 Glycerin</strong></td><td>프리미엄 쿠션</td><td>"고급 푹신함" — 체중별 반응</td></tr>
    <tr><td><strong>아드레날린 Adrenaline</strong></td><td>안정화</td><td>"과내전 입문 정답" — 카야노 절반 가격</td></tr>
    <tr><td><strong>하이페리온 Hyperion</strong></td><td>스피드·레이싱</td><td>맥스=슈퍼트레이너 / 엘리트=카본</td></tr>
  </tbody>
</table>

<p>그리고 두 접미사가 핵심 신호입니다.</p>
<ul>
  <li><strong>"GTS" = GuideRails 안정화</strong>(Go-To-Support). 같은 모델에도 중립 버전과 GTS 버전이 따로 있습니다 — 글리세린 22(중립) vs 글리세린 GTS 22(안정화).</li>
  <li><strong>"맥스(Max)" = 스택을 키운 맥시멀 쿠션</strong> 버전 — 고스트 맥스, 글리세린 맥스.</li>
</ul>

<h2>2. DNA 폼이 등급을 만든다 — Loft v3 → Tuned → Gold</h2>

<p>브룩스 폼은 전부 "DNA" 패밀리입니다. 데일리는 DNA Loft, 프리미엄 쿠션은 DNA Tuned, 레이싱은 DNA Gold(PEBA)예요.</p>

<table>
  <thead>
    <tr><th>폼</th><th>성격</th><th>들어가는 모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>DNA Loft v3</strong></td><td>부드러운 데일리</td><td>고스트 · 고스트 맥스 · 아드레날린</td></tr>
    <tr><td><strong>DNA Tuned</strong></td><td>체중별 반응 프리미엄</td><td>글리세린 · 글리세린 맥스 · 글리세린 GTS</td></tr>
    <tr><td><strong>DNA Gold (PEBA)</strong></td><td>레이싱 최상위 반발</td><td>하이페리온 엘리트 · 하이페리온 맥스</td></tr>
    <tr><td><strong>+ GuideRails</strong></td><td>무릎 정렬 안정화</td><td>아드레날린 GTS · 글리세린 GTS</td></tr>
    <tr><td><strong>+ 카본 플레이트</strong></td><td>레이싱 추진</td><td>하이페리온 엘리트</td></tr>
  </tbody>
</table>

<h2>3. 브룩스 러닝화 계급도 — 9종 한눈에</h2>

<p>라인 × 폼으로 현재 한국에서 살 수 있는 브룩스 러닝화 9종을 줄 세우면 이렇게 됩니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>라인·용도</th><th>폼</th><th>가격</th><th>무게</th><th>한 줄 성격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/brooks-ghost-17"><strong>고스트 17</strong></a></td><td>입문·만능 데일리</td><td>DNA Loft v3</td><td>16.9만</td><td>289g</td><td>800km 내구성, 검증된 안전패</td></tr>
    <tr><td><a href="/shoes/brooks-ghost-max-3"><strong>고스트 맥스 3</strong></a></td><td>맥스 쿠션 데일리</td><td>DNA Loft v3</td><td>17.9만</td><td>303g</td><td>119mm 광폭, 관절 보호 가성비</td></tr>
    <tr><td><a href="/shoes/brooks-adrenaline-gts-25"><strong>아드레날린 GTS 25</strong></a></td><td>안정화</td><td>DNA Loft v3 + GuideRails</td><td>18.9만</td><td>300g</td><td>과내전 입문 정답, 카야노 절반가</td></tr>
    <tr><td><a href="/shoes/brooks-glycerin-22"><strong>글리세린 22</strong></a></td><td>프리미엄 쿠션</td><td>DNA Tuned</td><td>20.9만</td><td>293g</td><td>체중별 반응하는 고급 쿠션</td></tr>
    <tr><td><a href="/shoes/brooks-glycerin-gts-22"><strong>글리세린 GTS 22</strong></a></td><td>프리미엄 안정화</td><td>DNA Tuned + GuideRails</td><td>20.9만</td><td>305g</td><td>글리세린 쿠션 + 안정화</td></tr>
    <tr><td><a href="/shoes/brooks-hyperion-max-3"><strong>하이페리온 맥스 3</strong></a></td><td>슈퍼트레이너</td><td>DNA Gold (PEBA) + Flash</td><td>21.9만</td><td>283g</td><td>PEBA 첫 진성 슈퍼트레이너</td></tr>
    <tr><td><a href="/shoes/brooks-glycerin-max"><strong>글리세린 맥스</strong></a></td><td>맥시멀 쿠션</td><td>DNA Tuned</td><td>23.9만</td><td>305g</td><td>42mm·148 SA 역대 최강 충격흡수</td></tr>
    <tr><td><a href="/shoes/brooks-glycerin-max-2"><strong>글리세린 맥스 2</strong></a></td><td>맥시멀 쿠션 신상</td><td>DNA Tuned</td><td>24.9만</td><td>312g</td><td>47mm 극강 맥시멀</td></tr>
    <tr><td><a href="/shoes/brooks-hyperion-elite-5"><strong>하이페리온 엘리트 5</strong></a></td><td>카본 레이싱</td><td>DNA Gold (PEBA) + 카본</td><td>29.9만</td><td>204g</td><td>76.9% 에너지, 슈퍼슈즈</td></tr>
  </tbody>
</table>

<p>※ 무게는 남성 US 9 기준, 가격은 한국 공식가입니다. 스택·드롭·발볼 상세는 각 모델 상세 페이지에 있습니다.</p>

<h2>4. 목적별로 — 나는 뭘 사야 할까</h2>

<ul>
  <li><strong>🟢 첫 브룩스·만능 데일리</strong> → <a href="/shoes/brooks-ghost-17">고스트 17</a>. 부드러운 DNA Loft v3에 800km 내구성, 브룩스의 기준점입니다.</li>
  <li><strong>☁️ 관절 보호·맥스 쿠션</strong> → <a href="/shoes/brooks-ghost-max-3">고스트 맥스 3</a>(가성비) 또는 47mm <a href="/shoes/brooks-glycerin-max-2">글리세린 맥스 2</a>(끝판). 글리세린 맥스 세대 차이는 <a href="/blog/brooks-glycerin-max-1-vs-2-comparison">글리세린 맥스 vs 맥스 2</a>에.</li>
  <li><strong>🛋️ 고급 푹신한 쿠션</strong> → <a href="/shoes/brooks-glycerin-22">글리세린 22</a>. 체중별로 반응하는 DNA Tuned.</li>
  <li><strong>🦶 평발·안정(가성비)</strong> → <a href="/shoes/brooks-adrenaline-gts-25">아드레날린 GTS 25</a>. 쿠션까지 원하면 <a href="/shoes/brooks-glycerin-gts-22">글리세린 GTS 22</a>(아래 5번 참고). 다른 브랜드 안정화 비교는 <a href="/blog/stability-shoes-self-diagnosis-fit-guide-2026">안정화 자가진단 가이드</a>에.</li>
  <li><strong>⚡ 빠른 훈련</strong> → <a href="/shoes/brooks-hyperion-max-3">하이페리온 맥스 3</a>. PEBA 슈퍼트레이너로 템포·인터벌에.</li>
  <li><strong>🏅 풀마라톤 레이스</strong> → <a href="/shoes/brooks-hyperion-elite-5">하이페리온 엘리트 5</a>(204g 카본).</li>
</ul>

<h2>5. 브룩스 안정화 — GuideRails 명가</h2>

<p>브룩스는 <strong>안정화의 명가</strong>입니다. 아드레날린 GTS는 전 세계 안정화 추천에서 카야노와 함께 1·2위로 가장 자주 꼽히죠. 브룩스 안정화의 핵심은 <strong>GuideRails</strong> — 발 안쪽을 단단하게 받치는 대신, <strong>양옆 가드레일로 무릎의 과도한 움직임을 잡는</strong> 방식입니다. 그래서 과교정 느낌이 적고 자연스러워요.</p>

<table>
  <thead>
    <tr><th>모델</th><th>성격</th><th>가격</th><th>이런 분께</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/brooks-adrenaline-gts-25"><strong>아드레날린 GTS 25</strong></a></td><td>가성비 안정화</td><td>18.9만</td><td>과내전 입문, 카야노가 부담스러운 분</td></tr>
    <tr><td><a href="/shoes/brooks-glycerin-gts-22"><strong>글리세린 GTS 22</strong></a></td><td>프리미엄 안정화</td><td>20.9만</td><td>안정화 + 고급 쿠션 둘 다</td></tr>
  </tbody>
</table>

<p>처음 안정화라면 <strong>아드레날린 GTS</strong>로 충분하고, 쿠션감까지 욕심나면 <strong>글리세린 GTS</strong>입니다. 카야노·860과 직접 맞붙인 비교는 <a href="/blog/kayano-33-vs-glycerin-gts-22-vs-860-v15-2026">안정화 3강 비교</a>에 있습니다.</p>

<h2>6. 발볼 — 브룩스는 한국 러너 친화적</h2>

<p>브룩스는 아식스와 함께 <strong>토박스가 넉넉한 편</strong>이라 발볼 넓은 한국 러너에게 좋습니다. 특히 맥스 라인이 넓어요.</p>

<table>
  <thead>
    <tr><th>발볼</th><th>모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>넓음 (와이드 친화)</strong></td><td>고스트 맥스 3 · 글리세린 맥스 · 와이드 옵션 풍부</td></tr>
    <tr><td><strong>표준</strong></td><td>고스트 17 · 글리세린 22 · 아드레날린 GTS · 글리세린 GTS · 하이페리온 맥스</td></tr>
    <tr><td><strong>좁음 (주의)</strong></td><td>하이페리온 엘리트 5(레이싱)</td></tr>
  </tbody>
</table>

<p>발볼이 넓다면 데일리는 고스트, 맥스 쿠션은 고스트 맥스·글리세린 맥스가 무난합니다. 발볼·평발 전반의 선택은 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너를 위한 러닝화</a>에 11종 실측이 있습니다.</p>

<h2>한 걸음 더</h2>

<ul>
  <li>🔻 브룩스 브랜드 전체 신발 보기 → <a href="/brands/brooks">브룩스 브랜드 페이지</a></li>
  <li>🦶 안정화 베스트 → <a href="/best/stability">안정화 러닝화 추천</a> · 레이싱 → <a href="/best/racing">레이싱 러닝화 추천</a></li>
  <li>🟦 다른 브랜드 계급도 → <a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> · <a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a> · <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a> · <a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카</a> · <a href="/blog/adidas-running-shoes-lineup-tier-guide-2026">아디다스</a> · <a href="/blog/on-running-shoes-lineup-tier-guide-2026">온</a> · <a href="/blog/puma-running-shoes-lineup-tier-guide-2026">푸마</a> · <a href="/blog/mizuno-running-shoes-lineup-tier-guide-2026">미즈노</a> · <a href="/blog/saucony-running-shoes-lineup-tier-guide-2026">사코니</a> · <a href="/blog/li-ning-red-hare-9-lineup-2026">라이닝</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 한국 공식 판매 모델과 RunRepeat 실측·브룩스 공식 자료를 토대로 작성했습니다. 라인업·가격·발볼 옵션은 시즌마다 바뀔 수 있으니 구매 전 각 모델 상세 페이지와 공식몰에서 최신 정보를 확인하세요.</p>
`,
  },
  {
    id: 'hoka-running-shoes-lineup-tier-guide-2026',
    slug: 'hoka-running-shoes-lineup-tier-guide-2026',
    title: '호카 러닝화 계급도 2026 — 클리프톤·본디·마하·아라히, 맥스 쿠션으로 읽는 전체 라인업 | 데일리부터 카본 레이싱까지 한 장 정리',
    description:
      '호카 러닝화 10종을 라인(클리프톤 입문·본디 맥스쿠션·마하 스피드·아라히/가비오타 안정화·X시리즈 카본)과 폼 등급으로 한 장에. 마하 6 18.5만부터 테크톤 X 33.9만까지 가격·무게·스택 비교표 + 호카가 두꺼운데 가벼운 이유(메타로커) + "X"가 붙으면 뭐가 다른지 + 안정화 아라히 vs 가비오타까지 정리했습니다.',
    thumbnail: '/images/blog/hoka-lineup-tier-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 12,
    tags: ['호카 러닝화', '호카 계급도', '러닝화 라인업', '러닝화 등급', '클리프톤', '본디', '마하', '아라히', '맥스 쿠션', '메타로커'],
    faqs: [
      { question: '호카는 왜 신발이 다 두꺼운가요?', answer: '호카는 "맥스 쿠션"의 원조 브랜드입니다. 두꺼운 스택(40~46mm)으로 무릎·관절 충격을 최대한 흡수하는 게 정체성이에요. 그런데 두꺼운데도 가벼운데, 비결이 두 가지입니다 — 가벼운 EVA 기반 폼과, 바닥을 둥글게 깎아 자연스럽게 굴러가게 하는 메타로커(MetaRocker) 지오메트리입니다.' },
      { question: '호카 모델명에 "X"가 붙으면 뭐가 다른가요?', answer: 'X는 퍼포먼스를 강화한 상위 시리즈입니다. 로켓 X·씨엘로 X·테크톤 X는 카본 플레이트가 들어간 레이싱화이고, 마하 X는 PEBA를 더한 슈퍼트레이너입니다. 일반 라인(클리프톤·본디·마하)이 데일리라면, X 시리즈는 대회·빠른 훈련용이라고 보면 됩니다.' },
      { question: '클리프톤이랑 본디는 뭐가 다른가요?', answer: '클리프톤은 가벼운 만능 데일리(275g), 본디는 최대 쿠션 끝판왕(303g)입니다. 매일 다양하게 쓸 거면 클리프톤, 무릎 보호와 푹신함이 최우선이면 본디입니다. 본디는 123mm 초광폭 플랫폼과 와이드 옵션으로 안정감도 더 좋습니다.' },
      { question: '호카 안정화는 아라히랑 가비오타 중 뭘 사야 하나요?', answer: '아라히는 경량 안정화(259g, H-Frame)로 가볍게 지지받고 싶은 러너용, 가비오타는 맥스 쿠션 안정화(299g)로 든든한 지지와 두툼한 쿠션을 동시에 원하는 러너용입니다. 발볼이 넓다면 둘 다 와이드 옵션이 있는데, 가비오타가 기본 토박스도 더 넉넉합니다.' },
      { question: '호카는 발볼 넓은 한국 러너에게 맞나요?', answer: '모델마다 다릅니다. 본디·가비오타는 토박스가 넓은 편이라 발볼 넓은 러너에게 좋고, 클리프톤·마하·아라히는 표준입니다. 다만 로켓 X 같은 레이싱은 좁으니 주의하세요. 호카는 대부분 와이드 옵션을 제공하므로 발볼이 넓으면 와이드를 우선 확인하세요.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>호카는 "맥스 쿠션"의 원조</strong> — 모든 라인이 두꺼운 스택(40~46mm)이지만, 메타로커(둥근 바닥)로 의외로 가볍고 잘 굴러갑니다. 무릎 보호가 강점이에요.</li>
    <li><strong>"X"가 붙으면 퍼포먼스 강화</strong> — 로켓 X·씨엘로 X·테크톤 X는 카본 레이싱, 마하 X는 PEBA 슈퍼트레이너입니다.</li>
    <li><strong>라인이 곧 용도</strong> — 클리프톤(만능 데일리)·본디(맥스 쿠션)·마하(스피드)·아라히/가비오타(안정화).</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🔶</span>
  <div class="callout-body">
    <p class="callout-title">이 글의 역할 — 호카 계급도 한 장</p>
    <p>"클리프톤, 본디, 마하, 아라히… 이름만 봐선 뭐가 윗급인지 모르겠다"는 분을 위한 지도입니다. 추천 순위가 아니라 <strong>라인과 폼으로 전체 라인업을 한 번에 이해</strong>시키는 글이에요. 가격은 한국 공식가, 무게·스택은 RunRepeat 실측 기준이며 각 모델은 상세 페이지로 연결됩니다. <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a>·<a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a>·<a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> 계급도와 함께 보면 브랜드 비교가 쉽습니다.</p>
  </div>
</div>

<h2>1. 호카 읽는 법 — 맥스 쿠션 + 메타로커 + "X"</h2>

<p>호카의 정체성은 단 하나, <strong>맥스 쿠션</strong>입니다. 다른 브랜드가 입문은 얇게, 프리미엄은 두껍게 만든다면 <strong>호카는 처음부터 다 두껍습니다</strong>(40~46mm). 대신 두 가지로 무게를 잡아요 — 가벼운 EVA 기반 폼과, 바닥을 둥글게 깎아 굴러가게 하는 <strong>메타로커(MetaRocker)</strong>. 그래서 두꺼운데 둔하지 않습니다.</p>

<p>라인 이름으로 용도를, "X" 유무로 등급을 읽으면 됩니다.</p>

<table>
  <thead>
    <tr><th>라인</th><th>용도</th><th>한 줄</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>클리프톤 Clifton</strong></td><td>입문·만능 데일리</td><td>"처음이면 클리프톤" — 가벼운 맥스 쿠션</td></tr>
    <tr><td><strong>본디 Bondi</strong></td><td>맥스 쿠션 끝판왕</td><td>"무릎 보호 최우선" — 가장 두툼</td></tr>
    <tr><td><strong>마하 Mach</strong></td><td>경량 스피드 데일리</td><td>"가볍게 빠르게" — 템포런</td></tr>
    <tr><td><strong>아라히·가비오타</strong></td><td>안정화</td><td>아라히=경량 / 가비오타=맥스 쿠션</td></tr>
    <tr><td><strong>○○ X (로켓·씨엘로·테크톤)</strong></td><td>카본 레이싱</td><td>"X = 퍼포먼스 강화" — 대회용</td></tr>
  </tbody>
</table>

<h2>2. 폼이 등급을 만든다 — CMEVA → 슈퍼크리티컬 → PEBA</h2>

<p>호카도 폼으로 등급이 갈립니다. 데일리는 EVA, 레이싱은 PEBA입니다.</p>

<table>
  <thead>
    <tr><th>폼</th><th>성격</th><th>들어가는 모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>CMEVA</strong></td><td>전통 압축 EVA, 안정적</td><td>클리프톤 · 아라히 · 스피드고트</td></tr>
    <tr><td><strong>슈퍼크리티컬 EVA</strong></td><td>가볍고 탄력 있는 데일리</td><td>본디 · 마하</td></tr>
    <tr><td><strong>PEBA (듀얼)</strong></td><td>레이싱 최상위 반발</td><td>마하 X · 로켓 X · 씨엘로 X · 테크톤 X</td></tr>
    <tr><td><strong>+ 카본 플레이트</strong></td><td>추진력 강화</td><td>로켓 X · 씨엘로 X · 테크톤 X</td></tr>
  </tbody>
</table>

<p>중요한 구분 — <strong>X 시리즈 중에서도 로켓 X·씨엘로 X·테크톤 X만 카본 플레이트</strong>가 들어간 풀 레이싱화입니다. 마하 X는 PEBA를 더한 슈퍼트레이너로, 카본 없이 빠른 훈련에 쓰는 한 단계 아래 포지션이에요.</p>

<h2>3. 호카 러닝화 계급도 — 10종 한눈에</h2>

<p>라인 × 폼으로 현재 한국에서 살 수 있는 호카 러닝화 10종을 줄 세우면 이렇게 됩니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>라인·용도</th><th>폼</th><th>가격</th><th>무게</th><th>스택(힐)</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/hoka-mach-6"><strong>마하 6</strong></a></td><td>경량 스피드 데일리</td><td>슈퍼크리티컬 EVA</td><td>18.5만</td><td>232g</td><td>36mm</td></tr>
    <tr><td><a href="/shoes/hoka-clifton-10"><strong>클리프톤 10</strong></a></td><td>입문·만능 데일리</td><td>CMEVA</td><td>19.9만</td><td>275g</td><td>44mm</td></tr>
    <tr><td><a href="/shoes/hoka-arahi-8"><strong>아라히 8</strong></a></td><td>경량 안정화</td><td>CMEVA (소프트)</td><td>19.9만</td><td>259g</td><td>39mm</td></tr>
    <tr><td><a href="/shoes/hoka-speedgoat-6"><strong>스피드고트 6</strong></a></td><td>만능 트레일</td><td>CMEVA</td><td>20.5만</td><td>278g</td><td>40mm</td></tr>
    <tr><td><a href="/shoes/hoka-bondi-9"><strong>본디 9</strong></a></td><td>맥스 쿠션 끝판</td><td>슈퍼크리티컬 EVA</td><td>22.9만</td><td>303g</td><td>41mm</td></tr>
    <tr><td><a href="/shoes/hoka-gaviota-6"><strong>가비오타 6</strong></a></td><td>맥스 쿠션 안정화</td><td>EVA 듀얼</td><td>23.9만</td><td>299g</td><td>35mm</td></tr>
    <tr><td><a href="/shoes/hoka-mach-x-3"><strong>마하 X 3</strong></a></td><td>슈퍼트레이너</td><td>PEBA + 슈퍼크리티컬</td><td>24.9만</td><td>264g</td><td>43mm</td></tr>
    <tr><td><a href="/shoes/hoka-rocket-x-3"><strong>로켓 X 3</strong></a></td><td>카본 레이싱</td><td>듀얼 PEBA + 카본</td><td>29.9만</td><td>220g</td><td>40mm</td></tr>
    <tr><td><a href="/shoes/hoka-cielo-x1"><strong>씨엘로 X1</strong></a></td><td>최상위 카본 레이싱</td><td>듀얼 PEBA + 카본</td><td>32.9만</td><td>208g</td><td>46mm</td></tr>
    <tr><td><a href="/shoes/hoka-tecton-x-3"><strong>테크톤 X 3</strong></a></td><td>카본 트레일 레이싱</td><td>듀얼 PEBA + 카본</td><td>33.9만</td><td>275g</td><td>38mm</td></tr>
  </tbody>
</table>

<p>※ 무게는 남성 US 9 기준, 가격은 한국 공식가입니다. 드롭·발볼 상세는 각 모델 상세 페이지에 있습니다.</p>

<h2>4. 목적별로 — 나는 뭘 사야 할까</h2>

<ul>
  <li><strong>🟢 첫 호카·만능 데일리</strong> → <a href="/shoes/hoka-clifton-10">클리프톤 10</a>. 44mm 맥스 쿠션인데 275g으로 가벼운 호카의 기준점입니다.</li>
  <li><strong>☁️ 무릎 보호·최대 쿠션</strong> → <a href="/shoes/hoka-bondi-9">본디 9</a>. 123mm 초광폭 플랫폼에 와이드 옵션, 관절 부담이 큰 러너의 든든한 선택. 맥스 쿠션이 무릎에 왜 좋은지는 <a href="/blog/max-cushion-running-shoes-knee-protection-2026">맥스 쿠션 무릎 보호 가이드</a>에.</li>
  <li><strong>⚡ 가볍게·빠르게</strong> → <a href="/shoes/hoka-mach-6">마하 6</a>(232g). 통기성 최상, 데일리부터 템포까지.</li>
  <li><strong>🦶 평발·안정</strong> → 가벼운 <a href="/shoes/hoka-arahi-8">아라히 8</a> 또는 든든한 <a href="/shoes/hoka-gaviota-6">가비오타 6</a>(아래 5번 참고). 다른 브랜드 안정화와 비교는 <a href="/blog/stability-shoes-self-diagnosis-fit-guide-2026">안정화 자가진단 가이드</a>에.</li>
  <li><strong>🏃 빠른 훈련(카본 없이)</strong> → <a href="/shoes/hoka-mach-x-3">마하 X 3</a>. PEBA 슈퍼트레이너로 템포·인터벌에.</li>
  <li><strong>🏅 풀마라톤 레이스</strong> → <a href="/shoes/hoka-rocket-x-3">로켓 X 3</a>(220g) 또는 최상위 <a href="/shoes/hoka-cielo-x1">씨엘로 X1</a>(46mm 맥스 스택 카본).</li>
  <li><strong>⛰️ 트레일</strong> → 만능 <a href="/shoes/hoka-speedgoat-6">스피드고트 6</a>(베스트셀러) 또는 카본 <a href="/shoes/hoka-tecton-x-3">테크톤 X 3</a>.</li>
</ul>

<h2>5. 호카 안정화 — 아라히 vs 가비오타</h2>

<p>호카는 안정화가 둘이라 헷갈리기 쉬운데, 성격이 명확히 갈립니다. 호카 안정화는 단단한 플라스틱 포스트 대신 <strong>프레임(J-Frame/H-Frame)으로 자연스럽게 지지</strong>하는 방식이라 과교정 느낌이 적은 게 특징이에요.</p>

<table>
  <thead>
    <tr><th>모델</th><th>성격</th><th>무게</th><th>이런 분께</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/hoka-arahi-8"><strong>아라히 8</strong></a></td><td>경량 안정화</td><td>259g</td><td>가볍게 지지받고 싶은 러너, 데일리</td></tr>
    <tr><td><a href="/shoes/hoka-gaviota-6"><strong>가비오타 6</strong></a></td><td>맥스 쿠션 안정화</td><td>299g</td><td>지지 + 푹신함 둘 다, 발볼 넓은 러너</td></tr>
  </tbody>
</table>

<p>가볍게 안정감만 더하고 싶으면 <strong>아라히</strong>, 무릎 보호와 두툼한 쿠션까지 원하면 <strong>가비오타</strong>입니다. 둘 다 와이드 옵션이 있어 발볼 넓은 한국 러너에게 무난합니다.</p>

<h2>6. 호카의 정체성 — 두꺼운데 가볍다</h2>

<p>호카 계급도에서 꼭 봐야 할 숫자가 <strong>스택 대비 무게</strong>입니다. 보통 스택이 두꺼우면 무겁기 마련인데, 호카는 메타로커와 경량 폼으로 이 공식을 깹니다.</p>

<ul>
  <li><strong>클리프톤 10</strong>: 44mm 맥스 스택인데 <strong>275g</strong> — 경쟁 맥스 쿠션화보다 가볍습니다.</li>
  <li><strong>씨엘로 X1</strong>: 46mm 카본 레이싱인데 <strong>208g</strong> — 두툼한 레이서.</li>
  <li><strong>본디 9</strong>: 303g으로 가장 무겁지만, 그만큼 123mm 초광폭에 가장 든든한 안정감.</li>
</ul>

<p>그래서 호카는 <strong>"무릎·관절이 걱정되는데 둔한 신발은 싫은"</strong> 러너에게 특히 잘 맞습니다. 두꺼운 쿠션의 보호와 메타로커의 경쾌함을 동시에 가져가니까요. 발볼은 본디·가비오타가 넓고, 대부분 와이드 옵션이 있어 발볼 넓은 한국 러너도 대응됩니다.</p>

<h2>한 걸음 더</h2>

<ul>
  <li>🔶 호카 브랜드 전체 신발 보기 → <a href="/brands/hoka">호카 브랜드 페이지</a></li>
  <li>🏁 레이싱 카본화 베스트 → <a href="/best/racing">레이싱 러닝화 추천</a> · 안정화 → <a href="/best/stability">안정화 러닝화 추천</a></li>
  <li>🟦 다른 브랜드 계급도 → <a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> · <a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a> · <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a> · <a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a> · <a href="/blog/adidas-running-shoes-lineup-tier-guide-2026">아디다스</a> · <a href="/blog/on-running-shoes-lineup-tier-guide-2026">온</a> · <a href="/blog/puma-running-shoes-lineup-tier-guide-2026">푸마</a> · <a href="/blog/mizuno-running-shoes-lineup-tier-guide-2026">미즈노</a> · <a href="/blog/saucony-running-shoes-lineup-tier-guide-2026">사코니</a> · <a href="/blog/li-ning-red-hare-9-lineup-2026">라이닝</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 한국 공식 판매 모델과 RunRepeat 실측·호카 공식 자료를 토대로 작성했습니다. 라인업·가격·발볼 옵션은 시즌마다 바뀔 수 있으니 구매 전 각 모델 상세 페이지와 공식몰에서 최신 정보를 확인하세요.</p>
`,
  },
  {
    id: 'asics-running-shoes-lineup-tier-guide-2026',
    slug: 'asics-running-shoes-lineup-tier-guide-2026',
    title: '아식스 러닝화 계급도 2026 — 카야노·님버스·노바블라스트·메타스피드, GEL부터 FF Blast까지 전체 라인업 | 입문부터 슈퍼슈즈까지 한 장 정리',
    description:
      '아식스 러닝화 15종을 라인(카야노 안정화·님버스 쿠션·노바블라스트 데일리·슈퍼블라스트 무카본슈퍼·메타스피드 레이싱)과 FF Blast 폼 등급으로 한 장에. 젤 벤처 8.9만부터 메타스피드 레이 39.9만까지 가격·무게·폼 비교표 + GEL에서 FF Blast로 바뀐 세대 전환 + 메타스피드 3형제 주법별 차이 + 발볼 넓은 한국 러너 친화도까지 정리했습니다.',
    thumbnail: '/images/blog/asics-lineup-tier-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 13,
    tags: ['아식스 러닝화', '아식스 계급도', '러닝화 라인업', '러닝화 등급', '젤 카야노', '젤 님버스', '노바블라스트', '메타스피드', '슈퍼블라스트', 'FF Blast'],
    faqs: [
      { question: '아식스 GEL(젤)이랑 FF Blast는 뭐가 다른가요?', answer: 'GEL은 아식스의 전통 충격흡수 젤 캡슐이고, FF Blast는 통통 튀는 신세대 바운시 폼입니다. 아식스는 클래식 GEL 라인(젤 님버스·젤 카야노 일부)과 신세대 FF Blast 라인(노바·메가·슈퍼블라스트)이 공존합니다. 상징적 전환점이 젤 카야노 33으로, 13년 만에 GEL을 빼고 FF Blast 듀얼 폼으로 바꿨습니다.' },
      { question: '"blast"가 붙은 모델들은 뭐가 다른가요?', answer: '모두 FF Blast 바운시 폼 계열이지만 성격이 다릅니다. 노바블라스트(데일리 바운시)·메가블라스트(48mm 맥시멀 경량)·소닉블라스트(카본 맥시멀)·슈퍼블라스트(카본 없는 슈퍼트레이너)입니다. 통통 튀는 재미를 원하면 노바블라스트, 대회 가까운 빠른 훈련이면 슈퍼블라스트가 답입니다.' },
      { question: '아식스 안정화는 뭘 사야 하나요?', answer: '젤 카야노 32 또는 33입니다. 카야노는 전 세계 안정화 추천 1순위로 꼽히는 평발·과내전 끝판왕입니다. 32는 4D Guidance로 단단하게, 33은 FLUIDSUPPORT로 부드럽게 잡아줍니다. 안정화 선택이 처음이면 자가진단부터 하는 걸 권합니다.' },
      { question: '메타스피드 스카이·엣지·레이는 뭐가 다른가요?', answer: '주법으로 갈립니다. 스카이+는 보폭을 늘리는 스트라이드 러너용, 엣지+는 피치(케이던스)를 높이는 러너용입니다. 레이는 129g 초경량 버전으로 전족 착지·단거리에 특화됐습니다. 본인이 보폭형이면 스카이, 회전수형이면 엣지를 고르세요.' },
      { question: '아식스는 발볼 넓은 한국 러너에게 맞나요?', answer: '아식스는 나이키보다 토박스가 넉넉한 편이라 한국 러너에게 친화적입니다. 특히 카야노·GT 라인은 2E·4E 와이드 옵션이 풍부하고, 메가블라스트·소닉블라스트·젤 벤처도 넓은 편입니다. 다만 메타스피드 레이·메타후지 같은 일부 레이싱·트레일은 좁으니 주의하세요.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>아식스는 두 시대가 공존합니다</strong> — 전통 <strong>GEL(젤)</strong> 라인과 통통 튀는 신세대 <strong>FF Blast</strong> 라인. 이름에 "blast"가 붙으면 바운시 폼 계열입니다.</li>
    <li><strong>라인이 곧 용도</strong> — 카야노(안정화)·님버스(맥스 쿠션)·노바블라스트(데일리)·슈퍼블라스트(무카본 슈퍼)·메타스피드(카본 레이싱).</li>
    <li><strong>안정화 명가 + 발볼 친화</strong> — 카야노는 세계 안정화 1순위, 와이드 옵션도 나이키보다 넉넉해 발볼 넓은 한국 러너에게 유리합니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🔷</span>
  <div class="callout-body">
    <p class="callout-title">이 글의 역할 — 아식스 계급도 한 장</p>
    <p>"카야노, 님버스, 노바블라스트, 메타스피드… 폼 이름까지 너무 많다"는 분을 위한 지도입니다. 추천 순위가 아니라 <strong>라인과 폼으로 전체 라인업을 한 번에 이해</strong>시키는 글이에요. 가격은 한국 공식가, 무게·토박스는 RunRepeat 실측 기준이며 각 모델은 상세 페이지로 연결됩니다. <a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a>·<a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> 계급도와 함께 보면 브랜드 비교가 쉽습니다.</p>
  </div>
</div>

<h2>1. 아식스 읽는 법 — GEL 클래식 vs blast 신세대</h2>

<p>아식스가 복잡해 보이는 건 <strong>두 세대가 섞여 있어서</strong>입니다. 전통의 <strong>GEL(젤)</strong> 충격흡수 라인과, 통통 튀는 <strong>FF Blast</strong> 바운시 폼 라인이 공존하죠. 먼저 라인 이름으로 용도를 잡으세요.</p>

<table>
  <thead>
    <tr><th>라인</th><th>용도</th><th>한 줄</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>젤 카야노 GEL-Kayano</strong></td><td>프리미엄 안정화</td><td>"평발·과내전" — 세계 안정화 1순위</td></tr>
    <tr><td><strong>젤 님버스 GEL-Nimbus</strong></td><td>맥스 쿠션</td><td>"푹신한 장거리" — 중립 쿠션 대장</td></tr>
    <tr><td><strong>노바블라스트 Novablast</strong></td><td>바운시 데일리</td><td>"통통 튀는 재미" — 만능 데일리</td></tr>
    <tr><td><strong>슈퍼블라스트 Superblast</strong></td><td>무카본 슈퍼트레이너</td><td>"카본 없는 슈퍼슈즈" — 빠른 훈련</td></tr>
    <tr><td><strong>메타/매직스피드 Speed</strong></td><td>카본 레이싱</td><td>메타=최상위, 매직=입문 카본</td></tr>
  </tbody>
</table>

<p>핵심 전환점이 <strong>젤 카야노 33</strong>입니다. 13년간 GEL을 고수하던 카야노가 GEL을 빼고 FF Blast 듀얼 폼으로 바뀌었어요(이 변화의 호불호는 <a href="/blog/asics-gel-kayano-33-review">카야노 33 리뷰</a>에). 그만큼 아식스의 중심축이 GEL에서 FF Blast로 이동하는 중입니다.</p>

<h2>2. FF 폼이 등급을 만든다 — Amplifoam → FF Blast → FF Turbo</h2>

<p>아식스는 FlyteFoam(FF) 폼 종류로 등급이 갈립니다. 아래로 갈수록 가볍고 반발이 강해집니다.</p>

<table>
  <thead>
    <tr><th>폼</th><th>성격</th><th>들어가는 모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Amplifoam (EVA)</strong></td><td>가성비 입문</td><td>젤 벤처</td></tr>
    <tr><td><strong>FF Blast+ / Plus</strong></td><td>안정적 데일리·쿠션</td><td>님버스 · 카야노</td></tr>
    <tr><td><strong>FF Blast Max</strong></td><td>바운시 데일리</td><td>노바블라스트</td></tr>
    <tr><td><strong>FF Blast Turbo</strong></td><td>맥시멀 경량</td><td>메가블라스트</td></tr>
    <tr><td><strong>FF Turbo+ (PEBA)</strong></td><td>레이싱 최상위 반발</td><td>슈퍼블라스트 · 메타스피드</td></tr>
    <tr><td><strong>FF Leap</strong></td><td>신세대 경량 폼</td><td>슈퍼블라스트 3 · 매직스피드 5 · 메타스피드 레이</td></tr>
  </tbody>
</table>

<p>요약하면 <strong>FF Turbo+가 아식스 최상위 레이싱 폼(PEBA)</strong>입니다. 재밌는 건 슈퍼블라스트가 이 FF Turbo+로 <strong>카본 플레이트 없이</strong> 71% 에너지 리턴을 내는 "무카본 슈퍼슈즈"라는 점이에요.</p>

<h2>3. 아식스 러닝화 계급도 — 15종 한눈에</h2>

<p>라인 × 폼으로 현재 한국에서 살 수 있는 아식스 러닝화 15종을 줄 세우면 이렇게 됩니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>라인·용도</th><th>폼</th><th>가격</th><th>무게</th><th>한 줄 성격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/asics-gel-venture-10"><strong>젤 벤처 10</strong></a></td><td>트레일 입문</td><td>Amplifoam</td><td>8.9만</td><td>322g</td><td>최저가, 4E 와이드 진입 신발</td></tr>
    <tr><td><a href="/shoes/asics-novablast-5"><strong>노바블라스트 5</strong></a></td><td>바운시 데일리</td><td>FF Blast Max</td><td>16.9만</td><td>255g</td><td>통통 튀는 데일리의 정석</td></tr>
    <tr><td><a href="/shoes/asics-gel-kayano-32"><strong>젤 카야노 32</strong></a></td><td>안정화</td><td>FF Blast+ · 4D Guidance</td><td>19.9만</td><td>300g</td><td>4D Guidance 단단한 평발 교정</td></tr>
    <tr><td><a href="/shoes/asics-gel-nimbus-28"><strong>젤 님버스 28</strong></a></td><td>프리미엄 쿠션</td><td>FF Blast Plus</td><td>19.9만</td><td>281g</td><td>43.5mm 푹신, 중립 쿠션 대장</td></tr>
    <tr><td><a href="/shoes/asics-magic-speed-4"><strong>매직스피드 4</strong></a></td><td>카본 입문</td><td>FF Blast+ · FF Turbo · 카본</td><td>19.9만</td><td>237g</td><td>풀렝스 카본, 메타스피드 입문</td></tr>
    <tr><td><a href="/shoes/asics-gel-kayano-33"><strong>젤 카야노 33</strong></a></td><td>안정화 신상</td><td>FF Blast 듀얼 · FLUIDSUPPORT</td><td>20.9만</td><td>298g</td><td>GEL 졸업, 부드러워진 카야노</td></tr>
    <tr><td><a href="/shoes/asics-sonicblast"><strong>소닉블라스트</strong></a></td><td>카본 맥시멀</td><td>FF Blast+ · 카본</td><td>22.9만</td><td>255g</td><td>카본 플레이트 맥시멀 쿠션</td></tr>
    <tr><td><a href="/shoes/asics-magic-speed-5"><strong>매직스피드 5</strong></a></td><td>가성비 레이싱</td><td>FF Leap · FF Blast+ · 카본</td><td>22.9만</td><td>193g</td><td>193g 포크형 카본, 50g 감량</td></tr>
    <tr><td><a href="/shoes/asics-superblast-2"><strong>슈퍼블라스트 2</strong></a></td><td>무카본 슈퍼</td><td>FF Turbo+</td><td>24.9만</td><td>252g</td><td>카본 없이 71% 에너지 리턴</td></tr>
    <tr><td><a href="/shoes/asics-superblast-3"><strong>슈퍼블라스트 3</strong></a></td><td>무카본 슈퍼 신상</td><td>FF Leap · FF Blast Plus</td><td>25.9만</td><td>239g</td><td>239g, 더 부드러운 롱런</td></tr>
    <tr><td><a href="/shoes/asics-metafuji-trail"><strong>메타후지 트레일</strong></a></td><td>트레일 레이싱</td><td>FF Turbo · 카본</td><td>27.9만</td><td>258g</td><td>카본 트레일 레이서</td></tr>
    <tr><td><a href="/shoes/asics-megablast"><strong>메가블라스트</strong></a></td><td>맥시멀 바운시</td><td>FF Blast Turbo</td><td>29.9만</td><td>218g</td><td>48mm인데 218g, 구름 위 달리기</td></tr>
    <tr><td><a href="/shoes/asics-metaspeed-sky-plus"><strong>메타스피드 스카이+</strong></a></td><td>최상위 레이싱</td><td>FF Turbo+ · 카본</td><td>32.9만</td><td>205g</td><td>스트라이드(보폭) 서브3</td></tr>
    <tr><td><a href="/shoes/asics-metaspeed-edge-plus"><strong>메타스피드 엣지+</strong></a></td><td>최상위 레이싱</td><td>FF Turbo+ · 카본</td><td>32.9만</td><td>208g</td><td>케이던스(피치) 슈퍼슈즈</td></tr>
    <tr><td><a href="/shoes/asics-metaspeed-ray"><strong>메타스피드 레이</strong></a></td><td>초경량 레이싱</td><td>FF Leap (ATPU)</td><td>39.9만</td><td>129g</td><td>129g, 81% 에너지 전족 특화</td></tr>
  </tbody>
</table>

<p>※ 무게는 남성 US 9 기준, 가격은 한국 공식가입니다. 스택·드롭·발볼 상세는 각 모델 상세 페이지에 있습니다.</p>

<h2>4. 목적별로 — 나는 뭘 사야 할까</h2>

<ul>
  <li><strong>🟢 통통 튀는 만능 데일리</strong> → <a href="/shoes/asics-novablast-5">노바블라스트 5</a>(16.9만). 아식스 입문의 정석, 바운시한 재미가 강점입니다.</li>
  <li><strong>🦶 평발·안정</strong> → <a href="/shoes/asics-gel-kayano-32">젤 카야노 32</a>(단단) 또는 <a href="/shoes/asics-gel-kayano-33">33</a>(부드러움). 둘의 차이는 <a href="/blog/asics-kayano-32-vs-33-comparison">카야노 32 vs 33</a>에, 다른 브랜드 안정화와 비교는 <a href="/blog/stability-shoes-self-diagnosis-fit-guide-2026">안정화 자가진단 가이드</a>에 있습니다.</li>
  <li><strong>☁️ 푹신한 프리미엄 쿠션</strong> → <a href="/shoes/asics-gel-nimbus-28">젤 님버스 28</a>(43.5mm). 더 가볍고 높은 스택을 원하면 48mm <a href="/shoes/asics-megablast">메가블라스트</a>.</li>
  <li><strong>🏃 첫 카본(가성비)</strong> → <a href="/shoes/asics-magic-speed-4">매직스피드 4</a> 또는 더 가벼운 <a href="/shoes/asics-magic-speed-5">5</a>. 둘의 차이는 <a href="/blog/asics-magic-speed-4-vs-5-comparison">매직스피드 4 vs 5</a>에.</li>
  <li><strong>⚡ 카본 없이 빠른 훈련·롱런</strong> → <a href="/shoes/asics-superblast-2">슈퍼블라스트 2</a>(템포) 또는 <a href="/shoes/asics-superblast-3">3</a>(부드러운 롱런). 비교는 <a href="/blog/asics-superblast-2-vs-3-comparison">슈퍼블라스트 2 vs 3</a>에.</li>
  <li><strong>🏅 풀마라톤 레이스(최상위)</strong> → <a href="/shoes/asics-metaspeed-sky-plus">메타스피드 스카이+</a>·<a href="/shoes/asics-metaspeed-edge-plus">엣지+</a>(아래 5번 주법별 참고).</li>
  <li><strong>💰 트레일 입문 최저가</strong> → <a href="/shoes/asics-gel-venture-10">젤 벤처 10</a>(8.9만, 4E 와이드).</li>
</ul>

<h2>5. 메타스피드 3형제 — 주법으로 갈린다 (아식스만의 특징)</h2>

<p>아식스 최상위 레이싱 <strong>메타스피드</strong>는 다른 브랜드와 달리 <strong>주법(달리는 방식)으로 모델이 나뉩니다.</strong> 이게 아식스 레이싱의 가장 독특한 점이에요.</p>

<table>
  <thead>
    <tr><th>모델</th><th>맞는 주법</th><th>특징</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/asics-metaspeed-sky-plus"><strong>스카이+</strong></a></td><td>스트라이드형 (보폭을 늘림)</td><td>205g, 보폭이 큰 러너의 서브3</td></tr>
    <tr><td><a href="/shoes/asics-metaspeed-edge-plus"><strong>엣지+</strong></a></td><td>케이던스형 (회전수를 높임)</td><td>208g, 피치가 빠른 러너</td></tr>
    <tr><td><a href="/shoes/asics-metaspeed-ray"><strong>레이</strong></a></td><td>전족 착지·단거리</td><td>129g 초경량, 81% 에너지 리턴</td></tr>
  </tbody>
</table>

<p>즉 <strong>보폭을 늘려 달리면 스카이, 다리 회전수를 높여 달리면 엣지</strong>입니다. 본인 주법을 모르겠다면, 같은 페이스에서 발이 더 멀리 뻗는 느낌이면 스카이형, 종종걸음처럼 빠르게 구르는 느낌이면 엣지형입니다.</p>

<h2>6. 발볼 — 아식스는 한국 러너 친화적</h2>

<p>나이키와 달리 <strong>아식스는 토박스가 넉넉한 편</strong>이라 발볼 넓은 한국 러너에게 유리합니다. 특히 안정화·트레일 라인의 와이드 옵션이 풍부해요.</p>

<table>
  <thead>
    <tr><th>발볼</th><th>모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>넓음·와이드 풍부 (한국 친화)</strong></td><td>젤 카야노(2E·4E) · 젤 벤처(4E) · 메가블라스트 · 소닉블라스트</td></tr>
    <tr><td><strong>표준</strong></td><td>님버스 28 · 노바블라스트 5 · 슈퍼블라스트 · 매직스피드 · 메타스피드 스카이·엣지</td></tr>
    <tr><td><strong>좁음 (주의)</strong></td><td>메타스피드 레이 · 메타후지 트레일</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">🏆</span>
  <div class="callout-body">
    <p class="callout-title">아식스가 안정화의 명가인 이유</p>
    <p>카야노는 전 세계 안정화 추천에서 1순위로 가장 자주 호명되는 모델입니다. 4D Guidance·FLUIDSUPPORT 같은 적응형 지지 기술의 레퍼런스죠. 평발·과내전 한국 러너에게 아식스가 첫손에 꼽히는 이유입니다. 안정화 선택이 처음이면 <a href="/blog/stability-shoes-self-diagnosis-fit-guide-2026">자가진단 가이드</a>로 내 발에 맞는 지지 방식부터 확인하세요. 참고로 입문 안정화 GT-2000·GT-1000은 본 사이트 미수록이라, 안정화는 카야노 기준으로 보면 됩니다.</p>
  </div>
</div>

<h2>한 걸음 더</h2>

<ul>
  <li>🔷 아식스 브랜드 전체 신발 보기 → <a href="/brands/asics">아식스 브랜드 페이지</a></li>
  <li>🏁 레이싱 카본화 베스트 → <a href="/best/racing">레이싱 러닝화 추천</a></li>
  <li>🟦 다른 브랜드 계급도 → <a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a> · <a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> · <a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카</a> · <a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a> · <a href="/blog/adidas-running-shoes-lineup-tier-guide-2026">아디다스</a> · <a href="/blog/on-running-shoes-lineup-tier-guide-2026">온</a> · <a href="/blog/puma-running-shoes-lineup-tier-guide-2026">푸마</a> · <a href="/blog/mizuno-running-shoes-lineup-tier-guide-2026">미즈노</a> · <a href="/blog/saucony-running-shoes-lineup-tier-guide-2026">사코니</a> · <a href="/blog/li-ning-red-hare-9-lineup-2026">라이닝</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 한국 공식 판매 모델과 RunRepeat 실측·아식스 공식 자료를 토대로 작성했습니다. 라인업·가격·발볼 옵션은 시즌마다 바뀔 수 있으니 구매 전 각 모델 상세 페이지와 공식몰에서 최신 정보를 확인하세요.</p>
`,
  },
  {
    id: 'nike-running-shoes-lineup-tier-guide-2026',
    slug: 'nike-running-shoes-lineup-tier-guide-2026',
    title: '나이키 러닝화 계급도 2026 — 페가수스·보메로·스트럭처·Fly, 라인으로 읽는 전체 라인업 | 입문부터 알파플라이까지 한 장 정리',
    description:
      '나이키 러닝화 14종을 라인(페가수스 데일리·보메로 쿠션·스트럭처 안정화·Fly 레이싱)과 폼 등급(Cushlon·ReactX·ZoomX·카본)으로 한 장에. 라이벌 플라이 13만원부터 알파플라이 35만원까지 가격·무게·폼 비교표 + "플러스/프리미엄" 접미사 해설 + 토박스 좁은 나이키, 발볼 넓은 한국 러너의 와이드 옵션까지 정리했습니다.',
    thumbnail: '/images/blog/nike-lineup-tier-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 12,
    tags: ['나이키 러닝화', '나이키 계급도', '러닝화 라인업', '러닝화 등급', '페가수스', '보메로', '베이퍼플라이', '알파플라이', 'ZoomX', '나이키 토박스'],
    faqs: [
      { question: '나이키 러닝화 라인은 어떻게 구분하나요?', answer: '숫자가 아니라 라인 이름으로 구분합니다. 페가수스(만능 데일리)·보메로(맥스 쿠션)·스트럭처(안정화)가 3대 데일리 라인이고, 이름에 Fly가 붙으면(베이퍼플라이·알파플라이·줌 플라이·스트릭플라이) 카본 레이싱 라인입니다. 라이벌 플라이는 예외적으로 Fly가 붙지만 카본 없는 가성비 템포화입니다.' },
      { question: '페가수스 플러스, 프리미엄은 일반 페가수스와 뭐가 다른가요?', answer: '같은 라인의 상위 등급입니다. 기본(41·42)은 ReactX 폼, 플러스는 더 가벼운 ZoomX 폼, 프리미엄은 ZoomX+ReactX+에어를 겹친 맥시멀 버전입니다. 가격도 기본 16만원대 → 플러스 21만원대 → 프리미엄 27만원대로 올라갑니다. 보메로도 18 → 플러스 → 프리미엄(50mm) 순으로 같은 규칙입니다.' },
      { question: '나이키는 발볼이 좁다는데 와이드 옵션이 있나요?', answer: '나이키는 전반적으로 토박스가 좁아 발볼 넓은 한국 러너는 주의해야 합니다. 다행히 와이드·X-와이드 옵션이 있는 모델이 있습니다 — 페가수스 41·42, 스트럭처 26, 보메로 18·플러스. 반대로 페가수스 프리미엄·플러스, 보메로 프리미엄, 줌 플라이, 라이벌 플라이, 스트릭플라이는 좁은 편이라 발볼 넓으면 피하거나 한 치수 크게 신어야 합니다.' },
      { question: '첫 나이키 러닝화로 뭘 사야 하나요?', answer: '가장 무난한 건 페가수스 42(16.9만)입니다. 풀렝스 에어와 와이드 옵션까지 갖춘 검증된 만능 데일리예요. 예산을 아끼려면 41 할인분이나 라이벌 플라이 4(13.9만)가, 평발이라면 스트럭처 26이, 푹신함을 원하면 보메로 18이 답입니다.' },
      { question: 'ZoomX가 뭔가요? 다른 폼이랑 어떻게 다른가요?', answer: 'ZoomX는 나이키 최상위 PEBA 폼으로, 가볍고 반발력이 최고입니다. 원래 베이퍼플라이 같은 레이싱화에만 쓰다가 보메로·페가수스 플러스 같은 데일리로 내려왔습니다. 입문은 Cushlon, 데일리는 ReactX(안정적), 프리미엄·레이싱은 ZoomX(반발), 거기에 카본 플레이트가 더해지면 슈퍼슈즈입니다.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>나이키는 숫자가 아니라 "라인 이름"으로 읽습니다</strong> — 페가수스(만능 데일리)·보메로(맥스 쿠션)·스트럭처(안정화)가 3대 축, 이름에 <strong>Fly</strong>가 붙으면 카본 레이싱입니다.</li>
    <li><strong>플러스·프리미엄 = 같은 라인의 상위 등급</strong> — 기본(ReactX) → 플러스(ZoomX 경량) → 프리미엄(맥시멀). 폼은 Cushlon→ReactX→ZoomX→카본 순으로 올라갑니다.</li>
    <li><strong>나이키는 토박스가 좁습니다</strong> — 발볼 넓은 한국 러너는 와이드 옵션(페가수스 41·42, 스트럭처, 보메로 18·플러스)부터 확인하세요.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🔵</span>
  <div class="callout-body">
    <p class="callout-title">이 글의 역할 — 나이키 계급도 한 장</p>
    <p>"페가수스, 보메로, 베이퍼플라이… 뭐가 뭔지 모르겠다"는 분을 위한 지도입니다. 추천 순위가 아니라 <strong>라인과 폼으로 전체 라인업을 한 번에 이해</strong>시키는 글이에요. 가격은 한국 공식가, 무게·토박스는 RunRepeat 실측 기준이며, 각 모델은 상세 페이지로 바로 연결됩니다. 같은 방식의 <a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스 계급도</a>도 함께 보면 브랜드 비교가 쉽습니다.</p>
  </div>
</div>

<h2>1. 나이키 읽는 법 — 숫자 말고 "라인 이름"</h2>

<p>뉴발란스가 숫자(860·880·1080)로 용도를 구분한다면, <strong>나이키는 라인 이름으로 구분</strong>합니다. 핵심은 3대 데일리 라인 + Fly 레이싱입니다.</p>

<table>
  <thead>
    <tr><th>라인</th><th>용도</th><th>한 줄</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>페가수스 Pegasus</strong></td><td>만능 데일리</td><td>"처음이면 페가수스" — 나이키의 기준점</td></tr>
    <tr><td><strong>보메로 Vomero</strong></td><td>맥스 쿠션</td><td>"푹신함·무릎 보호" — 두툼한 장거리</td></tr>
    <tr><td><strong>스트럭처 Structure</strong></td><td>안정화</td><td>"평발·과내전" — 나이키 유일 안정화</td></tr>
    <tr><td><strong>○○플라이 (Fly)</strong></td><td>카본 레이싱</td><td>베이퍼·알파·줌·스트릭 — 대회용</td></tr>
  </tbody>
</table>

<p>그리고 라인 뒤에 붙는 <strong>접미사가 등급</strong>입니다. 기본(페가수스 42) → <strong>플러스</strong>(더 가벼운 상위) → <strong>프리미엄</strong>(맥시멀 최상위). 보메로도 18 → 플러스 → 프리미엄으로 똑같이 올라갑니다. 한 가지 함정 — <strong>라이벌 플라이(Rival Fly)</strong>는 이름에 Fly가 붙지만 카본이 없는 가성비 템포화입니다.</p>

<h2>2. 폼이 등급을 만든다 — Cushlon → ReactX → ZoomX → 카본</h2>

<p>나이키는 미드솔 폼으로 등급이 갈립니다. 아래로 갈수록 가볍고 반발력이 강해지며 비싸집니다.</p>

<table>
  <thead>
    <tr><th>폼</th><th>성격</th><th>들어가는 모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Cushlon</strong></td><td>가성비 입문 EVA</td><td>라이벌 플라이</td></tr>
    <tr><td><strong>ReactX</strong></td><td>안정적인 데일리 폼</td><td>페가수스 41·42 · 스트럭처</td></tr>
    <tr><td><strong>ZoomX</strong></td><td>PEBA — 최고 반발·경량</td><td>보메로 · 페가수스 플러스 · Fly 전 라인</td></tr>
    <tr><td><strong>+ Air Zoom / Air Pods</strong></td><td>에어 유닛으로 반발 추가</td><td>페가수스(에어)·프리미엄·알파플라이</td></tr>
    <tr><td><strong>+ 카본 Flyplate</strong></td><td>레이싱 추진판</td><td>베이퍼·알파·줌·스트릭플라이</td></tr>
  </tbody>
</table>

<p>요약하면 <strong>ZoomX가 나이키 최상위 폼</strong>입니다. 원래 베이퍼플라이 전용이던 ZoomX가 보메로·페가수스 플러스 같은 데일리로 내려오면서, "비싼 데일리"는 대부분 ZoomX를 씁니다. 카본 플레이트까지 더해지면 대회용 슈퍼슈즈입니다.</p>

<h2>3. 나이키 러닝화 계급도 — 14종 한눈에</h2>

<p>라인 × 폼으로 현재 한국에서 살 수 있는 나이키 러닝화 14종을 줄 세우면 이렇게 됩니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>라인·용도</th><th>폼</th><th>가격</th><th>무게</th><th>한 줄 성격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/nike-rival-fly-4"><strong>라이벌 플라이 4</strong></a></td><td>가성비 템포</td><td>Cushlon</td><td>13.9만</td><td>236g</td><td>최저가 입문 템포 트레이너</td></tr>
    <tr><td><a href="/shoes/nike-pegasus-41"><strong>페가수스 41</strong></a></td><td>입문 데일리</td><td>ReactX</td><td>15.9만</td><td>281g</td><td>검증된 만능, 할인 시 최고 가성비</td></tr>
    <tr><td><a href="/shoes/nike-pegasus-42"><strong>페가수스 42</strong></a></td><td>입문 데일리</td><td>ReactX + 풀렝스 에어</td><td>16.9만</td><td>286g</td><td>첫 나이키 1순위, 와이드 정식 출시</td></tr>
    <tr><td><a href="/shoes/nike-structure-26"><strong>스트럭처 26</strong></a></td><td>안정화</td><td>ReactX + 미드풋 서포트</td><td>16.9만</td><td>296g</td><td>나이키 유일 안정화, 발볼 옵션 풍부</td></tr>
    <tr><td><a href="/shoes/nike-vomero-18"><strong>보메로 18</strong></a></td><td>맥스 쿠션</td><td>ZoomX + ReactX</td><td>18.9만</td><td>298g</td><td>43mm 힐, 무릎 보호 최우선</td></tr>
    <tr><td><a href="/shoes/nike-vomero-plus"><strong>보메로 플러스</strong></a></td><td>프리미엄 쿠션</td><td>풀렝스 ZoomX</td><td>20.9만</td><td>289g</td><td>42mm, 푹신함 업그레이드</td></tr>
    <tr><td><a href="/shoes/nike-pegasus-plus"><strong>페가수스 플러스</strong></a></td><td>스피드 데일리</td><td>풀렝스 ZoomX</td><td>21.9만</td><td>244g</td><td>244g 경량, 데일리+템포</td></tr>
    <tr><td><a href="/shoes/nike-streakfly-2"><strong>스트릭플라이 2</strong></a></td><td>단거리 레이싱</td><td>ZoomX + 카본</td><td>21.9만</td><td>128g</td><td>128g, 5K·10K 전용 초경량</td></tr>
    <tr><td><a href="/shoes/nike-zoom-fly-6"><strong>줌 플라이 6</strong></a></td><td>슈퍼트레이너</td><td>ZoomX + 카본</td><td>22.9만</td><td>248g</td><td>베이퍼 반값, 첫 카본 입문</td></tr>
    <tr><td><a href="/shoes/nike-pegasus-premium"><strong>페가수스 프리미엄</strong></a></td><td>맥시멀 데일리</td><td>ZoomX+ReactX+에어</td><td>27.9만</td><td>308g</td><td>43mm 3중 폼, 데일리 끝판</td></tr>
    <tr><td><a href="/shoes/nike-vomero-premium"><strong>보메로 프리미엄</strong></a></td><td>회복용 맥스</td><td>ZoomX + 에어팟 4개</td><td>28.9만</td><td>326g</td><td>역대 최고 50mm 스택</td></tr>
    <tr><td><a href="/shoes/nike-ultrafly"><strong>울트라플라이</strong></a></td><td>트레일 레이싱</td><td>ZoomX + 카본</td><td>29.9만</td><td>299g</td><td>트레일 최초 ZoomX+카본</td></tr>
    <tr><td><a href="/shoes/nike-vaporfly-4"><strong>베이퍼플라이 4</strong></a></td><td>풀 레이싱</td><td>ZoomX + 카본</td><td>30.9만</td><td>166g</td><td>166g, 78% 에너지 리턴</td></tr>
    <tr><td><a href="/shoes/nike-alphafly-3"><strong>알파플라이 3</strong></a></td><td>최상위 레이싱</td><td>ZoomX+에어팟+카본</td><td>34.9만</td><td>201g</td><td>킵툼 세계기록 슈즈</td></tr>
  </tbody>
</table>

<p>※ 무게는 남성 US 9 기준, 가격은 한국 공식가입니다. 스택·드롭·발볼 상세는 각 모델 상세 페이지에 있습니다.</p>

<h2>4. 목적별로 — 나는 뭘 사야 할까</h2>

<ul>
  <li><strong>🟢 첫 러닝화·가장 무난</strong> → <a href="/shoes/nike-pegasus-42">페가수스 42</a>. 풀렝스 에어에 와이드까지, 나이키의 정석입니다. 41과의 차이는 <a href="/blog/nike-pegasus-41-vs-42-comparison">페가수스 41 vs 42</a>에, 42의 실착 평가는 <a href="/blog/nike-pegasus-42-review">페가수스 42 리뷰</a>에 정리했습니다.</li>
  <li><strong>💰 가성비 최저가</strong> → <a href="/shoes/nike-rival-fly-4">라이벌 플라이 4</a>(13.9만) 또는 할인 중인 <a href="/shoes/nike-pegasus-41">페가수스 41</a>.</li>
  <li><strong>☁️ 푹신하게·무릎 보호</strong> → <a href="/shoes/nike-vomero-18">보메로 18</a>(43mm). 더 푹신하면 <a href="/shoes/nike-vomero-plus">보메로 플러스</a>, 극한 회복용은 50mm <a href="/shoes/nike-vomero-premium">보메로 프리미엄</a>.</li>
  <li><strong>🦶 평발·안정</strong> → <a href="/shoes/nike-structure-26">스트럭처 26</a>. 나이키 유일 안정화로 와이드 옵션도 있습니다. 다른 브랜드 안정화와 비교하려면 <a href="/blog/stability-shoes-self-diagnosis-fit-guide-2026">안정화 자가진단 가이드</a>를 보세요.</li>
  <li><strong>⚡ 가볍게·조금 빠르게</strong> → <a href="/shoes/nike-pegasus-plus">페가수스 플러스</a>(244g ZoomX).</li>
  <li><strong>🏃 첫 카본(가성비)</strong> → <a href="/shoes/nike-zoom-fly-6">줌 플라이 6</a>. 베이퍼 반값으로 카본을 경험합니다.</li>
  <li><strong>🏅 풀마라톤 레이스</strong> → <a href="/shoes/nike-vaporfly-4">베이퍼플라이 4</a>(166g) 또는 최상위 <a href="/shoes/nike-alphafly-3">알파플라이 3</a>. 둘의 차이는 <a href="/blog/nike-vaporfly-4-vs-alphafly-3-comparison">베이퍼 vs 알파 비교</a>에 있습니다.</li>
  <li><strong>💨 5K·10K 단거리 PB</strong> → <a href="/shoes/nike-streakfly-2">스트릭플라이 2</a>(128g).</li>
</ul>

<h2>5. 발볼 — 나이키 토박스, 한국 러너는 꼭 확인</h2>

<p>나이키의 가장 큰 약점이 <strong>좁은 토박스</strong>입니다. 발볼 넓은 한국 러너가 많은데, 나이키는 라인마다 폭이 크게 갈리므로 사기 전에 반드시 확인해야 합니다.</p>

<table>
  <thead>
    <tr><th>발볼</th><th>모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>와이드 옵션 있음 (추천)</strong></td><td>페가수스 41 · 42 · 스트럭처 26 · 보메로 18 · 보메로 플러스</td></tr>
    <tr><td><strong>표준 (보통)</strong></td><td>페가수스 42(72.3mm) · 베이퍼플라이 4(73.2mm) · 알파플라이 3</td></tr>
    <tr><td><strong>좁음 (발볼 넓으면 주의)</strong></td><td>페가수스 프리미엄 · 페가수스 플러스 · 보메로 프리미엄 · 줌 플라이 6 · 라이벌 플라이 4 · 스트릭플라이 2</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">📏</span>
  <div class="callout-body">
    <p class="callout-title">발볼 넓으면 와이드 라인 또는 다른 브랜드</p>
    <p>흥미롭게도 <strong>프리미엄·플러스 같은 비싼 라인일수록 토박스가 좁습니다.</strong> 발볼이 넓다면 와이드가 나오는 페가수스·스트럭처·보메로를 고르거나, 토박스가 넉넉한 <a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a>·아식스를 함께 보세요. 발볼별 신발 선택은 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너를 위한 러닝화</a>에 11종 실측이 있습니다.</p>
  </div>
</div>

<h2>6. 가격 인플레 — 28만원 데일리의 시대</h2>

<p>나이키 라인업을 볼 때 놓치기 쉬운 게 <strong>가격</strong>입니다. 같은 라인에서 접미사 하나로 10만원 이상 벌어집니다.</p>

<ul>
  <li><strong>페가수스</strong>: 42(16.9만) → 플러스(21.9만) → 프리미엄(27.9만)</li>
  <li><strong>보메로</strong>: 18(18.9만) → 플러스(20.9만) → 프리미엄(28.9만)</li>
  <li><strong>레이싱</strong>: 줌 플라이(22.9만) → 베이퍼플라이(30.9만) → 알파플라이(34.9만)</li>
</ul>

<p>중요한 건 <strong>"프리미엄"이 항상 더 좋은 건 아니라는 점</strong>입니다. 프리미엄은 폼을 겹쳐 무겁고(페가수스 프리미엄 308g, 보메로 프리미엄 326g) 토박스도 좁아집니다. 대부분의 러너에게는 <strong>기본 페가수스 42나 보메로 18이 가성비·실용성에서 더 낫습니다.</strong> 프리미엄은 "최대 쿠션·최대 회복"이라는 특정 목적이 분명할 때만 의미가 있습니다.</p>

<h2>한 걸음 더</h2>

<ul>
  <li>🔵 나이키 브랜드 전체 신발 보기 → <a href="/brands/nike">나이키 브랜드 페이지</a></li>
  <li>🏁 레이싱 카본화 베스트 → <a href="/best/racing">레이싱 러닝화 추천</a></li>
  <li>🟦 다른 브랜드 계급도 → <a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> · <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a> · <a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카</a> · <a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a> · <a href="/blog/adidas-running-shoes-lineup-tier-guide-2026">아디다스</a> · <a href="/blog/on-running-shoes-lineup-tier-guide-2026">온</a> · <a href="/blog/puma-running-shoes-lineup-tier-guide-2026">푸마</a> · <a href="/blog/mizuno-running-shoes-lineup-tier-guide-2026">미즈노</a> · <a href="/blog/saucony-running-shoes-lineup-tier-guide-2026">사코니</a> · <a href="/blog/li-ning-red-hare-9-lineup-2026">라이닝</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 한국 공식 판매 모델과 RunRepeat 실측·나이키 공식 자료를 토대로 작성했습니다. 라인업·가격·발볼 옵션은 시즌마다 바뀔 수 있으니 구매 전 각 모델 상세 페이지와 공식몰에서 최신 정보를 확인하세요.</p>
`,
  },
  {
    id: 'new-balance-running-shoes-lineup-tier-guide-2026',
    slug: 'new-balance-running-shoes-lineup-tier-guide-2026',
    title: '뉴발란스 러닝화 계급도 2026 — 숫자가 알려주는 전체 라인업 | 6x=안정·8x=중립·10xx=프리미엄, Fresh Foam X vs FuelCell 한 장 정리',
    description:
      '뉴발란스 러닝화 9종을 번호 체계(6x 안정·8x 중립·10xx 프리미엄)와 폼 기술(Fresh Foam X·인피니온·FuelCell·PEBA) 2축으로 한 장에. 880 입문부터 SC Elite 레이싱까지 가격·무게·스택·와이드 옵션 비교표 + 발볼 넓은 한국 러너를 위한 선택 로드맵. 뉴발 안정화가 860뿐인 이유와 대안까지 정직하게 정리했습니다.',
    thumbnail: '/images/blog/new-balance-lineup-tier-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 12,
    tags: ['뉴발란스 러닝화', '뉴발란스 계급도', '러닝화 라인업', '러닝화 등급', '뉴발란스 번호 체계', '1080', '860', '880', 'FuelCell', 'Fresh Foam X'],
    faqs: [
      { question: '뉴발란스 러닝화 숫자는 무슨 뜻인가요?', answer: '모델 번호의 끝 두 자리가 기능을 나타냅니다. 6x(860)는 안정화, 8x(880)는 중립 데일리, 10xx(1080)는 프리미엄 쿠션입니다. 앞자리가 클수록 더 고급 폼·쿠션 기술이 들어갑니다. 단 FuelCell 레이싱 라인(레벨·SC Trainer·SC Elite)은 번호 대신 이름으로 구분합니다.' },
      { question: '뉴발란스 안정화는 뭘 사야 하나요?', answer: '뉴발란스 현행 안정화는 사실상 860 한 줄(V14·V15)뿐입니다. 평발·과내전이라면 860으로 시작하고, 더 강한 교정이나 더 넓은 라인업이 필요하면 아식스 카야노·브룩스 아드레날린 GTS 같은 안정화 전문 라인을 함께 보세요.' },
      { question: '1080과 880은 뭐가 다른가요?', answer: '둘 다 중립 쿠션이지만 1080(10xx)이 상위 등급입니다. 1080 V15는 인피니온 폼으로 216g까지 경량화된 프리미엄, 880 V15는 Fresh Foam X에 40mm 맥시멀 스택을 얹은 입문~데일리입니다. 가격은 1080이 2만원 비쌉니다.' },
      { question: '발볼 넓은데 뉴발란스 와이드 옵션이 있나요?', answer: '있습니다. 뉴발란스는 한국 러너에게 유리한 브랜드로, 880·1080·860·발로스에 2E(약간 넓음)·4E(넓음) 옵션이 있고, 특히 860 V14는 Narrow/표준/2E/X-Wide 4가지 발볼을 제공합니다. 레벨 V5는 와이드가 없지만 토박스 자체가 넓습니다.' },
      { question: 'Fresh Foam X와 FuelCell은 어떻게 다른가요?', answer: 'Fresh Foam X는 부드럽고 안정적인 EVA 기반 폼으로 데일리·쿠션·안정화 라인(880·1080·860)에 쓰입니다. FuelCell은 반발력 중심의 PEBA 기반 폼으로 스피드·레이싱 라인(레벨·SC Trainer·SC Elite)에 들어갑니다. 푹신함을 원하면 Fresh Foam X, 튕기는 반발을 원하면 FuelCell입니다.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>뉴발란스는 숫자만 읽으면 끝</strong> — 끝 두 자리가 6x=안정화(860)·8x=중립(880)·10xx=프리미엄(1080), 앞자리가 클수록 상위 등급입니다. 레이싱은 번호 대신 이름(레벨·SC).</li>
    <li><strong>축은 두 개</strong> — 번호(용도) × 폼 기술(Fresh Foam X는 푹신·안정 / FuelCell은 반발·스피드). 이 표 하나로 9종이 정리됩니다.</li>
    <li><strong>발볼 넓은 한국 러너에게 유리</strong> — 2E·4E 와이드 옵션이 풍부합니다. 단 뉴발 안정화는 사실상 860 하나뿐이라, 강한 교정이 필요하면 카야노·아드레날린도 함께 보세요.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🔢</span>
  <div class="callout-body">
    <p class="callout-title">이 글의 역할 — 뉴발란스 계급도 한 장</p>
    <p>"뉴발란스 러닝화 뭐가 뭔지 모르겠다"는 분을 위한 길잡이입니다. 추천 순위를 매기는 글이 아니라, <strong>숫자와 폼 기술로 전체 라인업을 한 번에 이해</strong>시키는 지도예요. 가격·무게·스택·와이드 옵션은 모두 한국 공식가와 RunRepeat 실측 기준이며, 각 모델은 상세 페이지로 바로 연결됩니다.</p>
  </div>
</div>

<h2>1. 뉴발란스 숫자 읽는 법 — 끝 두 자리가 용도다</h2>

<p>뉴발란스가 헷갈리는 이유는 모델명이 죄다 숫자라서입니다. 그런데 규칙은 단순합니다. <strong>끝 두 자리가 신발의 용도</strong>, <strong>앞자리가 등급(쿠션 레벨)</strong>이에요.</p>

<table>
  <thead>
    <tr><th>끝 두 자리</th><th>용도</th><th>대표 모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>6x</strong></td><td>안정화 (과내전 지지)</td><td>860</td></tr>
    <tr><td><strong>8x</strong></td><td>중립 데일리</td><td>880</td></tr>
    <tr><td><strong>10xx</strong></td><td>프리미엄 중립 쿠션</td><td>1080</td></tr>
  </tbody>
</table>

<p>그리고 앞자리가 클수록 위 등급입니다. 같은 중립이라도 <strong>880(8백번대)보다 1080(천번대)</strong>이 더 두껍고 고급 폼을 씁니다. 여기까지가 'Fresh Foam X 라인'의 번호 규칙이고, <strong>스피드·레이싱은 번호를 버리고 이름으로 갑니다</strong> — 레벨(Rebel), SC Trainer, SC Elite. 이름이 붙으면 "반발력 중심 FuelCell 라인"이라고 보면 됩니다.</p>

<h2>2. 폼이 두 갈래다 — Fresh Foam X vs FuelCell</h2>

<p>번호만큼 중요한 두 번째 축이 미드솔 폼입니다. 뉴발란스 러닝화는 크게 네 종류 폼을 쓰는데, 성격이 확실히 갈립니다.</p>

<table>
  <thead>
    <tr><th>폼</th><th>성격</th><th>들어가는 모델</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>Fresh Foam X</strong></td><td>부드럽고 안정적 (EVA 기반)</td><td>880 · 1080 V14 · 860</td></tr>
    <tr><td><strong>인피니온(Infinion)</strong></td><td>질소 주입 슈퍼크리티컬 — 가볍고 탄성↑</td><td>1080 V15</td></tr>
    <tr><td><strong>FuelCell</strong></td><td>반발 중심 (PEBA 블렌드)</td><td>레벨 · SC Trainer · SC Elite</td></tr>
    <tr><td><strong>PEBA + EVA 블렌드</strong></td><td>바운시한 데일리</td><td>발로스</td></tr>
  </tbody>
</table>

<p>요약하면 <strong>푹신·안정을 원하면 Fresh Foam X 계열, 튕기는 반발·스피드를 원하면 FuelCell 계열</strong>입니다. 1080 V15만 예외적으로 인피니온이라는 신소재로 갈아타 전작보다 69g 가벼워졌다는 점이 포인트예요.</p>

<h2>3. 뉴발란스 러닝화 계급도 — 9종 한눈에</h2>

<p>위 두 축(번호 × 폼)으로 현재 한국에서 살 수 있는 뉴발란스 러닝화 9종을 줄 세우면 이렇게 됩니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>분류</th><th>폼</th><th>가격</th><th>무게</th><th>한 줄 성격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/new-balance-880-v15"><strong>880 V15</strong></a></td><td>입문·데일리</td><td>Fresh Foam X</td><td>18.9만</td><td>286g</td><td>40mm 맥시멀 스택, 첫 러닝화</td></tr>
    <tr><td><a href="/shoes/new-balance-860-v14"><strong>860 V14</strong></a></td><td>안정화</td><td>Fresh Foam X</td><td>17.9만</td><td>295g</td><td>평발 가성비, 발볼 4옵션</td></tr>
    <tr><td><a href="/shoes/new-balance-860-v15"><strong>860 V15</strong></a></td><td>안정화</td><td>Fresh Foam X 듀얼</td><td>18.9만</td><td>330g</td><td>넓어진 힐, 장거리 안정</td></tr>
    <tr><td><a href="/shoes/new-balance-rebel-v5"><strong>레벨 V5</strong></a></td><td>스피드 데일리</td><td>FuelCell</td><td>18.9만</td><td>220g</td><td>경량 만능, 데일리+템포</td></tr>
    <tr><td><a href="/shoes/new-balance-1080-v14"><strong>1080 V14</strong></a></td><td>프리미엄 쿠션</td><td>Fresh Foam X</td><td>19.9만</td><td>285g</td><td>구름 같은 클래식 부드러움</td></tr>
    <tr><td><a href="/shoes/new-balance-1080-v15"><strong>1080 V15</strong></a></td><td>프리미엄 쿠션</td><td>인피니온</td><td>20.9만</td><td>216g</td><td>69g 경량화, 플래그십</td></tr>
    <tr><td><a href="/shoes/new-balance-sc-trainer-v3"><strong>SC Trainer V3</strong></a></td><td>슈퍼트레이너</td><td>FuelCell + 카본</td><td>24.9만</td><td>278g</td><td>카본 훈련화, 마라톤 준비</td></tr>
    <tr><td><a href="/shoes/new-balance-balos-v1"><strong>발로스 V1</strong></a></td><td>바운시 데일리</td><td>PEBA 블렌드</td><td>25.9만</td><td>261g</td><td>레이싱 외 유일 PEBA, 통통</td></tr>
    <tr><td><a href="/shoes/new-balance-sc-elite-v5"><strong>SC Elite V5</strong></a></td><td>레이싱</td><td>100% PEBA + 카본</td><td>31.9만</td><td>198g</td><td>슈퍼슈즈, 넓은 토박스</td></tr>
  </tbody>
</table>

<p>※ 무게는 남성 US 9 기준, 가격은 한국 공식가입니다. 스택·드롭·발볼 상세는 각 모델 상세 페이지에 있습니다.</p>

<h2>4. 목적별로 — 나는 뭘 사야 할까</h2>

<ul>
  <li><strong>🟢 러닝 입문 첫 신발</strong> → <a href="/shoes/new-balance-880-v15">880 V15</a>. 40mm 스택으로 무릎 충격을 확실히 잡고, 2E 와이드까지 있어 발볼 걱정이 없습니다. 18.9만원에 600km 내구성으로 km당 약 315원.</li>
  <li><strong>🦶 평발·과내전이라 지지가 필요</strong> → <a href="/shoes/new-balance-860-v14">860 V14</a>(가성비·발볼 4옵션) 또는 <a href="/shoes/new-balance-860-v15">860 V15</a>(넓어진 힐·장거리). 뉴발 안정화는 이 860 한 줄이 전부입니다(아래 8번 참고).</li>
  <li><strong>☁️ 매일 푹신하게 장거리</strong> → <a href="/shoes/new-balance-1080-v15">1080 V15</a>. 인피니온 폼으로 216g까지 가벼워져 템포런까지 소화합니다. 더 부드러운 클래식 감을 원하면 <a href="/shoes/new-balance-1080-v14">1080 V14</a>.</li>
  <li><strong>⚡ 가볍게, 조금 빠르게</strong> → <a href="/shoes/new-balance-rebel-v5">레벨 V5</a>. 220g에 부드러운 FuelCell, 데일리부터 인터벌까지 한 켤레로. 토박스가 넓어 와이드 없이도 발볼이 편합니다.</li>
  <li><strong>🏃 마라톤 훈련(카본 입문)</strong> → <a href="/shoes/new-balance-sc-trainer-v3">SC Trainer V3</a>. 풀카본 슈퍼트레이너로 레이스 감각을 훈련에서 미리 잡습니다.</li>
  <li><strong>🏅 대회 기록 단축</strong> → <a href="/shoes/new-balance-sc-elite-v5">SC Elite V5</a>. 198g 100% PEBA 슈퍼슈즈. 토박스가 74.5mm로 베이퍼플라이·알파플라이보다 넓어 발볼 넓은 러너에게 거의 유일한 선택지입니다.</li>
  <li><strong>🎈 바운시한 프리미엄 데일리</strong> → <a href="/shoes/new-balance-balos-v1">발로스 V1</a>. 레이싱 외 유일하게 PEBA를 담은 통통 튀는 데일리. 다만 25.9만원으로 가격이 부담입니다.</li>
</ul>

<h2>5. 발볼 넓은 한국 러너 — 와이드 옵션 정리</h2>

<p>뉴발란스가 한국에서 사랑받는 진짜 이유 중 하나가 <strong>발볼 옵션</strong>입니다. 토박스가 좁기로 유명한 나이키와 달리, 주요 모델에 2E·4E 와이드가 있어요.</p>

<table>
  <thead>
    <tr><th>모델</th><th>발볼 옵션</th><th>비고</th></tr>
  </thead>
  <tbody>
    <tr><td>860 V14</td><td>Narrow / 표준(D) / 2E / X-Wide</td><td>발볼 옵션 최강 4종</td></tr>
    <tr><td>880 V15</td><td>표준(D) / 2E</td><td>입문 와이드</td></tr>
    <tr><td>1080 V15</td><td>표준(D) / 2E / 4E</td><td>플래그십 와이드</td></tr>
    <tr><td>1080 V14</td><td>표준(D) / 2E</td><td>D는 토박스 좁음 → 2E 권장</td></tr>
    <tr><td>발로스 V1</td><td>표준(D) / 2E</td><td>—</td></tr>
    <tr><td>레벨 V5</td><td>표준(D)만</td><td>토박스 75mm로 넓어 D로도 여유</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">📏</span>
  <div class="callout-body">
    <p class="callout-title">발볼 넓으면 무조건 2E부터</p>
    <p>특히 <strong>1080 V14는 표준(D)의 토박스가 68mm 미만으로 좁습니다.</strong> 발볼 넓은 한국 러너는 2E 와이드를 선택하세요. 발볼·평발 전반은 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너를 위한 러닝화</a> 가이드에 11종 토박스 실측이 정리돼 있습니다.</p>
  </div>
</div>

<h2>6. 1080 V14 vs V15, 860 V14 vs V15 — 세대 차이</h2>

<p>같은 모델의 세대 차이가 의외로 큽니다. 두 라인 모두 최근 세대에서 성격이 꽤 바뀌었어요.</p>

<ul>
  <li><strong>1080</strong>: V14(285g, Fresh Foam X) → V15(216g, 인피니온)으로 <strong>69g 경량화</strong>. 가벼움을 원하면 V15, 더 묵직하고 부드러운 클래식을 원하면 V14. 자세한 비교는 <a href="/blog/new-balance-1080-v14-vs-v15-comparison">1080 V14 vs V15</a>.</li>
  <li><strong>860</strong>: V14(295g, 메디얼 포스트, 발볼 4옵션) → V15(330g, 이중 밀도 + 넓어진 힐). 발볼 옵션은 V14가, 장거리 힐 안정감은 V15가 낫습니다. 자세한 비교는 <a href="/blog/new-balance-860-v14-vs-v15-comparison">860 V14 vs V15</a>.</li>
</ul>

<h2>7. 정직하게 — 뉴발란스 안정화는 사실 860 하나뿐</h2>

<p>"안정화 하면 뉴발란스"라는 인식이 있지만, 데이터로 보면 <strong>뉴발란스의 진짜 강점은 안정화가 아니라 중립 쿠션(1080)과 레이싱(SC) 라인</strong>입니다. 현행 안정화는 860 한 줄(V14·V15)이 전부예요. 비교해 보면 차이가 뚜렷합니다.</p>

<table>
  <thead>
    <tr><th>브랜드</th><th>현행 안정화 라인</th><th>층위</th></tr>
  </thead>
  <tbody>
    <tr><td>아식스</td><td>GT-1000 · GT-2000 · 카야노</td><td>입문~프리미엄 3단계</td></tr>
    <tr><td>브룩스</td><td>아드레날린 GTS · 글리세린 GTS</td><td>경량~맥스쿠션</td></tr>
    <tr><td><strong>뉴발란스</strong></td><td><strong>860 (V14·V15)</strong></td><td><strong>사실상 1줄</strong></td></tr>
  </tbody>
</table>

<p>그러니 평발·과내전이 확실하고 <strong>강한 교정이나 여러 선택지</strong>가 필요하다면, 860만 보지 말고 안정화 전문 라인을 함께 비교하세요. 어떤 지지 방식이 내게 맞는지부터 정하는 게 순서입니다 — <a href="/blog/stability-shoes-self-diagnosis-fit-guide-2026">평발·과내전 안정화 자가진단 가이드</a>에서 4대 지지 방식과 와이드 옵션을 정리했고, 860·카야노·글리세린 GTS를 직접 맞붙인 <a href="/blog/kayano-33-vs-glycerin-gts-22-vs-860-v15-2026">안정화 3강 비교</a>도 참고가 됩니다.</p>

<h2>한 걸음 더</h2>

<ul>
  <li>🟦 뉴발란스 브랜드 전체 신발 보기 → <a href="/brands/new-balance">뉴발란스 브랜드 페이지</a></li>
  <li>🟩 안정화 카테고리 베스트 → <a href="/best/stability">안정화 러닝화 추천</a></li>
  <li>🟨 평발·과내전이라면 → <a href="/blog/stability-shoes-self-diagnosis-fit-guide-2026">안정화 자가진단 + 지지 방식 가이드</a></li>
  <li>🔵 다른 브랜드 계급도 → <a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a> · <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a> · <a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카</a> · <a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a> · <a href="/blog/adidas-running-shoes-lineup-tier-guide-2026">아디다스</a> · <a href="/blog/on-running-shoes-lineup-tier-guide-2026">온</a> · <a href="/blog/puma-running-shoes-lineup-tier-guide-2026">푸마</a> · <a href="/blog/mizuno-running-shoes-lineup-tier-guide-2026">미즈노</a> · <a href="/blog/saucony-running-shoes-lineup-tier-guide-2026">사코니</a> · <a href="/blog/li-ning-red-hare-9-lineup-2026">라이닝</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 한국 공식 판매 모델과 RunRepeat 실측·뉴발란스 공식 자료를 토대로 작성했습니다. 라인업·가격·발볼 옵션은 시즌마다 바뀔 수 있으니 구매 전 각 모델 상세 페이지와 공식몰에서 최신 정보를 확인하세요.</p>
`,
  },
  {
    id: 'stability-shoes-self-diagnosis-fit-guide-2026',
    slug: 'stability-shoes-self-diagnosis-fit-guide-2026',
    title: '평발인데 안정화 뭐 신지? — 한국 러너 과내전 자가진단 + 안정화 4대 지지 방식 + 와이드 옵션 총정리 2026',
    description:
      '"내가 안정화가 필요한가?"부터. 신발 밑창 마모·무릎 안쪽 통증으로 하는 과내전 자가진단, 뉴발 860·아식스 카야노·브룩스 아드레날린의 지지 방식(Stability Plane·FLUIDSUPPORT·GuideRails)이 어떻게 다른지, 발볼 넓은 한국 러너를 위한 D/2E/4E 와이드 옵션 매트릭스까지. 추천 리스트를 보기 전에 읽는 안정화 길잡이입니다.',
    thumbnail: '/images/blog/stability-shoes-self-diagnosis-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 11,
    tags: ['안정화 러닝화', '평발 러닝화', '과내전', '오버프로네이션', '와이드 러닝화', '발볼 넓은 발', '카야노', '뉴발란스 860', '아드레날린 GTS', '러닝 부상 예방'],
    faqs: [
      { question: '제가 안정화가 필요한지 어떻게 아나요?', answer: '세 가지를 보세요. ① 평소 신발 밑창이 안쪽(엄지쪽)부터 닳는다 ② 달리고 나면 무릎·정강이 안쪽이 아프다 ③ 맨발로 섰을 때 발 안쪽 아치가 바닥에 닿는다(평발). 두 개 이상 해당하면 과내전 가능성이 높아 안정화가 도움이 됩니다. 정확한 진단은 러닝 전문 매장의 보행 분석이나 정형외과가 확실합니다.' },
      { question: '중립인데 안정화를 신으면 안 되나요?', answer: '권장하지 않습니다. 과내전이 없는 발에 강한 지지가 들어가면 자연스러운 움직임을 방해해 오히려 발목·무릎에 부담이 될 수 있습니다(과교정). 본인이 중립이라면 중립 쿠션화가 맞습니다. 안정화는 "지지가 필요한 발"을 위한 신발입니다.' },
      { question: '안정화 지지 방식이 다 같은 거 아닌가요?', answer: '다릅니다. 크게 ① 단단한 판으로 받치는 방식(뉴발 860의 Stability Plane·메디얼 포스트) ② 적응형 가이드(아식스 카야노 FLUIDSUPPORT) ③ 양옆 가드레일(브룩스 GuideRails) ④ 경량 프레임(호카 아라히 J-Frame)으로 나뉩니다. 강한 교정을 원하면 ①, 부드럽고 자연스러운 지지를 원하면 ③④가 맞습니다.' },
      { question: '발볼 넓은데 안정화 와이드 옵션이 있나요?', answer: '있습니다. 뉴발란스 860 V14가 Narrow/표준/2E/X-Wide 4가지로 가장 폭넓고, 아식스 카야노도 2E·4E를 제공합니다. 브룩스 글리세린 GTS는 토박스 자체가 넓은 편입니다. 발볼 넓은 한국 러너라면 안정화일수록 와이드를 우선 고려하세요.' },
      { question: '안정화는 무겁고 둔하지 않나요?', answer: '전통 안정화(860 330g, 카야노)는 무거운 편이 맞습니다. 하지만 호카 아라히(J-Frame)나 소커니 가이드처럼 300g 안팎의 가벼운 안정화도 늘고 있습니다. 무게가 신경 쓰이면 경량 안정화 쪽을 보세요. 다만 강한 과내전일수록 지지력이 우선입니다.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>순서가 중요합니다</strong> — "어떤 안정화가 좋아요?"보다 먼저 "내가 안정화가 필요한가?"를 확인하세요. 밑창 마모·무릎 안쪽 통증·평발 3가지로 자가진단합니다.</li>
    <li><strong>지지 방식이 4가지로 갈립니다</strong> — 단단한 판(뉴발 860)·적응형 가이드(카야노)·양옆 가드레일(브룩스)·경량 프레임(호카 아라히). 강도와 무게가 다릅니다.</li>
    <li><strong>발볼 넓은 한국 러너는 와이드부터</strong> — 860 V14가 4옵션으로 최강, 카야노 2E·4E. 추천 순위보다 "내 발에 맞는 방식·폭"을 먼저 고르는 길잡이입니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🧭</span>
  <div class="callout-body">
    <p class="callout-title">이 글의 역할 — 추천 리스트 전에 읽는 길잡이</p>
    <p>안정화 추천 순위는 이미 많습니다. 이 글은 그 전에 필요한 <strong>"진단 → 지지 방식 이해 → 발볼 매칭"</strong> 3단계를 다룹니다. 구체적인 추천 순위가 필요하면 <a href="/blog/stability-running-shoes-overpronation-flat-feet-2026">평발·과내전 안정화 추천 2026</a>으로, 최상위 3종 직접 비교는 <a href="/blog/kayano-33-vs-glycerin-gts-22-vs-860-v15-2026">안정화 3강 비교</a>로 이어집니다.</p>
  </div>
</div>

<h2>1단계. 나는 안정화가 필요한가? — 과내전 자가진단</h2>

<p>안정화(stability) 러닝화는 <strong>과내전(overpronation)</strong>, 즉 착지할 때 발이 안쪽으로 과하게 무너지는 발을 잡아주는 신발입니다. 모두에게 좋은 게 아니라, <strong>지지가 필요한 발</strong>을 위한 신발이에요. 먼저 세 가지를 체크하세요.</p>

<table>
  <thead>
    <tr><th>체크 항목</th><th>과내전 신호</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>신발 밑창 마모</strong></td><td>안쪽(엄지발가락 쪽)부터 닳는다</td></tr>
    <tr><td><strong>달린 뒤 통증</strong></td><td>무릎 안쪽·정강이 안쪽이 아프다</td></tr>
    <tr><td><strong>발 아치</strong></td><td>맨발로 서면 안쪽 아치가 바닥에 닿는다(평발 경향)</td></tr>
  </tbody>
</table>

<p>두 개 이상 해당하면 과내전일 가능성이 높고, 안정화가 도움이 됩니다. 한국 러너는 평발 비율이 높은 편이라 안정화 수요가 특히 큽니다. 내전 유형의 원리와 분류는 <a href="/blog/pronation-type-running-shoe-guide-2026">내전(프로네이션) 유형별 가이드</a>에 자세히 정리했습니다.</p>

<div class="callout info">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">중립이라면 안정화는 오히려 독</p>
    <p>위 항목에 거의 해당하지 않는다면 당신은 <strong>중립(neutral)</strong>일 가능성이 큽니다. 중립 발에 강한 안정화 지지가 들어가면 자연스러운 움직임을 방해해 발목·무릎에 부담이 될 수 있어요(과교정). 무릎이 아프다고 무조건 안정화가 답은 아닙니다 — 무릎 통증의 원인별 신발 선택은 <a href="/blog/knee-pain-running-shoes">무릎 통증 러닝화 가이드</a>를 참고하세요.</p>
  </div>
</div>

<h2>2단계. 안정화 4대 지지 방식 — 같은 안정화가 아니다</h2>

<p>"안정화"라고 다 같지 않습니다. <strong>발을 어떻게 잡아주느냐</strong>가 브랜드마다 다르고, 이게 착화감과 교정 강도를 좌우합니다. 크게 네 갈래예요.</p>

<table>
  <thead>
    <tr><th>지지 방식</th><th>원리</th><th>대표 신발</th><th>성격</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>단단한 판·포스트</strong></td><td>Stability Plane / 메디얼 포스트로 안쪽을 물리적으로 받침</td><td><a href="/shoes/new-balance-860-v15">뉴발 860</a></td><td>교정 강도 높음, 묵직</td></tr>
    <tr><td><strong>적응형 가이드</strong></td><td>FLUIDSUPPORT — 필요할 때만 단단해지는 적응형 미드솔</td><td><a href="/shoes/asics-gel-kayano-33">아식스 카야노</a></td><td>프리미엄, 부드러운 교정</td></tr>
    <tr><td><strong>양옆 가드레일</strong></td><td>GuideRails — 무릎 과도한 움직임을 양옆에서 제한</td><td><a href="/shoes/brooks-adrenaline-gts-25">브룩스 아드레날린 GTS</a></td><td>자연스러움, 비-과교정</td></tr>
    <tr><td><strong>경량 프레임</strong></td><td>J-Frame / Center Path — 가벼운 구조적 지지</td><td><a href="/shoes/hoka-arahi-8">호카 아라히</a> · <a href="/shoes/saucony-guide-18">소커니 가이드</a></td><td>가벼움, 데일리</td></tr>
  </tbody>
</table>

<ul>
  <li><strong>강한 교정이 필요하다(심한 평발·과내전)</strong> → 단단한 판 방식의 <a href="/shoes/new-balance-860-v15">860</a>이나, 프리미엄 적응형 <a href="/shoes/asics-gel-kayano-33">카야노 33</a>. 카야노 세대 차이는 <a href="/blog/asics-kayano-32-vs-33-comparison">카야노 32 vs 33</a>에 정리돼 있습니다.</li>
  <li><strong>부드럽고 자연스러운 지지를 원한다</strong> → 가드레일 방식의 <a href="/shoes/brooks-adrenaline-gts-25">아드레날린 GTS</a>, 또는 쿠션이 더 두툼한 <a href="/shoes/brooks-glycerin-gts-22">글리세린 GTS</a>.</li>
  <li><strong>가볍게 데일리로</strong> → 경량 프레임의 <a href="/shoes/hoka-arahi-8">아라히</a>·<a href="/shoes/saucony-guide-18">가이드</a>. "안정화는 무겁다"는 편견을 깨는 300g 안팎 라인입니다.</li>
</ul>

<h2>3단계. 발볼 — 한국 러너 와이드 옵션 매트릭스</h2>

<p>지지 방식을 골랐으면 마지막은 <strong>발볼</strong>입니다. 발볼 넓은 한국 러너에게 안정화는 특히 중요한데, 지지 구조가 들어가면서 토박스가 조여질 수 있기 때문이에요. 다행히 안정화 라인은 와이드 옵션이 풍부합니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>지지 방식</th><th>발볼 옵션</th><th>무게</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/new-balance-860-v14">뉴발 860 V14</a></td><td>메디얼 포스트</td><td><strong>Narrow / 표준 / 2E / X-Wide</strong></td><td>295g</td></tr>
    <tr><td><a href="/shoes/new-balance-860-v15">뉴발 860 V15</a></td><td>Stability Plane</td><td>표준 / 2E</td><td>330g</td></tr>
    <tr><td><a href="/shoes/asics-gel-kayano-33">아식스 카야노 33</a></td><td>FLUIDSUPPORT</td><td>표준 / 2E / 4E</td><td>중량급</td></tr>
    <tr><td><a href="/shoes/brooks-glycerin-gts-22">브룩스 글리세린 GTS 22</a></td><td>GuideRails</td><td>표준 토박스가 넓음</td><td>쿠션급</td></tr>
    <tr><td><a href="/shoes/hoka-arahi-8">호카 아라히 8</a></td><td>J-Frame</td><td>표준 / 와이드</td><td>경량</td></tr>
  </tbody>
</table>

<div class="callout info">
  <span class="callout-icon">📏</span>
  <div class="callout-body">
    <p class="callout-title">발볼 넓으면 860 V14의 4옵션이 압도적</p>
    <p>발볼 폭이 고민이라면 <strong>뉴발란스 860 V14의 Narrow/표준/2E/X-Wide 4단계</strong>가 가장 정밀하게 맞출 수 있습니다. 발볼·평발 전반의 신발 선택은 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너를 위한 러닝화</a>에 11종 토박스 실측이 있으니 함께 보세요.</p>
  </div>
</div>

<h2>그래서 뭘 사지? — 상황별 정리</h2>

<ul>
  <li><strong>처음 안정화 + 발볼 넓음 + 가성비</strong> → <a href="/shoes/new-balance-860-v14">뉴발 860 V14</a>(17.9만, 발볼 4옵션).</li>
  <li><strong>강한 교정 + 프리미엄</strong> → <a href="/shoes/asics-gel-kayano-33">아식스 카야노 33</a>.</li>
  <li><strong>자연스러운 지지 + 두툼한 쿠션</strong> → <a href="/shoes/brooks-glycerin-gts-22">브룩스 글리세린 GTS 22</a>.</li>
  <li><strong>가벼운 안정화 + 데일리</strong> → <a href="/shoes/hoka-arahi-8">호카 아라히 8</a> · <a href="/shoes/saucony-guide-18">소커니 가이드 18</a>.</li>
  <li><strong>뉴발란스 라인업 전체가 궁금</strong> → <a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스 러닝화 계급도</a>에서 안정화 외 라인까지 한 장에.</li>
</ul>

<h2>한 걸음 더</h2>

<ul>
  <li>🏆 안정화 추천 순위가 필요하면 → <a href="/blog/stability-running-shoes-overpronation-flat-feet-2026">평발·과내전 안정화 추천 2026</a></li>
  <li>⚔️ 최상위 3종 직접 비교 → <a href="/blog/kayano-33-vs-glycerin-gts-22-vs-860-v15-2026">카야노 33 vs 글리세린 GTS vs 860</a></li>
  <li>🦶 평발·과내전 베스트 → <a href="/best/flat-feet">평발 러닝화 추천</a> · <a href="/best/stability">안정화 러닝화 추천</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 정보로, 자가진단은 참고용입니다. 통증이 지속되거나 심한 평발·부상 이력이 있다면 러닝 전문 매장의 보행 분석이나 정형외과 상담을 받으세요. 가격·발볼 옵션은 시즌마다 바뀔 수 있어 구매 전 각 모델 상세 페이지에서 확인하시기 바랍니다.</p>
`,
  },
  {
    id: 'world-marathon-majors-guide-2026',
    slug: 'world-marathon-majors-guide-2026',
    title: '세계 6대 마라톤(애벗 메이저) 완전정복 — 한국 러너의 도전 지도 | 신청법·난이도·비용·식스스타, 어디부터 갈까',
    description: '도쿄·보스턴·런던·베를린·시카고·뉴욕 6대 메이저(+시드니 7번째)를 한 장에. 대회별 개최월·진입방식(추첨/자선/BQ)·코스 난이도·한국 접근성 비교표 + 나에게 맞는 첫 메이저 의사결정 트리 + 식스스타 메달까지. 각 대회 상세 가이드로 바로 연결되는 시리즈 관문입니다.',
    thumbnail: '/images/blog/world-marathon-majors-guide-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 10,
    tags: ['세계 6대 마라톤', '애벗 월드 마라톤 메이저', '메이저 마라톤', '마라톤 메이저', '식스스타', '해외 마라톤', '마라톤 버킷리스트', '도쿄마라톤', '보스턴마라톤', '러닝 가이드'],
    faqs: [
      { question: '세계 6대 마라톤이 뭔가요? 시드니 합류로 7대인가요?', answer: '애벗 월드 마라톤 메이저 6대는 도쿄·보스턴·런던·베를린·시카고·뉴욕입니다. 2025년 시드니가 7번째 메이저로 합류했지만, 식스스타 메달은 여전히 6개 완주 기준입니다. 향후 케이프타운·상하이까지 9대로 확대되며 나인스타 메달이 도입될 예정입니다.' },
      { question: '한국 러너에게 가장 쉬운 메이저는 어디인가요?', answer: '도쿄마라톤입니다. 인천에서 약 2시간·시차 0인 데다 코스도 평지 고속이고, 추첨·자선·One Tokyo Global 등 진입 경로가 다양해 첫 메이저로 가장 무난합니다.' },
      { question: '가장 어려운 메이저는 어디인가요?', answer: '보스턴마라톤입니다. 6대 중 유일하게 추첨이 없어 BQ 자격기록 또는 거액 자선으로만 출전할 수 있습니다. 다만 BQ 기록은 미국까지 갈 필요 없이 서울·경주·춘천 같은 국내 공인 대회에서 만들어 제출할 수 있습니다.' },
      { question: '추첨과 자선은 무엇이 다른가요?', answer: '추첨(발롯)은 무료로 응모해 운에 맡기는 방식이고, 자선은 단체별 최소 모금액을 약정하고 보장 출전권을 받는 방식입니다. 추첨이 마감된 뒤에는 자선이나 공식 투어 패키지가 현실적인 잔여 경로가 됩니다.' },
      { question: '6대 메이저를 다 돌면 비용과 기간은 얼마나 드나요?', answer: '보통 여러 해에 걸쳐 한 대회씩 모읍니다. 대회마다 항공·숙박·참가비로 회당 수백만 원이 들고, 자선 경로면 모금액이 추가됩니다. 6대를 모두 완주하면 애벗 앱에 완주 기록을 등록해 식스스타 메달을 받습니다.' },
    ],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>세계 6대 마라톤(애벗 월드 마라톤 메이저)</strong> = 도쿄·보스턴·런던·베를린·시카고·뉴욕. 2025년 <strong>시드니가 7번째 메이저</strong>로 합류했지만, 식스스타 메달은 아직 6개 기준입니다.</li>
    <li><strong>진입 방식이 대회마다 다릅니다</strong> — 무료 추첨, 거액 자선, 그리고 보스턴만의 BQ(자격기록). 어디는 운, 어디는 돈, 어디는 실력이 필요하죠.</li>
    <li><strong>한국 러너의 첫 메이저 1순위는 도쿄</strong>(인천 2시간·시차 0·평지). 이 글은 6대 메이저를 한 장에 비교하고, 당신에게 맞는 대회로 바로 연결하는 <strong>시리즈 관문</strong>입니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🗺️</span>
  <div class="callout-body">
    <p class="callout-title">이 글의 역할 — 6대 메이저 도전 지도</p>
    <p>아래 비교표 하나로 6대 메이저(+시드니)의 개최월·진입방식·코스 난이도·한국 접근성을 훑은 뒤, "나에게 맞는 첫 메이저"를 의사결정 트리로 고르세요. 각 대회의 신청법·자선·코스·비용 디테일은 <strong>개별 상세 가이드</strong>에 있고, 표와 트리에서 바로 연결됩니다. 모든 정보는 <strong>인천 출발·한국 여권</strong> 기준입니다.</p>
  </div>
</div>

<h2>6대 메이저 한눈에 비교</h2>

<table>
  <thead>
    <tr><th>대회</th><th>개최월</th><th>진입 방식</th><th>코스·난이도</th><th>한국 접근성</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/blog/tokyo-marathon-2027-registration-guide"><strong>도쿄</strong></a></td><td>3월</td><td>추첨·자선·OTG</td><td>평지 고속</td><td>★★★ 인천 2h·시차 0</td></tr>
    <tr><td><a href="/blog/boston-marathon-2027-bq-guide"><strong>보스턴</strong></a></td><td>4월</td><td><strong>BQ 기록</strong> 또는 자선</td><td>내리막→뉴턴힐 난코스</td><td>★ ESTA·14h·시차 큼</td></tr>
    <tr><td><a href="/blog/london-marathon-2027-registration-guide"><strong>런던</strong></a></td><td>4월</td><td>추첨(최다 경쟁)·자선</td><td>평지 빠름</td><td>★★ 영국 ETA·14h</td></tr>
    <tr><td><a href="/blog/berlin-marathon-2026-guide"><strong>베를린</strong></a></td><td>9월</td><td>추첨·자선/투어</td><td><strong>완전 평지(세계기록)</strong></td><td>★★ 솅겐·경유</td></tr>
    <tr><td><a href="/blog/chicago-marathon-2026-registration-guide"><strong>시카고</strong></a></td><td>10월</td><td>추첨·자선·투어</td><td>평지 PB</td><td>★★ ESTA·직항 13.5h</td></tr>
    <tr><td><a href="/blog/new-york-marathon-2026-registration-guide"><strong>뉴욕</strong></a></td><td>11월</td><td>추첨·자선·9+1·타임퀄</td><td>5개 자치구 난코스</td><td>★★ ESTA·14h</td></tr>
    <tr><td><a href="/blog/sydney-marathon-2026-registration-guide"><strong>시드니</strong>(7번째)</td><td>8월</td><td>추첨·자선/투어</td><td>비평지 경관(+313m)</td><td>★★ 호주 ETA·10h·시차 +1h</td></tr>
  </tbody>
</table>

<p>※ 진입 방식의 정확한 일정·금액은 시즌마다 바뀝니다. 각 대회 셀의 링크에서 최신 상세를 확인하세요.</p>

<h2>당신에게 맞는 첫 메이저는? — 의사결정 트리</h2>

<ul>
  <li><strong>🗼 첫 메이저·부담 최소</strong> → <a href="/blog/tokyo-marathon-2027-registration-guide">도쿄</a>. 인천 2시간·시차 0·평지 코스에 추첨/자선/OTG까지 경로가 다양해 데뷔전으로 가장 무난합니다.</li>
  <li><strong>🏅 PB·자기기록 갱신</strong> → <a href="/blog/berlin-marathon-2026-guide">베를린</a>(세계 최속 평지) 또는 <a href="/blog/chicago-marathon-2026-registration-guide">시카고</a>(평지 PB). 기록은 평탄한 코스에서 나옵니다.</li>
  <li><strong>🦄 실력으로 증명하고 싶다</strong> → <a href="/blog/boston-marathon-2027-bq-guide">보스턴</a>. 추첨이 없고 BQ 자격기록이 필요한데, 그 기록은 <a href="/blog/boston-marathon-2027-bq-guide">서울·경주·춘천 국내 공인 대회</a>에서 만들 수 있습니다.</li>
  <li><strong>🗽 대도시 축제·경험</strong> → <a href="/blog/new-york-marathon-2026-registration-guide">뉴욕</a>. 5개 자치구 200만 관중, 기록보다 경험의 대회입니다.</li>
  <li><strong>🌉 경관·식스스타 한 칸</strong> → <a href="/blog/sydney-marathon-2026-registration-guide">시드니</a>. PB 코스는 아니지만 하버브리지·오페라하우스 경관이 압권입니다.</li>
  <li><strong>🎲 추첨 운에 맡기는 클래식</strong> → <a href="/blog/london-marathon-2027-registration-guide">런던</a>. 세계 최다 경쟁 발롯이지만, 당첨되면 평지 빠른 코스가 기다립니다.</li>
</ul>

<h2>진입 난이도순 — 쉬움에서 어려움까지</h2>

<p>한국 러너 기준으로 "배번 확보"의 현실 난이도를 줄 세우면 대략 이렇습니다.</p>

<table>
  <thead>
    <tr><th>난이도</th><th>대회</th><th>핵심 이유</th></tr>
  </thead>
  <tbody>
    <tr><td>가장 쉬움</td><td><a href="/blog/tokyo-marathon-2027-registration-guide">도쿄</a></td><td>추첨·자선·OTG 다중 경로 + 가장 가까움</td></tr>
    <tr><td>중간</td><td>시카고·베를린·런던·시드니</td><td>추첨 마감 시 자선/투어가 잔여 경로(거액)</td></tr>
    <tr><td>어려움</td><td><a href="/blog/new-york-marathon-2026-registration-guide">뉴욕</a></td><td>추첨 경쟁 + 자선 최소 모금 높음($3,000~)</td></tr>
    <tr><td>가장 어려움</td><td><a href="/blog/boston-marathon-2027-bq-guide">보스턴</a></td><td>추첨 없음 — BQ 자격기록 또는 거액 자선($5,000~)만</td></tr>
  </tbody>
</table>

<h2>6대 다 모으기 — 식스스타와 원정 준비</h2>

<p>6대 메이저를 모두 완주하면 애벗 <strong>식스스타 메달</strong>을 받습니다. 보통 여러 해에 걸쳐 한 대회씩 모으죠. 수집 전략·비용·메달 등록법은 <a href="/blog/six-star-medal-challenge-korea-guide">식스스타 완주 로드맵</a>에 정리했습니다. 그리고 어느 메이저를 가든 공통으로 챙겨야 할 항공·입국허가(ESTA·ETA·ETIAS)·결제·보험·짐은 <a href="/blog/overseas-marathon-travel-checklist-korea">해외 원정 매뉴얼</a> 한 편에 묶여 있습니다.</p>

<p>풀코스 자체가 처음이라면 배번부터 잡기 전에 <a href="/blog/race-distance-difficulty-guide-2026">거리별 난이도 가이드</a>로 내 수준을 점검하고, 국내 대회로 몸을 만들고 싶다면 <a href="/marathon">마라톤 캘린더</a>에서 일정을 짜보세요.</p>

<div class="major-next">
  <p class="mn-title">🏁 지금 바로 한 걸음 — 어디부터?</p>
  <div class="mn-grid">
    <a class="mn-card" href="/blog/tokyo-marathon-2027-registration-guide">
      <span class="mn-emoji">🗼</span>
      <div class="mn-label">도쿄마라톤 2027</div>
      <div class="mn-desc">첫 메이저 1순위 — 지금 신청 가능</div>
    </a>
    <a class="mn-card" href="/blog/six-star-medal-challenge-korea-guide">
      <span class="mn-emoji">⭐</span>
      <div class="mn-label">식스스타 완주 로드맵</div>
      <div class="mn-desc">6대 다 모으는 시간·돈·전략</div>
    </a>
    <a class="mn-card" href="/blog/overseas-marathon-travel-checklist-korea">
      <span class="mn-emoji">✈️</span>
      <div class="mn-label">해외 원정 매뉴얼</div>
      <div class="mn-desc">입국허가·항공·결제·보험 한 번에</div>
    </a>
  </div>
</div>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 각 대회 공식 발표를 토대로 작성한 개요입니다. 대회별 접수 일정·금액·입국 규정은 시즌마다 바뀌므로, 신청 전 각 상세 가이드와 공식 사이트에서 최신 정보를 확인하세요.</p>
`,
  },
  {
    id: 'london-marathon-2027-registration-guide',
    slug: 'london-marathon-2027-registration-guide',
    title: '런던마라톤 2027 — 발롯 결과 발표(7월 초)·사상 첫 이틀 개최 확정 | 133만 신청 역대 최다, 자선 경로·참가비 £225 한국 러너 가이드',
    description: '2027 런던마라톤이 4월 24~25일 사상 첫 이틀에 걸쳐 열립니다. 일반 추첨(2026-05-01 마감)에 역대 최다 1,338,544명이 몰렸고, 결과는 7월 초부터 배치별로 이메일·참가 계정에 통보됩니다. 발롯을 놓쳤다면 자선(£2,000~2,800)이 현실 경로. 평지 빠른 코스라 PB·메이저 데뷔에 우호적, 영국 ETA(£20)·참가비 £225까지 한국 러너 기준으로 정리했습니다.',
    thumbnail: '/images/blog/london-marathon-2027-registration-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    updatedAt: '2026-07-03',
    category: 'news' as const,
    readingTime: 9,
    tags: ['런던마라톤', '런던마라톤 2027', '세계 6대 마라톤', '메이저 마라톤', '마라톤 발롯', '자선 마라톤', '영국 ETA', '평지 PB', '식스스타', '마라톤 추첨'],
    content: `
<div class="deadline-strip">2027 런던마라톤 발롯 결과가 7월 초부터 발표되고 있습니다 — 신청자에게 배치별로 순차 이메일이 발송되며, 참가 계정에서도 당락을 확인할 수 있습니다(단일 발표일 없음). 2027 대회는 사상 처음으로 4월 24~25일 이틀에 걸쳐 열립니다. 발롯을 놓쳤거나 떨어졌다면 자선(charity) 슬롯이 현실적인 잔여 경로입니다.</div>

<div class="tldr">
  <h2>3줄 요약</h2>
  <ul>
    <li><strong>2027 대회는 사상 첫 이틀 개최 — 4월 24일(토)·25일(일).</strong> 당첨자는 두 날 중 하나에 무작위 배정됩니다. 일반 추첨 접수는 2026년 5월 1일 마감됐고, 결과는 <strong>7월 초부터 배치별로</strong> 이메일·참가 계정에 통보됩니다.</li>
    <li><strong>지금 들어갈 길은 자선(charity) 슬롯.</strong> 단체별로 다르지만 대체로 모금 약정 <strong>£2,000~£2,800대</strong>를 받는 조건입니다. 발롯을 놓쳤거나 떨어졌다면 차기(2028) 발롯을 기다리는 게 일반적입니다.</li>
    <li><strong>국제 러너 참가비 £225</strong>(탄소상쇄 포함, 약 39~40만원). 코스는 큰 오르막 없는 <strong>평지·빠른 코스</strong>라 PB와 6대 메이저 데뷔에 우호적입니다. 한국 여권은 영국 <strong>ETA(£20)</strong>가 필수입니다.</li>
  </ul>
</div>

<div class="callout warning">
  <strong>마감·금액 먼저 체크하세요.</strong> 2027 일반 추첨 접수는 끝났습니다(2026-05-01 마감). 또 영국 입국 전자여행허가 ETA 요금이 <strong>2026년 4월 8일부로 £16에서 £20로 인상</strong>됐습니다. 과거 자료에 £16으로 적힌 경우가 많으니 현재 기준 £20로 준비하세요.
</div>

<h2>1. 2027 런던마라톤, 지금 어디까지 왔나</h2>
<p>런던마라톤은 도쿄·보스턴·시카고·뉴욕·베를린과 함께 세계 6대 메이저(Abbott World Marathon Majors) 중 하나입니다. 2027년 대회는 <strong>사상 처음으로 이틀에 걸쳐</strong> 열립니다 — <strong>4월 24일(토)·25일(일)</strong>. 당첨자는 두 날 중 하나에 무작위로 배정되고, 배정되지 않은 날에는 버추얼(가상) 완주 옵션이 주어집니다. 일반 러너가 가장 먼저 노리는 길은 무작위 추첨인 <strong>일반 발롯(ballot)</strong>인데, 2027 대회용 발롯 접수창은 <strong>2026년 4월 24일에 열려 5월 1일에 마감</strong>됐습니다.</p>
<p>지금(7월 초)은 <strong>결과가 발표되기 시작한 기간</strong>입니다. 공식 안내는 신청자에게 <strong>7월 초부터 배치별로 순차 이메일</strong>을 보내며, 단일 발표일 없이 참가 계정(엔트리 어카운트)에서도 당락을 확인할 수 있습니다. 합격 통보에는 참가비 결제 안내가, 미당첨 통보에는 차기 안내가 함께 옵니다. 발롯은 이름 그대로 <strong>완전 무작위 추첨</strong>이라, 떨어졌다고 실력이 부족한 게 아니라는 뜻이기도 합니다.</p>
<p>런던 발롯은 세계에서 가장 경쟁이 치열한 마라톤 추첨으로 꼽힙니다. <strong>2027 대회 발롯에는 역대 최다인 1,338,544명(약 133만 명)</strong>이 몰린 것으로 공식 발표됐습니다. 직전 2026 대회(약 113만 명) 기록을 다시 넘어선 수치로, 당첨 확률은 그만큼 낮습니다. "130만 명 넘게 신청하는 추첨"이라는 감각을 가져가면 충분합니다.</p>

<h2>2. 발롯을 놓쳤다면 — 자선(charity) 잔여 경로</h2>
<p>접수창을 놓쳤거나 추첨에서 떨어졌을 때, 한국 러너에게 현실적으로 남는 길은 <strong>자선단체(charity) 슬롯</strong>입니다. 자선단체가 확보한 출전권을 받는 대신, 그 단체를 위해 일정 금액 이상을 모금하겠다고 약정하는 방식입니다.</p>
<p>모금 최소액은 <strong>단체마다 다릅니다</strong>. 공식적으로 정해진 단일 최소액은 없고, 확인되는 사례는 대체로 <strong>£2,000~£2,800대</strong>에 분포합니다. 일부 단체는 여기에 별도 등록비(예: £125 안팎)를 추가로 받기도 합니다.</p>

<table>
  <thead>
    <tr><th>자선단체(예시)</th><th>최소 모금 약정</th></tr>
  </thead>
  <tbody>
    <tr><td>The Royal Parks</td><td>£2,000</td></tr>
    <tr><td>GOSH / Tommy's</td><td>£2,500</td></tr>
    <tr><td>Acorns</td><td>£2,600</td></tr>
    <tr><td>Guy's Cancer</td><td>£2,750</td></tr>
    <tr><td>Save the Children</td><td>£2,800 (+ 등록비 약 £125)</td></tr>
  </tbody>
</table>
<p>위 금액은 어디까지나 예시이며, 단체별로 매년 바뀝니다. 자선 슬롯은 좋은 일에 기여하면서 출전권을 얻는 길이지만, 모금 약정은 <strong>실제로 채워야 하는 책임</strong>이라는 점을 분명히 이해하고 신청하세요. 미달 시 본인이 부담해야 하는 경우가 많습니다.</p>

<h2>3. GFA·Championship — 한국 러너에겐 사실상 비해당</h2>
<p>런던에는 기록으로 들어가는 트랙도 있습니다. 하지만 결론부터 말하면 <strong>대부분의 한국 러너에게는 현실 경로가 아닙니다</strong>. 영국 거주자·영국 육상 클럽 회원 중심으로 설계돼 있기 때문입니다.</p>
<ul>
  <li><strong>Good for Age(GFA):</strong> 연령대별 기준 기록을 충족하면 우선 신청 자격을 주는 제도입니다. 2027 대회 창은 공식상 <strong>"가을(autumn)에 발표"</strong> 상태로, 정확한 접수 일정과 기준은 아직 확정 공개되지 않았습니다. 아래는 <strong>2026 기준 참고치</strong>입니다.</li>
  <li><strong>Championship Entry:</strong> 남자 <strong>sub 2:38:00</strong>, 여자 <strong>sub 3:10:00</strong>에 더해 <strong>영국 육상(UK Athletics) 소속 클럽 회원</strong> 요건이 붙습니다. 한국 일반 러너에게는 정보 차원의 언급일 뿐입니다.</li>
</ul>

<table>
  <thead>
    <tr><th>연령대 (Good for Age, 2026 참고)</th><th>남자</th><th>여자</th></tr>
  </thead>
  <tbody>
    <tr><td>18–39세</td><td>sub 2:52</td><td>sub 3:38</td></tr>
    <tr><td>40–44세</td><td>sub 2:57</td><td>sub 3:43</td></tr>
    <tr><td>45–49세</td><td>sub 3:02</td><td>sub 3:46</td></tr>
    <tr><td>50–54세</td><td>sub 3:07</td><td>sub 3:53</td></tr>
    <tr><td>55–59세</td><td>sub 3:12</td><td>sub 3:58</td></tr>
    <tr><td>60–64세</td><td>sub 3:34</td><td>sub 4:23</td></tr>
  </tbody>
</table>
<p>정리하면, 한국에서 출발하는 러너의 현실적인 두 갈래는 <strong>발롯</strong> 아니면 <strong>자선</strong>입니다. 기록 트랙은 "혹시 영국 클럽에 적을 둘 일이 있다면" 정도로만 기억해 두세요.</p>

<h2>4. 참가비·결과 발표 — 숫자로 정리</h2>
<p>2027 런던마라톤의 핵심 일정과 비용을 한 표로 모았습니다. 환율은 £1 ≈ 1,750원 근사로 잡은 어림값이며, 실제 결제 시점 환율에 따라 달라집니다.</p>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td>대회일</td><td><strong>2027년 4월 24일(토)·25일(일) — 사상 첫 이틀 개최</strong></td></tr>
    <tr><td>일반 발롯 접수창</td><td>2026-04-24 ~ 05-01 (마감, 역대 최다 1,338,544명)</td></tr>
    <tr><td>발롯 결과 발표</td><td>2026년 7월 초부터 배치별 (이메일·참가 계정)</td></tr>
    <tr><td>국제 러너 참가비</td><td>£225 (탄소상쇄 포함) ≈ 약 39~40만원</td></tr>
    <tr><td>자선 슬롯 모금 약정</td><td>대체로 £2,000~£2,800대 (단체별 상이)</td></tr>
    <tr><td>코스 성격</td><td>평지·빠른 코스 (큰 오르막 없음)</td></tr>
  </tbody>
</table>

<div class="callout info">
  <strong>한 줄 메모.</strong> 2028 대회 발롯이 언제 열릴지는 아직 공식 발표가 없습니다. 다만 직전 패턴은 대회 직후인 봄에 다음 발롯을 여는 흐름이었습니다. <strong>단정은 금물</strong>이지만, 발롯을 노린다면 2027년 4월 말~5월쯤 런던마라톤 공식 채널을 다시 확인하는 습관을 들여 두세요.
</div>

<h2>5. 코스 — 평지·빠른 코스라는 진짜 의미</h2>
<p>런던 코스는 <strong>그리니치/블랙히스에서 출발</strong>합니다. 초반은 살짝 내리막으로 흐르고, 약 10km 부근에서 범선 <strong>컷티사크(Cutty Sark)</strong>를 지납니다. 중간 지점에서 상징적인 <strong>타워브리지</strong>를 건너고, 이후 카나리워프와 아일오브독스의 빌딩 숲을 지나 임뱅크먼트를 따라 도심으로 들어옵니다. 마지막은 버킹엄궁 앞 <strong>더몰(The Mall)</strong>에서 피니시합니다.</p>
<p>"평지·빠른 코스(flat & fast)"라는 평판은 과장이 아닙니다. 전 구간에 걸쳐 큰 오르막이 없고, 그나마 가장 까다로운 구간이 타워브리지 진입부 정도입니다. 그래서 <strong>PB(개인 최고기록) 도전</strong>이나 <strong>6대 메이저 첫 데뷔</strong>에 특히 우호적입니다. 첫 메이저 메달을 어느 대회로 시작할지 고민이라면, 런던은 "코스가 발목을 잡지 않는" 안정적인 선택지입니다. 6대 메이저 메달 도전을 큰 그림으로 그리고 있다면 <a href="/blog/six-star-medal-challenge-korea-guide">식스 스타 메달 챌린지 가이드</a>를 함께 읽어 보세요. 코스 난이도 비교가 궁금하다면 <a href="/blog/race-distance-difficulty-guide-2026">거리·난이도 가이드</a>도 참고가 됩니다.</p>

<h2>6. 한국에서 출발하는 러너를 위한 체크리스트</h2>
<p>인천에서 떠나는 러너 기준으로, 항공·시차·입국 서류·신발까지 실무적인 부분을 정리합니다.</p>
<ul>
  <li><strong>항공편(인천 → 런던 히드로):</strong> 직항 기준 약 <strong>13시간 30분~15시간</strong>(평균 약 14시간 30분). 4월 말 대회라 봄 성수기와 겹치는 만큼 항공권은 일찍 잡을수록 유리합니다.</li>
  <li><strong>시차:</strong> 대회 시기(4월)에는 영국이 서머타임(BST)을 적용해 <strong>한국이 런던보다 8시간 빠릅니다</strong>. 도착 후 며칠은 시차 적응에 쓰고, 대회 당일 컨디션을 맞추는 게 좋습니다.</li>
  <li><strong>영국 ETA(전자여행허가) 필수:</strong> 한국 여권 소지자는 <strong>2025년 1월 8일부터 ETA 의무</strong> 대상입니다(이후 전면 시행). 요금은 <strong>2026년 4월 8일부로 £16에서 £20로 인상</strong>됐으니 현재 기준 <strong>£20</strong>로 준비하세요. 유효기간은 2년, 단기 방문(최대 6개월)에 적용됩니다. 발급은 입국 전 미리 신청해 두는 게 안전합니다.</li>
  <li><strong>결제 수단:</strong> 참가비·자선 모금 결제는 한국 발급 해외결제 가능 카드로 진행하면 됩니다. 환율과 해외결제 수수료를 감안해 한도와 잔액을 미리 확인하세요.</li>
</ul>
<p>ETA 신청 절차, 솅겐(유럽 본토 무비자)과의 차이, 여권 잔여기간 같은 서류 디테일은 매번 헷갈리는 부분입니다. 이 부분은 <a href="/blog/overseas-marathon-travel-checklist-korea">해외 마라톤 원정 준비 매뉴얼</a>에 한 번에 정리해 뒀으니, 출발 전 체크리스트로 활용하세요. 참고로 같은 배치로 함께 다루는 <a href="/blog/berlin-marathon-2026-guide">베를린마라톤</a>은 독일(솅겐 무비자, ETIAS는 2026년 현재 아직 미시행)이라 입국 서류 요건이 영국과 다릅니다 — 두 대회를 함께 노린다면 서류 준비를 분리해서 챙기세요.</p>
<p><strong>신발은?</strong> 평지·빠른 코스이고 풀코스 PB를 노리기 좋은 무대인 만큼, 카본 플레이트 레이싱화를 진지하게 고려할 가치가 있습니다. 대표적으로 <a href="/shoes/nike-alphafly-3">나이키 알파플라이 3</a>가 풀코스 PB 도전에 자주 거론됩니다. 다만 슈퍼슈즈는 충분한 적응 주행을 거친 뒤 대회에 투입하는 게 안전합니다.</p>

<div class="major-next">
  <h2>다음 단계</h2>
  <div class="cards">
    <a class="card" href="/blog/berlin-marathon-2026-guide">
      <h3>베를린마라톤 2026 가이드</h3>
      <p>세계에서 가장 빠른 코스로 통하는 또 하나의 메이저. 독일 입국(솅겐 무비자)과 접수 경로를 정리했습니다.</p>
    </a>
    <a class="card" href="/blog/new-york-marathon-2026-registration-guide">
      <h3>뉴욕마라톤 2026 등록 가이드</h3>
      <p>추첨·자선·기록 보장까지, 또 다른 6대 메이저의 신청 경로를 한국 러너 시점으로 풀었습니다.</p>
    </a>
    <a class="card" href="/blog/overseas-marathon-travel-checklist-korea">
      <h3>해외 마라톤 원정 매뉴얼</h3>
      <p>영국 ETA·솅겐·항공·시차·결제까지. 인천 출발 러너를 위한 출국 전 종합 체크리스트.</p>
    </a>
  </div>
</div>

<p>🗺️ 6대 메이저 전체 비교와 "어디부터 갈까"가 궁금하다면 <a href="/blog/world-marathon-majors-guide-2026">세계 6대 마라톤 완전정복</a>에서 한눈에 보세요.</p>

<p class="disclaimer">본 글의 일정·요금·기준은 2026년 6월 기준 공식 정보와 다수 교차검증을 바탕으로 정리했으며, 향후 대회 운영 측 발표에 따라 변경될 수 있습니다. 발롯 당락은 무작위 추첨으로 결정되며 당첨률은 보장되지 않습니다. 자선 슬롯의 모금 약정 금액, 2027 GFA·자선 접수 일정, 2028 발롯 일정은 단체·연도별로 달라지므로 신청 전 반드시 런던마라톤 공식 및 각 단체 채널에서 최신 정보를 확인하세요. 입국 서류(ETA 등)는 출발 전 영국 정부 공식 안내를 우선합니다.</p>
`,
  },
  {
    id: 'berlin-marathon-2026-guide',
    slug: 'berlin-marathon-2026-guide',
    title: '베를린마라톤 — 세계에서 가장 빠른 평지 PB 코스 | 마라톤 세계기록의 성지, 2026 접수·코스·한국 러너 원정 가이드',
    description: '베를린마라톤은 마라톤 세계기록이 가장 많이 나온 세계 최속 평지 코스입니다(킵초게 2:01:09). 2026 대회(9/27)는 추첨이 끝났지만 코스·PB 전략은 에버그린 — 2027 발롯 대비까지. 참가비 €155, 인천→프랑크푸르트 경유·시차·솅겐 무비자(ETIAS 미시행)와 평지 카본화까지 한국 러너 기준으로 정리했습니다.',
    thumbnail: '/images/blog/berlin-marathon-2026-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 8,
    tags: ['베를린마라톤', '베를린마라톤 2026', '세계 6대 마라톤', '메이저 마라톤', '마라톤 세계기록', 'PB 마라톤', '평지 코스', '솅겐', '식스스타', '마라톤 해외원정'],
    content: `
<div class="callout info">
<p><strong>지금 상태 한눈에</strong> — 2026 일반 추첨은 2025년 9월 25일~11월 6일에 진행됐고, 결과는 2025년 11월 말 이메일로 통보가 끝났습니다. 즉 <strong>2026 대회 일반 접수창은 닫혔습니다.</strong> 다음 추첨(2027)을 노리거나, 2026에 꼭 가야 한다면 자선·투어 경로를 봐야 합니다. 본문은 추측 없이 공식(bmw-berlin-marathon.com) 기준으로만 정리했고, 당첨 가능성이나 미래 일정은 단정하지 않습니다.</p>
</div>

<h2>1. 베를린마라톤이 "PB 성지"인 진짜 이유</h2>
<p>여섯 개 메이저 대회 중에서 한국 러너가 "기록을 위해" 베를린을 1순위로 꼽는 데는 분명한 이유가 있습니다. 베를린 코스는 흔히 <strong>"세계에서 가장 빠른 코스(world's fastest course)"</strong>로 불립니다. 마케팅 수사가 아니라, 실제 기록이 그렇게 말합니다.</p>
<p>역대 마라톤 <strong>세계기록이 가장 많이 수립된 코스</strong>가 바로 베를린입니다. 남자부 세계기록이 이곳에서 여러 차례 작성됐고, 엘리우드 킵초게(Eliud Kipchoge)가 2022년 세운 2시간 1분 09초의 남자 세계기록도 베를린에서 나왔습니다. 여자부에서도 티그스트 아세파(Tigst Assefa)가 베를린에서 세계기록을 갈아치운 바 있습니다. 한 코스에서 이만큼 기록이 쏟아진 곳은 지구상에 드뭅니다.</p>
<p>비결은 단순합니다. <strong>거의 완전한 평지</strong>입니다. 의미 있는 오르막이 없고, 발목을 잡는 급격한 회전 구간이 적으며, 노면은 처음부터 끝까지 매끈한 아스팔트입니다. 9월 말 베를린의 선선한 날씨까지 더해지면, 기록을 끌어내기에 이보다 좋은 조합을 찾기 어렵습니다. "이번 시즌에 PB를 깨고 싶다"는 러너에게 베를린이 가장 먼저 떠오르는 건 이 때문입니다.</p>

<h2>2. 2026 접수는 끝났다 — 남은 두 갈래 길</h2>
<p>베를린마라톤은 다른 메이저 대회들과 마찬가지로 <strong>추첨(lottery) 방식</strong>으로 출전권을 배분합니다. 2026 대회 추첨은 2025년 9월 25일부터 11월 6일까지 접수를 받았고, 모든 신청자에게 2025년 11월 말 이메일로 결과가 통보됐습니다. <strong>당첨 발표가 끝났다는 것은, 일반 추첨 경로가 이미 마감됐다는 뜻</strong>입니다.</p>
<p>그렇다면 2026에 꼭 가고 싶은 러너에게 남은 길은 무엇일까요. 공식 사이트가 안내하는 잔여 경로는 두 가지입니다.</p>
<table>
<thead><tr><th>경로</th><th>내용</th><th>한국 러너 체크포인트</th></tr></thead>
<tbody>
<tr><td>자선(채리티) 슬롯</td><td>공식 자선 파트너 단체를 통해 일정 금액 이상 기부를 약정하면 출전권 확보. 약정 모금액은 단체에 따라 보통 1,000~1,500유로 수준</td><td>모금 약정이 부담될 수 있음. 단체별 조건·마감일이 제각각이라 직접 확인 필수</td></tr>
<tr><td>공식 투어 패키지</td><td>50개국 이상 공식 투어 파트너가 출전권 + 숙박·항공을 묶어 판매. 추첨과 무관하게 슬롯 확보 가능</td><td>한국 담당 파트너가 있는지, 출전권이 패키지에 포함되는지 확인. 가격은 패키지마다 큰 차이</td></tr>
</tbody>
</table>
<p>참고로 일반 추첨 참가비는 국제 러너 기준 약 155유로(€) 수준입니다(환율에 따라 한화 약 22만~23만 원 근사). 자선·투어 경로는 이와 별개로 모금액 또는 패키지 비용이 추가됩니다.</p>

<div class="callout warning">
<p><strong>주의</strong> — 자선·투어 슬롯은 수량이 한정적이고 단체·파트너마다 마감과 조건이 다릅니다. "잔여 경로가 있다"는 사실과 "지금 신청 가능하다"는 별개이니, 반드시 공식 사이트 또는 해당 파트너에 직접 확인하세요. 본 글은 미래 잔여 여부나 당첨 가능성을 단정하지 않습니다.</p>
</div>

<h2>3. 차기 2027 추첨은 언제 열릴까</h2>
<p>2026에 들어가지 못했다면 다음 기회는 2027 대회입니다. 베를린마라톤은 <strong>매년 가을(대략 9월 말~11월 초)에 다음 해 대회 추첨 접수를 열고, 11월 말에 결과를 발표하는 패턴</strong>을 보여 왔습니다. 2026 추첨도 이 흐름대로 2025년 9월 25일~11월 6일에 진행됐습니다.</p>
<p>다만 <strong>2027 추첨의 정확한 오픈 날짜는 아직 공식 발표 전</strong>입니다(오늘 2026년 6월 기준). 예년 패턴을 참고하면 2026년 가을쯤 접수창이 열릴 가능성이 있지만, 날짜를 단정할 수는 없습니다. 베를린을 진지하게 노린다면 2026년 9월 이후 공식 사이트의 추첨 공지를 주기적으로 확인하는 것이 현실적인 전략입니다.</p>
<p>메이저 대회 전반의 거리·난이도 감을 먼저 잡고 싶다면 <a href="/blog/race-distance-difficulty-guide-2026">대회 거리·난이도 가이드</a>를, 여섯 개 메이저를 모두 완주하는 식스스타 도전이 궁금하다면 <a href="/blog/six-star-medal-challenge-korea-guide">식스스타 메달 챌린지 가이드</a>를 함께 보세요.</p>

<h2>4. 규모·분위기 — 5.5만 러너의 베를린</h2>
<p>베를린마라톤은 세계에서 가장 큰 마라톤 중 하나로, <strong>약 5.5만 명 규모</strong>의 러너가 도심을 가득 채웁니다. 브란덴부르크 문(Brandenburger Tor)을 통과해 들어오는 마지막 직선 구간은 메이저 대회 중에서도 손꼽히는 피니시 장면입니다. 같은 주말에는 인라인 스케이팅 레이스도 함께 열려, 도시 전체가 러닝 축제 분위기로 채워집니다.</p>
<p>5.5만 명이 모이는 만큼 출발 웨이브와 동선 관리가 체계적이고, 평지 코스라 페이스 메이커를 따라가기에도 좋습니다. "큰 무대에서, 빠른 코스로, 기록을 노린다" — 이 세 박자가 맞물리는 게 베를린의 정체성입니다.</p>

<h2>5. 한국 러너를 위한 출국 체크리스트</h2>
<p>인천에서 베를린으로 가는 여정과 현지 준비를, 한국 여권·한국 카드 기준으로 정리했습니다.</p>
<table>
<thead><tr><th>항목</th><th>내용</th></tr></thead>
<tbody>
<tr><td>직항 여부</td><td>인천(ICN)→베를린(BER) <strong>직항 없음</strong>. 프랑크푸르트(FRA) 또는 뮌헨 경유가 일반적이며, 프랑크푸르트 경유가 더 빠른 편</td></tr>
<tr><td>비행시간</td><td>인천→프랑크푸르트 약 13시간 50분 + 환승 후 베를린까지 단거리 국내선 연결. 총 소요는 환승 대기 포함 16시간 40분 이상</td></tr>
<tr><td>시차</td><td>대회 시기 베를린은 중앙유럽 서머타임(CEST). 한국보다 <strong>7시간 느림(KST −7h)</strong>. 도착 후 시차 적응에 며칠 여유 두기</td></tr>
<tr><td>비자</td><td>독일은 솅겐 협정국. 한국 여권 소지자는 <strong>90일 무비자</strong> 단기 입국 가능</td></tr>
<tr><td>ETIAS</td><td>유럽 입국 전자여행허가(ETIAS)는 <strong>2026년 아직 의무 시행 전</strong>(시행 예정은 알려져 있으나 본 대회 시점 기준 필수 아님). 출국 전 최신 상태 재확인 권장</td></tr>
</tbody>
</table>
<p>장거리 비행, 시차, 결제·짐 패킹까지 한 번에 점검하려면 <a href="/blog/overseas-marathon-travel-checklist-korea">해외 마라톤 원정 준비 매뉴얼</a>을 그대로 따라가는 걸 추천합니다. 인천 출발·한국 카드 결제·시차 적응 같은 한국 러너 특화 항목이 정리돼 있습니다.</p>
<p>신발은 어떨까요. 평지·빠른 코스에서 PB를 노린다면, 레이싱 전용 카본화의 가벼움과 추진력이 베를린 같은 무대에서 특히 빛납니다. 한 켤레만 고른다면 초경량 레이싱 카본화인 <a href="/shoes/asics-metaspeed-ray">아식스 메타스피드 레이</a>가 대표적인 선택지입니다. 다만 카본화는 발과 종아리에 부하가 크니, 대회 전 충분히 적응 주행을 거친 뒤 투입하세요.</p>

<h2>6. 베를린이 맞는 러너 vs 다른 메이저가 나은 러너</h2>
<p>베를린은 모든 러너의 정답은 아닙니다. 성향에 따라 더 잘 맞는 메이저가 따로 있습니다.</p>
<ul>
<li><strong>베를린이 1순위</strong> — 이번 시즌 PB가 목표인 기록형 러너. 평지·빠른 코스에서 자기 한계를 시험하고 싶은 사람</li>
<li><strong>가을 메이저를 비교 중이라면</strong> — 응원 열기와 도시 분위기를 더 본다면 <a href="/blog/chicago-marathon-2026-registration-guide">시카고</a>·<a href="/blog/new-york-marathon-2026-registration-guide">뉴욕</a>도 같은 가을 시즌 선택지입니다</li>
<li><strong>봄 메이저를 원한다면</strong> — <a href="/blog/london-marathon-2027-registration-guide">런던</a>·<a href="/blog/tokyo-marathon-2027-registration-guide">도쿄</a>가 일정상 대안이 됩니다. 런던은 영국이라 ETA(전자여행허가)가 별도로 필요한 점만 미리 챙기세요</li>
<li><strong>기록보다 도전 그 자체라면</strong> — 기록 인증 자체를 목표로 한 <a href="/blog/boston-marathon-2027-bq-guide">보스턴 BQ</a> 도전이나, <a href="/blog/sydney-marathon-2026-registration-guide">시드니</a> 같은 신규 메이저도 고려해볼 만합니다</li>
</ul>

<div class="major-next">
<p><strong>다음 한 걸음</strong></p>
<ul>
<li><strong>봄 메이저로 눈을 돌린다면</strong> → 같은 날 함께 정리한 <a href="/blog/london-marathon-2027-registration-guide">런던마라톤 2027 접수 가이드</a>로 일정·자격 조건을 비교해 보세요.</li>
<li><strong>가을 메이저를 더 보고 싶다면</strong> → <a href="/blog/chicago-marathon-2026-registration-guide">시카고마라톤 2026 가이드</a>가 베를린과 같은 시즌의 또 다른 선택지입니다.</li>
<li><strong>원정 준비를 시작한다면</strong> → <a href="/blog/overseas-marathon-travel-checklist-korea">해외 원정 매뉴얼</a>로 항공·시차·결제부터 점검하세요.</li>
</ul>
</div>

<p>🗺️ 6대 메이저 전체 비교와 "어디부터 갈까"가 궁금하다면 <a href="/blog/world-marathon-majors-guide-2026">세계 6대 마라톤 완전정복</a>에서 한눈에 보세요.</p>

<p class="disclaimer">본 글은 2026년 6월 13일 기준, 베를린마라톤 공식 정보(bmw-berlin-marathon.com)와 공개된 자료를 바탕으로 정리했습니다. 추첨 일정·참가비·잔여 슬롯·항공편·비자/ETIAS 정책은 변동될 수 있으므로, 신청·출국 전 반드시 공식 사이트와 항공사·대사관 안내로 최신 정보를 재확인하시기 바랍니다. 당첨 여부나 미래 일정은 단정하지 않습니다. — 산초 에디터</p>
`,
  },
  {
    id: 'new-york-marathon-2026-registration-guide',
    slug: 'new-york-marathon-2026-registration-guide',
    title: '뉴욕시티마라톤 2026 신청 — 추첨 마감 후 남은 길(자선) + 5개 자치구 50주년 | 타임퀄·9+1·참가비, 인천 14시간 원정',
    description: '2026 뉴욕시티마라톤(11/1)은 일반 추첨이 끝났습니다(24만+ 지원). 지금 한국 러너가 노릴 현실 경로는 공식 자선(최소 모금 $3,000~), 9+1·타임퀄은 다음 사이클용. 5개 자치구 50주년 난코스, 참가비·타임퀄 기준표, 인천 14시간·시차 14시간·ESTA까지 정리했습니다.',
    thumbnail: '/images/blog/new-york-marathon-2026-registration-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'news' as const,
    readingTime: 9,
    tags: ['뉴욕시티마라톤', '뉴욕마라톤 2026', '세계 6대 마라톤', '메이저 마라톤', '마라톤 해외원정', '자선 마라톤', '식스스타', '5개 자치구', '마라톤 추첨', 'NYRR'],
    content: `
<div class="deadline-strip">
  <p><strong>2026 일반 추첨은 이미 마감(2026년 2월 25일 접수 종료, 3월 4일 발표).</strong> 2026년 6월 현재 한국 러너가 노릴 수 있는 현실 경로는 <strong>공식 자선(charity)</strong> 정도이며, 나머지는 <strong>2027 사이클</strong> 준비용입니다.</p>
</div>

<div class="tldr">
  <p><strong>3줄 요약</strong></p>
  <ul>
    <li><strong>대회일</strong>: 2026년 11월 1일(일) — 5개 자치구 코스 완성 <strong>50주년</strong>. 인천 출발 기준 가장 도전적인 메이저 중 하나입니다.</li>
    <li><strong>일반 추첨은 끝났습니다</strong>(2026년 2월 4~25일 접수, 3월 4일 발표, 역대 최다 24만+ 지원). 지금 노릴 수 있는 건 <strong>공식 자선</strong>, 나머지(9+1·타임 퀄리파이어)는 <strong>다음 사이클</strong> 대비용입니다.</li>
    <li>한국 러너 변수: <strong>ESTA·약 14시간 비행·14시간 시차·쌀쌀한 11월 초</strong>. 그리고 다리·언덕 많은 코스라 <strong>기록보다 경험·식스스타</strong>로 접근하는 게 맞습니다.</li>
  </ul>
</div>

<div class="callout warning">
  <p><strong>2026 일반 추첨은 종료됐습니다.</strong> 이 글은 "지금(2026년 6월) 시점에서 뉴욕을 노리는 한국 러너"를 위해 <em>① 아직 열려 있을 수 있는 경로</em>와 <em>② 다음 시즌을 위한 캘린더</em>를 함께 정리합니다. 모든 금액·날짜는 NYRR(nyrr.org) 공식 발표 기준이며 변동 가능성이 있어, 신청 직전 공식 페이지 재확인을 권합니다.</p>
</div>

<h2>1. 핵심 한 장 요약 — 뉴욕시티마라톤 2026</h2>
<p>뉴욕시티마라톤은 세계 6대 메이저(Abbott World Marathon Majors) 중 가장 큰 규모를 자랑하는 대회입니다. 2026년은 1976년 5개 자치구 전 구간 코스가 완성된 지 <strong>50주년</strong>이 되는 해로, NYRR은 연중 기념 프로그램과 역대 최다 규모의 공식 자선 파트너(<strong>670개 이상</strong>)를 발표했습니다. "식스스타(6 Majors)"를 모으는 한국 러너에게는 마지막 퍼즐로 자주 꼽히는 대회입니다.</p>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th><th>신뢰도</th></tr>
  </thead>
  <tbody>
    <tr><td>대회일</td><td>2026년 11월 1일(일)</td><td>확정</td></tr>
    <tr><td>주최</td><td>New York Road Runners(NYRR)</td><td>확정</td></tr>
    <tr><td>코스</td><td>5개 자치구(스태튼아일랜드→브루클린→퀸스→맨해튼→브롱크스→맨해튼), 베라자노-내로스 브리지 출발</td><td>확정</td></tr>
    <tr><td>일반 추첨 접수</td><td>2026년 2월 4~25일 (<strong>마감됨</strong>)</td><td>확정</td></tr>
    <tr><td>추첨 발표</td><td>2026년 3월 4일</td><td>확정</td></tr>
    <tr><td>지원자 수</td><td>역대 최다 24만+ 건</td><td>확정</td></tr>
    <tr><td>당첨자 등록 마감</td><td>2026년 9월 8일(개별 등록 링크 사용 기한)</td><td>확정</td></tr>
    <tr><td>50주년 특이사항</td><td>공식 자선 파트너 670개+(역대 최다), 연중 기념 프로그램</td><td>확정</td></tr>
  </tbody>
</table>

<div class="callout info">
  <p><strong>거리 감각이 헷갈린다면</strong> 먼저 <a href="/blog/race-distance-difficulty-guide-2026">대회 거리별 난이도 가이드</a>로 풀코스 준비 상태를 점검하세요. 뉴욕은 다리 경사와 후반 1번가·5번가 언덕 때문에 "기록용"보다 "경험용" 코스로 분류됩니다.</p>
</div>

<h2>2. 지금(2026년 6월) 신청 가능한 경로는?</h2>
<p>결론부터 말하면, <strong>일반 추첨과 타임 퀄리파이어 클레임 창은 모두 닫혔습니다</strong>(둘 다 2026년 2월에 마감). 6월 현재 한국 러너가 현실적으로 2026 대회 출전을 노릴 수 있는 거의 유일한 경로는 <strong>공식 자선(Official Charity) 모금 출전</strong>입니다. 나머지는 <strong>2027 이후를 위한 준비</strong>로 이해해야 합니다.</p>

<h3>① 공식 자선(Charity) — 6월 시점에 가장 현실적</h3>
<p>NYRR 공식 자선 파트너에 모금 약정을 하면 추첨과 무관하게 보장 출전권을 받습니다. 단, "기부"가 아니라 <strong>본인이 모금해서 채워야 하는 최소 모금액</strong>이 있고, 미달 시 본인 카드로 충당되는 구조라 부담이 큽니다.</p>
<table>
  <thead>
    <tr><th>구분</th><th>내용</th><th>신뢰도</th></tr>
  </thead>
  <tbody>
    <tr><td>최소 모금액</td><td>단체별 상이. NYRR 규정상 <strong>Bronze 최소 $3,000 / Silver 최소 $3,500</strong> 이상. 실제 단체는 보통 $3,500~$6,500+로 설정</td><td>확정(규정)</td></tr>
    <tr><td>모금 마감</td><td>2026년 10월 15일까지 최소 모금액 달성(단체별로 더 이른 마감 있음)</td><td>확정</td></tr>
    <tr><td>신청처</td><td>각 자선 단체 페이지에서 직접 신청(NYRR이 아니라 단체에 지원)</td><td>확정</td></tr>
    <tr><td>잔여 자리</td><td>인기 단체는 조기 마감. 6월 시점 잔여 여부는 단체별 확인 필요</td><td>추정</td></tr>
  </tbody>
</table>
<p>한국 러너 주의: 모금은 보통 미국 기부 플랫폼 기반이라 <strong>해외 후원자 모집이 쉽지 않습니다</strong>. $3,500을 원화로 환산하면 대략 480만 원 안팎(환율에 따라 변동). 현실적으로는 "참가비 + 자기 부담 기부"로 접근하는 한국 원정러가 많습니다.</p>

<h3>② 9+1 프로그램 — 다음 사이클(2027 출전권)용</h3>
<p>NYRR 회원이 <strong>당해 연도에 NYRR 인증 대회 9개 완주 + 자원봉사(또는 추가 1개) 1회</strong>를 채우면 다음 해 대회 보장 출전권을 얻습니다. 2026년에 9+1을 완성하면 <strong>2027 대회</strong> 출전권이 됩니다. 다만 NYRR 대회 대부분이 뉴욕 현지에서 열려, 한국 거주 러너에게는 사실상 현지 체류자용 경로입니다.</p>

<h3>③ 타임 퀄리파이어(기록 출전) — 이미 마감, 2027 대비</h3>
<p>기록 기준을 충족하면 보장 출전권을 받지만, <strong>2026 클레임 창은 2월 4~25일로 종료</strong>됐습니다. 핵심 변수: NYRR은 신청자가 몰리면 <strong>상위 일부만</strong> 받습니다. 2026의 경우 비(非)NYRR 풀코스 타임 퀄리파이어는 <strong>상위 10%</strong>만 수용해, 기준보다 약 <strong>22분 52초 더 빨라야</strong> 실제 출전이 가능했습니다. 즉 "기준 통과 = 출전 보장"이 아닙니다.</p>
<table>
  <thead>
    <tr><th>연령대</th><th>남성 풀코스</th><th>여성 풀코스</th></tr>
  </thead>
  <tbody>
    <tr><td>18–34</td><td>2:53:00</td><td>3:13:00</td></tr>
    <tr><td>35–39</td><td>2:55:00</td><td>3:15:00</td></tr>
    <tr><td>40–44</td><td>2:58:00</td><td>3:26:00</td></tr>
    <tr><td>45–49</td><td>3:05:00</td><td>3:38:00</td></tr>
    <tr><td>50–54</td><td>3:14:00</td><td>3:51:00</td></tr>
    <tr><td>55–59</td><td>3:23:00</td><td>4:10:00</td></tr>
    <tr><td>60–64</td><td>3:34:00</td><td>4:27:00</td></tr>
    <tr><td>65–69</td><td>3:45:00</td><td>4:50:00</td></tr>
    <tr><td>70–74</td><td>4:10:00</td><td>5:30:00</td></tr>
    <tr><td>75–79</td><td>4:30:00</td><td>6:00:00</td></tr>
    <tr><td>80+</td><td>4:55:00</td><td>6:35:00</td></tr>
  </tbody>
</table>
<p class="caption">기록 인정 창: 2025년 1월 1일 이후 인증 대회. 논바이너리 기준은 여성 기준과 동일. (NYRR 공식)</p>

<h3>④ 국제 투어 오퍼레이터 — 패키지형 보장 출전</h3>
<p>NYRR과 계약된 해외 공식 여행사를 통하면 <strong>출전권 + 항공·숙박 패키지</strong>로 참가할 수 있습니다. 추첨에 의존하지 않는 장점이 있지만 가격이 비싸고, 한국발 패키지는 종류가 제한적입니다. 가격·잔여는 업체별로 천차만별이라 여기서 단정하지 않습니다(추정·미발표 영역).</p>

<h2>3. 참가비 — 회원/비회원/국제</h2>
<table>
  <thead>
    <tr><th>구분</th><th>금액(USD)</th><th>신뢰도</th></tr>
  </thead>
  <tbody>
    <tr><td>NYRR 회원</td><td>$255 + 처리수수료 $11</td><td>확정</td></tr>
    <tr><td>비회원(국제 러너 포함)</td><td>$315 + 처리수수료 $11</td><td>확정</td></tr>
    <tr><td>자선/투어 경로</td><td>위 참가비와 별도로 <strong>모금액·패키지 비용</strong>이 추가</td><td>확정</td></tr>
  </tbody>
</table>
<p>국제 러너(비미국 거주자)도 <strong>참가비 구조는 동일</strong>합니다($315 비회원 기준). 환율에 따라 비회원 참가비는 대략 45만 원 안팎(처리수수료 포함, 근사치)입니다. 자선 경로를 택하면 여기에 최소 모금액(480만 원~)이 더해집니다.</p>

<h2>4. 코스 — "기록보다 경험"인 이유</h2>
<p>뉴욕 코스는 평탄한 베를린·시카고와 정반대입니다. 출발하자마자 <strong>베라자노-내로스 브리지</strong>의 가파른 오르막을 만나고, 5개 자치구를 잇는 다리들에서 경사·바람·노면 변화가 반복됩니다. 후반 맨해튼 1번가의 긴 직선 오르막과 센트럴파크 진입 전 5번가 언덕이 다리를 무너뜨리는 구간으로 악명 높습니다. 그래서 PB를 노리는 대회라기보다 <strong>5개 자치구를 관통하며 식스스타를 채우는 경험형 코스</strong>로 보는 게 맞습니다.</p>
<table>
  <thead>
    <tr><th>자치구</th><th>특징</th></tr>
  </thead>
  <tbody>
    <tr><td>스태튼아일랜드(출발)</td><td>베라자노 다리 오르막 — 초반 페이스 과욕 금물</td></tr>
    <tr><td>브루클린</td><td>가장 긴 구간, 관중 응원 절정</td></tr>
    <tr><td>퀸스 → 맨해튼</td><td>퀸스보로 다리(조용한 오르막) 뒤 1번가 함성</td></tr>
    <tr><td>브롱크스 → 맨해튼</td><td>심리적 저점 구간, 다시 5번가 언덕</td></tr>
    <tr><td>센트럴파크(피니시)</td><td>마지막 굴곡 — 끝까지 평지가 아님</td></tr>
  </tbody>
</table>
<p>이런 코스 특성상 신발 선택이 갈립니다. 다리 경사·후반 근피로를 감안하면 무조건 최상위 레이싱화보다, 안정성과 쿠션을 갖춘 카본화가 합리적인 경우가 많습니다. 입문~중급 러너라면 <a href="/shoes/nike-vaporfly-4">나이키 베이퍼플라이 4</a>, 기록을 노린다면 <a href="/shoes/saucony-endorphin-elite-2">사코니 엔돌핀 엘리트 2</a>나 <a href="/shoes/asics-metaspeed-sky-plus">아식스 메타스피드 스카이+</a>를 비교해 보세요(개인 발·페이스에 따라 다름).</p>

<h2>5. 한국 러너 체크리스트 — 인천 출발 기준</h2>
<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td>입국 서류</td><td><strong>ESTA</strong>(전자여행허가) 사전 승인 필수. 한국 여권(비자면제 프로그램 대상). 출발 최소 며칠 전 신청 권장</td></tr>
    <tr><td>항공</td><td>인천(ICN) → 뉴욕 JFK 또는 뉴어크(EWR) 직항 약 14시간</td></tr>
    <tr><td>시차</td><td>11월 미 동부는 EST(서머타임 종료 후). 한국이 약 <strong>14시간 빠름</strong> — 도착 후 시차 적응에 며칠 필요</td></tr>
    <tr><td>날씨</td><td>11월 초 뉴욕은 쌀쌀(아침 한 자릿수~10도 안팎 흔함). 출발 전 대기 방한 의류 필수</td></tr>
    <tr><td>결제</td><td>한국 신용카드 해외결제 가능 여부·한도 사전 확인(참가비·모금·현지 비용)</td></tr>
    <tr><td>일정</td><td>레이스 전날 엑스포 패킷 픽업 필수 — 도착 일정을 금~토에 여유 있게</td></tr>
  </tbody>
</table>
<p>해외 원정의 항공·숙소·시차 적응·환전·짐 싸기까지 한 번에 점검하려면 <a href="/blog/overseas-marathon-travel-checklist-korea">해외 마라톤 원정 체크리스트</a>를 그대로 따라가면 됩니다. ESTA·14시간 비행·결제 같은 변수는 뉴욕에도 동일하게 적용됩니다.</p>

<div class="major-next">
  <h2>다음 단계 — 당신의 상황은?</h2>
  <ul>
    <li><strong>"2026년에 꼭 뛰고 싶다"</strong> → 6월 시점 현실 경로는 <strong>공식 자선</strong>뿐. 관심 단체 페이지에서 잔여·최소 모금액을 직접 확인하고, <a href="/blog/overseas-marathon-travel-checklist-korea">해외 원정 매뉴얼</a>로 항공·숙소·ESTA를 동시에 준비하세요.</li>
    <li><strong>"기록으로 보장 출전"</strong> → 위 타임 퀄리파이어 표를 목표로. 단 상위 일부만 수용되므로 <strong>기준보다 한참 빠르게</strong> 준비해야 합니다. <a href="/blog/boston-marathon-2027-bq-guide">보스턴 BQ 가이드</a>의 기록 전략이 그대로 도움이 됩니다.</li>
    <li><strong>"다른 메이저도 비교 중"</strong> → 비교적 추첨 문이 넓은 <a href="/blog/tokyo-marathon-2027-registration-guide">도쿄</a>, 접수가 더 열려 있는 <a href="/blog/chicago-marathon-2026-registration-guide">시카고</a>, 남반구 시즌의 <a href="/blog/sydney-marathon-2026-registration-guide">시드니</a>를 함께 검토하세요. 전체 일정은 <a href="/marathon">마라톤 캘린더</a>에서.</li>
  </ul>
</div>

<div class="callout info">
  <p><strong>면책</strong>: 본 글의 날짜·금액·정원은 NYRR(nyrr.org) 및 공식 발표 기준으로 작성됐으며, 2026년 6월 시점 정보입니다. 자선 단체별 모금액·마감, 투어 패키지 가격, 향후 사이클 접수일은 변동될 수 있으니 <strong>신청 직전 공식 페이지에서 반드시 재확인</strong>하세요. 당첨률·결과를 단정하지 않습니다. 환율 환산은 근사치입니다.</p>
<p>🗺️ 6대 메이저 전체 비교와 "어디부터 갈까"가 궁금하다면 <a href="/blog/world-marathon-majors-guide-2026">세계 6대 마라톤 완전정복</a>에서 한눈에 보세요.</p>
`,
  },
  {
    id: 'six-star-medal-challenge-korea-guide',
    slug: 'six-star-medal-challenge-korea-guide',
    title: '애벗 식스스타 메달 — 6대 메이저 다 모으는 시간·돈·전략 | 세븐스타? 나인스타? 한국 러너 난이도순 완주 로드맵',
    description: '6대 메이저(도쿄·보스턴·런던·베를린·시카고·뉴욕)를 모두 완주하면 받는 애벗 식스스타 메달. 시드니 합류로 세븐스타가 됐을까?(정답: 아직 6개 고정·나인스타 도입 예정) 한국 러너 기준 가장 쉬운 도쿄부터 가장 어려운 보스턴 BQ까지 난이도순 수집 전략, 비용·기간, 메달 등록법까지 총정리했습니다.',
    thumbnail: '/images/blog/six-star-medal-challenge-korea-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 9,
    tags: ['식스스타', '식스스타 메달', '애벗 월드 마라톤 메이저', '세븐스타', '세계 6대 마라톤', '메이저 마라톤', '식스스타 도전', '러닝 버킷리스트', '마라톤 완주', '나인스타'],
    content: `
<div class="callout info">
<p><strong>식스스타 메달이란? — 그리고 "세븐스타"의 진실</strong></p>
<p>애벗 월드 마라톤 메이저스(Abbott World Marathon Majors, AbbottWMM)의 <strong>기존 6개 대회를 모두 완주</strong>하면 받는 기념 메달입니다. 연도나 순서는 상관없습니다. 살면서 6개를 다 채우기만 하면 됩니다.</p>
<p>2025년 8월 시드니 마라톤이 <strong>7번째 메이저</strong>로 합류했지만, 메달 명칭과 구성은 바뀌지 않았습니다. 공식 페이지(worldmarathonmajors.com)는 식스스타 메달이 <strong>"원래의 6개 대회(도쿄·보스턴·런던·베를린·시카고·뉴욕)" 완주자에게만 수여</strong>되며, 시드니는 식스스타 대상에 포함되지 않는다고 명시합니다. 즉 <strong>"세븐스타 메달"이라는 공식 메달은 없습니다.</strong> 7번째 별을 모은 러너는 있지만, 애벗은 7스타·8스타용 정식 메달을 따로 만들지 않고 <strong>메이저가 9개로 완성되는 시점에 곧장 나인스타 메달을 신설</strong>할 계획입니다. 그때도 식스스타 메달은 그대로 병존 수여됩니다.</p>
</div>

<h2>6대 메이저 한눈에 — 개최월·진입 난이도·시리즈 가이드</h2>

<p>먼저 큰 그림부터 봅시다. 식스스타 대상 6개 대회는 봄(도쿄·보스턴·런던)과 가을(베를린·시카고·뉴욕)에 흩어져 있고, 지역도 아시아 1개·미국 3개·유럽 2개로 퍼져 있습니다. 아래 표에 7번째 메이저인 시드니까지 넣되, 식스스타 포함 여부를 명확히 표기했습니다. 각 대회 상세는 산초 에디터가 따로 정리한 시리즈 가이드를 연결해 두었습니다.</p>

<table>
<thead>
<tr><th>메이저</th><th>2026 개최일</th><th>개최월</th><th>식스스타 포함</th><th>주 진입 경로</th><th>한국 러너 체감 난이도</th><th>시리즈 가이드</th></tr>
</thead>
<tbody>
<tr><td>도쿄</td><td>3/1</td><td>3월</td><td>포함</td><td>추첨 + 자선</td><td>쉬움(자선)</td><td><a href="/blog/tokyo-marathon-2027-registration-guide">도쿄 마라톤 접수 가이드</a></td></tr>
<tr><td>보스턴</td><td>4/20</td><td>4월</td><td>포함</td><td>BQ 기록 자격</td><td>가장 어려움</td><td><a href="/blog/boston-marathon-2027-bq-guide">보스턴 BQ 가이드</a></td></tr>
<tr><td>런던</td><td>4/26</td><td>4월</td><td>포함</td><td>추첨 + 자선</td><td>추첨 매우 어려움</td><td>—</td></tr>
<tr><td>시드니</td><td>8/30</td><td>8월</td><td><strong>미포함</strong>(7번째 메이저)</td><td>추첨</td><td>중간</td><td><a href="/blog/sydney-marathon-2026-registration-guide">시드니 마라톤 접수 가이드</a></td></tr>
<tr><td>베를린</td><td>9/27</td><td>9월</td><td>포함</td><td>추첨 / 패키지</td><td>비교적 쉬움</td><td>—</td></tr>
<tr><td>시카고</td><td>10/11</td><td>10월</td><td>포함</td><td>추첨 / 자선</td><td>중간</td><td><a href="/blog/chicago-marathon-2026-registration-guide">시카고 마라톤 접수 가이드</a></td></tr>
<tr><td>뉴욕</td><td>11/1</td><td>11월</td><td>포함</td><td>추첨 / 자선</td><td>추첨 어려움</td><td>—</td></tr>
</tbody>
</table>

<p>표에서 보듯 시드니는 일정상 메이저 캘린더에 들어가지만, <strong>식스스타 메달 카운트에는 잡히지 않습니다.</strong> 호주 원정을 계획한다면 "7번째 별"이라는 기념 의미로 접근하는 것이지, 식스스타 진척과는 별개로 두는 게 맞습니다.</p>

<div class="callout info">
<p><strong>미래 확장 (참고 — 아직 예정/조건부)</strong></p>
<p>케이프타운 마라톤(남아공)이 2027년 8번째 메이저로 합류할 예정이고, 상하이 마라톤은 후보 1단계를 통과해 2026년 12월 대회에서 2년 연속 기준을 충족하면 9번째 후보가 됩니다. 두 대회가 모두 통과하면 9개 체제가 완성되며 <strong>나인스타 메달이 신설될 예정</strong>입니다. 다만 둘 다 아직 "예정·조건부" 단계이므로 확정된 일정으로 보지는 마세요.</p>
</div>

<h2>한국 러너 난이도순 수집 전략 — 쉬운 별부터, 보스턴은 별도 프로젝트</h2>

<p>6개를 한 해에 다 끝내려는 건 비현실적입니다. 대회마다 추첨 시점·기록 통과 시점이 제각각이라, 보통 <strong>여러 시즌에 걸쳐 분산</strong>해서 모읍니다. 핵심은 "통제 가능한 별부터 빨리 쌓아 추진력을 만들고, 통제 불가능한 별은 매년 병행 도전한다"는 것입니다.</p>

<h3>1단계 — 진입 쉬운 별로 출발 (도쿄·베를린)</h3>
<p><strong>도쿄</strong>는 식스스타에서 가장 진입하기 쉬운 대회입니다. 일반 추첨은 경쟁이 크지만, <strong>자선 기부(charity bid)</strong> 경로로 사실상 출전을 확보할 수 있습니다. 최소 기부 단위가 10만 엔(약 100만 원대) 수준이고 최근 성공 입찰은 그보다 높게 형성되지만, "당첨 운"에 기대지 않고 출전을 확정할 수 있다는 점이 큽니다. 항공도 인천에서 가장 가깝습니다. <strong>베를린</strong> 역시 해외 투어 패키지로 배정을 확보하는 경로가 많아 비교적 진입이 수월합니다. 이 둘로 "이미 2개 모았다"는 동력을 먼저 만드세요. 자세한 도쿄 접수 절차는 <a href="/blog/tokyo-marathon-2027-registration-guide">도쿄 마라톤 접수 가이드</a>를 참고하세요.</p>

<h3>2단계 — 추첨형 3개는 매년 병행 응모 (런던·시카고·뉴욕)</h3>
<p>런던·시카고·뉴욕은 추첨 당첨 시점을 본인이 통제할 수 없습니다. 그래서 <strong>일찍부터 매년 동시에 응모</strong>해 두는 게 정석입니다. 떨어지면 자선 경로나 해외 투어 패키지로 백업할 수 있습니다. 런던은 세계 최대 경쟁이라 추첨만 믿기 어렵고, 뉴욕도 경쟁이 큽니다. 시카고는 셋 중 당첨 가능성이 비교적 양호한 편이라 가을 일정으로 노려볼 만합니다. 시카고 접수 흐름은 <a href="/blog/chicago-marathon-2026-registration-guide">시카고 마라톤 접수 가이드</a>에 정리해 두었습니다.</p>

<h3>3단계 — 보스턴(BQ)은 별도 장기 프로젝트</h3>
<p>보스턴은 식스스타의 사실상 최종 관문입니다. 다른 대회와 달리 <strong>BQ(보스턴 퀄리파잉) 기록 통과가 거의 유일한 진입 경로</strong>이기 때문입니다. 연령·성별별 기준 기록을 직접 달성해야 하므로, 돈이나 운이 아니라 <strong>기록 향상 훈련이라는 장기 프로젝트</strong>로 따로 두는 게 맞습니다. 다른 5개 별을 모으는 동안 평행하게 기록 향상에 투자하다가, 마지막 또는 후반에 도전하는 흐름이 현실적입니다. BQ 기준 기록과 전략은 <a href="/blog/boston-marathon-2027-bq-guide">보스턴 2027 BQ 가이드</a>에서 자세히 다뤘습니다.</p>

<p>레이스 페이스를 끌어올려야 하는 BQ·기록 도전 구간에서는 카본 레이싱화의 도움이 큽니다. 한국에서 접근 가능한 대표 모델로는 <a href="/shoes/nike-vaporfly-4">나이키 베이퍼플라이 4</a>, <a href="/shoes/nike-alphafly-3">나이키 알파플라이 3</a>, <a href="/shoes/saucony-endorphin-elite-2">사코니 엔돌핀 엘리트 2</a>, <a href="/shoes/asics-metaspeed-sky-plus">아식스 메타스피드 스카이 플러스</a> 등이 있습니다.</p>

<h2>비용·기간 감 — 근사 범위로만</h2>

<p>식스스타는 성격상 정확한 총비용을 못 박기 어렵습니다. 추첨·기부·기록 통과 시점이 다 다르기 때문입니다. 그래서 아래 수치는 모두 <strong>대략적인 범위·근사치</strong>로만 받아들이세요. 환율도 시점에 따라 변동하므로 "약 ~원대"로만 표기합니다.</p>

<ul>
<li><strong>수집 기간:</strong> 보통 <strong>여러 해(몇 시즌)에 걸쳐</strong> 모읍니다. 추첨·BQ 통과 시점이 통제 불가라 한 해에 6개를 다 끝내기는 현실적으로 어렵습니다.</li>
<li><strong>대회별 참가비:</strong> 대회마다 다르며 대략 1개당 수십만 원대 범위(미화 200~400달러대 수준). 도쿄 자선 경로처럼 기부가 얹히면 더 올라갑니다.</li>
<li><strong>항공(인천 출발):</strong> 도쿄를 빼면 미주 3개·유럽 2개로 모두 장거리입니다. 미주·유럽 왕복은 시즌과 예약 시점에 따라 편차가 커서 회당 수십만~수백만 원대까지 벌어질 수 있습니다.</li>
<li><strong>숙박:</strong> 대회 주간은 성수기라 평소보다 비쌉니다. 도심 접근성을 따지면 더 올라갑니다.</li>
</ul>

<p>요약하면, <strong>1개 대회당 참가비 + 인천발 왕복 항공 + 대회 주간 숙박을 합치면 회당 수백만 원대</strong>, 6개를 누적하면 상당한 규모입니다. 한 번에 부담하기보다 <strong>몇 년에 걸쳐 분산</strong>하는 것이 비용·체력 양쪽에서 현실적입니다. 항공·숙박·환전·짐 싸기 같은 원정 실무는 <a href="/blog/overseas-marathon-travel-checklist-korea">해외 마라톤 원정 체크리스트</a>에 한국 여권·한국 카드 기준으로 정리해 두었으니 함께 보세요.</p>

<h2>메달 등록·인증·수령법</h2>

<p>별을 다 모았어도 자동으로 메달이 오는 건 아닙니다. <strong>본인 기록을 공식 시스템에 등록·인증</strong>하는 절차가 있습니다.</p>

<ul>
<li><strong>자격:</strong> 식스스타 6개 대회(도쿄·보스턴·런던·베를린·시카고·뉴욕)를 연도·순서 무관하게 모두 완주.</li>
<li><strong>인증 — 러너 포털(Runner Portal):</strong> AbbottWMM 공식 사이트에서 계정을 만들면 공식 완주 기록이 자동으로 매칭됩니다. 오래되어 자동 매칭이 안 되는 과거 기록은 <strong>피니셔 인증서 + 신분증</strong>을 제출해 수동으로 "별 청구(claim)"할 수 있습니다. 첫 별을 모을 때부터 포털 계정을 만들어 기록을 쌓아 두면 마지막에 한꺼번에 확인하기 편합니다.</li>
<li><strong>수령:</strong> 마지막 6번째 메이저를 완주하면 <strong>그 대회 현장(피니시 라인 인근 메달 부스)에서 식스스타 메달을 받습니다.</strong> 공식 결과가 며칠 내 AbbottWMM에 전달·처리되면 포털에 반영되고 확인 이메일이 발송됩니다.</li>
</ul>

<p>참고로 시드니 등 추가 메이저 완주는 정식 메달 대신 <strong>컬렉터블 코인/디스플레이</strong>(예: "Seven Star Sydney" 골드 코인)로 기념할 수 있습니다. 이는 기념품이지 식스스타·나인스타 같은 정식 메달이 아니라는 점을 기억하세요.</p>

<div class="major-next">
<p><strong>다음은 어디로?</strong></p>
<p>6대 메이저는 봄·가을에 흩어져 있어, "올해 어느 별부터 노릴지"는 본인의 추첨 결과·기록·휴가 일정에 따라 달라집니다. 진입 쉬운 도쿄·베를린으로 동력을 만들고, 추첨 3개를 매년 병행 응모하며, 보스턴 BQ는 별도 장기 목표로 두는 흐름을 추천합니다.</p>
<ul>
<li>가장 먼저 도전하기 좋은 별 → <a href="/blog/tokyo-marathon-2027-registration-guide">도쿄 마라톤 접수 가이드</a></li>
<li>가을 추첨 노린다면 → <a href="/blog/chicago-marathon-2026-registration-guide">시카고 마라톤 접수 가이드</a></li>
<li>최종 관문 BQ 준비 → <a href="/blog/boston-marathon-2027-bq-guide">보스턴 2027 BQ 가이드</a></li>
<li>7번째 별·호주 원정 → <a href="/blog/sydney-marathon-2026-registration-guide">시드니 마라톤 접수 가이드</a></li>
<li>원정 실무 총정리 → <a href="/blog/overseas-marathon-travel-checklist-korea">해외 마라톤 원정 체크리스트</a></li>
</ul>
<p>대회별 거리·난이도가 헷갈린다면 <a href="/blog/race-distance-difficulty-guide-2026">레이스 거리·난이도 가이드</a>로 감을 잡고, 전체 일정은 <a href="/marathon">마라톤 일정 페이지</a>에서 확인하세요.</p>
</div>

<div class="callout warning">
<p><strong>면책</strong></p>
<p>이 글은 2026년 6월 13일 기준 worldmarathonmajors.com·abbott.com 공식 정보를 바탕으로 작성했습니다. 개최일·참가비·진입 경로·메달 정책은 변경될 수 있으며, 추첨 당첨 여부나 미래 메이저 합류(케이프타운·상하이)는 확정된 결과가 아닙니다. 비용·환율은 근사 범위이며, 실제 신청 전 각 대회 공식 사이트와 AbbottWMM 러너 포털에서 최신 정보를 반드시 직접 확인하세요. 산초 에디터는 비용·당첨·미래 일정을 보장하지 않습니다.</p>
<p>🗺️ 6대 메이저 전체 비교와 "어디부터 갈까"가 궁금하다면 <a href="/blog/world-marathon-majors-guide-2026">세계 6대 마라톤 완전정복</a>에서 한눈에 보세요.</p>
`,
  },
  {
    id: 'boston-marathon-2027-bq-guide',
    slug: 'boston-marathon-2027-bq-guide',
    title: '보스턴마라톤, 추첨이 없다 — 한국에서 BQ(자격기록) 만드는 현실 가이드 | 연령별 기준표·컷오프·국내 WA공인 대회로 자격 따기',
    description: '보스턴은 6대 메이저 중 유일하게 추첨이 없습니다. BQ 기록 또는 자선뿐 — 그런데 BQ는 미국까지 갈 필요 없이 서울·경주·춘천 같은 국내 WA/AIMS 공인 대회 기록으로 제출할 수 있습니다. 연령·성별 기준표, 기준만으론 부족한 컷오프 현실, 2027 내리막 페널티 신설, 등록주간까지 한국 러너 기준으로 정리했습니다.',
    thumbnail: '/images/blog/boston-marathon-2027-bq-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'guide' as const,
    readingTime: 9,
    tags: ['보스턴마라톤', '보스턴마라톤 2027', 'BQ', '보스턴 퀄리파잉', '세계 6대 마라톤', '메이저 마라톤', '마라톤 자격기록', '서울마라톤', '식스스타', '마라톤 기록 단축'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>보스턴은 6대 메이저 중 유일하게 일반 추첨이 없습니다.</strong> 길은 딱 둘 — <strong>BQ(Boston Qualifying) 기록</strong>으로 출전하거나, <strong>공식 자선 단체</strong>를 통해 모금 조건으로 배번을 받는 것뿐입니다.</li>
    <li><strong>BQ 기록은 미국까지 가서 만들 필요가 없습니다.</strong> 보스턴은 "자국 육상 관할단체(한국=대한육상연맹)가 공인한 풀코스"면 인정하므로, <strong>서울·경주·춘천 같은 국내 공인 대회에서 낸 기록을 그대로 제출</strong>할 수 있습니다.</li>
    <li><strong>기준 통과 = 출전 확정이 아닙니다.</strong> 지원자가 정원을 넘으면 "기준보다 더 빠른 사람"만 합격하는 컷오프가 적용돼, 기준보다 <strong>최소 5분, 안전하게는 7~8분</strong> 여유를 두는 게 현실적입니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🦄</span>
  <div class="callout-body">
    <p class="callout-title">보스턴이 특별한 이유 — "운이 아니라 실력으로"</p>
    <p>도쿄·런던·시카고·뉴욕·시드니는 모두 <strong>추첨(ballot)</strong>이 있어 빠르지 않아도 운만 좋으면 갈 수 있습니다. 하지만 <strong>보스턴 마라톤(2027년 4월 19일 개최)에는 일반 추첨이 없습니다.</strong> 정해진 연령·성별별 기준 기록(BQ)을 통과하거나, 공식 자선 단체를 통해 거액을 모금하는 것 외에 출전 경로가 없죠. 그래서 보스턴 완주는 메이저 중에서도 "자격을 증명한 러너"의 상징처럼 여겨집니다. 이 글은 한국 러너가 <strong>국내 대회만으로 BQ를 만드는 현실 경로</strong>에 초점을 둡니다.</p>
  </div>
</div>

<h2>BQ 자격 기준표 — 연령·성별 정확히</h2>

<p>BQ 기준은 <strong>대회 당일(2027년 4월 19일) 기준 만 나이</strong>로 판정합니다. 2026년 대회부터 전 연령대가 5분씩 강화됐고, <strong>2027년에도 이 강화된 기준이 그대로 유지</strong>됩니다. 아래는 보스턴육상협회(BAA) 공식 기준표입니다.</p>

<table>
  <thead>
    <tr><th>연령대(대회 당일)</th><th>남자</th><th>여자 / 논바이너리</th></tr>
  </thead>
  <tbody>
    <tr><td>18–34</td><td><strong>2:55:00</strong></td><td>3:25:00</td></tr>
    <tr><td>35–39</td><td>3:00:00</td><td>3:30:00</td></tr>
    <tr><td>40–44</td><td>3:05:00</td><td>3:35:00</td></tr>
    <tr><td>45–49</td><td>3:15:00</td><td>3:45:00</td></tr>
    <tr><td>50–54</td><td>3:20:00</td><td>3:50:00</td></tr>
    <tr><td>55–59</td><td>3:30:00</td><td>4:00:00</td></tr>
    <tr><td>60–64</td><td>3:50:00</td><td>4:20:00</td></tr>
    <tr><td>65–69</td><td>4:05:00</td><td>4:35:00</td></tr>
    <tr><td>70–74</td><td>4:20:00</td><td>4:50:00</td></tr>
    <tr><td>75–79</td><td>4:35:00</td><td>5:05:00</td></tr>
    <tr><td>80+</td><td>4:50:00</td><td>5:20:00</td></tr>
  </tbody>
</table>

<p>예를 들어 대회 당일 기준 만 38세 남성이라면 35–39 구간이 적용돼 <strong>3시간 00분 00초</strong> 이내여야 합니다. 나이 계산 기준이 "신청 시점"이 아니라 "대회 당일"이라는 점을 꼭 기억하세요 — 1월생 러너가 본인 나이를 한 살 낮춰 잡았다가 더 빡센 기준에 걸리는 일이 종종 있습니다.</p>

<h2>컷오프 현실 — 기준만으론 부족합니다</h2>

<p>여기서 한국 러너가 가장 많이 오해하는 부분입니다. <strong>BQ 기준을 통과했다고 해서 출전이 확정되는 게 아닙니다.</strong> 보스턴 정원은 약 3만 명인데, 기준 통과자가 정원을 넘으면 "기준보다 더 빠른 순서대로" 합격자를 자릅니다. 이걸 <strong>컷오프(cutoff)</strong>라고 부릅니다.</p>

<div class="callout warning">
  <span class="callout-icon">⏱️</span>
  <div class="callout-body">
    <p class="callout-title">"선착순"이 아닙니다 — 등록주간에 일괄 접수 후 빠른 순으로 합격</p>
    <p>보스턴 등록은 먼저 신청한 사람이 유리한 선착순이 아닙니다. <strong>등록주간(약 5일) 동안 일괄 접수</strong>를 받은 뒤, 기준 대비 여유 시간이 큰 순서대로 합격을 결정합니다. 그러니 등록주간 첫날에 서두를 필요는 없지만, <strong>기록 자체가 기준보다 충분히 빨라야</strong> 합니다.</p>
  </div>
</div>

<p>과거 실제 합격선(기준보다 얼마나 더 빨라야 했는지)을 보면 감이 잡힙니다.</p>

<table>
  <thead>
    <tr><th>대회 연도</th><th>컷오프(기준 대비 추가로 빨라야 했던 시간)</th></tr>
  </thead>
  <tbody>
    <tr><td>2023</td><td>컷오프 없음(기준 통과자 전원 합격)</td></tr>
    <tr><td>2024</td><td>5분 29초</td></tr>
    <tr><td>2025</td><td>6분 51초</td></tr>
    <tr><td>2026</td><td>4분 34초</td></tr>
  </tbody>
</table>

<p>2026년에 기준을 5분 강화한 덕에 컷오프가 6분 51초(2025)에서 4분 34초(2026)로 완화됐습니다. 다만 <strong>2027년 컷오프는 등록주간(2026년 9월) 종료 후에야 발표</strong>되므로 지금 단정할 수 없습니다. 과거 패턴으로 보면 <strong>기준보다 최소 5분, 안전하게는 7~8분 여유</strong>를 목표로 잡는 게 현실적인 전략입니다. "기준 딱 맞춰 통과"는 거의 매년 탈락 위험이 있다고 보면 됩니다.</p>

<h2>★국내에서 BQ 만들기 — 미국 원정은 필요 없습니다</h2>

<p>이 글의 핵심입니다. 많은 러너가 "BQ는 미국 대회에서 뛰어야 인정되는 것 아닌가?"라고 오해하는데, <strong>전혀 그렇지 않습니다.</strong> BAA 공식 규정은 다음과 같습니다.</p>

<div class="callout info">
  <span class="callout-icon">📋</span>
  <div class="callout-body">
    <p class="callout-title">BAA 코스 인증 요건</p>
    <ul>
      <li>기록은 <strong>풀코스(42.195km)</strong> 완주 기록이어야 합니다(하프 환산·트레드밀·가상·실내·타임트라이얼 모두 불인정).</li>
      <li>코스가 <strong>World Athletics / AIMS / USATF / 해당국 육상 관할단체</strong>에 의해 공인되어야 합니다. <strong>한국은 대한육상연맹(KAAF)</strong>이 관할단체입니다.</li>
      <li><strong>트랜스폰더(칩) 계측 필수</strong>, 공식 참가자 최소 3명 이상.</li>
    </ul>
    <p>즉, <strong>"자국 관할단체가 공인한 코스면 어느 나라 대회든 인정"</strong>된다는 뜻입니다. 한국에서 KAAF/AIMS/WA 공인 코스로 뛴 기록을 그대로 보스턴에 제출할 수 있습니다.</p>
  </div>
</div>

<p>여기서 꼭 구분해야 할 개념이 있습니다. <strong>"라벨(대회 등급)"과 "코스 공인(거리 측정 인증)"은 다른 것</strong>입니다. World Athletics 플래티넘·골드·엘리트 라벨은 대회의 운영·엘리트 필드 수준을 나타내는 등급이고, 보스턴이 요구하는 건 <strong>거리가 정확히 측정·인증된 공인 코스</strong>입니다. 라벨이 없어도 코스가 공인됐으면 BQ로 쓸 수 있고, 반대로 라벨이 있으면 코스 공인은 당연히 충족합니다.</p>

<table>
  <thead>
    <tr><th>국내 대회</th><th>공인 현황</th><th>BQ 인정</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>서울마라톤(동아)</strong></td><td>World Athletics <strong>플래티넘 라벨</strong> — 국내 유일, 보스턴·도쿄·뉴욕과 동급 최상위</td><td>✅ 가장 안전(코스·기록 신뢰 최상)</td></tr>
    <tr><td><strong>경주국제마라톤</strong></td><td>World Athletics <strong>엘리트 라벨</strong> 공인 코스</td><td>✅ 인정</td></tr>
    <tr><td><strong>춘천마라톤</strong></td><td><strong>AIMS 국제 공인 코스</strong> + 대한육상연맹 공인</td><td>✅ 인정</td></tr>
    <tr><td>JTBC 서울마라톤</td><td>WA 라벨 없음(코스 공인 여부는 별개)</td><td>⚠️ 코스 공인 여부 개별 확인 권장</td></tr>
  </tbody>
</table>

<p>실전 관점에서 보면, <strong>서울·경주·춘천 모두 하반기(가을~겨울) 단풍철에 열리는 평탄한 PB 코스</strong>라 BQ를 노리기에 최적입니다. 특히 동아 서울마라톤은 국내 유일 WA 플래티넘 대회라 기록 신뢰도와 코스 공인 모두 가장 확실합니다. 대회별 일정·코스 정보는 <a href="/marathon/seoul-marathon-2026">서울마라톤</a>, <a href="/marathon/gyeongju-international-marathon-2026">경주국제마라톤</a>, <a href="/marathon/chuncheon-marathon-2026">춘천마라톤</a> 페이지에서 확인하고, 전체 일정은 <a href="/marathon">마라톤 캘린더</a>에서 살펴보세요.</p>

<div class="callout info">
  <span class="callout-icon">🚫</span>
  <div class="callout-body">
    <p class="callout-title">2027년 신설 룰 — 내리막 특화 코스에 시간 페널티</p>
    <p>2027년 등록부터 <strong>순고도 하강(net-downhill)이 큰 코스</strong>에 시간 페널티가 신설됩니다(향후 최소 2년 유지).</p>
    <ul>
      <li>순하강 1,500~2,999피트: 제출 기록에 <strong>+5분</strong> 가산</li>
      <li>순하강 3,000~5,999피트: <strong>+10분</strong> 가산</li>
      <li>순하강 6,000피트 이상: <strong>자격 인정 불가</strong></li>
    </ul>
    <p>한국 대회는 평탄하거나 고저차가 작아 이 페널티의 영향권 밖입니다. 오히려 미국의 "내리막 특화 BQ 사냥 대회"가 막힌 셈이라, <strong>정직한 평탄 코스인 국내 공인 대회의 가치가 더 올라갔습니다.</strong></p>
  </div>
</div>

<h2>등록주간·자선 대안</h2>

<p><strong>자격 윈도</strong>(인정 기록을 낼 수 있는 기간)는 <strong>2025년 9월 13일 이후 완주 기록</strong>부터입니다. 이 날짜 이후 국내 공인 대회에서 BQ 기록을 만들면 2027 보스턴 자격으로 제출할 수 있습니다. <strong>등록주간은 2026년 9월</strong>에 열릴 예정이지만, 정확한 날짜는 아직 공식 발표 전입니다(참고로 2026 대회 등록주간은 2025년 9월 8~12일이었습니다). 등록주간 일정은 BAA가 통상 봄~여름에 공지하므로, 기록을 만든 뒤 baa.org 공지를 확인하세요.</p>

<div class="callout warning">
  <span class="callout-icon">💸</span>
  <div class="callout-body">
    <p class="callout-title">자선(charity) 경로 — 한국 러너에겐 현실적 차선책</p>
    <p>BQ 기록 없이 출전하는 유일한 공식 길은 <strong>Bank of America 보스턴 마라톤 공식 자선 프로그램</strong>입니다. BAA가 비영리단체에 초청 배번을 배정하고, 러너는 모금 서약을 합니다.</p>
    <ul>
      <li><strong>BAA 최소 모금 기준: 배번당 $5,000</strong>(하한선). 실제 대부분 단체는 <strong>$8,500~$10,000</strong>를 요구하며, 일부는 $15,000까지 올라갑니다.</li>
      <li>별도로 <strong>신청비 약 $375</strong>(모금액에 포함되지 않음)가 듭니다.</li>
      <li>자선 경로는 미국 비영리단체 모금이라 <strong>한국에서 모금 동력을 확보하기가 현실적으로 어렵습니다.</strong> 한국 러너의 1순위는 어디까지나 <strong>국내 공인 대회 BQ</strong>로 잡는 게 합리적입니다.</li>
    </ul>
  </div>
</div>

<h2>보스턴 코스 — 뉴턴 힐과 내리막 함정, 그리고 신발</h2>

<p>보스턴 코스는 기록을 노리기에 결코 쉽지 않은 "함정 코스"입니다. 홉킨턴에서 출발한 뒤 <strong>초반이 길게 내리막</strong>이라 페이스가 잘 나오지만, 이때 대퇴사두근(허벅지 앞쪽)에 미세 손상이 누적됩니다. 그리고 <strong>32km 지점(뉴턴) 일대의 연속 언덕</strong>, 그 정점인 <strong>하트브레이크 힐</strong>이 이미 지친 다리를 강타하죠. "내리막으로 다리를 망가뜨린 뒤 오르막으로 끝장낸다"는 구조라, BQ 기록보다 더 빠른 실력이 필요한 이유이기도 합니다.</p>

<p>그래서 보스턴 준비에는 <strong>내리막 근지구력 훈련</strong>(편심성 수축 대비)과 <strong>완충·반발이 좋은 카본 슈퍼슈즈</strong>가 중요합니다. 초반 내리막에서 다리 손상을 줄여주고 후반 언덕에서 에너지 리턴을 받쳐줄 신발이 유리하죠.</p>

<ul>
  <li><a href="/shoes/asics-metaspeed-edge-plus">아식스 메타스피드 엣지+</a> — 보폭을 늘리는 스트라이드형 러너에게 맞는 카본화로, 언덕 구간에서 추진력을 살리기 좋습니다.</li>
  <li><a href="/shoes/nike-vaporfly-4">나이키 베이퍼플라이 4</a> — 가볍고 반발이 강해 PB용 슈퍼슈즈의 기준점입니다.</li>
  <li><a href="/shoes/adidas-adios-pro-4">아디다스 아디오스 프로 4</a> — 로드러너 막대 구조로 안정감과 반발을 함께 잡은 균형형 카본화입니다.</li>
</ul>

<p>풀코스 BQ 자체가 처음이라면, 배번부터 잡기 전에 <a href="/blog/race-distance-difficulty-guide-2026">거리별 난이도 가이드</a>로 내 수준과 목표 페이스를 먼저 점검하길 권합니다.</p>

<div class="major-next">
  <p class="mn-title">🏁 보스턴 다음 한 걸음 — 당신의 방향은?</p>
  <div class="mn-grid">
    <a class="mn-card" href="/blog/tokyo-marathon-2027-registration-guide"><span class="mn-emoji">🗼</span><div class="mn-label">도쿄마라톤 2027</div><div class="mn-desc">추첨이 있어 BQ 없이도 도전 가능. 인천 2시간·시차 0의 첫 메이저</div></a>
    <a class="mn-card" href="/blog/chicago-marathon-2026-registration-guide"><span class="mn-emoji">🌆</span><div class="mn-label">시카고마라톤 2026</div><div class="mn-desc">세계 최속 평지 PB 성지 — BQ 기록 만들기에도 유리한 코스</div></a>
    <a class="mn-card" href="/blog/overseas-marathon-travel-checklist-korea"><span class="mn-emoji">🧳</span><div class="mn-label">해외 원정 준비 매뉴얼</div><div class="mn-desc">인천 출발·한국 여권 기준 공통 체크리스트. 어느 메이저든 챙길 것</div></a>
  </div>
</div>

<p>🗺️ 6대 메이저 전체 비교와 "어디부터 갈까"가 궁금하다면 <a href="/blog/world-marathon-majors-guide-2026">세계 6대 마라톤 완전정복</a>에서 한눈에 보세요.</p>

<p class="disclaimer">※ BQ 자격 기준·자격 윈도·자선 모금 하한선은 baa.org 공식 발표(2026-06 확인) 기준입니다. <strong>2027 등록주간 확정일과 컷오프 수치는 2026년 9월 등록주간 전후로 발표</strong>되며, 컷오프는 매년 지원자 수에 따라 달라지므로 본문의 과거 수치(2024~2026)는 참고용일 뿐 2027 결과를 보장하지 않습니다. 신청 전 반드시 baa.org와 각 국내 대회 공식 페이지에서 최신 정보를 확인하세요.</p>
`,
  },
  {
    id: 'overseas-marathon-travel-checklist-korea',
    slug: 'overseas-marathon-travel-checklist-korea',
    title: '한국 러너 해외 메이저 마라톤 원정 매뉴얼 — 항공·시차·입국허가·결제·보험 끝판 체크리스트 | 인천 출발, 7대 메이저 통합 정리',
    description: '해외 메이저 마라톤 원정, 신청보다 준비물에서 사고가 납니다. 인천(ICN) 출발·한국 여권·한국 카드 기준으로 여행자보험(스포츠 특약), 해외결제 카드(DCC 끄기), 카본화 기내반입, 빕 수령, 시차 적응까지 — 도쿄·시드니·런던·베를린·시카고·보스턴·뉴욕 7대 메이저 물류를 한 표로 묶은 에버그린 매뉴얼. 미국 ESTA, 영국 ETA(£20·2025-01-08 의무화), EU ETIAS(2026 Q4 출시 예정) 최신 입국 허가 포함.',
    thumbnail: '/images/blog/overseas-marathon-travel-checklist-korea.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'tips' as const,
    readingTime: 13,
    tags: ['해외 마라톤', '마라톤 해외원정', '여행자보험', '해외결제 카드', 'DCC', '시차 적응', '카본화 기내반입', '메이저 마라톤', 'ESTA', '영국 ETA', 'EU ETIAS', '도쿄마라톤', '시드니마라톤', '런던마라톤', '베를린마라톤', '시카고마라톤', '보스턴마라톤', '뉴욕마라톤', '식스스타', '러닝 여행 준비물'],
    faqs: [
      {
        question: '해외 마라톤 갈 때 입국 허가(ESTA·ETA·ETIAS)는 어떻게 다른가요?',
        answer: '미국(시카고·보스턴·뉴욕)은 ESTA(USD $21·2년 유효)를 출발 72시간 전까지, 영국(런던)은 2025년 1월 8일부터 의무화된 ETA(£20·2년 유효)를 여행 3영업일 전까지 신청합니다. EU(베를린)는 2026년 6월 기준 ETIAS가 아직 필수가 아니며(2026 Q4 출시 예정, 전환기 후 2027년 본격 시행 예정), 호주(시드니)는 ETA가 필요합니다. 셋 다 비자는 아니지만 없으면 탑승이 거부되며, 규정은 자주 바뀌므로 발권 직후 공식 사이트에서 확인하세요.',
      },
      {
        question: '인천에서 메이저 개최 도시까지 비행시간이 얼마나 되나요?',
        answer: '도쿄(하네다) 약 2시간 30분, 시드니 약 10시간 20~35분, 런던(히드로) 약 13시간 30분~14시간 50분, 시카고 약 13시간 30분, 보스턴 약 13시간 50분(직항), 뉴욕(JFK) 약 14시간입니다. 베를린은 인천발 직항이 없어 프랑크푸르트(FRA) 경유로 약 14시간 45분 이상 걸립니다.',
      },
      {
        question: '시차 적응은 어느 도시가 가장 힘든가요?',
        answer: '도쿄는 시차 0이라 적응이 필요 없습니다. 유럽(런던 약 8시간, 베를린 약 7시간)은 중간 난이도입니다. 미국(시카고 약 14시간, 보스턴·뉴욕 약 13시간)이 가장 가혹해, 대회 최소 3~4일 전 도착해 현지 시간에 맞춰 자고 일어나며 아침 햇빛을 쬐는 것이 정석입니다.',
      },
      {
        question: '해외에서 카드 결제는 어떻게 준비하죠?',
        answer: '한국 카드는 Visa·Mastercard면 대부분 쓰입니다. 카드사 앱에서 해외원화결제(DCC)를 미리 차단해 현지 통화로 결제되게 하고, 해외결제 사용을 활성화한 뒤 영문 성명을 여권과 일치시키세요. 백업 카드 1장과 비상용 현지 통화 소액 현금을 함께 챙기는 조합이 안전합니다.',
      },
      {
        question: '마라톤 여행자보험은 일반 여행자보험으로 충분한가요?',
        answer: '아닐 수 있습니다. 마라톤을 위험 스포츠로 보고 면책하는 상품이 있으므로, 가입 전 약관에서 마라톤 참가 중 상해가 보장되는지 확인하세요. 특히 미국(시카고·보스턴·뉴욕)은 의료비가 매우 비싸므로 의료비 보장 한도가 충분한 상품을 권합니다.',
      },
    ],
    content: `
<div class="tldr"><span class="tldr-label">3줄 요약</span><ul><li><strong>원정 사고는 '신청'이 아니라 '준비물 디테일'에서 난다.</strong> 여행자보험 스포츠 보장, 해외결제 카드 DCC 끄기, 레이스화 기내반입 — 이 셋이 90%를 막는다.</li><li><strong>도시별로 항공·시차·입국허가가 다르다.</strong> 7대 메이저(도쿄·시드니·런던·베를린·시카고·보스턴·뉴욕)를 인천 출발 기준 한 표로. 미국=ESTA, 영국=ETA(2025년부터 의무), EU=ETIAS(2026 Q4 출시 예정 — 올해는 아직 불필요). 셋 다 비자는 아니지만 없으면 탑승 거부.</li><li><strong>비자·입국·보험 규정은 자주 바뀐다.</strong> 이 글은 일반 원칙 정리용 — 결제·신청 전 반드시 각 공식 페이지에서 최신 규정을 직접 확인하세요.</li></ul></div>

<div class="callout info"><span class="callout-icon">💡</span><div class="callout-body"><p class="callout-title">이 글의 위치 — 도시 가이드의 '공통 준비물' 허브</p><p>이건 특정 대회 신청 가이드가 아니라, <strong>어느 메이저에 가든 똑같이 챙겨야 하는 공통 실무</strong>를 한 번에 묶은 매뉴얼입니다. 신청 절차·자선·추첨 일정은 도시별 가이드(<a href="/blog/tokyo-marathon-2027-registration-guide">도쿄</a>·<a href="/blog/sydney-marathon-2026-registration-guide">시드니</a>·<a href="/blog/chicago-marathon-2026-registration-guide">시카고</a>)에 있고, 이 글은 그 위에 얹는 "들고 갈 것·확인할 것" 체크리스트입니다. 모든 정보는 <strong>인천(ICN) 출발·한국 여권·한국 발급 카드</strong> 기준입니다.</p></div></div>

<div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-body"><p class="callout-title">먼저 — 비자·입국·보험은 '자주 바뀌는 정보'입니다</p><p>입국 허가(ETA·ESTA 등)와 보험 약관은 정책이 수시로 바뀝니다. 본문은 일반적인 준비 원칙을 정리한 것이지, 개별 약관·규정의 최종 근거가 아닙니다. 환율도 변동분이라 "약·범위"로만 적었습니다. <strong>실제 신청·결제 전에는 반드시 항공사·각국 입국 당국·보험사·카드사 공식 안내에서 최신 내용을 직접 확인</strong>하세요. 의학·금융 판단은 단정하지 않고 "확인 권장" 선에서만 다룹니다.</p></div></div>

<h2>1. 여행자보험 — 마라톤은 '스포츠 중 사고'라 특약 확인이 핵심</h2>

<p>해외 원정에서 가장 먼저, 그리고 가장 자주 빠뜨리는 게 보험입니다. 평소 카드 부가 여행보험만 믿고 가는 분이 많은데, <strong>마라톤은 '운동(스포츠) 중 사고'로 분류</strong>될 수 있어 일반 여행자보험 기본 담보에서 빠지거나 면책되는 경우가 있습니다. 가입 전 약관에서 이 부분을 직접 확인하는 게 핵심입니다.</p>

<p>확인할 포인트를 일반 가이드 수준으로 정리하면 이렇습니다.</p>

<table>
<thead><tr><th>확인 항목</th><th>왜 보는가</th></tr></thead>
<tbody>
<tr><td><strong>스포츠/운동 중 상해 보장 여부</strong></td><td>마라톤 참가 중 발생한 상해가 '위험한 활동' 면책에 걸리는지. 일부 상품은 아마추어 대회 참가를 보장, 일부는 제외.</td></tr>
<tr><td><strong>해외 의료비 한도</strong></td><td>미국처럼 의료비가 극단적으로 비싼 나라는 한도가 낮으면 의미가 없음(아래 미국 경고 참고).</td></tr>
<tr><td><strong>응급 후송·귀국 이송 담보</strong></td><td>현지 입원 후 국내 이송이 필요할 때 비용이 큼. 메이저 원정처럼 장거리일수록 중요.</td></tr>
<tr><td><strong>휴대품/수하물 분실</strong></td><td>레이스화·기어 분실 시 보상. 위탁수하물 사고 대비(3번 항목과 연결).</td></tr>
</tbody>
</table>

<div class="callout warning"><span class="callout-icon">🏥</span><div class="callout-body"><p class="callout-title">미국(시카고·뉴욕·보스턴) 원정이면 의료비 한도를 특히 보세요</p><p>미국은 응급실 한 번에 수백만~수천만 원이 나올 수 있는 의료비 구조입니다. 시카고처럼 미국 메이저를 갈 때는 <strong>의료비 보장 한도가 충분한 상품인지</strong>를 우선순위로 확인하는 걸 권합니다. "마라톤 같은 아마추어 스포츠 참가 중 상해가 보장되는지"를 보험사에 직접 문의해 확정해 두면 가장 안전합니다. 보장 여부·한도·면책은 상품마다 달라 여기서 특정 상품을 단정하지 않습니다 — 가입 전 본인 약관 확인이 원칙입니다.</p></div></div>

<h2>2. 해외결제 카드 — DCC 끄기 하나로 수수료가 줄어든다</h2>

<p>신청비·자선 모금·현지 결제는 전부 해외결제입니다. 카드 한 장 잘못 챙기면 신청 단계에서 막히거나, 알게 모르게 수수료를 더 냅니다. 일반적으로 권장되는 원칙은 이렇습니다.</p>

<ul>
<li><strong>해외원화결제(DCC)는 끈다.</strong> DCC는 해외 가맹점에서 결제 통화를 '원화(KRW)'로 보여주는 옵션인데, 이때 가맹점 환율 + 수수료가 얹혀 보통 더 비쌉니다. 카드사 앱/홈페이지에서 <strong>'해외원화결제 차단(DCC 차단)'을 미리 설정</strong>하면 현지 통화로 결제돼 불필요한 마크업을 피할 수 있습니다.</li>
<li><strong>해외 이용 수수료를 미리 파악한다.</strong> 카드마다 해외 이용 시 브랜드 수수료(Visa/Master 등)와 해외 서비스 수수료가 붙습니다. 카드 약관에서 본인 카드 수수료율을 확인해 두면 예산 계산이 정확해집니다.</li>
<li><strong>Visa/Master 브랜드를 1순위로.</strong> 해외 가맹점·온라인 신청 폼 호환성이 가장 넓은 건 Visa/Mastercard입니다. 일부 자선·결제 게이트웨이는 다른 브랜드를 안 받기도 하므로, 메인은 Visa/Master로 잡는 게 무난합니다.</li>
<li><strong>유효기간을 반드시 확인한다.</strong> 원정 기간 중 카드 유효기간이 만료되면 현지에서 낭패입니다. 출발 전 만료월이 임박한 카드는 갱신하거나 다른 카드를 메인으로 두세요. 백업 카드 한 장은 따로 챙기는 걸 권합니다.</li>
</ul>

<div class="callout info"><span class="callout-icon">💳</span><div class="callout-body"><p class="callout-title">신청 단계 사고 1순위: 해외결제 막힌 카드 + 영문명 불일치</p><p>자선·패키지 결제는 USD/GBP/AUD 등으로 청구되는 경우가 많습니다. <strong>해외결제가 비활성화된 카드면 신청 자체가 실패</strong>합니다. 출발 전 카드사 앱에서 '해외결제 사용' 상태를 먼저 켜두세요. 그리고 신청 폼의 <strong>영문 성명은 여권과 100% 일치</strong>시켜야 현지 배번 수령에서 문제가 없습니다(4번 항목 참고). 환율은 변동분이라 본문에 단정하지 않습니다 — 결제 시점 환율로 보세요.</p></div></div>

<h2>3. 러닝화·카본화 기내반입 — '공식 규정'이 아니라 '실용 팁'</h2>

<p>레이스화, 특히 비싼 카본화는 <strong>위탁수하물에 넣지 말고 기내 휴대(캐리온)로 들고 타는 걸 권합니다.</strong> 이유는 단순합니다 — 위탁수하물이 분실·지연되면 대회 당일 검증된 내 레이스화 없이 뛰어야 하는 최악의 상황이 생기기 때문입니다.</p>

<div class="callout warning"><span class="callout-icon">📌</span><div class="callout-body"><p class="callout-title">이건 항공 규정이 아니라 러너들의 실전 팁입니다</p><p>"레이스화 기내반입"은 항공사 공식 의무 규정이 아니라, <strong>수하물 사고를 피하려는 경험칙</strong>입니다. 일반 운동화는 기내 휴대에 제한이 없는 게 보통이지만, 액체·배터리(워치 충전기 보조배터리 등)·날카로운 물품은 항공사·국가별 기내 반입 규정을 따로 확인하세요. 보조배터리는 대개 위탁 금지·기내 휴대 대상입니다.</p></div></div>

<p>실전 패킹 팁: <strong>대회 당일 입을 핵심 아이템(레이스화·양말·빕 고정용 핀·워치·젤)은 캐리온에 모아두면</strong> 위탁수하물이 늦게 나와도 대회를 못 뛰는 일은 막을 수 있습니다. 카본화 선택이 고민이라면 코스 성격에 맞춰 고르세요 — 평지 PB 코스(시카고)와 롤링 코스(시드니)는 추천 세팅이 다릅니다(아래 6번·CTA 참고).</p>

<h2>4. 빕(배번)·패킷 수령 — expo에서, 보통 여권 지참, 전날 마감 주의</h2>

<p>해외 메이저는 한국 대회처럼 우편으로 배번을 보내주지 않습니다. <strong>대회 전 며칠간 열리는 엑스포(Expo)에서 직접 수령</strong>하는 게 일반적입니다. 여기서 한국 러너가 자주 사고를 내는 지점이 둘입니다.</p>

<ul>
<li><strong>신분 확인.</strong> 수령 시 본인 확인을 위해 보통 <strong>여권(또는 신청 시 등록한 신분 정보)</strong>이 필요합니다. 신청 폼 영문명과 여권이 다르면 여기서 막힙니다 — 2번에서 영문명을 강조한 이유입니다.</li>
<li><strong>엑스포 마감 시각.</strong> 엑스포는 보통 <strong>대회 전날 일찍 닫힙니다.</strong> 대회 당일 현장 수령이 안 되는 경우가 많으므로, 도착 일정을 엑스포 운영 기간 안에 맞춰야 합니다. 비행기 연착·시차로 늦게 도착해 엑스포를 놓치면 배번을 못 받습니다.</li>
</ul>

<div class="callout info"><span class="callout-icon">🛂</span><div class="callout-body"><p class="callout-title">도착 일정 = '대회일'이 아니라 '엑스포 마지막 날' 기준으로</p><p>항공권을 잡을 때 기준을 대회일이 아니라 <strong>엑스포 마지막 운영일 이전 도착</strong>으로 두세요. 시차로 인한 컨디션 회복 시간까지 감안하면, 대회 2~3일 전 도착이 무난합니다. 정확한 엑스포 기간·수령 요건은 도시별 가이드와 각 대회 공식 페이지에서 확인하세요.</p></div></div>

<h2>5. 시차 적응 — 방향(동/서)에 따라 전략이 다르다</h2>

<p>시차 적응은 일반적으로 <strong>"여행 방향"</strong>에 따라 난이도와 전략이 갈립니다. 흔히 알려진 원칙은 이렇습니다(개인차가 크므로 일반 지침으로만 참고하세요).</p>

<table>
<thead><tr><th>방향</th><th>해당 메이저(인천 기준)</th><th>일반적 원칙</th></tr></thead>
<tbody>
<tr><td><strong>동쪽 이동(시계가 빨라짐)</strong></td><td>시드니(+1h)</td><td>잠드는 시각을 앞당겨야 해 보통 더 힘듦. 며칠 전부터 취침·기상을 조금씩 당기고, <strong>아침 햇빛 노출</strong>을 활용하는 게 일반적 권장.</td></tr>
<tr><td><strong>서쪽 이동(시계가 느려짐)</strong></td><td>미국(시카고 −14h·보스턴/뉴욕 −13h), 유럽(런던 −8h·베를린 −7h)</td><td>늦게 자는 쪽이라 비교적 적응이 쉽다는 게 통설. <strong>저녁 햇빛 노출</strong>로 취침을 늦추는 방향이 흔히 권장됨. 단 미국은 차이가 13~14시간으로 커 회복일을 넉넉히(3~4일).</td></tr>
<tr><td><strong>시차 거의 없음</strong></td><td>도쿄(시차 0)</td><td>시차 적응이 사실상 불필요 — 첫 메이저로 도쿄가 유리한 큰 이유.</td></tr>
</tbody>
</table>

<p>공통 원칙은 <strong>"도착 며칠 전부터 미리 현지 시각 쪽으로 생활 리듬을 조금씩 옮기고, 빛 노출을 방향에 맞게 활용하며, 대회 2~3일 전 도착해 회복 시간을 둔다"</strong>입니다. 시카고처럼 −14시간 차이가 나는 경우 컨디션 회복에 며칠을 잡아두는 게 안전합니다. 단, 수면제·멜라토닌 등 약물 사용은 의학적 판단 영역이라 여기서 권하지 않습니다 — 필요하면 의료진과 상담하세요.</p>

<h2>6. 현지 통화·현금 — 카드 위주 + 소액 현금</h2>

<p>요즘 메이저 개최 도시는 대부분 카드 결제가 잘 됩니다. 일반적인 전략은 <strong>"메인은 해외결제 카드, 보조로 소액 현지 현금"</strong>입니다.</p>

<ul>
<li><strong>현금은 소액만.</strong> 엑스포 주변 노점, 일부 교통, 팁 문화권(미국)에서 소액 현금이 필요할 수 있습니다. 큰 금액을 미리 환전해 들고 다닐 이유는 적습니다.</li>
<li><strong>환전 팁.</strong> 도쿄(엔)·시드니(호주달러)·시카고(미국달러)처럼 통화가 다릅니다. 환율이 변동분이라 본문에 금액을 단정하지 않습니다 — 출국 전 주거래은행/환전 앱에서 그날 환율을 비교하세요. 공항 환전은 일반적으로 시내·앱보다 환율이 불리한 편이라는 게 통설입니다.</li>
<li><strong>DCC는 현금 인출(ATM)에서도 뜬다.</strong> 현지 ATM 인출 시에도 '원화로 받겠냐'는 DCC 안내가 나오면, 현지 통화 인출을 택하는 게 일반적으로 유리합니다(2번 원칙과 동일).</li>
</ul>

<h2>7. 출발선 대기 — throwaway 의류 + GPS 워치 세팅</h2>

<p>메이저는 출발 전 대기 시간이 깁니다. 코랄(corral) 배정 후 출발까지 길게는 한두 시간을 야외에서 보내기도 하죠. 이 시간의 추위·장비 관리가 레이스 초반 컨디션을 좌우합니다.</p>

<ul>
<li><strong>버리는 옷(throwaway).</strong> 출발 전 체온 유지를 위해, 출발 후 버려도 되는 헌 옷·일회용 우의를 겹쳐 입는 게 일반적입니다. 많은 메이저가 버려진 의류를 수거해 기부합니다. 비싼 옷 말고 버려도 아깝지 않은 걸로.</li>
<li><strong>GPS 워치 충전·위성 수신.</strong> 전날 밤 <strong>워치를 100% 충전</strong>하고, 출발선에서 <strong>미리 GPS(위성) 신호를 잡아두세요.</strong> 대형 대회는 출발 직전 인파·고층 건물 때문에 위성 수신이 늦어질 수 있어, 코랄 진입 후 여유 있게 위성 픽스를 잡아두면 출발 직후 페이스가 튀는 걸 줄입니다.</li>
<li><strong>젤·소모품.</strong> 레이스 중 보급은 대회마다 다릅니다. 평소 쓰던 젤을 직접 챙겨 가는 게 안전합니다(현지에서 같은 제품을 못 구할 수 있음).</li>
</ul>

<h2>8. 도시별 물류 매트릭스 — 7대 메이저, 인천 출발 기준 한눈에</h2>

<p>위 공통 준비물 위에, 도시마다 다른 건 <strong>항공 시간·시차·입국 허가</strong> 세 가지입니다. 6대 메이저에 2025년 합류한 시드니까지, <strong>7대 메이저 개최 도시 전부</strong>를 인천(ICN) 출발·한국 여권 기준으로 정리했습니다. (시차는 각 대회 개최기 현지 서머타임 적용 기준입니다.)</p>

<table>
<thead><tr><th>도시(공항)</th><th>비행시간(인천 출발)</th><th>시차(서울 대비)</th><th>입국 허가 · 비용</th></tr></thead>
<tbody>
<tr><td><strong>🗼 도쿄</strong> (HND/NRT)</td><td>직항 약 <strong>2시간 30분</strong></td><td><strong>0시간</strong></td><td>일본 단기 방문 <strong>무비자</strong> · 무료</td></tr>
<tr><td><strong>🌉 시드니</strong> (SYD)</td><td>직항 약 <strong>10시간 20~35분</strong></td><td><strong>+1시간</strong>(AEST)</td><td>호주 <strong>ETA 필수</strong> · 약 AUD $20</td></tr>
<tr><td><strong>🇬🇧 런던</strong> (LHR)</td><td>직항 약 <strong>13.5~14.8시간</strong></td><td><strong>−8시간</strong>(BST)</td><td>영국 <strong>ETA 필수</strong> · £20</td></tr>
<tr><td><strong>🇩🇪 베를린</strong> (BER)</td><td><strong>직항 없음</strong> — FRA 경유 약 14시간 45분+</td><td><strong>−7시간</strong>(CEST)</td><td>무비자 90일 · <strong>ETIAS 2026 Q4 예정</strong>(현재 불필요)</td></tr>
<tr><td><strong>🌆 시카고</strong> (ORD)</td><td>직항 약 <strong>13시간 30분</strong></td><td><strong>−14시간</strong>(CDT)</td><td>미국 <strong>ESTA 필수</strong> · USD $21</td></tr>
<tr><td><strong>🦞 보스턴</strong> (BOS)</td><td>직항 약 <strong>13시간 50분</strong>(KE)</td><td><strong>−13시간</strong>(EDT)</td><td>미국 <strong>ESTA 필수</strong> · USD $21</td></tr>
<tr><td><strong>🗽 뉴욕</strong> (JFK/EWR)</td><td>직항 약 <strong>14시간</strong></td><td><strong>−13~14시간</strong></td><td>미국 <strong>ESTA 필수</strong> · USD $21</td></tr>
</tbody>
</table>

<p>표에서 바로 읽히는 것. ① <strong>도쿄만 시차 0</strong>이라 적응이 필요 없어 첫 메이저로 압도적으로 쉽습니다. ② <strong>미국 3개 도시(시카고·보스턴·뉴욕)는 시차 13~14시간</strong>으로 가장 가혹합니다. ③ <strong>베를린만 직항이 없어</strong> 프랑크푸르트(FRA) 경유가 강제됩니다. 입국 허가는 다음 섹션에서 도시별로 자세히 풀어갑니다.</p>

<h2>8-1. 입국 허가 — ESTA · 영국 ETA · EU ETIAS 정리</h2>

<p>ESTA·ETA·ETIAS는 모두 \'비자\'가 아닌 <strong>전자여행허가</strong>이지만, 없으면 항공사가 탑승 자체를 거부합니다. 한국 여권 기준으로 셋을 구분합니다. (아래 비용·시행일은 2026년 6월 기준 — 규정은 자주 바뀌므로 신청 전 공식 사이트 확인이 원칙입니다.)</p>

<ul>
<li><strong>미국 — ESTA (시카고·보스턴·뉴욕):</strong> 한국은 비자면제프로그램(VWP) 대상이라 ESTA로 90일 무비자 입국. 비용 <strong>USD $21</strong>, 유효기간 <strong>2년</strong>(여권 만료가 빠르면 그날까지). 공식 사이트 <strong>esta.cbp.dhs.gov</strong>에서만 신청하고, 규정상 <strong>출발 72시간 전까지</strong> 신청 권고.</li>
<li><strong>영국 — ETA (런던) ★2025년부터 의무화:</strong> 영국은 <strong>2025년 1월 8일부터 한국 여권 소지자에게 ETA를 의무화</strong>했습니다. \'그냥 무비자\'로 들어가던 시절은 끝났습니다. 비용 <strong>£20</strong>(약 3만 4천~3만 6천 원), 한 번 받으면 <strong>2년간 여러 번 입국</strong>(1회 최대 6개월 체류). <strong>\'UK ETA\' 공식 앱</strong>(또는 GOV.UK)에서 신청하면 대개 몇 분 내 자동 승인되며, 권고는 <strong>여행 3영업일 전까지</strong>. 런던마라톤 지원자는 반드시 챙기세요.</li>
<li><strong>EU — ETIAS (베를린), 아직 \'예정\':</strong> 독일 포함 솅겐 지역은 한국 여권으로 <strong>180일 중 90일 무비자</strong>입니다. 화제의 ETIAS는 2026년 6월 기준 <strong>아직 시행 전</strong>으로, 공식 일정상 <strong>2026년 4분기(Q4) 출시 예정</strong>이며 출시 후에도 전환기·유예기간을 거쳐 <strong>본격 의무화는 2027년</strong>으로 잡혀 있습니다. 즉 <strong>2026년 안에 베를린마라톤(9월 말)을 간다면 ETIAS 없이 입국</strong>됩니다. 시행 후 비용은 <strong>€20</strong>(만 18세 미만·70세 이상 무료) 예정. 이 일정은 EU가 여러 번 미뤄온 만큼 <strong>출발 전 EU 공식 사이트(travel-europe.europa.eu)에서 최신 시행 여부 확인 필수</strong>.</li>
<li><strong>호주 — ETA (시드니):</strong> 호주는 ETA(전자여행허가)가 필요합니다. 공식 앱으로 신청하며 비용은 약 AUD $20 수준.</li>
<li><strong>일본 — 무비자 (도쿄):</strong> 단기 방문은 무비자가 일반적. 다만 입국 규정은 변동될 수 있으니 출발 전 최신 안내 확인.</li>
</ul>

<div class="callout warning"><span class="callout-icon">🛂</span><div class="callout-body"><p class="callout-title">입국 허가, 이것만은 — 공식 사이트 · 발권 직후 · 여권 잔여기간</p><p>① ESTA·ETA·ETIAS는 사전 전자 허가라 승인에 시간이 걸릴 수 있으니 <strong>항공권을 잡으면 곧바로 신청</strong>하세요. ② <strong>반드시 공식 사이트에서만</strong>(ESTA=esta.cbp.dhs.gov, UK ETA=공식 앱/GOV.UK, ETIAS=travel-europe.europa.eu, 호주 ETA=공식 앱). 검색 상단의 유사 대행 사이트는 수수료를 얹습니다. ③ 여권 유효기간(보통 잔여 6개월 이상 권장)도 함께 체크. <strong>모든 입국 규정은 예고 없이 바뀌므로 신청 전 각국 공식 안내가 최종 기준</strong>입니다.</p></div></div>

<h2>9. 카본화는 '코스 성격'에 맞춰 — 평지 vs 롤링</h2>

<p>레이스화는 기내반입(3번)만 챙기면 끝이 아니라, <strong>코스 성격에 맞는 세팅</strong>을 고르는 게 기록과 직결됩니다. 같은 카본화라도 평지 PB 코스와 오르막·롤링 코스에 어울리는 결이 다릅니다.</p>

<table>
<thead><tr><th>코스 성격</th><th>대표 메이저</th><th>어울리는 카본화 결</th></tr></thead>
<tbody>
<tr><td><strong>평지 PB · 직선 스피드</strong></td><td>시카고(세계기록 코스)·런던·베를린</td><td>공격적 추진력 세팅 — <a href="/shoes/adidas-adios-pro-4">아디제로 아디오스 프로 4</a>, <a href="/shoes/asics-metaspeed-sky-plus">메타스피드 스카이+</a></td></tr>
<tr><td><strong>롤링·언듈레이팅</strong></td><td>시드니(누적 +313m)·보스턴(하트브레이크 힐)</td><td>업힐 대응 균형형 — <a href="/shoes/on-cloudboom-strike">온 클라우드붐 스트라이크</a></td></tr>
<tr><td><strong>가깝고 평지(첫 도전)</strong></td><td>도쿄·뉴욕</td><td>익숙한 검증된 레이스화 우선</td></tr>
</tbody>
</table>

<p>핵심은 "남이 좋다는 신발"이 아니라 <strong>충분히 신어 본 검증된 레이스화</strong>를 들고 가는 것입니다. 처음 신는 카본화로 첫 해외 풀코스를 뛰는 건 권하지 않습니다 — 발에 맞는지, 장거리에서 어떤지 국내에서 먼저 확인하세요.</p>

<div class="major-next"><p class="mn-title">도시별 신청 가이드로 — 분기해서 결정하세요</p><div class="mn-grid"><a class="mn-card" href="/blog/tokyo-marathon-2027-registration-guide"><span class="mn-emoji">🗼</span><div class="mn-label">도쿄마라톤 2027</div><div class="mn-desc">인천 2시간·시차 0. 첫 메이저 1순위 — 자선·추첨·OTG 3가지 길</div></a><a class="mn-card" href="/blog/sydney-marathon-2026-registration-guide"><span class="mn-emoji">🌉</span><div class="mn-label">시드니마라톤 2026</div><div class="mn-desc">7번째 메이저·식스스타 경관 코스 — 추첨 마감 후 자선·투어</div></a><a class="mn-card" href="/blog/chicago-marathon-2026-registration-guide"><span class="mn-emoji">🌆</span><div class="mn-label">시카고마라톤 2026</div><div class="mn-desc">세계 최속 평지 PB 성지 — 자선·공식 투어 막차</div></a><a class="mn-card" href="/blog/boston-marathon-2027-bq-guide"><span class="mn-emoji">🦄</span><div class="mn-label">보스턴마라톤 2027</div><div class="mn-desc">추첨 없음 — 국내 공인 대회로 BQ 자격 만들기</div></a><a class="mn-card" href="/blog/new-york-marathon-2026-registration-guide"><span class="mn-emoji">🗽</span><div class="mn-label">뉴욕시티마라톤 2026</div><div class="mn-desc">5개 자치구 50주년 — 추첨 마감 후 자선</div></a></div></div>

<p>코스 난이도 감을 먼저 잡고 싶다면 <a href="/blog/race-distance-difficulty-guide-2026">거리별 난이도 가이드</a>로 내 수준을 점검하고, 국내외 대회 일정은 <a href="/marathon">마라톤 캘린더</a>에서 확인하세요.</p>

<p>🗺️ 6대 메이저 전체 비교와 "어디부터 갈까"가 궁금하다면 <a href="/blog/world-marathon-majors-guide-2026">세계 6대 마라톤 완전정복</a>에서 한눈에 보세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본문은 한국 러너의 해외 메이저 원정 준비를 일반 원칙 수준으로 정리한 매뉴얼입니다. 입국 허가 정보(미국 ESTA USD $21·2년, 영국 ETA £20·2025-01-08 한국 의무화·2년, EU ETIAS €20·2026 Q4 출시 예정·전환기 후 2027 본격 시행 예정, 호주 ETA·일본 단기 무비자)와 비행시간·시차는 2026년 6월 기준 공식·공개 자료를 바탕으로 정리했습니다. 여행자보험 보장 범위·면책, 카드 해외 수수료, 입국 허가 규정·수수료·시행일은 상품·카드사·항공사·각국 정책마다 다르고 <strong>예고 없이 변경</strong>됩니다 — 본문에 특정 상품·금액을 단정하지 않은 이유입니다. 환율은 변동분이라 본문에 단정하지 않았습니다. 보험·결제·입국·의학 관련 사항은 반드시 신청·결제 전 각 보험사·카드사·항공사·각국 입국 당국(ESTA=esta.cbp.dhs.gov, UK ETA=공식 앱/GOV.UK, ETIAS=travel-europe.europa.eu)·의료진 등 공식·전문 출처에서 최신 내용을 직접 확인하세요. 항공 소요시간·시차는 일반적 직항 기준 근사치로 편·계절에 따라 달라질 수 있습니다.</p>
`,
  },
  {
    id: 'sydney-marathon-2026-registration-guide',
    slug: 'sydney-marathon-2026-registration-guide',
    title: '시드니마라톤 2026 신청 — 추첨 마감 후 남은 두 갈래(자선·투어) | 8/30 임박, PB보다 식스스타·하버브리지 경관 코스',
    description: '2026 시드니마라톤(8/30) 일반추첨은 끝났습니다. 한국에서 들어가는 길은 국제 자선과 공식 여행 패키지 둘뿐 — 정해진 마감보다 자리 소진이 먼저입니다. 자선 모금 티어·비용, 인천 직항 10시간·시차 +1시간·ETA, 그리고 시드니가 PB 코스가 아닌 이유(누적 +313m)까지. 7번째 메이저를 식스스타 메달로.',
    thumbnail: '/images/blog/sydney-marathon-2026-registration-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'news' as const,
    readingTime: 8,
    tags: ['시드니마라톤', '시드니마라톤 2026', '세계 7대 마라톤', '메이저 마라톤', '식스스타', '마라톤 해외원정', '자선 마라톤', '하버브리지', '마라톤 추첨', '해외 마라톤 신청'],
    content: `
<div class="deadline-strip"><span class="dl-badge">📢 8/30 D-마이너스</span><span class="dl-text">2026 시드니마라톤 일반추첨은 2025-10-17에 이미 마감. 지금 한국에서 들어가는 길은 <strong>공식 자선(charity)</strong>과 <strong>공식 여행 패키지</strong> 둘뿐 — 정해진 마감보다 자리 소진이 먼저입니다.</span></div>

<div class="tldr"><span class="tldr-label">3줄 요약</span><ul><li><strong>일반추첨은 끝났다.</strong> 2025-10-17 마감·2025-10-29 결과 발표 완료. 남은 합법 경로는 공식 자선과 공식 여행 패키지 2가지뿐.</li><li><strong>막차는 "마감일"이 아니라 "자리 소진".</strong> 자선·패키지 모두 통일된 마감일이 공식 발표되지 않았고, 일부 자선은 이미 "마감(CLOSED)" 표기 — 서두를수록 유리.</li><li><strong>시드니는 PB 코스가 아니다.</strong> 누적 상승 +313m, 하버브리지·옥스퍼드 스트리트 두 오르막. 기록보다 식스스타 메달·경관이 목적인 대회.</li></ul></div>

<div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-body"><p class="callout-title">먼저 알아둘 것 — "당첨률" 같은 수치는 공식에 없습니다</p><p>2026 시드니마라톤은 Abbott World Marathon Majors의 7번째 메이저(2025년 합류)입니다. 일반추첨(public ballot)은 무작위 추첨이었고 이미 마감됐습니다. 인터넷에 떠도는 "당첨 확률 몇 %" 류 수치는 공식 근거가 없으니 의사결정 기준으로 삼지 마세요. 이 글은 공식 페이지에서 확인된 사실만 정리했고, 자선 모금액·환율은 변동분이라 "약·범위"로만 적었습니다.</p></div></div>

<h2>1. 일반추첨은 끝났다 — 지금 남은 두 갈래</h2>

<p>2026 시드니마라톤은 <strong>2026년 8월 30일(일)</strong> 열립니다. 예상 참가 규모 약 40,000명으로 호주 최대 마라톤이죠. 문제는 가장 쉬운 진입로였던 일반추첨이 닫혔다는 점입니다.</p>

<p>일반추첨은 2025-09-24 시작해 <strong>2025-10-17 23:59(AEST)에 마감</strong>됐고, 결과는 <strong>2025-10-29</strong>에 발표됐습니다. 공식 안내도 못을 박았습니다 — <em>"추첨이 마감된 지금, 공식 여행 패키지는 출전권을 확보할 단 두 가지 남은 방법 중 하나입니다."</em></p>

<p>즉 지금 한국에서 정식으로 배번을 받는 길은 다음 둘뿐입니다.</p>

<table>
<thead><tr><th>경로</th><th>한국에서 신청</th><th>대략적 비용 성격</th><th>마감</th></tr></thead>
<tbody>
<tr><td><strong>① 공식 국제 자선(Charity)</strong></td><td>가능</td><td>등록비 + 최소 모금액(자선마다 상이, USD/GBP 청구 多)</td><td>통일 마감일 미발표 — 선착순 소진형</td></tr>
<tr><td><strong>② 공식 여행 패키지</strong></td><td>가능</td><td>보장 배번 + 숙박 + 현지지원 묶음(가격 공식 미발표)</td><td>좌석 소진 시 마감</td></tr>
</tbody>
</table>

<p>두 경로 다 "정해진 마감일"보다 <strong>자리가 먼저 없어지는</strong> 구조입니다. 막차라는 표현이 과장이 아니라, 실제로 일부 자선은 이미 신청을 닫았습니다.</p>

<h2>2. ① 공식 자선 — 한국에서 바로 신청 가능</h2>

<p>공식 국제 자선 페이지는 미국·영국·아일랜드·뉴질랜드 등 해외 자선 단체를 묶어 <strong>USD/GBP 모금 티어제</strong>로 운영합니다. 최소 모금액은 티어별로 나뉘는데, 확인된 기준은 대략 이렇습니다.</p>

<table>
<thead><tr><th>티어</th><th>최소 모금액(국제 자선)</th></tr></thead>
<tbody>
<tr><td>Platinum</td><td>USD $3,000 / £1,800 부터</td></tr>
<tr><td>Gold</td><td>USD $6,000 / £2,000</td></tr>
<tr><td>Silver</td><td>USD $3,000~5,000 / £1,800~2,500</td></tr>
<tr><td>Bronze·Listed</td><td>USD $3,000~10,000 / £1,800~3,500</td></tr>
</tbody>
</table>

<p>구체적인 예로, 영국 <strong>Save the Children UK</strong>는 등록비 <strong>£50 + 최소 모금 £1,500</strong> 구조입니다(국제 러너 참가 제한 명시 없음, 다만 "빨리 마감된다"는 안내가 붙어 있습니다). 그 외 Garvan·Lifeline Bondi·Can Too 같은 단체는 보통 AUD $3,000~5,000 수준이지만, 이들은 <strong>호주 국내 자선</strong>이라 한국 러너는 위의 국제 자선 페이지를 통하는 편이 깔끔합니다.</p>

<div class="callout info"><span class="callout-icon">💡</span><div class="callout-body"><p class="callout-title">금액 감 잡기 (환율은 근사·범위로만)</p><p>2026년 6월 기준 1 GBP ≈ 1,700~1,800원, 1 USD ≈ 1,350~1,400원 선입니다. 영국 자선의 £1,500 모금이면 대략 <strong>250만~270만 원</strong>, 국제 자선 USD $3,000 티어면 대략 <strong>400만~420만 원</strong> 수준이라고 보면 됩니다. 모금액은 "기부로 채워 넣는 목표치"라서 본인 모금 활동으로 일부 충당이 가능하다는 점도 함께 고려하세요.</p></div></div>

<h2>3. ② 공식 여행 패키지 — 배번이 "보장"되는 길</h2>

<p>추첨 마감 후 공식이 직접 언급한 "남은 두 경로" 중 다른 하나가 공식 여행 패키지입니다. 보장 배번에 숙박과 현지 지원을 묶은 상품으로, 대표 오퍼레이터는 <strong>Marathon Tours & Travel</strong>입니다. 오세아니아·동아시아 지역 오피스를 운영하고 공식 페이지에 70여 개국 100곳 이상의 여행 파트너가 명시돼 있어, 한국에서도 글로벌 패키지 형태로 접근할 수 있습니다.</p>

<div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-body"><p class="callout-title">패키지 가격은 공식에 없습니다 — 견적은 직접</p><p>패키지 가격·보증금·예약 마감일은 공식 페이지에 공개돼 있지 않습니다. 본문에 특정 금액을 적지 않는 이유이기도 합니다. 정확한 비용은 오퍼레이터에 직접 견적을 요청하세요. 자선이 "모금으로 채우는 부담", 패키지가 "확정 비용으로 한 번에 묶는 안심"이라고 성격을 나눠 생각하면 선택이 쉬워집니다.</p></div></div>

<h2>4. 코스 — 기록 노리는 대회가 아니다</h2>

<p>시드니마라톤을 "PB용"으로 잡으면 실망합니다. 출발은 North Sydney, 초반에 <strong>하버브리지</strong>를 건너고 마지막은 <strong>오페라하우스</strong> 앞에서 끝나는 세계적 경관 코스인 대신, 고저차가 만만치 않습니다.</p>

<table>
<thead><tr><th>항목</th><th>수치</th></tr></thead>
<tbody>
<tr><td>대회일</td><td>2026-08-30(일)</td></tr>
<tr><td>예상 규모</td><td>약 40,000명 (호주 최대)</td></tr>
<tr><td>누적 상승 / 하강</td><td>+313m / −396m (순 −83m)</td></tr>
<tr><td>주요 오르막</td><td>초반 하버브리지 + 후반 옥스퍼드 스트리트</td></tr>
</tbody>
</table>

<p>2025년 코스 개편으로 달링하버·피어몬트 구간의 급커브와 U턴이 빠지면서 이전보다 빠르고 직선화됐지만, 공식·가이드 모두 여전히 기록 코스로는 권하지 않습니다. 정리하면 <strong>"기록은 베를린·시카고에서, 시드니는 경관과 식스스타 메달을 위해"</strong>가 정직한 포지셔닝입니다.</p>

<div class="callout info"><span class="callout-icon">👟</span><div class="callout-body"><p class="callout-title">시드니용 카본화는 "평지 PB용"과 결이 다르다</p><p>롤링·오르막이 섞인 시드니 코스에는, 순수 평지 PB용으로 극단적으로 세팅된 신발보다 <strong>업힐·언듈레이팅 대응이 안정적인 카본화</strong>가 맞습니다. 그래서 시드니는 <a href="/shoes/on-cloudboom-strike">온 클라우드붐 스트라이크</a>처럼 균형 잡힌 카본화를 추천합니다. 반대로 평지 PB 코스인 시카고라면 더 공격적인 세팅이 어울리죠(아래 분기 CTA 참고).</p></div></div>

<h2>5. 한국 러너 실전 — 항공·시차·신청 실수·환율</h2>

<p>해외 메이저는 "신청"보다 "준비물 디테일"에서 사고가 납니다. 시드니용 고정 체크리스트입니다.</p>

<table>
<thead><tr><th>항목</th><th>내용</th></tr></thead>
<tbody>
<tr><td>✈️ 항공</td><td>인천(ICN) → 시드니(SYD) <strong>직항 약 10시간 20~35분</strong>(대한항공 등). 야간 출발편이 많아 현지 아침 도착.</td></tr>
<tr><td>🕐 시차</td><td>8월 말은 호주 표준시(AEST) → 서울보다 <strong>+1시간</strong>. (서머타임은 10월 시작이라 8월 대회엔 적용 안 됨 — +2로 적힌 자료는 무시.)</td></tr>
<tr><td>🛂 입국</td><td>한국 여권은 무비자 입국이 아니라 <strong>ETA(전자여행허가) 사전 발급 필수</strong>. 호주 ETA 앱으로 신청, 최대 3개월 체류.</td></tr>
<tr><td>📝 신청 실수</td><td>자선·패키지 모두 <strong>여권 영문 성명을 정확히</strong> 입력. 결제는 <strong>해외결제 가능 카드(Visa/Master)</strong>로, 일부 자선은 GBP/USD로 청구돼 원화 환산·해외수수료가 붙음.</td></tr>
</tbody>
</table>

<div class="callout warning"><span class="callout-icon">💳</span><div class="callout-body"><p class="callout-title">가장 흔한 사고: 영문명·해외카드</p><p>여권과 한 글자라도 다른 영문 이름은 현지 배번 수령에서 문제가 됩니다. 신청 폼에 적는 성명은 반드시 여권과 100% 일치시키세요. 그리고 자선 모금은 GBP/£·USD/$로 청구되는 경우가 많아, 해외결제가 막힌 카드면 결제 자체가 안 됩니다. 출발 전 카드 해외결제 활성화 여부를 먼저 확인하세요. 참가비(추첨 당첨 시)는 약 AUD $330 수준으로 알려져 있는데(공식 명시가 아닌 2차 출처·추정), 1 AUD ≈ 1,070~1,100원으로 보면 대략 35만~36만 원 선입니다.</p></div></div>

<div class="major-next"><p class="mn-title">다음 메이저로 — 분기해서 결정하세요</p><div class="mn-grid"><a class="mn-card" href="/blog/tokyo-marathon-2027-registration-guide"><span class="mn-emoji">🗼</span><div class="mn-label">도쿄마라톤 2027</div><div class="mn-desc">가깝고 평지, 첫 메이저로 최적. 추첨·접수 일정 정리</div></a><a class="mn-card" href="/blog/chicago-marathon-2026-registration-guide"><span class="mn-emoji">🌆</span><div class="mn-label">시카고마라톤 2026</div><div class="mn-desc">평지 PB 끝판왕. 기록 노린다면 시드니 대신 여기</div></a><a class="mn-card" href="/shoes/on-cloudboom-strike"><span class="mn-emoji">👟</span><div class="mn-label">온 클라우드붐 스트라이크</div><div class="mn-desc">시드니 오르막·롤링에 맞는 균형형 카본화</div></a></div></div>

<p>코스 난이도가 감이 안 잡힌다면 <a href="/blog/race-distance-difficulty-guide-2026">거리별 난이도 가이드</a>로 내 수준을 먼저 점검하고, 국내외 다른 대회 일정은 <a href="/marathon">마라톤 캘린더</a>에서 확인하세요.</p>

<p>🗺️ 6대 메이저 전체 비교와 "어디부터 갈까"가 궁금하다면 <a href="/blog/world-marathon-majors-guide-2026">세계 6대 마라톤 완전정복</a>에서 한눈에 보세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본문의 일정(추첨 마감 2025-10-17·결과 2025-10-29)과 대회일(2026-08-30)은 공식 발표 기준입니다. 자선 단체별 최소 모금액·등록비, 여행 패키지 가격·보증금·예약 마감일은 단체/오퍼레이터마다 다르고 일부는 공식 미발표라 본문에 단정하지 않았습니다 — 신청 전 반드시 각 단체·오퍼레이터 공식 페이지에서 최신 금액과 마감을 확인하세요. 참가비(약 AUD $330)는 2차 출처 기반 추정치이며, 환율(AUD≈1,070~1,100원 / GBP≈1,700~1,800원 / USD≈1,350~1,400원)은 2026년 6월 기준 근사 범위로 변동될 수 있습니다.</p>
`,
  },
  {
    id: 'chicago-marathon-2026-registration-guide',
    slug: 'chicago-marathon-2026-registration-guide',
    title: '시카고마라톤 2026 신청 — 추첨 떨어졌어도 자선·투어 막차 | 세계 최속 평지 PB 코스, 자선 9/15·투어 8/16 마감',
    description: '2026 시카고마라톤(10/11) 일반추첨은 마감됐지만, 자선(최소 모금 $2,200, 9/15)과 공식 투어 패키지(8/16)로 아직 들어갈 수 있습니다. 세계기록이 나온 평지 PB 성지 — 참가비·환율, 인천 직항 13.5시간·시차 14시간·ESTA, 평지용 카본화까지 한국 러너 기준으로 정리했습니다.',
    thumbnail: '/images/blog/chicago-marathon-2026-registration-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'news' as const,
    readingTime: 8,
    tags: ['시카고마라톤', '시카고마라톤 2026', '세계 6대 마라톤', '메이저 마라톤', 'PB 마라톤', '마라톤 해외원정', '자선 마라톤', '식스스타', '마라톤 세계기록', '해외 마라톤 신청'],
    content: `
<div class="deadline-strip"><span class="dl-badge">📢 막차 안내</span><span class="dl-text">2026 시카고마라톤(10/11) 일반 추첨은 이미 마감. 지금 신청 가능한 건 자선(9/15) · 투어 패키지(8/16) 두 갈래뿐입니다.</span></div>

<div class="tldr"><span class="tldr-label">3줄 요약</span><ul>
<li><strong>일반 추첨은 끝났습니다.</strong> 2025-11-18 신청 마감, 12-11 결과 발표로 추첨 경로는 이미 닫혔어요. 2026 대회는 10월 11일(일) 개최되는 48회입니다.</li>
<li><strong>남은 건 두 갈래.</strong> 보장 출전이 되는 ① 국제 자선(최소 모금 $2,200, 9/15까지) ② 공식 투어 오퍼레이터 패키지(배번+호텔, 8/16까지)뿐입니다.</li>
<li><strong>왜 시카고냐면</strong> — 세계에서 가장 평탄한 코스, 즉 PB(개인기록) 사냥터이기 때문입니다. 남녀 마라톤 세계기록이 모두 이곳에서 나왔어요.</li>
</ul></div>

<div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-body"><p class="callout-title">추첨으로는 더 이상 못 들어갑니다</p><p>"시카고 추첨 언제 열려요?"라는 질문을 많이 받는데, 2026 대회 기준으로는 이미 닫혔습니다. 추첨 신청은 2025년 11월 18일에 마감됐고 당락은 12월 11일에 통보됐어요. 지금 시카고를 노린다면 아래 자선·투어 두 경로가 현실적인 답입니다.</p></div></div>

<h2>시카고마라톤이 'PB 성지'로 불리는 이유</h2>
<p>여섯 개 월드 메이저(보스턴·런던·베를린·시카고·뉴욕·도쿄) 중에서도 시카고는 <strong>기록을 노리는 러너의 코스</strong>로 통합니다. 도심을 가로지르되 고저차가 거의 없는 평지 위주 코스라, 페이스를 일정하게 끌고 가기에 더없이 좋거든요. 실제로 켈빈 킵텀의 남자 마라톤 세계기록(2:00:35)과 체프응게티치의 여자 세계기록이 모두 이 코스에서 수립됐습니다. 시카고 29개 동네를 도는 길에 약 150만 명의 관중이 늘어서니, 후반부에 다리가 풀릴 때 밀어주는 응원의 힘도 만만치 않고요.</p>
<p>규모도 압도적입니다. 2025년에는 역대 최다인 54,351명이 완주했고 120개국 이상이 참가했어요. 2026 대회 정확한 정원은 아직 공개되지 않았지만, 비슷한 5만 명 규모로 보면 됩니다.</p>

<h2>지금 신청 가능한 두 경로 — 자선 vs 투어</h2>
<p>추첨이 닫힌 이상, 한국 러너가 2026 시카고 배번을 손에 넣는 길은 사실상 둘입니다. 둘 다 '보장 출전'이라는 점은 같지만 성격과 비용 구조가 다릅니다.</p>

<table>
<thead><tr><th>구분</th><th>국제 자선(Charity)</th><th>투어 오퍼레이터</th></tr></thead>
<tbody>
<tr><td>신청 마감</td><td><strong>2026년 9월 15일(화)</strong> 또는 정원 소진 시</td><td><strong>2026년 8월 16일(일)</strong></td></tr>
<tr><td>출전 보장</td><td>보장</td><td>보장</td></tr>
<tr><td>추가 비용</td><td>최소 모금 <strong>$2,200</strong> (단체에 따라 더 높을 수 있음)</td><td>배번+호텔+현지 지원 묶음 가격(업체별 상이)</td></tr>
<tr><td>참가비 포함 여부</td><td>참가비와 <strong>별개</strong>로 모금액 부담</td><td>대개 패키지에 배번 포함</td></tr>
<tr><td>한국 러너 적합성</td><td>영문 모금 페이지 운영, 해외 거주자 가능</td><td>⚠️ 한국 공인 파트너 유무 사전 확인 필요</td></tr>
</tbody>
</table>

<div class="callout info"><span class="callout-icon">💡</span><div class="callout-body"><p class="callout-title">자선 모금액은 '추가 비용'입니다</p><p>자선 엔트리의 최소 모금 $2,200(약 330만~340만 원)는 아래에서 설명할 참가비와 <strong>별도</strong>입니다. 일부 단체는 추첨 탈락 후 신청 시 $3,000을 요구하기도 해요. 결제 전 해당 자선단체 영문 모금 페이지에서 최소 금액을 반드시 확인하세요.</p></div></div>

<p>투어 오퍼레이터는 국제 러너를 위한 배번+숙박+현지 지원 패키지입니다. 다만 <strong>모든 나라에 공인 시카고마라톤 투어 파트너가 있는 건 아닙니다.</strong> 한국 공인 파트너의 구체적인 업체명은 공식 발표되지 않았으니, 특정 업체 광고에 현혹되지 말고 신청 직전 공식 사이트(chicagomarathon.com)에서 한국 파트너 유무를 직접 확인하는 게 안전합니다.</p>

<h2>참가비와 일정 — 숫자로 정리</h2>
<p>참가비는 거주 국가에 따라 다릅니다. 한국 러너는 비(非)미국 거주자 요금이 적용돼요.</p>

<table>
<thead><tr><th>항목</th><th>내용</th></tr></thead>
<tbody>
<tr><td>대회일</td><td><strong>2026년 10월 11일(일)</strong></td></tr>
<tr><td>참가비(미국 거주자)</td><td>$250 (USD)</td></tr>
<tr><td>참가비(한국 등 비미국)</td><td><strong>$260</strong> (USD, 약 39만~40만 원)</td></tr>
<tr><td>환불</td><td>불가, 별도 처리수수료 부과</td></tr>
<tr><td>투어 패키지 마감</td><td>2026년 8월 16일(일)</td></tr>
<tr><td>자선 엔트리 마감</td><td>2026년 9월 15일(화)</td></tr>
</tbody>
</table>

<p>참가비는 모두 USD이며 환불이 안 됩니다. 자선으로 들어가면 이 참가비에 더해 모금액까지 부담해야 한다는 점, 다시 한번 짚어둡니다.</p>

<h2>한국 러너 실전 체크리스트 — 항공·시차·결제</h2>
<p>해외 메이저는 '배번 확보'가 절반, '현지 도착과 컨디션 관리'가 나머지 절반입니다. 인천에서 출발하는 한국 러너 기준으로 꼭 챙길 것들을 정리했어요.</p>

<table>
<thead><tr><th>항목</th><th>내용</th></tr></thead>
<tbody>
<tr><td>항공</td><td>인천(ICN)→시카고 오헤어(ORD) <strong>직항</strong> 운항(대한항공·에어프레미아·유나이티드·델타·티웨이 등)</td></tr>
<tr><td>비행시간</td><td>직항 약 <strong>13시간 30분</strong></td></tr>
<tr><td>시차</td><td>한국이 시카고보다 <strong>약 14시간 빠름</strong>(중부시간)</td></tr>
<tr><td>입국 요건</td><td><strong>ESTA(전자여행허가) 필수</strong> — 전자여권 + 출발 전 승인 시 무비자 최대 90일 관광 체류</td></tr>
<tr><td>환율 근사</td><td>2026년 6월 기준 <strong>$1 ≈ 1,500~1,530원</strong>(변동)</td></tr>
</tbody>
</table>

<div class="callout warning"><span class="callout-icon">⚠️</span><div class="callout-body"><p class="callout-title">신청할 때 가장 많이 하는 실수 두 가지</p><p><strong>① 영문 이름 불일치</strong> — 신청서의 영문 이름은 <strong>여권 영문 표기와 정확히 일치</strong>해야 합니다. 한 글자라도 다르면 현지 배번 수령이나 입국에서 문제가 생길 수 있어요. <strong>② 카드 문제</strong> — 참가비와 모금은 USD 결제이니 <strong>해외결제 가능 카드(VISA/Master 등)</strong>를 준비하고, 카드 유효기간이 대회 시점(2026년 10월) 이후인지 미리 확인하세요.</p></div></div>

<p>시차가 14시간이라 도착 후 첫 이틀은 몸이 한밤중에 깨곤 합니다. 가능하면 대회 3~4일 전 도착해 햇빛을 충분히 쬐며 리듬을 맞추는 걸 추천해요. 시카고는 10월이면 아침 기온이 쌀쌀하니 출발 대기용 겉옷(버려도 되는 옷)도 챙기면 좋습니다.</p>

<h2>평지 PB 코스에 맞는 카본화는?</h2>
<p>시카고는 고저차가 거의 없는 만큼, <strong>일정한 페이스를 길게 유지할 때 에너지 리턴이 좋은 카본화</strong>가 잘 맞습니다. 기록을 노리고 평지를 밀어붙이는 코스라면 <a href="/shoes/adidas-adios-pro-4">아디다스 아디오스 프로 4</a>처럼 반발력과 추진력이 강한 레이싱화가 제격이에요. 다만 슈퍼슈즈는 충분한 적응 주행 없이 풀코스에 바로 투입하면 종아리·발바닥에 부담이 옵니다. 대회 전 몇 차례 템포런으로 발에 길들인 뒤 출전하세요.</p>
<p>풀코스 자체가 처음이라면 배번부터 덜컥 잡기 전에 <a href="/blog/race-distance-difficulty-guide-2026">거리별 난이도 가이드</a>로 내 수준을 먼저 점검하는 걸 권합니다. 국내외 대회 일정은 <a href="/marathon">마라톤 일정 페이지</a>에서 함께 확인할 수 있어요.</p>

<div class="major-next"><p class="mn-title">다음 목적지를 정해보세요</p><div class="mn-grid">
<a class="mn-card" href="/blog/tokyo-marathon-2027-registration-guide"><span class="mn-emoji">🗼</span><div class="mn-label">도쿄마라톤 2027</div><div class="mn-desc">아시아 유일 메이저, 가까운 직항·시차 1시간</div></a>
<a class="mn-card" href="/blog/sydney-marathon-2026-registration-guide"><span class="mn-emoji">🌉</span><div class="mn-label">시드니마라톤 2026</div><div class="mn-desc">막내 메이저, 남반구 봄에 달리는 항만 코스</div></a>
<a class="mn-card" href="/shoes/adidas-adios-pro-4"><span class="mn-emoji">👟</span><div class="mn-label">아디다스 아디오스 프로 4</div><div class="mn-desc">평지 PB 사냥용 카본 레이싱화</div></a>
</div></div>

<p>🗺️ 6대 메이저 전체 비교와 "어디부터 갈까"가 궁금하다면 <a href="/blog/world-marathon-majors-guide-2026">세계 6대 마라톤 완전정복</a>에서 한눈에 보세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 위 일정·금액은 시카고마라톤 공식 발표(2026년 6월 기준)를 근거로 정리했으며, 참가비·모금액은 모두 USD이고 환율(약 1,500~1,530원/$)은 결제 시점에 따라 달라집니다. 자선 최소 모금액·투어 파트너·정확한 정원 등 세부 사항은 변경될 수 있으니 신청 직전 공식 사이트(chicagomarathon.com)에서 반드시 재확인하세요. 한국 공인 투어 오퍼레이터의 구체 업체명은 공식 미발표 상태입니다.</p>
`,
  },
  {
    id: 'tokyo-marathon-2027-registration-guide',
    slug: 'tokyo-marathon-2027-registration-guide',
    title: '도쿄마라톤 2027 신청 완전 가이드 — 지금 열린 자선·추첨·OTG 3가지 길 | 비행 2시간·시차 0, 한국 러너 첫 메이저 1순위',
    description: '세계 6대 마라톤 중 지금 신청할 수 있는 건 도쿄뿐입니다. 자선(6/24~7/9, 기부 ¥10만)·무료 일반추첨(8/14~8/28)·One Tokyo Global 선행추첨 — 세 가지 길의 비용과 손익, 한국 러너가 자주 틀리는 신청 실수(¥10만은 참가비가 아니다, 단체별 해외 수락 차이)까지 공식 정보로 정리했습니다. 인천에서 2시간·시차 0인 도쿄는 첫 메이저로 가장 합리적입니다.',
    thumbnail: '/images/blog/tokyo-marathon-2027-registration-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-13',
    category: 'news' as const,
    readingTime: 9,
    tags: ['도쿄마라톤', '도쿄마라톤 2027', '세계 6대 마라톤', '메이저 마라톤', '마라톤 해외원정', '자선 마라톤', 'One Tokyo', '도쿄마라톤 신청', '식스스타', '러닝 버킷리스트'],
    content: `
<div class="deadline-strip">
  <span class="dl-badge">📢 접수 임박</span>
  <span class="dl-text">도쿄마라톤 2027 — 자선 ${md(MAJOR_DEADLINES.tokyo2027.charity.open)} 오픈 ~ ${md(MAJOR_DEADLINES.tokyo2027.charity.close)} 마감 · 무료 일반추첨 ${md(MAJOR_DEADLINES.tokyo2027.ballot.open)}~${md(MAJOR_DEADLINES.tokyo2027.ballot.close)}</span>
</div>

<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>세계 6대 메이저 중 지금 신청 가능한 건 도쿄뿐</strong>입니다(런던·베를린·시카고·뉴욕·시드니는 이번 사이클 마감). 도쿄 2027(${MAJOR_DEADLINES.tokyo2027.raceDate.replace(/-/g, '.')})은 신청 창이 열려 있습니다.</li>
    <li><strong>길은 3가지</strong> — ① 자선(${md(MAJOR_DEADLINES.tokyo2027.charity.open)}~${md(MAJOR_DEADLINES.tokyo2027.charity.close)}, 최소 기부 ¥10만≈${MAJOR_DEADLINES.tokyo2027.charity.minDonationKrwApprox}) ② <strong>무료 일반추첨</strong>(${md(MAJOR_DEADLINES.tokyo2027.ballot.open)}~${md(MAJOR_DEADLINES.tokyo2027.ballot.close)}) ③ One Tokyo Global 선행추첨(${md(MAJOR_DEADLINES.tokyo2027.oneTokyoGlobal.open)}~${md(MAJOR_DEADLINES.tokyo2027.oneTokyoGlobal.close)}).</li>
    <li><strong>한국 러너에게 가장 현실적인 첫 메이저</strong> — 인천→하네다 약 2시간, <strong>시차 0</strong>, 도심 평지 고속 코스. 단 "¥10만이 참가비"라는 오해와 자선 단체별 해외 수락 차이를 꼭 짚어야 합니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🗼</span>
  <div class="callout-body">
    <p class="callout-title">왜 첫 메이저로 도쿄를 추천할까</p>
    <p>세계 6대(2025년 시드니 합류로 7대) 마라톤은 대부분 비행 10시간 이상·시차 적응이 필요합니다. 도쿄는 다릅니다 — <strong>인천에서 약 2시간, 한일 시차 0(KST=JST)</strong>이라 시차 적응이 필요 없고, 코스도 도쿄도청에서 긴자·도쿄역으로 이어지는 <strong>평지 고속 코스</strong>라 기록도 잘 나옵니다. "메이저 데뷔전"으로 부담이 가장 적은 대회죠. 2027년은 <strong>20주년</strong> 대회이기도 합니다.</p>
  </div>
</div>

<h2>지금 열린 3가지 길 — 한눈에 비교</h2>

<table>
  <thead>
    <tr><th>경로</th><th>신청 기간</th><th>비용</th><th>특징</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>자선(RUN with HEART)</strong></td><td>${md(MAJOR_DEADLINES.tokyo2027.charity.open)}~${md(MAJOR_DEADLINES.tokyo2027.charity.close)}</td><td>기부 ¥10만~ <strong>+ 참가비 별도</strong></td><td>당첨 걱정 없이 출전권 확보(단체별 조건)</td></tr>
    <tr><td><strong>일반 추첨(무료 응모)</strong></td><td>${md(MAJOR_DEADLINES.tokyo2027.ballot.open)}~${md(MAJOR_DEADLINES.tokyo2027.ballot.close)}</td><td>당첨 시 참가비만</td><td>경쟁률 높음. 가장 저렴하지만 운</td></tr>
    <tr><td><strong>One Tokyo Global</strong></td><td>${md(MAJOR_DEADLINES.tokyo2027.oneTokyoGlobal.open)}~${md(MAJOR_DEADLINES.tokyo2027.oneTokyoGlobal.close)}</td><td>연회비 ¥3만 + 당첨 시 참가비</td><td>선행 추첨 + 연속 미당첨 시 특별 추첨 자격</td></tr>
  </tbody>
</table>

<p>세 경로는 <strong>동시 신청이 안 됩니다</strong>. "확실히 가고 싶다(돈 더 써도 됨)"면 자선, "비용 최소(운에 맡김)"면 일반 추첨, "매년 도전할 거다"면 One Tokyo Global이 맞습니다.</p>

<h2>자선 루트의 진실 — "¥10만이 참가비"가 아닙니다</h2>

<div class="callout warning">
  <span class="callout-icon">💸</span>
  <div class="callout-body">
    <p class="callout-title">한국 러너가 가장 많이 하는 오해 2가지</p>
    <ul>
      <li><strong>기부금 ¥10만은 참가비가 아니라 별도</strong> — 자선 출전권은 <strong>최소 기부 ¥10만(${MAJOR_DEADLINES.tokyo2027.charity.minDonationKrwApprox}) + 참가비(해외 러너 별도 납부)</strong>를 모두 냅니다. 실부담은 <strong>총 130만 원 이상</strong>으로 잡아야 현실적입니다.</li>
      <li><strong>${MAJOR_DEADLINES.tokyo2027.charity.charities}개 자선단체 중 일부는 일본 거주자만</strong> 받습니다. 한국에서 신청한다면 <strong>각 단체의 해외 거주자 수락 여부를 먼저 확인</strong>해야 합니다(전체가 해외 OK가 아님).</li>
    </ul>
  </div>
</div>

<p>그래도 자선의 장점은 분명합니다 — <strong>추첨 운에 기대지 않고 출전권을 확보</strong>할 수 있다는 것. 신청은 ${md(MAJOR_DEADLINES.tokyo2027.charity.open)} 오픈해서 ${md(MAJOR_DEADLINES.tokyo2027.charity.close)}에 마감되고, 기부금 납부는 ${md(MAJOR_DEADLINES.tokyo2027.charity.donatePayBy)}까지입니다. 비용을 감수하고 "2027년에 반드시" 가고 싶은 러너에게 맞습니다.</p>

<h2>무료로 가는 길 — 일반 추첨</h2>

<p>가장 저렴한 건 <strong>무료 일반 추첨</strong>입니다. ${md(MAJOR_DEADLINES.tokyo2027.ballot.open)}~${md(MAJOR_DEADLINES.tokyo2027.ballot.close)}에 응모하고, 당첨되면 그때 참가비만 냅니다(결과는 ${MAJOR_DEADLINES.tokyo2027.ballot.resultMonth} 발표). 참가비는 2026 대회 기준 <strong>해외 러너 약 $230(국내 ¥19,800)</strong>이었는데, <strong>2027 금액은 아직 공식 미발표</strong>라 변동될 수 있습니다.</p>

<p>단점은 <strong>경쟁률</strong>입니다. 메이저인 만큼 추첨 당첨이 쉽지 않아요. "올해 안 되면 내년에 또" 식으로 여러 해 도전할 생각이라면, 선행 추첨과 연속 미당첨 보장 제도가 있는 <strong>One Tokyo Global</strong>(연회비 ¥3만)을 함께 고려할 만합니다. 단, 이 제도도 <strong>당첨 보장이 아니라 '특별 추첨 자격'</strong>이라는 점을 오해하면 안 됩니다.</p>

<h2>한국 러너 신청 체크리스트</h2>

<ul>
  <li><strong>여권 영문명과 100% 일치</strong> — 신청 시 영문 이름을 여권과 다르게 적으면 입국·확인에서 문제가 됩니다.</li>
  <li><strong>해외 결제 카드 준비</strong> — 결제는 신용카드/지정 온라인 결제만. 완료 후 <strong>환불·이름 변경·양도 불가</strong>입니다.</li>
  <li><strong>환율은 변동分 감안</strong> — ¥10만 ≈ ${MAJOR_DEADLINES.tokyo2027.charity.minDonationKrwApprox}(2026-06 기준). 신청 시점 환율로 다시 계산하세요.</li>
  <li><strong>거리부터 확정</strong> — 첫 풀코스라면 무리하지 말고 <a href="/blog/race-distance-difficulty-guide-2026">거리별 난이도 가이드</a>로 내 수준을 먼저 점검하세요.</li>
  <li><strong>신발</strong> — 평지 고속 코스라 PB를 노린다면 카본 슈퍼슈즈가 유리합니다(아래 추천).</li>
</ul>

<div class="major-next">
  <p class="mn-title">🏁 도쿄 다음 한 걸음 — 당신의 방향은?</p>
  <div class="mn-grid">
    <a class="mn-card" href="/shoes/asics-metaspeed-sky-plus">
      <span class="mn-emoji">👟</span>
      <div class="mn-label">도쿄 평지엔 이 카본화</div>
      <div class="mn-desc">고속 평지 코스용 아식스 메타스피드 스카이+</div>
    </a>
    <a class="mn-card" href="/blog/sydney-marathon-2026-registration-guide">
      <span class="mn-emoji">🌉</span>
      <div class="mn-label">시드니마라톤 2026</div>
      <div class="mn-desc">7번째 메이저, 식스스타·하버브리지 경관 코스</div>
    </a>
    <a class="mn-card" href="/blog/chicago-marathon-2026-registration-guide">
      <span class="mn-emoji">🌆</span>
      <div class="mn-label">시카고마라톤 2026</div>
      <div class="mn-desc">세계 최속 평지 — PB 노린다면 여기</div>
    </a>
  </div>
</div>

<p style="font-size:0.9em;color:#475569;margin-top:1.5em;">※ 보스턴(BQ 기록)·런던·뉴욕·베를린 등 나머지 메이저 도전 가이드도 순차 공개할 예정입니다. 첫 풀코스라면 <a href="/blog/race-distance-difficulty-guide-2026">거리별 난이도 가이드</a>, 국내 대회는 <a href="/marathon">마라톤 캘린더</a>에서 함께 일정을 짜보세요.</p>

<p>🗺️ 6대 메이저 전체 비교와 "어디부터 갈까"가 궁금하다면 <a href="/blog/world-marathon-majors-guide-2026">세계 6대 마라톤 완전정복</a>에서 한눈에 보세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-13 기준 도쿄마라톤·One Tokyo 공식 발표를 토대로 작성했습니다. 2027 참가비 확정액·추첨 결과 발표 정확일·자선 단체별 해외 수락 여부는 공식 미발표/단체별 상이라 변동될 수 있습니다. 신청 전 도쿄마라톤 공식(marathon.tokyo)에서 최종 확인하세요.</p>
`,
  },
  {
    id: 'garmin-run-club-grc-busan-expansion-2026',
    slug: 'garmin-run-club-grc-busan-expansion-2026',
    title: '가민런클럽(GRC), 부산·울산·대전으로 확대 | 서울 밖 러너도 가민 러닝 커뮤니티에 — 포러너 70/170과 함께',
    description: '가민의 러닝 커뮤니티 "가민런클럽(GRC)"이 2022년 이후 처음으로 서울 밖 — 부산·울산·대전으로 활동을 넓힙니다. 포러너 70/170 출시와 세트로 발표된 생태계 전략이죠. GRC가 뭔지, 부산 러너는 어떻게 참여하는지(해운대 브랜드샵·가민 스포츠 앱), 그리고 "가민런 코리아 대회"와 무엇이 다른지 정리했습니다.',
    thumbnail: '/images/blog/garmin-run-club-grc-busan-expansion-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-12',
    category: 'news' as const,
    readingTime: 7,
    tags: ['가민런클럽', 'GRC', 'Garmin Run Club', '가민', '포러너 70', '포러너 170', '부산 러닝', '해운대', '러닝 크루', '러닝 커뮤니티'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>GRC가 서울을 벗어납니다</strong> — 가민의 러닝 커뮤니티 "가민런클럽(GRC)"이 2022년 이후 줄곧 서울 중심이었는데, 2026년 <strong>부산·울산·대전</strong>으로 활동 범위를 넓힙니다.</li>
    <li><strong>포러너 70/170과 세트</strong> — 5월 20일 출시한 입문~중급 워치 포러너 70(39.9만)·170(47.9만)과 함께 발표된 생태계 전략입니다. "워치 + 함께 달릴 커뮤니티"를 묶는 거죠.</li>
    <li><strong>부산 러너 실전 팁</strong> — 오프라인 세션 일정은 아직 미발표지만, <strong>가민 스포츠 앱의 GRC 온라인 코스는 이미 무료</strong>이고, 해운대 브랜드샵(@garmin_haeundae)을 팔로우하면 부산 세션 공고를 가장 빨리 받습니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">먼저 정리 — GRC는 "대회"가 아니라 "러닝 커뮤니티"입니다</p>
    <p>"가민런"이라는 이름 때문에 헷갈리기 쉽지만, <strong>가민런클럽(GRC)</strong>은 가민이 운영하는 <strong>러너 훈련 커뮤니티</strong>입니다. 매년 11월 고양에서 열리는 <strong>가민런 코리아(대회)</strong>와는 완전히 별개예요. GRC는 "함께 훈련하고 성장하는 모임", 가민런 코리아는 "하루짜리 레이스"입니다. 이 글은 <strong>커뮤니티(GRC)의 지역 확대</strong> 소식입니다.</p>
  </div>
</div>

<h2>GRC란 — 가민의 러닝 사이언스 기반 커뮤니티</h2>

<p><strong>가민런클럽(Garmin Run Club, GRC)</strong>은 가민코리아가 2022년부터 운영해 온 러너 전용 커뮤니티로, 아시아 8개국에서 돌아갑니다. 구조는 <strong>온라인 + 오프라인 투 트랙</strong>입니다.</p>

<ul>
  <li><strong>온라인</strong> — 가민 스포츠 앱에서 <strong>무료</strong>로 참여하는 학기제(봄/가을) 훈련 프로그램. 누구나 지금도 가능합니다.</li>
  <li><strong>오프라인</strong> — 8~10주 단위 <strong>기수제 선발 프로그램</strong>. 풀코스 완주·10K PB·페이서 육성 같은 목표별로 운영되고, 단체로 서울신문 하프·JTBC 서울마라톤 등에 참가해 왔습니다. 선발 인원에게는 가민 워치·참가권 같은 혜택이 주어졌죠.</li>
</ul>

<h2>2026, 처음으로 서울 밖으로 — 부산·울산·대전</h2>

<p>그동안 오프라인 GRC는 사실상 <strong>서울 러너의 전유물</strong>이었습니다. 그런데 2026년 5월 가민이 <strong>"GRC를 부산·울산·대전 등 주요 지역으로 확대한다"</strong>고 공식 발표했습니다. 입문자 러닝 세션과 대학 러닝리그 협업 프로그램을 새 거점에 도입한다는 계획이죠. 지방 러너에게는 <strong>"드디어 내 지역에서도"</strong>라는 반가운 소식입니다.</p>

<h2>왜 지금 — 포러너 70/170과 함께</h2>

<p>이 확대는 <strong>포러너 70/170 출시(5/20)</strong>와 세트로 발표됐습니다. 우연이 아니라 전략이에요. 입문~중급용 워치로 새 러너를 끌어들이고(<a href="/blog/2026-garmin-forerunner-70-170-korea">포러너 70·170 한국 출시</a> 참고), 동시에 <strong>그들이 함께 달릴 커뮤니티(GRC)</strong>를 지역까지 깔아주는 — "기기 + 커뮤니티"를 묶는 생태계 전략입니다. Training Readiness·Running Power 같은 기능으로 측정하고, GRC에서 함께 훈련하는 그림이죠.</p>

<h2>부산 러너는 어떻게 참여할까</h2>

<div class="callout warning">
  <span class="callout-icon">📍</span>
  <div class="callout-body">
    <p class="callout-title">오프라인 세션 일정은 아직 미발표 — 지금 할 수 있는 것</p>
    <ul>
      <li><strong>가민 스포츠 앱 GRC 온라인 코스</strong> — 지역 확대와 무관하게 <strong>이미 무료로 참여</strong> 가능. 부산이든 어디든 지금 시작할 수 있습니다.</li>
      <li><strong>해운대 브랜드샵 팔로우</strong> — 부산 거점이 될 가민 브랜드샵 해운대점(@garmin_haeundae)을 팔로우하면 부산 GRC 세션·런 행사 공고를 가장 빨리 받습니다.</li>
      <li><strong>가민코리아 공식(@garminkorea)</strong> — 오프라인 기수 모집은 보통 여기 공고됩니다. 부산·울산·대전 모집 일정은 추후 발표 예정.</li>
    </ul>
  </div>
</div>

<h2>헷갈리지 말자 — GRC vs 가민런 코리아</h2>

<table>
  <thead>
    <tr><th>구분</th><th>가민런클럽(GRC)</th><th>가민런 코리아</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>성격</strong></td><td>러닝 훈련 커뮤니티</td><td>일일 러닝 대회</td></tr>
    <tr><td><strong>기간</strong></td><td>8~10주 프로그램(기수제)</td><td>하루 레이스</td></tr>
    <tr><td><strong>2026</strong></td><td>부산·울산·대전 확대</td><td>11/15 고양종합운동장</td></tr>
    <tr><td><strong>참가비</strong></td><td>온라인 무료 / 오프라인 선발(혜택)</td><td>하프 8만·10K 6만(추첨)</td></tr>
  </tbody>
</table>

<p>대회로 한판 뛰고 싶다면 <a href="/blog/2026-garmin-run-korea-half-marathon">2026 가민런 코리아(하프 신설)</a>를, 꾸준히 함께 훈련하고 싶다면 GRC를 보면 됩니다. 둘 다 가민 생태계지만 쓰임이 달라요. 가을 시즌 다른 대회까지 함께 계획한다면 <a href="/blog/2026-second-half-marathon-schedule-korea">2026 하반기 마라톤 완전정복</a>도 참고하세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-12 기준이며, GRC 부산·울산·대전 오프라인 세션의 구체적 일정·장소·모집은 미발표 상태입니다(확대 계획만 발표). 최신 정보는 가민코리아 공식 채널에서 확인하세요. (출처: 가민 한국 공식 보도자료, STN스포츠 등)</p>
`,
  },
  {
    id: 'gangnam-international-peace-marathon-2026',
    slug: 'gangnam-international-peace-marathon-2026',
    title: '참가비 전액이 전쟁고아에게 — 강남국제평화마라톤(국평마) | 강남구·주한미8군 공동주최, 10/5 강남 도심 기부런',
    description: '"국평마"로 불리는 강남국제평화마라톤은 참가비 전액을 전쟁고아 지원에 기부하는 이색 대회입니다. 강남구와 주한미8군이 공동 주최하고 유니세프가 후원하죠. 풀 3만·하프 2만원대로 참가비가 저렴하고, 봉은사로 강남 도심을 달립니다. 2026 제23회는 10/5(일) 예정 — 종목·참가비·접수 일정과 이 대회가 특별한 이유를 정리했습니다.',
    thumbnail: '/images/blog/gangnam-international-peace-marathon-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-12',
    category: 'news' as const,
    readingTime: 7,
    tags: ['강남국제평화마라톤', '국평마', '강남 마라톤', '기부 마라톤', '주한미8군', '강남페스티벌', '서울 마라톤', '가을 마라톤', '하반기 대회', '봉은사로'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>참가비 전액이 기부됩니다</strong> — 강남국제평화마라톤("국평마")은 참가비 전액을 전쟁고아 지원에 쓰는 기부형 대회. 강남구와 <strong>주한미8군이 공동 주최</strong>하고 유니세프 한국위원회가 후원합니다.</li>
    <li><strong>참가비가 저렴합니다</strong> — 풀 3만 · 하프/10K 2만 · 5K 1만원대(전년 기준). 봉은사로에서 출발해 강남 도심을 달리는 평지 코스로, 강남페스티벌과 함께 열립니다.</li>
    <li><strong>2026 제23회는 10/5(일) 예정</strong> — 서울시 축제포털 기준. 종목·참가비·접수일은 아직 공식 미발표(8월경 발표 예상)라 제22회 기준 추정입니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🕊️</span>
  <div class="callout-body">
    <p class="callout-title">"국평마"가 다른 대회와 다른 점 — 달리기로 하는 기부</p>
    <p>대부분의 마라톤은 참가비로 운영비를 충당하지만, 강남국제평화마라톤은 <strong>참가비 전액을 전쟁으로 고통받는 아이들을 돕는 데</strong> 씁니다. 6.25 전쟁의 상흔에서 출발한 한미 우호와 평화의 의미를 담아 <strong>강남구와 주한미8군사령부(EUSA)가 함께</strong> 여는 대회죠. "내 참가비가 곧 기부"라는 점에서, 기록보다 의미를 찾는 러너에게 특별합니다.</p>
  </div>
</div>

<h2>강남 도심을 달린다 — 봉은사로 코스</h2>

<p>출발지는 <strong>봉은사로 삼성1동주민센터 앞</strong>(봉은사역 인근)입니다. 코엑스와 봉은사로 일대 <strong>강남 도심을 통제하고 달리는 평지 코스</strong>라, 접근성이 좋고 기록도 잘 나오는 편입니다. 매년 가을 <strong>강남페스티벌</strong>과 함께 열려 축제 분위기 속에서 뛸 수 있죠. 풀코스부터 5km까지 종목이 다양해 가족 단위 참가도 많습니다.</p>

<h2>종목과 참가비 — "이 가격에 기부까지"</h2>

<p>가장 눈에 띄는 건 <strong>저렴한 참가비</strong>입니다. 운영보다 기부에 방점을 둔 대회라 다른 도심 마라톤(보통 6~8만원대)보다 훨씬 낮습니다.</p>

<table>
  <thead>
    <tr><th>종목</th><th>거리</th><th>참가비(전년 기준)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>풀코스</strong></td><td>42.195km</td><td>30,000원</td></tr>
    <tr><td><strong>하프</strong></td><td>21.1km</td><td>20,000원</td></tr>
    <tr><td><strong>10K</strong></td><td>10km</td><td>20,000원</td></tr>
    <tr><td><strong>5K</strong></td><td>5km</td><td>10,000원</td></tr>
  </tbody>
</table>

<p>※ 위 참가비는 <strong>제22회(2025) 기준</strong>이며, 2026 제23회 공식 금액은 발표 후 확정됩니다. 첫 풀코스나 하프 도전을 고민 중이라면 <a href="/blog/race-distance-difficulty-guide-2026">거리별 난이도 가이드</a>로 내 수준에 맞는 거리를 먼저 정하면 좋습니다.</p>

<h2>2026 제23회 일정 — 10/5(일) 예정</h2>

<p>서울시 축제포털에 <strong>2026 강남페스티벌(10/2~10/5)</strong> 프로그램으로 마라톤이 <strong>10월 5일(일)</strong>에 등재돼 있습니다. 다만 <strong>공식 홈페이지(peacemarathon.co.kr)는 아직 제22회 정보만</strong> 게시 중이라, 종목·참가비·접수 세부는 미발표 상태입니다.</p>

<div class="callout warning">
  <span class="callout-icon">📅</span>
  <div class="callout-body">
    <p class="callout-title">접수는 8월경 예상 — 추첨제</p>
    <p>전년(제22회)에는 <strong>8월 초 온라인 추첨</strong>으로 접수했고 정원은 약 1만 명이었습니다. 2026 제23회도 비슷한 패턴이면 <strong>8월경 peacemarathon.co.kr에서 접수</strong>가 열릴 것으로 보입니다. 참가 의향이 있다면 7~8월에 공식 홈페이지와 강남구 채널을 확인하세요. 대회 당일 기록 측정이 궁금하면 <a href="/blog/race-timing-chip-net-gross-time-guide-2026">기록칩·넷타임 정리</a>를 참고하면 됩니다.</p>
  </div>
</div>

<h2>가을 강남에서, 의미 있게 한 걸음</h2>

<p>강남국제평화마라톤은 "빠른 기록"보다 <strong>"달리는 행위 자체가 누군가를 돕는다"</strong>는 데 의미가 있는 대회입니다. 저렴한 참가비, 접근성 좋은 강남 도심 코스, 가족 친화 종목까지 갖춰 입문 러너나 가족 참가에도 잘 맞습니다. 10월 가을 시즌, 다른 하반기 대회와 함께 일정을 짜고 싶다면 <a href="/blog/2026-second-half-marathon-schedule-korea">2026 하반기 마라톤 완전정복</a>과 <a href="/marathon">월별 마라톤 캘린더</a>를 참고하세요. 🕊️</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 2026-06-12 기준이며, 2026 제23회의 대회일(10/5)은 서울시 축제포털 등재 기준, 종목·참가비·접수일은 제22회(2025) 기준 추정입니다. 공식 발표 시 강남국제평화마라톤 홈페이지(peacemarathon.co.kr)에서 최종 확인하세요.</p>
`,
  },
  {
    id: 'seoul-marathon-100-years-history-1931-2030',
    slug: 'seoul-marathon-100-years-history-1931-2030',
    title: '서울마라톤 100년의 길 — 1931년 영등포에서 2030 제100회까지 | 손기정·일장기 말소사건·동아마라톤이 만든 한국 마라톤의 뿌리',
    description: '서울마라톤(동아마라톤)은 1931년에 시작된, 아시아에서 가장 오래된 마라톤입니다. 손기정의 1932년 출전, 일장기 말소사건으로 멈춘 대회, 14년 공백과 부활, 동아 → 서울국제 → 서울마라톤으로 이어진 이름의 변천, 그리고 2019년 World Athletics 헤리티지·플래티넘 라벨 동시 획득까지 — 2030년 제100회를 앞둔 지금, 이 대회가 왜 단순한 레이스가 아닌지 100년의 이야기로 정리했습니다.',
    thumbnail: '/images/blog/seoul-marathon-100-years-history-1931-2030.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-11',
    category: 'news' as const,
    readingTime: 11,
    tags: ['서울마라톤', '동아마라톤', '서울마라톤 역사', '손기정', '일장기 말소사건', '제100회 서울마라톤', '한국 마라톤', '동마클럽', '마라톤 헤리티지', '러닝 문화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>서울마라톤 = 동아마라톤</strong>. 1931년 동아일보 후원으로 출발해 <strong>아시아에서 가장 오래된 마라톤</strong>(보스턴 다음으로 손꼽히는 역사)입니다. 첫 코스는 풀코스가 아닌 서울~영등포 23.2km 왕복이었죠.</li>
    <li>이 대회는 <strong>손기정과 일장기 말소사건</strong>으로 한국 근현대사와 직접 얽혀 있습니다. 1936년 동아일보가 손기정 사진의 일장기를 지웠다가 무기정간을 당했고, 그 여파로 1937년 대회가 멈췄습니다.</li>
    <li>2019년 <strong>World Athletics 헤리티지 플라크(아시아 최초)와 플래티넘 라벨(세계 7번째)을 같은 해에</strong> 거머쥐었고, 공식 계정은 <strong>2030년을 제100회</strong>로 안내하고 있습니다. 광화문에서 잠실까지, 100년의 길입니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🧭</span>
  <div class="callout-body">
    <p class="callout-title">2030 제100회를 앞두고, 서울마라톤의 100년을 되짚습니다</p>
    <p>서울마라톤 공식 계정이 최근 "2030 제100회 서울마라톤 동마칩 안내"를 올리며 100회 카운트다운을 시작했습니다. 매년 3월, 광화문에서 잠실까지 3만 명이 달리는 이 대회가 어떻게 1931년 영등포의 흙길에서 시작됐는지, 왜 한국인에게 단순한 레이스 이상의 의미인지 — 확정된 역사적 사실 위주로 정리했습니다. (글감: @dongmaclub "응답하라 서울마라톤", @seoul_marathon 2030 제100회 안내, 2026-06)</p>
  </div>
</div>

<h2>1931년 — 영등포로 달려간 첫 출발</h2>

<p>서울마라톤의 첫 회는 <strong>1931년 3월 21일</strong>에 열렸습니다. 지금처럼 42.195km 풀코스가 아니라, <strong>광화문 동아일보 사옥 앞을 출발해 남대문·한강인도교를 지나 영등포역까지 왕복하는 약 23.2km</strong> 코스였죠. 고려육상경기회가 주최하고 동아일보가 후원했는데, 일제강점기라는 시대 배경 속에서 <strong>"달리기로 민족의 기개를 세우자"</strong >는 뜻이 담긴 대회였습니다.</p>

<p>역사로 보면 이 대회는 만만치 않습니다. <strong>1897년 시작된 보스턴마라톤 다음으로 손에 꼽히는 오래된 마라톤</strong>이고, <strong>아시아에서는 가장 오래된 마라톤</strong>으로 통합니다. 우리가 매년 봄 무심코 보는 "서울마라톤"이 사실은 95년 넘게 이어져 온 살아있는 유산이라는 뜻입니다.</p>

<h2>손기정, 그리고 대회를 멈춘 일장기 말소사건</h2>

<p>서울마라톤의 역사에서 빼놓을 수 없는 이름이 <strong>손기정</strong>입니다. 그는 <strong>1932년 제2회 대회에 20세 신예로 출전</strong>했는데, 서울 지리에 어두워 삼각지 로터리에서 길을 잃는 바람에 2위에 그쳤다는 일화가 유명합니다. 하지만 이 출전이 계기가 되어 마라톤 명문 양정고보에 진학했고, 결국 <strong>1936년 베를린올림픽 마라톤 금메달</strong>(2시간 29분 19초, 올림픽 신기록)이라는 세계의 정상에 올랐습니다. "길을 잃어 올림픽 챔피언이 된 사나이"인 셈이죠.</p>

<div class="callout warning">
  <span class="callout-icon">📰</span>
  <div class="callout-body">
    <p class="callout-title">대회를 멈춘 사건 — 1936년 일장기 말소</p>
    <p>일제 치하의 손기정은 일장기를 달고 'Son Kitei'라는 일본명으로 뛰어야 했습니다. 1936년 8월, <strong>동아일보가 손기정 우승 보도 사진에서 가슴의 일장기를 지워 게재</strong>했고, 조선총독부는 신문 발매를 중단시키고 관련자를 연행한 뒤 동아일보에 <strong>무기정간</strong> 처분을 내렸습니다. 그 여파로 <strong>1937년 동아마라톤 대회가 중단</strong>됐죠. 스포츠 대회가 항일 언론 탄압의 결과로 멈춘, 세계적으로도 드문 사례입니다.</p>
  </div>
</div>

<h2>14년의 공백, 그리고 보스턴 챔피언들이 일군 부활</h2>

<p>일장기 말소사건과 전시 체제 속에서 대회는 <strong>1940년 제11회를 끝으로 사실상 중단</strong>됐습니다. 이후 <strong>14년의 긴 공백</strong>이 이어졌죠. 그 사이 한국 마라톤의 불씨는 해외에서 타올랐습니다. <strong>1947년 서윤복</strong>이 보스턴마라톤에서 2시간 25분 39초의 당시 세계최고기록으로 우승했고, <strong>1950년 함기용</strong>이 다시 보스턴을 제패하며 2연패를 달성했습니다.</p>

<p>이 두 보스턴 챔피언을 기념하는 의미를 안고, 동아마라톤은 <strong>1954년에 부활</strong>합니다. 끊겼던 길이 다시 이어진 거죠. 이후 <strong>1964년 제35회부터 국제 기준 풀코스 42.195km를 도입</strong>하고 '동아마라톤대회'라는 이름을 공식화하면서, 오늘날 우리가 아는 풀코스 대회의 틀을 갖췄습니다.</p>

<h2>이름의 변천 — 동아에서 서울마라톤까지</h2>

<table>
  <thead>
    <tr><th>시기</th><th>명칭 / 사건</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>1931~1939</strong></td><td>서울~영등포 마라톤대회 (고려육상경기회 주최, 동아일보 후원, 23.2km)</td></tr>
    <tr><td><strong>1937</strong></td><td>일장기 말소사건 여파로 대회 중단</td></tr>
    <tr><td><strong>1940</strong></td><td>제11회를 끝으로 중단 → 14년 공백</td></tr>
    <tr><td><strong>1954</strong></td><td>대회 부활 (서윤복·함기용 보스턴 우승 기념)</td></tr>
    <tr><td><strong>1964</strong></td><td>제35회부터 '동아마라톤' 공식 개칭 + 풀코스 42.195km 도입</td></tr>
    <tr><td><strong>1980~90년대</strong></td><td>'서울국제마라톤' 병기. 1992 춘천·1993~99 경주로 개최지 이동</td></tr>
    <tr><td><strong>2000</strong></td><td>서울 복귀 — 광화문 출발 ~ 잠실올림픽주경기장 현재 코스 확정</td></tr>
    <tr><td><strong>현재</strong></td><td>'서울마라톤'(영문 Seoul Marathon) + 동아마라톤 회차 병행 표기</td></tr>
  </tbody>
</table>

<p>흥미로운 건 1990년대의 <strong>'유랑 시대'</strong>입니다. 1992년엔 춘천, 1993~1999년엔 경주로 개최지가 옮겨 다녔죠. 그러다 <strong>2000년 서울로 복귀하면서 지금의 광화문~잠실 코스가 확정</strong>됐습니다. 광화문광장에서 출발해 도심과 한강변을 지나 잠실 주경기장 트랙으로 골인하는, 비교적 평탄해 기록이 잘 나오는 코스입니다.</p>

<h2>2007년 이봉주, 그리고 World Athletics 더블 크라운</h2>

<p>국내 개최 레이스에서 한국인의 가장 빛나는 순간 중 하나는 <strong>2007년, 37세의 이봉주가 2시간 8분 4초로 우승</strong>한 장면입니다. 이는 국내에서 열린 대회 기준 한국인 최고기록으로 남아 있습니다. 1964년 이후 수립된 한국 남자 마라톤 역대 기록의 상당수가 이 동아·서울국제마라톤 무대에서 나왔다는 점도, 이 대회의 위상을 보여줍니다.</p>

<div class="callout info">
  <span class="callout-icon">🏅</span>
  <div class="callout-body">
    <p class="callout-title">2019년 — 한 해에 두 개의 왕관</p>
    <p>2019년 서울마라톤은 세계 무대에서 두 번 인정받았습니다. 5월 <strong>World Athletics 헤리티지 플라크</strong>(보스턴·아테네에 이은 세계 3번째, <strong>아시아 최초</strong>)에 지정됐고, 11월엔 도로 레이스 최고 등급인 <strong>플래티넘 라벨</strong>(당시 전 세계 7번째)을 획득했습니다. "역사"와 "현재의 수준"을 동시에 공인받은 셈이죠.</p>
  </div>
</div>

<p>2026년 제96회 대회에서는 에티오피아의 Haftu Teklu가 <strong>2시간 4분 23초의 코스 신기록</strong>으로 우승했고, 4위까지 모두 직전 코스기록을 넘어서는 역대급 레이스가 펼쳐졌습니다. 95년 전 영등포 흙길의 23.2km가, 이제 세계 정상급 선수들이 2시간 4분대로 질주하는 무대가 된 것입니다.</p>

<h2>2030, 제100회를 향하여</h2>

<p>서울마라톤 공식 계정은 <strong>2030년을 '제100회'</strong>로 안내하며 <a href="/blog/2030-seoul-marathon-100th-dongma-chip">동마칩(기록 측정 칩)과 ROAD TO 100TH 프로젝트</a>를 알리기 시작했습니다. 1931년 제1회부터 회차로 세면 2030년이 제100회에 해당합니다. 중단과 공백, 개최지 이동을 모두 견디고 한 세기를 채우는 마라톤은 세계적으로도 흔치 않습니다.</p>

<p>그래서 서울마라톤은 그냥 "봄에 열리는 큰 대회"가 아닙니다. <strong>손기정의 길이고, 서윤복·함기용·이봉주로 이어진 한국 마라톤의 뿌리이며, 일제강점기 언론 탄압의 증인</strong >이기도 합니다. 2030년 제100회의 출발선에 서는 러너라면, 자신이 100년의 길 위에 서 있다는 사실을 기억해도 좋겠습니다.</p>

<p>지금 당장 가을 시즌부터 대회를 준비한다면 <a href="/marathon">월별 마라톤 일정 페이지</a>에서 하반기 대회를 확인하고, 첫 풀코스라면 <a href="/blog/race-distance-difficulty-guide-2026">거리별 난이도 가이드</a>와 <a href="/blog/race-timing-chip-net-gross-time-guide-2026">기록칩·넷타임 정리</a>를 함께 보면 도움이 됩니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 한국민족문화대백과사전·위키백과·서울시 공식 자료 등을 교차검증해 작성했습니다. 일부 초기 명칭·방송사 교체 연도는 출처에 따라 차이가 있을 수 있습니다. '2030년 제100회'는 1931년 창설을 제1회로 보는 회차 기준이며, 공식 계정 안내에 근거합니다.</p>
`,
  },
  {
    id: '2026-second-half-marathon-schedule-korea',
    slug: '2026-second-half-marathon-schedule-korea',
    title: '2026 하반기 마라톤 완전정복 — 9월 공주백제부터 12월 부산까지 | 가을 PB 시즌 대회·접수일·참가비·광클 생존 팁 총정리',
    description: '가을은 마라톤 PB 시즌입니다. 2026년 하반기(9~12월) 한국 주요 마라톤을 월별 캘린더로 정리했습니다. 공주백제·경주국제·춘천·안동·JTBC서울·MBN서울·인천·부산까지 — 대회일, 접수일, 참가비, 코스 난이도, 그리고 인기 대회 조기 매진을 뚫는 접수 광클 팁까지 한 번에. 거리별·목적별로 어떤 대회를 골라야 하는지도 정리했습니다.',
    thumbnail: '/images/blog/2026-second-half-marathon-schedule-korea.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-11',
    category: 'news' as const,
    readingTime: 12,
    tags: ['하반기 마라톤', '2026 마라톤 일정', '가을 마라톤', '춘천마라톤', '경주국제마라톤', 'JTBC 서울마라톤', 'MBN 서울마라톤', '인천마라톤', '부산국제마라톤', '마라톤 접수'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>가을이 마라톤 PB 시즌인 이유</strong>는 명확합니다 — 10~15도의 서늘한 기온, 낮은 습도, 그리고 혹서기 훈련의 효과가 가을 레이스에서 터지기 때문. 세계 6대 메이저 중 4개가 가을에 열립니다.</li>
    <li>2026 하반기 핵심 일정: <strong>9/20 공주백제 · 10/17 경주국제 · 10/25(추정) 춘천 · 11/1 JTBC서울 · 11/15 MBN서울 · 11/22 인천 · 12/6 부산</strong>. 풀코스 도전이면 10월 춘천·경주·안동이 격전지입니다.</li>
    <li>인기 대회는 <strong>접수 광클이 곧 참가</strong>. 춘천 풀코스는 5분 내 마감 전례, 동아 계열은 동마클럽 우선접수, JTBC는 추첨제 — 대회마다 접수 방식이 달라 미리 알아야 뚫립니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🍂</span>
  <div class="callout-body">
    <p class="callout-title">왜 가을에 PB가 쏟아질까 — 데이터로 보는 '가을 = 마라톤 시즌'</p>
    <p>가을이 기록 시즌인 데는 세 가지 이유가 있습니다. <strong>① 기온</strong> — 10~15도 환경에서는 체온을 식히는 데 쓰일 에너지가 근육 산소 공급에 집중돼, 32도 폭염 대비 풀코스 기록이 평균 10~15분 빨라지는 것으로 알려져 있습니다. <strong>② 습도</strong> — 가을 맑은 날의 낮은 습도는 땀 증발 효율을 높여 체온 조절을 쉽게 합니다. <strong>③ 훈련 시너지</strong> — 7~8월 혹서기에 쌓은 심폐·근지구력이 서늘한 가을에 비로소 기록으로 터집니다("여름 훈련, 가을 기록"). 베를린·시카고·뉴욕 등 세계 메이저가 가을에 몰린 것도 같은 이유죠. 여름 훈련 안전은 <a href="/blog/hot-weather-summer-running-safety-guide-korea">폭염 러닝 안전 가이드</a>를 참고하세요.</p>
  </div>
</div>

<h2>2026 하반기 마라톤 캘린더 한눈에</h2>

<table>
  <thead>
    <tr><th>날짜</th><th>대회</th><th>지역</th><th>종목</th><th>접수</th><th>상태</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>9/13</strong></td><td>강화해변마라톤</td><td>인천</td><td>하프·10K·5K·커플·가족런</td><td>6/10~ 선착순</td><td>확정·신규</td></tr>
    <tr><td><strong>9/20</strong></td><td>공주백제마라톤</td><td>충남</td><td>풀·32K·하프·10K·5K</td><td>마감(5/21)</td><td>확정</td></tr>
    <tr><td><strong>10/4</strong></td><td>안동마라톤</td><td>경북</td><td>풀·하프·10K·5K</td><td>마감(5/31)</td><td>확정·난코스</td></tr>
    <tr><td><strong>10/11</strong></td><td>서울레이스</td><td>서울</td><td>하프·10K</td><td>마감(5/27)</td><td>확정·도심</td></tr>
    <tr><td><strong>10/17</strong></td><td>경주국제마라톤</td><td>경북</td><td>풀·하프·10K</td><td>마감(5/26)</td><td>확정</td></tr>
    <tr><td><strong>10/25</strong></td><td>조선일보 춘천마라톤</td><td>강원</td><td>풀·10K</td><td>풀 7/14·10K 7/16</td><td>확정</td></tr>
    <tr><td><strong>11/1</strong></td><td>JTBC 서울마라톤</td><td>서울</td><td>풀·10K</td><td>추첨 마감(4월)</td><td>확정</td></tr>
    <tr><td><strong>11/15</strong></td><td>MBN 서울마라톤</td><td>서울</td><td>하프·10K</td><td>우선 6/22·일반 6/25~26</td><td>확정</td></tr>
    <tr><td><strong>11/15</strong></td><td>손기정평화마라톤</td><td>경기 고양</td><td>풀·하프·10K</td><td>9월 예상</td><td>일정 미발표</td></tr>
    <tr><td><strong>11/22</strong></td><td>인천마라톤(제2회)</td><td>인천</td><td>풀·10K·5K</td><td>추후 공개</td><td>날짜 확정</td></tr>
    <tr><td><strong>12/6</strong></td><td>부산국제마라톤</td><td>부산</td><td>풀·하프·10K</td><td>미발표</td><td>날짜 확정</td></tr>
  </tbody>
</table>

<p>월별로 더 자세히 보면 다음과 같습니다. 전체 일정과 코스·참가비는 <a href="/marathon">마라톤 일정 페이지</a>에서 계속 업데이트하고 있습니다.</p>

<h2>9월 — 가을 시즌 개막</h2>

<p>여름 더위가 한풀 꺾이는 9월은 시즌 워밍업 구간입니다. 대표 주자는 <strong>9/20 공주백제마라톤</strong> — 동아 계열 가을 시즌 개막전으로, 금강변 평지 풀코스에 <strong>32K 옵션</strong>을 따로 둔 게 특징입니다. 풀코스 본 시즌(10월)을 앞두고 거리감을 점검하기 좋아 인기가 많죠. 참가비는 풀·하프·10K 공통 7만 원대, 이미 본접수(5/21)는 마감됐습니다.</p>

<p>바다를 보며 달리고 싶다면 <strong>9/13 강화해변마라톤(제26회)</strong>도 새로 접수를 열었습니다. 강화함상공원을 출발하는 해변 코스로 선착순 3,500명 소규모이고, <strong>커플런(10K)·가족런(5K)</strong> 같은 가족 친화 종목이 특징입니다(Half·10K 4.5만 원, 6/10 14시부터 선착순). 그 밖에 9/5 철원DMZ평화마라톤, 9/5 순천만울트라(100km), 9/20 가평자라섬 등 지역·테마 대회가 가을 문을 엽니다.</p>

<h2>10월 — 풀코스 격전지 (춘천·경주·안동)</h2>

<p>10월은 한 해 마라톤의 심장입니다. 풀코스 PB를 노린다면 이 달에 집중하세요.</p>

<ul>
  <li><strong>10/25(일) 9시 조선일보 춘천마라톤 — 올해 80주년</strong>. "가을의 전설", 1946년 시작된 의암호 단풍 코스가 압권입니다. 다만 <strong>25km 지점 오르막</strong>이 후반 페이스의 변수죠. 6/11 공식 발표 기준 <strong>신청은 풀코스 7/14(화) 14시·10K 7/16(목) 14시 선착순</strong>, 참가비는 <strong>풀 15만 원·10K 10만 원</strong>입니다. 풀코스는 역대 빠르게 마감되니 접수일 광클이 필수예요(결제는 풀 7/20~21·10K 7/22~23). 춘천 코스를 미리 즐기고 싶다면 <a href="/blog/chuncheon-unique-running-courses-7">춘천 이색 러닝 코스 7선</a>도 참고하세요.</li>
  <li><strong>10/17 경주국제마라톤</strong> — 동아일보 주최, World Athletics 엘리트 라벨. 첨성대·황룡사지 등 신라 유적을 지나는 평지 코스라 PB 친화적입니다. 풀 일반 7만 원/매니아 6만 원, 총 1.6만 명 규모.</li>
  <li><strong>10/4 안동마라톤</strong> — 획득고도 700m+의 국내 최상급 난코스. 1만 명 선착순이 며칠 만에 조기 마감될 만큼 마니아층이 두텁습니다. "기록보다 도전"을 원하는 러너용.</li>
</ul>

<div class="callout info">
  <span class="callout-icon">🏆</span>
  <div class="callout-body">
    <p class="callout-title">춘천 80주년 우선 트랙 — 일반접수(7/14) 전에 먼저 열립니다</p>
    <p>올해 창설 80주년을 맞아 춘천마라톤은 일반접수에 앞서 우선 트랙을 여럿 운영합니다.</p>
    <ul>
      <li><strong>명예의 전당 헌액 예정자(Full 9회 완주자)</strong> — 전원 신청·결제 가능. 기간 <strong>6/16(화) 10시 ~ 6/19(금) 18시</strong> ('참가신청 &gt; 명예의 전당 헌액 예정자 신청' 메뉴).</li>
      <li><strong>조선멤버십 얼리버드</strong> — 조선멤버십 연간 구독자 대상 선착순 1,000명(풀 700·10K 300). 신청 <strong>6/23(화) 14시</strong>, 결제 6/24~26. 80주년 기념 자켓을 증정하며, 사전신청권이 '3분 마감'될 만큼 경쟁이 치열합니다.</li>
      <li><strong>Full 5~8회 완주자</strong> — 구글폼 응모 후 추첨. 응모 <strong>6/29(월)~7/1(수)</strong> → 당첨자 발표·신청·결제 <strong>7/6(월)~7/9(목)</strong>.</li>
    </ul>
    <p>해당되는 자격·구독이 있다면 일반 선착순(7/14~)을 기다리지 말고 우선 트랙을 먼저 노리는 게 유리합니다. 자세한 방법은 공식 홈페이지(chuncheonmarathon.com) 공지사항을 확인하세요.</p>
  </div>
</div>

<h2>11월 — 도심 마라톤 풍년</h2>

<p>11월은 서울·수도권 도심 대회가 몰리는 달입니다.</p>

<ul>
  <li><strong>11/1 JTBC 서울마라톤</strong> — 국내 최대 규모 가을 풀코스. 상암→여의도→잠실 코스로, <strong>추첨제</strong>라 4월에 이미 접수가 끝났습니다(카카오 러너스 카드 소지자 대상). 풀 15만 원.</li>
  <li><strong>11/15(일) 7시 30분 MBN 서울마라톤</strong> — 하프는 광화문광장에서 잠실까지 일직선, 10K는 잠실종합운동장 루프 도심 코스(풀코스 없음, 총 3만 명·TV 생중계). 참가비 하프 10만 원·10K 7만 원으로 확정됐고 접수가 임박했습니다: <strong>우선신청 6/22(월) 10시~6/23(화)</strong>(선셋마라톤·슈퍼히어로런 신청자·매경PLUS 구독자 한정), <strong>하프 일반 6/25(목) 14시·10K 일반 6/26(금) 14시</strong>. 지금 바로 챙겨야 할 대회입니다. 자세한 코스는 <a href="/blog/2026-mbn-seoul-marathon-registration">MBN 서울마라톤 접수 정리</a>를 보세요.</li>
  <li><strong>11/22 인천마라톤(제2회)</strong> — 인천 최초·유일 공식 풀코스. 2026년엔 <strong>청라하늘대교(바다 위 러닝) 코스를 추진 중</strong>이며 풀코스 정원을 8천 명으로 확대합니다. 접수·참가비는 추후 순차 공개 예정. 상세는 <a href="/blog/2026-incheon-marathon">2026 인천마라톤 정리</a> 참고.</li>
  <li><strong>11/15(추정) 손기정평화마라톤</strong> — 고양 제2자유로를 통제하는 약 2만 명 규모 대회. 선착순이라 9월 접수 오픈 시 조기 마감되니 알림 설정 필수.</li>
</ul>

<h2>12월 — 시즌 피날레, 부산</h2>

<p>한 해를 닫는 <strong>12/6 부산국제마라톤</strong>은 대한육상연맹 공인 부산 최대 풀코스입니다. 연말 시즌 마지막 풀코스 도전 무대로, 세부 일정·참가비는 아직 미발표(2026-06 기준)입니다. (날짜는 일부 사이트가 12/1로 표기하지만, KAAF 공식 기준 <strong>12/6</strong>이 정확합니다.)</p>

<h2>접수 광클 생존 가이드 — 인기 대회는 이렇게 뚫는다</h2>

<div class="callout warning">
  <span class="callout-icon">⏱️</span>
  <div class="callout-body">
    <p class="callout-title">대회마다 접수 방식이 다릅니다 — 미리 알아야 들어갑니다</p>
    <ul>
      <li><strong>동아 계열(경주·공주·서울동아)</strong> — <strong>동마클럽(dongma.club) 유료 멤버십</strong>은 일반접수보다 약 1주일 먼저 '우선접수'가 열립니다. 인기 대회는 우선접수에서 사실상 마감되니, 메이저 출전 계획이 있으면 멤버십이 사실상 필수.</li>
      <li><strong>춘천마라톤(선착순)</strong> — 풀코스 5분 내 마감 전례. 접수일 당일 오후 2시 전에 <strong>로그인·결제 정보를 미리 세팅</strong>하고 대기하세요.</li>
      <li><strong>JTBC 서울(추첨제)</strong> — 카카오 러너스 카드 소지자만 응모 가능. 4월 접수라 <strong>연초에 카드를 미리 발급</strong>해두는 게 선결 조건.</li>
      <li><strong>손기정평화·인천</strong> — 9월·미정 오픈. 공식 채널·인스타 알림을 켜두고 오픈 즉시 신청.</li>
      <li><strong>공통</strong> — 신청 직전 카드사 문자 인증 지연으로 마감되는 사례가 잦습니다. <strong>회원가입·결제카드 등록을 미리</strong> 끝내두세요.</li>
    </ul>
  </div>
</div>

<h2>거리·목적별로 어떤 대회를 고를까</h2>

<table>
  <thead>
    <tr><th>목표</th><th>추천 대회</th><th>이유</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>풀코스 PB</strong></td><td>경주국제(10/17)</td><td>유적지 통과 평지, 기록 친화적</td></tr>
    <tr><td><strong>가을 단풍 풀코스</strong></td><td>춘천(10/25)</td><td>의암호 단풍, 80주년의 명성</td></tr>
    <tr><td><strong>도전·난코스</strong></td><td>안동(10/4)</td><td>획득고도 700m+ 국내 최상급</td></tr>
    <tr><td><strong>첫 풀코스 / 대규모 축제</strong></td><td>JTBC서울(11/1)</td><td>국내 최대 규모, 도심 분위기</td></tr>
    <tr><td><strong>하프·10K 도심런</strong></td><td>MBN서울(11/15)</td><td>광화문~잠실 일직선, 접근성 ↑</td></tr>
    <tr><td><strong>이색 코스</strong></td><td>인천(11/22)</td><td>청라하늘대교 바다 위 러닝 추진</td></tr>
  </tbody>
</table>

<p>처음 풀코스나 하프에 도전한다면 <a href="/blog/race-distance-difficulty-guide-2026">거리별 난이도 가이드</a>로 내 수준에 맞는 거리를 먼저 정하고, 대회 당일 기록 측정이 헷갈린다면 <a href="/blog/race-timing-chip-net-gross-time-guide-2026">기록칩·넷타임/그로스타임 정리</a>를 미리 읽어두면 좋습니다. 전체 월별 일정은 <a href="/marathon">마라톤 캘린더</a>에서 계속 확인할 수 있습니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 일정은 2026-06-11 기준이며, 공식 미발표 대회(손기정·부산 등)의 날짜·접수·참가비는 추정 또는 잠정 정보입니다. 반드시 각 대회 공식 홈페이지에서 최종 확인하세요. (글감: @runninglife_korea 하반기 대회 일정 정리 + 공식 소스 교차검증, 2026-06)</p>
`,
  },
  {
    id: 'adidas-supernova-rise-2-vs-3-comparison',
    slug: 'adidas-supernova-rise-2-vs-3-comparison',
    title: '아디다스 슈퍼노바 라이즈 2 vs 슈퍼노바 라이즈 3 비교 | "입문화"가 "쿠션화"로 — 스택 +3.5mm·드롭 10→8mm·와이드 옵션 사라진 변화 총정리',
    description: '슈퍼노바 라이즈 2(149,000원·입문화)와 라이즈 3(159,000원·쿠션화)의 차이를 데이터로 비교. 힐 스택 33.5→37mm, 드롭 10→8mm, Dreamstrike+ 20% 업그레이드, 와이드 옵션 폐지까지. 발볼·평발·무릎·세일 타이밍별 한국 러너 구매 매트릭스.',
    thumbnail: '/images/shoes/adidas/supernovarise3/main.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-10',
    category: 'review' as const,
    readingTime: 12,
    tags: ['아디다스', '슈퍼노바 라이즈', '슈퍼노바 라이즈 2', '슈퍼노바 라이즈 3', '데일리 트레이너', '쿠션화', '입문화', 'Dreamstrike+', '세대 비교', '장거리 쿠션화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>"입문화"가 "쿠션화"로 승급</strong> — 라이즈 3는 힐 스택 33.5→37mm, 포어풋 24→29mm로 키우고 Dreamstrike+ 폼을 20% 더 부드럽게 바꿔, 입문 데일리에서 본격 장거리 쿠션화로 성격이 바뀌었습니다.</li>
    <li>핵심 트레이드오프: <strong>드롭 10→8mm·무게 257→270g(+13g)</strong>. 더 두툼해진 대신 힐스트라이커 입문자 친화도와 경쾌함은 살짝 양보했죠.</li>
    <li>한국 러너에게 가장 큰 변수는 <strong>와이드 옵션 폐지</strong>. 라이즈 2는 와이드가 있었지만 라이즈 3는 표준만 — 발볼 4E+ 러너라면 이게 결정타입니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🧭</span>
  <div class="callout-body">
    <p class="callout-title">이 글은 "라이즈 2 살까, 3로 갈까"를 정리하는 데일리 트레이너 세대 비교입니다</p>
    <p>"슈퍼노바 라이즈 3 후기", "라이즈 2 vs 3 차이"를 찾는 분이 많아 두 세대를 한 줄에 세웠습니다. 결론부터 말하면 <strong>같은 이름이지만 카테고리가 달라진 신발</strong>이에요. 라이즈 2는 와이드 옵션을 갖춘 10mm 드롭 입문화, 라이즈 3는 스택을 키워 무릎 보호에 더 특화된 쿠션화입니다. 본 글은 확정 수치(스택·드롭·무게·가격·specs 점수)만으로 비교하고, 발볼·평발·무릎·세일 타이밍별로 어느 세대가 맞는지 매트릭스로 정리했습니다.</p>
  </div>
</div>

<h2>한눈에 비교</h2>

<table>
  <thead>
    <tr><th>항목</th><th>슈퍼노바 라이즈 2</th><th>슈퍼노바 라이즈 3</th><th>차이</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>카테고리</strong></td><td>입문화</td><td><strong>쿠션화</strong></td><td>성격 변화 (입문 → 본격 쿠션)</td></tr>
    <tr><td><strong>MSRP (한국)</strong></td><td>149,000원</td><td><strong>159,000원</strong></td><td>+10,000원</td></tr>
    <tr><td><strong>실구매가 (참고)</strong></td><td>약 135,000원</td><td>약 145,000원</td><td>세일 시 둘 다 더 내려감</td></tr>
    <tr><td><strong>무게 (US M9)</strong></td><td>257g</td><td>270g</td><td>+13g (라이즈 3가 더 묵직)</td></tr>
    <tr><td><strong>힐 스택</strong></td><td>33.5mm</td><td><strong>37mm</strong></td><td>+3.5mm</td></tr>
    <tr><td><strong>전족부 스택</strong></td><td>24mm</td><td><strong>29mm</strong></td><td>+5mm (장거리 후반 쿠션 ↑)</td></tr>
    <tr><td><strong>드롭</strong></td><td>10mm</td><td><strong>8mm</strong></td><td>-2mm (미드풋 착지 유도)</td></tr>
    <tr><td><strong>미드솔 폼</strong></td><td>Dreamstrike+</td><td><strong>Dreamstrike+ (20% softer/bouncier)</strong></td><td>20% 더 부드럽고 탄력 ↑</td></tr>
    <tr><td><strong>쿠셔닝 점수</strong></td><td>9/10</td><td>9/10</td><td>동일 (체감 부드러움은 3 우위)</td></tr>
    <tr><td><strong>반응성 점수</strong></td><td>7/10</td><td>7/10</td><td>동일</td></tr>
    <tr><td><strong>안정성 점수</strong></td><td>8/10</td><td>7/10</td><td>-1 (가벼운 과내전은 라이즈 2 우위)</td></tr>
    <tr><td><strong>내구성</strong></td><td>600km</td><td>650km</td><td>+50km</td></tr>
    <tr><td><strong>km당 비용</strong></td><td>약 265원</td><td>약 260원</td><td>거의 동일</td></tr>
    <tr><td><strong>아웃솔</strong></td><td>Adiwear 러버</td><td><strong>Adiwear 풀 커버리지</strong></td><td>커버리지 확대</td></tr>
    <tr><td><strong>어퍼</strong></td><td>메쉬</td><td><strong>PRIMEWEAVE 소프트 메쉬 + 거셋 텅</strong></td><td>플러시·풋홀드 개선</td></tr>
    <tr><td><strong>토박스</strong></td><td>넓음 (wide fit)</td><td>표준 (68.4mm)</td><td>기본 핏이 좁아짐</td></tr>
    <tr><td><strong>와이드 옵션</strong></td><td><strong>있음 (표준/와이드)</strong></td><td>없음 (표준만)</td><td>발볼 넓은 러너 핵심 변수</td></tr>
  </tbody>
</table>

<h2>핵심 변화 — "입문화"에서 "쿠션화"로</h2>

<p>라이즈 2와 3의 가장 큰 차이는 단순 스펙이 아니라 <strong>신발의 정체성 자체가 바뀌었다</strong>는 점입니다. 라이즈 2는 10mm 드롭·와이드 옵션을 갖춘 힐스트라이커 친화 입문화였습니다. 라이즈 3는 스택을 위아래로 키우고 폼을 부드럽게 바꿔 본격 장거리 쿠션화 영역으로 올라갔죠.</p>

<div class="callout warning">
  <span class="callout-icon">🔄</span>
  <div class="callout-body">
    <p class="callout-title">입문 데일리 vs 장거리 쿠션 — 설계 철학 비교</p>
    <table>
      <thead>
        <tr><th></th><th>라이즈 2 — 입문화 (구)</th><th>라이즈 3 — 쿠션화 (신)</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>겨냥 러너</strong></td><td>첫 하프 준비·쿠션 중시 입문자</td><td>장거리·무릎 보호·25km+ LSD 러너</td></tr>
        <tr><td><strong>스택·드롭</strong></td><td>33.5/24mm, 10mm 드롭 (힐 착지 친화)</td><td>37/29mm, 8mm 드롭 (미드풋 유도)</td></tr>
        <tr><td><strong>핏 전략</strong></td><td>넓은 토박스 + 와이드 옵션으로 발볼 커버</td><td>표준 토박스 + PRIMEWEAVE 풋홀드 강화</td></tr>
        <tr><td><strong>강점</strong></td><td>가볍고(257g) 입문자 안정성(8/10) ↑</td><td>장거리 후반 쿠션 유지·내구성(650km) ↑</td></tr>
        <tr><td><strong>약점</strong></td><td>전족부 스택 24mm로 장거리 후반 얇음</td><td>와이드 폐지·무게 +13g·안정성 -1</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p>즉 라이즈 3는 전작의 자리를 그대로 잇는 후속작이라기보다, <strong>호카 클리프톤·아식스 노바블라스트 같은 장거리 쿠션화와 직접 붙는 포지션</strong>으로 한 단계 올라선 신발입니다. 입문 데일리가 필요한 분에게는 오히려 라이즈 2가 더 맞을 수 있다는 뜻이기도 하죠.</p>

<h2>5가지 핵심 변화 점검</h2>

<h3>1. 카테고리 승급 — 입문화 → 쿠션화 ✅ 가장 큰 변화</h3>
<p>스택을 힐 +3.5mm, 포어풋 +5mm 키운 게 결정적입니다. 라이즈 2의 전족부 24mm는 장거리 후반에 얇게 느껴질 수 있는데, 라이즈 3는 29mm로 키워 <strong>25km 이후에도 쿠션이 살아있는 설계</strong>로 바뀌었어요. "전작은 30km 이후 발바닥이 뻐근했는데 라이즈 3는 35km까지 쿠션이 버틴다"는 평이 이 변화를 잘 설명합니다.</p>

<h3>2. Dreamstrike+ 20% 부드러움·탄력 ✅ 체감 쿠션 개선</h3>
<p>쿠셔닝 점수는 둘 다 9/10이지만, 라이즈 3의 Dreamstrike+는 <strong>20% 더 부드럽고 탄력 있게(softer/bouncier)</strong> 재배합됐습니다. 점수가 같아도 실제 발에 닿는 부드러움은 라이즈 3가 한 수 위라는 의미죠. 데일리 조깅에서 "통통 튀는" 느낌을 원한다면 라이즈 3 쪽입니다.</p>

<h3>3. 드롭 10mm → 8mm ⚠️ 착지 패턴 변화</h3>
<p>2mm 줄어든 드롭은 양날의 검입니다. 8mm로 낮아지면서 <strong>미드풋 착지를 유도</strong>하고 아킬레스 부담은 약간 줄지만, 라이즈 2의 10mm에 익숙한 뒤꿈치 착지 입문자라면 종아리·아킬레스 적응 기간이 필요할 수 있어요. 힐스트라이커 입문자에게는 오히려 라이즈 2의 10mm가 더 편할 수 있습니다.</p>

<h3>4. 무게 257g → 270g (+13g) ⚠️ 약간 묵직해짐</h3>
<p>스택을 키운 대가로 13g 무거워졌습니다. 둘 다 빠른 페이스용은 아니지만(반응성 7/10), <strong>가벼움 우선이라면 라이즈 2</strong>가 유리합니다. 다만 270g도 쿠션화 카테고리에서는 표준 범위라 LSD·데일리에서는 무게가 크게 거슬리진 않습니다.</p>

<h3>5. 와이드 옵션 폐지 ⚠️ 발볼 넓은 한국 러너 핵심 주의</h3>
<p>라이즈 2는 <strong>표준/와이드 2종</strong>을 제공했지만, 라이즈 3는 표준만 나옵니다. 라이즈 3의 토박스 자체는 68.4mm로 좁지 않은 편이라 표준~약간 넓은 발은 커버되지만, <strong>중족부 핏이 좁아</strong> 발볼 4E+ 러너는 끈을 헐겁게 매야 하는 경우가 생겨요. 발볼이 확실히 넓다면 와이드가 있는 라이즈 2가 안전합니다.</p>

<h2>상황별 구매 결정 매트릭스</h2>

<table>
  <thead>
    <tr><th>본인 상황</th><th>추천</th><th>이유</th></tr>
  </thead>
  <tbody>
    <tr><td>발볼 4E+ (와이드 필수)</td><td><strong>라이즈 2 (와이드)</strong></td><td>라이즈 3는 와이드 옵션 없음</td></tr>
    <tr><td>25km+ LSD·풀 준비 + 후반 쿠션 우선</td><td><strong>라이즈 3</strong></td><td>전족부 29mm·Dreamstrike+ 20% 업그레이드</td></tr>
    <tr><td>첫 하프 준비 입문자 (힐 착지)</td><td><strong>라이즈 2</strong></td><td>10mm 드롭·가벼운 257g·입문 친화</td></tr>
    <tr><td>무릎 통증·관절 보호 최우선</td><td><strong>라이즈 3</strong></td><td>37mm 힐 스택·excellent 등급</td></tr>
    <tr><td>가벼운 과내전 (약한 안정성 필요)</td><td><strong>라이즈 2</strong></td><td>안정성 8/10 (3은 7/10·완전 중립용)</td></tr>
    <tr><td>가성비 + 표준 발볼</td><td>라이즈 2 (세일 13만원대)</td><td>km당 비용 비슷, MSRP 1만원 저렴</td></tr>
    <tr><td>부드러운 "통통 튀는" 데일리 우선</td><td><strong>라이즈 3</strong></td><td>Dreamstrike+ 20% softer/bouncier</td></tr>
    <tr><td>라이즈 2 사용 중 + 500km 이내 멀쩡</td><td>라이즈 2 계속</td><td>업그레이드 가치는 후반 쿠션 차이 정도</td></tr>
    <tr><td>완전 중립발 + 장거리 1켤레</td><td><strong>라이즈 3</strong></td><td>650km 내구성·표준 핏 풋홀드 ↑</td></tr>
  </tbody>
</table>

<h2>가격·세일 시나리오 — 둘 다 가성비 영역</h2>

<div class="callout success">
  <span class="callout-icon">💰</span>
  <div class="callout-body">
    <p class="callout-title">라이즈 2/3 가격 판단 가이드</p>
    <ul>
      <li><strong>MSRP 차이는 1만원(149,000 vs 159,000원).</strong> km당 비용도 265원 vs 260원으로 사실상 동일해, 가격만으로 한쪽이 압도적이지 않습니다.</li>
      <li><strong>라이즈 2는 후속작 출시로 세일 진입.</strong> 네이버·공식몰에서 13만원대, 시즌 오프엔 더 내려가는 경우가 많아 입문·표준 발볼이라면 가성비 메리트가 큽니다.</li>
      <li><strong>라이즈 3는 현행 모델.</strong> 정가~약 145,000원 실구매가 선에서 형성되며, 세일 폭은 라이즈 2보다 작습니다. 후반 쿠션·내구성을 산다는 관점이면 충분히 합리적.</li>
      <li><strong>발볼 4E+면 가격보다 와이드 유무가 우선.</strong> 라이즈 2 와이드 재고가 빠지기 전에 본인 사이즈를 확보하는 게 안전합니다.</li>
    </ul>
  </div>
</div>

<p><strong>가장 합리적 액션</strong>은 본인 발볼·목적부터 가르는 겁니다. 발볼 넓음·입문·가성비라면 세일 들어간 라이즈 2 와이드, 장거리 후반 쿠션·무릎 보호·완전 중립발이라면 라이즈 3입니다.</p>

<h2>한국 러너 부상별 권장</h2>

<table>
  <thead>
    <tr><th>부상·체형</th><th>추천</th><th>근거</th></tr>
  </thead>
  <tbody>
    <tr><td>무릎 통증 (러너스 니·장경인대염)</td><td><strong>라이즈 3</strong></td><td>37mm 힐 스택·kneeIssues excellent</td></tr>
    <tr><td>아킬레스건염 이력</td><td><strong>라이즈 3</strong></td><td>드롭 10→8mm·achilles excellent</td></tr>
    <tr><td>족저근막염</td><td>라이즈 2 = 3</td><td>둘 다 plantarFasciitis excellent</td></tr>
    <tr><td>정강이 부목 (Shin Splints)</td><td>라이즈 2 = 3</td><td>둘 다 shinSplints excellent</td></tr>
    <tr><td>가벼운 과내전</td><td><strong>라이즈 2</strong></td><td>안정성 8/10 (3은 7/10·중립 전용)</td></tr>
    <tr><td>심한 과내전·평발 + 강한 지지 필요</td><td>둘 다 비권장</td><td>안정화 아님 — GT-2000 계열 권장</td></tr>
    <tr><td>가벼운 평발 + 두꺼운 쿠션 선호</td><td>라이즈 2(와이드) 또는 3</td><td>flatFoot good·아치 지지보다 쿠션으로 흡수</td></tr>
  </tbody>
</table>

<p>두 모델 모두 안정화가 아니라 중립~쿠션화입니다. 심한 과내전·평발이라면 안정화 카테고리를 봐야 해요. 본인 발 특성·부상 이력 기반 후보는 <a href="/recommend">1분 러닝화 추천</a>에서 받을 수 있고, 무릎 통증 종합 가이드는 <a href="/blog/knee-pain-running-shoes">무릎 통증 러너 신발 가이드 →</a>, 발볼 넓은 분은 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 추천 신발 →</a>를 참고하세요.</p>

<h2>비슷한 쿠션화 대안</h2>

<p>라이즈 2/3 외에 같은 장거리 쿠션 영역에서 검토할 만한 옵션입니다.</p>

<ul>
  <li><a href="/shoes/adidas-supernova-rise-3">아디다스 슈퍼노바 라이즈 3</a> — 37mm 스택·Dreamstrike+ 20% 업그레이드, 무릎 보호 쿠션화</li>
  <li><a href="/shoes/adidas-supernova-rise-2">아디다스 슈퍼노바 라이즈 2</a> — 와이드 옵션·10mm 드롭, 발볼 넓은 입문자 1순위</li>
  <li><a href="/shoes/hoka-clifton-10">호카 클리프톤 10</a> — 225g 경량 맥시멀 쿠션. 라이즈보다 가볍지만 약 2만원 비쌈</li>
  <li><a href="/shoes/asics-novablast-5">아식스 노바블라스트 5</a> — FF BLAST MAX·통통 튀는 쿠션, 데일리~템포 겸용</li>
  <li><a href="/shoes/nike-pegasus-premium">나이키 페가수스 프리미엄</a> — 에어 줌 + 리액트X 결합 프리미엄 데일리</li>
</ul>

<h2>FAQ</h2>

<h3>Q. 라이즈 2 → 라이즈 3 업그레이드 가치 있나요?</h3>
<p>라이즈 2가 500km 이내로 멀쩡하다면 굳이 갈 필요 없습니다. 다만 <strong>30km 이후 발바닥이 뻐근했던 분</strong>이라면 라이즈 3의 전족부 +5mm·Dreamstrike+ 20% 업그레이드가 후반 쿠션을 확실히 채워줘 체감 차이가 큽니다. 반대로 가벼움·10mm 드롭·와이드가 좋았다면 라이즈 2를 더 사두는 게 나을 수 있어요.</p>

<h3>Q. 발볼이 넓은데 라이즈 3 표준으로 괜찮을까요?</h3>
<p>라이즈 3 토박스는 68.4mm로 좁은 편은 아니라 <strong>표준~약간 넓은 발은 커버</strong>됩니다. 다만 중족부 핏이 좁아 발볼 4E 이상이면 끈을 헐겁게 매야 하는 경우가 생겨요. 확실히 넓다면 와이드가 있는 라이즈 2가 안전합니다. 매장 착화로 중족부 압박을 꼭 확인하세요.</p>

<h3>Q. 초보 입문자에게는 어느 쪽이 나을까요?</h3>
<p>힐로 착지하는 입문자라면 <strong>10mm 드롭·257g의 라이즈 2</strong>가 더 친화적입니다. 안정성도 8/10으로 약간 높아 흔들림이 덜하죠. 라이즈 3는 8mm 드롭·미드풋 유도라 입문보다는 어느 정도 거리를 뛰는 데일리·장거리 러너에게 더 맞습니다.</p>

<h3>Q. 둘 다 풀코스 가능한가요?</h3>
<p>가능합니다. 다만 페이스에 따라 다릅니다. <strong>Sub-4~Sub-5 완주 + 무릎/쿠션 우선이라면 라이즈 3</strong>가 후반 쿠션에서 유리하고, 입문자가 첫 하프~풀을 무리 없이 완주하는 용도라면 라이즈 2도 충분합니다. Sub-3:30 이하 빠른 레이스는 둘 다 무게(257~270g)·반응성(7/10) 한계로 카본 슈즈 분리를 권합니다.</p>

<h3>Q. 평발인데 둘 중 하나 신어도 되나요?</h3>
<p>가벼운 평발이라면 둘 다 flatFootCompatibility good이라 두꺼운 쿠션으로 충격을 흡수해줍니다. 다만 <strong>아치 지지력 자체는 안정화(GT-2000 등)보다 약합니다</strong>. 과내전이 심하다면 라이즈가 아니라 안정화로 가야 해요. 본인 프로네이션이 헷갈리면 <a href="/blog/pronation-type-running-shoe-guide-2026">프로네이션 타입별 러닝화 가이드 →</a>를 먼저 확인하세요.</p>

<h2>결론 — 내 추천</h2>

<div class="callout success">
  <span class="callout-icon">🎯</span>
  <div class="callout-body">
    <p class="callout-title">발볼과 목적이 갈림길입니다</p>
    <p><strong>발볼 넓음·입문·가성비·가벼움 우선</strong>이라면 <a href="/shoes/adidas-supernova-rise-2">슈퍼노바 라이즈 2</a>입니다. 와이드 옵션·10mm 드롭·257g·안정성 8/10이 입문 한국 러너에게 더 안전하고, 후속작 출시로 세일가 13만원대 메리트까지 있죠. 단 와이드 재고는 먼저 빠지니 본인 사이즈를 일찍 확보하세요.</p>
    <p><strong>완전 중립발·장거리/무릎 보호·후반 쿠션 우선</strong>이라면 <a href="/shoes/adidas-supernova-rise-3">슈퍼노바 라이즈 3</a>입니다. 37mm 스택·전족부 29mm·Dreamstrike+ 20% 업그레이드·650km 내구성으로 25km+ LSD와 무릎 보호 데일리에 강합니다. 와이드가 없다는 점만 발볼로 걸러내면 됩니다.</p>
    <p><strong>둘 다 처음</strong>이라면 매장에서 동시 착화가 정답입니다. 드롭(10 vs 8mm)과 중족부 핏 차이가 발에서 바로 갈리거든요. 본인 발이 어느 쪽에 편한지 5분만 걸어보면 답이 나옵니다.</p>
  </div>
</div>

<div class="affiliate-cta">
  <p class="affiliate-cta-label">상세 정보</p>
  <div class="affiliate-cta-buttons">
    <a href="/shoes/adidas-supernova-rise-3" class="affiliate-btn pending">
      <span class="affiliate-btn-store">상세</span>
      <span class="affiliate-btn-product">슈퍼노바 라이즈 3 상세 →</span>
    </a>
    <a href="/shoes/adidas-supernova-rise-2" class="affiliate-btn pending">
      <span class="affiliate-btn-store">상세</span>
      <span class="affiliate-btn-product">슈퍼노바 라이즈 2 상세 →</span>
    </a>
  </div>
  <p class="affiliate-disclosure">광고 표기: 일부 링크는 제휴 수수료를 받을 수 있습니다.</p>
</div>

<h2>다른 세대 비교</h2>

<p>슈퍼노바 라이즈가 데일리 쿠션 영역이라면, 페이스·거리에 따라 다른 카테고리 세대 비교도 함께 보면 라인업을 짜기 좋습니다.</p>

<ul>
  <li><a href="/blog/puma-deviate-nitro-3-vs-4-comparison">푸마 디비에이트 나이트로 3 vs 4 — 데일리 트레이너 세대 비교</a> (반발력 있는 데일리)</li>
  <li><a href="/blog/brooks-glycerin-max-1-vs-2-comparison">브룩스 글리세린 맥스 vs 맥스 2 — 맥시멀 쿠션화 세대 비교</a> (두툼한 쿠션 우선)</li>
  <li><a href="/blog/mizuno-wave-rebellion-flash-2-vs-3-comparison">미즈노 웨이브 리벨리온 플래시 2 vs 3 — 슈퍼트레이너 세대 비교</a> (페이스 훈련 분리용)</li>
  <li><a href="/blog/nike-pegasus-41-vs-42-comparison">나이키 페가수스 41 vs 42 — 데일리 트레이너 세대 비교</a> (5~10km 데일리 기준점)</li>
  <li><a href="/blog/new-balance-1080-v14-vs-v15-comparison">NB 1080 v14 vs v15 — 쿠션화 세대 비교</a> (장거리 부드러운 중립화)</li>
</ul>

<h2>관련 글</h2>

<ul>
  <li><a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 추천 신발 — 토박스 실측 정리</a></li>
  <li><a href="/blog/knee-pain-running-shoes">무릎 통증 러너 신발 가이드</a></li>
  <li><a href="/blog/pronation-type-running-shoe-guide-2026">프로네이션 타입별 러닝화 가이드 2026</a></li>
  <li><a href="/blog/first-running-shoe-guide-2026">첫 러닝화 고르는 법 2026 — 안정화 vs 중립화 선택</a></li>
  <li><a href="/compare">러닝화 비교하기 — 슈퍼노바 라이즈 2·3 스펙 나란히 보기</a></li>
</ul>

<p><small>출처: 아디다스 공식 제품 정보 / allrunabout.com 신발 데이터베이스(기준일 2026-06-10) / 슈퍼노바 라이즈 2·3 스펙(스택·드롭·무게·Dreamstrike+ 폼·MSRP·내구성). 본 비교는 SA/HA/에너지 리턴 같은 랩 수치가 데이터에 명시되지 않아 확정 수치(스택·드롭·무게·가격·specs 점수 1-10)와 카테고리 변화만으로 작성했으며, 실구매가·세일 폭 등 일부 수치는 공식 발표·전작 기준 추정입니다.</small></p>
`,
  },
  {
    id: 'puma-deviate-nitro-3-vs-4-comparison',
    slug: 'puma-deviate-nitro-3-vs-4-comparison',
    title: '푸마 디비에이트 나이트로 3 vs 4 비교 | 좁은 핏·450km의 끝 — 와이드 옵션과 800km 내구성으로 갈아탄 가성비 카본 슈퍼트레이너',
    description: '219,000원 동일 가격, 푸마 디비에이트 나이트로 3 vs 4 세대 비교. v4는 좁은 핏을 넓히고 와이드 옵션 추가, 무게 268→250g·드롭 10→8mm·내구성 450→800km로 개선. 발볼 넓은 한국 러너·업템포 훈련용 가성비 카본 슈퍼트레이너 구매 가이드.',
    thumbnail: '/images/shoes/puma/deviatenitro4/side.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-10',
    category: 'review' as const,
    readingTime: 12,
    tags: ['푸마 디비에이트 나이트로', '디비에이트 나이트로 3', '디비에이트 나이트로 4', '슈퍼트레이너 비교', '카본 슈퍼트레이너', 'PWRPLATE', 'NITROFOAM', '업템포 트레이닝', '가성비 카본화', '쿠션화', '와이드 옵션'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>가격은 똑같이 219,000원인데 거의 다 좋아졌습니다</strong> — v4는 무게 268→250g, 드롭 10→8mm, 내구성 450→800km(약 2배), 그리고 v3의 고질병이던 좁은 핏을 넓히고 <strong>와이드 옵션</strong>까지 추가</li>
    <li>철학 변화: v3 = Nitro Foam + Nitro Elite 듀얼폼(단단하고 직접적), v4 = <strong>듀얼 레이어 NITROFOAM(상단 PEBAX 100% + 하단 PEBA 블렌드)</strong>로 착지는 더 부드럽고 추진은 더 강하게</li>
    <li>결론: <strong>발볼 표준~넓음·업템포 훈련용이라면 사실상 v4가 정답.</strong> v3는 세일 18만원대로 떨어졌을 때 발볼 좁은 러너의 가성비 카드로만 의미가 있습니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">왜 이 비교를 쓰나 — "디비에이트 나이트로 4 디시" 검색이 많아서</p>
    <p>푸마 디비에이트 나이트로는 <strong>22만원대에 카본(합성) 플레이트를 박은 가성비 슈퍼트레이너</strong>로 한국 러너 사이에서 조용히 인기가 올라온 모델입니다. 마하 X(₩269,000)·슈퍼블라스트(₩259,000)보다 4~5만원 싸면서 카본 추진력을 주거든요. 그런데 v3가 "발볼이 너무 좁다"는 평이 많았고, v4가 그 약점을 정조준해 나왔습니다. 이 글은 <strong>지금 v4를 살지, 세일 들어간 v3를 주울지</strong> 발볼·내구성·가격 관점에서 정리한 비교입니다.</p>
  </div>
</div>

<h2>한눈에 비교</h2>

<table>
  <thead>
    <tr><th>항목</th><th>디비에이트 나이트로 3 (v3)</th><th>디비에이트 나이트로 4 (v4)</th><th>차이</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>카테고리</strong></td><td>쿠션화 (슈퍼트레이너)</td><td>쿠션화 (슈퍼트레이너)</td><td>동일</td></tr>
    <tr><td><strong>MSRP (한국)</strong></td><td>219,000원</td><td>219,000원</td><td><strong>동일</strong></td></tr>
    <tr><td><strong>세일가 (실측 기준)</strong></td><td><strong>185,000원~</strong> (이전 세대라 더 내려감)</td><td>190,000원~</td><td>v3가 세일 메리트 ↑</td></tr>
    <tr><td><strong>무게</strong></td><td>268g</td><td><strong>250g</strong></td><td>-18g (체감되는 차이)</td></tr>
    <tr><td><strong>힐 스택</strong></td><td>37.4mm</td><td>38mm</td><td>+0.6mm (사실상 동일)</td></tr>
    <tr><td><strong>전족부 스택</strong></td><td>27.3mm</td><td>30mm</td><td>+2.7mm (전족 쿠션 ↑)</td></tr>
    <tr><td><strong>드롭</strong></td><td>10mm (Lab 10.1mm)</td><td><strong>8mm</strong></td><td>-2mm (자연스러운 전환)</td></tr>
    <tr><td><strong>미드솔 폼</strong></td><td>Nitro Foam + Nitro Elite 듀얼폼</td><td><strong>듀얼 레이어 NITROFOAM (상단 PEBAX 100% + 하단 PEBA 블렌드)</strong></td><td>폼 구성 개편</td></tr>
    <tr><td><strong>플레이트</strong></td><td>카본 플레이트 (PWRPLATE, curved)</td><td>카본 합성 PWRPLATE (curved)</td><td>유지</td></tr>
    <tr><td><strong>반응성 점수</strong></td><td>8/10</td><td><strong>9/10</strong></td><td>+1</td></tr>
    <tr><td><strong>쿠션 점수</strong></td><td>8/10</td><td>8/10</td><td>동일</td></tr>
    <tr><td><strong>안정성 점수</strong></td><td>7/10</td><td>7/10</td><td>동일</td></tr>
    <tr><td><strong>내구성</strong></td><td>450km</td><td><strong>800km</strong></td><td>+350km (약 1.8배)</td></tr>
    <tr><td><strong>km당 비용</strong></td><td>약 410원</td><td><strong>약 274원</strong></td><td>v4 압도적 가성비</td></tr>
    <tr><td><strong>아웃솔</strong></td><td>PumaGrip 러버</td><td>PUMAGRIP 러버</td><td>동일 (접지력 강점)</td></tr>
    <tr><td><strong>어퍼</strong></td><td>니트 어퍼</td><td>엔지니어드 메쉬 + PWRTAPE (20% 재활용)</td><td>재설계</td></tr>
    <tr><td><strong>발볼 / 토박스</strong></td><td><strong>좁음~표준</strong></td><td>표준 (v3 대비 넓어짐)</td><td>핏 개선</td></tr>
    <tr><td><strong>와이드 옵션</strong></td><td><strong>없음</strong></td><td><strong>있음</strong></td><td>한국 러너에게 큰 차이</td></tr>
  </tbody>
</table>

<h2>핵심 변화 — "좁고 빡빡하던 v3"에서 "넓고 부드러운 v4"로</h2>

<p>v3와 v4는 가격(둘 다 219,000원)도 같고 카본 PWRPLATE 슈퍼트레이너라는 정체성도 같습니다. 하지만 <strong>실제로 신었을 때의 경험은 v3의 약점을 거의 그대로 뒤집은 방향</strong>으로 바뀌었습니다.</p>

<div class="callout warning">
  <span class="callout-icon">🔄</span>
  <div class="callout-body">
    <p class="callout-title">구(v3) ↔ 신(v4) 설계 철학 비교</p>
    <table>
      <thead>
        <tr><th></th><th>v3 — Nitro Foam + Nitro Elite (구)</th><th>v4 — 듀얼 레이어 NITROFOAM (신)</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>폼 구성</strong></td><td>Nitro Foam(하단) + Nitro Elite(상단) 듀얼폼. 단단하고 직접적인 착지감</td><td>상단 PEBAX 100% + 하단 PEBA 블렌드. 착지는 부드럽게 받고 추진은 강하게</td></tr>
        <tr><td><strong>핏 철학</strong></td><td>좁고 감싸는 니트 어퍼 — 발이 빡빡하게 잡힘</td><td>넓어진 토박스 + 엔지니어드 메쉬 — 여유 있고 와이드 옵션까지</td></tr>
        <tr><td><strong>드롭/전환</strong></td><td>10mm — 힐스트라이크에 무난하나 높은 편</td><td>8mm — 미드풋 전환이 더 자연스러움</td></tr>
        <tr><td><strong>내구성 전략</strong></td><td>450km — 훈련화치고 아쉬움. 세일가로 상쇄</td><td>800km — 정가 사도 km당 274원, 가성비로 정면 승부</td></tr>
        <tr><td><strong>약점</strong></td><td>좁은 발볼·낮은 내구성·다소 무거움(268g)</td><td>신상이라 세일 메리트 적음 — 그게 거의 유일한 단점</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p>핵심은 <strong>"카본 추진력은 유지하면서, 한국 러너가 불편해하던 부분을 다 손봤다"</strong>는 점입니다. 발볼, 무게, 내구성, 드롭 — v3 리뷰에서 반복되던 불만 4가지를 v4가 정조준했어요.</p>

<h2>6가지 핵심 변화 점검</h2>

<h3>1. 좁은 핏 → 넓어진 토박스 + 와이드 옵션 ✅ 가장 큰 변화</h3>
<p>v3의 최대 약점은 누가 뭐래도 <strong>좁은 발볼</strong>이었습니다. detailedSpecs에도 "좁음~표준"으로 적혀 있고, 실사용 후기에서도 "270mm인데 반사이즈 업 권장"이 반복됐어요. v4는 토박스를 넓혔고 <strong>와이드 옵션까지 추가</strong>했습니다. 발볼 넓은 한국 러너에게는 이 한 줄이 구매 결정을 바꾸는 변화입니다.</p>

<h3>2. 무게 268g → 250g ✅ 체감되는 18g 다이어트</h3>
<p>18g은 슈퍼트레이너 카테고리에서 무시 못 할 차이입니다. 업템포 훈련에서 발이 가볍게 떨어지는 감각이 좋아졌고, 그러면서 스택은 오히려 늘었으니(전족부 +2.7mm) "가벼운데 쿠션은 더"라는 좋은 방향입니다.</p>

<h3>3. 폼 개편 — PEBAX 상단 도입 ✅ 착지가 부드러워짐</h3>
<p>v3의 Nitro Foam + Nitro Elite는 "단단하고 직접적"이라는 평이었는데, v4는 <strong>상단을 PEBAX 100%로 깔아 착지 충격을 부드럽게 받고 하단 PEBA 블렌드가 밀어주는</strong> 구조입니다. 반응성 점수가 8→9로 오른 게 이 변화의 결과예요. 단단한 직결감을 좋아했다면 오히려 v3가 취향일 수도 있습니다.</p>

<h3>4. 드롭 10mm → 8mm ✅ 미드풋 전환 자연스러움</h3>
<p>드롭 2mm 감소. 미드풋~전방 착지 러너에게 더 자연스러운 전환을 줍니다. 다만 10mm 드롭에 익숙한 힐스트라이크 러너라면 종아리·아킬레스 부담이 살짝 늘 수 있어 초반 적응 기간이 필요합니다.</p>

<h3>5. 내구성 450km → 800km ✅ 가성비의 핵심</h3>
<p>이게 v4의 진짜 한 방입니다. v3의 450km는 카본 슈퍼트레이너치고도 아쉬운 수치였는데, v4는 <strong>800km로 거의 2배</strong>. 같은 정가 219,000원에서 km당 비용이 410원 → <strong>274원</strong>으로 떨어집니다. 엔돌핀 스피드 5(500km, 동일 가격)와 비교해도 300km를 더 굴릴 수 있다는 뜻이라 가성비 우위가 분명합니다.</p>

<h3>6. 어퍼 니트 → 엔지니어드 메쉬 ⚠️ 취향 갈림</h3>
<p>v3의 부드러운 니트 어퍼를 좋아했다면 v4의 엔지니어드 메쉬 + PWRTAPE는 약간 더 구조적이고 단단한 감각으로 느껴질 수 있습니다. 대신 지지력과 통기성은 v4가 낫고, 20% 재활용 소재가 들어가 여름 러닝에도 쾌적합니다(둘 다 여름 적합성 excellent).</p>

<h2>상황별 구매 결정 매트릭스</h2>

<table>
  <thead>
    <tr><th>본인 상황</th><th>추천</th><th>이유</th></tr>
  </thead>
  <tbody>
    <tr><td>발볼 표준~넓음 (한국 러너 평균)</td><td><strong>v4</strong></td><td>토박스 넓어짐 + 와이드 옵션, v3는 빡빡함</td></tr>
    <tr><td>발볼 좁음 + 세일 가성비 우선</td><td>v3 (세일 18만원대)</td><td>좁은 핏이 오히려 잘 맞고 가격 메리트 ↑</td></tr>
    <tr><td>업템포·템포런 주력 훈련화</td><td><strong>v4</strong></td><td>250g·반응성 9·800km 내구성으로 만능</td></tr>
    <tr><td>단단하고 직접적인 착지감 선호</td><td>v3</td><td>Nitro Foam 듀얼폼이 더 펌함</td></tr>
    <tr><td>오래 신고 가성비 극대화</td><td><strong>v4</strong></td><td>800km, km당 274원으로 카본 트레이너 최고 수준</td></tr>
    <tr><td>v3를 잘 쓰는 중 + 400km 이내</td><td>v3 계속</td><td>멀쩡하면 굳이 교체 불필요</td></tr>
    <tr><td>미드풋 착지 + 낮은 드롭 선호</td><td><strong>v4</strong></td><td>8mm 드롭이 더 자연스러움</td></tr>
    <tr><td>힐스트라이크 + 높은 드롭 익숙</td><td>v3 (또는 v4 적응 기간)</td><td>v3 10mm가 익숙한 전환감</td></tr>
    <tr><td>여러 켤레 운영 — 단단한 1켤레 추가</td><td>v3 (세일)</td><td>로테이션에 펌한 카본 트레이너 한 자리</td></tr>
  </tbody>
</table>

<h2>가격 시나리오 — v3 세일이 유일한 반전 카드</h2>

<div class="callout success">
  <span class="callout-icon">💰</span>
  <div class="callout-body">
    <p class="callout-title">219,000원 동일가 — 그래서 세일 타이밍이 전부</p>
    <ul>
      <li><strong>정가 기준:</strong> 둘 다 219,000원. 같은 값이면 무게·내구성·핏 모두 앞선 <strong>v4가 무조건 유리</strong></li>
      <li><strong>v3 세일가 (실측):</strong> 185,000원선까지 내려옴. 이전 세대라 시즌 오프·재고 정리에 더 떨어질 여지가 있어 <strong>16만원대까지 노려볼 만함</strong></li>
      <li><strong>v4 세일가:</strong> 190,000원선. 신상이라 아직 큰 폭 할인은 드뭄</li>
      <li><strong>분기점:</strong> v3가 v4보다 <strong>4~5만원 이상 싸지고, 본인 발볼이 표준~좁음</strong>이면 그때 v3가 합리적. 그 격차가 안 나면 v4를 사세요</li>
    </ul>
  </div>
</div>

<p><strong>가장 합리적인 액션:</strong></p>
<ul>
  <li><strong>발볼 넓음 / 와이드 필요:</strong> 고민 없이 v4. v3는 와이드 옵션이 없어 대안이 안 됨</li>
  <li><strong>발볼 좁음 + 예산 타이트:</strong> v3 세일 16~18만원대를 노리되, 270 신으면 반사이즈 업(275) 시착 필수</li>
  <li><strong>오래 굴릴 메인 훈련화 1켤레:</strong> 800km·km당 274원의 v4. 정가 주고 사도 결국 가장 쌉니다</li>
</ul>

<h2>한국 러너 부상별 권장</h2>

<table>
  <thead>
    <tr><th>부상·체형</th><th>추천</th><th>근거</th></tr>
  </thead>
  <tbody>
    <tr><td>발볼 넓음 / 평발</td><td><strong>v4</strong></td><td>넓어진 토박스 + 와이드 옵션, 평발 적합성 good</td></tr>
    <tr><td>무릎 통증 (러너스 니)</td><td>v3 = v4</td><td>둘 다 kneeIssues good, 힐 스택 37~38mm 충격 흡수</td></tr>
    <tr><td>아킬레스건염</td><td><strong>v4</strong></td><td>드롭 10→8mm로 아킬레스 부담 약간 ↓</td></tr>
    <tr><td>족저근막염</td><td>v3 = v4</td><td>둘 다 plantarFasciitis good</td></tr>
    <tr><td>정강이 부목 (Shin Splints)</td><td>v4 (소폭 우위)</td><td>둘 다 good, v4 전족 스택 +2.7mm</td></tr>
    <tr><td>과내전 (안정성 필요)</td><td>둘 다 한계 있음</td><td>안정성 7/10 — 심한 과내전은 안정화 별도 권장</td></tr>
  </tbody>
</table>

<p>두 신발 모두 안정성 점수는 7/10로 <strong>중립~약한 안정 영역</strong>입니다. 과내전이 심한 평발이라면 슈퍼트레이너보다 전용 안정화가 안전해요. 본인 발 특성에 맞는 후보는 <a href="/recommend">1분 러닝화 추천</a>에서 받을 수 있고, 발볼·무릎 관련 종합 가이드는 아래를 참고하세요.</p>
<ul>
  <li><a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 추천 신발 — 토박스 실측 정리</a></li>
  <li><a href="/blog/knee-pain-running-shoes">무릎 통증 러너 신발 가이드</a></li>
  <li><a href="/blog/pronation-type-running-shoe-guide-2026">프로네이션 타입별 러닝화 가이드 2026</a></li>
</ul>

<h2>비슷한 대안 — 같은 가격대 카본 슈퍼트레이너</h2>

<p>디비에이트 외에 검토할 만한 22만원대 슈퍼트레이너·템포화:</p>

<ul>
  <li><a href="/shoes/puma-deviate-nitro-4">푸마 디비에이트 나이트로 4</a> — 이 글의 주인공. 250g·800km·와이드 옵션 슈퍼트레이너</li>
  <li><a href="/shoes/puma-deviate-nitro-3">푸마 디비에이트 나이트로 3</a> — 세일 18만원대, 발볼 좁은 러너의 가성비 카드</li>
  <li><a href="/shoes/saucony-endorphin-speed-5">사코니 엔돌핀 스피드 5</a> — 동일 219,000원, 나일론 플레이트의 부드러운 추진(내구성 500km)</li>
  <li><a href="/shoes/asics-superblast-2">아식스 슈퍼블라스트 2</a> — 무플레이트 맥시멀 슈퍼트레이너, 장거리 쿠션 최강</li>
  <li><a href="/shoes/hoka-mach-x-3">호카 마하 X 3</a> — PEBA + 플레이트, 269,000원대 업템포 트레이너</li>
  <li><a href="/shoes/nike-zoom-fly-6">나이키 줌 플라이 6</a> — ZoomX + 풀카본, 레이스 연습용 트레이너</li>
  <li><a href="/shoes/nike-vomero-18">나이키 보메로 18</a> — 무플레이트 맥시멀 쿠션(데일리 회복런 분리용)</li>
</ul>

<h2>FAQ</h2>

<h3>Q. v3 → v4 업그레이드, 돈 값 하나요?</h3>
<p>v3가 400km 이내로 멀쩡하고 발에 잘 맞으면 그냥 끝까지 신으세요. 다만 <strong>v3의 좁은 핏 때문에 불편했거나 내구성이 아쉬웠다면 v4는 명확한 업그레이드</strong>입니다. 같은 219,000원에 무게·내구성·핏·드롭이 다 좋아졌으니, 새로 사는 입장이면 v4가 정답에 가깝습니다.</p>

<h3>Q. 발볼 넓은데 v3 사도 되나요?</h3>
<p>권하지 않습니다. v3는 "좁음~표준"에 와이드 옵션이 없어요. 실사용 후기도 "270 신는데 반사이즈 업 권장"이 많습니다. <strong>발볼 넓으면 v4(표준 토박스 넓어짐 + 와이드 옵션)</strong>가 맞습니다. 굳이 v3를 세일로 잡는다면 반드시 반사이즈 업으로 시착하세요. <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 가이드 →</a></p>

<h3>Q. v4가 v3보다 부드러운가요, 단단한가요?</h3>
<p>v4가 더 부드럽습니다. 상단 PEBAX 100% 폼이 착지 충격을 받아줘서 첫 접지가 말랑해졌어요. 반대로 <strong>v3의 단단하고 직접적인 펌한 감각</strong>을 좋아하는 러너도 있습니다. "통통 튀는 직결감"이 취향이면 v3, "부드럽게 받고 밀어주는 느낌"이면 v4입니다.</p>

<h3>Q. 둘 다 풀코스 레이스에 쓸 수 있나요?</h3>
<p>가능은 하지만, 둘 다 <strong>레이스 본선용 카본 레이서가 아니라 슈퍼트레이너</strong>입니다. 최적 페이스가 4:00~5:30/km로 동일하고, 업템포·템포·하프 페이스 훈련에 최적화돼 있어요. Sub-3:30 이하 풀코스 PR 도전이라면 디비에이트 나이트로 엘리트나 전용 카본 레이서를 따로 두는 게 맞습니다. <a href="/blog/carbon-plate-shoes-comparison-2025">카본 플레이트화 비교 →</a></p>

<h3>Q. 입문 러너가 첫 신발로 사도 되나요?</h3>
<p>비추천입니다. 카본(합성) 플레이트 슈퍼트레이너는 종아리·발목 근육에 부하가 큽니다. 두 신발 모두 targetUsers에서 입문 러너는 비추천으로 분류돼 있어요. <strong>입문이라면 중립 데일리 트레이너로 기초 체력을 쌓은 뒤</strong> 슈퍼트레이너로 넘어오세요. <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 고르는 법 2026 →</a></p>

<h2>결론 — 내 추천</h2>

<div class="callout success">
  <span class="callout-icon">🎯</span>
  <div class="callout-body">
    <p class="callout-title">같은 값이면 v4, v3는 "발볼 좁음 + 세일"일 때만</p>
    <p><strong>발볼 표준~넓음·업템포 훈련용·오래 굴릴 메인 1켤레</strong>라면 <a href="/shoes/puma-deviate-nitro-4">디비에이트 나이트로 4</a>입니다. 같은 219,000원에 무게 250g·드롭 8mm·내구성 800km·와이드 옵션까지, v3의 약점을 거의 다 메웠습니다. km당 274원이면 카본 슈퍼트레이너 가성비 최상위권이에요.</p>
    <p><strong>발볼이 좁은 편 + 단단한 직결감 선호 + 세일 16~18만원대로 잡을 수 있다면</strong> <a href="/shoes/puma-deviate-nitro-3">디비에이트 나이트로 3</a>도 여전히 합리적입니다. 단 발볼 넓으면 절대 무리하지 말고 반사이즈 업 시착부터 하세요.</p>
    <p><strong>둘 다 처음이고 발볼이 애매하다면</strong> 매장에서 v4 표준 + 와이드를 동시 시착해 토박스 여유를 직접 확인하는 게 가장 정확합니다. v3는 세일가가 충분히 안 떨어졌다면 굳이 고를 이유가 없어요.</p>
  </div>
</div>

<div class="affiliate-cta">
  <p class="affiliate-cta-label">바로 확인</p>
  <div class="affiliate-cta-buttons">
    <a href="/shoes/puma-deviate-nitro-4" class="affiliate-btn pending">
      <span class="affiliate-btn-store">상세</span>
      <span class="affiliate-btn-product">디비에이트 나이트로 4 상세 →</span>
    </a>
    <a href="/shoes/puma-deviate-nitro-3" class="affiliate-btn pending">
      <span class="affiliate-btn-store">상세</span>
      <span class="affiliate-btn-product">디비에이트 나이트로 3 상세 →</span>
    </a>
  </div>
  <p class="affiliate-disclosure">광고 표기: 일부 링크는 제휴 수수료를 받을 수 있습니다.</p>
</div>

<h2>다른 세대 비교</h2>

<p>디비에이트가 "가성비 카본 슈퍼트레이너"라면, 데일리·쿠션·안정 카테고리는 또 다른 신발이 답입니다. 함께 발행된 최신 세대 비교 + 슈퍼트레이너 라인업 비교를 함께 보세요.</p>

<ul>
  <li><a href="/blog/adidas-supernova-rise-2-vs-3-comparison">아디다스 슈퍼노바 라이즈 2 vs 3 — 가성비 데일리 쿠션화 세대 비교</a></li>
  <li><a href="/blog/brooks-glycerin-max-1-vs-2-comparison">브룩스 글리세린 맥스 vs 맥스 2 — 맥시멀 쿠션화 세대 비교</a></li>
  <li><a href="/blog/mizuno-wave-rebellion-flash-2-vs-3-comparison">미즈노 웨이브 리벨리온 플래시 2 vs 3 — 가성비 레이서 세대 비교</a></li>
  <li><a href="/blog/asics-superblast-2-vs-3-comparison">슈퍼블라스트 2 vs 3 — 무플레이트 슈퍼트레이너 세대 비교</a></li>
  <li><a href="/blog/saucony-endorphin-pro-4-vs-5-comparison">엔돌핀 프로 4 vs 5 — 가성비 카본 레이서 세대 비교</a></li>
</ul>

<h2>관련 글</h2>

<ul>
  <li><a href="/blog/carbon-plate-shoes-comparison-2025">카본 플레이트 러닝화 비교 2025 — 에너지 리턴과 입문자 주의</a></li>
  <li><a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 추천 신발 — 토박스 실측 정리</a></li>
  <li><a href="/blog/knee-pain-running-shoes">무릎 통증 러너 신발 가이드</a></li>
  <li><a href="/blog/first-running-shoe-guide-2026">첫 러닝화 고르는 법 2026</a></li>
  <li><a href="/compare">신발 직접 비교하기 — 스펙 나란히 보기</a></li>
</ul>

<p><small>출처: 푸마 글로벌 공식 발표(디비에이트 나이트로 4 변경점) / RunRepeat·Believe in the Run 디비에이트 나이트로 3·4 리뷰 / allrunabout.com DB(2026-06-10 기준). 두 모델 모두 SA·HA·에너지 리턴 등 랩 수치는 DB에 미수록 상태로, 본 글은 스택·드롭·무게·가격·내구성·스펙 점수(1-10) 등 확정 수치로만 비교했습니다. 일부 수치는 공식 발표·전작 기준 추정이며, 추가 실측 데이터 게시 시 업데이트 예정.</small></p>
`,
  },
  {
    id: 'brooks-glycerin-max-1-vs-2-comparison',
    slug: 'brooks-glycerin-max-1-vs-2-comparison',
    title: '브룩스 글리세린 맥스 vs 글리세린 맥스 2 비교 | 42mm→47mm 스택 +1만원, "구름 푹신" vs "단단한 로커" — 무릎·평발 한국 러너는 어느 세대?',
    description: '글리세린 맥스(239,000원·305g·42mm)와 맥스 2(249,000원·312g·47mm) 맥시멀 쿠션화 세대 비교. 스택 +5mm·로커 강화 대신 폼이 단단해지고 토박스가 좁아진 변화. 무릎 보호·평발·발볼·세일 타이밍까지 부상별 매트릭스로 정리.',
    thumbnail: '/images/shoes/brooks/glycerinmax2/side.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-10',
    category: 'review' as const,
    readingTime: 12,
    tags: ['브룩스 글리세린 맥스', '글리세린 맥스', '글리세린 맥스 2', '맥시멀 쿠션화', 'DNA Tuned', '무릎 보호 러닝화', '리커버리화', '쿠션화 비교', '평발 러닝화', '브룩스'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>맥스 2는 스택을 키운 대신 부드러움을 버렸습니다</strong> — 힐 42→47mm(+5mm)로 충격흡수는 더 올라갔지만, DNA Tuned 폼이 단단해져 v1의 "구름 위를 걷는" 푹신함이 후퇴. 강화된 로커로 굴러가는 전환은 매끄러워짐</li>
    <li>피팅 철학이 정반대: <strong>v1 = 넓은 토박스(wide·74.3mm)로 발볼 넓은 러너 환영</strong>, <strong>맥스 2 = 스너그 피팅(standard)으로 안정성↑ 대신 반 사이즈 업 필요</strong></li>
    <li>가격 차 1만원(239,000 vs 249,000원). 무릎 보호는 둘 다 최정상이지만 <strong>발볼 넓은·평발 한국 러너에겐 v1이, 흔들림 잡힌 안정적인 맥시멀을 원하면 맥스 2가</strong> 답. 둘 다 리커버리·이지런 전용</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🛋️</span>
  <div class="callout-body">
    <p class="callout-title">이 글의 맥락 — "맥시멀 쿠션화 세대 차이"를 찾는 러너를 위해</p>
    <p>글리세린 맥스 라인은 브룩스가 호카 본디·아식스 님버스에 정면으로 던진 <strong>맥시멀 쿠션 탱크</strong>입니다. v1과 맥스 2를 두고 "뭐가 달라졌나", "어느 걸 사야 하나" 고민하는 분이 많아 두 세대를 데이터로 직접 붙였습니다. 결론부터 말하면 <strong>업그레이드가 곧 정답은 아닙니다</strong> — 스택은 커졌지만 v1의 강점(푹신함·넓은 토박스)이 일부 사라졌기 때문이죠. 본인 발볼·무릎 상태·가격대로 어느 세대가 맞는지 끝까지 정리해드립니다.</p>
  </div>
</div>

<h2>한눈에 비교</h2>

<table>
  <thead>
    <tr><th>항목</th><th>글리세린 맥스 (v1)</th><th>글리세린 맥스 2</th><th>차이</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>카테고리</strong></td><td>쿠션화 (맥시멀)</td><td>쿠션화 (맥시멀)</td><td>동일</td></tr>
    <tr><td><strong>MSRP (한국)</strong></td><td>239,000원</td><td><strong>249,000원</strong></td><td>+10,000원</td></tr>
    <tr><td><strong>무게 (US M9)</strong></td><td>305g</td><td><strong>312g</strong></td><td>+7g (스택 증가분)</td></tr>
    <tr><td><strong>힐 스택</strong></td><td>42mm (랩 42.3)</td><td><strong>47mm</strong></td><td>+5mm</td></tr>
    <tr><td><strong>전족부 스택</strong></td><td>36mm (랩 35.7)</td><td><strong>41mm</strong></td><td>+5mm</td></tr>
    <tr><td><strong>드롭</strong></td><td>7mm (랩 6.6)</td><td>6mm</td><td>-1mm (사실상 동일)</td></tr>
    <tr><td><strong>미드솔 폼</strong></td><td>DNA Tuned</td><td>DNA Tuned (질소 주입, 단단해짐)</td><td>경도 ↑ ("재미" ↓)</td></tr>
    <tr><td><strong>지오메트리</strong></td><td>기본 로커</td><td><strong>강화된 로커</strong></td><td>전환 매끄러움 ↑</td></tr>
    <tr><td><strong>쿠션 점수</strong></td><td>10/10</td><td>10/10</td><td>동일 (둘 다 최상)</td></tr>
    <tr><td><strong>반응성 점수</strong></td><td>5/10</td><td><strong>4/10</strong></td><td>-1 (폼 경화)</td></tr>
    <tr><td><strong>안정성 점수</strong></td><td>6/10</td><td><strong>7/10</strong></td><td>+1 (로커+스너그 핏)</td></tr>
    <tr><td><strong>내구성</strong></td><td>700km</td><td><strong>600km</strong></td><td>-100km</td></tr>
    <tr><td><strong>km당 비용</strong></td><td>341원</td><td><strong>415원</strong></td><td>+74원/km</td></tr>
    <tr><td><strong>아웃솔</strong></td><td>러버 아웃솔</td><td>러버 아웃솔</td><td>동일</td></tr>
    <tr><td><strong>어퍼</strong></td><td>엔지니어드 메쉬</td><td><strong>트리플 자카드 메쉬</strong> (스너그)</td><td>피팅 타이트 ↑</td></tr>
    <tr><td><strong>토박스</strong></td><td><strong>와이드 (74.3mm)</strong></td><td>표준 (반 사이즈 업 권장)</td><td>좁아짐 ⚠️</td></tr>
    <tr><td><strong>와이드 옵션</strong></td><td>있음</td><td>있음</td><td>동일</td></tr>
    <tr><td><strong>평발 호환</strong></td><td>excellent</td><td>good</td><td>v1 우위</td></tr>
  </tbody>
</table>

<p><strong>한 줄 정리:</strong> 맥스 2는 "더 높은 스택 + 더 안정적인 라이드"를 얻는 대신 "푹신함 + 넓은 토박스 + 100km 내구성"을 내줬습니다. 단순 상위호환이 아니라 <strong>성격이 다른 형제</strong>예요.</p>

<h2>핵심 변화 — "구름 푹신" vs "단단한 로커"</h2>

<p>v1과 맥스 2의 가장 중요한 차이는 스택 5mm가 아니라 <strong>맥시멀 쿠션을 구현하는 감각 자체</strong>가 바뀌었다는 점입니다.</p>

<div class="callout warning">
  <span class="callout-icon">🔄</span>
  <div class="callout-body">
    <p class="callout-title">부드러운 침몰 vs 단단한 굴림 — 맥시멀 쿠션의 두 갈래</p>
    <table>
      <thead>
        <tr><th></th><th>v1 — DNA Tuned (구)</th><th>맥스 2 — DNA Tuned 강화 로커 (신)</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>감각</strong></td><td>발이 폼 속으로 푹 가라앉는 "구름 위를 걷는" 느낌</td><td>로커가 발을 앞으로 굴려주는 "스무스 라이드" 느낌</td></tr>
        <tr><td><strong>폼 경도</strong></td><td>더 부드러움 (리커버리 핵심인 푹신함)</td><td>단단해짐 — 안정성↑이지만 푹신함 후퇴</td></tr>
        <tr><td><strong>장점</strong></td><td>착지 충격 즉시 흡수, 무릎·관절 보호 체감 1위</td><td>높은 스택에도 흔들림 적고 전환 매끄러움</td></tr>
        <tr><td><strong>단점</strong></td><td>고스택 특유의 좌우 흔들림 (안정성 6/10)</td><td>"감동적 푹신함"이 사라져 v1 팬이 아쉬워함</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p>이건 최근 맥시멀 쿠션화 전체의 흐름과 같습니다 — 호카 본디 9, NB 1080 v15도 "그냥 푹신"에서 "푹신하면서 안정적으로 굴러가는" 방향으로 진화 중이죠. 맥스 2는 그 트렌드를 정확히 따라갔지만, 그 대가로 v1의 정체성이었던 부드러움 일부를 내줬습니다.</p>

<h2>5가지 핵심 변화 점검</h2>

<h3>1. 힐 스택 42→47mm ✅ 충격흡수 더 올라감</h3>
<p>전족부도 36→41mm로 같이 +5mm. 본디 9(약 40mm)보다도 높은 <strong>현존 최상위급 스택</strong>입니다. 체중 있는 러너, 퇴행성 관절 초기, 무릎 부상 복귀 러너에게 착지 충격 흡수는 v1보다 한 단계 더 위. 다만 스택이 높아질수록 빠른 페이스는 더 답답해지니 "오로지 보호 우선"일 때 의미 있는 변화예요.</p>

<h3>2. DNA Tuned 폼 경화 ⚠️ "구름 푹신함" 후퇴</h3>
<p>맥스 2의 가장 논쟁적인 변화. v1을 아꼈던 러너들이 "v2가 단단해져서 구름 위를 걷는 느낌이 사라졌다"고 입을 모읍니다. 반응성 점수도 5→4로 한 칸 내려갔죠. <strong>리커버리 슈즈의 핵심인 "푹신함"을 최우선으로 본다면 이건 다운그레이드</strong>로 느껴질 수 있습니다. 반대로 "v1은 너무 물렁해서 불안했다"면 환영할 변화.</p>

<h3>3. 강화된 로커 + 스너그 피팅 ✅ 안정성 6→7</h3>
<p>로커(밑창 앞쪽 곡선)가 강화돼 47mm 고스택에도 발이 앞으로 자연스럽게 굴러갑니다. 어퍼가 트리플 자카드 메쉬로 발을 더 단단히 감싸 좌우 흔들림이 줄었어요. 고스택 맥시멀화의 고질병인 "흔들거림"을 잡은 건 분명한 개선입니다.</p>

<h3>4. 토박스 wide→standard ⚠️ 발볼 넓은 한국 러너 주의</h3>
<p>이게 한국 러너에게 가장 체감되는 변화일 수 있습니다. v1은 토박스 74.3mm <strong>와이드</strong>라 별도 와이드 모델 없이도 발볼 넓은 발이 편했는데, 맥스 2는 스너그 피팅으로 바뀌어 <strong>표준(standard)</strong>이 됐습니다. 실사용 후기에서도 "와이드 275mm인데 핏이 꽉 맞아 반 사이즈 업 추천"이 반복돼요. 발볼 넓다면 맥스 2는 반드시 시착하거나 와이드 옵션 + 반 사이즈 업을 고려하세요. <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 신발 가이드 →</a></p>

<h3>5. 내구성 700→600km ⚠️ km당 비용 상승</h3>
<p>내구성이 100km 줄고 가격은 1만원 올라, km당 비용이 341원→415원으로 꽤 뜁니다. 가성비만 보면 v1이 분명 위. 맥스 2의 +1만원은 "더 높은 스택 + 더 안정적인 라이드"에 지불하는 값이라고 보면 됩니다.</p>

<h2>상황별 구매 결정 매트릭스</h2>

<table>
  <thead>
    <tr><th>본인 상황</th><th>추천</th><th>이유</th></tr>
  </thead>
  <tbody>
    <tr><td>발볼 넓음 (EE 이상) + 와이드 없이 편하게</td><td><strong>v1</strong></td><td>토박스 74.3mm 와이드, 맥스 2는 standard로 좁아짐</td></tr>
    <tr><td>평발 + 맥시멀 쿠션</td><td><strong>v1</strong></td><td>평발 호환 excellent (맥스 2는 good)</td></tr>
    <tr><td>"구름 위를 걷는" 부드러움 우선</td><td><strong>v1</strong></td><td>맥스 2는 폼 단단해져 푹신함 후퇴</td></tr>
    <tr><td>가성비 우선 (km당 비용)</td><td><strong>v1</strong></td><td>700km·341원/km vs 600km·415원/km</td></tr>
    <tr><td>고스택 흔들림이 싫고 안정적 라이드</td><td><strong>맥스 2</strong></td><td>강화 로커 + 스너그 핏, 안정성 7/10</td></tr>
    <tr><td>최대 스택 = 최대 충격흡수가 목표</td><td><strong>맥스 2</strong></td><td>힐 47mm로 +5mm 더 높음</td></tr>
    <tr><td>무릎 부상 복귀 / 퇴행성 관절 초기</td><td>둘 다 excellent</td><td>kneeIssues 둘 다 최상, 발볼로 선택</td></tr>
    <tr><td>v1 사용 중 + 500km 이내 멀쩡</td><td><strong>v1 계속</strong></td><td>맥스 2 업그레이드 가치 미미, 토박스만 손해</td></tr>
    <tr><td>빠른 템포·인터벌 겸용</td><td>둘 다 비권장</td><td>312g·반응성 4~5, 리커버리 전용. 템포는 하이페리온 맥스</td></tr>
  </tbody>
</table>

<h2>가격 시나리오 — v1 세일 타이밍이 핵심</h2>

<div class="callout success">
  <span class="callout-icon">💰</span>
  <div class="callout-body">
    <p class="callout-title">맥스 2 출시 이후 v1 가격 흐름</p>
    <ul>
      <li><strong>지금:</strong> v1 정가 239,000원 / 맥스 2 정가 249,000원 — 정가 차이는 1만원뿐이라 정가 구매 시 고민 가치 적음</li>
      <li><strong>맥스 2 본격 유통기:</strong> v1이 이월 재고로 풀리며 직영·공식몰에서 인하 시작 — 17~19만원대 진입 가능</li>
      <li><strong>시즌 오프·블프:</strong> v1 15~17만원대 가능 — 발볼 넓고 푹신함 원하는 러너에겐 v1 세일이 최강 가성비</li>
      <li><strong>재고 소진기:</strong> v1 와이드·인기 사이즈부터 먼저 빠짐. 발볼 넓다면 세일 초기에 본인 사이즈 확보가 안전</li>
    </ul>
  </div>
</div>

<p><strong>가장 합리적 액션:</strong></p>
<ul>
  <li><strong>발볼 넓음·평발·푹신함 우선:</strong> v1 세일을 노리세요. 맥스 2의 standard 토박스보다 v1 와이드 토박스가 훨씬 편하고, 세일가까지 더해지면 만족도가 압도적입니다. 단 와이드 사이즈는 먼저 품절되니 세일 초기 진입</li>
  <li><strong>안정적 고스택 라이드 우선:</strong> 맥스 2 정가도 +1만원이라 부담 적음. 흔들림 잡힌 47mm 맥시멀이 목적이면 바로 가도 됩니다</li>
  <li><strong>둘 다 처음 + 리커버리 1켤레:</strong> 매장에서 v1·맥스 2 같이 시착. 발이 폼 속으로 가라앉는 v1과 로커로 굴러가는 맥스 2의 감각 차를 즉시 비교 가능</li>
</ul>

<h2>한국 러너 부상별 권장</h2>

<table>
  <thead>
    <tr><th>부상·체형</th><th>추천</th><th>근거</th></tr>
  </thead>
  <tbody>
    <tr><td>무릎 통증 (러너스 니, 연골연화)</td><td>v1 = 맥스 2</td><td>kneeIssues 둘 다 excellent, 발볼로 선택</td></tr>
    <tr><td>족저근막염</td><td>v1 = 맥스 2</td><td>둘 다 excellent, 고스택 충격흡수</td></tr>
    <tr><td>아킬레스건염</td><td>v1 = 맥스 2</td><td>드롭 6~7mm 유사, 둘 다 excellent</td></tr>
    <tr><td>정강이 부목 (Shin Splints)</td><td>맥스 2 약간 우위</td><td>둘 다 excellent, 47mm 스택이 충격 더 흡수</td></tr>
    <tr><td>평발 + 과내전 약함</td><td><strong>v1</strong></td><td>평발 호환 excellent + 와이드 토박스</td></tr>
    <tr><td>발볼 넓음 + 압박 싫음</td><td><strong>v1</strong></td><td>토박스 74.3mm, 맥스 2는 스너그</td></tr>
    <tr><td>심한 과내전·발목 무너짐</td><td>둘 다 부적합</td><td>안정화 아님. <a href="/shoes/brooks-glycerin-gts-22">글리세린 GTS 22</a> 같은 안정화 권장</td></tr>
  </tbody>
</table>

<p>주의: 글리세린 맥스 시리즈는 <strong>중립~경도 평발용 쿠션화</strong>지 안정화가 아닙니다. 발목이 안쪽으로 심하게 무너지는 과내전이라면 GuideRails가 들어간 안정화가 맞아요. 본인 보행 타입이 헷갈리면 <a href="/blog/pronation-type-running-shoe-guide-2026">프로네이션 타입별 러닝화 가이드 →</a>를 먼저 확인하세요. 무릎 통증 종합 정리는 <a href="/blog/knee-pain-running-shoes">무릎 통증 러너 신발 가이드 →</a>.</p>

<h2>비슷한 맥시멀 쿠션 대안</h2>

<p>글리세린 맥스 외 맥시멀 쿠션화 옵션도 비교 가치가 있습니다:</p>

<ul>
  <li><a href="/shoes/brooks-glycerin-max">브룩스 글리세린 맥스 (v1)</a> — 와이드 토박스 + 푹신함, 발볼 넓은 한국 러너 1순위</li>
  <li><a href="/shoes/brooks-glycerin-max-2">브룩스 글리세린 맥스 2</a> — 47mm 최대 스택 + 강화 로커, 안정적 맥시멀</li>
  <li><a href="/shoes/hoka-bondi-9">호카 본디 9</a> — 맥시멀 쿠션의 대명사. 글리세린 맥스보다 스택은 낮지만 검증된 라인</li>
  <li><a href="/shoes/asics-gel-nimbus-28">아식스 님버스 28</a> — FF Blast Max 부드러운 쿠션 + 통기성. 데일리 겸용 가능</li>
  <li><a href="/shoes/new-balance-1080-v15">NB 1080 v15</a> — 부드러운 쿠션 + 표준~넓은 핏, 맥시멀보다 가벼운 장거리화</li>
  <li><a href="/shoes/brooks-ghost-max-3">브룩스 고스트 맥스 3</a> — 글리세린 맥스보다 저렴한 로커형 맥스 쿠션화</li>
</ul>

<p>본인 발 특성·부상 이력에 맞춘 후보는 <a href="/recommend">1분 러닝화 추천</a>에서 받을 수 있고, 두 신발 스펙을 직접 나란히 보려면 <a href="/compare">비교 도구</a>를 써보세요.</p>

<h2>FAQ</h2>

<h3>Q. v1 → 맥스 2 업그레이드 가치 있나요?</h3>
<p>v1이 500km 이내 멀쩡하다면 그냥 굴리세요. <strong>특히 발볼 넓거나 v1의 푹신함을 좋아했다면 맥스 2로 갈 이유가 거의 없습니다</strong> — 토박스는 좁아지고 폼은 단단해졌으니까요. "v1이 너무 물렁해서 흔들렸다"고 느꼈던 러너만 맥스 2의 안정적인 로커가 답입니다.</p>

<h3>Q. 발볼 넓은데 맥스 2 괜찮나요?</h3>
<p>주의가 필요합니다. 맥스 2는 v1의 와이드 토박스(74.3mm)에서 standard로 좁아졌고 스너그 피팅이라 <strong>실사용자들이 "반 사이즈 업"을 반복 권장</strong>합니다. 발볼 넓다면 ① v1 와이드 토박스를 노리거나 ② 맥스 2 와이드 옵션 + 반 사이즈 업을 시착 후 결정하세요.</p>

<h3>Q. 둘 다 빠르게 달릴 수 있나요?</h3>
<p>아니요. 둘 다 <strong>리커버리·이지런 전용</strong>입니다. v1 305g·반응성 5, 맥스 2 312g·반응성 4로 6분/km 이상 느린 조깅에 최적화됐어요. 템포·인터벌을 겸하려면 <a href="/shoes/brooks-hyperion-max-3">하이페리온 맥스 3</a> 같은 슈퍼트레이너를 따로 두는 게 맞습니다.</p>

<h3>Q. 무릎이 안 좋은데 어느 쪽이 더 좋나요?</h3>
<p>둘 다 무릎 보호 excellent 등급이라 우열을 가리기 어렵습니다. 순수 충격흡수만 보면 47mm 맥스 2가 한 칸 위지만, <strong>실제 차이는 발볼·푹신함 취향에서 갈립니다</strong>. 발볼 넓고 부드러운 게 좋으면 v1, 흔들림 없는 안정적 착지가 좋으면 맥스 2. 무릎 부상 복귀라면 매장 시착으로 본인 발에 맞는 쪽을 고르세요.</p>

<h3>Q. 본디 9 대신 글리세린 맥스를 사야 하나요?</h3>
<p>스택만 보면 글리세린 맥스(42mm)·맥스 2(47mm)가 본디 9보다 높습니다. 다만 본디는 호카 특유의 로커와 검증된 라인이라는 강점이 있어요. <strong>발볼 넓으면 글리세린 v1(와이드 토박스), 검증된 안정감과 무난한 핏을 원하면 본디 9</strong>가 합리적입니다.</p>

<h2>결론 — 내 추천</h2>

<div class="callout success">
  <span class="callout-icon">🎯</span>
  <div class="callout-body">
    <p class="callout-title">발볼 넓은 한국 러너 다수에겐 v1 세일이 정답</p>
    <p><strong>발볼 넓음·평발·푹신함 우선</strong>이라면 <a href="/shoes/brooks-glycerin-max">글리세린 맥스 v1</a>을 세일 시점에 잡는 게 합리적. 와이드 토박스(74.3mm)·평발 excellent·700km 내구성·341원/km까지, 맥시멀 쿠션화에서 한국 러너가 실패할 확률이 가장 낮은 선택입니다.</p>
    <p><strong>고스택 흔들림이 싫고 안정적으로 굴러가는 라이드 + 최대 충격흡수</strong>가 목표라면 <a href="/shoes/brooks-glycerin-max-2">글리세린 맥스 2</a>. 47mm 스택·강화 로커·스너그 피팅이 47mm 고스택의 불안을 잡아줍니다. 단 발볼 넓다면 반 사이즈 업은 필수.</p>
    <p><strong>둘 다 처음 + 리커버리 1켤레</strong>라면 매장에서 동시 시착이 가장 정확. "발이 폼에 가라앉는" v1과 "로커로 굴러가는" 맥스 2 중 본인 발이 어느 감각을 편해하는지 바로 알 수 있습니다.</p>
  </div>
</div>

<div class="affiliate-cta">
  <p class="affiliate-cta-label">바로 보기</p>
  <div class="affiliate-cta-buttons">
    <a href="/shoes/brooks-glycerin-max-2" class="affiliate-btn pending">
      <span class="affiliate-btn-store">상세</span>
      <span class="affiliate-btn-product">글리세린 맥스 2 상세 →</span>
    </a>
    <a href="/shoes/brooks-glycerin-max" class="affiliate-btn pending">
      <span class="affiliate-btn-store">상세</span>
      <span class="affiliate-btn-product">글리세린 맥스 상세 →</span>
    </a>
  </div>
  <p class="affiliate-disclosure">광고 표기: 일부 링크는 제휴 수수료를 받을 수 있습니다.</p>
</div>

<h2>다른 세대 비교</h2>

<p>글리세린 맥스가 "리커버리·맥시멀 쿠션"이라면, 데일리·장거리·레이스 카테고리는 다른 신발이 답입니다. 빠른 페이스 훈련엔 맥시멀 쿠션화 대신 가벼운 데일리·슈퍼트레이너 분리가 권장돼요.</p>

<ul>
  <li><a href="/blog/adidas-supernova-rise-2-vs-3-comparison">아디다스 슈퍼노바 라이즈 2 vs 3 — 데일리 트레이너 세대 비교</a> (가성비 데일리 쿠션화)</li>
  <li><a href="/blog/puma-deviate-nitro-3-vs-4-comparison">푸마 디비에이트 나이트로 3 vs 4 — 데일리/템포 플레이트화 비교</a> (반발력 겸용 데일리)</li>
  <li><a href="/blog/mizuno-wave-rebellion-flash-2-vs-3-comparison">미즈노 웨이브 리벨리온 플래시 2 vs 3 — 슈퍼트레이너 비교</a> (페이스 훈련 분리용)</li>
  <li><a href="/blog/new-balance-1080-v14-vs-v15-comparison">NB 1080 v14 vs v15 — 쿠션화 세대 비교</a> (장거리 + 부드러움 우선 중립화)</li>
  <li><a href="/blog/asics-kayano-32-vs-33-comparison">카야노 32 vs 33 — 안정화 세대 비교</a> (평발·과내전 안정화)</li>
</ul>

<h2>관련 글</h2>

<ul>
  <li><a href="/blog/knee-pain-running-shoes">무릎 통증 러너 신발 가이드 — 충격흡수·스택 기준 정리</a></li>
  <li><a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 추천 신발 — 토박스 실측 정리</a></li>
  <li><a href="/blog/pronation-type-running-shoe-guide-2026">프로네이션 타입별 러닝화 가이드 2026</a></li>
  <li><a href="/blog/first-running-shoe-guide-2026">첫 러닝화 고르는 법 2026 — 쿠션화 vs 안정화 선택</a></li>
  <li><a href="/blog/carbon-plate-shoes-comparison-2025">카본 플레이트 슈즈 비교 2025 — 레이스용 분리 가이드</a></li>
</ul>

<p><small>출처: 브룩스 공식 발표(글리세린 맥스 / 글리세린 맥스 2 스펙·미드솔·로커 변경점) / RunRepeat·Believe in the Run 글리세린 맥스 v1 랩 데이터(힐 42.3mm·전족 35.7mm·드롭 6.6mm·SA 148·에너지 리턴 52%·토박스 74.3mm) / allrunabout DB 기준일 2026-06-10. 글리세린 맥스 2는 v1 대비 일부 랩 수치(SA·HA·에너지 리턴%)가 미게시 상태로, 본 글의 해당 수치는 공식 발표 변경점(스택 47/41mm·드롭 6mm·DNA Tuned 경화·강화 로커) + 전작 v1 기준 추정입니다. 맥스 2 실측 데이터 게시 시 본 글 업데이트 예정.</small></p>
`,
  },
  {
    id: 'mizuno-wave-rebellion-flash-2-vs-3-comparison',
    slug: 'mizuno-wave-rebellion-flash-2-vs-3-comparison',
    title: '미즈노 웨이브 리벨리온 플래시 2 vs 플래시 3 비교 | PEBA→TPEE 듀얼폼 전환·드롭 그대로, 미드풋 템포 트레이너 세대 차이 총정리',
    description: '미즈노 웨이브 리벨리온 플래시 2(189,000원)와 플래시 3(199,000원) 세대 비교. 상단 폼 PEBA→ENERZY XP(TPEE) 교체, 스택 35.2→37.5mm, 반응성 7→8 개선이 핵심. 3mm 저드롭 미드풋 템포 트레이너, 부상별·세일별 구매 매트릭스.',
    thumbnail: '/images/shoes/mizuno/waverebellionflash3/side.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-10',
    category: 'review' as const,
    readingTime: 12,
    tags: ['미즈노', '웨이브 리벨리온 플래시 2', '웨이브 리벨리온 플래시 3', '슈퍼트레이너 비교', '템포 트레이너', 'ENERZY XP', '미드풋 착지', '저드롭', '레이싱', '세대 비교'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>핵심 변화는 상단 폼</strong> — 2의 Enerzy Lite+(PEBA) 단일 감성에서, 3은 <strong>ENERZY XP(TPEE) 상단 + ENERZY NXT(EVA) 하단</strong> 듀얼 구조로 바뀌어 착지는 더 부드럽고 푸시오프는 더 탄력 있게 재설계됐습니다.</li>
    <li>스택 35.2→37.5mm, 반응성 점수 7→8로 상승. 단 <strong>3mm 저드롭·미드풋 착지 전용</strong>이라는 정체성은 그대로 — 둘 다 힐스트라이커·과내전 입문자에겐 비추입니다.</li>
    <li>MSRP는 189,000원 → 199,000원(+1만원). 두 신발 모두 와이드 옵션이 없어 발볼 넓은 한국 러너는 반 사이즈 업 또는 매장 시착이 필수입니다.</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">왜 이 비교가 필요한가 — 미즈노 템포 라인의 애매한 포지션</p>
    <p>웨이브 리벨리온 플래시는 미즈노의 "슈퍼트레이너/템포 트레이너" 계보입니다. 카본 슈즈만큼 비싸지도, 데일리만큼 무르지도 않은 <strong>'레이스데이 겸 템포런' 중간 영역</strong>이죠. 플래시 2를 잘 쓰던 러너가 "3으로 넘어갈 가치가 있나?", 플래시 3 신상을 보고 온 러너가 "굳이 신상 풀가를 줄까 아니면 2 세일을 노릴까?" — 이 두 질문에 데이터로 답하는 글입니다. 두 모델 다 미즈노 특유의 <strong>극단적 힐 베벨 로커 + Wave 지오메트리</strong>를 공유하므로, 변화의 폭과 방향만 정확히 짚으면 결정이 쉬워집니다.</p>
  </div>
</div>

<h2>한눈에 비교</h2>

<table>
  <thead>
    <tr><th>항목</th><th>웨이브 리벨리온 플래시 2</th><th>웨이브 리벨리온 플래시 3</th><th>차이</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>카테고리</strong></td><td>레이싱 / 템포 트레이너</td><td>레이싱 / 템포 트레이너</td><td>동일 (슈퍼트레이너)</td></tr>
    <tr><td><strong>상태</strong></td><td>이전 세대 (세일 진입권)</td><td><strong>신상</strong></td><td>세대 교체</td></tr>
    <tr><td><strong>MSRP (한국)</strong></td><td>189,000원</td><td><strong>199,000원</strong></td><td>+10,000원</td></tr>
    <tr><td><strong>무게 (Lab)</strong></td><td>239g</td><td>244g</td><td>+5g (사실상 동일)</td></tr>
    <tr><td><strong>힐 스택</strong></td><td>35.2mm</td><td><strong>37.5mm</strong></td><td>+2.3mm (쿠션 ↑)</td></tr>
    <tr><td><strong>전족부 스택</strong></td><td>32.3mm</td><td><strong>34.5mm</strong></td><td>+2.2mm</td></tr>
    <tr><td><strong>드롭</strong></td><td>2.9mm (Lab)</td><td>3mm</td><td>사실상 동일 (저드롭 유지)</td></tr>
    <tr><td><strong>미드솔 폼</strong></td><td>Enerzy Lite+ (PEBA) + Enerzy 듀얼</td><td><strong>ENERZY XP (TPEE) 상단 + ENERZY NXT (EVA) 하단</strong></td><td>상단 폼 소재 교체</td></tr>
    <tr><td><strong>플레이트</strong></td><td>Wave 플레이트 (유리섬유, 곡선형)</td><td>유리섬유 강화 나일론 플레이트 (평판형)</td><td>형상·구성 변경</td></tr>
    <tr><td><strong>반응성 점수</strong></td><td>7/10</td><td><strong>8/10</strong></td><td>+1 (TPEE 탄성)</td></tr>
    <tr><td><strong>쿠션 점수</strong></td><td>7/10</td><td>7/10</td><td>동일 (스택은 ↑)</td></tr>
    <tr><td><strong>안정성 점수</strong></td><td>5/10</td><td>6/10</td><td>+1</td></tr>
    <tr><td><strong>내구성</strong></td><td>600km</td><td>500km</td><td>-100km</td></tr>
    <tr><td><strong>아웃솔</strong></td><td>G3 러버</td><td>전체 러버 (젖은 노면 그립 강조)</td><td>커버리지 확대</td></tr>
    <tr><td><strong>어퍼</strong></td><td>엔지니어드 메쉬</td><td>엔지니어드 메쉬 (90%+ 재활용)</td><td>지속가능 소재</td></tr>
    <tr><td><strong>최적 페이스</strong></td><td>4:00–5:30 /km</td><td>4:00–5:00 /km</td><td>3이 살짝 더 빠른 영역</td></tr>
    <tr><td><strong>토박스 / 와이드</strong></td><td>표준 (94.8mm) / 와이드 없음</td><td>표준 / 와이드 없음</td><td>둘 다 와이드 미제공</td></tr>
  </tbody>
</table>

<h2>핵심 변화 — PEBA 단일 감성 vs TPEE 듀얼 폼</h2>

<p>플래시 2와 3의 가장 본질적인 차이는 <strong>상단 폼 소재를 바꿔 라이드의 '캐릭터'를 다시 잡았다</strong>는 점입니다. 무게·드롭·로커 지오메트리 같은 골격은 거의 그대로 두고, 발이 닿는 첫 감촉과 튕겨나가는 마무리를 손봤습니다.</p>

<div class="callout warning">
  <span class="callout-icon">🔄</span>
  <div class="callout-body">
    <p class="callout-title">'PEBA의 통통 튐' vs 'TPEE 부드러움 + EVA 받침'</p>
    <table>
      <thead>
        <tr><th></th><th>플래시 2 — Enerzy Lite+ (PEBA) 기반</th><th>플래시 3 — ENERZY XP(TPEE) + NXT(EVA)</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>상단 폼</strong></td><td>Enerzy Lite+ (PEBA)</td><td>ENERZY XP (TPEE)</td></tr>
        <tr><td><strong>착지 첫 감촉</strong></td><td>탄탄하게 바닥을 치는 직접적 느낌</td><td>한 번 살짝 빠졌다가 받쳐주는 부드러운 터치</td></tr>
        <tr><td><strong>푸시오프</strong></td><td>PEBA 특유의 빠른 반발</td><td>TPEE 탄성 + EVA 받침의 이중 푸시 (반응성 점수 +1)</td></tr>
        <tr><td><strong>플레이트</strong></td><td>유리섬유 Wave(곡선형) — 롤링감 강조</td><td>유리섬유 강화 나일론(평판형) — 안정적 추진</td></tr>
        <tr><td><strong>성격</strong></td><td>장난기 있는 '재미형' 템포 트레이너</td><td>레이스데이까지 노린 '진중한' 템포 트레이너</td></tr>
      </tbody>
    </table>
  </div>
</div>

<p>요약하면 <strong>2는 "재미있게 굴러가는 미드풋 장난감"에 가깝고, 3은 "서브 3:30 레이스에도 신을 수 있는 진중한 트레이너"</strong> 쪽으로 무게중심을 옮겼습니다. 스택을 2mm 이상 올리면서도 무게를 5g만 늘린 건, 상단 폼을 더 가벼운 TPEE 계열로 바꿔 쿠션과 경량을 동시에 가져간 설계입니다.</p>

<h2>5가지 핵심 변화 점검</h2>

<h3>1. 상단 폼 PEBA → ENERZY XP(TPEE) ✅ 가장 큰 변화</h3>
<p>플래시 2의 Enerzy Lite+(PEBA)가 직접적이고 탄탄한 반발이었다면, 3의 ENERZY XP는 <strong>착지 시 한 박자 부드럽게 받아준 뒤 튕겨내는 이중 구조</strong>입니다. "2는 딱딱하게 바닥을 친다"고 느꼈던 러너에게는 환영할 변화이고, 반대로 "PEBA의 즉각적인 반발이 좋았다"는 러너에게는 다소 무뎌졌다고 느껴질 수 있습니다. 취향이 갈리는 지점이니 가능하면 두 폼을 직접 밟아보고 결정하세요.</p>

<h3>2. 스택 35.2→37.5mm ✅ 쿠션 여유 ↑, 장거리 부담 ↓</h3>
<p>힐·전족부 모두 약 2mm씩 두꺼워졌습니다. 쿠션 점수 자체는 7/10로 동일하게 잡혀 있지만, 실제로는 <strong>하프~템포 후반부의 다리 보호 여유가 늘었습니다.</strong> 3의 최적 페이스가 4:00–5:00으로 2(4:00–5:30)보다 살짝 빠른 영역에 잡힌 것도, 늘어난 스택과 TPEE 탄성 덕에 레이스데이 쪽으로 성격이 이동했음을 보여줍니다.</p>

<h3>3. 드롭 3mm 유지 ⚠️ 여전히 미드풋 전용</h3>
<p>2가 2.9mm, 3이 3mm로 <strong>저드롭 정체성은 그대로</strong>입니다. 이건 미즈노가 "힐로 착지하지 마세요"라는 메시지를 계속 유지한다는 뜻이죠. 힐스트라이커가 두 신발 중 무엇을 신어도 초반 2주는 아킬레스·종아리에 부담이 옵니다. 단, 3은 무릎 부담 등급이 <strong>caution</strong>으로 잡혀 있어(2는 knee good) 미드풋 착지 자체에 더 공격적인 세팅이라는 점은 유념하세요.</p>

<h3>4. 무게 +5g (239→244g) ↔ 사실상 동일</h3>
<p>스택을 2mm 이상 올리고도 무게 증가가 5g에 그칩니다. 체감상 차이가 거의 없는 수준이고, 둘 다 240g 안팎의 경량 템포 영역에 머뭅니다.</p>

<h3>5. 내구성 600→500km ⚠️ 3이 100km 짧다</h3>
<p>3의 내구성이 500km로 2(600km)보다 짧게 잡혔습니다. km당 비용으로 보면 2가 332원, 3이 458원입니다. <strong>템포·레이스 전용으로만 굴리는 운용</strong>을 전제로 한 수치이니, 데일리까지 겸하려 했다면 두 신발 모두 권장 운용 범위를 벗어납니다. 데일리는 따로 두세요.</p>

<h2>상황별 구매 결정 매트릭스</h2>

<table>
  <thead>
    <tr><th>본인 상황</th><th>추천</th><th>이유</th></tr>
  </thead>
  <tbody>
    <tr><td>"2가 좀 딱딱했다" + 부드러운 착지 선호</td><td><strong>3</strong></td><td>ENERZY XP(TPEE)로 첫 터치 부드러움 ↑</td></tr>
    <tr><td>PEBA의 즉각 반발·롤링 장난기가 좋다</td><td><strong>2 (세일)</strong></td><td>곡선형 Wave 플레이트 + PEBA 직접 반발</td></tr>
    <tr><td>서브 3:30 레이스데이 겸용</td><td><strong>3</strong></td><td>스택 ↑·4:00–5:00 최적 페이스로 레이스 영역</td></tr>
    <tr><td>가성비 + 템포런 위주</td><td><strong>2 (세일 13~15만원)</strong></td><td>3 출시로 2 가격 인하, 600km 내구성</td></tr>
    <tr><td>하프 후반 다리 보호 여유 필요</td><td><strong>3</strong></td><td>힐 37.5mm 스택으로 후반 쿠션 여유</td></tr>
    <tr><td>2 사용 중 + 400km 이내 멀쩡</td><td><strong>2 계속</strong></td><td>업그레이드 가치 제한적</td></tr>
    <tr><td>힐스트라이커 / 과내전 입문</td><td>둘 다 비추</td><td>3mm 저드롭·낮은 안정성, 안정화로 분리</td></tr>
    <tr><td>발볼 4E 이상 넓은 발</td><td>둘 다 시착 필수</td><td>와이드 옵션 미제공, 표준 토박스</td></tr>
    <tr><td>친환경 소재 선호</td><td><strong>3</strong></td><td>어퍼 90%+ 재활용 소재</td></tr>
  </tbody>
</table>

<h2>가격 시나리오 — 2 세일 타이밍이 결정적</h2>

<div class="callout success">
  <span class="callout-icon">💰</span>
  <div class="callout-body">
    <p class="callout-title">플래시 2 vs 3 가격 운용 전략</p>
    <ul>
      <li><strong>지금 (3 출시 직후):</strong> 3 정가 199,000원 / 2는 189,000원에서 인하 진입 → 2를 13~15만원대로 잡으면 km당 비용이 3보다 확실히 유리</li>
      <li><strong>시즌 오프 (여름~가을):</strong> 2 재고 정리로 12~14만원대 가능. 단 사이즈·컬러 선택폭이 빠르게 줄어듦 (와이드가 없어 본인 사이즈가 핵심)</li>
      <li><strong>레이스 시즌 직전 (가을 마라톤 전):</strong> 3 신상 수요 ↑로 풀가 유지 경향. 레이스데이 확정이면 일찍 확보가 안전</li>
      <li><strong>겨울:</strong> 두 모델 모두 폼 경화 이슈(2는 겨울 경화율 36%, winterCompatibility=fair). 한겨울 본격 활용보다 봄~가을 시즌 신발로 보는 게 현실적</li>
    </ul>
  </div>
</div>

<p><strong>가장 합리적 액션:</strong></p>
<ul>
  <li><strong>템포런 위주 + 가성비:</strong> 3 출시로 가격이 빠진 2를 본인 사이즈로 빠르게 확보 (와이드가 없어 사이즈 품절이 곧 기회 종료)</li>
  <li><strong>레이스데이 + 후반 쿠션 여유 우선:</strong> 3 정가를 감수. 스택 +2mm와 TPEE 부드러움이 하프 이상에서 값을 함</li>
  <li><strong>"폼 감촉을 직접 비교하고 싶다":</strong> 매장에서 2·3 동시 시착. PEBA의 직접 반발과 TPEE의 부드러운 터치는 5분만 걸어봐도 갈림</li>
</ul>

<h2>한국 러너 부상별 권장</h2>

<table>
  <thead>
    <tr><th>부상·체형</th><th>추천</th><th>근거</th></tr>
  </thead>
  <tbody>
    <tr><td>아킬레스건염 이력</td><td><strong>3</strong></td><td>스택 ↑로 착지 충격 분산 여유 (achilles: 2=caution → 3=good)</td></tr>
    <tr><td>족저근막염</td><td>2 = 3</td><td>둘 다 good — 단 저드롭이라 적응기 필요</td></tr>
    <tr><td>무릎 통증 (러너스 니)</td><td><strong>2</strong></td><td>knee: 2=good vs 3=caution, 3이 더 공격적 세팅</td></tr>
    <tr><td>정강이 부목 (Shin Splints)</td><td>2 = 3</td><td>둘 다 good</td></tr>
    <tr><td>평발 + 과내전</td><td>둘 다 비추</td><td>flatFoot fair·안정성 5~6/10, 안정화로 분리 권장</td></tr>
    <tr><td>힐스트라이크 습관</td><td>둘 다 주의</td><td>3mm 저드롭, 최소 2주 적응기 필수</td></tr>
  </tbody>
</table>

<p>본인 발 특성·부상 이력에 맞춘 후보는 <a href="/recommend">1분 러닝화 추천</a>에서 받을 수 있습니다. 무릎이 걱정된다면 <a href="/blog/knee-pain-running-shoes">무릎 통증 러너 신발 가이드 →</a>, 본인이 과내전인지부터 확인하려면 <a href="/blog/pronation-type-running-shoe-guide-2026">프로네이션 타입별 러닝화 가이드 →</a>를 먼저 보세요.</p>

<h2>비슷한 대안 — 템포 트레이너 / 슈퍼트레이너</h2>

<p>미즈노 외에도 같은 '템포 + 레이스데이 겸용' 영역의 신발이 있습니다:</p>

<ul>
  <li><a href="/shoes/mizuno-wave-rebellion-flash-2">웨이브 리벨리온 플래시 2</a> — PEBA 직접 반발·롤링 장난기, 세일 진입 가성비</li>
  <li><a href="/shoes/mizuno-wave-rebellion-flash-3">웨이브 리벨리온 플래시 3</a> — TPEE 듀얼 폼·스택 ↑, 레이스데이 겸용</li>
  <li><a href="/shoes/saucony-endorphin-speed-5">사코니 엔돌핀 스피드 5</a> — 나일론 플레이트 슈퍼트레이너의 기준점, 폭넓은 활용</li>
  <li><a href="/shoes/adidas-adizero-evo-sl">아디다스 아디제로 EVO SL</a> — 플레이트 없는 라이트스트라이크 프로, 가볍고 다용도</li>
  <li><a href="/shoes/nike-zoom-fly-6">나이키 줌플라이 6</a> — 카본 플레이트 트레이너, 묵직하지만 단단한 추진 (플래시 2 대안)</li>
  <li><a href="/shoes/new-balance-rebel-v5">뉴발란스 리벨 v5</a> — 플레이트 없는 경량 데일리/템포, 부드러운 미드풋 라이드 (플래시 3 대안)</li>
</ul>

<h2>FAQ</h2>

<h3>Q. 2 → 3 업그레이드 가치 있나요?</h3>
<p>플래시 2가 400km 이내로 멀쩡하다면 그냥 굴리세요. <strong>2의 직접적인 PEBA 반발에 만족했다면 굳이 3으로 갈 이유는 약합니다.</strong> 반대로 "착지가 좀 딱딱했다", "하프 후반 다리가 빨리 갔다"면 3의 TPEE 부드러움과 +2mm 스택이 체감되는 업그레이드입니다.</p>

<h3>Q. 둘 다 풀코스 레이스에 신을 수 있나요?</h3>
<p>가능은 하지만 목적이 다릅니다. 두 신발 모두 카본 슈퍼슈즈가 아니라 <strong>유리섬유 계열 플레이트의 템포 트레이너</strong>입니다. 3이 스택과 TPEE 덕에 하프~풀 후반 버티기에 조금 더 유리하지만, 본격적인 PB 도전 풀코스라면 카본 레이서를 따로 두는 게 정석입니다. 플래시 라인은 '레이스데이 겸 템포런'의 중간 무기로 보세요.</p>

<h3>Q. 발볼이 넓은데 둘 중 뭐가 나은가요?</h3>
<p>아쉽게도 <strong>두 모델 다 와이드 옵션이 없습니다.</strong> 토박스는 표준(2 기준 94.8mm)이라 발볼 넓은 한국 러너에게는 약간 빡빡할 수 있어요. 반 사이즈 업 또는 매장 시착이 필수이고, 발볼 106mm 이상이라면 다른 모델을 검토하는 게 안전합니다. 발볼 이슈는 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 신발 가이드 →</a>를 참고하세요.</p>

<h3>Q. 힐로 착지하는데 신어도 되나요?</h3>
<p>권하지 않습니다. 2(2.9mm)·3(3mm) 모두 <strong>극단적 저드롭 + 힐 베벨 로커</strong> 설계라 힐스트라이크 습관이 있으면 초반에 아킬레스건이 당깁니다. 굳이 미드풋 전환을 목표로 한다면 최소 2주 적응기를 두고 거리를 천천히 늘리세요. 착지 교정 의도 없이 그냥 편한 데일리를 찾는다면 이 라인은 맞지 않습니다.</p>

<h3>Q. 미즈노 처음인데 입문용으로 괜찮나요?</h3>
<p>입문용은 아닙니다. 두 신발 모두 <strong>미드풋/포어풋 착지가 어느 정도 잡힌 중급 이상</strong>을 전제로 합니다. 미즈노 첫 신발이라면 데일리 라인(웨이브 라이더)이나 안정화(웨이브 인스파이어)로 시작한 뒤, 템포런의 재미를 알게 됐을 때 플래시로 넘어오는 순서를 권합니다. <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 고르는 법 →</a>도 함께 보세요.</p>

<h2>결론 — 내 추천</h2>

<div class="callout success">
  <span class="callout-icon">🎯</span>
  <div class="callout-body">
    <p class="callout-title">'직접 반발의 2' vs '진중해진 3' — 취향과 용도로 갈립니다</p>
    <p><strong>템포런 위주 + 가성비 우선 + PEBA의 직접적인 롤링이 좋다</strong>면 <a href="/shoes/mizuno-wave-rebellion-flash-2">플래시 2</a>를 세일 진입 시점(13~15만원대)에 본인 사이즈로 잡는 게 합리적입니다. 600km 내구성과 곡선형 Wave 플레이트의 장난기가 매력이죠. 단 와이드가 없으니 사이즈 품절 전에 움직이세요.</p>
    <p><strong>레이스데이 겸용 + 착지 부드러움 + 하프 후반 다리 보호 여유</strong>가 우선이라면 <a href="/shoes/mizuno-wave-rebellion-flash-3">플래시 3</a> 정가(199,000원)를 감수할 가치가 있습니다. ENERZY XP(TPEE) 듀얼 폼과 +2mm 스택, 한 단계 오른 반응성 점수가 4:00–5:00 페이스 영역에서 값을 합니다.</p>
    <p><strong>둘 다 처음이라 감을 못 잡겠다</strong>면 매장에서 2·3을 동시에 5분씩 밟아보세요. PEBA의 직접 반발과 TPEE의 부드러운 터치는 짧게 걸어봐도 명확히 갈립니다. 단, 어느 쪽이든 힐스트라이커·과내전 입문자에게는 권하지 않습니다.</p>
  </div>
</div>

<div class="affiliate-cta">
  <p class="affiliate-cta-label">상세 정보 보기</p>
  <div class="affiliate-cta-buttons">
    <a href="/shoes/mizuno-wave-rebellion-flash-3" class="affiliate-btn pending">
      <span class="affiliate-btn-store">상세</span>
      <span class="affiliate-btn-product">웨이브 리벨리온 플래시 3 상세 →</span>
    </a>
    <a href="/shoes/mizuno-wave-rebellion-flash-2" class="affiliate-btn pending">
      <span class="affiliate-btn-store">상세</span>
      <span class="affiliate-btn-product">웨이브 리벨리온 플래시 2 상세 →</span>
    </a>
  </div>
  <p class="affiliate-disclosure">광고 표기: 일부 링크는 제휴 수수료를 받을 수 있습니다.</p>
</div>

<h2>다른 세대 비교</h2>

<p>플래시가 "미드풋 템포 트레이너"라면, 데일리·쿠션·카본 영역은 다른 신발이 답입니다. 다른 브랜드의 최신 세대 교체도 같은 관점으로 정리해 두었습니다:</p>

<ul>
  <li><a href="/blog/adidas-supernova-rise-2-vs-3-comparison">아디다스 슈퍼노바 라이즈 2 vs 3 — 데일리 쿠션 세대 비교</a></li>
  <li><a href="/blog/puma-deviate-nitro-3-vs-4-comparison">푸마 디비에이트 나이트로 3 vs 4 — 플레이트 데일리 세대 비교</a></li>
  <li><a href="/blog/brooks-glycerin-max-1-vs-2-comparison">브룩스 글리세린 맥스 vs 맥스 2 — 맥시멀 쿠션 세대 비교</a></li>
  <li><a href="/blog/asics-superblast-2-vs-3-comparison">아식스 슈퍼블라스트 2 vs 3 — 슈퍼트레이너 세대 비교</a> (플래시와 같은 영역)</li>
  <li><a href="/blog/saucony-endorphin-pro-4-vs-5-comparison">사코니 엔돌핀 프로 4 vs 5 — 가성비 카본 레이서 세대 비교</a></li>
</ul>

<h2>관련 글</h2>

<ul>
  <li><a href="/blog/carbon-plate-shoes-comparison-2025">카본 플레이트 러닝화 비교 — 플레이트 슈즈가 처음이라면</a></li>
  <li><a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국 러너 추천 신발 — 토박스 실측 정리</a></li>
  <li><a href="/blog/pronation-type-running-shoe-guide-2026">프로네이션 타입별 러닝화 가이드 2026</a></li>
  <li><a href="/blog/knee-pain-running-shoes">무릎 통증 러너 신발 가이드</a></li>
  <li><a href="/blog/first-running-shoe-guide-2026">첫 러닝화 고르는 법 2026</a></li>
</ul>

<p><small>출처: 미즈노 공식 제품 정보(웨이브 리벨리온 플래시 2·3) / allrunabout.com 신발 DB(2026-06-10 기준 specs·스택·드롭·가격·부상 등급). 본 비교는 DB의 확정 수치(무게·스택·드롭·가격·1–10 점수)와 미드솔 구성 변경점 중심으로 작성했으며, RunRepeat SA/HA/에너지 리턴% 같은 랩 정밀 수치는 detailedSpecs에 명시된 항목만 인용했습니다. 일부 수치는 공식 발표·전작 기준 추정이 포함될 수 있으며, 신상(플래시 3) 장기 사용 데이터가 쌓이면 업데이트 예정입니다.</small></p>
`,
  },
  {
    id: 'achilles-tendon-running-shoes-prevention-2026',
    slug: 'achilles-tendon-running-shoes-prevention-2026',
    title: '러너의 아킬레스건염 — 왜 생기고 러닝화로 어떻게 줄일까 | 드롭·쿠션·예방 운동 완벽 가이드',
    description: '아킬레스건염은 러너가 가장 흔히 겪는 부상 중 하나입니다. 갑작스러운 거리 증가, 약한 종아리, 그리고 \'낮은 드롭\' 신발이 주요 원인이죠. 아킬레스건염이 왜 생기는지, 드롭이 높은 러닝화가 어떻게 부담을 줄여주는지(보메로 18·클리프턴 10 등), 그리고 종아리 강화·워밍업 같은 예방법까지 정리했습니다.',
    thumbnail: '/images/blog/achilles-tendon-running-shoes-prevention-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-10',
    category: 'guide' as const,
    readingTime: 8,
    tags: ['아킬레스건염', '부상 예방', '러닝화 드롭', '종아리', '러닝 부상', '러닝 팁'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>아킬레스건염은 <strong>갑작스러운 거리·강도 증가, 약한 종아리, 낮은 드롭 신발</strong>이 겹칠 때 잘 생깁니다</li>
    <li>러닝화에서 핵심은 <strong>드롭(힐-전족 높이차)</strong> — 드롭이 높을수록 아킬레스가 덜 늘어나 부담이 줄어듭니다(8~12mm 권장)</li>
    <li>신발만으로는 부족 — <strong>종아리 강화(카프 레이즈)와 점진적 거리 증가</strong>가 근본 예방입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🦶</span>
  <div class="callout-body">
    <p class="callout-title">아킬레스건염이란</p>
    <p>아킬레스건(발뒤꿈치와 종아리를 잇는 힘줄)에 미세 손상이 누적돼 생기는 염증·통증입니다. 아침 첫발이 뻣뻣하거나, 달리기 시작·끝에 뒤꿈치 위쪽이 아프면 의심해야 하죠. 러너에게 흔하지만 <strong>한번 오면 오래 가는</strong> 부상이라, 예방이 무엇보다 중요합니다.</p>
  </div>
</div>

<h2>왜 생길까 — 주요 원인</h2>
<ul>
  <li><strong>갑작스러운 거리·강도 증가</strong> — 가장 흔한 원인. 주간 거리를 한 번에 늘리면 힘줄이 적응 못 함</li>
  <li><strong>약한 종아리·발목</strong> — 충격을 근육이 못 받으면 힘줄로 부담이 몰림</li>
  <li><strong>낮은 드롭 신발로 급전환</strong> — 드롭이 낮으면 아킬레스가 더 늘어나는데, 익숙지 않은 발이 갑자기 신으면 무리</li>
  <li><strong>워밍업 부족·오버페이스</strong> — 차가운 힘줄에 갑작스러운 부하</li>
</ul>

<h2>러닝화로 줄이기 — '드롭'이 핵심</h2>
<p>드롭(힐과 전족의 높이 차)이 <strong>높을수록 발목이 덜 꺾여 아킬레스 신장이 줄어듭니다</strong>. 아킬레스가 약하거나 통증 이력이 있다면 <strong>드롭 8~12mm</strong>의 쿠션 좋은 신발이 안전합니다(낮은 드롭 4mm 이하는 아킬레스 부담이 큼).</p>
<table>
  <thead><tr><th>모델</th><th>드롭</th><th>특징</th></tr></thead>
  <tbody>
    <tr><td><a href="/shoes/nike-vomero-18">나이키 보메로 18</a></td><td><strong>14mm</strong></td><td>높은 드롭+맥스쿠션, 아킬레스에 가장 너그러움</td></tr>
    <tr><td><a href="/shoes/hoka-clifton-10">호카 클리프턴 10</a></td><td>12mm</td><td>가벼운 쿠션화, 높은 드롭</td></tr>
    <tr><td><a href="/shoes/brooks-glycerin-gts-22">브룩스 글리세린 GTS 22</a></td><td>10mm</td><td>푹신함+안정, 종아리 편함</td></tr>
  </tbody>
</table>
<p>반대로 드롭 4~6mm의 낮은 신발(예: 일부 레이싱·내추럴 슈즈)은 아킬레스가 약한 러너에겐 통증을 악화시킬 수 있으니, 전환은 아주 천천히 해야 합니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">낮은 드롭으로 '갑자기' 바꾸지 마세요</p>
    <p>맨발 트렌드·미니멀 슈즈로 급전환하다 아킬레스건염을 얻는 경우가 많습니다. 드롭을 낮추려면 <strong>몇 주에 걸쳐 점진적으로</strong>, 짧은 거리부터 적응시키세요.</p>
  </div>
</div>

<h2>신발보다 중요한 예방 — 종아리와 점진성</h2>
<ul>
  <li><strong>카프 레이즈(종아리 들기)</strong> — 아킬레스 부하 운동(에센트릭)이 예방·재활에 가장 효과적. 계단 끝에서 뒤꿈치 내렸다 올리기 하루 2~3세트</li>
  <li><strong>10% 룰</strong> — 주간 거리를 한 번에 10% 이상 늘리지 않기(<a href="/blog/race-distance-difficulty-guide-2026">거리·강도 관리</a> 참고)</li>
  <li><strong>워밍업 필수</strong> — 달리기 전 <a href="/blog/running-warmup-cooldown-guide-2026">동적 워밍업</a>으로 힘줄을 데우기</li>
  <li><strong>케이던스 점검</strong> — <a href="/blog/running-cadence-guide-2026">보속</a>을 높여 오버스트라이드를 줄이면 착지 충격이 분산됩니다</li>
</ul>

<h2>마무리</h2>
<p>아킬레스건염은 "신발 하나"로 막을 순 없지만, <strong>드롭이 높은 쿠션 신발 + 종아리 강화 + 점진적 거리 증가</strong>의 조합으로 위험을 크게 줄일 수 있습니다. 이미 통증이 있다면 무리하지 말고 휴식과 함께 카프 레이즈로 재활하세요. 더 많은 모델은 <a href="/best/achilles">아킬레스 친화 러닝화</a>에서 비교할 수 있습니다. 아침 첫발에 발바닥이 찌릿하다면 <a href="/blog/plantar-fasciitis-running-shoes-2026">족저근막염 러닝화 가이드</a>도 함께 보세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 일반적인 부상 예방 정보로, 개인의 의학적 진단을 대체하지 않습니다. 통증이 2주 이상 지속되거나 심하면 정형외과·스포츠의학 전문의의 진료를 받으세요.</p>
`,
  },
  {
    id: 'adidas-adizero-evo-sl-value-supershoe-2026',
    slug: 'adidas-adizero-evo-sl-value-supershoe-2026',
    title: '카본 없이 왜 빠를까 — 아디다스 아디제로 Evo SL | 아디오스 프로 폼·223g·83% 에너지 리턴의 가성비 슈퍼폼',
    description: '아디제로 Evo SL은 카본 플레이트가 없는데도 "빠르다"는 평이 자자합니다. 비결은 레이싱화 아디오스 프로 3와 같은 100% Lightstrike Pro 슈퍼폼. 223g 초경량에 83% 에너지 리턴으로, 30만원대 카본 슈퍼슈즈의 폼을 20만원대에 담았죠. Evo SL의 정체와 누구에게 맞는지, 적토마·리벨 v5 등 가성비 경쟁 모델과의 비교까지 정리했습니다.',
    thumbnail: '/images/blog/adidas-adizero-evo-sl-value-supershoe-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-10',
    category: 'review' as const,
    readingTime: 7,
    tags: ['아디제로 Evo SL', '가성비 러닝화', '슈퍼폼', 'Lightstrike Pro', '카본 대안', '템포'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><a href="/shoes/adidas-adizero-evo-sl">아디제로 Evo SL</a>은 <strong>카본 플레이트가 없습니다</strong> — 그런데도 빠른 이유는 레이싱화 <strong>아디오스 프로 3와 똑같은 100% Lightstrike Pro 슈퍼폼</strong> 덕분이죠</li>
    <li>223g 초경량 + <strong>83% 에너지 리턴(동급 최고)</strong> — "폼 자체가 슈퍼폼"이라 플레이트 없이도 경쾌합니다</li>
    <li>30만원대 카본 슈퍼슈즈의 폼을 <strong>20만원대</strong>에 — 데일리부터 템포까지 한 켤레로 빠르게 굴리고 싶은 러너의 가성비 정답</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">⚡</span>
  <div class="callout-body">
    <p class="callout-title">"카본 아니라며? 근데 왜 빨라?"</p>
    <p>요즘 러닝화는 "카본 플레이트 = 빠름"으로 알려져 있지만, 사실 속도의 절반은 <strong>폼(미드솔 소재)</strong>이 만듭니다. Evo SL은 플레이트를 뺀 대신 <strong>최상급 슈퍼폼을 통째로</strong> 넣었어요. 플레이트의 톡톡 튀는 반발 대신, 폼의 부드럽고 탄력 있는 반발로 빠르게 나가는 신발입니다.</p>
  </div>
</div>

<h2>정체 — 아디오스 프로의 폼을 그대로</h2>
<p>Evo SL의 핵심은 미드솔이 <strong>100% Lightstrike Pro</strong>라는 점입니다. 이건 아디다스의 풀카본 레이서 <strong>아디오스 프로 3에 쓰인 바로 그 폼</strong>이에요. RunRepeat 랩에서 측정한 <strong>83% 에너지 리턴은 동급 최고 수준</strong>이고, 223g 초경량에 36mm 힐 스택으로 쿠션도 충분합니다. 컨티넨탈 러버 아웃솔이라 그립도 좋고, 와이드 옵션까지 있죠.</p>

<table>
  <thead><tr><th>항목</th><th>Evo SL</th></tr></thead>
  <tbody>
    <tr><td>미드솔</td><td>100% Lightstrike Pro (아디오스 프로 3 동일 폼)</td></tr>
    <tr><td>플레이트</td><td><strong>없음</strong> (카본 아님)</td></tr>
    <tr><td>무게 / 스택 / 드롭</td><td>223g / 36·28mm / 8mm</td></tr>
    <tr><td>에너지 리턴</td><td><strong>83%</strong> (동급 최고)</td></tr>
    <tr><td>발볼</td><td>표준 (와이드 옵션 O)</td></tr>
    <tr><td>가격</td><td>209,000원</td></tr>
  </tbody>
</table>

<h2>누구에게 맞나</h2>
<ul>
  <li><strong>데일리~템포를 한 켤레로</strong> — 가볍고 반발 좋아 조깅부터 빠른 훈련까지 소화</li>
  <li><strong>카본 입문 전 단계</strong> — 카본의 강한 추진이 부담스럽거나, 발목·종아리 근력을 먼저 다지려는 러너</li>
  <li><strong>가성비 슈퍼폼을 원하는 러너</strong> — 30만원대 카본 대신 20만원대로 슈퍼폼 경험</li>
</ul>
<p>반대로 <strong>레이스 기록 단축에 카본의 롤링 추진이 꼭 필요하다면</strong> Evo SL로는 아쉬울 수 있습니다 — 그땐 진짜 카본 레이서(<a href="/best/racing">레이싱화</a>)를 보세요.</p>

<div class="callout tip">
  <span class="callout-icon">🖥️</span>
  <div class="callout-body">
    <p class="callout-title">가성비 슈퍼폼 4종 비교</p>
    <p><strong><a href="/compare?shoes=adidas-adizero-evo-sl,new-balance-rebel-v5,li-ning-red-hare-9-ultra,nike-zoom-fly-6">→ Evo SL · 리벨 v5 · 적토마 9 울트라 · 줌플라이 6 비교하기</a></strong></p>
  </div>
</div>

<h2>가성비 슈퍼폼 경쟁 — 카본 없이 빠른 신발들</h2>
<p>Evo SL처럼 "카본 없이 폼으로 승부하는" 가성비 슈퍼폼이 요즘 대세입니다.</p>
<ul>
  <li><a href="/shoes/new-balance-rebel-v5">뉴발란스 리벨 v5</a> — 228g, 발랄한 FuelCell. Evo SL의 직접 경쟁</li>
  <li><a href="/shoes/li-ning-red-hare-9-ultra">라이닝 적토마 9 울트라</a> — 유리섬유 플레이트 맥스쿠션, 10만원대(<a href="/blog/li-ning-red-hare-9-ultra-truth-2026">"중국 카본화"의 진실</a> 참고)</li>
  <li><a href="/shoes/nike-zoom-fly-6">나이키 줌플라이 6</a> — 카본 들어간 템포 트레이너(이쪽은 플레이트 있음)</li>
</ul>
<p>"플레이트가 있어야 진짜 빠르다"는 통념과 달리, Evo SL은 <strong>폼만으로도 충분히 빠를 수 있다</strong>는 걸 보여주는 신발입니다.</p>

<h2>마무리</h2>
<p>Evo SL은 "카본은 없지만 카본값도 안 내는" 똑똑한 선택입니다. 레이스 기록이 목표가 아니라면, 대부분의 러너에게 <strong>슈퍼폼의 재미와 가성비</strong>를 가장 쉽게 주는 신발 중 하나죠. 데일리와 템포를 오가는 한 켤레를 찾는다면 우선순위에 올릴 만합니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 스펙은 RunRepeat 랩·제조사 자료 기준이며 가격은 변동될 수 있습니다.</p>
`,
  },
  {
    id: 'max-cushion-running-shoes-knee-protection-2026',
    slug: 'max-cushion-running-shoes-knee-protection-2026',
    title: '무릎 지키는 맥스쿠션 러닝화 추천 2026 | 1080 v15·님버스 28·고스트 맥스 3·본디 9 — 발볼·무게·관절 보호 비교',
    description: '무릎·관절이 약하거나 장거리·회복런 위주라면 두꺼운 폼의 맥스쿠션 러닝화가 충격을 흡수해줍니다. 뉴발란스 1080 v15(경량), 아식스 님버스 28·호카 본디 9(최고 쿠션), 브룩스 고스트 맥스 3(발볼 넓은 가성비)까지 주요 맥스쿠션을 무게·드롭·발볼·가격으로 비교하고, 무릎 보호 관점에서 어떤 걸 골라야 하는지 정리했습니다.',
    thumbnail: '/images/blog/max-cushion-running-shoes-knee-protection-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-10',
    category: 'guide' as const,
    readingTime: 9,
    tags: ['맥스쿠션', '쿠션화', '무릎 보호', '1080 v15', '님버스 28', '고스트 맥스 3', '러닝화 추천'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>무릎·관절이 약하거나 LSD·회복런 위주라면, 두꺼운 폼이 충격을 흡수하는 <strong>맥스쿠션 러닝화</strong>가 관절 부담을 줄여줍니다</li>
    <li>종합 추천은 <strong><a href="/shoes/new-balance-1080-v15">뉴발란스 1080 v15</a></strong> — 맥스쿠션인데 216g으로 가볍고, 우리 사이트에서 가장 많이 추천되는 모델입니다</li>
    <li>발볼 넓으면 <a href="/shoes/brooks-ghost-max-3">고스트 맥스 3</a>(17만원대·wide), 푹신함 최우선이면 <a href="/shoes/hoka-bondi-9">본디 9</a>·<a href="/shoes/asics-gel-nimbus-28">님버스 28</a>입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🦵</span>
  <div class="callout-body">
    <p class="callout-title">맥스쿠션은 누구에게?</p>
    <p>스택(폼 두께)이 두꺼운 맥스쿠션은 착지 충격을 분산해 <strong>무릎·발목 관절 부담을 덜어줍니다</strong>. ① 무릎이 약하거나 통증 이력이 있는 러너 ② 장거리·회복런 위주 ③ 체중이 있는 러너에게 특히 유리하죠. 다만 폼이 두꺼운 만큼 무겁고 반응성은 떨어져, 빠른 인터벌엔 부적합합니다.</p>
  </div>
</div>

<h2>맥스쿠션 비교 — 주요 6종</h2>
<table>
  <thead>
    <tr><th>모델</th><th>쿠션</th><th>무게</th><th>드롭</th><th>발볼</th><th>가격</th><th>특징</th></tr>
  </thead>
  <tbody>
    <tr><td><strong><a href="/shoes/new-balance-1080-v15">1080 v15</a></strong> 👑</td><td>9</td><td><strong>216g</strong></td><td>6mm</td><td>표준</td><td>209,000</td><td>맥스쿠션인데 경량</td></tr>
    <tr><td><a href="/shoes/asics-gel-nimbus-28">님버스 28</a></td><td><strong>10</strong></td><td>281g</td><td>8mm</td><td>표준</td><td>199,000</td><td>아식스 최고 쿠션</td></tr>
    <tr><td><a href="/shoes/hoka-bondi-9">본디 9</a></td><td><strong>10</strong></td><td>303g</td><td>9mm</td><td><strong>넓음</strong></td><td>229,000</td><td>호카 대표 맥스</td></tr>
    <tr><td><a href="/shoes/brooks-ghost-max-3">고스트 맥스 3</a></td><td>9</td><td>303g</td><td>7mm</td><td><strong>넓음</strong></td><td><strong>179,000</strong></td><td>발볼 넓은 가성비</td></tr>
    <tr><td><a href="/shoes/nike-vomero-18">보메로 18</a></td><td>10</td><td>298g</td><td><strong>14mm</strong></td><td>좁음</td><td>189,000</td><td>높은 드롭(아킬레스 편함)</td></tr>
    <tr><td><a href="/shoes/new-balance-1080-v14">1080 v14</a></td><td>9</td><td>285g</td><td>4mm</td><td>좁음</td><td>199,000</td><td>낮은 드롭·전작</td></tr>
  </tbody>
</table>

<h2>👑 종합 톱픽 — 뉴발란스 1080 v15</h2>
<p><a href="/shoes/new-balance-1080-v15">1080 v15</a>는 40mm 힐 스택의 푹신함을 갖추고도 <strong>216g으로 동급에서 가장 가볍습니다</strong>. 맥스쿠션의 단점인 둔함을 줄여, 회복런부터 데일리까지 폭넓게 소화하죠. 전작과의 차이(낮은 드롭·발볼)는 따로 비교할 가치가 있는데, 신상 v15는 표준 발볼로 넓어졌습니다.</p>

<div class="callout tip">
  <span class="callout-icon">🖥️</span>
  <div class="callout-body">
    <p class="callout-title">대표 맥스쿠션 4종 비교</p>
    <p><strong><a href="/compare?shoes=new-balance-1080-v15,asics-gel-nimbus-28,brooks-ghost-max-3,hoka-bondi-9">→ 1080 v15 · 님버스 28 · 고스트 맥스 3 · 본디 9 비교하기</a></strong> — 쿠셔닝·무게·가성비 점수를 한 화면에서 확인하세요.</p>
  </div>
</div>

<h2>목적별 베스트</h2>
<ul>
  <li><strong>경량·만능</strong> → <a href="/shoes/new-balance-1080-v15">1080 v15</a>(216g)</li>
  <li><strong>최고 푹신함</strong> → <a href="/shoes/hoka-bondi-9">본디 9</a>·<a href="/shoes/asics-gel-nimbus-28">님버스 28</a>(쿠션 10)</li>
  <li><strong>발볼 넓은 러너·가성비</strong> → <a href="/shoes/brooks-ghost-max-3">고스트 맥스 3</a>(wide·17만원대, 119mm 광폭 플랫폼)</li>
  <li><strong>아킬레스·종아리가 약한 러너</strong> → <a href="/shoes/nike-vomero-18">보메로 18</a>(드롭 14mm로 종아리 부담 적음)</li>
  <li><strong>구름처럼 푹신한 로커 라이드</strong> → <a href="/shoes/brooks-glycerin-max-2">글리세린 맥스 2</a>(47mm 초고스택, 부드러운 로커형 — 푹신함 최우선 러너용)</li>
</ul>

<h2>무릎이 아프다면 — 쿠션만으론 부족합니다</h2>
<p>맥스쿠션이 충격을 줄여주지만, 무릎 통증의 근본 원인은 신발만으로 해결되지 않습니다. <a href="/blog/knee-pain-running-shoes">무릎 통증 러닝화 가이드</a>로 원인을 짚고, <a href="/blog/running-cadence-guide-2026">케이던스(보속)</a>를 높여 착지 충격 자체를 줄이는 것도 병행하세요. 발이 안쪽으로 무너지는 과내전이라면 쿠션화보다 <a href="/blog/stability-running-shoes-overpronation-flat-feet-2026">안정화 러닝화</a>가 더 맞을 수 있습니다. 더 많은 모델은 <a href="/best/max-cushion">쿠션화 베스트</a>에서 비교하세요.</p>

<h2>마무리</h2>
<p>맥스쿠션의 핵심은 "두껍다"가 아니라 <strong>"내 무게·발볼·관절 상태에 맞는 두께"</strong>입니다. 가볍게 두루 쓰려면 1080 v15, 최대한 푹신하게는 본디·님버스, 발볼 넓고 예산을 아끼려면 고스트 맥스 3 — 본인 우선순위 하나만 정하면 선택이 쉬워집니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 일반적인 러닝화 정보로, 무릎 통증이 지속되면 전문가의 진료를 받으세요. 가격은 변동될 수 있습니다.</p>
`,
  },
  {
    id: 'kayano-33-vs-glycerin-gts-22-vs-860-v15-2026',
    slug: 'kayano-33-vs-glycerin-gts-22-vs-860-v15-2026',
    title: '안정화 3강 비교 — 카야노 33 vs 글리세린 GTS 22 vs 860 v15 | FLUIDSUPPORT·GuideRails·Fresh Foam, 평발 한국러너의 선택',
    description: '안정화 러닝화 대표 3종을 정면 비교합니다. 아식스 카야노 33(부드러워진 FLUIDSUPPORT), 브룩스 글리세린 GTS 22(푹신한 GuideRails), 뉴발란스 860 v15(가성비 정공법). 스택·드롭·무게·지지 방식·가격을 한눈에 비교하고, 평발·과내전 한국 러너가 셋 중 무엇을 골라야 하는지 목적별로 정리했습니다.',
    thumbnail: '/images/blog/kayano-33-vs-glycerin-gts-22-vs-860-v15-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-10',
    category: 'review' as const,
    readingTime: 8,
    tags: ['카야노 33', '글리세린 GTS 22', '860 v15', '안정화 비교', '평발', '과내전', '러닝화 비교'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong><a href="/shoes/asics-gel-kayano-33">카야노 33</a></strong> — 셋 중 가장 높은 스택(40mm)에 반발도 살아 있어 "지지하되 경쾌한" 균형. 데일리 안정화의 만능형</li>
    <li><strong><a href="/shoes/brooks-glycerin-gts-22">글리세린 GTS 22</a></strong> — 드롭 10mm·내구 800km로 가장 푹신하고 오래가는 프리미엄. 종아리·아킬레스 편한 쪽</li>
    <li><strong><a href="/shoes/new-balance-860-v15">860 v15</a></strong> — 가장 저렴(18만원대)하고 낮은 드롭(6mm)의 정공법 안정화. 묵직하지만 든든</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">⚖️</span>
  <div class="callout-body">
    <p class="callout-title">안정화 '빅3'를 한자리에</p>
    <p>과내전·평발 러너가 가장 많이 고민하는 세 신발입니다. 셋 다 <strong>평발 적합도 최상·와이드 옵션 보유</strong>로 기본기는 비슷하지만, <strong>지지 방식과 라이드 성격이 확연히 다릅니다</strong>. 우리 사이트에서도 카야노 33이 가장 많이 조회되는 신발이죠. 무엇이 내 발에 맞는지 데이터로 갈라보겠습니다.</p>
  </div>
</div>

<h2>스펙 한눈에 비교</h2>
<table>
  <thead>
    <tr><th>항목</th><th>카야노 33</th><th>글리세린 GTS 22</th><th>860 v15</th></tr>
  </thead>
  <tbody>
    <tr><td>지지 방식</td><td>FLUIDSUPPORT</td><td>GuideRails</td><td>듀얼 폼+EVA 플레이트</td></tr>
    <tr><td>스택(힐/전족)</td><td><strong>40 / 32mm</strong></td><td>38 / 28mm</td><td>32 / 26mm</td></tr>
    <tr><td>드롭</td><td>8mm</td><td><strong>10mm</strong></td><td>6mm</td></tr>
    <tr><td>무게</td><td><strong>298g</strong></td><td>305g</td><td>330g</td></tr>
    <tr><td>쿠션 / 반발</td><td>9 / <strong>7</strong></td><td>9 / 6</td><td>8 / 6</td></tr>
    <tr><td>내구성</td><td>650km</td><td><strong>800km</strong></td><td>600km</td></tr>
    <tr><td>가격</td><td>209,000</td><td>209,000</td><td><strong>189,000</strong></td></tr>
  </tbody>
</table>

<h2>지지 방식이 다르다 — 핵심 차이</h2>
<ul>
  <li><strong>카야노 33 · FLUIDSUPPORT</strong> — 13년 만에 딱딱한 기둥을 버리고 미드솔 형상으로 안정을 잡는 방식. FF BLAST MAX 듀얼 폼이라 쿠션과 반발(7)이 셋 중 가장 균형 잡혀, "안정화인데 경쾌하다"는 평. 자세한 변천은 <a href="/blog/asics-gel-kayano-33-review">카야노 33 리뷰</a>·<a href="/blog/asics-kayano-32-vs-33-comparison">32 vs 33 비교</a> 참고</li>
  <li><strong>글리세린 GTS 22 · GuideRails</strong> — 발이 과하게 꺾일 때만 양옆 레일이 막아주는 방식(평소엔 중립처럼 부드러움). 드롭 10mm로 가장 높아 아킬레스·종아리 부담이 적고, 800km 내구성으로 오래 갑니다. 대신 반발은 가장 낮아 푹신함 위주</li>
  <li><strong>860 v15 · 듀얼 폼+플레이트</strong> — 이중 밀도 Fresh Foam X 안쪽을 단단하게 해 무너짐을 잡는 정공법. 드롭 6mm로 낮고 330g으로 묵직하지만, 18만원대로 가장 저렴. <a href="/blog/new-balance-860-v14-vs-v15-comparison">v14와의 차이</a>(와이드 옵션)도 확인하세요</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">🖥️</span>
  <div class="callout-body">
    <p class="callout-title">3종 나란히 비교 도구</p>
    <p>스펙 점수를 직접 견줘보세요 — 쿠셔닝·반발·안정성·가성비가 한 화면에 뜹니다.<br><strong><a href="/compare?shoes=asics-gel-kayano-33,brooks-glycerin-gts-22,new-balance-860-v15">→ 카야노 33 · 글리세린 GTS 22 · 860 v15 비교하기</a></strong></p>
  </div>
</div>

<h2>그래서 누가 뭘 사야 할까</h2>
<ul>
  <li><strong>안정화인데 너무 둔하지 않길 원한다</strong> → <strong>카야노 33</strong>. 데일리부터 가벼운 템포까지 만능</li>
  <li><strong>푹신함·내구성 최우선, 아킬레스가 약하다</strong> → <strong>글리세린 GTS 22</strong>(드롭 10mm가 종아리에 편함)</li>
  <li><strong>예산을 아끼고 든든한 지지를 원한다</strong> → <strong>860 v15</strong>(18만원대, 정공법 안정)</li>
</ul>
<p>셋 다 부담된다면 더 저렴한 대안(사코니 가이드 18·미즈노 인스파이어 21 등)까지 포함한 <a href="/blog/stability-running-shoes-overpronation-flat-feet-2026">안정화 러닝화 추천 전체 가이드</a>나 <a href="/best/stability">안정화 베스트</a>를 함께 보세요.</p>

<h2>마무리</h2>
<p>세 신발 모두 평발·과내전 러너에게 검증된 선택입니다. 차이는 결국 <strong>"경쾌함(카야노) vs 푹신함(글리세린) vs 가성비(860)"</strong>로 갈립니다. 발볼이 넓다면 셋 다 와이드 옵션이 있으니 매장에서 2E 이상을 함께 신어보고, 아킬레스가 약하다면 드롭이 높은 글리세린을 우선 고려하세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 스펙은 제조사·실측 자료 기준이며 가격은 변동될 수 있습니다. 과내전·평발이라고 모두 안정화가 정답은 아니므로(중립화가 맞는 경우도 있음), 통증이 있다면 보행 분석을 권합니다.</p>
`,
  },
  {
    id: 'stability-running-shoes-overpronation-flat-feet-2026',
    slug: 'stability-running-shoes-overpronation-flat-feet-2026',
    title: '평발·과내전 안정화 러닝화 추천 2026 | 카야노 33부터 14만원대 가성비까지 — 발볼·무게·지지 방식별 비교',
    description: '발이 안쪽으로 무너지는 과내전(오버프로네이션)·평발 러너에게 안정화 러닝화는 부상 예방의 핵심입니다. 아식스 카야노 33을 비롯해 브룩스 글리세린·뉴발란스 860·사코니 가이드 등 주요 안정화 11종을 지지 방식(가이드레일·프레임)·무게·발볼·가격으로 비교하고, 과내전 자가진단과 평발 한국 러너를 위한 선택법까지 정리했습니다.',
    thumbnail: '/images/blog/stability-running-shoes-overpronation-flat-feet-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-10',
    category: 'guide' as const,
    readingTime: 9,
    tags: ['안정화 러닝화', '평발', '과내전', '오버프로네이션', '카야노 33', '러닝화 추천', '안정화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>발이 안쪽으로 무너지는 <strong>과내전(오버프로네이션)·평발</strong>이라면, 안쪽을 받쳐주는 <strong>안정화 러닝화</strong>가 무릎·발목 부상을 줄여줍니다</li>
    <li>종합 톱픽은 <strong><a href="/shoes/asics-gel-kayano-33">아식스 카야노 33</a></strong> — 13년 만에 부드러워진 FLUIDSUPPORT로 "지지하되 딱딱하지 않은" 균형이 좋습니다(우리 사이트에서도 가장 많이 보는 안정화)</li>
    <li>가성비라면 <a href="/shoes/saucony-guide-18">사코니 가이드 18</a>·<a href="/shoes/mizuno-wave-inspire-21">미즈노 인스파이어 21</a>(15만원대), 평발 특화는 <a href="/shoes/new-balance-860-v14">뉴발 860 v14</a>가 답입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🦶</span>
  <div class="callout-body">
    <p class="callout-title">나는 안정화가 필요할까? — 30초 자가진단</p>
    <p>① 신던 운동화 <strong>밑창 안쪽</strong>이 유독 닳았다 ② 맨발로 서면 발 안쪽 <strong>아치가 거의 바닥에 닿는다</strong>(평발) ③ 달리면 무릎이 안쪽으로 모인다 ④ 정강이·무릎 안쪽 통증이 잦다 — 2개 이상이면 <strong>과내전</strong> 경향일 수 있어 안정화가 도움이 됩니다. 정확한 유형은 <a href="/blog/pronation-type-running-shoe-guide-2026">내전(프로네이션) 유형 가이드</a>에서 확인하세요.</p>
  </div>
</div>

<h2>안정화 신발, 어떻게 고를까 — 3가지 기준</h2>
<ul>
  <li><strong>지지 방식</strong> — 요즘 안정화는 딱딱한 기둥(미디엄 포스트) 대신, 양옆에서 부드럽게 감싸는 방식이 대세입니다. 아식스 <strong>FLUIDSUPPORT</strong>, 브룩스 <strong>GuideRails</strong>, 호카 <strong>J-Frame/H-Frame</strong>이 대표적이죠. 자연스러운 착화감을 원하면 이런 "가이드형"이 좋습니다</li>
  <li><strong>발볼·와이드</strong> — 평발은 발볼도 넓은 경우가 많습니다. 다행히 아래 모델 대부분 <strong>와이드(2E/4E) 옵션</strong>이 있어요</li>
  <li><strong>무게·가격</strong> — 안정화는 보통 290~330g으로 무거운 편. 가벼움을 원하면 호카 아라히, 가성비는 15만원대 사코니·미즈노가 강합니다</li>
</ul>

<h2>안정화 러닝화 비교 — 주요 11종</h2>
<table>
  <thead>
    <tr><th>모델</th><th>지지 방식</th><th>무게</th><th>가격</th><th>특징</th></tr>
  </thead>
  <tbody>
    <tr><td><strong><a href="/shoes/asics-gel-kayano-33">아식스 카야노 33</a></strong> 👑</td><td>FLUIDSUPPORT</td><td>298g</td><td>209,000</td><td>종합 1위, 부드러워진 균형</td></tr>
    <tr><td><a href="/shoes/brooks-glycerin-gts-22">브룩스 글리세린 GTS 22</a></td><td>GuideRails</td><td>305g</td><td>209,000</td><td>프리미엄 푹신 안정화</td></tr>
    <tr><td><a href="/shoes/brooks-adrenaline-gts-25">브룩스 아드레날린 GTS 25</a></td><td>GuideRails</td><td>300g</td><td>189,000</td><td>과내전 입문의 정답</td></tr>
    <tr><td><a href="/shoes/hoka-gaviota-6">호카 가비오타 6</a></td><td>J-Frame</td><td>299g</td><td>239,000</td><td>최강 안정·맥스쿠션</td></tr>
    <tr><td><a href="/shoes/hoka-arahi-8">호카 아라히 8</a></td><td>H-Frame</td><td><strong>259g</strong></td><td>199,000</td><td>가장 가벼운 안정화</td></tr>
    <tr><td><a href="/shoes/new-balance-860-v14">뉴발란스 860 v14</a></td><td>듀얼 폼</td><td>295g</td><td>179,000</td><td>평발 특화·4종 와이드</td></tr>
    <tr><td><a href="/shoes/saucony-guide-18">사코니 가이드 18</a></td><td>광폭 플랫폼</td><td>278g</td><td><strong>159,000</strong></td><td>가성비·카야노 절반값</td></tr>
    <tr><td><a href="/shoes/mizuno-wave-inspire-21">미즈노 인스파이어 21</a></td><td>웨이브 플레이트</td><td>286g</td><td><strong>159,000</strong></td><td>900km 내구·가성비 끝판</td></tr>
    <tr><td><a href="/shoes/nike-structure-26">나이키 스트럭처 26</a></td><td>와이드 베이스</td><td>296g</td><td>169,000</td><td>14만원대 가성비</td></tr>
  </tbody>
</table>

<h2>👑 종합 톱픽 — 아식스 카야노 33</h2>
<p><a href="/shoes/asics-gel-kayano-33">카야노 33</a>은 13년간 이어온 딱딱한 안정 기둥을 버리고 <strong>FLUIDSUPPORT + 듀얼 폼</strong>으로 "지지는 하되 부드러운" 방향으로 바뀌었습니다. 그만큼 호불호도 갈리는데, 자세한 변화는 <a href="/blog/asics-gel-kayano-33-review">카야노 33 솔직 리뷰</a>와 <a href="/blog/asics-kayano-32-vs-33-comparison">32 vs 33 비교</a>에서 정리했어요. 단단한 클래식 안정감을 원하면 32가, 부드러운 신형을 원하면 33이 맞습니다.</p>

<div class="callout tip">
  <span class="callout-icon">⚖️</span>
  <div class="callout-body">
    <p class="callout-title">대표 안정화 4종 나란히 비교</p>
    <p>카야노 33과 가성비·평발 대안을 한 화면에서 견줘보세요 — 쿠셔닝·무게·안정성·가성비 점수가 한눈에 들어옵니다.<br><strong><a href="/compare?shoes=asics-gel-kayano-33,brooks-glycerin-gts-22,new-balance-860-v15,saucony-guide-18">→ 카야노 33 · 글리세린 · 860 · 가이드 18 비교하기</a></strong></p>
  </div>
</div>

<h2>목적별 베스트</h2>
<ul>
  <li><strong>가성비 (15만원대)</strong> — <a href="/shoes/saucony-guide-18">사코니 가이드 18</a>, <a href="/shoes/mizuno-wave-inspire-21">미즈노 인스파이어 21</a>. 카야노 절반 값에 충분한 안정성</li>
  <li><strong>평발 특화·와이드</strong> — <a href="/shoes/new-balance-860-v14">뉴발 860 v14</a>(4종 와이드, 17만원대). 신상 <a href="/blog/new-balance-860-v14-vs-v15-comparison">v15와의 차이</a>도 확인하세요</li>
  <li><strong>맥스쿠션 안정</strong> — <a href="/shoes/hoka-gaviota-6">호카 가비오타 6</a>. 무릎 부담 큰 러너의 든든한 선택</li>
  <li><strong>가벼운 안정화</strong> — <a href="/shoes/hoka-arahi-8">호카 아라히 8</a>(259g). 안정화답지 않게 경쾌</li>
  <li><strong>과내전 입문</strong> — <a href="/shoes/brooks-adrenaline-gts-25">브룩스 아드레날린 GTS 25</a>. 부드러운 GuideRails로 첫 안정화에 무난</li>
</ul>

<h2>평발 한국 러너가 꼭 챙길 것</h2>
<p>평발은 아치뿐 아니라 <strong>발볼도 넓은</strong> 경우가 많습니다. 위 모델 대부분 와이드 옵션이 있으니, 매장 착화 시 <strong>2E 이상</strong>을 함께 신어보세요. 또 안정화에 의존하기보다 <a href="/blog/running-cadence-guide-2026">케이던스(보속)</a>를 점검하고, 무릎 통증이 있다면 <a href="/blog/knee-pain-running-shoes">무릎 통증 러닝화 가이드</a>로 신발·착지를 함께 보는 게 근본 해결에 가깝습니다. 더 많은 안정화 모델은 <a href="/best/stability">안정화 추천 페이지</a>에서 비교할 수 있습니다.</p>

<h2>마무리</h2>
<p>안정화 러닝화의 핵심은 "내 발이 얼마나 무너지느냐"에 맞는 지지를 고르는 것입니다. 잘 모르겠다면 <strong>부드러운 가이드형(카야노 33·아드레날린·가이드 18)</strong>부터 시작해 보세요 — 과하지 않게 받쳐주면서 자연스러운 착화감을 줍니다. 평발·과내전이라고 무거운 신발만 신을 필요는 없습니다. 본인 발볼과 예산에 맞춰, 위 비교표에서 한 켤레를 골라보세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 일반적인 러닝화 정보로, 과내전·평발이 모두 안정화를 필요로 하는 것은 아닙니다(중립화가 더 맞는 경우도 있습니다). 통증이 지속되면 전문가의 보행 분석·진료를 받으세요. 가격은 변동될 수 있습니다.</p>
`,
  },
  {
    id: 'running-cadence-guide-2026',
    slug: 'running-cadence-guide-2026',
    title: '달리기 효율은 \'보속\'에서 갈린다 — 케이던스 높이기 가이드 | \'분당 180보\' 신화의 진실·부상 예방·올리는 법',
    description: '러닝 케이던스(보속)는 부상 예방과 효율의 숨은 열쇠입니다. "무조건 분당 180보"라는 말은 반은 맞고 반은 틀렸죠. 케이던스가 무엇인지, 180 신화의 진실(키·다리 길이에 따른 개인차), 보속을 높이면 왜 무릎 충격이 줄어드는지(오버스트라이드), 내 케이던스 확인법과 안전하게 올리는 법까지 정리했습니다.',
    thumbnail: '/images/blog/running-cadence-guide-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-10',
    category: 'tips' as const,
    readingTime: 7,
    tags: ['케이던스', '보속', '러닝 효율', '부상 예방', '러닝 폼', '오버스트라이드', '러닝 팁'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>케이던스(보속)</strong>는 1분간 양발이 땅에 닿는 횟수(spm)로, 같은 속도라도 보속이 높으면 <strong>보폭이 짧아져 착지 충격이 줄어듭니다</strong></li>
    <li><strong>"무조건 180보"는 신화</strong> — 엘리트 평균에서 나온 수치일 뿐, 적정 케이던스는 키·다리 길이·속도에 따라 다릅니다</li>
    <li>핵심은 절대 수치가 아니라 <strong>오버스트라이드(발이 몸 앞에 착지) 교정</strong> — 현재보다 5%씩 점진적으로 올리는 게 안전합니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">👟</span>
  <div class="callout-body">
    <p class="callout-title">케이던스가 왜 중요할까</p>
    <p>러닝 부상의 상당수는 '어떻게 착지하느냐'에서 시작됩니다. 보폭을 크게 벌려 발이 <strong>몸보다 앞에 떨어지면(오버스트라이드)</strong>, 브레이크가 걸리며 무릎·정강이에 충격이 집중되죠. 케이던스를 살짝 높이면 자연히 보폭이 짧아지고 착지가 몸 아래로 들어와, 같은 속도에서도 충격과 부상 위험이 줄어듭니다.</p>
  </div>
</div>

<h2>케이던스란?</h2>
<p>케이던스는 <strong>1분 동안 양발이 지면에 닿는 총 횟수</strong>(steps per minute, spm)입니다. 한쪽 발만 세면 절반이 되죠. 대부분의 GPS 러닝 워치가 자동으로 측정해 줍니다. 같은 페이스(속도)는 '보폭 × 케이던스'로 만들어지므로, 보폭을 줄이고 케이던스를 높이면 같은 속도를 더 부드럽게 낼 수 있습니다.</p>

<h2>'분당 180보' 신화의 진실</h2>
<p>"케이던스는 180이 정답"이라는 말이 널리 퍼져 있습니다. 이 숫자는 1984년 올림픽에서 코치 잭 다니엘스가 엘리트 선수들을 관찰해 평균 180 안팎이었다는 데서 나왔죠. 하지만 이건 <strong>최정상 선수들의, 그것도 레이스 페이스에서의 평균</strong>입니다.</p>
<ul>
  <li><strong>키와 다리 길이</strong>에 따라 적정 케이던스가 다릅니다 — 다리가 길수록 자연 케이던스는 낮은 경향</li>
  <li><strong>속도</strong>에 따라 변합니다 — 느린 조깅은 160대, 빠른 레이스는 180+가 자연스럽습니다</li>
  <li>일반 러너가 무리하게 180에 맞추면 오히려 비효율적이고 종아리에 부담이 갈 수 있습니다</li>
</ul>
<p>즉 목표는 '180 달성'이 아니라, <strong>지금 내 케이던스가 지나치게 낮아 오버스트라이드를 유발하는지</strong> 점검하는 것입니다.</p>

<h2>케이던스와 부상 — 핵심 연결고리</h2>
<p>케이던스를 5~10% 높이면 보폭이 짧아져 발이 몸 아래쪽으로 착지하고, 무릎과 정강이에 가해지는 충격력이 줄어든다는 연구가 많습니다. <a href="/blog/knee-pain-running-shoes">무릎 통증</a>이나 정강이 통증(신스프린트)에 시달린다면, 신발 교체 전에 케이던스부터 점검할 가치가 있습니다. 착지 패턴이 고민이라면 <a href="/blog/pronation-type-running-shoe-guide-2026">내전(프로네이션) 유형 가이드</a>도 함께 보세요.</p>

<div class="callout tip">
  <span class="callout-icon">📲</span>
  <div class="callout-body">
    <p class="callout-title">내 케이던스 확인법</p>
    <p>GPS 워치가 있으면 러닝 중 평균 케이던스가 기록됩니다. 없다면 <strong>30초간 한쪽 발이 땅에 닿는 횟수를 세고 ×4</strong> 하면 됩니다(양발 ×2, 분당 ×2). 편안한 조깅에서 150 이하로 낮다면, 오버스트라이드 가능성을 의심해 볼 만합니다.</p>
  </div>
</div>

<h2>안전하게 올리는 법</h2>
<ol>
  <li><strong>현재 케이던스부터 측정</strong> — 기준선을 알아야 합니다</li>
  <li><strong>5%씩 점진적으로</strong> — 160이라면 168 정도를 다음 목표로. 한 번에 180으로 점프하지 마세요</li>
  <li><strong>메트로놈·BPM 음악 활용</strong> — 목표 spm에 맞춘 메트로놈 앱이나 같은 BPM의 플레이리스트로 리듬을 맞춥니다</li>
  <li><strong>"짧고 가볍게"를 의식</strong> — 발을 멀리 뻗지 말고 몸 아래에서 빠르게 회전시킨다는 느낌으로</li>
  <li><strong>짧은 구간부터</strong> — 1km만 새 케이던스로 달리고 점차 늘립니다</li>
</ol>
<p>신발도 도움이 됩니다 — 과한 보폭을 부추기지 않는 적당한 드롭의 <a href="/best/daily-trainer">데일리 트레이너</a>가 케이던스 교정 연습에 무난합니다. 거리별로 페이스와 케이던스가 어떻게 달라지는지는 <a href="/blog/race-distance-difficulty-guide-2026">거리별 체감 난이도</a> 글과 함께 보면 이해가 쉽습니다.</p>

<h2>마무리</h2>
<p>케이던스는 '180이라는 정답'을 좇는 게 아니라, <strong>내 착지를 몸 아래로 가져와 충격을 줄이는 도구</strong>입니다. 무릎·정강이 통증이 반복된다면 보속을 5%만 올려보세요. 작은 변화지만 부상 위험과 효율에서 큰 차이를 만들 수 있습니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 일반적인 러닝 폼·훈련 정보로, 개인의 의학적 진단을 대체하지 않습니다. 통증이 지속되면 전문가의 진료를 받으세요.</p>
`,
  },
  {
    id: 'running-warmup-cooldown-guide-2026',
    slug: 'running-warmup-cooldown-guide-2026',
    title: '러닝 전후 10분이 부상을 막는다 — 워밍업·쿨다운 완벽 루틴 | 정적 스트레칭은 \'언제\'? 동적 워밍업 동작 정리',
    description: '달리기 전 정적 스트레칭, 사실 부상 예방에 큰 도움이 안 됩니다. 워밍업은 \'동적\'으로, 정적 스트레칭은 \'끝나고\'가 핵심이죠. 러닝 전 체온·혈류를 올리는 동적 워밍업 동작과, 달리기 후 회복을 돕는 쿨다운·정적 스트레칭 루틴을 10분 안에 끝내는 법으로 정리했습니다. 부상 없이 오래 달리고 싶은 러너를 위한 가이드입니다.',
    thumbnail: '/images/blog/running-warmup-cooldown-guide-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-10',
    category: 'tips' as const,
    readingTime: 7,
    tags: ['워밍업', '쿨다운', '동적 스트레칭', '부상 예방', '러닝 루틴', '러닝 팁'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>달리기 <strong>전</strong>엔 정적 스트레칭이 아니라 <strong>동적 워밍업</strong>(움직이며 관절·근육 가동) — 체온과 혈류를 올려 부상을 줄이고 수행을 높입니다</li>
    <li>정적 스트레칭(한 자세로 늘리기)은 <strong>달리기 끝난 뒤</strong>에 — 운동 전 정적 스트레칭은 오히려 순간 근력을 떨어뜨릴 수 있습니다</li>
    <li><strong>쿨다운</strong>은 점진적 감속 + 정적 스트레칭 + 폼롤러로 — 회복을 앞당기고 다음 러닝의 질을 높입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🔥</span>
  <div class="callout-body">
    <p class="callout-title">"바로 뛰면 안 되나요?"</p>
    <p>차가운 엔진을 풀가속하면 무리가 가듯, 데워지지 않은 몸으로 바로 달리면 근육·힘줄 부상 위험이 커집니다. 그렇다고 출발 전 다리를 쭉쭉 늘리는 정적 스트레칭이 답은 아니에요. 운동 전엔 <strong>'움직이며 데우는' 동적 워밍업</strong>이, 운동 후엔 <strong>'늘리고 진정시키는' 정적 스트레칭</strong>이 맞습니다.</p>
  </div>
</div>

<h2>왜 워밍업이 필요한가</h2>
<p>워밍업은 단순히 '몸 푸는 것' 이상입니다. <strong>근육 온도와 혈류를 높여</strong> 산소 공급을 원활히 하고, 관절 가동범위를 넓히며, 신경계를 깨워 달릴 준비를 시킵니다. 그 결과 부상 위험이 줄고 초반 페이스도 한결 편해지죠. 특히 템포런·인터벌 같은 고강도 훈련 전엔 워밍업이 필수입니다.</p>

<h2>달리기 전 — 동적 워밍업 (5분)</h2>
<p>제자리 또는 이동하며 관절을 '움직여서' 데우는 동작들입니다. 각 10~15회씩.</p>
<ul>
  <li><strong>레그 스윙</strong> — 벽을 짚고 다리를 앞뒤·좌우로 흔들기 (고관절 가동)</li>
  <li><strong>하이 니(High Knees)</strong> — 무릎을 가슴 쪽으로 올리며 제자리 걷기/조깅</li>
  <li><strong>버트 킥</strong> — 발뒤꿈치를 엉덩이로 차올리기</li>
  <li><strong>런지 워크</strong> — 앞으로 걸으며 런지 (둔근·햄스트링 활성)</li>
  <li><strong>가벼운 조깅 2~3분</strong> — 본 운동 페이스보다 느리게 마무리 워밍업</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">달리기 전 '정적 스트레칭'은 피하세요</p>
    <p>출발 전 다리를 한 자세로 30초씩 길게 늘리는 정적 스트레칭은, 일시적으로 근력·파워를 떨어뜨린다는 연구가 많습니다. 부상 예방 효과도 동적 워밍업만 못하죠. 정적 스트레칭은 <strong>달리기가 끝난 뒤</strong>로 미루세요.</p>
  </div>
</div>

<h2>달리기 후 — 쿨다운 + 정적 스트레칭 (5분)</h2>
<ol>
  <li><strong>점진적 감속</strong> — 갑자기 멈추지 말고 2~3분간 천천히 걷거나 가볍게 조깅해 심박을 낮춥니다</li>
  <li><strong>정적 스트레칭</strong> — 종아리·햄스트링·대퇴사두·둔근·고관절을 각 20~30초씩 늘립니다(이제는 OK)</li>
  <li><strong>폼롤러</strong> — 종아리·허벅지·IT밴드를 굴려 뭉친 근막을 풀면 회복이 빨라집니다</li>
</ol>
<p>쿨다운은 다음 러닝의 컨디션을 좌우합니다. 특히 장거리·고강도 뒤에는 생략하지 마세요. 호흡이 빨리 안 가라앉는다면 <a href="/blog/running-breathing-guide-korea">호흡법 가이드</a>도 도움이 됩니다.</p>

<h2>부상이 잦다면 — 워밍업부터 점검</h2>
<p>무릎·정강이·아킬레스 통증이 반복된다면 신발 탓만 하기 전에 워밍업 습관을 돌아보세요. 그래도 통증이 지속되면 <a href="/blog/knee-pain-running-shoes">무릎 통증 러닝화 가이드</a>나 <a href="/blog/pronation-type-running-shoe-guide-2026">내전 유형 가이드</a>로 신발·착지까지 함께 점검하는 게 좋습니다.</p>

<h2>마무리</h2>
<p>워밍업과 쿨다운에 드는 건 합쳐서 10분 남짓입니다. 이 10분이 부상으로 몇 주를 쉬는 일을 막아주죠. <strong>전엔 동적으로 데우고, 후엔 정적으로 풀어준다</strong> — 이 원칙만 기억하면 됩니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 일반적인 러닝 루틴·부상 예방 정보로, 개인의 의학적 진단을 대체하지 않습니다. 통증이 지속되면 전문가의 진료를 받으세요.</p>
`,
  },
  {
    id: 'race-timing-chip-net-gross-time-guide-2026',
    slug: 'race-timing-chip-net-gross-time-guide-2026',
    title: '같이 뛰었는데 내 기록이 더 빠르다? — 기록칩과 넷타임·그로스타임 완벽 정리 | RFID 원리·스타트 위치·반납까지',
    description: '마라톤 대회에서 친구와 나란히 골인했는데 기록이 다르게 나온 경험, 있으신가요? 비밀은 기록칩과 \'넷타임 vs 그로스타임\'에 있습니다. RFID 기록칩이 어떻게 시간을 재는지, 넷타임과 그로스타임이 왜 다른지, 출발선에서 어디에 서야 손해를 안 보는지, 칩 반납 주의사항까지 마라톤 입문자가 꼭 알아야 할 기록 측정의 모든 것을 정리했습니다.',
    thumbnail: '/images/blog/race-timing-chip-net-gross-time-guide-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-10',
    category: 'guide' as const,
    readingTime: 7,
    tags: ['기록칩', '넷타임', '그로스타임', '마라톤 기록', 'RFID', '대회 입문', '러닝'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>기록칩</strong>은 신발 끈이나 배번에 붙는 <strong>RFID 칩</strong>으로, 출발·중간·결승 지점의 매트를 밟을 때 시간을 자동 기록합니다</li>
    <li><strong>넷타임</strong>은 '내가 출발선을 통과한 순간~결승선', <strong>그로스타임</strong>은 '출발 신호(총성)~결승선' — 뒤쪽에 서서 출발하면 둘의 차이가 커집니다</li>
    <li>같이 골인해도 <strong>출발선 통과 시점이 다르면 넷타임이 다릅니다</strong>. 공정한 비교는 넷타임 기준이에요</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">⏱️</span>
  <div class="callout-body">
    <p class="callout-title">"분명 같이 들어왔는데 기록이 왜 달라?"</p>
    <p>대규모 마라톤에서 친구와 나란히 결승선을 통과했는데, 나중에 보니 기록이 1~2분씩 차이 나는 일이 흔합니다. 부정 출발도, 측정 오류도 아닙니다. <strong>'언제부터 시간을 쟀느냐'</strong>가 달랐을 뿐이죠. 이 차이를 이해하면 내 기록을 정확히 읽고, 다음 대회에서 더 좋은 기록을 노리는 법도 보입니다.</p>
  </div>
</div>

<h2>기록칩이란? — 신발에 붙는 작은 RFID</h2>
<p>기록칩은 <strong>RFID(무선 인식) 기술</strong>을 쓰는 작은 칩입니다. 출발선·반환점·결승선 등에 깔린 <strong>감지 매트(timing mat)</strong> 위를 지날 때마다, 칩이 고유 번호와 통과 시각을 자동으로 기록하죠. 형태는 크게 두 가지입니다.</p>
<ul>
  <li><strong>배번 일체형</strong> — 배번(빕) 뒷면에 칩이 내장. 별도 부착·반납 불필요(요즘 대부분)</li>
  <li><strong>슈즈칩(반납형)</strong> — 신발 끈에 케이블타이로 묶는 칩. 완주 후 <strong>반납</strong>해야 하며, 미반납 시 보증금 차감·기록 누락이 생길 수 있습니다</li>
</ul>
<p>매트를 제대로 밟지 않거나 칩이 떨어지면 기록이 누락될 수 있으니, 슈즈칩은 출발 전 단단히 고정하세요.</p>

<h2>넷타임 vs 그로스타임 — 핵심 차이</h2>
<p>대회 기록에는 보통 두 가지 시간이 찍힙니다.</p>
<table>
  <thead>
    <tr><th>구분</th><th>측정 시작</th><th>의미</th><th>누구에게 유리?</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>그로스타임</strong><br>(Gun Time)</td><td>출발 <strong>신호(총성)</strong> 순간</td><td>공식 출발~결승. 우승·시상 기준</td><td>맨 앞 출발자</td></tr>
    <tr><td><strong>넷타임</strong><br>(Net/Chip Time)</td><td>내가 <strong>출발선 매트</strong>를 밟은 순간</td><td>실제 내가 달린 시간</td><td>모든 참가자(공정)</td></tr>
  </tbody>
</table>
<p>수천 명이 출발하는 대회에선, 뒤쪽에 선 사람이 출발선을 통과하기까지 <strong>몇 분</strong>이 걸리기도 합니다. 그동안 그로스타임은 이미 흘러가죠. 그래서 <strong>일반 참가자끼리의 기록 비교·자기 기록(PR) 판단은 넷타임이 공정</strong>합니다. 다만 <strong>대회 공식 순위·시상은 보통 그로스타임</strong> 기준이라, 상위권을 노린다면 앞쪽 출발 그룹 배정이 중요합니다.</p>

<div class="callout tip">
  <span class="callout-icon">📍</span>
  <div class="callout-body">
    <p class="callout-title">스타트 위치 팁</p>
    <p>기록이 목표라면 <strong>본인 예상 기록에 맞는 출발 그룹(웨이브)</strong>에 서세요. 너무 뒤에 서면 출발 정체로 초반 페이스가 흐트러지고 그로스타임 손해가 큽니다. 반대로 실력보다 앞에 서면 빠른 러너들에게 떠밀려 오버페이스하기 쉽습니다. 접수 시 기록 제출로 그룹이 배정되는 대회가 많으니 정직하게 입력하세요.</p>
  </div>
</div>

<h2>내 기록은 어떻게 확인하나</h2>
<p>대부분의 대회는 완주 후 <strong>문자(SMS)나 대회 홈페이지·기록 조회 사이트</strong>에서 배번/이름으로 기록을 확인할 수 있습니다. 넷타임과 그로스타임, 구간별 랩타임까지 제공되는 경우도 많죠. 구간 기록을 보면 어디서 페이스가 무너졌는지 복기할 수 있어, 다음 대회 전략에 큰 도움이 됩니다.</p>

<h2>입문자가 자주 하는 실수</h2>
<ul>
  <li><strong>슈즈칩 반납 깜빡</strong> — 완주 직후 정신없을 때 놓치기 쉽습니다. 반납 부스 위치를 미리 확인하세요</li>
  <li><strong>배번을 접거나 가림</strong> — 일체형 칩은 배번을 구기면 인식이 안 될 수 있습니다. 펴서 앞면에 잘 보이게 부착</li>
  <li><strong>출발 매트 안 밟고 옆으로 출발</strong> — 넷타임 시작이 안 찍혀 기록이 그로스타임만 남거나 누락될 수 있습니다</li>
  <li><strong>기록에 일희일비</strong> — 넷타임 기준으로 보고, 거리별로 난이도가 다르다는 점(<a href="/blog/race-distance-difficulty-guide-2026">거리별 체감 난이도</a>)도 함께 고려하세요</li>
</ul>

<h2>마무리</h2>
<p>기록칩과 넷타임·그로스타임의 원리만 알아도 내 기록을 정확히 읽고, 출발 위치 전략까지 세울 수 있습니다. 기록 단축이 목표라면 측정 방식 이해에 더해 <a href="/blog/tempo-run-training-guide-korea">템포런</a> 같은 역치 훈련으로 실제 능력을 끌어올리는 게 핵심이고요. 다음 도전할 대회를 찾고 있다면 <a href="/marathon">마라톤 캘린더</a>에서 일정을 확인해 보세요. 정확히 알고 달리면, 숫자 너머의 내 성장도 더 잘 보입니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 일반적인 대회 기록 측정 정보로, 대회마다 칩 종류·공식 기록 기준(넷/그로스)·반납 규정이 다를 수 있습니다. 참가 대회의 공식 안내를 반드시 확인하세요. (참고 글감: @dongmaclub, 2026-06-06)</p>
`,
  },
  {
    id: 'seoul-100k-2026-registration',
    slug: 'seoul-100k-2026-registration',
    title: '서울 한복판에서 울트라트레일을 — 2026 서울 100K 접수 시작 | 신규 20K로 입문도 가능, 100K·50K 종목·자격·코스 총정리',
    description: '광화문광장에서 출발해 인왕산·북한산·수락산·청계천·한강을 잇는 도심 울트라트레일, 2026 서울 100K가 6월 2일 선착순 접수를 시작했습니다. 9월 19~20일 개최, 올해 신설된 20K(1,700명·자격 제한 없음)는 울트라트레일 입문에 딱이죠. 100K·50K·20K 거리·누적고도·참가비·자격 요건과 필수 장비, 도심 트레일만의 매력까지 정리했습니다.',
    thumbnail: '/images/blog/seoul-100k-2026-registration.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-09',
    category: 'news' as const,
    readingTime: 8,
    tags: ['서울 100K', '울트라트레일', '도심 트레일', '트레일러닝', '20K', '광화문', '대회', '트레일화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>2026 서울 100K</strong>(서울 국제 울트라트레일러닝 대회)가 <strong>6월 2일 선착순 접수를 시작</strong>했습니다. 9월 19~20일 광화문광장 출발, 서울의 산·둘레길·한강·청계천을 잇는 <strong>도심 울트라트레일</strong>입니다</li>
    <li>올해 <strong>20K 종목이 신설</strong>(정원 1,700명·07:30 출발·야간 없음·자격 제한 없음)돼, 울트라트레일 입문자도 도전할 수 있게 됐습니다</li>
    <li>단 <strong>100K·50K는 ITRA 포인트 자격이 필요</strong>하고 트레일화·헤드램프 등 의무 장비가 있습니다 — 완전 초보라면 20K부터 시작하세요</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🌃</span>
  <div class="callout-body">
    <p class="callout-title">접수 시작 — 도심에서 즐기는 울트라트레일</p>
    <p>2019년 시작된 서울시 주최 <strong>서울 100K</strong>가 올해도 돌아옵니다. 9월 19~20일 광화문광장에서 출발해 서울의 대표 산과 둘레길, 한강과 청계천을 한 번에 달리는 독특한 대회죠. UTMB 인덱스·ITRA에도 등재돼 있습니다. <strong>6월 2일 오전 10시부터 IntheTrail에서 선착순 접수</strong>가 시작됐고, 특히 올해는 입문자용 20K가 새로 생겼습니다.</p>
  </div>
</div>

<h2>'도심' 울트라트레일이 뭐가 특별한가</h2>
<p>일반적인 울트라트레일이나 <a href="/blog/untangodo-skyrace-10th-anniversary-2026">운탄고도 스카이레이스</a> 같은 산악 대회는 고산·오지에서 열립니다. 반면 서울 100K는 <strong>광화문 한복판에서 출발·도착</strong>하죠. 그래서 차이가 큽니다.</p>
<ul>
  <li><strong>접근성</strong> — 대중교통으로 출발선까지. 응원·관람도 쉬움</li>
  <li><strong>도심 + 자연의 혼합</strong> — 인왕산·북악산·북한산·수락산·불암산·아차산 등 서울 외곽 산을 잇고, 청계천·한강 강변과 서울 성곽길·둘레길까지 통과</li>
  <li><strong>야경 러닝</strong> — 100K는 새벽 5시 출발해 야간 구간을 지나며, 도심 야경을 보며 달리는 경험이 독특합니다</li>
</ul>
<p>트레일러닝 자체가 처음이라면 <a href="/blog/trail-running-appeal-beginner-guide-2026">트레일 러닝 입문 가이드</a>를, 국내 트레일·스카이레이스 시즌 전체가 궁금하면 <a href="/blog/korea-trail-skyrace-guide-2026">트레일·스카이레이스 대회 가이드</a>를 함께 보세요.</p>

<h2>2026 종목 한눈에 보기</h2>
<table>
  <thead>
    <tr><th>종목</th><th>거리(실측)</th><th>누적 고도</th><th>제한 시간</th><th>참가비</th><th>정원</th><th>자격</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>ULTRA 100K</strong></td><td>약 109km</td><td>약 4,700~5,200m</td><td>28시간 30분</td><td>280,000원</td><td>500</td><td>ITRA 2점</td></tr>
    <tr><td><strong>SKY 50K</strong></td><td>약 54km</td><td>약 2,800~3,200m</td><td>14시간</td><td>200,000원</td><td>500</td><td>ITRA 1점</td></tr>
    <tr><td><strong>20K</strong>(신규)</td><td>20km</td><td>약 1,100m</td><td>—</td><td>120,000원</td><td><strong>1,700</strong></td><td><strong>제한 없음</strong></td></tr>
  </tbody>
</table>
<p>100K의 실제 거리는 약 109km, 누적 상승은 5,000m에 육박합니다(완주 시간 보통 18~26시간). 서울의 거의 모든 주요 산을 잇는 셈이라 이름만 '100K'지 난이도는 극한급이죠.</p>

<div class="callout tip">
  <span class="callout-icon">🟢</span>
  <div class="callout-body">
    <p class="callout-title">입문자라면 — 올해 신설된 20K</p>
    <p>20K는 <strong>오전 7:30 출발(야간 구간 없음)·정원 1,700명·ITRA 자격 요건 없음</strong>으로, 셋 중 가장 접근하기 좋습니다. 기존 10K 종목을 두 배로 확장한 형태로 보이며, 도심 트레일을 가볍게 경험하기에 적당하죠. 다만 <strong>2026 코스 세부와 20K 컷오프·필수 장비는 아직 공식 점검 중</strong>이니, 확정 안내는 공식 채널(seoul100k.com)에서 확인하세요.</p>
  </div>
</div>

<h2>준비물 — 트레일화·헤드램프는 필수</h2>
<p>서울 100K는 도심에서 출발하지만 코스 대부분이 <strong>산악 트레일</strong>입니다. 인왕산 기차바위처럼 미끄러운 암릉 구간도 있어 로드화로는 위험하죠. 의무·권장 장비는 이렇습니다.</p>
<ul>
  <li><strong>트레일러닝화</strong>(필수) — 그립과 보호가 중요. <a href="/best/trail">트레일화 추천</a>에서 <a href="/shoes/hoka-speedgoat-6">호카 스피드고트 6</a> 같은 험로 대응 모델을 확인하세요</li>
  <li><strong>헤드램프</strong> — 100K 야간 구간 필수(50K 새벽 출발도 권장)</li>
  <li><strong>트레일 배낭 + 물통(1L↑)</strong> — 일회용 컵 미제공</li>
  <li><strong>방수 재킷·비상식량·보조배터리·119 앱</strong> 등</li>
</ul>

<h2>접수 정보</h2>
<ul>
  <li><strong>접수 시작</strong> — 2026년 6월 2일(월) 오전 10시부터 <strong>선착순</strong></li>
  <li><strong>접수처</strong> — IntheTrail (inthetrail.com)</li>
  <li><strong>대회일</strong> — 2026년 9월 19~20일(토~일), 광화문광장</li>
  <li><strong>참고</strong> — 100K·50K는 새벽 5시 출발이라 전날 인근 숙박 권장(노보텔 패키지 별도)</li>
</ul>
<p>선착순이라 인기 종목(특히 입문용 20K)은 조기 마감될 수 있으니, 도전을 마음먹었다면 서두르는 게 좋습니다.</p>

<h2>마무리</h2>
<p>서울 100K는 "도심 한복판에서 출발하는 울트라트레일"이라는, 세계적으로도 드문 포맷의 대회입니다. 100K·50K는 ITRA 포인트가 필요한 상급자용이지만, <strong>올해 신설된 20K 덕분에 트레일 입문자에게도 문이 열렸죠</strong>. 산악 스카이레이스인 <a href="/blog/untangodo-skyrace-10th-anniversary-2026">운탄고도</a>가 부담스러웠다면, 접근성 좋은 서울 100K의 20K로 첫 트레일을 경험해 보는 것도 좋은 선택입니다. 트레일화 한 켤레부터 준비해 보세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 서울100K 공식 사이트·서울시 보도자료·ITRA 등재 정보를 정리한 내용입니다. 2026 코스 세부와 20K 컷오프·필수 장비 등은 공식 점검·발표 전 단계라 변동될 수 있으니, 접수·코스 확정 정보는 공식 채널(seoul100k.com, IntheTrail)에서 확인하세요. (확인 시점: 2026-06-09)</p>
`,
  },
  {
    id: 'untangodo-skyrace-10th-anniversary-2026',
    slug: 'untangodo-skyrace-10th-anniversary-2026',
    title: '이번 주말, 한국 최대 스카이레이스가 10살이 된다 — 운탄고도 스카이레이스 10주년 | 스카이레이스란? 종목·코스·난이도와 내년 도전 가이드',
    description: '6월 13~14일 강원 정선 하이원리조트에서 운탄고도 스카이레이스가 10주년(10회)을 맞습니다. 옛 석탄 운반로를 달리는 한국 대표 스카이레이스로, 전날 6/12엔 10주년 스페셜 나이트 트레일(16km)도 열리죠. 스카이레이스가 일반 트레일·로드와 뭐가 다른지, SKY Run·Half·Marathon 종목과 코스 난이도, 트레일화 준비물, 그리고 내년 도전을 위한 접수 팁까지 정리했습니다.',
    thumbnail: '/images/blog/untangodo-skyrace-10th-anniversary-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-09',
    category: 'news' as const,
    readingTime: 8,
    tags: ['운탄고도 스카이레이스', '스카이레이스', '트레일러닝', '하이원리조트', '정선', '10주년', '트레일화', '대회'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>운탄고도 스카이레이스</strong>가 이번 주말(6/13~14, 정선 하이원리조트) <strong>10주년(2017년 1회 → 2026년 10회)</strong>을 맞습니다. 전날 6/12엔 10주년 스페셜 <strong>나이트 트레일(16km·+710m, 200명)</strong>도 열립니다</li>
    <li>스카이레이스는 트레일러닝의 한 갈래로 <strong>누적 고도가 크고 산악 코스라 로드화로는 불가</strong> — 트레일화·배낭·방풍이 사실상 필수입니다</li>
    <li>올해 본 대회는 이미 <strong>추첨 접수 마감</strong>(2월)이지만, 입문 종목 <strong>SKY Run 11.5km</strong>는 하프 완주자라면 내년 도전해볼 만합니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏔️</span>
  <div class="callout-body">
    <p class="callout-title">이번 주말, 정선 고원에서</p>
    <p>6월 13~14일 강원 정선 <strong>하이원리조트</strong>에서 <strong>운탄고도 스카이레이스</strong>가 열립니다. 2017년 시작해 올해로 <strong>10회·10주년</strong>, 세계 25개국 이상이 참가하고 UTMB 인덱스에도 등재된 한국 대표 스카이레이스죠. 호카(HOKA)가 5년 연속 메인 스폰서를 맡을 만큼 트레일 신(scene)의 간판 대회입니다. 10주년을 기념해 본 대회 전날(6/12)엔 야간 스페셜 세션까지 준비됐습니다.</p>
  </div>
</div>

<h2>'운탄고도'가 뭔가요?</h2>
<p>운탄고도(運炭高道)는 1960~70년대 강원도 탄광 지역에서 <strong>석탄을 나르던 옛 운반로</strong>를 뜻합니다. 영월·정선·태백 일대 해발 700~1,330m 고원 능선을 따라 이어진 <strong>총연장 173km</strong>의 길을, 하이원리조트가 '하늘길'로 정비해 대회 코스로 활용하죠. 이름의 '1330'은 최고점 만항재(1,330m)에서 왔습니다. 암벽·급경사보다 <strong>비교적 완만한 고원 숲길</strong>이 많고, 고지대라 6월에도 선선한 게 특징입니다.</p>

<h2>스카이레이스 = 로드도, 일반 트레일도 아니다</h2>
<p>스카이레이스(Skyrace)는 트레일러닝의 하위 장르로, <strong>누적 고도 상승이 크고 고지대 산악을 달리는</strong> 종목입니다. 로드 마라톤과 가장 큰 차이는 '속도'보다 <strong>오르막·내리막 기술과 등반력</strong>이 승부를 가른다는 점이에요.</p>
<ul>
  <li><strong>로드 러닝</strong> — 평지 포장도로, 페이스(속도) 중심</li>
  <li><strong>일반 트레일러닝</strong> — 흙길·산길, 로드보다 기술 필요</li>
  <li><strong>스카이레이스</strong> — 트레일 중에서도 <strong>고도 누적이 현저히 크고</strong>, 산악 코스라 로드화 사용 불가, 의무장비 규정이 더 엄격</li>
</ul>
<p>스카이레이스가 처음이라면 개념과 시즌 전체 흐름을 <a href="/blog/korea-trail-skyrace-guide-2026">한국 트레일·스카이레이스 대회 가이드</a>에서, 트레일러닝 자체가 낯설다면 <a href="/blog/trail-running-appeal-beginner-guide-2026">트레일 러닝 입문 가이드</a>에서 먼저 감을 잡는 걸 추천합니다.</p>

<h2>2026 종목 한눈에 보기</h2>
<table>
  <thead>
    <tr><th>종목</th><th>거리</th><th>누적 고도</th><th>제한 시간</th><th>참가비</th><th>난이도</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>SKY Run</strong></td><td>11.5km</td><td>610m</td><td>4시간</td><td>80,000원</td><td>입문 적합</td></tr>
    <tr><td><strong>SKY Half</strong></td><td>20.4km</td><td>1,005m</td><td>5시간</td><td>110,000원</td><td>중급</td></tr>
    <tr><td><strong>SKY Marathon</strong></td><td>42.2km</td><td>1,910m</td><td>8시간</td><td>150,000원</td><td>상급·엘리트</td></tr>
    <tr><td><strong>나이트 트레일</strong>(10주년)</td><td>16km</td><td>710m</td><td>—</td><td>별도</td><td>경험자(야간)</td></tr>
  </tbody>
</table>

<div class="callout tip">
  <span class="callout-icon">🌙</span>
  <div class="callout-body">
    <p class="callout-title">10주년 스페셜 — 나이트 트레일 (6/12)</p>
    <p>본 대회 전날인 <strong>6월 12일(금) 밤, 하이원리조트에서 16km·누적 710m</strong>의 나이트 트레일이 단 <strong>200명 한정</strong>으로 열립니다. 헤드램프를 켜고 고원을 달리는 특별 세션이죠. 사전등록(PRE-REGISTRATION) 방식으로 진행되며, <strong>참가비·출발 시각·의무장비 등 세부는 주최 측(@goodrunner_skyrace) 공지를 확인</strong>하세요(공식 페이지 정식 오픈 전 단계로 보입니다).</p>
  </div>
</div>

<h2>입문자도 가능할까? — SKY Run 11.5km</h2>
<p>네 종목 중 <strong>SKY Run(11.5km·누적 610m)</strong>이 가장 접근하기 좋습니다. 4시간 제한이라 여유도 있고요. 다만 <strong>로드 레이스와는 준비가 다릅니다</strong>. 하프마라톤 완주 체력이 있다면 거리 자체는 무리가 아니지만, 오르내림이 많아 무릎 부담이 크고 노면이 거칠어 <strong>트레일 특화 준비</strong>가 필요합니다. 나이트 트레일 16km는 야간+고도 조합이라 트레일 경험자에게 권합니다.</p>

<h2>준비물 — 트레일화는 '선택'이 아니라 '필수'</h2>
<p>하이원 하늘길은 돌길·흙길·뿌리 구간이 섞여 있어 <strong>로드화로는 미끄러지고 위험</strong>합니다. 실제로 2024년 참가자의 약 65%가 호카를 신었을 만큼 그립 좋은 트레일화가 표준이죠. 쿠셔닝과 접지력을 갖춘 <a href="/best/trail">트레일화</a>를 준비하세요 — 대표적으로 <a href="/shoes/hoka-speedgoat-6">호카 스피드고트 6</a> 같은 모델이 이런 고도·거친 노면에 강합니다. 그 외 배낭(수분·비상식량), 방풍 재킷(고산 돌풍·안개 대비)도 챙기는 게 안전합니다.</p>

<h2>내년에 도전하려면 — 접수 팁</h2>
<p>올해 본 대회는 이미 <strong>추첨 접수가 마감</strong>됐습니다(매년 2월 초 접수). 2025년엔 약 2,200명 정원에 <strong>1만 명 가까이 몰릴</strong> 만큼 경쟁이 치열하죠. 내년 도전을 노린다면 이렇게 준비하세요.</p>
<ul>
  <li><strong>2월 접수 기간을 놓치지 마세요</strong> — 굿러너컴퍼니(goodrunner.co.kr)에서 신청 후 추첨</li>
  <li><strong>겨울 동안 트레일 적응 훈련</strong> — 등산·언덕 반복 주행으로 등반력·하산력을 미리 키워두기</li>
  <li><strong>트레일화부터 장만</strong> — 한 켤레로 평소 산길 훈련까지 겸하면 일석이조</li>
  <li><strong>숙박은 일찍</strong> — 대회 기간 하이원리조트·정선 일대 숙소가 빠르게 찹니다</li>
</ul>

<h2>마무리</h2>
<p>운탄고도 스카이레이스 10주년은 단순한 레이스를 넘어 <strong>2박 3일 축제</strong>에 가깝습니다(요가·트레이닝 사전 프로그램, 먹거리 부스 등). 올해 출전권이 없더라도 한국 스카이레이스가 어디까지 왔는지 지켜볼 만한 주말이고, 트레일에 막 관심이 생겼다면 <strong>내년을 목표로 올여름부터 산을 타보는 것</strong>이 가장 좋은 출발입니다. 로드에서 트레일로 한 발 넓히고 싶은 러너에게 운탄고도는 더없이 좋은 목표가 되어줄 겁니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 굿러너컴퍼니·강원랜드 공식 자료와 ITRA·UTMB 등재 정보, 러닝 매체 보도를 정리한 내용입니다. 나이트 트레일 등 10주년 스페셜 세부(참가비·시각·의무장비)는 공식 발표 전 단계라 변동될 수 있으니 주최 측(@goodrunner_skyrace, goodrunner.co.kr) 공지를 확인하세요. (참고 글감: @goodrunner_co, 2026-06)</p>
`,
  },
  {
    id: 'race-distance-difficulty-guide-2026',
    slug: 'race-distance-difficulty-guide-2026',
    title: '풀코스 완주자도 10K·하프에서 무너지는 이유 — 거리별 \'체감 난이도\'의 과학 | 에너지 시스템·페이스 배분·거리별 훈련 처방',
    description: '"풀코스를 여러 번 완주했는데 왜 10K·하프가 더 힘들까?" 거리가 짧다고 쉬운 게 아닙니다. 거리마다 동원하는 에너지 시스템과 요구 강도가 다르기 때문이죠. 5K·10K·하프·풀코스가 각각 어떤 괴로움을 주는지, 풀 완주자가 짧은 거리에서 무너지는 진짜 이유(훈련 특이성)와 거리별 페이스 배분·훈련 처방까지 데이터로 정리했습니다.',
    thumbnail: '/images/blog/race-distance-difficulty-guide-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-09',
    category: 'guide' as const,
    readingTime: 8,
    tags: ['거리별 훈련', '페이스 배분', '에너지 시스템', '10K', '하프마라톤', '풀코스', '젖산역치', '러닝 훈련'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>거리가 짧다고 쉬운 게 아닙니다 — <strong>거리마다 동원하는 에너지 시스템과 요구 강도가 다르기</strong> 때문이죠. 10K·하프는 풀코스보다 <strong>훨씬 높은 강도</strong>를 오래 버텨야 합니다</li>
    <li>풀코스를 완주해도 10K가 힘든 건 <strong>훈련 특이성</strong> 때문 — LSD 위주로만 달리면 젖산역치 근처의 <strong>고강도 지속 능력</strong>이 길러지지 않습니다</li>
    <li>해법은 거리별로 다른 처방: 풀=<strong>지구력(LSD)</strong>, 하프·10K=<strong>젖산역치·템포</strong>, 5K=<strong>VO2max 인터벌</strong>. 페이스 배분 실수만 줄여도 체감 난이도가 확 떨어집니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">"풀 뛴 내가 왜 10K에서 헉헉대지?"</p>
    <p>러닝 커뮤니티에서 자주 나오는 고민입니다. 42.195km를 완주한 사람이 정작 10K 레이스나 하프에서 더 고통스러워하죠. 직관과 반대 같지만, 운동생리학적으로는 <strong>아주 당연한 현상</strong>입니다. 거리와 난이도는 비례하지 않거든요. 핵심은 '얼마나 멀리'가 아니라 '<strong>얼마나 강하게 오래</strong>'입니다.</p>
  </div>
</div>

<h2>거리는 짧은데 왜 더 괴로울까 — '강도'의 문제</h2>
<p>러닝의 괴로움은 거리(km)가 아니라 <strong>강도(페이스)</strong>가 결정합니다. 풀코스는 길지만 상대적으로 낮은 강도로 달립니다. 반면 10K는 거리가 1/4이지만, 젖산이 쌓이기 시작하는 <strong>젖산역치(LT) 근처</strong>를 40~60분간 버텨야 하죠. 즉 짧은 거리일수록 <strong>'더 아픈 구간'에서 더 오래 머무는</strong> 셈입니다.</p>
<p>몸이 에너지를 만드는 방식(에너지 시스템)도 거리마다 다릅니다. 짧고 빠를수록 무산소·VO2max 영역을, 길고 느릴수록 유산소 지구력을 씁니다. 같은 '러닝'이라도 거리별로 거의 다른 운동인 셈이죠.</p>

<table>
  <thead>
    <tr><th>거리</th><th>주 에너지 시스템</th><th>강도(젖산역치 기준)</th><th>주된 괴로움</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>5K</strong></td><td>무산소 + VO2max</td><td>역치 초과 (매우 높음)</td><td>짧고 강렬한 산소 빚 — 폐가 터질 듯</td></tr>
    <tr><td><strong>10K</strong></td><td>젖산역치 근처</td><td>역치 줄타기 (높음)</td><td>'아픈데 멈출 수 없는' 40~50분</td></tr>
    <tr><td><strong>하프(21.1K)</strong></td><td>역치~마라톤 페이스</td><td>중상 (지속 가능 상한)</td><td>후반 누적 피로 + 페이스 유지 압박</td></tr>
    <tr><td><strong>풀(42.2K)</strong></td><td>유산소 지구력</td><td>중 (대화 가능 수준)</td><td>글리코겐 고갈·'마의 35km 벽'</td></tr>
  </tbody>
</table>

<h2>풀코스 완주자가 10K에서 무너지는 진짜 이유</h2>
<p>핵심은 <strong>훈련 특이성(specificity)</strong>입니다. 몸은 훈련한 방식대로 적응하거든요.</p>
<ul>
  <li><strong>마라톤 준비 = LSD 위주</strong>: 풀코스를 목표로 하면 대부분 느린 장거리(<a href="/blog/lsd-training-beginner-guide-korea">LSD</a>) 위주로 훈련합니다. 이건 유산소 지구력은 키우지만, <strong>젖산역치 근처의 고강도를 버티는 능력</strong>은 거의 길러주지 않습니다</li>
    <li><strong>10K·하프 = 역치 능력 싸움</strong>: 정작 짧은 레이스는 그 '고강도 지속' 능력을 요구합니다. LSD만 해온 몸엔 가장 약한 부분이죠</li>
  <li><strong>페이스 감각 부재</strong>: 마라톤 페이스에 익숙한 몸이 10K 페이스(훨씬 빠름)로 나가면, 초반에 역치를 넘겨버려 중반에 무너집니다</li>
</ul>
<p>즉 "풀도 뛰었는데 10K쯤이야"라며 같은 훈련으로 임하면 오히려 고전합니다. 거리가 짧아질수록 <strong>전용 고강도 훈련</strong>이 필요합니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">가장 흔한 실수 — 초반 오버페이스</p>
    <p>짧은 레이스일수록 초반 흥분으로 목표보다 빠르게 나가기 쉽습니다. 10K에서 첫 2km를 목표 페이스보다 10초/km만 빠르게 가도, 5km 지점에서 젖산이 폭발해 후반이 지옥이 됩니다. <strong>거리가 짧을수록 초반 페이스 절제가 더 중요</strong>합니다.</p>
  </div>
</div>

<h2>거리별 훈련 처방</h2>
<p>"체감 난이도"를 낮추는 길은 그 거리가 요구하는 능력을 콕 집어 훈련하는 것입니다.</p>
<ul>
  <li><strong>5K</strong> — VO2max 인터벌(400m~1km 반복). 짧고 강한 자극으로 최대산소섭취량을 끌어올립니다</li>
  <li><strong>10K·하프</strong> — <a href="/blog/tempo-run-training-guide-korea">템포런</a>과 젖산역치 훈련이 핵심. 역치 페이스를 20~40분 지속하는 능력을 키웁니다. 볼륨과 강도를 균형 있게 쌓는 <a href="/blog/nsm-norwegian-singles-method-training">노르웨이식(NSM) 더블 트레숄드</a>도 효과적입니다</li>
  <li><strong>풀코스</strong> — <a href="/blog/lsd-training-beginner-guide-korea">LSD</a>로 유산소 베이스와 글리코겐 효율을 키우되, 마라톤 페이스 구간 주행을 섞습니다</li>
</ul>
<p>고강도 구간에서 숨이 일찍 차는 게 고민이라면, 페이스 문제뿐 아니라 호흡 효율도 점검하세요 — <a href="/blog/running-breathing-guide-korea">러닝 호흡법 가이드</a>에 2:2 리듬과 코·입 호흡을 정리해 두었습니다.</p>

<h2>거리별로 신발도 다르게</h2>
<p>요구 강도가 다른 만큼, 거리·페이스에 맞는 신발이 체감 난이도를 줄여줍니다.</p>
<ul>
  <li><strong>10K·하프 레이스(고강도)</strong> — 반발과 추진을 주는 <a href="/best/racing">카본 레이싱화</a>가 역치 페이스 유지에 유리합니다(단, 입문자는 근력부터)</li>
  <li><strong>데일리·템포 훈련</strong> — 다재다능한 <a href="/best/daily-trainer">데일리 트레이너</a>가 역치·템포 주행을 두루 받쳐줍니다</li>
  <li><strong>풀코스·LSD·회복</strong> — 누적 피로를 줄이는 <a href="/best/max-cushion">맥스쿠션 슈즈</a>가 장거리 부담을 덜어줍니다</li>
</ul>

<h2>마무리</h2>
<p>거리와 난이도는 비례하지 않습니다. 풀코스는 '오래'의 싸움이고, 10K·하프는 '강하게 오래'의 싸움이에요. 풀을 완주했다고 짧은 레이스가 거저 되는 게 아니라, <strong>각 거리가 요구하는 능력을 따로 훈련</strong>해야 그 거리의 체감 난이도가 떨어집니다. 다음 목표 거리가 정해졌다면, 그 거리에 맞는 강도 훈련과 페이스 배분부터 점검해 보세요. 그것만으로도 레이스 당일의 괴로움이 확연히 줄어듭니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 일반적인 러닝 훈련·운동생리 정보로, 개인의 의학적 진단을 대체하지 않습니다. 새로운 고강도 훈련을 시작할 때는 점진적으로 강도를 올리고, 통증이 지속되면 전문가의 진료를 받으세요. (참고 글감: @dongmaclub, 2026-06-08)</p>
`,
  },
  {
    id: 'li-ning-red-hare-9-lineup-2026',
    slug: 'li-ning-red-hare-9-lineup-2026',
    title: '적토마 9 삼형제 완전 비교 — 울트라 vs 프로 vs 베이스, 내게 맞는 적토마는? | 라이닝 레드헤어 9 라인업 가이드',
    description: '라이닝 적토마(레드헤어) 9는 한 세대에 울트라·프로·베이스 3종이 동시 출시됐습니다. 이름만 같지 미드솔 폼·플레이트·스택·발볼·가격이 전부 다른 별개의 신발이죠. 맥스쿠션 슈퍼트레이너(울트라), 가성비 데일리(프로), 발볼 넓은 입문(베이스) — 셋의 차이를 한눈에 비교하고, 내 발과 목적에 맞는 적토마를 고르는 법을 데이터로 정리했습니다. 인터랙티브 비교도 함께 제공합니다.',
    thumbnail: '/images/blog/li-ning-red-hare-9-lineup-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-09',
    category: 'review' as const,
    readingTime: 7,
    tags: ['라이닝', '적토마', '레드헤어 9', 'Li-Ning', '중국 러닝화', '비교', '울트라', '프로', '가성비 러닝화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>적토마 9는 한 세대에 <strong>울트라·프로·베이스 3종</strong>이 동시 출시 — 이름만 같지 <strong>폼·플레이트·스택·가격이 전부 다른 별개 신발</strong>입니다</li>
    <li>셋 다 <strong>"카본"이 아닙니다</strong>: 울트라=유리섬유, 프로=TPU 지지편, 베이스=무플레이트. 진짜 풀카본 레이서는 적토마가 아니라 라이닝 <strong>비전(飞电)</strong> 라인입니다</li>
    <li>한 줄 정리: <strong>발볼 넓으면 베이스</strong>(전족 와이드), <strong>푹신한 장거리면 울트라</strong>, <strong>다재다능 데일리면 프로</strong></li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">ℹ️</span>
  <div class="callout-body">
    <p class="callout-title">왜 헷갈릴까</p>
    <p>2026년 1월 라이닝이 적토마 9 세대를 <strong>울트라·프로·베이스 3종 동시</strong>로 내놓으면서, "적토끼 9 울트라가 카본이라며?", "프로가 더 비싼데 더 좋은 거 아냐?" 같은 혼선이 많습니다. 결론부터 말하면 셋은 <strong>가격 순서대로 더 좋은 상위호환이 아니라, 용도가 다른 별개 모델</strong>입니다. 하나씩 뜯어보겠습니다.</p>
  </div>
</div>

<h2>한눈에 보는 3종 비교</h2>
<table>
  <thead>
    <tr><th>모델</th><th>카테고리</th><th>미드솔 / 플레이트</th><th>스택(힐/전족)·드롭</th><th>무게</th><th>발볼</th><th>직구가</th></tr>
  </thead>
  <tbody>
    <tr><td><strong><a href="/shoes/li-ning-red-hare-9-ultra">9 울트라</a></strong></td><td>쿠션화</td><td>PEBA 3중 + Super Boom / <strong>유리섬유</strong></td><td>47/42mm · 5mm</td><td>246g</td><td>좁음</td><td>~15만</td></tr>
    <tr><td><strong><a href="/shoes/li-ning-red-hare-9-pro">9 프로</a></strong></td><td>데일리</td><td>2중 Boom / <strong>TPU 지지편</strong></td><td>36/28mm · 8mm</td><td>222g</td><td>좁음</td><td>~14만</td></tr>
    <tr><td><strong><a href="/shoes/li-ning-red-hare-9">9 베이스</a></strong></td><td>입문화</td><td>단층 LIGHT FOAM / <strong>없음</strong></td><td>~32/23mm(추정) · 9mm</td><td>~320g</td><td><strong>넓음</strong></td><td>~9.5만</td></tr>
  </tbody>
</table>
<p>가격(울트라 &gt; 프로 &gt; 베이스)은 "성능 순위"가 아니라 <strong>미드솔 기술의 복잡도</strong> 순서입니다. 푹신함·스택은 울트라가 최고지만, 가벼움은 프로가, 발볼 여유는 베이스가 가장 낫습니다.</p>

<h2>9 울트라 — 푹신한 장거리·회복런용 맥스쿠션</h2>
<p><a href="/shoes/li-ning-red-hare-9-ultra">레드헤어 9 울트라</a>는 47mm 힐 스택에 PEBA 3중 미드솔을 얹은 <strong>맥스쿠션 슈퍼트레이너</strong>입니다. 셋 중 가장 푹신하고 바운시하지만 무게(246g)와 스택이 큰 만큼 빠른 인터벌에는 답답합니다. 경쟁 상대는 카본 레이서가 아니라 <a href="/shoes/asics-superblast-3">아식스 슈퍼블라스트</a>·<a href="/shoes/asics-megablast">메가블라스트</a> 같은 슈퍼트레이너죠. <strong>LSD·회복런·마라톤 훈련</strong> 위주이고 푹신함을 최우선한다면 울트라입니다. 자세한 분석은 <a href="/blog/li-ning-red-hare-9-ultra-truth-2026">"중국 카본화"의 진실 글</a>에서 다뤘습니다.</p>

<h2>9 프로 — 다재다능한 가성비 데일리 트레이너</h2>
<p><a href="/shoes/li-ning-red-hare-9-pro">레드헤어 9 프로</a>는 36/28mm의 낮은 스택에 2중 Boom 폼을 쓴 <strong>데일리 트레이너</strong>입니다. 셋 중 가장 가볍고(222g) 단단해 이지런부터 템포까지 두루 소화합니다. 흔히 "프로가 카본 버전"으로 알려졌지만, <strong>라이닝 공식 설명은 카본이 아닌 TPU 지지편</strong>입니다(마케팅의 T400 카본 주장은 독립 검증이 없습니다). 호카 마하·노바블라스트급 데일리를 더 싸게 원한다면 프로가 답입니다.</p>

<h2>9 베이스 — 발볼 넓은 한국 러너를 위한 입문</h2>
<p><a href="/shoes/li-ning-red-hare-9">레드헤어 9(베이스)</a>는 단층 LIGHT FOAM에 플레이트가 없는 <strong>입문 트레이너</strong>로, 셋 중 가장 저렴합니다(직구 10만 원 미만). 무게는 약 320g으로 무거운 편이라 빠른 훈련용은 아니지만, 결정적 차별점이 있습니다 — <strong>울트라·프로가 좁은 핏인 반면, 베이스만 전족이 넓게 설계</strong>됐습니다. 발볼이 넓어 적토마를 포기했던 한국 러너에게는 오히려 이 베이스가 맞습니다. 입문·통근·체력검정 겸용으로도 무난합니다.</p>

<div class="callout tip">
  <span class="callout-icon">⚖️</span>
  <div class="callout-body">
    <p class="callout-title">3종 나란히 비교해 보기</p>
    <p>스펙을 직접 나란히 놓고 보고 싶다면 아래 비교 도구를 쓰세요. 세 모델이 미리 선택돼 있어 쿠셔닝·무게·안정성·가성비 점수를 한 화면에서 견줄 수 있습니다.<br><strong><a href="/compare?shoes=li-ning-red-hare-9-ultra,li-ning-red-hare-9-pro,li-ning-red-hare-9">→ 적토마 9 삼형제 한눈에 비교하기</a></strong></p>
  </div>
</div>

<h2>"카본 아니야?" — 셋 다 카본이 아닙니다</h2>
<p>적토마 9 라인업에서 가장 흔한 오해입니다. 정리하면 이렇습니다.</p>
<ul>
  <li><strong>9 울트라</strong> — 미드풋 <strong>유리섬유</strong> 윙 플레이트(비틀림 제어용, 추진용 아님)</li>
  <li><strong>9 프로</strong> — <strong>TPU</strong> 윙 지지편(공식 표기). 일부 마케팅의 "T400 카본"은 독립 검증 없음</li>
  <li><strong>9 베이스</strong> — <strong>플레이트 없음</strong></li>
</ul>
<p>즉 적토마 9에는 진짜 풀카본 레이서가 없습니다. 카본의 톡톡 튀는 추진력을 원한다면 라이닝의 레이싱 전용 <strong>비전(飞电)</strong> 라인을 봐야 합니다. 광고 문구와 실제 소재가 어떻게 다른지는 <a href="/blog/running-shoe-data-not-marketing-guide-2026">러닝화, 광고에 속지 말고 데이터로 고르세요</a>에서 더 다뤘습니다.</p>

<h2>그래서 내게 맞는 적토마는?</h2>
<div class="callout info">
  <span class="callout-icon">🎯</span>
  <div class="callout-body">
    <p class="callout-title">목적별 선택 가이드</p>
    <p><strong>· 푹신한 장거리·회복런</strong> → 9 울트라<br><strong>· 가볍고 다재다능한 일상 훈련</strong> → 9 프로<br><strong>· 발볼이 넓거나 입문·통근 겸용·최저가</strong> → 9 베이스</p>
  </div>
</div>
<p>발볼이 넓은 한국 러너라면 울트라·프로(좁은 핏)는 사이즈를 여유 있게 보거나, 애초에 전족이 넓은 베이스를 고르는 편이 안전합니다. 내 발볼이 어느 정도인지 모른다면 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국인을 위한 러닝화 가이드</a>를 먼저 보세요.</p>

<h2>마무리</h2>
<p>적토마 9 삼형제는 "비싼 게 좋은 것"이 아니라 <strong>용도가 다른 세 신발</strong>입니다. 푹신함의 울트라, 다재다능의 프로, 가성비·와이드의 베이스 — 본인 발과 훈련 목적에 맞춰 고르면 됩니다. 셋 다 한국 정식 유통이 없어 <strong>직구·구매대행</strong>으로만 살 수 있고, 사이즈 교환이 까다로우니 발볼을 특히 신중히 보세요. 같은 가격대의 정식 출시 슈퍼트레이너와 비교하려면 <a href="/best/max-cushion">쿠션화 추천</a>·<a href="/best/daily-trainer">데일리 트레이너 추천</a>도 함께 참고하시기 바랍니다.</p>

<h2>다른 브랜드는 어떻게 읽을까 — 브랜드 계급도</h2>
<p>라이닝처럼 브랜드마다 라인업을 읽는 고유한 규칙이 있습니다. 나이키는 라인 이름(페가수스·보메로), 뉴발란스는 숫자(6x·8x·10xx), 아식스는 GEL/FF 세대, 사코니는 엔돌핀 라인으로 갈리죠. 관심 있는 브랜드의 전체 라인업을 한 장에 정리한 계급도 시리즈입니다.</p>
<ul>
  <li>🟥 적토마와 비교 — 같은 10만원대 가성비 카본/슈퍼폼 → <a href="/blog/li-ning-red-hare-9-ultra-truth-2026">9 울트라의 진실(카본 아님)</a> · <a href="/blog/li-ning-red-hare-9-ultra-budget-supertrainer">10만원대 가성비 슈퍼트레이너</a></li>
  <li>🟦 브랜드 계급도 → <a href="/blog/new-balance-running-shoes-lineup-tier-guide-2026">뉴발란스</a> · <a href="/blog/nike-running-shoes-lineup-tier-guide-2026">나이키</a> · <a href="/blog/asics-running-shoes-lineup-tier-guide-2026">아식스</a> · <a href="/blog/hoka-running-shoes-lineup-tier-guide-2026">호카</a> · <a href="/blog/brooks-running-shoes-lineup-tier-guide-2026">브룩스</a> · <a href="/blog/adidas-running-shoes-lineup-tier-guide-2026">아디다스</a> · <a href="/blog/on-running-shoes-lineup-tier-guide-2026">온</a> · <a href="/blog/puma-running-shoes-lineup-tier-guide-2026">푸마</a> · <a href="/blog/mizuno-running-shoes-lineup-tier-guide-2026">미즈노</a> · <a href="/blog/saucony-running-shoes-lineup-tier-guide-2026">사코니</a></li>
</ul>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 라이닝 공식 자료와 Road Trail Run·WeeViews 등 해외 실측 리뷰, 중국 리테일/커뮤니티(识货) 자료를 교차 정리한 내용입니다. 적토마 9 라인업은 한국 정식 출시 전이며 독립 랩(RunRepeat 등) 측정치가 없어 일부 수치(특히 베이스 스택)는 실측·추정 기준입니다. 가격은 직구·구매대행 시세로 변동될 수 있습니다.</p>
`,
  },
  {
    id: 'incheon-international-half-marathon',
    slug: 'incheon-international-half-marathon',
    title: '26년째 봄을 여는 인천 대표 하프 — 인천국제하프마라톤 | 송도 해안·\'통곡의 벽\'·WA 공인 코스 완전 정리',
    description: '2001년 창설돼 26년째 이어지는 인천국제하프마라톤. 서울 동아마라톤 직후 봄 시즌 첫 하프로, 세계육상연맹(WA) 공인 코스를 문학경기장에서 달립니다. 송도국제도시 해안 바닷바람과 경기장 진입 오르막 \'통곡의 벽\', 트랙 피니시가 특징이죠. 코스·종목·참가비·기념품과 가을 인천마라톤(풀코스)과의 차이까지 정리했습니다.',
    thumbnail: '/images/blog/incheon-international-half-marathon.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-08',
    category: 'news' as const,
    readingTime: 6,
    tags: ['인천국제하프마라톤', '인천 하프마라톤', '하프 마라톤', '문학경기장', '송도 러닝', '봄 마라톤', 'WA 공인 코스', '러닝 대회', '인천 러닝'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>인천국제하프마라톤은 2001년 창설된 26년 역사의 봄 대표 하프</strong> — 인천일보 주최, 세계육상연맹(WA) 공인 코스를 문학경기장에서 달립니다(하프·10K·5K)</li>
    <li>코스 특징은 <strong>송도국제도시 해안 바닷바람</strong>과 경기장 진입 직전의 긴 오르막 — 참가자들이 <strong>'통곡의 벽'</strong>이라 부르는 마지막 고비, 그리고 <strong>트랙 피니시</strong>입니다</li>
    <li>매년 <strong>3월 마지막 주 일요일 전후, 선착순 1.5만 명</strong> 규모. <strong>가을에 열리는 \'인천마라톤\'(풀코스)과는 완전히 별개</strong> 대회이니 혼동하지 마세요</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🌸</span>
  <div class="callout-body">
    <p class="callout-title">'봄의 전령사' — 수도권 봄 시즌 첫 하프</p>
    <p>인천국제하프마라톤은 <strong>서울 동아마라톤(3월 중순) 직후</strong>에 열려, 수도권 러너에게 <strong>봄 시즌 첫 대회</strong>로 자리 잡았습니다. 겨우내 쌓은 훈련을 점검하는 "스피드 테스트" 무대로 인기죠. 2026년 제26회는 3월 22일 인천문학경기장에서 이미 열렸고, 매년 비슷한 시기에 반복되는 전통 대회라 미리 알아두면 내년 봄 계획에 좋습니다.</p>
  </div>
</div>

<h2>어떤 대회인가</h2>
<ul>
  <li><strong>역사</strong>: 2001년 제1회 창설, 2026년 <strong>제26회</strong>까지 이어진 인천 최대 규모 달리기 축제 (2021년 제21회는 코로나로 비대면 진행)</li>
  <li><strong>주최/주관</strong>: 인천일보·대한육상연맹 주최, (사)인천마라톤조직위원회 주관</li>
  <li><strong>베뉴</strong>: 2002 월드컵 개최지인 <strong>인천문학경기장</strong> (인천 미추홀구)</li>
  <li><strong>성격</strong>: 엘리트와 시민 러너가 함께하는 <strong>시민 중심 국제 대회</strong>, 선착순 1.5만 명</li>
</ul>

<h2>코스 — 송도 해안과 '통곡의 벽'</h2>
<p>WA(세계육상연맹) 공인 코스로, <strong>문학경기장 → 선학지하차도 → 동춘고가도로 → 송도1교 → 해안부대사거리(반환) → 다시 복귀 → 경기장 트랙 피니시</strong>의 왕복 반환 구조입니다.</p>
<ul>
  <li><strong>초반 스피드</strong> — 출발 직후 완만한 내리막이라 페이스 올리기 좋습니다</li>
  <li><strong>송도 해안 바닷바람</strong> — 송도국제도시 해안 구간에서 바람이 강해, 기록 변수로 작용합니다</li>
  <li><strong>'통곡의 벽'</strong> — 경기장 진입 직전의 긴 오르막이 마지막 고비. 막판 체력 안배가 관건입니다</li>
  <li><strong>트랙 피니시</strong> — 경기장 관중석 앞 트랙에서 완주하는 짜릿한 마무리</li>
</ul>
<p>넓고 잘 통제된 도심 도로에 주차·화장실 등 편의시설이 좋아 대형 대회치고 운영이 안정적이라는 평이 많습니다.</p>

<h2>종목·참가비·기념품</h2>
<table>
  <thead>
    <tr><th>종목</th><th>제한시간</th><th>참가비(제26회 기준)</th></tr>
  </thead>
  <tbody>
    <tr><td>하프(21.0975km)</td><td>3시간</td><td>50,000원</td></tr>
    <tr><td>10K</td><td>2시간</td><td>50,000원</td></tr>
    <tr><td>5K</td><td>2시간</td><td>45,000원</td></tr>
  </tbody>
</table>
<ul>
  <li><strong>완주 기념품</strong>: 완주 메달 + 기념 티셔츠(사이즈 선택) + 배번·기록칩(하프·10K) + 온라인 기록증 + 완주 간식</li>
  <li>접수는 통상 <strong>1~2월</strong>에 진행됩니다(제26회는 1/5~2/13)</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">'인천마라톤'과 헷갈리지 마세요</p>
    <p>이름이 비슷해 자주 혼동되는데, 둘은 <strong>완전히 다른 대회</strong>입니다.</p>
    <ul>
      <li><strong>인천국제하프마라톤(이 글)</strong> — 봄(3월), 문학경기장, <strong>하프·10K·5K</strong>, 2001년~, 인천일보 주최. 사이트 incheonmarathon.<strong>co.kr</strong></li>
      <li><a href="/blog/2026-incheon-marathon">인천마라톤</a> — 가을(11월), <strong>풀코스</strong>, 2025년 신설, 인천시·대한육상연맹. 사이트 incheonmarathon.<strong>or.kr</strong></li>
    </ul>
    <p>풀코스를 원하면 가을 인천마라톤, 봄에 하프·단축 종목을 원하면 이 대회입니다.</p>
  </div>
</div>

<h2>2027 제27회는?</h2>
<p>2026-06 기준 <strong>제27회(2027) 일정은 아직 미발표</strong>입니다. 다만 매년 <strong>3월 마지막 주 일요일 전후</strong> 개최 패턴이 일정해, 2027년에도 3월 하순 개최가 유력합니다. 봄 첫 하프를 노린다면 <strong>연초(1~2월) 접수 오픈</strong>을 기다리면 됩니다. 일정이 공개되면 업데이트하겠습니다.</p>

<h2>마무리</h2>
<p>인천국제하프마라톤은 화려한 신상 대회는 아니지만, <strong>26년간 봄을 열어 온 수도권 대표 하프</strong>로서 안정적인 운영과 WA 공인 코스, '통곡의 벽'을 넘어 트랙에서 완주하는 특유의 경험을 제공합니다. 겨울 훈련 점검과 봄 시즌 워밍업에 딱 맞는 대회죠. 봄에 하프를 노린다면 매년 3월 하순을 기억해 두세요. 인천에서 평소 뛸 코스가 궁금하다면 <a href="/blog/incheon-unique-running-courses-7">인천 이색 러닝 코스 7선</a>을, 가을 풀코스는 <a href="/blog/2026-incheon-marathon">인천마라톤</a>을 참고하세요. 다른 대회 일정은 <a href="/marathon">마라톤 캘린더</a>에서 확인할 수 있습니다. 🏃</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 인천국제하프마라톤 공식·마라톤GO·KorMarathon 등록 정보와 역대 대회 자료를 종합한 내용입니다. 제26회(2026-03-22)는 종료됐고, 제27회(2027) 일정·참가비는 미발표 상태입니다. 참가비·기념품은 제26회 기준이며 회차별로 변동될 수 있으니, 참가 전 공식 홈페이지(incheonmarathon.co.kr)를 확인하세요.</p>
`,
  },
  {
    id: '2026-incheon-marathon',
    slug: '2026-incheon-marathon',
    title: '바다 위 청라하늘대교를 달린다 — 2026 인천마라톤(제2회) | 11/22 인천 첫 풀코스, 코스·접수·2025 1회 총정리',
    description: '인천시·대한육상연맹이 주최하는 인천 최초 풀코스 대회 \'인천마라톤\'이 11월 22일(일) 제2회로 열립니다. 2026년엔 청라하늘대교 위를 달리는 편도 코스(바다 위 러닝)가 검토되고, 풀코스 정원도 8천 명으로 확대됐죠. 2만 명 규모·해외 엘리트 초청의 이 공식 시 대회 일정·코스·참가비·접수 정보와 2025 제1회 결과를 정리했습니다.',
    thumbnail: '/images/blog/2026-incheon-marathon.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-08',
    category: 'news' as const,
    readingTime: 6,
    tags: ['인천마라톤', '인천 마라톤', '풀코스 마라톤', '청라하늘대교', '11월 마라톤', '러닝 대회', '인천 러닝', '가을 마라톤', '마라톤 접수'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>2026 인천마라톤(제2회)이 11월 22일(일) 개최</strong> — 인천시·대한육상연맹이 주최하는 <strong>인천 최초·유일의 공식 풀코스 마라톤</strong>입니다</li>
    <li>2026년 최대 변화는 <strong>청라하늘대교 위를 달리는 편도 코스</strong>(검토 중) — 바다 위를 달리는 국내에서 보기 드문 교량 러닝이 차별점입니다</li>
    <li>2만 명 규모(풀코스 8천 명으로 확대)·해외 엘리트 초청의 <strong>"역대급" 공식 시 대회</strong>. 접수는 7월 오픈 예상이라 지금 일정을 챙겨두면 좋습니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🌊</span>
  <div class="callout-body">
    <p class="callout-title">바다 위 다리를 달리는 마라톤</p>
    <p>인천은 <strong>1923년 경인역전경주·1959년 국제마라톤</strong>의 출발지로 한국 마라톤의 발상지로 꼽히지만, 정작 인천을 대표하는 공식 풀코스 대회는 없었습니다. 그 공백을 2025년 출범한 <strong>인천마라톤</strong>이 채웠죠. 2026년 제2회는 <strong>청라하늘대교(영종~청라 연결 교량) 위를 달리는 편도 코스</strong> 도입을 검토 중이라, "바다 위 러닝"이라는 독특한 경험으로 주목받고 있습니다.</p>
  </div>
</div>

<h2>핵심 정보 한눈에</h2>
<table>
  <tbody>
    <tr><td><strong>대회일</strong></td><td>2026년 11월 22일(일) — 확정</td></tr>
    <tr><td><strong>종목</strong></td><td>풀코스(42.195km, 8천 명) · 10K · 5K</td></tr>
    <tr><td><strong>출발</strong></td><td>인천아시아드주경기장 (인천 서구)</td></tr>
    <tr><td><strong>규모</strong></td><td>약 2만 명 (해외 엘리트 초청 포함)</td></tr>
    <tr><td><strong>주최</strong></td><td>인천광역시 · 대한육상연맹</td></tr>
  </tbody>
</table>

<h2>청라하늘대교 편도 코스 (2026 변경 검토)</h2>
<p>2025년 1회 대회는 문학경기장 기점 반환 코스였는데, <strong>2026년은 청라하늘대교를 통과하는 편도 코스</strong>로 변경이 검토되고 있습니다.</p>
<ul>
  <li><strong>유력안</strong>: 인천아시아드주경기장 출발 → <strong>청라하늘대교</strong> → 영종 해안남로 → 씨사이드파크 도착</li>
  <li><strong>특징</strong>: 도심의 역동성과 서해 해안 경관을 동시에. 국내에 드문 <strong>교량 위 러닝</strong></li>
  <li><strong>10K·5K</strong>: 아시아드주경기장 출발 왕복 코스</li>
</ul>
<p class="caption">※ 청라하늘대교 편도 코스는 2026-04 기준 '검토 중'으로 확정 전입니다. 공식 요강 발표 시 변경될 수 있습니다.</p>

<h2>2025 제1회 돌아보기</h2>
<p>2025년 첫 대회는 <strong>2만 명, 해외 8개국 엘리트 70명</strong>이 참가하며 성황리에 출범했습니다. 남자부는 에티오피아의 <strong>게르바 베아타 디바바(2:06:52)</strong>, 여자부는 루마니아의 조안 첼리모 멜리(2:22:57)가 우승했죠. 광역자치단체 공식 풀코스 대회로는 대구마라톤에 이은 두 번째로, <strong>시비 20억 원</strong>이 투입된 인천시의 대표 마라톤 포지셔닝이 분명합니다.</p>

<h2>접수·참가비</h2>
<ul>
  <li><strong>접수</strong>: 7월 오픈 예상(2025년은 7/10 선착순). 공식 사이트 incheonmarathon.or.kr</li>
  <li><strong>참가비</strong>(검토 중): 풀 80,000원 / 10K 50,000원 / 5K 30,000원 — <em>2025년 대비 인상 검토, 확정 발표 전</em></li>
  <li><strong>완주 기념품</strong>: 완주 메달 + 기능성 티셔츠 + 온라인 기록증 + 기록칩(풀·10K)</li>
  <li><strong>상금</strong>: 국내부 총 8,600만 원(1위 1,500만 원), 해외부 36만 달러</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">📌</span>
  <div class="callout-body">
    <p class="callout-title">참가 전 체크 — 미확정 정보 & 대회 혼동 주의</p>
    <ul>
      <li><strong>코스·참가비·접수일은 검토/예상</strong>입니다(2026-06 기준). 확정 요강은 7월 접수 오픈 즈음 발표되니, 신청 전 공식 사이트를 반드시 확인하세요</li>
      <li><strong>대회 혼동 주의</strong> — 봄에 열리는 <strong>인천국제하프마라톤</strong>(3월, 문학경기장, 26년 역사)과는 <strong>완전히 별개 대회</strong>입니다. 이 글의 인천마라톤은 2025년 신설된 풀코스 대회(or.kr)예요</li>
      <li>대중교통(인천1호선) 접근이 편리하니 차량 통제를 감안해 지하철 이용을 권합니다</li>
    </ul>
  </div>
</div>

<h2>다른 인천·가을 대회와 함께</h2>
<ul>
  <li>같은 인천이라도 성격이 다릅니다 — <a href="/blog/2026-disney-run-incheon-virtual-run">디즈니런 2026 인천</a>(10/24 테마런), <a href="/blog/2026-songdo-lee-bongju-marathon">송도 이봉주 마라톤</a>(6/28 송도)</li>
  <li>11월 서울 대회를 함께 보려면 → <a href="/blog/2026-mbn-seoul-marathon-registration">MBN 서울마라톤</a>(11/15 광화문→잠실)</li>
  <li>인천에서 평소 뛸 코스가 궁금하다면 → <a href="/blog/incheon-unique-running-courses-7">인천 이색 러닝 코스 7선</a></li>
</ul>
<p>가을 대회 전체 일정은 <a href="/marathon">마라톤 캘린더</a>에서 한 번에 확인하세요.</p>

<h2>마무리</h2>
<p>2026 인천마라톤은 <strong>"인천을 대표하는 첫 풀코스 대회의 2년 차"</strong>이자, <strong>바다 위 청라하늘대교를 달리는 특별한 경험</strong>을 예고하는 대회입니다. 인천 러너에겐 홈 대회, 외지 러너에겐 색다른 코스로 매력적이죠. 핵심은 <strong>11/22 일정을 기억하고 7월 접수 오픈을 놓치지 않는 것</strong>. 확정 코스·참가비는 공식 발표 시 다시 확인하세요. 🏃</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 인천시 공식 발표와 경향신문·인천in 등 언론 보도, 2025년 제1회 대회 자료를 종합한 내용입니다. 2026년 코스(청라하늘대교)·참가비·접수일은 검토/예상 단계라 변동될 수 있으니, 신청 전 공식 사이트(incheonmarathon.or.kr)를 반드시 확인하세요. 봄의 인천국제하프마라톤과는 별개 대회입니다. (글감: @runninglife_korea, 2026-06-08)</p>
`,
  },
  {
    id: '2026-mbn-seoul-marathon-registration',
    slug: '2026-mbn-seoul-marathon-registration',
    title: '광화문에서 잠실까지 일직선 21km — 2026 MBN 서울마라톤 접수 임박 | 6/25 하프·6/26 10K 본접수, 코스·참가비 총정리',
    description: 'MBN(매일방송) 주최 서울 도심 마라톤이 11월 15일(일) 확정됐습니다. 광화문광장에서 잠실종합운동장까지 내려가는 일직선 하프(21km)와 잠실 루프 10K, 총 3만 명 규모죠. 참가비는 하프 10만 원·10K 7만 원으로 확정, 하프 본접수 6/25(목)·10K 본접수 6/26(금)입니다. 종목·코스·참가비·완주기념품·교통통제까지 한 번에 정리했습니다.',
    thumbnail: '/images/blog/2026-mbn-seoul-marathon-registration.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-08',
    category: 'news' as const,
    readingTime: 6,
    tags: ['MBN 서울마라톤', '서울 마라톤', '하프 마라톤', '광화문 마라톤', '잠실 마라톤', '11월 마라톤', '러닝 대회', '마라톤 접수', '가을 마라톤'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>2026 MBN 서울마라톤 11월 15일(일) 개최 확정</strong> — 하프는 <strong>광화문광장 → 잠실종합운동장 일직선</strong>, 10K는 <strong>잠실 루프</strong>입니다(풀코스 없음, 총 3만 명)</li>
    <li><strong>접수가 임박</strong>했습니다 — 하프 본접수 <strong>6/25(목) 14시</strong>, 10K 본접수 <strong>6/26(금) 14시</strong>. 참가비는 <strong>하프 10만 원·10K 7만 원</strong> 확정, 인기 대회라 빠른 마감 가능성</li>
    <li>3만 명 규모(하프 2만·10K 1만)의 <strong>MBN·매일경제 주최 도심 대회</strong>로 TV 생중계까지 — 07:30 출발(06:30 집결), 완주 메달·티셔츠·양말을 받습니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏙️</span>
  <div class="callout-body">
    <p class="callout-title">광화문에서 잠실까지, 서울을 가로지르다</p>
    <p>MBN(매일방송)이 주최하는 <strong>서울 도심 마라톤</strong>이 11월 15일(일)로 확정됐습니다. 가장 큰 매력은 <strong>광화문광장에서 출발해 잠실종합운동장까지 서울 도심을 일직선으로 가로지르는 하프 코스</strong>죠. 순환 없는 포인트-투-포인트 코스라 도심 랜드마크를 차례로 지납니다(2026 세부 경유지는 추후 공개). 우선신청은 6/22 시작, 일반 본접수가 6/25~26으로 임박했으니 일정을 먼저 정리해 둡니다.</p>
  </div>
</div>

<h2>핵심 정보 한눈에</h2>
<table>
  <tbody>
    <tr><td><strong>대회일</strong></td><td>2026년 11월 15일(일) — 07:30 출발(06:30 집결)</td></tr>
    <tr><td><strong>종목</strong></td><td>하프(21.0975km) · 10K (풀코스 없음)</td></tr>
    <tr><td><strong>출발/도착</strong></td><td>하프: 광화문광장 → 잠실종합운동장 / 10K: 잠실종합운동장 출발·도착(루프)</td></tr>
    <tr><td><strong>제한시간</strong></td><td>하프 2시간 30분 · 10K 1시간 30분</td></tr>
    <tr><td><strong>참가비</strong></td><td>하프 100,000원 · 10K 70,000원</td></tr>
    <tr><td><strong>규모</strong></td><td>3만 명 (하프 2만 · 10K 1만)</td></tr>
    <tr><td><strong>주최</strong></td><td>MBN(매일방송)·매일경제 — TV 생중계</td></tr>
  </tbody>
</table>
<p class="caption">※ 일정·참가비·규모는 공식 홈페이지(2026-06-22 우선신청 개시) 기준입니다. 세부 코스 경유지는 추후 공개됩니다.</p>

<h2>접수 일정 — 임박했습니다</h2>
<div class="callout warning">
  <span class="callout-icon">⏰</span>
  <div class="callout-body">
    <p class="callout-title">놓치면 안 될 날짜</p>
    <ul>
      <li><strong>우선신청</strong>(선셋마라톤·슈퍼히어로런 신청자, 매경PLUS 구독자 한정): <strong>6/22(월) 10:00 ~ 6/23(화) 17:00</strong></li>
      <li><strong>하프 본접수</strong>: <strong>6/25(목) 14:00</strong></li>
      <li><strong>10K 본접수</strong>: <strong>6/26(금) 14:00</strong></li>
      <li>참가 취소 마감: <strong>8/31(월) 17:00</strong></li>
    </ul>
    <p>접수는 공식 홈페이지(mbn-seoulmarathon.com)에서 진행됩니다. 하프 2만·10K 1만 = 총 3만 명 규모 인기 대회라 <strong>오픈 직후 빠르게 마감</strong>될 수 있으니, 원하는 종목의 오픈 시각에 미리 대기하세요.</p>
  </div>
</div>

<h2>코스 — 서울 랜드마크를 달린다</h2>
<p><strong>하프</strong>는 <strong>광화문광장</strong>을 출발해 서울 도심을 가로질러 <strong>잠실종합운동장</strong>까지 이어지는 편도(포인트-투-포인트) 코스입니다(제한시간 2시간 30분). 시청·숭례문·동대문 등 도심 랜드마크를 통과하는 일직선 코스로 기록보다 "서울을 달리는 경험" 자체가 매력이지만, <strong>2026년 세부 경유지는 공식 코스맵(추후 공개) 기준으로 확인</strong>하세요.</p>
<p><strong>10K</strong>는 하프와 달리 <strong>잠실종합운동장에서 출발·도착하는 루프 코스</strong>입니다(제한시간 1시간 30분). 잠실 일대를 도는 접근성 좋은 코스라 초보 러너에게 친화적입니다.</p>

<h2>참가비·완주 기념품</h2>
<ul>
  <li><strong>참가비</strong>(2026 확정): 하프 100,000원 / 10K 70,000원</li>
  <li><strong>완주 기념품</strong>: 완주 메달 + 대회 티셔츠 + 양말 (티셔츠·양말은 대회 전 택배 발송) + 계측칩 배번</li>
  <li><strong>시상</strong>: 하프 남녀 1~3위 50/40/30만 원 · 10K 남녀 1~3위 30/20/10만 원</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">🚧</span>
  <div class="callout-body">
    <p class="callout-title">참가 전 체크 — 교통통제 & 미확정 정보</p>
    <ul>
      <li><strong>교통통제</strong>: 2025년 기준 오전 5:00~11:35, 광화문~잠실 구간 통제. 2026년 통제 계획은 대회 임박 시 공지됩니다 — 참가자·시민 모두 <strong>대중교통 권장</strong></li>
      <li><strong>세부 코스 경유지·교통통제 계획</strong>은 아직 공개 전입니다. 신청 전 <strong>공식 홈페이지(mbn-seoulmarathon.com)에서 최신 코스맵을 반드시 확인</strong>하세요</li>
    </ul>
  </div>
</div>

<h2>다른 가을 서울 대회와 비교</h2>
<p>11월 서울은 대회가 몰립니다. 본인 목표에 맞게 고르세요.</p>
<ul>
  <li><strong>MBN 서울마라톤(이 글)</strong> — 광화문→잠실 일직선 하프, 도심 랜드마크, TV 생중계</li>
  <li>봄에 열린 <a href="/blog/mind-vs-im-bank-marathon-2026-seoul">마인드 vs iM뱅크 마라톤</a>처럼 같은 날 여러 대회가 겹칠 수 있으니 일정 확인 필수</li>
  <li>풀코스 도전이라면 <a href="/blog/2026-chuncheon-marathon-registration-guide">춘천마라톤</a>, 메달·기념품 중심이면 <a href="/blog/2026-garmin-run-korea-half-marathon">가민런 코리아</a>도 후보</li>
</ul>
<p>가을 대회 전체 일정은 <a href="/marathon">마라톤 캘린더</a>에서 한 번에 확인할 수 있습니다.</p>

<h2>마무리</h2>
<p>MBN 서울마라톤은 <strong>"기록 경쟁"보다 "서울 도심을 달리는 경험"</strong>에 무게가 실린 대회입니다. 광화문에서 잠실까지 서울을 가로지르는 하프, 초보 친화적인 잠실 10K — 가을 첫 하프·10K에 도전하려는 러너에게 좋은 선택지죠. 핵심은 <strong>6/25(하프)·6/26(10K) 본접수</strong>를 놓치지 않는 것입니다. 신청 전 공식 홈페이지에서 2026년 확정 정보를 한 번 더 확인하세요. 🏃</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 MBN 서울마라톤 공식 홈페이지(2026-06-22 우선신청 개시)와 접수 발표 자료를 반영했습니다. 개최일(11/15)·참가비·정원·출발시각은 공식 확정 정보이며, 세부 코스 경유지는 추후 공개 예정입니다. 신청 전 공식 홈페이지(mbn-seoulmarathon.com)를 한 번 더 확인하세요. (글감: @runninglife_korea · 공식 확정정보 반영 2026-06-22)</p>
`,
  },
  {
    id: 'on-cloudrunner-2-review-2026',
    slug: 'on-cloudrunner-2-review-2026',
    title: '단종됐지만 알아둘 가치 — On 클라우드러너 2 리뷰 | 가벼운 입문 안정화, 중고로 살까 vs 클라우드러너 3로 갈까',
    description: '온(On)의 입문 안정화 클라우드러너 2. 5/5 힐 카운터로 과내전을 잡아주면서도 가볍고 통기성 좋은 데일리·워킹 겸용화입니다. 다만 한국 공식몰에서는 단종돼 후속작 클라우드러너 3로 대체됐죠. 단단한 승차감과 마일드한 안정성의 실체, 단종 상황에서 중고로 살지 CR3로 갈지, 카야노 대비 가성비까지 솔직하게 정리했습니다.',
    thumbnail: '/images/blog/on-cloudrunner-2-review-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-08',
    category: 'review' as const,
    readingTime: 7,
    tags: ['온', 'On', '클라우드러너 2', '안정화', '힐 카운터', '과내전', '입문 러닝화', '워킹 겸용', '단종', 'On 안정화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>클라우드러너 2는 <strong>5/5 힐 카운터로 과내전을 잡아주는 가벼운 입문 안정화</strong> — 275g 경량에 통기성·워킹 겸용이 강점입니다</li>
    <li>단, <strong>한국 공식몰에서는 단종</strong>돼 후속작 <a href="/shoes/on-cloudrunner-3">클라우드러너 3</a>로 대체됐습니다(중고·병행·재고로만 구매 가능)</li>
    <li>안정성은 "거의 중립에 가까운 마일드" 수준이고 반발은 약해, <strong>심한 과내전엔 부족</strong>합니다. 지금 새로 산다면 가벼운 CR2 중고 vs 안정성 보강된 신품 CR3를 저울질하세요</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">📦</span>
  <div class="callout-body">
    <p class="callout-title">먼저 — 한국 공식 단종 상태입니다</p>
    <p><a href="/shoes/on-cloudrunner-2">클라우드러너 2</a>는 2023년 출시된 On의 입문 안정화로, 현재 <strong>한국 공식몰에서는 판매가 종료</strong>됐습니다(후속작 <a href="/blog/on-cloudrunner-3-review-2026">클라우드러너 3</a>로 세대교체, 방수 버전만 잔존). 즉 신품 정가 구매는 어렵고 <strong>중고·병행수입·재고</strong>로만 접할 수 있죠. 그럼에도 여전히 신는 분이 많고 중고 매물도 흔해, "지금 사도 될지"를 판단할 수 있게 정리합니다.</p>
  </div>
</div>

<h2>클라우드러너 2, 어떤 신발인가</h2>
<p>핵심은 <strong>힐 카운터 안정화</strong>입니다. 외부 레일형 카운터 + 내부 스티프 카운터(강성 5/5)로 발뒤꿈치를 단단히 잡아, 발이 안쪽으로 무너지는 <strong>과내전</strong>을 완화합니다. 힐 33.6mm / 전족 25.1mm 스택, <strong>275g 경량</strong>, 8.5mm 드롭으로 안정화치고 가볍고, Helion 폼은 겨울에도 17%만 경화돼 사계절 안정적입니다.</p>

<h2>'안정화'의 실체 — 생각보다 마일드</h2>
<p>이름은 안정화지만, 실제 지지는 <strong>"거의 중립에 가까운 마일드 수준"</strong>입니다(Run to the Finish는 "거의 중립화로 분류할 뻔했다"고 표현).</p>
<ul>
  <li><strong>힐 카운터는 강합니다</strong>(5/5) — 뒤꿈치 고정력은 확실합니다</li>
  <li>하지만 <strong>미드풋·전족부는 중립</strong>에 가깝고, 비틀림 강성도 중간(3/5)이라 <strong>심한 과내전 교정엔 부족</strong>합니다</li>
  <li>"불안정한 중립화는 싫지만 카야노처럼 과한 교정도 싫다"는 <strong>경미한 과내전</strong> 러너에게 맞습니다</li>
</ul>

<h2>강점 — 가볍고, 통기성 좋고, 워킹 겸용</h2>
<ul>
  <li><strong>275g 경량</strong> — 안정화 중 가벼운 편이라 데일리·이지런에 부담이 적습니다</li>
  <li><strong>통기성 우수</strong> — 거의 만점급 메쉬 어퍼. 여름에도 쾌적합니다</li>
  <li><strong>겨울 안정성</strong> — Helion 폼이 영하에서도 17%만 경화돼 사계절 착화감이 일정합니다</li>
  <li><strong>워킹 겸용</strong> — 안정적이라 출퇴근·일상 착화에도 좋습니다</li>
  <li><strong>가성비</strong> — 과거 정가 18만 9천원으로 <a href="/shoes/asics-gel-kayano-32">카야노 32</a>(₩259,000)보다 7만 원 저렴했습니다</li>
</ul>

<h2>약점 — 반발과 단단함</h2>
<ul>
  <li><strong>반발이 약합니다</strong> — 에너지 리턴 57%로, 톡 쏘는 추진력은 없습니다</li>
  <li><strong>단단한 승차감</strong> — 27.3 HA로 "푹신한 구름"을 기대하면 의외로 딱딱합니다</li>
  <li><strong>빠른 페이스에 둔함</strong> — 템포·인터벌용은 아닙니다</li>
  <li><strong>사이즈 주의</strong> — 약간 크게 나온다는 후기가 있어, 중고 구매 시 실측 확인이 필요합니다</li>
</ul>

<h2>핵심 — 중고 CR2 vs 신품 CR3</h2>
<p>지금 클라우드러너를 고민한다면 가장 현실적인 질문입니다.</p>
<table>
  <thead>
    <tr><th></th><th>클라우드러너 2 (이 글·단종)</th><th><a href="/shoes/on-cloudrunner-3">클라우드러너 3</a> (신품)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>구매</strong></td><td>중고·병행·재고만</td><td>한국 공식 판매 중</td></tr>
    <tr><td><strong>무게</strong></td><td>275g (가벼움)</td><td>약 300g대</td></tr>
    <tr><td><strong>토박스</strong></td><td>72.4mm (더 넓음)</td><td>71.0mm</td></tr>
    <tr><td><strong>스택·안정성</strong></td><td>기본</td><td>스택↑·힐 클립 개선</td></tr>
  </tbody>
</table>
<p><strong>가볍고 토박스 넓은 걸 원하고 중고 매물이 상태 좋다면 CR2</strong>, <strong>신품 보증과 보강된 안정성·쿠션을 원하면 CR3</strong>입니다. 흥미롭게도 CR2가 더 가볍고 발볼 여유가 있어, "단순 상위호환"은 아닙니다. CR3의 상세는 <a href="/blog/on-cloudrunner-3-review-2026">클라우드러너 3 리뷰</a>에서 다뤘습니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">중고로 산다면 체크</p>
    <ul>
      <li><strong>한국 공식 와이드는 없습니다</strong> — 미국 On엔 Wide SKU가 있지만 한국 공식엔 없으니, 발볼 넓은 러너는 직구나 실착을 확인하세요</li>
      <li><strong>아웃솔 내구성</strong> — On의 고질적 약점. 중고는 밑창 마모 상태를 꼭 확인(권장 교체 500km)</li>
      <li><strong>사이즈</strong> — 약간 크게 나오는 편이라 실측 길이를 확인하세요</li>
    </ul>
  </div>
</div>

<h2>살까, 말까</h2>
<div class="callout info">
  <span class="callout-icon">🎯</span>
  <div class="callout-body">
    <p class="callout-title">이렇게 정리됩니다</p>
    <ul>
      <li><strong>중고 CR2가 맞는 사람</strong>: 경미한 과내전 + 가벼운 데일리·워킹 겸용을 원하고, 상태 좋은 중고를 저렴하게 구할 수 있는 러너</li>
      <li><strong>신품 CR3가 나은 사람</strong>: 보증·신품을 원하거나, 더 두툼한 쿠션·보강된 안정성을 원하는 러너 → <a href="/shoes/on-cloudrunner-3">클라우드러너 3</a></li>
      <li><strong>본격 안정화가 필요하면</strong>: <a href="/shoes/asics-gel-kayano-32">카야노 32</a>·<a href="/shoes/brooks-adrenaline-gts-25">브룩스 아드레날린 GTS 25</a>가 지지력에서 앞섭니다</li>
    </ul>
  </div>
</div>

<h2>자주 묻는 질문</h2>
<h3>Q. 지금 새로 살 수 있나요?</h3>
<p>한국 공식몰에서는 <strong>단종</strong>됐습니다. 중고·병행수입·재고로만 구할 수 있고, 신품 보증을 원하면 후속작 <a href="/shoes/on-cloudrunner-3">클라우드러너 3</a>가 현실적입니다.</p>

<h3>Q. 심한 평발·과내전인데 충분한가요?</h3>
<p>힐 카운터는 강하지만 전체 지지는 마일드해서, <strong>심한 과내전엔 부족</strong>할 수 있습니다. 그럴 땐 <a href="/shoes/asics-gel-kayano-32">카야노</a> 같은 본격 안정화가 안전합니다.</p>

<h3>Q. CR3로 그냥 가는 게 낫나요?</h3>
<p>신품·보증·보강된 안정성을 원하면 CR3가 낫습니다. 다만 CR2가 <strong>더 가볍고 토박스가 넓어</strong>, 가벼움·발볼 여유를 우선하고 좋은 중고를 구할 수 있다면 CR2도 합리적입니다.</p>

<h3>Q. 발볼 넓은데 괜찮나요?</h3>
<p>토박스 72.4mm로 표준이라 보통 발은 무난하지만, <strong>한국 공식 와이드가 없습니다</strong>. 발볼이 넓다면 직구 와이드나 매장 착화를 확인하세요.</p>

<h2>마무리</h2>
<p>클라우드러너 2는 <strong>"가볍고 통기성 좋은 입문 안정화"</strong>로 분명한 강점이 있었지만, 한국에서는 이미 세대교체로 단종됐습니다. 지금 새로 만난다면 핵심은 둘입니다 — <strong>좋은 중고를 저렴하게 구할 수 있는가</strong>, 그리고 <strong>심한 과내전이 아닌가</strong>. 두 조건에 맞으면 여전히 좋은 데일리·워킹화지만, 신품 보증이나 더 강한 안정성을 원하면 <a href="/blog/on-cloudrunner-3-review-2026">클라우드러너 3</a>가, 본격 교정이 필요하면 <a href="/shoes/asics-gel-kayano-32">카야노</a>가 답입니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 On 공식 자료와 RunRepeat·Doctors of Running·Run to the Finish 리뷰를 종합한 내용입니다. 무게·스택은 측정 기준에 따라 차이가 있을 수 있습니다. 클라우드러너 2는 2026-06 기준 한국 공식몰에서 단종 상태이며, 가격(₩189,000)은 과거 정가입니다.</p>
`,
  },
  {
    id: 'on-cloudrunner-3-review-2026',
    slug: 'on-cloudrunner-3-review-2026',
    title: 'On식 \'가벼운 안정화\' — 클라우드러너 3 리뷰 | 카야노 같은 교정은 아니다, 편한 러닝·워킹 겸용엔 합격',
    description: '온(On)의 안정화 데일리 트레이너 클라우드러너 3. 힐 가이던스(힐 클립)로 흔들림을 잡아주지만, 카야노 같은 본격 교정형 안정화를 기대하면 실망합니다. "최근 최고의 어퍼"라는 극찬과 "벽돌 같은 반발"이라는 혹평이 동시에 나오는 이 신발의 진짜 성격, 안정화 수준, 한국 와이드 부재 이슈, 클라우드러너 2와의 차이를 솔직하게 정리했습니다.',
    thumbnail: '/images/blog/on-cloudrunner-3-review-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-08',
    category: 'review' as const,
    readingTime: 7,
    tags: ['온', 'On', '클라우드러너 3', '안정화', '힐 가이던스', '과내전', '워킹 겸용', 'CloudTec', '데일리 쿠션화', 'On 안정화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>클라우드러너 3는 <strong>힐 가이던스(힐 클립)로 후족부를 잡아주는 "가벼운 안정화"</strong> — 카야노·아드레날린 같은 본격 교정형이 아니라 <strong>경미한 과내전</strong>용입니다</li>
    <li>평가가 극단으로 갈립니다 — <strong>"최근 최고의 어퍼"(DOR)·9.1점(BGL)</strong> vs <strong>"벽돌 같은 반발"·D티어(BITR)</strong>. 핵심은 <strong>반발이 약하고 무겁지만(약 300g대) 안정·내구·워킹 겸용은 강하다</strong>는 것</li>
    <li>한국 공식엔 <strong>와이드가 없고</strong>(미국엔 있음) 빠른 훈련엔 부적합 — <strong>편안한 이지런·워킹 겸용 안정화</strong>를 원하는 러너에게 맞습니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🦶</span>
  <div class="callout-body">
    <p class="callout-title">"안정화는 필요한데, 카야노는 부담스럽다면"</p>
    <p><a href="/shoes/on-cloudrunner-3">클라우드러너 3</a>는 온(On)의 안정화 데일리 트레이너입니다. 발이 안쪽으로 무너지는 <strong>과내전</strong>을 잡아주되, <a href="/shoes/asics-gel-kayano-32">카야노</a>처럼 무겁고 교정감 강한 본격 안정화와는 결이 다릅니다. 그런데 이 "애매한 포지션" 때문에 해외 리뷰 점수가 극과 극으로 갈려요. 누구에게 맞고 누구에겐 안 맞는지 솔직하게 짚어보겠습니다.</p>
  </div>
</div>

<h2>클라우드러너 3, 어떤 신발인가</h2>
<p>핵심은 <strong>힐 가이던스(Heel Guidance)</strong> 구조입니다. 플라스틱 <strong>힐 클립 + 비대칭 힐 + 후족부 솔 플레어링</strong>으로 착지 때 발뒤꿈치를 안정적으로 잡아 자연스러운 롤링을 유도하죠. 힐 36.8mm / 전족 28.7mm 스택, 8mm 드롭, 약 300g대 무게로 <strong>빠른 훈련보다 편안한 이지런·워킹</strong>에 맞춰진 신발입니다.</p>

<h2>'안정화'의 진실 — 얼마나 잡아주나</h2>
<p>가장 중요한 포인트입니다. 클라우드러너 3의 안정화는 <strong>"경미한 수준(mild-to-moderate)"</strong>입니다.</p>
<ul>
  <li><strong>후족부만</strong> 잡아줍니다 — 힐 클립이 뒤꿈치를 고정하지만, 미드풋·전족부는 중립화에 가깝습니다</li>
  <li><strong>본격 모션컨트롤이 아닙니다</strong> — <a href="/shoes/asics-gel-kayano-32">카야노</a>나 <a href="/shoes/brooks-adrenaline-gts-25">브룩스 아드레날린</a>보다 훨씬 가벼운 지지입니다</li>
  <li>따라서 <strong>경미한 과내전</strong>엔 잘 맞지만, <strong>심한 과내전·평발</strong>엔 지지가 부족할 수 있습니다</li>
</ul>
<p>"불안정한 중립화는 싫고, 카야노처럼 과한 교정도 싫다"는 러너에게 정확히 들어맞는 중간 지대입니다.</p>

<h2>강점 — 어퍼·안정감·내구성</h2>
<ul>
  <li><strong>최상급 어퍼</strong> — Doctors of Running이 "최근 출시작 중 최고의 어퍼"라 극찬했습니다. 발을 부드럽게 감싸 장시간 착화해도 편합니다</li>
  <li><strong>힐 클립 제로 슬립</strong> — 뒤꿈치가 단단히 고정돼 흔들림·미끄러짐이 없습니다(Boulder Gear Lab 9.1점)</li>
  <li><strong>내구성 우수</strong> — 아웃솔 마모 0.6mm로 오래 신어도 잘 안 닳습니다. 고중량 러너에게도 무난</li>
  <li><strong>워킹 겸용</strong> — 안정적이라 출퇴근·종일 착화에도 편합니다</li>
</ul>

<h2>약점 — 반발과 무게</h2>
<p>강점만큼 단점도 분명해 평가가 갈립니다.</p>
<ul>
  <li><strong>반발이 약합니다</strong> — Helion 폼의 에너지 리턴이 53%로 낮아, Believe in the Run은 <strong>"벽돌 같은 느낌"</strong>이라며 D티어를 줬습니다. 톡 쏘는 추진력은 없습니다</li>
  <li><strong>무겁습니다</strong> — 약 300g대로, 빠른 페이스·인터벌엔 둔합니다</li>
  <li><strong>통기성 제한</strong> — 한여름엔 더울 수 있습니다</li>
</ul>
<p>즉 RunRepeat·BGL은 "편안하고 안정적"이라 호평(90점), BITR은 "반발 없고 애매하다"고 혹평 — <strong>무엇을 기대하느냐</strong>에 따라 갈리는 신발입니다.</p>

<h2>클라우드러너 2와 뭐가 다른가</h2>
<p>전작 <a href="/shoes/on-cloudrunner-2">클라우드러너 2</a> 대비 변화는 분명합니다.</p>
<table>
  <thead>
    <tr><th></th><th>클라우드러너 2</th><th>클라우드러너 3 (이 글)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>무게</strong></td><td>약 275g</td><td>약 300g대 (무거워짐)</td></tr>
    <tr><td><strong>힐 스택</strong></td><td>33.6mm</td><td>36.8mm (쿠션↑)</td></tr>
    <tr><td><strong>안정성·어퍼</strong></td><td>기본</td><td>힐 클립·어퍼 개선</td></tr>
    <tr><td><strong>반발</strong></td><td>57%</td><td>53% (소폭↓)</td></tr>
  </tbody>
</table>
<p>3세대는 <strong>쿠션·안정성·어퍼 품질이 올라간 대신 더 무거워지고 반발은 약간 떨어졌습니다.</strong> "더 안정적이고 편한 워킹 겸용"을 원하면 3, "가벼움"을 원하면 2가 낫습니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">한국 러너가 사기 전 체크</p>
    <ul>
      <li><strong>한국 공식엔 와이드가 없습니다</strong> — 미국 On에는 Cloudrunner 3 Wide(2E)가 있지만 한국 미출시. 토박스는 71mm 표준이고 어퍼 볼륨은 넉넉한 편이라 보통 발은 무난하나, <strong>발볼 넓은 러너</strong>는 직구·병행수입의 와이드를 알아봐야 합니다</li>
      <li><strong>빠른 훈련엔 부적합</strong> — 반발이 약하고 무거워 템포·인터벌용은 아닙니다</li>
      <li><strong>안정화 기대치</strong> — 심한 과내전·평발이면 지지가 부족할 수 있어 카야노 계열이 안전합니다</li>
    </ul>
  </div>
</div>

<h2>살까, 말까 — 경쟁자와 함께</h2>
<div class="callout info">
  <span class="callout-icon">🎯</span>
  <div class="callout-body">
    <p class="callout-title">이렇게 정리됩니다</p>
    <ul>
      <li><strong>맞는 사람</strong>: 경미한 과내전 + 편안한 이지런·워킹 겸용을 원하는 러너, 어퍼 착화감과 내구성을 중시하는 러너, On 디자인을 좋아하는 러너</li>
      <li><strong>맞지 않는 사람</strong>: 반발·속도를 원하는 러너, 심한 과내전·평발 러너, 가벼운 신발을 원하는 러너</li>
      <li><strong>대안</strong>: 본격 안정화가 필요하면 <a href="/shoes/asics-gel-kayano-32">카야노 32</a>·<a href="/shoes/brooks-adrenaline-gts-25">브룩스 아드레날린 GTS 25</a>·<a href="/shoes/nike-structure-26">나이키 스트럭처 26</a>가 지지력에서 앞섭니다</li>
    </ul>
  </div>
</div>

<h2>자주 묻는 질문</h2>
<h3>Q. 평발인데 이걸로 충분한가요?</h3>
<p>경미한 과내전이면 힐 가이던스가 도움이 되지만, <strong>심한 평발·과내전</strong>이면 후족부만 잡아주는 이 구조로는 부족할 수 있습니다. 그럴 땐 <a href="/shoes/asics-gel-kayano-32">카야노</a> 같은 본격 안정화가 안전합니다.</p>

<h3>Q. 러닝과 워킹 둘 다 되나요?</h3>
<p>네, 그게 이 신발의 강점입니다. 안정적이고 어퍼가 편해 <strong>출퇴근 워킹 + 이지런</strong> 겸용에 잘 맞습니다. 다만 빠른 러닝엔 둔합니다.</p>

<h3>Q. 발볼 넓은데 괜찮나요?</h3>
<p>토박스는 71mm 표준이지만 어퍼 볼륨이 넉넉해 보통~약간 넓은 발은 무난합니다. 단 <strong>한국 공식 와이드가 없어</strong> 발볼이 많이 넓다면 매장 착화나 직구 와이드를 확인하세요.</p>

<h3>Q. 입문용으로 사도 되나요?</h3>
<p>안정적이고 내구성이 좋아 무난하지만, 반발이 약해 "달리는 재미"는 덜합니다. 안정감·편안함을 우선한다면 좋은 선택입니다. <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 가이드</a>도 참고하세요.</p>

<h2>마무리</h2>
<p>클라우드러너 3는 <strong>"가벼운 안정화 + 편한 워킹 겸용"</strong>이라는 자기 자리가 분명한 신발입니다. 반발·속도를 기대하면 "벽돌"처럼 느껴지지만, <strong>안정감·어퍼 착화감·내구성</strong>을 원하면 충분히 만족스럽죠. 핵심은 기대치입니다 — "빠른 러닝화"가 아니라 "<strong>편하고 안정적인 데일리·워킹화</strong>"로 보면 제값을 합니다. 본격 안정화가 필요하면 <a href="/shoes/asics-gel-kayano-32">카야노</a>로, 더 가벼운 On을 원하면 <a href="/shoes/on-cloudrunner-2">클라우드러너 2</a>로 눈을 돌려보세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 On 공식 자료와 RunRepeat·Believe in the Run·Doctors of Running·Boulder Gear Lab 리뷰를 종합한 내용입니다. 무게·스택은 측정 사이즈 기준에 따라 차이가 있을 수 있습니다(RunRepeat US M9 약 298g 등). 가격은 On 한국 공식(2026-06 기준)이며 변동될 수 있습니다.</p>
`,
  },
  {
    id: 'on-cloudsurfer-2-review-2026',
    slug: 'on-cloudsurfer-2-review-2026',
    title: 'On 입문 데일리, \'구름 착지감\'의 진실 — 클라우드서퍼 2 리뷰 | 내구성·디자인은 합격, 반발은 글쎄 + 맥스와 차이',
    description: '온(On)의 입문용 데일리 트레이너 클라우드서퍼 2. CloudTec Phase의 매끄러운 전환과 최상급 내구성, SNS에 통하는 디자인이 강점이지만, "구름 같은 착지감"이라는 이미지와 달리 실제론 단단하고 반발이 약합니다. 해외 평가가 갈리는 이 신발의 진짜 가치, 와이드 없는 발볼 이슈, 그리고 클라우드서퍼 맥스와의 차이를 솔직하게 정리했습니다.',
    thumbnail: '/images/blog/on-cloudsurfer-2-review-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-08',
    category: 'review' as const,
    readingTime: 7,
    tags: ['온', 'On', '클라우드서퍼 2', '입문 러닝화', '데일리 쿠션화', 'CloudTec Phase', 'easy run', '러닝 입문', '온 클라우드서퍼', 'On 러닝화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>클라우드서퍼 2는 온(On)의 <strong>입문용 데일리 트레이너</strong> — CloudTec Phase의 매끄러운 전환, <strong>최상급 내구성</strong>(아웃솔 마모 0.6mm), SNS에 통하는 디자인이 강점입니다</li>
    <li>단, <strong>"구름 같은 착지감" 이미지와 달리 실제론 단단하고 반발이 약합니다</strong> — 에너지 리턴 52%로 해외 평가가 갈립니다(BITR 혹평 vs RTR 호평)</li>
    <li><strong>와이드 옵션이 없고</strong> 10km 이상 장거리엔 단조로워, <strong>단거리 데일리·출퇴근 겸용</strong>에 맞습니다. 더 무겁고 쿠션 보강된 <a href="/blog/on-cloudsurfer-max-review-2026">맥스</a>와는 성격이 다릅니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">☁️</span>
  <div class="callout-body">
    <p class="callout-title">On 입문, 디자인으로 사고 후회는 없을까</p>
    <p><a href="/shoes/on-cloudsurfer-2">클라우드서퍼 2</a>는 "온(On) 한번 신어보고 싶다"는 러너의 첫 선택으로 자주 꼽히는 데일리 트레이너입니다. 특유의 CloudTec 디자인과 일상 겸용 스타일이 매력이죠. 그런데 막상 달려보면 <strong>"구름 같은 착지감"이라는 브랜드 이미지와 실제 감각 사이에 괴리</strong>가 있습니다. 해외 리뷰 점수도 크게 갈리고요. 19만 9천원의 값을 하는지 솔직하게 짚어보겠습니다.</p>
  </div>
</div>

<h2>클라우드서퍼 2, 어떤 신발인가</h2>
<p>온의 <strong>CloudTec Phase</strong>(파드가 순차 압축되며 굴러가는 구조)에 Helion 폼을 얹은 입문~데일리 트레이너입니다. 힐 37.5mm / 전족 27.1mm 스택, <strong>254g 경량</strong>, 드롭은 실측 약 10mm로 높은 편이라 힐 스트라이커에게 자연스럽습니다. 빠른 레이스보다 <strong>편안한 데일리 조깅과 일상 착화</strong>를 노린 포지션이죠.</p>

<h2>강점 — 내구성·디자인·개선점</h2>
<ul>
  <li><strong>내구성 최상급</strong> — 아웃솔 마모가 0.6mm로 업계 평균(1.1mm)의 절반 수준. 오래 신어도 밑창이 잘 안 닳습니다</li>
  <li><strong>1세대 대비 확실한 개선</strong> — 통기성이 크게 좋아졌고, 구형의 고질병이던 <strong>"끽끽" 소음이 완전히 사라졌습니다</strong>. 폼 밀도를 높여 내구성도 개선됐죠</li>
  <li><strong>매끄러운 록커 전환</strong> — 힐-투-토 굴림이 자연스러워 일정 페이스 유지가 편합니다</li>
  <li><strong>디자인·일상 겸용</strong> — 러닝 후 카페에 들러도 튀지 않는 스타일. "운동화 겸 러닝화"로 매력적입니다</li>
</ul>

<h2>약점 — '구름 착지감'의 진실</h2>
<p>가장 솔직하게 짚어야 할 부분입니다. 클라우드서퍼 2는 이름·이미지와 달리 <strong>폭신하지 않고 단단합니다.</strong></p>
<ul>
  <li><strong>에너지 리턴 52%</strong> — 데일리 트레이너 평균 이하. 톡톡 튀는 반발과는 거리가 멉니다</li>
  <li><strong>단단한 승차감</strong> — Believe in the Run은 "<strong>식탁에 놔둔 김빠진 콜라 같다</strong>"는 표현까지 썼습니다(D티어 혹평). 반면 Road Trail Run은 8.2/10으로 후하게 평가해, <strong>평가가 크게 갈립니다</strong></li>
  <li><strong>장거리 단조로움</strong> — 5~10km까진 괜찮지만 그 이상에선 승차감이 밋밋해집니다</li>
</ul>
<p>즉 "구름처럼 푹신"을 기대하면 실망합니다. <strong>"단단하고 안정적인 데일리"</strong>로 받아들여야 맞습니다.</p>

<h2>맥스와 뭐가 다른가</h2>
<p>같은 클라우드서퍼 라인의 <a href="/shoes/on-cloudsurfer-max">클라우드서퍼 맥스</a>와 헷갈리기 쉬우니 정리합니다.</p>
<table>
  <thead>
    <tr><th></th><th>클라우드서퍼 2 (이 글)</th><th><a href="/shoes/on-cloudsurfer-max">클라우드서퍼 맥스</a></th></tr>
  </thead>
  <tbody>
    <tr><td><strong>가격</strong></td><td>199,000원</td><td>219,000원</td></tr>
    <tr><td><strong>무게</strong></td><td>254g (가벼움)</td><td>292g</td></tr>
    <tr><td><strong>토박스</strong></td><td>73.5mm</td><td>71.4mm (더 좁음)</td></tr>
    <tr><td><strong>성격</strong></td><td>가벼운 단거리 데일리</td><td>묵직한 안정형 장거리</td></tr>
  </tbody>
</table>
<p>흥미롭게도 <strong>힐 쿠션·경도는 둘이 거의 같습니다.</strong> 클라우드서퍼 2가 더 가볍고 싸고 토박스도 넓어, "가벼운 데일리"라면 오히려 2가 낫습니다. 맥스는 전족부 쿠션과 약간의 안정감을 더할 때만 의미가 있죠 — 자세한 건 <a href="/blog/on-cloudsurfer-max-review-2026">클라우드서퍼 맥스 리뷰</a>에서 다뤘습니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">한국 러너가 사기 전 체크</p>
    <ul>
      <li><strong>와이드 옵션이 없습니다</strong> — 토박스 73.5mm로 표준이지만, 발볼 넓은 러너는 미드풋이 타이트할 수 있어 실착이 필수입니다</li>
      <li><strong>장거리엔 비추천</strong> — 10km 이상 단조로워, 장거리 LSD용으론 다른 신발이 낫습니다</li>
      <li><strong>가격 대비 성능</strong> — 19만 9천원에 반발·쿠션 성능을 기대하면 아쉽습니다. <strong>"디자인 8할, 성능 2할"</strong>로 보는 게 맞습니다</li>
    </ul>
  </div>
</div>

<h2>살까, 말까 — 경쟁자와 함께</h2>
<div class="callout info">
  <span class="callout-icon">🎯</span>
  <div class="callout-body">
    <p class="callout-title">이렇게 정리됩니다</p>
    <ul>
      <li><strong>맞는 사람</strong>: On 디자인을 좋아하고, 단거리 데일리·출퇴근 겸용 + 내구성을 원하는 러너. 단단한 안정감을 선호하는 입문자</li>
      <li><strong>맞지 않는 사람</strong>: 폭신한 쿠션·반발을 원하는 러너, 10km 이상 장거리러너, 발볼 넓은 러너, 가성비 최우선 러너</li>
      <li><strong>대안</strong>: 반발·범용성을 원하면 <a href="/shoes/nike-pegasus-41">나이키 페가수스 41</a>, 통통 튀는 데일리는 <a href="/shoes/asics-novablast-5">아식스 노바블라스트 5</a>가 가성비·성능에서 앞섭니다</li>
    </ul>
  </div>
</div>

<h2>자주 묻는 질문</h2>
<h3>Q. 입문용 첫 러닝화로 괜찮나요?</h3>
<p>안정적이고 내구성이 좋아 무난하지만, 19만 9천원 가격과 "구름 착지감 기대"를 생각하면 최선은 아닐 수 있습니다. <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 가이드</a>로 다른 입문화와 비교해 보세요.</p>

<h3>Q. 정말 '구름처럼' 푹신한가요?</h3>
<p>아닙니다. 마케팅 이미지와 달리 <strong>단단한 편</strong>입니다. 푹신함을 원하면 호카 클리프턴이나 뉴발 1080 쪽이 맞습니다.</p>

<h3>Q. 맥스랑 뭘 살까요?</h3>
<p><strong>가볍고 저렴한 단거리 데일리</strong>면 클라우드서퍼 2, <strong>묵직한 안정형 장거리</strong>면 맥스입니다. 힐 쿠션은 비슷하니 무게·가격·용도로 고르세요.</p>

<h3>Q. 발볼 넓은데 괜찮나요?</h3>
<p>토박스가 73.5mm로 표준이라 보통 발은 무난하지만 <strong>와이드가 없습니다</strong>. 발볼이 넓다면 매장 착화가 필수입니다.</p>

<h2>마무리</h2>
<p>클라우드서퍼 2는 <strong>"성능보다 경험"으로 사는 신발</strong>입니다. 반발·쿠션 수치는 평범하지만, 최상급 내구성과 일상 겸용 디자인, On만의 록커감은 분명한 가치죠. 핵심은 기대치 조정입니다 — "구름처럼 푹신"이 아니라 "<strong>단단하고 오래 가는 데일리</strong>"로 보면 만족스럽습니다. 더 묵직한 쿠션을 원하면 <a href="/shoes/on-cloudsurfer-max">맥스</a>로, 반발·가성비를 원하면 <a href="/shoes/nike-pegasus-41">페가수스</a>·<a href="/shoes/asics-novablast-5">노바블라스트</a>로 눈을 돌려보세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 On 공식 자료와 RunRepeat·Believe in the Run·Road Trail Run 리뷰를 종합한 내용입니다. 무게·스택·내구성 수치는 측정 기준에 따라 차이가 있을 수 있습니다. 가격은 On 한국 공식(2026-06 기준)이며 변동될 수 있습니다.</p>
`,
  },
  {
    id: 'on-cloudsurfer-max-review-2026',
    slug: 'on-cloudsurfer-max-review-2026',
    title: '이름만 \'Max\'? — On 클라우드서퍼 맥스 리뷰 | 단단한 안정형 데일리의 진실 + 클라우드서퍼 2와 3만원 차이',
    description: '온(On)의 맥스쿠션 데일리화 클라우드서퍼 맥스. 그런데 해외 랩 테스트와 리뷰는 "이름만 Max"라고 입을 모읍니다 — 에너지 리턴은 역대 최저권이고, 일반 클라우드서퍼 2와 힐 스택·경도가 거의 같은데 3만 원 더 비싸죠. 단단한 안정형 데일리로서의 진짜 가치와 한계, 레이싱 루프 결함, 발볼·평발 적합성까지 솔직하게 정리했습니다.',
    thumbnail: '/images/blog/on-cloudsurfer-max-review-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-08',
    category: 'review' as const,
    readingTime: 7,
    tags: ['온', 'On', '클라우드서퍼 맥스', '클라우드서퍼 2', '맥스쿠션', '데일리 쿠션화', 'CloudTec Phase', 'easy run', '회복런', '안정화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>클라우드서퍼 맥스는 이름과 달리 <strong>폭신한 맥스쿠션이 아니라 "단단하고 안정적인" 데일리화</strong> — 에너지 리턴이 48%로 역대 최저권이라 반발감을 기대하면 실망합니다</li>
    <li>가장 큰 함정은 <strong>일반 <a href="/shoes/on-cloudsurfer-2">클라우드서퍼 2</a>와 힐 스택·경도가 거의 같은데 3만 원 비싸고 토박스는 오히려 더 좁다</strong>는 점 — "Max 프리미엄"의 근거가 약합니다</li>
    <li>그럼에도 <strong>넓은 플랫폼의 안정성·접지력·평발 지지력</strong>은 분명한 강점. "단단하고 안정적인 회복런·일상 겸용"을 원하는 러너에겐 맞습니다</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">🤔</span>
  <div class="callout-body">
    <p class="callout-title">"Max"인데 폭신하지 않다?</p>
    <p>온이 드디어 <strong>맥스쿠션 데일리화</strong> <a href="/shoes/on-cloudsurfer-max">클라우드서퍼 맥스</a>를 내놨습니다. 이름만 보면 호카 본디나 뉴발 1080처럼 구름 위를 걷는 폭신함을 기대하게 되죠. 그런데 해외 전문 리뷰(BITR·Road Trail Run·Doctors of Running)와 RunRepeat 랩 데이터는 한목소리로 <strong>"이름만 Max"</strong>라고 평합니다. 왜 그런지, 그리고 그럼에도 누구에게 맞는지 솔직하게 짚어보겠습니다.</p>
  </div>
</div>

<h2>클라우드서퍼 맥스, 어떤 신발인가</h2>
<p>온의 <strong>CloudTec Phase</strong>(압축되며 굴러가는 파드 구조)에 Helion 폼을 얹은 데일리 트레이너입니다. 힐 37.3mm / 전족 29.4mm 스택, 292g, 충격흡수(SA) 141로 <strong>보호력은 충분</strong>합니다. 전작 클라우드이클립스의 소음 나던 외부 스피드보드를 없애 라이드를 정리했고, 어퍼 품질은 최상급이라는 평이 많습니다.</p>
<p>문제는 그 다음입니다.</p>

<h2>"Max"라는 이름의 함정</h2>
<ul>
  <li><strong>에너지 리턴 48% — RunRepeat 역대 최저권</strong>. "바운스 대비 가격이 최악"이라는 혹평까지 나옵니다. 톡 쏘는 반발과는 거리가 멉니다</li>
  <li><strong>경도 43.8 AC로 단단</strong> — '맥스쿠션'의 푹신하게 꺼지는 느낌이 없습니다. 진짜 맥스쿠션을 기대하면 실망합니다</li>
  <li><strong>292g 무게</strong> — 빠른 페이스에선 둔하게 느껴집니다</li>
</ul>
<p>즉 클라우드서퍼 맥스는 "폭신한 맥스쿠션"이 아니라 <strong>"단단하고 묵직한 안정형 데일리"</strong>로 이해해야 합니다. 호카 본디 9 같은 포지션을 노렸지만 실제 감촉은 더 단단하죠.</p>

<h2>핵심 — 클라우드서퍼 2와 뭐가 다른가</h2>
<p>가장 냉정하게 따져볼 부분입니다. 같은 클라우드서퍼 라인의 일반 <a href="/shoes/on-cloudsurfer-2">클라우드서퍼 2</a>와 비교하면:</p>
<table>
  <thead>
    <tr><th></th><th>클라우드서퍼 맥스</th><th>클라우드서퍼 2</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>가격</strong></td><td>219,000원</td><td>199,000원</td></tr>
    <tr><td><strong>힐 스택</strong></td><td>37.3mm</td><td>37.5mm (거의 동일)</td></tr>
    <tr><td><strong>경도</strong></td><td>43.8 AC</td><td>43.8 AC (동일)</td></tr>
    <tr><td><strong>에너지 리턴</strong></td><td>48%</td><td>52% (Max가 더 낮음)</td></tr>
    <tr><td><strong>토박스</strong></td><td>71.4mm</td><td>73.5mm (Max가 더 좁음)</td></tr>
    <tr><td><strong>무게</strong></td><td>292g</td><td>254g (Max가 38g 무거움)</td></tr>
  </tbody>
</table>
<p>충격적이게도 <strong>"Max"가 힐 쿠션은 거의 같고, 에너지 리턴은 더 낮고, 토박스는 더 좁고, 38g 무거운데 3만 원 비쌉니다.</strong> 전문 리뷰어들이 "가격 프리미엄을 정당화하기 어렵다"고 입을 모으는 이유죠. 전족부 쿠션(+20 SA)과 약간의 안정감 정도가 Max의 차별점입니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">사기 전 알아야 할 단점</p>
    <ul>
      <li><strong>레이싱 루프 결함</strong> — 끈을 잡아주는 패브릭 루프가 미끄러운 끈을 못 잡아 <strong>주행 중 풀린다</strong>는 지적이 많습니다. 끈도 과도하게 길어 걸릴 수 있습니다</li>
      <li><strong>통기성 부족</strong> — 어퍼가 좋아 보여도 실제 환기는 약해, 한여름 한강 러닝엔 더울 수 있습니다</li>
      <li><strong>와이드 옵션 없음 + 좁은 토박스</strong> — 71.4mm로 표준 하단. 발볼 넓은 한국 러너는 실착이 필수입니다</li>
      <li><strong>가격</strong> — 21만 9천원은 단단한 데일리화로는 프리미엄. 가성비는 약합니다</li>
    </ul>
  </div>
</div>

<h2>그럼에도, 강점은 분명하다</h2>
<ul>
  <li><strong>안정성</strong> — 넓은 힐 플랫폼(95mm)과 단단한 폼으로 발이 안정적으로 잡힙니다. 평발·경미한 과내전 러너에게 지지력이 좋습니다(DPT 평가 B+)</li>
  <li><strong>접지력</strong> — 젖은 보도블록에서도 미끄럼이 적습니다</li>
  <li><strong>무릎 보호</strong> — SA 141 충격흡수로 무릎 부담이 적어 회복런·장거리 easy run에 적합합니다</li>
  <li><strong>일상 겸용</strong> — 단단하고 안정적이라 하루 종일 걷는 날 신어도 편합니다</li>
</ul>

<h2>살까, 말까 — 경쟁자와 함께</h2>
<div class="callout info">
  <span class="callout-icon">🎯</span>
  <div class="callout-body">
    <p class="callout-title">이렇게 정리됩니다</p>
    <ul>
      <li><strong>맞는 사람</strong>: "단단하고 안정적인" 회복런·일상 겸용 데일리를 원하고, 온 디자인을 좋아하며, 평발 지지가 필요한 러너</li>
      <li><strong>맞지 않는 사람</strong>: 폭신한 맥스쿠션을 기대하는 러너, 빠른 반발을 원하는 러너, 발볼 넓은 러너, 가성비 최우선 러너</li>
      <li><strong>대안</strong>: 같은 돈이면 일반 <a href="/shoes/on-cloudsurfer-2">클라우드서퍼 2</a>(3만 원 싸고 토박스 넓음)가 더 합리적일 수 있고, <strong>진짜 폭신한 맥스쿠션</strong>은 <a href="/shoes/new-balance-1080-v15">뉴발란스 1080</a>·<a href="/shoes/asics-gel-nimbus-28">아식스 님버스 28</a>이, 가벼운 데일리는 <a href="/shoes/hoka-clifton-10">호카 클리프턴 10</a>이 앞섭니다</li>
    </ul>
  </div>
</div>

<h2>자주 묻는 질문</h2>
<h3>Q. 맥스쿠션이라 무릎에 좋나요?</h3>
<p>SA 141 충격흡수로 <strong>무릎 보호엔 충분</strong>합니다. 단 "폭신하게 꺼지는" 쿠션이 아니라 "단단하게 받쳐주는" 보호라는 점을 기대치에 반영하세요.</p>

<h3>Q. 그냥 클라우드서퍼 2 사는 게 낫나요?</h3>
<p>대부분의 경우 <strong>그렇습니다</strong>. 힐 쿠션이 거의 같고, 토박스가 넓고, 가볍고, 3만 원 싸거든요. Max는 전족부 쿠션과 약간의 안정감을 더 원할 때만 의미가 있습니다.</p>

<h3>Q. 발볼 넓은데 괜찮나요?</h3>
<p>토박스가 71.4mm로 <strong>표준 하단</strong>이라 좁은 편이고 와이드도 없습니다. 발볼 넓은 러너는 비추천이며, 꼭 신으려면 매장 착화가 필수입니다.</p>

<h3>Q. 러닝 입문용으로 사도 되나요?</h3>
<p>안정적이라 회복·가벼운 조깅엔 무난하지만, 21만 9천원 가격과 "Max 기대치"를 생각하면 입문용으로 최선은 아닙니다. <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 가이드</a>를 먼저 보고 결정하세요.</p>

<h2>마무리</h2>
<p>클라우드서퍼 맥스는 <strong>나쁜 신발은 아니지만, "Max"라는 이름이 만든 기대와 실제가 어긋나는</strong> 신발입니다. 폭신함 대신 단단함, 반발 대신 안정. 그 성격을 알고 "안정적인 회복런·일상화"로 받아들이면 만족스럽지만, 폭신한 맥스쿠션을 기대하고 사면 실망합니다. 그리고 무엇보다 <strong>3만 원 싼 <a href="/shoes/on-cloudsurfer-2">클라우드서퍼 2</a>와 진지하게 저울질</strong>해 볼 것을 권합니다. 이름값보다 내 발과 용도에 맞는지가 먼저니까요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 On 공식 자료와 RunRepeat·Believe in the Run·Road Trail Run·Doctors of Running 리뷰를 종합한 내용입니다. 무게·스택·내구성 수치는 측정 기준에 따라 차이가 있을 수 있습니다. 가격은 On 한국 공식(2026-06 기준)이며 변동될 수 있습니다.</p>
`,
  },
  {
    id: 'on-cloudmonster-3-review-2026',
    slug: 'on-cloudmonster-3-review-2026',
    title: '회복런엔 이만한 게 없다 — On 클라우드몬스터 3 리뷰 | 넓어진 핏·강해진 록커의 데일리 쿠션화, 하이퍼와 뭐가 다른가',
    description: '온(On)의 클라우드몬스터 3는 푹신한 Helion 폼과 강한 록커로 굴러가는 느낌을 살린 데일리 쿠션화입니다. 3세대는 핏이 넓어져 한국 러너에게 한결 편해졌죠. easy run·회복런·입문용으로 어떤지, 슈퍼트레이너인 하이퍼와 무엇이 다른지, 약 295g 무게와 어퍼 내구성·와이드 부재 같은 단점까지 정리했습니다.',
    thumbnail: '/images/blog/on-cloudmonster-3-review-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-08',
    category: 'review' as const,
    readingTime: 7,
    tags: ['온', 'On', '클라우드몬스터 3', '데일리 쿠션화', '회복런', 'easy run', 'Helion', '쿠션화', '입문 러닝화', 'CloudTec'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>클라우드몬스터 3는 푹신한 <strong>Helion 단일 폼 + 강한 록커</strong>로 "굴러가는 느낌"을 살린 <strong>데일리 쿠션화</strong> — 빠른 훈련보다 <strong>easy run·회복런·입문</strong>에 맞습니다</li>
    <li>3세대의 핵심 변화는 <strong>넓어진 핏</strong> — 토박스가 여유로워져 발볼 있는 한국 러너에게 한결 편해졌습니다</li>
    <li>단, <strong>약 295g으로 무거운 편</strong>이고 어퍼 내구성·와이드 부재가 약점. 빠른 훈련을 원하면 슈퍼트레이너인 <a href="/blog/on-cloudmonster-3-hyper-review-2026">하이퍼</a>가 맞습니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">☁️</span>
  <div class="callout-body">
    <p class="callout-title">'몬스터'라는 이름값</p>
    <p>클라우드몬스터는 온(On)의 <strong>맥스 쿠션 데일리화</strong> 라인입니다. 큼직한 CloudTec 구조와 두툼한 폼으로 발밑이 푹신하고, 특유의 <strong>강한 록커(앞으로 굴러가는 설계)</strong>가 "발이 알아서 굴러가는" 감각을 줍니다. 3세대(<a href="/shoes/on-cloudmonster-3">클라우드몬스터 3</a>)는 그 성격을 유지하면서 <strong>핏을 넓혀</strong> 더 많은 발에 맞게 다듬었습니다. 기록을 위한 신발이 아니라, <strong>편하게 오래 달리는</strong> 신발입니다.</p>
  </div>
</div>

<h2>클라우드몬스터 3, 어떤 신발인가</h2>
<ul>
  <li><strong>Helion 단일 폼</strong> — 부드럽고 푹신한 EVA·올레핀 블렌드. 하이퍼의 이중 밀도와 달리 단순하지만 데일리에 충분한 쿠션</li>
  <li><strong>강한 록커</strong> — 앞으로 굴러가는 전환이 매끄러워 일정 페이스 유지가 쉽습니다</li>
  <li><strong>스택 힐 약 38mm / 전족 32mm, 드롭 6mm</strong> — 하이퍼(45/39)보다 낮아 데일리에 안정적</li>
</ul>
<p>쿠션감은 충분하지만 <strong>반발력은 평이</strong>합니다(에너지 리턴 약 57~59%). 빠르게 치고 나가는 신발이 아니라, <strong>충격을 흡수하며 편하게 굴러가는</strong> 성격이죠. 무릎이 약하거나 러닝을 막 시작한 러너에게 그 푹신함이 특히 반갑습니다.</p>

<h2>어떤 러닝에 맞나</h2>
<ul>
  <li><strong>회복런·easy run</strong> — 힘든 훈련 다음 날, 다리를 풀어주는 느린 러닝에 최적</li>
  <li><strong>러닝 입문</strong> — 푹신한 쿠션이 초반 충격 부담을 줄여 입문자 친화적입니다 (첫 신발 고민이라면 <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 가이드</a>도 참고)</li>
  <li><strong>장시간 가벼운 조깅</strong> — 편안함 위주의 데일리 마일리지 쌓기</li>
</ul>

<h2>하이퍼·라이트스프레이와 뭐가 다른가</h2>
<p>이름이 비슷한 형제 모델과 헷갈리기 쉬우니 정리합니다. 핵심은 <strong>"데일리냐, 슈퍼트레이너냐"</strong>입니다.</p>
<table>
  <thead>
    <tr><th>모델</th><th>가격</th><th>폼</th><th>성격</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>클라우드몬스터 3 (이 글)</strong></td><td>229,000원</td><td>Helion 단일</td><td>데일리·회복런</td></tr>
    <tr><td><a href="/shoes/on-cloudmonster-3-hyper">하이퍼</a></td><td>259,000원</td><td>Helion HF 이중</td><td>장거리·템포 슈퍼트레이너</td></tr>
    <tr><td><a href="/shoes/on-cloudmonster-3-hyper-lightspray">라이트스프레이 하이퍼</a></td><td>319,000원</td><td>Helion HF 이중</td><td>초경량 슈퍼트레이너</td></tr>
  </tbody>
</table>
<p>일반 3는 <strong>단일 폼·낮은 스택의 데일리화</strong>, 하이퍼 두 모델은 <strong>이중 밀도·높은 스택의 슈퍼트레이너</strong>입니다. "빠른 훈련도 하고 싶다"면 <a href="/blog/on-cloudmonster-3-hyper-review-2026">하이퍼</a>로 올라가는 게 맞고, "편하게 데일리만"이면 일반 3로 충분합니다. 전작과의 차이가 궁금하면 <a href="/blog/on-cloudmonster-2-vs-3-comparison">클라우드몬스터 2 vs 3 비교</a>를 보세요.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">사기 전 체크 — 단점도 분명합니다</p>
    <ul>
      <li><strong>무겁습니다</strong> — 약 295g으로 동급 데일리화 중 무거운 편. 빠른 페이스엔 둔하게 느껴집니다</li>
      <li><strong>어퍼 내구성 주의</strong> — 랩 테스트에서 토박스 내구성이 낮게 평가됐습니다. 거친 사용엔 마모가 빠를 수 있어요</li>
      <li><strong>와이드 옵션이 없습니다</strong> — 3세대로 핏이 넓어졌지만 표준 폭 한 가지뿐이라, 발볼이 매우 넓다면 착화 확인이 필요합니다</li>
      <li><strong>가격</strong> — 22만 9천원은 데일리화로는 프리미엄. 가성비 데일리라면 다른 선택지도 많습니다</li>
    </ul>
  </div>
</div>

<h2>경쟁자 — 데일리 쿠션화 비교</h2>
<p>같은 "푹신한 데일리" 자리에는 <a href="/shoes/hoka-clifton-10">호카 클리프턴 10</a>, <a href="/shoes/nike-vomero-18">나이키 보메로 18</a> 등 강력한 경쟁자가 많습니다. 클라우드몬스터 3의 차별점은 <strong>온 특유의 강한 록커와 디자인</strong>이고, 클리프턴은 가벼움, 보메로는 부드러운 쿠션이 강점입니다. 푹신함과 굴러가는 감각, 브랜드 선호로 갈리는 선택이죠.</p>

<h2>살까, 말까</h2>
<div class="callout info">
  <span class="callout-icon">✅</span>
  <div class="callout-body">
    <p class="callout-title">잘 맞는 사람</p>
    <ul>
      <li><strong>회복런·easy run용</strong> 푹신한 데일리화를 찾는 러너</li>
      <li>러닝을 막 시작해 <strong>충격 부담이 적은</strong> 신발이 필요한 입문자</li>
      <li>온의 <strong>록커감과 디자인</strong>을 좋아하는 러너</li>
    </ul>
  </div>
</div>
<div class="callout warning">
  <span class="callout-icon">🚫</span>
  <div class="callout-body">
    <p class="callout-title">맞지 않는 사람</p>
    <ul>
      <li><strong>빠른 훈련·템포</strong>를 원하는 러너 → <a href="/shoes/on-cloudmonster-3-hyper">하이퍼</a>로</li>
      <li><strong>가벼운 신발</strong>을 원하는 러너 (약 295g은 무거운 편)</li>
      <li><strong>발볼 매우 넓은</strong> 러너 (와이드 없음)</li>
    </ul>
  </div>
</div>

<h2>자주 묻는 질문</h2>
<h3>Q. 클라우드몬스터 3로 마라톤 뛰어도 되나요?</h3>
<p>완주 목표의 편한 신발로는 가능합니다. 다만 무게가 있어 <strong>기록</strong>을 노린다면 슈퍼트레이너(<a href="/shoes/on-cloudmonster-3-hyper">하이퍼</a>)나 카본화가 낫습니다. 일반 3는 <strong>훈련·회복</strong>에 더 어울립니다.</p>

<h3>Q. 입문자가 첫 신발로 사도 되나요?</h3>
<p>푹신한 쿠션이라 입문에 무난합니다. 다만 22만 9천원이 부담이라면 더 합리적인 입문화도 많으니 <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 가이드</a>를 함께 보세요.</p>

<h3>Q. 하이퍼랑 가격 차이가 3만 원인데, 그냥 하이퍼 살까요?</h3>
<p>용도가 다릅니다. <strong>데일리·회복</strong>이 목적이면 일반 3, <strong>빠른 장거리 훈련</strong>까지 원하면 하이퍼입니다. 단순 상위호환이 아니라 성격이 다른 신발이에요.</p>

<h2>마무리</h2>
<p>클라우드몬스터 3는 화려한 신발은 아닙니다. 빠르지도, 가볍지도 않죠. 하지만 <strong>푹신하게 굴러가며 다리를 편하게 풀어주는</strong> 데일리·회복런용으로는 분명한 매력이 있습니다. 3세대로 핏까지 넓어져 한국 러너에게 더 편해졌고요. "기록은 다른 신발로, <strong>편한 러닝은 이걸로</strong>"라는 역할 분담에 잘 맞습니다. 더 빠른 훈련을 원하면 <a href="/blog/on-cloudmonster-3-hyper-review-2026">하이퍼</a>로, 데일리 쿠션화를 더 비교하고 싶으면 <a href="/shoes/hoka-clifton-10">클리프턴 10</a>·<a href="/shoes/nike-vomero-18">보메로 18</a>도 후보에 넣어보세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 On 공식 자료와 RunRepeat 랩 데이터, 전문 리뷰를 종합한 내용입니다. 무게·스택·내구성 수치는 측정 기준에 따라 차이가 있을 수 있습니다. 가격은 On 한국 공식(2026-06 기준)이며 변동될 수 있습니다.</p>
`,
  },
  {
    id: 'on-cloudmonster-3-hyper-review-2026',
    slug: 'on-cloudmonster-3-hyper-review-2026',
    title: '카본 없이 슈퍼블라스트와 맞붙는다 — On 클라우드몬스터 3 하이퍼 리뷰 | 25만 9천원 무플레이트 슈퍼트레이너의 균형점',
    description: '온(On)의 클라우드몬스터 3 하이퍼는 카본 플레이트 없이 Helion HF 이중 밀도 폼으로 장거리·템포 훈련을 받쳐주는 슈퍼트레이너입니다. 힐 45mm 맥스쿠션에 264g 경량, 아식스 슈퍼블라스트와 직접 경쟁하죠. 라이트스프레이 버전보다 6만 원 싸고 어퍼가 편한 이 "합리적 하이퍼"가 한국 러너에게 맞는지, 발볼·평발·가격 관점에서 정리했습니다.',
    thumbnail: '/images/blog/on-cloudmonster-3-hyper-review-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-08',
    category: 'review' as const,
    readingTime: 8,
    tags: ['온', 'On', '클라우드몬스터 3 하이퍼', '슈퍼트레이너', 'Helion HF', '무플레이트', '슈퍼블라스트', '마라톤 훈련화', '맥스쿠션', '카본 없는 러닝화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>클라우드몬스터 3 하이퍼는 <strong>카본 플레이트 없이</strong> Helion HF + Helion 이중 밀도 폼으로 반발력을 끌어올린 <strong>슈퍼트레이너</strong> — 힐 45mm 맥스쿠션에 264g 경량입니다</li>
    <li>경쟁 상대는 <strong>아식스 슈퍼블라스트</strong>. 카본의 부담 없이 장거리·템포를 한 켤레로 소화하려는 러너에게 맞고, <a href="/blog/on-lightspray-cloudmonster-3-hyper-review-2026">라이트스프레이 버전</a>보다 <strong>6만 원 싸고 어퍼가 편합니다</strong></li>
    <li>단, <strong>와이드 옵션이 없고</strong> 높은 스택이 평발엔 불안할 수 있으며, <strong>25만 9천원</strong>은 가성비 최우선 러너에겐 부담입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">'슈퍼트레이너'가 뭐냐면</p>
    <p>요즘 러닝화 시장의 흐름이 <strong>"카본 레이서는 부담스럽고, 데일리화는 심심하다"</strong>는 러너를 위한 중간 지대 — 바로 <strong>슈퍼트레이너</strong>입니다. 카본 플레이트는 빼되 <strong>고반발 슈퍼폼 + 높은 스택</strong>으로 장거리·템포 훈련을 빠르고 편하게 받쳐주죠. <strong>온 클라우드몬스터 3 하이퍼</strong>는 여기에 정확히 올라탄 모델이고, 같은 자리를 노리는 <a href="/shoes/asics-superblast-3">아식스 슈퍼블라스트 3</a>와 직접 맞붙습니다.</p>
  </div>
</div>

<h2>클라우드몬스터 3 하이퍼, 뭐가 특별한가</h2>
<p>일반 <a href="/shoes/on-cloudmonster-3">클라우드몬스터 3</a>가 단일 Helion 폼의 데일리화라면, <strong>하이퍼</strong>는 미드솔을 <strong>이중 밀도</strong>로 업그레이드한 버전입니다.</p>
<ul>
  <li><strong>상단 Helion™ HF (PEBA계 하이퍼폼)</strong> — 부드럽고 반발력 있는 슈퍼폼</li>
  <li><strong>하단 Helion + CloudTec 섀시</strong> — 단단하게 받쳐 높은 스택에서도 흔들림을 잡아줍니다</li>
</ul>
<p>그 결과가 <strong>힐 45mm / 전족 39mm 스택, 264g, 6mm 드롭</strong>의 무플레이트 슈퍼트레이너입니다. 에너지 리턴은 힐 66% / 전족 69%로 슈퍼트레이너급이고, RunRepeat은 89/100점을 주며 "On 역대 최고의 슈퍼트레이너"라 평했습니다. 카본의 톡 쏘는 추진력 대신 <strong>부드럽지만 무너지지 않는 반발</strong>이 핵심이죠.</p>

<h2>실제로 어떻게 달리나</h2>
<ul>
  <li><strong>높은 스택, 그런데 안정적</strong> — 45mm 맥스쿠션인데도 하부 섀시 덕에 장거리에서 자세가 잘 유지됩니다. 슈퍼블라스트보다 하부 플랫폼이 안정적이라는 평이 많습니다</li>
  <li><strong>범용성</strong> — 회복 조깅부터 마라톤 페이스 템포까지 한 켤레로. "인터벌과 LSD를 하나로 소화"하려는 고마일리지 러너에게 매력적입니다</li>
  <li><strong>무릎 보호</strong> — 45mm 스택이 충격을 잘 분산해 30km 이후에도 무릎 부담이 덜합니다</li>
</ul>
<p>포지션은 카본화와 다릅니다. 레이스 기록 단축이 목적이면 카본 레이서가 맞고, <strong>훈련 강도를 올리면서 다리를 보호</strong>하려는 러너에게 이 신발이 빛납니다.</p>

<h2>라이트스프레이 버전과 뭐가 다를까</h2>
<p>2026년 클라우드몬스터 3 하이퍼는 <strong>두 가지</strong>로 나옵니다. 헷갈리기 쉬우니 정리합니다.</p>
<table>
  <thead>
    <tr><th></th><th>일반 하이퍼 (이 글)</th><th><a href="/shoes/on-cloudmonster-3-hyper-lightspray">라이트스프레이 하이퍼</a></th></tr>
  </thead>
  <tbody>
    <tr><td><strong>가격</strong></td><td>259,000원</td><td>319,000원</td></tr>
    <tr><td><strong>무게</strong></td><td>264g</td><td>205g</td></tr>
    <tr><td><strong>어퍼</strong></td><td>엔지니어드 메시(패딩 있음)</td><td>로봇 스프레이 일체형(끈·패딩 없음)</td></tr>
    <tr><td><strong>미드솔</strong></td><td colspan="2" style="text-align:center">동일 (Helion HF + Helion 이중 밀도)</td></tr>
  </tbody>
</table>
<p>핵심은 <strong>미드솔(달리는 느낌)은 같다</strong>는 점입니다. 차이는 어퍼와 무게뿐이죠. 라이트스프레이는 60g 더 가볍고 통기성이 최상이지만, 패딩이 없어 착화에 적응이 필요하고 6만 원 더 비쌉니다. <strong>대부분의 러너에겐 패딩 있고 착화 편한 일반 하이퍼가 합리적</strong>입니다. 라이트스프레이의 로봇 어퍼 기술이 궁금하다면 <a href="/blog/on-lightspray-cloudmonster-3-hyper-review-2026">라이트스프레이 상세 리뷰</a>를 보세요.</p>

<h2>경쟁자 — 슈퍼블라스트와 비교</h2>
<p>같은 무플레이트 슈퍼트레이너인 <a href="/shoes/asics-superblast-3">아식스 슈퍼블라스트</a>가 직접 경쟁자입니다. 둘 다 비슷한 스택·무게지만, 클라우드몬스터 3 하이퍼는 <strong>하부 플랫폼 안정성</strong>이, 슈퍼블라스트는 <strong>톡톡 튀는 경쾌함</strong>이 상대적 강점으로 꼽힙니다. 슈퍼블라스트 세대 차이가 궁금하면 <a href="/blog/asics-superblast-2-vs-3-comparison">슈퍼블라스트 2 vs 3 비교</a>도 참고하세요.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">한국 러너가 사기 전 체크</p>
    <ul>
      <li><strong>와이드 옵션이 없습니다</strong> — 토박스 72.8mm로 표준이지만, 발볼 넓은 러너는 장거리에서 앞발이 조일 수 있습니다. 매장 착화를 권합니다</li>
      <li><strong>평발 주의</strong> — 45mm 높은 스택이 평발 러너에겐 오히려 불안정하게 느껴질 수 있어, 안정화(카야노 계열)를 먼저 고려하는 게 나을 수 있습니다</li>
      <li><strong>가격</strong> — 25만 9천원은 km당 약 576원으로 레이싱화급 비용입니다. 가성비가 최우선이면 <a href="/blog/li-ning-red-hare-9-ultra-truth-2026">라이닝 레드헤어 9 울트라</a> 같은 10만 원대 대안도 있습니다</li>
    </ul>
  </div>
</div>

<h2>살까, 말까 — 러너 타입별</h2>
<div class="callout info">
  <span class="callout-icon">✅</span>
  <div class="callout-body">
    <p class="callout-title">잘 맞는 사람</p>
    <ul>
      <li>카본화는 부담스럽지만 <strong>훈련 강도를 올리고 싶은</strong> 러너</li>
      <li>장거리 easy run과 마라톤 페이스 템포를 <strong>한 켤레로</strong> 소화하려는 고마일리지 러너</li>
      <li>높은 스택의 <strong>안정감과 무릎 보호</strong>를 중시하는 러너</li>
      <li>라이트스프레이의 기술 프리미엄(+6만 원)은 굳이 필요 없는 러너</li>
    </ul>
  </div>
</div>
<div class="callout warning">
  <span class="callout-icon">🚫</span>
  <div class="callout-body">
    <p class="callout-title">맞지 않는 사람</p>
    <ul>
      <li><strong>발볼 넓은 러너</strong> — 와이드가 없습니다</li>
      <li><strong>평발 러너</strong> — 높은 스택의 불안정감 주의</li>
      <li><strong>가성비 최우선</strong> 러너 — 25만 9천원은 부담</li>
      <li>낮은 스택의 <strong>직접적인 바닥감</strong>을 원하는 러너</li>
    </ul>
  </div>
</div>

<h2>자주 묻는 질문</h2>
<h3>Q. 일반 클라우드몬스터 3랑 하이퍼, 뭐가 다른가요?</h3>
<p>일반 3은 단일 Helion 폼의 <strong>데일리화</strong>(₩229,000), 하이퍼는 Helion HF 이중 밀도에 스택을 높인 <strong>슈퍼트레이너</strong>(₩259,000)입니다. 하이퍼가 더 두툼하고 반발력 있으며 빠른 훈련에 맞습니다.</p>

<h3>Q. 마라톤 대회에 신어도 되나요?</h3>
<p>완주·서브 목표의 훈련 겸 레이스로는 충분합니다. 다만 <strong>기록 단축</strong>이 핵심이면 카본 레이서가, <strong>훈련+장거리 겸용</strong>이면 이 신발이 맞습니다.</p>

<h3>Q. 슈퍼블라스트랑 뭘 살까요?</h3>
<p>하부 <strong>안정감</strong>을 중시하면 클라우드몬스터 3 하이퍼, 톡 쏘는 <strong>경쾌함</strong>을 원하면 슈퍼블라스트 쪽입니다. 발볼이 넓다면 둘 다 와이드가 제한적이니 착화 확인이 우선입니다.</p>

<h3>Q. 발볼 넓은데 괜찮나요?</h3>
<p>토박스는 표준(72.8mm)이라 보통 발은 무난하지만 <strong>와이드가 없습니다</strong>. 발볼이 넓다면 반 사이즈 업도 근본 해결은 아니니, 매장에서 신어보고 결정하세요.</p>

<h2>마무리</h2>
<p>클라우드몬스터 3 하이퍼는 "<strong>카본은 부담스럽고 훈련은 더 빠르게</strong>"라는 러너에게 정확히 맞는 무플레이트 슈퍼트레이너입니다. 라이트스프레이 같은 화려한 신기술은 없지만, <strong>패딩 있는 편한 어퍼와 6만 원 싼 가격</strong>으로 오히려 더 실용적이죠. 핵심 갈림길은 둘입니다 — <strong>내 발볼이 표준인가</strong>, 그리고 <strong>25만 9천원의 값을 훈련 빈도로 뽑을 수 있는가</strong>. 두 가지에 "예"라면 슈퍼블라스트와 진지하게 저울질해 볼 만합니다. 더 가벼운 극강 경량을 원하면 <a href="/shoes/on-cloudmonster-3-hyper-lightspray">라이트스프레이</a>, 데일리 위주면 <a href="/shoes/on-cloudmonster-3">일반 클라우드몬스터 3</a>가 답입니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 On 공식 자료와 RunRepeat·Believe in the Run·Road Trail Run·Doctors of Running 리뷰를 종합한 내용입니다. 무게·스택은 측정 기준(공식 vs 랩 실측)에 따라 약간 차이가 있을 수 있습니다. 가격은 On 한국 공식(2026-06 기준)이며 변동될 수 있습니다.</p>
`,
  },
  {
    id: 'on-lightspray-cloudmonster-3-hyper-review-2026',
    slug: 'on-lightspray-cloudmonster-3-hyper-review-2026',
    title: '로봇이 3분 만에 \'뿌려서\' 만든 어퍼 — On 라이트스프레이 클라우드몬스터 3 하이퍼 리뷰 | 205g 슈퍼트레이너의 정체 + 3종 라인업 정리',
    description: '온(On)의 클라우드몬스터 3가 일반·하이퍼·라이트스프레이 하이퍼 3종으로 갈라졌습니다. 그중 화제의 라이트스프레이 버전은 로봇이 폴리머 필라멘트를 미드솔에 직접 분사해 3분 만에 완성하는 일체형 어퍼로 205g 초경량을 달성했죠. 3종이 어떻게 다른지, 라이트스프레이 기술의 실체, 힐 45mm 맥스쿠션의 안정성·통기성, 그리고 31만 9천원이라는 가격이 한국 러너에게 합당한지 정리했습니다.',
    thumbnail: '/images/blog/on-lightspray-cloudmonster-3-hyper-review-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-08',
    category: 'review' as const,
    readingTime: 8,
    tags: ['온', 'On', '클라우드몬스터 3 하이퍼', '라이트스프레이', 'LightSpray', '슈퍼트레이너', 'Helion HF', '초경량 러닝화', '맥스쿠션', '카본 없는 슈퍼트레이너'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>온의 클라우드몬스터 3는 <strong>3종</strong>으로 나뉩니다 — 일반(₩229,000)·하이퍼(₩259,000)·<strong>라이트스프레이 하이퍼(₩319,000)</strong>. 화제작은 맨 위 라이트스프레이 버전입니다</li>
    <li><strong>로봇이 폴리머 필라멘트 1.5km를 미드솔 위에 직접 분사해 3분 만에 어퍼를 완성</strong> — 솔기도 끈도 없는 일체형 어퍼로 <strong>205g</strong> 초경량을 달성했습니다(어퍼 무게 33g)</li>
    <li>힐 45mm 맥스쿠션인데도 <strong>"믿기 힘들 만큼 안정적"</strong>이라는 평가 — 단, 패딩이 없어 착화가 까다롭고 족저근막염 러너는 주의, <strong>31만 9천원</strong>은 국내 슈퍼트레이너 최고가권입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🤖</span>
  <div class="callout-body">
    <p class="callout-title">"신발 어퍼를 로봇이 뿌려서 만든다고?"</p>
    <p>러닝 커뮤니티에서 화제가 된 <strong>On 라이트스프레이 클라우드몬스터 3 하이퍼(LightSpray Cloudmonster 3 Hyper)</strong>는 어퍼를 천으로 재단·봉제하는 대신 <strong>로봇 팔이 열가소성 필라멘트를 미드솔 위에 직접 분사</strong>해 만듭니다. 약 3분, 8개 부품, 솔기·접착제 없음. 그 결과가 <strong>205g</strong>짜리 맥스쿠션 슈퍼트레이너죠. 그런데 사기 전에 알아야 할 게 있습니다 — 클라우드몬스터 3가 올해 <strong>세 가지 버전</strong>으로 갈라졌거든요.</p>
  </div>
</div>

<h2>먼저 정리 — 클라우드몬스터 3가 '3종'입니다</h2>
<p>2026년 온은 클라우드몬스터 3 패밀리를 셋으로 출시했습니다. 이름이 비슷해 헷갈리기 쉬우니 먼저 끊고 갑니다.</p>
<table>
  <thead>
    <tr><th>모델</th><th>가격</th><th>무게</th><th>어퍼</th><th>성격</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/on-cloudmonster-3">클라우드몬스터 3</a></td><td>229,000원</td><td>301g</td><td>일반 메시</td><td>데일리·회복</td></tr>
    <tr><td><a href="/shoes/on-cloudmonster-3-hyper">클라우드몬스터 3 하이퍼</a></td><td>259,000원</td><td>264g</td><td>일반 메시</td><td>장거리·템포 슈퍼트레이너</td></tr>
    <tr><td><strong><a href="/shoes/on-cloudmonster-3-hyper-lightspray">라이트스프레이 하이퍼</a></strong></td><td><strong>319,000원</strong></td><td><strong>205g</strong></td><td><strong>로봇 스프레이 일체형</strong></td><td>초경량 프리미엄 슈퍼트레이너</td></tr>
  </tbody>
</table>
<p>핵심 차이는 <strong>어퍼와 무게</strong>입니다. 일반과 하이퍼는 같은 천 어퍼를 쓰지만, 하이퍼 두 모델은 미드솔에 <strong>Helion™ HF(상단 PEBA계 하이퍼폼) + Helion(하단)</strong> 이중 밀도를 넣어 더 반발력 있고 두툼합니다. 그리고 맨 위 <strong>라이트스프레이</strong>가 여기에 로봇 스프레이 어퍼를 더해 무게를 <strong>일반 대비 96g(약 32%)</strong>이나 덜어낸 버전입니다. 일반 3와 하이퍼의 차이가 궁금하면 <a href="/blog/on-cloudmonster-2-vs-3-comparison">클라우드몬스터 2 vs 3 비교</a>도 참고하세요.</p>

<h2>라이트스프레이가 뭐길래 — 로봇이 뿌리는 어퍼</h2>
<p>라이트스프레이(LightSpray™)는 온이 개발한 제조 기술입니다. <strong>로봇 팔이 라스트(신발 골) 위에 폴리머 필라멘트 약 1.5km를 직접 분사</strong>해, 재단·봉제·접착 없이 어퍼 한 장을 통째로 만들어 냅니다.</p>
<ul>
  <li><strong>3분 완성</strong> — 전통 어퍼의 수십 개 공정이 한 번의 분사로 압축됩니다</li>
  <li><strong>솔기·끈·힐 카운터 없음</strong> — 필라멘트가 미드솔에 열로 직접 융착돼 발을 양말처럼 감쌉니다(어퍼 무게 약 33g)</li>
  <li><strong>친환경</strong> — 온은 비교 레이싱화 대비 <strong>CO₂ 75% 저감</strong>, 자투리 원단·접착제 없음을 내세웁니다</li>
</ul>
<p>실제 착화감은 "두 번째 피부"에 가깝다는 평이 많습니다. 격자 구조라 <strong>통기성도 최상위</strong>(양말 색이 비칠 정도). 다만 끈이 없고 빡빡해서 <strong>처음 신을 때 당겨 신는 요령과 적응이 필요</strong>합니다.</p>

<h2>실제로 어떻게 달리나</h2>
<p>해외 전문 매체 평가는 상당히 높습니다(Believe in the Run A티어, Road Trail Run 9.31/10). 핵심은 셋입니다.</p>
<ul>
  <li><strong>높은 스택, 그런데 안정적</strong> — 힐 45mm / 전족 39mm의 맥스쿠션인데도 "믿기 힘들 만큼 안정적"이라는 평가. 맥스쿠션 트레이너 중 안정성 최상위권입니다</li>
  <li><strong>부드럽지만 무너지지 않는 반발</strong> — 상단 Helion HF(소프트) + 하단 Helion(단단)의 이중 밀도가 푹신함과 탄력을 동시에. 에너지 리턴은 힐 66% / 전족 69%로 슈퍼트레이너급</li>
  <li><strong>넓은 페이스 대응</strong> — 부드러운 로커 설계로 회복 조깅부터 마라톤 레이스 페이스까지 한 켤레로 커버. "원슈(one-shoe)" 솔루션을 원하는 러너에게 매력적입니다</li>
</ul>
<p>포지션은 카본 레이서와 다릅니다. 톡 쏘는 추진력의 <a href="/shoes/asics-superblast-3">슈퍼블라스트 3</a> 같은 무플레이트 슈퍼트레이너와 직접 경쟁하며, 라이트스프레이는 그보다도 26g 가볍습니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">사기 전 꼭 알아야 할 단점</p>
    <ul>
      <li><strong>어퍼에 패딩이 전혀 없습니다</strong> — 힐 칼라 지지가 없어 초기 아킬레스 자극이 올 수 있어, 온이 <strong>전용 보호 양말(On Elite Run Sock)을 동봉</strong>합니다. 맨발 착화는 비추천</li>
      <li><strong>착화 난이도</strong> — 끈 없는 빡빡한 핏이라 처음엔 신기 까다롭고, 뒤꿈치 좁은 러너는 힐 슬립이 생길 수 있습니다</li>
      <li><strong>족저근막염·아치 통증 이력자 주의</strong> — 내측 아치 지지가 강해 불편할 수 있습니다</li>
      <li><strong>어퍼 장기 내구성 미검증</strong> — 스프레이 TPU 소재의 장기 데이터가 아직 없습니다(아웃솔 내구성은 우수)</li>
      <li><strong>인솔(깔창) 분리 불가</strong> — 일체형 구조라 오소틱(맞춤 깔창) 사용자에겐 부적합</li>
    </ul>
  </div>
</div>

<h2>한국 러너 — 살까, 말까</h2>
<p>발볼은 토박스 72.8mm로 <strong>표준</strong>이라 보통 발에는 무난하지만, <strong>와이드 옵션이 없습니다</strong>(일체형 어퍼 특성상). 발볼이 매우 넓다면 망설여집니다. 그리고 가격 <strong>319,000원</strong>은 국내 슈퍼트레이너 중 최고가권 — "로봇 제조 어퍼"라는 기술 프리미엄이 분명히 얹혀 있습니다.</p>
<div class="callout info">
  <span class="callout-icon">🎯</span>
  <div class="callout-body">
    <p class="callout-title">이렇게 정리됩니다</p>
    <ul>
      <li><strong>라이트스프레이 하이퍼(₩319,000)</strong> — 최신 제조 기술과 극강 경량(205g)에 끌리고, 통기성·안정성을 최우선하며, 가격이 부담 없는 얼리어답터</li>
      <li><strong><a href="/shoes/on-cloudmonster-3-hyper">일반 하이퍼(₩259,000)</a></strong> — 같은 Helion HF 미드솔 성능을 6만 원 싸게. 패딩 있는 일반 어퍼라 착화·핏이 편한 게 오히려 장점. <strong>대부분의 러너에겐 이쪽이 합리적</strong></li>
      <li><strong>가성비 슈퍼트레이너</strong>를 원한다면 → <a href="/blog/li-ning-red-hare-9-ultra-truth-2026">라이닝 레드헤어 9 울트라</a>(10만 원대)처럼 절반 값 대안도 있습니다</li>
    </ul>
  </div>
</div>

<h2>자주 묻는 질문</h2>
<h3>Q. '클라우드몬스터 3 하이퍼'랑 '라이트스프레이'랑 같은 거 아닌가요?</h3>
<p>다릅니다. <strong>일반 하이퍼(₩259,000)</strong>는 천 어퍼, <strong>라이트스프레이 하이퍼(₩319,000)</strong>는 로봇 스프레이 어퍼입니다. 미드솔(Helion HF 이중 밀도)은 같지만 어퍼와 무게(264g vs 205g), 가격이 다릅니다.</p>

<h3>Q. 카본 레이싱화처럼 빠른가요?</h3>
<p>방향이 다릅니다. 카본 플레이트가 없는 <strong>슈퍼트레이너</strong>라, 톡 쏘는 추진력보다는 <strong>부드럽고 안정적인 장거리·템포 라이드</strong>가 강점입니다. 레이스 기록용이면 카본화가, 훈련+장거리 겸용이면 이쪽이 맞습니다.</p>

<h3>Q. 동봉 양말은 꼭 신어야 하나요?</h3>
<p>권장합니다. 어퍼에 패딩이 없어 <strong>뒤꿈치·아킬레스 보호</strong>를 위해 온이 전용 양말을 함께 줍니다. 특히 초기 적응 기간엔 신는 게 좋습니다.</p>

<h3>Q. 발볼 넓은데 괜찮나요?</h3>
<p>토박스는 표준(72.8mm)이라 보통 발은 무난하지만 <strong>와이드 옵션이 없습니다</strong>. 발볼이 매우 넓다면 신중하게, 가능하면 매장에서 신어보고 결정하세요.</p>

<h2>마무리</h2>
<p>라이트스프레이 클라우드몬스터 3 하이퍼는 "<strong>로봇이 만든 어퍼</strong>"라는 화제성과 205g 경량, 그리고 맥스쿠션치고 뛰어난 안정성으로 분명 매력적인 신발입니다. 다만 <strong>31만 9천원의 기술 프리미엄</strong>이 핵심 갈림길이죠. 그 무게와 신기술에 가치를 둔다면 만족스럽지만, "같은 성능을 더 싸게"라면 <a href="/shoes/on-cloudmonster-3-hyper">일반 하이퍼</a>가, "안정적인 데일리"라면 <a href="/shoes/on-cloudmonster-3">일반 클라우드몬스터 3</a>가 더 합리적입니다. 내 우선순위가 <strong>최신 기술·경량</strong>인지, <strong>가성비</strong>인지부터 정하면 답이 보입니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 On 공식 발표와 RunRepeat·Believe in the Run·Road Trail Run·Doctors of Running 리뷰를 종합한 내용입니다. RunRepeat 랩 수치는 동일 미드솔을 쓰는 비(非)라이트스프레이 하이퍼 기준이며, 라이트스프레이 버전은 어퍼·무게가 다릅니다. 가격은 On 한국 공식(2026-06 기준)이며 변동될 수 있습니다.</p>
`,
  },
  {
    id: 'seoul-7979-running-crew-free-2026',
    slug: 'seoul-7979-running-crew-free-2026',
    title: '서울시가 매주 목요일 밤 \'무료\'로 달린다 — 7979 서울 러닝크루 | 기록칩·코칭·간식까지 공짜, 레벨별 코스·신청법 정리',
    description: '러닝크루에서 대회용 기록칩을 쓴다고? 서울시 미래한강본부가 운영하는 \'7979 서울 러닝크루\'는 매주 목요일 밤 광화문·반포·여의도에서 기록칩 측정, 전문 코칭, 인생샷, 물·간식까지 전부 무료로 제공합니다. 런린이부터 프로까지, 기록칩이 뭔지·레벨별 코스·선착순 신청법을 한 번에 정리했습니다.',
    thumbnail: '/images/blog/seoul-7979-running-crew-free-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-08',
    category: 'news' as const,
    readingTime: 6,
    tags: ['7979 서울 러닝크루', '무료 러닝크루', '서울 러닝', '기록칩', '러닝크루', '런린이', '한강 러닝', '서울시', '목요일 러닝'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>서울시(미래한강본부)가 운영하는 무료 러닝크루 '7979'</strong>가 매주 목요일 밤 광화문·반포·여의도에서 열립니다 — 4~10월 시즌제</li>
    <li>대회에서나 쓰는 <strong>기록칩(타이밍 칩)으로 정확한 기록 측정</strong>은 물론 전문 코칭·인생샷·물·간식까지 <strong>전부 무료</strong>, 레벨별 코스로 런린이부터 프로까지 환영</li>
    <li>신청은 <strong>서울시 공공서비스예약 + 동마클럽</strong>에서 매주 월~수 <strong>선착순</strong>(회차당 약 60명), 현장 접수도 가능합니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">"러닝크루에서 기록칩을 쓴다고?"</p>
    <p>한 러닝 채널(@dongmaclub)이 소개해 화제가 된 <strong>'7979 서울 러닝크루'</strong>는 서울시 미래한강본부가 운영하는 <strong>공식 무료 프로그램</strong>입니다. 보통 마라톤 대회에서나 차는 <strong>기록칩</strong>을 평소 훈련에 제공한다는 점이 눈길을 끌죠. 퇴근 후 목요일 밤, 도심에서 함께 달리며 내 기록까지 정확히 측정받을 수 있는 이 프로그램을 정리했습니다.</p>
  </div>
</div>

<h2>7979 서울 러닝크루가 뭔데?</h2>
<p><strong>서울시 미래한강본부가 주관</strong>하는 시민 참여형 무료 러닝 프로그램입니다. 매년 <strong>4월부터 10월까지</strong> 시즌제로 운영되고, <strong>매주 목요일 저녁 7시~9시</strong>에 서울 도심 3개 권역에서 동시에 열립니다. 이제 막 시작한 런린이부터 대회를 앞둔 러너까지 누구나 참여할 수 있고, <strong>"바쁠 땐 쉬고, 여유로울 땐 어느 권역이든" 100% 자율 참여</strong>가 특징입니다.</p>
<p>무엇보다 <strong>이 모든 게 무료</strong>입니다.</p>
<ul>
  <li>✔️ <strong>기록칩 측정</strong> — 내 성장을 숫자로 확인하는 정확한 기록</li>
  <li>✔️ <strong>전문 러닝 커리큘럼</strong> — 페이스 그룹·코칭</li>
  <li>✔️ <strong>인생샷</strong> — 세션 다음 날 배달되는 고퀄 사진</li>
  <li>✔️ <strong>물·간식</strong> 매주 제공</li>
</ul>

<h2>핵심 — '기록칩'이 뭐길래?</h2>
<p>러닝을 막 시작했다면 생소할 수 있는데, <strong>기록칩(타이밍 칩)</strong>은 배번이나 신발에 부착하는 작은 <strong>RFID 칩</strong>입니다. 출발·반환·결승 지점의 <strong>매트를 통과할 때 자동으로 시간이 기록</strong>돼, 손목시계나 폰 앱보다 정확한 <strong>'공식 기록'</strong>을 남깁니다.</p>
<p>대회에서만 경험하던 이 측정을 <strong>매주 훈련에서 받는다</strong>는 게 7979의 강점입니다. 같은 코스를 주마다 달리며 <strong>내 페이스가 실제로 빨라지는지 데이터로 추적</strong>할 수 있죠. 막연한 "오늘 좀 빨랐나?"가 아니라 <strong>객관적 숫자로 성장을 확인</strong>하는 경험은 러닝 동기 부여에 큰 힘이 됩니다. 기록을 더 줄이고 싶다면 호흡 리듬부터 잡는 게 기본인데, 이건 <a href="/blog/running-breathing-guide-korea">러닝 호흡법 가이드</a>에서 정리했습니다.</p>

<h2>레벨별 코스 — 내 수준에 맞춰</h2>
<p>3개 권역이 난이도별로 나뉘어, 자기 수준에 맞는 곳을 고르면 됩니다.</p>
<table>
  <thead>
    <tr><th>레벨</th><th>권역</th><th>코스 성격</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>초급 (런린이)</strong></td><td>광화문</td><td>도심 평탄 코스, 입문자 친화</td></tr>
    <tr><td><strong>중급</strong></td><td>반포 한강공원</td><td>한강변 러닝</td></tr>
    <tr><td><strong>고급</strong></td><td>여의도공원</td><td>루프 코스, 페이스 훈련</td></tr>
  </tbody>
</table>
<p>이제 막 달리기를 시작했다면 광화문(초급)부터, 하프 이상을 준비한다면 여의도(고급)에서 페이스 훈련을 노려볼 수 있습니다. 입문 단계라면 신발부터 점검하는 게 먼저인데 → <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 고르는 법</a>.</p>

<h2>신청 방법</h2>
<ul>
  <li><strong>접수처</strong>: <strong>서울시 공공서비스예약</strong>(yeyak.seoul.go.kr) 또는 <strong>동마클럽</strong></li>
  <li><strong>접수 시기</strong>: 매주 <strong>월~수 선착순</strong> (세션은 목요일)</li>
  <li><strong>정원</strong>: 회차당 약 <strong>60명</strong> — 인기 권역은 빠르게 마감</li>
  <li><strong>현장 접수</strong>: 잔여 자리가 있으면 현장에서도 참여 가능</li>
</ul>
<div class="callout warning">
  <span class="callout-icon">📌</span>
  <div class="callout-body">
    <p class="callout-title">참여 전 체크</p>
    <ul>
      <li>저녁 7시 출발이라 <strong>퇴근 후 바로 가기 좋지만</strong>, 여름철엔 <strong>수분·체온 관리</strong>가 중요합니다 → <a href="/blog/hot-weather-summer-running-safety-guide-korea">폭염 러닝 안전 가이드</a></li>
      <li>정확한 운영 일정·권역은 시즌·주차별로 달라질 수 있으니 <strong>신청 전 서울시 공공서비스예약 공지를 확인</strong>하세요</li>
    </ul>
  </div>
</div>

<h2>이런 사람에게 딱</h2>
<ul>
  <li><strong>혼자 달리기 지루하거나 작심삼일</strong>인 런린이 — '느슨한 연대'로 꾸준함 만들기</li>
  <li><strong>내 기록을 정확히 알고 싶은</strong> 러너 — 매주 기록칩 측정으로 성장 추적</li>
  <li><strong>비용 부담 없이</strong> 전문 코칭을 받아보고 싶은 사람</li>
  <li>대회를 앞두고 <strong>같은 코스 반복 훈련</strong>이 필요한 러너</li>
</ul>

<h2>마무리</h2>
<p>러닝은 장비도, 크루 회비도 부담이 될 수 있는데 <strong>7979는 서울시가 그 문턱을 낮춰주는 프로그램</strong>입니다. 기록칩으로 내 성장을 눈으로 확인하고, 같은 목표를 가진 사람들과 도심을 달리는 목요일 밤 — 러닝을 막 시작했거나 다시 불을 붙이고 싶다면 한 번쯤 나가볼 만합니다. 서울의 다른 러닝 코스가 궁금하다면 <a href="/blog/seoul-running-course-shower-guide-2026">남산 무료 샤워장부터 10대 핵심 코스</a>를, 대회로 목표를 잡고 싶다면 <a href="/marathon">마라톤 캘린더</a>를 함께 보세요. 🍀</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 서울시 공공서비스예약·미래한강본부 안내와 언론 보도, @dongmaclub(2026-06-06)를 종합한 정보입니다. 운영 일정·권역·정원은 시즌과 주차에 따라 변동될 수 있으니 신청 전 서울시 공식 채널을 확인하세요.</p>
`,
  },
  {
    id: 'mind-vs-im-bank-marathon-2026-seoul',
    slug: 'mind-vs-im-bank-marathon-2026-seoul',
    title: '내일 서울, 같은 시각 두 하프 — 마인드 마라톤 vs iM뱅크 코리아오픈마라톤 | 서울광장 기부런 vs 여의도 한강 코스 한눈 비교',
    description: '6월 7일(일) 오전 7시 30분, 서울 한복판에서 두 마라톤이 동시에 출발합니다. 서울광장에서 출발하는 1만 명 규모의 기부런 "마인드 마라톤", 그리고 여의도공원 한강변을 달리는 "iM뱅크 코리아오픈마라톤". 두 대회의 출발지·코스·성격·완주 기념품을 한눈에 비교하고, 같은 날 겹치는 교통통제와 관전·당일 체크리스트까지 정리했습니다.',
    thumbnail: '/images/blog/mind-vs-im-bank-marathon-2026-seoul.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-06',
    category: 'news' as const,
    readingTime: 6,
    tags: ['마인드 마라톤', 'iM뱅크 코리아오픈마라톤', '서울 마라톤', '하프 마라톤', '여의도 마라톤', '서울광장', '6월 마라톤', '러닝 대회', '교통통제'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>6/7(일) 오전 7:30, 서울에서 두 하프가 동시에 출발</strong>합니다 — 서울광장의 <strong>마인드 마라톤</strong> vs 여의도공원의 <strong>iM뱅크 코리아오픈마라톤</strong></li>
    <li><strong>성격이 정반대</strong>입니다. 마인드는 참가비 전액을 기부하는 <strong>1만 명 규모 도심 기부런</strong>, iM뱅크는 한강변을 달리는 <strong>8천 명 규모 리버사이드 대회</strong>(프로스펙스 하네스 완주 기념품)</li>
    <li>둘 다 접수는 마감됐고, <strong>같은 날 서울 도심·여의도 교통통제가 겹칩니다</strong> — 참가자도 관전객도 <strong>대중교통(지하철) 필수</strong>, 통제 구간은 당일 아침 TOPIS에서 확인하세요</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">"이번 주 일요일, 어디로 가시나요?"</p>
    <p>한 러닝 정보 채널(@runninglife_korea)이 던진 질문이 화제였습니다. <strong>같은 날, 같은 시각(7:30), 서울 도심에서 두 하프 대회</strong>가 동시에 열리거든요. 서울광장에서 출발하는 <strong>마인드 마라톤</strong>과 여의도공원에서 출발하는 <strong>iM뱅크 코리아오픈마라톤</strong>. 둘 다 HALF·10K·5K를 운영하지만, 성격은 꽤 다릅니다. 내일 달리는 분도, 응원하러 가는 분도 참고할 수 있게 한눈에 정리했습니다.</p>
  </div>
</div>

<h2>한눈 비교</h2>
<table>
  <thead>
    <tr><th></th><th>마인드 마라톤</th><th>iM뱅크 코리아오픈마라톤</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>출발</strong></td><td>서울광장 (시청)</td><td>여의도공원 문화의 마당</td></tr>
    <tr><td><strong>시각</strong></td><td colspan="2" style="text-align:center">6/7(일) 오전 7:30 동시 출발</td></tr>
    <tr><td><strong>종목</strong></td><td>HALF / 10K / 5K</td><td>HALF / 10K / 5K</td></tr>
    <tr><td><strong>규모</strong></td><td>약 1만 명</td><td>약 8천 명</td></tr>
    <tr><td><strong>코스</strong></td><td>도심 평탄·직선 위주</td><td>한강변 리버사이드</td></tr>
    <tr><td><strong>성격</strong></td><td>참가비 전액 기부 (마음건강)</td><td>iM뱅크 앱 추첨 (은행 대회)</td></tr>
    <tr><td><strong>완주 기념품</strong></td><td>메달 + 음료·비타민</td><td>메달 + 프로스펙스 하네스(각인)</td></tr>
  </tbody>
</table>

<h2>① 마인드 마라톤 — 서울광장 한복판의 기부런</h2>
<p>가장 큰 특징은 <strong>참가비 전액이 아동·청소년 마음건강 지원 NGO에 기부</strong>된다는 점입니다. 한국수력원자력과 매체 '더버터'가 함께 열고 보건복지부·서울시가 후원하는, <strong>"달리기로 기부한다"</strong>는 취지의 대회죠. 규모도 <strong>1만 명</strong>으로 두 대회 중 더 큽니다.</p>
<ul>
  <li><strong>출발</strong>: 서울광장(시청) — 세종대로 일대를 도는 <strong>평탄한 직선 위주 코스</strong>로 안내됩니다</li>
  <li><strong>기록</strong>: 넷타임(칩 계측) 방식 / 제한시간 하프 3시간·10K 1시간 30분·5K 1시간</li>
  <li><strong>완주 기념품</strong>: 메달 + 비타500 이온킥 등 음료·비타민</li>
  <li><strong>5K는 패밀리런</strong>(최대 4인 팀)으로 가족 단위 참가에 맞춰져 있습니다</li>
</ul>
<p>도심 광장에서 출발해 접근성이 좋고, "기록보다 의미"를 챙기고 싶은 러너에게 어울립니다.</p>

<h2>② iM뱅크 코리아오픈마라톤 — 여의도 한강 리버사이드</h2>
<p>이쪽은 <strong>iM뱅크(옛 대구은행)가 시중은행 전환 2주년을 기념해 처음 단독 주최</strong>하는 대회입니다. 대회 운영은 런코리아가 맡았고, 지방은행에서 시중은행으로 발돋움한 <strong>수도권 인지도 확대</strong>의 성격이 깔려 있죠. "코리아오픈마라톤"이라는 이름은 이번 iM뱅크 대회의 브랜드로, 오래된 동명 대회와는 무관합니다.</p>
<ul>
  <li><strong>출발</strong>: 여의도공원 문화의 마당 — <strong>여의도공원~한강변~서강대교</strong>를 경유하는 리버사이드 코스</li>
  <li><strong>접수</strong>: iM뱅크 앱을 통한 <strong>추첨제</strong>(만 19세 이상) — 은행 고객 중심 운영이라 진입장벽이 조금 있습니다</li>
  <li><strong>완주 기념품</strong>: 메달 + <strong>프로스펙스 경량 러닝 하네스</strong>(약 8.9만 원 상당, 무료 각인) — 실용 기념품으로 화제</li>
</ul>
<p>한강 경관을 즐기며 달리고 싶은 러너, 그리고 고급 완주 기념품에 끌리는 러너에게 매력적입니다.</p>

<h2>그래서 뭐가 다른가 — 한 줄 정리</h2>
<p><strong>마인드 마라톤</strong>은 "<strong>도심 광장에서 의미를 달리는</strong>" 대규모 기부런, <strong>iM뱅크 코리아오픈마라톤</strong>은 "<strong>한강을 끼고 달리는</strong>" 은행 주최 리버사이드 대회입니다. 접근성·규모·기부 취지를 본다면 마인드, 경관·완주 기념품·러닝 환경을 본다면 iM뱅크 쪽이죠. 참고로 <strong>같은 6/7에는 상암에서 '제23회 새벽강변 국제마라톤'도 열려</strong>, 서울에만 하프 대회가 셋입니다. 전체 일정은 <a href="/marathon">마라톤 캘린더</a>에서 함께 확인할 수 있습니다.</p>

<div class="callout warning">
  <span class="callout-icon">🚧</span>
  <div class="callout-body">
    <p class="callout-title">내일 아침 필수 — 교통통제 & 당일 체크리스트</p>
    <p>두 대회가 같은 시각 출발하면서 <strong>서울 도심(세종대로·시청)과 여의도 일대 교통통제가 동시에</strong> 걸립니다. 구체적인 통제 구간·시간은 대회 측이 텍스트로 공개하지 않았으니, <strong>당일 아침 직접 확인</strong>이 안전합니다.</p>
    <ul>
      <li><strong>대중교통 필수</strong> — 마인드: 1·2호선 시청역 / iM뱅크: 5호선 여의도역·9호선 국회의사당역. 대회장 인근 주차는 사실상 불가</li>
      <li><strong>교통통제 확인</strong>: 서울시 <a href="https://topis.seoul.go.kr" target="_blank" rel="noopener">TOPIS</a> 또는 서울경찰청 <a href="https://www.spatic.go.kr" target="_blank" rel="noopener">교통정보센터</a>에서 전날 밤~당일 아침 최신 현황을</li>
      <li><strong>참가자 막판 체크</strong>: 기록칩(배번) 부착 확인, 짐 보관소 위치, 완주 기념품 수령 창구 — 출발 전 미리 동선 파악</li>
      <li>하프 선두는 출발 70~80분 뒤 <strong>오전 8:40~9:00경 결승</strong> — 응원 타이밍 참고</li>
    </ul>
  </div>
</div>

<h2>6월 러닝, 더위부터 챙기세요</h2>
<p>6월 초라도 오전 7시 30분 출발이면 후반부엔 기온이 빠르게 오릅니다. 하프를 뛴다면 <strong>수분·페이스 관리</strong>가 기록보다 중요합니다. 여름 러닝 준비는 <a href="/blog/hot-weather-summer-running-safety-guide-korea">폭염 러닝 안전 가이드</a>를, 호흡이 가빠 옆구리가 결릴 땐 <a href="/blog/running-breathing-guide-korea">러닝 호흡법</a>을 참고하세요. 통기성 좋은 신발이 필요하다면 <a href="/blog/summer-breathable-running-shoes-2026">여름 통기성 러닝화 추천</a>도 있습니다.</p>

<h2>마무리</h2>
<p>같은 날, 같은 시각, 서울 한복판의 두 하프. <strong>마인드 마라톤</strong>이든 <strong>iM뱅크 코리아오픈마라톤</strong>이든, 내일 출발선에 서는 모든 러너의 안전한 완주를 응원합니다. 접수가 끝난 대회지만, "내년엔 어디로 갈까"를 고민한다면 두 대회의 성격 차이가 좋은 기준이 될 거예요. 다른 하프 대회 일정은 <a href="/blog/2026-garmin-run-korea-half-marathon">가민런 코리아</a>와 <a href="/marathon">마라톤 캘린더</a>에서 이어서 확인하세요. 🏅</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 각 대회 공식 홈페이지(mindmarathon.kr, imrun.kr)와 보도자료, @runninglife_korea(2026-06-04)를 종합한 정보입니다. 코스 상세 경로와 교통통제 구간은 대회 측 미공개분이 있어 실제와 다를 수 있으니, 참가 전 공식 채널과 TOPIS를 반드시 확인하세요.</p>
`,
  },
  {
    id: 'side-stitch-running-causes-relief-korea',
    slug: 'side-stitch-running-causes-relief-korea',
    title: '러닝 중 옆구리가 찌릿 — 왜 아프고, 어떻게 멈출까 | 사이드 스티치 원인·즉시 대처 4단계·예방법',
    description: '달리다 갑자기 옆구리가 찌릿했던 경험, 초보 러너라면 한 번쯤 겪습니다. 대부분은 부상이 아니라 호흡 리듬·횡격막 긴장에서 오는 사이드 스티치(ETAP, 운동유발 일과성 복통)입니다. 왜 생기는지, 통증이 왔을 때 즉시 멈추는 4단계 대처법, 다음 러닝부터 예방하는 체크리스트, 그리고 "이건 사이드 스티치가 아닐 수도 있다"는 위험 신호까지 정리했습니다.',
    thumbnail: '/images/blog/side-stitch-running-causes-relief-korea.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-06',
    category: 'tips' as const,
    readingTime: 7,
    tags: ['옆구리 통증', '사이드 스티치', '러닝 통증', '러닝 호흡법', '초보 러너', '복식호흡', 'ETAP', '러닝 팁', '횡격막', '러닝 부상'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>달리다 생기는 옆구리 통증은 대부분 부상이 아니라 <strong>사이드 스티치(ETAP·운동유발 일과성 복통)</strong> — 호흡 리듬, 횡격막 긴장, 식후 러닝이 주범입니다</li>
    <li>통증이 오면 <strong>속도를 줄이고 → 깊게 내쉬고 → 통증 부위를 누르며 상체를 숙이고 → 호흡 리듬을 맞추는</strong> 4단계로 보통 1~2분 안에 가라앉습니다</li>
    <li>예방의 핵심은 <strong>식사 2~3시간 전 마치기 + 워밍업 + 복식호흡 리듬 + 점진적 페이스</strong>. 초보일수록 자주 겪지만 달리기에 적응하면 빈도가 확 줄어듭니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">먼저, 겁먹지 마세요 — 대부분 부상이 아닙니다</p>
    <p>"달리다 옆구리가 찌릿"한 통증의 정식 명칭은 <strong>ETAP(Exercise-Related Transient Abdominal Pain), 운동유발 일과성 복통</strong>입니다. 흔히 <strong>사이드 스티치(side stitch)</strong>라 부르죠. 이름에 '일과성(transient)'이 들어간 데서 알 수 있듯, <strong>잠깐 왔다 사라지는 증상</strong>이지 근육 파열이나 장기 손상이 아닙니다. 러너의 약 70%가 한 번쯤 겪고, 특히 <strong>달리기를 막 시작한 초보에게 더 자주</strong> 나타납니다.</p>
  </div>
</div>

<h2>왜 옆구리가 찌릿할까 — 유력한 3가지 원인</h2>
<p>의학적으로 단 하나의 원인이 확정된 건 아니지만, 연구에서 가장 유력하게 꼽히는 가설은 셋입니다.</p>
<ol>
  <li><strong>횡격막 긴장·피로</strong> — 호흡을 담당하는 횡격막이 달리기 중 과하게 쓰이며 일시적으로 산소가 부족해지고 경련하듯 뭉칩니다. 얕고 빠른 호흡일수록 잘 생깁니다.</li>
  <li><strong>내장 인대가 당겨지는 자극</strong> — 위·간 같은 장기는 인대로 횡격막에 매달려 있습니다. 달릴 때 상하 진동이 이 인대를 잡아당겨 자극하는데, <strong>대부분 통증이 오른쪽 옆구리</strong>에 오는 이유(간이 오른쪽에 있음)로 설명됩니다.</li>
  <li><strong>위가 차 있을 때</strong> — 식후 곧바로 달리거나 농도 높은 음료(고당분 이온음료 등)를 마신 직후엔 위가 무거워져 인대 자극과 통증이 커집니다.</li>
</ol>

<h2>왜 초보 러너에게 더 자주 올까</h2>
<p>인스타 러닝 정보 카드에서도 "처음 달리기 시작한 러너라면 한 번쯤 겪는다"고 짚는데, 이유가 분명합니다.</p>
<ul>
  <li><strong>호흡이 아직 얕고 불규칙</strong>합니다 — 가슴으로만 빠르게 숨 쉬면 횡격막이 더 쉽게 지칩니다</li>
  <li><strong>코어(몸통) 근력이 약해</strong> 진동을 덜 잡아주고, 그만큼 내장 인대에 충격이 더 갑니다</li>
  <li><strong>페이스 조절이 서툴러</strong> 초반에 무리하게 빨라지기 쉽습니다</li>
</ul>
<p>바꿔 말하면 <strong>달리기에 몸이 적응하고 호흡·코어가 자리 잡으면 빈도가 급격히 줄어듭니다</strong>. 옆구리 통증은 대개 "초보 딱지"와 함께 사라집니다.</p>

<h2>통증이 왔을 때 — 즉시 대처 4단계</h2>
<p>무작정 참고 뛰는 게 가장 안 좋습니다. 다음 순서대로 하면 보통 <strong>1~2분 안에</strong> 가라앉습니다.</p>
<div class="callout info">
  <span class="callout-icon">🆘</span>
  <div class="callout-body">
    <p class="callout-title">사이드 스티치 응급 대처 4단계</p>
    <ol>
      <li><strong>속도를 확 낮춥니다</strong> — 멈추지 않아도 됩니다. 걷기 직전 수준까지 페이스를 떨어뜨리세요.</li>
      <li><strong>깊게, 길게 내쉽니다</strong> — 들이쉬기보다 <strong>내쉬기에 집중</strong>. 입술을 오므려 "후—" 하고 길게 뱉으면 횡격막 긴장이 풀립니다.</li>
      <li><strong>통증 부위를 손으로 누르며 상체를 살짝 숙입니다</strong> — 아픈 곳을 지그시 누르고 몸을 앞으로 굽히면 인대 장력이 줄어듭니다.</li>
      <li><strong>호흡과 발 박자를 맞춥니다</strong> — <strong>통증 반대쪽 발</strong>이 땅에 닿는 순간에 숨을 내쉬세요. 오른쪽이 아프면 왼발 착지에 맞춰 "후".</li>
    </ol>
  </div>
</div>
<p>그래도 안 가라앉으면 잠깐 걸으면서 <strong>아픈 쪽 팔을 머리 위로 올려 옆구리를 늘려주는 스트레칭</strong>을 더하세요. 깊은 호흡과의 연결이 궁금하다면 <a href="/blog/running-breathing-guide-korea">러닝 호흡법 가이드</a>를 함께 보면 좋습니다.</p>

<h2>다음 러닝부터 — 예방 체크리스트</h2>
<ul>
  <li><strong>식사는 러닝 2~3시간 전에 마치기</strong> — 위를 비우는 게 가장 효과 큰 예방입니다. 공복이 부담되면 바나나 반 개 정도만</li>
  <li><strong>직전 고농도 음료 피하기</strong> — 진한 이온음료·주스보다 물 또는 묽은 음료를</li>
  <li><strong>워밍업으로 천천히 시작</strong> — 처음 5분은 대화 가능한 페이스로. 갑자기 빨라지지 않기</li>
  <li><strong>복식호흡 리듬 만들기</strong> — 2~3걸음에 들이쉬고 2걸음에 내쉬는 식으로 규칙적으로. 배가 부풀도록 깊게</li>
  <li><strong>코어 강화</strong> — 플랭크 같은 몸통 운동이 진동을 잡아 장기적으로 빈도를 줄입니다</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">이건 사이드 스티치가 아닐 수도 — 병원 신호</p>
    <p>사이드 스티치는 <strong>달리기를 멈추면 사라지는</strong> 게 특징입니다. 아래라면 다른 문제일 수 있으니 무리하지 말고 진료를 받으세요.</p>
    <ul>
      <li>운동을 멈춰도 통증이 <strong>계속되거나 점점 심해질 때</strong></li>
      <li>오른쪽 윗배(갈비뼈 아래)가 <strong>쥐어짜듯 심하게</strong> 아프거나 발열·구토를 동반할 때(담낭·간 문제 가능)</li>
      <li>가슴 압박감, 식은땀, 어지럼을 동반할 때 — <strong>즉시 중단하고 응급 대응</strong></li>
      <li>매번 같은 자리에 <strong>찌르는 통증이 반복</strong>될 때</li>
    </ul>
  </div>
</div>

<h2>자주 묻는 질문</h2>
<h3>Q. 통증이 오면 멈춰야 하나요, 참고 뛰어야 하나요?</h3>
<p>멈출 필요는 없지만 <strong>참고 그대로 뛰는 건 금물</strong>입니다. 속도를 낮추고 위의 4단계를 적용하면 달리면서도 가라앉는 경우가 많습니다.</p>

<h3>Q. 왜 항상 오른쪽만 아플까요?</h3>
<p>간이 오른쪽 윗배에 있어 그쪽 인대가 더 자극받기 때문이라는 설명이 유력합니다. 왼쪽에 오는 경우도 있으니 위치만으로 걱정할 필요는 없습니다.</p>

<h3>Q. 신발이나 자세도 영향이 있나요?</h3>
<p>상하 진동이 크면 인대 자극도 커지므로, <strong>쿠션이 받쳐주는 신발과 안정적인 상체 자세</strong>가 간접적으로 도움이 됩니다. 입문 단계라면 <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 고르는 법</a>부터 점검해 보세요. 무릎 등 다른 통증이 함께 있다면 <a href="/blog/knee-pain-running-shoes">러닝 무릎 통증 가이드</a>도 참고하세요.</p>

<h3>Q. 거리를 늘리면 더 자주 생기나요?</h3>
<p>오히려 반대인 경우가 많습니다. <a href="/blog/lsd-training-beginner-guide-korea">LSD(천천히 길게) 훈련</a>처럼 편한 페이스로 꾸준히 달리면 호흡·코어가 적응해 통증 빈도가 줄어듭니다. 문제는 거리가 아니라 <strong>갑작스러운 페이스</strong>입니다.</p>

<h2>마무리</h2>
<p>러닝 중 옆구리 통증은 <strong>"내 몸이 아직 달리기에 적응 중"</strong>이라는 신호에 가깝습니다. 부상이 아니니 겁먹지 말고, 통증이 오면 <strong>속도↓ · 깊은 날숨 · 부위 압박 · 호흡 박자</strong> 4단계로 다스리세요. 그리고 식사 타이밍과 워밍업, 복식호흡만 챙겨도 다음 러닝부터 확연히 줄어듭니다. 달리는 횟수가 쌓일수록 옆구리는 점점 조용해집니다. 🏃</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 일반적인 러닝 건강 정보로, 개인의 의학적 진단을 대체하지 않습니다. 운동과 무관하게 지속되거나 심한 복통은 반드시 의료진의 진료를 받으세요. (참고 글감: @runninglife_korea RIFEWIKI, 2026-06-05)</p>
`,
  },
  {
    id: 'li-ning-red-hare-9-ultra-truth-2026',
    slug: 'li-ning-red-hare-9-ultra-truth-2026',
    title: '화제의 "중국 카본화" 정체 — 라이닝 레드헤어 9 울트라는 카본이 아닙니다 | 10만 원대 가성비 슈퍼트레이너의 진실',
    description: '러닝 커뮤니티가 "이 가격에 카본?"으로 들썩이는 라이닝(Li-Ning) 레드헤어 9 울트라. 하지만 해외 실측 리뷰를 종합하면 이 신발은 카본 레이싱화가 아니라 유리섬유 플레이트를 단 맥스쿠션 슈퍼트레이너입니다. 슈퍼블라스트·메가블라스트 절반 가격이라는 가성비의 실체, "적토끼"가 아닌 "적토마"인 이유, 발볼 좁은 한국 러너가 사기 전 꼭 알아야 할 3가지를 데이터로 정리했습니다.',
    thumbnail: '/images/blog/li-ning-red-hare-9-ultra-truth-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-06',
    category: 'review' as const,
    readingTime: 9,
    tags: ['라이닝', '레드헤어 9 울트라', '적토마', 'Li-Ning', '중국 러닝화', '슈퍼트레이너', '가성비 러닝화', 'PEBA', '카본화', '슈퍼블라스트'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>커뮤니티가 "이 가격에 카본?"으로 띄우지만, <strong>레드헤어 9 울트라는 카본 플레이트가 아니라 유리섬유(글라스파이버) 플레이트</strong>를 단 <strong>맥스쿠션 슈퍼트레이너</strong>입니다 — 레이싱화가 아닙니다</li>
    <li>진짜 매력은 <strong>PEBA 3중 미드솔 + 46mm급 스택을 10만 원대</strong>에 담은 가성비 — 아식스 메가블라스트(30만)·슈퍼블라스트(26만)의 <strong>절반 가격</strong>입니다</li>
    <li>단, <strong>발볼이 좁고(와이드 옵션 없음)</strong> 한국 정식 출시·랩 검증이 아직 없어, <strong>발볼 넓은 러너와 안정화가 필요한 러너에겐 비추천</strong>입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🔥</span>
  <div class="callout-body">
    <p class="callout-title">왜 이 신발이 화제일까</p>
    <p>요즘 러닝 커뮤니티에서 가장 많이 언급되는 신발 중 하나가 중국 브랜드 <strong>라이닝(Li-Ning)의 레드헤어 9 울트라</strong>입니다. "PEBA 폼에 글라스파이버 플레이트, 46mm 스택을 갖추고도 <strong>10만 원대</strong>"라는 스펙표가 돌면서 "이 가격에 카본?", "가성비 슈퍼트레이너"라는 반응이 쏟아지고 있죠. 그런데 정작 <strong>이 신발의 정체가 잘못 알려진 부분</strong>이 있습니다. 해외 실측 리뷰(Road Trail Run·WeeViews 등)와 스펙을 교차 검증해 정리했습니다.</p>
  </div>
</div>

<h2>먼저, 이름부터 — '적토끼'가 아니라 '적토마'</h2>
<p>국내에선 흔히 <strong>"적토끼 9 울트라"</strong>로 불립니다. 하지만 "Red Hare(赤兔)"는 <strong>적토마</strong> — 삼국지 여포·관우가 탔던 그 명마를 뜻합니다. 라이닝은 이 적토마 라인을 데일리·트레이닝용으로, 별도의 <strong>비전(飞电, Feidian)</strong> 라인을 풀카본 레이싱 전용으로 운영합니다. 즉 <strong>이름 단계에서 이미 "이건 레이싱 카본화가 아니다"</strong>라는 신호가 들어 있는 셈입니다.</p>

<h2>카본화? 아닙니다 — 플레이트의 정체</h2>
<p>가장 큰 오해가 여기 있습니다. 레드헤어 9 울트라에 들어간 건 <strong>탄소섬유 풀카본 플레이트가 아니라 'Wing Fiber'라 부르는 유리섬유(글라스파이버) 미드풋 플레이트</strong>입니다. 역할도 다릅니다.</p>
<ul>
  <li><strong>카본 레이싱화의 플레이트</strong>(<a href="/shoes/nike-vaporfly-4">베이퍼플라이</a>·<a href="/shoes/asics-metaspeed-ray">메타스피드</a> 등): 발 전체를 가로지르며 <strong>추진력(롤링)</strong>을 만드는 게 목적</li>
  <li><strong>레드헤어 9 울트라의 유리섬유 플레이트</strong>: 미드풋에만 들어가 <strong>비틀림(토션)을 잡아주는 안정 보조</strong>가 목적 — 해외 리뷰에선 "달릴 때 플레이트 반발이 거의 느껴지지 않는다"고 평가합니다</li>
</ul>
<p>일부 판매 페이지가 "CARBON-FIBER PLATE"로 표기하기도 하지만, 복수의 실측 해부 리뷰는 유리섬유로 일치합니다. <strong>카본화의 톡톡 튀는 추진감을 기대하고 사면 실망</strong>할 수 있다는 뜻입니다. 광고 문구와 실제 데이터가 어떻게 다른지는 <a href="/blog/running-shoe-data-not-marketing-guide-2026">러닝화, 광고에 속지 말고 데이터로 고르세요</a>에서 따로 정리해 두었습니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">"95% 에너지 리턴"도 제조사 주장입니다</p>
    <p>라이닝은 미드솔의 Super Boom 캡슐이 "95% 에너지 리턴"을 낸다고 홍보합니다. 하지만 이는 <strong>제조사 자체 측정치</strong>로, RunRepeat 같은 독립 랩이 같은 기준으로 잰 수치가 아직 없습니다. 신상 + 비주류 브랜드라 <strong>객관 랩 데이터가 부재</strong>한 상태이니, 마케팅 수치는 참고만 하세요.</p>
  </div>
</div>

<h2>그럼 정체는? 10만 원대 맥스쿠션 슈퍼트레이너</h2>
<p>오해를 걷어내면 정체가 분명해집니다. 레드헤어 9 울트라는 <strong>PEBA 기반 3중 미드솔</strong>에 <strong>힐 47mm·전족 42mm 스택(Road Trail Run 실측, 드롭 5mm)</strong>을 얹은 <strong>맥스쿠션 슈퍼트레이너</strong>입니다. 무게도 246g(US 9.5)으로 두꺼운 스택 대비 무겁지 않죠. 데일리 조깅부터 LSD·마라톤 훈련까지 푹신하게 받쳐주는 성격으로, 경쟁 상대는 카본 레이싱화가 아니라 <strong>아식스 슈퍼블라스트·메가블라스트, 나이키 보메로 계열</strong>입니다(스펙 전체는 <a href="/shoes/li-ning-red-hare-9-ultra">레드헤어 9 울트라 상세 페이지</a>에 정리해 두었습니다). 그리고 바로 거기서 가성비가 빛납니다.</p>

<table>
  <thead>
    <tr><th>모델</th><th>포지션</th><th>플레이트</th><th>한국 가격(정가/병행)</th></tr>
  </thead>
  <tbody>
    <tr><td><strong><a href="/shoes/li-ning-red-hare-9-ultra">라이닝 레드헤어 9 울트라</a></strong></td><td>맥스쿠션 슈퍼트레이너</td><td>유리섬유(토션)</td><td><strong>13~17만 원대</strong> (병행·구매대행)</td></tr>
    <tr><td><a href="/shoes/asics-superblast-3">아식스 슈퍼블라스트 3</a></td><td>슈퍼트레이너/레이싱</td><td>없음(트윈 폼)</td><td>259,000원</td></tr>
    <tr><td><a href="/shoes/asics-megablast">아식스 메가블라스트</a></td><td>맥스쿠션 트레이너</td><td>없음</td><td>299,000원</td></tr>
    <tr><td><a href="/shoes/nike-vomero-premium">나이키 보메로 프리미엄</a></td><td>맥스쿠션 데일리</td><td>없음</td><td>289,000원</td></tr>
  </tbody>
</table>
<p>같은 "푹신한 PEBA 맥스쿠션" 카테고리에서 <strong>국내 메이저 브랜드가 26~30만 원</strong>을 받는 자리에, 라이닝이 <strong>그 절반 값</strong>으로 비슷한 스펙표를 들고 들어온 게 화제의 본질입니다. 알리익스프레스 직구로는 10~13만 원까지도 내려갑니다.</p>

<h2>한국 러너가 사기 전 꼭 알아야 할 3가지</h2>
<p>가성비는 분명하지만, 한국 러너 관점에서 짚어야 할 단점도 또렷합니다.</p>
<ol>
  <li><strong>발볼이 좁습니다.</strong> 해외 리뷰들이 입을 모아 "동급 중국 슈퍼트레이너 중 가장 좁은 편"이라 평가합니다. <strong>와이드 옵션도 없어</strong>, 발볼 넓은 한국 러너에겐 가장 큰 걸림돌입니다. (내 발볼이 어느 정도인지 모른다면 <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국인을 위한 러닝화 가이드</a>를 먼저 보세요.)</li>
  <li><strong>측방 안정성이 약합니다.</strong> 높은 스택 + 부드러운 폼 조합이라 발이 안쪽/바깥쪽으로 흔들리기 쉽습니다. <strong>오버프로네이션이 있거나 안정화가 필요한 러너</strong>에겐 맞지 않습니다.</li>
  <li><strong>국내 AS·정식 유통이 없습니다.</strong> KREAM·POIZON·알리익스프레스·타오바오 등 <strong>병행수입·구매대행</strong>에만 의존하고, 사이즈 교환이나 하자 대응이 까다롭습니다. 발볼이 좁은 만큼 <strong>사이즈는 평소보다 여유 있게</strong> 보는 후기가 많습니다.</li>
</ol>

<h2>그래서 살까 말까 — 러너 타입별 정리</h2>
<div class="callout info">
  <span class="callout-icon">✅</span>
  <div class="callout-body">
    <p class="callout-title">사도 좋은 사람</p>
    <ul>
      <li>발볼이 <strong>보통~좁은 편</strong>이고, 푹신한 쿠션의 <strong>LSD·데일리 훈련화</strong>를 저렴하게 원하는 러너</li>
      <li>이미 슈퍼블라스트·메가블라스트 같은 슈퍼트레이너를 써봤고 <strong>비슷한 감각을 절반 값</strong>에 추가하고 싶은 러너</li>
      <li>중국 러닝 브랜드의 성장세를 직접 체험해보고 싶은 얼리어답터</li>
    </ul>
  </div>
</div>
<div class="callout warning">
  <span class="callout-icon">🚫</span>
  <div class="callout-body">
    <p class="callout-title">사면 후회할 수 있는 사람</p>
    <ul>
      <li><strong>발볼 넓은 한국 러너</strong> — 와이드가 없습니다. <a href="/shoes/asics-megablast">메가블라스트</a>나 <a href="/shoes/nike-vomero-premium">보메로 프리미엄</a>처럼 정식 출시 + 폭 여유 있는 대안이 안전합니다</li>
      <li><strong>카본화의 추진력</strong>을 기대하는 러너 — 이건 레이싱화가 아닙니다. 카본을 원하면 <a href="/best/racing">카본 레이싱화</a> 쪽을 보세요</li>
      <li><strong>안정화가 필요한 오버프로네이터</strong>, 그리고 AS·교환 리스크를 감수하기 싫은 러너</li>
    </ul>
  </div>
</div>

<h2>자주 묻는 질문</h2>
<h3>Q. 진짜 카본 플레이트가 들어 있나요?</h3>
<p>아닙니다. 미드풋에 들어간 건 <strong>유리섬유(글라스파이버) 토션 플레이트</strong>로, 추진보다 비틀림을 잡는 안정 보조용입니다. 카본 레이싱화의 롤링 추진감과는 다릅니다.</p>

<h3>Q. 마라톤 대회용으로 신어도 되나요?</h3>
<p>레이스 기록용보다는 <strong>훈련·LSD용</strong>에 적합합니다. 대회에서 기록을 노린다면 <a href="/best/racing">카본 레이싱화</a>가 맞고, 풀코스를 "완주 목표로 편하게"라면 이 신발의 푹신함도 선택지가 됩니다.</p>

<h3>Q. 발볼 넓은데 사이즈를 키우면 되나요?</h3>
<p>한 치수 키우면 길이는 늘지만 <strong>발볼(폭)은 비례해서 넓어지지 않아</strong> 근본 해결이 안 됩니다. 발볼이 넓다면 처음부터 와이드 옵션이 있는 모델을 권합니다.</p>

<h3>Q. 10만 원대인데 품질은 믿을 만한가요?</h3>
<p>아웃솔 내구성과 미드솔 반발은 해외 후기에서 대체로 긍정적입니다. 다만 <strong>독립 랩 검증이 아직 없고</strong> 폼 통합도(반발이 부드러운 폼에 흡수돼 어색하다는 지적)에 대한 호불호가 있어, "메이저 브랜드만큼 검증된 신발"로 보긴 이릅니다.</p>

<h2>마무리</h2>
<p>레드헤어 9 울트라의 진짜 이야기는 "10만 원대 카본화"가 아니라 <strong>"10만 원대 PEBA 맥스쿠션 슈퍼트레이너"</strong>입니다. 카본화로 오해하고 사면 실망하지만, <strong>슈퍼블라스트·메가블라스트의 절반 값짜리 푹신한 훈련화</strong>로 보면 충분히 매력적입니다. 핵심은 둘뿐입니다 — <strong>내 발볼이 좁은 편인가</strong>, 그리고 <strong>병행수입·AS 리스크를 감수할 수 있는가</strong>. 두 가지에 "예"라면 올해 가장 재미있는 가성비 선택이 될 수 있습니다.</p>
<p>정식 출시된 슈퍼트레이너로 안전하게 비교하고 싶다면 <a href="/blog/asics-superblast-2-vs-3-comparison">슈퍼블라스트 2 vs 3 비교</a>와 <a href="/best/max-cushion">쿠션화 추천</a>을 함께 보세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 라이닝 공식 자료와 Road Trail Run·WeeViews 등 해외 실측 리뷰, 국내 커뮤니티 후기(@runninglife_korea, 2026-06-01)를 교차 정리한 내용입니다. 라이닝 레드헤어 9 울트라는 한국 정식 출시 전이며 독립 랩(RunRepeat 등) 측정치가 아직 없어, 일부 수치는 해외 실측·제조사 발표 기준입니다. 가격은 병행수입·구매대행 시세로 변동될 수 있습니다.</p>
`,
  },
  {
    id: '2026-disney-run-incheon-virtual-run',
    slug: '2026-disney-run-incheon-virtual-run',
    title: '디즈니런 2026 인천 + 디즈니 버추얼런 최초 공개 | 6/11 티켓 오픈 — 토이스토리·모아나·주토피아 3색 버추얼런부터 10/24 인천까지',
    description: '디즈니 버추얼런 2차(모아나) 티켓이 7월 9일(목) 오전 10시, 공식 홈페이지 대기열 방식으로 오픈됩니다 — 5km·4만원·선착순 5,000명, 완주 7/15~31, 메달 7/13부터 배송. 2025 여의도 1.5만 명을 모은 디즈니런은 10/24 인천으로 돌아오고, 버추얼런은 토이스토리·모아나·주토피아 3색으로 진행됩니다. 티켓 일정·참가비·완주 인증법까지 한 번에 정리했습니다.',
    thumbnail: '/images/blog/2026-disney-run-incheon-virtual-run.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-05',
    updatedAt: '2026-07-03',
    category: 'news' as const,
    readingTime: 6,
    tags: ['디즈니런', '디즈니런 2026', '디즈니 버추얼런', '디즈니런 인천', '버추얼런', '러닝 이벤트', '토이스토리', '인천 마라톤'],
    content: `
<div class="deadline-strip">🎟️ 디즈니 버추얼런 <strong>2차(모아나) 티켓이 7월 9일(목) 오전 10시</strong> 공식 홈페이지에서 오픈됩니다 — 5km·4만원·선착순 5,000명, <strong>대기열(큐) 방식</strong>. 완주 기간은 7/15~31, 메달·굿즈는 7/13(월)부터 순차 배송됩니다. 1차(토이스토리)도 빠르게 경쟁이 몰렸으니 오픈 시각에 미리 대기하세요.</div>

<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>2025 여의도에서 1.5만 명을 모았던 <strong>디즈니런이 2026년 인천(상상플랫폼)으로</strong> 돌아옵니다 — 본 대회는 <strong>10월 24일(토)</strong></li>
    <li>올해 처음으로 <strong>디즈니 버추얼런</strong>이 도입돼, <strong>토이스토리·모아나·주토피아 3색 테마</strong>로 어디서나 달릴 수 있습니다</li>
    <li>버추얼런 1차(토이스토리)는 <strong>6/11(목) 티켓 오픈</strong>으로 시작됐습니다(공식 홈페이지 6/5·상세 6/9 공개). 이후 차수는 순차 진행</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏰</span>
  <div class="callout-body">
    <p class="callout-title">"Fun, Together!" — 디즈니런이 인천으로</p>
    <p>2025년 여의도공원에서 약 1.5만 명이 참가하며 화제가 된 <strong>국내 첫 디즈니 테마 러닝</strong>이, 2026년에는 <strong>인천 상상플랫폼</strong>으로 무대를 옮겨 돌아옵니다. 여기에 올해는 시간과 장소에 구애받지 않고 즐기는 <strong>'디즈니 버추얼런'이 최초로 도입</strong>돼, 본 대회 전부터 디즈니 캐릭터와 함께 달릴 수 있게 됐습니다.</p>
  </div>
</div>

<h2>① 디즈니 버추얼런 — 어디서나, 3색 테마 (최초 도입)</h2>
<p>버추얼런은 <strong>정해진 기간 안에 원하는 장소에서 달리고 기록을 인증</strong>하는 방식입니다. 1차부터 3차까지 각기 다른 디즈니 캐릭터 테마로 진행됩니다.</p>
<table>
  <thead>
    <tr><th>차수</th><th>테마</th><th>러닝 기간</th><th>티켓 오픈</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>1차</strong></td><td>토이 스토리</td><td>6/24(수) ~ 7/10(금)</td><td><strong>6/11(목)</strong></td></tr>
    <tr><td><strong>2차</strong></td><td>모아나</td><td>7/15(수) ~ 7/31(금)</td><td>7/9(목)</td></tr>
    <tr><td><strong>3차</strong></td><td>주토피아</td><td>8/12(수) ~ 8/24(월)</td><td>8/6(목)</td></tr>
  </tbody>
</table>
<p>각 회차 <strong>거리는 5km 단일 종목, 참가비 4만원, 선착순 5,000명</strong>입니다. 완주 인증은 <strong>나이키 런 클럽·런데이 같은 러닝 앱에서 날짜·거리·기록이 나온 화면을 캡처해 공식 홈페이지에 업로드</strong>하는 방식이고, 인증하면 테마별 한정 메달·굿즈가 배송됩니다(2차 모아나는 <strong>7월 13일(월)부터 순차 배송</strong>). 장소는 <strong>"어디에서나!"</strong> — 한강이든 동네 공원이든 본인 코스에서 달리면 됩니다. 여름 더위를 감안하면 새벽·야간 러닝이 좋겠죠 → <a href="/blog/hot-weather-summer-running-safety-guide-korea">폭염 러닝 안전 가이드</a></p>
<p><strong>2차(모아나) 티켓은 7월 9일(목) 오전 10시</strong>, 공식 홈페이지에서 <strong>대기열(큐) 방식</strong>으로 열립니다. 1차 토이스토리도 순식간에 경쟁이 몰렸던 만큼, 오픈 시각에 미리 접속해 대기하는 게 안전합니다. 결제 수단과 개인정보를 미리 준비해두면 대기열 통과 후 빠르게 신청할 수 있어요. 참고로 버추얼런 참가비는 <strong>4만원</strong>이며, 일부 블로그에 보이는 6.5만/8만원은 <strong>10월 인천 본 대회(5km·10km) 가격</strong>이니 혼동하지 마세요.</p>

<h2>② 디즈니런 2026 인천 — 본 대회 (종목·참가비 공개)</h2>
<ul>
  <li><strong>장소</strong>: 인천 <strong>상상플랫폼</strong> (인천 중구 월미로, 내항 일대)</li>
  <li><strong>일정</strong>: <strong>10월 24일(토)</strong></li>
  <li><strong>종목</strong>: <strong>5km(곰돌이 푸·가족 친화)</strong> · <strong>10km(미키와 친구들·러닝 애호가)</strong></li>
  <li><strong>참가비</strong>: 5km <strong>65,000원</strong> · 10km <strong>80,000원</strong> — 유니클로 한정판 티셔츠 + 완주 메달 포함</li>
  <li><strong>티켓 오픈</strong>: <strong>8/31(월) 오전 10시, 선착순 1.5만 명</strong></li>
</ul>
<p>주최는 디즈니코리아·스포츠서울·블렌트이고, <strong>유니클로</strong>가 공식 머천다이즈 파트너로 한정 티셔츠를 제작합니다. 인천 러닝 코스가 궁금하다면 → <a href="/blog/incheon-unique-running-courses-7">인천 이색 러닝 코스 7선</a>을 참고하고, 대회 일정은 <a href="/marathon/disney-run-incheon-2026">디즈니런 캘린더 페이지</a>에서도 확인할 수 있습니다.</p>

<div class="callout warning">
  <span class="callout-icon">🎟️</span>
  <div class="callout-body">
    <p class="callout-title">일정 한눈에 + 놓치면 안 될 날짜</p>
    <ul>
      <li><strong>6/5(금)</strong> — 공식 홈페이지 오픈(disneyrunincheon2026.com)</li>
      <li><strong>6/9</strong> — 상세 정보 공개</li>
      <li><strong>6/11(목)</strong> — 버추얼런 1차(토이스토리) 티켓 오픈</li>
      <li><strong>8/31(월)</strong> — 디즈니런 2026 인천 본 대회 티켓 오픈</li>
    </ul>
    <p>2025 디즈니런이 인기로 빠르게 마감됐던 만큼, 원하는 차수·종목은 <strong>티켓 오픈일을 미리 알림 설정</strong>해두는 게 안전합니다.</p>
  </div>
</div>

<h2>버추얼런, 처음이라면</h2>
<p>버추얼런은 대회장에 가지 않고도 <strong>기간 내 정해진 거리를 달리고 앱·기록으로 인증</strong>하면 완주로 인정되는 형식입니다. 보통 <strong>참가 키트(메달·티셔츠·캐릭터 굿즈)</strong>가 제공돼, 기록보다 <strong>테마를 즐기고 굿즈를 모으는 재미</strong>가 큽니다. 가족·친구와 함께, 아이와 함께 부담 없이 즐기기 좋아 디즈니 테마와 잘 어울립니다.</p>

<h2>마무리</h2>
<p>2025년의 인기를 잇는 디즈니런이 <strong>버추얼런(여름) → 인천 본 대회(가을)</strong>로 한 해를 길게 채웁니다. 우선 6/11 토이스토리 버추얼런부터 챙기고, 10/24 인천 본 대회는 8/31 티켓 오픈을 기다리면 됩니다. 다른 가을 러닝 이벤트와 일정을 함께 짜려면 <a href="/marathon">마라톤 캘린더</a>를 참고하세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 대회 종목·참가비(5km 6.5만·10km 8만, 유니클로 티셔츠 포함)는 2026-06 공개분 기준입니다. 본 대회 코스 세부 경로·티켓은 8/31 오픈 시 확정되며, 버추얼런 잔여 좌석은 실시간으로 바뀝니다. 신청 전 공식 홈페이지(disneyrunincheon2026.com)와 디즈니코리아(@disneykorea)를 한 번 더 확인하세요. (2026-07-03 업데이트 — 버추얼런 2차 모아나 티켓 7/9 오픈·5km·완주 인증법 반영)</p>
`,
  },
  {
    id: 'asics-gel-kayano-33-review',
    slug: 'asics-gel-kayano-33-review',
    title: '아식스 젤 카야노 33 솔직 리뷰 | 13년 만의 구조 대변혁 — 부드러워졌지만 호불호가 갈리는 이유',
    description: '카야노 33은 4D Guidance System을 버리고 FLUIDSUPPORT + FF Blast Max·Plus 듀얼폼으로 안정성의 방향 자체를 바꿨습니다. "역대 가장 부드럽고 일관됐다"는 호평과 "전작이 더 좋았다"는 혹평이 극명히 갈리죠. 확정 스펙과 미게시 랩 데이터를 구분해 정리하고, 평발·과내전 한국 러너에게 32와 33 중 무엇이 맞는지 답합니다.',
    thumbnail: '/images/blog/asics-gel-kayano-33-review.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-05',
    category: 'review' as const,
    readingTime: 9,
    tags: ['카야노 33', '젤 카야노 33', 'FLUIDSUPPORT', '안정화 러닝화', '평발 러닝화', '과내전', '아식스 리뷰', '카야노 32 비교'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>카야노 33은 <strong>13년 이어온 4D Guidance System(가이드레일)을 폐지</strong>하고 <strong>FLUIDSUPPORT + FF Blast Max·Plus 듀얼폼</strong>으로 — 안정성을 "교정"이 아닌 "부드러운 가이드"로 바꾼 대변혁작입니다</li>
    <li>평가가 <strong>극명히 갈립니다</strong>: "역대 가장 부드럽고 일관된 카야노"(호평) vs "전작의 통통 튀는 반발이 사라져 단단하고 밋밋하다"(혹평, Doctors of Running은 C+ 등급)</li>
    <li>결론은 명확합니다 — <strong>반발·경쾌함을 원하면 전작 32, 차분하고 부드러운 안정·장거리·워킹용이면 33</strong>. 발 성향에 따라 선택이 갈립니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🔧</span>
  <div class="callout-body">
    <p class="callout-title">13년 만에 "안정성을 만드는 방식"이 바뀌었다</p>
    <p>카야노는 오랫동안 <strong>딱딱한 의료 포스트·가이드 시스템</strong>으로 발이 안쪽으로 무너지는 걸 막아주는 정통 안정화였습니다. 33은 이 공식을 버렸습니다. 발 아치를 밀어내는 장치 없이, <strong>넓어진 바닥 + 폼 밀도 차이 + 미드솔 지오메트리(직선 라스트·미디얼 플레어)</strong>로 자연스럽게 발을 잡아주는 "지오메트릭 안정성"으로 전환했죠. ASICS의 표현으로는 <strong>"움직임을 교정하기보다 보행 단계마다 안내한다"</strong>는 철학입니다.</p>
  </div>
</div>

<h2>무엇이 바뀌었나 — 32 → 33</h2>
<table>
  <thead>
    <tr><th>항목</th><th>카야노 32</th><th>카야노 33</th></tr>
  </thead>
  <tbody>
    <tr><td>안정성 방식</td><td>4D Guidance System (가이드레일)</td><td><strong>FLUIDSUPPORT</strong> (지오메트리·폼밀도)</td></tr>
    <tr><td>미드솔 폼</td><td>FF Blast+ ECO 단일</td><td><strong>FF Blast Max(상) + FF Blast Plus(하)</strong> 듀얼</td></tr>
    <tr><td>젤</td><td>후방 PureGel</td><td>후방 PureGel 유지</td></tr>
    <tr><td>라이드 성격</td><td>통통 튀는 반발감</td><td><strong>부드럽고 차분, 더 단단·압축적</strong></td></tr>
  </tbody>
</table>
<p>상단의 <strong>FF Blast Max</strong>는 아식스의 통통 튀는 쿠션화 노바블라스트 계열에서 온 폼으로, 처음 신었을 때 <strong>구름 같은 부드러움</strong>을 줍니다. 그 아래 더 단단한 FF Blast Plus가 받쳐 안정성을 만드는 구조죠. 자세한 항목별 비교는 → <a href="/blog/asics-kayano-32-vs-33-comparison">카야노 32 vs 33 비교</a>에서 다룹니다.</p>

<h2>스펙 — 확정값과 "아직 모르는 값"</h2>
<div class="callout warning">
  <span class="callout-icon">🧪</span>
  <div class="callout-body">
    <p class="callout-title">신상 데이터 안내</p>
    <p>2026년 6월 출시 직후라 <strong>RunRepeat의 독립 절단 랩 테스트가 카야노 33에 대해 아직 미게시</strong>입니다. 즉 <strong>충격흡수(SA)·경도(HA)·에너지 리턴%·토박스 너비</strong> 같은 정밀 랩 수치는 33에 대해 확정값이 없습니다. 아래 확정 스펙은 제조사·리뷰어 스펙시트 기준이며, 랩 수치는 전작 32를 참고로만 병기합니다.</p>
  </div>
</div>
<ul>
  <li><strong>무게</strong>: 약 <strong>298g</strong> (남성 US 9 기준). 전작 32(스펙 304g·랩 실측 295g)와 <strong>사실상 동일</strong> 수준 — 소스별 편차가 있어 정확한 증감은 단정하기 어렵습니다.</li>
  <li><strong>스택 / 드롭</strong>: 힐 약 <strong>40mm</strong> / 전족 약 <strong>31mm</strong>, <strong>드롭 8mm</strong>(카야노 라인 중 낮은 편, 32 계승)</li>
  <li><strong>충격흡수·경도·토박스</strong>: 33 랩 미게시 → <strong>(참고) 카야노 32</strong>는 RunRepeat 기준 부드러운 쿠션·표준 토박스대였습니다. 33은 폼이 바뀌어 <strong>더 압축적·단단하다는 평</strong>이라 32 수치를 그대로 적용하면 안 됩니다.</li>
  <li><strong>내구성</strong>: 카야노 전통대로 아웃솔이 튼튼해 <strong>장거리 데일리 600km+</strong>를 기대할 수 있습니다.</li>
</ul>

<h2>평가가 갈린다 — 양쪽 다 들어보자</h2>
<p>카야노 33만큼 전문가 평이 엇갈린 신상도 드뭅니다.</p>
<h3>👎 혹평 — "전작이 더 좋았다"</h3>
<p>의학 관점 리뷰로 권위 있는 <strong>Doctors of Running</strong>의 Matt Klein(물리치료 박사)은 <strong>32를 "2025 올해의 안정화"로 꼽았지만, 33은 2026 top-3에도 못 든다</strong>며 성능 <strong>C+ 등급</strong>을 줬습니다. 근거는:</p>
<ul>
  <li><strong>"비반응성 미드솔"</strong> — 전작 4D Guidance의 통통 튀는 반발이 사라짐</li>
  <li><strong>과도하게 압축적이고 단단한 라이드</strong>, 어색한 힐 전환</li>
  <li>"빠르게 달리기보다 <strong>걷거나 느린 페이스</strong>에 가장 잘 맞는다"</li>
</ul>
<h3>👍 호평 — "역대 가장 부드럽고 일관됐다"</h3>
<p>반면 일부 매체·리테일러는 <strong>"달려보니 가장 부드럽고 일관된 카야노"</strong>, 안정성이 거슬리지 않고 자연스럽다고 평합니다. 가이드레일이 아치를 밀어내던 이질감이 사라져 <strong>더 편안하다</strong>는 거죠. 다만 이쪽은 전문 랩·의료 리뷰보다 소스 강도가 낮은 편입니다.</p>
<p>두 평가는 사실 <strong>같은 변화를 다르게 본 것</strong>입니다 — "반발이 사라졌다"(혹평)와 "이질감이 사라졌다"(호평)는 동전의 양면이죠.</p>

<h2>그래서 누구에게 맞나</h2>
<ul>
  <li><strong>✅ 잘 맞는 사람</strong>: <a href="/blog/pronation-type-running-shoe-guide-2026">과내전·평발</a>이면서 <strong>부드럽고 차분한 안정</strong>을 원하는 러너, <strong>장거리 LSD·회복 러닝·오래 서있는 직업</strong>, 가이드레일의 밀어내는 느낌이 불편했던 사람</li>
  <li><strong>❌ 안 맞는 사람</strong>: <strong>반발·경쾌함</strong>을 중시하거나 <strong>빠른 템포</strong>를 자주 뛰는 러너 → 전작 <a href="/shoes/asics-gel-kayano-32">카야노 32</a>(할인 시)나 다른 안정화가 낫습니다</li>
</ul>

<h2>한국 러너 관점</h2>
<ul>
  <li><strong>가격</strong>: 한국 공식가 <strong>209,000원</strong>. 프리미엄 안정화 정가대이며, 32가 할인에 들어가면 가성비는 32가 앞섭니다.</li>
  <li><strong>발볼</strong>: 토박스 표준 + <strong>와이드 옵션 제공</strong>(카야노 전통)이라 발볼 넓은 한국 러너도 대응 가능. 평발 적합성은 최상위급입니다.</li>
  <li><strong>경쟁 안정화</strong>: 부드러운 안정 + 통기성을 원하면 <a href="/shoes/brooks-glycerin-gts-22">브룩스 글리세린 GTS 22</a>, 가벼운 안정화는 <a href="/shoes/new-balance-860-v15">뉴발란스 860 v15</a>도 함께 비교해 보세요.</li>
</ul>

<h2>한 줄 결론</h2>
<p>카야노 33은 "더 좋아진 카야노"가 아니라 <strong>"방향이 달라진 카야노"</strong>입니다. 통통 튀는 안정 쿠션을 사랑했다면 33의 변화가 아쉬울 수 있고, 가이드레일의 이질감이 싫었다면 33이 더 편할 수 있습니다. <strong>가능하면 매장에서 32와 33을 번갈아 신어보고</strong> 본인 발에 맞는 쪽을 고르세요. 스펙·추천 대상 요약은 <a href="/shoes/asics-gel-kayano-33">카야노 33 상세 페이지</a>, 출시 정보는 <a href="/blog/2026-asics-kayano-33-launch">출시 안내글</a>에서 확인할 수 있습니다. 무릎·관절이 걱정이라면 → <a href="/blog/knee-pain-running-shoes">무릎 통증 러너 러닝화 선택법</a>도 참고하세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 리뷰는 Doctors of Running, Canadian Running, ASICS 공식 등 다중 소스를 교차 검증해 작성했으며, RunRepeat 랩 미게시 항목은 추정·미확정으로 구분했습니다. 개인 발 특성에 따라 체감은 다를 수 있습니다.</p>
`,
  },
  {
    id: 'puma-deviate-pure-nitro-review',
    slug: 'puma-deviate-pure-nitro-review',
    title: '푸마 디비에이트 나이트로 퓨어 리뷰 | 카본 뺀 100% PEBA 슈퍼폼 — 18.9만원 무플레이트 트레이너의 정체',
    description: '푸마가 디비에이트 나이트로 4에서 카본 PWRPLATE를 덜어낸 "퓨어" 버전을 6월 출시했습니다. 100% PEBA NITROFOAM 단일 폼으로 220g 경량을 달성한 무플레이트 슈퍼폼 트레이너. 디비4와 무엇이 다른지, 누구에게 맞는지, 18만 9천원 가성비는 어떤지를 한국 러너 관점에서 정리했습니다.',
    thumbnail: '/images/blog/puma-deviate-pure-nitro-review.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-05',
    category: 'review' as const,
    readingTime: 7,
    tags: ['푸마 디비에이트 퓨어', '디비에이트 나이트로 퓨어', '무플레이트 슈퍼폼', 'PEBA 러닝화', '푸마 나이트로', '데일리 트레이너', '슈퍼트레이너'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>디비에이트 나이트로 퓨어는 <strong>디비에이트 나이트로 4에서 카본 PWRPLATE를 뺀 "플레이트 없는" 버전</strong> — 100% PEBA 단일 폼으로 <strong>220g</strong> 경량을 달성했습니다(2026년 6월 출시)</li>
    <li>플레이트 특유의 경직감 없이 <strong>유연하고 부드러운 라이드</strong>로, 데일리 러닝부터 스피드 훈련까지 한 켤레로 소화하는 만능 트레이너입니다</li>
    <li><strong>18만 9천원</strong>으로 디비4(₩219,000)보다 3만원 저렴 — Road Trail Run이 9.5/10을 줄 만큼 "슈퍼슈즈만큼 가볍고 비싸지 않다"는 평입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">👟</span>
  <div class="callout-body">
    <p class="callout-title">"카본을 뺀다"는 역발상</p>
    <p>요즘 러닝화 트렌드는 카본 플레이트를 넣는 방향입니다. 그런데 푸마는 인기 슈퍼트레이너 <a href="/shoes/puma-deviate-nitro-4">디비에이트 나이트로 4</a>에서 <strong>오히려 카본 플레이트를 덜어낸</strong> '퓨어' 버전을 내놨습니다. 대신 미드솔을 <strong>100% PEBA NITROFOAM 단일 폼</strong>으로 채워, 플레이트의 튕기는 느낌 대신 <strong>폼 본연의 부드럽고 유연한 반발</strong>을 살렸죠. "스피드를 더 쉽게(speed made accessible)"가 푸마의 설명입니다.</p>
  </div>
</div>

<div class="callout warning">
  <span class="callout-icon">🧪</span>
  <div class="callout-body">
    <p class="callout-title">신상 데이터 안내</p>
    <p>2026년 6월 출시 직후라 <strong>RunRepeat 랩 테스트(SA·HA·에너지 리턴·토박스 너비)는 아직 미게시</strong>입니다. 본문의 일부 수치는 형제 모델 <a href="/shoes/puma-deviate-nitro-4">디비에이트 나이트로 4</a> 기준 추정치이며, 무게·스택·드롭·가격은 공식 확정값입니다. 랩 데이터가 공개되면 <a href="/shoes/puma-deviate-pure-nitro">상세 페이지</a>를 업데이트할 예정입니다.</p>
  </div>
</div>

<h2>디비4 vs 퓨어 — 무엇이 다른가</h2>
<table>
  <thead>
    <tr><th>항목</th><th>디비에이트 나이트로 4</th><th>디비에이트 나이트로 <strong>퓨어</strong></th></tr>
  </thead>
  <tbody>
    <tr><td>플레이트</td><td>카본 합성 PWRPLATE</td><td><strong>없음</strong></td></tr>
    <tr><td>미드솔 폼</td><td>듀얼 레이어 (PEBAX + PEBA)</td><td><strong>100% PEBA 단일</strong></td></tr>
    <tr><td>무게</td><td>250g</td><td><strong>220g (-30g)</strong></td></tr>
    <tr><td>스택 / 드롭</td><td>38 / 30mm · 8mm</td><td>38 / 30mm · 8mm (동일)</td></tr>
    <tr><td>라이드</td><td>탄탄하고 추진력 있는</td><td><strong>유연하고 부드러운</strong></td></tr>
    <tr><td>가격</td><td>₩219,000</td><td><strong>₩189,000</strong></td></tr>
    <tr><td>성격</td><td>업템포·레이싱 지향</td><td><strong>데일리 + 스피드 만능</strong></td></tr>
  </tbody>
</table>
<p>스택·드롭은 같지만, <strong>플레이트 유무와 폼 구성</strong>에서 성격이 갈립니다. 퓨어는 더 가볍고 유연하며, 디비4는 더 단단하고 추진력이 있습니다.</p>

<h2>누구에게 맞을까</h2>
<ul>
  <li><strong>✅ 추천</strong>: 카본 플레이트의 경직감이 부담스러운 러너, 데일리부터 템포까지 한 켤레로 쓰고 싶은 러너, 가벼운 슈퍼폼을 합리적 가격에 원하는 러너</li>
  <li><strong>❌ 비추천</strong>: 탄탄하고 직접적인 피드백을 좋아하면 <a href="/shoes/puma-deviate-nitro-4">디비4</a>, 바닥감 명확한 레이싱화를 원하면 카본 레이서가 낫습니다</li>
</ul>
<p>"플레이트 없는 슈퍼폼 트레이너"라는 점에서 <a href="/shoes/hoka-mach-6">호카 마하 6</a>, <a href="/shoes/saucony-ride-19">사우코니 라이드 19</a>와 같은 결입니다. 카본 플레이트가 정말 필요한지 고민된다면 → <a href="/blog/carbon-plate-shoes-comparison-2025">카본 플레이트 러닝화 완벽 비교</a></p>

<h2>한국 러너 관점</h2>
<ul>
  <li><strong>가격</strong>: 18만 9천원에 800km 설계라 km당 약 236원. 슈퍼폼 트레이너 중 가성비가 좋습니다.</li>
  <li><strong>발볼</strong>: 토박스는 표준으로 추정되며, <strong>와이드 옵션은 출시 시점 미확인</strong>입니다. 발볼 넓은 러너는 매장 착화를 권합니다.</li>
  <li><strong>여름</strong>: 통기성 좋은 경량 메쉬라 더운 날 데일리로 제격입니다 → <a href="/blog/summer-breathable-running-shoes-2026">여름 통기성 러닝화 TOP 10</a></li>
</ul>

<h2>한 줄 결론</h2>
<p>디비에이트 나이트로 퓨어는 "카본이 답"이라는 흐름에 <strong>"좋은 폼이면 플레이트 없이도 충분하다"</strong>고 답하는 신발입니다. 가볍고 부드럽고 비싸지 않은, <strong>매일 신기 좋은 슈퍼폼 트레이너</strong>를 찾는다면 유력한 후보입니다. 자세한 스펙·추천 대상은 <a href="/shoes/puma-deviate-pure-nitro">디비에이트 나이트로 퓨어 상세 페이지</a>에서 확인하세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 스펙·가격은 푸마 공식(kr.puma.com)과 Road Trail Run 등 해외 리뷰를 종합했으며, 랩 수치 일부는 형제 모델 기준 추정치입니다.</p>
`,
  },
  {
    id: 'chuncheon-unique-running-courses-7',
    slug: 'chuncheon-unique-running-courses-7',
    title: '춘천 이색 러닝 코스 7선 | 의암호 호반길부터 김유정 실레길까지 — 호수·강·산 결합한 호반의 도시 러닝',
    description: '춘천마라톤의 성지 의암호 호반길부터 강원 3대 러닝 코스 공지천, 소양강 스카이워크, 삼악산 트레일, 강촌 북한강 자전거길, 봉의산 도심 트레일, 김유정 실레이야기길까지. 호반의 도시 춘천에서 진짜 뛸 만한 이색 코스 7곳을 거리·난이도·시간대·러닝화 추천까지 정리했습니다.',
    thumbnail: '/images/blog/chuncheon-unique-running-courses-7.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-05',
    category: 'guide' as const,
    readingTime: 11,
    tags: ['춘천 러닝 코스', '이색 러닝', '의암호', '공지천', '소양강 스카이워크', '삼악산', '강촌 북한강', '춘천마라톤'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>춘천은 의암호·소양강·북한강이 도시를 감싸는 "호반의 도시"</strong> — 수변 평지 러닝부터 삼악산 트레일까지, 물과 산을 한 도시에서 즐기는 러닝 여행지</li>
    <li>춘천의 시그니처는 <strong>의암호 호반길</strong> — 춘천마라톤이 달리는 바로 그 호수, 차량 통제 수변 도로의 평지 러닝</li>
    <li>각 코스별 <strong>출발지·거리·노면·시간대·주의점 + 어울리는 러닝화 카테고리</strong>까지 한 번에 정리</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🚣</span>
  <div class="callout-body">
    <p class="callout-title">춘천 러닝만의 매력</p>
    <p>춘천은 <strong>의암호·소양강·북한강 같은 물길과 삼악산·봉의산 같은 산</strong>이 어우러진 강원권 대표 러닝 여행지입니다. 도시 어디서 달려도 호수와 강이 따라오고, <strong>춘천마라톤</strong>의 무대인 의암호 호반길은 전국 러너의 버킷리스트죠. 수변 평지로 가볍게 LSD를 즐기다, 삼악산·봉의산으로 트레일까지 맛볼 수 있는 게 춘천의 강점입니다. 본인 발 특성·부상 이력에 맞는 러닝화 후보는 <a href="/recommend">1분 러닝화 추천</a>에서 받을 수 있습니다.</p>
  </div>
</div>

<h2>한눈에 비교</h2>

<table>
  <thead>
    <tr><th>#</th><th>코스</th><th>거리</th><th>난이도</th><th>특이점</th><th>추천 시간대</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td><strong>의암호 호반길</strong></td><td>약 6~12km</td><td>하 (평지)</td><td>춘천마라톤 코스 + 의암호 스카이워크 — 시그니처</td><td>새벽·저녁</td></tr>
    <tr><td>2</td><td><strong>공지천 호수공원</strong></td><td>약 4~7km</td><td>하 (평지)</td><td>강원 3대 러닝 + 사이로248 출렁다리</td><td>새벽·야간</td></tr>
    <tr><td>3</td><td><strong>소양강 스카이워크 강변</strong></td><td>약 4~6km</td><td>하</td><td>소양강처녀상 + 투명유리 스카이워크</td><td>일몰·야간</td></tr>
    <tr><td>4</td><td><strong>삼악산 등선폭포 트레일</strong></td><td>약 5~9km</td><td>중상</td><td>의암호 조망 + 폭포 계곡 산길</td><td>맑은 날 오전</td></tr>
    <tr><td>5</td><td><strong>강촌 ~ 북한강 자전거길</strong></td><td>약 6~15km</td><td>하~중</td><td>북한강변 + 경춘선 폐선 산책로</td><td>오전</td></tr>
    <tr><td>6</td><td><strong>봉의산</strong></td><td>약 3~5km</td><td>중</td><td>도심 속 산 + 춘천 시내 조망</td><td>오전</td></tr>
    <tr><td>7</td><td><strong>김유정 실레이야기길</strong></td><td>약 4~7km</td><td>하~중</td><td>문학 마을 + 금병산 자락 흙길</td><td>오전</td></tr>
  </tbody>
</table>

<h2>1. 의암호 호반길 — 춘천마라톤이 달리는 그 호수</h2>

<p><strong>출발지</strong>: 공지천·의암호 일대 (버스·차량)<br>
<strong>거리</strong>: 약 6~12km (구간 선택)<br>
<strong>노면</strong>: 우레탄 산책로 + 데크 + 수변 도로<br>
<strong>추천 시간대</strong>: 새벽·저녁</p>

<p>의암호는 춘천을 대표하는 호수로, <strong>코스의 절반 이상이 호수를 끼고 달리는 수변 도로</strong>입니다. 차량이 통제된 조용한 구간에서 신발 소리와 호흡 소리만 들으며 달릴 수 있고, 중간에 <strong>의암호 스카이워크</strong>(수면 위 12m 투명유리)를 만납니다. 무엇보다 <strong>춘천마라톤이 달리는 바로 그 코스</strong>라 의미가 남다릅니다.</p>

<p><strong>이 코스의 매력</strong>: 신호 없는 호수 둘레 평지 + 춘천마라톤 코스 답사. 거리를 자유롭게 조절할 수 있고, 가을 단풍철 풍경이 특히 아름답습니다. <a href="/blog/2026-chuncheon-marathon-registration-guide">춘천마라톤</a>을 준비한다면 실전 코스 적응에 최고입니다.</p>

<p><strong>어울리는 러닝화</strong>: 평지 장거리 + 통기성. <a href="/shoes/saucony-ride-19">사우코니 라이드 19</a>·<a href="/shoes/nike-pegasus-41">페가수스 41</a> 같은 통기성 좋은 데일리화.</p>

<h2>2. 공지천 호수공원 — 강원 3대 러닝 코스</h2>

<p><strong>출발지</strong>: 공지천 유원지·근화동 (도심 인근)<br>
<strong>거리</strong>: 약 4~7km<br>
<strong>노면</strong>: 우레탄 산책로 + 데크<br>
<strong>추천 시간대</strong>: 새벽·야간</p>

<p>공지천 호수공원은 경포호수 둘레길·속초 해맞이공원과 함께 흔히 <strong>'강원 3대 러닝 코스'</strong>로 꼽히는 춘천 인기 러닝지입니다. 의암호로 흘러드는 공지천을 따라 평탄한 산책로가 이어지고, 최근 개통한 <strong>사이로248 출렁다리</strong>(248m)가 공지천 의암공원과 근화동 생태공원을 이어 코스가 더 넓어졌습니다.</p>

<p><strong>이 코스의 매력</strong>: 도심에서 가까운 평지 호수 러닝 + 출렁다리. 의암호 호반길과 자연스럽게 연결돼 거리를 늘리기 좋고, 야간 조명도 잘 갖춰져 있습니다. 에티오피아 한국전 참전 기념 공간 등 볼거리도 있습니다.</p>

<p><strong>어울리는 러닝화</strong>: 평지 데일리 + 통기성. <a href="/shoes/nike-pegasus-42">페가수스 42</a>·<a href="/shoes/on-cloudmonster-3">클라우드몬스터 3</a> 같은 데일리화.</p>

<h2>3. 소양강 스카이워크 강변 — 소양강처녀상과 투명유리길</h2>

<p><strong>출발지</strong>: 소양강 스카이워크·소양2교 (도심)<br>
<strong>거리</strong>: 약 4~6km (강변 왕복)<br>
<strong>노면</strong>: 강변 데크 + 산책로<br>
<strong>추천 시간대</strong>: 일몰·야간</p>

<p>소양강 스카이워크는 <strong>전체 길이 174m, 그중 156m가 투명 강화유리</strong>로 된 춘천의 랜드마크입니다. <strong>소양강처녀상</strong>과 소양2교 옆에 자리해 강변을 따라 달리다 들르기 좋습니다. 노을 질 무렵 소양강 물빛이 특히 아름답습니다.</p>

<p><strong>이 코스의 매력</strong>: 춘천 대표 포토 스폿 + 평탄한 강변 러닝. 거리는 길지 않지만 공지천·의암호 코스와 묶으면 충분합니다. 관광객이 많은 낮보다 <strong>이른 아침·저녁</strong>이 달리기 쾌적합니다.</p>

<p><strong>어울리는 러닝화</strong>: 평지 강변 데일리. <a href="/shoes/saucony-ride-19">사우코니 라이드 19</a>·<a href="/shoes/hoka-clifton-10">호카 클리프턴 10</a> 같은 데일리화.</p>

<h2>4. 삼악산 등선폭포 트레일 — 의암호를 내려다보는 산길</h2>

<p><strong>출발지</strong>: 삼악산 등선폭포 입구 (강촌 방면)<br>
<strong>거리</strong>: 약 5~9km (구간 선택)<br>
<strong>노면</strong>: 산악 트레일 + 계곡 바위 + 계단<br>
<strong>추천 시간대</strong>: 맑은 날 오전</p>

<p>삼악산은 의암호를 끼고 솟은 산으로, <strong>등선폭포 계곡을 따라 오르는 트레일</strong>이 인기입니다. 능선에서는 의암호와 춘천 시내가 한눈에 내려다보이죠. 본격 등산로라 러닝보다 <strong>트레일 러닝·하이킹</strong>에 가깝습니다.</p>

<p><strong>이 코스의 매력</strong>: 호수를 내려다보는 산악 트레일. 다만 <strong>바위·계단·급경사</strong>가 많아 일반 데일리화로는 위험하고, 거리·체력에 맞게 끊어 뛰어야 합니다. 우천 직후엔 계곡 바위가 미끄럽습니다.</p>

<p><strong>어울리는 러닝화</strong>: 트레일 + 접지력. <a href="/shoes/asics-gel-venture-10">젤 벤처 10</a>(가성비)·<a href="/shoes/adidas-terrex-agravic-4">테렉스 아그라빅 4</a>(접지력). 신발 선택은 <a href="/blog/2026-best-trail-running-shoes">2026 트레일 러닝화 베스트</a> 참고.</p>

<h2>5. 강촌 ~ 북한강 자전거길 — 북한강변 슬로 러닝</h2>

<p><strong>출발지</strong>: 강촌유원지·강촌역 (춘천 남부)<br>
<strong>거리</strong>: 약 6~15km (거리 자유)<br>
<strong>노면</strong>: 자전거길 + 데크 + 폐선 산책로<br>
<strong>추천 시간대</strong>: 오전</p>

<p>강촌은 <strong>북한강 변을 따라 긴 산책로</strong>가 이어지는 유원지로, 서울~춘천을 잇는 <strong>북한강(경춘선) 자전거길</strong>의 한 구간입니다. 옛 경춘선 폐선 구간을 따라 강을 끼고 평탄하게 달릴 수 있어 장거리 LSD에 제격입니다.</p>

<p><strong>이 코스의 매력</strong>: 북한강 절경을 따라 거리 무제한 평지 러닝. 자전거길과 공유하므로 보행·주행 방향을 지키고, 라이더와의 안전거리에 유의하세요. 강촌역 레일바이크 등 볼거리도 함께 즐길 수 있습니다.</p>

<p><strong>어울리는 러닝화</strong>: 평지 장거리 + 쿠션. <a href="/shoes/hoka-clifton-10">호카 클리프턴 10</a>·<a href="/shoes/nike-pegasus-42">페가수스 42</a> 같은 쿠션 데일리.</p>

<h2>6. 봉의산 — 도심 한복판의 산</h2>

<p><strong>출발지</strong>: 봉의산 등산로 입구 (춘천 시내)<br>
<strong>거리</strong>: 약 3~5km<br>
<strong>노면</strong>: 산길 흙길 + 계단<br>
<strong>추천 시간대</strong>: 오전</p>

<p>봉의산은 춘천 도심 한가운데 솟은 산(약 301m)으로, <strong>시내에서 바로 접근하는 도심 트레일</strong>입니다. 짧지만 오르막이 또렷해 <strong>업힐 훈련·계단 훈련</strong>에 좋고, 정상에서는 춘천 시내와 호수가 두루 보입니다.</p>

<p><strong>이 코스의 매력</strong>: 도심에서 가장 가까운 산 트레일 + 시내 조망. 거리는 짧아도 경사가 있어 심폐·하체 자극이 확실합니다. 하산은 무릎 부담이 크니 천천히, 비 온 뒤엔 흙길이 미끄럽습니다.</p>

<p><strong>어울리는 러닝화</strong>: 짧은 트레일 + 접지력. <a href="/shoes/asics-gel-venture-10">젤 벤처 10</a>·<a href="/shoes/adidas-terrex-agravic-4">테렉스 아그라빅 4</a> 같은 트레일화.</p>

<h2>7. 김유정 실레이야기길 — 문학 마을의 흙길</h2>

<p><strong>출발지</strong>: 김유정역·김유정문학촌 (춘천 남부)<br>
<strong>거리</strong>: 약 4~7km<br>
<strong>노면</strong>: 마을길 + 금병산 자락 흙길<br>
<strong>추천 시간대</strong>: 오전</p>

<p>소설가 김유정의 고향 실레마을에는 <strong>'봄·봄', '동백꽃'의 배경을 잇는 실레이야기길</strong>이 조성돼 있습니다. 금병산 자락을 따라 이어지는 한적한 마을길·흙길로, 문학적 정취와 함께 달리는 운치 있는 코스입니다.</p>

<p><strong>이 코스의 매력</strong>: 도심을 벗어난 조용한 문학 산책 트레일. 평탄한 마을길과 완만한 흙길이 섞여 부담이 적고, 계절감이 뚜렷합니다. 일부 비포장·완만한 오르막이 있어 가벼운 트레일 대응이 되는 신발이 편합니다.</p>

<p><strong>어울리는 러닝화</strong>: 흙길 + 쿠션. <a href="/shoes/on-cloudmonster-3">클라우드몬스터 3</a>·<a href="/shoes/asics-gel-venture-10">젤 벤처 10</a> 같은 데일리·가벼운 트레일.</p>

<div class="callout warning">
  <span class="callout-icon">📌</span>
  <div class="callout-body">
    <p class="callout-title">춘천 러닝 여행 팁</p>
    <ul>
      <li><strong>호수+강 평지 위주</strong>: 의암호·공지천·소양강·북한강은 모두 평지라 입문자·장거리에 좋습니다. 삼악산·봉의산만 트레일 대응이 필요합니다.</li>
      <li><strong>대중교통</strong>: ITX·경춘선으로 서울에서 1시간대. 강촌·김유정은 역에서 바로 접근됩니다.</li>
      <li><strong>여름엔 새벽·야간</strong>: 분지 지형이라 한낮 더위가 만만치 않습니다 → <a href="/blog/hot-weather-summer-running-safety-guide-korea">폭염 러닝 안전 가이드</a></li>
    </ul>
  </div>
</div>

<h2>마무리 — 호반의 도시를 달리다</h2>
<p>춘천은 어느 코스를 달려도 물과 산이 함께하는 도시입니다. 춘천마라톤 무대인 의암호에서 가볍게 시작해, 공지천·소양강으로 거리를 잇고, 삼악산·봉의산으로 트레일까지 맛볼 수 있죠. 다른 도시 이색 코스가 궁금하다면 인접한 → <a href="/blog/gangneung-unique-running-courses-7">강릉 이색 러닝 코스 7선</a>, 그리고 → <a href="/blog/seoul-unique-running-courses-7">서울 이색 러닝 코스 7선</a>도 함께 보세요. 가을 대회 일정은 <a href="/marathon">마라톤 캘린더</a>에서 확인할 수 있습니다.</p>
`,
  },
  {
    id: '2026-garmin-run-korea-medal-race-package',
    slug: '2026-garmin-run-korea-medal-race-package',
    title: '2026 가민런 코리아 메달·레이스 패키지 공개 | 포러너 스페셜팩 6/23 오픈 — 참가 기념품·스폰서 기프트·접수 일정',
    description: '2026 가민런 코리아가 10K·HALF 완주 메달과 참가자 레이스 패키지를 공개했습니다. 6월 23일 포러너 170/70 스페셜팩 오픈, 7월 1~3일 본접수(래플), 7월 7일 당첨자 발표로 이어지는 접수 일정과 HDEX·콘티넨탈·샥즈·아미노바이탈 공식 파트너 기프트까지 정리했습니다.',
    thumbnail: '/images/blog/2026-garmin-run-korea-medal-race-package.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-05',
    category: 'news' as const,
    readingTime: 6,
    tags: ['가민런 코리아', '가민런 메달', '레이스 패키지', '가민 포러너', '마라톤 기념품', '가민런 접수', '포러너 170', '래플 추첨'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>2026 가민런 코리아가 <strong>10K·HALF 완주 메달</strong>과 <strong>참가자 레이스 패키지(기념품)</strong>를 공개했습니다 — "다음 도전을 기념할 메달"</li>
    <li>접수는 <strong>6/23 포러너 170/70 스페셜팩 오픈</strong> → <strong>7/1~7/3 본접수(래플)</strong> → <strong>7/7 당첨자 발표</strong> 순서로 진행됩니다</li>
    <li>공식 파트너 <strong>HDEX·콘티넨탈타이어·샥즈·아미노바이탈</strong>의 기프트도 함께 제공됩니다. 11월 15일 고양종합운동장</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏅</span>
  <div class="callout-body">
    <p class="callout-title">메달부터 공개 — "당신의 다음 도전을 기념할"</p>
    <p>가민코리아가 대회 5개월 전부터 <strong>완주 메달 디자인</strong>을 먼저 공개했습니다. 10K부터 HALF 마라톤까지, 종목별로 다음 도전을 기념하는 메달이죠. 가민런 코리아는 작년 첫 대회 때 <strong>각인 메달·기록 포스터 같은 프리미엄 완주 경험</strong>으로 화제가 됐던 만큼, 올해 메달에도 관심이 쏠립니다. <em>(실제 메달은 공개 이미지와 다를 수 있습니다.)</em></p>
  </div>
</div>

<h2>참가자 레이스 패키지 — 무엇이 들어있나</h2>
<p>가민은 "목표를 정했다면 준비도 달라져야 한다"며 참가자에게 제공되는 <strong>특별 레이스 패키지</strong>를 공개했습니다. 구체 구성품은 대회가 가까워지며 확정되지만, 공식 파트너 라인업을 보면 어떤 기프트가 함께할지 짐작할 수 있습니다.</p>
<table>
  <thead>
    <tr><th>공식 파트너</th><th>분야</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>HDEX(에이치덱스)</strong></td><td>스포츠·러닝 용품</td></tr>
    <tr><td><strong>콘티넨탈타이어</strong></td><td>타이어(고무·접지 기술) — 러닝화 아웃솔 협업으로도 친숙</td></tr>
    <tr><td><strong>샥즈(Shokz)</strong></td><td>골전도 러닝 이어폰</td></tr>
    <tr><td><strong>아미노바이탈</strong></td><td>아미노산·러닝 보충제</td></tr>
  </tbody>
</table>
<p><em>※ 레이스 패키지 구성품·디자인은 예고 없이 변경될 수 있습니다.</em></p>

<h2>접수 일정 — 6/23 포러너 스페셜팩부터</h2>
<p>이번 대회의 핵심은 <strong>3단계 접수</strong>입니다. 특히 <strong>가민 워치가 포함된 스페셜팩</strong>이 본접수보다 먼저 열립니다.</p>
<table>
  <thead>
    <tr><th>일정</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>6/23 (화)</strong></td><td><strong>포러너 170/70 스페셜팩</strong> 오픈 — 워치 포함 패키지</td></tr>
    <tr><td><strong>7/1 (수) ~ 7/3 (금)</strong></td><td><strong>본 접수 신청 (래플/추첨)</strong></td></tr>
    <tr><td><strong>7/7 (화)</strong></td><td>본 접수 <strong>당첨자 발표</strong></td></tr>
  </tbody>
</table>
<p>가민 입문 워치 <strong>포러너 70/170</strong>은 올해 새로 출시된 모델로, 스페셜팩은 "워치 + 대회 참가"를 묶은 구성입니다. 워치 자체가 궁금하다면 → <a href="/blog/2026-garmin-forerunner-70-170-korea">가민 포러너 70·170 출시 정리</a></p>

<div class="callout warning">
  <span class="callout-icon">🎟️</span>
  <div class="callout-body">
    <p class="callout-title">접수 전략 — 스페셜팩 vs 래플</p>
    <p>워치까지 새로 장만할 생각이라면 <strong>6/23 스페셜팩</strong>이 참가를 확정 짓는 가장 빠른 길입니다. 워치가 이미 있다면 <strong>7/1~7/3 래플</strong>에 신청하세요. 래플은 선착순이 아니라 <strong>기간 내 신청만 하면 추첨</strong> 대상이 되므로 서버와 싸울 필요는 없지만, <strong>신청 마감(7/3)</strong>을 놓치면 끝입니다. 작년 "2분컷"의 인기를 생각하면 경쟁률은 높을 전망입니다.</p>
  </div>
</div>

<h2>대회 한눈에</h2>
<ul>
  <li><strong>일정</strong>: 2026년 11월 15일 (일)</li>
  <li><strong>장소</strong>: 고양종합운동장</li>
  <li><strong>종목</strong>: HALF, 10K</li>
  <li><strong>공식 파트너</strong>: HDEX · 콘티넨탈타이어 · 샥즈 · 아미노바이탈</li>
</ul>
<p>일정·코스·규모 등 대회 전반의 자세한 정리는 → <a href="/blog/2026-garmin-run-korea-half-marathon">2026 가민런 코리아 일정·접수·코스 총정리</a>에서 확인하세요. 다른 가을 대회와 함께 일정을 짜려면 → <a href="/marathon">마라톤 캘린더</a></p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 메달·레이스 패키지·접수 일정은 가민코리아 공식 채널(@garmin_korea) 공개 정보 기준이며, 구성품·일정은 변경될 수 있으니 신청 전 공식 채널을 한 번 더 확인하세요.</p>
`,
  },
  {
    id: 'lotte-world-tower-skyrun-tower-running-guide',
    slug: 'lotte-world-tower-skyrun-tower-running-guide',
    title: '계단으로 하늘을 오른다 — 롯데월드타워 스카이런과 "타워러닝" 완전 입문 | 123층·2,917계단·555m, 수직 마라톤이란?',
    description: '롯데월드타워 스카이런은 123층·2,917개 계단·555m를 오르는 국내 대표 수직 마라톤입니다. 2026년 4월 대회는 성료됐지만, 계단 오르기 레이스(타워러닝)는 누구나 일상에서 준비할 수 있는 종목입니다. 타워러닝이란 무엇인지, 계단 운동의 효과와 주의점, 평소 훈련법, 그리고 내년 참가를 위한 접수 팁까지 정리했습니다.',
    thumbnail: '/images/blog/lotte-world-tower-skyrun-tower-running-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-04',
    category: 'guide' as const,
    readingTime: 9,
    tags: ['롯데월드타워 스카이런', '타워러닝', '수직 마라톤', '계단 오르기', '이색 마라톤', '계단 운동', '스카이레이스', '러닝 훈련'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>롯데월드타워 스카이런</strong>은 <strong>123층·2,917개 계단·높이 555m</strong>를 오르는 국내 대표 수직 마라톤입니다 — 2026년 대회는 <strong>4월 19일 성료</strong>(2,200명, 참가비 7만원)</li>
    <li>이런 <strong>"타워러닝(수직 마라톤)"</strong>은 짧지만 심박이 순식간에 치솟는 고강도 종목. 거리는 짧아도 <strong>심폐·하체 근력</strong> 요구가 일반 러닝과 완전히 다릅니다</li>
    <li>대회는 끝났지만 계단은 어디에나 있습니다 — <strong>평소 계단 훈련</strong>은 러너의 심폐·근력에도 큰 도움이 됩니다. 내년 참가를 노린다면 접수 방식(선착순+래플)만 알아두면 됩니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏢</span>
  <div class="callout-body">
    <p class="callout-title">"걸어서 하늘을 오르다" — 2,917개 계단 끝의 풍경</p>
    <p>2026년 4월 19일, 2,200명의 참가자가 <strong>롯데월드타워 1층부터 123층 전망대(555m)까지</strong> 오직 계단으로 올랐습니다. 총 <strong>2,917개</strong>의 계단을 밟는 이 대회는 "수직 마라톤(Vertical Marathon)"으로 불립니다. 올해는 휴머노이드 로봇 'ROY'가 계단을 완주해 화제가 되기도 했죠. 올해 대회는 끝났지만, <strong>타워러닝이라는 종목 자체</strong>는 알아둘 만합니다 — 도시 한복판에서 즐기는 가장 독특한 러닝이니까요.</p>
  </div>
</div>

<h2>타워러닝(수직 마라톤)이란</h2>
<p><strong>타워러닝(Tower Running)</strong>은 고층 빌딩의 계단을 최대한 빠르게 오르는 종목입니다. 수평으로 달리는 일반 러닝과 달리 <strong>오직 수직 상승</strong>만 합니다. 전 세계적으로 <strong>타워러닝 투어(Towerrunning Tour)</strong>, <strong>버티컬 월드 서킷(Vertical World Circuit)</strong> 같은 국제 시리즈가 있고, 엠파이어 스테이트 빌딩·상하이 타워 등 랜드마크에서 열립니다. 롯데월드타워 스카이런은 그 한국판인 셈이죠.</p>
<ul>
  <li><strong>거리는 짧다</strong>: 555m 상승은 수평 거리로 치면 짧지만, 시간은 보통 <strong>10~20분대</strong>(상급자는 더 빠름)에 끝납니다.</li>
  <li><strong>강도는 극단적이다</strong>: 시작하자마자 심박이 최대치 가까이 치솟아 끝까지 유지됩니다. "짧은 고통의 압축판"이죠.</li>
  <li><strong>장비가 단순하다</strong>: 평지가 없으니 <strong>가볍고 전족부 접지가 좋은 신발</strong>이 유리합니다.</li>
</ul>
<p>'수직으로 오른다'는 점에서 산을 빠르게 오르는 <a href="/blog/korea-trail-skyrace-guide-2026">스카이레이스</a>와 통하는 면이 있습니다 — 둘 다 상승력이 핵심입니다.</p>

<h2>계단 오르기, 몸에 좋을까 — 효과와 주의점</h2>
<p>계단 운동은 효율이 매우 높은 운동입니다. 다만 강도가 높은 만큼 주의도 필요합니다.</p>
<table>
  <thead>
    <tr><th>구분</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>심폐 강화</strong></td><td>짧은 시간에 최대심박 근처까지 올라 심폐 지구력·VO₂max 향상에 효율적</td></tr>
    <tr><td><strong>하체 근력</strong></td><td>대퇴사두·둔근·종아리를 집중 자극 — 러너의 업힐·막판 스퍼트 근력에 직결</td></tr>
    <tr><td><strong>관절 부담(주의)</strong></td><td>오를 때는 충격이 적지만, <strong>내려올 때</strong> 무릎 부담이 큼 → 하행은 엘리베이터 권장</td></tr>
    <tr><td><strong>심혈관 주의</strong></td><td>혈압·심박이 급상승 → 고혈압·심장질환자는 무리 금물, 전문의 상담 필요</td></tr>
  </tbody>
</table>
<p>계단에선 호흡이 금방 가빠집니다. 리듬 호흡으로 버티는 법은 → <a href="/blog/running-breathing-guide-korea">러닝 호흡법 완벽 가이드</a>, 무릎이 걱정이라면 → <a href="/blog/knee-pain-running-shoes">무릎 통증 러너를 위한 러닝화 선택법</a></p>

<h2>평소에 이렇게 훈련하자</h2>
<p>대회가 아니어도, 계단 훈련은 러너의 무기가 됩니다. 별도 장소 없이 아파트·지하철 계단으로 가능하죠.</p>
<ul>
  <li><strong>인터벌식으로</strong>: 한 번에 다 오르려 하지 말고, <strong>몇 개 층 빠르게 → 회복</strong>을 반복하세요. 막판 스퍼트 근력이 붙습니다.</li>
  <li><strong>한 칸씩 vs 두 칸씩</strong>: 한 칸씩은 심폐·리듬, 두 칸씩은 둔근·파워 강화. 번갈아 쓰면 좋습니다.</li>
  <li><strong>내려올 땐 걷거나 엘리베이터</strong>: 하행 반복은 무릎에 독입니다. 올라가는 것만 훈련으로 삼으세요.</li>
  <li><strong>주 1~2회면 충분</strong>: 강도가 높아 회복이 필요합니다. 평소 <a href="/blog/lsd-training-beginner-guide-korea">LSD 러닝</a>에 양념처럼 더하는 정도가 적당합니다.</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">🎟️</span>
  <div class="callout-body">
    <p class="callout-title">내년 참가를 노린다면 — 접수 방식만 기억하자</p>
    <p>2026년 대회는 <strong>2,200명 모집, 참가비 7만원</strong>이었고, 접수는 <strong>① 선착순(빠른 마감) ② 래플(무작위 추첨)</strong> 두 방식으로 진행됐습니다. 보호자와 아이가 함께 뛰는 <strong>키즈 스카이런</strong>(추첨·무료)도 있었죠. 보통 <strong>대회 약 한 달 전(3월경) 접수</strong>가 열리니, 내년에 노린다면 <strong>2~3월에 롯데온·롯데월드타워 공지</strong>를 챙기세요. 선착순은 빠르게 마감되므로 래플도 함께 노리는 게 안전합니다.</p>
  </div>
</div>

<h2>한 줄 결론</h2>
<p>롯데월드타워 스카이런은 "도시에서 하늘을 향해 달리는" 가장 이색적인 도전입니다. 올해 대회는 끝났지만, <strong>계단은 1년 내내 우리 곁에</strong> 있습니다. 엘리베이터 대신 계단을 택하는 작은 습관이, 다음 봄 555m 정상에서 마주할 풍경의 첫 걸음이 될 수 있어요. 다른 이색 도전이 궁금하다면 → <a href="/blog/seoul-dulle-trail-156km-ultra-fkt-guide">서울둘레길 156.5km 도시 100마일</a>도 함께 보세요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 대회 정보(일정·참가비·코스)는 2026년 기준 공개 보도와 롯데월드타워 공식 자료를 참고했습니다. 계단 운동 관련 내용은 일반적인 건강 정보로, 기저질환이 있다면 전문의와 상담하세요.</p>
`,
  },
  {
    id: 'seoul-dulle-trail-156km-ultra-fkt-guide',
    slug: 'seoul-dulle-trail-156km-ultra-fkt-guide',
    title: '서울을 하루에 한 바퀴 — 서울둘레길 156.5km "도시 100마일" 도전 | FKT·울트라 러닝이란? 그리고 우리는 이렇게 즐기는 법',
    description: '프랑스 울트라 러닝 브랜드 와이즈가 도봉산역에서 출발해 서울둘레길 156.5km를 한 번에 도는 "서울 트레일 FKT"에 도전했습니다. 산·도로·계단·한강·밤과 새벽이 이어지는 도시 100마일이란 무엇인지, FKT와 울트라 러닝의 개념, 그리고 일반 러너가 21개 코스를 나눠 완주하며 스탬프 인증으로 즐기는 법, 어떤 신발이 맞는지까지 정리했습니다.',
    thumbnail: '/images/blog/seoul-dulle-trail-156km-ultra-fkt-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-04',
    category: 'guide' as const,
    readingTime: 9,
    tags: ['서울둘레길', '울트라 러닝', 'FKT', '도시 100마일', '서울 트레일', '트레일 러닝', '장거리 러닝', '러닝 코스'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>프랑스 울트라 러닝 브랜드 <strong>와이즈(WAA)</strong>의 창립자들이 도봉산역에서 출발해 <strong>서울둘레길 156.5km를 한 번에 도는 "서울 트레일 FKT"</strong>에 도전했습니다 — 산·도로·계단·한강을, 밤과 새벽을 통과하는 "도시 100마일"</li>
    <li><strong>서울둘레길은 총 156.5km·21개 코스</strong>의 순환형 길. 한 번에 다 도는 건 극소수 울트라 러너의 영역이고, 일반 러너에겐 <strong>코스를 나눠 완주하며 28개 스탬프를 모으는 방식</strong>이 정답입니다</li>
    <li>이런 장거리엔 신발이 갈립니다 — <strong>트레일과 로드가 섞인 하이브리드 노면</strong>이라 쿠션·내구성·접지력의 균형이 중요합니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">"서울 둘레길 156.5km를 22시간에 완주할 수 있을까?"</p>
    <p>러너에게 서울은 출근길이나 익숙한 생활 배경이 아니라, <strong>산과 도로·계단과 한강·밤과 새벽이 이어지는 하나의 긴 코스</strong>가 됩니다. 프랑스 울트라 러닝 브랜드 <strong>와이즈 울트라 러닝</strong>의 두 창립자 기욤(Guillaume)과 악셀(Axelle)은 굿러너 컴퍼니와 함께, 도봉산역을 출발해 서울을 통째로 한 바퀴 도는 <strong>"서울 트레일 FKT"</strong>에 도전했습니다. 도시 한복판에서 펼쳐진 100마일(약 160km)급 도전이죠.</p>
  </div>
</div>

<h2>서울둘레길 156.5km란</h2>
<p>서울둘레길은 2014년 개통한 <strong>순환형 도보 여행길</strong>로, 서울 외곽의 산·하천·마을길을 이어 <strong>서울을 한 바퀴 감싸는 총 156.5km</strong> 코스입니다. 2024년 기존 8개 코스를 <strong>21개 코스로 세분화</strong>해, 코스당 평균 길이를 20km에서 8km로 줄였습니다. 평균 완주 시간도 코스당 8시간 → 약 3시간으로 짧아져 부담이 크게 줄었죠.</p>
<ul>
  <li><strong>가장 어려운 구간</strong>: 수락산 코스(1코스) — 암벽·계단식 절개면과 '채석장 전망대'의 독특한 경관</li>
  <li><strong>전망 명소</strong>: 망우·용마산 코스(4코스) — 용마산 스카이워크에서 서울 전경 조망</li>
  <li><strong>가족·꽃놀이</strong>: 안양천 코스(13~14코스) — 봄 벚꽃 명소, 평지라 입문 친화적</li>
</ul>
<p>도심 한강 코스만 달려봤다면, 둘레길의 산길은 완전히 다른 결입니다 → <a href="/blog/seoul-unique-running-courses-7">서울 이색 러닝 코스 7선</a></p>

<h2>"도시 100마일" — FKT라는 도전</h2>
<p><strong>FKT(Fastest Known Time)</strong>는 정해진 구간을 가장 빠르게 주파한 비공식 기록을 뜻합니다. 마라톤 같은 정식 대회가 아니라, <strong>러너가 스스로 코스를 정하고 시간을 측정</strong>하는 자유로운 형식이죠. 와이즈의 도전처럼 "서울둘레길 전 구간"을 한 번에 도는 것도 하나의 FKT 프로젝트입니다.</p>
<p>156.5km를 한 번에 달린다는 건 단순히 거리가 긴 게 아닙니다.</p>
<ul>
  <li><strong>밤을 통과한다</strong>: 22시간이면 해가 지고 다시 뜹니다. 헤드랜턴·야간 시야·졸음과 싸워야 합니다.</li>
  <li><strong>노면이 계속 바뀐다</strong>: 산악 트레일 → 계단 → 아스팔트 → 한강 둔치까지. 발과 신발에 가해지는 부하가 다채롭습니다.</li>
  <li><strong>보급이 생존이다</strong>: 수분·전해질·탄수화물을 끊임없이 채워야 합니다 → <a href="/blog/energy-gel-science-guide">에너지젤 성분 완벽 분석</a></li>
</ul>

<h2>울트라 러닝, 일반 러너와 뭐가 다를까</h2>
<p>보통 <strong>마라톤(42.195km)을 넘는 거리</strong>를 울트라 러닝이라 부릅니다. 50km·100km·100마일(약 160km)이 대표적이죠. 일반 러닝과 결정적으로 다른 점은:</p>
<ul>
  <li><strong>속도가 아니라 "계속 움직이기"</strong>가 목표 — 걷기와 달리기를 섞고, 보급·휴식을 전략적으로 배치합니다.</li>
  <li><strong>장비가 곧 안전</strong> — 배낭·물통·랜턴·여벌 양말까지. 와이즈 같은 브랜드가 장비를 강조하는 이유입니다.</li>
  <li><strong>멘탈 관리</strong>가 거리만큼 중요 — 긴 시간을 잘게 쪼개 "다음 보급지까지"로 버팁니다. 거리별 멘탈·페이스 전략은 → <a href="/blog/marathon-pacing-mental-strategy-guide">마라톤 페이스·멘탈 가이드</a></li>
</ul>
<p>트레일 러닝 자체가 처음이라면, 로드와 무엇이 다른지부터 → <a href="/blog/trail-running-appeal-beginner-guide-2026">트레일 러닝의 매력과 입문 가이드</a></p>

<div class="callout warning">
  <span class="callout-icon">🎯</span>
  <div class="callout-body">
    <p class="callout-title">우리는 이렇게 즐기자 — 156.5km를 "나눠서" 완주</p>
    <p>156.5km를 한 번에 도는 건 극소수 울트라 러너의 영역입니다. 일반 러너에게 서울둘레길의 진짜 매력은 <strong>21개 코스를 주말마다 하나씩</strong> 정복하는 데 있습니다. 코스마다 있는 <strong>28개 스탬프</strong>를 모두 찍으면 <strong>완주 인증서와 기념 배지</strong>를 받습니다. 한 번에 8km, 3시간이면 충분하니 입문자도 부담 없죠. "서울 한 바퀴"라는 같은 목표를, 내 페이스로 몇 달에 걸쳐 이루는 겁니다.</p>
  </div>
</div>

<h2>어떤 신발로 달려야 할까</h2>
<p>서울둘레길은 <strong>산길과 포장로가 섞인 하이브리드 노면</strong>이라 신발 선택이 까다롭습니다.</p>
<ul>
  <li><strong>산악 비중이 큰 코스(수락산·북한산·관악산 구간)</strong> → 접지력·발 보호가 중요한 <strong>트레일화</strong>. 카테고리별 추천은 → <a href="/blog/2026-best-trail-running-shoes">2026 트레일 러닝화 TOP 7</a></li>
  <li><strong>한강·안양천 등 포장로 위주</strong> → 쿠션·통기성 좋은 일반 데일리화로 충분합니다.</li>
  <li><strong>장시간·장거리</strong> → 발이 붓는 걸 감안해 <strong>반 사이즈 여유</strong>, 그리고 통기성·내구성을 챙기세요. 여름이라면 → <a href="/blog/summer-breathable-running-shoes-2026">여름 통기성 러닝화 TOP 10</a></li>
</ul>

<h2>한 줄 결론</h2>
<p>와이즈의 "서울 트레일 FKT"는 도시를 새로운 눈으로 보게 합니다. 우리가 매일 지나치는 서울이, 누군가에겐 산과 한강·밤과 새벽이 이어지는 160km짜리 모험이 되는 거죠. 그 도전을 응원하되, 우리는 우리 방식으로 — <strong>21개 코스를 하나씩, 스탬프를 모으며</strong> 서울을 한 바퀴 완성해보면 어떨까요.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 와이즈 울트라 러닝의 서울 트레일 FKT 도전은 온큐레이션(@oncuration)·굿러너 컴퍼니(@goodrunner_co)의 공개 콘텐츠를 참고했으며, 서울둘레길 코스 정보는 서울시 공식 자료를 바탕으로 했습니다.</p>
`,
  },
  {
    id: 'hot-weather-summer-running-safety-guide-korea',
    slug: 'hot-weather-summer-running-safety-guide-korea',
    title: '폭염 러닝 안전 가이드 | "몇 도부터 뛰면 위험할까" — 심부체온·WBGT·수분 전략과 열사병 막는 법 (한국 여름 기준)',
    description: '한국 여름은 고온다습에 열대야까지 겹쳐 러닝 중 열질환 위험이 큽니다. 기온이 아니라 습도·복사열을 합친 WBGT로 판단해야 하는 이유, 심부체온이 40°C를 넘으면 벌어지는 일, 시간당 수분·전해질 보충량, 새벽런 vs 야간런, 그리고 열탈진·열사병·저나트륨혈증을 구분하고 대처하는 법까지 — 무더위에 안전하게 달리는 실전 가이드입니다.',
    thumbnail: '/images/blog/hot-weather-summer-running-safety-guide-korea.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-04',
    category: 'guide' as const,
    readingTime: 11,
    tags: ['폭염 러닝', '여름 러닝', '열사병 예방', '러닝 수분 보충', '전해질', 'WBGT', '새벽 러닝', '열질환'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>여름 러닝의 위험은 <strong>기온이 아니라 습도</strong>에서 옵니다. 땀이 증발해야 체온이 떨어지는데, 습하면 증발이 막혀 <strong>심부체온이 급상승</strong> — 그래서 기온·습도·복사열을 합친 <strong>WBGT(폭염 지수)</strong>로 판단해야 합니다</li>
    <li>심부체온이 <strong>40°C</strong>를 넘으면 <strong>열사병</strong>(생명 위협)입니다. 그 전 단계인 <strong>열탈진</strong>(어지럼·메스꺼움·식은땀) 신호가 오면 <strong>즉시 멈추고 식혀야</strong> 합니다</li>
    <li>핵심 대비는 <strong>① 시간대 회피(새벽·야간) ② 강도 낮추기 ③ 시간당 0.5~1L 수분 + 전해질 ④ 통기성 복장</strong>. 단, 물만 과음하면 <strong>저나트륨혈증</strong>이라는 또 다른 위험이 있습니다</li>
  </ul>
</div>

<div class="callout warning">
  <span class="callout-icon">🌡️</span>
  <div class="callout-body">
    <p class="callout-title">한국 여름은 "더운" 게 아니라 "습해서" 위험합니다</p>
    <p>유럽·미국 서부의 35°C와 한국의 31°C는 몸이 받는 부담이 다릅니다. 한국 여름은 <strong>습도가 높아</strong> 땀이 증발하지 못하고 흐르기만 하죠. 땀은 <strong>증발할 때</strong> 체온을 떨어뜨리는데, 습하면 이 냉각 시스템이 고장 납니다. 결과적으로 같은 기온이라도 <strong>한국에서 심부체온이 더 빨리, 더 높이</strong> 오릅니다. "어제는 괜찮았는데 오늘 갑자기 힘들다"면 기온이 아니라 <strong>습도가 올랐을 가능성</strong>이 큽니다.</p>
  </div>
</div>

<h2>몇 도부터 위험할까 — 기온 말고 WBGT</h2>
<p>날씨 앱의 기온만 보면 안 됩니다. 운동 안전의 국제 표준은 <strong>WBGT(Wet Bulb Globe Temperature, 습구흑구온도)</strong>입니다. 기온 + <strong>습도</strong> + <strong>직사광선(복사열)</strong>을 모두 반영한 "체감 열 스트레스" 지수죠. 한국 기상청도 여름철 <strong>WBGT 기반 더위 단계와 운동 지침</strong>을 제공합니다.</p>
<ul>
  <li><strong>관심·주의 단계</strong>: 평소대로 뛰되 수분을 의식적으로 챙깁니다.</li>
  <li><strong>경고 단계</strong>: 강도를 낮추고 거리를 줄이며, 그늘·시간대를 적극 활용합니다.</li>
  <li><strong>위험 단계(통상 WBGT 31°C 이상)</strong>: <strong>야외 러닝을 피하는 것</strong>이 원칙입니다. 실내 트레드밀이나 휴식으로 전환하세요.</li>
</ul>
<p>WBGT는 기상청·날씨 앱의 "더위체감지수/온열질환 지수"로 확인할 수 있습니다. 같은 30°C라도 <strong>습도 80%와 50%는 완전히 다른 날</strong>이라는 점만 기억하면 됩니다.</p>

<h2>심부체온이 40°C를 넘으면 — 열질환 3단계</h2>
<p>여름 러닝 사고는 대부분 <strong>심부체온(몸 속 온도) 상승</strong>에서 시작됩니다. 단계별 신호를 알아야 제때 멈춥니다.</p>
<table>
  <thead>
    <tr><th>단계</th><th>심부체온 기준</th><th>주요 신호</th><th>대처</th></tr>
  </thead>
  <tbody>
    <tr><td><strong>열경련</strong></td><td>정상~약간 상승</td><td>종아리·허벅지 근육 경련, 다량 발한</td><td>멈추고 전해질·수분 보충, 스트레칭</td></tr>
    <tr><td><strong>열탈진</strong></td><td>38°C 초과~40°C 미만</td><td>어지럼·두통·메스꺼움, 빠른 맥박, <strong>차갑고 끈끈한 식은땀</strong>, 무력감</td><td><strong>즉시 중단</strong>, 그늘·시원한 곳, 눕고 다리 올리기, 수분</td></tr>
    <tr><td><strong>열사병 🚨</strong></td><td><strong>40°C 초과</strong></td><td>혼란·헛소리, 의식 저하, <strong>땀이 멈추고 피부가 뜨겁고 건조</strong>, 경련</td><td><strong>119 즉시 신고</strong>, 몸을 적극 냉각하며 구조 대기</td></tr>
  </tbody>
</table>
<div class="callout info">
  <span class="callout-icon">❗</span>
  <div class="callout-body">
    <p class="callout-title">가장 중요한 경고 신호: "땀이 멈췄다"</p>
    <p>열탈진까지는 땀을 흘리지만, <strong>열사병으로 넘어가면 땀이 멈추고 피부가 건조·뜨거워집니다</strong>. 이건 몸의 냉각 시스템이 붕괴했다는 응급 신호입니다. 또 <strong>오한(춥다는 느낌)·소름</strong>이 더운 날 달리는 중에 온다면 위험 신호이니 즉시 멈추세요.</p>
  </div>
</div>

<h2>수분·전해질 — 많이 마신다고 좋은 게 아니다</h2>
<p>탈수도 위험하지만, <strong>물만 과하게</strong> 마시는 것도 위험합니다. 둘 다 피하는 균형이 핵심입니다.</p>
<ul>
  <li><strong>얼마나</strong>: 더운 날 러닝 중 <strong>시간당 약 0.5~1L</strong>가 일반적 기준입니다. 다만 발한량은 개인차가 커서, <strong>운동 전후 체중을 재서 빠진 만큼</strong> 채우는 게 가장 정확합니다(빠진 1kg ≈ 물 1L 손실).</li>
  <li><strong>전해질</strong>: <strong>60~90분을 넘는 러닝</strong>이나 땀을 많이 흘리는 날은 물에 <strong>나트륨 등 전해질</strong>을 더하세요. 땀으로 나트륨이 빠지는데 맹물만 보충하면 농도가 더 희석됩니다.</li>
  <li><strong>저나트륨혈증 주의</strong>: <strong>시간당 1.4L를 초과</strong>하는 과도한 물 섭취는 혈중 나트륨을 위험하게 떨어뜨려 <strong>메스꺼움·혼란·경련</strong>을 일으킬 수 있습니다(물 중독). "무조건 많이"가 아니라 <strong>땀 흘린 만큼 + 전해질</strong>이 정답입니다.</li>
  <li><strong>소변 색 체크</strong>: <strong>옅은 노란색</strong>이 이상적입니다. 진한 노랑이면 부족, 완전 무색이면 과음 신호입니다.</li>
</ul>
<p>장거리에서 젤·전해질을 함께 쓴다면 → <a href="/blog/energy-gel-science-guide">에너지젤 성분 완벽 분석</a>을 참고하세요.</p>

<h2>실전 — 여름에 안전하게 달리는 6가지</h2>
<ul>
  <li><strong>① 시간대를 옮긴다</strong>: 가장 강력한 대비책. <strong>일출 직후(새벽)</strong>가 기온·복사열이 가장 낮습니다. 야간런은 시원하지만 <strong>열대야로 습도가 높고</strong> 낮 동안 달궈진 아스팔트 복사열이 남아있어 새벽보다 불리할 수 있습니다.</li>
  <li><strong>② 강도를 낮춘다</strong>: 같은 페이스도 더위에선 심박이 더 오릅니다. 여름엔 기록 욕심을 내려놓고 <strong>대화 가능한 저강도(Zone 2)</strong> 위주로 → <a href="/blog/running-fat-loss-zone2-guide">Zone 2 가이드</a>. 더위 적응에는 2주 정도 걸립니다.</li>
  <li><strong>③ 통기성 복장·신발</strong>: 땀 배출이 생명입니다. 밝은색·흡습속건 옷, 통기성 좋은 메쉬 러닝화로 → <a href="/blog/summer-breathable-running-shoes-2026">여름 통기성 러닝화 TOP 10</a></li>
  <li><strong>④ 머리·목을 식힌다</strong>: 챙모자·선글라스로 직사광선을 막고, 얼음·쿨토시로 목덜미·손목(굵은 혈관)을 식히면 체감 온도가 크게 낮아집니다.</li>
  <li><strong>⑤ 코스를 바꾼다</strong>: 그늘·강변·숲길 위주로. 아스팔트·복사열 강한 도심 직선 코스는 피하세요.</li>
  <li><strong>⑥ 무리하지 않는다</strong>: 컨디션 난조·전날 음주·수면 부족이면 <strong>쉬는 게 훈련</strong>입니다. 여름 며칠 빠진다고 실력이 사라지지 않습니다.</li>
</ul>

<div class="callout info">
  <span class="callout-icon">🌧️</span>
  <div class="callout-body">
    <p class="callout-title">장마철이라면 — 비는 오히려 기회일 수도</p>
    <p>기온이 떨어진 비 오는 날은 폭염보다 달리기 좋을 수 있습니다. 다만 미끄럼·젖은 발 관리가 관건이죠. 우중런 준비물과 비 맞은 러닝화 관리는 → <a href="/blog/rainy-season-running-guide-korea">장마철 러닝 완전 가이드</a>에서 따로 다룹니다.</p>
  </div>
</div>

<h2>한 줄 결론</h2>
<p>여름 러닝의 원칙은 단순합니다. <strong>기온이 아니라 WBGT로 판단하고, 시간대를 옮기고, 강도를 낮추고, 땀 흘린 만큼 전해질과 함께 보충하라.</strong> 그리고 어지럼·메스꺼움·오한·땀 멈춤 같은 신호가 오면 <strong>기록이고 뭐고 즉시 멈추세요</strong>. 무더위는 매년 돌아오지만, 몸은 하나뿐입니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 글은 Mayo Clinic, OSHA, ACSM 등의 일반 열질환·운동 안전 지침을 종합한 것으로, 개인의 건강 상태에 따른 의학적 처방을 대체하지 않습니다. 심혈관 질환·고령·기저질환이 있다면 무더위 운동 전 전문의와 상의하세요.</p>
`,
  },
  {
    id: 'joyce-hubner-367-consecutive-marathons-world-record',
    slug: 'joyce-hubner-367-consecutive-marathons-world-record',
    title: '매일 풀코스 367일, 그리고 멈추지 않는다 | 독일 러너 조이스 휘브너의 세계기록 — "495일·21,000km" 도전의 진실과 매일 마라톤의 과학',
    description: '독일의 38세 러너 조이스 휘브너가 367일 연속 마라톤 풀코스 완주로 여성 세계기록을 경신했습니다. 기존 기록(벨기에 힐데 도소뉴 366일)을 넘겼지만 도전은 진행 중 — 최종 목표는 495일·21,000km·독일 2,000개 도시 잇기입니다. 그녀가 누구인지, 어떻게 매일 버티는지, 그리고 "매일 마라톤"이 몸에 무슨 일을 일으키는지(왜 일반 러너는 따라 하면 안 되는지)를 과학적으로 풀어봅니다.',
    thumbnail: '/images/blog/joyce-hubner-367-consecutive-marathons-world-record.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-04',
    category: 'news' as const,
    readingTime: 9,
    tags: ['조이스 휘브너', '연속 마라톤 세계기록', '매일 마라톤', '울트라 러닝', '마라톤 회복', '러닝 동기부여', '러닝 과학', '러너 스토리'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>독일 38세 러너 <strong>조이스 휘브너</strong>가 6월 2일 <strong>367일 연속 마라톤 풀코스(42.195km)</strong> 완주로 여성 세계기록을 경신했습니다 — 기존 기록(벨기에 힐데 도소뉴 366일)을 하루 넘긴 순간</li>
    <li>놀랍게도 <strong>도전은 아직 진행 중</strong>. 최종 목표는 <strong>495일 연속·총 21,000km</strong>로 독일 2,000개 도시·마을을 잇는 것, 오는 <strong>10월 8일 베를린</strong>에서 피니시 예정입니다</li>
    <li>단일 마라톤도 몸이 회복하는 데 <strong>1~2주</strong>가 필요합니다. 매일 달리는 그녀의 비결은 "기록이 아닌 완주", 데이터 모니터링과 전담 팀 — <strong>일반 러너가 따라 할 일이 절대 아닙니다</strong></li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🇩🇪</span>
  <div class="callout-body">
    <p class="callout-title">기록은 깨졌고, 그녀는 여전히 달리는 중입니다</p>
    <p>2026년 6월 2일, 독일 니더작센주의 작은 길 위에서 한 여성이 <strong>367번째 마라톤</strong>을 완주했습니다. 그냥 367번이 아니라 <strong>367일 동안 하루도 빠짐없이</strong> 매일 42.195km를 달린 끝의 한 걸음이었죠. 이 순간 그녀는 여성 연속 마라톤 세계기록을 새로 썼습니다. 그런데 더 놀라운 건 — 그녀가 아직 <strong>멈추지 않았다</strong>는 사실입니다.</p>
  </div>
</div>

<h2>조이스 휘브너는 누구인가</h2>
<p>조이스 휘브너(Joyce Hübner, 38세)는 베를린을 기반으로 활동하는 러닝 인플루언서이자 울트라 러너입니다. 의외인 건 그녀가 <strong>타고난 엘리트 선수가 아니라는 점</strong>입니다.</p>
<ul>
  <li><strong>달리기를 시작한 건 불과 11년 전</strong>, 첫 마라톤 완주는 2018년이었습니다.</li>
  <li>2023년에는 <strong>독일 국경을 따라 143일간 120회 마라톤</strong>을 달리는 도전을 완수했습니다.</li>
  <li>이후 <strong>마요르카 섬 한 바퀴</strong>를 돈 뒤, 가장 야심 찬 목표인 "독일 전역 잇기"에 도전하고 있습니다.</li>
</ul>
<p>즉, 평범하게 시작해 차근차근 거리를 쌓아 올린 러너가 만들어낸 기록이라는 점에서 더 큰 울림을 줍니다.</p>

<h2>367일이라는 숫자의 의미</h2>
<p>이번 기록의 무게를 이해하려면 몇 가지 맥락이 필요합니다.</p>
<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td>기존 세계기록</td><td>벨기에 러너 힐데 도소뉴 — <strong>366일</strong> 연속(2024년 윤년에 매일 완주)</td></tr>
    <tr><td>조이스의 기록</td><td><strong>367일</strong> 연속(2026년 6월 2일 경신, 진행 중)</td></tr>
    <tr><td>시작일</td><td>2025년 6월 1일, 독일 헬름슈테트</td></tr>
    <tr><td>최종 목표</td><td><strong>495일</strong> 연속 · 독일 도시·마을 <strong>2,000곳</strong> · 총 <strong>약 21,000km</strong></td></tr>
    <tr><td>피니시 예정</td><td>2026년 <strong>10월 8일 베를린</strong></td></tr>
  </tbody>
</table>
<p>21,000km는 서울에서 부산까지(약 400km)를 <strong>52번 왕복</strong>하는 거리입니다. 그것도 매일 멈추지 않고, 1년 4개월 넘게요.</p>

<h2>매일 마라톤, 몸에는 무슨 일이 일어날까</h2>
<p>여기서부터가 러너라면 진짜 궁금한 부분입니다. <strong>마라톤을 매일 뛰는 게 신체적으로 가능한 일</strong>일까요?</p>
<p>의학 연구가 말하는 답은 분명합니다. <strong>단 한 번의 마라톤</strong>만으로도 몸에는 상당한 부하가 걸립니다.</p>
<ul>
  <li>달릴 때마다 다리뼈는 미세하게 손상되고, 근섬유는 찢어집니다. 이 손상은 <strong>쉬고 자고 먹는 동안</strong> 회복되며 더 강해집니다 — 즉 <strong>회복이 곧 훈련</strong>입니다.</li>
  <li>마라톤 직후 심장·신장·간 등의 바이오마커에 이상 신호가 나타나며, 보통 <strong>1~3일</strong> 내 변화가 가장 크고 <strong>1주</strong> 안에 정상화됩니다.</li>
  <li>내분비계와 대사가 <strong>완전히 회복</strong>되는 데에는 <strong>1~2주</strong>가 걸립니다.</li>
</ul>
<p>다시 말해, 정석대로라면 <strong>마라톤 한 번 뛰고 1~2주는 회복</strong>해야 합니다. 조이스는 그 회복 기간을 <strong>0일</strong>로 두고 367일을 버틴 셈입니다. 의학 연구조차 "매일 마라톤"은 다루지 않는데, <strong>충분한 회복을 원천적으로 막아 매우 위험</strong>하기 때문입니다.</p>

<h3>그럼 그녀는 어떻게 버틸까</h3>
<p>핵심은 <strong>"기록 경쟁이 아니라 완주"</strong>라는 데 있습니다. 1년 4개월을 가야 하므로 매일을 전력으로 달릴 수 없습니다. 보도에 따르면 그녀조차 흔히 말하는 <strong>'러너스 하이'를 거의 느끼지 못한다</strong>고 할 만큼, 속도를 낮춰 몸에 가는 충격을 관리합니다. 여기에:</p>
<ul>
  <li><strong>전담 서포트 팀</strong>이 이동·보급·컨디션을 챙기고,</li>
  <li><strong>웨어러블(COROS) 데이터</strong>로 심박·부하·회복 상태를 매일 모니터링하며,</li>
  <li>지속 가능한 <strong>영양 보충 루틴</strong>으로 매일의 에너지·전해질을 채웁니다.</li>
</ul>
<p>철저한 페이스 관리·모니터링·팀 지원이 받쳐주기에 가능한, <strong>극도로 통제된 도전</strong>이라는 뜻입니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">감동은 받되, 절대 따라 하지 마세요</p>
    <p>이런 기록은 영감을 주지만, <strong>일반 러너가 흉내 낼 영역이 아닙니다</strong>. 회복 없이 누적되는 부하는 피로 골절·건염·면역 저하·심장 부담으로 이어집니다. "매일 뛰어야 는다"는 흔한 오해는 오히려 부상으로 가는 지름길입니다. 초보일수록 <strong>주 3~4회 + 회복일</strong>이 정답입니다. 페이스부터 잡고 싶다면 <a href="/blog/lsd-training-beginner-guide-korea">LSD 훈련 입문 가이드</a>를, 무릎이 걱정이라면 <a href="/blog/knee-pain-running-shoes">무릎 통증 러너를 위한 러닝화 선택법</a>을 참고하세요.</p>
  </div>
</div>

<h2>우리가 가져갈 진짜 교훈</h2>
<p>조이스의 도전에서 일반 러너가 배울 건 "매일 풀코스"가 아니라, 그 <strong>밑에 깔린 원칙</strong>들입니다.</p>
<ul>
  <li><strong>강도보다 꾸준함</strong> — 그녀는 매일을 전력으로 달리지 않습니다. 느리게, 그러나 멈추지 않죠. 아마추어에게도 <strong>편한 페이스의 누적 거리</strong>가 실력을 만듭니다.</li>
  <li><strong>회복과 데이터를 신뢰한다</strong> — 감이 아니라 심박·부하 데이터로 몸 상태를 읽습니다. 부상 없이 볼륨을 늘리는 접근은 <a href="/blog/nsm-norwegian-singles-method-training">노르웨이식 훈련법(NSM)</a>의 철학과도 통합니다.</li>
  <li><strong>목표를 잘게 쪼갠다</strong> — 495일이라는 거대한 숫자도 결국 "오늘 하루"의 반복입니다. 풀코스 완주 전략을 거리별로 나누는 법은 <a href="/blog/marathon-pacing-mental-strategy-guide">마라톤 페이스·멘탈 가이드</a>에서 다룹니다.</li>
</ul>
<p>10월 8일 베를린에서 그녀가 495번째 피니시 라인을 통과하는 순간까지, 멈추지 않는 조이스 휘브너의 여정에 응원을 보냅니다. 그리고 우리는 우리 페이스대로, 오늘 하루의 러닝을 꾸준히 이어가면 됩니다.</p>

<p style="font-size:0.85em;color:#64748b;margin-top:2em;">※ 본 기사는 동마클럽(@dongmaclub) 및 해외 매체(Yahoo Sports, SRF, t-online 등) 보도를 종합·재구성했습니다. 회복·신체 영향 관련 내용은 일반적인 의학 정보이며, 개인의 운동 처방을 대체하지 않습니다.</p>
`,
  },
  {
    id: 'summer-breathable-running-shoes-2026',
    slug: 'summer-breathable-running-shoes-2026',
    title: '여름에 발이 안 무르는 통기성 러닝화 TOP 10 | 메쉬 어퍼·배수·경량 — 한국 무더위·장마 기준 카테고리별 베스트',
    description: '한국 여름은 고온다습 + 장마라 통기성이 안 좋은 러닝화는 발이 무르고 물집·악취로 이어집니다. RunRepeat 통기성(breathability) 점수와 어퍼 소재를 기준으로, 우리 DB에서 통기성 최상위급 러닝화 10종을 입문·데일리·쿠션·안정·레이싱 카테고리별로 정리했습니다. 무게·가격·발볼까지 한국 러너 기준으로 비교합니다.',
    thumbnail: '/images/blog/summer-breathable-running-shoes-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-04',
    category: 'guide' as const,
    readingTime: 10,
    tags: ['여름 러닝화', '통기성 러닝화', '메쉬 어퍼', '여름 러닝', '경량 러닝화', '러닝화 추천', '장마 러닝', '발 무름 방지'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li>한국 여름은 <strong>고온다습 + 장마</strong>라, 통기성이 떨어지는 러닝화는 땀과 습기가 갇혀 <strong>발 무름·물집·악취</strong>로 직결됩니다 — 여름엔 쿠션보다 <strong>통기성과 무게</strong>가 우선순위</li>
    <li>러닝화 통기성은 감이 아니라 <strong>RunRepeat 통기성 점수(1~5)와 어퍼 소재(엔지니어드 메쉬)</strong>로 확인할 수 있습니다 — 이 글의 10종은 모두 <strong>통기성 4~5/5 최상위급</strong></li>
    <li><strong>입문·데일리·쿠션·안정·레이싱</strong> 카테고리별로 나눴으니, 내 목적에 맞는 걸 고르세요. 여름 한정이라면 <strong>가벼운 데일리 통기화</strong>가 가장 무난합니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">☀️</span>
  <div class="callout-body">
    <p class="callout-title">여름엔 왜 "통기성"이 1순위가 될까</p>
    <p>한국 여름은 기온도 높지만 <strong>습도</strong>가 진짜 문제입니다. 발은 운동 중 컵 하나 분량(약 200ml)의 땀을 흘리는데, 통기성이 나쁜 어퍼는 이 땀과 습기를 가둡니다. 젖은 양말 + 마찰 = <strong>물집</strong>, 습한 환경 = <strong>무좀·악취</strong>, 무거워진 신발 = <strong>체온 상승과 피로</strong>로 이어지죠. 겨울엔 보온이 미덕이지만, 여름엔 <strong>땀을 얼마나 빨리 내보내느냐</strong>가 신발의 핵심 경쟁력이 됩니다. 장마철 우중런이라면 통기성과 함께 <strong>배수(물이 빠지는 능력)</strong>도 같이 봐야 합니다 → <a href="/blog/rainy-season-running-guide-korea">장마철 러닝 완전 가이드</a></p>
  </div>
</div>

<h2>러닝화 통기성, 어떻게 확인하나</h2>
<p>"메쉬니까 시원하겠지"는 너무 막연합니다. 통기성은 <strong>데이터로 검증</strong>할 수 있습니다.</p>
<ul>
  <li><strong>RunRepeat 통기성 점수(1~5)</strong>: 랩에서 신발 안에 연기를 넣고 어퍼로 빠져나가는 정도를 측정합니다. <strong>5/5면 빛이 비칠 만큼 뚫린 구조</strong>, 1/2면 방수·겨울용에 가깝습니다. 이 글의 10종은 전부 4~5점.</li>
  <li><strong>어퍼 소재</strong>: 같은 메쉬라도 "엔지니어드 메쉬"는 부위별로 구멍 밀도를 설계해 통기성과 지지력을 동시에 잡습니다. 니트·방수 멤브레인(GTX)은 여름엔 피하세요.</li>
  <li><strong>무게</strong>: 통기성 좋은 어퍼는 대체로 가볍습니다. 여름엔 발이 붓기 쉬워 <strong>가벼운 신발</strong>이 체감 피로를 크게 줄입니다.</li>
</ul>
<p>광고 문구가 아니라 이런 <strong>랩 데이터로 고르는 법</strong>은 따로 정리해뒀습니다 → <a href="/blog/running-shoe-data-not-marketing-guide-2026">광고에 속지 말고 데이터로 고르세요</a></p>

<h2>여름 통기성 러닝화 TOP 10 — 카테고리별</h2>

<h3>① 입문·데일리 가성비 — "여름 한정으로 부담 없이"</h3>
<p>매일 신고 막 뛰기 좋은 15~18만원대. 여름철 첫 러닝화나 "장마용 막신"으로도 딱입니다.</p>
<table>
  <thead>
    <tr><th>모델</th><th>통기성</th><th>무게</th><th>가격</th><th>한줄평</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/saucony-ride-18">사우코니 라이드 18</a></td><td>5/5</td><td>255g</td><td>15.9만</td><td>여름 데일리 가성비 정답. 통기성·쿠션 균형 최고</td></tr>
    <tr><td><a href="/shoes/saucony-ride-19">사우코니 라이드 19</a></td><td>5/5</td><td>255g</td><td>17.9만</td><td>18의 후속, 더 부드러워진 쿠션 + 통기성 유지</td></tr>
    <tr><td><a href="/shoes/nike-pegasus-41">나이키 페가수스 41</a></td><td>우수</td><td>281g</td><td>15.9만</td><td>국민 데일리화. 엔지니어드 메쉬로 여름도 무난</td></tr>
    <tr><td><a href="/shoes/puma-velocity-nitro-4">푸마 벨로시티 나이트로 4</a></td><td>최상</td><td>224g</td><td>17.9만</td><td>224g 경량 + 통기성. 단 토박스 좁아 발볼 넓으면 주의</td></tr>
  </tbody>
</table>
<p>첫 러닝화로 고민 중이라면 → <a href="/blog/first-running-shoe-guide-2026">초보 러너 인생 첫 러닝화 가이드</a></p>

<h3>② 경량 데일리·템포 — "빠른 페이스도 시원하게"</h3>
<p>가볍고 통기성 좋아 여름 인터벌·템포런에 최적. 발이 더 붓는 여름엔 이 가벼움이 체감으로 옵니다.</p>
<table>
  <thead>
    <tr><th>모델</th><th>통기성</th><th>무게</th><th>가격</th><th>한줄평</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/saucony-kinvara-16">사우코니 킨바라 16</a></td><td>5/5</td><td>198g</td><td>15.9만</td><td>198g 최경량. 여름 스피드 훈련용 1순위</td></tr>
    <tr><td><a href="/shoes/hoka-mach-6">호카 마하 6</a></td><td>최상</td><td>232g</td><td>18.5만</td><td>경량 + 통기성 + 적당한 반발. 만능 여름 데일리</td></tr>
    <tr><td><a href="/shoes/saucony-endorphin-speed-5">사우코니 엔돌핀 스피드 5</a></td><td>5/5</td><td>241g</td><td>21.9만</td><td>나일론 플레이트 템포화. 여름 템포런도 쾌적</td></tr>
    <tr><td><a href="/shoes/on-cloudflow-5">온 클라우드플로우 5</a></td><td>4/5</td><td>278g</td><td>21.9만</td><td>탄탄한 반발 + 통기성. 도심 데일리·템포 겸용</td></tr>
  </tbody>
</table>

<h3>③ 쿠션화 — "여름 장거리 LSD도 쾌적하게"</h3>
<p>두툼한 쿠션화는 통기성이 떨어지기 쉬운데, 아래 3종은 <strong>맥스 쿠션 + 통기성</strong>을 동시에 잡았습니다.</p>
<table>
  <thead>
    <tr><th>모델</th><th>통기성</th><th>무게</th><th>가격</th><th>한줄평</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/brooks-glycerin-22">브룩스 글리세린 22</a></td><td>5/5</td><td>293g</td><td>20.9만</td><td>통기성 5/5 + 무릎 보호 최상급. 여름 LSD 명품</td></tr>
    <tr><td><a href="/shoes/puma-magnify-nitro-3">푸마 매그니파이 나이트로 3</a></td><td>최상</td><td>264g</td><td>19.9만</td><td>두툼한 쿠션 대비 가볍고 시원한 가성비 쿠션화</td></tr>
    <tr><td><a href="/shoes/brooks-glycerin-max">브룩스 글리세린 맥스</a></td><td>5/5</td><td>305g</td><td>23.9만</td><td>맥스 쿠션 + 와이드 토박스. 발볼 넓은 러너 환영</td></tr>
  </tbody>
</table>

<h3>④ 안정화 — "평발·과내전인데 여름엔 시원하게"</h3>
<p>안정화는 지지 구조 때문에 답답하기 쉽지만, 아래 2종은 통기성 5/5를 확보했습니다.</p>
<table>
  <thead>
    <tr><th>모델</th><th>통기성</th><th>무게</th><th>가격</th><th>한줄평</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/saucony-guide-18">사우코니 가이드 18</a></td><td>5/5</td><td>278g</td><td>15.9만</td><td>가성비 안정화 + 통기성. 입문 평발 러너에 추천</td></tr>
    <tr><td><a href="/shoes/brooks-glycerin-gts-22">브룩스 글리세린 GTS 22</a></td><td>5/5</td><td>305g</td><td>20.9만</td><td>글리세린 22의 안정화 버전. 부드러운 지지 + 통기성</td></tr>
  </tbody>
</table>
<p>발볼 넓은 한국 러너라면 토박스 너비도 꼭 확인하세요 → <a href="/blog/wide-feet-running-shoes-korea">발볼 넓은 한국인을 위한 러닝화 TOP 10</a></p>

<h3>⑤ 레이싱 — "여름 대회·기록 도전"</h3>
<p>여름 대회는 거의 없지만, 가을 시즌을 통기성 좋은 카본화로 준비한다면:</p>
<table>
  <thead>
    <tr><th>모델</th><th>통기성</th><th>무게</th><th>가격</th><th>한줄평</th></tr>
  </thead>
  <tbody>
    <tr><td><a href="/shoes/brooks-hyperion-elite-5">브룩스 하이페리온 엘리트 5</a></td><td>5/5</td><td>204g</td><td>29.9만</td><td>통기성 5/5 카본 레이서. 겨울에 8%만 단단해져 사계절 OK</td></tr>
  </tbody>
</table>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">신발만 시원해선 부족 — 여름 러닝 3가지 디테일</p>
    <ul>
      <li><strong>양말이 절반이다</strong>: 아무리 통기성 좋은 신발도 면양말이면 땀이 갇힙니다. <strong>쿨맥스·메리노 같은 흡습속건 소재</strong>로 바꾸면 물집이 크게 줍니다.</li>
      <li><strong>배수 ≠ 방수</strong>: 장마철엔 방수(GTX)보다 <strong>물이 빨리 빠지는 메쉬</strong>가 낫습니다. 방수화는 한번 물이 들어오면 안 빠져 더 무겁습니다.</li>
      <li><strong>여름엔 반 사이즈 여유</strong>: 더위에 발이 붓기 때문에, 통기성 좋은 신발이라도 꽉 끼면 물집·발톱 멍이 생깁니다.</li>
    </ul>
  </div>
</div>

<h2>한 줄 결론 — 여름엔 이렇게 고르세요</h2>
<ul>
  <li><strong>여름 한정 막신/입문</strong> → <a href="/shoes/saucony-ride-18">라이드 18</a> (15.9만, 통기성 5/5 가성비)</li>
  <li><strong>가볍게 매일 + 가끔 빠르게</strong> → <a href="/shoes/hoka-mach-6">마하 6</a> 또는 <a href="/shoes/saucony-kinvara-16">킨바라 16</a></li>
  <li><strong>무릎 보호 + 여름 장거리</strong> → <a href="/shoes/brooks-glycerin-22">글리세린 22</a></li>
  <li><strong>평발·안정성 필요</strong> → <a href="/shoes/saucony-guide-18">가이드 18</a></li>
</ul>
<p>여름은 러닝화의 약점이 가장 잘 드러나는 계절입니다. 통기성 데이터를 확인하고 양말·사이즈까지 챙기면, 무더위 속에서도 쾌적하게 거리를 늘릴 수 있습니다.</p>
`,
  },
  {
    id: 'celebrity-runners-shoe-choices-guide',
    slug: 'celebrity-runners-shoe-choices-guide',
    title: '연예인들은 러닝할 때 어떤 신발 신을까 | "스타 따라 사기" 전에 — 셀럽이 고르는 러닝화 3유형과 내 발에 맞추는 법',
    description: '러닝이 셀럽들의 라이프스타일로 자리 잡으며 "그 연예인이 신은 러닝화"에 관심이 쏠립니다. 셀럽들이 고르는 러닝화를 기록용 슈퍼슈즈·프리미엄 데일리·맥스 쿠션 3유형으로 나눠 RunRepeat 데이터 관점에서 정리하고, "스타가 신었다고 나에게 맞는 건 아니다" — 내 발·실력에 맞게 고르는 법까지 안내합니다.',
    thumbnail: '/images/blog/celebrity-runners-shoe-choices-guide.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-02',
    category: 'guide' as const,
    readingTime: 9,
    tags: ['셀럽 러닝화', '연예인 러닝', '러닝 트렌드', '슈퍼슈즈', '데일리 러닝화', '러닝화 추천', '러닝화 고르는 법', 'Stars on Track'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>러닝이 셀럽들의 라이프스타일</strong>로 자리 잡으며 "그 연예인이 신은 러닝화"에 관심이 쏠립니다 — 대회 출전부터 일상 러닝까지</li>
    <li>셀럽들이 고르는 러닝화는 대체로 <strong>① 기록용 슈퍼슈즈 ② 프리미엄 데일리 ③ 맥스 쿠션</strong> 3유형으로 나뉩니다</li>
    <li>핵심은 <strong>"스타가 신었다고 나에게 맞는 건 아니다"</strong> — 셀럽의 목적·실력과 내 조건은 다릅니다. 유형을 이해하고 <strong>내 발·실력에 맞게</strong> 고르세요</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">⭐</span>
  <div class="callout-body">
    <p class="callout-title">Stars on Track — 러닝하는 셀럽의 시대</p>
    <p>요즘 러닝을 즐기는 연예인이 눈에 띄게 늘었습니다. 마라톤 풀코스를 완주하는 스타부터 일상 러닝을 SNS에 올리는 셀럽까지, 러닝은 하나의 라이프스타일이 됐죠. 자연스럽게 <strong>"저 연예인이 신은 러닝화"</strong>에 관심이 쏠립니다. 그런데 같은 러닝화라도 <strong>기록에 도전하느냐, 가볍게 즐기느냐</strong>에 따라 선택이 완전히 달라집니다. 셀럽들의 선택을 유형으로 풀어보고, 내게 맞는 기준을 찾아봅니다.</p>
  </div>
</div>

<h2>셀럽이 고르는 러닝화 3유형</h2>

<h3>① 기록용 슈퍼슈즈 — "대회·기록 도전" 셀럽</h3>
<p>마라톤 대회에 진심인 셀럽은 <strong>카본 플레이트 슈퍼슈즈</strong>를 신습니다. PEBA 폼과 카본 플레이트로 <strong>에너지 리턴이 높아 기록 단축에 유리</strong>한 신발이죠. 다만 <strong>딱딱하고 불안정</strong>해 초보에겐 부담이 됩니다.</p>
<ul>
  <li>대표 모델: <a href="/shoes/nike-vaporfly-4">나이키 베이퍼플라이 4</a>, <a href="/shoes/nike-alphafly-3">알파플라이 3</a>, <a href="/shoes/adidas-adios-pro-4">아디다스 아디오스 프로 4</a></li>
  <li><strong>RunRepeat 관점</strong>: 에너지 리턴 65%+ · 가벼운 무게. 단, 내구성이 짧고(레이스 전용) 가격이 25만원+</li>
  <li><strong>이런 사람에게</strong>: 서브3~4 기록 도전, 풀코스 경험자. <a href="/blog/carbon-plate-shoes-comparison-2025">카본 플레이트 비교</a> 참고</li>
</ul>

<h3>② 프리미엄 데일리 — "일상 러닝" 셀럽</h3>
<p>대부분의 러닝하는 셀럽이 평소 신는 유형입니다. <strong>적당한 쿠션과 반발</strong>로 매일 뛰기 좋고, 디자인도 세련돼 일상에서도 신기 좋죠. <strong>가장 무난하고 실용적</strong>이라 일반 러너에게도 1순위입니다.</p>
<ul>
  <li>대표 모델: <a href="/shoes/nike-pegasus-42">나이키 페가수스 42</a>, <a href="/shoes/on-cloudmonster-3">온 클라우드몬스터 3</a>, <a href="/shoes/saucony-ride-19">사우코니 라이드 19</a></li>
  <li><strong>RunRepeat 관점</strong>: 균형 잡힌 스택·드롭에 500~700km 내구성. 가성비와 범용성 최고</li>
  <li><strong>이런 사람에게</strong>: 입문~중급, 주 3~4회 데일리 러닝. 첫 러닝화로도 적합 → <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 가이드</a></li>
</ul>

<h3>③ 맥스 쿠션 — "편하게 즐기는" 셀럽</h3>
<p>기록보다 <strong>무릎 보호와 편안함</strong>을 중시하는 셀럽은 두툼한 맥스 쿠션화를 고릅니다. 스택이 높아 <strong>충격을 잘 흡수</strong>해 장거리·회복 러닝, 고체중 러너에게 좋습니다.</p>
<ul>
  <li>대표 모델: <a href="/shoes/asics-gel-nimbus-28">아식스 젤 님버스 28</a>, <a href="/shoes/hoka-clifton-10">호카 클리프턴 10</a>, <a href="/shoes/new-balance-1080-v15">뉴발란스 1080 v15</a></li>
  <li><strong>RunRepeat 관점</strong>: 힐 스택 40mm+ · 높은 충격 흡수(SA). 무릎·발목 부담이 큰 러너에게 유리</li>
  <li><strong>이런 사람에게</strong>: 무릎 걱정, 장거리 LSD, 편안함 우선. 발볼 넓으면 와이드 옵션 확인</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">"스타가 신었다고 나에게 맞는 건 아니다"</p>
    <p>셀럽이 슈퍼슈즈를 신는다고 따라 사면 낭패를 볼 수 있습니다. 그 셀럽은 <strong>이미 충분한 러닝 경력과 기록 목표</strong>가 있어 그 신발이 맞는 것이죠. 카본 슈퍼슈즈는 <strong>초보가 신으면 불안정하고 부상 위험</strong>이 큽니다. 반대로 일상 러닝만 한다면 25만원짜리 레이싱화보다 <strong>프리미엄 데일리</strong>가 훨씬 실용적입니다. <strong>신발은 셀럽의 이름이 아니라 내 발·실력·목적에 맞춰야</strong> 합니다.</p>
  </div>
</div>

<h2>그래서, 나는 어떻게 골라야 하나</h2>

<p>"저 연예인 신발"이 궁금했다면, 이제 <strong>유형</strong>을 알았으니 내 조건에 대입해보세요.</p>

<ul>
  <li><strong>목적</strong>: 기록 도전 → 슈퍼슈즈 / 매일 러닝 → 데일리 / 편한 조깅·무릎 보호 → 맥스 쿠션</li>
  <li><strong>실력</strong>: 입문이면 슈퍼슈즈는 보류. 데일리·쿠션부터 시작</li>
  <li><strong>발볼</strong>: 한국 러너는 토박스 너비가 1순위. 좁은 모델은 와이드 확인</li>
  <li><strong>예산</strong>: 일상용이면 15~20만원 데일리로 충분. 카본은 목표가 분명할 때</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">🛠️</span>
  <div class="callout-body">
    <p class="callout-title">셀럽 이름 말고 데이터로</p>
    <p>셀럽 마케팅에 휘둘리지 않으려면 <strong>광고 카피가 아닌 객관 데이터</strong>로 신발을 보세요 — <a href="/blog/running-shoe-data-not-marketing-guide-2026">러닝화, 광고에 속지 말고 데이터로 고르세요</a>에서 무게·스택·드롭·에너지 리턴 읽는 법을 정리했습니다. 본인 조건(경험·목적·발 너비·부상 이력)에 맞는 후보는 <a href="/recommend">1분 러닝화 추천</a>으로 좁히고, 두세 모델을 <a href="/compare">신발 비교</a>로 나란히 보면 실패가 줄어듭니다.</p>
  </div>
</div>

<h2>FAQ</h2>

<h3>Q. 연예인이 신은 러닝화를 사면 나도 빨라지나요?</h3>
<p>신발만으로 빨라지지 않습니다. 슈퍼슈즈가 기록을 일부 도와주는 건 맞지만, 그 효과는 <strong>충분한 훈련량과 러닝 능력</strong>이 있을 때 발휘됩니다. 초보가 카본화를 신으면 오히려 불안정해 부상 위험이 큽니다. <strong>실력에 맞는 신발</strong>이 가장 빠른 길입니다.</p>

<h3>Q. 입문자인데 셀럽처럼 슈퍼슈즈 신어도 되나요?</h3>
<p>권하지 않습니다. 카본 슈퍼슈즈는 <strong>딱딱하고 불안정</strong>해 러닝 폼이 안정되지 않은 입문자에겐 무리입니다. <strong>프리미엄 데일리</strong>(페가수스·라이드 등)로 기초를 다진 뒤, 기록 목표가 생기면 그때 슈퍼슈즈를 고려하세요.</p>

<h3>Q. 일상 러닝만 하는데 비싼 러닝화가 필요할까요?</h3>
<p>아닙니다. 주 3~4회 일상 러닝이라면 <strong>15~20만원대 프리미엄 데일리</strong>로 충분합니다. 25만원짜리 레이싱화는 내구성도 짧아 일상용으로는 비효율적입니다. 무릎이 걱정되면 맥스 쿠션을 고려하세요.</p>

<h3>Q. 발볼이 넓은데 셀럽이 신는 모델이 좁다면요?</h3>
<p>같은 모델의 <strong>와이드(2E·4E) 버전</strong>이 있는지 확인하세요. 한국 러너는 발볼이 넓은 편이라 토박스가 좁으면 새끼발가락 통증·물집이 생깁니다. 발 너비를 "넓음"으로 두고 <a href="/recommend">1분 추천</a>을 받으면 맞는 모델이 걸러집니다.</p>
`,
  },
  {
    id: 'korea-trail-skyrace-guide-2026',
    slug: 'korea-trail-skyrace-guide-2026',
    title: '한국 트레일·스카이레이스 대회 가이드 2026 | 스카이레이스란? 운탄고도부터 트랜스제주 UTMB까지 — 시즌·난이도·장비 총정리',
    description: '트레일 러닝 한 단계 위, 스카이레이스(SkyRace)란 무엇일까? ISF 기준과 트레일 러닝의 차이부터 한국 2026 주요 대회(운탄고도·춘천 스카이레이스·KOREA 50K·TNF100·트랜스제주 UTMB·영남알프스 UTNP)를 봄/가을 시즌·거리·난이도별로 정리. 누적고도·컷오프·ITRA 개념과 필수 장비, 트레일화 선택까지 입문 가이드.',
    thumbnail: '/images/blog/korea-trail-skyrace-guide-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-02',
    category: 'guide' as const,
    readingTime: 13,
    tags: ['트레일 러닝', '스카이레이스', '트레일 대회', '운탄고도', '트랜스제주 UTMB', 'KOREA 50K', 'TNF100', '영남알프스 UTNP', '누적고도', '트레일화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>스카이레이스(SkyRace)는 트레일 러닝의 하위 장르</strong> — ISF 기준 고도 2,000m 이상 또는 가파른 경사(30%+)의 산악 러닝으로, 일반 트레일보다 고도·기술 난이도가 높습니다</li>
    <li>한국 2026 시즌은 <strong>4~6월 봄(제주·강원)</strong>과 <strong>9~10월 가을(서울·영남·제주)</strong>로 나뉘며, 운탄고도·KOREA 50K·TNF100·트랜스제주 UTMB·영남알프스 UTNP 등 12개+ 대회가 열립니다</li>
    <li>거리(km)보다 <strong>누적고도(D+)·컷오프</strong>가 체감 난이도를 좌우 — 입문은 10~20K부터, 필수 장비(트레일화·베스트·필수장비)를 갖추고 단계적으로 올라가세요</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">⛰️</span>
  <div class="callout-body">
    <p class="callout-title">트레일 러닝의 한 단계 위, 스카이레이스</p>
    <p>도심 주로를 벗어나 산을 달리는 <a href="/blog/trail-running-appeal-beginner-guide-2026">트레일 러닝</a>이 메가 트렌드가 되면서, 더 가파르고 높은 곳을 달리는 <strong>'스카이레이스'</strong>도 빠르게 인기를 얻고 있습니다. 운탄고도 스카이레이스, 트랜스제주 UTMB 같은 대회는 매년 매진되고, 굿러너·코오롱·블랙야크·노스페이스 등 브랜드 주최 대회도 늘고 있죠. 이 글은 <strong>스카이레이스가 뭔지, 한국엔 어떤 대회가 있는지, 어떻게 입문하는지</strong>를 한 번에 정리한 가이드입니다.</p>
  </div>
</div>

<h2>스카이레이스 vs 트레일 러닝 — 뭐가 다른가</h2>

<table>
  <thead>
    <tr><th>구분</th><th>트레일 러닝</th><th>스카이레이스</th></tr>
  </thead>
  <tbody>
    <tr><td>관할</td><td>ITRA (국제트레일러닝협회)</td><td>ISF (국제스카이러닝연맹)</td></tr>
    <tr><td>지형</td><td>산·비포장 자연 지형 전반</td><td>고도 2,000m+ 또는 경사 30%+ 험지</td></tr>
    <tr><td>핵심</td><td>거리·자연 경험</td><td>고도·경사·기술 난이도</td></tr>
    <tr><td>이미지</td><td>숲길·둘레길도 포함</td><td>"하늘 아래 가장 높은 곳"을 달림</td></tr>
  </tbody>
</table>

<p>쉽게 말해 <strong>모든 스카이레이스는 트레일 러닝이지만, 모든 트레일이 스카이레이스는 아닙니다.</strong> 스카이레이스는 그중에서도 <strong>고도와 경사가 극단적인</strong> 종목이에요. ISF는 종목을 이렇게 나눕니다.</p>

<ul>
  <li><strong>SKY</strong> — 20~49km, 누적고도 1,200m+ (스카이레이스 대표 종목)</li>
  <li><strong>SKYULTRA</strong> — 50~99km, 누적고도 3,000m+ (장거리)</li>
  <li><strong>VERTICAL (버티컬 킬로미터, VK)</strong> — 5km 이내, 1,000m 수직 상승 (순수 오르막)</li>
</ul>

<div class="callout warning">
  <span class="callout-icon">📐</span>
  <div class="callout-body">
    <p class="callout-title">거리보다 '누적고도(D+)'를 보라</p>
    <p>트레일에서 <strong>거리(km)는 절반의 정보</strong>입니다. 진짜 난이도는 <strong>누적고도(D+, Elevation Gain)</strong> — 코스에서 올라간 고도를 전부 더한 값이 결정합니다. 같은 20km라도 D+ 500m와 1,500m는 전혀 다른 대회예요. 로드 러너에게 <strong>D+ 1,000m면 상당한 다리 피로</strong>를 줍니다. 또 보급소마다 <strong>컷오프(통과 제한시간)</strong>가 있어 초과하면 강제 탈락(DNF)이니, 입문자는 km당 10분 이상으로 여유 있게 계산하세요.</p>
  </div>
</div>

<h2>한국 2026 트레일·스카이레이스 캘린더</h2>

<h3>🌸 봄 시즌 (4~6월) — 제주·강원 집중</h3>

<table>
  <thead>
    <tr><th>일정</th><th>대회</th><th>장소</th><th>거리</th></tr>
  </thead>
  <tbody>
    <tr><td>4/10~12</td><td><strong>파타고니아 제주국제트레일러닝</strong></td><td>제주 한라산</td><td>10·36·100K</td></tr>
    <tr><td>4/18~19</td><td><strong>코오롱 트레일런</strong></td><td>강원 횡성 웰리힐리</td><td>15·35K·버티컬</td></tr>
    <tr><td>4/25</td><td><strong>KOREA 50K 동두천(DDC)</strong></td><td>경기 동두천</td><td>5·10·20·50K</td></tr>
    <tr><td>4/25</td><td><strong>블랙야크 트레일런 제주</strong></td><td>제주 한라산 둘레</td><td>25·57K</td></tr>
    <tr><td>5/16</td><td><strong>TNF100 코리아</strong></td><td>강원 강릉 경포</td><td>10·22·50·100K</td></tr>
    <tr><td>6/6</td><td><strong>한라산 100 트레일런</strong></td><td>제주 돈내코</td><td>10·36·50·100K·100M</td></tr>
    <tr><td>6/7</td><td><strong>KOREA 50K 춘천(CC)</strong> — CC20은 SKY RACE® 인증</td><td>강원 춘천 삼악산</td><td>20·50K</td></tr>
    <tr><td>6/13~14</td><td><strong>운탄고도 스카이레이스</strong> (HOKA)</td><td>강원 정선 하이원</td><td>12·20·42K</td></tr>
  </tbody>
</table>

<h3>🍂 가을 시즌 (9~10월) — 서울·영남·제주</h3>

<table>
  <thead>
    <tr><th>일정</th><th>대회</th><th>장소</th><th>거리</th></tr>
  </thead>
  <tbody>
    <tr><td>9/12~13</td><td><strong>춘천 스카이레이스</strong> (밀레 후원, 굿러너)</td><td>강원 엘리시안 강촌</td><td>SKY HALF·SKY RUN·키즈</td></tr>
    <tr><td>9/19~20</td><td><strong>서울 100K</strong> — 도심 울트라 트레일</td><td>광화문~인왕산~북한산~한강</td><td>20·50·100K</td></tr>
    <tr><td>10/2~4</td><td><strong>트랜스제주 by UTMB</strong> — UTMB 공식</td><td>제주</td><td>20·60·100K·100M</td></tr>
    <tr><td>10/23~25</td><td><strong>울주 트레일 나인피크(UTNP)</strong> — 영남알프스 9봉</td><td>경남 울주</td><td>1~9PEAKS(최대 124K)</td></tr>
  </tbody>
</table>

<p class="caption">일정·종목은 주최 측 공지 기준이며 일부는 미확정·예상입니다. 신청 전 각 대회 공식 페이지에서 최종 확인하세요.</p>

<div class="callout info">
  <span class="callout-icon">🌝</span>
  <div class="callout-body">
    <p class="callout-title">2026 운탄고도 'ACG 나이트 트레일' — 10주년 첫 야간 세션</p>
    <p>운탄고도 정규 스카이레이스(6/13~14)와 별개로, 2026년엔 <strong>10주년 기념 사상 첫 야간 트레일</strong>인 'ACG 나이트 트레일'(나이키 ACG 협업)이 <strong>6월 12일(금) 하이원리조트</strong>에서 열렸습니다. <strong>16km·누적고도 +710m, 200명 한정 스페셜 세션</strong>으로, 해발 1,330m 정선 하늘길을 밤에 달리는 색다른 경험이죠. 정규 대회와 달리 <strong>추첨제</strong>로 운영돼 신청 방식이 다릅니다. 야간 트레일은 헤드램프·보온 레이어 등 장비 요구가 더 까다로우니, 아래 <strong>'필수 장비'</strong> 항목을 특히 꼼꼼히 챙기세요.</p>
  </div>
</div>

<h2>난이도별 — 어디서 시작할까</h2>

<h3>🟢 입문 (10~20K, 첫 트레일 대회)</h3>
<p>로드 러너가 처음 도전하기 좋은 짧은 종목. 누적고도가 낮고 컷오프가 여유롭습니다.</p>
<ul>
  <li><strong>코오롱 트레일런 15K</strong>(D+670m, 컷오프 4h) · <strong>KOREA 50K DDC 5·10K</strong> · <strong>TNF100 10K</strong></li>
  <li><strong>트랜스제주 Jeju20K</strong>(D+420m) — UTMB 공식 대회 분위기를 낮은 고도로 경험</li>
</ul>

<h3>🟡 중급 (20~42K, 본격 트레일·스카이레이스)</h3>
<ul>
  <li><strong>운탄고도 스카이레이스 12·20K</strong> — 해발 1,330m 고원, 스카이레이스 고도감 입문에 최적</li>
  <li><strong>KOREA 50K CC20</strong> — SKY RACE® 공식 인증, 삼악산 협곡 기술 코스</li>
  <li><strong>파타고니아 제주 36K</strong> · <strong>블랙야크 제주 25K</strong> · <strong>코오롱 35K</strong>(D+1,691m)</li>
</ul>

<h3>🔴 울트라 (50K~100M, 상급자)</h3>
<ul>
  <li><strong>UTNP 9PEAKS</strong> — 124km·누적고도 9,210m, ITRA 6포인트. 국내 최고 난이도</li>
  <li><strong>트랜스제주 100M·100K</strong> — UTMB World Series. UTMB Index 보유 필요</li>
  <li><strong>TNF100 100K</strong> — 2년 내 50K 완주 기록 필수 · <strong>한라산 100</strong> · <strong>서울 100K</strong></li>
</ul>

<h2>필수 장비 — 산은 편의점이 없다</h2>

<p>트레일·스카이레이스는 안전을 위해 <strong>필수장비(mandatory gear) 규정</strong>이 엄격합니다. 미착용 시 출발 불가·페널티가 부과됩니다.</p>

<ul>
  <li><strong>트레일화</strong> — 러그(돌기) 아웃솔 필수. 로드화 불가 (가장 중요)</li>
  <li><strong>러닝 베스트</strong> — 물·보급·필수장비 수납. 핸드캐리 불가 대회 多</li>
  <li><strong>물 1L + 개인컵</strong> — 친환경 정책으로 1회용컵 미제공이 표준</li>
  <li><strong>방풍·방수 자켓</strong> — 고지대 급변 날씨 대비</li>
  <li><strong>서바이벌 블랭킷·호루라기·비상식량·휴대폰</strong> — 구조·생존용</li>
  <li><strong>헤드랜턴</strong> — 야간 구간 있는 50K+ 필수 (300루멘 이상)</li>
  <li><strong>트레킹 폴(스틱)</strong> — 필수는 아니나 D+1,500m 이상에서 강력 권장</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">👟</span>
  <div class="callout-body">
    <p class="callout-title">대회 코스·난이도별 트레일화</p>
    <p>입문·가성비는 <a href="/shoes/asics-gel-venture-10">아식스 젤 벤처 10</a>, 접지력·안정성 균형은 <a href="/shoes/adidas-terrex-agravic-4">아디다스 테렉스 아그라빅 4</a>, 장거리 울트라는 <a href="/shoes/adidas-terrex-agravic-speed-ultra">테렉스 아그라빅 스피드 울트라</a>·<a href="/shoes/asics-metafuji-trail">아식스 메타후지 트레일</a>, 카본 플레이트 레이싱은 <a href="/shoes/hoka-tecton-x-3">호카 테크톤 X 3</a>·<a href="/shoes/nike-ultrafly">나이키 울트라플라이</a>가 대표적입니다. 코스 난이도별 자세한 비교는 <a href="/blog/2026-best-trail-running-shoes">2026 트레일 러닝화 TOP 7</a>에서 확인하세요.</p>
  </div>
</div>

<h2>입문자를 위한 4가지 조언</h2>

<ul>
  <li><strong>① 트레일 경험부터</strong> — 대회 전 북한산·관악산 등에서 실제 산을 달려보세요. <a href="/blog/trail-running-appeal-beginner-guide-2026">트레일 러닝 입문 가이드</a></li>
  <li><strong>② 거리보다 누적고도</strong> — D+를 보고 대회를 고르세요. 같은 20K라도 고도에 따라 완전히 다릅니다</li>
  <li><strong>③ 오르막은 걷는다</strong> — 트레일에선 파워 하이킹이 기본. 끝까지 뛰려 하지 마세요</li>
  <li><strong>④ 필수장비 미리 준비</strong> — 베스트·개인컵·블랭킷 등은 대회 직전에 사면 적응이 안 됩니다. 미리 훈련에 써보세요</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">🗺️</span>
  <div class="callout-body">
    <p class="callout-title">코스 답사 겸 트레일 여행</p>
    <p>대회 코스를 미리 달려보는 답사 러닝은 완주 확률을 크게 높입니다. <a href="/blog/gangneung-unique-running-courses-7">강릉 바우길</a> 등 둘레 트레일로 감각을 익히고, 가을 로드 대회와 일정을 함께 짜려면 <a href="/marathon">마라톤 캘린더</a>를 참고하세요. 본인 발·부상 이력에 맞는 트레일화 후보는 <a href="/recommend">1분 러닝화 추천</a>으로 좁힐 수 있습니다.</p>
  </div>
</div>

<h2>FAQ</h2>

<h3>Q. 스카이레이스와 트레일 러닝, 꼭 구분해야 하나요?</h3>
<p>입문 단계에선 크게 신경 쓰지 않아도 됩니다. 다만 <strong>"스카이레이스/SKY 인증"이 붙은 종목은 고도·경사가 더 가파르다</strong>는 신호로 보세요. KOREA 50K의 CC20처럼 SKY RACE® 인증 종목은 같은 거리라도 일반 트레일보다 기술 난이도가 높습니다.</p>

<h3>Q. 로드 마라톤만 뛰었는데 바로 트레일 대회 나가도 되나요?</h3>
<p>가능하지만 <strong>10~20K 입문 종목부터</strong> 시작하세요. 로드 풀코스를 뛰어도 트레일은 쓰는 근육과 페이스가 완전히 달라, 같은 거리도 1.5~2배 힘듭니다. 대회 전 실제 산에서 몇 번 달려보는 게 필수입니다.</p>

<h3>Q. UTMB가 뭔가요? 트랜스제주랑 무슨 관계죠?</h3>
<p>UTMB는 프랑스 몽블랑에서 열리는 <strong>세계 최고 권위의 울트라 트레일 대회</strong>이고, 트랜스제주는 그 <strong>공식 아시아 시리즈(UTMB World Series)</strong> 대회입니다. 트랜스제주를 완주하면 <strong>UTMB Index</strong>가 적립돼, 본토 몽블랑 대회 참가 자격을 쌓을 수 있습니다.</p>

<h3>Q. 어떤 신발을 사야 하나요?</h3>
<p>반드시 <strong>트레일화</strong>가 필요합니다. 입문은 <a href="/shoes/asics-gel-venture-10">젤 벤처 10</a> 같은 가성비 모델, 본격 산악은 <a href="/shoes/adidas-terrex-agravic-4">아그라빅 4</a>, 울트라는 <a href="/shoes/asics-metafuji-trail">메타후지 트레일</a>을 권합니다. 자세한 선택은 <a href="/blog/2026-best-trail-running-shoes">트레일 러닝화 베스트</a>를 보세요.</p>
`,
  },
  {
    id: '2026-seonsa-marathon-gangdong',
    slug: '2026-seonsa-marathon-gangdong',
    title: '2026 선사마라톤축제 — 참가비 3만원에 바람막이까지 | 6천년 암사동 유적에서 한강까지, 일정·접수·코스 총정리',
    description: '서울 강동구 암사동 유적에서 출발해 한강을 달리는 제20회 2026 선사마라톤축제. 2026년 9월 20일 개최, 하프·10K·5K(달리기/걷기) 종목에 전 종목 참가비 3만원 + 초경량 러닝자켓 제공. 강동구민 6/8·일반 6/11 선착순 접수(총 2,800명). 교통통제 없는 한강 평지 코스의 일정·접수·코스·준비 팁을 정리.',
    thumbnail: '/images/blog/2026-seonsa-marathon-gangdong.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-02',
    category: 'news' as const,
    readingTime: 8,
    tags: ['선사마라톤', '선사마라톤축제', '강동구 마라톤', '암사동 유적', '한강 마라톤', '2026 마라톤', '가을 마라톤', '하프마라톤', '마라톤 접수'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>제20회 2026 선사마라톤축제</strong>가 <strong>2026년 9월 20일(일)</strong> 서울 강동구 <strong>암사동 유적</strong>에서 출발해 한강을 달립니다</li>
    <li><strong>전 종목 참가비 3만원 + 초경량 러닝자켓(바람막이)</strong> 제공 — 가성비 좋은 가을 대회. 하프·10K·5K(달리기/걷기) 4종목</li>
    <li>접수는 <strong>강동구민 6/8, 일반 6/11 오전 10시 선착순</strong>(총 2,800명). 작년보다 한 달 앞당겨졌고 빠르게 마감되니 서두르세요</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🏛️</span>
  <div class="callout-body">
    <p class="callout-title">6천년 신석기 유적에서 한강까지</p>
    <p>선사마라톤축제는 국내 최대 신석기 유적인 <strong>서울 암사동 유적</strong>을 알리기 위해 강동구가 여는 대회로, 올해 <strong>20회</strong>를 맞습니다. <strong>암사초록길을 따라 한강으로 바로 진입</strong>하는 평지 코스라 교통통제 없이 안전하고, 10월의 강동선사문화축제(10/16~18)를 앞두고 분위기를 띄우는 선행 행사이기도 합니다. "가을바람 맞으며 한강 뛰고, 참가비 3만원에 바람막이까지" 받는 가성비 대회로 입소문을 타고 있습니다.</p>
  </div>
</div>

<h2>2026 선사마라톤축제 한눈에</h2>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td>대회일</td><td><strong>2026년 9월 20일(일) 오전 9시</strong></td></tr>
    <tr><td>출발지</td><td>서울 강동구 <strong>암사동 유적</strong> 앞 특설무대</td></tr>
    <tr><td>종목</td><td><strong>하프(21.1km) · 10km · 5km 달리기 · 5km 걷기</strong></td></tr>
    <tr><td>참가비</td><td><strong>전 종목 3만원</strong> (초경량 러닝자켓 포함)</td></tr>
    <tr><td>규모</td><td>총 2,800명 (작년 대비 확대)</td></tr>
    <tr><td>접수(구민)</td><td>6월 8일 10시 · 선착순 1,000명</td></tr>
    <tr><td>접수(일반)</td><td><strong>6월 11일 10시 · 선착순 1,800명</strong></td></tr>
    <tr><td>접수처</td><td>gomarathon.co.kr</td></tr>
  </tbody>
</table>

<p class="caption">일정·정원은 주최(강동구 육상연맹) 공지 기준입니다. 종목별 세부 정원·코스 표지 등은 공식 접수 페이지에서 최종 확인하세요.</p>

<h2>핵심 ① — 참가비 3만원에 바람막이까지</h2>

<p>이 대회의 최대 매력은 <strong>가성비</strong>입니다. 하프부터 5km 걷기까지 <strong>전 종목 3만원</strong>인데, 모든 참가자에게 <strong>초경량 러닝자켓(바람막이)</strong>을 줍니다. 가을·겨울 러닝에 바로 쓰는 기능성 자켓이라 사실상 참가비 값을 하는 셈이죠. 완주자에게는 <strong>완주메달과 기록증</strong>도 제공됩니다.</p>

<h2>핵심 ② — 교통통제 없는 한강 평지 코스</h2>

<p>출발지인 암사동 유적 광장에서 <strong>암사초록길과 암사 토끼굴(생태 터널)</strong>을 지나 <strong>광나루~잠실 한강공원</strong> 구간으로 진입합니다. 한강을 따라 달리는 <strong>평지 코스라 고도 부담이 거의 없어</strong> 기록 도전에도 유리합니다. 일반 도로를 막지 않는 안전한 코스 설계라 초보·가족 참가자도 부담이 적습니다.</p>

<ul>
  <li><strong>하프(21.1km)</strong> — 제한시간 3시간. 한강 평지라 첫 하프·기록 도전 모두 적합</li>
  <li><strong>10km</strong> — 제한시간 1시간 30분</li>
  <li><strong>5km 달리기</strong> — 제한시간 1시간. 입문·가족 추천</li>
  <li><strong>5km 걷기</strong> — 제한시간 1시간 30분. 누구나 참가 가능</li>
</ul>

<h2>핵심 ③ — 접수가 한 달 앞당겨졌다, 서두르세요</h2>

<p>작년(19회)은 7월에 접수를 시작했는데, <strong>올해는 6월로 한 달 앞당겨졌습니다.</strong> 강동구민은 <strong>6월 8일</strong>, 일반(비구민)은 <strong>6월 11일 오전 10시</strong>부터 선착순입니다. 정원이 총 2,800명으로 한정적이라 <strong>인기 종목은 빠르게 마감</strong>될 수 있으니, 신청 시각에 맞춰 접속하는 걸 권합니다.</p>

<div class="callout tip">
  <span class="callout-icon">📅</span>
  <div class="callout-body">
    <p class="callout-title">접수 D-DAY 체크</p>
    <p><strong>일반 참가자는 6월 11일(목) 오전 10시</strong>를 알림으로 등록해두세요. 선착순이라 오픈 직후 접속이 중요합니다. <a href="https://www.gomarathon.co.kr" target="_blank" rel="noopener">gomarathon.co.kr</a>에서 신청하며, 강동구민은 사흘 빠른 6월 8일에 별도 페이지로 접수합니다.</p>
  </div>
</div>

<h2>9월 대회, 지금부터 준비하면 충분</h2>

<p>9월 20일이면 <strong>약 3개월 반</strong>의 준비 기간이 있습니다. 무더위·장마가 끼는 시기라 안전하게 거리를 쌓는 게 핵심입니다.</p>

<ul>
  <li><strong>하프 도전</strong>: 천천히 오래 달리는 LSD로 기초 지구력부터. <a href="/blog/lsd-training-beginner-guide-korea">초보 LSD 훈련 가이드</a></li>
  <li><strong>페이스 전략</strong>: 평지 한강 코스는 페이스 배분이 기록을 좌우. <a href="/blog/marathon-pacing-mental-strategy-guide">마라톤 페이싱·멘탈 전략</a></li>
  <li><strong>여름 훈련</strong>: 6~8월 폭염·장마 대비. <a href="/blog/rainy-season-running-guide-korea">장마철 러닝 가이드</a></li>
  <li><strong>신발 준비</strong>: 한강 평지 완주용 데일리·쿠션화. <a href="/recommend">1분 러닝화 추천</a>으로 본인 조건에 맞는 후보 찾기</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">🌊</span>
  <div class="callout-body">
    <p class="callout-title">한강 러닝이 처음이라면</p>
    <p>대회 전 코스를 미리 달려보고 싶다면, 광나루~잠실 한강공원 구간을 가볍게 뛰어보세요. 서울 한강·도심 러닝 코스는 <a href="/blog/seoul-unique-running-courses-7">서울 이색 러닝 코스 7선</a>에서 정리했습니다. 다른 가을 대회와 함께 일정을 짜려면 <a href="/blog/2026-garmin-run-korea-half-marathon">가민런 코리아</a>·<a href="/blog/2026-chuncheon-marathon-registration-guide">춘천마라톤</a>과 <a href="/marathon">마라톤 캘린더</a>를 참고하세요.</p>
  </div>
</div>

<h2>FAQ</h2>

<h3>Q. 강동구민이 아니어도 참가할 수 있나요?</h3>
<p>네. 일반(비구민)은 <strong>6월 11일 오전 10시</strong>부터 선착순 1,800명을 모집합니다. 강동구민은 사흘 빠른 6월 8일에 별도로 1,000명을 접수합니다. 둘 다 <strong>gomarathon.co.kr</strong>에서 신청합니다.</p>

<h3>Q. 참가비 3만원에 정말 바람막이를 주나요?</h3>
<p>네. 전 종목 참가비가 3만원으로 동일하고, 모든 참가자에게 <strong>초경량 러닝자켓(바람막이)</strong>을 제공합니다. 완주자에게는 메달과 기록증도 주어져, 가을 대회 중 가성비가 좋은 편입니다.</p>

<h3>Q. 하프가 처음인데 코스가 어렵나요?</h3>
<p>암사초록길에서 한강으로 진입하는 <strong>평지 위주 코스</strong>라 고도 부담이 적고, 교통통제 없는 안전한 설계입니다. 첫 하프 도전에 적합하지만, 9월까지 LSD로 거리를 점진적으로 늘려두세요. <a href="/blog/lsd-training-beginner-guide-korea">LSD 가이드</a>를 참고하세요.</p>

<h3>Q. 가족과 함께 참가하고 싶어요.</h3>
<p><strong>5km 걷기(제한시간 1시간 30분)</strong> 종목이 있어 어린이·노약자도 함께할 수 있습니다. 달리기가 부담되면 5km 걷기로 신청해 암사동 유적과 한강을 가볍게 즐기기 좋습니다.</p>
`,
  },
  {
    id: 'trail-running-appeal-beginner-guide-2026',
    slug: 'trail-running-appeal-beginner-guide-2026',
    title: '산으로 가는 러너들 — 트레일 러닝의 매력과 입문 가이드 | 로드와 뭐가 다를까? 왜 빠질까?',
    description: '주로를 벗어나 자연을 달리는 트레일 러닝이 메가 트렌드로 떠올랐습니다. 대형 대회는 연일 매진, 전문 스페셜티 스토어도 속속 오픈. 로드 러닝과 무엇이 다른지, 왜 빠져드는지(정신적·신체적 효과), 그리고 입문 5단계와 한국 산 코스·트레일화 선택까지 한 번에 정리한 트레일 러닝 입문 가이드.',
    thumbnail: '/images/blog/trail-running-appeal-beginner-guide-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-02',
    category: 'guide' as const,
    readingTime: 10,
    tags: ['트레일 러닝', '트레일 러닝 입문', '트레일화', '산악 러닝', '로드 vs 트레일', '북한산 러닝', '트레일 러닝 매력', '오프로드 러닝', '트레일 러닝 효과'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>트레일 러닝은 메가 트렌드</strong> — 대형 대회는 연일 매진, 도심 전문 스페셜티 스토어도 속속 오픈하며 러너들의 거점이 빠르게 확대되고 있습니다</li>
    <li>로드와 다른 매력은 <strong>① 자연 속 몰입 ② 지면 변화가 주는 재미 ③ 하체·균형 근육 단련 ④ 정신적 환기</strong> — "속도"가 아니라 "경험"을 달리는 러닝</li>
    <li>이 글은 <strong>로드 vs 트레일 차이 → 빠져드는 이유 → 입문 5단계 → 한국 산 코스·트레일화 선택</strong>까지, 처음 산으로 향하는 러너를 위한 가이드입니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">⛰️</span>
  <div class="callout-body">
    <p class="callout-title">왜 다들 산으로 갈까</p>
    <p>최근 주로(도로)를 벗어나 <strong>자연 그대로를 달리는 트레일 러닝</strong>이 뜨거운 트렌드로 자리 잡았습니다. 글로벌 아웃도어 브랜드가 주도하는 대형 대회는 연일 매진되고, 도심 속 전문 스페셜티 스토어까지 잇달아 오픈하며 트레일 러너들의 거점이 빠르게 늘고 있죠. 로드 러닝의 속도감에 익숙해진 러너들이 <strong>"산이 주는 전혀 다른 러닝"</strong>에 빠져드는 이유를 짚어봅니다.</p>
  </div>
</div>

<h2>로드 러닝 🆚 트레일 러닝, 무엇이 다른가</h2>

<table>
  <thead>
    <tr><th>구분</th><th>로드 러닝</th><th>트레일 러닝</th></tr>
  </thead>
  <tbody>
    <tr><td>지면</td><td>평탄한 아스팔트·우레탄</td><td>흙·돌·뿌리·자갈 — 매 걸음 다름</td></tr>
    <tr><td>핵심 가치</td><td>속도·기록·페이스</td><td>경험·풍경·완주·자연</td></tr>
    <tr><td>쓰는 근육</td><td>전후 추진 중심</td><td>좌우 균형·발목 안정근까지 총동원</td></tr>
    <tr><td>강도 측정</td><td>페이스(분/km)</td><td>고도·시간·노면 — 페이스 의미 적음</td></tr>
    <tr><td>충격</td><td>일정한 반복 충격</td><td>충격 분산되나 발목·접질림 위험</td></tr>
    <tr><td>신발</td><td>로드화(쿠션·반발)</td><td>트레일화(접지력·보호·안정)</td></tr>
  </tbody>
</table>

<p>가장 큰 차이는 <strong>"페이스를 버린다"</strong>는 점입니다. 트레일에서는 같은 거리라도 고도와 노면에 따라 체감 강도가 완전히 달라, 분/km로 자신을 채찍질하던 로드 러너가 <strong>시간과 풍경 중심으로 사고를 전환</strong>하게 됩니다. 이 전환이 트레일 러닝의 첫 번째 해방감입니다.</p>

<h2>러너들이 트레일에 빠지는 4가지 이유</h2>

<h3>1. 자연 속 몰입 — "달리는 명상"</h3>
<p>매 걸음 바뀌는 노면은 <strong>발밑에 온전히 집중</strong>하게 만듭니다. 스마트폰도, 페이스 알림도 끼어들 틈이 없죠. 숲의 소리와 흙냄새 속에서 달리다 보면 잡념이 사라지는 <strong>'무브먼트 명상'</strong> 효과를 경험합니다. 도시의 스트레스에서 벗어나는 정신적 환기가 트레일의 가장 큰 매력으로 꼽힙니다.</p>

<h3>2. 지루하지 않다 — 매 순간 다른 자극</h3>
<p>같은 코스를 반복하는 로드와 달리, 트레일은 <strong>오르막·내리막·계곡·능선이 끊임없이 변주</strong>됩니다. 몸이 늘 새로운 움직임에 반응해야 하니 지루할 틈이 없고, "다음 모퉁이엔 뭐가 있을까" 하는 탐험의 재미가 있습니다.</p>

<h3>3. 온몸을 쓰는 운동 — 균형·코어·하체 강화</h3>
<p>불규칙한 지면은 <strong>발목 안정근, 둔근, 코어, 좌우 균형근</strong>을 총동원하게 합니다. 평지에서 잘 안 쓰는 근육까지 자극해 <strong>고유수용감각(균형 감각)</strong>이 발달하고, 이는 로드 러닝 부상 예방에도 도움이 됩니다. 오르막은 천연 인터벌, 내리막은 근력·민첩성 훈련이 됩니다.</p>

<h3>4. 충격 분산 — 관절에 다른 방식의 부담</h3>
<p>부드러운 흙길은 아스팔트보다 <strong>반복 충격이 적어</strong> 무릎 등 관절 피로를 덜어줄 수 있습니다. 다만 트레일은 <strong>발목 접질림·낙상</strong>이라는 다른 위험이 있으니, 충격이 적다고 무방비로 달려선 안 됩니다(아래 입문 단계 참고).</p>

<div class="callout tip">
  <span class="callout-icon">🧠</span>
  <div class="callout-body">
    <p class="callout-title">데이터로 본 트레일 러닝</p>
    <p>자연 환경에서의 운동(이른바 '그린 엑서사이즈')은 실내·도심 운동보다 <strong>기분·활력 개선 효과가 크다</strong>는 연구가 꾸준히 보고됩니다. 또 불규칙 지면 트레이닝은 <strong>발목 고유수용감각과 균형 능력 향상</strong>에 기여한다고 알려져 있죠. 트레일 러너들이 입을 모아 말하는 "달리고 나면 머리가 맑아진다"는 경험에는 이런 배경이 있습니다.</p>
  </div>
</div>

<h2>트레일 러닝 입문 5단계</h2>

<p>로드에서 트레일로 넘어갈 때, 욕심내지 말고 단계적으로 접근하는 게 안전합니다.</p>

<ul>
  <li><strong>① 가벼운 흙길부터</strong> — 처음부터 험한 산을 가지 마세요. 한강 둔치 흙길, 둘레길, 도심 야산의 완만한 임도부터 시작합니다</li>
  <li><strong>② 걷기를 두려워 말 것</strong> — 트레일에선 오르막을 걷는 게 정상입니다("파워 하이킹"). 끝까지 뛰려 하지 말고 심박·체력에 맞춰 걷고 뛰기를 섞으세요</li>
  <li><strong>③ 시선은 3~4m 앞에</strong> — 발밑만 보면 길을 못 읽고, 멀리만 보면 돌부리에 걸립니다. 노면을 미리 읽는 시선 처리가 핵심</li>
  <li><strong>④ 내리막은 천천히</strong> — 초보 부상 1순위가 내리막 낙상입니다. 보폭을 줄이고 무릎을 살짝 굽혀 충격을 흡수하세요</li>
  <li><strong>⑤ 물·간식·휴대폰 필수</strong> — 산은 편의점이 없습니다. 짧은 코스라도 물과 에너지 보충, 그리고 안전을 위한 휴대폰·기본 정보를 챙기세요</li>
</ul>

<h2>한국에서 트레일 시작하기 좋은 곳</h2>

<p>한국은 도심 가까이 산이 많아 트레일 러닝 입문 환경이 훌륭합니다.</p>

<ul>
  <li><strong>입문(완만한 둘레길)</strong>: 서울 둘레길, 남산 순환로, 한강 인근 야산 — 흙길 위주로 부담이 적습니다</li>
  <li><strong>중급(본격 산악)</strong>: 북한산·관악산·청계산 — 돌·계단·급경사가 섞여 접지력 좋은 트레일화가 필요합니다</li>
  <li><strong>여행 트레일</strong>: <a href="/blog/gangneung-unique-running-courses-7">강릉 바우길</a>, 제주 올레·오름 등 관광과 묶기 좋은 코스</li>
</ul>

<p>코스별 난이도와 시작 팁은 도시별 이색 러닝 코스 시리즈(<a href="/blog/seoul-unique-running-courses-7">서울</a>·<a href="/blog/busan-unique-running-courses-7">부산</a>·<a href="/blog/gangneung-unique-running-courses-7">강릉</a> 등)에서도 트레일 구간을 함께 다루고 있습니다.</p>

<h2>트레일화, 로드화와 뭐가 다른가</h2>

<p>트레일 러닝의 안전과 재미는 <strong>신발</strong>에서 절반이 결정됩니다. 로드화로 산에 가면 미끄러지고 발이 보호되지 않습니다. 트레일화는 다음이 다릅니다.</p>

<ul>
  <li><strong>아웃솔 러그(돌기)</strong> — 흙·돌·진흙에서 미끄러지지 않는 깊은 접지 패턴</li>
  <li><strong>발 보호</strong> — 토 가드(앞코 보호), 락 플레이트(돌 충격 차단)</li>
  <li><strong>안정성</strong> — 낮고 넓은 플랫폼으로 발목 접질림 위험 감소</li>
  <li><strong>내구성</strong> — 거친 노면에 견디는 질긴 어퍼</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">👟</span>
  <div class="callout-body">
    <p class="callout-title">입문용부터 본격 산악까지 — 트레일화 고르기</p>
    <p>가성비 입문은 <a href="/shoes/asics-gel-venture-10">아식스 젤 벤처 10</a>, 접지력·안정성 균형은 <a href="/shoes/adidas-terrex-agravic-4">아디다스 테렉스 아그라빅 4</a>, 장거리·울트라 지향은 <a href="/shoes/adidas-terrex-agravic-speed-ultra">테렉스 아그라빅 스피드 울트라</a>, 카본 플레이트 레이싱은 <a href="/shoes/hoka-tecton-x-3">호카 테크톤 X 3</a>·<a href="/shoes/nike-ultrafly">나이키 울트라플라이</a>, 험지 대응은 <a href="/shoes/asics-metafuji-trail">아식스 메타후지 트레일</a>이 대표적입니다. 코스 난이도별 자세한 비교는 <a href="/blog/2026-best-trail-running-shoes">2026 트레일 러닝화 TOP 7</a>에서, 본인 조건에 맞는 후보는 <a href="/recommend">1분 러닝화 추천</a>으로 좁힐 수 있습니다.</p>
  </div>
</div>

<h2>FAQ</h2>

<h3>Q. 로드화로 트레일을 뛰면 안 되나요?</h3>
<p>완만한 흙길 입문 정도는 가능하지만, <strong>본격 산악에서는 위험</strong>합니다. 로드화는 접지 러그가 얕아 흙·돌에서 미끄러지고, 토 가드가 없어 돌부리에 발가락을 다칠 수 있습니다. 산을 자주 갈 거라면 트레일화는 안전을 위한 필수 투자입니다.</p>

<h3>Q. 평소 10K 뛰는데 트레일 10K도 비슷한가요?</h3>
<p>전혀 다릅니다. 트레일 10K는 고도·노면 때문에 <strong>로드 10K보다 1.5~2배 힘들게</strong> 느껴질 수 있습니다. 페이스(분/km)로 생각하지 말고 <strong>시간·완주 중심</strong>으로 접근하세요. 오르막은 걷는 게 정상입니다.</p>

<h3>Q. 무릎이 안 좋은데 트레일이 도움이 될까요?</h3>
<p>부드러운 흙길은 아스팔트보다 반복 충격이 적어 도움이 될 수 있지만, <strong>내리막과 접질림은 오히려 무릎 부담</strong>이 됩니다. 완만한 코스부터, 내리막은 천천히, 스틱(폴) 활용도 고려하세요. 무릎 통증이 있다면 <a href="/recommend">신발 추천</a>에서 부상 이력을 반영해 후보를 받는 것을 권합니다.</p>

<h3>Q. 첫 트레일화는 뭘 사야 하나요?</h3>
<p>입문이라면 무리한 고가 모델보다 <strong>접지력·안정성이 검증된 가성비 모델</strong>이 좋습니다. <a href="/shoes/asics-gel-venture-10">젤 벤처 10</a> 같은 입문 트레일화로 시작해, 산행 빈도가 늘면 <a href="/shoes/adidas-terrex-agravic-4">아그라빅 4</a> 같은 본격 모델로 업그레이드하세요. 자세한 선택은 <a href="/blog/2026-best-trail-running-shoes">트레일 러닝화 베스트</a>를 참고하세요.</p>
`,
  },
  {
    id: '2026-garmin-run-korea-half-marathon',
    slug: '2026-garmin-run-korea-half-marathon',
    title: '2026 가민런 코리아, 하프 신설 + 1만 2천명 확대 | "접수 2분컷" 대회가 돌아온다 — 일정·접수·코스 총정리',
    description: '작년 3,000명 정원이 접수 2분 만에 마감된 가민런 코리아가 2026년 약 1만 2천명 규모로 확대 개최됩니다. 기존 10K에 더해 하프코스 신설, 2026년 11월 15일 고양종합운동장, 7월 1~3일 래플(추첨) 접수. 가민 워치 연계 데이터 러닝 대회의 일정·접수 방식·코스·준비 팁을 한 번에 정리.',
    thumbnail: '/images/blog/2026-garmin-run-korea-half-marathon.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-01',
    updatedAt: '2026-06-29',
    category: 'news' as const,
    readingTime: 8,
    tags: ['가민런', '가민런 코리아', '2026 가민런', '하프마라톤', '고양 마라톤', '가민 워치', '마라톤 접수', '래플 추첨', '데이터 러닝'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>2026 가민런 코리아</strong>가 <strong>2026년 11월 15일 고양종합운동장</strong>에서 약 <strong>1만 2천명 규모</strong>로 확대 개최됩니다(작년 3,000명)</li>
    <li>올해 최대 변화는 <strong>하프코스(21.1km) 신설</strong> — 기존 10K에 더해 더 많은 러너가 참가할 수 있게 됐습니다</li>
    <li>접수는 <strong>7월 1~3일 신청 → 7월 7일 발표</strong>의 <strong>래플(추첨)</strong> 방식. 작년처럼 선착순 "2분컷"이 아니라 추첨이라 부담이 줄었습니다</li>
  </ul>
</div>

<div class="callout success">
  <span class="callout-icon">🔔</span>
  <div class="callout-body">
    <p class="callout-title">[업데이트] 본접수가 7월 1일(수) 14:00 시작됩니다</p>
    <p>가민 코리아 공식 발표(6/25) 기준 본접수 일정이 확정됐습니다 — <strong>접수 7/1(수) 14:00 ~ 7/3(금) 17:00, 당첨자 발표 7/7(화) 14:00 이후, 결제 마감 7/9(목) 16:00</strong>. 래플(추첨)이라 접수 기간 내 신청만 하면 되지만, <strong>7/3 17시 마감</strong>과 <strong>당첨 시 7/9 16시 결제 마감</strong>을 놓치면 무효입니다. 신청은 러너블 플랫폼에서 진행되며, HALF·10K 두 종목으로 운영됩니다.</p>
  </div>
</div>

<div class="callout info">
  <span class="callout-icon">⌚</span>
  <div class="callout-body">
    <p class="callout-title">"접수 2분컷" 대회가 뭐길래</p>
    <p>가민런 코리아는 GPS 워치 브랜드 <strong>가민(Garmin)</strong>이 주최하는 데이터 기반 러닝 대회입니다. <strong>2025년 첫 대회(하남)</strong> 때 정원 3,000명이 <strong>접수 시작 약 2분 만에 전량 마감</strong>되며 화제가 됐죠. 소규모 정원 + 각인 메달·기록 포스터 같은 프리미엄 경험 + 가민 워치 연계 혜택이 인기 요인이었습니다. 그 대회가 2026년 <strong>4배 규모로 확대 + 하프 신설</strong>로 돌아옵니다.</p>
  </div>
</div>

<h2>2026 가민런 코리아 한눈에</h2>

<table>
  <thead>
    <tr><th>항목</th><th>내용</th></tr>
  </thead>
  <tbody>
    <tr><td>대회일</td><td><strong>2026년 11월 15일(일)</strong></td></tr>
    <tr><td>장소</td><td><strong>고양종합운동장</strong></td></tr>
    <tr><td>규모</td><td>약 1만 2천명 (작년 3,000명 → 4배 확대)</td></tr>
    <tr><td>코스</td><td><strong>하프(21.1km) 신설</strong> + 10K</td></tr>
    <tr><td>접수 신청</td><td><strong>7월 1일(수) 14:00 ~ 7월 3일(금) 17:00</strong></td></tr>
    <tr><td>당첨 발표</td><td>7월 7일(화) 14:00 이후</td></tr>
    <tr><td>결제 마감</td><td>7월 9일(목) 16:00</td></tr>
    <tr><td>접수 방식</td><td><strong>래플(추첨)</strong></td></tr>
  </tbody>
</table>

<p class="caption">일정·코스 정보는 주최 측 공지 및 러닝 정보 채널 기준입니다. 참가비·정원 세부 배분 등 일부 항목은 공식 접수 페이지 오픈 시 확정되니, 신청 전 가민 공식 채널을 한 번 더 확인하세요.</p>

<h2>가장 큰 변화 ① — 하프코스 신설</h2>

<p>그동안 가민런은 10K·5K 중심이라 "하프를 뛰고 싶다"는 수요가 많았습니다. 2026년 <strong>하프코스(21.1km)가 새로 생기면서</strong>, 풀코스는 아직 부담스럽지만 10K는 넘어선 중급 러너들이 도전하기 좋아졌습니다. 11월 중순 개최라 <strong>가을~초겨울 시즌 하프 도전</strong>으로 일정을 잡기에도 적당합니다.</p>

<h2>가장 큰 변화 ② — 선착순 대신 래플(추첨)</h2>

<p>작년의 "2분컷" 선착순 트라우마를 의식한 듯, 2026년은 <strong>래플(추첨) 방식</strong>입니다. <strong>7월 1~3일 사이 신청</strong>해두면 <strong>7월 7일 당첨자를 발표</strong>합니다. 접수창 오픈 순간 서버와 싸울 필요가 없어졌지만, 인기가 높은 만큼 <strong>경쟁률은 높을 것</strong>으로 보입니다. 신청 기간을 놓치지 않는 게 핵심입니다.</p>

<div class="callout tip">
  <span class="callout-icon">📅</span>
  <div class="callout-body">
    <p class="callout-title">접수 캘린더에 미리 등록</p>
    <p><strong>7월 1일(신청 시작)</strong>과 <strong>7월 7일(발표)</strong>을 미리 알림으로 등록해두세요. 래플은 신청만 해두면 되니 선착순처럼 긴장할 필요는 없지만, <strong>신청 마감(7/3)</strong>을 놓치면 끝입니다. 다른 가을 대회와 일정이 겹치는지도 함께 확인하세요.</p>
  </div>
</div>

<h2>가민런만의 특징 — "데이터로 달리는" 대회</h2>

<p>가민런은 단순 완주 대회가 아니라 <strong>가민의 'Beat Yesterday'(어제의 나를 이긴다) 철학</strong>을 담은 데이터 러닝 대회입니다. 2025년 1회 기준으로 다음과 같은 경험을 제공했습니다(2026년 세부는 변동 가능).</p>

<ul>
  <li><strong>기록 각인 메달·기록 포스터</strong> — 완주 후 개인 기록이 새겨진 메달과 포토월</li>
  <li><strong>가민 워치 체험 부스</strong> — 최신 포러너 등 직접 착용 체험</li>
  <li><strong>페이스별 스타트 그룹</strong> — 기록 제출 시 그룹을 나눠 기록 도전 환경 제공</li>
  <li><strong>기능성 기념품</strong> — 한정 기능성 티셔츠, 완주 기념품 패키지</li>
</ul>

<p>한국은 가민 글로벌 데이터에서 주간 평균·최장 러닝 거리 모두 세계 최상위권일 만큼 러닝 열기가 뜨거운데, 그 흐름과 잘 맞는 대회입니다.</p>

<h2>하프 첫 도전이라면 — 지금부터 준비</h2>

<p>11월 대회면 7월 발표 후 <strong>약 4개월</strong>의 준비 기간이 있습니다. 하프가 처음이라면 지금부터 거리를 차근차근 늘리는 게 안전합니다.</p>

<ul>
  <li><strong>주력 훈련</strong>: 천천히 오래 달리는 LSD로 기초 지구력부터. <a href="/blog/lsd-training-beginner-guide-korea">초보 LSD 훈련 가이드</a></li>
  <li><strong>페이스 전략</strong>: 하프는 페이스 배분이 완주를 좌우합니다. <a href="/blog/marathon-pacing-mental-strategy-guide">마라톤 페이싱·멘탈 전략</a></li>
  <li><strong>여름 훈련</strong>: 7~9월 무더위·장마 대비. <a href="/blog/rainy-season-running-guide-korea">장마철 러닝 가이드</a></li>
  <li><strong>신발 준비</strong>: 하프 완주용 데일리·쿠션화 선택. <a href="/recommend">1분 러닝화 추천</a>으로 본인 조건에 맞는 후보 찾기</li>
</ul>

<div class="callout tip">
  <span class="callout-icon">🏃</span>
  <div class="callout-body">
    <p class="callout-title">다른 가을 대회도 함께 보기</p>
    <p>가민런 추첨에서 떨어지더라도 가을엔 대회가 많습니다. <a href="/blog/2026-chuncheon-marathon-registration-guide">춘천마라톤</a> 등 가을 대표 대회 일정을 함께 확인해 플랜 B를 준비해두세요. 마라톤 일정은 <a href="/marathon">마라톤 캘린더</a>에서 한눈에 볼 수 있습니다.</p>
  </div>
</div>

<h2>FAQ</h2>

<h3>Q. 접수는 선착순인가요?</h3>
<p>아닙니다. <strong>2026년은 래플(추첨)</strong> 방식입니다. <strong>7월 1~3일</strong> 사이에 신청하면 <strong>7월 7일</strong> 당첨자를 발표합니다. 작년의 "2분컷" 선착순과 달리 접수창 오픈 순간 경쟁할 필요는 없지만, 신청 기간(7/3 마감)은 꼭 지켜야 합니다.</p>

<h3>Q. 하프코스가 새로 생긴 게 맞나요?</h3>
<p>네. 2026년 가장 큰 변화가 <strong>하프(21.1km) 신설</strong>입니다. 기존 10K에 더해 하프가 추가돼 중급 러너의 선택지가 넓어졌습니다. 코스 세부는 공식 접수 페이지에서 확정 발표될 예정입니다.</p>

<h3>Q. 가민 워치가 없어도 참가할 수 있나요?</h3>
<p>네, 워치 보유와 무관하게 참가할 수 있습니다. 다만 가민런은 데이터 러닝 콘셉트라 GPS 워치가 있으면 기록·페이스 관리가 더 즐겁습니다. 현장 부스에서 가민 워치를 체험할 수도 있습니다.</p>

<h3>Q. 대회까지 4개월, 하프 준비 어떻게 시작하죠?</h3>
<p>지금 10K를 무리 없이 뛴다면 <strong>주 1회 LSD로 거리를 5~10%씩 점진적으로 늘리는 것</strong>부터 시작하세요. 무더위·장마가 겹치는 시기라 수분·페이스 관리가 중요합니다. <a href="/blog/lsd-training-beginner-guide-korea">LSD 훈련 가이드</a>와 <a href="/blog/marathon-pacing-mental-strategy-guide">페이싱 전략</a>을 참고하세요.</p>
`,
  },
  {
    id: 'li-ning-red-hare-9-ultra-budget-supertrainer',
    slug: 'li-ning-red-hare-9-ultra-budget-supertrainer',
    title: '리닝 적토끼 9 울트라 — "10만원대 카본급" 진짜일까? | 커뮤니티 난리 난 중국 슈퍼 트레이너 팩트체크',
    description: '러닝 커뮤니티에서 화제인 리닝(Li-Ning) 적토끼 9 울트라(Red Hare 9 Ultra). PEBA 3층 미드솔·47mm 스택을 10만원대에 담아 "가성비 카본화"로 불리지만, 실제론 카본이 아닌 유리섬유 플레이트 슈퍼 트레이너입니다. 스펙·가격·구매처(직구)·장단점과 발볼 넓은 한국 러너 주의점까지 팩트체크.',
    thumbnail: '/images/blog/li-ning-red-hare-9-ultra-budget-supertrainer.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-01',
    category: 'review' as const,
    readingTime: 9,
    tags: ['리닝', '적토끼 9 울트라', 'Li-Ning Red Hare', '중국 러닝화', '슈퍼 트레이너', '가성비 러닝화', 'PEBA', '카본 플레이트', '직구 러닝화'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong><a href="/shoes/li-ning-red-hare-9-ultra">리닝 적토끼 9 울트라</a></strong>는 PEBA 3층 미드솔 + 47mm 맥스 스택을 <strong>10만원대(CNY 599)</strong>에 담아 "가성비 슈퍼 트레이너"로 화제</li>
    <li>단, <strong>"카본화"는 오해</strong> — 이 모델은 카본이 아닌 <strong>유리섬유 플레이트</strong>입니다(같은 세대 <a href="/shoes/li-ning-red-hare-9-pro">9 PRO</a>도 공식상 카본이 아닌 TPU 지지편). 레이스용이 아니라 <strong>LSD·훈련용 트레이너</strong></li>
    <li><strong>한국 공식 유통이 없어 직구</strong>(타오바오·알리·KREAM)해야 하고, <strong>미드풋 78mm로 좁아</strong> 발볼 넓은 한국 러너는 주의가 필요합니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🔥</span>
  <div class="callout-body">
    <p class="callout-title">왜 갑자기 화제인가</p>
    <p>2025년 말 출시 후 2026년 들어 해외 러닝 커뮤니티(Reddit r/RunningShoeGeeks)와 국내 러너들 사이에서 "<strong>이 가격에 PEBA?</strong>"라며 입소문을 탄 신발입니다. 중국 브랜드 리닝(Li-Ning)이 <strong>47mm 맥스 스택 + PEBA 기반 3층 미드솔</strong>을 11만원대에 내놓으면서, 25만원이 넘는 서구 카본 슈퍼슈즈와 자주 비교됩니다. 다만 마케팅과 실제 스펙 사이엔 짚어둘 차이가 있습니다.</p>
  </div>
</div>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">팩트체크 ① — "카본화" 아닙니다</p>
    <p>커뮤니티에서 "가성비 카본화"로 불리지만, <strong>적토끼 9 울트라의 플레이트는 카본이 아니라 유리섬유(글라스 파이버)</strong>입니다. 리닝이 "슈퍼 카본" 류의 마케팅을 쓰지만 실제 소재는 유리섬유 지지 플레이트 + 캡슐 폼 조합이에요. 흔히 "카본은 같은 세대의 <a href="/shoes/li-ning-red-hare-9-pro">적토끼 9 PRO</a>에 들어간다"고 알려졌지만, <strong>라이닝 공식 설명상 9 PRO 역시 카본이 아니라 TPU 지지편을 쓰는 낮은 스택의 데일리 트레이너</strong>입니다(일부 마케팅의 T400 카본 주장은 독립 검증이 없습니다). 즉 적토 9 라인업엔 진짜 풀카본 레이서가 없고, 카본 슈퍼슈즈의 추진력을 원한다면 라이닝의 레이싱 전용 비전(飞电) 라인을 봐야 합니다.</p>
  </div>
</div>

<h2>스펙 한눈에 보기</h2>

<table>
  <thead>
    <tr><th>항목</th><th>적토끼 9 울트라</th><th>의미</th></tr>
  </thead>
  <tbody>
    <tr><td>무게</td><td>약 220~246g (US 9~9.5)</td><td>맥스 스택 치고 가벼운 편</td></tr>
    <tr><td>스택 (힐/전족)</td><td>47 / 42mm</td><td>맥스 쿠션 — 충격 흡수 우수</td></tr>
    <tr><td>드롭</td><td>8mm</td><td>힐 착지에 무난</td></tr>
    <tr><td>미드솔</td><td>PEBA 기반 3층 (캡슐 폼)</td><td>소프트 + 고반발 "트램펄린" 느낌</td></tr>
    <tr><td>플레이트</td><td>유리섬유 (카본 ❌)</td><td>지지·안정용, 추진용 아님</td></tr>
    <tr><td>미드풋 너비</td><td>약 78mm</td><td>좁은 편 — 발볼 넓으면 주의</td></tr>
    <tr><td>아웃솔 내구</td><td>~640km+ 확인</td><td>고무 와플, 내구 양호</td></tr>
  </tbody>
</table>

<p class="caption">출시 직후 신상이라 RunRepeat 등 독립 랩의 정식 측정치는 아직 미게시 상태입니다. 위 수치는 제조사 발표 + 해외 리뷰어(Road Trail Run·WeeViews 등) 실측을 종합한 값으로, 일부는 추정치입니다.</p>

<h2>가격과 구매처 — 한국은 직구</h2>

<p>중국 공식가 <strong>CNY 599(약 11만~13만원)</strong>, 글로벌 직구 시 $130~150 수준입니다. <strong>한국 공식 유통이 없어</strong> 직접 구매해야 합니다.</p>

<ul>
  <li><strong>중국 직구</strong>(가장 저렴): 타오바오·알리익스프레스 → 배대지 경유. 11만원대 + 배송비</li>
  <li><strong>리셀/플랫폼</strong>: KREAM·POIZON(더우)·StockX — 편하지만 프리미엄 가격</li>
  <li><strong>주의</strong>: 사이즈 교환·반품이 까다롭습니다. 아래 사이즈 팁을 꼭 확인하세요</li>
</ul>

<h2>장점과 단점</h2>

<div class="pros-cons">
  <div class="pros">
    <h3>👍 장점</h3>
    <ul>
      <li>소프트하면서 반발 강한 "트램펄린" 라이드 — 쿠션화 중 최상위 바운스</li>
      <li>47mm 맥스 스택인데 220~246g로 가벼운 편</li>
      <li>아웃솔 내구 우수(640km+), 힐 홀드·핏 정확</li>
      <li>$250급 트레이너(아식스 슈퍼블라스트 등) 반발을 11만원대에 경험</li>
    </ul>
  </div>
  <div class="cons">
    <h3>👎 단점</h3>
    <ul>
      <li><strong>안정성 부족</strong> — 흔들림이 있어 초보·안정화 필요자 부적합</li>
      <li><strong>좁은 핏</strong>(미드풋 78mm) — 발볼 넓은 한국 러너 불편</li>
      <li>실제 카본이 없어 <strong>레이스 페이스 이상 고강도에선 둔함</strong></li>
      <li>한국 공식 유통 없음 — 사이즈·반품 리스크</li>
    </ul>
  </div>
</div>

<h2>누구에게 맞고, 누구에겐 아닌가</h2>

<p><strong>추천</strong>: LSD·마라톤 페이스 훈련용 트레이너를 저렴하게 찾는 러너, 탄성 있는 쿠션을 부담 없이 경험하고 싶은 취미 러너, 슈퍼슈즈 입문 전 "플레이트 없는 맥스 쿠션" 감각을 익히고 싶은 분. <strong>좁은~표준 발볼</strong>이면 더 잘 맞습니다.</p>

<p><strong>비추천</strong>: <strong>발볼 넓은 한국 러너</strong>(78mm 미드풋 + 와이드 옵션 미확인), 과내전으로 <strong>안정화가 필요한 러너</strong>, 트랙·인터벌 등 <strong>속도 훈련</strong> 중심 러너. 이런 경우 검증된 정규 라인업이 안전합니다.</p>

<div class="callout tip">
  <span class="callout-icon">📏</span>
  <div class="callout-body">
    <p class="callout-title">사이즈·발볼 팁</p>
    <p>미드풋이 좁아 평소 사이즈가 빡빡할 수 있습니다. 발볼이 넓다면 <strong>0.5 사이즈 업</strong>을 고려하거나, 애초에 와이드 토박스 모델을 권합니다. 직구는 교환이 어려우니 본인 발 길이·발볼을 정확히 재고 사이즈 차트를 대조하세요. 발볼·아치별 신발 선택은 <a href="/blog/pronation-type-running-shoe-guide-2026">프로네이션 유형별 가이드</a>를 참고하세요.</p>
  </div>
</div>

<h2>검증된 대안과 비교하고 싶다면</h2>

<p>"가성비 슈퍼 트레이너"가 끌리지만 직구·안정성·발볼이 부담된다면, 한국에서 정식 유통되고 랩 데이터가 검증된 슈퍼 트레이너·고반발 데일리를 먼저 보세요. <a href="/shoes/saucony-endorphin-speed-5">사우코니 엔돌핀 스피드 5</a>(나일론 플레이트 슈퍼 트레이너), <a href="/shoes/nike-pegasus-premium">페가수스 프리미엄</a> 같은 고반발 데일리가 대표적입니다. 진짜 카본 레이싱이 목적이라면 <a href="/blog/carbon-plate-shoes-comparison-2025">카본 플레이트 러닝화 비교</a>를, 신발 용어가 헷갈리면 <a href="/blog/running-shoe-terminology-guide">러닝화 용어 사전</a>을 함께 보세요. 본인 조건에 맞는 후보는 <a href="/recommend">1분 러닝화 추천</a>으로 좁힐 수 있습니다.</p>

<h2>FAQ</h2>

<h3>Q. 정말 카본 슈퍼슈즈처럼 빠른가요?</h3>
<p>아닙니다. <strong>유리섬유 플레이트 + 고반발 폼</strong>이라 "푹신하면서 통통 튀는" 느낌은 강하지만, 카본 특유의 단단한 추진(롤링)은 약합니다. 리뷰어들도 레이스 페이스 이상에선 둔하다고 평가합니다. <strong>훈련·LSD용 트레이너</strong>로 보는 게 정확합니다.</p>

<h3>Q. 발볼 넓은데 신어도 될까요?</h3>
<p>주의가 필요합니다. 미드풋 78mm로 좁은 편이고 와이드 옵션도 확인되지 않았습니다. 발볼이 넓다면 새끼발가락 압박·물집 위험이 있어, 0.5 사이즈 업을 고려하거나 토박스 넓은 다른 모델을 권합니다.</p>

<h3>Q. 초보가 첫 신발로 사도 되나요?</h3>
<p>권하지 않습니다. <strong>안정성이 부족</strong>해 흔들림이 있고, 직구라 사이즈 실패 리스크도 큽니다. 첫 러닝화는 검증된 데일리화가 안전합니다 — <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 가이드</a>를 먼저 보세요.</p>

<h3>Q. 마케팅 문구를 어디까지 믿어야 하나요?</h3>
<p>"95% 에너지 리턴" 같은 제조사 주장은 <strong>독립 랩 검증 전까진 참고만</strong> 하세요. 신상이라 RunRepeat 등의 측정치가 아직 없습니다. 광고 카피가 아닌 데이터로 신발 고르는 법은 <a href="/blog/running-shoe-data-not-marketing-guide-2026">러닝화, 광고에 속지 말고 데이터로 고르세요</a>에서 정리했습니다.</p>
`,
  },
  {
    id: 'running-shoe-data-not-marketing-guide-2026',
    slug: 'running-shoe-data-not-marketing-guide-2026',
    title: '러닝화, 광고에 속지 말고 데이터로 고르세요 | "역대급 반발력"의 진실 — 랩 테스트 5대 지표 읽는 법',
    description: '"착용감 최고·역대급 반발력·에너지 리턴 폭발" 같은 광고 문구는 왜 다 비슷하게 들릴까? RunRepeat 같은 랩 테스트가 측정하는 무게·스택·드롭·에너지 리턴·경도·토박스 5대 지표를 한국 러너 관점에서 읽는 법. 마케팅 카피 대신 객관 데이터로 내 발에 맞는 러닝화 고르는 실전 가이드.',
    thumbnail: '/images/blog/running-shoe-data-not-marketing-guide-2026.webp',
    author: '산초 에디터',
    publishedAt: '2026-06-01',
    category: 'guide' as const,
    readingTime: 11,
    tags: ['러닝화 고르는 법', '랩 테스트', 'RunRepeat', '에너지 리턴', '스택 높이', '드롭', '토박스 너비', '러닝화 데이터', '광고 문구', '러닝화 구매 가이드'],
    content: `
<div class="tldr">
  <span class="tldr-label">3줄 요약</span>
  <ul>
    <li><strong>"착용감 최고·역대급 반발력·에너지 리턴 폭발"은 모든 신발이 똑같이 쓰는 카피</strong> — 광고 문구만으로는 신발을 구분할 수 없습니다</li>
    <li>믿을 건 <strong>랩에서 같은 방식으로 측정한 객관 수치</strong> — 무게·스택·드롭·에너지 리턴·경도·토박스 너비 6가지가 신발의 성격을 결정합니다</li>
    <li>이 글은 <strong>각 지표가 실제 달릴 때 뭘 의미하는지</strong>를 한국 러너 관점에서 풀고, 광고가 아닌 데이터로 고르는 체크리스트를 제시합니다</li>
  </ul>
</div>

<div class="callout info">
  <span class="callout-icon">🔍</span>
  <div class="callout-body">
    <p class="callout-title">왜 이 글을 쓰나</p>
    <p>러닝화 상세페이지를 보면 <strong>"착용감 최고, 엄청 가벼움, 반발력 역대급, 에너지 리턴 폭발"</strong> — 읽을수록 헷갈리고 뭐가 진짜인지 감이 안 옵니다. 문제는 이 표현들이 <strong>모든 브랜드가 똑같이 쓰는 마케팅 카피</strong>라는 점입니다. 광고·협찬에 휘둘리지 않으려면, 신발을 <strong>같은 방식으로 측정한 객관 데이터</strong>로 읽어야 합니다. <a href="https://runrepeat.com" target="_blank" rel="noopener">RunRepeat</a> 같은 랩 테스트 사이트가 그 데이터를 제공하고, 이 사이트의 <a href="/shoes">신발 DB</a>도 그 수치를 한국 러너 기준으로 해석해 담았습니다.</p>
  </div>
</div>

<h2>광고 문구가 절대 말해주지 않는 것</h2>

<p>"에너지 리턴 폭발"이라는 문장에는 <strong>숫자가 없습니다</strong>. 에너지 리턴이 60%인지 70%인지, 어떤 기준으로 측정했는지 알 수 없죠. "엄청 가볍다"도 마찬가지입니다 — 같은 신발도 사이즈에 따라 무게가 다르고, "가볍다"의 기준은 데일리화냐 레이싱화냐에 따라 완전히 다릅니다.</p>

<p>마케팅 카피는 <strong>모든 신발에 동시에 참인 표현</strong>을 고릅니다. 그래서 다 비슷하게 들리는 겁니다. 반대로 랩 테스트는 <strong>모든 신발을 같은 저울·같은 기계로</strong> 재기 때문에, 비로소 "이 신발이 저 신발보다 30g 무겁다"는 비교가 가능해집니다. 핵심은 절대 수치 하나가 아니라 <strong>같은 잣대의 비교 가능성</strong>입니다.</p>

<h2>데이터로 봐야 할 6대 지표</h2>

<p>러닝화의 성격은 사실 몇 개의 숫자로 거의 결정됩니다. 아래 6가지가 "이 신발이 나한테 맞을까?"의 90%를 설명합니다.</p>

<h3>1. 무게 (g) — 가벼울수록 무조건 좋은 게 아니다</h3>
<p>US 9 기준 250g 이하면 가벼운 편, 280g 이상이면 묵직한 편입니다. 다만 <strong>가벼움 = 쿠션·내구 희생</strong>인 경우가 많습니다. 데일리 조깅·LSD라면 280g대라도 쿠션이 두툼한 쪽이 발이 편하고, 레이스·템포에서는 250g 이하 경량화가 유리합니다. "가벼움"을 강조하는 카피보다 <strong>실제 g 수치와 용도</strong>를 보세요.</p>

<h3>2. 스택 높이 (mm) — 쿠션의 절대량</h3>
<p>발바닥과 지면 사이 폼 두께입니다. 힐 40mm 이상이면 맥스 쿠션, 30mm 안팎이면 중간, 25mm 이하면 지면 감각형입니다. <strong>무릎·발목 충격이 걱정되는 입문자·고체중 러너</strong>는 스택이 높은 쪽이 안전하고, 지면 반응을 즐기는 러너는 낮은 쪽을 선호합니다. "푹신하다"는 말보다 <strong>힐/전족부 스택 mm</strong>가 정확합니다.</p>

<h3>3. 드롭 (mm) — 힐과 전족부의 높이 차</h3>
<p>힐 스택에서 전족부 스택을 뺀 값입니다. 8~12mm는 힐 착지에 편하고, 0~6mm는 미드풋·포어풋 착지에 가깝습니다. <strong>아킬레스·종아리가 약한 러너는 드롭이 높은 쪽</strong>이 부담이 적고, 갑자기 저드롭으로 바꾸면 종아리 부상이 오기 쉽습니다. 자세한 용어는 <a href="/blog/running-shoe-terminology-guide">러닝화 용어 사전</a>에서 정리했습니다.</p>

<h3>4. 에너지 리턴 (%) — "반발력"의 실체</h3>
<p>"반발력 역대급"의 정체가 바로 이 수치입니다. 폼이 눌렸다 돌아올 때 에너지를 얼마나 돌려주는지를 %로 잰 값으로, <strong>55% 안팎이면 보통, 65% 이상이면 우수</strong>합니다. PEBA·카본 플레이트 신발이 이 수치가 높습니다. 다만 에너지 리턴이 높다고 모두에게 좋은 건 아닙니다 — 입문자에겐 불안정하게 느껴질 수 있어요. <a href="/blog/carbon-plate-shoes-comparison-2025">카본 플레이트 러닝화 비교</a>에서 이 수치의 함정을 다뤘습니다.</p>

<h3>5. 경도 (HA) — 폼이 단단한가 부드러운가</h3>
<p>미드솔 폼의 무름 정도입니다. 숫자가 낮을수록 부드럽고(쿠션 위주), 높을수록 단단합니다(반응·안정 위주). <strong>차가운 날엔 폼이 더 단단해진다</strong>는 점도 한국 겨울 러닝에선 알아둘 만합니다. "부드럽다/단단하다"는 주관 표현 대신 HA 수치로 보면 신발 성격이 한눈에 보입니다.</p>

<h3>6. 토박스 너비 (mm) — 한국 러너에게 가장 중요</h3>
<p>한국인은 발볼이 넓은 편이라 <strong>이 지표가 착화감을 좌우</strong>합니다. 전족부 너비가 68mm 미만이면 좁고, 75mm 초과면 넓습니다. 발볼 넓은 분이 좁은 토박스 신발을 사면 새끼발가락 통증·물집이 생기니, <strong>좁은 모델은 반드시 와이드(2E/4E) 버전</strong>을 확인하세요. 발 너비·아치별 선택은 <a href="/blog/pronation-type-running-shoe-guide-2026">프로네이션 유형별 러닝화 가이드</a>를 참고하세요.</p>

<h2>랩 테스트는 어떻게 측정할까</h2>

<p>RunRepeat 같은 랩은 같은 신발을 <strong>실제로 잘라보고 기계로 측정</strong>합니다. 디지털 저울로 무게를, 캘리퍼로 스택과 토박스를, 듀로미터로 경도를, 충격 흡수·에너지 리턴 측정기로 폼의 반응을 잽니다. 핵심은 <strong>모든 신발을 똑같은 절차로</strong> 잰다는 것 — 그래서 브랜드 마케팅과 무관하게 신발끼리 줄 세울 수 있습니다.</p>

<div class="callout warning">
  <span class="callout-icon">⚠️</span>
  <div class="callout-body">
    <p class="callout-title">단, 신상은 데이터가 늦게 나온다</p>
    <p>출시 직후(3개월 이내) 신발은 랩 데이터가 아직 없는 경우가 많습니다. 이럴 땐 <strong>전작(이전 버전) 수치 + 제조사가 밝힌 변경점</strong>으로 추정할 수밖에 없습니다. "에너지 리턴 +15% 개선" 같은 제조사 주장은 참고하되, 출시 초기 리뷰는 추정치임을 감안하세요. 이 사이트도 신상은 추정 표기를 달아둡니다.</p>
  </div>
</div>

<h2>한국 러너를 위한 실전 체크리스트</h2>

<p>매장이나 상세페이지에서 신발을 볼 때, 광고 문구 대신 이 순서로 확인하세요.</p>

<ul>
  <li><strong>① 용도부터</strong> — 데일리 조깅인가, 템포·레이스인가, LSD인가? 용도가 무게·스택·드롭의 기준선을 정합니다</li>
  <li><strong>② 토박스 너비</strong> — 발볼 넓으면 68mm대 좁은 모델은 와이드 버전 확인. 한국 러너에겐 1순위</li>
  <li><strong>③ 스택·드롭으로 충격 성향</strong> — 무릎·아킬레스 이력 있으면 스택 높고 드롭 8mm+ 쪽</li>
  <li><strong>④ 에너지 리턴·경도로 성격 확인</strong> — 입문은 부드럽고 안정적인 쪽, 기록은 반발·단단한 쪽</li>
  <li><strong>⑤ 가격 대비 내구</strong> — 아웃솔 내구 수명(보통 500~800km)으로 km당 비용을 따져보기. <a href="/blog/running-shoe-lifespan-replacement-guide">러닝화 수명·교체 가이드</a> 참고</li>
</ul>

<h2>이 사이트를 데이터 도구로 쓰는 법</h2>

<div class="callout tip">
  <span class="callout-icon">🛠️</span>
  <div class="callout-body">
    <p class="callout-title">광고 대신 데이터로 — 3가지 활용법</p>
    <p>① <a href="/recommend">1분 러닝화 추천</a> — 경험·주간 거리·목적·발 너비·부상 이력을 입력하면 데이터 기반으로 후보를 좁혀줍니다. ② <a href="/compare">신발 비교</a> — 두세 신발의 무게·스택·드롭·에너지 리턴을 나란히 놓고 같은 잣대로 봅니다. ③ <a href="/shoes">신발 DB</a> — 각 신발 상세페이지는 랩 수치를 한국 러너 관점(발볼·평발·무릎)으로 해석해 담았습니다. 처음이라면 <a href="/blog/first-running-shoe-guide-2026">첫 러닝화 가이드</a>부터 보세요.</p>
  </div>
</div>

<h2>FAQ</h2>

<h3>Q. 그래서 "에너지 리턴 폭발"은 거짓말인가요?</h3>
<p>거짓말이라기보다 <strong>검증 불가능한 표현</strong>입니다. 숫자도 측정 기준도 없으니 비교가 안 되죠. 같은 신발이라도 랩에서 재면 "에너지 리턴 67%"처럼 구체적 수치가 나오고, 그제야 다른 신발과 줄 세울 수 있습니다. 카피를 무시하라는 게 아니라, <strong>카피 옆의 숫자를 찾아보라</strong>는 뜻입니다.</p>

<h3>Q. 랩 수치가 좋으면 무조건 좋은 신발인가요?</h3>
<p>아닙니다. <strong>나에게 맞는지가 핵심</strong>입니다. 에너지 리턴 70%·저드롭 카본화는 엘리트에겐 최고지만 입문자에겐 불안정하고 부상 위험이 큽니다. 수치는 신발의 <strong>성격</strong>을 알려줄 뿐, "좋다/나쁘다"는 본인 용도·발·실력에 달렸습니다.</p>

<h3>Q. 매장에서 신어보는 것보다 데이터가 중요한가요?</h3>
<p>둘 다 필요합니다. <strong>착화감은 반드시 신어봐야</strong> 알고(특히 토박스·뒤꿈치 홀드), 데이터는 <strong>후보를 좁히고 신어볼 신발을 고르는</strong> 단계에서 강력합니다. 데이터로 3~4개로 줄이고, 매장에서 그 신발들만 신어보면 실패 확률이 크게 줍니다.</p>

<h3>Q. 발볼 넓은데 어떤 수치를 먼저 봐야 하나요?</h3>
<p><strong>토박스 너비(전족부 mm)</strong>가 1순위입니다. 75mm 이상이면 넓은 편이라 편하고, 68mm 미만이면 좁으니 와이드 버전을 찾으세요. 발볼 넓은 한국 러너를 위한 신발은 <a href="/recommend">1분 추천</a>에서 발 너비를 "넓음"으로 선택하면 걸러집니다.</p>
`,
  },
];
