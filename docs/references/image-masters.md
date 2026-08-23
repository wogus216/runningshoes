# 이미지 마스터 보관 위치

사이트에 커밋된 신발 WebP는 전부 **파생본**이다. 원본(브랜드 CDN에서 받은 고해상도)은
공개 리포에 넣지 않고 로컬에 둔다.

```
~/Pictures/allrunabout-masters/
├── README.md                     ← 출처 URL · 재현 절차 · 함정 (원본)
├── shoes/new-balance-sc-rebel/   nbkorea 1200×1200 6뷰 + 컬러웨이
├── shoes/asics-superblast-3/     ASICS Scene7 1040×1040 투명 8뷰
├── races/disney-run-incheon/
├── races/lotteria-baebulrun/
└── showcase/                     SC Rebel 쇼케이스 시안 생성기 + HTML
```

**왜 리포에 안 넣나** — 이 리포는 공개다. 사이트가 서비스하는 800px WebP 는 리뷰·비교 목적
사용이라는 전제가 서 있지만, 브랜드 원본 파일을 공개 저장소에 그대로 올리는 건 그 전제를 넘는다.

**그럼 영구성은 어떻게 보장하나** — 바이트 대신 **절차**를 남긴다.
아래 레시피만 있으면 원본을 다시 받을 수 있다. 마스터 폴더가 통째로 사라져도 복구된다
(그래서 절차를 로컬 README 에만 두지 않고 여기 리포에 중복해 적는다).

## 브랜드별 마스터 수집 레시피

### ASICS — Scene7, 진짜 투명 PNG
```
https://images.asics.com/is/image/asics/{SKU}_{COLOR}_{VIEW}?wid=1040&hei=1040&fmt=png-alpha
```
- ⚠️ **현행 구분자는 언더스코어**다. 예전 기록의 `{SKU}-{COLOR}`(하이픈)는 낡았다.
- ⚠️ **curl 은 UA + `Referer: https://www.asics.com/` 없으면 403.**
- VIEW: `SR_RT_GLB`(측면·토 오른쪽 = 우리 DB 관례) · `SL_LT_GLB`/`SR_LT_GLB`(토 왼쪽) ·
  `SB_FR_GLB` · `SB_BK_GLB` · `SB_FL_GLB` · `SB_BT_GLB`(아웃솔) · `SB_TP_GLB`(탑)
- SKU/COLOR 는 US PDP URL 에서: `.../p/ANA_1013A177-400.html` → SKU `1013A177`, COLOR `400`
- `fmt=png-alpha` 가 코너 alpha=0 인 **진짜 투명**이라 배경제거 생략, sharp 변환만.

### New Balance — 한국몰 상품 상세 갤러리
- ⚠️ **글로벌 `nb.scene7.com` 패턴이 안 통한다.** 한국몰은 자체 품번(`NBPFGF…`)을 써서 스타일코드가 다르다.
- 경로: `m.nbkorea.com/product/productDetail.action?styleCode={CODE}&colCode={NN}` 의 갤러리 `img`
- CDN: `https://image.nbkorea.com/NBRB_Product/{YYYYMMDD}/NB{TS}001.jpg` — 갤러리 6뷰는 `{TS}` 가 연속.
- 배경 `#F5F5F5` 라 **배경제거 필요.**

### 공통 변환
```js
// ⚠️ 프로젝트 루트에서 실행. 워크트리에서 돌리면 node_modules 를 못 찾는다.
sharp(src).png() → removeBackground(blob,{model:'medium'})   // @imgly/background-removal-node
        → sharp().trim({threshold:5}).resize(800,null,{fit:'inside'}).webp({quality:88})
```
투명 원본이면 배경제거 단계만 건너뛴다. 결과는 코너 alpha=0 인지 확인하고,
**분홍 같은 유채색 배경에 합성해 잔여 배경을 육안 검증**한다.

관련: `public/images/shoes/IMAGE_CREDITS.md`(수집 건별 기록) · `CLAUDE.md` 의 "신발 이미지 처리 워크플로우"
