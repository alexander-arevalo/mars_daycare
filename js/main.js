//  to freeze na navbar 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("admission").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

//  show/hide the answer for faqs

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        // to change icon on the faqs
        const icon = faq.querySelector('.faq__icon i')
        if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus";
        }
    })
})

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
