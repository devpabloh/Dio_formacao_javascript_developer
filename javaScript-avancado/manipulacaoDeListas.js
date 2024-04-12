

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

const listaNomes = lista.map((element) => element.name)

 // Observação, lembrando que quando estamos usando arrow function não precisamos colocar a função não precisa de um corpo, logo não precusamos usar o return

console.log(listaNomes)



