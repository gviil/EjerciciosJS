
const JugadorOne = "X";
const JugadorTwo = "O";
const tabla = document.querySelector("#tablero");
const message = document.querySelector("#men");
let currentPlayer = JugadorOne;

function startGame() {
    cleanTablero();
    crearTablero();
}

function cleanTablero() {
    tabla.innerHTML = "";

}

function crearTablero() {

    for (let i = 0; i < 3; i++) {
        let fila = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            let col = document.createElement("td");
            col.textContent = "-";
            fila.appendChild(col);
            col.addEventListener("click", pintar);
        }
        tabla.appendChild(fila);
    }
}


function pintar() {
    let col = this;
    if (col.textContent === "-" && !gameOver(arrayTablero(), currentPlayer)) {
        col.textContent = currentPlayer;

        if (gameOver(arrayTablero(), currentPlayer)) {
            mostrarGanador(currentPlayer);
        } else {
            if (currentPlayer === JugadorOne) {
                currentPlayer = JugadorTwo;
                message.textContent = "Jugador 2";
            } else {
                currentPlayer = JugadorOne;
                message.textContent = "Jugador 1";
            }
        }
    }
}


function arrayTablero() {

    let board = [];
    let filas = document.querySelectorAll("tr");

    for (let index = 0; index < filas.length; index++) {
        board.push([]);
        for (let j = 0; j < filas[index].childNodes.length; j++) {

            board[index].push(filas[index].childNodes[j].textContent);

        }

    }
    console.log(board);
    return board;

}
function gameOver(board, player) {
    for (let i = 0; i < 3; i++) {
        if (
            board[i][0] === player &&
            board[i][1] === player &&
            board[i][2] === player
        ) {
            return true;
        }
    }

    for (let j = 0; j < 3; j++) {
        if (
            board[0][j] === player &&
            board[1][j] === player &&
            board[2][j] === player
        ) {
            return true;
        }
    }

    if (
        (board[0][0] === player &&
            board[1][1] === player &&
            board[2][2] === player) ||
        (board[0][2] === player &&
            board[1][1] === player &&
            board[2][0] === player)
    ) {
        return true;
    }

    // Aqui compruebo si hay empate, compruebo si están todas las casillas marcadas , si están marcadas == EMPATE   
    comprobarEmpate(board);


    return false;
}

function resetBoard() {
    alert("HA HABIDO UN EMPATE SE REINICIARA AUTOMATICAMENTE ");
    cleanTablero();
    crearTablero();
}

function mostrarGanador(currentPlayer) {
    console.log("Ha ganado " + currentPlayer);
    alert("Ha ganado el jugador " + currentPlayer);
    let tabla = document.querySelector("#tablero");
    tabla.innerHTML = "";
}

function comprobarEmpate(board) {
    let casillas = 0;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] != "-") {
                casillas++;
                if (casillas >= 9) {
                    resetBoard();
                }


            }



        }


    }

}
let btnStart = document.querySelector("#inicio");
btnStart.addEventListener("click", startGame);
