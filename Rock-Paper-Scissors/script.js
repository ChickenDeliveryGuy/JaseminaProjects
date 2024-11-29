let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updatedScore();

let isAutoPlaying = false;
let intervalId;

function autoPlay(){
  if(!isAutoPlaying){
    intervalId = setInterval(() => {
      const playerMove = randomComputerMove();
      pickMove(playerMove);
    }, 1500);
    isAutoPlaying = true;

    document.querySelector('.autoPlayBtn').innerHTML = 'Stop Playing';
  }
  else{
    clearInterval(intervalId);
    isAutoPlaying = false;

    document.querySelector('.autoPlayBtn').innerHTML = 'Auto Play';
  }
}

document.querySelector('.rockBtn').addEventListener('click', () => {
  pickMove('Rock')
});

document.querySelector('.paperBtn').addEventListener('click', () => {
  pickMove('Paper')
});

document.querySelector('.scissorsBtn').addEventListener('click', () => {
  pickMove('Scissors')
});

document.body.addEventListener('keydown', (event)=>{
  if(event.key === 'r'){
    pickMove('Rock');
  }
  else if(event.key === 'p'){
    pickMove('Paper');
  }
  else if(event.key === 's'){
    pickMove('Scissors');
  }
  else if(event.key === 'a'){
    autoPlay();
  }
  else if(event.key === 'Backspace'){
    resetConfirmation();
  }
});

function pickMove(playerMove){
  const computerMove = randomComputerMove();
  let result = '';

  if(playerMove === 'Rock'){
    if(computerMove === 'Rock'){
      result = 'Tie!';
    }
    else if(computerMove === 'Paper'){
      result = 'You Lose!';
    }
    else if(computerMove === 'Scissors'){
      result = 'You Win!';
    }
  }
  else if(playerMove === 'Paper'){
    if(computerMove === 'Rock'){
      result = 'You Win!';
    }
    else if(computerMove === 'Paper'){
      result = 'Tie!';
    }
    else if(computerMove === 'Scissors'){
      result = 'You Lose!';
    }
  }
  else if(playerMove === 'Scissors'){
    if(computerMove === 'Rock'){
      result = 'You Lose!';
    }
    else if(computerMove === 'Paper'){
      result = 'You Win!';
    }
    else if(computerMove === 'Scissors'){
      result = 'Tie!';
    }
  }

  if(result === 'You Win!'){
    score.wins += 1;
  }
  else if(result === 'You Lose!'){
    score.losses += 1;
  }
  else if(result === 'Tie!'){
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));  

  updatedScore();

  document.querySelector('.gameResult').innerHTML = result;

  document.querySelector('.gameMoves').innerHTML = `You <img src="Images/${playerMove}.png" alt="Rock" class="gameImg"> VS <img src="Images/${computerMove}.png" alt="Rock" class="gameImg"> Computer`;

}

function updatedScore(){
  const gameScore = document.querySelector('.gameScore');
  gameScore.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}.`;
}

function randomComputerMove(){
  const randomMove = Math.random();

  let computerMove = '';

  if(randomMove >= 0 && randomMove <= 1/3){
    computerMove = 'Rock';
  }
  else if(randomMove >= 1/3 && randomMove <= 2/3){
    computerMove = 'Paper';
  }
  else if(randomMove >= 2/3 && randomMove <= 1){
    computerMove = 'Scissors';
  }
  return computerMove;
}

function resetScore(){
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updatedScore();
}

document.querySelector('.resetBtn').addEventListener('click', () => {
  resetConfirmation();
});

function resetConfirmation(){
  document.querySelector('.confirmation').innerHTML = `Are you sure you want to reset the score?
  <button class="confirmBtn">Yes</button>
  <button class="disproveBtn">No</button>`;

  document.querySelector('.confirmBtn').addEventListener('click', () => {
    resetScore();
    hideConfirmation();
  });

  document.querySelector('.disproveBtn').addEventListener('click', () => {
    hideConfirmation();
  });

}

function hideConfirmation(){
  document.querySelector('.confirmation').innerHTML='';
}