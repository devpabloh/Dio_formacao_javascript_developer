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

//function declaration

function nomeDaFuncao(){
 console.log('nomeDaFuncao')
}

// function expression

// a mesma é atribuida a uma variável 
const nomeDeOutraFuncao = function(){
    console.log('nomeDaOutraFuncao')
}

nomeDaFuncao()
nomeDeOutraFuncao()