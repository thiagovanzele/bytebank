import Conta from "../types/Conta.js";
import { TipoTransacao } from "../types/TipoTransacao.js";
import { Transacao } from "../types/Transacao.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-componente.js";

const elementoFormulario = document.querySelector(
  ".block-nova-transacao form"
) as HTMLFormElement;
elementoFormulario.addEventListener("submit", (e) => {
  try {
    e.preventDefault();
    if (!elementoFormulario.checkValidity()) {
      alert("Por favor, preencha os campos da transação");
      return;
    }

    const inputTipoTransacao = document.querySelector(
      "#tipoTransacao"
    ) as HTMLSelectElement;
    const inputValor = document.querySelector("#valor") as HTMLInputElement;
    const inputData = document.querySelector("#data") as HTMLInputElement;

    let tipoTransacao: TipoTransacao =
      inputTipoTransacao.value as TipoTransacao;
    let valor: number = inputValor.valueAsNumber;
    let data: Date = new Date(inputData.value + " 00:00:00");

    const novaTransacao: Transacao = {
      tipoTransacao: tipoTransacao,
      valor: valor,
      data: data,
    };

    Conta.registrarTrancacao(novaTransacao);
    SaldoComponent.atualizar();
    ExtratoComponent.atualizar();

    elementoFormulario.reset();
  } catch (erro) {
    alert(erro.message);
  }
});
