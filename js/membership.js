// NAVBAR START
let menuButton = document.getElementById('menu-button');
let mobileMenu = document.getElementById('mobile-menu');
let menuIcon = document.getElementById('menu-icon');
let closeIcon = document.getElementById('close-icon');

menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
});
// NAVBAR END