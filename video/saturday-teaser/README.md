# 쎄러데이 MISSION 00 — Remotion teaser

15초 Instagram Reel용 9:16 티저다. 실제 멤버 영상이 생기기 전에는 얼굴 없는 생성 이미지와 코드 기반 사운드로 동작하며, `public/images`의 미디어만 교체해 최종 촬영본으로 업데이트할 수 있다.

## 장면

1. `THE JOKE` — 신발끈과 첫 질문
2. `START SIGNAL` — 러닝 워치와 첫 착지
3. `ASSEMBLE` — 7개의 개인 프레임이 하나의 크루로 조립
4. `MISSION ACCEPTED` — 농담은 접수됐다
5. `RACE TARGET` — 11 / 15, TO BE CONTINUED

## 실행

```bash
npm run dev
npm run lint
npm run build
npm run render:reel
```

## 3D 코스 제작 도구

- Blender는 Mac 공용 앱으로 설치한다. 지형·건물 모델과 재질을 제작하고, 완성 장면을 영상으로 렌더링할 때 사용한다.
- 이 영상 프로젝트에는 Three.js, React Three Fiber, `@remotion/three`를 설치했다. Remotion 패키지는 기존 버전 `4.0.509`로 맞춘다.
- CesiumJS도 이 프로젝트의 의존성으로 설치했다. 실제 지형·도시 데이터가 필요한 장면에서 사용하며, Cesium ion 데이터 연결에는 본인 계정의 토큰이 필요하다.
- Cesium Viewer를 추가할 때는 공식 npm 설정에 따라 `CESIUM_BASE_URL`과 Workers·Assets·Widgets 등 정적 자산 제공 경로도 구성해야 한다. 현재는 패키지 설치까지이며, 지형 데이터 연결과 코스 장면은 아직 만들지 않았다.
- Unreal Engine은 현재 제작 범위에서 제외한다.

패키지 설치·확인:

```bash
npm ci
npm ls remotion @remotion/three @react-three/fiber three cesium --depth=0
npm run build
```

참고: [Remotion 3D 연동](https://www.remotion.dev/docs/three), [CesiumJS npm 설정](https://cesium.com/learn/cesiumjs-learn/cesiumjs-quickstart/).

## 손기정평화마라톤 코스 필름

- 웹: `/marathon/sonkeechung-peace-marathon-2026/preview`.
- Studio: `npm run dev` 실행 후 `Sonkeechung-Reel` 선택. 검수용 여백 가이드는 `Sonkeechung-Reel-SafeZones`에서 확인한다.
- 출력: `npm run render:sonkeechung` → `output/sonkeechung-2026-reel.mp4` (1080×1920, 30fps, 42초, H.264/AAC).
- 표지: `npm run still:sonkeechung`. 첫 10초만 확인할 때는 `Sonkeechung-First10Seconds` 컴포지션을 사용한다.
- 웹·영상은 `src/components/marathon/sonkeechung/course-scene.tsx`를 공유한다. 영상 렌더 시 R3F 컨텍스트가 중복되지 않도록 번들 설정에서 React·Three.js·R3F를 영상 프로젝트의 설치 경로로 고정한다.
- 데이터: RUNRUUN의 개인 제작 GPX, OSM 하천·산림·도로, Mapzen/USGS 지형 타일을 사용한다. 공식 측량 경로가 아니며, 거리·표고·반환점은 참고용이다. 누적 상승고도를 확정 수치로 제공하지 않는다.
- 지형은 3×3 중앙값 필터로 이상치를 보정하고 음수 격자를 0으로 처리하며, 시각화 높이는 1.8배다. 교량은 Blender로 만든 단순화 모델로, 실제 구조·높이를 보증하지 않는다.
- 재생성: 저장소 루트에서 `blender --background --factory-startup --python scripts/course-map/bridge-model.py -- "$PWD"`, 이어서 `node scripts/course-map/sonkeechung.mjs`. 후자는 GPX·지형·OSM을 로컬 `.omc/research/sonkeechung-course`에 캐시하고 웹·영상용 데이터 사본을 함께 갱신한다.
- 음악은 `scripts/course-score.py`로 생성한 자체 앰비언트 음원이다. `python3 scripts/course-score.py` 후 `ffmpeg -y -i /tmp/sonkeechung-course-score.wav -c:a aac -b:a 96k public/sonkeechung/course-score.m4a`로 재생성한다.
- MP4는 Git에 넣지 않는다. 인스타그램 게시 권한은 제작·렌더 요청과 별개다.

## 자산 교체

- `public/images/laces.webp`
- `public/images/watch-start.webp`
- `public/images/foot-strike.webp`
- `public/images/seven-runners.webp`

파일명과 9:16 비율을 유지하면 장면 코드를 바꾸지 않고 교체할 수 있다.

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.apng">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

Welcome to your Remotion project!

## Commands

**Install Dependencies**

```console
npm i
```

**Start Preview**

```console
npm run dev
```

**Render video**

```console
npx remotion render
```

**Upgrade Remotion**

```console
npx remotion upgrade
```

## Docs

Get started with Remotion by reading the [fundamentals page](https://www.remotion.dev/docs/the-fundamentals).

## Help

We provide help on our [Discord server](https://discord.gg/6VzzNDwUwV).

## Issues

Found an issue with Remotion? [File an issue here](https://github.com/remotion-dev/remotion/issues/new).

## License

Note that for some entities a company license is needed. [Read the terms here](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
