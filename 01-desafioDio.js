const {gets,print} = require('../Dio_formacao_javascript_developer/06-importação/06-importacoes')

let media = gets()

if(media  >= 7 ){
    print('aprovado')
} else if(media  >= 5 && media < 7){
    print('recuperação')
}else{
    print('reprovado') 
}



