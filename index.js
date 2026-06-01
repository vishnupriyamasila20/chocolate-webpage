 const openBtn = document.getElementById('menu-open-button');
    const closeBtn = document.getElementById('menu-close-button');
    const navMenu = document.getElementById('nav-menu');

    openBtn.addEventListener('click', () => {
        navMenu.classList.add('show');
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('show');
    });