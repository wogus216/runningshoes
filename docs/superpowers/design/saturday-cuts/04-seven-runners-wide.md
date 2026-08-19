# 04 · seven-runners · 가로 (1536×1024)

**역할** — 일곱 명이 모인 장면. 페이지의 크루 섹션 전체를 이 한 장이 받친다.
**목표 평균밝기 62%** — **4장 중 압도적으로 밝다.** 이게 이번 재생성의 핵심이다.
**여백** — 사람들은 **아래 1/3의 가로 띠**, 위 2/3는 밝은 하늘로 비운다.

> ⚠️ **왜 밝아야 하는가**
> 이 컷이 놓이는 크루 섹션은 배경이 종이색(`#f2efe7`)이다. 현재 파일은 야간 사진(평균밝기 17%)
> 이라 밝은 배경 위에서 시커먼 덩어리가 됐고, 그래서 코드가 `opacity: .18` + `grayscale(.9)` +
> 종이색 그라디언트 82%로 사진을 눌러 죽였다(`saturday.module.css:413-428`).
> 그 결과가 회색 죽 화면이다. **밝은 컷으로 바꾸면 그 오버레이 코드가 통째로 필요 없어진다.**
> 위 2/3의 밝은 하늘이 종이색 배경과 자연스럽게 이어지도록 설계했다.

> ⚠️ **인원수를 반드시 센다.** AI는 사람 수를 자주 틀린다. 정확히 일곱 명이어야 한다.

---

```
Photorealistic 35mm film photograph. Not an illustration, not a 3D render, not CGI.

Location: a riverside running path in Seoul, autumn, at daybreak. The asphalt is still soaked
from overnight rain and mirrors the sky. Fine natural film grain, gentle halation, muted and
desaturated palette. Absolutely no text, no numbers, no letters, no logos, no watermarks.
No visible faces.

SUBJECT: EXACTLY SEVEN runners standing side by side in a single straight row across the wide
riverside path, photographed from behind. All seven have their backs to the camera and are
facing away toward the brightening horizon, so no face is visible. They are evenly spaced and
rendered at the same scale — nobody stands in front, nobody is larger, there is no leader.
Ordinary running clothes in muted greys, blacks and off-whites, no team uniform, no bibs, no
numbers, no printed words on any garment. Their reflections sit faintly on the wet asphalt
beneath them.

FRAMING: Landscape. The seven figures form a horizontal band across the BOTTOM THIRD of the
frame, small enough that all seven fit comfortably with margin at both ends. The TOP TWO
THIRDS is open sky — bright, pale and almost empty, with a soft gradient from warm pale gold
at the horizon to cool light grey at the top. Keep the sky clean and free of dramatic clouds;
it will carry type and must stay quiet.

EXPOSURE: BRIGHT — this is by far the brightest frame of the series and the only one shot at
daybreak rather than at night. The sun is just below the horizon and the sky is genuinely
luminous, high-key. The streetlamps are switched off or reduced to faint dots. This frame must
still read as bright when placed next to an off-white page background, so avoid heavy shadow
across the sky and keep the overall image light and airy.

OUTPUT: landscape, 1536 × 1024.
```

---

## 합격 기준

- [ ] **사람이 정확히 일곱 명이다** — 세어보고 넘어간다. 여섯이나 여덟이면 재생성
- [ ] 일곱 명이 같은 크기이고 앞으로 나온 사람이 없다
- [ ] 얼굴이 하나도 보이지 않는다 (전원 뒷모습)
- [ ] 옷에 글자·번호·배번이 없다
- [ ] **하늘이 실제로 밝다** — 화면 전체가 훤해야 한다. 어둡게 나오면 이 컷은 실패다
- [ ] 위 2/3에 극적인 구름이나 큰 밝기 편차가 없다
