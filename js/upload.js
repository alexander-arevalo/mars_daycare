const signoutLink = document.getElementById("sub__menu__link");

signoutLink.addEventListener("click", () => {
  window.location.replace("index.html");
});


//upload function 
const base64Converter = (file)=>{
  return new Promise((resolve,reject)=>{
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload=()=>{
          resolve(fileReader.result);
      }
      fileReader.onerror=(err)=>{
          reject(err.message);
      }
  })
}

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

    
    // await axios
    //   .post("http://localhost:3001/api/upload", {
    //     birthCert,
    //     validId,
    //     certificate,
    //   })
    //   .then((res) => {
    //     console.log("Uploaded Successfully");
    //     console.log("DATA" + res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // Send the user data to the server or perform any desired action
    // For demonstration purposes, we'll just log the user object to the console

    // Reset the form
    document.getElementById("submitForm").reset();
  };


  document.getElementById("submitForm").addEventListener("submit", handleSubmit);
