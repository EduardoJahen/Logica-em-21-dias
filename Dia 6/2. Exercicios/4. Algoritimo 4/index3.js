//Terceira resolução

let tabuada = Number(prompt("Escolha a tabuada que deseja"))

for( i = tabuada; i<=  tabuada+ 2; i++){
    console.log('Tabuada do numero: ' + i)
    for( j = 0; j <=10; j++){
        console.log(i + " X " + j + " = " + ( i*j))
    }
}