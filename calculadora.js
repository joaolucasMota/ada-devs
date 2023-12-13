const input = require('readline-sync');

class Calculadora {
    constructor() {
        
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
}

