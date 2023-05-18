function passwordHandler() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

// script.js

document
  .getElementById("register")
  .addEventListener("submit", async function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form inputs' values
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;

    // Perform any additional validation or data manipulation here

    // Create an object with the user's data
    var user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    await axios
      .post("http://54.210.165.102/api/auth/signup", {
        firstName,
        lastName,
        email,
        password,
      })
      .then((res) => {
        console.log("Registered successfully");
        console.log("DATAAA " + res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // Send the user data to the server or perform any desired action
    // For demonstration purposes, we'll just log the user object to the console
    console.log("user:", user);

    // Reset the form
    document.getElementById("register").reset();
  });
