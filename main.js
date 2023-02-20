// const playArr = ["Rock", "Paper", "Scissor"];
const R = `<i class="fa-regular fa-hand-back-fist fa-2x"></i>`;
const P = `<i class="fa-regular fa-hand fa-2x"></i>`;
const S = `<i class="fa-regular fa-hand-scissors fa-2x"></i>`;

const playArr = [R, P, S];
let plyrRes = document.getElementById("player_result");
let compRes = document.getElementById("comp_result");



let spanBtns = document.getElementsByTagName("span");

const GAME = () => {
  for (let i = 0; i < playArr.length; i++) {
    let n = Math.floor(Math.random(playArr[i]) * playArr.length);
    compRes.innerHTML = playArr[n];
    return playArr[n];
  }
};

for (let i = 0; i < spanBtns.length; i++) {
  spanBtns[i].addEventListener("click", () => {
    plyrRes.innerHTML = spanBtns[i].innerHTML;
    GAME();
  });
}

