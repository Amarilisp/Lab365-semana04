export class Negociacao {
  #data;
  #quantidade;
  #valor;
  constructor(data, quantidade, valor) {
    this.#data = data;
    this.#quantidade = quantidade;
    this.#valor = valor;
  }
  get datas() {
    return this.#data;
  }

  get quantidades() {
    return this.#quantidade;
  }

  get valores() {
    return this.#valor;
  }
}
