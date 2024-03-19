/* 
Para calcular o percentual de imposto segue as aliquotas:
De R$ 0.00 a R$ 1100.00 = 5.00%
De R$ 1100.00 a R$ 2500.00 = 10.00%
De R$ 2500.01 para cima = 15.00%
*/

const {gets, print} = require("../Dio_formacao_javascript_developer/06-importação/06-importacoes")

let numero = gets()

print(numero)