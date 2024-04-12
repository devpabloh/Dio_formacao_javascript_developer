const pessoa = {
    nome:'Pablo',
    idade: 30
}


function gritar(prefixo){
    console.log(prefixo, this.nome)
}
// primeira forma de invocar a função
gritar()

// Segunda forma de invocar a função, lembrando que as funções são objetos, logo pode ser usados metodos para invocar diretamente essa função, que são os seguintes

gritar.apply(pessoa, ['Olá']) // no uso do apply passamos primeiro o contexto e depois passamos os atributos da função

// Terceira forma através do método

gritar.call()