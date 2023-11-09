const Gameboard = {
  gameboard: ["", "", "", "", "", "", "", "", ""],
};

const Players = {
  player1: { userName: "Player One", mark: "X" },
  player2: { userName: "Player Two", mark: "O" },
};

const body = document.querySelector("body");

for (let i = 0; i < Gameboard.gameboard.length; i++) {
  let divSqr = document.createElement("div");
  body.appendChild(divSqr);
}
