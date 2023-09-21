//Variaveis
let valor
let quantidade
let opcao = parseInt(prompt('Olá seja bem vindo ao posto DoDev thru:' + '\n1 = Abastecer com gasolina, \n2 = abastecer com álcool; \n3 = calibrar os pneus;'))

//Criando o Switch

switch (opcao) {
    case 1:
        valor = parseInt(prompt("Digite o valor desejado para abastecer."))
        quantidade = valor / 5
        console.log("Foram abastecidos: " + quantidade + " L de gasolina.")
        break;
    case 2:
        valor = parseInt(prompt("Digite o valor desejado para abastecer."))
        quantidade = valor / 3
        console.log('Foram abastecidos: ' + quantidade + " L de álcool.")
        break;
    case 3:
        console.log("Pneus calibrados com sucesso.")

        break;
    default:
        console.log("Default")
        break;
}
