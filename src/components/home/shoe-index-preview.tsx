'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { track } from '@/lib/analytics';
import { balancedByCategory } from '@/lib/home/index-sort';
import type { GridShoe } from '@/lib/data/shoes';
import type { DataStatus } from '@/lib/home/data-status';
import { SectionHead } from './section-head';
import styles from './shoe-index-preview.module.css';

export type ShoeIndexPreviewProps = {
  shoes: GridShoe[];
  /** slug → 데이터 상태. 서버에서 산출해 넘긴다(getDataStatuses) */
  statuses?: Record<string, DataStatus>;
  /** 기본 노출 행 수. 데스크톱 16 / 모바일 12 (스펙 §5.2) */
  initialCount?: number;
};

const STEP = 24;
/** 기본 노출 — 데스크톱 16 / 모바일 12 (스펙 §5.2) */
const DEFAULT_INITIAL = 16;
const MOBILE_INITIAL = 12;
const MOBILE_QUERY = '(max-width: 900px)';

type FilterId = 'all' | 'wide' | 'under20' | `cat:${string}`;

const CATEGORIES = ['데일리', '쿠션화', '입문화', '레이싱', '안정화', '트레일'] as const;
const UNDER = 200_000;

/**
 * 상위 16개는 카테고리 균형, 나머지는 평가·가격 순으로 뒤에 잇는다.
 * rating 단순 정렬은 상위가 전부 30만원대 레이싱 슈퍼슈즈라 홈 기본값으로 대표성이 없다.
 */
function orderForIndex(shoes: readonly GridShoe[]): GridShoe[] {
  const head = balancedByCategory(shoes);
  const headSet = new Set(head.map((s) => s.slug));
  const tail = shoes
    .filter((s) => !headSet.has(s.slug))
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0) || (a.price ?? Infinity) - (b.price ?? Infinity));
  return [...head, ...tail];
}

function matches(shoe: GridShoe, filter: FilterId): boolean {
  if (filter === 'all') return true;
  if (filter === 'wide') return shoe.koreanFootFit?.wideOptions === true;
  if (filter === 'under20') return typeof shoe.price === 'number' && shoe.price <= UNDER;
  return shoe.category === filter.slice(4);
}

const won = (n?: number) => (typeof n === 'number' && n > 0 ? `${n.toLocaleString('ko-KR')}원` : '—');
const gram = (n?: number) => (typeof n === 'number' && n > 0 ? `${n}g` : '—');

function Row({
  shoe,
  status,
}: {
  shoe: GridShoe;
  status?: DataStatus;
}) {
  return (
    <Link
      className={styles.row}
      href={`/shoes/${shoe.slug}`}
      onClick={() =>
        track('home_shoe_detail_click', {
          section_name: 'shoe_index',
          item_name: shoe.slug,
          destination_path: `/shoes/${shoe.slug}`,
        })
      }
    >
      <span className={styles.rowTh}>
        {shoe.image ? (
          <Image src={shoe.image} alt="" width={62} height={40} aria-hidden="true" />
        ) : (
          <span className={styles.rowMark} aria-hidden="true" />
        )}
      </span>
      <span className={styles.rowName}>
        <span className={styles.rowB}>{shoe.brand}</span>
        <span className={styles.rowN}>{shoe.name}</span>
      </span>
      <span className={styles.rowD}>{shoe.oneliner ?? ''}</span>
      <span className={styles.rowU}>{shoe.category}</span>
      <span className={styles.rowW}>{gram(shoe.specs?.weight)}</span>
      <span className={styles.rowP}>{won(shoe.price)}</span>
      <span className={`${styles.rowS} ${status === '외부 랩 확인' ? styles.verified : ''}`}>
        {status ?? '리뷰 종합'}
      </span>
    </Link>
  );
}

/**
 * 러닝화 인덱스.
 *
 * 두 요구를 동시에 만족해야 한다 — **122개 링크를 정적 HTML에 보존**하면서
 * **한 번에 106행이 펼쳐지지 않게** 한다(스펙 §5.2).
 *
 * 방법: 전체 행을 항상 마크업에 렌더하고, 노출 제한은 CSS/상태가 아니라 슬라이스로 처리하되
 * 잘려나간 나머지는 `<details>` 안에 남긴다. JS가 없으면 `<details>`로 전부 접근할 수 있고,
 * JS가 있으면 점진 확장 버튼이 같은 역할을 한다.
 *
 * 필터는 **전체를 대상으로** 동작하고, 필터 결과는 노출 제한보다 우선한다.
 */
export function ShoeIndexPreview({
  shoes,
  statuses = {},
  initialCount = DEFAULT_INITIAL,
}: ShoeIndexPreviewProps) {
  const [filter, setFilter] = useState<FilterId>('all');
  const [shown, setShown] = useState(initialCount);

  /**
   * 모바일은 12행에서 시작한다(스펙 §5.2).
   *
   * 서버 렌더는 폭을 모르므로 16행으로 나가고 마운트 후 좁은 화면에서만 12로 줄인다.
   * 정적 HTML 이 더 많이 담고 있는 방향이라 크롤러·JS 없는 환경에는 손해가 없고,
   * 인덱스는 모바일에서 한참 아래에 있어 줄어드는 4행이 화면 밖이라 CLS 에 잡히지 않는다.
   */
  const [mobileInitial, setMobileInitial] = useState(initialCount);
  // 현재 기준값. 사용자가 확장·필터로 직접 바꾼 상태를 브레이크포인트 변화가 덮지 않게 한다
  const basisRef = useRef(initialCount);
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const apply = () => {
      const next = mq.matches ? Math.min(MOBILE_INITIAL, initialCount) : initialCount;
      // 아직 기준값 그대로면 새 기준을 따르고, 사용자가 이미 늘렸으면 건드리지 않는다.
      // basisRef 대신 initialCount 로 비교하면 모바일(12)에서 데스크톱으로 돌아올 때
      // 12 !== 16 이라 12에 갇힌다(실측으로 확인).
      setShown((cur) => (cur === basisRef.current ? next : cur));
      basisRef.current = next;
      setMobileInitial(next);
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [initialCount]);

  const ordered = useMemo(() => orderForIndex(shoes), [shoes]);
  const filtered = useMemo(() => ordered.filter((s) => matches(s, filter)), [ordered, filter]);

  const counts = useMemo(() => {
    const c: Record<string, number> = {
      all: shoes.length,
      wide: shoes.filter((s) => s.koreanFootFit?.wideOptions === true).length,
      under20: shoes.filter((s) => typeof s.price === 'number' && s.price <= UNDER).length,
    };
    CATEGORIES.forEach((cat) => {
      c[`cat:${cat}`] = shoes.filter((s) => s.category === cat).length;
    });
    return c;
  }, [shoes]);

  /** 필터를 바꾸면 노출 수를 초기화한다. 결과가 기본 노출 이하면 전부 보여준다. */
  const changeFilter = (next: FilterId) => {
    setFilter(next);
    const size = ordered.filter((s) => matches(s, next)).length;
    setShown(size <= mobileInitial ? size : mobileInitial);
    if (next !== 'all') {
      track('home_filter_apply', {
        section_name: 'shoe_index',
        filter_name: next.startsWith('cat:') ? 'category' : next,
        filter_value: next.startsWith('cat:') ? next.slice(4) : 'on',
      });
    }
  };

  const visible = filtered.slice(0, shown);
  const hidden = filtered.slice(shown);
  const remaining = hidden.length;

  const expand = () => {
    const next = Math.min(shown + STEP, filtered.length);
    setShown(next);
    track('home_shoe_index_expand', { section_name: 'shoe_index', item_name: String(next) });
  };

  const chips: { id: FilterId; label: string; wide?: boolean }[] = [
    { id: 'all', label: '전체' },
    ...CATEGORIES.map((c) => ({ id: `cat:${c}` as FilterId, label: c })),
    { id: 'wide', label: '와이드 출시', wide: true },
    { id: 'under20', label: '20만원 이하' },
  ];

  return (
    <section className={styles.sec} id="shoe-index">
      <SectionHead
        eyebrow="SHOE INDEX"
        title="지금 비교 가능한 러닝화"
        lead="조건을 좁혀 보세요. 결과는 바로 아래에서 갱신됩니다."
      />

      <div className={styles.chips}>
        {chips.map((c) => (
          <button
            key={c.id}
            type="button"
            className={`${styles.chip} ${c.wide ? styles.wide : ''}`}
            aria-pressed={filter === c.id}
            onClick={() => changeFilter(c.id)}
          >
            {c.label} <span className={styles.chipN}>{counts[c.id] ?? 0}</span>
          </button>
        ))}
      </div>

      <div className={styles.resultLine}>
        <p className={styles.resultN} aria-live="polite">
          <b>{filtered.length}</b>개가 현재 조건에 맞습니다
        </p>
        <p className={styles.sort}>카테고리 균형 · 평가순</p>
      </div>

      <div className={styles.head} aria-hidden="true">
        <span />
        <span>모델</span>
        <span>한 줄 결론</span>
        <span>용도</span>
        <span>무게</span>
        <span>가격</span>
        <span>데이터 상태</span>
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>조건에 맞는 러닝화가 없습니다. 필터를 하나씩 풀어보세요.</p>
      ) : (
        <div className={styles.idx}>
          {visible.map((s) => (
            <Row key={s.slug} shoe={s} status={statuses[s.slug]} />
          ))}
        </div>
      )}

      {remaining > 0 && (
        <>
          <div className={styles.expand}>
            <button type="button" className={styles.expandB} onClick={expand}>
              {remaining > STEP ? `러닝화 ${STEP}개 더 보기` : '전체 러닝화 보기'}
              <span aria-hidden="true">↓</span>
            </button>
          </div>

          {/* 나머지 행은 마크업에 그대로 남는다 — 크롤러가 122개 링크를 전부 읽고,
              JS 가 없어도 여기서 펼쳐 볼 수 있다. 버튼으로 노출되면 이 목록에서 빠진다. */}
          <details className={styles.fallback}>
            <summary className={styles.fallbackSummary}>
              나머지 {remaining}개 목록으로 보기
            </summary>
            <div className={styles.idx}>
              {hidden.map((s) => (
                <Row key={s.slug} shoe={s} status={statuses[s.slug]} />
              ))}
            </div>
          </details>
        </>
      )}
    </section>
  );
}
