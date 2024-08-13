import Conta from "../types/Conta.js";
import ExtratoComponent from "./extrato-component.js";
import SaldoComponent from "./saldo-componente.js";
const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", (e) => {
    try {
        e.preventDefault();
        if (!elementoFormulario.checkValidity()) {
            alert("Por favor, preencha os campos da transação");
            return;
        }
        const inputTipoTransacao = document.querySelector("#tipoTransacao");
        const inputValor = document.querySelector("#valor");
        const inputData = document.querySelector("#data");
        let tipoTransacao = inputTipoTransacao.value;
        let valor = inputValor.valueAsNumber;
        let data = new Date(inputData.value + " 00:00:00");
        const novaTransacao = {
            tipoTransacao: tipoTransacao,
            valor: valor,
            data: data,
        };
        Conta.registrarTrancacao(novaTransacao);
        SaldoComponent.atualizar();
        ExtratoComponent.atualizar();
        elementoFormulario.reset();
    }
    catch (erro) {
        alert(erro.message);
    }
});
