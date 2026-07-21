# PRO-SPECS 신발 진열(쇼케이스) 연출 작업지시서

## TASK
`prospecs-hero-demo.html`의 컬렉션 영역을, 브랜드 선언 섹션(`.creed`)에서 이어지는
**신발이 진열장(케이스)에 하나씩 진열되는 시네마틱 쇼케이스**로 개편한다.
선언("SPORTS for ALL, ALL for SPORTS") 직후, 벼려낸 제품들이 무대에 오르듯 진열되고
그대로 컬렉션(구매 가능한 4종)으로 이어진다.
최종 결과물은 외부 라이브러리·외부 파일 없는 단일 HTML 파일이어야 한다.

## CONTEXT (현재 구조)
```
히어로(PRO-SPECS 워드마크) → 일대기(dot 점화 타임라인, 다크)
→ "당신에게" 선언(.creed, 다크) → seam(navy→light) → 컬렉션(.collection, 라이트 리스트)
```
- 컬렉션 현재: 인피니트 러시(259,000) / 하이퍼 러시(219,000) / 듀플렉스 GF(139,000) / 스피드 러시 3(2026.06 신형), row 리스트
- 컬러 변수: `--navy #0a0f1a` / `--scarlet #bf1238` / `--forge #ff4d1c` / `--steel-*` / `--paper` / `--light-bg`
- 열간 단조(Forge) 컨셉 · 성능: 단일 RAF+dirty-render, IntersectionObserver, transform/opacity 중심

## CREATIVE DIRECTION
- 한 줄 방향: **벼려낸 강철(제품)이 어두운 무대의 진열장에 하나씩 조명받으며 오른다.**
- 최종 감정: 미래 쇼룸이 아니라 **장인이 완성품을 진열대에 올리는** 무게감.
- 선언의 다크 톤을 이어받아 **진열은 다크 무대**로 시작 → (선택) 마지막에 라이트로 전환.
- 스포트라이트/발열광이 신발 뒤에서 켜진다. 과한 네온·회전·홀로그램 금지.

## 진열 스타일 — 아래 중 택1 (또는 조합)  ← [작성 시 선택]
- **A. 스포트라이트 그리드**: 어둠 속 4칸, 스크롤 진입 시 조명이 하나씩 켜지며 신발 등장(stagger). (열간 단조 정합, 추천)
- **B. 가로 쇼케이스**: 신발이 가로로 슬라이드-인하며 한 줄로 진열(스크롤/드래그).
- **C. 진열대 슬라이드업**: 바닥(진열대)에서 신발이 위로 솟아오르며 정렬.

## DOM / 구조  ← [원하면 수정]
```html
<section class="showcase" aria-label="프로스펙스 러닝 컬렉션">
  <div class="showcase-inner">
    <p class="showcase-kicker">벼려낸 네 켤레</p>
    <h2 class="showcase-title">지금, 프로스펙스 러닝</h2>
    <ol class="showcase-grid">
      <li class="shoe-case" data-shoe="infinite">
        <div class="shoe-spot" aria-hidden="true"></div>   <!-- 스포트라이트 -->
        <div class="shoe-figure" aria-hidden="true"></div> <!-- 신발 실루엣/이미지 슬롯 -->
        <div class="shoe-meta"><h3>인피니트 러시</h3><p>최상위 카본 러닝화</p><span class="price">259,000원</span></div>
      </li>
      ... 4종
    </ol>
  </div>
</section>
```
- 기존 `.collection`을 이 쇼케이스로 대체하거나, 쇼케이스=시네마틱 진열 / 그 아래 기존 리스트=상세 로 둘 다 유지할지 결정.  ← [선택]

## 스크롤 연출
- 각 `.shoe-case`가 뷰포트 진입 시(IntersectionObserver, 한 번만):
  1. 스포트라이트(`.shoe-spot`)가 켜짐(opacity/scale)
  2. 신발(`.shoe-figure`)이 아래/뒤에서 슬라이드-인(translateY+scale)
  3. 이름·가격(`.shoe-meta`) 페이드인
- 순차 진열(stagger): 카드마다 `transition-delay` 또는 진입 순서로 시차.
- (선택) 진열 완성 후 전체 무대 밝기 상승 → 라이트 컬렉션/CTA로 전환.

## 신발 플레이스홀더 (⚠️ 이미지 없음)
- 실제 프로스펙스 신발 이미지는 데모(단일 파일)에 넣지 않는다.
- `.shoe-figure`는 **CSS 실루엣 / 발열 카드 / 그라디언트 블록** 중 하나로 표현.  ← [스타일 선택]
- 실제 사이트 이식 시 이미지로 교체할 수 있게 **슬롯 구조**로 만든다(주석 명시).

## 성능
- 진열 등장은 **IntersectionObserver**(스크롤마다 위치 계산 금지), 한 번만 실행 후 unobserve.
- 애니메이션은 **transform/opacity만**(layout 속성·filter 남발 금지).
- 스포트라이트 발광은 radial-gradient/pseudo-element로(무거운 blur 지양).
- 새 RAF 루프를 만들지 않는다(등장은 CSS transition + IO로 충분).

## 접근성 / reduced motion
- `prefers-reduced-motion: reduce`: 신발·조명·메타 **즉시 전부 표시**(정적), stagger/슬라이드 없음.
- `<ol><li>` 시맨틱 유지, 스포트라이트·실루엣은 `aria-hidden`, 신발명/가격은 실텍스트.

## 절대 룰
1. 단일 HTML 파일, 외부 요청 0(신발 이미지도 외부 로드 금지 — 플레이스홀더).
2. 기존 컬러 변수만 사용, 새 팔레트 금지.
3. 신발 정보(이름·가격·한 줄)는 현재 데이터 유지, 스피드 러시 3은 "2026.06 신형"(정가 미확인).
4. 애니메이션 transform/opacity 중심, 스크롤 잠금 금지.
5. reduced motion 완전 정적.
6. 선언(.creed) → 진열 → 컬렉션 흐름이 톤 단절 없이 이어질 것.

## ACCEPTANCE
- 선언 섹션 직후 신발들이 하나씩 조명받으며 진열된다.
- 순차(stagger) 등장이 자연스럽고, 빠른 스크롤에도 깨지지 않는다.
- 4종 정보가 정확하고 실텍스트로 존재한다.
- reduced motion에서 전부 정적으로 보인다.
- 열간 단조 다크 톤이 유지되며 미래 쇼룸처럼 보이지 않는다.

## 검증 (Chrome DevTools 스크린샷)
1. 진열 시작(첫 신발 조명 켜지는 순간)
2. 진열 진행 중(일부만 진열)
3. 진열 완성(4종 전부)
4. 컬렉션 연결부
5. reduced motion(정적)
자동 수치만으로 완료 처리하지 않고 육안으로 조명·정렬·간격을 조정한다.

---

## [작성 시 채울 결정]
- ① 진열 스타일: A(스포트라이트 그리드) / B(가로 쇼케이스) / C(진열대 슬라이드업)
- ② 신발 플레이스홀더: 실루엣 / 발열 카드 / 그라디언트 블록
- ③ 진열장이 기존 리스트를 대체 / 병존
- ④ 다크 무대 유지 / 마지막에 라이트 전환
