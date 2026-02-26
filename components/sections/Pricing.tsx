'use client'

import { Check, X as XIcon, Sparkles } from 'lucide-react'
import DecorativeBg from '@/components/ui/DecorativeBg'

const tiers = [
  {
    name: 'Старт',
    clients: 'до 5 клиентов',
    price: 99,
    features: [
      { text: 'До 5 клиентов', included: true },
      { text: 'Базовые инструменты', included: true },
      { text: 'Персональные программы', included: true },
      { text: 'Трекинг питания', included: false },
      { text: 'Командное управление', included: false },
    ],
    cta: 'trial',
  },
  {
    name: 'Базовый',
    clients: '5–12 клиентов',
    price: 990,
    features: [
      { text: 'До 12 клиентов', included: true },
      { text: 'Все функции Starter', included: true },
      { text: 'Трекинг питания', included: true },
      { text: 'Продвинутая аналитика', included: false },
      { text: 'Командное управление', included: false },
    ],
    cta: 'trial',
  },
  {
    name: 'Про',
    clients: '12–30 клиентов',
    price: 1490,
    features: [
      { text: 'До 30 клиентов', included: true },
      { text: 'Все функции Base', included: true },
      { text: 'Трекинг питания', included: true },
      { text: 'Продвинутая аналитика', included: true },
      { text: 'Командное управление', included: false },
    ],
    cta: 'trial',
  },
  {
    name: 'Индивидуальный',
    clients: 'любые требования',
    price: 0,
    features: [
      { text: '30+ клиентов', included: true },
      { text: 'Персональная поддержка', included: true },
      { text: 'Индивидуальная настройка', included: true },
      { text: 'Масштабирование без боли', included: true },
    ],
    cta: 'telegram',
  },
]

interface PricingProps {
  onTrial: (email?: string) => void
}

export default function Pricing({ onTrial }: PricingProps) {
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
            <span className="text-emerald-600 font-semibold">Тариф окупается с первого же клиента.</span>
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className="relative rounded-2xl border border-border bg-white p-6 hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">
                <div className="text-xs font-semibold text-t-secondary mb-1">
                  {tier.name}
                </div>
                <div className="text-xs text-t-secondary">{tier.clients}</div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  {tier.price === 0 ? (
                    <span className="text-3xl font-bold text-t-primary">Договорная</span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-t-primary">{tier.price} ₽</span>
                      <span className="text-t-secondary text-sm">/мес</span>
                    </>
                  )}
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {tier.features.map((f) => (
                  <li key={f.text} className={`flex items-start gap-2 text-xs ${f.included ? 'text-t-secondary' : 'text-t-secondary/40'}`}>
                    {f.included ? (
                      <Check size={14} className="text-accent shrink-0 mt-0.5" />
                    ) : (
                      <XIcon size={14} className="text-t-secondary/30 shrink-0 mt-0.5" />
                    )}
                    {f.text}
                  </li>
                ))}
              </ul>

              {tier.cta === 'telegram' ? (
                <a
                  href="https://t.me/coachflo1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center rounded-xl py-3 text-sm font-semibold bg-accent hover:bg-accent-dark text-white transition-all"
                >
                  Написать в Telegram
                </a>
              ) : (
                <button
                  onClick={() => onTrial()}
                  className="w-full rounded-xl py-3 text-sm font-semibold bg-bg-3 hover:bg-bg-2 border border-border text-t-secondary hover:text-t-primary transition-all"
                >
                  Попробовать 14 дней
                </button>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-t-secondary text-sm mt-8">
          Карта не нужна · Отмена в любой момент
        </p>
      </div>
    </section>
  )
}
