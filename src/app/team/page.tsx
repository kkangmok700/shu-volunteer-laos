"use client";

import { useState } from "react";
import { members, type Member } from "@/data/members";

export default function TeamPage() {
  const [filter, setFilter] = useState<"all" | "student" | "staff">("all");
  const [search, setSearch] = useState("");

  const filtered = members.filter((m) => {
    if (filter === "student" && m.isStaff) return false;
    if (filter === "staff" && !m.isStaff) return false;
    if (search && !m.name.toLowerCase().includes(search.toLowerCase()) && !m.department.includes(search)) return false;
    return true;
  });

  const students = members.filter((m) => !m.isStaff);
  const staff = members.filter((m) => m.isStaff);
  const male = members.filter((m) => m.gender === "남").length;
  const female = members.filter((m) => m.gender === "여").length;

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">팀원 관리</h1>
      <p className="text-slate-500 mb-6">봉사대 명단 및 연락처</p>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-blue-700">{members.length}명</p>
          <p className="text-xs text-blue-600">총 인원</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-green-700">{students.length}명</p>
          <p className="text-xs text-green-600">학생</p>
        </div>
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-purple-700">{staff.length}명</p>
          <p className="text-xs text-purple-600">인솔자/교수</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-orange-700">{male} / {female}</p>
          <p className="text-xs text-orange-600">남 / 여</p>
        </div>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex gap-2">
          {[
            { key: "all", label: "전체" },
            { key: "student", label: "학생" },
            { key: "staff", label: "교직원" },
          ].map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key as typeof filter)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === f.key ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <input
          type="text"
          placeholder="이름 또는 학과 검색..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm flex-1 max-w-xs"
        />
      </div>

      {/* Member Cards (Mobile) */}
      <div className="md:hidden space-y-3">
        {filtered.map((m) => (
          <MemberCard key={m.id} member={m} />
        ))}
      </div>

      {/* Member Table (Desktop) */}
      <div className="hidden md:block bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b border-gray-200">
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">번호</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">성명</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">학과/소속</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">학년</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">학번</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">성별</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">연락처</th>
              <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">역할</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((m) => (
              <tr key={m.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm">{m.id}</td>
                <td className="px-4 py-3 text-sm font-medium">{m.name}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{m.department}</td>
                <td className="px-4 py-3 text-sm text-slate-600">{m.grade || "-"}</td>
                <td className="px-4 py-3 text-sm text-slate-500 font-mono">{m.studentId || "-"}</td>
                <td className="px-4 py-3 text-sm">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                    m.gender === "남" ? "bg-sky-100 text-sky-700" : "bg-pink-100 text-pink-700"
                  }`}>
                    {m.gender}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-slate-600">
                  <a href={`tel:${m.phone}`} className="text-blue-600 hover:underline">{m.phone}</a>
                </td>
                <td className="px-4 py-3 text-sm">
                  {m.role && (
                    <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-xs font-medium">
                      {m.role}
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function MemberCard({ member: m }: { member: Member }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${
            m.isStaff ? "bg-amber-500" : "bg-blue-500"
          }`}>
            {m.name.charAt(0)}
          </div>
          <div>
            <p className="font-medium">{m.name}</p>
            <p className="text-xs text-slate-500">{m.department} {m.grade ? `${m.grade}학년` : ""}</p>
          </div>
        </div>
        {m.role && (
          <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-xs font-medium">
            {m.role}
          </span>
        )}
      </div>
      <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
          m.gender === "남" ? "bg-sky-100 text-sky-700" : "bg-pink-100 text-pink-700"
        }`}>
          {m.gender}
        </span>
        <a href={`tel:${m.phone}`} className="text-sm text-blue-600 font-medium">
          {m.phone}
        </a>
      </div>
    </div>
  );
}
