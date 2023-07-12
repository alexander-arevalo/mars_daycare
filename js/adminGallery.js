const fileUploadInputs = document.querySelectorAll('.gallery');

fileUploadInputs.forEach(function (input) {
    input.addEventListener('change', function (event) {
        const fileName = event.target.files[0].name;
        const label = event.target.nextElementSibling;
        label.innerText = 'Image selected: ' + fileName;
    });
});

