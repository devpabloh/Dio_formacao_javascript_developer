// Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição, de acordo com a tabela abaixo.

/* IMC em adultos condição:
- Abaixo de 18.5 abaixo do peso;
- Entre 18.5 e 25 peso normal;
- Entre 25 e 30 acima do peso;
- Entre 30 e 40 Obeso; e
- Acima de 40 obesidade grave.

 */

let peso = 65;
let altura = 1.70;
const IMC = peso / Math.pow(altura,2);

if(IMC < 18.5){
    console.log(`Seu IMC é ${IMC.toFixed(2)}, o que significa que você está abaixo do peso`)
} else if(IMC <= 18.5 && IMC <= 25){
    console.log(`Seu IMC é ${IMC.toFixed(2)}, o que significa que você está com o peso normal`)
} else if(IMC <= 25 && IMC <= 30){
    console.log(`Seu IMC é ${IMC.toFixed(2)}, o que significa que você está acima do peso`)
} else if(IMC <= 30 && IMC <= 40){
    console.log(`Seu IMC é ${IMC.toFixed(2)}, o que significa que você está com obesidade`)
}else{
    console.log(`Seu IMC é ${IMC.toFixed(2)}, o que significa que você está com obesidade grave`)
}