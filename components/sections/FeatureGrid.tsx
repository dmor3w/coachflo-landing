'use client'

import {
  Users, Dumbbell, Calendar, CreditCard, Bell, MessageSquare,
  BarChart2, Apple, FileText, Smartphone, Shield, Zap,
} from 'lucide-react'
import DecorativeBg from '@/components/ui/DecorativeBg'

const features = [
  { icon: Users,         title: 'CRM клиентов',          desc: 'Карточки, история, статус оплат', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100' },
  { icon: Dumbbell,      title: 'База упражнений',        desc: '500+ с видео и описаниями', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100' },
  { icon: Calendar,      title: 'Расписание',             desc: 'Календарь для тренера и клиента', color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100' },
  { icon: CreditCard,    title: 'Финансы',                desc: 'Учёт оплат, долгов, аналитика', color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100' },
  { icon: Bell,          title: 'Напоминания',            desc: 'Авто-уведомления клиентам', color: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-100' },
  { icon: MessageSquare, title: 'Чат с клиентом',         desc: 'Встроенный мессенджер', color: 'text-cyan-600', bg: 'bg-cyan-50', border: 'border-cyan-100' },
  { icon: BarChart2,     title: 'Аналитика',              desc: 'Прогресс, доход, активность', color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100' },
  { icon: Apple,         title: 'Планы питания',          desc: 'Дневник и нормы по КБЖУ', color: 'text-lime-600', bg: 'bg-lime-50', border: 'border-lime-100' },
  { icon: FileText,      title: 'Шаблоны программ',       desc: 'Создавай раз — используй всегда', color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100' },
  { icon: Smartphone,    title: 'PWA для клиента',        desc: 'Приложение без App Store', color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100' },
  { icon: Shield,        title: 'Безопасность данных',    desc: 'Шифрование и резервные копии', color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-100' },
  { icon: Zap,           title: 'Быстрый старт',          desc: 'Настройка за 20 минут', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100' },
]

export default function FeatureGrid() {
  return (
    <section className="py-8 lg:py-12 bg-bg-2 relative overflow-hidden">
      <DecorativeBg variant="warm" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-4">
            <Zap size={13} className="text-accent" />
            <span className="text-accent text-sm font-medium">Все возможности платформы</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-t-primary">
            Всё что нужно тренеру —{' '}
            <span className="text-accent">в одном месте</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className={`group bg-white border ${f.border} rounded-2xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-default relative overflow-hidden`}
              >
                {/* Number watermark */}
                <div className="absolute top-3 right-4 text-5xl font-black text-gray-50 leading-none select-none pointer-events-none">
                  {String(i + 1).padStart(2, '0')}
                </div>

                <div className={`relative w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon size={20} className={f.color} />
                </div>
                <div className="text-sm font-semibold text-t-primary mb-1">{f.title}</div>
                <div className="text-xs text-t-secondary leading-snug">{f.desc}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
