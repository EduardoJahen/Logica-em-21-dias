//Primeira resolução

let tabuada = parseInt(prompt("Escolha a tabuada que deseja"))

for ( i = 0; i < 3; i++) {
     numero = tabuada + i;

    for (contador = 0; contador <= 10; contador++) {
        console.log(numero + " X " + contador + " = " + numero * contador)
    }
}