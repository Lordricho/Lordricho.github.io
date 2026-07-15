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

// Counter Animation

const counters=document.querySelectorAll(".achievement-card h2");

counters.forEach(counter=>{

const update=()=>{

const target=counter.innerText;

if(isNaN(target)) return;

let current=+counter.getAttribute("data-count")||0;

const increment=Math.ceil(target/60);

if(current<target){

current+=increment;

counter.innerText=current;

counter.setAttribute("data-count",current);

setTimeout(update,20);

}else{

counter.innerText=target;

}

}

update();

});

// Current Year

const footer=document.querySelector("footer p:last-child");

if(footer){

footer.innerHTML=`© ${new Date().getFullYear()} Richard Ayooluwa Ogunyemi | Founder & CEO, Softlink Technology. All Rights Reserved.`;

}

console.log("Softlink Technology Portfolio Loaded Successfully");
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
