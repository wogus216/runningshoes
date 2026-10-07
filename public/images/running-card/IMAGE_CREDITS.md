# Running Card Image Credits / 러닝 카드 인물 이미지 출처

이 폴더의 인물 이미지 30장은 **AI 생성 이미지**다. 사진 촬영이나 손그림이 아니고, 실제 러너를 찍은 것이 아니다.

## 요약

| 항목 | 내용 |
|---|---|
| 제작자 | 사이트 운영자. 운영자 확인 2026-10-07 |
| 도구 | OpenAI ChatGPT 이미지 생성 |
| 모델 버전 | 불명. 원본 PNG의 C2PA 매니페스트에는 `gpt-image`까지만 적혀 있다(아래) |
| 생성 시각 | C2PA 기재값 2026-09-28T00:26Z – 2026-09-29T00:52Z(UTC). 장별 값은 아래 표 |
| 프롬프트·참조 이미지 | 기록 없음(불명) |
| 원본 | 941×1672 PNG(RGB), 장당 1.7–2.6MB. 레포에 넣지 않는다 |
| 변환 | sharp 0.34.5 · 폭 720(높이 1279) · lanczos3 · WebP quality 75 · effort 6 · 메타데이터 없음 |
| 쓰는 곳 | `/running-card` 결과 카드·공유받은 화면. 공유 이미지(PNG 2장)에는 넣지 않는다 |

## 생성 도구 근거 — 원본 PNG의 C2PA 매니페스트

인물 36명의 원본 PNG(쓰지 않는 6장 포함) 모두 `caBX` 청크에 C2PA 매니페스트가 있다(2026-10-07 바이트를 직접 읽어 확인). 서명은 검증하지 않았다. 아래는 '기재값'이다.

- `c2pa.actions.v2` → `c2pa.created`, `softwareAgent: { name: "ChatGPT", version: "gpt-image" }`
- `digitalSourceType: http://cv.iptc.org/newscodes/digitalsourcetype/trainedAlgorithmicMedia`
- `claim_generator_info.name: OpenAI Media Service API`
- 서명 인증서 주체: `OpenAI OpCo, LLC` / `OpenAI Media Service`(발급 SSL.com C2PA ICA R1)

WebP로 바꾸면서 매니페스트는 빠졌다. 원본에만 남아 있다.

## 이용 근거 — OpenAI 이용약관

- 문서: OpenAI 이용약관, 발효일 2026년 1월 1일
- 주소: https://openai.com/policies/row-terms-of-use/ (한국에서 열면 `/ko-KR/policies/row-terms-of-use/`로 이동)
- 확인: 2026-10-07. WebFetch는 403이라 브라우저로 원문을 열어 읽었다
- 적용 범위(약관 본문): ChatGPT 등 OpenAI 개인용 서비스. 유럽경제지역·스위스·영국 거주자는 별도 약관
  - 운영자가 개인용 계정으로 만들었다는 것은 추정이다. 사업자용 계정이면 사업자 약관이 적용된다(불명)

인용(원문 그대로):

> 콘텐츠의 소유권. 귀하와 OpenAI 간에 관련 법률이 허용하는 한도 내에서, 귀하는 (a) 입력에 대한 소유권을 유지하고 (b) 출력을 소유합니다. 당사는 출력에 대한 모든 권리, 소유권 및 이권을 이로써 귀하에게 양도합니다.

> 콘텐츠 유사성. 서비스와 인공지능의 일반적인 특성상, 출력은 독창적이지 않을 수 있으며 다른 사용자들도 서비스로부터 유사한 출력을 받을 수 있습니다. 위 조항에 따른 당사의 양도는 다른 사용자의 출력이나 제3자 출력에 적용되지 않습니다.

금지 행위 목록 중:

> 출력이 사람이 생성한 것이 아님에도 불구하고 사람이 생성하였다고 하는 행위.

그래서 화면에 `AI 생성 이미지`를 표시하고, 대체 텍스트도 `{인물명} 일러스트(AI 생성)`로 쓴다.

- 한국 법에서 AI 생성물에 저작권이 성립하는지는 판단하지 않았다(불명). 약관의 양도는 '관련 법률이 허용하는 한도 내'다.

## 도상

- 인물은 그리스 신화(공유 지식)다. 특정 미술품·사진·실존 인물을 본떴는지는 불명이다. 프롬프트와 참조 이미지 기록이 없다.
- 배경에 실재 장소와 닮은 건축물이 있다(예: 아테나·아킬레우스 배경의 언덕 위 신전, 아킬레우스의 대리석 계단식 경기장). 실재 장소로 소개하지 않는다.

## 쓰지 않은 이미지

- 제우스·오르페우스·아폴론·벨레로폰·아탈란타·탈로스 6장: 옷이나 신발에 실재 러닝 브랜드 상표처럼 읽히는 표식이 있다(반바지의 갈고리형 표식, 신발 옆 평행 줄무늬, 신발 옆 N자형). 이 사이트는 그 브랜드의 러닝화를 리뷰하므로 제휴로 읽힐 수 있다. 다시 만들거나 표식을 지우기 전까지 쓰지 않는다.
- 디오니소스·헤르메스·페르세포네의 첫 버전 3장(`*-v2`가 아닌 것), `anonymous-runner.webp`: 프로토타입에서도 쓰지 않았다.

## 장별

생성 시각은 C2PA `c2pa.created` 기재값(UTC, 서명 미검증)이다. 크기는 이 폴더의 WebP 바이트다.

| 파일 | 원본 | 생성 시각(C2PA) | 바이트 |
|---|---|---|---:|
| `heracles.webp` | `heracles.png` | 2026-09-28T00:26:23Z | 96,216 |
| `athena.webp` | `athena.png` | 2026-09-28T00:26:56Z | 56,186 |
| `odysseus.webp` | `odysseus.png` | 2026-09-28T00:27:30Z | 125,740 |
| `achilles.webp` | `achilles.png` | 2026-09-28T00:29:01Z | 78,742 |
| `hestia.webp` | `hestia.png` | 2026-09-28T00:30:25Z | 114,588 |
| `sisyphus.webp` | `sisyphus.png` | 2026-09-28T00:29:52Z | 112,872 |
| `poseidon.webp` | `poseidon.png` | 2026-09-28T13:33:20Z | 103,040 |
| `artemis.webp` | `artemis.png` | 2026-09-28T13:34:20Z | 93,160 |
| `hera.webp` | `hera.png` | 2026-09-28T13:40:52Z | 72,716 |
| `demeter.webp` | `demeter.png` | 2026-09-28T13:42:17Z | 104,888 |
| `ares.webp` | `ares.png` | 2026-09-28T23:58:18Z | 92,746 |
| `aphrodite.webp` | `aphrodite.png` | 2026-09-28T23:59:00Z | 51,364 |
| `hephaestus.webp` | `hephaestus.png` | 2026-09-28T23:59:59Z | 66,876 |
| `hermes.webp` | `hermes-v2.png` | 2026-09-29T00:46:45Z | 41,330 |
| `dionysus.webp` | `dionysus-v2.png` | 2026-09-29T00:47:19Z | 142,836 |
| `persephone.webp` | `persephone-v2.png` | 2026-09-29T00:47:54Z | 76,462 |
| `perseus.webp` | `perseus.png` | 2026-09-29T00:19:12Z | 100,724 |
| `penelope.webp` | `penelope.png` | 2026-09-29T00:19:59Z | 77,934 |
| `theseus.webp` | `theseus.png` | 2026-09-29T00:20:26Z | 53,424 |
| `nike.webp` | `nike.png` | 2026-09-29T00:21:24Z | 79,440 |
| `themis.webp` | `themis.png` | 2026-09-29T00:31:11Z | 33,746 |
| `daedalus.webp` | `daedalus.png` | 2026-09-29T00:32:25Z | 41,042 |
| `orion.webp` | `orion.png` | 2026-09-29T00:32:51Z | 84,484 |
| `hector.webp` | `hector.png` | 2026-09-29T00:34:26Z | 84,612 |
| `penthesilea.webp` | `penthesilea.png` | 2026-09-29T00:34:08Z | 94,244 |
| `psyche.webp` | `psyche.png` | 2026-09-29T00:49:35Z | 59,836 |
| `eros.webp` | `eros.png` | 2026-09-29T00:50:03Z | 45,126 |
| `prometheus.webp` | `prometheus.png` | 2026-09-29T00:50:34Z | 66,102 |
| `pheidippides.webp` | `pheidippides.png` | 2026-09-29T00:52:15Z | 80,582 |
| `ariadne.webp` | `ariadne.png` | 2026-09-29T00:52:49Z | 71,476 |
