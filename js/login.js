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
      try {
        console.log(res);
        isAdmin = res.data.isAdmin;
        successful = res.data.successful;
        const token = res.data.token;        

        // Store the token securely in local storage or a cookie
  
        localStorage.setItem("token", token);
  
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        if(successful){
          if (isAdmin) {
            window.location.replace("admin.html");
            
          } else {
            window.location.replace("userhome.html");
            
          }
          
        }
        else {
          alert("Invalid username or password.");
        }

    
      
      } catch (error) {
        console.log(error);
        alert("Invalid username or password.");
      }
    })

  // Check username and password against database
  
  //   // Redirect to respective secure page
    
  //   // Save username and password to local storage if "Remember me" is checked

};

// Event listener for form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    login(); // Call the login function when the form is submitted
  });
