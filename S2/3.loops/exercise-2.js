const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (var propiedad in alien) {
  console.log(propiedad + ': ' + alien[propiedad]);
}
