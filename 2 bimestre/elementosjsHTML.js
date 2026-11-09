// 1. Seleciona o elemento pelo ID
var botao = document.querySelector("#meuBotao");

// 2. Adiciona o evento de clique
botao.addEventListener("click", function() {
    alert('Você clicou no botão!');
}, false);


/*
DOMContentLoaded vs load (Carregamento da Página)

O que faz: Eles dizem ao JavaScript o momento exato em que ele pode começar a agir na página. O DOMContentLoaded avisa que o "esqueleto" (a árvore DOM do HTML) está pronto. Já o load avisa que tudo carregou (imagens pesadas, CSS, vídeos, etc). 
*/

/*
3. Validação e Estilização de FormuláriosO que faz: Pega os dados digitados pelo usuário num input para checar se estão certos e, se estiverem errados, altera o visual (CSS) do elemento pelo próprio JavaScript.   Exemplo de código:
*/

var nome = document.querySelector("#tx_nome"); // Pega o campo

if(nome.value.length < 8) { // Se o texto tiver menos de 8 letras
    nome.value = ""; // Limpa o que foi digitado
    nome.style.border = "solid 2px red"; // Pinta a borda de vermelho
}

/*
preventDefault()

O que faz: Ele cancela a ação padrão e automática que o navegador faria ao interagir com um elemento (desde que o evento seja cancelável).   

Contexto: Se você tem um botão do tipo "Submit" em um <form>, ao clicar, o navegador naturalmente vai tentar recarregar a página e enviar os dados. Você usa o preventDefault() na função do clique para travar esse recarregamento e dar tempo do seu JavaScript fazer a validação dos dados antes do envio.   
*/

/*
 6. getElementById
 
O que faz: Busca e seleciona um único elemento do HTML através do seu atributo id. Ele faz exatamente o mesmo trabalho que o document.querySelector("#meuId"), mas é mais antigo, um pouco mais rápido e só aceita IDs (não serve para buscar por classes ou tags).   
 
Exemplo de código JavaScript
*/

// Seleciona o parágrafo que tem o id "resultado"
var mensagem = document.getElementById("resultado");

/*
7. innerHTMLO que faz: Pega ou altera todo o conteúdo que está dentro de um elemento HTML. Diferente do .value (que serve para pegar o que o usuário digitou em um <input>), o innerHTML é usado para injetar textos ou até novas tags HTML (como <b>, <br>) dentro de divs, parágrafos (<p>), spans, etc.   Exemplo de código: JavaScript
*/

var paragrafo = document.getElementById("resultado");

// Altera o conteúdo do parágrafo, injetando um texto em negrito
paragrafo.innerHTML = "<b>Conta criada com sucesso!</b>";



/*
querySelectorAll com laço de repetição (for): O slide mostra um exemplo selecionando todas as tags <a> (links) de uma vez. Como ele retorna uma lista de elementos, é necessário usar um for para percorrer essa lista e adicionar o addEventListener um por um.   

Event Bubbling (Borbulhamento): O slide explica que o terceiro parâmetro do addEventListener (o false) define se o evento vai "borbulhar". Isso significa controlar se um clique em um elemento filho vai acionar os eventos de clique dos elementos pai na hierarquia do HTML.   

setAttribute: Usado no código de erro do formulário para trocar dinamicamente o placeholder do input (aquele texto de dica que fica apagadinho ao fundo), avisando que o campo foi preenchido incorretamente.   

Eventos keydown e blur: O slide introduz a necessidade de usar o evento keydown (disparado ao pressionar uma tecla) para esconder mensagens de erro em tempo real, e o evento blur (disparado quando o input "perde o foco", ou seja, você clica fora dele) para validar o tamanho do login assim que o usuário termina de digitar.   
*/

