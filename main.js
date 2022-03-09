let playButton = document.querySelector(".play");
playButton.addEventListener("click", playRound);

let computerResult = "";
let computerSelect = ["Rock", "Scissor", "Paper"];

function computerPlay() {
  computerResult = Math.floor(Math.random() * computerSelect.length);
  // console.log(computerSelect[computerResult]);
  return computerSelect[computerResult];
}

function playRound(computerSel, playerSel) {
  computerSel = computerSelect;
  if (computerSel == 'Rock' || 'Scissor' || 'Paper') {
    console.log('yes')
  } 
}

const playerSel = prompt('Rock, Scissor or Paper?');
const computerSel = computerPlay();
console.log(playerSel)
console.log(computerSel);