document.getElementById("recoveryForm").addEventListener("submit",async function(event) {
    event.preventDefault(); 
  
    var email = document.getElementById("email").value;
  
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      showMessage("Please enter a valid email address.");
      return;
    }
 await axios.post("http://localhost:3001/api/auth/requestResetPassword",{email}).then(res=>{
  var confirmation = confirm("Email has been sent with Password recovery Instruction");
  if (confirmation) {

    window.location.href = "login.html"; 
  }
 }).catch(err=>{
  alert(err.message)
 })
  
});

function showMessage(message) {
  var messageDiv = document.getElementById("message");
  messageDiv.textContent = message;
}