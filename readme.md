# Trabalho Quiz Avaliação 2 de Desenvolvimento Web

Projeto de Quiz interativo desenvolvido como parte da Avaliação 2. O tema escolhido foi **BMW**, atendendo a todos os requisitos funcionais e não funcionais propostos.

## Identificação do Grupo
* **Turma:** [2MC]
* **Curso** [S.I.]
* **Grupo:** [Equipe10]
* **Integrantes:**
    * Caique Barbosa - 01799401
    * José Edeilson da Silva Junior - 01805046
    * Maria Giulia Souza Martins - 01822824

## Instruções de Execução
O projeto foi desenvolvido para rodar **offline**, sem dependências externas.

1.  Baixe e descompacte o arquivo `.zip`.
2.  Navegue até a pasta raiz do projeto.
3.  Abra o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Edge).
4.  Certifique-se de que as caixas de som estejam ligadas para a experiência de áudio.

## Estrutura de Arquivos
O projeto segue a organização solicitada:

• index.html
• css/ com arquivos .css 
• js/ com arquivos .js 
• imagens/ com todos os fundos e outras imagens usadas 
• sons/ arquivos de áudio 
• README.md com instruções de execução e versão do projeto

Segue abaixo as alterações realizadas a partir do código base fornecido pelo professor

• Estrutura e Organização

    Base: HTML, CSS e JS todos em um único arquivo.

    Alteração: Separação total de responsabilidades. O HTML apenas estrutura, o CSS (css/style.css) cuida do visual e o JS (js/script.js) da lógica.

• Lógica JavaScript

    Reaproveitado: A lógica central de arrays de objetos para as perguntas, o sistema de pontuação e a base da função do temporizador.

    Criado/Alterado:

        Tela Inicial: Criada as funções função telaInicial() e criarQuiz() para não iniciar o jogo abruptamente, permitindo interação do usuário antes do start.

        Sistema de Áudio: Implementação de trilha sonora com controle de volume via codigo no JS.

        Feedback Detalhado: A função mostrarResultado() foi reescrita do zero para listar detalhadamente quais perguntas o usuário acertou ou errou

        Timer Otimizado: Adicionada lógica para tratar o "não respondido" quando o tempo esgota adicionando -1 ao array das respostas do usuario (usado para gerenciar quais respostas foram acertadas ou não).

• Interface e Design

    Base: Estilização mínima e genérica.

    Alteração: Criação de uma identidade visual completa "Dark Mode" inspirada na BMW.

        Uso de Flexbox para alinhamentos.

        Implementação de Media Queries para responsividade total (Mobile, Tablet e/ou Desktop).

        Efeitos de hover e transições suaves

        Importação de fontes locais (@font-face) para garantir o funcionamento offline.

• Conteúdo

    Base: 3 perguntas genéricas com 4 alternativas.

    Alteração: Expansão para 10 perguntas sobre a BMW, cada uma com 5 alternativas, e configuração de imagens de fundo dinâmicas para cada questão.

Checklist de Requisitos Atendidos

    [x] Mínimo de 10 questões com 5 alternativas.

    [x] Temporizador configurável e funcional.

    [x] Imagem de fundo diferente para cada questão.

    [x] Resultado final detalhando erros e acertos.

    [x] Funcionamento 100% Offline (Imagens, Fontes e Sons locais).

    [x] Código comentado e organizado.

    Desenvolvido por Equipe 10 - Uninassau / 2MC / S.I.


