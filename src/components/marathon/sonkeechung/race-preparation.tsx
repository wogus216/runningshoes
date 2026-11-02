"use client";

import { useState } from "react";
import weather from "./race-weather-reference.json";
import {
  AMINO_VITAL_GELS,
  RACE_DISTANCE_KM,
  formatPace,
  formatRaceTime,
  makeFuelPlan,
  makePacePlan,
  raceClock,
  type GelType,
  type PaceStrategy,
} from "./race-preparation-model";
import styles from "./course-preview.module.css";

export function RacePreparation({ onSeek }: { onSeek: (progress: number) => void }) {
  const [finishMinutes, setFinishMinutes] = useState(240);
  const [strategy, setStrategy] = useState<PaceStrategy>("steady");
  const [gelType, setGelType] = useState<GelType>("shot45");
  const gel = AMINO_VITAL_GELS[gelType];
  const pacePlan = makePacePlan(finishMinutes, strategy);
  const plan = makeFuelPlan(finishMinutes, gelType, strategy);
  const totalCarbs = plan.length * gel.carbohydrateG;

  return (
    <section className={styles.preparation} aria-labelledby="race-preparation-title">
      <div className={styles.preparationHeading}>
        <p>출발 전에 챙길 것</p>
        <h2 id="race-preparation-title">내 목표에 맞춰,<br />페이스와 보급까지.</h2>
        <span>2026.11.15 · 임진각 · 오전 10시 출발</span>
      </div>
      <div id="race-pace" className={styles.paceBrief} aria-labelledby="race-pace-title">
        <div className={styles.briefTitle}>
          <h3 id="race-pace-title">목표별 페이스 전략</h3>
          <span>내 출발선 통과부터 계산</span>
        </div>
        <div className={styles.fuelInputs}>
          <label>목표 완주 시간
            <select value={finishMinutes} onChange={(event) => setFinishMinutes(Number(event.target.value))}>
              <option value={180}>3시간</option>
              <option value={210}>3시간 30분</option>
              <option value={240}>4시간 · 기본 예시</option>
              <option value={270}>4시간 30분</option>
              <option value={300}>5시간</option>
            </select>
          </label>
          <label>페이스 운영 방식
            <select value={strategy} onChange={(event) => setStrategy(event.target.value as PaceStrategy)}>
              <option value="steady">일정 페이스 · 기준표</option>
              <option value="settle">초반 5km 여유 · 계산 예시</option>
            </select>
          </label>
        </div>
        <div className={styles.paceSummary} role="status">
          <div><span>목표 평균 페이스</span><strong>{formatPace(finishMinutes * 60 / RACE_DISTANCE_KM)}<small> / km</small></strong></div>
          <p>{strategy === "steady" ? "구간마다 같은 페이스로 달렸을 때의 통과 시간입니다."
            : "초반 5km는 목표 평균보다 5초/km 여유 있게. 이후 구간에 25초를 나눠 반영한 계산 예시입니다."}<br />
            젤 예상 위치도 선택한 시간과 운영 방식에 맞춰 바뀝니다.</p>
        </div>
        <ol className={styles.paceStages} aria-label="구간별 페이스와 누적 통과 시간">
          {pacePlan.map((stage) => (
            <li key={stage.toKm}>
              <div className={styles.paceStageHeading}>
                <span>{stage.fromKm === 21.0975 ? "하프" : `${stage.fromKm}km`} → {stage.toKm === 21.0975 ? "하프" : `${stage.toKm}km`}</span>
                <h4>{stage.title}</h4>
                <button onClick={() => onSeek((stage.fromKm + stage.toKm) / 2 / RACE_DISTANCE_KM)} aria-label={`${stage.title}, ${stage.fromKm}에서 ${stage.toKm}km 구간 코스 보기`}>코스 보기 ↑</button>
              </div>
              <dl className={styles.paceStageNumbers}>
                <div><dt>구간 페이스 / km</dt><dd>{formatPace(stage.paceSecondsPerKm)}</dd></div>
                <div><dt>구간 끝 누적 시간</dt><dd>{formatRaceTime(stage.elapsedSeconds)}</dd></div>
              </dl>
              <p>{stage.advice}</p>
            </li>
          ))}
        </ol>
        <p className={styles.preparationNote}>
          공식 거리 42.195km 기준 계산입니다. 표시 페이스는 초 단위로 반올림하며 통과 시간은 반올림 전 값으로 계산합니다.
          고도·바람·급수 정차·출발 지연은 반영하지 않았습니다. 오르막에서는 페이스보다 일정한 힘으로 달리고,
          지연된 시간을 무리하게 만회하지 마세요. 목표 달성이나 특정 지점에서의 체력 고비를 예측하는 표는 아닙니다.
          예를 들어 4시간 선택은 4:00:00 도착 계산이며, 서브4를 보장하지 않습니다.
        </p>
        <div className={styles.preparationLinks}>
          <a href="https://worldathletics.org/spikes/news/barry-smyth-recreational-runner-analysis" target="_blank" rel="noopener noreferrer">초반 과속·페이스 운영 참고: World Athletics ↗</a>
        </div>
      </div>
      <div className={styles.weatherBrief} aria-labelledby="race-weather-title">
        <div className={styles.briefTitle}>
          <h3 id="race-weather-title">파주 11월 중순 기온</h3>
          <span>과거 관측 참고</span>
        </div>
        <dl className={styles.weatherNumbers}>
          <div><dt>일 최저 평균</dt><dd>{weather.meanMinimumC.toFixed(1)}<span>℃</span></dd></div>
          <div><dt>일 최고 평균</dt><dd>{weather.meanMaximumC.toFixed(1)}<span>℃</span></dd></div>
        </dl>
        <p className={styles.preparationNote}>
          2021–2025년 매년 11월 11–20일, 파주 관측소의 50일 자료 평균입니다.
          30년 평년값이나 올해 대회 당일의 예상 최저·최고기온은 아닙니다.
        </p>
        <dl className={styles.forecastStatus}>
          <div><dt>11월 15일 오전 10시</dt><dd>예보 확인 전</dd></div>
          <div><dt>비 · 바람 · 체감온도</dt><dd>예보 확인 전</dd></div>
        </dl>
        <p className={styles.preparationNote}>
          11월 1일 확인 기준, 대회일은 기상청 중기예보 범위 밖입니다.
          약 10일 전부터 날짜별 예보를 확인하고, 대회 직전 시간별 기온·바람을 다시 확인하세요.
          임진각 현장과 관측소의 기온은 다를 수 있습니다.
        </p>
        <div className={styles.preparationLinks}>
          <a href="https://www.weather.go.kr/w/forecast/overall/mid-term.do" target="_blank" rel="noopener noreferrer">최신 기상청 예보 ↗</a>
          <a href={weather.sources[4]} target="_blank" rel="noopener noreferrer">파주 과거 관측 ↗</a>
        </div>
      </div>
      <div className={styles.fuelBrief} aria-labelledby="race-fuel-title">
        <div className={styles.briefTitle}>
          <h3 id="race-fuel-title">아미노바이탈 보급 계획</h3>
          <span>훈련에서 확인할 예시</span>
        </div>
        <div className={styles.fuelInputs}>
          <label>사용할 에너지 젤
            <select value={gelType} onChange={(event) => setGelType(event.target.value as GelType)}>
              <option value="shot45">아미노샷 45g · 탄수화물 24.4g</option>
              <option value="pouch130">퍼펙트 130g · 탄수화물 41g</option>
            </select>
          </label>
        </div>
        <div className={styles.fuelSummary} aria-live="polite">
          <p>출발 <strong>20분 후</strong>부터, <strong>{gel.intervalMinutes}분 간격</strong> 예시</p>
          <p>레이스 중 <strong>{plan.length}포</strong> · 탄수화물 약 <strong>{totalCarbs.toFixed(0)}g</strong> · 시간당 평균 <strong>{(totalCarbs / (finishMinutes / 60)).toFixed(1)}g</strong></p>
        </div>
        <ol className={styles.fuelStops} aria-label="에너지 젤 섭취 시각과 예상 거리">
          {plan.map((stop, index) => (
            <li key={stop.minutes}>
              <button onClick={() => onSeek(stop.km / RACE_DISTANCE_KM)} aria-label={`${index + 1}번째 젤, 출발 ${stop.minutes}분 후, 약 ${stop.km.toFixed(1)}km 코스 보기`}>
                <span className={styles.fuelIndex}>{String(index + 1).padStart(2, "0")} / 1포</span>
                <strong>{stop.km.toFixed(1)}<small>km</small></strong>
                <span>{raceClock(stop.minutes)} · 출발 +{stop.minutes}분</span>
                <span className={styles.fuelMapLink}>코스 위치 보기 ↑</span>
              </button>
            </li>
          ))}
        </ol>
        <p className={styles.preparationNote}>
          위에서 선택한 목표 시간·페이스 운영 방식과 공식 거리 42.195km로 계산한 예상 위치입니다.
          섭취 시각은 오전 10시 출발 가정이며, 출발이 늦어지면 그만큼 뒤로 밀립니다. 버튼을 누르면 3D 참고 경로의 같은 진행 비율로 이동합니다.
          실제 급수대·젤 제공 위치를 뜻하지 않습니다. 출발 전 보급과 스포츠음료의 탄수화물은 합계에 포함하지 않았습니다.
        </p>
        <p className={styles.preparationNote}>
          이 간격은 제조사 복용 지침이 아닌 보급 계획 예시입니다. 제품 포장의 탄수화물 함량을 확인하고,
          평소 훈련에서 소화가 잘된 양으로 조절하세요. 물과 함께 섭취할지는 제품 안내를 따르며,
          스포츠음료를 마시면 해당 탄수화물도 합산합니다. 골드·프로 분말은 이 에너지 젤과 구분합니다.
        </p>
        <div className={styles.preparationLinks}>
          <a href={gel.source} target="_blank" rel="noopener noreferrer">제품 영양성분 ↗</a>
          <a href="https://www.ausport.gov.au/ais/nutrition/supplements/group_a/sports-foods2/sports-gels/how-and-when-do-i-use-it" target="_blank" rel="noopener noreferrer">AIS 보급 가이드 ↗</a>
        </div>
      </div>
    </section>
  );
}
