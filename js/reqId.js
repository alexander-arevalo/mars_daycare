const fileUploadInputs = document.querySelectorAll(".picture");

fileUploadInputs.forEach(function (input) {
  input.addEventListener("change", function (event) {
    const fileName = event.target.files[0].name;
    const label = event.target.nextElementSibling;
    label.innerText = "Image selected: " + fileName;
  });
});

async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  var firstName = document.getElementById("firstname").value;
  var lastName = document.getElementById("lastname").value;
  var relationship = document.getElementById("relationship").value;
  var phoneNumber1 = document.getElementById("contact").value;
  var phoneNumber = phoneNumber1.toString();
  var address = document.getElementById("address").value;
  var studentPicture = document.getElementById("studentPicture").value;

  // Get the values from the form inputs
  console.log("TESTINGG");
  console.log(
    `for testing ${firstName} ${lastName} ${relationship} ${phoneNumber} ${address} ${studentPicture}`
  );
  await axios
    .post("http://localhost:3001/api/requestId", {
      firstName,
      lastName,
      relationship,
      phoneNumber,
      address,
      studentPicture,
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
