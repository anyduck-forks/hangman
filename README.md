# Hangman

Навчальний проєкт гри "Шибениця" (Hangman) на React + Vite. Гравець має відгадати слово, відкриваючи його по буквах. Кожна неправильна літера зменшує кількість доступних спроб. Якщо гравець вгадує слово до закінчення спроб — він перемагає, якщо ні — програє.

Словники:
- https://github.com/Maximax67/English-Valid-Words
- https://github.com/first20hours/google-10000-english

## Вимоги

- Node.js 18+ (рекомендовано LTS)
- npm 9+

## Конфігурації

- Змінні оточення не використовуються.
- Зберігання даних: localStorage (userId, історія ігор). Деталі описані в GDPR.md.

## Запуск

```bash
npm install
npm run dev
```

## Корисні команди

```bash
npm run build
npm run preview
npm run lint
```

## Ліцензія

Проєкт ліцензовано за MIT. Дивись файл LICENSE.

## Документація

Додаткова документація публікується у Docusaurus (папка `docs/`).

```bash
npm run docs:dev
```

## Storybook

Storybook використовується для UI-компонентів.

```bash
npm run storybook
```

