
/* atividade
Crie uma classe para representar carro.

*/


// classes sempre começam com letras maiúsculas
class Carros {

    //função constructor são as regras que aqueles objetos que vão ser adicionados devem seguir
    constructor(marca, cor, gastoMedioKM){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKM = gastoMedioKM;

    }

}

// Quando usamos o new para criar um objeto a partir de uma função construtora ou uma classe, estamos criando uma instância dessa função ou classe, que no caso aqui é Fiat Uno, Vermelho, 15, é uma instância da ckasse Carros.
const fiat = new Carros('Fiat Uno', 'Vermelho', 15)
