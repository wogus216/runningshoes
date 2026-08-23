import { getCourseMap } from '@/lib/course-map';
import type { CourseGpx } from '@/types/marathon';

import { CourseMapView } from './course-map-view';

/**
 * 대회 코스 지도. 데이터는 서버에서 읽고(클라 번들에 지형이 실리지 않게),
 * 움직이는 부분만 클라이언트로 넘긴다.
 */

const SOURCE_BADGE: Record<CourseGpx['source'], { label: string; className: string } | null> = {
  // 실측이 기본값이라 굳이 이름표를 달지 않는다
  measured: null,
  official: { label: '공식 코스 데이터', className: 'border-[var(--accent-line)] bg-[color-mix(in_srgb,var(--accent)_7%,transparent)] text-[var(--accent)]' },
  reconstructed: { label: '추정 경로', className: 'border-amber-200 bg-amber-50 text-amber-800' },
};

export function CourseMap({ eventId, gpx }: { eventId: string; gpx: CourseGpx }) {
  const map = getCourseMap(eventId);
  if (!map) return null;

  // 출처 표기는 전부 `gpx` 한 곳에서 온다. 배지는 생성물에서, 링크는 데이터에서
  // 가져오면 한쪽만 갱신됐을 때 옛 배지와 새 링크가 한 문장에 섞인다
  const badge = SOURCE_BADGE[gpx.source];

  return (
    <figure className="m-0">
      <CourseMapView data={map} />

      <figcaption className="mt-2.5 space-y-1.5">
        {badge && (
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${badge.className}`}
          >
            {badge.label}
          </span>
        )}
        {gpx.source === 'reconstructed' && (
          <p className="text-xs leading-relaxed text-secondary">
            공식이 <strong className="font-semibold">글로 밝힌 경유지</strong>만 가져와 지도 도로망 위에
            새로 이은 <strong className="font-semibold">추정 경로</strong>입니다. 보행 도로망을 따라
            이었기 때문에 실제 통제 차도와 선이 다를 수 있고,{' '}
            <strong className="font-semibold">이 경로에서 잰 거리·고도는 적지 않습니다</strong>{' '}
            (본문의 거리·시간은 대회 공식 발표 수치입니다).
            {gpx.sourceUrl && (
              <>
                {' '}
                <a
                  href={gpx.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2 hover:text-[var(--accent)]"
                >
                  공식 코스 안내 확인
                </a>
              </>
            )}
          </p>
        )}
      </figcaption>
    </figure>
  );
}
