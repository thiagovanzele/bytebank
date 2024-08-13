import { FormatoData } from "../types/FormatoData.js";
export function formatarMoeda(valor) {
    return valor.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });
}
export function formatarData(data, formato = FormatoData.PADRAO) {
    if (formato === FormatoData.DIA_SEMANA_DIA_MES_ANO_HORA_MINUTO) {
        return data.toLocaleString("pt-br", {
            hour12: false,
            weekday: "long",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    }
    else if (formato === FormatoData.DIA_MES) {
        return data.toLocaleString('pt-br', {
            day: "2-digit",
            month: "2-digit"
        });
    }
    else {
        return data.toLocaleString('pt-br');
    }
}
