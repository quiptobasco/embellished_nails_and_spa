document
    .querySelector('.hamburger-menu')
    .addEventListener('click', function () {
        document.querySelector('.menu-container').classList.toggle('open');
    });

document.addEventListener('click', function (event) {
    if (!event.target.matches('.hamburger-menu, .hamburger-menu *')) {
        document.querySelector('.menu-container').classList.remove('open');
    }
});
