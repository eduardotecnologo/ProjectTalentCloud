//Página principal

var radio = document.querySelector('.manual-btn')
var cont = 1


document.getElementById('radio1').checked = true

setInterval(() => {
    proximaImg()
}, 5000)

function proximaImg(){
    cont++

    if(cont > 3){
        cont = 1
    }

    document.getElementById('radio'+cont).checked = true    
} 

// Cards página inicial
const dicasContainer = document.createElement('div');
dicasContainer.classList.add('container');

document.body.insertBefore(dicasContainer, document.querySelector('footer'));

const dicas = [
    { imagem: './img/Julio-Balestrin.png', texto: 'Como ganhar massa muscular aos 40 anos?' },
    { imagem: './img/F3GVfqrXUAEDXKR.jpg', texto: 'Veja como o seu IMC indica sua perda de peso' },
    { imagem: './img/fotofeminino.jpg', texto: 'Como adaptar os treinos à minha necessidade?' },
    { imagem: './img/cbum.webp', texto: 'Podcasts para ouvir sobre uma vida saudável' }
];

dicas.forEach(dica => {
    // Cria elementos HTML para a dica
    const col = document.createElement('div');
    col.classList.add('col', 's12', 'm6', 'l3');

    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');

    const img = document.createElement('img');
    img.setAttribute('src', dica.imagem);
    img.setAttribute('alt', 'Imagem da dica');

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const p = document.createElement('p');
    p.textContent = dica.texto;

    const btnConfiraAqui = document.createElement('button');
    btnConfiraAqui.textContent = 'Confira Aqui';
    btnConfiraAqui.classList.add('confira-btn');

    // Adiciona os elementos ao DOM
    cardImage.appendChild(img);
    cardContent.appendChild(p);
    card.appendChild(cardImage);
    card.appendChild(cardContent);
    card.appendChild(btnConfiraAqui);
    col.appendChild(card);
    dicasContainer.appendChild(col);
});

const btnsConfiraAqui = document.querySelectorAll('.confira-btn');

btnsConfiraAqui.forEach(btn => {
    btn.addEventListener('click', function(event) {
        console.log("Botão 'Confira Aqui' clicado!");
        window.location.href = 'www.facebook.com.br';
    });
});