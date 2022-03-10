let computerResult = "";
let computerSelect = ["Rock", "Scissor", "Paper"];

function computerPlay() {
  computerResult = Math.floor(Math.random() * computerSelect.length);
  // console.log(computerSelect[computerResult]);
  return computerSelect[computerResult];
}

let playButton = document.querySelector(".play");
playButton.addEventListener("click", playRound);

function playRound(computerSele, playerSele) {
  if (computerSel == 'Rock' && playerSel == 'Scissor') {
    return ('you lose');
  } else if (computerSel == 'Scissor' && playerSel == 'Paper') {
    return ('you lose too')
  } else if (computerSel == 'Paper' && playerSel == 'Rock') {
    return ('you fockin lose again')
  } else if (computerSel == 'Scissor' && playerSel == 'Scissor') {
    return ('It is a draw!');
  } else if (computerSel == 'Scissor' && playerSel == 'Rock') {
    return ('You won!!');
  } else if (computerSel == 'Paper' && playerSel == 'Scissor') {
    return ('you won again!');
  } else if (computerSel == 'Rock' && playerSel == 'Paper') {
    return ('you won yeah motherfucker!')
  }  else if (computerSel == 'Rock' && playerSel == 'Rock') {
    return ('DRAW AGAIN')
  } else if (computerSel == 'Paper' && playerSel == 'Paper') {
    return ('DRAW')
 } else {
    return ('you wrote cualquiera wacho')
  }
  
}

  const playerSel = prompt('Rock, Scissor or Paper?');
  const computerSel = computerPlay();
  console.log(playerSel, computerSel);
const resultGame = playRound();
console.log(resultGame);
