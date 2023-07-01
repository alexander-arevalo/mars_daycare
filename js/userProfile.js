
function openProfile() {
    var subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("open__menu");
  }
  
  function openEditForm() {
    var editFormWrap = document.getElementById("editFormWrap");
    editFormWrap.style.display = "flex";
  }
  
  async function saveProfile(event) {
    event.preventDefault(); // Prevent form submission
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var userName = document.getElementById("userName");
  
    // Update the user profile name
    userName.textContent = firstName + " " + lastName;
    try {
      const res = await axios.get("http://localhost:3001/api/:id")
      console.log(`Getting ID: ${res.data}`);
  
      const user = document.getElementById("subMenu");
      const data = res.data;
  
    } catch (error) {
      
    }
    
  
  
    
  
    // Hide the edit form
    var editFormWrap = document.getElementById("editFormWrap");
    editFormWrap.style.display = "none";
  }