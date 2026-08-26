import { Microscope } from 'lucide-react';
import type { BiomechanicsData } from "@/types/shoe";

type BiomechanicsAnalysisProps = {
  biomechanics: BiomechanicsData;
};

type BiomechCardProps = {
  title: string;
  value: string;
  /** 없으면 값만 보여준다 — 채우려고 동어반복 문장을 만들지 않는다 */
  description?: string | null;
};

function BiomechCard({ title, value, description }: BiomechCardProps) {
  return (
    <div className="rounded border border-border bg-white p-5">
      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">{title}</p>
      <div className={`mt-3 text-3xl font-black tracking-tight text-slate-950 ${description ? 'mb-3' : ''}`}>{value}</div>
      {description ? <p className="text-sm leading-7 text-slate-600">{description}</p> : null}
    </div>
  );
}

/**
 * 미드솔 소재 설명. **사전에 있는 폼만** 설명하고, 없으면 아무 말도 하지 않는다.
 *
 * 2026-08-26 이전에는 폴백으로 `${midsoleType}은 이 신발의 핵심 쿠셔닝 기술입니다.`
 * 를 내보냈다. 소재 이름을 되풀이할 뿐 정보가 없는 문장이었고, 조사가 '은' 으로
 * 고정돼 있어 받침 없는 이름에서는 **"지오메트리은"** 으로 렌더됐다(라이브 확인).
 * 이런 문장이 섞이면 읽는 사람이 나머지 문단까지 건너뛰게 되므로, 채우지 않고 비운다.
 */
function getMidsoleDescription(midsoleType: string): string | null {
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

  // 대소문자·표기 차이로 놓치지 않게 정규화해서 찾는다
  // (예: 데이터는 'FF BLAST MAX' 인데 사전 키는 'FF Blast+' 였다)
  const needle = midsoleType.toLowerCase().replace(/\s+/g, '');
  for (const [key, desc] of Object.entries(midsoleDescriptions)) {
    if (needle.includes(key.toLowerCase().replace(/\s+/g, ''))) {
      return desc;
    }
  }

  return null;
}

/**
 * 2026-08-26 정리 — 이 섹션은 **스펙 카드가 이미 말한 것을 다시 말하지 않는다.**
 *
 * 종전에는 스택·드롭·무게 카드를 두고 각 카드 밑에 수치를 되풀이하는 설명을 붙였다
 * ("8mm의 중간 드롭으로 다양한 착지 스타일에 적합합니다. 균형 잡힌 선택입니다").
 * 그 세 값은 히어로 스펙 카드와 빠른 스펙에 이미 있어, 여기서는 같은 화면 안에서
 * 세 번째로 읽는 셈이었다('드롭 8mm' 는 한 화면에 9번 등장했다).
 *
 * 남기는 것은 **다른 데서 볼 수 없는 것**뿐이다 — 플레이트 유무와 폼 구성.
 * 둘은 주행 성향을 실제로 가르는 값이라 이 섹션의 존재 이유이기도 하다.
 */
export function BiomechanicsAnalysis({ biomechanics }: BiomechanicsAnalysisProps) {
  const midsoleDesc = getMidsoleDescription(biomechanics.midsoleType);

  return (
    <section className="space-y-6">
      <div className="space-y-2 border-b-2 border-primary pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Biomechanics</p>
        <h2 className="flex items-center gap-3 text-3xl font-black tracking-tight text-slate-950">
          <Microscope className="h-7 w-7 text-stone-700" />
          주행 감각의 구조
        </h2>
        <p className="text-sm leading-relaxed text-slate-600">
          {biomechanics.carbonPlate
            ? '카본 플레이트와 폼 조합이 이 신발의 추진 성향을 만듭니다.'
            : '플레이트 없이 폼과 지오메트리로 성향을 만드는 구조입니다.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BiomechCard
          title="카본 플레이트"
          value={biomechanics.carbonPlate ? "있음" : "없음"}
          description={
            biomechanics.carbonPlate
              ? "추진력이 향상되며 에너지 리턴이 우수합니다. 레이싱이나 빠른 페이스 훈련에 효과적입니다."
              : "중족부 유연성이 좋아 발 움직임이 자연스럽고 다양한 훈련에 무난합니다."
          }
        />

        <BiomechCard
          title="미드솔 소재"
          value={biomechanics.midsoleType}
          description={midsoleDesc}
        />
      </div>

      <p className="text-xs leading-relaxed text-slate-500">
        스택 높이·드롭·무게는 위쪽 스펙 카드에 있습니다.
      </p>
    </section>
  );
}
