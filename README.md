# AI-native IRL

Доклад про использование AI в реальной повседневной жизни — не в коде, а в быту.

Презентация на [Slidev](https://sli.dev).

## Запуск

```bash
pnpm install
pnpm dev
```

Откроется на http://localhost:3030. Правь `slides.md` и файлы в `slides/` — обновляется на лету.

## Сборка и экспорт

```bash
pnpm build    # статичный сайт в dist/
pnpm export   # PDF
```

## Структура

| Путь | Что там |
|------|---------|
| `slides.md` | headmatter + титул + подключение секций через `src:` |
| `slides/NN-*.md` | секции доклада по порядку |
| `plans/talk-plan.md` | грумминг: аннотация, тайминг, лонглист тем |
| `style.css` | палитра и типографика |
| `global-bottom.vue` | номер слайда на всех слайдах |
| `setup/mermaid.ts` | тема для диаграмм |

Документация по синтаксису — [sli.dev](https://sli.dev/guide/syntax.html).
