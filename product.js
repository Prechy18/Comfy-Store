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
    id:"prod-1",
    img: "images/light.jpeg",
    label: "Avant-Garde Lamp",
    price: 179.99,
    link: "prod-details.html",
    company: "Modenza",
    categories: "Table , all",
  },

  {
    id:"prod-2",
    img: "images/chair.jpeg",
    label: "Chic Chair",
    price: 333.9,
    link: "prod-details.html",
    company: "Luxora",
    categories: "Kids , Chair , all",
  },

  {
    id:"prod-3",
    img: "images/coffee.jpeg",
    label: "Coffee Table",
    price: 179.99,
    link: "prod-details.html",
    company: "Modenza",
    categories: "Table , all",
  },

  {
    id:"prod-4",
    img: "images/bed.jpeg",
    label: "Comfy Bed",
    price: 129.99,
    link: "prod-details.html",
    company: "Homestead",
    categories: "Beds , all",
  },

  {
    id:"prod-5",
    img: "images/sofa.jpeg",
    label: "Contemporary Sofa",
    price: 159.99,
    link: "prod-details.html",
    company: "Comfora",
    categories: "Sofas , all",
  },

  {
    id:"prod-6",
    img: "images/bed2.jpeg",
    label: "Cutting-Edge Bed",
    price: 84.99,
    link: "prod-details.html",
    company: "Homestead",
    categories: "Beds , all",
  },

  {
    id:"prod-7",
    img: "images/book.jpeg",
    label: "Futuristic Shelves",
    price: 94.99,
    link: "prod-details.html",
    company: "Luxora",
    categories: "Kids , all",
  },

  {
    id:"prod-8",
    img: "images/glass.jpeg",
    label: "Glass Table",
    price: 159.99,
    link: "prod-details.html",
    company: "Modenza",
    categories: "Table , all",
  },

  {
    id:"prod-9",
    img: "images/king.webp",
    label: "King Bed",
    price: 189.99,
    link: "prod-details.html",
    company: "Homestead",
    categories: "Beds , all",
  },

  {
    id:"prod-10",
    img: "images/lounge.webp",
    label: "Lounge Chair",
    price: 259.99,
    link: "prod-details.html",
    company: "Luxora",
    categories: "Chair , all",
  },

  {
    id:"prod-11",
    img: "images/mini.jpeg",
    label: "Minimalist Shelves",
    price: 439.99,
    link: "prod-details.html",
    company: "Artifex",
    categories: "Beds , all",
  },

  {
    id:"prod-12",
    img: "images/morden.jpeg",
    label: "Morden Sofa",
    price: 299.99,
    link: "prod-details.html",
    company: "Comfora",
    categories: "Sofas , all",
  },

  {
    id:"prod-13",
    img: "images/morden2.webp",
    label: "Modern Table",
    price: 389.99,
    link: "prod-details.html",
    company: "Modenza",
    categories: "Table , all",
  },

  {
    id:"prod-14",
    img: "images/recli.jpeg",
    label: "Reclining Sofa",
    price: 329.99,
    link: "prod-details.html",
    company: "Comfora",
    categories: "Sofas , all",
  },

  {
    id:"prod-15",
    img: "images/sect.jpeg",
    label: "Sectional Sofa",
    price:359.99,
    link: "prod-details.html",
    company: "Comfora",
    categories: "Sofas , all",
  },

  {
    id:"prod-16",
    img: "images/sleek.jpeg",
    label: "Sleek Bed",
    price: 539.99,
    link: "prod-details.html",
    company: "Homestead",
    categories: "Beds , all",
  },

  {
    id:"prod-17",
    img: "images/sleek2.jpeg",
    label: "Sleek Chair",
    price: 199.99,
    link: "prod-details.html",
    company: "Luxora",
    categories: "Chair , all",
  },

  {
    id:"prod-18",
    img: "images/stream.webp",
    label: "Streamlined Table",
    price: 209.99,
    link: "prod-details.html",
    company: "Modenza",
    categories: "Table , all",
  },

  {
    id:"prod-19",
    img: "images/stylish.jpeg",
    label: "Stylish Bed",
    price: 169.99,
    link: "prod-details.html",
    company: "Homestead",
    categories: "Beds, all",
  },

  {
    id:"prod-20",
    img: "images/toy.webp",
    label: "Toy shelf",
    price: 79.99,
    link: "prod-details.html",
    company: "Luxora",
    categories: "Kids , all",
  },

  {
    id:"prod-21",
    img: "images/velvet.jpeg",
    label: "Velvet Sofa",
    price: 289.99,
    link: "prod-details.html",
    company: "Luxora",
    categories: "Sofas , all",
  },

  {
    id:"prod-22",
    img: "images/wooden.webp",
    label: "Wooden Shelves",
    price: 119.99,
    link: "prod-details.html",
    company: "Artifex",
    categories: "Kids , all",
  },
];

let gridBtn = document.querySelector(".fa-table-cells")
let listBtn = document.querySelector(".fa-list")
let listCon = document.querySelector(".list")
let gridCon = document.querySelector(".table")

let isGrid = true;

gridBtn.addEventListener("click", () => {
  isGrid = true;
  listContainer.classList.add("hide-container");
  gridContainer.classList.remove("hide-container");
  gridCon.classList.add("active");
  gridBtn.classList.add("act");
  listCon.classList.remove("active");
  listBtn.classList.remove("act");
  listBtn.classList.remove("act-list");
  sliceProduct(cards, 0, 10); 
})

listBtn.addEventListener("click", () => {
  isGrid = false;
  gridContainer.classList.add("hide-container");
  listContainer.classList.remove("hide-container");
  gridCon.classList.remove("active");
  gridBtn.classList.remove("act")
  listCon.classList.add("active");
  listBtn.classList.add("act")
  listBtn.classList.add("act-list")
  sliceProduct(cards,0, 10);
})


function sliceProduct(data, index, number) {

  let sliced = data.slice(index * 10, index * number + number);

  if(isGrid){
    gridContainer.innerHTML = sliced.map((card) => ` <div class="loop">
    <a class="prod-link" href=./${card.link}?id=${card.id}>
      <div class="loop-img">
          <img class="img-contain" src=${card.img} alt="">
        <div class="loop-text">
          <p class="av">${card.label}</p>
          <p class="av-p">$${card.price}</p>
        </div>
      </div>
    </a>
    </div>`).join("");
  } 
  else {
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
         </button>`
    }
}
paginate();



// search and filter products
let searchbtn = document.querySelector(".yel-but")
let searchProductInput = document.querySelector(".search-product");
let category = document.querySelector(".Category")
let company = document.querySelector(".company")

// Function to handle the search logic
function searchProducts() {
  let filteredProducts = [];
  let searchTerm = searchProductInput.value.toLowerCase();
  console.log(searchTerm);
  if (searchTerm == "") {
    sliceProduct(cards, 0, 10);
    return;
  }
  filteredProducts = cards.filter(card => {
    return card.label.toLowerCase().includes(searchTerm);
  });
  console.log(filteredProducts);
  sliceProduct(filteredProducts, 0, 10);
}

// Click event listener for the search button
searchbtn.addEventListener("click", (event) => {
  event.preventDefault();
  searchProducts();
  categories();
  companies();
});

// Category filter
function categories () {
  filteredProducts = [];
  let selectTerm = e.target.value.toLowerCase();
  console.log(selectTerm);
  if (selectTerm == "") {
    sliceProduct(cards, 0, 10);
    return;
  }
  filteredProducts = cards.filter(card => {
    return card.categories.toLowerCase().includes(selectTerm);
  });
  console.log(filteredProducts);
  sliceProduct(filteredProducts, 0, 10);
}

// Company filter
function companies () {
  filteredProducts = [];
  let companyTerm = e.target.value.toLowerCase();
  if (companyTerm == "") {
    sliceProduct(cards, 0, 10);
    return;
  }
  filteredProducts = cards.filter(card => {
    return card.company.toLowerCase().includes(companyTerm);
  });
  sliceProduct(filteredProducts, 0, 10);
};


// Cart number
let cartNumber = document.querySelector(".zero")
let cartMobileNumber = document.querySelector(".zero-mobile")
let toastBox = document.getElementById('toastBox');


const calculateLength = () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = cart.reduce((acc, item) => acc + item.qty, 0);
  console.log(total);
  cartNumber.innerHTML = total;
  cartMobileNumber.innerHTML = total
};

calculateLength();

document.addEventListener("DOMContentLoaded", () => {
  calculateLength();
});

// light and dark mode
const lightDark = document.querySelector(".fa-sun")
const lightDarkMobile = document.querySelector(".sunma")
const cartbtn = document.querySelector(".car")
const moon = document.querySelector(".fa-moon")
const body = document.body;
lightDark.addEventListener('click', () => {
  body.classList.toggle('light-mode')
  body.classList.toggle('dark-mode')
  lightDark.classList.toggle('fa-moon')

  // Save the user's preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Check for saved user preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme + '-mode');
  } else {
    body.classList.add('light-mode'); // Default theme
  }
});

lightDarkMobile.addEventListener('click', () => {
  body.classList.toggle('light-mode')
  body.classList.toggle('dark-mode')
  // lightDark.classList.toggle('fa-moon')
  lightDarkMobile.classList.toggle('fa-moon')

  // Save the user's preference in localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark', lightDark);
  } else {
    localStorage.setItem('theme', 'light', moon);
  }
});

// Check for saved user preference on page load
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    body.classList.add(savedTheme + '-mode');
  } else {
    body.classList.add('dark-mode'); // Default theme
  }
});


let signlink = document.querySelector(".acc")
  let guest = document.querySelector(".guest")
  let create = document.querySelector(".create")
window.addEventListener("DOMContentLoaded", (event) => {
  // Check if we need to add new links
  if (localStorage.getItem("addLinksForProduct") === "true") {
      // Add new links
      const navList = document.getElementById("navList");
      const newLink1 = document.createElement("li");
      newLink1.innerHTML = '<li class="own"><a href="checkout.html">Checkout</a></li>';
      navList.appendChild(newLink1);

      const newLink2 = document.createElement("li");
      newLink2.innerHTML = '<li class="own"><a href="orders.html">Order</a></li>';
      navList.appendChild(newLink2);
      // Clear the localStorage item

      localStorage.removeItem("addLinksForProduct");
     signlink.classList.toggle('acc-inn')
     guest.innerHTML = '<p class="hello">Hello, demo user</p>'
     create.innerHTML = '<button class="guest-logout">Log out</button>'
  }
});