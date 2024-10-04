document.addEventListener('DOMContentLoaded', () => {
        console.log('JavaScript Loaded'); // Test if the script is loaded
        const searchIcon = document.getElementById('search-icon');
        const searchPopup = document.getElementById('search-popup');
        const iconsContainer = document.querySelector('.icons-container');
        const menuToggle = document.getElementById('menu-toggle');
        const hamburgerMenu = document.getElementById('hamburger-menu');
        const contentWrapper = document.querySelector('.content-wrapper'); // Target main content for blur
        // Ensure elements are correctly selected
        console.log(menuToggle, hamburgerMenu); 

        
        searchIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            searchPopup.classList.toggle('show'); // Show/hide the popup
            iconsContainer.classList.toggle('with-popup'); // Adjust padding if needed
        });

        // Toggle the menu and blur effect
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log('Hamburger clicked'); // Log when the icon is clicked

            // Toggle the show class
            hamburgerMenu.classList.toggle('show'); 
            console.log('Classes on hamburgerMenu:', hamburgerMenu.classList); // Log applied classes
            contentWrapper.classList.toggle('blurred');
           
        });

        // Close the menu when clicking outside of it
        window.addEventListener('click', (e) => {
            if (!hamburgerMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                hamburgerMenu.classList.remove('show');
                contentWrapper.classList.remove('blurred');
            }
        });
      });