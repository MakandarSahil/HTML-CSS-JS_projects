let randomNumber = parseInt(Math.random() * 100 + 1 );
// console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const result = document.querySelector('.result');
const guesses = document.querySelector('.guesses');
let remaining = document.querySelector('.remaining');
const startOver = document.querySelector(".resultParas");
const newGamebtn = document.querySelector('#new');

const p = document.createElement('p');
let playGame = true;
let numGuess = 0;
let prevGuess = [];

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(guess < 1 || guess > 100 || isNaN(guess)){
        // alert("Please enter a number between 1 and 100");
        // result.innerHTML = `<p> Please enter a number between 1 and 100 </p>`
        displayMsg(`Please enter a number between 1 and 100`);
    }else{
        prevGuess.push(guess);
        // displayGuess(guess);
        if(numGuess === 9){
            displayGuess(guess);
            displayMsg(`Game Over. Random number was : ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function displayMsg(msg){
    result.innerHTML = `<p>${msg}</p>`;
}
function displayGuess(guess){
    userInput.value = '';
    result.innerHTML = '';
    guesses.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${10 - numGuess}`
}

function checkGuess(guess){
    if(guess === randomNumber){
        displayMsg(`You Won. Right Guess !!`);
        endGame();
    }else if(guess < randomNumber){
        displayMsg(`Number is higher`);
    }else{
        displayMsg(`Number is lower`);
    }
}

function endGame(){
    userInput.innerHTML = '';
    userInput.setAttribute('disabled', '');
    // submit.value = `New Game`
    newGamebtn.style.display = 'initial';
    submit.style.display = 'none';
    playGame = false;
}

newGamebtn.addEventListener('click', function(e){
    e.preventDefault();
    randomNumber = parseInt(Math.random() * 100 + 1);
    console.log(randomNumber);
    newGamebtn.style.display = 'none';
    submit.style.display = 'initial';
    prevGuess = [];
    numGuess = 0;
    guesses.innerHTML = '';
    remaining.innerHTML = `${10 - numGuess}`;
    userInput.removeAttribute('disabled');
    playGame = true;
})