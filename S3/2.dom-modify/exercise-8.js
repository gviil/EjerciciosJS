let divs = document.querySelectorAll("div");
for (let index = 0; index < divs.length; index++) {
    let p = document.createElement("p");
    p.textContent= "Voy en medio";
    divs[index].appendChild(p)

    
}