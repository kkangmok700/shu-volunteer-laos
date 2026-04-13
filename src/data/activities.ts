export interface Activity {
  id: string;
  category: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  details: string[];
  members: string[];
}

export const activities: Activity[] = [
  {
    id: "k-culture",
    category: "K-Culture",
    title: "한글 교실 & 한국 전통 놀이",
    description: "한글이름 짓기, 명찰 만들기, 한국 전통 놀이 체험",
    icon: "🇰🇷",
    color: "bg-blue-500",
    details: [
      "한글이름 짓기 + 명찰 만들기",
      "한국 전통 놀이 체험",
      "한국 문화 소개 프레젠테이션",
    ],
    members: ["임다혜", "구나연", "김하민", "이하원", "이해인"],
  },
  {
    id: "k-beauty",
    category: "K-Beauty",
    title: "네일아트 & 스킨케어",
    description: "네일아트, 스킨케어, 화장법 등 K-Beauty 체험",
    icon: "💅",
    color: "bg-pink-500",
    details: [
      "네일아트 체험",
      "스킨케어 교육",
      "화장법 시연",
    ],
    members: ["박시연", "남유빈", "정세령", "이서준", "제갈준"],
  },
  {
    id: "k-food",
    category: "K-Food",
    title: "한국 대표음식 체험",
    description: "한국 대표 음식을 함께 만들고 나누는 체험 프로그램",
    icon: "🍳",
    color: "bg-orange-500",
    details: [
      "한국 대표 음식 레시피 소개",
      "함께 요리하기 체험",
      "음식 나눔 행사",
    ],
    members: ["인병진", "이요셉", "장재혁", "박슬하", "이정윤"],
  },
  {
    id: "health-edu",
    category: "보건교육",
    title: "보건 위생 교육",
    description: "응급처치법, 하임리히법, 금연교육, 위생교육 등",
    icon: "🏥",
    color: "bg-red-500",
    details: [
      "손씻기, 식중독 예방",
      "구강관리, 금연교육",
      "응급처치법, 열사병 예방교육",
      "하임리히법, 식습관 교육",
    ],
    members: [],
  },
  {
    id: "it-edu",
    category: "전공연계",
    title: "IT기기 & AI 활용 교육",
    description: "IT기기 활용법, AI 활용 교육 등 전공 연계 봉사",
    icon: "💻",
    color: "bg-purple-500",
    details: [
      "IT기기 활용 교육",
      "AI 활용 교육",
      "디지털 리터러시 향상",
    ],
    members: [],
  },
  {
    id: "community",
    category: "주민지원",
    title: "가정방문 봉사",
    description: "구강관리 교육, 발마사지 등 주민 대상 봉사",
    icon: "🤝",
    color: "bg-green-500",
    details: [
      "구강관리 교육",
      "발마사지",
      "가정방문 건강 체크",
    ],
    members: [],
  },
];
