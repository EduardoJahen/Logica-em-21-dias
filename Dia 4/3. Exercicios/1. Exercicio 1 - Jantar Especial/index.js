let temFome = prompt("Você está com fome ? (sim/nao)")
let temDinheiro = prompt("Você tem dinheiro ? (sim/nao)")
let restauranteAberto = prompt("O restaurante está aberto agora ? (sim/nao)")


if (temFome === "nao" || temDinheiro === "nao") {
    console.log("Hoje a janta será em casa")
} else if (temFome === "sim" || temDinheiro === "sim") {
    console.log("Hoje o jantar será no seu restaurante preferido")
} else if (restauranteAberto === "não") {
    console.log("Peça um delivery")
}