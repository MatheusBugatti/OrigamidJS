var pessoa = {
  nome: 'André',
  idade: 25,
  profissao: 'Designer',
  possuiFacul: true,
}

console.log(pessoa.nome, pessoa.profissao);


var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado
  },
  perimetro: function(lado){
    return this.lados * lado
  }
}
console.log(quadrado.area(4));
console.log(quadrado.perimetro(4));