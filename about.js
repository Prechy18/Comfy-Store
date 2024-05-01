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
let cart = document.querySelector(".car")
let zer02 = document.querySelector(".zero")
let love =document.querySelector(".vetx")
let comfy =document.querySelector(".pan")
let lovelor = document.querySelector(".lovelor")
let own = document.querySelector(".own")

light.addEventListener("click", () => {
    light.classList.toggle("fa-moon");
    sign.classList.toggle("signs")
    home.classList.toggle("signs")
    head.classList.toggle("header")
    logo.classList.toggle("logo2")
    cart.classList.toggle("car2")
    zer02.classList.toggle("ero2")
    body.classList.toggle("body")
    love.classList.toggle("lor2")
    comfy.classList.toggle("our2")
    lovelor.classList.toggle("lor2")
    own.classList.toggle("lor2")
})

let bright = document.querySelector(".sunma")
let zero = document.querySelector(".zero")
let activ = document.querySelector(".active")
let mobilenav = document.querySelector(".mobile-nav")
// let car = document.querySelector(".car")
let icon = document.querySelector(".mobile-menu-icon")


bright.addEventListener("click", () => {
    bright.classList.toggle("fa-moon")
    sign.classList.toggle("signs")
    home.classList.toggle("signs")
    head.classList.toggle("header")
    logo.classList.toggle("logo2")
    body.classList.toggle("body")
    zero.classList.toggle("ero2")
    activ.classList.toggle("signs")
    mobilenav.classList.toggle("header")
    cart.classList.toggle("car2")
    love.classList.toggle("lor2")
    comfy.classList.toggle("our2")
    lovelor.classList.toggle("lor2")
    own.classList.toggle("lor2")
    icon.classList.toggle("icon")
    // car.classList.toggle("ca")
    })