//consumos de dados(fetch) → busca cotações na AwesomeAPI.

export async function buscarCotacao(moedaOrigem,moedaDestino) {
    const link =`https://economia.awesomeapi.com.br/json/last/${moedaOrigem}-${moedaDestino}`;

    const resposta = await fetch (link);
    const dados = await resposta.json();

    return Number (dados[`${moedaOrigem}${moedaDestino}`].bid);
}                                                                                                           