const signoutLink = document.getElementById("sub__menu__link");

signoutLink.addEventListener("click", () => {
  window.location.replace("index.html");
});

let subMenu = document.getElementById('subMenu');

function openProfile() {
  subMenu.classList.toggle('open__menu');
 
}

image.addEventListener('click',openProfile);
var image = document.getElementById("myImage"); 

//submit function
function submitDocuments() {
  const fileInputs = document.getElementsByClassName('fileupload');
  const formData = new FormData();

  for (let i = 0; i < fileInputs.length; i++) {
    const fileInput = fileInputs[i];
    const fileList = fileInput.files;

    if (fileList.length > 0) {
      formData.append(fileInput.name, fileList[0]);
    }
  }

  axios
    .post('/upload-url', formData)
    .then(response => {
      // Handle the server response
      console.log(response.data);
      alert('Files successfully submitted!');
      resetForm(fileInputs);
    })
    .catch(error => {
      console.error(error);
    });
}

function resetForm(fileInputs) {
  for (let i = 0; i < fileInputs.length; i++) {
    fileInputs[i].value = '';
  }
}

// Add an event listener to the submit button
const submitButton = document.querySelector('.btn-submit');
submitButton.addEventListener('click', submitDocuments);