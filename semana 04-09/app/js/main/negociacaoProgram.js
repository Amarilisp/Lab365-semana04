import { NegociacaoController } from "../controllers/negociacaoControllers.js";

const negociacaoController = new NegociacaoController();
const btnEnviar = document.querySelector('#send-btn');
const btnReset = document.querySelector('#reset-btn')
const btnFiltrar=document.querySelector('#filtra-btn');


// chama o metodo criar negociação quando clica no botão Enviar
btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    negociacaoController.criarNegociacao();
    limpar();
});

// chama o metodo limpar os dados parciais digitados no botao Cancelar
btnReset.addEventListener('click', (e) => {
    e.preventDefault();
    limpar();
});
//chama o metodo filtrar quando clica no botão Filtrar
btnFiltrar.addEventListener('click',(e)=>{
    e.preventDefault();
    negociacaoController.filtrarNegociacao();
    limpar();
})

//controlar o input de ações limitando o minimo e maximo
const inputQuantidade = document.querySelector('#stocks-quantity');
inputQuantidade.addEventListener('input', () => {
    const valorDigitado = parseInt(inputQuantidade.value);
    if (valorDigitado<1) {
        inputQuantidade.value = 1;
    } if(valorDigitado > 100){
        inputQuantidade.value=100;
    }
});

function limpar() {
    document.getElementById('negociation-date').value = "";
    document.getElementById('stocks-quantity').value = "";
    document.getElementById('negociation-cost').value = "";
}