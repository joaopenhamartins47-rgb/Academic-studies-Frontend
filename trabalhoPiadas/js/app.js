

document.addEventListener("DOMContentLoaded", function() {
    let categoriaProgramacao = new Categoria("Programação");
    let categoriaAnimais = new Categoria("Animais");
    let categoriaCotidiano = new Categoria("Cotidiano");


    var PASTA_IMAGENS = "../imagens/";
    // Lista de piadas
    let piadas = [
        new Piada(
            "O código",
            "Meu código tem 3 camadas de abstração. Nenhuma delas eu consigo explicar.",
            PASTA_IMAGENS + "p1.jpg",
            categoriaProgramacao
        ),

        new Piada(
            "POO",
            "Um programador ama tanto herança que criou 7 níveis de classes só para imprimir \"Hello World!\"",
            PASTA_IMAGENS + "p2.jpg",
            categoriaProgramacao
        ),

        new Piada(
            "Java",
            "Por que o Java foi ao psicólogo? Porque tinha muitos problemas de classe!",
            PASTA_IMAGENS + "p3.jpg",
            categoriaProgramacao
        ),

        new Piada(
            "Machine Learning",
            "Machine learning: 90% limpar dados, 10% reclamar de ter que limpar dados.",
            PASTA_IMAGENS + "ml.pjg",
            categoriaProgramacao
        ),

        new Piada(
            "Animal antigo",
            "Qual é o animal mais antigo do mundo? A zebra, porque ela ainda é em preto e branco.",
            PASTA_IMAGENS + "fossil.pjg",
            categoriaAnimais
        ),

        new Piada(
            "A cozinha",
            "Entrei na cozinha para buscar uma coisa. Já abri a geladeira três vezes e ainda não lembrei o que era.",
            PASTA_IMAGENS + "cozinha.jpg",
            categoriaCotidiano
        ),

        new Piada(
            "O peixe",
            "Por que o peixe não gosta de jogar futebol? Porque tem medo da rede!",
            PASTA_IMAGENS + "peixe.jpg",
            categoriaAnimais
        ),

        new Piada(
            "A Aranha",
            "O que a aranha faz quando quer ficar famosa? Cria um perfil na web.",
            PASTA_IMAGENS + "aranha.jpg",
            categoriaAnimais
        ),

        new Piada(
            "O atraso",
            "Cheguei atrasado ao trabalho porque o despertador tocou e eu não queria interromper!",
            PASTA_IMAGENS + "despertador.jpg",
            categoriaCotidiano
        ),

        new Piada(
            "A Louça",
            "Vou lavar a louça depois. A louça: \"Eu espero... mas vou chamar os amigos.\"",
            PASTA_IMAGENS + "louca.jpg",
            categoriaCotidiano
        )
    ];

    // Elementos da página
    let selectCategoria = document.getElementById("categoria");
    let botaoSortear = document.getElementById("btnSortear");
    let tituloPiada = document.getElementById("tituloPiada");
    let textoPiada = document.getElementById("textoPiada");
    let imagemPiada = document.getElementById("imagemPiada");
    let categoriaPiada = document.getElementById("categoriaPiada");

    // Evita erro no caso de algum ID não existir no HTML
    if (!selectCategoria || !botaoSortear || !tituloPiada || !textoPiada || !imagemPiada || !categoriaPiada) {
        console.error("Não foi possível encontrar todos os elementos necessários no HTML.");
        return;
    }

    let categorias = [
        categoriaProgramacao,
        categoriaAnimais,
        categoriaCotidiano
    ];

    // Preenche o select com as categorias
    selectCategoria.innerHTML = "";

    let opcaoInicial = document.createElement("option");
    opcaoInicial.value = "";
    opcaoInicial.textContent = "Todas as categorias";
    selectCategoria.appendChild(opcaoInicial);

    categorias.forEach(function(categoria) {
        let opcao = document.createElement("option");
        opcao.value = categoria.nome;
        opcao.textContent = categoria.nome;
        selectCategoria.appendChild(opcao);
    });

    // Sorteia uma piada respeitando a categoria selecionada
    function sortearPiada() {
        let piadasDisponiveis = piadas;
        let categoriaEscolhida = selectCategoria.value;

        if (categoriaEscolhida !== "") {
            piadasDisponiveis = piadas.filter(function(piada) {
                return piada.categoria.nome === categoriaEscolhida;
            });
        }

        if (piadasDisponiveis.length === 0) {
            return;
        }

        let indiceAleatorio = Math.floor(Math.random() * piadasDisponiveis.length);
        let piadaSorteada = piadasDisponiveis[indiceAleatorio];

        tituloPiada.textContent = piadaSorteada.titulo;
        textoPiada.textContent = piadaSorteada.texto;
        imagemPiada.src = piadaSorteada.imagem;
        imagemPiada.alt = piadaSorteada.titulo;
        categoriaPiada.textContent = piadaSorteada.categoria.nome;
    }

    // Eventos da interface
    botaoSortear.addEventListener("click", sortearPiada);
    selectCategoria.addEventListener("change", sortearPiada);

    // Exibe uma piada aleatória ao carregar a página
    sortearPiada();
});
