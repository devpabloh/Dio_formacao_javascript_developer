function soma(x){
    return function (y){
        return x + y
    }
}

const somaparcial = soma(10)

console.log(somaparcial(20))
console.log(somaparcial(30))
console.log(somaparcial(40))