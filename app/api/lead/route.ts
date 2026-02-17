import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { mode, contact, name, phone, comment } = body

    if (!contact || typeof contact !== 'string' || contact.trim().length < 3) {
      return NextResponse.json(
        { error: 'Поле "contact" обязательно (минимум 3 символа)' },
        { status: 400 },
      )
    }

    const port = Number(process.env.SMTP_PORT) || 465
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const msk = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' })

    const modeLabel = mode === 'demo' ? 'Демо' : mode === 'trial' ? 'Trial' : String(mode)

    const lines = [
      `<b>Тип заявки:</b> ${modeLabel}`,
      name ? `<b>Имя:</b> ${name}` : null,
      phone ? `<b>Телефон:</b> ${phone}` : null,
      `<b>Email / Telegram:</b> ${contact.trim()}`,
      comment ? `<b>Комментарий:</b> ${comment}` : null,
      `<b>Время (МСК):</b> ${msk}`,
    ].filter(Boolean)

    const html = lines.join('<br/>')
    const text = lines.map((l) => l!.replace(/<\/?b>/g, '')).join('\n')

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO,
      subject: `CoachFlo — новая заявка (${modeLabel})`,
      html,
      text,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Lead send error:', err)
    return NextResponse.json(
      { error: 'Ошибка отправки. Попробуйте позже.' },
      { status: 500 },
    )
  }
}
