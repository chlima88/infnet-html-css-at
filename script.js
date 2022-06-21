
// Open Close Hamburger Menu
function TogleMenu() {
  document.querySelector(".menu__list").classList.toggle("active-component")
}

const openMenuButton = document.querySelector(".header-box__hamburger")
openMenuButton.addEventListener("click", TogleMenu)

const mobileMenuLink = document.querySelectorAll(".menu__link")
mobileMenuLink.forEach(link => link.addEventListener("click", TogleMenu))