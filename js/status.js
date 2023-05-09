//  to freeze na navbar 

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})

//reservation value


  const form = document.querySelector('.search__form');
  const input = form.querySelector('input[type="text"]');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const searchTerm = input.value.trim();
    if (searchTerm !== '') {
      alert(`Ongoing Progress: ${searchTerm}`);
      input.value = '';
    }
    else {
        // inform that the data was not found
        alert("Not Found");
      }
  });

    
