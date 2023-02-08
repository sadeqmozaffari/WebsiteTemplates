/*===== Menu =====*/
const triggerMenu = document.querySelector("#trigger-menu");
const mobileMenuContainer = document.querySelector("#menu-mobile-container");
const closeMenu = document.querySelector("#menu-mobile-container .dark-part");

triggerMenu.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
});
closeMenu.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active");
});
