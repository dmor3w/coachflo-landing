'use client'

const cards = [
  { type: 'stat', text: 'Тренеры теряют в среднем 3–5 клиентов в месяц из-за пропусков и хаоса', accent: true },
  { type: 'review', name: 'Алексей М.', city: 'Москва', rating: 5, gain: '+40%', text: 'Раньше вёл клиентов в таблицах. Теперь всё в CoachFlo — клиенты стали реже пропускать, доход вырос на 40%.', initials: 'АМ', color: 'bg-violet-100 text-violet-700' },
  { type: 'stat', text: 'Автоматические напоминания сокращают пропуски занятий на 60%', accent: false },
  { type: 'review', name: 'Марина К.', city: 'Санкт-Петербург', rating: 5, gain: '+22%', text: 'Наконец вижу кто платит, кто нет. Перестала забывать напоминать — платформа делает это сама.', initials: 'МК', color: 'bg-pink-100 text-pink-700' },
  { type: 'stat', text: 'Тренер с 20 клиентами тратит 8+ часов в неделю на административку. CoachFlo сокращает это до 1 часа', accent: true },
  { type: 'review', name: 'Дмитрий С.', city: 'Екатеринбург', rating: 5, gain: '+78%', text: 'Клиенты видят свой прогресс в приложении и сами хотят продлеваться. Продления выросли с 40% до 78%.', initials: 'ДС', color: 'bg-blue-100 text-blue-700' },
  { type: 'stat', text: 'Клиенты, которые видят свой прогресс, остаются в 2.3 раза дольше', accent: false },
  { type: 'review', name: 'Ольга Р.', city: 'Новосибирск', rating: 5, gain: '+35%', text: 'Наконец-то одно приложение для всего: программы, питание, оплаты. Клиентам тоже удобно — перестали писать в WhatsApp.', initials: 'ОР', color: 'bg-emerald-100 text-emerald-700' },
  { type: 'stat', text: 'Средний тренер не замечает 15–20% неоплаченных занятий. CoachFlo устраняет это полностью', accent: true },
  { type: 'review', name: 'Игорь В.', city: 'Казань', rating: 5, gain: '+51%', text: 'Попробовал 14 дней и сразу купил годовой план. Окупилось за первый же месяц — одним клиентом меньше потерял.', initials: 'ИВ', color: 'bg-amber-100 text-amber-700' },
]

type Card = typeof cards[0]

function Card({ card }: { card: Card }) {
  if (card.type === 'stat') {
    return (
      <div
        className={`flex-shrink-0 w-72 rounded-2xl p-6 flex flex-col gap-3 ${
          card.accent
            ? 'bg-accent text-white'
            : 'bg-white border border-border'
        }`}
      >
        <div className={`text-3xl font-black leading-none ${card.accent ? 'text-white/30' : 'text-accent/20'}`}>
          &ldquo;
        </div>
        <p className={`text-sm leading-relaxed font-medium ${card.accent ? 'text-white/90' : 'text-t-secondary'}`}>
          {card.text}
        </p>
        <div className={`mt-auto text-xs font-semibold ${card.accent ? 'text-white/50' : 'text-accent'}`}>
          Статистика CoachFlo
        </div>
      </div>
    )
  }

  return (
    <div className="flex-shrink-0 w-80 rounded-2xl bg-white border border-border p-6 flex flex-col gap-3 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: card.rating ?? 5 }).map((_, i) => (
            <span key={i} className="text-amber-400 text-sm">★</span>
          ))}
        </div>
        {card.gain && (
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
            {card.gain} к доходу
          </span>
        )}
      </div>
      <p className="text-sm text-t-secondary leading-relaxed flex-1">&ldquo;{card.text}&rdquo;</p>
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${card.color ?? 'bg-accent/10 text-accent'}`}>
          {card.initials ?? card.name?.[0]}
        </div>
        <div>
          <div className="text-sm font-semibold text-t-primary">{card.name}</div>
          <div className="text-xs text-t-secondary">{card.city}</div>
        </div>
      </div>
    </div>
  )
}

export default function InfiniteCarousel() {
  const doubled = [...cards, ...cards]

  return (
    <section id="reviews" className="py-8 overflow-hidden relative" style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #f0f4ff 50%, #f8fafc 100%)' }}>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-[100px] orb-float pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-blue-200/20 rounded-full blur-[80px] orb-float-reverse pointer-events-none" />
      <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-7 text-center">
        <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-4">
          <span className="text-accent text-sm font-medium">Отзывы и факты</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-t-primary">
          Тренеры зарабатывают{' '}
          <span className="text-accent">на 30–50% больше</span>
        </h2>
        <p className="text-t-secondary mt-3 text-base max-w-xl mx-auto">
          Реальные результаты тренеров которые уже работают с CoachFlo.{' '}
          <span className="text-t-primary font-semibold">Без воды — только цифры.</span>
        </p>
      </div>

      {/* Track */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-bg-2 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-bg-2 to-transparent z-10 pointer-events-none" />

        <div className="flex gap-4 carousel-track animate-marquee" style={{ width: 'max-content' }}>
          {doubled.map((card, i) => (
            <Card key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
