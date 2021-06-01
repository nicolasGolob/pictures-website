const navbarChanging = document.querySelector('.navbar');
window.addEventListener('scroll',() => {
    if (window.scrollY <= 30) { 
        navbarChanging.style.backgroundColor = 'transparent'; 
    } else {
        navbarChanging.style.backgroundColor = ' rgba(211, 211, 211, 0.8)';
    }
});

/* Scroll Effect */
gsap.to('.title-p1', {duration:1, y:0, autoAlpha:1, scrollTrigger: { trigger:'.title-p1', start : "top 70%", end:"bottom 50%", toggleActions : "play", }});
gsap.to('.stories-picture', { duration:1, y:0, autoAlpha:1, scrollTrigger: { trigger:'.stories-picture', start : "top 80%",end:"bottom 50%", toggleActions : "play",  }});
gsap.to('.text-p1', {duration:1, y:0, autoAlpha:1, scrollTrigger: { trigger:'.text-p1', start : "top 60%", end:"bottom 40%", toggleActions : "play",  }});
gsap.to('.text-p2', { duration:1, y:0, autoAlpha:1, scrollTrigger: { trigger:'.text-p2', start : "top 50%", end:"bottom 40%", toggleActions : "play",  }});
gsap.to('.stories-picture-2', {duration:1, y:0, autoAlpha:1, scrollTrigger: { trigger:'.stories-picture-2', start : "top 65%", end:"bottom 40%", toggleActions : "play",   }});




