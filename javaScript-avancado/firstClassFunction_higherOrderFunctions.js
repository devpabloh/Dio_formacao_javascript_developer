// First class functions
// Higher order functions

/* function falarMeuNome(){
    console.log(`Meu nome é Pablo`)
}

function falarMeuNomeCompleto(){
    falarMeuNome()
    console.log(`Henrique Ferreira de França`)
}

falarMeuNomeCompleto(falarMeuNome) */

//function declaration - se executar a function declaration antes da função a mesma vai sofrer um hosting ou içamento, que vai levar ela automaticamente para acima do local que foi executado aquela função

function nomeDaFuncao(){
 console.log('nomeDaFuncao')
}

// function expression - essa só pode ser executada após declarar a mesma

// a mesma é atribuida a uma variável 
const nomeDeOutraFuncao = function(){
    console.log('nomeDaOutraFuncao')
}

nomeDaFuncao()
nomeDeOutraFuncao()