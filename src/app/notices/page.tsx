"use client";

import { useState, useEffect } from "react";

interface Notice {
  id: string;
  title: string;
  content: string;
  category: "공지" | "긴급" | "일정" | "기타";
  pinned: boolean;
  createdAt: string;
}

const STORAGE_KEY = "shu-volunteer-notices";

const defaultNotices: Notice[] = [
  {
    id: "1",
    title: "봉사대 출발 안내",
    content: "5월 17일(일) 인천공항 집결 시간 및 장소를 확인해주세요.\n- 집결 시간: 오후 (정확한 시간 추후 공지)\n- 집결 장소: 인천공항 제1터미널\n- 여권, 항공권 사본, 여행자보험 서류 필참",
    category: "공지",
    pinned: true,
    createdAt: "2026-05-10T09:00:00",
  },
  {
    id: "2",
    title: "현지 준비물 체크리스트",
    content: "다음 물품을 반드시 준비해주세요:\n- 여권 (유효기간 6개월 이상)\n- 봉사활동 유니폼\n- 개인 위생용품\n- 상비약 (소화제, 진통제, 지사제 등)\n- 전압 어댑터 (220V, A/B/C/E/F 타입)\n- 자외선 차단제, 우산 (우기 대비)",
    category: "일정",
    pinned: true,
    createdAt: "2026-05-08T14:00:00",
  },
  {
    id: "3",
    title: "현지 에티켓 안내",
    content: "라오스 현지에서 지켜야 할 에티켓:\n- 사원 방문 시 어깨와 무릎을 가리는 복장\n- 머리를 함부로 만지지 않기\n- 발을 사람이나 불상 쪽으로 향하지 않기\n- 공공장소에서 큰 소리 자제",
    category: "기타",
    pinned: false,
    createdAt: "2026-04-03T15:00:00",
  },
];

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState<Notice["category"]>("공지");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setNotices(JSON.parse(saved));
    } else {
      setNotices(defaultNotices);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultNotices));
    }
  }, []);

  function addNotice() {
    if (!title.trim() || !content.trim()) return;
    const newNotice: Notice = {
      id: Date.now().toString(),
      title,
      content,
      category,
      pinned: false,
      createdAt: new Date().toISOString(),
    };
    const updated = [newNotice, ...notices];
    setNotices(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setTitle("");
    setContent("");
    setShowForm(false);
  }

  function deleteNotice(id: string) {
    const updated = notices.filter((n) => n.id !== id);
    setNotices(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  function togglePin(id: string) {
    const updated = notices.map((n) => n.id === id ? { ...n, pinned: !n.pinned } : n);
    setNotices(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  const sorted = [...notices].sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  const categoryColors: Record<string, string> = {
    "공지": "bg-blue-100 text-blue-700",
    "긴급": "bg-red-100 text-red-700",
    "일정": "bg-green-100 text-green-700",
    "기타": "bg-gray-100 text-gray-700",
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900">공지사항</h1>
          <p className="text-slate-500 mt-1">팀 내 공지 및 안내</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          {showForm ? "취소" : "+ 새 공지"}
        </button>
      </div>

      {/* New Notice Form */}
      {showForm && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6 animate-fade-in">
          <h3 className="font-bold text-lg mb-4">새 공지 작성</h3>
          <div className="space-y-3">
            <div className="flex gap-3">
              <input
                type="text"
                placeholder="제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Notice["category"])}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                <option value="공지">공지</option>
                <option value="긴급">긴급</option>
                <option value="일정">일정</option>
                <option value="기타">기타</option>
              </select>
            </div>
            <textarea
              placeholder="내용을 입력하세요..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-32 border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none"
            />
            <button
              onClick={addNotice}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700"
            >
              등록
            </button>
          </div>
        </div>
      )}

      {/* Notices List */}
      <div className="space-y-4">
        {sorted.map((notice) => (
          <div
            key={notice.id}
            className={`bg-white rounded-xl border p-5 ${
              notice.pinned ? "border-amber-300 shadow-sm" : "border-gray-200"
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2 mb-2">
                {notice.pinned && <span className="text-amber-500">📌</span>}
                <span className={`text-xs px-2 py-0.5 rounded font-medium ${categoryColors[notice.category]}`}>
                  {notice.category}
                </span>
                <h3 className="font-bold">{notice.title}</h3>
              </div>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => togglePin(notice.id)}
                  className="text-xs text-slate-400 hover:text-amber-500 p-1"
                  title={notice.pinned ? "고정 해제" : "고정"}
                >
                  📌
                </button>
                <button
                  onClick={() => deleteNotice(notice.id)}
                  className="text-xs text-slate-400 hover:text-red-500 p-1"
                  title="삭제"
                >
                  🗑️
                </button>
              </div>
            </div>
            <p className="text-sm text-slate-700 whitespace-pre-wrap">{notice.content}</p>
            <p className="text-xs text-slate-400 mt-3">
              {new Date(notice.createdAt).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
