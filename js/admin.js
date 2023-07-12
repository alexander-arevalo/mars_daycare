const logoutBtn = document.getElementById("signout")

logoutBtn.addEventListener("click",()=> {
    window.location.replace("../index.html")
})

var userName = document.getElementById("userName").value;