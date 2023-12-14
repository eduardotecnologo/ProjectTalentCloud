function calculateIMC() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight === "" || height === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    var imc = weight / (height * height);
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "Seu IMC é: " + imc.toFixed(2);
}
