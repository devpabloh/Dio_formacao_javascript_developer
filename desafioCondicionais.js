let etanol = 3.42;
let gasolina = 5.77;
let tipoDeCombustivel = 'gasolina';
let gastoCombustivelPorKm = 10;
let distanciaViagem = 130;

if(tipoDeCombustivel === 'etanol'){
    let custoViagem = (distanciaViagem/ gastoCombustivelPorKm) * etanol;
    console.log(`O custo da viagem usando etanol é R$ ${custoViagem}`)

}else {
    let custoViagem = (distanciaViagem / gastoCombustivelPorKm) * gasolina;
    console.log(`O custo da viagem usando gasolina é R$ ${custoViagem.toFixed(2)}`)
}