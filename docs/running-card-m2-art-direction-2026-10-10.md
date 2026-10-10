# M2 Astra 대표 3인 구현 → Sol 36인 확장 인계

2026-10-10. 실제 production 모듈 `medal-cover-renderer.js`에 적용했다. 별도 목업이나 이미지 텍스처는 없다. 이 단계는 대표 3인 품질 확정이며 36인 완료 선언이 아니다.

## 확인한 실제 결과

QA 루트: `/Users/kwonjaehyeon/.gstack/qa-reports/running-card-m2-cover-2026-10-10/`

- 이전: `before-art-direction/`, 초기 비교 시트 `all-gold-webgl/three-covers.png`.
- 최종: `astra-heroes/{gold,silver,brass}/three-covers.png` (각 표지 390px), 각 폴더에 `{id}-{finish}-{feed,story,medal}.png` 원본.
- 2D: `astra-heroes/flat/`, 가는 표식 진단: `astra-heroes/thin-diagnostic/`.
- 확정 소스 사본: `astra-heroes/medal-cover-renderer.js`.

원본 확대 및 390px에서 비교했다. 이전의 밝은 별도 표식색과 균일한 면 대신 같은 금속색, 넓고 둥근 경사면, 좌상단에서 우하단으로 이어지는 반사 변화가 보인다. 아폴론은 타원 덩어리 형태를 끝이 뾰족한 월계수 잎으로 수정했다. 망치·독수리의 기존 대표 실루엣은 보존했다.

3인 × 금/은/황동 × feed/story 총18장 + 2D금6장 생성 성공. 모든 harness report: renderer 정상, 빈 표식 없음, dispose 후 재생성 PNG 동일, console errors 없음. Achilles/Orion 가는 도상도 실제 추가 렌더해 생존 확인했다. npm run build 성공 (1080 SSG 페이지). 기존 img lint, lockfile 루트, Browserslist 경고만 남는다.

## Sol이 유지할 정확한 공통 사양

- 원판 반지름1, face 반지름 .914. 기존 단일 원판/얇은 두 테/짧은 주황 리본/고리 유지.
- face z = `.025 + .045 * max(0, 1 - 4(u-.5)^2 - 4(v-.5)^2) + height*.032`. 약한 볼록면이 금속 반사에 기울기를 준다.
- 1024 마스크, longest dimension `.58*S` 정규화. 두 번의 separable box blur, radius `round(S*.009)`; 이후 `t=clamp((height-.025)/.95,0,1)`, smoothstep `t*t*(3-2*t)`. 1024에서 radius9. 깊이 .032.
- face mesh radial224 × angular768. 노멀은 삼각형 평균 대신 연속 height field의 중앙차분: e=1/S, 분모3.656*e. 이 처리가 경사면 삼각형 줄무늬를 줄인다. 반드시 유지.
- 금 base `#b99548`, bright `#f0d18c`, dark `#8c6427`, rough .39. 은 `#a7abad/#e9ebe8/#72787b`, .36. 황동 `#99733e/#d8b879/#684a25`, .44.
- 표식 색 혼합은 `(bright-base)*height*.035`뿐. 기존 .88로 되돌리지 말 것. 표식 광택은 `rough-height*.12`. metalness1, clearcoat .1/rough .35. 미세 입자 기존 deterministic hash 유지.
- studio sphere linear RGB (.42,.40,.36); panels (w,h,power,position): (7,13,4.2,[-5,5,10]), (3,15,2.6,[9,0,6]), (10,3,1.5,[0,-7,10]), (6,11,.7,[5,2,16]). PMREM blur .08. 환경 intensity1.
- ACES exposure .95; key `0xfff7eb` intensity1 at[-3,4,5], rim white .5 at[4,1,2]. 기존 camera/rotation 유지.
- CPU fallback은 같은 height+금속색과 .032 깊이에 맞는 중앙차분(`S*.00875`) 및 dome기울기 `.0985*u/v` 사용. 2D가 WebGL과 픽셀 동일하진 않으며 반사는 단순화됨. 표식색을 밝은 스티커색으로 회귀시키지 말 것.

## 나머지33인 확장 기준

공통 재질은 이미 전원 적용된다. Sol은 모든 인물을 실제 렌더하고 도상별 좁은 선/구멍/시각 무게만 표지 모듈 내부에서 보정한다. `medal3d-character-signs.js` 및 기존 7동전 분석 렌더는 절대 수정하지 않는다.

1. 현재 .58 정규화를 기준으로 시작. 확장은 .54–.62 범위에서 우선 해결하고 이유를 기록. 단일 가는 창을 가로로 늘려 면적을 맞추지 않는다.
2. 1024 마스크 기준 주요 선 폭 약24px 이상, 중요한 열린 틈 약24px 이상을 목표로 한다. 현재 blur가 양쪽 가장자리를 둥글리므로 이보다 가늘면 높이가 낮아지거나 구멍이 메워질 수 있다. 숫자는 자동 합격 규칙이 아니라 실제390px 검수용 하한이다.
3. harness raised ratio .01–.35는 비어 있거나 통짜인 마스크 검출용일 뿐 미적 합격이 아니다. 대표 ratio: hammer .0932, laurel .0818, eagle .1507. 가는 Achilles .0359, Orion .0353도 실제 판독 가능했다. 전원을 같은 면적으로 맞추지 않는다.
4. 모든36인 feed/story, 390px 접촉 시트, 좁은 선/긴 이름 확대 확인. 광학 보정은 drawSign의 표지 전용 분기에 둔다. 별·월계수·날개 의미를 새 도상으로 바꾸지 않는다.
5. 대표3인 마감 비교와 fallback, 반복렌더 결정성, 실제 저장/열기/공유, cover→analysis 픽셀 동일성은 부모의 전체 QA와 합친다. 마지막 코드 변경 뒤 build 필수.

실제 하네스: `node docs/running-card-harness/cover.mjs <고유출력> all webgl gold`. silver/brass/flat은 인자를 교체한다. 분석 보존 전체 검증은 부모 담당이며 이 대표 단계에서는 기존 분석 코드를 수정하지 않았다.
