

document.querySelector(".user").addEventListener("click", function () {
  showCustomAlert("Welcome guest user")
   window.location.href = "index.html"
   // Save information to localStorage
   localStorage.setItem("addLinks", "true");
   localStorage.setItem("addLinksForHome", "true")
   localStorage.setItem("addLinksForProduct", "true")
   localStorage.setItem("addLinksForCart", "true")
   localStorage.setItem("addLinksForProd-det", "true")
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