emailjs.init("vcuNMkykY2tuB0Jmw"); 
document.getElementById("form-contato").addEventListener("submit", function (event) { 
    event.preventDefault();
    
    const contato = {
        nome: contato.getElementById("name").value,
        email: contato.getElementById("email").value,
        assunto: contato.getElementById("assunto").value,
        mensagem: contato.getElementById("mensagem").value
    }
    console.table(formData); 
} ); 