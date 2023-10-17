


function sum(numberOne, numberTwo) {
    if (numberOne > numberTwo) {
        return numberOne

    } else if (numberTwo > numberOne) {
        return numberTwo;

    } else {
        return "Son iguales";
    }

}

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(array) {

    let palabraLarge = "";
    for (const word of array) {
        if (word.length > palabraLarge.length) {
            palabraLarge = word;

        }
    }
    return palabraLarge;
}

let numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(array) {
    let suma = 0;

    for (const iterator of array) {
        suma += iterator;

    }

    return suma;
}


let number = [12, 21, 38, 5, 45, 37, 6];
function average(array) {

    let sumaTotal = sumAll(array);


    return sumaTotal / array.length;
}

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
];
function removeDuplicates(array) {
    let arrayNuevo = [];
    arrayNuevo[0] = array[0];
    for (const elemnt of array) {
        if (!arrayNuevo.includes(elemnt)) {
            arrayNuevo.push(elemnt);

        }


    }
    return arrayNuevo;


}

const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
];
function finderName(array, text) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === text) {
            return { position: i, found: true };
        }
    }
    return { position: -1, found: false };
}
