// TOGGLE MOBILE NAVIGATION
const mobileBtn = document.querySelector(".mobile-btn");
const exitMobileNav = document.querySelector(".cross");
const mobileNav = document.querySelector(".mobile-nav");

//TOGGLE MOBILE MENU
mobileBtn.addEventListener("click", function(){
    mobileNav.classList.toggle("toggle-mobile");
});

exitMobileNav.addEventListener("click", function(){
    mobileNav.classList.toggle("toggle-mobile");
});

// IMAGE SLIDESHOW
