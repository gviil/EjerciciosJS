/*Basandote en el siguiente html y javascript,inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-*/

let divsInsert = document.querySelectorAll(".fn-insert-here");

for (let index = 0; index < divsInsert.length; index++) {
    let p = document.createElement("p");
    p.textContent= "Voy dentro";
    divsInsert[index].appendChild(p);
    
}