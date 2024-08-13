import { formatarMoeda } from "../utils/formatters.js";
import Conta from "../types/Conta.js";
import DataComponent from "./data-component.js";

const elementoDataAcesso = document.querySelector(".block-saldo time");
const elementoSaldo = document.querySelector(
  ".saldo-valor .valor"
) as HTMLElement;

function renderizarSaldo(): void {
  if (elementoSaldo) {
    elementoSaldo.textContent = formatarMoeda(Conta.getSaldo());
  }
}

const SaldoComponent = {
  atualizar() {
    renderizarSaldo();
  }
}

renderizarSaldo();
DataComponent.atualizarData();


export default SaldoComponent;