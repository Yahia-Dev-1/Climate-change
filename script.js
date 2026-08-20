document.addEventListener('DOMContentLoaded', () => {

    // --- Language Switching ---
    const langToggle = document.getElementById('langToggle');
    let currentLang = localStorage.getItem('lang') || 'en';

    function applyLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('lang', lang);

        // Set html lang and dir
        const htmlEl = document.documentElement;
        htmlEl.setAttribute('lang', lang === 'ar' ? 'ar' : 'en');
        htmlEl.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

        // Update button text (show what you switch TO)
        if (langToggle) {
            langToggle.textContent = lang === 'en' ? 'AR' : 'EN';
        }

        // Update page title
        const titleEl = document.querySelector('title[data-i18n]');
        if (titleEl && translations[lang]) {
            const key = titleEl.getAttribute('data-i18n');
            if (translations[lang][key]) {
                document.title = translations[lang][key];
            }
        }

        // Update all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Add/remove RTL class for extra styling hooks
        document.body.classList.toggle('rtl', lang === 'ar');
    }

    // Apply saved or default language
    applyLanguage(currentLang);

    // Language toggle click
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            const newLang = currentLang === 'en' ? 'ar' : 'en';
            applyLanguage(newLang);
        });
    }

    // --- Mobile Hamburger Menu ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            menuToggle.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
        });

        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });

        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && e.target !== menuToggle) {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });
    }

    // --- Scroll Animation Observer with Re-animate on Scroll Up ---
    const observerOptions = {
        threshold: 0.05,
        rootMargin: "0px 0px -30px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('h1:not(footer h1), p:not(footer p), img:not(footer img), h2:not(footer h2), video:not(footer video), .card:not(footer .card)');
    let delay = 0;
    hiddenElements.forEach((el) => {
        el.classList.add('hidden');
        if (el.tagName === 'H1') {
            el.classList.add('from-left');
        } else if (el.tagName === 'IMG') {
            el.classList.add('fade-scale');
        }
        el.style.transitionDelay = delay + 'ms';
        observer.observe(el);
        delay += 50;
        if (delay > 300) delay = 0;
    });

    // Fallback: on mobile, force show all hidden elements after 2s
    if (window.innerWidth <= 790) {
        setTimeout(() => {
            hiddenElements.forEach(el => el.classList.add('show'));
        }, 2000);
    }

    // --- Back to Top Button ---
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        window.onscroll = function () {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        };

        backToTopButton.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

    // --- Theme Toggle ---
    const themeInput = document.getElementById('input');
    const body = document.body;

    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        if (themeInput) themeInput.checked = true;
    } else {
        body.classList.remove('light-mode');
        if (themeInput) themeInput.checked = false;
    }

    if (themeInput) {
        themeInput.addEventListener('change', () => {
            if (themeInput.checked) {
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light');
            } else {
                body.classList.remove('light-mode');
                localStorage.setItem('theme', 'dark');
            }
        });
    }
});
