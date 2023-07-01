const signoutLink = document.getElementById("sub__menu__link");

signoutLink.addEventListener("click", () => {
  window.location.replace("index.html");
});



async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var relationship = document.getElementById("relationship").value;
    var phoneNumber1 = document.getElementById("contact").value;
    var phoneNumber = phoneNumber1.toString();
    var address = document.getElementById("address").value;
  
    // Get the values from the form inputs
    console.log("TESTINGG");
    console.log(
      `for testing ${firstName} ${lastName} ${relationship} ${phoneNumber} ${address}`
    );
    await axios
      .post("http://localhost:3001/api/reqId", {
        firstName,
        lastName,
        relationship,
        phoneNumber,
        address,
      })
      .then(function (res) {
        console.log("Requested successfully");
        console.log(res.data);
        alert("Requested successfully");
      })
      .catch(function (err) {
        console.log(err);
      });
  
    document.getElementById("reqForm").reset();
  }
  
  document.getElementById("reqForm").addEventListener("submit", handleSubmit);
  