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
let slider = tns({
    container: '.news-slider',
    items: 1,
    autoplay: true,
    controls: false,
    navPosition: "bottom",
    autoplayButtonOutput: false,
    mouseDrag: true,
    // gutter: 20,
    // edgePadding: 20,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30
      },
      900: {
        items: 3,
        gutter: 20,
      }
    }
  });
