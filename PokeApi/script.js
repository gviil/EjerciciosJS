let paginacion = 0; 
const limite = 150; 
let id = 0;

const urlApi = `https://pokeapi.co/api/v2/pokemon?offset=${paginacion}&limit=${limite}`;
const urlPoke =  `https://pokeapi.co/api/v2/pokemon/${id}/`;
const container = document.querySelector("#pokemon-container");
const btnFuego = document.querySelector("#fuego");
const valueFire = "fire";

function displayPokemonData(pokemon) {
    
    const card = document.createElement("div");
    card.classList.add("pokemon-card");

    const name = document.createElement("p");
    name.textContent = pokemon.forms.name;
    console.log(name);

   // const type = document.createElement("p");
    //type.textContent = pokemon.types.type.name;

    const image = document.createElement("img");
    image.src = pokemon.sprites.front_default;
    image.alt = pokemon.name;
    

    card.appendChild(image);
    card.appendChild(name);
    //card.appendChild(type);



    container.appendChild(card);
}

function loadNextPage() {
    paginacion += limite;
    let nextPageUrl = `https://pokeapi.co/api/v2/pokemon?offset=${paginacion}&limit=${limite}`;
    fetchPokemonData(nextPageUrl);
}

function loadPreviousPage() {
    if (paginacion >= limite) {
        paginacion -= limite;
        let previousPageUrl = `https://pokeapi.co/api/v2/pokemon?offset=${paginacion}&limit=${limite}`;
        fetchPokemonData(previousPageUrl);
    }
}

function fetchPokemonData(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById("pokemon-container").innerHTML = ""; 
            
                
                displayPokemonData(data);
        
        })
        .catch((error) => {
            console.error("Error fetching Pokémon data:", error);
        });
}



btnFuego.addEventListener("click", ()=>{
    container.innerHTML="";
    

    

});

const filtro = document.querySelector("#filtroPokemon");


filtro.addEventListener("input", () => {
    let filtroValor = filtro.value.toLowerCase();
    const cartasPokemon = document.querySelectorAll(".pokemon-card");
    cartasPokemon.forEach((carta)=>{
        console.log(carta);
        let nombrePokemon = carta.querySelector("p").textContent.toLowerCase();

        if (nombrePokemon.includes(filtroValor)) {
            carta.style.display ="block";
            
        }else{
            carta.style.display ="none";

        }

    })
    

});




 

console.log(filtro);


for (let i = 0; i < array.length; i++) {
    id = i;
    fetchPokemonData(urlPoke);
    
    
}



const loadPreviousButton = document.getElementById("load-previous");
loadPreviousButton.addEventListener("click", loadPreviousPage);

const loadNextButton = document.getElementById("load-next");
loadNextButton.addEventListener("click", loadNextPage);
