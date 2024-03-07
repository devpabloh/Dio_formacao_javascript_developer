
/* function incrementarJuros(valor, percentualJuros){
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100,10)); */



function main(){
    let peso = 65;
    let altura = 1.70;
    
    const IMC = calcularIMC(peso,altura);
    console.log(classificarIMC(IMC))
}
main()


function calcularIMC(peso, altura){
    return  peso / Math.pow(altura,2);
}

function classificarIMC(IMC){
    if(IMC < 18.5){
        return (`Seu IMC é ${IMC.toFixed(2)}, o que significa que você está abaixo do peso`)
    } else if(IMC <= 18.5 && IMC <= 25){
        return (`Seu IMC é ${IMC.toFixed(2)}, o que significa que você está com o peso normal`)
    } else if(IMC <= 25 && IMC <= 30){
        return (`Seu IMC é ${IMC.toFixed(2)}, o que significa que você está acima do peso`)
    } else if(IMC <= 30 && IMC <= 40){
        return (`Seu IMC é ${IMC.toFixed(2)}, o que significa que você está com obesidade`)
    }else{
        return (`Seu IMC é ${IMC.toFixed(2)}, o que significa que você está com obesidade grave`)
    }
}
