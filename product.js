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


// const slider = document.querySelector("input")
// const value = document.querySelector(".one")

// value.textContent =slider.value
// slider.oninput = function(){
//   value.textContent = ${'1000'}
// }


// let box = document.querySelector(".fa-table-cells")
// let grid = document.querySelector(".fa-list")
// let loopBox = document.querySelector(".loop")
// let loopImg = document.querySelector(".loop-img")
// let loopTx = document.querySelector(".loop-text")


// grid.addEventListener("click", () => {
// loop.classList.toggle("loop-col")
// loopBox.classList.toggle("loop-col")
// loopImg.classList.toggle("loop-imga")
// loopTx.classList.toggle("loop-texta")
// });

// box.addEventListener("click",() => {
//   loopBox.classList.toggle("loop")
//   loopImg.classList.toggle("loop-img")
//   loopTx.classList.toggle("loop-text")
// })