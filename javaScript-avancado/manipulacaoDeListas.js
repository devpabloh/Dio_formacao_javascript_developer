

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

class Pessoa {
    constructor (nome){
        this.name = nome
    }
}

const lista2 = [new Pessoa('Renan'), new Pessoa('Andressa'), new Pessoa('vitor'), new Pessoa ('Pablo')]

const listaNomes = []

for (let i = 0; i< lista2.length; i++) {
  const element = lista2[i];
  listaNomes.push(element.name)
}

console.log(listaNomes)



