"use client";

import { useState } from "react";
import { activities } from "@/data/activities";
import { performances } from "@/data/performances";

export default function ActivitiesPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = activities.find((a) => a.id === selectedId);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">봉사 활동</h1>
      <p className="text-slate-500 mb-6">프로그램별 봉사 활동 상세 내용</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {activities.map((act) => (
          <button
            key={act.id}
            onClick={() => setSelectedId(selectedId === act.id ? null : act.id)}
            className={`text-left bg-white rounded-xl border p-5 transition-all hover:shadow-md ${
              selectedId === act.id ? "border-blue-400 shadow-md ring-2 ring-blue-100" : "border-gray-200"
            }`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl text-white ${act.color}`}>
                {act.icon}
              </span>
              <div>
                <p className="font-bold text-sm">{act.category}</p>
                <p className="text-xs text-slate-500">{act.title}</p>
              </div>
            </div>
            <p className="text-sm text-slate-600 mb-3">{act.description}</p>
            {/* Team Members */}
            {act.members.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-3">
                {act.members.map((name, i) => (
                  <span key={i} className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full text-xs font-medium">
                    {name}
                  </span>
                ))}
              </div>
            )}
            {selectedId === act.id && (
              <div className="border-t border-gray-100 pt-3 mt-3 animate-fade-in">
                <p className="text-xs font-medium text-slate-500 mb-2">세부 활동</p>
                <ul className="space-y-1.5">
                  {act.details.map((d, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
                {act.members.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-gray-100">
                    <p className="text-xs font-medium text-slate-500 mb-2">담당 팀원 ({act.members.length}명)</p>
                    <div className="flex flex-wrap gap-2">
                      {act.members.map((name, i) => (
                        <div key={i} className="flex items-center gap-1.5">
                          <div className={`w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold ${act.color}`}>
                            {name.charAt(0)}
                          </div>
                          <span className="text-sm text-slate-700">{name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Performances */}
      <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-lg mb-1">공연 프로그램</h3>
        <p className="text-sm text-slate-500 mb-4">현지 발표회에서 선보일 공연 목록</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {performances.map((p) => (
            <div key={p.id} className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl text-white ${p.color}`}>
                  {p.icon}
                </span>
                <div>
                  <p className="font-bold text-sm">{p.category}</p>
                  <p className="text-xs text-slate-500">{p.performer}</p>
                </div>
              </div>
              <p className="text-sm font-medium text-slate-800 mb-2">{p.title}</p>
              {p.videoUrl && (
                <a
                  href={p.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline"
                >
                  ▶ 참고 영상
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Activity Schedule Summary */}
      <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-lg mb-4">일자별 활동 배분</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="text-left px-3 py-2 font-medium text-slate-600">일자</th>
                <th className="text-left px-3 py-2 font-medium text-slate-600">한국어 교육</th>
                <th className="text-left px-3 py-2 font-medium text-slate-600">주민봉사</th>
                <th className="text-left px-3 py-2 font-medium text-slate-600">보건교육</th>
                <th className="text-left px-3 py-2 font-medium text-slate-600">전공&문화</th>
              </tr>
            </thead>
            <tbody>
              {[
                { day: "2일차 (월)", k: "전체", r: "-", h: "-", c: "4H" },
                { day: "3일차 (화)", k: "전체", r: "3H", h: "3H", c: "6H" },
                { day: "4일차 (수)", k: "전체", r: "3H", h: "3H", c: "6H" },
                { day: "5일차 (목)", k: "전체", r: "3H", h: "3H", c: "6H" },
                { day: "6일차 (금)", k: "전체", r: "3H", h: "3H", c: "3H" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-3 py-2 font-medium">{row.day}</td>
                  <td className="px-3 py-2 text-emerald-700 font-medium">{row.k}</td>
                  <td className="px-3 py-2">{row.r}</td>
                  <td className="px-3 py-2">{row.h}</td>
                  <td className="px-3 py-2">{row.c}</td>
                </tr>
              ))}
              <tr className="bg-blue-50 font-medium">
                <td className="px-3 py-2">합계</td>
                <td className="px-3 py-2 text-emerald-700">전체 진행</td>
                <td className="px-3 py-2">12H</td>
                <td className="px-3 py-2">12H</td>
                <td className="px-3 py-2">25H</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
