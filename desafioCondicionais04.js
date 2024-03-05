let preco = 250;
let formasDePagamento = 'debito';
let debito = preco * 10/100
let dinheiroPix = preco * 15/100
let divididoAcimaDeDuasVezes = preco + 10/100


if(formasDePagamento === 'debito'){
    return (`Você terá direito a um desconto de 10%, que equivale à R$ ${debito}`)

}else if(formasDePagamento === dinheiroPix){
    return (`Você terá direito a um desconto de 10%, que equivale à R$ ${dinheiroPix}`)
}else if(preco){
    return (`Você irá pagar o preço da etiqueta, que é R$ ${preco}`)
}else{
    return (`você terá um valor adicional de juros que equivale à R$ ${divididoAcimaDeDuasVezes}`)
}

