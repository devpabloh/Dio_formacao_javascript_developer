// ForEach - tradução = para cada

// ForEach é um pouco mais lento do que o For, dependendo da quantidade de informações pode fazer diferença de um para outro

const lista = [1,2,3,4,5,6,7,8,9]

lista.forEach((value, i, listRef)=>{
    console.log(value, i, listRef)

})