import styles from './home-section.module.css';

type SectionHeadProps = {
  /** 영문 라벨. mono 로 렌더되므로 한글을 넣지 않는다(스펙 §3) */
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
};

/** 홈 섹션 머리말. 아이브로우 선 각도·활자 크기를 섹션 간에 일치시킨다. */
export function SectionHead({ eyebrow, title, lead }: SectionHeadProps) {
  return (
    <div className={styles.head}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h2 className={styles.h}>{title}</h2>
      {lead ? <p className={styles.lead}>{lead}</p> : null}
    </div>
  );
}
