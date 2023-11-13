let point = 0;
const marcador = document.querySelector(".score");
let timeUp = true;
let intervalId;
let timeId;

const holes = [
  document.querySelector(".hole1"),
  document.querySelector(".hole2"),
  document.querySelector(".hole3"),
  document.querySelector(".hole4"),
  document.querySelector(".hole5"),
  document.querySelector(".hole6"),
];

for (const hole of holes) {
  hole.addEventListener("click", whack);
}

function startGame() {
  if (intervalId) {
    clearInterval(intervalId);
  }
  if (timeId) {
    clearTimeout(timeId);
  }

  point = 0;
  marcador.textContent = point;
  timeUp = false;
  timeId = setTimeout(endGame, 15000);

  intervalId = setInterval(moveHasn, 1000);
}
function moveHasn() {
  if (!timeUp) {
    ocultar();

    holes[numRandom()].classList.add("up");
  }
}

function numRandom() {
  return Math.floor(Math.random() * 6);
}

function whack() {
  if (this.classList.contains("up") && !timeUp) {
    this.classList.remove("up");
    point++;
    marcador.textContent = point;
  }
}

function endGame() {
  timeUp = true;
  ocultar();
  alert("Juego terminado. Puntuación: " + point);
}
function ocultar() {
  holes.forEach((hole) => hole.classList.remove("up"));
}
