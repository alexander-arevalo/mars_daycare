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

