// JavaScript para a barra de navegação

// Função para fechar o menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelector('.navbar-collapse').classList.remove('show');
    });
});

// Função para enviar mensagem do formulário de contato
function enviarMensagem() {
    // Captura os valores dos campos do formulário
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Valida os campos do formulário
    if (nome === "" || email === "" || mensagem === "") {
        exibirMensagem("Por favor, preencha todos os campos do formulário.");
        return false;
    }

    // Aqui você pode implementar a lógica para enviar a mensagem, como fazer uma requisição AJAX para um backend que processa os dados e envia o email

    // Por enquanto, apenas exibimos os valores no console para demonstração
    console.log("Nome: " + nome);
    console.log("Email: " + email);
    console.log("Mensagem: " + mensagem);

    // Limpa os campos do formulário após enviar a mensagem
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";

    // Exibe uma mensagem de confirmação
    exibirMensagem("Mensagem enviada com sucesso!");

    // Retorna false para evitar o envio do formulário e a atualização da página
    return false;
}

// Função para exibir mensagem na página
function exibirMensagem(mensagem) {
    // Cria um elemento <div> para exibir a mensagem
    var divMensagem = document.createElement("div");
    divMensagem.className = "alert alert-success";
    divMensagem.textContent = mensagem;

    // Insere a mensagem no início do formulário de contato
    var formulario = document.getElementById("contato-form");
    formulario.parentNode.insertBefore(divMensagem, formulario);

    // Define um temporizador para remover a mensagem após 3 segundos
    setTimeout(function() {
        divMensagem.remove();
    }, 3000); // 3000 milissegundos = 3 segundos
}

// Event listener para o formulário de contato
document.getElementById("contato-form").addEventListener("submit", function(event) {
    // Chama a função para enviar mensagem quando o formulário é submetido
    enviarMensagem();

    // Previne o comportamento padrão de enviar o formulário e atualizar a página
    event.preventDefault();
});
