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
    this.exibirMenu();
  }

  exibirMenu() {
    console.log('\nEscolha uma opcao:');
    console.log('1. Divisao');
    console.log('2. Potenciacao');
    console.log('3. Percentual');
    console.log('4. Subtracao');
    console.log('5. Soma');
    console.log('6. Bhaskara');
    console.log('7. Radiciacao');
    console.log('0. Sair');

    const opcao = input.questionInt('Digite o numero da opcao desejada: ');

    switch (opcao) {
      case 1:
        this.dividir();
        break;
      case 2:
        this.potenciacao();
        break;
      case 3:
        this.percentual();
        break;
      case 4:
        this.subtracao();
        break;
      case 5:
        this.somar();
        break;
      case 6:
        this.bhaskara();
        break;
      case 7:
        this.radiciacao();
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

  dividir() {
    console.log('\n*** Realizando Divisao ***');
    this.numero1 = parseFloat(input.question('Digite o primeiro numero: '));
    this.numero2 = parseFloat(input.question('Digite o segundo numero: '));

    if (isNaN(this.numero1) || isNaN(this.numero2)) {
      console.log('Por favor, insira numeros validos.');
      return;
    }

    this.resultado = this.numero1 / this.numero2;
    console.log(`Resultado da divisao: ${this.resultado}`);
  }

  potenciacao() {
    console.log('\n*** Realizando Potenciacao ***');
    const base = parseFloat(input.question('Digite a base: '));
    const expoente = parseFloat(input.question('Digite o expoente: '));

    if (!isNaN(base) && !isNaN(expoente)) {
      this.resultado = Math.pow(base, expoente);
      console.log(`Resultado da potenciacao: ${this.resultado}`);
    } else {
      console.error('Por favor, insira numeros validos.');
    }
  }

  percentual() {
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

  subtracao() {
    console.log('\n*** Realizando Subtracao ***');
    this.numero1 = parseFloat(input.question('Digite o primeiro valor: '));
    this.numero2 = parseFloat(input.question('Digite o segundo valor: '));

    if (isNaN(this.numero1) || isNaN(this.numero2)) {
      console.log('Por favor, insira numeros validos.');
      return;
    }

    this.resultado = this.numero1 - this.numero2;
    console.log(`Resultado da subtracao: ${this.resultado}`);
  }

  somar() {
    console.log('\n*** Realizando Soma ***');
    this.numero1 = parseFloat(input.question('Digite o primeiro valor: '));
    this.numero2 = parseFloat(input.question('Digite o segundo valor: '));

    if (isNaN(this.numero1) || isNaN(this.numero2)) {
      console.log('Por favor, insira numeros validos.');
      return;
    }

    this.resultado = this.numero1 + this.numero2;
    console.log(`Resultado da soma: ${this.resultado}`);
  }

  bhaskara() {
    console.log('\n*** Calculando Bhaskara ***');
    const a = parseFloat(input.question('Digite o valor de a: '));
    const b = parseFloat(input.question('Digite o valor de b: '));
    const c = parseFloat(input.question('Digite o valor de c: '));

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
      console.log('Por favor, insira numeros validos.');
      return;
    }

    const delta = Math.pow(b, 2) - 4 * a * c;

    if (delta < 0) {
      console.log("Delta negativo. Equacao nao possui raizes reais.");
      return;
    }

    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(`x1 = ${x1.toFixed(4)}`);
    console.log(`x2 = ${x2.toFixed(4)}`);
  }

  radiciacao() {
    console.log('\n*** Realizando Radiciacao ***');
    const radicando = parseFloat(input.question('Digite o valor do radicando: '));
    const indice = parseFloat(input.question('Digite o valor do indice: '));

    if (!isNaN(radicando) && !isNaN(indice) && radicando >= 0 && indice > 0) {
      this.resultado = Math.pow(radicando, 1 / indice);
      console.log(`Resultado da radiciacao: ${this.resultado}`);
    } else {
      console.error('Por favor, insira numeros validos.');
    }
  }
}

const calculadora = new Calculadora();

calculadora.iniciarCalculadora();

