// menu to click
const burgerMenu = document.querySelector(".fa-bars")

// all stuff to change
const containerFlex = document.querySelector(".container.flex")
const containerNav = document.querySelector(".navigation")
const mainNav = document.querySelector(".main-nav")
const mainNavLi = Array.from(document.querySelectorAll(".main-nav li"))

const logo = document.querySelector(".logo")
const menuHidden = document.querySelector(".menu-hidden")

// event click
burgerMenu.addEventListener("click", () => {
  mainNav.classList.add("d-flex")
  containerFlex.classList.add("height-js")
  containerNav.classList.add("width-js")
  logo.classList.add("d-none-js")
  menuHidden.classList.add("d-none-js")

  mainNavLi.forEach((listItem) => {
    listItem.classList.add("margin-js")
  })
})
