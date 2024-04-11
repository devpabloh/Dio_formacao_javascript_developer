//Declaração explicita  

function funcao1(){
    console.log(this)
}

//arrow function

const funcao2 = () => {
    console.log(this)
}

const pablo = {
    nome: 'Pablo',
    funcao1,
    funcao2
}

pablo.funcao1()
pablo.funcao2()
