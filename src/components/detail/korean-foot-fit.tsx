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
    positive: "bg-sky-50 text-sky-700",
    warning: "bg-amber-50 text-amber-700",
    primary: "bg-slate-100 text-primary",
  };

  return (
    <div className="flex items-center justify-between rounded border border-border bg-white p-4">
      <div>
        <p className="font-medium text-sm text-primary">{title}</p>
        <p className="text-xs text-tertiary">{subtitle}</p>
      </div>
      <span className={cn("px-2.5 py-1 text-xs font-medium rounded-[3px]", colorClasses[statusColor])}>
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
  const winter = getCompatibilityStatus(koreanFootFit.winterCompatibility);

  // 와이드 옵션 상태
  const wideOptions = koreanFootFit.wideOptions
    ? { text: '있음', color: 'positive' as const }
    : { text: '확인 필요', color: 'primary' as const };

  const getNote = (): string => '너비 등급은 개인 착화나 사이즈를 보장하지 않습니다. 판매 성별·사이즈·폭 옵션을 확인하고 직접 신어보세요.';

  return (
    <section className="space-y-6">
      <div className="space-y-2 border-b-2 border-primary pb-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-500">Korean Fit</p>
        <h2 className="text-3xl font-black tracking-tight text-slate-950">한국 러너 기준 핏</h2>
        <p className="text-[15.5px] leading-relaxed text-slate-600">{brand} {shoeName}가 발볼과 계절감에서 어떻게 느껴질지 중심만 남겼습니다.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-3">
          <FitItem
            title="토박스 너비"
            subtitle="발볼 맞춤"
            status={toebox.text}
            statusColor={toebox.color}
          />
          <FitItem
            title="와이드 옵션"
            subtitle="넓은 발볼용"
            status={wideOptions.text}
            statusColor={wideOptions.color}
          />
          <FitItem
            title="겨울 적합성"
            subtitle="에디터 평가 · 방수 여부 별도 확인"
            status={winter.text}
            statusColor={winter.color}
          />
        </div>

        <div className="rounded border border-border bg-[var(--accent-soft)] p-5">
          <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-primary">
            <span>ℹ️</span> 한국 러너 참고사항
          </h4>
          <p className="text-[15.5px] leading-relaxed text-secondary">
            {getNote()}
            {koreanFootFit.wideOptions && (
              <strong className="text-primary"> 와이드 옵션이 제공되니 참고하세요.</strong>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
