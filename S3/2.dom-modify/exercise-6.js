/*Basandote en el siguiente array crea una lista ul > li con los textos del array y metelo en el html.

```js
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
```*/

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
let lista = document.createElement("ul");

for (let index = 0; index < apps.length; index++) {
    let li = document.createElement("li");
    li.textContent = apps[index];
    lista.appendChild(li);
    
    
}

document.body.appendChild(lista);