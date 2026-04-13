"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { members } from "@/data/members";
import { dailySchedule } from "@/data/schedule";
import { activities } from "@/data/activities";

function getDDay() {
  const target = new Date("2026-05-17T00:00:00+09:00");
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days;
}

function getCurrentDay() {
  const start = new Date("2026-05-17");
  const now = new Date();
  const diff = Math.floor((now.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  if (diff < 0 || diff > 9) return null;
  return diff + 1;
}

export default function Dashboard() {
  const [dday, setDday] = useState<number>(0);
  const [currentDay, setCurrentDay] = useState<number | null>(null);

  useEffect(() => {
    setDday(getDDay());
    setCurrentDay(getCurrentDay());
  }, []);

  const todaySchedule = currentDay
    ? dailySchedule.find((d) => d.day === currentDay)
    : null;

  const stats = [
    { label: "총 인원", value: `${members.length}명`, icon: "👥", color: "bg-blue-50 text-blue-700 border-blue-200" },
    { label: "봉사 기간", value: "9박 10일", icon: "📅", color: "bg-green-50 text-green-700 border-green-200" },
    { label: "봉사 프로그램", value: `${activities.length}개`, icon: "🎯", color: "bg-purple-50 text-purple-700 border-purple-200" },
    { label: "총 예산", value: "3,900만원", icon: "💰", color: "bg-orange-50 text-orange-700 border-orange-200" },
  ];

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-fade-in">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
          SHU Volunteer 대시보드
        </h1>
        <p className="text-slate-500 mt-1">라오스 해외봉사 관리 플랫폼</p>
      </div>

      {/* D-Day Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white mb-8 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-blue-200 text-sm font-medium">2026 라오스 해외봉사</p>
            <h2 className="text-xl md:text-2xl font-bold mt-1">
              삼육보건대학교 &rarr; 라오스 국립대학교
            </h2>
            <p className="text-blue-200 mt-2">
              2026년 5월 17일(일) ~ 5월 26일(화)
            </p>
          </div>
          <div className="mt-4 md:mt-0 text-center">
            <div className="bg-white/20 backdrop-blur rounded-xl px-6 py-4">
              {dday > 0 ? (
                <>
                  <p className="text-blue-200 text-xs">출발까지</p>
                  <p className="text-4xl font-black animate-count-up">D-{dday}</p>
                </>
              ) : dday === 0 ? (
                <>
                  <p className="text-yellow-200 text-xs">오늘!</p>
                  <p className="text-3xl font-black">D-DAY</p>
                </>
              ) : currentDay ? (
                <>
                  <p className="text-blue-200 text-xs">봉사 진행 중</p>
                  <p className="text-3xl font-black">{currentDay}일차</p>
                </>
              ) : (
                <>
                  <p className="text-blue-200 text-xs">봉사 완료</p>
                  <p className="text-2xl font-black">완료!</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className={`rounded-xl p-4 border ${stat.color}`}
          >
            <span className="text-2xl">{stat.icon}</span>
            <p className="text-2xl font-bold mt-2">{stat.value}</p>
            <p className="text-sm opacity-70">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Access + Today's Schedule */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Today's Schedule or Next Schedule */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            📅 {todaySchedule ? "오늘 일정" : "다음 일정 미리보기"}
          </h3>
          {todaySchedule ? (
            <div className="space-y-3">
              <p className="text-sm text-slate-500">
                {todaySchedule.day}일차 ({todaySchedule.dayOfWeek}) - {todaySchedule.location}
              </p>
              {todaySchedule.periods.map((period, idx) => (
                <div key={idx} className="border-l-2 border-blue-400 pl-3">
                  <p className="font-medium text-sm text-blue-600">{period.time}</p>
                  <ul className="text-sm text-slate-600 mt-1 space-y-0.5">
                    {period.activities.map((act, i) => (
                      <li key={i}>- {act}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-slate-500">
                1일차 (일) - 인천공항, 비엔티안
              </p>
              <div className="border-l-2 border-blue-400 pl-3">
                <p className="font-medium text-sm text-blue-600">오후</p>
                <ul className="text-sm text-slate-600 mt-1 space-y-0.5">
                  <li>- 집결 및 상태확인</li>
                  <li>- 체크인 및 탑승</li>
                  <li>- 출국 (인천 → 비엔티안)</li>
                </ul>
              </div>
              <Link
                href="/schedule"
                className="inline-block text-sm text-blue-600 hover:underline mt-2"
              >
                전체 일정 보기 →
              </Link>
            </div>
          )}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            ⚡ 빠른 접근
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <Link href="/schedule" className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
              <span className="text-2xl">📅</span>
              <div>
                <p className="font-medium text-sm">일정표</p>
                <p className="text-xs text-slate-500">10일 상세 일정</p>
              </div>
            </Link>
            <Link href="/team" className="flex items-center gap-3 p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
              <span className="text-2xl">👥</span>
              <div>
                <p className="font-medium text-sm">팀원 관리</p>
                <p className="text-xs text-slate-500">{members.length}명 명단</p>
              </div>
            </Link>
            <Link href="/emergency" className="flex items-center gap-3 p-3 rounded-lg bg-red-50 hover:bg-red-100 transition-colors">
              <span className="text-2xl">🚨</span>
              <div>
                <p className="font-medium text-sm">비상 연락망</p>
                <p className="text-xs text-slate-500">대사관/병원</p>
              </div>
            </Link>
            <Link href="/journal" className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors">
              <span className="text-2xl">📝</span>
              <div>
                <p className="font-medium text-sm">활동 일지</p>
                <p className="text-xs text-slate-500">일별 기록</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Program Overview */}
      <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          🎯 봉사 프로그램 개요
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {activities.map((act) => (
            <Link
              key={act.id}
              href="/activities"
              className="p-3 rounded-lg border border-gray-100 hover:border-blue-200 hover:shadow-sm transition-all"
            >
              <span className="text-2xl">{act.icon}</span>
              <p className="font-medium text-sm mt-1">{act.category}</p>
              <p className="text-xs text-slate-500 mt-0.5">{act.title}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Goals */}
      <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
          🏆 봉사 목표
        </h3>
        <ul className="space-y-3">
          {[
            "현지 한국어 학습 수요를 반영한 수준별 맞춤 교육을 통해 교육 만족도 및 학습 효율 극대화",
            "협동 중심의 봉사 과제 수행을 통한 대인관계 역량 강화 및 내면적 성장 도모",
            "현지 대학 및 재학생 대상 맞춤형 한국문화 체험 프로그램 제공을 통한 상호 교류 활성화",
            "현지 주민의 니즈에 부합하는 실천적 봉사를 통해 공동체 의식 확산 및 삶의 질 향상에 기여",
          ].map((goal, i) => (
            <li key={i} className="flex gap-3 items-start">
              <span className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0">
                {i + 1}
              </span>
              <span className="text-sm text-slate-700">{goal}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
