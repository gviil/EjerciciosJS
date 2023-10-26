const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

// Dado el siguiente html y javascript. Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".
let lista = document.createElement("ul");
let div = document.querySelector("[data-function='printHere']");

for (const coche of cars) {
    let li = document.createElement("li");
    li.textContent = coche;
    lista.appendChild(li);
}

div.appendChild(lista);