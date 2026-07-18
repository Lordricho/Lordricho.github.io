// Hide Loading Screen
window.onload = function () {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.style.display = "none";
    }
};

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn) {
    menuBtn.addEventListener("click", function () {
        navLinks.classList.toggle("show-menu");
    });
}

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("show-menu");
    });
});
