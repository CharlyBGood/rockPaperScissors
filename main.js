// const playArr = ["Rock", "Paper", "Scissor"];
const R = `<i class="fa-regular fa-hand-back-fist fa-2x"></i>`;
const P = `<i class="fa-regular fa-hand fa-2x"></i>`;
const S = `<i class="fa-regular fa-hand-scissors fa-2x"></i>`;

const playArr = [R, P, S];
let plyrRes = document.getElementById("player_result");
let compRes = document.getElementById("comp_result");

let buttons = document.querySelector(".buttons");

const GAME = () => {
  for (let i = 0; i < playArr.length; i++) {
    let n = Math.floor(Math.random(playArr[i]) * playArr.length);
    compRes.innerHTML = playArr[n];
    return playArr[n];
  }
};

buttons.addEventListener("click", GAME);

buttons.addEventListener("click", (e) => {
  plyrRes.innerHTML = e.target.innerHTML;
});
