'use strict';
let message = document.querySelector('.message');
let score = document.querySelector('.score');
let randomNo = Math.trunc(Math.random() * 20);
const btn1 = document.querySelector('.check');

// STORAGE VARIABLE
let guess;
let decringbar = 20;
let highestScore = 0;

//AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  decringbar = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  randomNo = Math.trunc(Math.random() * 20);
  message.textContent = 'Start guessing...';
});

//ALGORETHEM
function setter() {
  guess = Number(document.querySelector('.guess').value);

  if (decringbar < 0) {
    message.textContent = 'you lose the game';
  } else if (guess < 0 || guess > 20) {
    message.textContent = 'please select between 0 - 20';
  } else {
    if (guess === randomNo) {
      message.textContent = 'correct no';
      score.textContent = decringbar;
      document.querySelector('body').style.backgroundColor = '#60b347';
      highist();
      update();
    } else if (guess > randomNo) {
      message.textContent = 'Too Heigh ';
      decringbar--;
      score.textContent = decringbar;
    } else if (guess < randomNo) {
      message.textContent = 'Too Low ';
      decringbar--;
      score.textContent = decringbar;
    }
  }
}

//BUTTON LISTENER
btn1.addEventListener('click', function () {
  setter();
});

// HEIGHEST SCOR
function highist() {
  if (decringbar > highestScore) {
    highestScore = decringbar;
    document.querySelector('.highscore').textContent = highestScore;
  }
}

// SHOW HIDDEN VALUE (? UPDATE)

function update() {
  document.querySelector('.number').textContent = guess;
  document.querySelector('.number').style.width = '30rem';
}
