const input = require('readline-sync');

class Calculadora {
  constructor() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }

  dividir() {
    const numero1 = parseFloat(input.question('Digite o primeiro numero: '));
    const numero2 = parseFloat(input.question('Digite o segundo numero: '));

    if (isNaN(numero1) || isNaN(numero2)) {
      console.log('Por favor, insira números válidos.');
      return;
    }

    const resultado = numero1 / numero2;
    console.log(`Resultado da divisão: ${resultado}`);
  }

  potenciacao() {
    const base = parseFloat(input.question("Digite a base: "));
    const expoente = parseFloat(input.question("Digite o expoente: "));

    if (!isNaN(base) && !isNaN(expoente)) {
      let resultado = this.valorAtual = Math.pow(base, expoente);
      return console.log(resultado)
    } else {
      console.error("Por favor, insira números válidos.");
    }
  }

  percentual() {
    this.numero1 = parseFloat(input.question("Digite o primeiro numero: "));
    this.numero2 = parseFloat(input.question("Digite o segundo numero: "));

    if (isNaN(this.numero1) || isNaN(this.numero2)) {
      console.log("Por favor, insira números válidos.");
      return;
    }

    this.resultado = this.numero1 * (this.numero2 / 100);
    console.log(`${this.numero2}% de ${this.numero1} = ${this.resultado}`);
  }

  subtrair() {
    const n1 = parseFloat(input.question("Digite o primeiro valor: "));
    const n2 = parseFloat(input.question("Digite o segundo valor: "));

    if (isNaN(n1) || isNaN(n2)) {
      console.log('Por favor, insira números válidos.');
      return;
    }
    const resultado = n1 - n2;
    console.log(`Resultado da subtração: ${resultado}`);
  }

  somar() {
    const numero1 = parseFloat(input.question("Digite o primeiro valor: "));
    const numero2 = parseFloat(input.question("Digite o segundo valor: "));

    if (isNaN(numero1) || isNaN(numero2)) {
      console.log('Por favor, insira números válidos.');
      return;
    }
    const resultado = numero1 + numero2;
    console.log(`Resultado da soma: ${resultado}`);
  }

  limpar() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }
}

const calculadora = new Calculadora();

calculadora.percentual();
calculadora.somar();
calculadora.limpar();