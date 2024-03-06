
/* 
    código condição de pagamento:

1 - À vista débito, recebe 10% de desconto;
2 - À vista no dinheiro ou PIX, recebe 15% de desconto;
3 - Em duas vezes, preço normal da etiqueta sem juros; e
4 - Acima de duas vezes, preço normal da etiqueta mais juros de 10%.
 */

let preco = 250;
let formasDePagamento = 4
let debito = preco * 10/100
let dinheiroPix = preco * 15/100
let divididoAcimaDeDuasVezes = preco * 10/100


if(formasDePagamento === 1){
    console.log(`Já que a sua opção de pagamento foi débito você ganhou um desconto de 10%, que equivale à R$${debito}, com esse desconto o valor total a pagar é de R$${preco - debito}.`)

}else if(formasDePagamento === 2){
    console.log(`Já que a sua opção de pagamento foi débito você ganhou um desconto de 15%, que equivale à R$${dinheiroPix}, com esse desconto o valor total a pagar é de R$${preco - dinheiroPix}.`)
}else if(formasDePagamento === 4){
    console.log(`Já que a sua opção de pagamento foi parcelado acima de duas vezes, você terá um valor de 10% adicionado ao preço, que equivale à R$${divididoAcimaDeDuasVezes}, com esse adicional o valor total a pagar é de R$${preco + divididoAcimaDeDuasVezes}.`)
}else{
    console.log(`Pagamento normal da etiqueta a que equivale à R$${preco}.`)
}

