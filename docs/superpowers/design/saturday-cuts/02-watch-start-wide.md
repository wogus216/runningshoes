# 02 · watch-start · 가로 (1536×1024)

**역할** — 출발 신호. 준비가 끝나고 시계를 누르는 순간.
**목표 평균밝기 30%** — 01보다 한 칸 밝다. 하늘에 아주 옅은 푸른 기가 돌기 시작한다.
**여백** — 피사체는 **왼쪽 아래**, 오른쪽 위는 초점 나간 도로와 하늘로 비운다.

> ⚠️ **이 컷의 재설계 핵심은 손을 프레임에서 빼는 것이다.**
> 현재 `watch-start.webp` 는 4장 중 가장 약한데(표준편차 25.2 = 대비 없음),
> 원인이 어색한 손가락과 흐린 초점이다. 누르는 손을 아예 프레임 밖으로 보내고,
> 시계 화면에는 숫자를 넣지 않는다 — GPT는 작은 글자를 반드시 뭉갠다.

---

```
Photorealistic 35mm film photograph. Not an illustration, not a 3D render, not CGI.

Location: a riverside running path in Seoul, autumn, before sunrise. The asphalt is soaked
from overnight rain and mirrors every light source. The lighting is exactly two colours and
nothing else — warm amber sodium streetlamps sitting low in the frame, and a cold teal
pre-dawn sky above them. Shallow depth of field, fine natural film grain, gentle halation
around the brightest lights. Muted and desaturated everywhere except the amber reflections
on the wet ground. Absolutely no text, no numbers, no letters, no logos, no watermarks.
No visible faces.

SUBJECT: An extreme close-up of a matte black running watch worn on a bare wrist, seen from
directly above the wearer's own forearm, as if the wearer glanced down at it. The other arm
and the other hand are completely outside the frame — there are NO fingers anywhere in this
picture, and no second hand reaching in. The watch face is almost dark; a single thin ring of
pale cold light glows around its bezel and one small amber dot sits at the edge of the dial.
The screen itself is unreadable and shows no digits, no characters and no icons. Sharp focus
on the watch bezel; the forearm and everything beyond falls away into shallow blur.

FRAMING: Landscape. Place the wrist and watch in the LOWER LEFT of the frame, the forearm
entering from the bottom-left corner. The UPPER RIGHT is the out-of-focus running path with
one amber streetlamp reduced to a soft glowing circle. Keep that upper-right area simple and
uncluttered — it will carry type.

EXPOSURE: One step brighter than a night shot but still clearly before dawn. The sky holds
the faintest cold blue at the top edge. Around 65% of the frame remains in shadow. The
brightest thing in the picture is the ring of light on the watch bezel.

OUTPUT: landscape, 1536 × 1024.
```

---

## 합격 기준

- [ ] **손가락이 프레임에 하나도 없다** — 하나라도 보이면 재생성
- [ ] 시계 화면에 숫자·문자·아이콘이 없다 (거의 꺼진 화면 + 빛 테두리만)
- [ ] 시계 베젤에 초점이 맞아 있다 (전체가 흐리면 실패 — 현재 파일의 문제였다)
- [ ] 오른쪽 위가 단순하게 비어 있다
- [ ] 01보다 눈에 띄게 밝지만 아직 밤에 가깝다
