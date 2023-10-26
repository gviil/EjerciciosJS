const countries = [{ title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }];

     
let btn = document.querySelector("button");
console.log(btn);
btn.addEventListener("click", removeLast)
let lista = document.createElement("ul");

for (const pais of countries) {
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "borrar";

    let li = document.createElement("li");
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let img = document.createElement("img");

    deleteBtn.addEventListener("click", function () {
        li.remove();
    });

    img.src = pais.imgUrl;
    h4.textContent = pais.title;
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(deleteBtn); 
    li.appendChild(div);
    lista.appendChild(li);
}

// Resto del código

document.body.appendChild(lista);


function removeLast() {
    lista.lastChild.remove();

    
}


//Basandote en el ejercicio anterior. Crea un botón para cada uno de los elementos de las listas que elimine ese mismo elemento del html.
