const countries = [{ title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' }, { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }];

// Dado el siguiente array de objetos. Crea dinamicamente en el html una lista de div que contenga un elemento h4 para el titulo y otro elemento img para la imagen.      

let lista = document.createElement("ul");

for (const pais of countries) {
    let li = document.createElement("li");
    let div = document.createElement("div");
    let h4 = document.createElement("h4");
    let img = document.createElement("img");

    img.src = pais.imgUrl;
    h4.textContent = pais.title;
    div.appendChild(h4);
    div.appendChild(img);
    li.appendChild(div);
    lista.appendChild(li)
    
    
   


}
document.body.appendChild(lista);
