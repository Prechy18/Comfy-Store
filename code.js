let openMenuIcon = document.querySelector(".fa-bars");
let closeMenuIcon = document.querySelector(".fa-x");
const mobileNav = document.querySelector(".mobile-nav");
const header = document.querySelector("header");

// when i click on  the menu icon
// open the mobile nav
// change openMenuIcon

openMenuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("slide");
  openMenuIcon.classList.toggle("fa-x");
});

let light = document.querySelector(".fa-sun")
let sign = document.querySelector(".sign")
let head = document.querySelector("header")
let logo = document.querySelector(".logo")
let home = document.querySelector(".home")
let body = document.querySelector("body")
let we = document.querySelector(".we")
let lor = document.querySelector(".lor")
let img = document.querySelector(".firimg")
let probut = document.querySelector(".our")
let featured = document.querySelector(".fea")
let lamp = document.querySelector(".ava")
let coffee = document.querySelector(".coff")
let comfy = document.querySelector(".comf")
let cart = document.querySelector(".car")
let zer02 = document.querySelector(".zero")

light.addEventListener("click", () => {
light.classList.toggle("fa-moon");
sign.classList.toggle("signs")
home.classList.toggle("signs")
head.classList.toggle("header")
logo.classList.toggle("logo2")
probut.classList.toggle("our2")
body.classList.toggle("body")
we.classList.toggle("we2")
lor.classList.toggle("lor2")
img.classList.toggle("firimg2")
featured.classList.toggle("lor2")
lamp.classList.toggle("lor2")
coffee.classList.toggle("lor2")
comfy.classList.toggle("lor2")
cart.classList.toggle("car2")
zer02.classList.toggle("ero2")
});

let bright = document.querySelector(".sunma")
let zero = document.querySelector(".zero")
let activ = document.querySelector(".active")
let mobilenav = document.querySelector(".mobile-nav")
let car = document.querySelector(".car")
let icon = document.querySelector(".mobile-menu-icon")
let ac = document.querySelector(".ac")

bright.addEventListener("click", () => {
bright.classList.toggle("fa-moon")
sign.classList.toggle("signs")
home.classList.toggle("signs")
head.classList.toggle("header")
logo.classList.toggle("logo2")
probut.classList.toggle("our2")
body.classList.toggle("body")
we.classList.toggle("we2")
lor.classList.toggle("lor2")
img.classList.toggle("firimg2")
featured.classList.toggle("lor2")
lamp.classList.toggle("lor2")
coffee.classList.toggle("lor2")
comfy.classList.toggle("lor2")
// zer02.classList.toggle("ero2")
activ.classList.toggle("signs")
mobilenav.classList.toggle("header")
// car.classList.toggle("ca")
icon.classList.toggle("icon")
// ac.classList.toggle("ac2")
})