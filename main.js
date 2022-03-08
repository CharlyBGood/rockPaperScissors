function computerPlay() {
  let computerResult = "";
  let computerSelect = ["Rock", "Scissor", "Paper"];
  computerResult = Math.floor(Math.random() * computerSelect.length);
  console.log(computerSelect[computerResult]);
  return computerResult;
}

computerPlay();


