"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { members } from "@/data/members";
import { dailySchedule } from "@/data/schedule";
import { activities } from "@/data/activities";
import { KoreaFlag, LaosFlag } from "@/components/Flags";

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

      {/* Hero Banner with Flags */}
      <div className="relative overflow-hidden rounded-3xl mb-8 shadow-xl">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#003478] via-[#1a1a6e] to-[#002868]" />
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#C60C30]/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#CE1126]/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-white/5 blur-3xl" />

        <div className="relative z-10 p-6 md:p-10">
          {/* Top: Flags & Title */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="flex items-center gap-4 md:gap-6 mb-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-white/20">
                <KoreaFlag className="w-20 h-14 md:w-28 md:h-20 rounded-md shadow-sm" />
                <p className="text-white/80 text-xs mt-1.5 font-medium">대한민국</p>
              </div>

              {/* Connection Arrow */}
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center gap-1">
                  <div className="w-6 md:w-12 h-0.5 bg-gradient-to-r from-[#C60C30] to-white/60" />
                  <svg className="w-5 h-5 md:w-7 md:h-7 text-white animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.5 12h-15m11.667-4l3.333 4-3.333 4M21 5c0 1.5-2 3-2 3s-2-1.5-2-3a2 2 0 014 0z" />
                  </svg>
                  <div className="w-6 md:w-12 h-0.5 bg-gradient-to-r from-white/60 to-[#CE1126]" />
                </div>
                <span className="text-white/50 text-[10px] md:text-xs tracking-widest">VOLUNTEER</span>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-white/20">
                <LaosFlag className="w-20 h-14 md:w-28 md:h-20 rounded-md shadow-sm" />
                <p className="text-white/80 text-xs mt-1.5 font-medium">ສປປ ລາວ</p>
              </div>
            </div>

            {/* Title */}
            <div className="mt-2">
              <p className="text-blue-300 text-xs md:text-sm tracking-wider font-medium uppercase">
                2026 전문대학혁신지원사업
              </p>
              <h1 className="text-2xl md:text-4xl font-black text-white mt-1 tracking-tight">
                SHU Volunteer
              </h1>
              <p className="text-white/70 text-sm md:text-base mt-1">
                라오스 한국어 교육 해외봉사
              </p>
            </div>
          </div>

          {/* Route Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-5 mb-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center text-white">
              <div>
                <p className="text-white/50 text-xs mb-1">출발</p>
                <p className="font-bold text-sm md:text-base">삼육보건대학교</p>
                <p className="text-white/60 text-xs">사회봉사단 / 혁신지원사업단</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="hidden md:flex items-center gap-2 text-white/40">
                  <div className="w-12 h-px bg-white/30" />
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
                  </svg>
                  <div className="w-12 h-px bg-white/30" />
                </div>
                <div className="md:hidden flex items-center justify-center gap-2 text-white/40 text-xs">
                  <div className="w-8 h-px bg-white/30" />
                  <span>9박 10일</span>
                  <div className="w-8 h-px bg-white/30" />
                </div>
              </div>
              <div>
                <p className="text-white/50 text-xs mb-1">도착</p>
                <p className="font-bold text-sm md:text-base">라오스 국립대학교</p>
                <p className="text-white/60 text-xs">비엔티안 한국어학당</p>
              </div>
            </div>
          </div>

          {/* D-Day + Date */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="bg-white/15 backdrop-blur rounded-xl px-6 py-3 border border-white/20 text-center">
              <p className="text-white/60 text-xs">봉사 기간</p>
              <p className="text-white font-bold text-sm mt-0.5">
                2026.05.17(일) ~ 05.26(화)
              </p>
            </div>
            <div className="bg-gradient-to-r from-[#C60C30] to-[#CE1126] rounded-xl px-8 py-3 text-center shadow-lg shadow-red-900/30">
              {dday > 0 ? (
                <>
                  <p className="text-red-200 text-xs">출발까지</p>
                  <p className="text-white text-3xl font-black animate-count-up">D-{dday}</p>
                </>
              ) : dday === 0 ? (
                <>
                  <p className="text-yellow-200 text-xs">오늘 출발!</p>
                  <p className="text-white text-3xl font-black">D-DAY</p>
                </>
              ) : currentDay ? (
                <>
                  <p className="text-red-200 text-xs">봉사 진행 중</p>
                  <p className="text-white text-3xl font-black">{currentDay}일차</p>
                </>
              ) : (
                <>
                  <p className="text-red-200 text-xs">봉사 완료</p>
                  <p className="text-white text-2xl font-black">Mission Complete</p>
                </>
              )}
            </div>
            <div className="bg-white/15 backdrop-blur rounded-xl px-6 py-3 border border-white/20 text-center">
              <p className="text-white/60 text-xs">참가 인원</p>
              <p className="text-white font-bold text-sm mt-0.5">
                {members.length}명 (학생 16 + 교직원 3)
              </p>
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
                <p className="font-medium text-sm text-blue-600">오전</p>
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
              {act.members.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-1.5">
                  {act.members.map((name, i) => (
                    <span key={i} className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded text-[10px]">
                      {name}
                    </span>
                  ))}
                </div>
              )}
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
