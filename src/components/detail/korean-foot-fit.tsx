import { Footprints, Ruler, PersonStanding, Package, Snowflake, MapPin } from 'lucide-react';
import type { KoreanFootFit as KoreanFootFitType, ToBoxWidth, CompatibilityLevel } from "@/types/shoe";

type KoreanFootFitProps = {
  koreanFootFit: KoreanFootFitType;
  shoeName?: string;
  brand?: string;
};

type FootCharCardProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
};

function FootCharCard({ icon, label, value, description }: FootCharCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 border-2 border-gray-100 text-center transition-all duration-300 hover:shadow-lg">
      <div className="w-12 h-12 mx-auto mb-4 bg-[#4facfe10] rounded-xl flex items-center justify-center text-[#4facfe]">
        {icon}
      </div>
      <div className="font-bold text-[#4facfe] mb-2">{label}</div>
      <div className="text-2xl font-black mb-3">{value}</div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

// 발볼 너비별 설명 생성
function getWidthDescription(width: ToBoxWidth): string {
  const descriptions: Record<ToBoxWidth, string> = {
    narrow: '좁은 발볼 설계로 발볼이 넓은 러너는 반사이즈 업 또는 와이드 옵션을 고려하세요.',
    standard: '표준 폭으로 발볼이 넓은 한국인에게는 약간 좁을 수 있습니다. 와이드 옵션 고려 필요.',
    wide: '넉넉한 발볼 공간으로 한국인 발형에 잘 맞습니다.',
  };
  return descriptions[width];
}

// 평발 적합성 설명 생성
function getFlatFootDescription(compatibility: CompatibilityLevel): string {
  const descriptions: Record<CompatibilityLevel, string> = {
    excellent: '뛰어난 아치 서포트로 평발 러너에게 매우 적합합니다. 과내전 교정에도 효과적입니다.',
    good: '적절한 아치 서포트로 평발 러너에게 좋습니다. 심한 평발은 안정화 고려.',
    fair: '기본적인 아치 서포트 제공. 평발 러너는 인솔 교체나 안정화 고려.',
    poor: '아치 서포트가 약해 평발 러너에게는 권장되지 않습니다.',
  };
  return descriptions[compatibility];
}

// 겨울 호환성 설명 생성
function getWinterDescription(compatibility: CompatibilityLevel): string {
  const descriptions: Record<CompatibilityLevel, string> = {
    excellent: '두꺼운 러닝 양말 착용 시에도 넉넉한 공간. 겨울철에도 편안하게 사용 가능합니다.',
    good: '두꺼운 러닝 양말 착용 시에도 충분한 공간. 겨울철에도 문제없이 사용 가능합니다.',
    fair: '두꺼운 양말 착용 시 다소 조임이 있을 수 있습니다. 반사이즈 업 고려.',
    poor: '겨울철 두꺼운 양말 착용에는 적합하지 않습니다.',
  };
  return descriptions[compatibility];
}

// 브랜드별 대안 추천
function getAlternativeRecommendation(brand: string): string {
  const alternatives: Record<string, string> = {
    'Nike': '뉴발란스 860 와이드, 미즈노 웨이브 라이더 와이드',
    'Adidas': '아식스 젤카야노 와이드, 뉴발란스 1080 와이드',
    'ASICS': '브룩스 글리세린 와이드, 뉴발란스 Fresh Foam 와이드',
    'Brooks': '아식스 젤님버스 와이드, 호카 클리프턴 와이드',
    'HOKA': '브룩스 글리세린 와이드, 뉴발란스 1080 와이드',
    'New Balance': '브룩스 고스트 와이드, 아식스 젤님버스 와이드',
    'Saucony': '브룩스 고스트 와이드, 뉴발란스 880 와이드',
    'On': '호카 클리프턴 와이드, 아식스 젤님버스 와이드',
    'Mizuno': '아식스 젤카야노 와이드, 뉴발란스 860 와이드',
  };
  return alternatives[brand] || '미즈노 웨이브 라이더 와이드, 뉴발란스 860 와이드, 알트라 시리즈';
}

export function KoreanFootFit({ koreanFootFit, shoeName, brand }: KoreanFootFitProps) {
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

  // 토박스 공간 설명 동적 생성
  const getToBoxDescription = (): string => {
    if (koreanFootFit.toBoxWidth === 'wide') {
      return '발가락 공간이 넉넉해 장시간 착용 시 압박감이 없습니다. 1cm 여유 권장.';
    } else if (koreanFootFit.toBoxWidth === 'standard') {
      return '표준 토박스로 대부분의 러너에게 적합합니다. 발이 넓은 경우 와이드 옵션 고려.';
    }
    return '좁은 토박스로 발볼이 넓은 러너는 불편할 수 있습니다. 반사이즈 업 또는 와이드 옵션 필수.';
  };

  const toBoxValue = koreanFootFit.wideOptions ? "충분 (와이드 있음)" :
    koreanFootFit.toBoxWidth === 'wide' ? "충분" :
    koreanFootFit.toBoxWidth === 'standard' ? "보통" : "좁음";

  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <Footprints className="h-8 w-8 text-[#4facfe]" />
        한국인 발 특성 적합성
      </h2>
      <p className="text-gray-600">한국인 발 형태에 맞는지 평가</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <FootCharCard
          icon={<Ruler className="h-6 w-6" />}
          label="발볼 너비"
          value={widthText}
          description={getWidthDescription(koreanFootFit.toBoxWidth)}
        />

        <FootCharCard
          icon={<PersonStanding className="h-6 w-6" />}
          label="평발 적합성"
          value={flatFootText}
          description={getFlatFootDescription(koreanFootFit.flatFootCompatibility)}
        />

        <FootCharCard
          icon={<Package className="h-6 w-6" />}
          label="토박스 공간"
          value={toBoxValue}
          description={getToBoxDescription()}
        />

        <FootCharCard
          icon={<Snowflake className="h-6 w-6" />}
          label="겨울 호환성"
          value={winterText}
          description={getWinterDescription(koreanFootFit.winterCompatibility)}
        />
      </div>

      <div className="bg-gradient-to-br from-[#4facfe10] to-[#4facfe20] border-l-4 border-[#4facfe] rounded-xl p-5">
        <div className="font-bold text-[#4facfe] mb-2 text-lg flex items-center gap-2">
          <MapPin className="h-5 w-5" />
          한국 시장 팁
        </div>
        <p className="text-gray-700 leading-relaxed">
          <strong>발볼이 넓으신 분</strong>: {getAlternativeRecommendation(brand || '')}를 대안으로 고려하세요.
          {shoeName && ` ${shoeName}은(는)`}{!shoeName && ' 이 신발은'} {koreanFootFit.toBoxWidth === 'wide' ? '넓은 폭이라 한국인에게 잘 맞지만' : koreanFootFit.toBoxWidth === 'standard' ? '표준 폭이라 발볼 넓은 한국인에게는' : '좁은 폭이라'}{' '}
          온라인 구매 전 <strong>매장 착화 권장</strong>합니다.
          {koreanFootFit.wideOptions && ' 와이드 옵션도 제공되니 참고하세요.'}
        </p>
      </div>
    </section>
  );
}
