// ==========================================
// SOFTLINK TECHNOLOGY PORTFOLIO
// Richard Ayooluwa Ogunyemi
// ==========================================

// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        loader.style.transition = "0.6s ease";
    }, 1200);
});

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show-menu");
    });
}

// Smooth Close Menu
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show-menu");

    });

});

// Active Navigation

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Fade Animation

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

}, {

    threshold:0.2

});

document.querySelectorAll(".section").forEach(sec=>{

    observer.observe(sec);

});

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters=document.querySelectorAll(".counter");

const speed=120;

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.target;

let count=0;

const update=()=>{

const increment=Math.ceil(target/speed);

count+=increment;

if(count<target){

counter.innerText=count;

requestAnimationFrame(update);

}else{

counter.innerText=target+"+";

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});
/* ==========================================
   FLOATING PARTICLES
========================================== */

function createParticle(){

const particle=document.createElement("div");

particle.className="particle";

particle.style.left=Math.random()*100+"vw";

particle.style.animationDuration=(10+Math.random()*12)+"s";

particle.style.opacity=Math.random();

particle.style.width=(4+Math.random()*8)+"px";

particle.style.height=particle.style.width;

document.body.appendChild(particle);

setTimeout(()=>{
particle.remove();
},22000);

}

setInterval(createParticle,500);
// ==========================================
// Animated Counters
// ==========================================

const counters = document.querySelectorAll('.counter');

const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const speed = 40;

    const updateCounter = () => {
        const current = +counter.innerText;
        const increment = Math.ceil(target / speed);

        if (current < target) {
            counter.innerText = Math.min(current + increment, target);
            setTimeout(updateCounter, 40);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
});
