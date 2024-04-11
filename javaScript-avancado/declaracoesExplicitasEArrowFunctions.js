//Declaração explicita  - existe contexto, logo tudo que é declarado {} fica isolado do resto

function funcao1(){
    console.log(this)
}

//arrow function - não tem contexto, logo não isola o mesmo dentro das {}

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
