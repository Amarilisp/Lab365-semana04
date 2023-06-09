import {Negociacao} from "../models/negociacao.js";
import {NegociacaoLista} from "../models/negociacaoLista.js";
import {NegociacaoView} from "../views/negociacaoView.js";

export class NegociacaoController {
    #campoData;
    #campoQuantidade;
    #campoValor;

    #listaNegociacao = new NegociacaoLista();
    #negociacoesView = new NegociacaoView();

    // construtor que pega os elementos do formulario
    constructor() {
        //pega o campo de data do formulario e salva e atribui ao #campoData
        this.#campoData = document.getElementById('negociation-date');
        this.#campoQuantidade = document.getElementById('stocks-quantity');
        this.#campoValor = document.getElementById('negociation-cost');
        this.filtro = document.getElementById('filtrar');

    }

// Este método é responsável por criar uma nova negociação a partir dos valores preenchidos no formulário
    criarNegociacao() {
// Obtém a data informada no campo data-transacao e cria um objeto Date
        let data = new Date(this.#campoData.value);

// Obtém a quantidade informada no campo quantidade-vendida e converte para número inteiro
        let quantidade = Number(this.#campoQuantidade.value);

// Obtém o valor informado no campo valor-negociacao e converte para número decimal
        let valor = Number(this.#campoValor.value);

// Verifica se os campos estão todos preenchidos
        if (!data || !quantidade || !valor) {
            alert('Por favor, preencha todos os campos');
            return;
        }

// Cria um objeto Negociacao com os valores informados
        let negociacao = new Negociacao(data, quantidade, valor);

// Adiciona a nova negociação à lista de negociações e atualiza a tabela
        this.#listaNegociacao.adicionarNegociacao(negociacao);
        this.#negociacoesView.adicionarNegociacao(negociacao);
    }


    filtrarNegociacao() {
        // obtém o valor do input
        let valorFiltro = this.filtro.value;

        // imprime o valor do filtro no console
        console.log(valorFiltro);

        // filtra as negociações com valor acima do valor informado no input
        let negociacoesFiltradas = this.#listaNegociacao.filtrarNegociacoesPorValor(valorFiltro);

        // imprime as negociações filtradas no console
        console.log(negociacoesFiltradas);

        // atualiza a view com as negociações filtradas
        this.#negociacoesView.atualizarFiltro(negociacoesFiltradas);
    }
}
