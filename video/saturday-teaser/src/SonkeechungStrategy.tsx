import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { formatPace, formatRaceTime, makePacePlan, RACE_DISTANCE_KM } from "../../../src/components/marathon/sonkeechung/race-preparation-model";

const font = '"Pretendard Saturday", sans-serif';
const ivory = "#fff5df";
const gold = "#ecc589";
const fourHourPlan = makePacePlan(240);

export const SonkeechungHeritage: React.FC<{ cover?: boolean }> = ({ cover = false }) => (
  <AbsoluteFill style={{ backgroundColor: "#151d1a", color: ivory, fontFamily: font }}>
    <Img src={staticFile("sonkeechung/sohn-1936-ceremony.webp")}
      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 0%" }} />
    <AbsoluteFill style={{ background: "linear-gradient(180deg,#101b1500 18%,#101b1530 34%,#101b15e6 50%,#101b15 74%)" }} />
    <div style={{ position: "absolute", left: 88, right: 180, top: 800 }}>
      <div style={{ fontSize: 36, color: gold, marginBottom: 22 }}>2026.11.15 · 임진각 · 42.195km</div>
      <h1 style={{ fontSize: 94, fontWeight: 650, lineHeight: 1.13, letterSpacing: "-.035em", margin: 0 }}>
        손기정<br />평화마라톤
      </h1>
      {cover && <p style={{ fontSize: 44, lineHeight: 1.5, color: gold, marginTop: 32 }}>코스·고도·레이스 전략</p>}
    </div>
    <div style={{ position: "absolute", left: 88, right: 180, top: 1490, fontSize: 28, lineHeight: 1.5, color: "#fff5dfcc" }}>
      1936년 베를린 올림픽 기록 사진<br />사진 출처·역사 자료는 캡션에 표기
    </div>
  </AbsoluteFill>
);

export const SonkeechungPaceBrief: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#102016ed", color: ivory, fontFamily: font, padding: "300px 180px 0 88px" }}>
    <div style={{ fontSize: 38, color: gold, marginBottom: 28 }}>4시간 완주 · 일정 페이스 예시</div>
    <h1 style={{ fontSize: 84, lineHeight: 1.15, fontWeight: 650, letterSpacing: "-.035em", margin: 0 }}>초반 과속 없이,<br />후반까지 일정하게.</h1>
    <div style={{ marginTop: 48, borderTop: "1px solid #fff5df40", paddingTop: 28 }}>
      <div style={{ fontSize: 36, color: gold }}>목표 평균 페이스</div>
      <div style={{ fontSize: 108, lineHeight: 1.3, fontVariantNumeric: "tabular-nums" }}>약 {formatPace(240 * 60 / RACE_DISTANCE_KM)}<span style={{ fontSize: 42 }}> / km</span></div>
    </div>
    <div style={{ display: "flex", gap: 70, marginTop: 30, fontVariantNumeric: "tabular-nums" }}>
      <div><div style={{ fontSize: 32, color: gold }}>하프 통과</div><div style={{ fontSize: 58, marginTop: 12 }}>{formatRaceTime(fourHourPlan[1].elapsedSeconds)}</div></div>
      <div><div style={{ fontSize: 32, color: gold }}>피니시</div><div style={{ fontSize: 58, marginTop: 12 }}>4:00:00</div></div>
    </div>
    <p style={{ fontSize: 36, lineHeight: 1.6, color: "#e5dfce", marginTop: 44 }}>오르막은 속도보다 일정한 힘으로.<br />젤은 훈련에서 정한 간격대로.</p>
    <p style={{ fontSize: 29, lineHeight: 1.5, color: "#c8cfc0", marginTop: 28 }}>고도·바람·급수 정차 미반영<br />개인별 목표·전체 보급표는 사이트에서</p>
  </AbsoluteFill>
);
