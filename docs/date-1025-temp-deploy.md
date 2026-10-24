# 빵지순례 임시 배포

- 주소: `https://allrunabout.com/date-1025/`
- 파일: `public/date-1025/` — 별도 `date-1025` React/Vite 프로젝트의 정적 빌드 결과.
- 원본에서 `npm run build -- --base=/date-1025/`로 빌드한 뒤 `dist/`의 내용을 위 디렉터리에 복사한다. 경로를 바꾸면 Vite base도 함께 바꾼다.
- 러닝슈즈의 Next.js 레이아웃·내비게이션·사이트맵에는 연결하지 않는다. HTML의 `noindex,nofollow`를 유지한다.
- 갱신은 이 디렉터리의 빌드 결과를 교체한 뒤 기존 worktree·빌드·ship 절차를 따른다.
- 임시 페이지를 내릴 때는 `public/date-1025/`와 이 문서를 삭제해 배포한다. 별도 Next.js 라우트나 외부 호스팅 자원은 없다.
