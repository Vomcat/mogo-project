const navElement = document.querySelector(".navbar");
const bodyElement = document.getElementsByTagName("body")[0];
const hamburgerElement = document.querySelector(".navbar__hamburger");

hamburgerElement.addEventListener("click", function () {
  navElement.classList.toggle("navbar--mobile-active");
  bodyElement.classList.toggle("overflow-hidden");
});
