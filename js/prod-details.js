const mobileMenuIcon = document.querySelector('.mobile-menu-icon i'); // target the <i>
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuIcon.addEventListener('click', () => {
  // toggle menu
  mobileNav.classList.toggle('show');

  // toggle icon between bars and X
  mobileMenuIcon.classList.toggle('fa-bars');
  mobileMenuIcon.classList.toggle('fa-x');
});

  
  let searchProductInput = document.querySelector(".search-product");
  let category = document.querySelector(".Category")
  let company = document.querySelector(".company")

const cards = [
  {
    id:"prod-1",
    img: "../images/light.jpeg" ,
    label: "Avant-Garde Lamp",
    price: 139.99,
    link: "prod-details.html",
    company: "Modenza",
    categories: "Table , all",
    freeShipping: true,
  },

  {
    id:"prod-2",
    img: "../images/chair.jpeg",
    label: "Chic Chair",
    price: 329.9,
    link: "prod-details.html",
    company: "Luxora",
    categories: "Kids , Chair , all",
    freeShipping: true,
  },

  {
    id:"prod-3",
    img: "../images/coffee.jpeg",
    label: "Coffee Table",
    price: 159.99,
    link: "prod-details.html",
    company: "Modenza",
    categories: "Table , all",
    freeShipping: false,
  },

  {
    id:"prod-4",
    img: "../images/bed.jpeg",
    label: "Comfy Bed",
    price: 729.99,
    link: "prod-details.html",
    company: "Homestead",
    categories: "Beds , all",
    freeShipping: false,
  },

  {
    id:"prod-5",
    img: "/..images/sofa.jpeg",
    label: "Contemporary Sofa",
    price: 559.99,
    link: "prod-details.html",
    company: "Comfora",
    categories: "Sofas , all",
    freeShipping: true,
  },

  {
    id:"prod-6",
    img: "/..images/bed2.jpeg",
    label: "Cutting-Edge Bed",
    price: 679.99,
    link: "prod-details.html",
    company: "Homestead",
    categories: "Beds , all",
    freeShipping: true,
  },

  {
    id:"prod-7",
    img: "/..images/book.jpeg",
    label: "Futuristic Shelves",
    price: 339.99,
    link: "prod-details.html",
    company: "Luxora",
    categories: "Kids , all",
    freeShipping: true,
  },

  {
    id:"prod-8",
    img: "../images/glass.jpeg",
    label: "Glass Table",
    price: 159.99,
    link: "prod-details.html",
    company: "Modenza",
    categories: "Table , all",
    freeShipping: true,
  },

  {
    id:"prod-9",
    img: "../images/king.webp",
    label: "King Bed",
    price: 189.99,
    link: "prod-details.html",
    company: "Homestead",
    categories: "Beds , all",
    freeShipping: true,
  },

  {
    id:"prod-10",
    img: "../images/lounge.webp",
    label: "Lounge Chair",
    price: 259.99,
    link: "prod-details.html",
    company: "Luxora",
    categories: "Chair , all",
    freeShipping: false,
  },

  {
    id:"prod-11",
    img: "../images/mini.jpeg",
    label: "Minimalist Shelves",
    price: 439.99,
    link: "prod-details.html",
    company: "Artifex",
    categories: "Beds , all",
    freeShipping: true,
  },

  {
    id:"prod-12",
    img: "../images/morden.jpeg",
    label: "Morden Sofa",
    price: 299.99,
    link: "prod-details.html",
    company: "Comfora",
    categories: "Sofas , all",
    freeShipping: true,
  },

  {
    id:"prod-13",
    img: "../images/morden2.webp",
    label: "Modern Table",
    price: 389.99,
    link: "prod-details.html",
    company: "Modenza",
    categories: "Table , all",
    freeShipping: false,
  },

  {
    id:"prod-14",
    img: "../images/recli.jpeg",
    label: "Reclining Sofa",
    price: 329.99,
    link: "prod-details.html",
    company: "Comfora",
    categories: "Sofas , all",
    freeShipping: true,
  },

  {
    id:"prod-15",
    img: "../images/sect.jpeg",
    label: "Sectional Sofa",
    price:359.99,
    link: "prod-details.html",
    company: "Comfora",
    categories: "Sofas , all",
    freeShipping: true,
  },

  {
    id:"prod-16",
    img: "../images/sleek.jpeg",
    label: "Sleek Bed",
    price: 539.99,
    link: "prod-details.html",
    company: "Homestead",
    categories: "Beds , all",
    freeShipping: false,
  },

  {
    id:"prod-17",
    img: "../images/sleek2.jpeg",
    label: "Sleek Chair",
    price: 199.99,
    link: "prod-details.html",
    company: "Luxora",
    categories: "Chair , all",
    freeShipping: false,
  },

  {
    id:"prod-18",
    img: "../images/stream.webp",
    label: "Streamlined Table",
    price: 409.99,
    link: "prod-details.html",
    company: "Modenza",
    categories: "Table , all",
    freeShipping: false,
  },

  {
    id:"prod-19",
    img: "../images/stylish.jpeg",
    label: "Stylish Bed",
    price: 599.99,
    link: "prod-details.html",
    company: "Homestead",
    categories: "Beds, all",
    freeShipping: true,
  },

  {
    id:"prod-20",
    img: "../images/toy.webp",
    label: "Toy shelf",
    price: 149.99,
    link: "prod-details.html",
    company: "Luxora",
    categories: "Kids , all",
    freeShipping: true,
  },

  {
    id:"prod-21",
    img: "../images/velvet.jpeg",
    label: "Velvet Sofa",
    price: 499.99,
    link: "prod-details.html",
    company: "Luxora",
    categories: "Sofas , all",
    freeShipping: true,
  },

  {
    id:"prod-22",
    img: "../images/wooden.webp",
    label: "Wooden Shelves",
    price: 299.99,
    link: "prod-details.html",
    company: "Artifex",
    categories: "Kids , all",
    freeShipping: true,
  },
];
// Get ?id=... from the URL
let params = new URLSearchParams(window.location.search);
let productId = params.get("id"); // example: "prod-1"
console.log("Product ID from URL:", productId);


let ShoppingCart = document.querySelector(".pro-cart")

const displaySingleProduct = () => {
  let singleProduct = cards.find(card => card.id === productId);

  if (!singleProduct) {
    console.error("No product found with id:", productId);
    return;
  }

  let { img, label, company, price, id } = singleProduct;

  ShoppingCart.innerHTML += `
    <div class="whole-pro container">
      <div class="cart-img">
          <a href="/pages/index.html">Home</a> 
          <i class="fa-solid fa-arrow-right"></i> 
          <a href="/pages/product.html">Products</a>
          <br>
          <img class="cart-pro" src="${img}" alt="">
      </div>

      <div class="cart-info">
          <p class="cart-name">${label}</p>
          <p class="cart-company">${company}</p>
          <p class="cart-price">$${price}</p>
          <p class="cart-dec">Some product description...</p>
          <div class="colors">
              <p class="colo">Colors</p>
              <button class="green"></button>
              <button class="blue"></button>
          </div>
          <p class="amount">Amount</p>
          <select name="Amount" id="amount">
            ${Array.from({length: 15}, (_, i) => `<option value="${i + 1}">${i + 1}</option>`).join('')}
          </select>
          <br>
          <button onclick="addToCart('${id}')" class="cart-btn">ADD TO CART</button>
      </div>
    </div> 
  `;
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
  let total = cart.reduce((acc , item) => acc + item.qty , 0);
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


let signlink = document.querySelector(".acc")
  let guest = document.querySelector(".guest")
  let create = document.querySelector(".create")
window.addEventListener("DOMContentLoaded", (event) => {
  // Check if we need to add new links
  if (localStorage.getItem("addLinksForProd-det") === "true") {
      // Add new links
      const navList = document.getElementById("navList");
      const newLink1 = document.createElement("li");
      newLink1.innerHTML = '<li class="own"><a href="/pages/checkout.html">Checkout</a></li>';
      navList.appendChild(newLink1);

      const newLink2 = document.createElement("li");
      newLink2.innerHTML = '<li class="own"><a href="/pages/orders.html">Order</a></li>';
      navList.appendChild(newLink2);
      // Clear the localStorage item

      localStorage.removeItem("addLinksForProd-det");
     signlink.classList.toggle('acc-inn')
     guest.innerHTML = '<p class="hello">Hello, demo user</p>'
     create.innerHTML = '<button class="guest-logout">Log out</button>'
  }
});