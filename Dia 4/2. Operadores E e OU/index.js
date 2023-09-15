// E ( && ) == duas condições verdadeiras, OU( || ) == Uma das condições deve ser verdadeira

let idade = Number(prompt("insira sua idade"))
let nome = prompt("Insira seu Nome")


if (idade === 19 && nome === "Eduardo") {
    console.log("Seu nome é Eduardo e você tem 19 anos")
}else if (idade === 19 || nome === "Eduardo") {
    console.log("Você tem 19 anos ou se chama Eduardo")
} else {
    console.log("Você não tem 19 anos nem se chama Eduardo")
}