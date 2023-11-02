let valorInput = "";
const baseUrl = 'https://api.nationalize.io?name=';

btn$$ = document.querySelector("button");
input$$ = document.querySelector("input");

input$$.addEventListener("input", () => valorInput = input$$.value);

btn$$.addEventListener("click", () => {
    fetch(`${baseUrl}${valorInput}`)
        .then(response => response.json())
        .then(res => crearP(res));


});

const crearP = (response) => {
    let p$$ = document.createElement("p");


    p$$.textContent = `El nombre ${response.name} tiene un `;

    for (let index = 0; index < response.country.length; index++) {
        
       
       index ==response.country.length-1? p$$.textContent +=` y ${Math.round(response.country[index].probability*100)}% de ser ${response.country[index].country_id}`: p$$.textContent +=` ${Math.round(response.country[index].probability*100)}% de ser ${response.country[index].country_id} `;
       
       



       
    }
    document.body.appendChild(p$$);







}

/**En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.
**/
