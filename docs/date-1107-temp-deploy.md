# 빨간 맛, 노란 길 — 완성판 임시 배포

- 주소: https://allrunabout.com/date-1107/
- 사용자 2026-11-06 승인: “지금 좋다 일단 배포하고 주소 줘 내가 휴대폰에서 확인할게”. 예고판이 아닌 모든 퍼즐·사진·기념품·마지막 편지가 있는 완성판을 공개한다.
- 배포 파일: `public/date-1107/`. 별도 React/Vite 프로젝트의 `npm run build:full` → `dist-full/` 결과. 개발용 preview/full.html, QA 캡처·문서·이미지 생성 프롬프트 sidecar는 배포하지 않는다.
- 원본: `/Users/kwonjaehyeon/orca/projects/정리/.worktrees/date-1107-seoul/date-1107`, 소스 커밋 `42b5578`.
- 지도 합체→상장 변환/펼침과 마지막 봉투 해제 연출 포함. 건너뛰기/Escape/모션 줄이기 지원.
- Vite base `./`. `/date-1107/` 또는 `/date-1107/index.html`에서 자산을 읽는다. 지도/CSS 소품은 document.baseURI 기준 절대 URL로 해석한다.
- `noindex,nofollow` 유지. Next.js 내비게이션·사이트맵에 연결하지 않는다. `public/date-1025/`는 별도 선물이며 수정하지 않는다.
- 사진은 서버로 업로드하지 않고 브라우저 IndexedDB에만 보관한다. 정적 페이지의 입장 코드는 서버 인증 수단이 아니다.
- 갱신: 원본에서 완성판 빌드 → 이 폴더의 기존 빌드 파일 교체 → 저장소 worktree·빌드·ship 절차. 예고판 `dist/`나 운영자 검토판 `dist-journey/`를 복사하지 않도록 주의.
- 종료 시 `public/date-1107/`와 이 문서를 삭제해 배포한다.
- 사전 검증: 원본 11테스트와 예고/완성/검토 빌드 통과, Aside 360/390/1280 화면 및 진행·저장·연출 경로 확인. 실제 휴대폰/카카오톡 확인은 사용자 진행 예정.
