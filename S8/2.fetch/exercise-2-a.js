let valorInput = "";
const baseUrl = 'https://api.nationalize.io?name=';

btn$$ = document.querySelector("button");
input$$ = document.querySelector("input");

input$$.addEventListener("input", () => valorInput = input$$.value);

btn$$.addEventListener("click", () => {
    fetch(`${baseUrl}${valorInput}`)  
        .then(response => response.json())
        .then(res => console.log(res));
});
