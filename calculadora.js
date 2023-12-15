const input = require("readline-sync")

class Calculadora {
    constructor() {

    }

    potenciacao() {
      const base = parseFloat(input.question("Digite a base: "));
      const expoente = parseFloat(input.question("Digite o expoente: "));
  
      if (!isNaN(base) && !isNaN(expoente)) {
        const resultado = Math.pow(base, expoente);
        return console.log(resultado);
      } else {
        console.error("Por favor, insira números válidos.");
      }
    }
}