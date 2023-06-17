const signoutLink = document.getElementById("sub__menu__link");

signoutLink.addEventListener("click", () => {
  window.location.replace("index.html");
});

function openProfile() {
  var subMenu = document.getElementById("subMenu");
  subMenu.classList.toggle("open__menu");
}

function openEditForm() {
  var editFormWrap = document.getElementById("editFormWrap");
  editFormWrap.style.display = "flex";
}

function saveProfile(event) {
  event.preventDefault(); // Prevent form submission

  var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var userName = document.getElementById("userName");

  // Update the user profile name
  userName.textContent = firstName + " " + lastName;

  // Hide the edit form
  var editFormWrap = document.getElementById("editFormWrap");
  editFormWrap.style.display = "none";
}

  // end of profile function 



//upload function 

  // Assuming you have installed the necessary dependencies (express, mongoose, multer)
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

// Create an instance of the express application
const app = express();

// Configure multer for file uploads
const upload = multer({ dest: 'uploads/' });

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a model based on the schema
const Document = mongoose.model('Document', documentSchema);

// Define a route to handle the file uploads
app.post('/upload', upload.fields([
  { name: 'birthcert', maxCount: 1 },
  { name: 'validid', maxCount: 1 },
  { name: 'certificate', maxCount: 1 },
]), (req, res) => {

  const birthCertFile = req.files['birthcert'][0];
  const validIdFile = req.files['validid'][0];
  const healthRecordFile = req.files['certificate'][0];

  // Create a new document instance
  const newDocument = new Document({
    birthCertificate: birthCertFile.path,
    validId: validIdFile.path,
    healthRecord: healthRecordFile.path,
  });

  // Save the document to the database
  newDocument.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error saving document');
    } else {
      res.send('Document uploaded successfully');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});