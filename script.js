// ===============================
// SOFTLINK TECHNOLOGY PORTFOLIO
// ===============================

// Hide loader after page loads
window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);
    }

});

// Mobile Menu
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("show-menu");
    });

}
