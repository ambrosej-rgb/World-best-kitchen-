document.addEventListener('DOMContentLoaded', () => {

    // --- Dark Mode Logic ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    // Check local storage for saved theme, default to light
    const savedTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        // Apply new theme
        htmlElement.setAttribute('data-theme', newTheme);

        // Save preference so it persists across page loads
        localStorage.setItem('theme', newTheme);
    });

    // --- Mobile Menu Toggle Placeholder ---
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    mobileBtn.addEventListener('click', () => {
        console.log("Mobile menu clicked");
    });

    // --- Menu Logic ---
    const menuGrid = document.getElementById('menu-grid');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function displayMenuItems(items) {
        if (!menuGrid) return;
        if (!items || items.length === 0) {
            menuGrid.innerHTML = '<p class="empty-state">No menu items available.</p>';
            return;
        }

        menuGrid.innerHTML = items.map(item => `
            <article class="menu-item">
                <img src="${item.img || item.image || './images/placeholder.jpeg'}" alt="${item.title}">
                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.priceUsd}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>
        `).join('');
    }

    function setupFilterButtons() {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;
                filterButtons.forEach(btn => btn.classList.toggle('active', btn === button));

                if (category === 'all') {
                    displayMenuItems(window.menuItems);
                    return;
                }

                displayMenuItems(window.menuItems.filter(item => item.category === category));
            });
        });
    }

    const menuData = window.menuItems;
    if (!menuData) {
        console.error('menuItems is not defined. Check that menu.js is loaded before Script.js.');
        return;
    }

    displayMenuItems(menuData); document.addEventListener('DOMContentLoaded', () => {

        // --- Dark Mode Logic ---
        const themeToggleBtn = document.getElementById('theme-toggle');
        const htmlElement = document.documentElement;

        // Check local storage for saved theme, default to light
        const savedTheme = localStorage.getItem('theme') || 'light';
        htmlElement.setAttribute('data-theme', savedTheme);

        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            // Apply new theme
            htmlElement.setAttribute('data-theme', newTheme);

            // Save preference so it persists across page loads
            localStorage.setItem('theme', newTheme);
        });

        // --- Mobile Menu Toggle Placeholder ---
        const mobileBtn = document.querySelector('.mobile-menu-btn');
        mobileBtn.addEventListener('click', () => {
            console.log("Mobile menu clicked");
        });

        // --- Menu Logic ---
        const menuGrid = document.getElementById('menu-grid');
        const filterButtons = document.querySelectorAll('.filter-btn');

        function displayMenuItems(items) {
            if (!menuGrid) return;
            if (!items || items.length === 0) {
                menuGrid.innerHTML = '<p class="empty-state">No menu items available.</p>';
                return;
            }

            menuGrid.innerHTML = items.map(item => `
                <article class="menu-item">
                    <img src="${item.img || item.image || './images/placeholder.jpeg'}" alt="${item.title}">
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">${item.priceUsd}</h4>
                        </header>
                        <p class="item-text">${item.desc}</p>
                    </div>
                </article>
            `).join('');
        }

        function setupFilterButtons() {
            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.dataset.category;
                    filterButtons.forEach(btn => btn.classList.toggle('active', btn === button));

                    if (category === 'all') {
                        displayMenuItems(window.menuItems);
                        return;
                    }

                    displayMenuItems(window.menuItems.filter(item => item.category === category));
                });
            });
        }

        const menuData = window.menuItems;
        if (!menuData) {
            console.error('menuItems is not defined. Check that menu.js is loaded before Script.js.');
            return;
        }

        displayMenuItems(menuData);
        setupFilterButtons();
    });
    setupFilterButtons();
});
