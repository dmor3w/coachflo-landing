import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Политика конфиденциальности — Coach Flo',
  description: 'Политика конфиденциальности сервиса Coach Flo. Информация о сборе, обработке и защите персональных данных.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-border bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-t-primary">
            Coach <span className="text-accent">Flo</span>
          </Link>
          <Link href="/" className="text-sm text-accent hover:text-accent-dark transition-colors">
            &larr; На главную
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-t-primary mb-2">Политика конфиденциальности</h1>
        <p className="text-t-secondary text-sm mb-10">Последнее обновление: 24 февраля 2026 г.</p>

        <div className="prose prose-slate max-w-none space-y-8 text-t-primary/90 text-[15px] leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-t-primary mb-3">1. Общие положения</h2>
            <p>
              Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок сбора, хранения, обработки и
              защиты персональных данных пользователей сервиса Coach Flo (далее — «Сервис»), расположенного по адресу
              coachflo.ru.
            </p>
            <p className="mt-3">
              Используя Сервис, вы соглашаетесь с условиями данной Политики. Если вы не согласны с условиями, пожалуйста,
              воздержитесь от использования Сервиса.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-t-primary mb-3">2. Какие данные мы собираем</h2>
            <p>В процессе использования Сервиса мы можем собирать следующие категории данных:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li>Имя, фамилия, контактный телефон, адрес электронной почты — при регистрации и заполнении форм.</li>
              <li>Данные об использовании Сервиса — просмотренные страницы, время визита, действия в интерфейсе.</li>
              <li>Технические данные — IP-адрес, тип браузера, операционная система, разрешение экрана.</li>
              <li>Файлы cookie и аналогичные технологии — для обеспечения корректной работы и аналитики.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-t-primary mb-3">3. Цели обработки данных</h2>
            <p>Персональные данные обрабатываются в следующих целях:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li>Предоставление доступа к функциям Сервиса и техническая поддержка.</li>
              <li>Связь с пользователем по вопросам использования Сервиса.</li>
              <li>Улучшение качества Сервиса, анализ пользовательского опыта.</li>
              <li>Выполнение обязательств, предусмотренных законодательством РФ.</li>
              <li>Информирование о новых функциях, акциях и обновлениях (с согласия пользователя).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-t-primary mb-3">4. Хранение и защита данных</h2>
            <p>
              Мы применяем организационные и технические меры для защиты персональных данных от несанкционированного
              доступа, изменения, раскрытия или уничтожения. Данные хранятся на защищённых серверах и передаются по
              зашифрованным каналам (SSL/TLS).
            </p>
            <p className="mt-3">
              Персональные данные хранятся не дольше, чем это необходимо для достижения целей обработки, если иное не
              предусмотрено законодательством.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-t-primary mb-3">5. Файлы cookie</h2>
            <p>
              Сервис использует файлы cookie для обеспечения корректной работы, аналитики посещаемости и персонализации
              контента. Вы можете управлять настройками cookie в своём браузере, однако отключение cookie может повлиять
              на функциональность Сервиса.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-t-primary mb-3">6. Передача данных третьим лицам</h2>
            <p>
              Мы не продаём и не передаём ваши персональные данные третьим лицам, за исключением случаев:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li>Когда это необходимо для предоставления услуг (платёжные системы, хостинг-провайдеры).</li>
              <li>По запросу уполномоченных государственных органов в порядке, установленном законодательством.</li>
              <li>С вашего явного согласия.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-t-primary mb-3">7. Права пользователя</h2>
            <p>Вы имеете право:</p>
            <ul className="list-disc pl-6 mt-3 space-y-1.5">
              <li>Запрашивать информацию о хранимых персональных данных.</li>
              <li>Требовать исправления неточных данных.</li>
              <li>Требовать удаления персональных данных.</li>
              <li>Отозвать согласие на обработку данных.</li>
              <li>Обратиться с жалобой в уполномоченный орган по защите прав субъектов персональных данных.</li>
            </ul>
            <p className="mt-3">
              Для реализации своих прав обратитесь в службу поддержки через{' '}
              <a href="https://t.me/coachflo1" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-dark underline">
                Telegram
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-t-primary mb-3">8. Изменения в Политике</h2>
            <p>
              Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на
              данной странице. Продолжение использования Сервиса после внесения изменений означает ваше согласие с новой
              редакцией Политики.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-t-primary mb-3">9. Контактная информация</h2>
            <p>
              По вопросам, связанным с обработкой персональных данных, вы можете связаться с нами через{' '}
              <a href="https://t.me/coachflo1" target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-dark underline">
                Telegram
              </a>.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
