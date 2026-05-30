// o "cérebro" que importa os 

import { carregarMoedas } from "./ui.js";

carregarMoedas();

import { buscarCotacao } from "./api.js";
import { converterMoeda } from "./util.js";
import {
    obterDadosFormulario,
    exibirResultado
} from "./ui.js";

const formulario = document.querySelector("#converter-form");

formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    try {
        const { valor, moedaOrigem, moedaDestino } =
            obterDadosFormulario();

        const cotacao = await buscarCotacao(
            moedaOrigem,
            moedaDestino
        );

        const resultado = converterMoeda(valor, cotacao);

        exibirResultado(resultado, moedaDestino);

    } catch (erro) {
        console.error(erro);
        alert("Erro ao realizar a conversão.");
    }
});