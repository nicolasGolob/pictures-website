const navbarChanging = document.querySelector('.navbar');
window.addEventListener('scroll',() => {
    if (window.scrollY <= 30) { 
        navbarChanging.style.backgroundColor = 'transparent'; 
    } else {
        navbarChanging.style.backgroundColor = '#a0a0a0';
    }
});





