export interface PreparationSchedule {
  date: string;
  day: string;
  time: string;
  details: string[];
}

export interface DailySchedule {
  day: number;
  date: string;
  dayOfWeek: string;
  location: string;
  hours?: string[];
  periods: {
    time: string;
    activities: string[];
  }[];
}

export const preparationSchedule: PreparationSchedule[] = [
  { date: "2026-03-18", day: "수", time: "17:00~17:30", details: ["봉사대 인원 소개 및 조직 구성, 임원 선출"] },
  { date: "2026-04-03", day: "금", time: "15:00~18:00", details: ["기획과 업무 분담", "팀별 활동 모임", "현지 에티켓 교육"] },
  { date: "2026-04-10", day: "금", time: "15:00~18:00", details: ["팀별 활동 모임", "구호물자 및 확보 계획 수립"] },
  { date: "2026-05-01", day: "금", time: "15:00~18:00", details: ["팀별 활동 모임", "구호물자 확보 점검"] },
  { date: "2026-05-08", day: "금", time: "11:00~18:00", details: ["발대식 참여", "팀별 활동 모임"] },
  { date: "2026-05-10", day: "일", time: "15:00~19:00", details: ["팀별 활동 모임"] },
  { date: "2026-05-13", day: "수", time: "18:00~21:00", details: ["팀별 활동 모임 및 점검", "현지 교육 리허설"] },
  { date: "2026-05-15", day: "금", time: "14:00~18:00", details: ["팀별 활동 점검", "현지 교육 리허설", "물품 구매 및 점검", "물품 Boxing", "체크리스트 최종 확인"] },
];

export const dailySchedule: DailySchedule[] = [
  {
    day: 1, date: "2026-05-17", dayOfWeek: "일", location: "인천공항, 비엔티안",
    hours: ["국제선 이동"],
    periods: [
      { time: "오후", activities: ["집결 및 상태확인", "체크인 및 탑승", "출국(인천 → 비엔티안)", "숙소 도착 및 개인 정비 및 휴식"] }
    ]
  },
  {
    day: 2, date: "2026-05-18", dayOfWeek: "월", location: "비엔티안 (라오스 국립대학)",
    hours: ["문화 봉사 4H"],
    periods: [
      { time: "오전", activities: ["현지 필요 물품 구매 및 봉사 활동 준비", "각 조별 부스 세팅"] },
      { time: "오후", activities: ["K-Culture: 한글이름 짓기 + 명찰 만들기", "K-Beauty: 네일아트"] },
      { time: "저녁", activities: ["물품 구입 및 사전 준비", "피드백 및 준비 회의"] }
    ]
  },
  {
    day: 3, date: "2026-05-19", dayOfWeek: "화", location: "비엔티안 (라오스 국립대학)",
    hours: ["주민대상 봉사 3H", "보건 교육 3H", "전공&문화 봉사 6H"],
    periods: [
      { time: "오전", activities: ["주민대상 봉사: 구강관리 교육, 발마사지 등", "K-Culture: 한글이름 짓기 + 명찰 만들기", "K-Food: 한국음식 만들기", "보건교육: 손씻기, 식중독예방"] },
      { time: "오후", activities: ["전공연계: IT기기 활용 교육, AI활용 교육", "K-Culture: 한글이름 짓기 + 명찰 만들기", "K-Beauty: 네일아트"] },
      { time: "저녁", activities: ["물품 구입 및 사전 준비", "피드백 및 준비 회의"] }
    ]
  },
  {
    day: 4, date: "2026-05-20", dayOfWeek: "수", location: "비엔티안 (라오스 국립대학)",
    hours: ["주민대상 봉사 3H", "보건 교육 3H", "전공&문화 봉사 6H"],
    periods: [
      { time: "오전", activities: ["주민대상 봉사: 구강관리 교육, 발마사지 등", "K-Culture: 한글이름 짓기 + 명찰 만들기", "K-Food: 한국음식 만들기", "보건교육: 구강관리, 금연교육"] },
      { time: "오후", activities: ["전공연계: IT기기 활용 교육, AI활용 교육", "K-Culture: 한글이름 짓기 + 명찰 만들기", "K-Beauty: 네일아트"] },
      { time: "저녁", activities: ["물품 구입 및 사전 준비", "피드백 및 준비 회의"] }
    ]
  },
  {
    day: 5, date: "2026-05-21", dayOfWeek: "목", location: "비엔티안 (라오스 국립대학)",
    hours: ["주민대상 봉사 3H", "보건 교육 3H", "전공&문화 봉사 6H"],
    periods: [
      { time: "오전", activities: ["주민대상 봉사: 구강관리 교육, 발마사지 등", "K-Culture: 한글이름 짓기 + 명찰 만들기", "K-Food: 한국음식 만들기", "보건교육: 응급처치법, 열사병 예방교육"] },
      { time: "오후", activities: ["전공연계: IT기기 활용 교육, AI활용 교육", "K-Culture: 한글이름 짓기 + 명찰 만들기", "K-Beauty: 네일아트"] },
      { time: "저녁", activities: ["물품 구입 및 사전 준비", "피드백 및 준비 회의"] }
    ]
  },
  {
    day: 6, date: "2026-05-22", dayOfWeek: "금", location: "비엔티안 (라오스 국립대학), 루앙프라방",
    hours: ["주민대상 봉사 3H", "보건 교육 3H", "문화 봉사 3H"],
    periods: [
      { time: "오전", activities: ["주민대상 봉사: 구강관리 교육, 발마사지 등", "K-Culture: 한글이름 짓기 + 명찰 만들기", "K-Food: 한국음식 만들기", "보건교육: 하임리히법, 식습관 교육"] },
      { time: "오후", activities: ["기차 (비엔티안역 → 루앙프라방역)"] },
      { time: "저녁", activities: ["숙소 체크인 및 정비"] }
    ]
  },
  {
    day: 7, date: "2026-05-23", dayOfWeek: "토", location: "루앙프라방",
    periods: [
      { time: "오전", activities: ["봉사자료 정리 및 정비"] },
      { time: "오후", activities: ["문화체험"] },
      { time: "저녁", activities: ["문화체험"] }
    ]
  },
  {
    day: 8, date: "2026-05-24", dayOfWeek: "일", location: "비엔티안, 방비엥",
    periods: [
      { time: "오전", activities: ["기차 (루앙프라방역 → 방비엥역)", "숙소 체크인 및 정비"] },
      { time: "오후", activities: ["문화체험"] },
      { time: "저녁", activities: ["문화체험"] }
    ]
  },
  {
    day: 9, date: "2026-05-25", dayOfWeek: "월", location: "방비엥, 비엔티안",
    periods: [
      { time: "오전", activities: ["문화체험"] },
      { time: "오후", activities: ["기차 (방비엥역 → 비엔티안역)"] },
      { time: "저녁", activities: ["식사 및 개인정비", "비엔티안 공항 체크인 및 탑승"] }
    ]
  },
  {
    day: 10, date: "2026-05-26", dayOfWeek: "화", location: "인천공항",
    periods: [
      { time: "오전", activities: ["도착 후 귀가"] }
    ]
  },
];
