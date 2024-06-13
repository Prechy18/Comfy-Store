let openMenuIcon = document.querySelector(".fa-bars");
let closeMenuIcon = document.querySelector(".fa-x");
const mobileNav = document.querySelector(".mobile-nav");
const header = document.querySelector("header");

// when i click on  the menu icon
// open the mobile nav
// change openMenuIcon
// Mobile link on the Nav-bar
openMenuIcon.addEventListener("click", () => {
  mobileNav.classList.toggle("slide");
  openMenuIcon.classList.toggle("fa-x");
});


let cartNumber = document.querySelector(".zero") // Cart Number
let cartMobileNumber = document.querySelector(".zero-mobile") // Mobile cart number


// When the add to cart button is clicked it pick out the product id with the value of the amouunt
// and also call out the cart from the localStorage, if the item already exist in the cart it should add the number of amount picked
// buh if the item doesn't exist it should add the item to the cart but the cart number wouldn't count or show based on the number of item
// but based on the number of item quantity 
const addToCart = (id) => {
  let selectedItem = cards.find(card => card.id == id);
  let itemQuatity = parseInt(document.getElementById("amount").value)
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(itemQuatity);

  const existingItem = cart.find(card => card.id == id)
  if(existingItem){
    existingItem.itemQuatity += itemQuatity
  } else {
    cart.push({
    ...selectedItem,
    qty: itemQuatity,
  }) 
  }

  localStorage.setItem('cart', JSON.stringify(cart)) // u have to change the item to a string for you to be able to store it in the localstorage

  console.log(cart);
  calculateLength();
}

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


document.querySelector(".guest-logout").addEventListener("click", function () {
    showCustomAlert("Logout succesful")
     window.location.href = "index.html"
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