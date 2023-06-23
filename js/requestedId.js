const details = document.getElementById("reqId");

details.addEventListener("click", () => {
  window.location.replace("idAction.html");
});



function showDetails() {
    // Add your logic to show the details of the student
    console.log("Showing details");
  }

  function markAsDone(circle) {
    // Toggle the "done" class to change the color
    circle.classList.toggle("done");
  }