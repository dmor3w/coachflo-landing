'use client'

import { Dumbbell, Building2, User, CheckCircle, ArrowRight } from 'lucide-react'
import DecorativeBg from '@/components/ui/DecorativeBg'

const audiences = [
  {
    icon: Dumbbell,
    tag: 'Для тренера',
    tagNum: '01',
    title: 'Зарабатывай больше с каждым клиентом',
    color: 'bg-violet-600',
    tagBg: 'bg-violet-50 text-violet-700',
    border: 'border-violet-100',
    gradientFrom: 'from-violet-50',
    checkColor: 'text-violet-500',
    stat: { value: '+40%', label: 'средний рост дохода' },
    points: [
      'Увеличь количество клиентов без роста нагрузки',
      'Сократи время на рутину в 7 раз',
      'Повысь вовлечённость и продления',
      'Полная прозрачность тренировочного процесса',
    ],
  },
  {
    icon: Building2,
    tag: 'Для зала / студии',
    tagNum: '02',
    title: 'Управляй бизнесом, а не хаосом',
    color: 'bg-blue-600',
    tagBg: 'bg-blue-50 text-blue-700',
    border: 'border-blue-100',
    gradientFrom: 'from-blue-50',
    checkColor: 'text-blue-500',
    stat: { value: '−60%', label: 'операционных затрат' },
    points: [
      'Прозрачность бизнеса в режиме реального времени',
      'Эффективное управление командой тренеров',
      'Снижение операционных расходов',
      'Единая платформа для всего зала',
    ],
  },
  {
    icon: User,
    tag: 'Для клиента',
    tagNum: '03',
    title: 'Всё для результата — в одном приложении',
    color: 'bg-emerald-600',
    tagBg: 'bg-emerald-50 text-emerald-700',
    border: 'border-emerald-100',
    gradientFrom: 'from-emerald-50',
    checkColor: 'text-emerald-500',
    stat: { value: '×2.3', label: 'дольше остаются' },
    points: [
      'Единый инструмент управления тренировками',
      'Отслеживание результатов в реальном времени',
      'Дневник питания и план от тренера',
      'Прямая связь с тренером в любое время',
    ],
  },
]

export default function AudienceBlocks() {
  return (
    <section className="py-8 lg:py-12 bg-bg-2 relative overflow-hidden">
      <DecorativeBg variant="default" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-accent text-sm font-medium">Ведущее решение для всех участников</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-t-primary">
            Coach Flo — для <span className="text-accent">каждого</span> в индустрии фитнеса
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {audiences.map((a) => {
            const Icon = a.icon
            return (
              <div
                key={a.tag}
                className={`rounded-2xl border ${a.border} bg-white overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
              >
                {/* Gradient header strip */}
                <div className={`bg-gradient-to-r ${a.gradientFrom} to-white px-6 pt-6 pb-4`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-2xl ${a.color} flex items-center justify-center shadow-md`}>
                      <Icon size={22} className="text-white" />
                    </div>
                    <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${a.tagBg}`}>
                      {a.tag}
                    </span>
                  </div>
                  {/* Stat */}
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className={`text-3xl font-black ${a.color.replace('bg-', 'text-')}`}>{a.stat.value}</span>
                    <span className="text-t-secondary text-xs font-semibold uppercase tracking-wide">{a.stat.label}</span>
                  </div>
                  <h3 className="text-base font-bold text-t-primary leading-snug">{a.title}</h3>
                </div>

                {/* Points */}
                <div className="px-6 py-5 flex flex-col flex-1">
                  <ul className="space-y-3">
                    {a.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <CheckCircle size={15} className={`${a.checkColor} shrink-0 mt-0.5`} />
                        <span className="text-t-secondary text-sm leading-snug">{p}</span>
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
