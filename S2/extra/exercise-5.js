function rollDice(numCaras) {
    // Genera un número aleatorio entre 1 y numCaras
    const resultado = Math.floor(Math.random() * numCaras) + 1;
    return resultado;
  }