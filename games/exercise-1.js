let cardArray = [
  {
    id: 1,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
];

const grid = document.querySelector(".b-grid");

for (const card of cardArray) {
  let div = document.createElement("div");
  div.classList.add("item");
  div.addEventListener("click", verImg);

  let img = document.createElement("img");
  img.src = card.img;
  div.appendChild(img);
  img.classList.add("hidden");

  grid.appendChild(div);
}

let arrayImgSelecionadas = [];
let primeraImg = null;

function verImg() {
  this.firstChild.classList.remove("hidden");
  if (primeraImg === null) {
    primeraImg = this.firstChild;
  } else {
    if (primeraImg !== this.firstChild) {
      checkImgs(primeraImg, this.firstChild);
    }
  }
}

function checkImgs(firstImg, secondImg) {
  if (
    firstImg.src === "http://127.0.0.1:5500/games/public/exercise-1/tick.svg" ||
    secondImg.src === "http://127.0.0.1:5500/games/public/exercise-1/tick.svg"
  ) {
    console.log("tienen tick , no cuenta ");
  } else {
    if (firstImg.src === secondImg.src) {
      setTimeout(() => {
        firstImg.src = "public/exercise-1/tick.svg";
        secondImg.src = "public/exercise-1/tick.svg";
        console.log("iguales");
      }, 1000);
    } else {
      setTimeout(() => {
        firstImg.classList.add("hidden");
        secondImg.classList.add("hidden");
      }, 1000);
    }
  }
}
