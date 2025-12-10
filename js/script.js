// configuração do timer
let tempoPorPergunta = 10; // Define quanto tempo o usuário tem por questão

// array de perguntas para o quiz
// é um array de obejtos sendo cade um uma pergunta 
const quiz = [
  {
    pergunta: "Qual é o significado da abreviatura BMW?", // O texto da pergunta
    alternativas: ["Berliner Motoren Werke", "Bavarian Motor Wagons", "Bayerische Maschinen Werke", "Best Motor Wagons", "Bayerische Motoren Werke"], // Lista de opções
    correta: 4, // O índice da resposta certa (começa do 0. Então 4 é a quinta opção)
    pontos: 1   // Quanto vale essa questão
  },
  // as outras seguem o mesmo padrao
  {
    pergunta: "Onde se localiza a sede mundial da BMW (Vierzylinder)?",
    alternativas: ["Munique", "Berlim", "Hamburgo", "Frankfurt", "Estugarda"],
    correta: 0,
    pontos: 1
  },
  {
    pergunta: "Em que ano a BMW foi oficialmente fundada como Bayerische Motoren Werke?",
    alternativas: ["1916", "1920", "1913", "1925", "1908"],
    correta: 0,
    pontos: 1
  },
  {
    pergunta: "Qual das seguintes marcas de automóveis de luxo pertence ao BMW Group?",
    alternativas: ["Lexus", "Audi", "Mercedes-Benz", "Rolls-Royce", "Tesla"],
    correta: 3,
    pontos: 1
  },
  {
    pergunta: "Qual sistema de interface de condutor e veículo, que controla infoentretenimento e navegação?",
    alternativas: ["SYNC", "MMI", "iDrive", "COMAND", "Connect"],
    correta: 2,
    pontos: 1
  },
  {
    pergunta: "Qual foi o primeiro carro produzido pela BMW?",
    alternativas: ["BMW 328", "BMW 1500", "Dixi 3/15 PS", "BMW Isetta", "BMW 501"],
    correta: 2,
    pontos: 1
  },
  {
    pergunta: "Qual é a inspiração oficial por trás do design azul e branco do logótipo circular da BMW?",
    alternativas: ["Um volante visto de frente com os raios", "As cores da bandeira nacional da Alemanha", "Uma hélice de avião a girar sobre um céu azul", "As cores azul e branca da bandeira da Baviera", "O primeiro motor de combustão da empresa"],
    correta: 3,
    pontos: 1
  },
  {
    pergunta: "Qual é a famosa divisão de desempenho da BMW, responsável por modelos de alta performance?",
    alternativas: ["AMG", "Quattro GmbH", "BMW Motorsport", "SVR", "AC Schnitzer"],
    correta: 2,
    pontos: 1
  },
  {
    pergunta: "Qual é o slogan globalmente mais conhecido e duradouro da marca BMW?",
    alternativas: ["Das Auto", "The Best or Nothing", "Vantagem através da Tecnologia", "Puro Prazer de Conduzir", "O Prazer de Dirigir"],
    correta: 3,
    pontos: 1
  },
  {
    pergunta: " Qual foi o primeiro carro puramente elétrico lançado sob a submarca BMW?",
    alternativas: ["BMW i3", "BMW i8", "BMW iX", "BMW i4", "BMW i7"],
    correta: 0,
    pontos: 1
  },
];

// um array com os backgorunds das perguntas
const fundos = [
  'url(./imagens/img0.png)',
  'url(./imagens/img1.png)',
  'url(./imagens/img2.png)',
  'url(./imagens/img3.png)',
  'url(./imagens/img4.png)',
  'url(./imagens/img5.jpg)',
  'url(./imagens/img6.jpg)',
  'url(./imagens/img7.jpg)',
  'url(./imagens/img8.jpg)',
  'url(./imagens/img9.jpg)',
  'url(./imagens/fundoBaseQuiz.png)',
];

// variaveis gerais do jogo que servem para controle
let indice = 0;       // controla qual pergunta atual sera exibida
let pontuacao = 0;    // guarda a soma das pontuações
let tempo;            // variavel que guarda o tempo restante na pergunta
let contador;         // gurda o intervalo do timer
let respostasUsuario = []; // array pra armazenar as respostas do usuario

// função que exibe na tela a tela inicial do quiz
function telaInicial(){

  // Toca a música de fundo
  const musica = document.getElementById('musica-fundo');// Seleciona o elemento de áudio
  musica.volume = 0.3; // Define o volume (0.0 até 1.0). 0.3 é 30% (bom pra fundo)
  musica.play();       // Dá o play

  //ele cria uma estrutura e injeta no elemento quiz-container o html responsavel pela tela inicial
  document.getElementById("quiz-container").innerHTML = `
    <div id ="start-screen" class="start-screen">

      <!-- titulo do quiz -->
      <h1>Bem-vindo ao</h1>
      <h2>BMW QUIZ</h2>
      <h3>do Time 10</h3>

      <button class="start-button" onclick="criarQuiz()">Iniciar Quiz</button>          <!-- chama a função criarQuiz quando clica -->
    </div>
  `;
}

// função pra criar a estrutura do quiz
function criarQuiz() {

  // Cria a estrutura HTML básica do quiz dentro da div #quiz-container
  //obs: tive que criar essa função pra poder ultilizar um "menu inicial" antes do quiz começar se não caso eu retirasse o html inicial como veio como base e tentasse iniciar o quiz direto a tela inicial não apareceria
  document.getElementById("quiz-container").innerHTML =`
    <!-- Timer -->
    <div id="timer" class="timer">
      <span>Tempo restante: </span><span id="time-left"></span> segundos
    </div>

    <!-- Pergunta -->
    <div id="question-text" class="question-text"></div>

    <!-- Opções -->
    <div id="options" class="options"></div>

    <!-- Resultado Final -->
    <div id="result" class="result"></div>
  `;

  iniciarPergunta();// chama a função pra começar o jogo
}


// funcao que inicia as perguntas
function iniciarPergunta() {

  // Pega a imagem correspondente ao índice atual. Se não tiver imagem, usa 'none'.
  document.body.style.backgroundImage = fundos[indice] || 'none';
  document.body.style.backgroundSize = 'cover';      // Faz a imagem cobrir toda a tela
  document.body.style.backgroundPosition = 'center'; // Centraliza a imagem

  // serve para verificar se o jogo acabou
  // se o indice atual for igual ou maior que o total de perguntas ele chama a tela final
  if (indice >= quiz.length) {
    mostrarResultado(); // chama a tela final
    return;             // para a execução dessa função
  }

  // armazena a pergunta atual na varialvel  para facilitar o acesso
  const q = quiz[indice]; // armazena no "q" o objeto da pergunta do indice

  // Insere o texto da pergunta no HTML. 
  document.getElementById("question-text").textContent = `(${indice+1}) ${q.pergunta}`;//no caso ele faz indice mais 1 pq o indice começa no 0 e chama a pergunta dentro do objeto

  // irá limpar as opções anteriores
  const opcoesDiv = document.getElementById("options"); // armazena a div de opções na variavel
  opcoesDiv.innerHTML = ""; // insere uma string vazia para limpar as opções anteriores

  //usa um foreach para percorrer todas as alternativas da pergunta atual
  // e para cada alternativa ele cria um botão
  q.alternativas.forEach((alt, i) => {
    const btn = document.createElement("button"); // cria um elemento botão
    btn.textContent = alt;                        // adiciona o texto da alternativa ao botão
    
    //quando o botão for clicado chama a função de responder e passa o indice da resposta
    btn.onclick = () => responder(i); 
    
    opcoesDiv.appendChild(btn); // adiciona o botão na div de opções
  });

  //inica o timer da pergunta
  tempo = tempoPorPergunta; // define o novo tempo sendo o tempo padrão
  document.getElementById("time-left").textContent = tempo; //adicona o valor de tempo na tela como sendo um texto
  iniciarTimer(); // executa a função do timer para começar a contagem regressiva
}

// funçaõ que cria um timer regressivo
function iniciarTimer() {
  clearInterval(contador); // essa função limpa o contador anterior

  
  
  // Cria um loop que roda a cada 1seg
  contador = setInterval(() => { // armazena o intervalo na variavel contador para poder parar depois
    tempo--; // Diminui 1 segundo da variável tempo
    document.getElementById("time-left").textContent = tempo; // atualiza o texto na tela com o novo tempo

    // se o tempo chega a 0 ele executa o condicional
    if (tempo <= 0) {
      clearInterval(contador); // para o timer
      respostasUsuario.push(-1); // armazena -1 a array para indicar que nao foi respondido
      indice++;                // mesmo sem responder ele adiciona mais um ao indice e vai para proxima pergunta
      iniciarPergunta();       // ao final inicia a proxima pergunta
    }
  }, 1000); // aqui está em milisegundos então 1000 = 1 segundo
}

// função pra verificar a resposta do usuario
// a funlçao irá receber o incide da resposta clicada
function responder(i) {
  clearInterval(contador); //para o timer ao responder

  const q = quiz[indice];  // armazena o indice na variavel q pra facilitar
  
  respostasUsuario.push(i); // armazena a resposta do user na array pra verificar depois

  //se o indice da resposta for igual ao indice da resposta coreta
  if (i === q.correta) {
    pontuacao += q.pontos; // adicona a pontuação da resposta a pontualção total
  }
  
  indice++; // adiciona mais um ao indice pra ir pra poxima pergunta
  iniciarPergunta(); //chama novamente a funççai pra mostrar a proxima perguta
}

// função pra mostrar o resultado final
function mostrarResultado() {
  // ele seleciona e esconde os elementos que nao serão mais usados na tela
  document.getElementById("timer").style.display = "none";//none seria para esconder o elemento
  document.getElementById("question-text").style.display = "none";
  document.getElementById("options").style.display = "none";

  //o codigo abaixo server pra criar uma lista com os resultados escolhidos pelo usriario de cada pergunta
  let listaRespostas = '<ul class="lista-respostas">';// adiciona o "inicio" da lista a variavel das respostas
    
  // o for irá percorrer todas as perguntas do quiz
  for (let j = 0; j < quiz.length; j++) {

    if (respostasUsuario[j] === quiz[j].correta) { // caso o indice da resposta for igual ao indice da resposta correta
      listaRespostas += `<div class="divCorreta"><li class="correta">Pergunta ${j + 1}: ${quiz[j].pergunta} - Resposta correta!</li></div>`; // adiciona uma nova linha a variavel com a classe ja definida para ser editada no css
    } else {// Se a resposta for incorreta então adiciona uma nova linha com a classe incorreta
      listaRespostas += `<div class ="divIncorreta"><li class="incorreta">Pergunta ${j + 1}: ${quiz[j].pergunta} - Resposta incorreta.</li></div>`;// segue a mesma logica de cima
    }
  }
  listaRespostas += '</ul>';// adiciona uma ultima linha(fechamento da tag) na varial das respostas

  // e por fim irá inserir o resultado final na tela
  document.getElementById("result").innerHTML = `
    <h2>Resultado Final</h2>
    <p>Pontuação total: <strong>${pontuacao}</strong></p> <!-- mostra a pontuação total -->
    <p>Você respondeu ${quiz.length} perguntas.</p> <!-- mostra o numero total de perguntas -->

    <h3>Detalhes das suas respostas:</h3>
    ${listaRespostas} <!-- Insere a lista de respostas aqui -->
    <button class ="restart-button" onclick="location.reload()">Reiniciar</button> <!-- botão para reiniciar o quiz (no caso executa location.reload() que recarrega a página -->
  `;
}

telaInicial(); // Chama a função pela primeira vez para mostrrar a tela inicial assim que carrega a pagina