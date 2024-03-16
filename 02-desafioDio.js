const {gets, print} = require('../Dio_formacao_javascript_developer/06-importação/06-importacoes')

// Faça um programa que receba N (quantidade de números) e seus respectivos valores
// Imprima o maior número par e o menor número impar

// saída maior numero par e maior número impar

let numerosRecebidos = gets()

let maiorNumeroPar = 0
for(let i=0; i < numerosRecebidos; i++ ){
    const numero = gets()
    if(numero % 2 === 0){
        if(numero > maiorNumeroPar){
            maiorNumeroPar = numero;
        }

    }
    
}

print(maiorNumeroPar)





