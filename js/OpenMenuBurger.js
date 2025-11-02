function toggleMenu() {
    const menu = document.getElementById('mainMenu');
    const burger = document.querySelector('.header_burger');
    const body = document.body;
    
    menu.classList.toggle('active');
    burger.classList.toggle('active');
    body.classList.toggle('lock');
    
    // Закрытие меню при клике на ссылку (для мобильной версии)
    if (window.innerWidth <= 767) {
        const links = menu.querySelectorAll('.header_link');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('active');
                burger.classList.remove('active');
                body.classList.remove('lock');
            });
        });
    }
}