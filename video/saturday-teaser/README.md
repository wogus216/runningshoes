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
