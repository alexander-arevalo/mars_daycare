async function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let isAdmin;
  let successful;

  await axios
    .post("https://mars-daycare.onrender.com/api/auth/login", { email, password })
    .then((res) => {
      console.log(res);
      isAdmin = res.data.isAdmin;
      successful = res.data.successful;
      const token = res.data.token;
      const firstName = res.data.user.firstName;
      const lastName = res.data.user.lastName;
      const email = res.data.user.email;
      const id = res.data.user.id;
      localStorage.setItem("token", token);
      localStorage.setItem("firstName", firstName);
      localStorage.setItem("lastName", lastName);
      localStorage.setItem("id", id);
      localStorage.setItem("email", email);

      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      if (successful) {
        if (isAdmin) {
          window.location.replace("/admin_html/admin.html");
        } else if (!isAdmin) {
          window.location.replace("user_html/userhome.html");
        } else {
          alert("Something went wrong");
        }
      }
    })
    .catch((err) => {
      alert("Incorrect Email or Password");
      console.log(err);
    });
}

// Event listener for form submission
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    login(); // Call the login function when the form is submitted
  });
