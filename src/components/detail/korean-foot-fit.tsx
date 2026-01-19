import type { KoreanFootFit as KoreanFootFitType, ToBoxWidth, CompatibilityLevel } from "@/types/shoe";
import { cn } from "@/lib/utils";

type KoreanFootFitProps = {
  koreanFootFit: KoreanFootFitType;
  shoeName?: string;
  brand?: string;
};

type FitItemProps = {
  title: string;
  subtitle: string;
  status: string;
  statusColor: 'positive' | 'warning' | 'primary';
};

function FitItem({ title, subtitle, status, statusColor }: FitItemProps) {
  const colorClasses = {
    positive: "bg-positive/10 text-positive",
    warning: "bg-warning/10 text-warning",
    primary: "bg-surface text-primary",
  };

  return (
    <div className="flex items-center justify-between p-3 bg-surface rounded-xl">
      <div>
        <p className="font-medium text-sm text-primary">{title}</p>
        <p className="text-xs text-tertiary">{subtitle}</p>
      </div>
      <span className={cn("px-2.5 py-1 text-xs font-medium rounded-full", colorClasses[statusColor])}>
        {status}
      </span>
    </div>
  );
}

// 토박스 너비에 따른 상태
function getToeboxStatus(width: ToBoxWidth): { text: string; color: 'positive' | 'warning' | 'primary' } {
  const config: Record<ToBoxWidth, { text: string; color: 'positive' | 'warning' | 'primary' }> = {
    narrow: { text: '좁음', color: 'warning' },
    standard: { text: '표준', color: 'primary' },
    wide: { text: '넓음', color: 'positive' },
  };
  return config[width];
}

// 적합성 레벨에 따른 상태
function getCompatibilityStatus(level: CompatibilityLevel): { text: string; color: 'positive' | 'warning' | 'primary' } {
  const config: Record<CompatibilityLevel, { text: string; color: 'positive' | 'warning' | 'primary' }> = {
    excellent: { text: '우수', color: 'positive' },
    good: { text: '좋음', color: 'positive' },
    fair: { text: '보통', color: 'primary' },
    poor: { text: '미흡', color: 'warning' },
  };
  return config[level];
}

export function KoreanFootFit({ koreanFootFit, shoeName, brand }: KoreanFootFitProps) {
  const toebox = getToeboxStatus(koreanFootFit.toBoxWidth);
  const flatFoot = getCompatibilityStatus(koreanFootFit.flatFootCompatibility);
  const winter = getCompatibilityStatus(koreanFootFit.winterCompatibility);

  // 와이드 옵션 상태
  const wideOptions = koreanFootFit.wideOptions
    ? { text: '있음', color: 'positive' as const }
    : { text: '없음', color: 'primary' as const };

  // 참고사항 생성
  const getNote = (): string => {
    if (koreanFootFit.toBoxWidth === 'narrow') {
      return `토박스가 좁은 편이라 발볼 넓은 한국 러너는 와이드(2E) 버전을 권장합니다.`;
    }
    if (koreanFootFit.toBoxWidth === 'standard' && !koreanFootFit.wideOptions) {
      return `표준 폭으로 발볼이 넓은 한국인에게는 약간 좁을 수 있습니다.`;
    }
    if (koreanFootFit.flatFootCompatibility === 'excellent') {
      return `평발 적합성이 우수하며, 아치 서포트가 과내전을 효과적으로 제어합니다.`;
    }
    return `한국인 발형에 적합한 편이며, 매장 착화 후 구매를 권장합니다.`;
  };

  return (
    <div>
      <h2 className="font-bold mb-5 text-primary">한국인 발 적합성</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <FitItem
            title="토박스 너비"
            subtitle="발볼 맞춤"
            status={toebox.text}
            statusColor={toebox.color}
          />
          <FitItem
            title="평발 적합성"
            subtitle="아치 서포트"
            status={flatFoot.text}
            statusColor={flatFoot.color}
          />
          <FitItem
            title="와이드 옵션"
            subtitle="넓은 발볼용"
            status={wideOptions.text}
            statusColor={wideOptions.color}
          />
          <FitItem
            title="겨울 적합성"
            subtitle="보온/방수"
            status={winter.text}
            statusColor={winter.color}
          />
        </div>

        <div className="bg-warning/5 border border-warning/20 rounded-xl p-5">
          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2 text-primary">
            <span>⚠️</span> 한국 러너 참고사항
          </h4>
          <p className="text-sm text-secondary leading-relaxed">
            {getNote()}
            {koreanFootFit.wideOptions && (
              <strong className="text-primary"> 와이드 옵션이 제공되니 참고하세요.</strong>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
