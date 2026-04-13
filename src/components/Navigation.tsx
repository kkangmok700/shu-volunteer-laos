"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "대시보드", icon: "📊" },
  { href: "/schedule", label: "일정", icon: "📅" },
  { href: "/team", label: "팀원", icon: "👥" },
  { href: "/activities", label: "활동", icon: "🎯" },
  { href: "/budget", label: "예산", icon: "💰" },
  { href: "/emergency", label: "비상연락", icon: "🚨" },
  { href: "/journal", label: "활동일지", icon: "📝" },
  { href: "/notices", label: "공지사항", icon: "📢" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-slate-900 text-white">
        <div className="flex items-center h-16 px-6 border-b border-slate-700">
          <div>
            <h1 className="text-lg font-bold">SHU Volunteer</h1>
            <p className="text-xs text-slate-400">라오스 해외봉사</p>
          </div>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive
                    ? "bg-blue-600 text-white font-medium"
                    : "text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t border-slate-700">
          <p className="text-xs text-slate-400">삼육보건대학교</p>
          <p className="text-xs text-slate-400">혁신지원사업단 / 사회봉사단</p>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 safe-area-bottom">
        <div className="grid grid-cols-4 gap-0">
          {navItems.slice(0, 4).map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center py-2 text-xs ${
                  isActive ? "text-blue-600 font-medium" : "text-gray-500"
                }`}
              >
                <span className="text-xl mb-0.5">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
        <div className="grid grid-cols-4 gap-0">
          {navItems.slice(4).map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center py-2 text-xs ${
                  isActive ? "text-blue-600 font-medium" : "text-gray-500"
                }`}
              >
                <span className="text-xl mb-0.5">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
