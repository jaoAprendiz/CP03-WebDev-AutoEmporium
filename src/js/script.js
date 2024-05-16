// SLIDESHOW
let imagens = ['./src/assets/carro1.jpeg', './src/assets/carro2.jpeg', './src/assets/carro3.jpeg', './src/assets/carro4.jpeg'];
let index = 0;
let time = 3000;

function slideShow() {
    document.getElementById('imgbanner').src=imagens[index];
    index ++;

    if (index == imagens.length) {
        index = 0;
    }
    setTimeout('slideShow()', time);
}

// BOTÃO DE LIGHT MODE E DARK MODE
let element = document.body;

function toggleDarkMode() {
    element.classList.toggle('dark-mode');
}

// REDIRECIONANDO AS PÁGINAS
function redirecionarLogin() {
    window.location.href = 'login.html';
}

function redirecionarContato() {
    window.location.href = 'contato.html';
}