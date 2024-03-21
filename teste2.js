
let salario =2000
function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    }else if(salario >= 1100.01 && salario <= 2500.00){
      aliquota = 0.10;
    }else if(salario > 2500.00){
      aliquota = 0.15;
    }
    
    //TODO Criar as demais condições para as aliquotas de 10.00% e 15.00%.
    return aliquota * salario;
}
console.log(calcularImposto(salario))