// == igual, != diferente, < menor que, > maior que, <= >= maior/menor ou igual que,  
// === é igual o valor e o tipo, !== é diferente o valor e o tipo.
// Escopo global e escopo menor


let idade = Number(prompt("Insira sua idade"));
let nome = prompt("Insira seu nome");
let titulo = "Pirata ";

if (idade <= 10) {
    console.log(titulo + nome + " Voce tem menos de 10 anos");
    let variavel1 = "Você ainda irá treinar muito para se tornar o rei dos piratas...";
    console.log(variavel1);
}
else {
    console.log(titulo + nome + " Voce tem mais de 10 anos");
    let variavel2 = "Você esta proximo de se tornar o rei dos piratas, continue assim...";
    console.log(variavel2);
}

// Teste de variavel fora do escopo maior
console.log("Fora do escopo do if e else");
console.log(variavel1) // Esta linha gera um erro, pois variavel1 está dentro do escopo do if
