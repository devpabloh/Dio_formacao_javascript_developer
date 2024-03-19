const {gets, print} = require('../Dio_formacao_javascript_developer/06-importação/06-importacoes')

// Faça um programa que receba N (quantidade de números) e seus respectivos valores
// Imprima o maior número par e o menor número impar

// saída maior numero par e maior número impar

let numerosRecebidos = gets()

let maiorNumeroPar = null
let menorNumeroImpar = null
for(let i=0; i < numerosRecebidos; i++ ){
    const numero = gets()
    if(numero % 2 === 0){
        if(maiorNumeroPar === null){
            maiorNumeroPar = numero;
        } else if(numero > maiorNumeroPar){
            maiorNumeroPar = numero;
        }

    }else{
        if(menorNumeroImpar === null){
            menorNumeroImpar = numero;

        }else if(numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        }
    }
    
}

print(maiorNumeroPar)
print(menorNumeroImpar)





