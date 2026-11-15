// Dados dos profissionais e dos grupos de apoio.
var profissionais = [
    {
        "id": "ana",
        "nome": "Dra. Ana Souza",
        "tipo": "Psicóloga Clínica",
        "categoria": "Psicologia",
        "desc": "Ana acompanha adultos que enfrentam ansiedade, desânimo e dificuldades com a autoestima. Em seus atendimentos, oferece espaço para conversar sobre emoções e compreender como os pensamentos influenciam o cotidiano. O acompanhamento é construído junto com cada pessoa, respeitando seu ritmo e suas necessidades.",
        "publico": "Adultos",
        "dias": "Segunda a sexta",
        "diasSemana": [
            1,
            2,
            3,
            4,
            5
        ],
        "horarios": [
            "09:00",
            "10:00",
            "14:00",
            "15:00",
            "16:00"
        ]
    },
    {
        "id": "lucas",
        "nome": "Lucas Mendes",
        "tipo": "Terapeuta Ocupacional",
        "categoria": "Terapia ocupacional",
        "desc": "Lucas trabalha com adultos e idosos que desejam retomar atividades importantes e organizar a rotina. Seu acompanhamento considera tarefas de casa, trabalho, lazer e convivência. Durante os encontros, propõe estratégias para ampliar a autonomia e tornar o dia a dia mais acessível.",
        "publico": "Adultos e idosos",
        "dias": "Terças e quintas",
        "diasSemana": [
            2,
            4
        ],
        "horarios": [
            "09:00",
            "10:00",
            "14:00",
            "15:00",
            "16:00"
        ]
    },
    {
        "id": "beatriz",
        "nome": "Dra. Beatriz Lima",
        "tipo": "Psiquiatra",
        "categoria": "Psiquiatria",
        "desc": "Beatriz realiza avaliação e acompanhamento psiquiátrico de adultos. Dedica atenção à história de cada pessoa, às mudanças no sono, no humor e às dificuldades que afetam a rotina. Constrói o plano de cuidado em diálogo com o paciente e, quando necessário, com os demais profissionais que o acompanham.",
        "publico": "Adultos",
        "dias": "Segundas e quartas",
        "diasSemana": [
            1,
            3
        ],
        "horarios": [
            "09:00",
            "10:00",
            "14:00",
            "15:00",
            "16:00"
        ]
    },
    {
        "id": "rafael",
        "nome": "Rafael Oliveira",
        "tipo": "Psicólogo Clínico",
        "categoria": "Psicologia",
        "desc": "Rafael atende adultos que estão passando por estresse, conflitos nos relacionamentos ou mudanças na vida profissional. Os encontros são um espaço para compreender padrões de comportamento, conversar sobre escolhas e estabelecer limites. Seu trabalho valoriza a escuta e a participação de cada pessoa no próprio processo.",
        "publico": "Adultos",
        "dias": "Segunda a sexta",
        "diasSemana": [
            1,
            2,
            3,
            4,
            5
        ],
        "horarios": [
            "09:00",
            "10:00",
            "14:00",
            "15:00",
            "16:00"
        ]
    },
    {
        "id": "mariana",
        "nome": "Mariana Costa",
        "tipo": "Psicóloga Infantil",
        "categoria": "Psicologia",
        "desc": "Mariana acompanha crianças e adolescentes em questões relacionadas às emoções, à escola e à convivência familiar. Utiliza conversas e atividades adequadas a cada faixa etária para favorecer a expressão de sentimentos. Também realiza encontros de orientação com responsáveis, considerando o contexto de desenvolvimento de cada jovem.",
        "publico": "Crianças e adolescentes",
        "dias": "Terças e sextas",
        "diasSemana": [
            2,
            5
        ],
        "horarios": [
            "09:00",
            "10:00",
            "14:00",
            "15:00",
            "16:00"
        ]
    },
    {
        "id": "pedro",
        "nome": "Dr. Pedro Almeida",
        "tipo": "Psiquiatra",
        "categoria": "Psiquiatria",
        "desc": "Pedro acompanha adultos e idosos com queixas de ansiedade e alterações do humor. Nas consultas, considera a saúde física, os hábitos, o sono e a rede de apoio do paciente. Explica as possibilidades de cuidado e acompanha a evolução de cada pessoa ao longo do atendimento.",
        "publico": "Adultos e idosos",
        "dias": "Quartas e sextas",
        "diasSemana": [
            3,
            5
        ],
        "horarios": [
            "09:00",
            "10:00",
            "14:00",
            "15:00",
            "16:00"
        ]
    },
    {
        "id": "camila",
        "nome": "Camila Santos",
        "tipo": "Terapeuta Ocupacional",
        "categoria": "Terapia ocupacional",
        "desc": "Camila atende adolescentes e adultos que encontram dificuldades para manter a rotina e participar de atividades sociais. Seu trabalho parte dos interesses e das necessidades de cada pessoa, incluindo estudo, trabalho e lazer. Os encontros buscam construir estratégias práticas de organização e participação no cotidiano.",
        "publico": "Adolescentes e adultos",
        "dias": "Segundas e quintas",
        "diasSemana": [
            1,
            4
        ],
        "horarios": [
            "09:00",
            "10:00",
            "14:00",
            "15:00",
            "16:00"
        ]
    },
    {
        "id": "andre",
        "nome": "André Ribeiro",
        "tipo": "Psicólogo Clínico",
        "categoria": "Psicologia",
        "desc": "André oferece acompanhamento a adultos e idosos que vivem o luto, mudanças familiares ou outras transições importantes. Acolhe dúvidas e sentimentos que surgem nesses períodos, sem impor um tempo para lidar com cada experiência. Também trabalha questões de autoconhecimento e construção de novos vínculos.",
        "publico": "Adultos e idosos",
        "dias": "Terças e quintas",
        "diasSemana": [
            2,
            4
        ],
        "horarios": [
            "09:00",
            "10:00",
            "14:00",
            "15:00",
            "16:00"
        ]
    },
    {
        "id": "grupo",
        "nome": "Grupo Florescer",
        "tipo": "Grupo de Apoio",
        "categoria": "Grupo de apoio",
        "desc": "O Grupo Florescer reúne adultos que buscam um espaço de conversa sobre os desafios do dia a dia. Os encontros são conduzidos por Clara Martins, com acordos de respeito à privacidade e ao tempo de fala de cada participante. Cada pessoa pode compartilhar suas experiências ou apenas ouvir, de acordo com o que se sentir confortável.",
        "publico": "Adultos",
        "dias": "Sábados",
        "duracao": "60 minutos",
        "diasSemana": [
            6
        ],
        "horarios": [
            "10:00"
        ]
    },
    {
        "id": "juliana",
        "nome": "Juliana Azevedo",
        "tipo": "Psicóloga Clínica",
        "categoria": "Psicologia",
        "desc": "Juliana acompanha adultos em questões de identidade, pertencimento e relações familiares. Seu trabalho oferece espaço para compreender o impacto das experiências sociais na saúde emocional e construir formas de lidar com conflitos e mudanças. Os encontros respeitam a história e os objetivos de cada pessoa.",
        "publico": "Adultos",
        "dias": "Segundas e quintas",
        "diasSemana": [
            1,
            4
        ],
        "horarios": [
            "09:00",
            "10:00",
            "14:00",
            "15:00",
            "16:00"
        ]
    },
    {
        "id": "recomecar",
        "nome": "Grupo Recomeçar",
        "tipo": "Grupo de Apoio",
        "categoria": "Grupo de apoio",
        "desc": "O Grupo Recomeçar acolhe adultos que estão vivendo perdas e mudanças importantes. Os encontros são conduzidos por André Ribeiro e abrem espaço para compartilhar experiências, ouvir outras histórias e construir vínculos. Cada participante escolhe como deseja participar, respeitando seu momento e os acordos de privacidade do grupo.",
        "publico": "Adultos",
        "dias": "Quartas-feiras",
        "diasSemana": [
            3
        ],
        "horarios": [
            "18:00"
        ],
        "duracao": "60 minutos"
    }
];
var profissionalSelecionado = profissionais[0];

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

    alternarCamposCadastro();
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
    var valido = validarDataConsulta();
    if (valido)
    {
        var partes = document.getElementById("dataAgendamento").value.split("-");
        var data = partes[2] + "/" + partes[1] + "/" + partes[0];
        var horario = document.getElementById("horarioAgendamento").value;
        var comprovante = document.getElementById("areaComprovante");
        comprovante.className = "alert alert-success";
        comprovante.textContent = "Agendamento confirmado com " + profissionalSelecionado.nome + ": " + data + ", às " + horario + ".";
        document.getElementById("formAgendamento").hidden = true;
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
        if (profissional.categoria == "Grupo de apoio")
        {
            document.getElementById("fotoProf").alt = "Pessoas reunidas, ilustrando um grupo de apoio";
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
        profissionalSelecionado = profissional;
        carregarDatasConsulta();
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
    var campos = ["nomeCadastro", "cpfCadastro", "cepCadastro", "cidadeCadastro", "estadoCadastro"];
    for (var i = 0; i < campos.length; i++)
    {
        var campo = document.getElementById(campos[i]);
        campo.required = tipo == "voluntario";
        var rotulo = document.querySelector('label[for="' + campos[i] + '"]');
        rotulo.textContent = rotulo.getAttribute("data-rotulo") + (campo.required ? " *" : " (opcional)");
    }
    document.getElementById("nomeSocialCadastro").required = true;
    atualizarRegistroProfissional();
    var dadosPaciente = document.getElementById("dadosPaciente");
    var dadosVoluntario = document.getElementById("dadosVoluntario");

    dadosPaciente.hidden = tipo != "paciente";
    dadosPaciente.disabled = tipo != "paciente";
    dadosVoluntario.hidden = tipo != "voluntario";
    dadosVoluntario.disabled = tipo != "voluntario";
}

function atualizarRegistroProfissional()
{
    var area = document.getElementById("areaVoluntario").value;
    var campo = document.getElementById("registroVoluntario");
    var conselho = "Registro profissional";
    if (area == "Psiquiatria")
        conselho = "CRM e UF";
    else if (area == "Psicologia")
        conselho = "CRP";
    else if (area == "Terapia ocupacional")
        conselho = "CREFITO";
    campo.required = document.getElementById("tipoUsuario").value == "voluntario" && area != "Facilitação de grupos de apoio";
    document.getElementById("rotuloRegistro").textContent = conselho + (campo.required ? " *" : " (opcional)");
}

function dataLocal(data)
{
    var ano = data.getFullYear();
    var mes = String(data.getMonth() + 1).padStart(2, "0");
    var dia = String(data.getDate()).padStart(2, "0");
    return ano + "-" + mes + "-" + dia;
}

function carregarDatasConsulta()
{
    var campo = document.getElementById("dataAgendamento");
    var hoje = new Date();
    campo.min = dataLocal(hoje);
    document.getElementById("ajudaData").textContent = "Dias de atendimento: " + profissionalSelecionado.dias + ".";
    atualizarHorariosConsulta();
}

function atualizarHorariosConsulta()
{
    var campoData = document.getElementById("dataAgendamento");
    var data = campoData.value;
    var campo = document.getElementById("horarioAgendamento");
    campo.textContent = "";
    campo.add(new Option("Escolha um horário...", ""));
    var hoje = new Date();
    var dia = new Date(data + "T12:00:00");
    var dataValida = !isNaN(dia.getTime()) && data >= dataLocal(hoje) && profissionalSelecionado.diasSemana.indexOf(dia.getDay()) != -1;
    for (var i = 0; i < profissionalSelecionado.horarios.length; i++)
    {
        var horario = profissionalSelecionado.horarios[i];
        if (dataValida && new Date(data + "T" + horario) > hoje)
            campo.add(new Option(horario, horario));
    }
    var temHorario = campo.options.length > 1;
    campo.disabled = !temHorario;
    var erro = "";
    if (data != "" && !dataValida)
        erro = "Escolha uma data a partir de hoje. Dias de atendimento: " + profissionalSelecionado.dias + ".";
    else if (data != "" && !temHorario)
        erro = "Não há mais horários disponíveis nesta data. Escolha outro dia de atendimento.";
    document.getElementById("erroAgendamento").textContent = erro;
    campoData.classList.toggle("is-invalid", data != "" && (!dataValida || !temHorario));
    campo.classList.remove("is-invalid");
}

function validarDataConsulta()
{
    var campoData = document.getElementById("dataAgendamento");
    var campoHora = document.getElementById("horarioAgendamento");
    var data = new Date(campoData.value + "T12:00:00");
    var agora = new Date();
    var dataValida = !isNaN(data.getTime()) && campoData.value >= dataLocal(agora) && profissionalSelecionado.diasSemana.indexOf(data.getDay()) != -1;
    var horaValida = profissionalSelecionado.horarios.indexOf(campoHora.value) != -1 && new Date(campoData.value + "T" + campoHora.value) > agora;
    campoData.classList.toggle("is-invalid", !dataValida);
    campoHora.classList.toggle("is-invalid", !horaValida);
    var erro = "";
    if (!dataValida)
        erro = "Escolha uma data a partir de hoje. Dias de atendimento: " + profissionalSelecionado.dias + ".";
    else if (!horaValida)
        erro = "Escolha um horário disponível e futuro.";
    document.getElementById("erroAgendamento").textContent = erro;
    return dataValida && horaValida;
}
