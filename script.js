
function selecionadoComida(card){
     let selecionarComida = document.querySelector(".card-comida-selecionado");

        if (selecionarComida !== null) {
        selecionarComida.classList.remove("card-comida-selecionado");

    }

card.classList.add("card-comida-selecionado");

const comida = document.querySelector('.card-comida-selecionado');
const bebida = document.querySelector('.card-bebida-selecionado');
const sobremesa = document.querySelector('.card-sobremesa-selecionado');
const botao = document.querySelector('.botao');

if ((comida !== null) && (bebida !== null) && (sobremesa !== null)) {
    botao.innerHTML = 'Fechar pedido';
    botao.classList.add('botao-selecionado');
}
}

function selecionadoBebida(card){
    let selecionarBebida = document.querySelector(".card-bebida-selecionado");
    if (selecionarBebida !== null) {
        selecionarBebida.classList.remove("card-bebida-selecionado");

    }
card.classList.add("card-bebida-selecionado");

const comida = document.querySelector('.card-comida-selecionado');
const bebida = document.querySelector('.card-bebida-selecionado');
const sobremesa = document.querySelector('.card-sobremesa-selecionado');
const botao = document.querySelector('.botao');

if ((comida !== null) && (bebida !== null) && (sobremesa !== null)) {
    botao.innerHTML = 'Fechar pedido';
    botao.classList.add('botao-selecionado');
}
}

function selecionadoSobremesa(card){
    let selecionarSobremesa = document.querySelector(".card-sobremesa-selecionado");
    if (selecionarSobremesa !== null) {
        selecionarSobremesa.classList.remove("card-sobremesa-selecionado");

    }
card.classList.add("card-sobremesa-selecionado");

const comida = document.querySelector('.card-comida-selecionado');
const bebida = document.querySelector('.card-bebida-selecionado');
const sobremesa = document.querySelector('.card-sobremesa-selecionado');
const botao = document.querySelector('.botao');

if ((comida !== null) && (bebida !== null) && (sobremesa !== null)) {
    botao.innerHTML = 'Fechar pedido';
    botao.classList.add('botao-selecionado');
}
}








