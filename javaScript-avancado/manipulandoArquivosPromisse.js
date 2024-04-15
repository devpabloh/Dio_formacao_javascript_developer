// No node temos um modulo para fazer leitura de arquivos, que seria o require

const fs = require('fs')

const promesaDeLeituraDoArquivo = fs.promises.readFile('tarefas.csv') // ler arquivo através das promises

promesaDeLeituraDoArquivo.then((arquivo)=>{
    console.log(arquivo.toString('utf8'))
}).catch((error)=>{
    console.log('Deu ruim!', error)
})


