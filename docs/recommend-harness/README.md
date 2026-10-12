# 추천 결과 QA

```bash
npm run build
node docs/running-card-harness/serve.mjs out 3028
node docs/recommend-harness/drive.mjs /tmp/recommend-qa http://127.0.0.1:3028/recommend
```

헤드리스 Chrome의 실제 클릭으로 9문항을 완료한다. 입문·트레일/평발·상급자 회복/빠른 페이스·복수 부상/넓은 발을 확인하고, 브라우저의 순서가 실제 추천 엔진과 일치하는지 비교한다. 부상별 링크도 본 추천 후보 안에 있어야 한다.

390px와 320px 가로 넘침, 삼국지 기능 잔여 문구, 평균 대비 무게 부호, 주의 평가 노출, 데이터 요청 차단 후 재시도, 결과 복원, 다시 하기, 손상된 세션 거절을 검사한다. 광고와 GA는 DNS·네트워크 차단해 검수 트래픽으로 노출을 발생시키지 않는다.

운영 사이트의 설문·결과만 확인할 때는 마지막에 `smoke`를 붙인다. 출력 폴더에 스크린샷과 `report.json`이 남는다.
