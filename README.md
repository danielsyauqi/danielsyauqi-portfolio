# Daniel Syauqi — Personal Portfolio

A code-first personal portfolio for Daniel Syauqi, rebuilt from the public content and media on `stardev4u.site`.

## Stack

- Next.js 16 App Router
- React 19 and TypeScript
- Tailwind CSS 4 (available) with a custom global design system
- Local media rendered through `next/image`
- Cloudflare Workers Static Assets deployment

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content

Project copy, links, galleries, and video IDs live in:

```text
src/data/projects.ts
```

Original project assets are organised under:

```text
public/media/web/
public/media/media/
public/media/about/
```

The project is intentionally code-first and does not require a CMS or database.

## Deploy

The production build is a static Next.js export served by Cloudflare Workers at
[`danielsyauqi.site`](https://danielsyauqi.site).

```bash
npm run deploy
```

The Worker name, custom domain, and asset routing live in `wrangler.jsonc`.

## Checks

```bash
npm run lint
npm run build
```
