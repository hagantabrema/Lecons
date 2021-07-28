const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav_list");
const navLink = document.querySelectorAll(".nav_link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
}