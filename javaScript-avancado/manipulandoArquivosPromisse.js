// No node temos um modulo para fazer leitura de arquivos, que seria o require

const { error } = require('console')
const fs = require('fs')
const path = require('path')

const filepath = path.resolve(__dirname, 'tarefas.csv')

async function buscarArquivo(){
    try{
        const arquivo = await fs.promises.readFile(filepath)
        const textoDoArquivo = arquivo.toString('utf8')
        console.log(textoDoArquivo)
    }catch(error){
        console.log(error)
    }finally{
        console.log('Finalizado!')
    }
}

buscarArquivo()

