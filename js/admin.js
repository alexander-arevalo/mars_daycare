// Check if token exists, if not, redirect to login page
const token = localStorage.getItem("token");
if (!token) {
  window.location.href = "/login.html";
}
console.log(token);

// Event listener for sign-out button
function signOut() {
  localStorage.clear();
  console.log("Token removed");
  window.location.replace("/index.html");
}

const signOutFunction = document.getElementById("signOut");
signOutFunction.addEventListener("click", signOut);
