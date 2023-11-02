const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
  ];
  
  const inputElement = document.getElementById("streamerInput");
  const buttonElement = document.getElementById("filterButton");
  const listElement = document.getElementById("streamerList");
  
  buttonElement.addEventListener("click", function () {
    const searchKeyword = inputElement.value.toLowerCase();
    const filteredStreamers = streamers.filter(streamer => streamer.name.toLowerCase().includes(searchKeyword));
  
    listElement.innerHTML = "";
  
    filteredStreamers.forEach(streamer => {
      const li = document.createElement("li");
      li.textContent = streamer.name;
      listElement.appendChild(li);
    });
  });
  