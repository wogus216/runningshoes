'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { trackRunner } from '@/lib/runner-analysis/track';
import { RUNNER_CHARACTERS } from '@/lib/runner-analysis/characters';
import { getCharacterPresentation, leadAxisOf, PUBLIC_AXES, RECOVERY_MARGIN_NOTE } from '@/lib/runner-analysis/presentation';
import { readSharedRunnerCard, type SharedRunnerCard } from '@/lib/runner-analysis/share';
import { RunnerPortrait } from './running-card-portrait';
import { RunnerScores } from './running-card-scores';

// 공유 링크로 들어온 화면(D11). 링크에 담긴 것(인물·세 점수)과 인물에 딸린 것(이미지 S5-C·가문·칭호·신탁)만 보인다.
// 근거·강점·맹점·다음 행동은 보내는 사람의 기록에서 나온 것이라 링크로 되살릴 수 없고, 메달도 기록 동전이라 그리지 않는다.
// 광고 슬롯은 두지 않는다(스펙 186행 '공유 링크로 들어온 사람은 광고 없이'). 아래 '내 메달 만들기'가 새 흐름을 연다.
export default function RunningCardShared({ raw, onStart }: { raw: string; onStart: () => void }) {
  const [card, setCard] = useState<SharedRunnerCard | null>(null);

  useEffect(() => {
    const result = readSharedRunnerCard(raw, RUNNER_CHARACTERS.map((c) => c.id));
    // 형식이 틀린 링크는 그냥 첫 화면이다.
    if (!result) { onStart(); return; }
    setCard(result);
    // 형식이 맞는 공유 링크가 열렸다 — 링크에 기한이 없으니 형식만 맞으면 늘 나간다.
    // 보낸 사람 자신이 열어도 잡힌다(세션을 가를 정보가 링크에 없다).
    trackRunner('runner_shared_link_opened', { character_id: result.characterId }, 'runner-shared-opened');
  }, [raw, onStart]);

  if (!card) return <div className="rcm" />;

  const start = (
    <button
      type="button"
      className="rc-primary"
      onClick={() => {
        // 공유받은 화면이 이 페이지의 유일한 '시작' 버튼이다(직접 들어오면 01 입력부터라 시작 버튼이 없다).
        trackRunner('runner_analysis_started');
        onStart();
      }}
    >
      내 메달 만들기
    </button>
  );

  const { characterId, scores } = card;
  const character = RUNNER_CHARACTERS.find((c) => c.id === characterId)!;
  const presentation = getCharacterPresentation(characterId);
  // 대표 수치: 결과 카드와 같은 함수(인물 목표값이 가장 높은 공개 축). 인물만으로 정해지므로 원래 결과와 갈리지 않는다.
  const leadAxis = leadAxisOf(character.traits);

  return (
    <div className="rcm">
      <section className="rc-result rc-shared" aria-labelledby="rc-shared-title">
        <Masthead />
        <p className="rc-from">공유받은 러닝 카드 · 지난 28일</p>
        {/* 첫 화면 안이라 바로 받는다. 링크에 담긴 인물 한 장뿐이다. */}
        <RunnerPortrait id={characterId} name={character.name} priority />
        <p className="rc-house">{character.house} 가문</p>
        <h2 className="rc-name" id="rc-shared-title">{character.name}</h2>
        <p className="rc-epithet">{presentation.title}</p>
        <blockquote className="rc-oracle"><p>“{presentation.oracle}”</p></blockquote>
        <section className="rc-section" aria-labelledby="rc-shared-scores">
          <h3 id="rc-shared-scores">세 점수</h3>
          <RunnerScores scores={PUBLIC_AXES.map(([axis, label]) => ({ label, value: scores[axis], lead: axis === leadAxis }))} />
        </section>
        <p className="rc-def">{RECOVERY_MARGIN_NOTE}</p>
        <div className="rc-actions rc-start">{start}</div>
      </section>
    </div>
  );
}

function Masthead() {
  return (
    <header className="rc-mast">
      {/* 미리 받지 않는다 — 홈 CSS 를 preload 했다가 안 쓰면 콘솔 경고가 남는다(메달 머리글도 미리 받지 않는 a). */}
      <Link href="/" prefetch={false}>러닝 카드<span> / </span>산초</Link>
      <span>지난 28일</span>
    </header>
  );
}
