function findArrayIndex(array, text) {
    for (let index = 0; index < array.length; index++) {
        if (array[index].includes(text)) {
            return index;
        }
    }
    return -1;
}

function removeItem(array, text) {
    const index = findArrayIndex(array, text);

    if (index !== -1) {
        array.splice(index, 1);
    }

    return array;
}

let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

// Ejemplo de uso:
console.log("Array antes de eliminar 'Mosquito':", array);
array = removeItem(array, 'Mosquito');
console.log("Array después de eliminar 'Mosquito':", array);
