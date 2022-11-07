# Landing Page Book - Astro + Svelte + Tailwind + Vercel Edge

Inspired by: https://14habits.com/

## 🎯 Features

- ✅ [Tailwind](https://tailwindcss.com/);
- ✅ [Astro](https://astro.build/);
- ✅ [Astro/Sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/);
- ✅ [Astro/Image](https://docs.astro.build/en/guides/integrations-guide/image/) with AVIF format;
- ✅ [Svelte](https://svelte.dev/);
- ✅ [Deploy at Vercel with Serverless](https://docs.astro.build/en/guides/integrations-guide/vercel/);
- ✅ [Partytown + Google Analytics](https://partytown.builder.io/google-tag-manager)

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

## 🔍 SEO

- Rich Results Test: https://search.google.com/test/rich-results
- https://developers.facebook.com/tools/debug/
