// ==========================================================================
// GUARANTEED RUNNING INTERACTIVITY CODE
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed!");

    // Elements Selection
    const burgerMenu = document.getElementById('burgerMenu');
    const navLinks = document.getElementById('navLinks');
    const searchIcon = document.getElementById('searchIcon');
    const searchGroup = document.getElementById('searchGroup');
    const searchInput = document.getElementById('searchInput');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    const actionButtons = document.querySelectorAll('.btn-dark:not(#themeToggleBtn), .btn-light');

    // 1. DYNAMIC SEARCH BAR TOGGLE (FIXED)
    if (searchIcon && searchGroup && searchInput) {
        searchIcon.addEventListener('click', (e) => {
            e.stopPropagation(); // Click background tak na jaye
            console.log("Search icon clicked!");
            
            // Toggle logic
            if (!searchGroup.classList.contains('search-active')) {
                searchGroup.classList.add('search-active');
                searchInput.focus(); // Automatically cursor input field me chala jaye
            } else {
                if (searchInput.value.trim() === "") {
                    searchGroup.classList.remove('search-active');
                } else {
                    alert(`Searching for: "${searchInput.value}"`);
                }
            }
        });

        // Search bar se bahar click karne par smoothly close ho jaye
        document.addEventListener('click', (e) => {
            if (!searchGroup.contains(e.target) && searchInput.value.trim() === "") {
                searchGroup.classList.remove('search-active');
            }
        });
    } else {
        console.error("Search elements missing in HTML! Check IDs: searchIcon, searchGroup, searchInput");
    }

    // 2. MOBILE BURGER MENU TOGGLE
    if (burgerMenu && navLinks) {
        burgerMenu.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active'); 
            burgerMenu.classList.toggle('toggle-cross'); 
        });

        document.addEventListener('click', (e) => {
            if (!burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                burgerMenu.classList.remove('toggle-cross');
            }
        });
    }

    // 3. THEME SWITCHER (Only runs if button exists)
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('warm-mode');
            if (document.body.classList.contains('warm-mode')) {
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Cozy Light';
                themeToggleBtn.style.backgroundColor = '#4a3625';
            } else {
                themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i> Warm Mode';
                themeToggleBtn.style.backgroundColor = '#0f2233';
            }
        });
    }

    // 4. BUTTONS FEEDBACK
    actionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const originalText = button.innerText;
            if (originalText !== "Processing... ✨") {
                button.innerText = "Processing... ✨";
                button.style.opacity = "0.7";
                button.style.pointerEvents = "none";
                
                setTimeout(() => {
                    button.innerText = originalText;
                    button.style.opacity = "1";
                    button.style.pointerEvents = "auto";
                    alert(`Thank you for interacting! You clicked: "${originalText}"`);
                }, 800);
            }
        });
    });
});