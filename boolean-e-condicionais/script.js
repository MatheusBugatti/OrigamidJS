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