# Landing Page Book - Astro + Svelte + Tailwind

Inspired by: https://14habits.com/

## 🎯 Features

- Tailwind
- Astro
- Svelte
- Deploy at Vercel with Edge Functions
- Sitemap - Pending
- Image - Pending
- Partytown - Pending

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                             |
| :--------------------- | :------------------------------------------------- |
| `npm install`          | Installs dependencies                              |
| `npm run dev`          | Starts local dev server at `localhost:3000`        |
| `npm run build`        | Build your production site to `./dist/`            |
| `npm run preview`      | Preview your build locally, before deploying       |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `npm run astro --help` | Get help using the Astro CLI                       |

## 🎨 Customization

Update variable colours at:

- `book-theme` in [tailwing.config.cjs](./tailwind.config.cjs);
- `$book-theme-color` in [Layout.astro](./src/layouts/Layout.astro);
