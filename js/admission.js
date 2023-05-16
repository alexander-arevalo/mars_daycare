//  to freeze na navbar 
const axios = require('axios');

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


// Define your function
const myForm = document.getElementById('myForm');

// Define your submit event handler function
myForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Access form input values using their names
    const firstName = myForm.elements['First Name'].value;
    const lastName = myForm.elements['Last Name'].value;
    const email = myForm.elements['Email Address'].value;
    const contact = myForm.elements['Mobile Number'].value;
    const message = myForm.elements['Message'].value;
  
    // Perform desired actions with the form data
    console.log('Form submitted!');
    console.log(message + ' ' + lastName);
  });

// Attach the submit event listener to the form
myForm.addEventListener('submit', handleSubmit);