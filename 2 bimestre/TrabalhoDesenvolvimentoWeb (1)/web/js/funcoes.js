// Dados dos profissionais e do grupo de apoio.
var profissionais = [
    {
        "id": "ana",
        "nome": "Dra. Ana Souza",
        "tipo": "Psicóloga Clínica",
        "categoria": "Psicologia",
        "desc": "Ana acompanha adultos que enfrentam ansiedade, desânimo e dificuldades com a autoestima. Em seus atendimentos, oferece espaço para conversar sobre emoções e compreender como os pensamentos influenciam o cotidiano. O acompanhamento é construído junto com cada pessoa, respeitando seu ritmo e suas necessidades.",
        "publico": "Adultos",
        "dias": "Segunda a sexta"
    },
    {
        "id": "lucas",
        "nome": "Lucas Mendes",
        "tipo": "Terapeuta Ocupacional",
        "categoria": "Terapia ocupacional",
        "desc": "Lucas trabalha com adultos e idosos que desejam retomar atividades importantes e organizar a rotina. Seu acompanhamento considera tarefas de casa, trabalho, lazer e convivência. Durante os encontros, propõe estratégias para ampliar a autonomia e tornar o dia a dia mais acessível.",
        "publico": "Adultos e idosos",
        "dias": "Terças e quintas"
    },
    {
        "id": "beatriz",
        "nome": "Dra. Beatriz Lima",
        "tipo": "Psiquiatra",
        "categoria": "Psiquiatria",
        "desc": "Beatriz realiza avaliação e acompanhamento psiquiátrico de adultos. Dedica atenção à história de cada pessoa, às mudanças no sono, no humor e às dificuldades que afetam a rotina. Constrói o plano de cuidado em diálogo com o paciente e, quando necessário, com os demais profissionais que o acompanham.",
        "publico": "Adultos",
        "dias": "Segundas e quartas"
    },
    {
        "id": "rafael",
        "nome": "Rafael Oliveira",
        "tipo": "Psicólogo Clínico",
        "categoria": "Psicologia",
        "desc": "Rafael atende adultos que estão passando por estresse, conflitos nos relacionamentos ou mudanças na vida profissional. Os encontros são um espaço para compreender padrões de comportamento, conversar sobre escolhas e estabelecer limites. Seu trabalho valoriza a escuta e a participação de cada pessoa no próprio processo.",
        "publico": "Adultos",
        "dias": "Segunda a sexta"
    },
    {
        "id": "mariana",
        "nome": "Mariana Costa",
        "tipo": "Psicóloga Infantil",
        "categoria": "Psicologia",
        "desc": "Mariana acompanha crianças e adolescentes em questões relacionadas às emoções, à escola e à convivência familiar. Utiliza conversas e atividades adequadas a cada faixa etária para favorecer a expressão de sentimentos. Também realiza encontros de orientação com responsáveis, considerando o contexto de desenvolvimento de cada jovem.",
        "publico": "Crianças e adolescentes",
        "dias": "Terças e sextas"
    },
    {
        "id": "pedro",
        "nome": "Dr. Pedro Almeida",
        "tipo": "Psiquiatra",
        "categoria": "Psiquiatria",
        "desc": "Pedro acompanha adultos e idosos com queixas de ansiedade e alterações do humor. Nas consultas, considera a saúde física, os hábitos, o sono e a rede de apoio do paciente. Explica as possibilidades de cuidado e acompanha a evolução de cada pessoa ao longo do atendimento.",
        "publico": "Adultos e idosos",
        "dias": "Quartas e sextas"
    },
    {
        "id": "camila",
        "nome": "Camila Santos",
        "tipo": "Terapeuta Ocupacional",
        "categoria": "Terapia ocupacional",
        "desc": "Camila atende adolescentes e adultos que encontram dificuldades para manter a rotina e participar de atividades sociais. Seu trabalho parte dos interesses e das necessidades de cada pessoa, incluindo estudo, trabalho e lazer. Os encontros buscam construir estratégias práticas de organização e participação no cotidiano.",
        "publico": "Adolescentes e adultos",
        "dias": "Segundas e quintas"
    },
    {
        "id": "andre",
        "nome": "André Ribeiro",
        "tipo": "Psicólogo Clínico",
        "categoria": "Psicologia",
        "desc": "André oferece acompanhamento a adultos e idosos que vivem o luto, mudanças familiares ou outras transições importantes. Acolhe dúvidas e sentimentos que surgem nesses períodos, sem impor um tempo para lidar com cada experiência. Também trabalha questões de autoconhecimento e construção de novos vínculos.",
        "publico": "Adultos e idosos",
        "dias": "Terças e quintas"
    },
    {
        "id": "grupo",
        "nome": "Grupo Florescer",
        "tipo": "Grupo de Apoio",
        "categoria": "Grupo de apoio",
        "desc": "O Grupo Florescer reúne adultos que buscam um espaço de conversa sobre os desafios do dia a dia. Os encontros são conduzidos por Clara Martins, com acordos de respeito à privacidade e ao tempo de fala de cada participante. Cada pessoa pode compartilhar suas experiências ou apenas ouvir, de acordo com o que se sentir confortável.",
        "publico": "Adultos",
        "dias": "Sábados",
        "duracao": "60 minutos"
    }
];

function validarLogin(event) 
{
    event.preventDefault(); 

    var email = document.getElementById("emailLogin").value; 
    var senha = document.getElementById("senhaLogin").value;
    var erro = "";

    if (email == "")
        erro = erro + "O campo de e-mail não pode ficar vazio.<br>";
    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.indexOf(" ") != -1)
        erro = erro + "Por favor, insira um e-mail válido.<br>";
    else 
    {
        var emailMinusculo = email.toLowerCase();
        if (emailMinusculo.indexOf("@gmail.") == -1 && emailMinusculo.indexOf("@hotmail.") == -1)
            erro = erro + "E-mail inválido.<br>";
    }

    if (senha == "")
        erro = erro + "A senha não pode estar vazia.<br>";
    else if (senha.length < 6)
        erro = erro + "A senha deve ter pelo menos 6 caracteres.<br>";

    var caixaErro = document.getElementById("erroLogin");
    
    if (erro != "") 
    {
        caixaErro.innerHTML = erro;
        caixaErro.style.display = "block";
    } 
    else 
    {
        caixaErro.style.display = "none";
        window.location.href = "index.html"; 
    }
}

function validarCadastro(event) 
{
    event.preventDefault(); 

    var email = document.getElementById("emailCadastro").value;
    var senha = document.getElementById("senhaCadastro").value;
    var confirmaSenha = document.getElementById("confirmaSenhaCadastro").value;
    var tipoUsuario = document.getElementById("tipoUsuario").value;
    var erro = "";

    if (email == "")
        erro = erro + "O campo de e-mail não pode ficar vazio.<br>";
    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.indexOf(" ") != -1)
        erro = erro + "Por favor, insira um e-mail válido.<br>";
    else 
    {
        var emailMinusculo = email.toLowerCase();
        if (emailMinusculo.indexOf("@gmail.") == -1 && emailMinusculo.indexOf("@hotmail.") == -1)
            erro = erro + "E-mail inválido.<br>";
    }

    if (senha.length < 6)
        erro = erro + "A senha deve ter pelo menos 6 caracteres.<br>";

    if (senha != confirmaSenha)
        erro = erro + "As senhas não coincidem.<br>";

    if (tipoUsuario == "")
        erro = erro + "Selecione o tipo de conta.<br>";

    var formulario = document.getElementById("formCadastro");
    formulario.classList.add("was-validated");

    if (!formulario.checkValidity())
        erro = erro + "Confira os campos obrigatórios e os valores informados.<br>";

    var caixaErro = document.getElementById("erroCadastro");

    if (erro != "") 
    {
        caixaErro.innerHTML = erro;
        caixaErro.style.display = "block";
    }
    else 
    {
        caixaErro.style.display = "none";
        
        var toast = document.getElementById("toastCadastro");
        if (toast) 
        {
            toast.style.visibility = "visible";
            toast.style.opacity = "1";
            
            setTimeout(function() {window.location.href = "login.html"; }, 2500);
        }
    }
}

function validarContato(event) 
{
    event.preventDefault(); 

    var nome = document.getElementById("nomeContato").value;
    var email = document.getElementById("emailContato").value;
    var mensagem = document.getElementById("mensagemContato").value;
    var erro = "";

    if (email == "")
        erro = erro + "O campo de e-mail não pode ficar vazio.<br>";
    else if (email.indexOf("@") == -1 || email.indexOf(".") == -1 || email.indexOf(" ") != -1)
        erro = erro + "Insira um e-mail válido.<br>";
    else 
    {
        var emailMinusculo = email.toLowerCase();
        if (emailMinusculo.indexOf("@gmail.") == -1 && emailMinusculo.indexOf("@hotmail.") == -1)
            erro = erro + "E-mail inválido.<br>";
    }

    var caixaErro = document.getElementById("erroContato");

    if (erro != "") 
    {
        caixaErro.innerHTML = erro;
        caixaErro.style.display = "block";
    } 
    else 
    {
        caixaErro.style.display = "none";
        document.getElementById("nomeContato").value = "";
        document.getElementById("emailContato").value = "";
        document.getElementById("assuntoContato").value = ""; 
        document.getElementById("mensagemContato").value = "";

        var toast = document.getElementById("toastSucesso");
        if (toast) 
        {
            toast.style.visibility = "visible";
            toast.style.opacity = "1";
            setTimeout(function() {toast.style.opacity = "0"; setTimeout(function() {toast.style.visibility = "hidden";}, 400);}, 4000);
        }
    }
}

function realizarAgendamento(event) 
{
    event.preventDefault(); 

    var profissional = document.getElementById("escolhaProfissional").value;
    var data = document.getElementById("dataAgendamento").value;
    var horario = document.getElementById("horarioAgendamento").value;
    var erro = "";

    if (profissional == "")
        erro = erro + "- Selecione um psicólogo ou grupo de apoio.\n";

    if (data == "")
        erro = erro + "- Escolha uma data para a sessão.\n";

    if (horario == "")
        erro = erro + "- Escolha um horário disponível.\n";

    if (erro != "")
        alert("Atenção:\n" + erro);
    else 
    {
        var partesData = data.split("-");
        var dataFormatada = partesData[2] + "/" + partesData[1] + "/" + partesData[0];
        var comprovante = "<div class='alert alert-success mt-4'>";
        comprovante = comprovante + "<h4>Agendamento Confirmado!</h4>";
        comprovante = comprovante + "<p><strong>Profissional:</strong> " + profissional + "</p>";
        comprovante = comprovante + "<p><strong>Data:</strong> " + dataFormatada + "</p>";
        comprovante = comprovante + "<p><strong>Horário:</strong> " + horario + "</p>";
        comprovante = comprovante + "<p>Um e-mail com o link da sessão foi enviado para você.</p>";
        comprovante = comprovante + "</div>";

        document.getElementById("areaComprovante").innerHTML = comprovante;
        document.getElementById("formAgendamento").style.display = "none";
    }
}

function carregarProfissional()
{
    var parametros = new URLSearchParams(window.location.search);
    var codigo = parametros.get("prof");
    var profissional = profissionais[0];

    for (var i = 0; i < profissionais.length; i++)
    {
        if (profissionais[i].id == codigo)
            profissional = profissionais[i];
    }

    if (document.getElementById("nomeProf") != null)
    {
        document.getElementById("nomeProf").textContent = profissional.nome;
        document.getElementById("tipoProf").textContent = profissional.tipo;
        document.getElementById("descProf").textContent = profissional.desc;
        document.getElementById("fotoProf").src = "img/profissionais/" + profissional.id + ".jpg";
        if (profissional.id == "grupo")
        {
            document.getElementById("fotoProf").alt = "Ambiente com poltronas, ilustrando um espaço de encontro";
            document.getElementById("fotoProf").classList.add("group-photo");
        }
        else
        {
            document.getElementById("fotoProf").alt = "Foto ilustrativa do perfil: " + profissional.nome;
            document.getElementById("fotoProf").classList.remove("group-photo");
        }
        document.getElementById("publicoProf").textContent = profissional.publico;
        document.getElementById("diasProf").textContent = profissional.dias;
        document.getElementById("duracaoProf").textContent = profissional.duracao || "50 minutos";
        document.getElementById("escolhaProfissional").value = profissional.nome;
    }
}

function saidaRapida() 
{
    window.location.href = "https://www.google.com";
}

document.addEventListener("keydown", function(event) {
    if (event.key == "Escape") {
        saidaRapida();
    }
});

function aumentarFonte() 
{
    var estiloAtual = window.getComputedStyle(document.body);
    var tamanho = parseFloat(estiloAtual.fontSize);
    
    document.body.style.fontSize = (tamanho + 2) + "px";
}

function diminuirFonte() 
{
    var estiloAtual = window.getComputedStyle(document.body);
    var tamanho = parseFloat(estiloAtual.fontSize);
    
    document.body.style.fontSize = (tamanho - 2) + "px";
}

function filtrarVoluntarios()
{
    var inputBusca = document.getElementById("busca").value.trim().toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var filtroEspecialidade = document.getElementById("especialidade").value.toUpperCase();
    var cards = document.getElementsByClassName("volunteer");
    var quantidade = 0;

    for (var i = 0; i < cards.length; i++)
    {
        var textoDoCard = cards[i].textContent.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        var especialidade = cards[i].getAttribute("data-especialidade").toUpperCase();
        var passouNaBusca = textoDoCard.indexOf(inputBusca) != -1;
        var passouNaEspecialidade = filtroEspecialidade == "" || especialidade == filtroEspecialidade;

        if (passouNaBusca && passouNaEspecialidade)
        {
            cards[i].style.display = "";
            quantidade++;
        }
        else
            cards[i].style.display = "none";
    }

    document.getElementById("resultadoBusca").textContent = quantidade + " perfil(is) encontrado(s).";
    document.getElementById("semResultados").hidden = quantidade != 0;
}

function carregarTipoUsuario() 
{
    var url = window.location.href;
    var selectTipo = document.getElementById("tipoUsuario");
    
    if (selectTipo == null) return;

    if (url.indexOf("tipo=paciente") != -1)
        selectTipo.value = "paciente";
    else if (url.indexOf("tipo=voluntario") != -1)
        selectTipo.value = "voluntario";

    alternarCamposCadastro();
}
function alternarCamposCadastro()
{
    var tipo = document.getElementById("tipoUsuario").value;
    var dadosPaciente = document.getElementById("dadosPaciente");
    var dadosVoluntario = document.getElementById("dadosVoluntario");

    dadosPaciente.hidden = tipo != "paciente";
    dadosPaciente.disabled = tipo != "paciente";
    dadosVoluntario.hidden = tipo != "voluntario";
    dadosVoluntario.disabled = tipo != "voluntario";
}
