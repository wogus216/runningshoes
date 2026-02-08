'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string | React.ReactNode;
}

const faqs: FAQItem[] = [
  // 러닝화 선택
  {
    id: 'size',
    category: '러닝화 선택',
    question: '러닝화 사이즈는 평소 신발보다 크게 사야 하나요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>네, 0.5~1cm 여유를 두는 것이 좋습니다.</strong> 러닝할 때 발이 부으면서 앞으로 밀리기 때문에,
          평소 신발보다 약간 큰 사이즈를 선택해야 합니다.
        </p>
        <p className="mb-3">
          <strong>체크 방법:</strong> 신발을 신고 앞코에 발을 붙였을 때, 뒤꿈치에 새끼손가락 하나가 들어갈 정도의 공간이 있어야 합니다.
          발가락이 닿으면 너무 작은 것이고, 손가락 2개가 들어가면 너무 큰 것입니다.
        </p>
        <p className="text-sm text-tertiary">
          브랜드마다 사이즈 편차가 있으므로 (나이키는 작게 나오고, 아식스는 크게 나오는 편),
          처음 구매하는 브랜드는 매장에서 직접 신어보는 것을 추천합니다.
        </p>
      </>
    ),
  },
  {
    id: 'width',
    category: '러닝화 선택',
    question: '발볼이 넓은데 어떤 브랜드가 좋나요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>한국인은 발볼이 넓은 편이므로, 토박스 너비가 중요합니다.</strong>
          일반적으로 68-75mm가 표준, 75mm 이상이면 넓은 편입니다.
        </p>
        <p className="mb-3">
          <strong>발볼 넓은 러너 추천 브랜드:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 flex-shrink-0"></span>
            <div>
              <strong>New Balance</strong> - 대부분 모델에서 와이드(2E/4E) 옵션 제공. 1080, Fresh Foam X 시리즈 추천
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 flex-shrink-0"></span>
            <div>
              <strong>Hoka</strong> - 기본 모델도 넓은 편 (73-75mm). Bondi, Clifton 시리즈
            </div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 flex-shrink-0"></span>
            <div>
              <strong>Brooks</strong> - Ghost Wide, Adrenaline GTS Wide 등 와이드 옵션 다양
            </div>
          </li>
        </ul>
        <p className="text-sm text-tertiary">
          피해야 할 브랜드: 나이키(좁음), On(좁음), Saucony 일부 모델. 각 신발의 토박스 너비는 상세 페이지에서 확인하세요.
        </p>
      </>
    ),
  },
  {
    id: 'cushioning',
    category: '러닝화 선택',
    question: '쿠셔닝이 좋은 신발이 무조건 좋은가요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>아닙니다. 목적과 개인 성향에 따라 달라집니다.</strong> 쿠셔닝이 좋으면 충격 흡수는 뛰어나지만,
          지면 감각이 떨어지고 무게가 늘어날 수 있습니다.
        </p>
        <p className="mb-3">
          <strong>쿠셔닝 많은 신발 추천 대상:</strong> 체중이 많이 나가거나, 무릎/발바닥 부상 이력이 있거나, 장거리 러닝 (하프/풀 마라톤)을 하는 경우
        </p>
        <p className="mb-3">
          <strong>쿠셔닝 적당한 신발 추천 대상:</strong> 빠른 페이스를 원하거나, 짧은 거리 위주로 뛰거나, 반발력을 중시하는 경우
        </p>
        <p className="text-sm text-tertiary">
          쿠셔닝은 SA(충격흡수) 수치로 확인할 수 있으며, 130 이상이면 매우 좋은 편입니다. 각 신발의 SA 점수는 상세 페이지 생체역학 섹션에서 확인하세요.
        </p>
      </>
    ),
  },
  {
    id: 'beginner',
    category: '러닝화 선택',
    question: '러닝 입문자인데 어떤 신발을 골라야 하나요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>입문자는 쿠셔닝과 안정성이 좋은 데일리 러닝화를 추천합니다.</strong> 처음에는 러닝 폼이 불안정하고
          근력이 부족하므로, 부상을 예방할 수 있는 신발이 중요합니다.
        </p>
        <p className="mb-3">
          <strong>입문자 추천 모델:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
            <div><strong>New Balance 1080</strong> - 부드러운 쿠셔닝, 넓은 토박스 (20만원대)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
            <div><strong>Hoka Clifton</strong> - 가볍고 푹신한 쿠셔닝 (19만원대)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
            <div><strong>Asics GT-2000</strong> - 안정화 기능, 가성비 좋음 (18만원대)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
            <div><strong>Brooks Ghost</strong> - 밸런스 좋은 만능 러닝화 (18만원대)</div>
          </li>
        </ul>
        <p className="text-sm text-tertiary">
          카테고리 필터에서 &quot;입문화&quot; 또는 &quot;데일리&quot;를 선택하면 더 많은 추천 신발을 볼 수 있습니다.
        </p>
      </>
    ),
  },

  // 구매 & 관리
  {
    id: 'online',
    category: '구매 & 관리',
    question: '온라인으로 러닝화를 구매해도 괜찮을까요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>이미 신어본 모델이라면 온라인이 저렴합니다.</strong> 하지만 처음 구매하는 브랜드/모델이라면
          매장에서 직접 신어보는 것을 추천합니다.
        </p>
        <p className="mb-3">
          <strong>온라인 구매 팁:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 flex-shrink-0"></span>
            <div>반품/교환 정책 확인 (무료 반품 기간)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 flex-shrink-0"></span>
            <div>리뷰에서 사이즈 언급 확인 (&quot;작게 나와요&quot;, &quot;크게 나와요&quot;)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 flex-shrink-0"></span>
            <div>본 사이트의 토박스 너비 데이터 확인</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 flex-shrink-0"></span>
            <div>실내에서 먼저 착화 후 실외 러닝 (반품 가능하도록)</div>
          </li>
        </ul>
        <p className="text-sm text-tertiary">
          본 사이트의 구매 링크는 네이버 쇼핑 커넥트/쿠팡 파트너스 제휴 링크이며, 구매 시 사이트 운영에 도움이 됩니다.
        </p>
      </>
    ),
  },
  {
    id: 'lifespan',
    category: '구매 & 관리',
    question: '러닝화는 몇 km마다 교체해야 하나요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>일반적으로 600-800km가 교체 시기입니다.</strong> 신발 무게, 러닝 스타일, 체중에 따라 달라지지만,
          쿠셔닝 성능이 떨어지면 부상 위험이 높아지므로 적절한 교체가 중요합니다.
        </p>
        <p className="mb-3">
          <strong>교체 시기 판단법:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
            <div>미드솔을 눌렀을 때 예전만큼 탄력이 없음</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
            <div>아웃솔(밑창)이 심하게 닳아서 패턴이 거의 안 보임</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
            <div>뒤꿈치 카운터가 찌그러지거나 내부 구조가 무너짐</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-orange-500 mt-2 flex-shrink-0"></span>
            <div>러닝 후 무릎/발바닥에 통증이 생기기 시작함</div>
          </li>
        </ul>
        <p className="text-sm text-tertiary">
          각 신발의 예상 내구성은 상세 페이지의 &quot;내구성&quot; 항목에서 확인할 수 있습니다. 고무 아웃솔이 두꺼운 신발일수록 오래 갑니다.
        </p>
      </>
    ),
  },
  {
    id: 'clean',
    category: '구매 & 관리',
    question: '러닝화는 어떻게 세탁하나요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>손세탁을 권장하며, 세탁기는 신발 손상 위험이 있습니다.</strong> 특히 쿠셔닝 폼이나 카본 플레이트가 들어간 신발은
          세탁기 사용을 피해야 합니다.
        </p>
        <p className="mb-3">
          <strong>세탁 방법:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
            <div>깔창(insole) 제거 후 따로 세탁</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
            <div>미지근한 물에 중성 세제를 풀고 부드러운 솔로 문질러 닦기</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
            <div>헹군 후 신문지를 넣어 그늘에서 자연 건조 (절대 건조기 사용 금지)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-500 mt-2 flex-shrink-0"></span>
            <div>끈은 풀어서 따로 세탁</div>
          </li>
        </ul>
        <p className="text-sm text-tertiary">
          직사광선이나 열풍 건조기는 폼의 변형과 접착제 손상을 유발할 수 있습니다. 러닝화 2족을 번갈아 신으면 수명이 더 오래 갑니다.
        </p>
      </>
    ),
  },
  {
    id: 'rotation',
    category: '구매 & 관리',
    question: '러닝화를 여러 켤레 돌려 신는 게 좋나요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>예, 2-3켤레를 돌려 신으면 수명이 늘어나고 부상 예방에도 도움이 됩니다.</strong>
          신발 폼이 압축 후 회복하는 데 24-48시간이 걸리므로, 매일 같은 신발을 신으면 쿠셔닝 성능이 빨리 떨어집니다.
        </p>
        <p className="mb-3">
          <strong>추천 로테이션 전략:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 flex-shrink-0"></span>
            <div><strong>데일리 트레이닝용</strong> - 쿠셔닝 좋은 신발 (예: Hoka Clifton, New Balance 1080)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 flex-shrink-0"></span>
            <div><strong>스피드 훈련용</strong> - 가볍고 반발력 좋은 신발 (예: New Balance Rebel, Saucony Kinvara)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-stone-400 mt-2 flex-shrink-0"></span>
            <div><strong>레이스용</strong> - 카본 플레이트 신발 (예: Nike Vaporfly, Asics Metaspeed)</div>
          </li>
        </ul>
        <p className="text-sm text-tertiary">
          다른 타입의 신발을 돌려 신으면 발과 다리 근육에 다양한 자극을 주어 과사용 부상(repetitive strain injury)을 예방할 수 있습니다.
        </p>
      </>
    ),
  },

  // 부상 & 건강
  {
    id: 'knee',
    category: '부상 & 건강',
    question: '무릎이 아픈데 어떤 신발이 좋을까요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>쿠셔닝이 좋고 안정성이 있는 신발을 선택해야 합니다.</strong> 무릎 통증은 주로 충격 흡수 부족이나
          오버프로네이션(과도한 내전)으로 인해 발생합니다.
        </p>
        <p className="mb-3">
          <strong>무릎 보호 추천 신발:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
            <div><strong>Hoka Bondi</strong> - 최고 수준의 쿠셔닝 (SA 145+)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
            <div><strong>Brooks Glycerin</strong> - DNA Loft 쿠셔닝, 부드러운 착지</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
            <div><strong>Asics GT-2000</strong> - 안정화 + 쿠셔닝, 가성비 좋음</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 mt-2 flex-shrink-0"></span>
            <div><strong>New Balance 1080</strong> - Fresh Foam X, 넓은 토박스</div>
          </li>
        </ul>
        <p className="text-sm text-tertiary">
          각 신발의 &quot;부상 예방&quot; 섹션에서 무릎 통증에 대한 평가를 확인할 수 있습니다.
          통증이 심하면 러닝 전문의나 물리치료사와 상담하세요.
        </p>
      </>
    ),
  },
  {
    id: 'flatfoot',
    category: '부상 & 건강',
    question: '평발인데 특별히 신경 써야 할 게 있나요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>평발은 아치 지지력과 안정성이 중요합니다.</strong> 발 아치가 낮으면 오버프로네이션이 발생하기 쉽고,
          이는 무릎과 발목에 부담을 줄 수 있습니다.
        </p>
        <p className="mb-3">
          <strong>평발 추천 신발 특징:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
            <div>미드풋 안정화 기술 (가이드레일, 듀얼 덴시티 폼)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
            <div>적당한 아치 서포트 (너무 강하면 오히려 불편)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
            <div>구조적 안정성 (힐 카운터가 튼튼)</div>
          </li>
        </ul>
        <p className="mb-3">
          <strong>평발 추천 모델:</strong>
        </p>
        <ul className="space-y-1 mb-3">
          <li className="text-sm">Asics GT-2000, Brooks Adrenaline GTS, New Balance 860, Saucony Guide</li>
        </ul>
        <p className="text-sm text-tertiary">
          본 사이트의 &quot;한국인 발 적합성&quot; 섹션에서 평발 적합도(Excellent/Good/Fair/Poor)를 확인할 수 있습니다.
        </p>
      </>
    ),
  },
  {
    id: 'achilles',
    category: '부상 & 건강',
    question: '아킬레스건이 자주 아픈데 어떤 신발을 피해야 하나요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>드롭(heel-to-toe drop)이 너무 낮은 신발은 피하세요.</strong> 아킬레스건은 뒤꿈치가 낮고 발끝이 높은
          자세에서 스트레스를 많이 받습니다.
        </p>
        <p className="mb-3">
          <strong>드롭 가이드:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></span>
            <div><strong>피해야 함:</strong> 0-4mm 드롭 (미니멀 슈즈, 레이싱 플랫)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></span>
            <div><strong>주의 필요:</strong> 5-7mm 드롭 (속도 훈련용 신발)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></span>
            <div><strong>안전함:</strong> 8-12mm 드롭 (데일리 러닝화)</div>
          </li>
        </ul>
        <p className="mb-3">
          <strong>추가 팁:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></span>
            <div>뒤꿈치 카운터가 부드럽고 패딩이 충분한 신발 선택</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></span>
            <div>급격한 드롭 변화는 금물 (10mm → 4mm는 단계적으로)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-pink-500 mt-2 flex-shrink-0"></span>
            <div>러닝 전후 아킬레스건 스트레칭 필수</div>
          </li>
        </ul>
        <p className="text-sm text-tertiary">
          각 신발의 드롭은 상세 페이지의 &quot;생체역학&quot; 섹션에서 확인할 수 있습니다.
          아킬레스 통증이 지속되면 반드시 전문의 상담을 받으세요.
        </p>
      </>
    ),
  },
  {
    id: 'plantar',
    category: '부상 & 건강',
    question: '발바닥(족저근막)이 아픈데 도움이 되는 신발이 있나요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>아치 서포트와 힐 쿠셔닝이 좋은 신발을 선택하세요.</strong> 족저근막염은 발바닥 아치에 과도한 스트레스가
          누적되어 발생하며, 특히 아침 첫 걸음에 통증이 심합니다.
        </p>
        <p className="mb-3">
          <strong>족저근막염 완화 신발 특징:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
            <div>넉넉한 힐 쿠셔닝 (SA 130 이상)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
            <div>적당한 아치 서포트 (너무 강하면 역효과)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
            <div>높은 드롭 (8-12mm, 발바닥 스트레칭 감소)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500 mt-2 flex-shrink-0"></span>
            <div>적당한 강성 (너무 부드러우면 불안정)</div>
          </li>
        </ul>
        <p className="mb-3">
          <strong>추천 모델:</strong> Hoka Bondi, Brooks Glycerin, Asics GT-2000, New Balance 1080
        </p>
        <p className="text-sm text-tertiary">
          발바닥 통증이 심하면 러닝을 중단하고 휴식을 취하세요. 스트레칭, 마사지, 냉찜질을 병행하고,
          증상이 지속되면 족부 전문의와 상담하세요. 맞춤 깔창(orthotics)도 효과적입니다.
        </p>
      </>
    ),
  },

  // 에너지 젤
  {
    id: 'gel-timing',
    category: '에너지 젤',
    question: '에너지 젤은 언제 먹어야 하나요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>하프/풀 마라톤에서는 45-60분마다 섭취를 권장합니다.</strong> 신체는 보통 90분 정도까지는 저장된
          글리코겐으로 버틸 수 있지만, 장거리 레이스에서는 미리 보충하는 것이 좋습니다.
        </p>
        <p className="mb-3">
          <strong>섭취 타이밍 가이드:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
            <div><strong>하프 마라톤:</strong> 출발 전 15분 + 8-9km 지점에서 1개</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
            <div><strong>풀 마라톤:</strong> 출발 전 15분 + 10km, 20km, 30km, 35km 지점에서 각 1개</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0"></span>
            <div><strong>울트라 마라톤:</strong> 30-45분마다 섭취</div>
          </li>
        </ul>
        <p className="text-sm text-tertiary">
          레이스 당일 처음 먹는 젤은 위험합니다. 반드시 훈련 중에 미리 테스트하여 자신에게 맞는 제품과 타이밍을 찾으세요.
          젤 섭취 후에는 반드시 물을 함께 마셔야 흡수가 잘 됩니다.
        </p>
      </>
    ),
  },
  {
    id: 'gel-stomach',
    category: '에너지 젤',
    question: '에너지 젤을 먹으면 속이 안 좋은데 어떻게 하나요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>위장 장애는 흔한 문제이며, 제품 선택과 섭취 방법으로 개선할 수 있습니다.</strong>
          고농축 탄수화물을 빠르게 섭취하면 위장에 부담을 줄 수 있습니다.
        </p>
        <p className="mb-3">
          <strong>위장 친화적인 젤 선택법:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-500 mt-2 flex-shrink-0"></span>
            <div><strong>등장성(Isotonic) 젤 선택:</strong> Maurten Gel 100, SiS GO Isotonic (물 없이도 OK)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-500 mt-2 flex-shrink-0"></span>
            <div><strong>카페인 무첨가:</strong> 카페인은 위산 분비를 촉진하여 속쓰림 유발 가능</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-500 mt-2 flex-shrink-0"></span>
            <div><strong>천천히 섭취:</strong> 한 번에 먹지 말고 3-5분에 걸쳐 나눠 먹기</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-500 mt-2 flex-shrink-0"></span>
            <div><strong>충분한 물 섭취:</strong> 젤 1개당 물 150-200ml 함께 마시기</div>
          </li>
        </ul>
        <p className="mb-3">
          <strong>대안:</strong> 젤이 맞지 않으면 스포츠 음료, 에너지바, 바나나, 젤리 같은 다른 형태의 탄수화물을 시도해보세요.
        </p>
        <p className="text-sm text-tertiary">
          본 사이트의 에너지 젤 페이지에서 &quot;위장 친화성&quot; 등급을 확인할 수 있습니다.
          훈련 중에 다양한 제품을 테스트하여 자신에게 맞는 것을 찾으세요.
        </p>
      </>
    ),
  },
  {
    id: 'gel-necessity',
    category: '에너지 젤',
    question: '5km나 10km 달릴 때도 에너지 젤이 필요한가요?',
    answer: (
      <>
        <p className="mb-3">
          <strong>아니요, 60분 이내의 짧은 러닝에서는 에너지 젤이 필요하지 않습니다.</strong>
          신체는 저장된 글리코겐으로 60-90분 정도는 충분히 버틸 수 있습니다.
        </p>
        <p className="mb-3">
          <strong>거리/시간별 가이드:</strong>
        </p>
        <ul className="space-y-2 mb-3">
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
            <div><strong>5km-10km (30-60분):</strong> 물만 마시면 충분. 에너지 젤 불필요</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
            <div><strong>하프 마라톤 (90-120분):</strong> 1-2개 권장 (개인차 있음)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
            <div><strong>풀 마라톤 (3-5시간):</strong> 4-6개 권장 (45-60분마다)</div>
          </li>
          <li className="flex items-start gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></span>
            <div><strong>울트라 마라톤:</strong> 젤 + 고체 음식 조합</div>
          </li>
        </ul>
        <p className="text-sm text-tertiary">
          짧은 거리에서는 러닝 전 식사(탄수화물 중심)가 더 중요합니다. 레이스 2-3시간 전에 바나나, 오트밀, 토스트 등을 섭취하세요.
          물은 거리와 무관하게 탈수 방지를 위해 항상 마셔야 합니다.
        </p>
      </>
    ),
  },
];

function FAQAccordion({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-primary pr-4">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-secondary flex-shrink-0 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-border bg-gray-50/50 dark:bg-gray-800/50">
          <div className="text-secondary leading-relaxed">{item.answer}</div>
        </div>
      )}
    </div>
  );
}

// Helper to extract plain text from React elements for structured data
function extractTextFromReactNode(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractTextFromReactNode).join(' ');
  if (
    typeof node === 'object' &&
    node !== null &&
    'props' in node &&
    typeof node.props === 'object' &&
    node.props !== null &&
    'children' in node.props
  ) {
    const nodeProps = node.props as { children?: React.ReactNode };
    return extractTextFromReactNode(nodeProps.children);
  }
  return '';
}

export default function FAQPage() {
  const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

  // Generate FAQ structured data
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          typeof faq.answer === 'string'
            ? faq.answer
            : extractTextFromReactNode(faq.answer),
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
        <h1 className="text-3xl font-bold mb-3">자주 묻는 질문 (FAQ)</h1>
        <p className="text-secondary">
          러닝화 선택, 구매, 관리, 부상 예방, 에너지 젤에 대한 자주 묻는 질문에 답변드립니다.
        </p>
      </div>

      <div className="space-y-8">
        {categories.map((category) => (
          <section key={category} className="section-card p-6">
            <h2 className="text-xl font-semibold text-primary mb-4 pb-3 border-b border-border">
              {category}
            </h2>
            <div className="space-y-3">
              {faqs
                .filter((faq) => faq.category === category)
                .map((faq) => (
                  <FAQAccordion key={faq.id} item={faq} />
                ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-8 section-card p-6 bg-stone-50 dark:bg-stone-900/30 border-stone-200 dark:border-stone-700">
        <h3 className="font-semibold text-primary mb-2">답변을 찾지 못하셨나요?</h3>
        <p className="text-secondary mb-3">
          추가 질문이나 사이트 관련 문의는 아래 이메일로 연락 주세요.
        </p>
        <a
          href="mailto:sanchokwon216@gmail.com"
          className="text-accent hover:underline font-medium"
        >
          sanchokwon216@gmail.com
        </a>
      </div>

      <p className="text-sm text-tertiary mt-6">최종 수정일: 2026년 2월 4일</p>
      </div>
    </>
  );
}
