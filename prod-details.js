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


let searchParams = new URLSearchParams(window.location.search)
const productId = searchParams.get("id");
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

let ShoppingCart = document.querySelector(".pro-cart")
const displaySingleProduct = () => {
  let singleProduct = cards.find(card => card.id === productId);
  let { img, label, company, price, id } = singleProduct
  console.log(singleProduct);

    ShoppingCart.innerHTML += `
    <div class="whole-pro containers">
  <div class="cart-img">
      <a href="index.html">Home</a> <i class="fa-solid fa-arrow-right"></i> <a href="product.html">Products</a>
      <br>
      <img class="cart-pro" src="${img}" alt="">
  </div>

  <div class="cart-info">
      <p class="cart-name">${label}</p>
      <p class="cart-company">${company}</p>
      <p class="cart-price">${price}</p>
      <p class="cart-dec">Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge</p>
      <div class="colors">
          <p class="colo">Colors</p>
          <button class="green"></button>
          <button class="blue"></button>
      </div>
          <p class="amount">Amount</p>
          <select  name="Amount" id="amount">
             ${Array.from({length: 15}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
          </select>
          <br>
          <button onclick="addToCart('${id}')" class="cart-btn">ADD TO CART</button>
  </div>
  </div> 
  `

}
displaySingleProduct();

let cartNumber = document.querySelector(".zero")
let cartMobileNumber = document.querySelector(".zero-mobile")
let toastBox = document.getElementById('toastBox');

const addToCart = (id) => {
  let selectedItem = cards.find(card => card.id == id);
  let itemQuantity = parseInt(document.getElementById("amount").value);
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(itemQuantity);

  const existingItem = cart.find(card => card.id == id);
  if (existingItem) {
    existingItem.qty += itemQuantity;
  } else {
    cart.push({
      ...selectedItem,
      qty: itemQuantity,
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  showCustomAlert('Item has been added to cart.');
  console.log(cart);
  calculateLength();
};

const calculateLength = () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = cart.reduce((acc , item) => acc
   + item.qty , 0);
  console.log(total);
  cartNumber.innerHTML = total;
  cartMobileNumber.innerHTML = total;
};

calculateLength();

document.addEventListener("DOMContentLoaded", () => {
  calculateLength();
});


// Function to show custom alert
const showCustomAlert = (message) => {
  const alertBox = document.getElementById('custom-alert');
  const alertMessage = document.getElementById('alert-message');
  
  alertMessage.textContent = message;
  alertBox.classList.add('show');
  alertBox.classList.remove('hide');
  
  // Hide the alert after 3 seconds
  setTimeout(() => {
    alertBox.classList.remove('show');
    alertBox.classList.add('hide');
  }, 3000);
};





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