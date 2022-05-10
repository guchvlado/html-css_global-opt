function sideMenu() {
    const burger = document.querySelector('.burger'),
          sideMenu = document.querySelector('.side-menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        sideMenu.classList.toggle('active');
    });

    sideMenu.addEventListener('click', (e) => {
        const target = e.target;
        if (target.classList.contains('side-menu__overlay') || target.classList.contains('side-menu__close')) {
            sideMenu.classList.remove('active');
            burger.classList.remove('active');
        }
    });
}

sideMenu();