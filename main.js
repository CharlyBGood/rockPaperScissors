const playArr = ["Rock", "Paper", "Scissor"];
let plyrRes = document.getElementById("player_result");
let compRes = document.getElementById("comp_result");
let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissor = document.getElementById("scissor");
let buttons = document.querySelector(".buttons");

const GAME = () => {
  for (let i = 0; i < playArr.length; i++) {
    let n = Math.floor(Math.random(playArr[i]) * playArr.length);
    compRes.innerHTML = playArr[n];
    console.log(buttons.firstChild);
    return playArr[n];
  }
};

buttons.addEventListener("click", GAME);

buttons.addEventListener("click", (e) => {
  plyrRes.innerHTML = e.target.innerText;
});
