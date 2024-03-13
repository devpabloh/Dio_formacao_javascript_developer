const alunos = ['João', 'Vitor', 'Mariana']

//primeira forma de adcionar algo a um array
alunos.push('Renan');
//segunda forma de adicionar algo a um array
alunos[4] = 'Pablo'
// Usamos o poppy quando queremos remover algum valor do Array, ela vai tirar o ultimo valor 
alunos.pop();

/* console.log(alunos) */

/* const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

for(let i = 0; i < notas.length; i++){

}

console.log(soma / notas.length); */

const nome = 'vitor johansen guerra'

for(let i = 0; i < nome.length; i++){
    console.log(nome[i])
}