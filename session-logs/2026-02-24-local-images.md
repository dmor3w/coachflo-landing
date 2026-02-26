# Сессия: Локализация изображений Unsplash
**Дата:** 2026-02-24

## Что сделано
1. Скачаны 5 фоновых изображений Hero в `public/images/hero/`
2. Скачаны 4 изображения TrainerModules в `public/images/modules/`
3. `Hero.tsx` — URL Unsplash заменены на локальные пути, убран `unoptimized`
4. `TrainerModules.tsx` — URL Unsplash заменены на локальные пути, убран `unoptimized`
5. `next.config.ts` — удалена секция `images.remotePatterns` для Unsplash

## Замечания
- Оригинальное изображение `photo-1517343985841` (strength) возвращало 404 с Unsplash
- Заменено на `photo-1581009146145-b5ef050c2e1e` (тоже силовая тренировка)
- Build (`npm run build`) прошёл успешно без ошибок
