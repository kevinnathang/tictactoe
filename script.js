const winnerDisplay = document.querySelector(".winnerDisplay");
const container = document.querySelector(".boardContainer");
const playBtn = document.querySelector(".playBtn");
const firstModal = document.querySelector(".firstModal");
const lastModal = document.querySelector(".lastModal");
const playAgainBtn = document.querySelector(".playAgainBtn");

const Gameboard = {
  gameboard: ["", "", "", "", "", "", "", "", ""],
};

const Players = {
  player1: { userName: "Player One", mark: "X" },
  player2: { userName: "Player Two", mark: "O" },
};

const winConditions = {
  1: [0, 3, 6],
  2: [1, 4, 7],
  3: [2, 5, 8],
  4: [0, 1, 2],
  5: [3, 4, 5],
  6: [6, 7, 8],
  7: [0, 4, 8],
  8: [2, 4, 6],
};

let gameOver = false;

playBtn.addEventListener("click", function () {
  container.style.display = "flex";
  firstModal.style.display = "none";
  generateBoard();
});

playAgainBtn.addEventListener("click", function () {
  lastModal.style.display = "none";
  resetGame();
});

const generateBoard = function () {
  let currentPlayer = Players.player1;

  for (let i = 0; i < Gameboard.gameboard.length; i++) {
    let divSqr = document.createElement("div");
    divSqr.id = `boardDiv${i}`;
    divSqr.classList.add("boardDiv");
    divSqr.style.width = "98px";
    divSqr.style.height = "98px";
    divSqr.style.border = "thin solid black";
    container.appendChild(divSqr);
    if ((i + 1) % 3 === 0) {
      container.appendChild(document.createElement("br"));
    }
    divSqr.addEventListener("click", () => {
      if (!gameOver && Gameboard.gameboard[i] === "") {
        Gameboard.gameboard[i] = currentPlayer.mark;
        divSqr.textContent = currentPlayer.mark;
        currentPlayer =
          currentPlayer === Players.player1 ? Players.player2 : Players.player1;
      } else {
        currentPlayer = currentPlayer;
      }
      checkWin();
    });
  }
};

const resetGame = function () {
  Gameboard.gameboard = ["", "", "", "", "", "", "", "", ""];
  gameOver = false;
  winnerDisplay.textContent = "";
  container.innerHTML = "";
  generateBoard();
};

const checkWin = function () {
  for (let condition in winConditions) {
    let currentCondition = winConditions[condition];
    let marks = currentCondition.map((index) => Gameboard.gameboard[index]);
    if (marks.every((mark) => mark === marks[0] && mark !== "")) {
      for (i = 0; i < currentCondition.length; i++) {
        let winDiv = document.getElementById(`boardDiv${currentCondition[i]}`);
        winDiv.style.backgroundColor = "lightBlue";
      }
      winnerDisplay.textContent = `Player ${marks[0]} wins!`;
      gameOver = true;
      lastModal.style.display = "block";
    }
  }
};
