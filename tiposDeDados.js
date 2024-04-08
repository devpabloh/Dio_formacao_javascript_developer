/* 

Boolean
null
undefined
number
string
symbol

*/

// Object

//+infinity - infinity e NaN

// doble precision 64-bit binary format IEEE 754

// quando precisamos fazer contas matemáticas

// importante para entender, quando for utilizar matematica que precise ser precisa temos que recorrer a uma forma mais especifíca

/* let x = 10;
x = 'texto'; */

/* console.log(10 == '10')
console.log(10 === '10') */

/* const nome = '';

if(nome){
    console.log('preenchimento')
} */

// FORMAS DE DECLARAR 

// usando aspas duplas "" usando aspas simples '' ou usando a crase ``

// A convenção pede para usar geralmente as '' aspas simples, porque em alguns casos a aspas duplas pode dar problema, fazendo com que tenhamos que colocar / antes a primeira aspas e da última aspas dupla para representar que depois da primeira \ até a última \ o javascript interprete como string e não como caractere especial, vamos ver no exemplo a seguir

/* console.log("<div id=\"10\"> teste </div>") // como podemos ver tivemos que usar a barra invertida para demonstrar \

console.log('<div id="10"> teste </div>') // forma que a convenção prefere que seja realizado usando aspas simples */

console.log('<div id="'+id+'"> teste </div>')
console.log(`<div id="${id}"> teste </div>`)

