"use client";

import { income, expenses, totalIncome, totalProjectFund, totalSelfFund } from "@/data/budget";

function formatKRW(n: number) {
  return n.toLocaleString("ko-KR") + "원";
}

export default function BudgetPage() {
  const projectTotal = expenses.reduce((s, e) => s + e.projectFund, 0);
  const selfTotal = expenses.reduce((s, e) => s + e.selfFund, 0);

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto animate-fade-in">
      <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">예산 관리</h1>
      <p className="text-slate-500 mb-6">수입 및 지출 세부 계획</p>

      {/* Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl p-5">
          <p className="text-blue-200 text-sm">총 예산</p>
          <p className="text-2xl font-bold mt-1">{formatKRW(totalIncome)}</p>
        </div>
        <div className="bg-gradient-to-br from-green-500 to-green-700 text-white rounded-xl p-5">
          <p className="text-green-200 text-sm">혁신지원사업비</p>
          <p className="text-2xl font-bold mt-1">{formatKRW(totalProjectFund)}</p>
          <p className="text-green-200 text-xs mt-1">{((totalProjectFund / totalIncome) * 100).toFixed(1)}%</p>
        </div>
        <div className="bg-gradient-to-br from-orange-500 to-orange-700 text-white rounded-xl p-5">
          <p className="text-orange-200 text-sm">자부담금</p>
          <p className="text-2xl font-bold mt-1">{formatKRW(totalSelfFund)}</p>
          <p className="text-orange-200 text-xs mt-1">600,000원 × 15명</p>
        </div>
      </div>

      {/* Income Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
        <h3 className="font-bold text-lg mb-4">수입 내역</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="text-left px-4 py-2 font-medium text-slate-600">항목</th>
                <th className="text-left px-4 py-2 font-medium text-slate-600">세부</th>
                <th className="text-right px-4 py-2 font-medium text-slate-600">금액</th>
              </tr>
            </thead>
            <tbody>
              {income.map((item, i) => (
                <tr key={i} className="border-b border-gray-100">
                  <td className="px-4 py-3 font-medium">{item.category}</td>
                  <td className="px-4 py-3 text-slate-600">{item.detail}</td>
                  <td className="px-4 py-3 text-right font-mono">{formatKRW(item.amount)}</td>
                </tr>
              ))}
              <tr className="bg-blue-50 font-bold">
                <td className="px-4 py-3" colSpan={2}>수입 합계</td>
                <td className="px-4 py-3 text-right font-mono">{formatKRW(totalIncome)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Expense Table */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-lg mb-4">지출 내역</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-50 border-b">
                <th className="text-left px-4 py-2 font-medium text-slate-600">항목</th>
                <th className="text-left px-4 py-2 font-medium text-slate-600">세부 내역</th>
                <th className="text-right px-4 py-2 font-medium text-slate-600">혁신사업비</th>
                <th className="text-right px-4 py-2 font-medium text-slate-600">자부담금</th>
                <th className="text-right px-4 py-2 font-medium text-slate-600">소계</th>
              </tr>
            </thead>
            <tbody>
              {expenses.map((item, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-4 py-3 font-medium">{item.category}</td>
                  <td className="px-4 py-3 text-slate-600">{item.detail}</td>
                  <td className="px-4 py-3 text-right font-mono">
                    {item.projectFund > 0 ? formatKRW(item.projectFund) : "-"}
                  </td>
                  <td className="px-4 py-3 text-right font-mono">
                    {item.selfFund > 0 ? formatKRW(item.selfFund) : "-"}
                  </td>
                  <td className="px-4 py-3 text-right font-mono font-medium">
                    {formatKRW(item.projectFund + item.selfFund)}
                  </td>
                </tr>
              ))}
              <tr className="bg-blue-50 font-bold">
                <td className="px-4 py-3" colSpan={2}>합계</td>
                <td className="px-4 py-3 text-right font-mono">{formatKRW(projectTotal)}</td>
                <td className="px-4 py-3 text-right font-mono">{formatKRW(selfTotal)}</td>
                <td className="px-4 py-3 text-right font-mono">{formatKRW(projectTotal + selfTotal)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Budget Chart - Simple Bar */}
      <div className="mt-6 bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="font-bold text-lg mb-4">지출 비율</h3>
        <div className="space-y-3">
          {expenses
            .filter((e) => e.projectFund + e.selfFund > 0)
            .sort((a, b) => (b.projectFund + b.selfFund) - (a.projectFund + a.selfFund))
            .map((item, i) => {
              const total = item.projectFund + item.selfFund;
              const pct = (total / totalIncome) * 100;
              return (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium">{item.category}</span>
                    <span className="text-slate-500">{formatKRW(total)} ({pct.toFixed(1)}%)</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3">
                    <div
                      className="bg-blue-500 h-3 rounded-full transition-all"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
