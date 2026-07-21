# PRO-SPECS 피날레 "출발선" — 라이트 클로징 시네마틱 작업지시서

## TASK
`prospecs-hero-demo.html`의 마지막 라이트 구간을, 쇼케이스와 역할이 겹치지 않는
**시네마틱 피날레 "출발선"**으로 구성한다.
쇼케이스(다크, 제품 진열)가 제품 프레젠테이션을 전담하므로,
피날레는 제품을 반복하지 않고 **브랜드 서사를 닫는 장면**이어야 한다.
최종 결과물은 외부 라이브러리·외부 파일 없는 단일 HTML 파일이어야 한다.

---

## 1. CREATIVE DIRECTION

### 핵심 장면
> 어두운 대장간(쇼케이스)이 끝나면 무대가 밝아지고,
> 새벽 트랙의 출발선 위에서 "이제 당신이 달릴 차례"로 이야기가 끝난다.

### 서사 완결
열간 단조(Forge) 세계관의 마지막 문장:
**벼려낸 강철(제품)의 최종 목적지는 러너다.**

### 최종 감정
- 긴 이야기가 끝났다는 완결감
- 제품이 아니라 "나의 러닝"으로 시선이 옮겨가는 전환
- 어둠 → 새벽의 개방감

### 금지
- 제품명·가격 등 제품 정보 반복 (쇼케이스와 중복 금지)
- 다크 톤 유지 (피날레는 라이트여야 함 — 실제 사이트 접합 증명)
- 과한 그래픽 (트랙 레인은 은은하게, 카피가 주인공)

---

## 2. COPY (확정 문안)

```text
킥커   : SPORTS for ALL, ALL for SPORTS
헤드라인: 벼려낸 건 신발이 아니라,        (1행)
         당신의 다음 러닝.               (2행)
노트   : 각자의 속도로, 오늘도 앞으로 — 실제 페이지에선 프로스펙스 러닝 컬렉션으로 이어집니다.
CTA    : 처음부터 다시 보기   (데모 순환 — 실사이트에선 컬렉션 링크로 교체)
```

---

## 3. DOM STRUCTURE

```html
<section class="finale" id="collection" aria-label="마무리">
  <div class="finale-track" aria-hidden="true"></div>   <!-- 원근 트랙 레인 -->
  <div class="finale-inner">
    <p class="finale-kicker">SPORTS for ALL, ALL for SPORTS</p>
    <h2 class="finale-title">
      <span class="l1">벼려낸 건 신발이 아니라,</span>
      <span class="l2">당신의 다음 러닝.</span>
    </h2>
    <div class="finale-tape" aria-hidden="true"></div>  <!-- 결승 테이프 라인 -->
    <p class="finale-note">…</p>
    <a class="finale-cta" href="#track">처음부터 다시 보기</a>
  </div>
</section>
```

- `id="collection"` 유지 (기존 앵커 호환)
- 히어로의 "러닝 컬렉션 보기" CTA는 **쇼케이스**로 향한다 (제품이 거기 있으므로)
- 피날레 CTA는 히어로(#track)로 복귀 — 데모 순환. 실사이트 이식 시 컬렉션 링크로 교체

---

## 4. VISUAL SYSTEM

- 배경: `--light-bg` (라이트) — 쇼케이스 하단 seam(navy→light)에서 자연 전환
- **원근 트랙 레인**: `repeating-linear-gradient` 세로 라인 + `perspective + rotateX`로
  바닥에 원근으로 깔림. 스칼렛 15% 수준의 은은한 강도. 위쪽으로 mask 페이드아웃
- **결승 테이프**: 헤드라인 아래 3px 라인, `--scarlet → --forge` 그라디언트
- CTA: 고스트 버튼(테두리), hover/focus 시 스칼렛 강조

---

## 5. MOTION (IO 1회 진입 연출)

등장 순서와 시차:

```text
킥커      : 페이드+슬라이드업 (0ms)
헤드라인 1행: 왼쪽에서 슬라이드인 (-26px → 0)
헤드라인 2행: 오른쪽에서 슬라이드인 (+26px → 0, +140ms)
결승 테이프 : scaleX 0 → 1 (좌→우로 그어짐, +400ms, 900ms)
노트      : 페이드업 (+500ms)
CTA      : 페이드업 (+640ms)
```

- easing: `cubic-bezier(0.22, 1, 0.36, 1)`
- 한 번만 실행 (IO threshold 0.4, 발화 후 disconnect)
- transform/opacity만 사용

---

## 6. PERFORMANCE / ACCESSIBILITY

- 새 RAF 금지 — IO + CSS transition만
- **no-JS fallback**: 초기 숨김은 `html.js`에서만 적용 (스크립트 오류 시 전부 표시)
- **reduced motion**: 완전 정적 (전 요소 즉시 표시, 테이프 완성 상태, transition 무효)
- 트랙 레인·테이프는 `aria-hidden`, 카피·CTA는 실텍스트
- CTA 키보드 포커스: 스칼렛 아웃라인 + offset

---

## 7. ABSOLUTE RULES

1. 단일 HTML 파일, 외부 요청 0
2. 기존 컬러 변수만 사용
3. 제품 정보(이름·가격) 반복 금지
4. 쇼케이스 → 피날레 톤 전환은 seam으로 자연스럽게 (navy 직후 흰색 금지)
5. reduced motion 완전 정적
6. 스크롤 잠금 금지
7. 실사이트 이식 시 CTA만 컬렉션 링크로 교체하면 되는 구조 유지

---

## 8. ACCEPTANCE

- 쇼케이스에서 피날레로 넘어갈 때 "무대가 밝아진다"는 전환이 느껴진다
- 헤드라인 두 줄이 좌/우에서 만나며 등장한다
- 결승 테이프가 좌→우로 그어진다
- 트랙 레인이 은은하게 깔리되 카피를 방해하지 않는다
- 제품 정보가 반복되지 않는다
- 피날레 CTA → 히어로 복귀, 히어로 CTA → 쇼케이스 도착이 정확하다
- reduced motion에서 모든 내용이 정적으로 읽힌다

## 9. 검증 (Chrome DevTools)

1. seam 전환부 (다크→라이트)
2. 피날레 등장 연출 (킥커→헤드라인→테이프→CTA)
3. 트랙 레인 강도/원근
4. CTA 동선 (피날레→히어로, 히어로→쇼케이스)
5. reduced motion 정적
각 장면을 육안으로 확인·조정한다. 자동 수치만으로 완료 처리하지 않는다.
