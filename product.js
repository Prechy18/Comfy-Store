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

let loop = document.getElementById("loop")

const card = [
  {
    id:"prod-" + Math.random() * 1000,
    img: "images/light.jpeg",
    label: "Avant-Garde Lamp",
    price: "$179.99",
    link: "htttp",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/chair.jpeg",
    label: "Chic Chair",
    price: "$333.9",
    link: "htttp",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/coffee.jpeg",
    label: "Coffee Table",
    price: "$179.99",
    link: "htttp",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/bed.jpeg",
    label: "Comfy Bed",
    price: "$129.99",
    link: "htttp",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/sofa.jpeg",
    label: "Contemporary Sofa",
    price: "$159.99",
    link: "htttp",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/bed2.jpeg",
    label: "Cutting-Edge Bed",
    price: "$84.99",
    link: "htttp",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/book.jpeg",
    label: "Futuristic Shelves",
    price: "$94.99",
    link: "htttp",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/glass.jpeg",
    label: "Glass Table",
    price: "$159.99",
    link: "htttp",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/king.webp",
    label: "King Bed",
    price: "$189.99",
    link: "htttp",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/lounge.webp",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
  },
];

for (let i = 0; i < 10; i++){
  loop.innerHTML +=`
        <a href=${card[i].link}>
           <div class="loop-img">
               <img src=${card[i].img} alt="">
                  <div class="loop-text">
                    <p class="av">${card[i].label}</p>
                    <p class="av-p">${card[i].price}</p>
                  </div>
            </div>
            </a>
  `;
}
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