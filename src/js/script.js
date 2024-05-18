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

// VALIDANDO O USUÁRIO NA PÁGINA DE LOGIN
function validar(){
    //declarando a variavel
    let usuario =document.getElementById("usuariologin").value;
    let senha =document.getElementById("senhalogin").value;
    if(usuario == "Admin" && senha === "12345"){
        window.open('quiz.html');
    }else{
        alert("usuario e senha inválidos");
    }
}

// VALIDANDO OS CAMPOS DO CONTATO

// Declarando as variáveis
const form = document.querySelector("#form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const telInput = document.querySelector("#telefone")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome esta vazio
    if(nameInput.value === ""){
        alert("Preencha seu nome")
        return;
    }

    //verifica se o email esta vazio
    if(emailInput.value === ""){
        alert("Preencha seu seu email")
        return;
    }

    //verifica se o telefone esta vazio
    if(telInput.value === ""){
        alert("Preencha seu seu telefone")
        return;
    }

  // se todos os capos estiverem preenchidos enviar form
  form.submit();
});