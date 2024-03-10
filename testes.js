class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    descrever(){
        console.log(`meu nome é ${this.nome} minha idade é ${this.idade}`)
    }
}
const pablo = new Pessoa('Pablo Henrique', 30)
pablo.descrever()