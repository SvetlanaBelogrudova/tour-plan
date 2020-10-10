var hotelSlider = new Swiper(".hotel-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".hotel-slider__button--prev",
    prevEl: ".hotel-slider__button--next",
  },
});
var reviewsSlider = new Swiper(".reviews-slider", {
  // Optional parameters
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".reviews-slider__button--prev",
    prevEl: ".reviews-slider__button--next",
  },
});

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function() {
  console.log("Клик по кнопке меню");
  document
   .querySelector(".navbar-bottom")
   .classList.toggle("navbar-bottom--visible");
});