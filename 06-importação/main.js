const {gets, print} = require('../06-importação/06-importacoes');

const numerosSorteados = [];

/*  Primeira maneira
for(i=0; i < 5; i++){
    const numeroSorteado = gets();
    numerosSorteados.push(numeroSorteado);

}

 let maiorValor = 0

for(let i= 0; i < numerosSorteados.length; i++){
    const numeroSorteado = numerosSorteados[i];
    if(numeroSorteado > maiorValor){
        maiorValor = numeroSorteado;
    }
}

print(maiorValor) */ 

// Maneira mais fácil

let maiorValorEncontrado = 0

for(let i = 0; i < 5; i++){
    const ValoresSorteados = gets()
    if(ValoresSorteados > maiorValorEncontrado){
        maiorValorEncontrado = ValoresSorteados
    }
}

print(maiorValorEncontrado)
