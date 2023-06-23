//  to freeze na navbar

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0);
});

//  Proceed to log In

const logininterface = document.getElementById("login");

logininterface.addEventListener("click", () => {
  window.location.replace("login.html");
});

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



