# T.A.L.A. — The Africa Laureate Awards Website

Full multi-page website for **The Africa Laureate Awards**, built with **Vite + React 18 + Tailwind CSS 3 + React Router v6**.

> ⚠️ This project uses **Vite** (not Create React App). Vite works correctly with Node.js v18, v20, v22, and v24+.

---

## Tech Stack

| Tool              | Version  |
|-------------------|----------|
| Vite              | ^5.4.2   |
| React             | ^18.3.1  |
| React DOM         | ^18.3.1  |
| React Router DOM  | ^6.26.0  |
| Tailwind CSS      | ^3.4.10  |
| PostCSS           | ^8.4.41  |
| Autoprefixer      | ^10.4.20 |

---

## Brand

| Token          | Hex       | Usage                        |
|----------------|-----------|------------------------------|
| `crimson-700`  | `#6B0C22` | Primary brand colour         |
| `gold-500`     | `#C9A84C` | Accent / highlights          |
| `ivory-100`    | `#FAF7F2` | Page background              |
| `crimson-950`  | `#1a0309` | Dark section backgrounds     |

**Fonts** (Google Fonts — loaded in `index.html`):
- **Cinzel** — display headings, labels, buttons
- **Cormorant Garamond** — subheadings, pull quotes
- **EB Garamond** — body text

---

## Pages

| Route       | File                    | Description                                              |
|-------------|-------------------------|----------------------------------------------------------|
| `/`         | `pages/Home.jsx`        | Hero, awards preview, authors, testimonials, blog, CTA   |
| `/awards`   | `pages/Awards.jsx`      | Categories, 2026 timeline, judging criteria, FAQ         |
| `/authors`  | `pages/Authors.jsx`     | Searchable + filterable author grid                      |
| `/services` | `pages/Services.jsx`    | 6 services, mentorship programme, partners               |
| `/about`    | `pages/About.jsx`       | Mission, values grid, team                               |
| `/blog`     | `pages/Blog.jsx`        | Featured post layout + category filter tabs              |
| `/contact`  | `pages/Contact.jsx`     | Validated form, loading state, success screen            |
| `*`         | `pages/NotFound.jsx`    | Branded 404 with quick links                             |

---

## Project Structure

```
tala-v3/
├── index.html                  ← Vite entry (root level, not /public)
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── README.md
└── src/
    ├── main.jsx                ← React root mount
    ├── App.jsx                 ← Router + layout
    ├── index.css               ← Tailwind directives + @layer components
    ├── data/
    │   └── index.js            ← ALL site content (edit here to update anything)
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Footer.jsx
    │   └── PageHero.jsx
    └── pages/
        ├── Home.jsx
        ├── Awards.jsx
        ├── Authors.jsx
        ├── Services.jsx
        ├── About.jsx
        ├── Blog.jsx
        ├── Contact.jsx
        └── NotFound.jsx
```

---

## Getting Started

### Prerequisites
- **Node.js 18, 20, 22, or 24+** — check with `node --version`
- **npm 9+** — check with `npm --version`

### 1. Install

```bash
cd tala-v3
npm install
```

### 2. Start dev server

```bash
npm run dev
```

Opens at **http://localhost:5173** with hot module replacement.

### 3. Build for production

```bash
npm run build
```

Output goes to `/dist` — ready to deploy.

### 4. Preview production build locally

```bash
npm run preview
```

---

## Deployment

### Netlify

1. Push to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site → Import from Git**
3. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Add a `_redirects` file inside the project root or `public/` folder:
   ```
   /* /index.html 200
   ```
   *(handles client-side routing)*

### Vercel

1. Import the repo at [vercel.com/new](https://vercel.com/new)
2. Framework preset: **Vite**
3. Click **Deploy** — routing is handled automatically

---

## Customising Content

All site content lives in **one file**:

```
src/data/index.js
```

Edit this file to update authors, award categories, blog posts, team members, services, testimonials, stats, or partners — without touching any page components.

---

## Tailwind Custom Classes

Defined in `src/index.css` using `@layer components` and `@layer utilities`:

| Class                | Description                                      |
|----------------------|--------------------------------------------------|
| `.btn-crimson`       | Filled crimson button                            |
| `.btn-outline-ivory` | Outlined ivory button (dark backgrounds)         |
| `.btn-outline-crimson` | Outlined crimson button (light backgrounds)    |
| `.btn-gold`          | Gold gradient button                             |
| `.section-label`     | Small caps label with gold side lines            |
| `.gold-divider`      | Short gold horizontal rule                       |
| `.card`              | Base card with hover border + shadow             |
| `.form-input`        | Styled input / textarea / select                 |
| `.grid-texture`      | Subtle gold dot-grid background overlay          |
| `.text-gradient-gold`| Gold gradient text                               |
| `.bg-hero-dark`      | Dark radial gradient used in hero/page heroes    |

---

*Built for The Africa Laureate Awards — Supporting Independent Authors Across Africa*
