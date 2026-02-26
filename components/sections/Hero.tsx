'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeroProps {
  onTrial: (email?: string) => void
}

const bgPhotos = [
  { src: '/images/hero/gym.jpg', alt: 'Спортивный зал' },
  { src: '/images/hero/personal-training.jpg', alt: 'Персональная тренировка' },
  { src: '/images/hero/strength.jpg', alt: 'Силовая тренировка' },
  { src: '/images/hero/cardio.jpg', alt: 'Бег и кардио' },
  { src: '/images/hero/athlete.jpg', alt: 'Атлет в зале' },
]

export default function Hero({ onTrial }: HeroProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bgPhotos.length)
    }, 8000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">

      {/* Animated orbs behind photos */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/30 rounded-full blur-[120px] orb-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/20 rounded-full blur-[100px] orb-float-reverse pointer-events-none" />

      {/* Background slideshow */}
      {bgPhotos.map((photo, i) => (
        <div
          key={photo.src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={i === 0}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

      {/* Slide dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {bgPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">Платформа №1 для онлайн-тренеров</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white">
            Больше клиентов.<br />
            <span className="text-accent-light">Меньше рутины.</span><br />
            <span className="text-white/90">Больше дохода.</span>
          </h1>

          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-xl">
            Coach Flo — платформа для тренеров, которые хотят{' '}
            <span className="text-white font-semibold">масштабировать бизнес</span>,
            не утопая в таблицах и переписках.{' '}
            <span className="text-accent-light font-semibold">Первые результаты — уже в первый месяц.</span>
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-white/60">
            <span className="text-emerald-400 font-semibold">✓ Карта не нужна</span>
            <span className="text-emerald-400 font-semibold">✓ 14 дней бесплатно</span>
            <span>✓ Отмена в любой момент</span>
          </div>

        </div>

        {/* Right: Mock app */}
        <div className="relative hidden lg:block">
          <div className="relative w-full aspect-[4/3]">
            <div className="absolute inset-0 rounded-2xl bg-white/95 backdrop-blur-md border border-white/30 overflow-hidden shadow-2xl">
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs text-gray-400">Coach Flo — Кабинет тренера</span>
              </div>
              <div className="p-6 grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-xs text-gray-400 mb-3">Мои клиенты</div>
                  {['Анна К.', 'Дмитрий Р.', 'Мария С.'].map((name, i) => (
                    <div key={name} className="flex items-center gap-3 py-2 border-b border-gray-100 last:border-0">
                      <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-xs font-semibold">
                        {name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-800">{name}</div>
                        <div className="text-xs text-gray-400">Активный · {7 + i} занятий</div>
                      </div>
                      <div className="text-xs text-emerald-500 font-medium">+{2 + i} кг</div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-xs text-gray-400 mb-1">Доход / месяц</div>
                  <div className="text-2xl font-bold text-gray-800">89 400 ₽</div>
                  <div className="text-xs text-emerald-500 mt-1 font-medium">↑ +23% к прошлому</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                  <div className="text-xs text-gray-400 mb-1">Сегодня</div>
                  <div className="text-2xl font-bold text-gray-800">6</div>
                  <div className="text-xs text-gray-400 mt-1">тренировок запланировано</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-accent rounded-xl px-4 py-3 shadow-lg shadow-accent/30">
              <div className="text-white font-bold text-lg">+23%</div>
              <div className="text-white/80 text-xs">рост дохода</div>
            </div>

            <div className="absolute -top-3 -right-3 bg-white border border-gray-100 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
              <span className="text-lg">💰</span>
              <div>
                <div className="text-xs text-gray-800 font-semibold">Оплата получена</div>
                <div className="text-xs text-gray-400">Дмитрий Р. · 12 000 ₽</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
