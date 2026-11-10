/**
 * FAQ 본문 데이터 — 2026-09-03 681줄짜리 page.tsx 에서 분리. 답변에 JSX 가 섞여 있어 .tsx 로 둔다.
 * 항목 추가는 이 파일만 고치면 된다. 페이지(page.tsx)는 아코디언·검색 UI 만 가진다.
 */

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string | React.ReactNode;
}

export const faqs: FAQItem[] = [
  {
    id: "size",
    category: "러닝화 선택",
    question: "러닝화 사이즈는 평소 신발보다 크게 사야 하나요?",
    answer: (
      <>
        <p className="mb-3">{"평소 신발에서 일괄적으로 몇 mm를 더하기보다 실제 모델을 양쪽 발에 신고 확인하세요. 러닝에 쓸 양말을 착용하고, 가장 긴 발가락 앞 여유·발가락 움직임·뒤꿈치 고정을 함께 봅니다."}</p>
        <p className="mb-3">{"AAOS는 하루 활동 뒤나 운동 후에 신어 보고 매장에서 걸어 보도록 안내합니다. 사이즈표와 시착에서 발가락 공간·앞발 압박·뒤꿈치 고정을 함께 확인하세요."}</p>
        <p className="mb-3">{"온라인 주문이라면 해당 모델·성별·판매 국가의 사이즈표와 선택한 폭 옵션을 확인하세요. 같은 브랜드라도 모델·버전이 달라지면 다시 확인하는 편이 좋습니다."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.orthoinfo.org/bodypart/foot-ankle/athletic-shoes/"} target="_blank" rel="noopener noreferrer" className="underline">{"AAOS 운동화 착화 확인"}</a>
        </p>
      </>
    ),
  },
  {
    id: "width",
    category: "러닝화 선택",
    question: "발볼이 넓은데 어떤 브랜드가 좋나요?",
    answer: (
      <>
        <p className="mb-3">{"브랜드 이름보다 정확한 모델의 폭 옵션과 실제 착화 상태를 먼저 확인하세요. 한국 판매 페이지에서 와이드 여부를 확인한 모델은 사이트의 와이드 조건으로 모아 볼 수 있습니다."}</p>
        <p className="mb-3">{"실험실의 엄지 부위 내부 폭, 앞발의 가장 넓은 부위, 제조사의 2E·4E 표기는 측정 위치와 의미가 다릅니다. 하나의 mm 경계로 모든 제품을 표준·넓음으로 분류하거나 개인 발볼에 그대로 대입하지 않습니다."}</p>
        <p className="mb-3">{"양말을 신고 앞발이 압박되는지, 발가락이 움직이는지, 길이를 늘렸을 때 뒤꿈치가 뜨는지도 함께 확인하세요. 확인한 와이드 판매 옵션이 개인의 맞음을 보장하는 것은 아닙니다."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.orthoinfo.org/bodypart/foot-ankle/athletic-shoes/"} target="_blank" rel="noopener noreferrer" className="underline">{"AAOS 운동화 착화 확인"}</a>
          {" · "}
          <a href={"https://runrepeat.com/nike-pegasus-41"} target="_blank" rel="noopener noreferrer" className="underline">{"RunRepeat Pegasus41 앞발·엄지 부위 폭 측정 구분"}</a>
        </p>
      </>
    ),
  },
  {
    id: "cushioning",
    category: "러닝화 선택",
    question: "쿠셔닝이 좋은 신발이 무조건 좋은가요?",
    answer: (
      <>
        <p className="mb-3">{"쿠션 구조·실험실 충격흡수 수치와 개인의 편안함, 부상 예방 효과는 각각 확인할 항목입니다. 충격흡수 수치 하나로 무릎에 좋은 신발이나 모든 러너에게 가장 좋은 신발을 정하지 않습니다."}</p>
        <p className="mb-3">{"Cochrane 2022 검토는 신발 유형별 부상 예방 비교에서 근거가 제한적이거나 불확실한 부분을 보고했습니다. 이 검토의 연구 검색 기준은2021년6월이며 현재 판매 모델별 치료 효과를 인증한 자료가 아닙니다."}</p>
        <p className="mb-3">{"구매할 때는 상세 페이지의 측정 출처·시험 사이즈를 보고 실제 시착에서 압박·뒤꿈치 고정·움직일 때의 느낌을 비교하세요."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.cochrane.org/evidence/CD013368_running-shoes-preventing-lower-limb-running-injuries-adults"} target="_blank" rel="noopener noreferrer" className="underline">{"Cochrane 2022 신발과 러닝 부상 검토·연구 검색 2021년6월"}</a>
          {" · "}
          <a href={"https://www.orthoinfo.org/bodypart/foot-ankle/athletic-shoes/"} target="_blank" rel="noopener noreferrer" className="underline">{"AAOS 운동화 착화 확인"}</a>
        </p>
      </>
    ),
  },
  {
    id: "beginner",
    category: "러닝화 선택",
    question: "러닝 입문자인데 어떤 신발을 골라야 하나요?",
    answer: (
      <>
        <p className="mb-3">{"먼저 달릴 노면, 쓸 수 있는 예산, 실제 발에 맞는 길이·폭을 정하세요. 사이트 추천은 확인 가격과 용도 분류, 한국 와이드 옵션으로 후보를 좁히는 도구입니다."}</p>
        <p className="mb-3">{"무게는 측정 출처와 시험 사이즈를 함께 보고, 탄소 플레이트 유무와 원문 리뷰의 장단점도 비교하세요. 실제 착화에서 편하게 사용할 수 있는 후보를 좁히는 과정이 필요합니다."}</p>
        <p className="mb-3">{"실제 신을 양말로 양발을 시착하고 걸어 보세요. 쿠션·안정화라는 분류는 개인의 부상 예방 효과를 보장하는 임상 등급이 아닙니다."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.orthoinfo.org/bodypart/foot-ankle/athletic-shoes/"} target="_blank" rel="noopener noreferrer" className="underline">{"AAOS 운동화 착화 확인"}</a>
          {" · "}
          <a href={"https://www.cochrane.org/evidence/CD013368_running-shoes-preventing-lower-limb-running-injuries-adults"} target="_blank" rel="noopener noreferrer" className="underline">{"Cochrane 2022 신발과 러닝 부상 검토·연구 검색 2021년6월"}</a>
        </p>
      </>
    ),
  },
  {
    id: "online",
    category: "구매 & 관리",
    question: "온라인으로 러닝화를 구매해도 괜찮을까요?",
    answer: (
      <>
        <p className="mb-3">{"온라인에서는 같은 모델명이어도 세대·성별·폭·색상 코드와 묶음 구성이 다를 수 있습니다. 구매 버튼을 누르기 전에 연결된 판매 상품의 정확한 제품명과 옵션을 확인하세요."}</p>
        <p className="mb-3">{"현재 판매 가격·배송비·교환과 반품 조건은 해당 판매처의 실제 안내를 확인해야 합니다. 사이트의 확인 날짜가 지난 가격이나 한 옵션의 품절 상태를 모든 판매처·모든 사이즈의 현재 상태로 확대하지 않습니다."}</p>
        <p className="mb-3">{"착화가 불확실하면 시착으로 길이·앞발 압박·뒤꿈치 고정을 확인한 뒤 판단하세요. 판매처 링크가 있다는 사실만으로 사이트가 정품·재고·개인 주문의 처리를 확인한 것은 아닙니다."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.orthoinfo.org/bodypart/foot-ankle/athletic-shoes/"} target="_blank" rel="noopener noreferrer" className="underline">{"AAOS 운동화 착화 확인"}</a>
        </p>
      </>
    ),
  },
  {
    id: "lifespan",
    category: "구매 & 관리",
    question: "러닝화는 몇 km마다 교체해야 하나요?",
    answer: (
      <>
        <p className="mb-3">{"모든 러닝화에 공통인 교체 km를 확정할 수는 없습니다. 누적 거리는 점검 기록으로 남기되 사용 노면·빈도와 실제 밑창·어퍼·신발 형태 변화를 함께 확인하세요."}</p>
        <p className="mb-3">{"ASICS의 관리 안내는 밑창 고무가 닳아 폼이 드러나는 상태, 어퍼 파손, 뒤꿈치 고정 구조의 변화, 평평한 곳에서 신발이 기울어지는 상태 등을 점검 대상으로 제시합니다. 이는 각 모델의 실제 주행 수명을 시험한 km 인증값이 아닙니다."}</p>
        <p className="mb-3">{"실험실 마모 깊이 mm를 남은 주행 거리로 환산하지 않습니다. 새 통증이 생겼다면 신발 수명만 원인으로 단정하기보다 통증과 훈련 변화도 함께 확인하세요."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.asics.com/gb/en-gb/asics-advice/changing-your-running-shoes-knowing-when-is-the-right-time/"} target="_blank" rel="noopener noreferrer" className="underline">{"ASICS 교체 시 관찰할 마모·변형 안내"}</a>
        </p>
      </>
    ),
  },
  {
    id: "clean",
    category: "구매 & 관리",
    question: "러닝화는 어떻게 세탁하나요?",
    answer: (
      <>
        <p className="mb-3">{"먼저 해당 모델의 제조사 관리 지시를 확인하세요. Nike는 자사 신발 관리 안내에서 세탁기 사용을 권하지 않고, 부드러운 세정액으로 닦은 뒤 자연건조하도록 설명합니다."}</p>
        <p className="mb-3">{"겉의 흙을 부드러운 솔로 털고 소재에 맞는 방법으로 오염을 닦으세요. 스웨이드 등은 별도 관리가 필요하며, 젖은 신발은 충분히 말린 뒤 사용하세요."}</p>
        <p className="mb-3">{"Nike는 건조기의 열이 신발을 손상시킬 수 있다고 안내합니다. 이 설명을 모든 브랜드·모든 소재에 같은 세탁법이 적용된다는 뜻으로 확대하지 않고 본인 제품의 지시를 우선합니다."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.nike.com/a/can-you-put-shoes-in-the-washer/"} target="_blank" rel="noopener noreferrer" className="underline">{"Nike 세척·자연건조 안내"}</a>
        </p>
      </>
    ),
  },
  {
    id: "rotation",
    category: "구매 & 관리",
    question: "러닝화를 여러 켤레 돌려 신는 게 좋나요?",
    answer: (
      <>
        <p className="mb-3">{"다른 용도·젖은 신발의 건조·착화 선호 때문에 여러 켤레를 구분해 사용할 수 있습니다. 필요한 켤레 수는 본인의 사용과 예산으로 결정하세요."}</p>
        <p className="mb-3">{"264명을22주 추적한 연구에서는 여러 신발을 병행한 러너와 낮은 부상 위험 사이의 관련성이 관찰됐습니다. 무작위 배정으로 모든 사람의 예방 효과를 확정한 연구가 아니므로,2~3켤레를 사면 부상이 예방되거나 수명이 반드시 늘어난다고 보장하지 않습니다."}</p>
        <p className="mb-3">{"각 신발의 사용 거리와 마모를 따로 기록하세요. 새 모델로 바꿨을 때는 실제 달리는 동안 압박과 불편이 생기는지 확인하는 자료로 삼을 수 있습니다."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://pubmed.ncbi.nlm.nih.gov/24286345/"} target="_blank" rel="noopener noreferrer" className="underline">{"Malisoux 등·264명 22주 관찰연구"}</a>
        </p>
      </>
    ),
  },
  {
    id: "knee",
    category: "부상 & 건강",
    question: "무릎이 아픈데 어떤 신발이 좋을까요?",
    answer: (
      <>
        <p className="mb-3">{"무릎 통증의 원인은 하나가 아니므로 쿠션 부족이나 과내전만으로 판단하지 않습니다. 특정 신발 모델을 무릎 보호·치료 순위로 추천할 근거를 이 사이트가 확보한 것은 아닙니다."}</p>
        <p className="mb-3">{"통증이 반복되거나 호전되지 않으면 상태 평가를 받으세요. 체중을 싣기 어렵거나 심한 붓기·변형, 열감과 발열이 동반되는 경우에는 신속한 의료 평가가 필요합니다."}</p>
        <p className="mb-3">{"진료·상담 때 통증 위치, 시작 시점, 최근 훈련량과 신발 변경을 함께 설명하면 도움이 됩니다. 제품 선택은 그 평가와 실제 착화 상태를 바탕으로 확인하세요."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.nhs.uk/symptoms/knee-pain/"} target="_blank" rel="noopener noreferrer" className="underline">{"NHS 무릎 통증 안내"}</a>
          {" · "}
          <a href={"https://www.cochrane.org/evidence/CD013368_running-shoes-preventing-lower-limb-running-injuries-adults"} target="_blank" rel="noopener noreferrer" className="underline">{"Cochrane 2022 신발과 러닝 부상 검토·연구 검색 2021년6월"}</a>
        </p>
      </>
    ),
  },
  {
    id: "flatfoot",
    category: "부상 & 건강",
    question: "평발인데 특별히 신경 써야 할 게 있나요?",
    answer: (
      <>
        <p className="mb-3">{"평발 자체가 반드시 치료가 필요한 상태는 아닙니다. NHS는 불편이 없는 평발은 대개 별도 조치가 필요하지 않으며 스포츠 활동도 할 수 있다고 안내합니다."}</p>
        <p className="mb-3">{"통증·뻣뻣함·저림, 걷기나 균형 문제, 새로 생기거나 한쪽에만 생긴 변화가 있다면 평가를 받으세요. 필요할 때 신발·인솔·운동을 개인 상태에 맞춰 상담할 수 있습니다."}</p>
        <p className="mb-3">{"발 모양만으로 모든 사람에게 특정 안정화나 단단한 아치 지지를 지정하지 않습니다. 실제 길이·폭·압박과 움직일 때 편안함을 함께 확인하세요."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.nhs.uk/conditions/flat-feet/"} target="_blank" rel="noopener noreferrer" className="underline">{"NHS 평발 안내"}</a>
          {" · "}
          <a href={"https://www.cochrane.org/evidence/CD013368_running-shoes-preventing-lower-limb-running-injuries-adults"} target="_blank" rel="noopener noreferrer" className="underline">{"Cochrane 2022 신발과 러닝 부상 검토·연구 검색 2021년6월"}</a>
        </p>
      </>
    ),
  },
  {
    id: "achilles",
    category: "부상 & 건강",
    question: "아킬레스건이 자주 아픈데 어떤 신발을 피해야 하나요?",
    answer: (
      <>
        <p className="mb-3">{"뒤꿈치 뒤쪽 통증은 아픈 위치와 상태부터 확인해야 합니다. 부착부 아킬레스건병증에 대한 NHS 안내는 활동 조절과 부하 운동, 신발 선택을 다루지만 모든 아킬레스 통증에 같은 처방이 적용되는 것은 아닙니다."}</p>
        <p className="mb-3">{"특정 드롭 수치나 브랜드를 정답으로 고르기보다 통증 부위가 신발 뒤축에 눌리는지, 최근 신발·노면·훈련량이 달라졌는지 기록해 전문가와 상의하세요. 스트레칭을 모든 경우의 필수 해결책으로 제시하지 않습니다."}</p>
        <p className="mb-3">{"증상이 지속되면 통증 위치와 현재 활동에 맞는 운동·신발 선택 계획을 전문가와 확인하세요. 뒤축이 아픈 부위를 압박하는지도 시착에서 살펴볼 항목입니다."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.kentcht.nhs.uk/leaflet/achilles-insertional-tendinopathy/"} target="_blank" rel="noopener noreferrer" className="underline">{"NHS 부착부 아킬레스건병증 안내"}</a>
        </p>
      </>
    ),
  },
  {
    id: "plantar",
    category: "부상 & 건강",
    question: "발바닥(족저근막)이 아픈데 도움이 되는 신발이 있나요?",
    answer: (
      <>
        <p className="mb-3">{"발바닥·뒤꿈치 통증을 모두 족저근막염으로 자가 진단하지는 마세요. NHS의 족저근막염 안내는 뒤꿈치 쿠션과 아치 지지가 있는 신발, 활동 조절과 부드러운 운동 등을 생활 관리 방법으로 소개합니다."}</p>
        <p className="mb-3">{"이 권고가 현재 판매 신발의 모델별 치료 효과나 추천 순위를 뜻하지는 않습니다. 실제 시착에서 아픈 부위의 압박과 길이·폭·뒤꿈치 고정을 확인하세요."}</p>
        <p className="mb-3">{"통증이 심하거나 일상 활동을 방해하는 경우, 악화·반복되거나 자가 관리 후2주가 지나도 좋아지지 않는 경우에는 의료 평가를 받으세요."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.nhs.uk/conditions/plantar-fasciitis/"} target="_blank" rel="noopener noreferrer" className="underline">{"NHS 족저근막염 안내"}</a>
        </p>
      </>
    ),
  },
  {
    id: "gel-timing",
    category: "에너지 젤",
    question: "에너지 젤은 언제 먹어야 하나요?",
    answer: (
      <>
        <p className="mb-3">{"거리별 고정 개수보다 예상 운동 시간과 제품 한 포의 탄수화물 g을 기준으로 계획하세요. 스포츠음료·음식으로 먹는 탄수화물도 합산합니다."}</p>
        <p className="mb-3">{"AIS 지침은1~2.5시간 지구력 운동에30~60g/시간,2.5~3시간을 넘는 장시간 운동에는 최대90g/시간을 참고 범위로 안내합니다. 모든 러너가 즉시90g을 먹어야 한다는 뜻이 아니며 훈련 중 소화 반응과 보급 기회를 확인해야 합니다."}</p>
        <p className="mb-3">{"계산 예시로 한 포25g인 제품을 시간당2개 먹으면 젤에서50g/시간을 섭취합니다. 음료의 탄수화물은 별도로 더해야 하며 이 계산은 체내 흡수율이나 개인 처방을 뜻하지 않습니다."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.ausport.gov.au/ais/nutrition/supplements/group_a/sports-foods2/sports-gels"} target="_blank" rel="noopener noreferrer" className="underline">{"AIS 스포츠젤·운동 시간별 탄수화물 지침"}</a>
        </p>
      </>
    ),
  },
  {
    id: "gel-stomach",
    category: "에너지 젤",
    question: "에너지 젤을 먹으면 속이 안 좋은데 어떻게 하나요?",
    answer: (
      <>
        <p className="mb-3">{"제품 종류·한 번에 먹은 양·음료와 음식의 합계·카페인·운동 강도를 기록해 어떤 조합에서 불편했는지 확인하세요. 훈련 중 사용할 제품과 조합을 미리 연습하는 것이 보급 계획의 일부입니다."}</p>
        <p className="mb-3">{"AIS는 대부분의 농축 젤을 물이나 묽은 음료와 함께 섭취하도록 설명하지만 제조사가 물 없이 삼킬 수 있다고 안내하는 제품도 있습니다. 물의 양은 제품의 섭취 지시와 본인의 운동 중 수분 계획을 함께 확인하세요."}</p>
        <p className="mb-3">{"Maurten은 일반 Gel100을 Hydrogel Technology 제품으로 설명하며 삼키기 위한 물과 운동 중 수분 보충 계획을 구분합니다. 이 제조사 설명이 다른 젤보다 위장 장애를 덜 일으킨다는 독립 비교 등급은 아닙니다."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.ausport.gov.au/ais/nutrition/supplements/group_a/sports-foods2/sports-gels"} target="_blank" rel="noopener noreferrer" className="underline">{"AIS 스포츠젤·운동 시간별 탄수화물 지침"}</a>
          {" · "}
          <a href={"https://www.maurten.com/products/us/gel-100-box-us"} target="_blank" rel="noopener noreferrer" className="underline">{"Maurten 일반 Gel100 공식 안내"}</a>
        </p>
      </>
    ),
  },
  {
    id: "gel-necessity",
    category: "에너지 젤",
    question: "5km나 10km 달릴 때도 에너지 젤이 필요한가요?",
    answer: (
      <>
        <p className="mb-3">{"5km·10km라는 거리만으로 필요 여부를 정하지 않습니다. 예상 소요 시간과 강도, 운동 전 식사와 전체 보급 계획을 함께 봅니다."}</p>
        <p className="mb-3">{"AIS 표는45분 미만 운동에는 운동 중 탄수화물이 필요하지 않은 것으로,45~75분의 지속적인 고강도 운동에는 소량의 탄수화물을 활용하는 것으로 구분합니다. 같은10km라도 실제 소요 시간과 강도에 따라 보급 판단이 달라질 수 있습니다."}</p>
        <p className="mb-3">{"한 포의 탄수화물 함량이 다르면 필요한 개수도 달라집니다. 예상 시간과 제품 표시를 계산하고, 젤·음료·음식을 합친 탄수화물과 수분 계획을 함께 확인하세요."}</p>
        <p className="text-xs leading-relaxed text-tertiary">
          {"출처 · 2026-11-11 확인: "}
          <a href={"https://www.ausport.gov.au/ais/nutrition/supplements/group_a/sports-foods2/sports-gels"} target="_blank" rel="noopener noreferrer" className="underline">{"AIS 스포츠젤·운동 시간별 탄수화물 지침"}</a>
        </p>
      </>
    ),
  },
];
