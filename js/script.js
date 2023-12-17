        // Função para marcar o item do menu ativo
document.addEventListener('DOMContentLoaded', function () {
    markActiveMenuItem();

    function markActiveMenuItem() {
        var path = window.location.pathname;
        var page = path.split("/").pop();

        var menuItems = document.querySelectorAll('nav ul li');
        menuItems.forEach(function (item) {
            var link = item.querySelector('a').getAttribute('href');
            if (link === page) {
                item.classList.add('active');
            }
        });
    }
});
        // Função para calculadora
function calculateIMC() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    if (weight && height) {
        var imc = (weight / (height * height)).toFixed(2);

        displayResult(imc);
    } else {
        alert('Por favor, insira o peso e a altura.');
    }
}

function displayResult(imc) {
    var resultTable = document.getElementById('result-table');
    var resultTableBody = resultTable.querySelector('tbody');
    
    var newRow = resultTableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.textContent = imc;
    cell2.textContent = getClassification(imc);

    resultTable.classList.remove('hidden');
}

function getClassification(imc) {
    if (imc < 18.5) {
        return 'Abaixo do Peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso Normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Sobrepeso';
    } else if (imc >= 30 && imc < 35) {
        return 'Obesidade Grau I';
    } else if (imc >= 35 && imc < 40) {
        return 'Obesidade Grau II';
    } else {
        return 'Obesidade Grau III';
    }
}
