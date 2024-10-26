const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');


buttons.forEach(function(button){
    // console.log(button);
    button.addEventListener('click', function(e){
        body.style.backgroundColor = e.target.id
    })
})