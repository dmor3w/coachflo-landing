'use client'

import { useState } from 'react'
import { ChevronRight } from 'lucide-react'

const questions = [
  {
    q: 'Сколько клиентов ты теряешь каждый месяц? (пропадают, не продлеваются)',
    options: [
      { label: 'Никого — все остаются', score: 0 },
      { label: '1–2 клиента', score: 1 },
      { label: '3–5 клиентов', score: 3 },
      { label: 'Больше 5', score: 5 },
    ],
  },
  {
    q: 'Как ты ведёшь учёт оплат и долгов клиентов?',
    options: [
      { label: 'В специальной системе — всё чётко', score: 0 },
      { label: 'В таблице Excel или Google Sheets', score: 2 },
      { label: 'В голове или в заметках', score: 4 },
      { label: 'Особо не слежу', score: 5 },
    ],
  },
  {
    q: 'Сколько времени в неделю ты тратишь на переписку, напоминания и организацию?',
    options: [
      { label: 'Меньше часа', score: 0 },
      { label: '1–3 часа', score: 1 },
      { label: '3–6 часов', score: 3 },
      { label: 'Более 6 часов', score: 5 },
    ],
  },
  {
    q: 'Как клиенты получают свои программы тренировок?',
    options: [
      { label: 'Через приложение в телефоне', score: 0 },
      { label: 'PDF или документ в мессенджере', score: 2 },
      { label: 'Объясняю устно / голосом', score: 4 },
      { label: 'Каждый раз по-разному', score: 4 },
    ],
  },
  {
    q: 'Если клиент пропускает тренировку — что происходит?',
    options: [
      { label: 'Система сама напоминает и переносит', score: 0 },
      { label: 'Я сам пишу ему', score: 1 },
      { label: 'Ждём следующего занятия', score: 3 },
      { label: 'Часто просто теряем деньги и клиента', score: 5 },
    ],
  },
]

function getResult(score: number) {
  if (score <= 3) {
    return {
      emoji: '✅',
      title: 'У тебя хорошая система',
      text: 'Но даже при хорошей организации CoachFlo помогает масштабировать бизнес и брать больше клиентов без увеличения нагрузки.',
      loss: 'до 5 000 ₽',
    }
  }
  if (score <= 10) {
    return {
      emoji: '⚠️',
      title: 'Есть точки потерь',
      text: 'Ты теряешь деньги на пропусках, хаосе и административной рутине. CoachFlo закроет эти дыры за первый же месяц.',
      loss: '15 000–30 000 ₽',
    }
  }
  return {
    emoji: '🚨',
    title: 'Ты теряешь значительную часть дохода',
    text: 'Хаос в управлении клиентами напрямую бьёт по кошельку. С CoachFlo многие тренеры увеличивают доход на 30–50% уже в первый месяц.',
    loss: 'от 40 000 ₽',
  }
}

interface QuizProps {
  onTrial: (email?: string) => void
}

export default function Quiz({ onTrial }: QuizProps) {
  const [step, setStep] = useState(0) // 0 = intro, 1..5 = questions, 6 = result
  const [answers, setAnswers] = useState<number[]>([])
  const [contact, setContact] = useState('')
  const [contactSent, setContactSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [quizError, setQuizError] = useState('')

  const totalScore = answers.reduce((a, b) => a + b, 0)
  const result = getResult(totalScore)

  const handleAnswer = (score: number) => {
    const next = [...answers, score]
    setAnswers(next)
    if (step >= questions.length) {
      setStep(questions.length + 1)
    } else {
      setStep(step + 1)
    }
  }

  const handleContactSend = async () => {
    if (!contact.trim()) return
    setSending(true)
    setQuizError('')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'quiz',
          contact: contact.trim(),
          comment: `Quiz score: ${totalScore} / ${questions.length * 5} — ${result.title}`,
        }),
      })
      if (!res.ok) {
        const json = await res.json().catch(() => null)
        throw new Error(json?.error || 'Ошибка отправки')
      }
      setContactSent(true)
    } catch (err: unknown) {
      setQuizError(err instanceof Error ? err.message : 'Ошибка отправки. Попробуйте позже.')
    } finally {
      setSending(false)
    }
  }

  const currentQ = questions[step - 1]
  const progress = step <= questions.length ? (step / questions.length) * 100 : 100

  return (
    <section id="test" className="py-8 lg:py-12 bg-bg-2 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-200/40 rounded-full blur-[80px] orb-float pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-56 h-56 bg-blue-200/30 rounded-full blur-[60px] orb-float-reverse pointer-events-none -translate-x-1/4 translate-y-1/4" />
      <div className="absolute inset-0 dot-pattern opacity-30 pointer-events-none" />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-4">
            <span className="text-accent text-sm font-medium">Быстрый тест</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Сколько денег ты{' '}
            <span className="text-accent">теряешь</span> каждый месяц?
          </h2>
          <p className="text-t-secondary">
            5 вопросов — узнаешь сколько уходит и как это остановить.{' '}
            <span className="font-semibold text-t-primary">Большинство тренеров теряют от 15 000 ₽</span> ежемесячно.
          </p>
        </div>

        <div className="bg-bg-3 border border-border rounded-2xl overflow-hidden">
          {/* Intro */}
          {step === 0 && (
            <div className="p-8 lg:p-12 text-center">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-2xl font-bold mb-3">Начнём?</h3>
              <p className="text-t-secondary mb-8">
                5 честных вопросов о том, как ты работаешь. Результат — сразу на экране, без регистрации.
              </p>
              <button
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl px-8 py-4 transition-all"
              >
                Начать тест <ChevronRight size={18} />
              </button>
            </div>
          )}

          {/* Questions */}
          {step >= 1 && step <= questions.length && (
            <div className="p-8 lg:p-12">
              {/* Progress */}
              <div className="flex items-center gap-3 mb-8">
                <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent rounded-full transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <span className="text-t-secondary text-sm shrink-0">{step} / {questions.length}</span>
              </div>

              <h3 className="text-xl lg:text-2xl font-semibold mb-8">{currentQ.q}</h3>

              <div className="space-y-3">
                {currentQ.options.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => handleAnswer(opt.score)}
                    className="w-full text-left p-4 rounded-xl border border-border bg-bg-2 hover:border-accent hover:bg-accent/5 transition-all text-sm text-t-secondary hover:text-t-primary"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result */}
          {step > questions.length && (
            <div className="p-8 lg:p-12">
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">{result.emoji}</div>
                <h3 className="text-2xl font-bold mb-2">{result.title}</h3>
                <p className="text-t-secondary mb-4">{result.text}</p>
                <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-xl px-6 py-3 mb-6">
                  <div className="text-xs text-red-400 mb-1">Примерные потери в месяц</div>
                  <div className="text-2xl font-bold text-red-400">{result.loss}</div>
                </div>
              </div>

              {/* Lead capture */}
              {!contactSent ? (
                <div className="border-t border-border pt-8">
                  <p className="text-center text-sm text-t-secondary mb-4">
                    Получи персональные рекомендации и попробуй CoachFlo бесплатно
                  </p>
                  {quizError && (
                    <p className="text-red-500 text-sm text-center mb-2">{quizError}</p>
                  )}
                  <div className="flex gap-3">
                    <input
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="Email или Telegram (@username)"
                      className="flex-1 bg-bg-2 border border-border rounded-xl px-4 py-3 text-sm text-t-primary placeholder:text-t-secondary focus:outline-none focus:border-accent transition-colors"
                    />
                    <button
                      onClick={handleContactSend}
                      disabled={sending}
                      className="bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-semibold rounded-xl px-5 py-3 transition-all text-sm whitespace-nowrap"
                    >
                      {sending ? 'Отправка...' : 'Отправить'}
                    </button>
                  </div>
                </div>
              ) : (
                <div className="border-t border-border pt-8 text-center">
                  <p className="text-t-secondary text-sm mb-4">Отлично, мы свяжемся с тобой!</p>
                  <button
                    onClick={() => onTrial()}
                    className="bg-accent hover:bg-accent-dark text-white font-semibold rounded-xl px-6 py-3 transition-all text-sm"
                  >
                    Попробовать бесплатно 14 дней
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
