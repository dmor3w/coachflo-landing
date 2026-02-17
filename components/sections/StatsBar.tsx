'use client'

import { TrendingUp, Users, Star, Clock } from 'lucide-react'

const stats = [
  { icon: Users,     value: '10 000+', label: 'тренеров доверяют нам', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100' },
  { icon: TrendingUp,value: '+40%',    label: 'средний рост дохода',   color: 'text-emerald-600',bg: 'bg-emerald-50',border: 'border-emerald-100' },
  { icon: Star,      value: '4.9 / 5', label: 'средняя оценка',        color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
  { icon: Clock,     value: '−7 ч/нед',label: 'экономия времени',      color: 'text-blue-600',  bg: 'bg-blue-50',  border: 'border-blue-100' },
]

export default function StatsBar() {
  return (
    <section className="py-8 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #f0f9ff 100%)' }}>
      {/* Animated orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-violet-300/20 rounded-full blur-[60px] orb-float pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-300/20 rounded-full blur-[50px] orb-float-reverse pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className={`flex items-center gap-4 bg-white border ${s.border} rounded-2xl px-5 py-4 shadow-sm hover:shadow-md transition-shadow`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${s.bg}`}>
                  <Icon size={22} className={s.color} />
                </div>
                <div>
                  <div className={`text-2xl font-black leading-none ${s.color}`}>{s.value}</div>
                  <div className="text-xs text-t-secondary mt-1 leading-tight font-medium">{s.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
