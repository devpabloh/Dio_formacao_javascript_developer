function escrevaSeuNome(nome){
    return (`Seu nome é ${nome}`)
}

console.log(escrevaSeuNome('Pablo Henrique'))

function verificarIdade(idade){
    if(idade >= 18){
        return (`${escrevaSeuNome('Pablo Henrique')} e você é de maior`)
    } else{
        return ("Você é menor de idade")
    }
}

console.log(verificarIdade(18))