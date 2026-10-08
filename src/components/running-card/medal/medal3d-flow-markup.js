// The page of medal3d-flow.html (3D-3 `ad6d632`), everything inside <body> except the review tools. mountMedalFlow()
// writes it into its container on every mount, so each mount starts from the same markup.
// S4: the share sheet (스토리·피드 저장) left the finished medal for the result card under it (running-card-result.tsx);
// its place in the actions is '분석 펼쳐보기'.
export const MARKUP = `
<main class="journey" data-scene="distance">
  <canvas id="gl" tabindex="-1" role="img" aria-label="지난 28일의 메달" aria-describedby="medal-status"></canvas>
  <canvas id="flat" aria-hidden="true"></canvas>
  <div class="scrim" aria-hidden="true"></div>
  <header class="masthead"><a href="/">러닝 카드<span> / </span>올런바웃</a><span class="period">지난 28일</span></header>
  <nav class="chapters" aria-label="입력 단계, 메달의 일곱 자리">
    <button data-go="0" data-state="open" aria-label="01 총거리" aria-current="step"><span class="nav-coin" aria-hidden="true"><canvas width="52" height="52"></canvas><i>01</i></span><b>총거리</b></button>
    <button data-go="1" data-state="empty" aria-label="02 러닝 횟수" disabled><span class="nav-coin" aria-hidden="true"><canvas width="52" height="52"></canvas><i>02</i></span><b>횟수</b></button>
    <button data-go="2" data-state="empty" aria-label="03 평균 페이스" disabled><span class="nav-coin" aria-hidden="true"><canvas width="52" height="52"></canvas><i>03</i></span><b>페이스</b></button>
    <button data-go="3" data-state="empty" aria-label="04 최장거리" disabled><span class="nav-coin" aria-hidden="true"><canvas width="52" height="52"></canvas><i>04</i></span><b>최장거리</b></button>
    <button data-go="4" data-state="empty" aria-label="05 강한 훈련" disabled><span class="nav-coin" aria-hidden="true"><canvas width="52" height="52"></canvas><i>05</i></span><b>강한 훈련</b></button>
    <button data-go="5" data-state="empty" aria-label="06 목표" disabled><span class="nav-coin" aria-hidden="true"><canvas width="52" height="52"></canvas><i>06</i></span><b>목표</b></button>
    <button data-go="6" data-state="empty" aria-label="07 요일, 선택" disabled><span class="nav-coin" aria-hidden="true"><canvas width="52" height="52"></canvas><i>07</i></span><b>요일</b></button>
  </nav>
  <div class="scene-intro"><p class="eyebrow" id="chapter-name">DISTANCE / 01</p><h1 id="scene-heading" tabindex="-1">지난 28일 동안,<br>얼마나 달렸나요?</h1><button type="button" class="mode-toggle" id="pace-mode" aria-pressed="false" hidden>총 시간으로 입력</button></div>
  <div class="medal-stage" id="medal-stage" aria-hidden="true"></div>
  <p class="stage-note" id="stage-note" role="status">메달 틀을 준비하고 있어요</p>
  <p class="sr-only" id="medal-status" role="status"></p>
  <form id="record-form" novalidate>
    <div class="record" id="record">
      <label class="record-label" id="record-label" for="record-value">28일 총거리 <span>예시 · 숫자를 눌러 입력</span></label>
      <div class="number-row" id="number-row"><button type="button" class="count-step" id="subtract-run" aria-label="러닝 횟수 1회 줄이기" hidden>−</button><input id="record-value" type="text" inputmode="decimal" value="150" autocomplete="off" spellcheck="false" enterkeyhint="next" aria-describedby="field-hint field-error"><span class="unit" id="unit">km</span><button type="button" class="count-step" id="add-run" aria-label="러닝 횟수 1회 늘리기" hidden><span aria-hidden="true">＋</span>1회</button></div>
      <fieldset class="pace-fields" hidden><legend class="sr-only">평균 페이스, 1킬로미터당 시간</legend><div class="pace-row"><label><input id="pace-minutes" type="text" inputmode="numeric" value="5" autocomplete="off" enterkeyhint="next" aria-label="평균 페이스 분" aria-describedby="field-hint field-error"><span>분</span></label><span class="colon" aria-hidden="true">:</span><label><input id="pace-seconds" type="text" inputmode="numeric" value="30" autocomplete="off" enterkeyhint="next" aria-label="평균 페이스 초" aria-describedby="field-hint field-error"><span>초</span></label></div></fieldset>
      <fieldset class="time-fields" hidden><legend class="sr-only">28일 총 시간</legend><div class="time-row"><label><input id="time-hours" type="text" inputmode="numeric" autocomplete="off" enterkeyhint="next" aria-label="총 시간, 시간" aria-describedby="field-hint field-error"><span>시간</span></label><span class="colon" aria-hidden="true">:</span><label><input id="time-minutes" type="text" inputmode="numeric" autocomplete="off" enterkeyhint="next" aria-label="총 시간, 분" aria-describedby="field-hint field-error"><span>분</span></label><span class="colon" aria-hidden="true">:</span><label><input id="time-seconds" type="text" inputmode="numeric" autocomplete="off" enterkeyhint="next" aria-label="총 시간, 초 (비워도 돼요)" aria-describedby="field-hint field-error"><span>초</span></label></div></fieldset>
    </div>
    <div id="ruler" hidden></div>
    <div class="interaction" id="interaction">
      <fieldset class="choices hard-fields" id="hard-fields" aria-describedby="field-hint field-error" hidden><legend>강한 훈련 횟수</legend><p class="scene-def" id="scene-def" hidden></p><div class="hard-row">
        <label><input type="radio" name="hard" value="0"><span>0<small>회</small></span></label>
        <label><input type="radio" name="hard" value="1"><span>1<small>회</small></span></label>
        <label><input type="radio" name="hard" value="2"><span>2<small>회</small></span></label>
        <label><input type="radio" name="hard" value="3"><span>3<small>회</small></span></label>
        <label><input type="radio" name="hard" value="4"><span>4<small>회</small></span></label>
        <label><input type="radio" name="hard" value="5"><span>5<small>회</small></span></label>
        <label><input type="radio" name="hard" value="6"><span>6<small>회 이상</small></span></label>
      </div></fieldset>
      <fieldset class="choices goal-fields" id="goal-fields" aria-describedby="field-hint field-error" hidden><legend>목표</legend><div class="goal-row">
        <label><input type="radio" name="goal" value="habit"><span>습관</span></label>
        <label><input type="radio" name="goal" value="endurance"><span>지구력</span></label>
        <label><input type="radio" name="goal" value="record"><span>기록</span></label>
        <label><input type="radio" name="goal" value="race"><span>대회</span></label>
        <label><input type="radio" name="goal" value="health_fun"><span>건강과 재미</span></label>
      </div></fieldset>
      <button type="button" class="race-goal-open" id="race-goal-open" aria-expanded="false" aria-controls="race-goal" aria-describedby="race-goal-why" hidden><b><span aria-hidden="true">＋ </span>목표 기록 넣기</b><small>선택</small></button>
      <p class="sr-only" id="race-goal-why">목표 거리와 기록을 넣으면 평균 페이스를 목표와 견줘 판정해요.</p>
      <fieldset class="choices day-fields" id="day-fields" aria-describedby="field-hint" hidden><legend>평소 러닝 요일 <span>선택</span></legend><div class="day-row">
        <button type="button" data-day="0" aria-pressed="false" aria-label="월요일">월</button><button type="button" data-day="1" aria-pressed="false" aria-label="화요일">화</button><button type="button" data-day="2" aria-pressed="false" aria-label="수요일">수</button><button type="button" data-day="3" aria-pressed="false" aria-label="목요일">목</button><button type="button" data-day="4" aria-pressed="false" aria-label="금요일">금</button><button type="button" data-day="5" aria-pressed="false" aria-label="토요일">토</button><button type="button" data-day="6" aria-pressed="false" aria-label="일요일">일</button>
      </div></fieldset>
      <p id="field-hint">숫자를 누르거나 눈금자를 밀어 조절하세요.</p>
      <p id="field-derived" role="status"></p>
      <p id="field-error" role="status"></p>
      <p id="field-note" role="status"></p>
    </div>
    <footer class="journey-footer"><button type="button" id="previous" class="previous" aria-label="이전 입력" disabled><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6"/></svg></button><button type="submit" id="next"><span id="next-label">예시 150km로 다음</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg></button></footer>
    <div class="sample-confirm" id="sample-confirm" role="group" aria-labelledby="sample-confirm-text" hidden>
      <p id="sample-confirm-text" tabindex="-1"></p>
      <button type="button" id="sample-keep">이 숫자가 내 기록이 맞아요</button>
      <button type="button" id="sample-edit">직접 입력할게요</button>
    </div>
    <div class="race-goal" id="race-goal" role="group" aria-labelledby="race-goal-title" hidden>
      <p id="race-goal-title" tabindex="-1">목표 거리와 기록 <span>선택</span></p>
      <fieldset class="race-distance" aria-label="목표 거리"><div class="goal-row">
        <label><input type="radio" name="race-distance" value="5"><span>5km</span></label>
        <label><input type="radio" name="race-distance" value="10"><span>10km</span></label>
        <label><input type="radio" name="race-distance" value="21.0975"><span>하프</span></label>
        <label><input type="radio" name="race-distance" value="42.195"><span>풀</span></label>
      </div></fieldset>
      <fieldset class="time-fields race-time" aria-label="목표 기록"><div class="time-row"><label><input id="race-hours" type="text" inputmode="numeric" autocomplete="off" enterkeyhint="next" aria-label="목표 기록, 시간" aria-describedby="race-goal-status"><span>시간</span></label><span class="colon" aria-hidden="true">:</span><label><input id="race-minutes" type="text" inputmode="numeric" autocomplete="off" enterkeyhint="done" aria-label="목표 기록, 분" aria-describedby="race-goal-status"><span>분</span></label></div></fieldset>
      <p id="race-goal-status" role="status"></p>
      <div class="race-goal-actions"><button type="button" id="race-goal-clear">목표 기록 없이</button><button type="button" id="race-goal-save">이 목표로</button></div>
    </div>
  </form>
  <section class="complete" hidden aria-labelledby="complete-title">
    <div class="complete-head">
      <h1 id="complete-title" tabindex="-1">지난 28일의 메달</h1>
      <fieldset class="finish"><legend class="sr-only">메달 마감</legend>
        <label><input type="radio" name="finish" value="gold" checked><span>금</span></label>
        <label><input type="radio" name="finish" value="silver"><span>은</span></label>
        <label><input type="radio" name="finish" value="brass"><span>황동</span></label>
      </fieldset>
    </div>
    <p class="complete-epithet" id="complete-epithet" role="status"></p>
    <div class="complete-figure" id="complete-figure" role="img" aria-label=""></div>
    <p class="tilt-hint" aria-hidden="true">메달을 끌어 빛에 비춰 보세요</p>
    <dl id="summary"></dl>
    <p id="summary-extra"></p>
    <div class="complete-actions"><button type="button" id="edit-records"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 12H5m6-6-6 6 6 6"/></svg>다시 다듬기</button><button type="button" id="open-result">분석 펼쳐보기<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14m-6-6 6 6 6-6"/></svg></button></div>
  </section>
</main>
`;
