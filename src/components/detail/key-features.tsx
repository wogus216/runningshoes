type KeyFeaturesProps = {
  features: string[];
};

const featureDetails = {
  '최상급 착화감 (76% 1순위)': {
    icon: '👟',
    description: '"발에 이물감 없이 양말처럼 편안해요." 부드러운 상부 메쉬와 넉넉한 토박스로 장시간 러닝에도 발가락이 눌리지 않습니다. 착화감 평가 5/5'
  },
  '충분한 쿠셔닝 (초보자 최우선)': {
    icon: '🛡️',
    description: '초보 러너에게 필수! 무릎과 관절 보호를 위한 ReactX 폼 미드솔이 충격을 효과적으로 흡수합니다. 아식스 님버스급 쿠셔닝으로 체중이 있거나 무릎 보호가 필요한 분께 최적입니다.'
  },
  '적정 무게 (280g)': {
    icon: '⚖️',
    description: '280g의 밸런스 있는 무게로 너무 무겁지도, 가볍지도 않습니다. 초보자에게는 약간 무거워도 쿠션과 안정성이 더 중요하다는 연구를 반영했습니다. 매일 뛰기에 부담 없는 무게입니다.'
  },
  '뛰어난 가성비 (15만원대)': {
    icon: '💰',
    description: '15만원대 가격으로 나이키의 검증된 기술력을 경험할 수 있습니다. 초보자들이 가장 선호하는 가격대로, "비싼 러닝화는 부담"스러운 분께 추천합니다. 코스트: 약 ₩280/km'
  }
};

export function KeyFeatures({ features }: KeyFeaturesProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <span className="text-4xl">⭐</span>
        핵심 특징
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature) => {
          const detail = featureDetails[feature as keyof typeof featureDetails];
          if (!detail) return null;

          return (
            <div
              key={feature}
              className="bg-gradient-to-br from-[#667eea05] to-[#764ba205] rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >
              <h4 className="text-xl font-bold text-[#667eea] mb-3 flex items-center gap-2">
                <span className="text-2xl">{detail.icon}</span>
                {feature}
              </h4>
              <p className="text-gray-600 leading-relaxed">{detail.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
