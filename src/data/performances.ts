export interface Performance {
  id: string;
  category: string;
  title: string;
  performer: string;
  videoUrl?: string;
  icon: string;
  color: string;
}

export const performances: Performance[] = [
  {
    id: "dance-women",
    category: "댄스",
    title: "풍선",
    performer: "여자",
    videoUrl: "https://youtu.be/z5JhbNlOEcY?si=r20sbqIKB2Ad1UFd",
    icon: "💃",
    color: "bg-pink-500",
  },
  {
    id: "dance-men",
    category: "댄스",
    title: "강남스타일",
    performer: "남자",
    icon: "🕺",
    color: "bg-indigo-500",
  },
  {
    id: "song",
    category: "노래",
    title: "슈퍼스타 (슬기로운 의사생활)",
    performer: "전체",
    videoUrl: "https://youtu.be/7eJfROf1mJs?si=6YZ_YIjNtr_-1V68",
    icon: "🎤",
    color: "bg-purple-500",
  },
  {
    id: "special",
    category: "특창",
    title: "친구야 - 기프티드",
    performer: "특창팀",
    videoUrl: "https://youtu.be/DBfCn9K8tiQ?si=ZiqLJH-CKCLK1Keu",
    icon: "🎵",
    color: "bg-amber-500",
  },
];
