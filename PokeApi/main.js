
const typeFire = "fire";
const typeGrass = "grass";
const typeWater = "water";
const typeRock = "rock";
const filtroName = document.querySelector("#filterName");
const btnFuego = document.querySelector("#btnFuego");
const btnAgua = document.querySelector("#btnAgua");
const btnPlanta = document.querySelector("#btnPlanta");
const btnRoca = document.querySelector("#btnRoca");
const reset = document.querySelector("#ver");
const pokemonContainer = document.querySelector(".pokemon-container");
btnFuego.style.background = "white";
btnFuego.style.color = "red";
btnPlanta.style.background = "green";
btnRoca.style.background = "grey";
reset.style.background = "black";

function fetchPokemonData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            //console.log(data);
            createCard(data)

        });

}

function createCard(pokemon) {

    let flipcard = document.createElement("div");
    flipcard.classList.add("flip-card");

    let flipcardInner = document.createElement("div");
    flipcardInner.classList.add("flip-card-inner");

    let flipFront = document.createElement("div");
    flipFront.classList.add("flip-card-front");
    backPokemon(pokemon.types[0].type.name);



    let img = document.createElement("img");
    img.src = pokemon.sprites.front_default;
    flipFront.appendChild(img);

    let flipBack = document.createElement("div");
    flipBack.classList.add("flip-card-back");
    let nameh1 = document.createElement("h1");
    nameh1.textContent = pokemon.name;
    let = document.createElement("h1");
    let type = document.createElement("p");
    type.textContent = pokemon.types[0].type.name;
    flipBack.appendChild(nameh1);
    flipBack.appendChild(type);


    flipcard.appendChild(flipcardInner);
    flipcardInner.appendChild(flipFront);
    flipcardInner.appendChild(flipBack);
    pokemonContainer.appendChild(flipcard);


    function backPokemon(type) {
        switch (type) {
            case typeFire:
                flipFront.classList.add("backFire");
                break;
            case typeGrass:
                flipFront.classList.add("backGrass");
                break;
            case typeWater:
                flipFront.classList.add("backWater");
                break;
            case typeRock:
                flipFront.classList.add("backRock");
                break;


            default:
                flipFront.classList.add("backPre")
                break;
        }

    }




}

filtroName.addEventListener("input", () => {
    let valorInput = filtroName.value.toLowerCase();
    let cards = document.querySelectorAll(".flip-card");

    cards.forEach((element) => {
        let text = element.querySelector("h1").textContent.toLowerCase();
        if (text.includes(valorInput)) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});

btnFuego.addEventListener("click", () => {
    let cards = document.querySelectorAll(".flip-card");
    cards.forEach((element) => {
        let text = element.querySelector("p").textContent.toLowerCase();
        if (text == typeFire) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});


btnAgua.addEventListener("click", () => {
    let cards = document.querySelectorAll(".flip-card");
    cards.forEach((element) => {
        let text = element.querySelector("p").textContent.toLowerCase();
        if (text == typeWater) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});
btnPlanta.addEventListener("click", () => {
    let cards = document.querySelectorAll(".flip-card");
    cards.forEach((element) => {
        let text = element.querySelector("p").textContent.toLowerCase();
        if (text == typeGrass) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});

btnRoca.addEventListener("click", () => {
    let cards = document.querySelectorAll(".flip-card");
    cards.forEach((element) => {
        let text = element.querySelector("p").textContent.toLowerCase();
        if (text == typeRock) {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    });
});




const init = () => {
    pokemonContainer.innerHTML = "";

    for (let index = 1; index < 300; index++) {
        let urlApi = `https://pokeapi.co/api/v2/pokemon/${index}/`;
        fetchPokemonData(urlApi);

    }

}



reset.addEventListener("click", init);

init();

