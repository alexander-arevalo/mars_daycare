//  to freeze na navbar 




window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


// Define your function
async function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    var firstName = document.getElementById('firstname').value;
    var lastName = document.getElementById('lastname').value;
    var phoneNumber = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var birthdate = document.getElementById('birthday').value;
    var birthday = birthdate.toString()
    
    // Get the values from the form inputs
    console.log("TESTINGG")
    console.log(`for testing ${firstName} ${lastName} ${phoneNumber}s ${email} ${birthday}`)
   await axios.post("http://localhost:3001/api/enrollees",{firstName,lastName,email,phoneNumber,birthday}).then(function (res){
    console.log("enrolled successfully")
    console.log(res.data)
   }).catch(function(err){
    console.log(err)
   })
    
   
    document.getElementById('myForm').reset();
  }

  document.getElementById('myForm').addEventListener('submit', handleSubmit);
  