// criando as variaveis

let nome
let idade
let temCarta = false
let temCarro = false

//Pedindo informações ao usuario

nome = prompt("Insira seu nome")
idade = Number(prompt("Insira sua idade"))
let opcaoCarta = prompt("Você tem cnh ? (sim/nao)")
if (opcaoCarta == "sim") {
    temCarta = true
}
let opcaoCarro = prompt("Você tem algum carro ? (sim/nao)")
if (opcaoCarro == "sim") {
    temCarro = true
}

//Mensagem no console

if (idade < 18 || !temCarta) {
    console.log(nome + " Você não pode dirigir")
} else if (idade >= 18 && !temCarro) {
    console.log(nome + ", você pode dirigir, mas não tem um carro")
} else {
    console.log(nome + ", você será o motorista !")
}
