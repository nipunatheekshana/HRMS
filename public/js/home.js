document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarMenu = document.querySelector('.navbar-menu');

    toggleButton.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});
