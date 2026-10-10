# 러닝 카드 공유 이미지 하네스

S5-E(2026-10-08)에 만들었다. 그 전 하네스는 `/tmp` 에 있다가 재부팅 때 사라졌다(10/4, 10/8 두 번). 그래서 레포에 둔다.

```bash
npm run build                                   # out/ 생성
node docs/running-card-harness/serve.mjs out 3019 &
node docs/running-card-harness/drive.mjs <출력폴더> http://127.0.0.1:3019/running-card <이름> [총거리km] [강한훈련] [목표] [webgl|flat]
```

- `drive.mjs` 는 헤드리스 크롬을 DevTools 프로토콜로 조종한다. 클릭은 요소 가운데에 마우스를 눌렀다 떼는 방식이다(JS `click()` 이 아님 — 3D-1 버튼 버그를 JS 훅이 못 잡았다).
  1. 7단계를 입력한다. 예시값은 확정하고, 05 강한 훈련·06 목표는 인자를 따른다. 07 요일은 화·목·토로 고정이다.
  2. 결과 카드의 '이미지 2장 저장'을 피드/스토리 × 숫자 보임/숨김 네 번 누른다.
  3. '열기' 링크의 blob 을 읽어 PNG 8장과 공유 영역 화면 1장을 남긴다.
  4. 저장 없이 다시 열기의 바이트 일치, PNG File 공유 전달, 결과 링크, 은·황동의 표지만 저장·공유·열기, 다시 하기를 검사한다. `flat` 인자는 WebGL을 꺼 실제 대체 렌더 저장도 검사한다.
- **광고·GA 도메인은 크롬 시작 옵션(DNS 차단)으로 막는다.** 헤드리스 실행이 광고 노출로 잡히면 안 된다.
- WebGL 은 SwiftShader 로 돈다. 한 번에 2~3분, 기기 부하가 높으면 더 걸린다(감시 시간 8분).
- **Claude Code 의 Bash 샌드박스 안에서는 node 가 `bad CPU type` 으로 죽는다**(x86_64 node 의 Rosetta 번역이 막힌다). 샌드박스 밖에서 돌린다.
- 판정 인물을 고르려면 판정 엔진에 입력을 넣어 미리 찾는다. 예시값에서 총거리 60km·강한 2회·목표 기록이면 다이달로스다.

## M2 단일 메달 표지 전수 검수

```bash
node docs/running-card-harness/cover.mjs <출력폴더> all webgl gold
node docs/running-card-harness/cover.mjs <출력폴더> all flat gold
node docs/running-card-harness/cover.mjs <출력폴더> hephaestus,apollo,zeus webgl silver
node docs/running-card-harness/cover.mjs <출력폴더> hephaestus,apollo,zeus webgl brass
```

제품에 QA 라우트를 추가하지 않고 실제 표지 모듈과 실제 인물 문구를 임시 로컬 서버에서 실행한다. 각 인물의 피드·스토리 PNG와 메달 원본, `report.json`을 남긴다. 빈 표식·중복 이미지·콘솔 오류를 검사하고 GPU 자원을 해제한 뒤 다시 생성해 PNG가 동일한지 확인한다. 생성 시간은 데스크톱 Chrome SwiftShader 측정이며 실기기 성능 수치가 아니다. `flat`은 WebGL을 꺼서 2D 대체 경로를 검증한다.
