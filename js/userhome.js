const signoutLink = document.getElementById("sub__menu__link");

signoutLink.addEventListener("click", () => {
  window.location.replace("index.html");
});

let subMenu = document.getElementById('subMenu');

function openProfile() {
  subMenu.classList.toggle('open__menu');
 
}

image.addEventListener('click',openProfile);
var image = document.getElementById("myImage"); 

