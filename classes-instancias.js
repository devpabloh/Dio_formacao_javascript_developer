/* class pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${nome}, minha idade é ${idade}`);
    }
}

const pablo = new pessoa
pablo.nome = "Pablo Henrique";
pablo.idade = 30;

console.log(pablo.nome)
console.log(pablo.idade) */

class pessoa {
    nome;
    idade;
    anoDeNascimento;
    
    constructor(nome, idade, anoDeNascimento){
    this.nome = 'Gabriel';
    this.idade = 200;
    this.anoDeNascimento = 2024 - idade;}
    descrever(){
    console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}, eu nasci em ${this.anoDeNascimento}`)}
    
}