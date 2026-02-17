'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('App error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <div className="text-5xl mb-4">⚡</div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Что-то пошло не так</h2>
        <p className="text-gray-500 mb-6 text-sm">
          Произошла ошибка при загрузке страницы. Нажмите кнопку ниже, чтобы попробовать снова.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={reset}
            className="bg-violet-600 hover:bg-violet-700 text-white font-semibold rounded-xl px-6 py-3 transition-all text-sm"
          >
            Попробовать снова
          </button>
          <button
            onClick={() => { window.location.href = '/' }}
            className="border border-gray-200 hover:border-violet-300 text-gray-600 hover:text-gray-900 rounded-xl px-6 py-3 transition-all text-sm"
          >
            На главную
          </button>
        </div>
      </div>
    </div>
  )
}
