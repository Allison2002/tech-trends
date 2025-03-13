document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.getElementById('search-icon');
    const searchPopup = document.getElementById('search-popup');
    const hamburgerIcon = document.getElementById('menu-toggle');
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const body = document.body;

    // Function to handle search toggle
    function toggleSearch() {
        const windowWidth = window.innerWidth; // Get the current window width

        if (searchPopup.classList.contains('show')) {
            // Remove padding when search is hidden
            searchPopup.classList.remove('show');
            body.classList.remove('with-popup');
            if (windowWidth <= 1024) {
                body.style.paddingTop = '0'; // Reset padding only for small screens
            }
        } else {
            // Add padding when search is visible and screen is 1024px or smaller
            searchPopup.classList.add('show');
            body.classList.add('with-popup');
            if (windowWidth <= 1024) {
                body.style.paddingTop = '6em'; // Add padding for small screens
            }
        }
    }

    // Function to handle hamburger menu toggle
    function toggleHamburger() {
        if (hamburgerMenu.classList.contains('show')) {
            hamburgerMenu.classList.remove('show');
            document.body.classList.remove('modal-open');
        } else {
            hamburgerMenu.classList.add('show');
            document.body.classList.add('modal-open');
        }
    }

    // Search bar toggle event listener
    searchIcon.addEventListener('click', toggleSearch);

    // Hamburger menu toggle event listener
    hamburgerIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleHamburger();
    });

    // Close the search popup and hamburger menu when clicking outside
    window.addEventListener('click', (e) => {
        // Close the search popup if clicked outside
        if (!searchPopup.contains(e.target) && !searchIcon.contains(e.target)) {
            searchPopup.classList.remove('show');
            body.classList.remove('with-popup');
            if (window.innerWidth <= 1024) {
                body.style.paddingTop = '0'; // Reset padding if screen is small
            }
        }

        // Close the hamburger menu if clicked outside
        if (!hamburgerMenu.contains(e.target) && !hamburgerIcon.contains(e.target)) {
            hamburgerMenu.classList.remove('show');
            document.body.classList.remove('modal-open');
        }
    });

        // Show "Back to Top" button when scrolled down
    const backToTopButton = document.getElementById('back-to-top');

    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    };

    if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((entryList) => {
            const entries = entryList.getEntries();
            entries.forEach(entry => {
                if (entry.entryType === 'largest-contentful-paint') {
                    console.log('LCP: ', entry.startTime); // LCP metric
                }
            });
        });
        observer.observe({ type: 'largest-contentful-paint', buffered: true });
    }


    // Smooth scroll to top when button clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
