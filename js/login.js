//  to freeze na navbar 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var remember = document.getElementById("remember").checked;
  
    // Check username and password against database
    if (username == "admin" && password == "admin123") {
      // Redirect to secure page
      window.location.href = "admin.html";
  
      // Save username and password to local storage if "Remember me" is checked
      if (remember) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      }
    } else {
      // Display invalid log in
      alert("Invalid username or password.");
    }
  }



  // Retrieve saved login credentials from local storage
var savedUsername = localStorage.getItem("username");
var savedPassword = localStorage.getItem("password");

// If saved credentials exist, populate the form and check the "Remember me" checkbox
if (savedUsername && savedPassword) {
  document.getElementById("username").value = savedUsername;
  document.getElementById("password").value = savedPassword;
  document.getElementById("remember").checked = true;
}

