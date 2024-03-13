const alunos = ['João', 'Vitor', 'Mariana']

//primeira forma de adcionar algo a um array
alunos.push('Renan');
//segunda forma de adicionar algo a um array
alunos[4] = 'Pablo'
// Usamos o poppy quando queremos remover algum valor do Array, ela vai tirar o ultimo valor 
alunos.pop();

/* console.log(alunos) */

const notas = [];

notas.push(5);
notas.push(7);
notas.push(8);


let soma = 0

for(i = 0; i < notas.length; i++){

    const nota = notas[i]
    soma = soma + nota
}

const media = soma / notas.length;
console.log(media)

/* const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

for(let i = 0; i < notas.length; i++){

}

console.log(soma / notas.length); */

/* const nome = 'vitor johansen guerra';

for(let i = 0; i < nome.length; i++){
    console.log(nome[i]);
} */