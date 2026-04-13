export interface IncomeItem {
  category: string;
  detail: string;
  amount: number;
}

export interface ExpenseItem {
  category: string;
  detail: string;
  projectFund: number;
  selfFund: number;
  otherFund: number;
}

export const income: IncomeItem[] = [
  { category: "혁신지원사업비", detail: "30,000,000원", amount: 30000000 },
  { category: "대응투자(자부담금)", detail: "600,000원 × 15명", amount: 9000000 },
  { category: "기타수입", detail: "-", amount: 0 },
];

export const expenses: ExpenseItem[] = [
  { category: "항공료", detail: "왕복 항공권 850,000원 × 19명", projectFund: 16150000, selfFund: 0, otherFund: 0 },
  { category: "발권수수료", detail: "25,000원 × 19명", projectFund: 0, selfFund: 475000, otherFund: 0 },
  { category: "숙박비", detail: "625,000원 × 8일", projectFund: 4200000, selfFund: 800000, otherFund: 0 },
  { category: "현지 식비", detail: "30,000원 × 19명 × 9일", projectFund: 1600000, selfFund: 3530000, otherFund: 0 },
  { category: "프로그램 운영비", detail: "700,000원 × 5일", projectFund: 3000000, selfFund: 500000, otherFund: 0 },
  { category: "교통비", detail: "375,000원 × 8일", projectFund: 3000000, selfFund: 0, otherFund: 0 },
  { category: "여행자보험", detail: "23,000원 × 20명", projectFund: 460000, selfFund: 0, otherFund: 0 },
  { category: "비자", detail: "-", projectFund: 0, selfFund: 0, otherFund: 0 },
  { category: "회의비", detail: "250,000원 × 2회", projectFund: 500000, selfFund: 0, otherFund: 0 },
  { category: "교통경비", detail: "50,000원 × 19명", projectFund: 0, selfFund: 950000, otherFund: 0 },
  { category: "문화체험비", detail: "100,000원 × 19명", projectFund: 1090000, selfFund: 810000, otherFund: 0 },
  { category: "예비비", detail: "", projectFund: 0, selfFund: 1935000, otherFund: 0 },
];

export const totalIncome = 39000000;
export const totalProjectFund = 30000000;
export const totalSelfFund = 9000000;
