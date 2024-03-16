// Funções Auxiliares


const entradas = [5, 3, 4, 1, 10, 8];

let i = 0;



function gets(){
    const valor = entradas[i];
    i++;
    return valor; 
}

function print(texto){
    console.log(texto)
}


// antigamente teria que ser colocado o gets; gets e print;print para informar que um recebe o outro, mas já que agora quando se tem o mesmo nome na função pode colocar apenas uma vez.
module.exports = {
    gets,
    print
}