const videogames = [
    { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
    { name: 'Assassins Creed Valhalla', genders: ['Aventura', 'RPG'], score: 4.5 },
    { name: 'The Last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
    { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
    { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
    { name: 'Legend of Zelda: Breath of the Wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10 },
  ];
  
  // Filtrar videojuegos con género 'RPG'
  const rpgGames = videogames.filter(game => game.genders.includes('RPG'));
  
  // Calcular la media de las puntuaciones de los juegos 'RPG'
  const totalScore = rpgGames.reduce((accumulator, game) => accumulator + game.score, 0);
  const averageScore = totalScore / rpgGames.length;
  
  console.log("La media de las puntuaciones de los juegos RPG es:", averageScore);
  