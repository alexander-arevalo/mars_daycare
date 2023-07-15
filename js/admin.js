const token = localStorage.getItem("token");
if (!token) {
  window.location.href = "/login.html";
}

function signOut() {
  localStorage.removeItem("token");
  console.log("Token removed");

  window.location.replace("/index.html");
}

const signOutFunction = document.getElementById("signOut");
signOutFunction.addEventListener("click", signOut);
