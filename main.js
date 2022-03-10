let computerResult = "";
let rockScissorPaper = ["Rock", "Scissor", "Paper"];

function computerPlay() {
  computerResult = Math.floor(Math.random() * rockScissorPaper.length);
  // console.log(rockScissorPaper[computerResult]);
  return rockScissorPaper[computerResult];
}

let playButton = document.querySelector(".play");
playButton.addEventListener("click", playRound);

function playRound(computer, player) {
  player = playerSel;
  computer = computerSel;
  if (computer == rockScissorPaper[0] && player == rockScissorPaper[1]) {
    return ('you lose');
  } else if (computer == rockScissorPaper[1] && player == rockScissorPaper[2]) {
    return ('you lose too')
  } else if (computer == rockScissorPaper[2] && player == rockScissorPaper[0]) {
    return ('you fockin lose again')
  } else if (computer ==  player) {
    return ('DRAW')
 } else if (computer == rockScissorPaper[1] && player == rockScissorPaper[0]) {
    return ('you won!')
 } else if (computer == rockScissorPaper[2] && player == rockScissorPaper[1]) {
  return ('you won again!')
} else if (computer == rockScissorPaper[0] && player == rockScissorPaper[2]) {
  return ('you won!')
} else {
    return ('you wrote cualquiera wacho')
  }
}

  const playerSel = prompt('Rock, Scissor or Paper?');
  const computerSel = computerPlay();
  // console.log(playerSel, computerSel);

