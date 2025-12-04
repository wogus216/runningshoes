import type { BiomechanicsData } from "@/types/shoe";

type BiomechanicsAnalysisProps = {
  biomechanics: BiomechanicsData;
};

type BiomechCardProps = {
  title: string;
  value: string;
  description: string;
};

function BiomechCard({ title, value, description }: BiomechCardProps) {
  return (
    <div className="bg-gradient-to-br from-[#4facfe05] to-[#4facfe10] rounded-2xl p-6 border-l-4 border-[#4facfe]">
      <h4 className="text-lg font-bold text-[#4facfe] mb-3">{title}</h4>
      <div className="text-3xl font-black text-gray-900 mb-3">{value}</div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export function BiomechanicsAnalysis({ biomechanics }: BiomechanicsAnalysisProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-black flex items-center gap-4">
        <span className="text-4xl">🔬</span>
        생체역학적 분석
      </h2>
      <p className="text-gray-600">과학적 연구 기반 신발 특성 분석</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BiomechCard
          title="스택 높이 (Stack Height)"
          value={`${biomechanics.stackHeight.heel}mm / ${biomechanics.stackHeight.forefoot}mm`}
          description={`힐 ${biomechanics.stackHeight.heel}mm, 포어풋 ${biomechanics.stackHeight.forefoot}mm로 최적 범위(15-20mm)를 초과하는 두꺼운 미드솔입니다. 충격 흡수는 우수하나 지면 감각이 다소 둔할 수 있습니다. 초보자에게 이상적입니다.`}
        />

        <BiomechCard
          title="힐-토 드롭 (Drop)"
          value={`${biomechanics.drop}mm`}
          description="전통적인 표준 드롭(10-12mm)으로 뒤꿈치 착지를 유도합니다. 아킬레스건 부하를 줄이고, 무릎 부담은 약간 증가할 수 있습니다. 대부분의 러너에게 안전한 선택입니다."
        />

        <BiomechCard
          title="카본 플레이트"
          value={biomechanics.carbonPlate ? "있음" : "없음"}
          description={
            biomechanics.carbonPlate
              ? "카본 플레이트로 추진력이 향상되며 에너지 리턴이 우수합니다."
              : "카본 플레이트가 없어 중족부 유연성이 좋습니다. 에너지 리턴은 카본화보다 낮지만, 자연스러운 발 움직임을 허용하고 부상 위험이 낮습니다. 초보자에게 적합합니다."
          }
        />

        <BiomechCard
          title="미드솔 소재"
          value={biomechanics.midsoleType}
          description="나이키의 ReactX 폼은 EVA보다 우수한 에너지 리턴을 제공하면서도 내구성이 좋습니다. PEBA만큼은 아니지만 가격 대비 훌륭한 성능입니다."
        />
      </div>

      <div className="bg-gradient-to-br from-[#4facfe10] to-[#4facfe20] border-l-4 border-[#4facfe] rounded-xl p-5">
        <div className="font-bold text-[#4facfe] mb-2 text-lg">
          💡 러닝 이코노미 영향
        </div>
        <p className="text-gray-700 leading-relaxed">
          연구에 따르면 280g의 무게는 경량화(200g 미만)보다 러닝 이코노미가 약간 떨어지지만,
          초보 러너에게는 <strong>쿠셔닝과 안정성이 더 중요</strong>합니다. 페이스가
          빨라질수록(14-18km/h) 경량화의 이점이 커집니다.
        </p>
      </div>
    </section>
  );
}
