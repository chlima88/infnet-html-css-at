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

