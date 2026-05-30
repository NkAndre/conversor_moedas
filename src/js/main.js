// o "cérebro" que importa os modules 
import {
    carregarMoedas,
    obterDadosFormulario,
    exibirResultado
} from "./ui.js";
import { buscarCotacao } from "./api.js";
import { converterMoeda } from "./util.js";

carregarMoedas();

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