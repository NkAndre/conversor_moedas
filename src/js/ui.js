// manipulacao do DOM  → pega valores da tela e mostra resultados.

export function obterDadosFormulario() {
    return {
        valor: Number(document.querySelector("#amount").value),
        moedaOrigem: document.querySelector("#from-currency").value,
        moedaDestino: document.querySelector("#to-currency").value
    };
}

export function exibirResultado(valor, moeda) {
    const resultadoCard = document.querySelector("#result-display");
    const resultadoValor = document.querySelector("#result-value");

    resultadoValor.textContent =
        new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: moeda
        }).format(valor);

    resultadoCard.classList.remove("hidden");
}

export function carregarMoedas() {
    const moedas = ["BRL", "USD", "EUR", "GBP"];

    const origem = document.querySelector("#from-currency");
    const destino = document.querySelector("#to-currency");

    moedas.forEach(moeda => {
        origem.innerHTML += `<option value="${moeda}">${moeda}</option>`;
        destino.innerHTML += `<option value="${moeda}">${moeda}</option>`;
    });
}