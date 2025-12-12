import { Zap, Shield, Feather, Coins, Sparkles, Layers, Target, Footprints } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type KeyFeaturesProps = {
  features: string[];
};

// 키워드 기반 아이콘 매칭
function getFeatureIcon(feature: string): LucideIcon {
  const lowerFeature = feature.toLowerCase();

  if (lowerFeature.includes('쿠션') || lowerFeature.includes('cushion') || lowerFeature.includes('폼') || lowerFeature.includes('foam')) {
    return Shield;
  }
  if (lowerFeature.includes('경량') || lowerFeature.includes('무게') || lowerFeature.includes('light') || lowerFeature.includes('g)')) {
    return Feather;
  }
  if (lowerFeature.includes('가성비') || lowerFeature.includes('가격') || lowerFeature.includes('만원')) {
    return Coins;
  }
  if (lowerFeature.includes('반발') || lowerFeature.includes('에너지') || lowerFeature.includes('리턴') || lowerFeature.includes('zoom')) {
    return Zap;
  }
  if (lowerFeature.includes('카본') || lowerFeature.includes('플레이트') || lowerFeature.includes('carbon')) {
    return Layers;
  }
  if (lowerFeature.includes('안정') || lowerFeature.includes('서포트') || lowerFeature.includes('guidance')) {
    return Target;
  }
  if (lowerFeature.includes('착화') || lowerFeature.includes('핏') || lowerFeature.includes('와이드') || lowerFeature.includes('토박스')) {
    return Footprints;
  }

  return Sparkles; // 기본 아이콘
}

export function KeyFeatures({ features }: KeyFeaturesProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <Sparkles className="h-8 w-8 text-[#4facfe]" />
        핵심 특징
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature, index) => {
          const IconComponent = getFeatureIcon(feature);

          return (
            <div
              key={`${feature}-${index}`}
              className="flex items-start gap-4 bg-gradient-to-br from-[#4facfe05] to-[#4facfe10] rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#4facfe]/10 flex items-center justify-center">
                <IconComponent className="h-5 w-5 text-[#4facfe]" />
              </div>
              <p className="text-gray-700 font-medium leading-relaxed pt-2">
                {feature}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
