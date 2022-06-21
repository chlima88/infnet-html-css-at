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


document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
  });
})

// Open Close Hamburger Menu
function TogleMenu() {
  document.querySelector(".menu__list").classList.toggle("active-component")
}

const searchForm = document.querySelectorAll(".search-box__form")
searchForm.forEach((form) => form.addEventListener("submit", handleSubmit ))

const openMenuButton = document.querySelector(".header-box__hamburger")
openMenuButton.addEventListener("click", TogleMenu)

const mobileMenuLink = document.querySelectorAll(".menu__link")
mobileMenuLink.forEach(link => link.addEventListener("click", TogleMenu))