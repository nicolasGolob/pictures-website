const navbarChanging = document.querySelector('.navbar');
window.addEventListener('scroll',() => {
    if (window.scrollY <= 30) { 
        navbarChanging.style.backgroundColor = 'transparent'; 
    } else {
        navbarChanging.style.backgroundColor = 'rgba(211, 211, 211, 0.8)';
    }
});

// Responsive navbar

const hamburgerIcon = document.querySelector(".hamburger-icon");
const navLinks = document.querySelector(".nav-links");
hamburgerIcon.addEventListener("click", responsive);

function responsive() {
    hamburgerIcon.classList.toggle("active");
    navLinks.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach(event => event.addEventListener("click", closeNavBar));
function closeNavBar() {
    hamburgerIcon.classList.remove("active");
    navLinks.classList.remove("active");
}

/***************** Scroll Effect ******************/

/* Stories Part */
const titleP1 = document.querySelector('.title-p1');
const storiesPicture = document.querySelector('.stories-picture');
const textP1 = document.querySelector('.text-p1');
const textP2 = document.querySelector('.text-p2');
const storiesPicture2 = document.querySelector('.stories-picture-2');
const titlep1 = document.querySelector('.title-p1');

gsap.to(titleP1, {duration:1, y:0, autoAlpha:1, scrollTrigger: { trigger:'.title-p1', start : "top 70%", end:"bottom 50%", toggleActions : "play" }});
gsap.to(storiesPicture, { duration:1, y:0, autoAlpha:1, scrollTrigger: { trigger:'.stories-picture', start : "top 80%",end:"bottom 50%", toggleActions : "play" }});
gsap.to(textP1, {duration:1, y:0, autoAlpha:1, scrollTrigger: { trigger:'.text-p1', start : "top 60%", end:"bottom 40%", toggleActions : "play"  }});
gsap.to(textP2, { duration:1, y:0, autoAlpha:1, scrollTrigger: { trigger:'.text-p2', start : "top 50%", end:"bottom 40%", toggleActions : "play"  }});
gsap.to(storiesPicture2, {duration:1, y:0, autoAlpha:1, scrollTrigger: { trigger:'.stories-picture-2', start : "top 65%", end:"bottom 40%", toggleActions : "play"  }});

/* Features Part -> second way to do it */
const galleries = gsap.utils.toArray('.galery');
galleries.forEach((galery) => {
  gsap.to(galery, { duration:1, y:0, autoAlpha: 1,
    scrollTrigger: {
        trigger: galery,
        start: "top 80%",
        end: "bottom 40%",
        toggleActions : "play",
        scrub: true    }
    });
})

/* Contact Part */
const contactBlock = gsap.utils.toArray('.contact');
contactBlock.forEach((contact)=>{
    gsap.to(contact, { duration:1, y:0, autoAlpha: 1,
        scrollTrigger: {
            trigger: contact,
            start: "top 90%",
            end: "bottom 80%",
            toggleActions : "play",
            scrub: true    }
    });
})

