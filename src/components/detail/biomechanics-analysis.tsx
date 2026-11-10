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
      {description ? <p className="text-[15.5px] leading-relaxed text-slate-600">{description}</p> : null}
    </div>
  );
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

  return (
    <section className="space-y-6">
      <div className="space-y-2 border-b-2 border-primary pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Biomechanics</p>
        <h2 className="flex items-center gap-3 text-3xl font-black tracking-tight text-slate-950">
          <Microscope className="h-7 w-7 text-stone-700" />
          주행 감각의 구조
        </h2>
        <p className="text-[15.5px] leading-relaxed text-slate-600">
          {biomechanics.carbonPlate === undefined
            ? '이 모델의 보강재 유무·형태·소재는 상세 스펙과 출처에서 확인하세요.'
            : biomechanics.carbonPlate
            ? '카본 보강은 로드와 판형 플레이트 등 형태가 다릅니다. 이 모델의 구성은 상세 스펙에서 확인하세요.'
            : '카본 외 소재의 로드·플레이트나 폼 지지 구조는 상세 스펙에서 확인하세요.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BiomechCard
          title="카본 보강 구조"
          value={biomechanics.carbonPlate === undefined ? "미확인" : biomechanics.carbonPlate ? "있음" : "없음"}
          description={
            biomechanics.carbonPlate === undefined
              ? "이 모델의 카본 보강 유무를 확인하지 못했습니다. 다른 모델이나 같은 폼 이름으로 추정하지 않습니다."
              : biomechanics.carbonPlate
              ? "이 항목은 로드와 판형 플레이트를 구분하지 않습니다. 형태·소재는 상세 스펙을 확인하고, 이 값만으로 에너지 리턴이나 기록 향상을 판정하지 마세요."
              : "다른 소재의 로드·플레이트나 생크도 없다는 뜻은 아닙니다. 확인한 구성과 출처는 상세 스펙을 확인하세요."
          }
        />

        <BiomechCard
          title="미드솔 소재"
          value={biomechanics.midsoleType}
        />
      </div>

      <p className="text-xs leading-relaxed text-slate-500">
        스택 높이·드롭·무게는 위쪽 스펙 카드에 있습니다.
      </p>
    </section>
  );
}
