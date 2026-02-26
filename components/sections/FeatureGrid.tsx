'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Users, Dumbbell, Calendar, CreditCard, Bell,
  BarChart2, Apple, FileText, Smartphone, Shield, Zap, X, Check,
} from 'lucide-react'
import Image from 'next/image'
import DecorativeBg from '@/components/ui/DecorativeBg'

const features = [
  {
    icon: Users, title: 'CRM клиентов', desc: 'Карточки, история, статус оплат',
    color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-100',
    details: 'Полноценная CRM-система для управления клиентской базой. Карточка каждого клиента содержит историю тренировок, статус оплат, прогресс и заметки тренера.',
    benefits: ['Быстрый поиск и фильтрация по статусу', 'История всех взаимодействий', 'Контроль оплат и задолженностей'],
    screenshot: '/images/screenshots/crm.png',
  },
  {
    icon: Dumbbell, title: 'База упражнений', desc: '500+ с видео и описаниями',
    color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-100',
    details: 'Библиотека из 500+ упражнений с видео-демонстрациями и подробными описаниями техники. Создавайте свои упражнения, группируйте по мышечным группам.',
    benefits: ['Видео-демонстрация каждого упражнения', 'Группировка по мышечным группам', 'Добавление собственных упражнений'],
    screenshot: '/images/screenshots/exercises.png',
  },
  {
    icon: Calendar, title: 'Расписание', desc: 'Календарь для тренера и клиента',
    color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-100',
    details: 'Единый календарь для всех клиентов с автоматическими напоминаниями. Клиенты видят своё расписание и могут переносить тренировки без переписки.',
    benefits: ['Автоматические напоминания', 'Перенос тренировок в один клик', 'Синхронизация с телефоном клиента'],
    screenshot: '/images/screenshots/calendar.png',
  },
  {
    icon: CreditCard, title: 'Финансы', desc: 'Учёт оплат, долгов, аналитика',
    color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-100',
    details: 'Полный учёт оплат и задолженностей по каждому клиенту. Аналитика дохода по месяцам и автоматические уведомления о завершении абонемента.',
    benefits: ['Аналитика дохода по месяцам', 'Автоуведомления об окончании абонемента', 'Контроль задолженностей'],
    screenshot: '/images/screenshots/finance.png',
  },
  {
    icon: Bell, title: 'Напоминания', desc: 'Авто-уведомления клиентам',
    color: 'text-pink-600', bg: 'bg-pink-50', border: 'border-pink-100',
    details: 'Автоматические напоминания клиентам о предстоящих тренировках, продлении абонемента и пропущенных занятиях.',
    benefits: ['Настраиваемые шаблоны сообщений', 'Гибкое время отправки', 'Напоминания о продлении'],
    screenshot: '/images/screenshots/notifications.png',
  },
  {
    icon: BarChart2, title: 'Аналитика', desc: 'Прогресс, доход, активность',
    color: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-100',
    details: 'Детальная аналитика по каждому клиенту и бизнесу в целом. Графики прогресса, динамика дохода и показатели удержания.',
    benefits: ['Графики прогресса клиентов', 'Динамика дохода', 'Показатели удержания'],
    screenshot: '/images/screenshots/analytics.png',
  },
  {
    icon: Apple, title: 'Планы питания', desc: 'Дневник и нормы по КБЖУ',
    color: 'text-lime-600', bg: 'bg-lime-50', border: 'border-lime-100',
    details: 'Создавайте персональные планы питания с расчётом КБЖУ. Клиенты ведут дневник питания, а вы видите соблюдение плана в реальном времени.',
    benefits: ['Автоматический расчёт КБЖУ', 'Дневник питания для клиента', 'Контроль соблюдения плана'],
    screenshot: '/images/screenshots/nutrition.png',
  },
  {
    icon: FileText, title: 'Шаблоны программ', desc: 'Создавай раз — используй всегда',
    color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-100',
    details: 'Создавайте шаблоны тренировочных программ и применяйте их к новым клиентам в один клик. Экономьте часы на составлении программ.',
    benefits: ['Библиотека готовых шаблонов', 'Применение к клиенту в один клик', 'Экономия до 6 часов в неделю'],
    screenshot: '/images/screenshots/templates.png',
  },
  {
    icon: Smartphone, title: 'PWA для клиента', desc: 'Приложение без App Store',
    color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-100',
    details: 'Клиент устанавливает приложение прямо из браузера — без App Store и Google Play. Работает офлайн, выглядит как нативное приложение.',
    benefits: ['Установка за 10 секунд', 'Работает без интернета', 'Push-уведомления'],
    screenshot: '/images/screenshots/pwa.jpg',
  },
  {
    icon: Shield, title: 'Безопасность данных', desc: 'Шифрование и резервные копии',
    color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-100',
    details: 'Все данные шифруются при передаче и хранении. Автоматические резервные копии и соответствие требованиям защиты персональных данных.',
    benefits: ['Шифрование данных', 'Автоматические бэкапы', 'Соответствие 152-ФЗ'],
    screenshot: '/images/screenshots/security.jpg',
  },
  {
    icon: Zap, title: 'Быстрый старт', desc: 'Настройка за 20 минут',
    color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-100',
    details: 'Простая регистрация и пошаговая настройка. Импортируйте клиентов из Excel, настройте расписание и начните работать за 20 минут.',
    benefits: ['Импорт клиентов из Excel', 'Пошаговый мастер настройки', 'Готовые шаблоны для старта'],
    screenshot: '/images/screenshots/quickstart.jpg',
  },
]

export default function FeatureGrid() {
  const [selected, setSelected] = useState<number | null>(null)

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
                onClick={() => setSelected(i)}
                className={`group bg-white border ${f.border} rounded-2xl p-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer relative overflow-hidden`}
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

      {/* Feature detail modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
              >
                <X size={18} className="text-t-primary" />
              </button>

              {/* Header with icon and title */}
              <div className="p-6 pb-4">
                <div className="flex items-center gap-3 mb-1">
                  <div className={`w-11 h-11 rounded-xl ${features[selected].bg} flex items-center justify-center shrink-0`}>
                    {(() => {
                      const Icon = features[selected].icon
                      return <Icon size={22} className={features[selected].color} />
                    })()}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-t-primary">{features[selected].title}</h3>
                    <p className="text-sm text-t-secondary">{features[selected].desc}</p>
                  </div>
                </div>
              </div>

              {/* Screenshot area — large, with soft background */}
              <div className="mx-6 rounded-xl overflow-hidden bg-bg-3 border border-border p-3">
                <Image
                  src={features[selected].screenshot}
                  alt={features[selected].title}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                  sizes="(max-width: 768px) 100vw, 672px"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.style.display = 'none'
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6 pt-5">
                <p className="text-sm text-t-secondary leading-relaxed mb-4">
                  {features[selected].details}
                </p>

                {/* Benefits list */}
                <div className="bg-bg-2 rounded-xl p-4">
                  <div className="text-xs font-semibold text-t-primary uppercase tracking-wider mb-3">Что входит</div>
                  <ul className="space-y-2">
                    {features[selected].benefits.map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-t-secondary">
                        <div className={`w-5 h-5 rounded-md ${features[selected].bg} flex items-center justify-center shrink-0`}>
                          <Check size={12} className={features[selected].color} />
                        </div>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
