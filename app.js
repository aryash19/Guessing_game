'use strict';



const againBtn = document.querySelector('.again');
const checkBtn = document.querySelector('.check');
const randomNumber = Math.floor(Math.random() * 20) + 1;
const body = document.querySelector('body');
let number = document.querySelector('.number');
let score = 20;
let showScore = document.querySelector('.score');
let highScore = 0;


const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

checkBtn.addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);


  if (!guess || guess < 0) {
    displayMessage('Not a valid number...!');
  } else if (guess === randomNumber) {
    displayMessage('Correct Number...!');
    number.textContent = randomNumber;
    body.style.background = 'green';


    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? 'Too High...!' : 'Too Low...!');
      score--;
      showScore.textContent = score;
    } else {
      displayMessage('You have lost the game...!');
      showScore.textContent = 0;
    }
  }
});



againBtn.addEventListener('click', function () {
  randomNumber;
  body.style.background = '#222';
  displayMessage('Start Guessing.....!');
  score = 20;
  showScore.textContent = score;
  document.querySelector('.guess').value = '';
  number.textContent = '?';
});