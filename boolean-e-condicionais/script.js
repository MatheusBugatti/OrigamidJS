var possuiFacul = true;
var possuiDoutorado = false;

if(possuiFacul){
    console.log('Ele tem Faculdade');
} else {
    console.log('Não estudou');
}


if(possuiDoutorado) {
  console.log('Possui graduação e doutorado');
} else if(possuiFacul) {
  console.log('Possui graduação, mas não possui doutorado');
} else {
  console.log('Não possui graduação')
}


var x = 10
console.log(x == '10');
console.log(x === '10');
console.log(x !== '10');

//e &&              procura o primeiro false
true && true //true
true && false //false
false && true //false

//ou ||              procura o primeiro que é verdadeiro
true || true // true
true || false // true
false || true //true
'Cão' || 'Gato' //true
(5 -5) || (5 + 5) //10
'Cachorro' || false //Cachorro

//0 é um valor falso.



var corFavorita = 'amarelo';

switch (corFavorita) {
    case 'azul':
        console.log('Olhe para o ceu');
    break;
    case 'amarelo':
        console.log('Olhe o sol');
    break
    default:
     console.log('Fecehe os olhos');
    break;
}