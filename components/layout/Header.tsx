'use client'

import { useState, useEffect } from 'react'
import { Menu, X, LogIn } from 'lucide-react'

interface HeaderProps {
  onTrial: (email?: string) => void
}

const navItems = [
  { label: 'Модули тренера', href: '#modules' },
  { label: 'Блок клиента', href: '#client' },
  { label: 'Тест', href: '#test' },
  { label: 'Тарифы', href: '#pricing' },
  { label: 'Отзывы', href: '#reviews' },
]

export default function Header({ onTrial }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold tracking-tight"
          >
            coach<span className="text-accent">flo</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="text-t-secondary hover:text-t-primary text-sm transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onTrial()}
              className="text-sm font-semibold bg-accent hover:bg-accent-dark text-white rounded-lg px-5 py-2 transition-all"
            >
              Попробовать бесплатно
            </button>
            <a
              href="https://coachflo.ru/login"
              className="flex items-center gap-1.5 text-sm font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-lg px-4 py-2 transition-all"
            >
              <LogIn size={15} />
              Войти
            </a>
          </div>

          {/* Mobile: Войти + burger */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://coachflo.ru/login"
              className="flex items-center gap-1 text-sm font-semibold border-2 border-accent text-accent rounded-lg px-3 py-1.5 transition-all"
            >
              <LogIn size={14} />
              Войти
            </a>
            <button
              className="text-t-secondary"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-bg-2 border-b border-border px-4 py-4 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => handleNavClick(item.href)}
              className="block w-full text-left text-t-secondary hover:text-t-primary py-2 text-sm transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-border">
            <button
              onClick={() => { onTrial(); setMobileOpen(false) }}
              className="text-sm font-semibold bg-accent hover:bg-accent-dark text-white rounded-lg px-5 py-2.5 transition-all"
            >
              Попробовать бесплатно 14 дней
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
