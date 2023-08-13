import { baseURL } from "./config/config.js";

const password1 = document.getElementById("password1");
const confirmPassword = document.getElementById("password");

console.log(`Password is ${password1} confirm password is ${confirmPassword}`);
const passwordMismatch = document.getElementById("passwordMismatch");
const recoverPassword = async (e) => {
  e.preventDefault();
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get("id");
  const token = urlParams.get("token");
  const URL = baseURL.concat("/api/auth/resetPassword");
  console.log(URL);
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("password1").value;

  if (password === confirmPassword) {
    await axios
      .post(URL, { userId, token, password })
      .then((res) => {
        alert("success");
        window.location.replace("login.html");
      })
      .catch((err) => {
        alert("Something went wrong");
        console.log("error " + err);
      });
    passwordMismatch.style.display = "none";
  } else {
    console.log("password " + password + " confirmpassword " + confirmPassword);
    passwordMismatch.style.display = "block";
  }
};

document
  .getElementById("recoveryForm")
  .addEventListener("submit", recoverPassword);
