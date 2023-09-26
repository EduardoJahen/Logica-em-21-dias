//Criando a função


function calculadora(num1, num2, operador) {
    num1 = parseInt(num1)
    num2 = parseInt(num2)
    switch (operador) {
        case '+':
            let resultadoSoma = num1 + num2;
            if (resultadoSoma > 1000000) {
                return "ERRO";
            }
            return resultadoSoma
            break;
        case "-":
            let resultadoSub = num1 - num2;
            if (resultadoSub > 1000000) {
                return 'ERRO';
            }
            return resultadoSub

            break;
        case "*":
            let resultadoMulti = num1 * num2
            if (resultadoMulti > 1000000) {
                return "ERRO";
            }
            return resultadoMulti
            break;
        case "/":
            let resultadoDiv = num1 / num2
            if (resultadoDiv > 1000000) {
                return "ERRO"
            }
            return resultadoDiv
            break;
        case 'e':
            let resultado = 1;
            for (let i = 0; i < num2; i++) {
                resultado *= num1;
            }
            return resultado;
            break;
        default:
            return "Operador invalido"
            break;

    }

}