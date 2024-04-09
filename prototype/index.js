/* 

Prototipagem: É um mecanismo fundamental em JavaScript que permite a herança de propriedades e métodos entre objetos.

Protótipo: É um objeto que serve como modelo para a criação de outros objetos. Quando um objeto é criado a partir de outro, ele herda as propriedades e métodos definidos no protótipo.

como funciona o __proto__:

Cada objeto em JavaScript tem um protótipo interno (oculto por padrão) acessível através de __proto__.
O protótipo é outro objeto que contém propriedades e métodos.
Quando você tenta acessar uma propriedade em um objeto, o JavaScript primeiro verifica se ela existe diretamente no objeto.
Se a propriedade não for encontrada, o JavaScript percorre a cadeia de protótipos (o objeto pai e seus próprios protótipos) até encontrar a propriedade ou chegar ao protótipo final (обычный объект (obychnyy obiekt) em russo, que significa "objeto comum" sem protótipo).

 */



// Lmebrando que objetos são uma coleção dinâmica de chave e valor

/* const pessoa = {
    genero: 'Masculino'
}

const pablo = {
    nome: 'Pablo',
    idade: 30,
    __proto__: pessoa
}


console.log(pablo.genero) */

// funções contrutoras, começamos usando letra maiusculas no nome da função para indicar que estamos criando uma função construtora

/* function Pessoa1(nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa1.prototype.falar = function(){
    console.log(`Meu nome é: ${this.nome}`) // lembrando de que quando estamos lidando com função construtora o this se refere sempre a função principal.
}
// Essa função construtora é a mesma coisa da de cima
class pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade

    }
    falar(){
        console.log(`Meu nome é: ${this.nome}`)  // lembrando de que quando estamos lidando com função construtora o this se refere sempre a função principal.
    
    }
} */

/* const pessoa = {
    idade: 18
}

const renan = {
    nome: 'Renan',
    idade: 30,
    __proto__: pessoa
}

console.log(renan.idade) */

const renan = {
    nome: 'Renan'
}

renan.__proto__ = {
    idade: 30
}

console.log(renan.idade)