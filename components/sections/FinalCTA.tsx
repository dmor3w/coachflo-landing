'use client'

import { ArrowRight, Star, TrendingUp, Shield, Zap } from 'lucide-react'

const testimonials = [
  {
    name: 'Алексей М.',
    city: 'Москва',
    text: 'За первый месяц вернул двух клиентов которых уже считал потерянными. CoachFlo напоминает сам — я просто работаю.',
    gain: '+38 000 ₽/мес',
    initials: 'АМ',
    color: 'bg-violet-100 text-violet-700',
  },
  {
    name: 'Марина К.',
    city: 'СПб',
    text: 'Раньше таблицы, WhatsApp, голова в хаосе. Теперь всё в одном — и клиенты видят свой прогресс, не уходят.',
    gain: '+22 000 ₽/мес',
    initials: 'МК',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Дмитрий С.',
    city: 'Екатеринбург',
    text: 'Продления выросли с 40% до 78% за 3 месяца. Клиенты сами хотят продолжать когда видят динамику.',
    gain: '+51 000 ₽/мес',
    initials: 'ДС',
    color: 'bg-blue-100 text-blue-700',
  },
]

const guarantees = [
  { icon: Shield, text: '14 дней бесплатно — карта не нужна' },
  { icon: Zap, text: 'Настройка за 20 минут' },
  { icon: TrendingUp, text: 'Первые результаты в первый месяц' },
]

interface FinalCTAProps {
  onTrial: (email?: string) => void
}

export default function FinalCTA({ onTrial }: FinalCTAProps) {
  return (
    <section className="relative overflow-hidden" style={{ background: '#0F172A' }}>

      {/* Decorative orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-violet-800/15 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl p-6 flex flex-col gap-4"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-white/70 text-sm leading-relaxed flex-1">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold ${t.color}`}>
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.city}</div>
                  </div>
                </div>
                <div className="text-emerald-400 text-sm font-bold">{t.gain}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main CTA block */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-sm font-medium text-violet-300"
            style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)' }}>
            <span className="w-2 h-2 bg-violet-400 rounded-full animate-pulse" />
            Начни зарабатывать больше сегодня
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] text-white">
            Раскрой потенциал с{' '}
            <span className="text-violet-400">CoachFlo</span>
          </h2>

          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-6">
            Управляй, масштабируй, зарабатывай.{' '}
            <span className="text-white font-semibold">Платформа №1</span> для персональных тренеров России.{' '}
            <span className="text-violet-300 font-semibold">Окупается за первый месяц — гарантируем.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button
              onClick={() => onTrial()}
              className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl px-8 py-4 transition-all text-base shadow-lg shadow-violet-900/40"
            >
              Попробовать бесплатно 14 дней <ArrowRight size={18} />
            </button>
          </div>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {guarantees.map((g) => {
              const Icon = g.icon
              return (
                <div key={g.text} className="flex items-center gap-2 text-white/70 text-sm font-medium">
                  <Icon size={14} className="text-violet-400 shrink-0" />
                  {g.text}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
