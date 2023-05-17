//  to freeze na navbar 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

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


//reservation value
    
  function tableHandler() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("students__table");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  async function getEnrollees(){
   await axios.get("http://localhost:3001/api/enrollees").then((res)=>{
    console.log(`getting enrollees ${res.data}`)
    const enrolleesTableBody = document.getElementById("enrolleesTableBody");

    const data =res.data
    // Clear the existing content
    enrolleesTableBody.innerHTML = "";

    // Loop through the data and create table rows with table data cells to display it
    data.forEach((enrollee) => {
      const row = document.createElement("tr");
      const firstNameCell = document.createElement("td");
      firstNameCell.textContent = enrollee.firstName;
      const lastNameCell = document.createElement("td");
      lastNameCell.textContent = enrollee.lastName;
      const status = document.createElement("td");
      status.textContent = "pending";
      const actionCell = document.createElement("td");
            const button = document.createElement("button");
            button.textContent = "Details";
            actionCell.appendChild(button);
      row.appendChild(firstNameCell);
      row.appendChild(lastNameCell);
      row.appendChild(status)
      enrolleesTableBody.appendChild(row);
    });
    }).catch((err)=>{
      console.log(err)
    })

    

}

// Call the function to fetch and display enrollees
getEnrollees();

  