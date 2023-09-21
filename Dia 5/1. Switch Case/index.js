//Criando Variaveis 

let idade = Number(prompt('Insira sua idade'))

//Estruturando o Switch Case

switch (idade) {
    case 10:
        console.log('Você tem 10 anos')
        console.log('Segunda Linha 10')
        break;
    case 15:
        console.log('Você tem 15')
        console.log('Segunda Linha 15')
        break;
    case 20:
        console.log('Você tem 20 anos')
        console.log('Segunda linha 20')
        break;
    default:
        console.log('Default')
        break;
}