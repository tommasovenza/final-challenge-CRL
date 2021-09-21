// menu to click
const burgerMenu = document.querySelector(".fa-bars")
const crossHidden = document.querySelector(".cross-hidden")

// all stuff to change
const containerFlex = document.querySelector(".container.flex")
const containerNav = document.querySelector(".navigation")
const mainNav = document.querySelector(".main-nav")
const mainNavLi = Array.from(document.querySelectorAll(".main-nav li"))

const logo = document.querySelector(".logo")
const menuHidden = document.querySelector(".menu-hidden")

// event click on burgerMenu
burgerMenu.addEventListener("click", () => {
  mainNav.classList.add("d-flex")
  containerFlex.classList.add("height-js")
  containerNav.classList.add("width-js")
  logo.classList.add("d-none-js")
  menuHidden.classList.add("d-none-js")
  crossHidden.classList.add("active-js")

  mainNavLi.forEach((listItem) => {
    listItem.classList.add("margin-js")
  })
})

// event click on cross
crossHidden.addEventListener("click", () => {
  mainNav.classList.remove("d-flex")
  containerFlex.classList.remove("height-js")
  containerNav.classList.remove("width-js")
  logo.classList.remove("d-none-js")
  menuHidden.classList.remove("d-none-js")
  crossHidden.classList.remove("active-js")

  mainNavLi.forEach((listItem) => {
    listItem.classList.remove("margin-js")
  })
})
