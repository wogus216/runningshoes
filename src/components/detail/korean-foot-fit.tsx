import type { KoreanFootFit as KoreanFootFitType } from "@/types/shoe";

type KoreanFootFitProps = {
  koreanFootFit: KoreanFootFitType;
};

type FootCharCardProps = {
  icon: string;
  label: string;
  value: string;
  description: string;
};

function FootCharCard({ icon, label, value, description }: FootCharCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 text-center transition-all duration-300 hover:shadow-lg">
      <div className="text-5xl mb-4">{icon}</div>
      <div className="font-bold text-[#667eea] mb-2">{label}</div>
      <div className="text-2xl font-black mb-3">{value}</div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export function KoreanFootFit({ koreanFootFit }: KoreanFootFitProps) {
  const widthText = {
    narrow: "좁음",
    standard: "보통",
    wide: "넓음",
  }[koreanFootFit.toBoxWidth];

  const flatFootText = {
    excellent: "우수",
    good: "양호",
    fair: "보통",
    poor: "낮음",
  }[koreanFootFit.flatFootCompatibility];

  const winterText = {
    excellent: "우수",
    good: "양호",
    fair: "보통",
    poor: "낮음",
  }[koreanFootFit.winterCompatibility];

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <span className="text-4xl">👣</span>
        한국인 발 특성 적합성
      </h2>
      <p className="text-gray-600">한국인 발 형태에 맞는지 평가</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <FootCharCard
          icon="📏"
          label="발볼 너비"
          value={widthText}
          description="표준 폭으로 발볼이 넓은 한국인에게는 약간 좁을 수 있습니다. 와이드 옵션 고려 필요."
        />

        <FootCharCard
          icon="🦶"
          label="평발 적합성"
          value={flatFootText}
          description="적절한 아치 서포트로 평발 러너에게 좋습니다. 과내전 교정은 약하므로 심한 평발은 GT-2000 고려."
        />

        <FootCharCard
          icon="📦"
          label="토박스 공간"
          value="충분"
          description="발가락 공간이 넉넉해 장시간 착용 시 압박감이 없습니다. 1cm 여유 권장."
        />

        <FootCharCard
          icon="❄️"
          label="겨울 호환성"
          value={winterText}
          description="두꺼운 러닝 양말 착용 시에도 충분한 공간. 겨울철에도 문제없이 사용 가능합니다."
        />
      </div>

      <div className="bg-gradient-to-br from-[#667eea10] to-[#764ba210] border-l-4 border-[#667eea] rounded-xl p-5">
        <div className="font-bold text-[#667eea] mb-2 text-lg">🇰🇷 한국 시장 팁</div>
        <p className="text-gray-700 leading-relaxed">
          <strong>발볼이 넓으신 분</strong>: 미즈노 웨이브 라이더, 아식스 GT-2000 와이드,
          알트라 시리즈를 대안으로 고려하세요. 페가수스는 표준 폭이라 발볼 넓은 한국인에게는
          온라인 구매 전 <strong>매장 착화 권장</strong>합니다.
        </p>
      </div>
    </section>
  );
}
