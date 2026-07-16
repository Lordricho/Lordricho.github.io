// ==========================================
// SOFTLINK TECHNOLOGY PORTFOLIO
// Richard Ayooluwa Ogunyemi
// ==========================================

// ================================
// Loading Screen
// ================================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.transition = "opacity 0.6s ease";

        loader.style.opacity = "0";

        setTimeout(function () {

            loader.style.display = "none";

        }, 600);

    }

});

// ================================
// Mobile Navigation
// ================================

const menuBtn = document.querySelector(".menu-btn");

const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("show-menu");

    });

}

// ================================
// Close Mobile Menu
// ================================

document.querySelectorAll(".nav-links a").forEach(function(link){

    link.addEventListener("click", function(){

        if(navLinks){

            navLinks.classList.remove("show-menu");

        }

    });

});

// ================================
// Smooth Scrolling
// ================================

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});
