function pedirArrayUsuario() {
  let numeros=[];
  let num ;
  do {
      num = prompt("ingrese numero o q para salir");
      let numeroParseado= parseInt(num);
      if (numeroParseado !== "q"){
          numeros.push(num)
      }
      } while (num !== "q");
 return (numeros);
}
  let resulatdo = pedirArrayUsuario();
   console.log(resulatdo);



 function pedirArrayUsuario() {
  let numeros = [];
  let input = "";
  while (input !== "q") {
    input = prompt("Ingrese un número o la letra 'q' para salir:");
    if (input !== "q") {
      let numero = parseFloat(input);
      if (!isNaN(numero)) {
        numeros.push(numero);
      }
    }
  }
  return numeros;
}
let numeros = pedirArrayUsuario();
let numeroMagico = calcularNumeroMagico(numeros);
console.log(numeroMagico);


function calcularNumeroMagico(array) {
    let countPares = 0;
    let countImpares = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        countPares++;
      } else {
        countImpares++;
      }
    }
    if (countPares > countImpares) {
      return array.reduce((a, b) => a + b, 0);
    } else {
      return array.reduce((a, b) => a - b, 0);
    }
  }
  
function main() {
  let numeros = pedirArrayUsuario();
  let numeroMagico = calcularNumeroMagico(numeros);
  console.log(numeroMagico);
  
  }
  
  main();