 let array =['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

 function swap(array,primero, segundo) {
    let primerElemento = array[primero];
    let segundoElemento = array[segundo];
    array[primero] = segundoElemento;
    array[segundo] = primerElemento;
    return array; 
      
    
 }