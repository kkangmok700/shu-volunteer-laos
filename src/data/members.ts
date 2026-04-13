export interface Member {
  id: number;
  name: string;
  department: string;
  grade?: number;
  studentId?: string;
  gender: "남" | "여";
  phone: string;
  role?: string;
  isStaff?: boolean;
}

export const members: Member[] = [
  { id: 1, name: "박슬하", department: "의료AI융합과", grade: 2, studentId: "202510388", gender: "여", phone: "010-4261-2919", role: "대장" },
  { id: 2, name: "정세령", department: "의료AI융합과", grade: 2, studentId: "202510433", gender: "여", phone: "010-5890-3952", role: "부대장" },
  { id: 3, name: "박시연", department: "의료AI융합과", grade: 2, studentId: "202510429", gender: "여", phone: "010-5552-9137", role: "총무, 서기" },
  { id: 4, name: "구나연", department: "의료AI융합과", grade: 2, studentId: "202510642", gender: "여", phone: "010-5123-9366" },
  { id: 5, name: "김하민", department: "의료AI융합과", grade: 2, studentId: "202410475", gender: "여", phone: "010-3973-4102" },
  { id: 6, name: "남유빈", department: "의료AI융합과", grade: 1, studentId: "202610391", gender: "여", phone: "010-5966-2171" },
  { id: 7, name: "이서준", department: "의료AI융합과", grade: 2, studentId: "202310482", gender: "남", phone: "010-9505-0487" },
  { id: 8, name: "이요셉", department: "의료AI융합과", grade: 2, studentId: "202510408", gender: "남", phone: "010-3105-3184" },
  { id: 9, name: "이정윤", department: "의료AI융합과", grade: 1, studentId: "202610406", gender: "남", phone: "010-9800-2591" },
  { id: 10, name: "이해인", department: "의료AI융합과", grade: 1, studentId: "202310409", gender: "남", phone: "010-4316-0084" },
  { id: 11, name: "이하원", department: "의료AI융합과", grade: 1, studentId: "202610408", gender: "남", phone: "010-4702-4603" },
  { id: 12, name: "인병진", department: "의료AI융합과", grade: 2, studentId: "202310490", gender: "남", phone: "010-6278-5428" },
  { id: 13, name: "임다혜", department: "의료AI융합과", grade: 2, studentId: "202510412", gender: "여", phone: "010-2332-8437" },
  { id: 14, name: "장재혁", department: "의료AI융합과", grade: 2, studentId: "202210497", gender: "남", phone: "010-7754-5199" },
  { id: 15, name: "제갈준", department: "의료AI융합과", grade: 2, studentId: "202310495", gender: "남", phone: "010-2933-7348" },
  { id: 16, name: "PHOUANGMALA ONLYTWO", department: "글로벌융합과", grade: 1, gender: "여", phone: "010-9931-0525" },
  { id: 17, name: "강병진", department: "교목처", gender: "남", phone: "010-3776-3691", role: "인솔자(정)", isStaff: true },
  { id: 18, name: "김경목", department: "산학협력단", gender: "남", phone: "010-6394-4750", role: "지도교수", isStaff: true },
  { id: 19, name: "김수연", department: "산학협력단", gender: "남", phone: "010-7594-0309", role: "담당직원", isStaff: true },
];
