const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
  ];
  
  let filteredStreamers = streamers.filter(e => e.gameMorePlayed.includes('Legends'));
  
  filteredStreamers.forEach(e => {
    if (e.age > 35) {
      e.gameMorePlayed = e.gameMorePlayed.toUpperCase();
    }
  });
  
  console.log(filteredStreamers);
  