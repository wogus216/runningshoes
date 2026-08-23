import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { getCourseMap } from '@/lib/course-map';
import { getMarathonEvents } from '@/lib/data/marathon';

const events = getMarathonEvents().filter((e) => e.courseInfo?.gpx);

describe('코스 지도', () => {
  it('gpx 를 선언한 대회는 지도 데이터가 실제로 있다', () => {
    for (const e of events) {
      expect(getCourseMap(e.id), `${e.id} 지도 데이터 없음`).not.toBeNull();
    }
  });

  it('GPX 파일이 public 에 있고 트랙 포인트를 담고 있다', () => {
    for (const e of events) {
      const file = path.join(process.cwd(), 'public', e.courseInfo!.gpx!.file);
      expect(fs.existsSync(file), `${e.id}: ${file} 없음`).toBe(true);
      const xml = fs.readFileSync(file, 'utf8');
      expect((xml.match(/<trkpt /g) ?? []).length).toBeGreaterThan(20);
    }
  });

  it('구간 노트의 위치는 0~1 이고 코스 순서를 따른다', () => {
    for (const e of events) {
      const map = getCourseMap(e.id)!;
      let prev = -1;
      for (const b of map.beats) {
        expect(b.at).toBeGreaterThanOrEqual(0);
        expect(b.at).toBeLessThanOrEqual(1);
        expect(b.at, `${e.id}: '${b.title}' 가 앞 구간보다 뒤에 있지 않다`).toBeGreaterThanOrEqual(prev);
        prev = b.at;
      }
    }
  });

  /**
   * 이 사이트의 코스 경로는 대부분 '공식이 글로 밝힌 경유지'를 지도 위에 새로 이은 추정이다.
   * 추정에 거리·고도를 붙이면 실측처럼 읽힌다 — 타입이 허용해도 데이터에는 없어야 한다.
   */
  it('추정 경로에는 거리·고도 수치를 붙이지 않는다', () => {
    for (const e of events) {
      const gpx = e.courseInfo!.gpx!;
      if (gpx.source !== 'reconstructed') continue;
      expect(gpx.distanceKm, `${e.id}`).toBeUndefined();
      expect(gpx.elevationGainM, `${e.id}`).toBeUndefined();
      expect(gpx.sourceNote, `${e.id}: 무엇을 읽고 그렸는지 남길 것`).toBeTruthy();
    }
  });
});
