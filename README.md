# CLIMATE CHANGE — AN ARABIC AWARENESS WEBSITE
#### Video Demo:  <URL HERE>
#### Description:

Climate Change is a multi-page, fully responsive website written in Arabic (right-to-left) that explains what climate change is, what causes it, what its consequences are, and how renewable energy can be part of the solution. I built it as my CS50 final project because most of the well-designed climate-awareness material online is in English, and I wanted to make the same information approachable for Arabic-speaking readers, including students my age who are seeing this topic for the first time.

The site is built with plain HTML5, CSS3, and vanilla JavaScript. There is no framework and no build step: you can clone the repository and open `index.html` directly in a browser, or serve the folder with `python3 -m http.server 8000` and visit `http://localhost:8000`. I deliberately avoided frameworks so that every line of layout, styling, and behaviour in the project is something I wrote and understand.

## Files in this project

**`index.html`** — the home page. It opens with an autoplaying, muted, looping background video (`فيديو.mp4`) to grab attention, then walks the reader through a full overview: a definition of climate change, quick facts (the last decade held the hottest recorded temperatures; sea levels rose about 20 cm over the past century), the main human causes, the resulting impacts, the possible solutions, and finally a personal section on what an individual can do at home, while commuting, while shopping, and in their community. It ends with an interactive-thinking section about calculating your own carbon footprint, and a footer with social links.

**`causes.html`** — a dedicated deep dive into the causes of climate change: burning fossil fuels for energy, deforestation reducing the planet's ability to absorb carbon, agriculture and livestock producing methane, industry, and transport. Each cause is presented as a heading, an explanation, and a supporting photograph, so the page can be read quickly or in detail.

**`effects.html`** — a page about the consequences: rising temperatures, melting ice and rising sea levels, extreme weather such as storms and droughts, loss of biodiversity as species lose their habitats, threats to food security for staple crops like rice and wheat, danger to coastal cities such as Miami and Jakarta, and public-health effects such as the spread of malaria and dengue fever.

**`renewable-energy.html`** — the "solutions" page, covering solar, wind, hydro, geothermal, and other clean energy sources, with ten images illustrating real installations. This page is intentionally the most optimistic one: after two pages of problems, the reader should leave with the sense that workable alternatives already exist.

**`made-by.html`** — a short credits page with information about me and links to my GitHub and social profiles.

**`style.css`** — one shared stylesheet for all five pages. It defines the dark theme, the light-mode overrides, the fixed navigation bar, the hamburger menu that appears on small screens, card and image styling, the scroll-reveal animation classes, and the media queries that make the layout work from phone width up to desktop. Keeping a single stylesheet was itself a design decision, explained below.

**`script.js`** — one shared script for all five pages, run on `DOMContentLoaded`. It handles four separate features: (1) the mobile navigation menu, including toggling the ☰/✖ icon, closing the menu when a link is clicked, and closing it when the user clicks anywhere outside it; (2) scroll animations, implemented with an `IntersectionObserver` that adds a `show` class to headings, paragraphs, images, and videos as they enter the viewport; (3) a "back to top" button that appears only after the user has scrolled 300 pixels and then scrolls smoothly to the top; and (4) a dark/light theme switch whose state is saved in `localStorage`, so a reader's choice survives page navigation and future visits.

**`صور/`** — the images folder, containing every photograph used across the pages.

**`فيديو.mp4`** — the background video used on the home page.

## Design decisions

**One stylesheet and one script instead of per-page files.** The project originally had a separate CSS file for each page, and the JavaScript was written inline inside `<script>` tags at the bottom of each HTML file. That meant every fix — a nav bug, a colour change — had to be repeated five times, and the copies drifted apart. I consolidated everything into `style.css` and `script.js`. The pages are now consistent by construction, the browser caches both files once for the whole site, and a change is made in exactly one place.

**English file names with Arabic content.** The pages were originally named in Arabic, with names such as `اسباب التغير المناخي.html`, and one of them contained a space. Browsers and web servers percent-encode those characters, which made the URLs long and unreadable and made links break depending on how the files were served. I renamed every page to a lower-case, hyphenated English name (`causes.html`, `effects.html`, `renewable-energy.html`, `made-by.html`) and updated every link in the navigation. All visible content stayed in Arabic — only the file names changed, so URLs are now clean and portable while the reader's experience is unchanged.

**`IntersectionObserver` instead of scroll listeners for animation.** The obvious way to trigger reveal animations is a `scroll` event handler that measures element positions, but that runs on every scroll frame and makes the page feel heavy on phones. `IntersectionObserver` lets the browser do this work efficiently and notify me only when an element actually becomes visible. I used a `0.1` threshold with a `-50px` bottom margin so an element starts animating slightly before it is fully in view, which feels more natural than having it pop in.

**Persisting the theme in `localStorage`.** A theme toggle that resets on every page load is worse than no toggle at all, especially on a five-page site where the reader navigates constantly. Reading the saved value before the first paint and applying the `light-mode` class keeps the choice stable across pages and sessions.

**Mobile first, with a real hamburger menu.** The navigation holds five items, which does not fit comfortably on a phone in Arabic. Rather than shrinking the text until it is unreadable, the nav collapses into a hamburger menu below the breakpoint, with the outside-click and link-click handlers that people expect from a mobile menu.

## What I learned

The hardest parts of this project were not the individual features but the things that only show up once a site has more than one page: keeping five pages consistent, handling right-to-left layout correctly in CSS, making a fixed navigation bar behave on both desktop and mobile, and choosing file and asset names that do not break when the site is served over HTTP rather than opened from disk. Refactoring five copies of the CSS and JavaScript into one shared pair of files taught me more about maintainability than writing the original pages did.
