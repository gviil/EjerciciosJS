const animalFunction = () => {
    return { name: 'Bengal Tiger', race: 'Tiger' };
};

const { name :nombre , race } = animalFunction();

console.log(nombre); 
console.log(race); 
