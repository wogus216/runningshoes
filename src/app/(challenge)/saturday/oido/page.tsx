import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { OidoScrollDirector } from '@/components/challenge/saturday/oido-scroll-director';
import { SITE_URL } from '@/lib/constants';
import styles from './oido.module.css';

// 실제로 달린 날(2026-08-30)은 일요일이다. 크루 이름은 쎄러데이지만
// 제목에 요일을 박으면 거짓이 되므로 날짜만 남기고 요일 표현은 쓰지 않는다.
const TITLE = '오이도 방조제를 달린 날 — 쎄러데이';
const DESCRIPTION = '시흥오이도박물관에서 시화방조제 끝까지, 다섯 친구가 함께 달린 왕복 21.51km의 기록.';
const IMAGE_ROOT = '/images/challenge/saturday/oido';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: '/saturday/oido' },
  openGraph: {
    type: 'article',
    locale: 'ko_KR',
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/saturday/oido`,
    images: [{
      url: `${SITE_URL}${IMAGE_ROOT}/thumbnail.webp`,
      width: 1200,
      height: 630,
      alt: '오이도 방조제를 함께 달리는 네 명의 러너',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${SITE_URL}${IMAGE_ROOT}/thumbnail.webp`],
  },
};

const runners = ['재춘', '감자', '형가', '지자', '광묵'];

export default function OidoStoryPage() {
  return (
    <div className={styles.story} data-oido-story>
      <a className={styles.skipLink} href="#oido-story-main">본문 바로가기</a>

      <header className={styles.header}>
        <Link href="/saturday" aria-label="쎄러데이 처음으로">
          <i aria-hidden="true" />
          <span>SATURDAY</span>
        </Link>
        <span>오이도 / RUNNIC 02</span>
      </header>

      <div className={styles.progress} aria-hidden="true"><i data-story-progress /></div>
      <aside className={styles.journeyMeter} data-journey-meter aria-hidden="true">
        <i><b data-journey-progress /></i>
        <span data-journey-distance>0.00</span>
        <small>/ 21.51 KM</small>
      </aside>

      {/* tabIndex=-1 이 없으면 skip link 를 눌러도 포커스가 실제로 넘어오지 않는다 */}
      <main id="oido-story-main" tabIndex={-1}>
        <section className={styles.hero} data-oido-scene="hero">
          <div className={styles.heroStage}>
            <Image className={styles.heroImage} data-hero-media src={`${IMAGE_ROOT}/hero.webp`} alt="볼록거울에 비친 오이도 러닝 멤버 다섯 명" fill priority sizes="100vw" />
            <div className={styles.heroWash} />
            <div className={styles.heroTopline}><span>30 AUG 2026</span><span>07:46 START</span></div>
            {/* h1 은 여기다. 박스 뚜껑 쪽은 aria-hidden 안이라 h1 을 두면 접근성 트리에서 사라진다 */}
            <div className={styles.heroTitle}><p>RUN + PICNIC</p><h1>다섯 명의<br />런크닉</h1></div>
            <span className={styles.heroSticker}>왕복<br />런크닉</span>
            <div className={styles.heroDistance}><strong>21.51</strong><span>KM / OUT &amp; BACK</span></div>
            <div className={styles.runnerRail} aria-label="참가자">
              {runners.map((runner, index) => <span key={runner}>{String(index + 1).padStart(2, '0')} {runner}</span>)}
            </div>
            <p className={styles.scrollCue}>바구니를 열어주세요 <i /></p>
            {/* 위커 바구니 — 뚜껑 두 짝이 양옆으로 젖혀지며 오렌지 깅엄 안감이 드러난다 */}
            <div className={styles.boxScene} data-box-scene aria-hidden="true">
              <div className={styles.basket} data-basket>
                <i className={styles.basketHandle} />
                <div className={styles.boxBase} data-box-base>
                  <div className={styles.boxLining} data-box-lining />
                  <span className={styles.boxTape}>30 AUG 2026</span>
                  <div className={styles.boxPhoto} data-box-item="photo"><Image src={`${IMAGE_ROOT}/hero.webp`} alt="" fill sizes="84vw" /></div>
                  <div className={styles.boxTicket} data-box-item="ticket"><small>ONE DAY PASS</small><strong>오이도 ↔ 방조제 끝</strong><span>21.51 KM / 5 RUNNERS</span></div>
                  <div className={styles.boxNames} data-box-item="names">{runners.map((runner) => <span key={runner}>{runner}</span>)}</div>
                  <i className={styles.boxRoute} data-box-item="route" />
                </div>
                <div className={styles.boxLidL} data-box-lid="l" />
                <div className={styles.boxLidR} data-box-lid="r" />
                {/* 타이틀은 뚜껑 두 짝에 걸칠 수 없으므로 별도 레이어로 얹고, 열릴 때 사라진다 */}
                <div className={styles.boxTitle} data-box-title>
                  <span>오늘의<br />런크닉 바구니</span>
                  <strong>오이도</strong>
                  <small>5 PEOPLE / 21.51 KM<br />SCROLL TO OPEN</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.prologue} data-pass-section>
          {/* 키커 6개 중 01 만 영어라 "이 페이지 키커는 영어"라고 학습시킨 뒤 02 에서 배신했다 */}
          <p className={styles.kicker}><b>01</b> / 바구니 안</p>
          {/* `조금 긴`은 hedge 였다 — 페이지가 끝까지 "하프"를 한 번도 안 쓰면서 거리를 감으로만 말했다 */}
          <h2>오늘 바구니에<br />담아온 건<br /><em>하프 + 400m.</em></h2>
          <button className={styles.picnicTicket} type="button" data-runnic-pass aria-expanded="false" aria-label="런크닉 패스를 뒤집어 준비물 확인하기">
            <span className={styles.ticketInner}>
              <span className={`${styles.ticketFace} ${styles.ticketFront}`}>
                <small>ONE DAY RUNNIC PASS</small>
                <strong>오이도 ↔ 방조제 끝</strong>
                <span>RUN TOGETHER / COME BACK TOGETHER</span>
                <i>눌러서 열기 ↗</i>
              </span>
              <span className={`${styles.ticketFace} ${styles.ticketBack}`}>
                <small>PACKING LIST / 30 AUG 2026</small>
                <strong>운동화 5켤레<br />물 · 바다 · 돌아올 힘</strong>
                <span>전부 챙겼습니다.</span>
                <i>다시 앞면 보기 ↙</i>
              </span>
            </span>
          </button>
          {/* 외부인에게 톤 대신 좌표를 준다 — 21.51 이 무슨 거리인지, 5 가 왜 5 인지 페이지에 없었다.
              factGrid 뒤에 두면 섹션 맨 아래로 밀려 우하단 고정 오도미터와 좌표가 겹친다(실측 x 292~404) */}
          <p className={styles.prologueNote}>21.51km — 하프마라톤보다 딱 400m 길다.<br />크루는 일곱 명. 오늘 나온 건 다섯 명.</p>
          <dl className={styles.factGrid}>
            <div><dt>START / FINISH</dt><dd>시흥오이도박물관</dd></div>
            <div><dt>DIRECTION</dt><dd>시화나래 방향</dd></div>
            <div><dt>CREW</dt><dd>재춘 · 감자 · 형가 · 지자 · 광묵</dd></div>
          </dl>
        </section>

        <section className={styles.outbound} aria-labelledby="outbound-title">
          <div className={styles.outboundHead}>
            <p className={styles.kicker}><b>02</b> / 가는 길</p>
            <h2 id="outbound-title">가는 길엔<br /><em>아무도 안 힘들었다.</em></h2>
            <p>OUTBOUND / 10.75 KM TO TURN</p>
          </div>
          <div className={styles.photoSequence}>
            <figure className={styles.photoLarge} data-reveal data-km="0.00">
              <Image src={`${IMAGE_ROOT}/outbound-one.webp`} alt="오이도 해안길을 달리기 시작한 네 명" fill sizes="(min-width: 900px) 70vw, 100vw" />
              <figcaption><b>0.00 KM / 출발</b><span>아직 다섯 명 모두<br />말이 많다.</span></figcaption>
            </figure>
            <figure className={styles.photoInset} data-reveal data-km="4.80">
              <Image src={`${IMAGE_ROOT}/outbound-two.webp`} alt="바다 옆 자전거길을 달리는 네 명" fill sizes="(min-width: 900px) 46vw, 84vw" />
              <figcaption><b>4.80 KM / 바다</b><span>오른쪽에는<br />계속 바다가 있다.</span></figcaption>
            </figure>
            <figure className={styles.photoWide} data-reveal data-km="8.09">
              <Image src={`${IMAGE_ROOT}/outbound-three.webp`} alt="넓은 방조제 길을 나란히 달리는 네 명" fill sizes="100vw" />
              <figcaption><b>8.09 KM / 우리</b><span>사진에는 넷,<br />달리는 사람은 다섯.</span></figcaption>
            </figure>
          </div>
        </section>

        <section className={styles.turn} data-oido-scene="turn" data-km="10.75">
          <div className={styles.turnFrame}><Image src={`${IMAGE_ROOT}/sea.webp`} alt="시화방조제 옆 바다와 구름" fill sizes="100vw" /></div>
          <span className={styles.turnArrow} aria-hidden="true">↩</span>
          {/* 이 사진은 반환점에서 찍은 게 아니다. 안 적으면 반환점 사진처럼 읽힌다 */}
          <div className={styles.turnCopy}>
            <p className={styles.kicker}><b>03</b> / 런크닉 반환점</p>
            {/* 리뷰 둘이 "크기를 낮춰라 / 스탬프를 얹어라"로 갈렸는데 배타적이지 않다 —
                크기는 총거리(21.51)와 같은 위계로 내리고, 잃은 존재감은 스탬프 틀로 돌려준다 */}
            <div className={styles.turnStamp}><h2>10.75</h2><small>TURN POINT</small></div>
            <p>다리 끝에 도착.<br />자, 이제 집에 가자.</p>
            <p className={styles.turnNote}>※ 이 사진은 반환점이 아니다. 오다가 찍었다.</p>
          </div>
          <span className={styles.turnUnit}>KM</span>
        </section>

        <section className={styles.returning} aria-labelledby="return-title">
          <div className={styles.returnTitle}><p className={styles.kicker}><b>04</b> / 돌아오는 길</p><h2 id="return-title">돌아오는<br />길엔<br /><em>말이 줄었다.</em></h2></div>
          <figure className={styles.returnFirst} data-reveal data-km="16.20">
            <Image src={`${IMAGE_ROOT}/return-one.webp`} alt="방조제에서 힘차게 되돌아 달리는 러너들" fill sizes="(min-width: 900px) 54vw, 100vw" />
            {/* 제목이 이미 "말이 줄었다"라 캡션의 `대화는 줄어도`는 같은 말을 두 번 한다 */}
            <figcaption><b>16.20 KM</b><br />그래도 장난칠<br />힘은 남았다.</figcaption>
          </figure>
          <figure className={styles.returnSecond} data-reveal data-km="20.80">
            <Image src={`${IMAGE_ROOT}/return-two.webp`} alt="풍력발전기 아래 오이도로 돌아오는 네 명" fill sizes="(min-width: 900px) 50vw, 84vw" />
            <figcaption>20.80 KM / 거의 다 왔다</figcaption>
          </figure>
        </section>

        <section className={styles.finish} aria-labelledby="finish-title" data-km="21.51">
          <Image className={styles.finishImage} src={`${IMAGE_ROOT}/finish.webp`} alt="시흥오이도박물관 거울 앞에 다시 모인 다섯 명" fill sizes="100vw" />
          <div className={styles.finishShade} />
          <div className={styles.finishCopy}><p className={styles.kicker}><b>05 / 21.51 KM</b></p><h2 id="finish-title">다녀왔습니다.</h2><blockquote>잘 달렸다기보다,<br />잘 다녀왔다.</blockquote></div>
          {/* `03:03:24 LATER` 는 뺐다 — 바로 다음 섹션의 TIME 03:03:24 와 붙어 재탕이 된다 */}
        </section>

        {/* 지도·스탯은 이 페이지에서 유일한 완주 후 시점인데 아직 11km 남은 자리에 있었다.
            finish 뒤로 오면서 "다 뛰고 나서 켜 본 기록"이 되고, 달리기는 끊기지 않는 한 덩어리가 된다 */}
        <section className={styles.activity} aria-labelledby="activity-title">
          <div className={styles.activityHead}>
            <p className={styles.kicker}><b>06</b> / 오늘의 지도</p>
            <h2 id="activity-title">선은<br />이렇게<br />생겼다.</h2>
            <p>다 뛰고 나서 켜 봤다.<br />21.51km가 처음부터 다시 움직인다.</p>
          </div>
          <div className={styles.mapSheet} data-reveal>
            <span className={styles.mapTape}>TODAY&apos;S ROUTE</span>
            <video className={styles.routeVideo} src={`${IMAGE_ROOT}/route.mp4`} poster={`${IMAGE_ROOT}/route-poster.webp`} autoPlay muted loop playsInline preload="metadata" aria-label="오이도 왕복 21.51km GPS 경로 애니메이션" />
            <span className={styles.phoneLabel}>OIDO MUSEUM ↔ SIHWA DYKE</span>
          </div>
          {/* PACE 는 뺐다 — 6'55"는 03:03:24 와 맞지 않는다(21.51km ÷ 3:03:24 = 8'32"/km).
              어느 쪽이 이동 페이스인지 확인되기 전까지 근거 없는 수치를 걸지 않는다 */}
          <dl className={styles.activityStats}>
            <div><dt>DISTANCE</dt><dd>21.51 <span>KM</span></dd></div>
            <div><dt>TIME</dt><dd>03:03:24</dd></div>
            <div><dt>HEART</dt><dd>147 <span>BPM</span></dd></div>
          </dl>
        </section>

        <section className={styles.end} aria-label="러닝 기록 요약">
          <p className={styles.endIndex}>오늘의 런크닉 / SATURDAY RUN 02</p>
          {/* 히어로에서 연 바구니를 여기서 닫는다 — 짜임·안감·뚜껑 각도(96도) 전부 같은 어휘의 역재생.
              JS 가 없으면 인라인 스타일이 안 붙으므로 CSS 기본값은 "닫힌 상태"다 */}
          <div className={styles.closingStage} data-closing-stage>
            <div className={styles.closingSticky} data-closing-sticky>
              <div className={styles.basket} data-closing-basket>
                <i className={styles.basketHandle} />
                <div className={styles.boxBase}>
                  <div className={styles.boxLining} data-closing-lining />
                  {/* 아까 꺼낸 것들이 다시 들어간다 — 사진만 finish 로 바꿔 "돌아온 뒤"를 표시한다.
                      히어로 아이템의 반복이라 스크린리더에는 숨기고, 기록은 아래 타이틀이 읽힌다 */}
                  <div className={styles.boxPhoto} data-closing-item aria-hidden="true"><Image src={`${IMAGE_ROOT}/finish.webp`} alt="" fill sizes="84vw" /></div>
                  <div className={styles.boxNames} data-closing-item aria-hidden="true">{runners.map((runner) => <span key={runner}>{runner}</span>)}</div>
                  <div className={styles.boxTicket} data-closing-item aria-hidden="true"><small>FINISHED / 30 AUG 2026</small><strong>03:03:24</strong><span>5 RUNNERS / ALL BACK</span></div>
                  <div className={`${styles.boxTitle} ${styles.closingTitle}`} data-closing-title>
                    <span>다섯 명<br />전원 귀환</span>
                    <strong>21.51</strong>
                    <small>KM / OIDO<br />5 RUNNERS · ALL BACK</small>
                  </div>
                </div>
                <div className={styles.boxLidL} data-closing-lid="l" />
                <div className={styles.boxLidR} data-closing-lid="r" />
                {/* 뚜껑 두 짝이 맞물린 자리에 걸치는 라벨이라 몸통이 아니라 바구니 좌표계에 얹는다 */}
                <span className={styles.closingSeal} data-closing-seal aria-hidden="true">PACKED AGAIN / 30 AUG 2026</span>
              </div>
              <p className={styles.closingCue} data-closing-cue aria-hidden="true"><i />바구니를 닫는 중</p>
            </div>
          </div>
          <p className={styles.endNames}>함께 걸린 시간 03:03:24<br />함께 달린 사람 {runners.join(' / ')}</p>
          <div className={styles.endFooter}>
            <p>OIDO MUSEUM ↔ SIHWA DYKE<br />30 AUGUST 2026</p>
            <div className={styles.endLinks}>
              <Link href="/saturday/athletes">일곱 명 선수 소개 →</Link>
              <Link href="/saturday">쎄러데이 이야기로 돌아가기 →</Link>
            </div>
          </div>
        </section>
      </main>

      <OidoScrollDirector />
    </div>
  );
}
