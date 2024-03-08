const objeto = {
    nome: 'Pablo Henrique',
    idade: 30,
    descrever: function(){

        nome = 'Gabriel'
        console.log(`Meu nome usando a forma literal é ${nome}, essa forma é usando o objeto.nome ${objeto.nome} meu nome usando o this é ${this.nome}`)
    }

}
objeto.descrever()