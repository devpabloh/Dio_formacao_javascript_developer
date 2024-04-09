// First class functions
// Higher order functions

function falarMeuNome(){
    console.log(`Meu nome é Pablo`)
}

function falarMeuNomeCompleto(){
    falarMeuNome()
    console.log(`Henrique Ferreira de França`)
}

falarMeuNomeCompleto(falarMeuNome)