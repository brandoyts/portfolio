const body = document.querySelector("body");
const hamburgerBtn = document.querySelector(".hamburger-btn");
const hamburgerNav = document.querySelector(".hamburger-nav");

let isOpen = false;

function disableScroll(isOpen) {
    if (isOpen) {
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "auto";
    }
}

function openNav() {
    isOpen = !isOpen;

    if (isOpen) {
        hamburgerBtn.style.position = "fixed";
        hamburgerNav.classList.remove("close-nav");
        hamburgerNav.classList.add("open-nav");
        disableScroll(isOpen);
    } else {
        hamburgerBtn.style.position = "absolute";
        hamburgerNav.classList.remove("open-nav");
        hamburgerNav.classList.add("close-nav");
        disableScroll(isOpen);
    }
}

window.addEventListener("DOMContentLoaded", function(e) {
    hamburgerBtn.addEventListener("click", openNav);
});
