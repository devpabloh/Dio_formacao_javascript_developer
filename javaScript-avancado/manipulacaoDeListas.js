

const lista = [1,2,3,4,5,6,7,8,9]

// ForEach - tradução = para cada

// ForEach é um pouco mais lento do que o For, dependendo da quantidade de informações pode fazer diferença de um para outro

/* lista.forEach((value, i, listRef)=>{
    console.log(value, i, listRef)

}) */

/* ---------------------------------------------------------------------------------------------------------------------------------- */

// Filter

// Não altera a lista antiga, ele cria uma nova filtrando apenas o que foi solicitado

const listaDeNumerosPares = lista.filter((element)=>{
    return (element % 2 === 0)
})

console.log(listaDeNumerosPares)

// Map - conversão de um objeto em outro

class Pessoa {
    constructor (nome){
        this.name = nome
    }
}

const lista2 = [new Pessoa('Renan'), new Pessoa('Andressa'), new Pessoa('vitor'), new Pessoa ('Pablo')]

const listaNomes = lista2.map((element) => element.name)

 // Observação, lembrando que quando estamos usando arrow function não precisamos colocar a função não precisa de um corpo, logo não precusamos usar o return

console.log(listaNomes)

// reduce - reduz a lista a um único valor

const somaDeTodosOsNumeros = lista.reduce((previous, current) =>{
    return previous + current

}, 0) // nessa parte de baixo podemos passar qual o número inicial para a contagem de vezes, que nesse caso vai iniciar com o 0

console.log(somaDeTodosOsNumeros)

// Join - juntar

console.log(lista.join('/')) // adicionou a barra para dividir a lista

// exemplos de uso do que aprendemos

const lista3 = [{nome:'Renan'}, {nome: 'Andressa'}, {nome: 'Vitor'}, {nome:'Amanda'}]

console.log(
    lista3.map((e)=> e.nome)
    .filter((e)=> e.startsWith('A'))
    .join('; ')
)


