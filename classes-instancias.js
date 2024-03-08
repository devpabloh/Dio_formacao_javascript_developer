class pessoa {
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
console.log(pablo.idade)