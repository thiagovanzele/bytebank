import { formatarData } from "../utils/formatters.js";
import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";


const elementoDataAcesso = document.querySelector('.block-saldo time') as HTMLElement;

function renderizarData(): void {
    if (elementoDataAcesso) {
        elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO_HORA_MINUTO);
    }
}

const DataComponent = {
    atualizarData() {
        renderizarData;
    }
}

export default DataComponent;