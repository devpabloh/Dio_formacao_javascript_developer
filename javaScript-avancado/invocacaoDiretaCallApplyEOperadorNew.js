const pessoa = {
    nome:'Pablo',
    idade: 30
}


function gritar(prefixo){
    console.log(prefixo, this.nome)
    
}
// primeira forma de invocar a função
gritar('olá')

// Segunda forma de invocar a função, lembrando que as funções são objetos, logo pode ser usados metodos para invocar diretamente essa função, que são os seguintes

gritar.apply(pessoa, ['Olá']) // no uso do apply passamos primeiro o contexto e depois passamos os atributos da função através de um array []

// Terceira forma através do método

gritar.call(pessoa,'Oláááá') // no uso do call passamos primeiro o contexto e depois passamos os atributos/argumentos, mas diferente do apply esse não precisa usar um array