const input = require('readline-sync');

class Calculadora {
  constructor() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;
  }

  iniciarCalculadora() {
    console.log("***********************************");
    console.log("*** BEM VINDO A CALCULADORA ADA ***");
    console.log("***********************************");
  }

  exibirMenu() {
    console.log('\nEscolha uma opcao:');
    console.log('1. Divisao');
    console.log('2. Potenciacao');
    console.log('3. Percentual');
    console.log('4. Subtracao');
    console.log('0. Sair');

    const opcao = input.questionInt('Digite o numero da opcao desejada: ');

    switch (opcao) {
      case 1:
        this.realizarDivisao();
        break;
      case 2:
        this.realizarPotenciacao();
        break;
      case 3:
        this.calcularPercentual();
        break;
      case 4:
        this.realizarSubtracao();
        break;
      case 0:
        console.log('Saindo do programa. Ate mais!');
        process.exit(0);
        break;
      default:
        console.log('Opcao invalida. Tente novamente.');
    }

    this.exibirMenu();
  }

  realizarDivisao() {
    console.log('\n*** Realizando Divisao ***');
    const numero1 = parseFloat(input.question('Digite o primeiro numero: '));
    const numero2 = parseFloat(input.question('Digite o segundo numero: '));

    if (isNaN(numero1) || isNaN(numero2)) {
      console.log('Por favor, insira numeros validos.');
      return;
    }

    const resultado = numero1 / numero2;
    console.log(`Resultado da divisao: ${resultado}`);
  }

  realizarPotenciacao() {
    console.log('\n*** Realizando Potenciacao ***');
    const base = parseFloat(input.question('Digite a base: '));
    const expoente = parseFloat(input.question('Digite o expoente: '));

    if (!isNaN(base) && !isNaN(expoente)) {
      const resultado = Math.pow(base, expoente);
      console.log(`Resultado da potenciacao: ${resultado}`);
    } else {
      console.error('Por favor, insira numeros validos.');
    }
  }

  calcularPercentual() {
    console.log('\n*** Calculando Percentual ***');
    this.numero1 = parseFloat(input.question('Digite o valor total: '));
    this.numero2 = parseFloat(input.question('Digite a porcentagem desejada: '));

    if (isNaN(this.numero1) || isNaN(this.numero2)) {
      console.log('Por favor, insira numeros validos.');
      return;
    }

    this.resultado = this.numero1 * (this.numero2 / 100);
    console.log(`${this.numero2}% de ${this.numero1} e igual a ${this.resultado}`);
  }

  realizarSubtracao() {
    console.log('\n*** Realizando Subtracao ***');
    const n1 = parseFloat(input.question('Digite o primeiro valor: '));
    const n2 = parseFloat(input.question('Digite o segundo valor: '));

    if (isNaN(n1) || isNaN(n2)) {
      console.log('Por favor, insira numeros validos.');
      return;
    }

    const resultado = n1 - n2;
    console.log(`Resultado da subtracao: ${resultado}`);
  }

}

const calculadora = new Calculadora();

calculadora.iniciarCalculadora();
calculadora.exibirMenu();
