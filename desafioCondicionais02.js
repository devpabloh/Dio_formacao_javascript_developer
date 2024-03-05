// Faça um algoritmo que dado as 3 notas de um anulo, calcule e impima a média e a sua classificação conforme veremos a seguir:

/*
 Classificação:
 - média menor que 5, reprovado;
 - média entre 5 e 7, recuperação; e
 - média maior que 7, aprovado.
*/
//usando variáveis 
let nota4 = 8;
let nota5 = 7;
let nota6 = 7;

let media1 = (nota4 + nota5 + nota6) / 3;

/* console.log(media1); */

if(media1 < 5){
    console.log(`Sua média é ${media1.toFixed(2)}, você foi reprovado`)
} else if(media1 <=5 && media1 <= 7){
    console.log(`Sua média é ${media1.toFixed(2)}, você está em recuperação`)
} else {
    console.log(`Sua média é ${media1.toFixed(2)}, você foi aprovado, parabéns!`)
}

//usando funções
/* function notas (n1, n2, n3){
    let media = (n1 + n2 + n3) / 3;
    if(media < 5){
        return ("você foi reprovado");
    
    } else if(media === 6){
        return ("você está na recuperação");
    
    } else {
        return ("Você foi aprovado");
    }
}
console.log(notas(6,6,6)); */