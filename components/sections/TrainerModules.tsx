'use client'

import Image from 'next/image'
import { Users, Dumbbell, Calendar, CreditCard, CheckCircle } from 'lucide-react'
import DecorativeBg from '@/components/ui/DecorativeBg'

const modules = [
  {
    icon: Users,
    title: 'Список клиентов',
    subtitle: 'Все данные под рукой',
    desc: 'Не теряй деньги на хаосе. Карточка каждого клиента — история, оплаты, прогресс — в одном месте. Средний тренер теряет 3–5 клиентов в месяц без системы.',
    points: [
      'Карточка клиента с историей и оплатами',
      'Напоминания о продлениях — клиент не «пропадает»',
      'Видишь, кто платит, кто затихает',
    ],
    accentBg: 'bg-purple-50',
    accentBorder: 'border-purple-100',
    accentIcon: 'bg-purple-100 text-purple-600',
    accentText: 'text-purple-600',
    image: '/images/modules/clients.jpg',
  },
  {
    icon: Dumbbell,
    title: 'Библиотека упражнений',
    subtitle: 'Создавай программы быстро',
    desc: 'Бери больше клиентов без лишней работы. 500+ упражнений с видео — шаблоны, которые переиспользуешь. Экономишь 4–6 часов в неделю.',
    points: [
      '500+ упражнений с видео и описаниями',
      'Шаблоны программ — сохраняй и переиспользуй',
      'Клиент выполняет самостоятельно по инструкции',
    ],
    accentBg: 'bg-blue-50',
    accentBorder: 'border-blue-100',
    accentIcon: 'bg-blue-100 text-blue-600',
    accentText: 'text-blue-600',
    image: '/images/modules/workouts.jpg',
  },
  {
    icon: Calendar,
    title: 'Календарь тренировок',
    subtitle: 'Ни одна тренировка не потеряется',
    desc: 'И ни одна оплата тоже. Расписание всех клиентов с автоматическими напоминаниями.',
    points: [
      'Расписание всех клиентов в одном месте',
      'Автоматические напоминания перед занятием',
      'Перенос и отмена без бесконечной переписки',
    ],
    accentBg: 'bg-emerald-50',
    accentBorder: 'border-emerald-100',
    accentIcon: 'bg-emerald-100 text-emerald-600',
    accentText: 'text-emerald-600',
    image: '/images/modules/nutrition.jpg',
  },
  {
    icon: CreditCard,
    title: 'Финансы',
    subtitle: 'Знай сколько заработал',
    desc: 'И сколько ещё не получил. Полный учёт оплат, долгов и аналитика дохода по месяцам.',
    points: [
      'Учёт оплат и долгов по каждому клиенту',
      'Аналитика дохода по месяцам и клиентам',
      'Уведомление когда заканчивается абонемент',
    ],
    accentBg: 'bg-orange-50',
    accentBorder: 'border-orange-100',
    accentIcon: 'bg-orange-100 text-orange-600',
    accentText: 'text-orange-600',
    image: '/images/modules/finance.jpg',
  },
]

export default function TrainerModules() {
  return (
    <section id="modules" className="py-8 lg:py-12 bg-bg-2 relative overflow-hidden">
      <DecorativeBg variant="blue" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-accent text-sm font-medium">Инструменты тренера</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-t-primary">
            Всё для <span className="text-accent">роста твоего дохода</span>
          </h2>
          <p className="text-t-secondary text-lg max-w-2xl mx-auto">
            Каждый модуль решает одну конкретную задачу —{' '}
            <span className="text-t-primary font-semibold">ты зарабатываешь больше</span> и теряешь меньше
          </p>
        </div>

        {/* 2×2 Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {modules.map((mod) => {
            const Icon = mod.icon
            return (
              <div
                key={mod.title}
                className={`rounded-2xl border ${mod.accentBorder} ${mod.accentBg} overflow-hidden flex flex-col`}
              >
                {/* Small photo strip */}
                <div className="relative h-28 overflow-hidden">
                  <Image
                    src={mod.image}
                    alt={mod.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                  {/* Icon badge over photo */}
                  <div className={`absolute bottom-3 left-4 w-9 h-9 rounded-xl flex items-center justify-center shadow-md ${mod.accentIcon}`}>
                    <Icon size={18} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <div className={`text-xs font-semibold uppercase tracking-wider mb-1 ${mod.accentText}`}>
                    {mod.title}
                  </div>
                  <h3 className="text-xl font-bold text-t-primary mb-2">{mod.subtitle}</h3>
                  <p className="text-t-secondary text-sm leading-relaxed mb-5">{mod.desc}</p>

                  <ul className="space-y-2 mt-auto">
                    {mod.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckCircle size={15} className="text-accent shrink-0 mt-0.5" />
                        <span className="text-t-secondary text-sm leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
