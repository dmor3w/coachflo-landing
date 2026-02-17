import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'CoachFlo — Платформа для онлайн-тренеров',
  description: 'Зарабатывай больше с каждым клиентом. CoachFlo — платформа «Всё в одном» для персональных тренеров: клиенты, тренировки, питание, финансы.',
  openGraph: {
    title: 'CoachFlo — Платформа для онлайн-тренеров',
    description: 'Раскрой свой потенциал с платформой №1 для тренеров.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
