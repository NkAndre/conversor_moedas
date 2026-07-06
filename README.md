## Sobre
Uma aplicação web simples, rápida e responsiva para conversão de moedas em tempo real, desenvolvida utilizando conceitos modernos de JavaScript (ES6 Modules) e estilizada com Tailwind CSS.

---

## Funcionalidades

* **Conversão em Tempo Real:** Atualização instantânea dos valores ao selecionar as moedas ou digitar o valor.
* **Organização Modular:** Código JavaScript dividido em módulos (`import`/`export`) para melhor manutenção.
* **Design Responsivo:** Interface totalmente adaptável para dispositivos móveis e desktops graças ao Tailwind CSS.
* **Consumo de API:** Integração com API de cotações para buscar os valores mais recentes.

---

## 🛠️ Tecnologias 

<p align="left">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=html,css,javascript,tailwind" />
  </a>
</p>

---

```
## Como executar 

 No terminal, bash ou powershell, rode :
  
  git clone : https://github.com/NkAndre/conversor_moedas.git

  cd conversor_moedas

  npm install

  npm run dev
  

## Estrutura do Projeto

```text
├── src/                # Código-fonte da aplicação
│   ├── css/
│   │   └── style.css   # Estilização e diretivas do Tailwind CSS
│   └── js/             # Módulos JavaScript (ES6)
│       ├── api.js      # Gerenciamento de requisições e consumo da API
│       ├── main.js     # Ponto de entrada (inicialização do app)
│       ├── ui.js       # Manipulação do DOM e atualizações da interface
│       └── util.js     # Funções utilitárias (formatações, cálculos, etc.)
├── .gitignore          # Arquivos e pastas ignorados pelo Git (ex: node_modules)
├── index.html          # Página principal HTML da aplicação
├── package-lock.json   # Histórico detalhado das dependências instaladas
├── package.json        # Configurações do projeto e scripts do Tailwind
└── README.md           # Documentação do projeto

---


