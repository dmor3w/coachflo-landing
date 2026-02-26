'use client'

import { useState } from 'react'
import { LayoutDashboard, Calendar, Dumbbell, TrendingUp, Apple } from 'lucide-react'

const tabs = [
  {
    id: 'dashboard',
    label: 'Дэшборд',
    icon: LayoutDashboard,
    title: 'Клиент видит свой прогресс',
    desc: 'Мотивированный клиент — это клиент, который продлевает. Дэшборд показывает достижения, цели и историю тренировок в красивом формате.',
    mockContent: (
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-t-secondary">Привет,</div>
            <div className="text-xl font-bold">Анна 👋</div>
          </div>
          <div className="text-right">
            <div className="text-xs text-t-secondary">Серия</div>
            <div className="text-2xl font-bold text-accent">12 дней</div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Тренировок', value: '48' },
            { label: 'Снижено кг', value: '−5.2' },
            { label: 'Недель', value: '12' },
          ].map((s) => (
            <div key={s.label} className="bg-bg-3 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-accent">{s.value}</div>
              <div className="text-xs text-t-secondary">{s.label}</div>
            </div>
          ))}
        </div>
        <div className="bg-bg-3 rounded-xl p-4">
          <div className="text-xs text-t-secondary mb-2">Следующая тренировка</div>
          <div className="text-sm font-semibold">Силовая A · Сегодня 18:00</div>
        </div>
      </div>
    ),
  },
  {
    id: 'calendar',
    label: 'Календарь',
    icon: Calendar,
    title: 'Расписание всегда под рукой',
    desc: 'Клиент видит занятия, получает напоминания и не пропускает тренировки. Меньше пропусков — больше результат — дольше остаётся с тобой.',
    mockContent: (
      <div className="p-6 space-y-3">
        <div className="text-sm font-semibold mb-4">Февраль 2026</div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs text-t-secondary mb-2">
          {['Пн','Вт','Ср','Чт','Пт','Сб','Вс'].map(d => <div key={d}>{d}</div>)}
        </div>
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {Array.from({length: 28}, (_, i) => i + 1).map(d => (
            <div
              key={d}
              className={`py-1.5 rounded-lg ${
                [3,6,10,13,17,20,24].includes(d)
                  ? 'bg-accent text-white font-semibold'
                  : 'text-t-secondary hover:bg-bg-3'
              }`}
            >
              {d}
            </div>
          ))}
        </div>
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-3 mt-2">
          <div className="text-xs text-accent font-semibold">Сегодня · 18:00</div>
          <div className="text-sm text-t-primary mt-0.5">Силовая тренировка А</div>
        </div>
      </div>
    ),
  },
  {
    id: 'program',
    label: 'Программа тренировок',
    icon: Dumbbell,
    title: 'Программа у клиента в телефоне',
    desc: 'Клиент тренируется по твоей программе даже дома. Видит упражнения, веса, подходы. Ты не объясняешь по 10 раз — они видят всё сами.',
    mockContent: (
      <div className="p-6 space-y-3">
        <div className="text-sm font-semibold">Силовая А · Неделя 3</div>
        {[
          { name: 'Жим лёжа', sets: '4×8', weight: '70 кг' },
          { name: 'Приседания', sets: '4×10', weight: '80 кг' },
          { name: 'Тяга блока', sets: '3×12', weight: '55 кг' },
          { name: 'Жим плечами', sets: '3×10', weight: '30 кг' },
        ].map((ex, i) => (
          <div key={ex.name} className={`flex items-center gap-3 p-3 rounded-xl border ${i === 0 ? 'bg-accent/10 border-accent/30' : 'bg-bg-3 border-border'}`}>
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-accent text-white' : 'bg-bg-2 text-t-secondary'}`}>{i+1}</div>
            <div className="flex-1">
              <div className="text-sm font-medium">{ex.name}</div>
              <div className="text-xs text-t-secondary">{ex.sets} · {ex.weight}</div>
            </div>
            {i === 0 && <div className="text-accent text-xs font-semibold">✓ Выполнено</div>}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'metrics',
    label: 'Метрики',
    icon: TrendingUp,
    title: 'Прогресс виден — клиент остаётся',
    desc: 'Клиент видит вес, объёмы, силовые показатели в динамике. Когда прогресс очевиден — не уходят. Это прямо влияет на продления и твой доход.',
    mockContent: (
      <div className="p-6 space-y-4">
        <div className="text-sm font-semibold">Прогресс за 3 месяца</div>
        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'Вес', start: 78, now: 73.2, unit: 'кг', color: 'text-green-400' },
            { label: 'Жир', start: 24, now: 19.5, unit: '%', color: 'text-green-400' },
            { label: 'Жим', start: 60, now: 72, unit: 'кг', color: 'text-blue-400' },
            { label: 'Приседания', start: 70, now: 90, unit: 'кг', color: 'text-purple-400' },
          ].map((m) => (
            <div key={m.label} className="bg-bg-3 rounded-xl p-3">
              <div className="text-xs text-t-secondary">{m.label}</div>
              <div className="flex items-end gap-1 mt-1">
                <span className={`text-xl font-bold ${m.color}`}>{m.now}</span>
                <span className="text-xs text-t-secondary mb-0.5">{m.unit}</span>
              </div>
              <div className="text-xs text-t-secondary mt-0.5">Было: {m.start} {m.unit}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: 'nutrition',
    label: 'Питание',
    icon: Apple,
    title: 'Питание = ценность твоего сервиса',
    desc: 'Персонализированный план питания от тебя — это то, за что клиент готов платить больше и дольше. Встрой его в один продукт, а не отдельным файлом.',
    mockContent: (
      <div className="p-6 space-y-3">
        <div className="text-sm font-semibold">Питание на сегодня</div>
        <div className="grid grid-cols-4 gap-2 text-center">
          {[
            { label: 'Калории', val: '1840', sub: '/ 2100' },
            { label: 'Белки', val: '142г', sub: '' },
            { label: 'Жиры', val: '61г', sub: '' },
            { label: 'Углеводы', val: '195г', sub: '' },
          ].map((n) => (
            <div key={n.label} className="bg-bg-3 rounded-xl p-2.5">
              <div className="text-sm font-bold text-accent">{n.val}</div>
              {n.sub && <div className="text-xs text-t-secondary">{n.sub}</div>}
              <div className="text-xs text-t-secondary mt-0.5">{n.label}</div>
            </div>
          ))}
        </div>
        {['Завтрак · Овсянка с ягодами', 'Обед · Курица с рисом', 'Ужин · Рыба с овощами'].map((m) => (
          <div key={m} className="flex items-center gap-3 bg-bg-3 rounded-xl p-3">
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
              <Apple size={12} className="text-accent" />
            </div>
            <span className="text-sm text-t-secondary">{m}</span>
          </div>
        ))}
      </div>
    ),
  },
]

export default function ClientSlider() {
  const [active, setActive] = useState(0)

  const ActiveTab = tabs[active]
  const Icon = ActiveTab.icon

  return (
    <section id="client" className="py-8 lg:py-12 bg-bg-2 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-violet-200/25 rounded-full blur-[90px] orb-float pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full blur-[70px] orb-float-reverse pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-accent text-sm font-medium">Блок клиента</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Клиент видит ценность —{' '}
            <span className="text-accent">клиент остаётся</span>
          </h2>
          <p className="text-t-secondary text-lg max-w-2xl mx-auto">
            Приложение для клиента встроено в Coach Flo. Он видит прогресс, программу и питание —{' '}
            <span className="text-t-primary font-semibold">и не уходит к другому тренеру.</span>{' '}
            Клиенты, которые видят прогресс, остаются в{' '}
            <span className="text-accent font-bold">2.3× дольше.</span>
          </p>
        </div>

        {/* Main slider */}
        <div
          className="bg-bg-3 border border-border rounded-2xl overflow-hidden"
        >
          {/* Content area */}
          <div className="grid lg:grid-cols-2 min-h-[400px]">
            {/* Left: Description */}
            <div className="p-6 lg:p-10 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-border">
              <div className="flex items-center gap-2 mb-4">
                <Icon size={20} className="text-accent" />
                <span className="text-accent text-sm font-semibold">{ActiveTab.label}</span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">{ActiveTab.title}</h3>
              <p className="text-t-secondary leading-relaxed">{ActiveTab.desc}</p>
            </div>

            {/* Right: Mock phone */}
            <div className="bg-bg-2 flex items-center justify-center p-8">
              <div className="w-full max-w-xs bg-bg-3 border border-border rounded-2xl overflow-hidden shadow-2xl">
                {/* Phone header */}
                <div className="bg-bg-2 px-4 py-3 flex items-center gap-2 border-b border-border">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-xs text-t-secondary">Coach Flo · {ActiveTab.label}</span>
                </div>
                {ActiveTab.mockContent}
              </div>
            </div>
          </div>

          {/* Tab switcher */}
          <div className="border-t border-border bg-bg-2 p-4">
            <div className="flex gap-2 overflow-x-auto pb-1">
              {tabs.map((tab, i) => {
                const TIcon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActive(i)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                      i === active
                        ? 'bg-accent text-white'
                        : 'text-t-secondary hover:text-t-primary hover:bg-bg-3'
                    }`}
                  >
                    <TIcon size={14} />
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
