/* 
Crie uma classe para representar pessoas.
para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao josé para dizer o valordo seu IMC;
*/

// O nome da classe sempre deve começar com letra maiúscula
class Pessoas {

    constructor(nome, peso, altura){
        // usamos o this para fazer referência a classe Pessoas que vai receber os valores que foram definidos através de regras na função constructor.
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }
    meuIMC(){
        return (`Eu sou ${this.nome} tenho ${this.peso /(this.altura * this.altura)} de IMC.`);
    }
}
// Aqui estamos usando o new para criar uma instância para a nossa classe Pessoas
const pessoa1 = new Pessoas('José', 70, 1.75);
// aqui estamos usando o console.log para puder imprimir o que queremos no console
console.log(pessoa1.meuIMC());