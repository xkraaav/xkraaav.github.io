// Show navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 500) {
        navbar.classList.add('visible');
    } else {
        navbar.classList.remove('visible');
    }
});