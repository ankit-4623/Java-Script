let random_num = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt')
const User_in = document.querySelector('#guessField')
const guss_slot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrhigh = document.querySelector('.lowOrHi')
const start_over = document.querySelector('.resultParas')

const p = document.createElement('p')

let prev_guss = []
let num_guss = 1

let playGame = true


if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
   const guess =  parseInt (User_in.value)
      
   valid_guess(guess)
    })
}

function valid_guess(guess) {
    if(isNaN(guess)||guess<1||guess>100)
    {
        alert('Please enter a valid number between 1 and 100.');    }
    else{
        prev_guss.push(guess)
        if(num_guss === 10){
            display_guess(guess)
            display_mess(`game over. Random number was ${random_num}`)
            end_game()
        }
        else{
            display_guess(guess)
            check_guess(guess)
        }
    }
}


function check_guess(guess) {
    if(guess===random_num){
        display_mess(`You guessed it right`)
        end_game()
    }
    else if(guess<random_num)
    {
        display_mess(`You number is too low`)
      
    }
    else if(guess>random_num)
    {
        display_mess(`You number is too high`)
       
    }
}

function display_guess(guess) {
    guss_slot.innerHTML += `${guess} `;
    num_guss++;
    remaining.innerHTML = `Guesses remaining: ${10 - num_guss}`;
}
function display_mess(mess) {
    lowOrhigh.innerHTML = `<h2>${mess}</h2>`
}

function new_game() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
}
function end_game() {
    User_in.value=''
    User_in.setAttribute('disabled','')
    p.classList.add('button')
     p.innerHTML = '<h2 id="newGame"> start new game</h2>'
     start_over.appendChild(p)
     playGame=false
     new_game()
}



