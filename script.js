function selecionadoComida(card){
    let selecionar = document.querySelector(".card-comida-selecionado");
    if (selecionar !== null) {
        selecionar.classList.remove("card-comida-selecionado");

    }
card.classList.add("card-comida-selecionado");
}

function selecionadoBebida(card){
    let selecionar = document.querySelector(".card-bebida-selecionado");
    if (selecionar !== null) {
        selecionar.classList.remove("card-bebida-selecionado");

    }
card.classList.add("card-bebida-selecionado");
}

function selecionadoSobremesa(card){
    let selecionar = document.querySelector(".card-sobremesa-selecionado");
    if (selecionar !== null) {
        selecionar.classList.remove("card-sobremesa-selecionado");

    }
card.classList.add("card-sobremesa-selecionado");
}