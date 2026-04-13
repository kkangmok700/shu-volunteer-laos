"use client";

import { useState, useEffect } from "react";
import { dailySchedule } from "@/data/schedule";

interface JournalEntry {
  day: number;
  content: string;
  photos: string[];
  createdAt: string;
}

const STORAGE_KEY = "shu-volunteer-journal";

export default function JournalPage() {
  const [selectedDay, setSelectedDay] = useState(1);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [currentContent, setCurrentContent] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setEntries(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    const entry = entries.find((e) => e.day === selectedDay);
    setCurrentContent(entry?.content || "");
  }, [selectedDay, entries]);

  function saveEntry() {
    const updated = entries.filter((e) => e.day !== selectedDay);
    if (currentContent.trim()) {
      updated.push({
        day: selectedDay,
        content: currentContent,
        photos: [],
        createdAt: new Date().toISOString(),
      });
    }
    setEntries(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  const schedule = dailySchedule.find((d) => d.day === selectedDay);
  const hasEntry = entries.some((e) => e.day === selectedDay && e.content.trim());

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">활동 일지</h1>
      <p className="text-slate-500 mb-6">일자별 봉사 활동 기록</p>

      <div className="grid md:grid-cols-[280px_1fr] gap-6">
        {/* Day Selector */}
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <h3 className="font-bold text-sm text-slate-500 mb-3">일자 선택</h3>
          <div className="space-y-1">
            {dailySchedule.map((day) => {
              const written = entries.some((e) => e.day === day.day && e.content.trim());
              return (
                <button
                  key={day.day}
                  onClick={() => setSelectedDay(day.day)}
                  className={`w-full text-left px-3 py-2.5 rounded-lg text-sm transition-colors flex items-center justify-between ${
                    selectedDay === day.day
                      ? "bg-blue-600 text-white"
                      : "hover:bg-gray-50 text-slate-700"
                  }`}
                >
                  <span>
                    <span className="font-medium">{day.day}일차</span>
                    <span className={`text-xs ml-1 ${selectedDay === day.day ? "text-blue-200" : "text-slate-400"}`}>
                      ({day.dayOfWeek})
                    </span>
                  </span>
                  {written && (
                    <span className={`text-xs px-1.5 py-0.5 rounded ${
                      selectedDay === day.day ? "bg-white/20" : "bg-green-100 text-green-700"
                    }`}>
                      작성완료
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-slate-500">
              작성: {entries.filter((e) => e.content.trim()).length} / {dailySchedule.length}일
            </p>
            <div className="w-full bg-gray-100 rounded-full h-2 mt-1">
              <div
                className="bg-green-500 h-2 rounded-full transition-all"
                style={{
                  width: `${(entries.filter((e) => e.content.trim()).length / dailySchedule.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Journal Editor */}
        <div className="space-y-4">
          {/* Day Info */}
          {schedule && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <h3 className="font-bold text-blue-800">
                {schedule.day}일차 ({schedule.dayOfWeek}) - {schedule.date}
              </h3>
              <p className="text-sm text-blue-600 mt-1">{schedule.location}</p>
              <div className="mt-2 flex flex-wrap gap-1">
                {schedule.periods.flatMap((p) => p.activities).slice(0, 5).map((a, i) => (
                  <span key={i} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Editor */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-lg">활동 기록</h3>
              {hasEntry && (
                <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                  저장됨
                </span>
              )}
            </div>

            <textarea
              value={currentContent}
              onChange={(e) => setCurrentContent(e.target.value)}
              placeholder={`${selectedDay}일차 활동 내용을 기록해주세요...\n\n예시:\n- 오전: 봉사 활동 내용\n- 오후: 진행된 프로그램\n- 특이사항: 메모\n- 느낀점: 소감`}
              className="w-full h-64 border border-gray-300 rounded-lg p-4 text-sm resize-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            />

            <div className="flex items-center justify-between mt-4">
              <p className="text-xs text-slate-400">{currentContent.length}자 입력</p>
              <button
                onClick={saveEntry}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                저장하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
