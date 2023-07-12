const fileUploadInputs = document.querySelectorAll('.fileupload');

fileUploadInputs.forEach(function (input) {
    input.addEventListener('change', function (event) {
        const fileName = event.target.files[0].name;
        const label = event.target.nextElementSibling;
        label.innerText = 'Image selected: ' + fileName;
    });
});

async function handleSubmit(event) {
    event.preventDefault();

     // Prevent the default form submission

    // Get the form inputs' values
    let birthCert = document.getElementById("birthCert").files[0];
    let validId = document.getElementById("validId").files[0];
    let certificate = document.getElementById("certificate").files[0];
    let formData = new formData();

    //testing 
    console.log('testing', birthCert,validId,certificate);


    // Reset the form
    document.getElementById("submitForm").reset();
  };


  document.getElementById("submitForm").addEventListener("submit", handleSubmit);
