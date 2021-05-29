const navbarChanging = document.querySelector('.navbar');
window.addEventListener('scroll',() => {
    if (window.scrollY <= 30) { 
        navbarChanging.style.backgroundColor = 'transparent'; 
    } else {
        navbarChanging.style.backgroundColor = ' rgba(211, 211, 211, 0.8)';
    }
});







