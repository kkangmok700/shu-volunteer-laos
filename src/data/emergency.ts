export interface EmergencyContact {
  category: string;
  name: string;
  address?: string;
  phone: string;
  extra?: string;
}

export const embassyContacts: EmergencyContact[] = [
  {
    category: "주 라오스 대한민국 대사관",
    name: "대사관 업무시간",
    address: "Lao-Thai Friendship Road, Watnak Village, Sisattanak District, Vientiane, Lao PDR",
    phone: "+856-21-352-031(~3)",
    extra: "laos@mofa.go.kr",
  },
  {
    category: "주 라오스 대한민국 대사관",
    name: "긴급 연락처",
    phone: "+856-20-5839-0080",
  },
];

export const hospitalContacts: EmergencyContact[] = [
  {
    category: "병원",
    name: "Mahosot Hospital (약 400병상)",
    address: "Mahosot Road, Kaognot Village, Vientiane",
    phone: "+856-21-214022",
  },
  {
    category: "병원",
    name: "Setthathirath Hospital (약 100병상)",
    address: "T5 Road, Donekoi Village, Vientiane",
    phone: "+856-21-351156",
  },
  {
    category: "병원",
    name: "Friendship Hospital (150병상)",
    address: "Phontong Road, Phonsavanh Village, Vientiane",
    phone: "+856-21-710006 / 710443",
  },
];

export const medevacContacts: EmergencyContact[] = [
  {
    category: "환자이송",
    name: "Medevac Repatriation",
    phone: "+44 208 819 5561",
  },
  {
    category: "환자이송",
    name: "플라잉 닥터스",
    phone: "+82-2-360-2525",
  },
];

export const partnerContact = {
  name: "라오스 국립 대학교 (NUOL)",
  address: "라오스 수도 비엔티안시 싸이타니구 동독 마을",
  phone: "+856 21 770381, 770070",
  fax: "+856 21 770381",
  email: "nuol@nuol.edu.la",
  website: "https://nuol.edu.la",
};
