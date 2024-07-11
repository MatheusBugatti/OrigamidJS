// window.alert('erro com window');
// alert('erro direto');

const h1Selecionado = document.querySelector('h1');
console.log(h1Selecionado)


function callBackH1(){
    console.log('Clicou em', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callBackH1);