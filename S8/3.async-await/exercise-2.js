//Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;



async function getCharacters() {

    try {
        const characters = await fetch('https://rickandmortyapi.com/api/character');
        const charactersJson = await characters.json();
        console.log(charactersJson);

    } catch (error) {
        console.log(error);

    }

}

getCharacters();

