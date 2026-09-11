# Fady Romany Joachim — Portfolio

A simple, professional one-page portfolio built with **React + TypeScript + Vite**.

## Run it

```bash
npm install
npm run dev      # open the printed localhost URL
```

Build for production: `npm run build` (output in `dist/`)

## Design tokens

| Use                    | Color     | Where to change              |
|------------------------|-----------|------------------------------|
| Background             | `#F5F2EB` | `--bg` in `src/styles/global.css` |
| Text & buttons         | `#1A1A1A` | `--ink` in `src/styles/global.css` |
| Hover & selection      | `#A1AE89` | `--accent` in `src/styles/global.css` |

## Customize (most common edits)

1. **Add / edit projects** — open `src/data/projects.json` and add:
   ```json
   { "id": 7, "title": "My Project", "link": "https://...", "image": "/images/my-project.png" }
   ```
   It appears on the page automatically. Put the photo in `public/images/`.
2. **Your photo** — replace `public/images/profile.svg` (keep the filename or update `src/components/Hero.tsx`).
3. **Social links** — fill `facebook` / `instagram` / `linkedin` in `src/data/socials.json`.
4. **About / skills texts** — edit `src/components/About.tsx` and `src/components/Expertise.tsx`.
5. **Contact email** — `EMAIL` in `src/pages/ConnectPage.tsx` (defaults to `maxfady24@gmail.com`).
6. **Loading screen speed** — `LOADER_DURATION` in `src/components/Loader.tsx`.

## Contact form note

The form currently opens the visitor's mail app pre-filled to your Gmail (`mailto:` — zero setup).
For direct in-browser sending, create a free form at https://formspree.io and follow the commented
instructions at the top of `src/pages/ConnectPage.tsx`.

## Structure

```
src/
├── App.tsx                  # routing + intro loader + page transition overlay
├── data/
│   ├── projects.json        # <-- YOUR PROJECTS LIVE HERE
│   └── socials.json         # email, whatsapp, social links
├── components/
│   ├── Header.tsx           # glassy header, cursive PTR logo, mobile menu
│   ├── Hero.tsx             # 01 me — photo, name, Available-for-Work tag
│   ├── About.tsx            # 02 about + Focus/Approach/Goal cards
│   ├── Projects.tsx         # 03 bento grid (reads projects.json)
│   ├── Expertise.tsx        # 04 skills cards
│   ├── Contact.tsx          # 05 contact section
│   ├── Footer.tsx           # dark 3-column footer
│   ├── Loader.tsx           # 0% -> 100% intro with project photos
│   ├── PageTransition.tsx   # "crafting the next page" overlay
│   └── Reveal.tsx           # scroll-reveal wrapper (IntersectionObserver)
├── pages/
│   ├── HomePage.tsx
│   └── ConnectPage.tsx      # Let's Connect form
└── styles/
    ├── global.css           # palette, buttons, header, loader, transition
    └── sections.css         # all sections + responsive rules
```
