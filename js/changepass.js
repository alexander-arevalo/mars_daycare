import { baseURL } from "./config/config.js";

const password = document.getElementById("password1");
const confirmPassword = document.getElementById("password");

console.log(`Password is ${password} confirm password is ${confirmPassword}`);
const passwordMismatch = document.getElementById("passwordMismatch");
const recoverPassword = async (e) => {
  e.preventDefault();
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  const token = urlParams.get("token");
  const URL = baseURL.concat("/api/auth/resetPassword");
  console.log(URL);
  const passwordStore = document.getElementById("password").value;
  const confirmPassword = document.getElementById("password1").value;
 

  if (password === confirmPassword) {
    alert("success")
    await axios.post(URL, { userId, token, passwordStore }).then((res) => {
    window.location("login.html")
    }).catch(err=>{
        alert("Something went wrong")
    })
    passwordMismatch.style.display = "none";
  } else {
   
    passwordMismatch.style.display = "block";
  }
};

document
  .getElementById("recoveryForm")
  .addEventListener("submit", recoverPassword);
