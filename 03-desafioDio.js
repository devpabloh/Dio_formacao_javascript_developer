/* 
Para calcular o percentual de imposto segue as aliquotas:
De R$ 0.00 a R$ 1100.00 = 5.00%
De R$ 1100.00 a R$ 2500.00 = 10.00%
De R$ 2500.01 para cima = 15.00%
*/

const {gets, print} = require("../Dio_formacao_javascript_developer/06-importação/06-importacoes")

let salario = gets()
const ValorAdicionalDoBeneficio = gets()




function calcularPorcentagem (valor, percentual){
    return valor * (percentual / 100)
}



function percentualComBaseNoSalario(salario){
    if( salario >= 0 && salario <= 1100){
        return 5
    } else if(salario >= 1100.01 && salario <= 2500){
        return 10
    }else {
        return 15
    }
}

    const valorImposto =  (calcularPorcentagem(salario, percentualComBaseNoSalario(salario)))

   const salarioATransferir = salario - valorImposto + ValorAdicionalDoBeneficio;

print(salarioATransferir)