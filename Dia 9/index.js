// Escrevendo algoritmo de pedidos 

let nome = prompt('Insira seu nome')
let idade = parseInt(prompt('Insira sua Idade'))
let peso = prompt('Insira seu peso')
let altura = prompt('Insira sua altura (Ex: 1.65)')
let profissão = prompt('Insira sua profissão')

console.log('Olá ' + nome + ', você tem ' + idade + ' anos, é ' + profissão + ', tem ' + altura + 'M de altura e pesa ' + peso + 'Kg')

//Verificando maior ou menor de idade

if (idade >= 18) {
    console.log('Está liberado pra tomar umas geladas')

} else {
    console.log('Sem gelada para você')
}

//Convertendo idade

let meses = idade * 12
let semanas = idade * 52
let dias = idade * 365

console.log('Sua idade em meses é: ' + meses)
console.log('Sua idade em semanas é: ' + semanas)
console.log('Sua idade em dias é: ' + dias)

//IMC

let imc = peso / (altura * altura)

if (imc < 18.5) {
    console.log('Seu IMC é: Magreza')
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log('Seu IMC é: Normal')
} else if (imc >= 24.9 && imc <= 30) {
    console.log('Seu IMC é: Sobrepeso')
} else if (imc > 30) {
    console.log('Seu IMC é: Obesidade')
}
//Descobrindo ano de nascimento

let anoAtual = 2023
let anoNasc = anoAtual - idade
console.log('Voce nasceu no ano de ' + anoNasc)

//Anos vividos

let anosVividos = anoNasc
let idadeAtual = 0

for (let anoVivido = anoNasc; anoVivido <= anoAtual; anoVivido++) {
    console.log(anoVivido + ' - ' + idadeAtual + ' anos de idade')
    idadeAtual++
}