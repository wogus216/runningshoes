import { LEAD_NOTE } from '@/lib/runner-analysis/presentation';

// 공개 3축 줄(이름 · 0–100 막대 · 정수). 결과 카드와 공유 링크 화면이 같이 쓴다. lead 는 대표 수치 축(강조색, 설명 LEAD_NOTE).
export function RunnerScores({ scores }: { scores: Array<{ label: string; value: number; lead: boolean }> }) {
  return (
    <dl className="rc-scores">
      {scores.map((s) => (
        <div key={s.label} className={s.lead ? 'rc-score is-lead' : 'rc-score'}>
          <dt>
            {s.label}{s.lead && <small>{LEAD_NOTE}</small>}
            <span className="rc-bar" aria-hidden="true"><i style={{ width: `${s.value}%` }} /></span>
          </dt>
          <dd>{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
