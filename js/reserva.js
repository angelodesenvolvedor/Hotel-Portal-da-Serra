// Função para enviar a reserva
function enviarReserva() {
    // Captura os valores dos campos do formulário
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;
    var tipoQuarto = document.getElementById("tipo_quarto").value;
    var numeroQuartos = document.getElementById("numero_quartos").value;
    var numeroHospedes = document.getElementById("numero_hospedes").value;
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var metodoPagamento = document.getElementById("metodo_pagamento").value;

    // Valida os campos do formulário
    if (checkin === "" || checkout === "" || tipoQuarto === "" || numeroQuartos === "" || numeroHospedes === "" || nome === "" || email === "" || metodoPagamento === "") {
        exibirMensagem("Por favor, preencha todos os campos do formulário.");
        return false;
    }

    // Aqui você pode implementar a lógica para enviar a reserva, como fazer uma requisição AJAX para um backend que processa os dados

    // Por enquanto, apenas exibimos os valores no console para demonstração
    console.log("Data de Check-in: " + checkin);
    console.log("Data de Check-out: " + checkout);
    console.log("Tipo de Quarto: " + tipoQuarto);
    console.log("Número de Quartos: " + numeroQuartos);
    console.log("Número de Hóspedes: " + numeroHospedes);
    console.log("Nome: " + nome);
    console.log("Email: " + email);
    console.log("Método de Pagamento: " + metodoPagamento);

    // Limpa os campos do formulário após enviar a reserva
    document.getElementById("checkin").value = "";
    document.getElementById("checkout").value = "";
    document.getElementById("tipo_quarto").value = "";
    document.getElementById("numero_quartos").value = "";
    document.getElementById("numero_hospedes").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("metodo_pagamento").value = "";

    // Exibe uma mensagem de confirmação
    exibirMensagem("Reserva enviada com sucesso!");

    // Retorna false para evitar o envio do formulário e a atualização da página
    return false;
}

// Função para exibir mensagem na página
function exibirMensagem(mensagem) {
    // Cria um elemento <div> para exibir a mensagem
    var divMensagem = document.createElement("div");
    divMensagem.className = "alert alert-success";
    divMensagem.textContent = mensagem;

    // Insere a mensagem no início da seção de reserva
    var reservaSection = document.querySelector("section.container");
    reservaSection.insertBefore(divMensagem, reservaSection.firstChild);

    // Define um temporizador para remover a mensagem após 3 segundos
    setTimeout(function() {
        divMensagem.remove();
    }, 3000); // 3000 milissegundos = 3 segundos
}

// Event listener para o formulário de reserva
document.getElementById("reserva-form").addEventListener("submit", function(event) {
    // Chama a função para enviar a reserva quando o formulário é submetido
    enviarReserva();

    // Previne o comportamento padrão de enviar o formulário e atualizar a página
    event.preventDefault();
});
