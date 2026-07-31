document.addEventListener('DOMContentLoaded', () => {
    const htmlElement = document.documentElement;

    if (htmlElement) {
        const savedTheme = localStorage.getItem('theme') || 'light';
        htmlElement.setAttribute('data-theme', savedTheme);
    }

    const themeToggleBtn = document.getElementById('theme-toggle');
    if (themeToggleBtn && htmlElement) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme') || 'light';
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';

            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const desktopNav = document.querySelector('.desktop-nav');
    const navContainer = document.querySelector('.nav-container');

    if (mobileBtn && desktopNav && navContainer) {
        const desktopLinks = desktopNav.querySelector('.nav-links');

        if (desktopLinks) {
            const mobileNav = document.createElement('nav');
            mobileNav.className = 'mobile-nav';
            mobileNav.setAttribute('aria-label', 'Mobile Navigation');
            mobileNav.innerHTML = `
                <ul class="mobile-nav-links">
                    ${Array.from(desktopLinks.children).map((listItem) => {
                const link = listItem.querySelector('a');
                if (!link) return '';
                return `<li><a href="${link.getAttribute('href') || '#'}">${link.textContent.trim()}</a></li>`;
            }).join('')}
                </ul>
            `;

            navContainer.appendChild(mobileNav);

            const closeMenu = () => {
                mobileNav.classList.remove('open');
                mobileBtn.setAttribute('aria-expanded', 'false');
                mobileBtn.textContent = '☰';
            };

            const openMenu = () => {
                mobileNav.classList.add('open');
                mobileBtn.setAttribute('aria-expanded', 'true');
                mobileBtn.textContent = '✕';
            };

            mobileBtn.addEventListener('click', (event) => {
                event.stopPropagation();
                if (mobileNav.classList.contains('open')) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });

            mobileNav.querySelectorAll('a').forEach((link) => {
                link.addEventListener('click', closeMenu);
            });

            document.addEventListener('click', (event) => {
                if (!navContainer.contains(event.target)) {
                    closeMenu();
                }
            });

            window.addEventListener('resize', () => {
                if (window.innerWidth > 768) {
                    closeMenu();
                }
            });
        }
    }

    const menuGrid = document.getElementById('menu-grid');
    const filterButtons = Array.from(document.querySelectorAll('.filter-btn'));

    function displayMenuItems(items) {
        if (!menuGrid) return;

        if (!items || items.length === 0) {
            menuGrid.innerHTML = '<p class="empty-state">No menu items available.</p>';
            return;
        }

        menuGrid.innerHTML = items.map((item) => `
            <article class="menu-item">
                <img src="${item.img || item.image || './images/dinning.jpeg'}" alt="${item.title}">
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
        filterButtons.forEach((button) => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;
                filterButtons.forEach((btn) => btn.classList.toggle('active', btn === button));

                if (category === 'all') {
                    displayMenuItems(window.menuItems);
                    return;
                }

                if (window.menuItems) {
                    displayMenuItems(window.menuItems.filter((item) => item.category === category));
                }
            });
        });
    }

    if (menuGrid && filterButtons.length > 0 && window.menuItems) {
        displayMenuItems(window.menuItems);
        setupFilterButtons();
    }
});
