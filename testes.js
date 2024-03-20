/* 
Para realizar esse calculo receba o valor bruto do salário e o adicional dos beneficios
O salario a ser transferido é calculado da seguinte maneira:

valor bruto do salario - percentual de imnposto mediante a faixa salarial + adicional dos beneficios

Para calcular o percentual de imposto segue as aliquotas:
De R$ 0.00 a R$ 1100.00 = 5.00%
De R$ 1100.00 a R$ 2500.00 = 10.00%
De R$ 2500.01 para cima = 15.00%

*/




const {gets,print} = require("../Dio_formacao_javascript_developer/06-importação/06-importacoes.js")

let salarioBruto = gets()
const adicional = gets()

function percentual(salarioBruto){
    if(salarioBruto >= 0 && salarioBruto <= 1100){
        return 5
    } else if(salarioBruto >= 1100.01 && salarioBruto <= 2500){
        return 10
    }else{
        return 15
    }
}

print (percentual())


function ImpostoBase(salarioBruto, percentual){

    return salarioBruto * percentual /100

}


