# Climate Change — Bilingual Awareness Website

A multi-page, fully responsive website about climate change with **English/Arabic** language switching. Explains what climate change is, its causes, effects, and renewable energy solutions.

## Live Demo

Open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`

## Features

- **EN/AR language toggle** — Switch between English and Arabic with one click, persisted via `localStorage`
- **RTL/LTR support** — Full right-to-left layout when Arabic is selected
- **Dark/Light theme** — Toggle with sun/moon switch, persisted via `localStorage`
- **Scroll animations** — Elements fade in with staggered delays as you scroll, re-animate on scroll up
- **Image animations** — Images scale in with blur and glow effects
- **Mobile responsive** — Hamburger menu on small screens
- **Back to top button** — Appears after scrolling 300px

## Pages

| File | Description |
|---|---|
| `index.html` | Home — overview of climate change, causes, effects, solutions, individual actions |
| `causes.html` | 10 detailed causes of climate change with images |
| `effects.html` | 10 effects on oceans, agriculture, health, economy, biodiversity |
| `renewable-energy.html` | Solar, wind, hydro, biomass, geothermal energy |

## Files

| File | Purpose |
|---|---|
| `index.html` | Home page |
| `causes.html` | Causes page |
| `effects.html` | Effects page |
| `renewable-energy.html` | Renewable energy page |
| `style.css` | Shared stylesheet for all pages |
| `script.js` | Shared JavaScript for all pages |
| `translations.js` | English/Arabic translation strings |
| `صور/` | Images folder |
| `فيديو.mp4` | Background video for home page |

## Tech Stack

- HTML5, CSS3, vanilla JavaScript (no frameworks)
- Cairo font (Google Fonts)
- Font Awesome 6.7.2 (icons)
