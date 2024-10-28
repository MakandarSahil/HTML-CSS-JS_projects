const form = document.querySelector('form')

form.addEventListener('submit' ,function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height'));
    const weight = parseInt(document.querySelector('#weight'));
    const results = document.querySelector('#results');

    if(height === "" || height <= 0 || isNaN(height)){
        results.innerHTML = `${height} is not a valid height`
    }else if(weight === "" || weight <= 0 || isNaN(weight)){
        results.innerHTML = `${weight} is not a vali weight`
    }
})