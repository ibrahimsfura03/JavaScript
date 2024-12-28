'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '😎 correct you won!';

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 0;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
 */

let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

let displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('⛔ No Number');
  } else if (guess === secreteNumber) {
    displayMessage('🎉 Correct you won!');
    document.querySelector('.number').textContent = secreteNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== secreteNumber) {
    if (score > 1) {
      displayMessage(
        guess > secreteNumber ? '📈 Number is too high' : '📉 Number is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😒 Out of try :)');
      document.querySelector('.score').textContent = 0;
    }
  }
  // } else if (guess > secreteNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Number is too high';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😒 Out of try :)';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secreteNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Number is too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '😒 Out of try :)';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreteNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('number').style.width = '15rem';

  // document.querySelector('.score').value = 20;
  // document.querySelector('.highscore').textContent = '0';
});
