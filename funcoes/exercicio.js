// Crie uma função para verificar se um valor é Truthy

function isTruthy(valor){
    return !!valor 
}
console.log(isTruthy(''));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado1, lado2, lado3, lado4){
    return `O perimetro é ${lado1 + lado2 + lado3 + lado4}`
}
console.log(perimetroQuadrado(2 ,1 ,2 ,1));



// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto(nome, sobrenome){
    return `Meu nome completo é: ${nome} ${sobrenome}`
}
console.log(nomeCompleto('matheus','bugatti'));




// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDoArgumento(argumento){
    if(typeof argumento == 'string'){
        return 'é uma string'
    } else{
        return 'não é uma string'
    }
}
console.log(tipoDoArgumento(2));



// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'scroll' ocorrer.

addEventListener('click', function(){
    var meuNomeCompleto = "Matheus Bugatti"
    return console.log(`Meu nome é ${meuNomeCompleto}`)
})



// Corrija o erro abaixo
function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados) {
    var totalPaises = 193;
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}
console.log(precisoVisitar(20));
console.log(jaVisitei(20));
