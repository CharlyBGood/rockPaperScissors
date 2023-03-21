// // const R = `<i class="fa-regular fa-hand-back-fist fa-2x"></i>`;
// // const P = `<i class="fa-regular fa-hand fa-2x"></i>`;
// // const S = `<i class="fa-regular fa-hand-scissors fa-2x"></i>`;

// // const playArr = [R, P, S];
// const playArr = ["Rock", "Paper", "Scissor"];

// let plyrRes = document.getElementById("player_result");
// let compRes = document.getElementById("comp_result");

// let spanBtns = document.getElementsByTagName("span");

// let computerScore = 0;
// let playerScore = 0;

// let player;

// const computerChoice = () => {
//   const randomChoices = Math.floor(Math.random() * 3);

//   // if (computer.length == 3) {
//   //   computer = [];
//   //   player = [];
//   // }
//   console.log("computer: " + playArr[randomChoices]);
//   return playArr[randomChoices];
// };

// const playGame = (e) => {
//   let computer = computerChoice();
//   // let player = "Scissor";
//   plyrRes.innerHTML = player;
//   compRes.innerHTML = computer;
// };

// // for (let i = 0; i < 5; i++) {
// //   if (computer == "Rock" && player == "Scissor") {
// //     computerScore++;
// //     console.log("compScore: " + computerScore);
// //   } else if (computer == "Paper" && player == "Rock") {
// //     computerScore++;
// //     console.log("compScore: " + computerScore);
// //   } else if (computer == "Scissor" && player == "Paper") {
// //     computerScore++;
// //     console.log("compScore: " + computerScore);
// //   }
// //   if (player == "Rock" && computer == "Scissor") {
// //     playerScore++;
// //     console.log("playScore: " + playerScore);
// //   } else if (player == "Paper" && computer == "Rock") {
// //     playerScore++;
// //     console.log("playScore: " + playerScore);
// //   } else if (player == "Scissor" && computer == "Paper") {
// //     playerScore++;
// //     console.log("playScore: " + playerScore + "coompScore: " + computerScore);
// //   }
// //   if (computer == player) {
// //     console.log("it's a tie!");
// //   }
// // }

// for (let i = 0; i < spanBtns.length; i++) {
//   spanBtns[i].addEventListener("click", playGame);
//   player = spanBtns[i].innerHTML;
// }

// ////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////

let playerResult = document.getElementById("player_result");
let computerResult = document.getElementById("comp_result");
let displayResult = document.getElementById("display-result");

let spanBtns = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

let computerScore = 0;
let userScore = 0;

let rounds = 3;
let roundNumber = 1;

const playArr = ["rock", "paper", "scissor"];

spanBtns.forEach((spanBtn) =>
  spanBtn.addEventListener("click", (e) => {
    userChoice = e.target.id;
    playerResult.innerHTML = userChoice;
    console.log("computer: " + computerScore);
    console.log("user: " + userScore);
    getComputerChoice();
    getResult();

    roundNumber++;
    if (roundNumber > rounds) {
      if (userScore < computerScore) {
        console.log("computer won!!");
      } else if (userScore > computerScore) {
        console.log("you won!");
      }
      //  else if (userScore == computerScore) {
      //   alert("It's a tie!!")
      // }
      // if (computerChoice == userChoice) {
      //   result = "it's a tie!";
      // }
      computerScore = 0;
      userScore = 0;
      roundNumber = 1;
    }
  })
);

function getComputerChoice() {
  const randomChoices = Math.floor(Math.random() * 3);
  computerChoice = playArr[randomChoices];
  computerResult.innerHTML = playArr[randomChoices];

  // return playArr[randomChoices];
}

function getResult() {
  if (computerChoice == "rock" && userChoice == "scissor") {
    computerScore++;
    // result = "You lose";
  } else if (computerChoice == "paper" && userChoice == "rock") {
    computerScore++;
    // result = "You lose";
  } else if (computerChoice == "scissor" && userChoice == "paper") {
    computerScore++;
    // result = "You lose";
  }
  if (userChoice == "rock" && computerChoice == "scissor") {
    userScore++;
    // result = "You won";
  } else if (userChoice == "paper" && computerChoice == "rock") {
    userScore++;
    // result = "You won";
  } else if (userChoice == "scissor" && computerChoice == "paper") {
    userScore++;
    // result = "You won";
  }
  // displayResult.innerHTML = result;
}
