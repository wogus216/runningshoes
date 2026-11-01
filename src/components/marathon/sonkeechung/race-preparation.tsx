"use client";

import { useState } from "react";
import weather from "./race-weather-reference.json";
import {
  AMINO_VITAL_GELS,
  RACE_DISTANCE_KM,
  makeFuelPlan,
  raceClock,
  type GelType,
} from "./race-preparation-model";
import styles from "./course-preview.module.css";

export function RacePreparation({ onSeek }: { onSeek: (progress: number) => void }) {
  const [finishMinutes, setFinishMinutes] = useState(240);
  const [gelType, setGelType] = useState<GelType>("shot45");
  const gel = AMINO_VITAL_GELS[gelType];
  const plan = makeFuelPlan(finishMinutes, gelType);
  const totalCarbs = plan.length * gel.carbohydrateG;

  return (
    <section className={styles.preparation} aria-labelledby="race-preparation-title">
      <div className={styles.preparationHeading}>
        <p>출발 전에 챙길 것</p>
        <h2 id="race-preparation-title">길을 봤다면,<br />보급과 기온까지.</h2>
        <span>2026.11.15 · 임진각 · 오전 10시 출발</span>
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
          <label>목표 완주 시간
            <select value={finishMinutes} onChange={(event) => setFinishMinutes(Number(event.target.value))}>
              <option value={180}>3시간</option>
              <option value={210}>3시간 30분</option>
              <option value={240}>4시간 · 기본 예시</option>
              <option value={270}>4시간 30분</option>
              <option value={300}>5시간</option>
            </select>
          </label>
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
          일정한 페이스와 공식 거리 42.195km로 계산한 예상 위치입니다. 버튼을 누르면 3D 참고 경로의 같은 진행 비율로 이동합니다.
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
