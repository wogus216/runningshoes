import { Microscope, Lightbulb } from 'lucide-react';
import type { BiomechanicsData } from "@/types/shoe";

type BiomechanicsAnalysisProps = {
  biomechanics: BiomechanicsData;
  weight?: number;
};

type BiomechCardProps = {
  title: string;
  value: string;
  description: string;
};

function BiomechCard({ title, value, description }: BiomechCardProps) {
  return (
    <div className="rounded-[26px] border border-stone-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,248,246,0.92))] p-5 shadow-[0_16px_34px_-32px_rgba(15,23,42,0.5)]">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">{title}</p>
      <div className="mb-3 mt-3 text-3xl font-black tracking-tight text-slate-950">{value}</div>
      <p className="text-sm leading-7 text-slate-600">{description}</p>
    </div>
  );
}

// 스택 높이 설명 동적 생성
function getStackHeightDescription(heel: number, forefoot: number): string {
  const avgStack = (heel + forefoot) / 2;
  if (avgStack >= 35) {
    return `힐 ${heel}mm, 포어풋 ${forefoot}mm의 맥시멀 쿠셔닝입니다. 뛰어난 충격 흡수력으로 장거리나 관절 보호가 필요한 러너에게 적합합니다.`;
  } else if (avgStack >= 28) {
    return `힐 ${heel}mm, 포어풋 ${forefoot}mm로 두꺼운 미드솔입니다. 충격 흡수는 우수하나 지면 감각이 다소 둔할 수 있습니다.`;
  } else if (avgStack >= 20) {
    return `힐 ${heel}mm, 포어풋 ${forefoot}mm의 표준적인 스택입니다. 쿠셔닝과 지면 감각의 균형이 좋습니다.`;
  } else {
    return `힐 ${heel}mm, 포어풋 ${forefoot}mm의 낮은 스택입니다. 지면 감각이 좋고 반응성이 뛰어납니다.`;
  }
}

// 드롭 설명 동적 생성
function getDropDescription(drop: number): string {
  if (drop >= 10) {
    return `${drop}mm의 높은 드롭으로 뒤꿈치 착지를 유도합니다. 아킬레스건 부하를 줄여주며 전통적인 러닝 스타일에 적합합니다.`;
  } else if (drop >= 6) {
    return `${drop}mm의 중간 드롭으로 다양한 착지 스타일에 적합합니다. 균형 잡힌 선택입니다.`;
  } else if (drop >= 4) {
    return `${drop}mm의 낮은 드롭으로 자연스러운 발 움직임을 유도합니다. 중족부/전족부 착지에 적합합니다.`;
  } else {
    return `${drop}mm의 제로드롭에 가까운 설계로 맨발 러닝에 가까운 감각을 제공합니다.`;
  }
}

// 미드솔 소재 설명 동적 생성
function getMidsoleDescription(midsoleType: string): string {
  const midsoleDescriptions: Record<string, string> = {
    'ZoomX': 'ZoomX(PEBA)는 나이키의 최상급 폼으로 뛰어난 에너지 리턴과 경량성을 제공합니다.',
    'ReactX': 'ReactX는 에너지 리턴과 내구성의 균형이 좋은 폼입니다. 가격 대비 우수한 성능을 제공합니다.',
    'React': 'React 폼은 부드러운 쿠셔닝과 적절한 반발력을 제공합니다.',
    'Lightstrike Pro': 'Lightstrike Pro(PEBA)는 아디다스의 최상급 레이싱 폼으로 높은 에너지 리턴을 제공합니다.',
    'Lightstrike': 'Lightstrike는 가볍고 반응성이 좋은 EVA 기반 폼입니다.',
    'FF Blast+': 'FF Blast+는 아식스의 고성능 폼으로 부드러운 쿠셔닝과 반발력을 제공합니다.',
    'FF Turbo+': 'FF Turbo+(PEBA)는 아식스의 최상급 레이싱 폼으로 뛰어난 에너지 리턴을 제공합니다.',
    'PWRRUN PB': 'PWRRUN PB(PEBA)는 써코니의 최상급 폼으로 가볍고 반발력이 뛰어납니다.',
    'PWRRUN+': 'PWRRUN+는 TPU 기반의 반응성 좋은 폼입니다.',
    'DNA LOFT': 'DNA LOFT는 브룩스의 부드러운 쿠셔닝 폼입니다.',
    'Helion': 'Helion은 온러닝의 독자적인 폼으로 CloudTec과 결합하여 독특한 쿠셔닝을 제공합니다.',
  };

  for (const [key, desc] of Object.entries(midsoleDescriptions)) {
    if (midsoleType.includes(key)) {
      return desc;
    }
  }

  return `${midsoleType}은 이 신발의 핵심 쿠셔닝 기술입니다.`;
}

// 러닝 이코노미 인사이트 동적 생성
function getRunningEconomyInsight(weight?: number): string {
  if (!weight) {
    return '경량 러닝화일수록 러닝 이코노미가 향상되지만, 쿠셔닝과 안정성과의 균형이 중요합니다.';
  }

  if (weight < 200) {
    return `${weight}g의 초경량 설계로 러닝 이코노미가 우수합니다. 레이싱이나 빠른 페이스 훈련에 최적화되어 있습니다.`;
  } else if (weight < 250) {
    return `${weight}g의 경량 설계로 빠른 페이스에 적합합니다. 템포런이나 레이스에서 좋은 성능을 발휘합니다.`;
  } else if (weight < 300) {
    return `${weight}g의 적정 무게로 쿠셔닝과 러닝 이코노미의 균형이 좋습니다. 다양한 페이스에 활용 가능합니다.`;
  } else {
    return `${weight}g의 무게는 러닝 이코노미보다 쿠셔닝과 안정성에 초점을 맞춘 설계입니다. 장거리나 회복 러닝에 적합합니다.`;
  }
}

export function BiomechanicsAnalysis({ biomechanics, weight }: BiomechanicsAnalysisProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Biomechanics</p>
        <h2 className="flex items-center gap-3 text-3xl font-black tracking-tight text-slate-950">
          <Microscope className="h-7 w-7 text-stone-700" />
          주행 감각의 구조
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">쿠셔닝 높이, 드롭, 플레이트, 폼 조합이 어떤 주행 성향을 만드는지 정리했습니다.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BiomechCard
          title="스택 높이 (Stack Height)"
          value={`${biomechanics.stackHeight.heel}mm / ${biomechanics.stackHeight.forefoot}mm`}
          description={getStackHeightDescription(biomechanics.stackHeight.heel, biomechanics.stackHeight.forefoot)}
        />

        <BiomechCard
          title="힐-토 드롭 (Drop)"
          value={`${biomechanics.drop}mm`}
          description={getDropDescription(biomechanics.drop)}
        />

        <BiomechCard
          title="카본 플레이트"
          value={biomechanics.carbonPlate ? "있음" : "없음"}
          description={
            biomechanics.carbonPlate
              ? "카본 플레이트로 추진력이 향상되며 에너지 리턴이 우수합니다. 레이싱이나 빠른 페이스 훈련에 효과적입니다."
              : "카본 플레이트가 없어 중족부 유연성이 좋습니다. 자연스러운 발 움직임을 허용하고 다양한 훈련에 적합합니다."
          }
        />

        <BiomechCard
          title="미드솔 소재"
          value={biomechanics.midsoleType}
          description={getMidsoleDescription(biomechanics.midsoleType)}
        />
      </div>

      <div className="rounded-[26px] border border-blue-200 bg-[linear-gradient(135deg,rgba(239,246,255,0.95),rgba(255,255,255,0.94))] p-5 shadow-[0_16px_34px_-32px_rgba(15,23,42,0.45)]">
        <div className="mb-2 flex items-center gap-2 text-lg font-bold text-slate-900">
          <Lightbulb className="h-5 w-5" />
          러닝 이코노미 영향
        </div>
        <p className="text-sm leading-7 text-slate-700">
          {getRunningEconomyInsight(weight)}
        </p>
      </div>
    </section>
  );
}
