// Retorne o url da página atual utilizando o objeto window
const hrefPagina = window.location.href;
console.log(hrefPagina);


// Seleciona o primeiro elemento da página que
// possua a classe ativo
//vai selecionar o primeiro "ativo"
const elementoAtivo = document.querySelector('.ativo')
//todos
const elementoAtivos = document.querySelectorAll('.ativo');

// Retorne a linguagem do navegador
const linguagem = window.navigator.language
console.log(linguagem);

// Retorne a largura da janela 
const largura = window.innerWidth
console.log(largura);