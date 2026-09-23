# 러닝 의류 원단 조사 — 공개 재현 메모

이 문서는 `/fabrics`에 공개된 결론의 표본 설계와 근거 경로를 보존한다. 상품 원문과 제3자 시험성적서 이미지는 권리·운영 정보가 섞여 있어 저장소에 싣지 않고, 로컬 원자료의 해시만 기록한다.

## 조사 시점과 분석 단위

- 최초 수집: 2026-09-04
- 접근 차단 판정 재검증: 2026-09-05
- 해외 조성 표본: 데카트론 코리아 러닝웨어 206개 모델 + Nike.com 미국 러닝 의류 67개 모델
- 국내 유통 보조 표본: 무신사 5개 브랜드 100개 SKU(조성 응답 86개)
- 주소재 판정: 메인 레이어에서 50%를 초과한 섬유
- 색상 변형: 데카트론은 `superModelId`, Nike는 상품 URL을 기준으로 중복 제거

해외 표본은 데카트론이 75.5%를 차지하므로 시장 전체 통계가 아니다. 국내 표본도 브랜드마다 수집 경로가 달라 별도 집계하며 두 표본을 합산하지 않는다.

## 공개 근거 등급

- `A 독립 검증`: 공공기관 실측, 국제규격 원문, 공인시험성적서, 동료심사 논문
- `B 공식 1차 자료`: 제조사·소재공급사의 조성, 정책, 정량 수치
- `C 정성 서술`: 수치 없는 브랜드 설명
- `S 산초 자체 조사`: 공개 카탈로그를 명시한 표본·기준으로 직접 집계하거나 대조한 결과

`S`는 낮은 등급이라는 뜻이 아니라 독립기관 시험과 자체 조사를 혼동하지 않기 위한 출처 구분이다.

## 핵심 1차 출처

- [ISO 11092:2026](https://www.iso.org/standard/85998.html)
- [한국소비자원 러닝 재킷 8종 시험](https://www.kca.go.kr/home/sub.do?menukey=4002&mode=view&no=1003952123)
- [한국소비자원 스포츠 티셔츠 12종 시험](https://www.kca.go.kr/kca/sub.do?menukey=5293&mode=view&no=1003341998)
- [Nike Dri-FIT 설명](https://www.nike.com/help/a/nike-dri-fit)
- [adidas 아디제로 에센셜 러닝 티셔츠 IN1172](https://www.adidas.co.kr/%EC%95%84%EB%94%94%EC%A0%9C%EB%A1%9C-%EC%97%90%EC%84%BC%EC%85%9C-%EB%9F%AC%EB%8B%9D-%ED%8B%B0%EC%85%94%EC%B8%A0/IN1172.html)
- [GORE-TEX 제품 라벨 정책](https://www.gore-tex.com/support/frequently-asked-questions)
- [ASTM F3628](https://store.astm.org/f3628-23.html)
- [Abdul-Bari et al. 2020 — 폴리에스터 냄새물질 잔류](https://doi.org/10.1177/0040517520914411)
- [Abedin & DenHartog 2024 — 운동 후 한기](https://doi.org/10.1080/00140139.2023.2281272)
- [Stiftung Warentest가 소개한 러닝 셔츠 12종 시험](https://www.test.de/Laufshirts-im-Test-Decathlon-behauptet-sich-gegen-Nike-und-Co-5623049-0/)

## 로컬 원자료 무결성

아래 SHA-256은 2026-09-23 기준이다.

| 파일 | SHA-256 |
|---|---|
| `apparel-fabric-research.md` | `afcf38cb6a96ae9931d96a05c7f779daa887b735740e8dfb92a6ea2a753a10a1` |
| `composition-raw.csv` | `5f1c1fb10f5b67fd5ce0b230a0aa9e2346510dc8e05ee6873a7e526707155e2f` |
| `musinsa-andar.json` | `ca42f55586c3129329addf579b93399538f0cfb3419f3437b595670de8d8cc97` |
| `musinsa-descente.json` | `4efe1bd9bf4bda7dc687ff1141e90bced8bec318e81e11a9d0b8321f9c167099` |
| `musinsa-kolon.json` | `bd420b3b51da6eaffdeee55d637227306f6d6adcbf9dd530ffbc30e3283ee345` |
| `musinsa-prospecs.json` | `8ccf3eb0398e0524504f1571181d8e42658c200398a1848287ad313a550eb359` |
| `musinsa-runninglife.json` | `7e8cc5a003489d6e401a4575dbd9e8214165f8861029f0febd492fbe245b063b` |
| `musinsa-xexymix.json` | `7855da3d2caa2d0a890032cb3aa3682a042e256c4b58010f9b1b197d78952657` |

원자료 위치는 `docs/references/apparel-research-raw/`이며 Git 추적 대상이 아니다. 집계값을 바꿀 때는 원자료·해시·수집일을 함께 갱신한다.
