'use client'

import { useState } from 'react'
import { Check, Sparkles, BadgePercent } from 'lucide-react'
import DecorativeBg from '@/components/ui/DecorativeBg'

const periods = [
  { label: '1 месяц', months: 1, discount: 0 },
  { label: '3 месяца', months: 3, discount: 10 },
  { label: '6 месяцев', months: 6, discount: 15 },
  { label: '12 месяцев', months: 12, discount: 25 },
]

const tiers = [
  {
    name: 'Старт',
    clients: 'до 5 клиентов',
    price: 390,
    originalPrice: 557,
    features: [
      'До 5 активных клиентов',
      'Приложение для клиентов',
      'Библиотека упражнений',
      'Финансовый учёт',
      'Базовая аналитика',
    ],
    popular: false,
    dark: false,
  },
  {
    name: 'Базовый',
    clients: '5–10 клиентов',
    price: 890,
    originalPrice: 1271,
    features: [
      'До 10 активных клиентов',
      'Всё из Старт',
      'Планы питания',
      'Календарь и расписание',
      'Уведомления клиентам',
      'Чат с клиентом',
    ],
    popular: true,
    dark: true,
  },
  {
    name: 'Про',
    clients: '10–25 клиентов',
    price: 1490,
    originalPrice: 2129,
    features: [
      'До 25 активных клиентов',
      'Всё из Базового',
      'Детальная аналитика',
      'Шаблоны программ',
      'Приоритетная поддержка',
      'API-интеграции',
    ],
    popular: false,
    dark: false,
  },
  {
    name: 'Бизнес',
    clients: 'от 25 клиентов',
    price: 2100,
    originalPrice: 3000,
    features: [
      'Без ограничений по клиентам',
      'Всё из Про',
      'Несколько тренеров',
      'Брендирование (White Label)',
      'Персональный менеджер',
      'SLA поддержка',
    ],
    popular: false,
    dark: false,
  },
]

function getActiveTier(clients: number) {
  if (clients <= 5) return 0
  if (clients <= 10) return 1
  if (clients <= 25) return 2
  return 3
}

interface PricingProps {
  onTrial: (email?: string) => void
}

export default function Pricing({ onTrial }: PricingProps) {
  const [clients, setClients] = useState(8)
  const [periodIdx, setPeriodIdx] = useState(0)
  const activeTier = getActiveTier(clients)
  const period = periods[periodIdx]

  const calcPrice = (base: number) =>
    Math.round(base * (1 - period.discount / 100))

  return (
    <section id="pricing" className="py-8 lg:py-12 relative overflow-hidden bg-white">

      <DecorativeBg variant="default" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-4">
            <Sparkles size={13} className="text-accent" />
            <span className="text-accent text-sm font-medium">Тарифы</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-t-primary">
            Честные цены.{' '}
            <span className="text-accent">Начни бесплатно.</span>
          </h2>
          <p className="text-t-secondary text-lg max-w-xl mx-auto">
            <span className="text-t-primary font-semibold">14 дней без карты</span>, потом выбираешь свой план.{' '}
            <span className="text-accent font-bold">Скидка 30%</span> для тех кто начинает сейчас.{' '}
            <span className="text-emerald-600 font-semibold">Тариф окупается с первого же клиента.</span>
          </p>
        </div>

        {/* Period switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-bg-3 rounded-xl p-1 gap-1">
            {periods.map((p, i) => (
              <button
                key={p.label}
                onClick={() => setPeriodIdx(i)}
                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  i === periodIdx
                    ? 'bg-white text-t-primary shadow-sm'
                    : 'text-t-secondary hover:text-t-primary'
                }`}
              >
                {p.label}
                {p.discount > 0 && (
                  <span className={`ml-1.5 text-xs font-bold ${i === periodIdx ? 'text-emerald-600' : 'text-emerald-500'}`}>
                    −{p.discount}%
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Slider calculator */}
        <div className="relative rounded-2xl p-6 lg:p-8 mb-8 overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)', border: '1px solid #ddd6fe' }}>
          <div className="absolute right-6 top-6 text-violet-200 pointer-events-none">
            <Sparkles size={48} />
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <div className="text-lg font-semibold text-t-primary">Сколько клиентов ты ведёшь?</div>
              <div className="text-t-secondary text-sm mt-0.5">Двигай ползунок — тариф подберётся автоматически</div>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-accent">{clients}</div>
              <div className="text-xs text-t-secondary">клиентов</div>
            </div>
          </div>
          <input
            type="range"
            min={1}
            max={40}
            value={clients}
            onChange={(e) => setClients(Number(e.target.value))}
            className="w-full accent-accent"
          />
          <div className="flex justify-between text-xs text-t-secondary mt-2">
            <span>1</span><span>5</span><span>10</span><span>25</span><span>40+</span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
          {tiers.map((tier, i) => {
            const isActive = i === activeTier
            const isDark = tier.dark

            if (isDark) {
              return (
                <div
                  key={tier.name}
                  className="relative rounded-2xl p-6 shadow-2xl shadow-violet-900/20 lg:-mt-4 lg:pb-8"
                  style={{ background: '#0F172A' }}
                >
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-violet-500/30">
                    <Sparkles size={11} />
                    Популярный
                  </div>

                  {/* Orb decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative mb-4">
                    <div className="text-xs font-semibold text-violet-400 mb-1">{tier.name}</div>
                    <div className="text-xs text-white/40">{tier.clients}</div>
                  </div>

                  <div className="relative mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-bold text-white">{calcPrice(tier.price)} ₽</span>
                      <span className="text-white/40 text-sm">/мес</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-white/30 text-sm line-through">{tier.price} ₽</span>
                      <span className="text-xs font-semibold text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">
                        −{30 + period.discount}%
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6 relative">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-white/70">
                        <Check size={14} className="text-violet-400 shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => onTrial()}
                    className="relative w-full rounded-xl py-3 text-sm font-bold bg-violet-600 hover:bg-violet-500 text-white transition-all shadow-lg shadow-violet-900/40"
                  >
                    Попробовать 14 дней
                  </button>
                </div>
              )
            }

            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl border p-6 transition-all duration-300 ${
                  isActive
                    ? 'border-accent/50 bg-accent/5 shadow-lg shadow-accent/10'
                    : 'border-border bg-white hover:border-accent/30 hover:shadow-md'
                }`}
              >
                {isActive && !tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white border border-accent text-accent text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Твой план
                  </div>
                )}

                <div className="mb-4">
                  <div className={`text-xs font-semibold mb-1 ${isActive ? 'text-accent' : 'text-t-secondary'}`}>
                    {tier.name}
                  </div>
                  <div className="text-xs text-t-secondary">{tier.clients}</div>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-t-primary">{calcPrice(tier.price)} ₽</span>
                    <span className="text-t-secondary text-sm">/мес</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-t-secondary text-sm line-through">{tier.price} ₽</span>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                      −{30 + period.discount}%
                    </span>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-xs text-t-secondary">
                      <Check size={14} className="text-accent shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => onTrial()}
                  className={`w-full rounded-xl py-3 text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-accent hover:bg-accent-dark text-white shadow-md shadow-accent/20'
                      : 'bg-bg-3 hover:bg-bg-2 border border-border text-t-secondary hover:text-t-primary'
                  }`}
                >
                  Попробовать 14 дней
                </button>
              </div>
            )
          })}
        </div>

        <p className="text-center text-t-secondary text-sm mt-8">
          Карта не нужна · Отмена в любой момент · Скидка навсегда для тех кто подключается сейчас
        </p>
      </div>
    </section>
  )
}
