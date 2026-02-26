'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Hero from '@/components/sections/Hero'
import StatsBar from '@/components/sections/StatsBar'
import AudienceBlocks from '@/components/sections/AudienceBlocks'
import TrainerModules from '@/components/sections/TrainerModules'
import ClientSlider from '@/components/sections/ClientSlider'
import InfiniteCarousel from '@/components/sections/InfiniteCarousel'
import Quiz from '@/components/sections/Quiz'
import Pricing from '@/components/sections/Pricing'
import FinalCTA from '@/components/sections/FinalCTA'
import FeatureGrid from '@/components/sections/FeatureGrid'
import Modal from '@/components/ui/Modal'
import LeadForm from '@/components/ui/LeadForm'
import SectionDivider from '@/components/ui/SectionDivider'

export default function Home() {
  const [trialOpen, setTrialOpen] = useState(false)
  const [heroEmail, setHeroEmail] = useState('')

  const openTrial = (email?: string) => {
    if (email) setHeroEmail(email)
    setTrialOpen(true)
  }

  return (
    <>
      <Header onTrial={openTrial} />

      <main>
        <Hero onTrial={openTrial} />
        <StatsBar />
        <SectionDivider />
        <AudienceBlocks />
        <SectionDivider />
        <TrainerModules />
        <SectionDivider />
        <FeatureGrid />
        <SectionDivider />
        <ClientSlider />
        <SectionDivider />
        <InfiniteCarousel />
        <SectionDivider />
        <Quiz onTrial={openTrial} />
        <SectionDivider />
        <Pricing onTrial={openTrial} />
        <FinalCTA onTrial={openTrial} />
      </main>

      {/* Footer */}
      <footer style={{ background: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="text-3xl font-bold text-white mb-3">
                Coach <span className="text-violet-400">Flo</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Платформа «Всё в одном» для персональных тренеров. Управляй клиентами, программами, финансами в одном месте.
              </p>
              <div className="flex items-center gap-2 mt-4">
                <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                <span className="text-white/40 text-xs">2 000+ тренеров уже внутри</span>
              </div>
            </div>
            {/* Product */}
            <div>
              <div className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-4">Продукт</div>
              <ul className="space-y-2.5">
                {[
                  { label: 'Модули тренера', id: 'modules' },
                  { label: 'Блок клиента', id: 'client' },
                  { label: 'Тарифы', id: 'pricing' },
                  { label: 'Отзывы', id: 'reviews' },
                ].map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-white/40 hover:text-white/80 text-sm transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            {/* Legal */}
            <div>
              <div className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-4">Компания</div>
              <ul className="space-y-2.5">
                <li>
                  <a href="/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                    Политика конфиденциальности
                  </a>
                </li>
                <li>
                  <a href="/user-agreement.pdf" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                    Пользовательское соглашение
                  </a>
                </li>
                <li>
                  <a href="https://t.me/coachflo1" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                    Поддержка
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
            <p className="text-white/30 text-xs">© 2026 Coach Flo · Платформа для онлайн-тренеров</p>
            <p className="text-white/20 text-xs">ИП Иванов И.И. · ИНН 000000000000</p>
          </div>
        </div>
      </footer>

      {/* Modal */}
      <Modal
        isOpen={trialOpen}
        onClose={() => setTrialOpen(false)}
        title="Начни бесплатно — 14 дней"
      >
        <p className="text-t-secondary text-sm mb-6">
          Оставь контактные данные — мы пришлём инструкцию по быстрому старту. Карта не нужна.
        </p>
        <LeadForm defaultContact={heroEmail} onSuccess={() => setTimeout(() => setTrialOpen(false), 2000)} />
      </Modal>
    </>
  )
}
