document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    const searchPopup = document.getElementById('search-popup');
    const hamburgerIcon = document.getElementById('menu-toggle');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const backToTopButton = document.getElementById('back-to-top');
    const body = document.body;

    let scrollTimeout = null;

    // Prioritize hero image loading
    const heroImage = document.querySelector(".hero img");
    if (heroImage) {
        heroImage.addEventListener("load", () => {
            document.body.classList.add("hero-loaded");
        });
    }

    // Defer event listeners using requestIdleCallback or setTimeout
    if ('requestIdleCallback' in window) {
        requestIdleCallback(addEventListeners);
    } else {
        setTimeout(addEventListeners, 100);
    }

    function addEventListeners() {
        searchIcon.addEventListener('click', toggleSearch);
        hamburgerIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleHamburger();
        });
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        window.addEventListener('click', (e) => {
            if (!searchPopup.contains(e.target) && !searchIcon.contains(e.target)) {
                searchPopup.classList.remove('show');
                body.classList.remove('with-popup');
                if (window.innerWidth <= 1024) body.style.paddingTop = '0';
            }
            if (!hamburgerMenu.contains(e.target) && !hamburgerIcon.contains(e.target)) {
                hamburgerMenu.classList.remove('show');
                document.body.classList.remove('modal-open');
            }
        });

        window.addEventListener('scroll', () => {
            if (scrollTimeout) return;
            scrollTimeout = requestAnimationFrame(() => {
                if (document.documentElement.scrollTop > 200) {
                    backToTopButton.style.display = 'block';
                } else {
                    backToTopButton.style.display = 'none';
                }
                scrollTimeout = null;
            });
        });
    }

    function toggleSearch() {
        const windowWidth = window.innerWidth;
        searchPopup.classList.toggle('show');
        body.classList.toggle('with-popup');
        if (windowWidth <= 1024) {
            body.style.paddingTop = searchPopup.classList.contains('show') ? '6em' : '0';
        }
    }

    function toggleHamburger() {
        hamburgerMenu.classList.toggle('show');
        document.body.classList.toggle('modal-open');
    }
});
