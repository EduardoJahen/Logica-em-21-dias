// Calculadora DoDev

//Criando as variaveis

let num1 = parseInt(prompt("Insira o numero 1"))
let num2 = parseInt(prompt('Insira o numero 2'))
let operacao = parseInt(prompt('Insira a operação desejada' + "\n1 = +; \n2 = -; \n3 = *; \n4 = /;"))

//Switch Case

switch (operacao) {
    case 1:
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break;
    case 2:
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break;
    case 3:
        console.log(num1 + " * " + num2 + " = " + (num2 * num2))
        break;
    case 4:
        console.log(num1 + " / " + num2 + ' = ' + (num1 / num2))
        break;
    default:
        console.log('Default')
        break;
}