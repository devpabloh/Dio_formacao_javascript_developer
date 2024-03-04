// Faça um algoritmo que dado as 3 notas de um anulo, calcule e impima a média e a sua classificação conforme veremos a seguir:

/*
 Classificação:
 - média menor que 5, reprovado;
 - média entre 5 e 7, recuperação; e
 - média maior que 7, aprovado.
*/

function notas (n1, n2, n3){
    let media = (n1 + n2 + n3) / 3
    if(media < 5){
        console.log("você foi reprovado")
    
    } else if(media === 6){
        console.log("você está na recuperação")
    
    } else {
        console.log("Você foi aprovado")
    }
}
console.log(notas(6,6,6))