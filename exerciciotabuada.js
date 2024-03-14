/* let multiplicador = []
multiplicador[0] = 2


for(let i = 1; i <= 10; i++){
    console.log(`${i} X ${multiplicador} = ${i*multiplicador}`)
} */


/* const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for(let i=0; i < numeros.length; i++){
    const par = numeros[i]
    if(par % 2 === 0){
        console.log(`${par} Esse número é par`)
    }
}
 */

/* const numerosPares = [];

    for (let i = 0; i < 10; i = i + 2) {
        numerosPares.push(i);
    }

    console.log(numerosPares); */

    const numerosPares = [];

    for (let i = 0; i < 10; i++) {
        const numeroPar = i % 2 === 0;
        if (numeroPar) {
            numerosPares.push(i);
        }
    }

    console.log(numerosPares);