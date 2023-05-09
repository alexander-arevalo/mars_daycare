//  to freeze na navbar 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

//reservation value

function reservation () {

    var firstname = document.getElementById("firstname").value;
    
    var lastname = document.getElementById("lastname").value;

    var email = document.getElementById("email").value;

    var contact = document.getElementById("contact").value;

    var message = document.getElementById("message").value;


}
