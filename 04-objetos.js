// Objeto é uma estrutura de dados que permite armazenar e organizar dados de várias formas. Um objeto é uma coleção de pares chave-valor, lembrando que os objetos em javascript são dinâmicos, o que significa que podemos adicionar, remover e modificar propriedades e métodos de um objeto mesmo depois de ele ter sido criado.

/* const pessoa = {
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
 */

class Pessoa {
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
}
function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`)
    } else if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`)
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const vitor = new Pessoa("vitor",30)
const pablo = new Pessoa("pablo",35)

compararPessoas(vitor,pablo)