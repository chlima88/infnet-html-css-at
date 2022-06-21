function getCards(cardName) {

  const grid = document.getElementById("grid1")
  console.log(grid.children)
  // const list = grid.map()

}

function filterGrid(){}

function handleSubmit(event) {
  event.preventDefault()
  console.log(event)
  const name = event.target[0].value
  const cardList = getCards(name)
  filterGrid(cardList)
}

const searchForm = document.querySelectorAll(".search-box__form")
searchForm.forEach((form) => form.addEventListener("submit", handleSubmit ))



function TogleMenu() {
  document.querySelector(".menu__list").classList.toggle("active-component")
}

const openMenuButton = document.querySelector(".header-box__hamburger")
openMenuButton.addEventListener("click", TogleMenu)


const mobileMenuLink = document.querySelectorAll(".menu__link")
mobileMenuLink.forEach(link => link.addEventListener("click", TogleMenu))