// Objeto é uma estrutura de dados que permite armazenar e organizar dados de várias formas. Um objeto é uma coleção de pares chave-valor, lembrando que os objetos em javascript são dinâmicos, o que significa que podemos adicionar, remover e modificar propriedades e métodos de um objeto mesmo depois de ele ter sido criado.

const pessoa = {
    nome: 'Pablo Henrique',
    idade: 30,
    descrever: function(){
        this
        console.log(`Meu nome é ${this.nome} e a minha idade é ${this.idade}`)
    }

}

pessoa.altura = 1.85;


pessoa.nome = 'Maria';
pessoa.idade = 35;

pessoa.descrever()