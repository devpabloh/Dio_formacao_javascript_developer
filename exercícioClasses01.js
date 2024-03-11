
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
    custoDaViagem(distanciaEmKM, precoCombustivel){
        return (`O valor gasto pelo ${this.marca} para realizar esse trajeto é de ${(distanciaEmKM * this.gastoMedioKM)  * precoCombustivel }`)
    }
}

// Quando usamos o new para criar um objeto a partir de uma função construtora ou uma classe, estamos criando uma instância dessa função ou classe, que no caso aqui é Fiat Uno, Vermelho, 15, é uma instância da ckasse Carros.
const uno = new Carros('Fiat', 'Vermelho', 1/12)
const palio = new Carros('Fiat', 'prata', 1/10)
console.log(uno.custoDaViagem(70,5))
console.log(palio.custoDaViagem(70,5))