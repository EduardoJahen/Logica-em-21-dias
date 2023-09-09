// Declaração de variáveis
let nome = "";
let idade = 0;
let alturaCentimetros = 0;
let peso = 0;

// Solicitando informações ao usuário
nome = prompt("Digite seu nome: ");
idade = parseInt(prompt("Digite sua idade: "));
alturaCentimetros = parseFloat(prompt("Digite sua altura em centímetros: "));
peso = parseFloat(prompt("Digite seu peso em quilogramas: "));

// Conversão da altura para metros (dividir por 100, não 1000)
let alturaMetros = alturaCentimetros / 100;

// Cálculos
let anoNascimento = 2023 - idade;
let imc = peso / (alturaMetros * alturaMetros);

// Informações no console
console.log("Olá " + nome + ", você tem " + idade + " anos, nasceu em " + anoNascimento + ", tem " + alturaMetros + " metros de altura, pesa " + peso + " Kg e seu IMC é " + imc.toFixed(2) + " kg/m²");
