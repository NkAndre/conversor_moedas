//formatados e auxiliares7 → formatação de moeda, validações e talvez a própria função de conversão.
export function converterMoeda(valor, cotacao) {
    return valor * cotacao;
}

export function formatarMoeda(valor, moeda) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: moeda
    }).format(valor);
}