/* class carro{
    constructor(modelo, ano){
        this.modelo = modelo;
        this.ano = ano;
    }

    descrever(){
        console.log(`esse é o modelo do carro ${this.modelo} e este é o ano do carro ${this.ano}`)
    }
}

const fiat = new carro('fiat uno', 2012)
fiat.descrever() */

let media = 5

function statusAluno(media){
    if(media > 5){
      return ('Reprovadp');
    }else if(media >= 5 && media < 7){
      return ('Recuperação');
    }else{
      return ('Aprovado');
    }
  }

  console.log(statusAluno(media))
