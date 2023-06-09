export class NegociacaoView {
    constructor() {
        //definindo a variável "tabela" como o elemento tbody da classe "container-tabela" encontrado no DOM
        this.tabela = document.getElementById('body-table');
    }

    //metodo para adicionar a negociação na pagina html
    adicionarNegociacao(negociacao) {
        //cria uma nova lista para a negociaçao na tabela
        const tr = document.createElement('tr');

        //cria uma nova celula de tabela para a data da negociação
        const tdData = document.createElement('td');
        //define o conteudo da celula com a data da negociaçao
        tdData.textContent = negociacao.data;

        //cria uma nova celula com a quantidade negociada
        const tdQuantidade = document.createElement('td');
        tdQuantidade.textContent = negociacao.quantidade;

        //cria uma nova celula com o valor da negociação
        const tdValor = document.createElement('td');
        tdValor.textContent = `R$ ${negociacao.valor}`;

        const tdTotal = document.createElement('td')
        tdTotal.textContent = (`R$ ${negociacao.valorTotal}`);

        const tdOpcao = document.createElement('td');
        tdOpcao.textContent = negociacao.opcao;

        //Adiciona as celulas e tabela criadas(Data,Quantidade e Valor)
        tr.appendChild(tdData);
        tr.appendChild(tdQuantidade);
        tr.appendChild(tdValor);
        tr.appendChild(tdTotal);
        tr.appendChild(tdOpcao);

        //adiciona a linha de negociacção na tabela
        this.tabela.appendChild(tr);
    }

    //metodo para atualizar a pagina com a lista filtrada
    atualizarFiltro(listaNegociacao) {
        // apaga a tabela anterior
        this.tabela.innerHTML = '';

        listaNegociacao.forEach(negociacao => {
            //cria a nova lista com os dados retornados do filtro
            const tr = document.createElement('tr');
            // Cria um novo elemento de tabela td.
            const tdData = document.createElement('td');
            //define o conteudo da tabela  com a data da negociação
            tdData.textContent = negociacao.data;
            const tdQuantidade = document.createElement('td');
            tdQuantidade.textContent = negociacao.quantidade;
            const tdValor = document.createElement('td');
            tdValor.textContent = `R$ ${negociacao.valor}`;
            const tdTotal = document.createElement('td');
            tdTotal.textContent = `R$ ${negociacao.valorTotal}`;
            const tdOpcao = document.createElement('td');
            tdOpcao.textContent = negociacao.opcao;
            tr.appendChild(tdData);
            tr.appendChild(tdQuantidade);
            tr.appendChild(tdValor);
            tr.appendChild(tdTotal);
            tr.appendChild(tdOpcao);
            this.tabela.appendChild(tr);
        });

        // Colocar icones na celula para as opções
            let imgEditar = document.createElement('img');
            imgEditar.src = '../imagens/editar.png';
            imgEditar.setAttribute('onclick', 'alert("Editar?")');

            let imgDelete = document.createElement('img');
            imgDelete.src = '../imagens/deletar.png';
            imgDelete.setAttribute('onclick', 'confirm("Confirmar?")');

            tdOpcao.appendChild(imgEditar);
            tdOpcao.appendChild(imgDelete);
            // -------------------------------------------
    }
}