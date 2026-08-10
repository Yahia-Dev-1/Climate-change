# Climate Change

A static, responsive Arabic website about climate change: its definition, causes, effects, and renewable-energy solutions.

## Pages

| File | Content |
| --- | --- |
| `index.html` | Home page: overview, key facts, and a summary of causes, effects, and solutions |
| `causes.html` | Main causes of climate change (اسباب التغير المناخي) |
| `effects.html` | Effects on ecosystems, food security, cities, and health (اثار التغير المناخي) |
| `renewable-energy.html` | Renewable energy sources and technologies (الطاقة المتجددة) |
| `made-by.html` | Credits |

## Structure

```
.
├── index.html              # pages (English file names, Arabic content)
├── causes.html
├── effects.html
├── renewable-energy.html
├── made-by.html
├── style.css               # shared styles for all pages
├── script.js               # shared behaviour (responsive nav toggle)
├── صور/                    # images
└── فيديو.mp4               # hero video on the home page
```

## Tech stack

- HTML5 (RTL Arabic content)
- CSS3 (custom styles, responsive layout)
- Vanilla JavaScript
- [Font Awesome](https://fontawesome.com/) via CDN for icons

## Running locally

No build step or dependencies are required. Clone the repository and open `index.html` in a browser:

```bash
git clone https://github.com/Yahia-Dev-1/Climate-change.git
cd Climate-change
```

Or serve it over HTTP (recommended, so relative asset paths behave like in production):

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deployment

The site is fully static and can be hosted on GitHub Pages, Netlify, Vercel, or any static host. For GitHub Pages, enable Pages in the repository settings and select the default branch with the root (`/`) folder.

## Contributing

1. Create a branch for your change.
2. Keep page file names in English and lower-case with hyphens (e.g. `renewable-energy.html`).
3. Add shared styles to `style.css` and shared behaviour to `script.js` instead of inline tags.
4. Open a pull request describing the change.

## Author

Made by [Yahia](https://github.com/iiyahia).
