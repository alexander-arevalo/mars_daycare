//  to freeze na navbar

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

async function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var remember = document.getElementById("remember").checked;
  let isAdmin;
  let successful;

  await axios
    .post("http://localhost:3001/api/auth/login", { email, password })
    .then((res) => {
      console.log(res.data);
      isAdmin = res.data.isAdmin;
      successful = res.data.sucessful;
      const token = res.data.token;

      // Store the token securely in local storage or a cookie
      localStorage.setItem("token", token);

      // Apply the token to all subsequent Axios requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    })
    .catch((err,) => {
      console.log(err);
      alert("Invalid username or password.");

    });

  // Check username and password against database
  if (successful) {
    // Redirect to respective secure page
    if (isAdmin) {
      window.location.href = "admin.html";
    } else {
      window.location.href = "userhome.html";
    }

    // Save username and password to local storage if "Remember me" is checked
  } else {
    // Display invalid log in
    alert("Invalid username or password.");
  }
}

// Retrieve saved login credentials from local storage
// var savedUsername = localStorage.getItem("username");
// var savedPassword = localStorage.getItem("password");

// // If saved credentials exist, populate the form and check the "Remember me" checkbox
// if (savedUsername && savedPassword) {
//   document.getElementById("username").value = savedUsername;
//   document.getElementById("password").value = savedPassword;
//   document.getElementById("remember").checked = true;
// }

// Event listener for form submission
document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    login(); // Call the login function when the form is submitted
  });
