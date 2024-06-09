// const lightDark = document.querySelector(".fa-sun")
// const body = document.body;

// lightDark.addEventListener('click', () => {
//   body.classList.toggle('light-mode')
//   body.classList.toggle('dark-mode')

//   // Save the user's preference in localStorage
//   if (body.classList.contains('dark-mode')) {
//     localStorage.setItem('theme', 'dark');
//   } else {
//     localStorage.setItem('theme', 'light');
//   }
// });

// // Check for saved user preference on page load
// document.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme) {
//     body.classList.add(savedTheme + '-mode');
//   } else {
//     body.classList.add('dark-mode'); // Default theme
//   }
// });

let registerbtn = document.querySelector(".login")

registerbtn.addEventListener('click', () => {
  registerbtn.innerHTML = 'Processing....'

  showCustomAlert('Registered sucessful')
  
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