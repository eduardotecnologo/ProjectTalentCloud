document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("#form");
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#mail");
    const passwordInput = document.querySelector("#password");
    const atividadeSelect = document.querySelector("#atividade");
    const messageTextArea = document.querySelector("#message");

    function validarFormulario(event) {
        event.preventDefault();

        if (nameInput.value === "") {
            alert("Por favor, preencha o seu nome!");
            return;
        }
        if (emailInput.value === "" || !isValidEmail(emailInput.value)) {
            alert("Por favor, preencha o seu e-mail corretamente");
            return;
        }

        if(!validatePassowrd(passwordInput.value, 8)){
            alert("A senha precisa ter no mínimo 8 dígitos!");
            return;
        }

        if(atividadeSelect.value === ""){
            alert("Por favor, informe se pratica atividade física!");
            return;
        }

        if(messageTextArea.value === ""){
            alert("Por favor, escreva uma mensagem");
            return;
        }
        // Se estiver tudo ok, envia o formulário
        form.submit();
    }
    function isValidEmail(email){
        const emailRegex = new RegExp(
            /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
        );

        if(emailRegex.test(email)){
            return true;
        }
        return false;
    }

    function validatePassowrd(password, minDigits){
        if(password.length >= minDigits){
            return true;
        }
        return false;
    }

    form.addEventListener("submit", validarFormulario);
});
