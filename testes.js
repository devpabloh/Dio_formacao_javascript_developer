const objeto = {
    nome: 'Pablo Henrique',
    idade: 30,
    descrever: function(){

        nome = 'Gabriel'
        console.log(`Meu nome usando a forma literal é ${nome} meu nome usando o this é ${this.nome}`)
    }

}
objeto.descrever()