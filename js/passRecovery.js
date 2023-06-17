document.getElementById("recoveryForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  
    var email = document.getElementById("email").value;
  
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      showMessage("Please enter a valid email address.");
      return;
    }
  // Perform password recovery logic here
  // You can use AJAX or any other method to send a request to the server

  var confirmation = confirm("An email has been sent to your email address with password recovery instructions. Do you want to go back to the login page?");
  if (confirmation) {
    window.location.href = "login.html"; 
  }
});

function showMessage(message) {
  var messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}