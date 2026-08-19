# 전달용 지시서 — 쎄러데이 시네마틱 8컷

> **사용법**: 이 문서를 통째로 ChatGPT 새 대화에 붙여넣는다.
> 그 다음 `1` 이라고 치면 1번을 생성한다. 확인하고 `2`, `3` … 순서로 진행한다.
> 한 대화 안에서 끝까지 이어가야 8장의 톤이 맞는다.

---

## 여기부터 붙여넣기 ↓

당신은 러닝 크루 웹사이트에 쓸 사진 8장을 만드는 이미지 생성 담당자다.
8장은 **하나의 세트**여야 한다 — 같은 장소, 같은 조명, 같은 필름 톤. 한 장이라도 튀면 실패다.

### 진행 방식

- 한 번에 **한 장만** 생성한다. 내가 번호를 부르면 그 번호를 만든다.
- 2번부터는 항상 **직전에 만든 이미지와 같은 장소·조명·필름 톤을 유지**한다.
- 생성 전에 설명을 길게 쓰지 마라. 바로 이미지를 만든다.
- 내가 "다시"라고 하면 같은 번호를 같은 조건으로 다시 만든다.

### 모든 장에 공통으로 적용되는 규칙 (8장 전부)

```
Photorealistic 35mm film photograph. Not an illustration, not a 3D render, not CGI.

Location: a riverside running path in Seoul, autumn, early morning. The asphalt is soaked
from overnight rain and mirrors every light source. Shallow depth of field, fine natural
film grain, gentle halation around the brightest lights. Muted, desaturated palette.

Absolutely no text, no numbers, no letters, no logos, no watermarks anywhere in the image.
No visible human faces. No printed words or race bibs on any clothing.
```

1번부터 3번까지는 **해 뜨기 전**이다. 조명은 두 색뿐이다 — 낮게 깔린 주황색 나트륨 가로등,
그리고 그 위의 차가운 청록색 새벽 하늘. 그 외의 색은 넣지 않는다.

4번은 **날이 밝은 뒤**다. 유일하게 밝은 장면이고, 그래서 조명 규칙이 다르다.

### 밝기는 순서대로 올라간다 — 이 세트의 핵심

이 8장은 스크롤을 내릴수록 화면이 밝아지도록 설계됐다. 캄캄한 새벽에 혼자 준비해서,
훤해진 하늘 아래 일곱 명으로 끝난다.

| 번호 | 장면 | 밝기 |
|---|---|---|
| 1·2 | 신발끈 | **가장 어둡다** — 밤에 가깝다 |
| 3·4 | 시계 | 한 칸 밝다 — 하늘 끝에 옅은 푸른 기 |
| 5·6 | 착지 | 또 한 칸 밝다 — 젖은 도로가 반사면으로 보인다 |
| 7·8 | 일곱 명 | **압도적으로 밝다** — 날이 밝았다 |

7·8번을 어둡게 만들면 이 세트는 실패한다. 다른 장들과 확연히 다르게 밝아야 한다.

---

### 1. 신발끈 · 가로 (1536 × 1024)

```
SUBJECT: A close-up of one runner crouching to tighten the laces of a dark running shoe,
seen from the side and slightly behind. Only the lower leg, the shoe and the hands are in
frame — no torso, no shoulders, no head. Keep the fingers overlapping the tongue of the shoe
and the laces so they are never fully spread out and never silhouetted against the sky.
At most one complete hand is visible. The shoe rests on wet asphalt beside a painted road
line catching an amber reflection.

FRAMING: Landscape. Subject in the RIGHT THIRD. The LEFT TWO THIRDS stays almost empty —
wet asphalt receding into darkness, one distant streetlamp and its long reflection. Large
text will be placed over that empty area, so keep it free of detail and free of highlights.

EXPOSURE: The darkest frame of the whole set. About 80% of the picture sits in deep shadow.
Only the streetlamp and its reflection read as bright. Very dark teal sky, nowhere near dawn.

Output size: landscape, 1536 × 1024.
```

**확인**: 손가락이 활짝 펴져 있지 않다 / 완전한 손은 최대 하나 / 머리·상체 없음 /
**왼쪽 2/3가 실제로 비어 있다** / 하늘이 밝지 않다

---

### 2. 신발끈 · 세로 (1024 × 1536)

```
Same location, same lighting, same film tone as the previous image.

SUBJECT: identical to the previous image — one runner crouching to tighten the laces of a
dark running shoe, seen from the side and slightly behind. Lower leg, shoe and hands only.
Fingers overlapping the shoe and laces, never fully spread, never silhouetted against the sky.

FRAMING: Vertical. Place the shoe, hands and lower leg in the BOTTOM 40%. The TOP 60% is the
dark riverside path receding into distance — near-black sky, a scattering of small
out-of-focus city lights far away, nothing large or bright. Text will sit in that upper area.

EXPOSURE: The darkest frame of the whole set, same as the previous image.

Output size: vertical portrait, 1024 × 1536.
```

**확인**: 1번과 톤이 같다 / 손가락 규칙 동일 / **위 60%에 큰 밝은 덩어리가 없다**

---

### 3. 시계 · 가로 (1536 × 1024)

> 이 장은 **손가락을 한 개도 넣지 않는 것**이 핵심이다. 누르는 손은 프레임 밖에 있다.

```
Same location, same lighting, same film tone as the previous images.

SUBJECT: An extreme close-up of a matte black running watch worn on a bare wrist, seen from
directly above the wearer's own forearm, as if the wearer glanced down at it. The other arm
and the other hand are completely outside the frame — there are NO fingers anywhere in this
picture and no second hand reaching in. The watch face is almost dark; a single thin ring of
pale cold light glows around its bezel and one small amber dot sits at the edge of the dial.
The screen is unreadable and shows no digits, no characters, no icons. Sharp focus on the
watch bezel; the forearm and everything beyond falls away into shallow blur.

FRAMING: Landscape. Wrist and watch in the LOWER LEFT, forearm entering from the bottom-left
corner. The UPPER RIGHT is the out-of-focus running path with one amber streetlamp reduced to
a soft glowing circle. Keep that upper-right area simple — text will sit there.

EXPOSURE: One step brighter than the previous frames but still clearly before dawn. The
faintest cold blue at the top edge of the sky. About 65% of the frame remains in shadow.
The brightest thing in the picture is the ring of light on the watch bezel.

Output size: landscape, 1536 × 1024.
```

**확인**: **손가락이 하나도 없다** / 시계 화면에 숫자·문자·아이콘 없음 /
시계 베젤에 초점이 맞아 있다 / 1번보다 밝다

---

### 4. 시계 · 세로 (1024 × 1536)

```
Same location, same lighting, same film tone as the previous images.

SUBJECT: identical to the previous image — extreme close-up of a matte black running watch on
a bare wrist, seen from directly above the wearer's own forearm. NO fingers anywhere in the
picture, no second hand reaching in. Watch face almost dark with a thin ring of pale cold
light around the bezel. Screen unreadable, no digits, no characters, no icons.

FRAMING: Vertical. Wrist and watch in the BOTTOM THIRD, forearm entering from the bottom edge.
The TOP TWO THIRDS is the out-of-focus riverside path stretching away, with two or three amber
streetlamps reduced to soft glowing circles and their long reflections on the wet ground.
Keep that upper area soft and simple — text will sit there.

EXPOSURE: same as the previous image — one step brighter than a night shot, still before dawn.

Output size: vertical portrait, 1024 × 1536.
```

**확인**: **손가락이 하나도 없다** / 시계에 초점이 맞아 있다 / 위 2/3가 부드럽게 비어 있다

---

### 5. 착지 · 가로 (1536 × 1024)

> 이 장은 **러너가 정확히 한 명**이어야 한다. 뒤에 다른 사람의 다리가 붙으면 실패다.

```
Same location, same lighting, same film tone as the previous images.

SUBJECT: A ground-level shot, camera about 15 cm above the wet asphalt, of ONE single runner
at the instant of foot strike. Exactly one pair of legs is in the picture — one runner and no
one else, no second runner, no partner's legs, no extra limbs anywhere. The leading shoe has
just landed and throws a low fan of water droplets sideways; the trailing leg is lifted
behind. Only the legs from mid-thigh down are in frame — no torso, no arms, no head. Sharp
focus on the landing shoe and the spray; everything behind falls into shallow blur.

FRAMING: Landscape. Legs LEFT OF CENTRE. The RIGHT HALF is the wet road running away into the
distance with one long amber reflection stretching along it toward the horizon. Keep that
right half open and simple — text will sit there.

EXPOSURE: Clearly brighter than the previous frames. The horizon has begun to lift into a pale
cold grey, though the sun has not risen. About half the frame is still in shadow, but the wet
road now reads as a bright reflective surface rather than a black one.

Output size: landscape, 1536 × 1024.
```

**확인**: **다리가 정확히 두 개** / 상체·팔·머리 없음 / 착지 신발과 물 튀김에 초점 /
오른쪽 절반이 열려 있다 / 3번보다 확실히 밝다

---

### 6. 착지 · 세로 (1024 × 1536)

```
Same location, same lighting, same film tone as the previous images.

SUBJECT: identical to the previous image — ground-level shot, camera about 15 cm above the wet
asphalt, of ONE single runner at the instant of foot strike. Exactly one pair of legs, one
runner and no one else, no second runner, no extra limbs. Leading shoe throwing a low fan of
water droplets, trailing leg lifted behind. Legs from mid-thigh down only.

FRAMING: Vertical. Legs and spray in the LOWER CENTRE, occupying roughly the bottom 45%. Above
them the wet path and low horizon give way to open sky filling the TOP HALF — pale cold grey
lifting at the horizon line, empty and simple. Text will sit in that upper area.

EXPOSURE: same as the previous image — clearly brighter, wet road reading as a reflective
surface rather than a black one.

Output size: vertical portrait, 1024 × 1536.
```

**확인**: **다리가 정확히 두 개** / 위 절반이 하늘로 열려 있다 / 3·4번보다 밝다

---

### 7. 일곱 명 · 가로 (1536 × 1024)

> **여기서 조명이 바뀐다.** 앞의 여섯 장과 달리 이 장은 날이 밝은 뒤다.
> 그리고 **사람 수를 반드시 센다** — 정확히 일곱 명이다.

```
Same location and same film tone as the previous images, but now at DAYBREAK — the night
lighting rules no longer apply. The asphalt is still soaked from overnight rain and mirrors
the sky. No text, no numbers, no logos, no watermarks. No visible faces.

SUBJECT: EXACTLY SEVEN runners standing side by side in a single straight row across the wide
riverside path, photographed from behind. All seven have their backs to the camera, facing
away toward the brightening horizon, so no face is visible. They are evenly spaced and drawn
at the same scale — nobody stands in front, nobody is larger, there is no leader. Ordinary
running clothes in muted greys, blacks and off-whites; no team uniform, no bibs, no numbers,
no printed words on any garment. Their reflections sit faintly on the wet asphalt beneath them.

FRAMING: Landscape. The seven figures form a horizontal band across the BOTTOM THIRD, small
enough that all seven fit comfortably with margin at both ends. The TOP TWO THIRDS is open sky
— bright, pale and almost empty, a soft gradient from warm pale gold at the horizon to cool
light grey at the top. Keep the sky clean and free of dramatic clouds; text will sit there.

EXPOSURE: BRIGHT. This is by far the brightest frame of the whole set and the only one shot at
daybreak rather than at night. The sun is just below the horizon and the sky is genuinely
luminous, high-key. Streetlamps are switched off or reduced to faint dots. This frame must
still read as bright when placed next to an off-white background, so avoid heavy shadow across
the sky and keep the whole image light and airy.

Output size: landscape, 1536 × 1024.
```

**확인**: **사람이 정확히 일곱 명** (세어본다) / 일곱이 같은 크기, 앞으로 나온 사람 없음 /
얼굴 안 보임 / 옷에 글자·번호 없음 / **하늘이 실제로 밝다** — 어두우면 실패

---

### 8. 일곱 명 · 세로 (1024 × 1536)

```
Same as the previous image — daybreak, bright and high-key. No text, no numbers, no logos.
No visible faces.

SUBJECT: EXACTLY SEVEN runners standing side by side in a single straight row across the wide
riverside path, photographed from behind, all facing away toward the brightening horizon.
Evenly spaced, same scale, no leader. Ordinary muted running clothes, no bibs, no numbers,
no printed words. Faint reflections on the wet asphalt.

FRAMING: Vertical. The seven figures form a horizontal band across the BOTTOM 35%. Because the
frame is narrow, pull the camera back far enough that all seven fit in the row with clear
margin at both ends and none of them is cropped by the edges. The TOP 65% is open sky —
bright, pale and almost empty, a soft gradient from warm pale gold at the horizon to cool
light grey at the top. Text will sit there.

EXPOSURE: BRIGHT, same as the previous image — daybreak, luminous sky, high-key, light and airy.

Output size: vertical portrait, 1024 × 1536.
```

**확인**: **사람이 정확히 일곱 명** / **양쪽 끝 사람이 잘리지 않았다** (세로에서 가장 흔한 실패) /
얼굴 안 보임 / **하늘이 실제로 밝다**

---

## 붙여넣기 끝 ↑

---

## 받은 파일 넣을 곳

```
private/challenge/cuts-raw/
  01-laces-wide.png
  02-laces-tall.png
  03-watch-start-wide.png
  04-watch-start-tall.png
  05-foot-strike-wide.png
  06-foot-strike-tall.png
  07-seven-runners-wide.png
  08-seven-runners-tall.png
```

폴더는 만들어 뒀고 `.gitignore:72` 에 걸려 있어 커밋되지 않는다.
8장을 다 못 채워도 된다 — 받은 것부터 순서대로 반영한다.

넣은 뒤 알려주면 이후는 내가 한다: 밝기 실측 → 톤 통일 → 2배 업스케일 → WebP 변환 →
`public/images/challenge/saturday/` 와 `video/saturday-teaser/public/images/` 양쪽 반영 →
페이지 레이아웃 수정 → Remotion 2종 재렌더 → 검증.
