async function login() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  let isAdmin;
  let successful;

  await axios
    .post("http://localhost:3001/api/auth/login", { email, password })
    .then((res) => {
      try {
        console.log(res);
        isAdmin = res.data.isAdmin;
        successful = res.data.successful;     
        const token = localStorage.getItem('token');
     
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        if(successful){
          if (isAdmin) {
            window.location.replace("/admin_html/admin.html");
            
          } else {
            window.location.replace("user_html/userhome.html");
            
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


};

// Event listener for form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    login(); // Call the login function when the form is submitted
  });
