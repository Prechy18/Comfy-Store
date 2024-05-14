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


let gridContainer = document.querySelector(".grid");
let listContainer = document.querySelector(".list-items");

const cards = [
  {
    id:"prod-" + Math.random() * 1000,
    img: "images/light.jpeg",
    label: "Avant-Garde Lamp",
    price: "$179.99",
    link: "htttp",
    company: "Modenza",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/chair.jpeg",
    label: "Chic Chair",
    price: "$333.9",
    link: "htttp",
    company: "Luxora",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/coffee.jpeg",
    label: "Coffee Table",
    price: "$179.99",
    link: "htttp",
    company: "Modenza",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/bed.jpeg",
    label: "Comfy Bed",
    price: "$129.99",
    link: "htttp",
    company: "Homestead",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/sofa.jpeg",
    label: "Contemporary Sofa",
    price: "$159.99",
    link: "htttp",
    company: "Comfora",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/bed2.jpeg",
    label: "Cutting-Edge Bed",
    price: "$84.99",
    link: "htttp",
    company: "Homestead",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/book.jpeg",
    label: "Futuristic Shelves",
    price: "$94.99",
    link: "htttp",
    company: "Luxora",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/glass.jpeg",
    label: "Glass Table",
    price: "$159.99",
    link: "htttp",
    company: "Modenza",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/king.webp",
    label: "King Bed",
    price: "$189.99",
    link: "htttp",
    company: "Homestead",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/lounge.webp",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "Luxora",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/mini.jpeg",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/morden.jpeg",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/morden2.webp",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/recli.jpeg",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/sect.jpeg",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/sleek.jpeg",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/sleek2.jpeg",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/stream.webp",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/stylish.jpeg",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/toy.webp",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/velvet.jpeg",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/wooden.webp",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "",
  },
];

// for (let i = 0; i < 10; i++){
//   productContainer.innerHTML +=`
//   <div class="loop">
// <a class="prod-link" href=${cards[i].link}>
//   <div class="loop-img">
//       <img class="img-contain" src=${cards[i].img} alt="">
//     <div class="loop-text">
//       <p class="av">${cards[i].label}</p>
//       <p class="av-p">${cards[i].price}</p>
//     </div>
//   </div>
// </a>
// </div>
//   `;


let gridBtn = document.querySelector(".fa-table-cells")
let listBtn = document.querySelector(".fa-list")
let loop2 = document.querySelector(".loop")
let img = document.querySelector(".loop-img")

let isGrid = true;

gridBtn.addEventListener("click", () => {
  isGrid = true;
  listContainer.classList.add("hide-container");
  gridContainer.classList.remove("hide-container");

  sliceProduct(0, 10);


 
 
})

listBtn.addEventListener("click", () => {
  isGrid = false;
  gridContainer.classList.add("hide-container")
  listContainer.classList.remove("hide-container")

  sliceProduct(0, 10);

})



function sliceProduct(index, number) {

  let sliced = cards.slice(index * 10, index * number + number);

  if(isGrid){
    gridContainer.innerHTML = sliced.map((card) => ` <div class="loop">
    <a class="prod-link" href=${card.link}>
      <div class="loop-img">
          <img class="img-contain" src=${card.img} alt="">
        <div class="loop-text">
          <p class="av">${card.label}</p>
          <p class="av-p">${card.price}</p>
        </div>
      </div>
    </a>
    </div>`).join("");

  } else {
    listContainer.innerHTML = sliced.map((card) => `
     <a class="list-item" href="${card.link}">
     <div class="image-desc">
         <div class="image-holder">
             <img src="${card.img}" height="130" width="180" alt="">
         </div>
         <div>
             <h2 class="label-text">${card.label}</h2>
             <p class="company-name">${card.company}</p>
         </div>
     </div>
     <div class="pricess">
         ${card.price}
     </div>
 </a>
     
     `).join("")
  }
}

sliceProduct(0, 10);

let pagination = document.querySelector(".page-wrapper");
function paginate() {
  let range = Math.floor(cards / 10);

  for (let i= 0; i <
    Math.ceil(cards.length / 10); i++) {
         pagination.innerHTML += `<button onclick="sliceProduct(${i}, ${10})" style = "padding: 10px; background-color:#181920; border:none; 
         color: white; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
         font-size: 16px;
         font-weight: 600; cursor: pointer;" class="page-no">${i + 1}
         </button>`
    }
}
paginate();
