document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("vcuNMkykY2tuB0Jmw");

    const formulario = document.getElementById("form-contato");
    const status = document.getElementById("status-envio");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        status.textContent = "Enviando mensagem...";

        const dados = {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            assunto: document.getElementById("assunto").value,
            mensagem: document.getElementById("mensagem").value
        };

        console.table(dados);

        emailjs.send("service_ikg98br", "template_ok8g5oy", dados)
            .then(function () {
                status.textContent = "Mensagem enviada com sucesso!";
                formulario.reset();
            })
            .catch(function (erro) {
                status.textContent = "Erro ao enviar. Tente novamente ou escreva para infogas1809@gmail.com.";
                console.error("Erro EmailJS:", erro);
            });
    });
});