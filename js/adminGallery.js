const fileUploadInputs = document.querySelectorAll(".gallery");

fileUploadInputs.forEach(function (input) {
  input.addEventListener("change", function (event) {
    const fileName = event.target.files[0].name;
    const label = event.target.nextElementSibling;
    label.innerText = "Image selected: " + fileName;
  });
});

//Define your function
async function handleSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior
  var title = document.getElementById("title").value;
  var description = document.getElementById("description").value;
  var galleryPicture = document.getElementById("galleryPicture").files[0];
  var formData = formData();

  // Get the values from the form inputs
  console.log("TESTINGG");
  console.log(`for testing ${title} ${description} ${galleryPicture}`);
  await axios
    .post("http://localhost:3001/api/gallery", {
      title,
      description,
      galleryPicture,
    })
    .then(function (res) {
      console.log("enrolled successfully");
      console.log(res.data);
      alert("Successfully Reservered");
      window.location.replace("status.html");
    })
    .catch(function (err) {
      console.log(err);
    });

  document.getElementById("galleryForm").reset();
}

document.getElementById("galleryForm").addEventListener("submit", handleSubmit);
