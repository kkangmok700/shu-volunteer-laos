"use client";

import { embassyContacts, hospitalContacts, medevacContacts, partnerContact } from "@/data/emergency";
import { members } from "@/data/members";

export default function EmergencyPage() {
  const staff = members.filter((m) => m.isStaff);
  const leader = members.find((m) => m.name === "박슬하");

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">비상 연락망</h1>
      <p className="text-slate-500 mb-6">긴급 상황 시 연락처 및 대응 정보</p>

      {/* Emergency Alert */}
      <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
        <p className="text-red-800 font-bold text-sm flex items-center gap-2">
          🚨 긴급 상황 발생 시
        </p>
        <ol className="text-sm text-red-700 mt-2 space-y-1 ml-6 list-decimal">
          <li>인솔자(강병진 목사, 김경목 교수)에게 즉시 연락</li>
          <li>상황에 따라 현지 병원 또는 대사관 연락</li>
          <li>안전사고 예방 매뉴얼 숙지 및 준수</li>
        </ol>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Team Leaders */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            👨‍🏫 인솔자 및 임원
          </h3>
          <div className="space-y-3">
            {staff.map((m) => (
              <div key={m.id} className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                <div>
                  <p className="font-medium">{m.name}</p>
                  <p className="text-xs text-slate-500">{m.role} | {m.department}</p>
                </div>
                <a href={`tel:${m.phone}`} className="bg-amber-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-amber-600">
                  {m.phone}
                </a>
              </div>
            ))}
            {leader && (
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium">{leader.name}</p>
                  <p className="text-xs text-slate-500">봉사대 대장 | {leader.department}</p>
                </div>
                <a href={`tel:${leader.phone}`} className="bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-blue-600">
                  {leader.phone}
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Embassy */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            🏛️ 주 라오스 대한민국 대사관
          </h3>
          <div className="space-y-3">
            {embassyContacts.map((c, i) => (
              <div key={i} className="p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{c.name}</p>
                  <a href={`tel:${c.phone}`} className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-red-600">
                    {c.phone}
                  </a>
                </div>
                {c.address && <p className="text-xs text-slate-500 mt-1">{c.address}</p>}
                {c.extra && <p className="text-xs text-blue-600 mt-1">{c.extra}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Hospitals */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            🏥 비엔티안 주요 병원
          </h3>
          <div className="space-y-3">
            {hospitalContacts.map((h, i) => (
              <div key={i} className="p-3 bg-green-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{h.name}</p>
                  <a href={`tel:${h.phone}`} className="bg-green-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-green-700">
                    전화
                  </a>
                </div>
                <p className="text-xs text-slate-500 mt-1">{h.address}</p>
                <p className="text-xs text-slate-600 mt-0.5 font-mono">{h.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Medevac */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            🚁 환자 이송 업체
          </h3>
          <div className="space-y-3">
            {medevacContacts.map((c, i) => (
              <div key={i} className="p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-sm">{c.name}</p>
                  <a href={`tel:${c.phone}`} className="bg-purple-600 text-white px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-purple-700">
                    {c.phone}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partner University */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 md:col-span-2">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            🏫 협력 기관 - {partnerContact.name}
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-500">주소</p>
              <p className="text-sm font-medium">{partnerContact.address}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">전화</p>
              <p className="text-sm font-medium">{partnerContact.phone}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">이메일</p>
              <p className="text-sm font-medium text-blue-600">{partnerContact.email}</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">웹사이트</p>
              <p className="text-sm font-medium text-blue-600">{partnerContact.website}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Guidelines */}
      <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          🛡️ 안전 수칙
        </h3>
        <ul className="space-y-2">
          {[
            "안전사고 예방을 위한 매뉴얼을 숙지합니다",
            "사전 현지 위험요소 분석 및 대응책을 마련합니다",
            "근거리 병원과 비상 연락망을 구축하고 신속한 연락과 후송을 위한 체계를 확립합니다",
            "상시 인원점검 체크리스트를 관리합니다",
          ].map((rule, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
              <span className="text-green-500 mt-0.5">✓</span>
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
