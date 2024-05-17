let openMenuIcon = document.querySelector(".fa-bars");
let closeMenuIcon = document.querySelector(".fa-x");
const mobileNav = document.querySelector(".mobile-nav");
const header = document.querySelector("header");
let searchProductInput = document.querySelector(".search-product");
let category = document.querySelector(".Category")
let company = document.querySelector(".company")

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
    categories: "Table , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/chair.jpeg",
    label: "Chic Chair",
    price: "$333.9",
    link: "htttp",
    company: "Luxora",
    categories: "Kids , Chair , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/coffee.jpeg",
    label: "Coffee Table",
    price: "$179.99",
    link: "htttp",
    company: "Modenza",
    categories: "Table , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/bed.jpeg",
    label: "Comfy Bed",
    price: "$129.99",
    link: "htttp",
    company: "Homestead",
    categories: "Beds , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/sofa.jpeg",
    label: "Contemporary Sofa",
    price: "$159.99",
    link: "htttp",
    company: "Comfora",
    categories: "Sofas , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/bed2.jpeg",
    label: "Cutting-Edge Bed",
    price: "$84.99",
    link: "htttp",
    company: "Homestead",
    categories: "Beds , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/book.jpeg",
    label: "Futuristic Shelves",
    price: "$94.99",
    link: "htttp",
    company: "Luxora",
    categories: "Kids , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/glass.jpeg",
    label: "Glass Table",
    price: "$159.99",
    link: "htttp",
    company: "Modenza",
    categories: "Table , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/king.webp",
    label: "King Bed",
    price: "$189.99",
    link: "htttp",
    company: "Homestead",
    categories: "Beds , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/lounge.webp",
    label: "Lounge Chair",
    price: "$259.99",
    link: "htttp",
    company: "Luxora",
    categories: "Chair , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/mini.jpeg",
    label: "Minimalist Shelves",
    price: "$439.99",
    link: "htttp",
    company: "Artifex",
    categories: "Beds , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/morden.jpeg",
    label: "Morden Sofa",
    price: "$299.99",
    link: "htttp",
    company: "Comfora",
    categories: "Sofas , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/morden2.webp",
    label: "Modern Table",
    price: "$389.99",
    link: "htttp",
    company: "Modenza",
    categories: "Table , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/recli.jpeg",
    label: "Reclining Sofa",
    price: "$329.99",
    link: "htttp",
    company: "Comfora",
    categories: "Sofas , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/sect.jpeg",
    label: "Sectional Sofa",
    price: "$359.99",
    link: "htttp",
    company: "Comfora",
    categories: "Sofas , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/sleek.jpeg",
    label: "Sleek Bed",
    price: "$539.99",
    link: "htttp",
    company: "Homestead",
    categories: "Beds , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/sleek2.jpeg",
    label: "Sleek Chair",
    price: "$199.99",
    link: "htttp",
    company: "Luxora",
    categories: "Chair , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/stream.webp",
    label: "Streamlined Table",
    price: "$209.99",
    link: "htttp",
    company: "Modenza",
    categories: "Table , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/stylish.jpeg",
    label: "Stylish Bed",
    price: "$169.99",
    link: "htttp",
    company: "Homestead",
    categories: "Beds, all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/toy.webp",
    label: "Toy shelf",
    price: "$79.99",
    link: "htttp",
    company: "Luxora",
    categories: "Kids , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/velvet.jpeg",
    label: "Velvet Sofa",
    price: "$289.99",
    link: "htttp",
    company: "Luxora",
    categories: "Sofas , all",
  },

  {
    id:"prod-" + Math.random() * 1000,
    img: "images/wooden.webp",
    label: "Wooden Shelves",
    price: "$119.99",
    link: "htttp",
    company: "Artifex",
    categories: "Kids , all",
  },
];

let gridBtn = document.querySelector(".fa-table-cells")
let listBtn = document.querySelector(".fa-list")
// let loop2 = document.querySelector(".loop")
// let img = document.querySelector(".loop-img")

let isGrid = true;

gridBtn.addEventListener("click", () => {
  isGrid = true;
  listContainer.classList.add("hide-container");
  gridContainer.classList.remove("hide-container");

  sliceProduct(cards, 0, 10); 
})

listBtn.addEventListener("click", () => {
  isGrid = false;
  gridContainer.classList.add("hide-container")
  listContainer.classList.remove("hide-container")
77
  sliceProduct(cards,0, 10);
})



function sliceProduct(data, index, number) {

  let sliced = data.slice(index * 10, index * number + number);

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

sliceProduct(cards, 0, 10);

let pagination = document.querySelector(".page-wrapper");
function paginate() {
  let range = Math.floor(cards / 10);

  for (let i= 0; i <
    Math.ceil(cards.length / 10); i++) {
         pagination.innerHTML += `<button onclick="sliceProduct(cards, ${i}, ${10})" style = "padding: 10px; background-color:#181920; border:none; 
         color: white; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
         font-size: 16px;
         font-weight: 600; cursor: pointer;" class="page-no">${i + 1}
         </bucards,tton>`
    }
}
paginate();

searchProductInput.addEventListener("keyup", (e) => {
  let filteredProducts = [];
  let searchTerm = e.target.value.toLowerCase();
  console.log(searchTerm);
  if(searchTerm  == "") {
    sliceProduct(cards, 0, 10);
    return;
  }
  filteredProducts = cards.filter(card => { 

    return card.label.toLowerCase().includes(searchTerm);

  });
  console.log(filteredProducts);
  sliceProduct(filteredProducts, 0,  10);

})

category.addEventListener("change" , (e) => {
  filteredProducts = [];
  let selectTerm = e.target.value.toLowerCase();
  console.log(selectTerm);
  if(selectTerm == "") {
    sliceProduct(cards, 0, 10);
    return;
  }
  filteredProducts = cards.filter(card => {
    return card.categories.toLowerCase().includes(selectTerm)
  });
  console.log(filteredProducts);
  sliceProduct(filteredProducts, 0, 10)
})

company.addEventListener("change", (e) => {
  filteredProducts = []
  let companyTerm = e.target.value.toLowerCase();
  if (companyTerm == "") {
    sliceProduct(cards, 0, 10);
    return;
  }
  filteredProducts = cards.filter(card => {
    return card.company.toLowerCase().includes(companyTerm)
  });
  sliceProduct(filteredProducts, 0, 10)
})


