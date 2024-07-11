function areaQuadrado(lado) {
  return lado * lado
}
console.log(areaQuadrado(5))


function imc(peso, altura){
  const imc = peso / (altura * altura);
  return imc
}

console.log(imc(80, 1.82)) //argumentos


function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
console.log(corFavorita()); 


//Fica escutando o evento
addEventListener('click', function() {
  console.log('Clicou');
})


function terceiraIdade(idade){
  if(typeof idade !== 'number') {
    return "Preencha um numero"
  } else if(idade >= 60){
    return true
  }
}
console.log(terceiraIdade('oi'));


var totalPaises = 193;

function faltaVisitar(paisesQueVisitei){
  return `Falta visitar ${totalPaises - paisesQueVisitei} paises`
}

console.log(totalPaises);




var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); 
