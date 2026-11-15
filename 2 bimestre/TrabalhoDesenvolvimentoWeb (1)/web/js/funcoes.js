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
    var url = window.location.href;

    if (document.getElementById("nomeProf") == null) return; 

    var nome = "Dra. Ana Souza";
    var tipo = "Psicóloga Clínica";
    var desc = "Ansiedade, depressão e autoestima.";
    var avatar = "AS";
    
    if (url.indexOf("prof=lucas") != -1) 
    {
        nome = "Lucas Mendes";
        tipo = "Terapeuta";
        desc = "Estresse, relacionamentos e foco.";
        avatar = "LM";
    } 
    else if (url.indexOf("prof=grupo") != -1) 
    {
        nome = "Grupo Florescer";
        tipo = "Grupo de Apoio";
        desc = "Apoio emocional em grupo para diferentes temas.";
        avatar = "FG";
    }

    document.getElementById("nomeProf").innerHTML = nome;
    document.getElementById("tipoProf").innerHTML = tipo;
    document.getElementById("descProf").innerHTML = desc;
    document.getElementById("avatarProf").innerHTML = avatar;
    document.getElementById("escolhaProfissional").value = nome;
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
    var inputBusca = document.getElementById("busca").value.toUpperCase();
    var filtroEspecialidade = document.getElementById("especialidade").value.toUpperCase();
    var cards = document.getElementsByClassName("volunteer");

    for (var i = 0; i < cards.length; i++) 
    {
        var textoDoCard = cards[i].innerText.toUpperCase();
        var passouNaBusca = textoDoCard.indexOf(inputBusca) != -1;
        var passouNaEspecialidade = (filtroEspecialidade == "") || (textoDoCard.indexOf(filtroEspecialidade) != -1);

        if (passouNaBusca && passouNaEspecialidade)
            cards[i].style.display = ""; 
        else
            cards[i].style.display = "none";
    }
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
}