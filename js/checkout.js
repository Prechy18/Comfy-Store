const mobileMenuIcon = document.querySelector('.mobile-menu-icon i'); // target the <i>
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuIcon.addEventListener('click', () => {
  // toggle menu
  mobileNav.classList.toggle('show');

  // toggle icon between bars and X
  mobileMenuIcon.classList.toggle('fa-bars');
  mobileMenuIcon.classList.toggle('fa-x');
});



let cartNumber = document.querySelector(".zero") // Cart Number
let cartMobileNumber = document.querySelector(".zero-mobile") // Mobile cart number

const calculateLength = () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = cart.reduce((acc, item) => acc + item.qty , 0)
  console.log(total);
  cartNumber.innerHTML = total;
  cartMobileNumber.innerHTML = total;
  
}
calculateLength();


// This is to save the cart number so that when ever we close the site and open it the cart number is still saved there 
document.addEventListener("DOMContentLoaded", () => {
  calculateLength()
})


// To change the page from light mode to dark mode and vise versa
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

// To change the page from light mode to dark mode and vise versa for the responsive view
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

// Function to load cart data from localStorage
const loadCart = () => {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

// function to load the save cart in the localstorage
const saveCart = (cartItems) => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
}
// this is to calculate the price of the item 
let priceCard = document.querySelector(".tag-all")
let shippingPrice = document.querySelector(".sub2");
let taxPrice = document.querySelector(".sub3");

const calculateTotalPrice = () => {
  let subTotalOutput = document.querySelector(".sub1");
  let orderTotalOutput = document.querySelector(".order-price"); 
let cart = loadCart();
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
  calculateTotalPrice()
});


document.querySelector(".guest-logout").addEventListener("click", function () {
  showCustomAlert("Logout succesful")
   window.location.href = "../pages/index.html"
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