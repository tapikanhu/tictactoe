document.addEventListener("DOMContentLoaded", function () {
  let currentPlayer;
  let winner;
  let board = [];
  let result = document.querySelector(".result");
  let gamePlayMoves = 0;
  const score = {
    x_wins: 0,
    o_wins: 0,
    ties: 0,
  };

  console.log(score);

  function chooseStartingPlayer() {
    player = Math.random() * 10;

    if (player > 5) {
      currentPlayer = "X";
    } else {
      currentPlayer = "O";
    }
    document.querySelector(
      ".js-starting-player"
    ).innerHTML = `Starting player is: ${currentPlayer}`;
  }

  function initializeGame(board) {
    for (let i = 0; i < buttons.length; i++) {
      board[i] = { [`${i}`]: "" };
    }
    showScores();
  }

  function showScores() {
    document.querySelector(
      ".scores"
    ).innerHTML = `X wins: ${score.x_wins} <br/>O wins: ${score.o_wins} <br/> Ties: ${score.ties}`;
  }

  document
    .querySelector(".js-start-game")
    .addEventListener("click", function (event) {
      initializeGame(board);
      reset();
      chooseStartingPlayer();
    });

  document
    .querySelector(".js-reset-button")
    .addEventListener("click", function (event) {
      reset();
      score.x_wins = 0;
      score.o_wins = 0;
      score.ties = 0;
    });

  const buttons = document.querySelectorAll(".js-btn");

  buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
      playGame(index);
    });
  });

  function reset() {
    for (let i = 0; i < buttons.length; i++) {
      document.querySelector(`.js-btn-${i}`).innerHTML = "";
      if (document.querySelector(`.js-btn-${i}`).innerHTML === "") {
        document.querySelector(`.js-btn-${i}`).removeAttribute("disabled");
      }
    }
    result.innerHTML = "";
    currentPlayer = "X";
    initializeGame(board);
    result.setAttribute("hidden", true);
    document.querySelector(".js-starting-player").innerHTML = "";
    gamePlayMoves = 0;
  }

  function playGame(n) {
    let cell = document.querySelector(`.js-btn-${n}`);

    if (cell.innerHTML === "") {
      let move = checkCurrentPlayer();
      cell.innerHTML = move;
      if (move === "X") {
        cell.style.color = "red";
      } else {
        cell.style.color = "blue";
      }

      board[n] = { [`${n}`]: move };
    }
    checkHorizontal();
    checkVertical();
    checkDiagonal();
    checkWinner();
    gamePlayMoves++;
    checkTie();
  }

  function checkCurrentPlayer() {
    if (gamePlayMoves !== 0) {
      if (currentPlayer === "X") {
        currentPlayer = "O";
      } else {
        currentPlayer = "X";
      }
      return currentPlayer;
    } else {
      return currentPlayer;
    }
  }

  function checkHorizontal() {
    if (
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2] &&
      board[0][0] !== ""
    ) {
      winner = board[0][0];
    } else if (
      board[3][3] === board[4][4] &&
      board[3][3] === board[5][5] &&
      board[3][3] !== ""
    ) {
      winner = board[3][3];
    } else if (
      board[6][6] === board[7][7] &&
      board[6][6] === board[8][8] &&
      board[6][6] !== ""
    ) {
      winner = board[6][6];
    } else {
      return false;
    }
    return true;
  }

  function checkVertical() {
    if (
      board[0][0] === board[3][3] &&
      board[0][0] === board[6][6] &&
      board[0][0] !== ""
    ) {
      winner = board[0][0];
    } else if (
      board[1][1] === board[4][4] &&
      board[1][1] === board[7][7] &&
      board[1][1] !== ""
    ) {
      winner = board[1][1];
    } else if (
      board[2][2] === board[5][5] &&
      board[2][2] === board[8][8] &&
      board[2][2] !== ""
    ) {
      winner = board[2][2];
    } else {
      return false;
    }
    return true;
  }

  function checkDiagonal() {
    if (
      board[0][0] === board[4][4] &&
      board[0][0] === board[8][8] &&
      board[0][0] !== ""
    ) {
      winner = board[0][0];
    } else if (
      board[2][2] === board[4][4] &&
      board[2][2] === board[6][6] &&
      board[2][2] !== ""
    ) {
      winner = board[2][2];
    } else {
      return false;
    }
    return true;
  }

  function checkTie() {
    showScores();
    if (gamePlayMoves === buttons.length && checkWinner() === false) {
      result.removeAttribute("hidden");
      result.innerHTML = `Game is a tie`;
      setTimeout(() => {
        reset();
      }, 3000);

      score.ties += 1;
    }
  }

  function checkWinner() {
    showScores();
    if (checkHorizontal() || checkVertical() || checkDiagonal()) {
        result.removeAttribute("hidden");
        result.innerHTML = `Winner is: ${winner}`;
        disableNoMove();
        setTimeout(() => {
            reset();
        }, 3000);
        if (winner === "X") {
            score.x_wins += 1;
        } else {
            score.o_wins += 1;
        }
        return true;
        } else {
            return false;
        }
  }

  function disableNoMove() {
    for (let i = 0; i < buttons.length; i++) {
      if (document.querySelector(`.js-btn-${i}`).innerHTML === "") {
        document.querySelector(`.js-btn-${i}`).setAttribute("disabled", "true");
      }
    }
  }
});
