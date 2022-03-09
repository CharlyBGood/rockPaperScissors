let playButton = document.querySelector(".play");
playButton.addEventListener("click", playRound);

function computerPlay() {
  let computerResult = "";
  let computerSelect = ["Rock", "Scissor", "Paper"];
  computerResult = Math.floor(Math.random() * computerSelect.length);
    console.log(computerSelect[computerResult]);
  return computerResult;
}

function playRound(computerSel, playerSel) {
//     const newLocal = 'Paper';
//    if (playerSel == 'Scissor' & computerSel == 'Rock' || newLocal) {
       
//        return 'You lose';
//    } else if(playerSel == 'Rock' & computerSel == 'Paper')
//         return 'You lose Again!'
    
    if (playerSel == 'Scissor' & computerSel == 'Rock' || 'Paper') {
        return 'You lose'
    }
    
}

const playerSel = window.prompt("Rock, Scissor or Paper?");
const computerSel = computerPlay();
// console.log(playRound(playerSel, computerSel));
