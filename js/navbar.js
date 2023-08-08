//  to freeze na navbar

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

console.log("last name " + localStorage.getItem("lastName"));
document.getElementById("firstName").textContent =
  localStorage.getItem("firstName");
document.getElementById("lastName").textContent =
  localStorage.getItem("lastName");

//  show/hide the answer for faqs

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // to change icon on the faqs
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  });
});

//  show/hide the privacy and policy

function privacy() {
  var privacypopup = document.getElementById("privacy");
  privacypopup.classList.toggle("show");
}

//  show/hide the terms and condition

function terms() {
  var termspopup = document.getElementById("terms");
  termspopup.classList.toggle("show");
}
