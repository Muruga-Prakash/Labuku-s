document.addEventListener('DOMContentLoaded', () => {
    alert('Welcome to Labuku Boys - The Best Street Snacks in Town!');

    const menuLogo = document.getElementById('menu-logo');
    menuLogo.addEventListener('click', () => {
        window.location.href = 'menu.html';
    });

    const cook = document.querySelector('.animated-cook');
    let position = 0;
    setInterval(() => {
        position += 5;
        cook.style.transform = `translateX(${position % window.innerWidth}px)`;
    }, 100);
});
