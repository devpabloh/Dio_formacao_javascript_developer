
function adicao(x,y){
    return x + y
}

function multiplicação (x,y){
    return x * y

}

function subtracao(x,y){
    return x - y
}

function divisão(x,y){
    return x / y
}

function calcular(x, operacao, y){
    console.log(operacao(x,y))
}
calcular(10, adicao, 20 )