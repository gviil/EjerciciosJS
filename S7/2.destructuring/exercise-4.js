//En base al siguiente javascript, usa destructuring para crear las variables name y itv con sus respectivos valores. Posteriormente crea 3 variables usando igualmente el destructuring para cada uno de los años y comprueba que todo esta bien imprimiendolo.



const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }
let{name, itv} = car;

let [year1, year2, year3] = itv;

console.log(year1); 
console.log(year2); 
console.log(year3);