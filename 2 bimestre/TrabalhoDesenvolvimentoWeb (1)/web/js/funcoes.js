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
    if (validarFormulario("formLogin", "erroLogin"))
        window.location.href = "index.html";
}

function validarCadastro(event)
{
    event.preventDefault();
    alternarCamposCadastro();
    if (validarFormulario("formCadastro", "erroCadastro"))
    {
        var toast = document.getElementById("toastCadastro");
        toast.style.visibility = "visible";
        toast.style.opacity = "1";
        setTimeout(function() { window.location.href = "login.html"; }, 2500);
    }
}

function validarContato(event)
{
    event.preventDefault();
    if (validarFormulario("formContato", "erroContato"))
    {
        document.getElementById("formContato").reset();
        limparValidacao("formContato");
        var toast = document.getElementById("toastSucesso");
        toast.style.visibility = "visible";
        toast.style.opacity = "1";
        setTimeout(function() { toast.style.visibility = "hidden"; toast.style.opacity = "0"; }, 4000);
    }
}

// Cálculo dos dois dígitos verificadores, baseado no exemplo da aula.
function cpfValido(valor)
{
    var cpf = valor.replace(/[.\-]/g, "");
    var valido = /^\d{11}$/.test(cpf);
    var repetido = true;
    for (var i = 1; i < cpf.length; i++)
    {
        if (cpf.charAt(i) != cpf.charAt(0))
            repetido = false;
    }
    if (repetido)
        valido = false;
    if (valido)
    {
        for (var tamanho = 9; tamanho <= 10; tamanho++)
        {
            var soma = 0;
            for (var j = 0; j < tamanho; j++)
                soma = soma + Number(cpf.charAt(j)) * (tamanho + 1 - j);
            var digito = 11 - soma % 11;
            if (digito >= 10)
                digito = 0;
            if (digito != Number(cpf.charAt(tamanho)))
                valido = false;
        }
    }
    return valido;
}

function mensagemCampo(campo)
{
    var valor = campo.value.trim();
    var erro = "";
    var id = campo.id;
    if (!campo.matches(":disabled"))
    {
        if (campo.type == "checkbox")
        {
            if (campo.required && !campo.checked)
                erro = "Marque a autorização para continuar.";
        }
        else if (campo.validity.badInput)
            erro = "Informe um valor válido.";
        else if (campo.required && valor == "")
            erro = "Preencha este campo.";
        else if (valor != "")
        {
            if (campo.type == "email" && !/^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(valor))
                erro = "Informe um e-mail válido, como nome@dominio.com.";
            else if (id == "cpfCadastro" && !cpfValido(valor))
                erro = "Informe um CPF com 11 dígitos e verificadores válidos.";
            else if (id == "telefoneCadastro" || id == "telefoneContato")
            {
                var telefone = valor.replace(/[()\s-]/g, "");
                if (!/^[1-9][0-9](?:[2-5][0-9]{7}|9[0-9]{8})$/.test(telefone))
                    erro = "Informe DDD e telefone válido: 10 dígitos para fixo ou 11 para celular.";
            }
            else if (id == "cepCadastro" && !/^\d{5}-?\d{3}$/.test(valor))
                erro = "Informe os 8 dígitos do CEP.";
            else if (id == "nascimentoCadastro")
            {
                var nascimento = new Date(valor + "T12:00:00");
                var hoje = new Date();
                var limite = new Date(hoje.getFullYear() - 120, hoje.getMonth(), hoje.getDate());
                if (isNaN(nascimento.getTime()) || dataLocal(nascimento) != valor || valor >= dataLocal(hoje) || nascimento < limite)
                    erro = "Informe uma data de nascimento anterior a hoje, nos últimos 120 anos.";
            }
            else if (id == "nomeCadastro" || id == "nomeSocialCadastro" || id == "nomeContato")
            {
                if (valor.length < 2 || !/^[\p{L}\p{M} .’'\-]+$/u.test(valor) || !/\p{L}/u.test(valor))
                    erro = "Informe um nome com pelo menos 2 caracteres, usando letras. Acentos são permitidos.";
            }
            else if (id == "senhaCadastro" || id == "senhaLogin")
            {
                if (campo.value.length < 6)
                    erro = "A senha deve ter pelo menos 6 caracteres.";
            }
            else if (id == "confirmaSenhaCadastro" && campo.value != document.getElementById("senhaCadastro").value)
                erro = "As senhas não coincidem.";
            else if (campo.type == "number")
            {
                var numero = Number(valor);
                if (!Number.isInteger(numero) || numero < Number(campo.min) || numero > Number(campo.max))
                    erro = "Informe um número inteiro entre " + campo.min + " e " + campo.max + ".";
            }
            else if (id == "registroVoluntario")
            {
                var area = document.getElementById("areaVoluntario").value;
                if (area == "Psiquiatria" && !/^[0-9]{1,7}\s*\/\s*[A-Za-z]{2}$/.test(valor))
                    erro = "Informe o CRM e a UF no formato 123456/SP.";
                else if (area == "Psiquiatria" && document.getElementById("estadoCadastro").querySelector('option[value="' + valor.slice(-2).toUpperCase() + '"]') == null)
                    erro = "Informe uma UF válida para o CRM.";
                else if (area == "Psicologia" && !/^[0-9]{2}\/[0-9]{4,7}$/.test(valor))
                    erro = "Informe o CRP no formato 06/123456.";
                else if (area == "Terapia ocupacional" && !/^[0-9]{1,2}\/[0-9]{1,7}-?TO$/i.test(valor))
                    erro = "Informe o CREFITO no formato 3/12345-TO.";
            }
            if (erro == "" && campo.minLength > 0 && valor.length < campo.minLength)
                erro = "Preencha com pelo menos " + campo.minLength + " caracteres.";
            if (erro == "" && campo.maxLength > 0 && campo.value.length > campo.maxLength)
                erro = "Use no máximo " + campo.maxLength + " caracteres.";
        }
    }
    return erro;
}

function validarCampo(campo)
{
    var erro = mensagemCampo(campo);
    campo.setCustomValidity(erro);
    campo.classList.toggle("is-invalid", erro != "");
    campo.setAttribute("aria-invalid", String(erro != ""));
    document.getElementById("erro-" + campo.id).textContent = erro;
    return erro == "";
}

function validarFormulario(id, idMensagem)
{
    var campos = document.querySelectorAll("#" + id + " input, #" + id + " select, #" + id + " textarea");
    var valido = true;
    var primeiro = null;
    for (var i = 0; i < campos.length; i++)
    {
        if (!validarCampo(campos[i]))
        {
            valido = false;
            if (primeiro == null)
                primeiro = campos[i];
        }
    }
    var mensagem = document.getElementById(idMensagem);
    mensagem.textContent = valido ? "" : "Confira os campos destacados antes de continuar.";
    mensagem.style.display = valido ? "none" : "block";
    if (primeiro != null)
        primeiro.focus();
    return valido;
}

function limparValidacao(id)
{
    var campos = document.querySelectorAll("#" + id + " input, #" + id + " select, #" + id + " textarea");
    for (var i = 0; i < campos.length; i++)
    {
        campos[i].setCustomValidity("");
        campos[i].classList.remove("is-invalid");
        campos[i].removeAttribute("aria-invalid");
        document.getElementById("erro-" + campos[i].id).textContent = "";
    }
}

function prepararValidacoes()
{
    var formularios = ["formCadastro", "formLogin", "formContato"];
    for (var i = 0; i < formularios.length; i++)
    {
        var formulario = document.getElementById(formularios[i]);
        if (formulario != null)
        {
            var mensagens = formulario.querySelectorAll(".invalid-feedback");
            for (var j = 0; j < mensagens.length; j++)
                mensagens[j].remove();
            var campos = formulario.querySelectorAll("input, select, textarea");
            for (var k = 0; k < campos.length; k++)
            {
                var mensagem = document.createElement("div");
                mensagem.id = "erro-" + campos[k].id;
                mensagem.className = "invalid-feedback";
                campos[k].insertAdjacentElement("afterend", mensagem);
                var ajuda = campos[k].getAttribute("aria-describedby") || "";
                campos[k].setAttribute("aria-describedby", (ajuda + " " + mensagem.id).trim());
                campos[k].addEventListener("blur", function() { validarCampo(this); });
                campos[k].addEventListener("input", function() {
                    if (this.classList.contains("is-invalid"))
                        validarCampo(this);
                });
                campos[k].addEventListener("change", function() { validarCampo(this); });
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", prepararValidacoes);

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
        agendamentos.push({id: proximoAgendamento, profissionalId: profissionalSelecionado.id, nome: profissionalSelecionado.nome, data: document.getElementById("dataAgendamento").value, horario: horario});
        proximoAgendamento++;
        mostrarAgendamentos();
        atualizarHorariosConsulta();
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
        mostrarAgendamentos();
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
    var perguntas = document.querySelectorAll(".ajuda-cadastro-paciente");
    for (var j = 0; j < perguntas.length; j++)
        perguntas[j].hidden = tipo != "paciente";
    atualizarRegistroProfissional();
    var dadosPaciente = document.getElementById("dadosPaciente");
    var dadosVoluntario = document.getElementById("dadosVoluntario");

    dadosPaciente.hidden = tipo != "paciente";
    dadosPaciente.disabled = tipo != "paciente";
    dadosVoluntario.hidden = tipo != "voluntario";
    dadosVoluntario.disabled = tipo != "voluntario";
    limparValidacao("formCadastro");
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
    var dataValida = !isNaN(dia.getTime()) && dataLocal(dia) == data && data >= dataLocal(hoje) && profissionalSelecionado.diasSemana.indexOf(dia.getDay()) != -1;
    for (var i = 0; i < profissionalSelecionado.horarios.length; i++)
    {
        var horario = profissionalSelecionado.horarios[i];
        if (dataValida && new Date(data + "T" + horario) > hoje && !agendamentoExiste(profissionalSelecionado.id, data, horario))
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
    var dataValida = !isNaN(data.getTime()) && dataLocal(data) == campoData.value && campoData.value >= dataLocal(agora) && profissionalSelecionado.diasSemana.indexOf(data.getDay()) != -1;
    var horaValida = profissionalSelecionado.horarios.indexOf(campoHora.value) != -1 && new Date(campoData.value + "T" + campoHora.value) > agora && !agendamentoExiste(profissionalSelecionado.id, campoData.value, campoHora.value);
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

function abrirPerguntaFaq()
{
    var destino = document.getElementById(window.location.hash.substring(1));
    if (destino != null && destino.classList.contains("accordion-item"))
    {
        var resposta = destino.querySelector(".accordion-collapse");
        var pergunta = destino.querySelector(".accordion-button");
        var perguntas = document.querySelectorAll(".faq-cadastro.accordion-item");
        for (var i = 0; i < perguntas.length; i++)
        {
            perguntas[i].querySelector(".accordion-collapse").classList.remove("show");
            perguntas[i].querySelector(".accordion-button").classList.add("collapsed");
            perguntas[i].querySelector(".accordion-button").setAttribute("aria-expanded", "false");
        }
        resposta.classList.add("show");
        pergunta.classList.remove("collapsed");
        pergunta.setAttribute("aria-expanded", "true");
        destino.scrollIntoView({block: "start"});
    }
}

document.addEventListener("DOMContentLoaded", abrirPerguntaFaq);
window.addEventListener("hashchange", abrirPerguntaFaq);

// Dados iniciais em memória: ao recarregar a página, o vetor volta a estes exemplos.
var agendamentos = [
    {id: 1, profissionalId: "ana", nome: "Dra. Ana Souza", data: "2026-11-23", horario: "09:00"},
    {id: 2, profissionalId: "lucas", nome: "Lucas Mendes", data: "2026-11-24", horario: "14:00"},
    {id: 3, profissionalId: "grupo", nome: "Grupo Florescer", data: "2026-11-28", horario: "10:00"}
];
var proximoAgendamento = 4;

function agendamentoExiste(profissionalId, data, horario)
{
    var existe = false;
    for (var i = 0; i < agendamentos.length; i++)
    {
        if (agendamentos[i].profissionalId == profissionalId && agendamentos[i].data == data && agendamentos[i].horario == horario)
            existe = true;
    }
    return existe;
}

function mostrarAgendamentos()
{
    var corpo = document.getElementById("corpoAgendamentos");
    corpo.textContent = "";
    for (var i = 0; i < agendamentos.length; i++)
    {
        var item = agendamentos[i];
        var linha = document.createElement("tr");
        var selecao = document.createElement("td");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "form-check-input selecionar-agendamento";
        checkbox.value = item.id;
        checkbox.setAttribute("aria-label", "Selecionar agendamento com " + item.nome + " em " + item.data + " às " + item.horario);
        checkbox.addEventListener("change", atualizarSelecaoAgendamentos);
        selecao.appendChild(checkbox);
        linha.appendChild(selecao);
        var partes = item.data.split("-");
        var valores = [item.nome, partes[2] + "/" + partes[1] + "/" + partes[0], item.horario];
        for (var j = 0; j < valores.length; j++)
        {
            var celula = document.createElement("td");
            celula.textContent = valores[j];
            linha.appendChild(celula);
        }
        corpo.appendChild(linha);
    }
    document.getElementById("semAgendamentos").hidden = agendamentos.length != 0;
    document.getElementById("selecionarTodos").disabled = agendamentos.length == 0;
    atualizarSelecaoAgendamentos();
}

function atualizarSelecaoAgendamentos()
{
    var marcados = document.querySelectorAll(".selecionar-agendamento:checked").length;
    var total = document.querySelectorAll(".selecionar-agendamento").length;
    document.getElementById("selecionarTodos").checked = total > 0 && marcados == total;
    document.getElementById("selecionarTodos").indeterminate = marcados > 0 && marcados < total;
    document.getElementById("resumoSelecao").textContent = marcados + " de " + total + " agendamentos selecionados.";
}

function selecionarAgendamentos()
{
    var marcado = document.getElementById("selecionarTodos").checked;
    var caixas = document.querySelectorAll(".selecionar-agendamento");
    for (var i = 0; i < caixas.length; i++)
        caixas[i].checked = marcado;
    atualizarSelecaoAgendamentos();
}

function excluirAgendamentos()
{
    var caixas = document.querySelectorAll(".selecionar-agendamento:checked");
    var quantidade = caixas.length;
    // Percorrer de trás para frente evita pular itens depois do splice.
    for (var i = agendamentos.length - 1; i >= 0; i--)
    {
        var excluir = false;
        for (var j = 0; j < caixas.length; j++)
        {
            if (agendamentos[i].id == Number(caixas[j].value))
                excluir = true;
        }
        if (excluir)
            agendamentos.splice(i, 1);
    }
    var mensagem = document.getElementById("mensagemTabela");
    if (quantidade == 0)
        mensagem.textContent = "Selecione pelo menos um agendamento para cancelar.";
    else
    {
        mensagem.textContent = quantidade + " agendamento(s) cancelado(s).";
        document.getElementById("areaComprovante").textContent = "";
        document.getElementById("areaComprovante").className = "";
        mostrarAgendamentos();
        atualizarHorariosConsulta();
    }
}
