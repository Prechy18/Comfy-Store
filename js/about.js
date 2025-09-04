const mobileMenuIcon = document.querySelector('.mobile-menu-icon i'); // target the <i>
const mobileNav = document.querySelector('.mobile-nav');

mobileMenuIcon.addEventListener('click', () => {
  // toggle menu
  mobileNav.classList.toggle('show');

  // toggle icon between bars and X
  mobileMenuIcon.classList.toggle('fa-bars');
  mobileMenuIcon.classList.toggle('fa-x');
});



let cartNumber = document.querySelector(".zero")
let cartMobileNumber = document.querySelector(".zero-mobile")

const calculateLength = () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let total = cart.reduce((acc, item) => acc + item.qty , 0)
  console.log(total);
  cartNumber.innerHTML = total;
  cartMobileNumber.innerHTML = total;
}
calculateLength();

document.addEventListener("DOMContentLoaded", () => {
  calculateLength()
})



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
  if (localStorage.getItem("addLinks") === "true") {
      // Add new links
      const navList = document.getElementById("navList");
      const newLink1 = document.createElement("li");
      newLink1.innerHTML = '<li class="own"><a href="/pages/checkout.html">Checkout</a></li>';
      navList.appendChild(newLink1);

      const newLink2 = document.createElement("li");
      newLink2.innerHTML = '<li class="own"><a href="/pages/orders.html">Order</a></li>';
      navList.appendChild(newLink2);
      // Clear the localStorage item

      localStorage.removeItem("addLinks");
     signlink.classList.toggle('acc-inn')
     guest.innerHTML = '<p class="hello">Hello, demo user</p>'
     create.innerHTML = '<button class="guest-logout">Log out</button>'
  }
});
document.querySelector(".guest-logout").addEventListener("click", function () {
  showCustomAlert("Logout succesful")
   window.location.href = "index.html"
})

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