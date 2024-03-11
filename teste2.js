class carro{
    constructor(modelo, ano){
        this.modelo = modelo;
        this.ano = ano;
    }

    descrever(){
        console.log(`esse é o modelo do carro ${this.modelo} e este é o ano do carro ${this.ano}`)
    }
}

const fiat = new carro('fiat uno', 2012)
fiat.descrever()
