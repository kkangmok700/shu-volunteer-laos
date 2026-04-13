"use client";

import { useState } from "react";
import { activities } from "@/data/activities";

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
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Activity Schedule Summary */}
      <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-lg mb-4">일자별 활동 배분</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="text-left px-3 py-2 font-medium text-slate-600">일자</th>
                <th className="text-left px-3 py-2 font-medium text-slate-600">주민봉사</th>
                <th className="text-left px-3 py-2 font-medium text-slate-600">보건교육</th>
                <th className="text-left px-3 py-2 font-medium text-slate-600">전공&문화</th>
              </tr>
            </thead>
            <tbody>
              {[
                { day: "2일차 (월)", r: "-", h: "-", c: "4H" },
                { day: "3일차 (화)", r: "3H", h: "3H", c: "6H" },
                { day: "4일차 (수)", r: "3H", h: "3H", c: "6H" },
                { day: "5일차 (목)", r: "3H", h: "3H", c: "6H" },
                { day: "6일차 (금)", r: "3H", h: "3H", c: "3H" },
              ].map((row, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-3 py-2 font-medium">{row.day}</td>
                  <td className="px-3 py-2">{row.r}</td>
                  <td className="px-3 py-2">{row.h}</td>
                  <td className="px-3 py-2">{row.c}</td>
                </tr>
              ))}
              <tr className="bg-blue-50 font-medium">
                <td className="px-3 py-2">합계</td>
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
