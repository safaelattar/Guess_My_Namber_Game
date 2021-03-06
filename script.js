'use strict';
const check = document.querySelector('.check');
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let hiddenNumber = document.querySelector('.number');
let score = 20;
let newScore = document.querySelector('.score');
let highScore = 0;
let newHighScore = document.querySelector('.highscore');

// console.log(secretNumber);

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
check.addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // message.textContent = 'β No number!';
    displayMessage('β No number!');
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      //   message.textContent =
      //       guess > secretNumber ? 'π Too heigh!' : 'π Too low!';
      displayMessage(guess > secretNumber ? 'π Too heigh!' : 'π Too low!');
      score--;
      newScore.textContent = score;
    } else {
      // message.textContent = 'Game Overπ€π»';
      displayMessage('Game Overπ€π»');
      newScore.textContent = 0;
    }
  }
  // When player wins
  else if (secretNumber === guess) {
    // message.textContent = 'π Correct Number';
    displayMessage('π Correct Number');
    document.body.style.cssText = 'background-color: #60b347';
    hiddenNumber.style.cssText = 'width: 30rem';
    hiddenNumber.textContent = secretNumber;
    if (highScore < score) {
      highScore = score;
      newHighScore.textContent = highScore;
    }
  }
  /*
  // When guess number is too high
  else if (secretNumber < guess) {
    if (score > 1) {
      message.textContent = 'π Too heigh!';
      score--;
      newScore.textContent = score;
    } else {
      message.textContent = 'Game Overπ€π»';
      newScore.textContent = 0;
    }
  }
  //When guess number is too low
  else if (secretNumber > guess) {
    if (score > 1) {
      message.textContent = 'π Too low!';
      score -= 1;
      newScore.textContent = score;
    } else {
      message.textContent = 'Game Overπ€π»';
      newScore.textContent = 0;
    }
  }
  */
});

const again = document.querySelector('.again');
again.addEventListener('click', () => {
  //   window.location.reload();
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   console.log(secretNumber);
  score = 20;
  newScore.textContent = score;
  // message.textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.body.style.cssText = 'background-color: #222';
  hiddenNumber.style.cssText = 'width: 15rem';
  hiddenNumber.textContent = '?';
  const guess = (document.querySelector('.guess').value = '');
});
