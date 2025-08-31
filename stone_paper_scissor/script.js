let userScore = 0;
let compScore = 0;

let userScorePara = document.querySelector("#user_score");
let compScorePara = document.querySelector("#comp_score");

let msg = document.querySelector("#msg");
let choices = document.querySelectorAll("img");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randId = Math.floor(Math.random() * 3);
  return options[randId];
};

const draw = () => {
  msg.innerText = "Game Was Draw. Play Again!";
  msg.style.backgroundColor = "#FDDA0D";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#4CBB17";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "#FF4433";
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    draw();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
