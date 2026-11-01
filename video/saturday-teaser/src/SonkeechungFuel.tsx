import React from "react";
import { AbsoluteFill, Img, staticFile } from "remotion";
import { raceClock } from "../../../src/components/marathon/sonkeechung/race-preparation-model";
import { REEL_FUEL_STOPS } from "./sonkeechung-reel-plan";

const font = '"Pretendard Saturday", sans-serif';
const ivory = "#fff5df";
const gold = "#ecc589";

export const SonkeechungHeritage: React.FC<{ cover?: boolean }> = ({ cover = false }) => (
  <AbsoluteFill style={{ backgroundColor: "#151d1a", color: ivory, fontFamily: font }}>
    <Img src={staticFile("sonkeechung/sohn-1936-ceremony.webp")}
      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "50% 0%" }} />
    <AbsoluteFill style={{ background: "linear-gradient(180deg,#101b1500 18%,#101b1530 34%,#101b15e6 50%,#101b15 74%)" }} />
    <div style={{ position: "absolute", left: 88, right: 180, top: 800 }}>
      <div style={{ fontSize: 36, color: gold, marginBottom: 22 }}>{cover ? "2026.11.15 · 임진각 · 42.195km" : "손기정평화마라톤 · 11.15 임진각"}</div>
      <h1 style={{ fontSize: 88, fontWeight: 650, lineHeight: 1.13, letterSpacing: "-.035em", margin: 0 }}>
        {cover ? <>손기정<br />평화마라톤</> : <>손기정,<br />그 이름을<br />기억하며 달리다.</>}
      </h1>
    </div>
    <div style={{ position: "absolute", left: 88, right: 180, top: 1490, fontSize: 28, lineHeight: 1.5, color: "#fff5dfcc" }}>
      1936년 베를린 올림픽 기록 사진<br />사진 출처·역사 자료는 캡션에 표기
    </div>
  </AbsoluteFill>
);

export const SonkeechungFuelCue: React.FC<{
  stop: typeof REEL_FUEL_STOPS[number];
  elevationM: number;
}> = ({ stop, elevationM }) => (
  <div style={{ position: "absolute", left: 88, top: 748, width: 810,
    padding: "20px 24px", boxSizing: "border-box", backgroundColor: "#15251aee",
    border: "1px solid #ecc58980", color: ivory, fontFamily: font }}>
    <div style={{ fontSize: 32, color: gold, marginBottom: 8 }}>젤 {String(stop.index + 1).padStart(2, "0")} / 08 · 1포 보급 예시</div>
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 24 }}>
      <strong style={{ fontSize: 76, fontWeight: 600, lineHeight: 1.1, fontVariantNumeric: "tabular-nums" }}>{stop.km.toFixed(1)}<span style={{ fontSize: 34, fontWeight: 400 }}> km</span></strong>
      <span style={{ fontSize: 58, fontVariantNumeric: "tabular-nums" }}>{raceClock(stop.minutes)}</span>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#e5dfce", marginTop: 10 }}>
      <span>출발 +{stop.minutes}분 · 아미노샷 45g</span><span>고도 약 {Math.round(elevationM)}m</span>
    </div>
  </div>
);

export const SonkeechungFuelRecap: React.FC = () => (
  <AbsoluteFill style={{ backgroundColor: "#102016ed", color: ivory, fontFamily: font, padding: "300px 180px 0 88px" }}>
    <h1 style={{ fontSize: 84, lineHeight: 1.15, fontWeight: 650, letterSpacing: "-.035em", margin: 0 }}>젤 타이밍,<br />출발 전에 저장.</h1>
    <p style={{ fontSize: 38, lineHeight: 1.5, margin: "28px 0 10px", color: gold }}>4시간 완주 · 아미노샷 45g 예시</p>
    <p style={{ fontSize: 36, margin: "0 0 26px" }}>출발 20분 후부터, 30분 간격</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "22px 32px" }}>
      {REEL_FUEL_STOPS.map((stop) => (
        <div key={stop.minutes} style={{ borderTop: "1px solid #fff5df40", paddingTop: 14, fontSize: 42, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>
          <span style={{ color: gold }}>{stop.km.toFixed(1)}km</span> · {raceClock(stop.minutes)}
        </div>
      ))}
    </div>
    <div style={{ marginTop: 28, fontSize: 32, lineHeight: 1.55 }}>
      총 8포 · 탄수화물 195.2g · 평균 48.8g/시간<br />훈련에서 확인한 양으로 조절하세요.<br />급수대 위치가 아닌, 일정 페이스 기준 예상 거리
    </div>
  </AbsoluteFill>
);
