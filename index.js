const sistemaDeArquivos = require('fs');

// Convertendo...
const dadosBrutos = sistemaDeArquivos.readFileSync('./alunos.json', 'utf8');
const alunos = JSON.parse(dadosBrutos);

function mostrarAlunosAprovados(lista) {
    for (let aluno of lista) {
        const notas = aluno.notas;
        const soma = notas.reduce((total, nota) => total + nota, 0);
        const media = soma / notas.length;

        if (media >= 7) {
            console.log(`Nome: ${aluno.nome}`);
            console.log(`Média: ${media.toFixed(2)}`);
            console.log(`Curso: ${aluno.curso}`);
            console.log('---------------------------');
        }
    }
}

mostrarAlunosAprovados(alunos);
