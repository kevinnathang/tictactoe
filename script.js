const Gameboard = {
  gameboard: ["", "", "", "", "", "", "", "", ""],
};

const Players = {
  player1: { userName: "Player One", mark: "X" },
  player2: { userName: "Player Two", mark: "O" },
};

const body = document.querySelector("body");

(function () {
  currentPlayer = Players.player1;

  for (let i = 0; i < Gameboard.gameboard.length; i++) {
    let divSqr = document.createElement("div");
    divSqr.classList.add(`boardDiv${[i]}`);
    divSqr.style.width = "50px";
    divSqr.style.height = "50px";
    divSqr.style.border = "thin solid black";
    body.appendChild(divSqr);
    divSqr.addEventListener("click", () => {
      Gameboard.gameboard[i] = currentPlayer.mark;
      currentPlayer =
        currentPlayer === Players.player1 ? Players.player2 : Players.player1;
      console.log(Gameboard.gameboard);
    });
  }
})();
