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


// Function to load cart data from localStorage
const loadCart = () => {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// function to load the save cart in the localstorage
const saveCart = (cartItems) => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}

let cartNumber = document.getElementById("zero");
let cartMobileNumber = document.querySelector(".zero-mobile")


let cart = loadCart();// Getting the cart from the localstorage
// When the add to cart button is clicked it pick out the product id with the value of the amouunt
// and also call out the cart from the localStorage, if the item already exist in the cart it should add the number of amount picked
// buh if the item doesn't exist it should add the item to the cart but the cart number wouldn't count or show based on the number of item
// but based on the number of item quantity 
const addToCart = (id) => {
  let selectedItem = cards.find(card => card.id == id);
  let itemQuantity = parseInt(document.getElementById("amount").value);
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
  console.log(cart);
  calculateLength();
};

const calculateLength = () => {
  let total = cart.reduce((acc, item) => acc + item.qty, 0);
  console.log(total);
  console.log(total);
  cartNumber.innerHTML = total;
  cartMobileNumber.innerHTML= total;
};

// This is to save the cart number so that when ever we close the site and open it the cart number is still saved there 
document.addEventListener("DOMContentLoaded", () => {
  calculateLength();
});


// Function to display cart items
const displayCartItems = () => {
  const cartItems = loadCart(); // Load cart data
  const cartContainer = document.querySelector(".shop-sec");
  const cartHeader = document.querySelector(".you");

  cartContainer.innerHTML = ''; // Clear previous items

  if (cartItems.length > 0) {
    cartHeader.textContent = "Shopping Cart";

    cartItems.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('shop-cart'); // Adding class to the cart item
      cartItem.style.flexDirection = "row"
      cartItem.style.marginBottom = "35px"
      cartItem.style.paddingBottom = "25px"
      cartItem.style.borderBottom ="1px solid #000"
      cartItem.style.width = "95%"

      cartItem.innerHTML = `
        <div class="shop-img">
          <img src="${item.img}" alt="">
        </div>
        <div class="shop-text">
          <p class="shop-name">${item.label}</p>
          <p class="shop-company">${item.company}</p>
          <p class="shop-color">Color : <button class="blues"></button></p>
        </div>
        <div class="shop-amount">
          <p class="amp">Amount</p>
          <select name="shop-amount" id="shop-am">
            ${Array.from({length: 15}, (_, i) => `<option value="${i + 1}" ${item.qty === i + 1 ? 'selected' : ''}>${i + 1}</option>`).join('')}
          </select>
          <br>
          <button class="shop-remove" data-id="${item.id}">Remove</button>
        </div>
        <div class="shop-price">
          <p>${item.price}</p>
        </div>
      `;
      cartContainer.appendChild(cartItem); // Append each cart item to cartContainer
    });

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll('.shop-remove');
    removeButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const itemId = e.target.getAttribute('data-id');
        removeFromCart(itemId);
        showCustomAlert('Item has been added to cart.')
      });
    });
  } else {
    cartHeader.textContent = "Your Cart Is Empty";
  }
}

// Function to remove an item from the cart
const removeFromCart = (id) => {
  let cartItems = loadCart();
  cartItems = cartItems.filter(item => item.id !== id);
  saveCart(cartItems);
  displayCartItems();
  displayCartCount();
  calculateTotalPrice();
}


// the alert message that showes when you add to cart
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


// Function to calculate and display the cart count
const displayCartCount = () => {
  const cartItems = loadCart();
  const cartCountElement = document.querySelector(".zero");

  if (cartItems.length > 0) {
    const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
    cartCountElement.textContent = totalItems;
  } else {
    cartCountElement.textContent = '0'; // If cart is empty, set count to 0
  }
}

// this is to calculate the price of the item 
let priceCard = document.querySelector(".tag-all")
let shippingPrice = document.querySelector(".sub2");
let taxPrice = document.querySelector(".sub3");

const calculateTotalPrice = () => {
  let subTotalOutput = document.querySelector(".sub1");
  let orderTotalOutput = document.querySelector(".order-price"); 
let cart = loadCart();

if(cart.length === 0){
  priceCard.style.display = 'none'
}else{
  priceCard.style.display = 'block'
}

  console.log(cart);
  let totalPrice = cart.map((item) => {
    let total = item.price * item.qty;
    return total;
  }).reduce((acc, cur) => acc + cur, 0);

  subTotalOutput.innerText = `$${totalPrice.toFixed(2)}`;

  let shippingCost = 5.00;
   // Count total number of items in the cart
   let totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

   // Calculate the tax, doubling it for each item
   let baseTaxCost = 5.00;
   let taxCost = baseTaxCost * (2, totalItems);

  shippingPrice.textContent = `$${shippingCost.toFixed(2)}`;
  taxPrice.textContent = `$${taxCost.toFixed(2)}`;

  let orderTotal = totalPrice + shippingCost + taxCost;
  orderTotalOutput.innerText = `$${orderTotal.toFixed(2)}`;
}

calculateTotalPrice();

// Display cart items and cart count when the page loads
window.addEventListener('DOMContentLoaded', () => {
  displayCartItems();
  displayCartCount();
  calculateTotalPrice()
});


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