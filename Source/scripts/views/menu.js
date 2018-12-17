(function (App) {

    const menuHamburger = $('.menu__hamburger'),
        menuPanel = $('.menu__panel'),
        hamburgerOpen = $('.menu__hamburger .open');

    const init = () => {
        menuHamburger.on('click', () => {
            menuPanel.toggleClass('hide');
            menuPanel.toggleClass('transform-active');
            // hamburgerOpen.toggleClass('open-hamburger-state');
        })
    }
    init();

}(window.App));