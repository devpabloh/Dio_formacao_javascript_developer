 class pessoa {
    nome;
    idade;

    descrever(){
        console.log(`Meu nome é ${nome}, minha idade é ${idade}`);
    }
}

/* const pablo = new pessoa
pablo.nome = "Pablo Henrique";
pablo.idade = 30;

console.log(pablo.nome)
console.log(pablo.idade)  */

/* class pessoa {
    nome;
    idade;
    anoDeNascimento;
    
    constructor(nome, idade, anoDeNascimento){
    this.nome = 'Gabriel';
    this.idade = 200;
    this.anoDeNascimento = 2024 - idade;}
    descrever(){
    console.log(`Meu nome é ${this.nome}, minha idade é ${this.idade}, eu nasci em ${this.anoDeNascimento}`)}
    
} */

function compararPessoas(p1,p2){
    if(p1.idade > p2.idade){
        console.log(`A idade de ${p1.nome} é maior que a idade de ${p2.nome}, logo ele é mais velho`)
    } else if(p2.idade > p1.idade){
        console.log(`A idade de ${p2.nome} é maior que a idade de ${p1.nome}, logo ele é mais velho`)
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const pablo = new pessoa('Pablo',30);
const yuri = new pessoa('Yuri', 25)

compararPessoas(yuri,pablo);