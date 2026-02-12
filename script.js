document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        // Toggle menu
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            menuToggle.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && e.target !== menuToggle) {
                navLinks.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        });
    }

    // Scroll Animation Observer with staggered effect
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px" // Offset trigger
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('h1, p, img, h2, video, .card, .hidden');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden');
        observer.observe(el);
    });

    // Back to Top Button Logic
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

    // Theme Toggle Logic with Checkbox
    const themeInput = document.getElementById('input'); // Checkbox ID from custom CSS
    const body = document.body;

    // Load saved theme
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        if (themeInput) themeInput.checked = true; // Checked = Light mode/Sun
    } else {
        body.classList.remove('light-mode');
        if (themeInput) themeInput.checked = false; // Unchecked = Dark mode/Moon
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
