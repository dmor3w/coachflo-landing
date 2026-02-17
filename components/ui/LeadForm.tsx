'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const schema = z.object({
  name: z.string().min(2, 'Введите имя'),
  phone: z.string().min(6, 'Введите номер телефона'),
  contact: z.string().min(3, 'Введите email или Telegram'),
})

type FormData = z.infer<typeof schema>

interface LeadFormProps {
  defaultContact?: string
  onSuccess?: () => void
}

export default function LeadForm({ defaultContact, onSuccess }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { contact: defaultContact ?? '' },
  })

  const onSubmit = async (data: FormData) => {
    setError('')
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mode: 'trial', ...data }),
      })
      if (!res.ok) {
        const json = await res.json().catch(() => null)
        throw new Error(json?.error || 'Ошибка отправки')
      }
      setSubmitted(true)
      onSuccess?.()
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Ошибка отправки. Попробуйте позже.')
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="text-4xl mb-3">✓</div>
        <p className="text-t-primary font-semibold text-lg">Отлично!</p>
        <p className="text-t-secondary mt-1 text-sm">
          Мы свяжемся с вами и откроем доступ.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('name')}
          placeholder="Ваше имя"
          className="w-full bg-bg-3 border border-border rounded-lg px-4 py-3 text-sm text-t-primary placeholder:text-t-secondary focus:outline-none focus:border-accent transition-colors"
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>
      <div>
        <input
          {...register('phone')}
          type="tel"
          placeholder="Телефон"
          className="w-full bg-bg-3 border border-border rounded-lg px-4 py-3 text-sm text-t-primary placeholder:text-t-secondary focus:outline-none focus:border-accent transition-colors"
        />
        {errors.phone && (
          <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>
      <div>
        <input
          {...register('contact')}
          placeholder="Email или Telegram (@username)"
          className="w-full bg-bg-3 border border-border rounded-lg px-4 py-3 text-sm text-t-primary placeholder:text-t-secondary focus:outline-none focus:border-accent transition-colors"
        />
        {errors.contact && (
          <p className="text-red-400 text-xs mt-1">{errors.contact.message}</p>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 text-white font-semibold rounded-lg px-6 py-3 transition-all"
      >
        {isSubmitting ? 'Отправляем...' : 'Начать бесплатно →'}
      </button>
      <p className="text-center text-t-secondary text-xs">
        Карта не нужна · Без обязательств
      </p>
    </form>
  )
}
