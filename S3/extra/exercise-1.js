const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
// Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.

let lista = document.createElement("ul");

for (let pais of countries) {
    let li = document.createElement("li");
    li.textContent = pais;
    lista.appendChild(li);
    
}

document.body.appendChild(lista);