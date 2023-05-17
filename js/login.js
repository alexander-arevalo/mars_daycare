//  to freeze na navbar 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


    // ADMIN LOGIN 


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



    // USER LOGIN


  function userHandler() {
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;
    var remember = document.getElementById("rem").checked;


    
  
    // Check username and password against database
    if (username == "user" && password == "user123") {
      // Redirect to secure page
      window.location.href = "user.html";
  
      // Save username and password to local storage if "Remember me" is checked
      if (remember) {
        localStorage.setItem("user", username);
        localStorage.setItem("pass", password);
      }
    } else {
      // Display invalid log in
      alert("Invalid username or password.");
    }
  }



  // Retrieve saved login credentials from local storage
var savedUsername = localStorage.getItem("user");
var savedPassword = localStorage.getItem("pass");

// If saved credentials exist, populate the form and check the "Remember me" checkbox
if (savedUsername && savedPassword) {
  document.getElementById("user").value = savedUsername;
  document.getElementById("pass").value = savedPassword;
  document.getElementById("rem").checked = true;
}

