// Criando as Variaveis
let somaNotas = 0;
let totalAlunos = 0;
let totalHomens = 0;
let totalMulheresAcimaDe7 = 0;
let maiorNotaHomem = null;

// Criando o While
let continuarCadastro = true;
while (continuarCadastro) {
    // Peça ao usuário para inserir a nota e o sexo do aluno
    let nota = parseFloat(prompt("Digite a nota do aluno:"));
    let sexo = prompt("Digite o sexo do aluno (M para masculino, F para feminino):").toUpperCase();

    // Atualize a soma das notas e o número total de alunos
    somaNotas += nota;
    totalAlunos++;

    // Verifique o sexo do aluno
    if (sexo === "M") {
        totalHomens++;
        if (maiorNotaHomem === null || nota > maiorNotaHomem) {
            maiorNotaHomem = nota;
        }
    } else if (sexo === "F" && nota > 7) {
        totalMulheresAcimaDe7++;
    }

    // Pergunte ao usuário se deseja cadastrar outra nota
    let resposta = prompt("Deseja cadastrar outra nota? (S para sim, N para não):").toUpperCase();
    if (resposta !== "S") {
        continuarCadastro = false;
    }
}

// Calcule a média geral das notas
let mediaGeral = somaNotas / totalAlunos;

// Exiba as informações solicitadas
console.log(`Média geral dos alunos: ${mediaGeral}`);
console.log(`Quantidade de homens: ${totalHomens}`);
console.log(`Quantidade de mulheres com nota acima de 7: ${totalMulheresAcimaDe7}`);
console.log(`Maior nota entre os homens: ${maiorNotaHomem}`);