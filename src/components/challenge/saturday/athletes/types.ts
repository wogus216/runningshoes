/**
 * 화면이 실제로 쓰는 모양만 담은 뷰 모델.
 *
 * 서버(page.tsx)에서 로스터(SATURDAY_CREW)와 캐릭터(SATURDAY_ATHLETES)를 합쳐 만든다.
 * 클라이언트 컴포넌트가 데이터 모듈을 직접 import 하면 쓰지도 않는 필드까지 번들에 실린다.
 */
export type AthleteView = {
  /** 1부터 — 화면의 `01 / 07` */
  index: number;
  /** 코드네임. 이 페이지의 정본 이름이다 */
  name: string;
  /** 큰 세리프 제목용 로마자 */
  nameLatin: string;
  /** 'FULL MARATHON' | '10K' — mono 라벨 */
  role: string;
  /** '풀코스 · 42.195 KM' */
  distanceLabel: string;
  characterLine: string;
  knownFor?: string;
  /*
   * runningType 은 뷰 모델에서 뺐다(2026-08-29). 일곱 명 전원이 실측 전이라
   * 화면에는 '측정 전'만 반복해 나왔다. 데이터 필드(types/challenge.ts)는 남아 있으니
   * 실측이 생기면 여기에 다시 얹으면 된다.
   */
  /** `athletes/jaechun` 처럼 하위 디렉토리를 포함한다 */
  photoSrc: string;
  photoAlt: string;
  objectPosition?: string;
  /** 여덟 장을 한 화보로 묶는 색보정. 없으면 .photo 의 공통 필터가 걸린다 */
  tone?: string;
  /** 본인 사진이 아직 없어 크루 단체 사진을 놓은 상태. 화면이 이걸 밝힌다 */
  isPlaceholder?: boolean;
};
