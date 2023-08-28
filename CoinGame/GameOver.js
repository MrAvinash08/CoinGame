function gameOver(score) {
  let root = document.getElementById("root");
  root.innerHTML = "";

  let scoreHeading = document.createElement("h1");
  scoreHeading.innerHTML = "Score:" + score;
  root.appendChild(scoreHeading);

  let playAgain = document.createElement("button");
  playAgain.innerHTML = "Play Again";

  playAgain.addEventListener("click", function () {
    playGame();
  });
  root.appendChild(playAgain);
}
