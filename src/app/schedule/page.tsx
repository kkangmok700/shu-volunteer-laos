"use client";

import { useState } from "react";
import { preparationSchedule, dailySchedule } from "@/data/schedule";

export default function SchedulePage() {
  const [tab, setTab] = useState<"prep" | "daily">("daily");
  const [selectedDay, setSelectedDay] = useState<number>(1);

  const selected = dailySchedule.find((d) => d.day === selectedDay)!;

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">일정 관리</h1>
      <p className="text-slate-500 mb-6">국내 준비 및 현지 활동 일정</p>

      {/* Tab Switcher */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setTab("daily")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            tab === "daily" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          📅 현지 활동 일정
        </button>
        <button
          onClick={() => setTab("prep")}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            tab === "prep" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          📋 국내 준비 일정
        </button>
      </div>

      {tab === "daily" ? (
        <div className="grid md:grid-cols-[280px_1fr] gap-6">
          {/* Day Selector */}
          <div className="bg-white rounded-xl border border-gray-200 p-4">
            <h3 className="font-bold text-sm text-slate-500 mb-3">일자 선택</h3>
            <div className="space-y-1">
              {dailySchedule.map((day) => (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day.day)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors ${
                    selectedDay === day.day
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-50 text-slate-700"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{day.day}일차 ({day.dayOfWeek})</span>
                    <span className={`text-xs ${selectedDay === day.day ? "text-blue-200" : "text-slate-400"}`}>
                      {day.date.slice(5)}
                    </span>
                  </div>
                  <p className={`text-xs mt-0.5 ${selectedDay === day.day ? "text-blue-200" : "text-slate-400"}`}>
                    {day.location}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Day Detail */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold">
                  {selected.day}일차 ({selected.dayOfWeek})
                </h2>
                <p className="text-sm text-slate-500">{selected.date} | {selected.location}</p>
              </div>
              {selected.hours && (
                <div className="flex flex-wrap gap-1">
                  {selected.hours.map((h, i) => (
                    <span key={i} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-6">
              {selected.periods.map((period, idx) => (
                <div key={idx} className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      period.time === "오전" ? "bg-yellow-100 text-yellow-800" :
                      period.time === "오후" ? "bg-blue-100 text-blue-800" :
                      "bg-purple-100 text-purple-800"
                    }`}>
                      {period.time}
                    </span>
                  </div>
                  <div className="ml-2 border-l-2 border-gray-200 pl-4 space-y-2">
                    {period.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                        <span className="text-sm text-slate-700">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Preparation Schedule */
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">일자</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">시간</th>
                  <th className="text-left px-4 py-3 text-sm font-medium text-slate-600">세부 내용</th>
                </tr>
              </thead>
              <tbody>
                {preparationSchedule.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-sm">
                      <p className="font-medium">{item.date}</p>
                      <p className="text-xs text-slate-400">({item.day})</p>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">{item.time}</td>
                    <td className="px-4 py-3">
                      <ul className="space-y-1">
                        {item.details.map((d, i) => (
                          <li key={i} className="text-sm text-slate-700 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
