# davidrohweder.com

Personal site for **David Rohweder** — Software Engineer at Iridium.
Built with [Astro](https://astro.build), deployed to GitHub Pages on a custom domain.

A single, fast, dark-only page: hero, about, experience, projects, skills,
education, and credentials. Ships ~zero client JS (only a small scroll
reveal + nav scroll-spy), self-hosted variable fonts, and an optimized image.

## Stack

- **Astro 5** — static output, component-based, HTML/CSS-first
- **Inter + Geist Mono** (`@fontsource-variable`, self-hosted & subset)
- **@astrojs/sitemap** — sitemap + SEO
- **sharp** — build-time image optimization (WebP)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # serve the production build
```

All content lives in one typed file: [`src/data/profile.ts`](src/data/profile.ts).
Edit it to update experience, projects, skills, etc. — no markup changes needed.

## Project structure

```
public/            CNAME, résumé PDF, favicons, OG image, robots.txt
src/
  data/profile.ts    single source of truth for all content
  styles/global.css  design tokens + base styles
  layouts/Base.astro <head>, meta/OG/JSON-LD, scroll scripts
  components/         Nav, Hero, About, Experience, Projects, Skills,
                     Education, Credentials, Footer, Icon, SocialLinks
  pages/index.astro  page assembly
```

## Deploy

Pushing to `master` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds with Astro and publishes `./dist` to GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and
deployment → Source** and select **GitHub Actions**. The custom domain is
emitted from [`public/CNAME`](public/CNAME).

## License

[MIT](LICENSE) © David Rohweder
