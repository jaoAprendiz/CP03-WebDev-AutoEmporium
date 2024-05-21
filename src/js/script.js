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

// Definindo as perguntas e respostas
var perguntas = [
    "Qual foi o primeiro carro produzido em massa?",
    "Qual é a marca de carros de luxo conhecida por seu logotipo de estrela de três pontas?",
    "Em que país a marca de carros Ferrari foi fundada?",
    "Qual fabricante de carros produz o modelo Civic?",
    "Qual é o nome do carro elétrico mais vendido da Tesla?",
    "Qual marca de carro é conhecida pelo emblema de um touro?",
    "Qual carro esportivo é famoso pelo apelido Godzilla?",
    "Qual é o nome do carro mais rápido do mundo (em termos de velocidade máxima) a partir de 2021?",
    "Qual fabricante de carros é conhecido por seu emblema com uma elipse azul e o nome escrito em prata?",
    "Qual é o nome do primeiro carro híbrido de produção em massa do mundo?"
];

var respostas = [
    "Ford Model T",
    "Mercedes-Benz",
    "Itália",
    "Honda",
    "Tesla Model 3",
    "Lamborghini",
    "Nissan GT-R",
    "SSC Tuatara",
    "Ford",
    "Toyota Prius"
];

// Função para iniciar o quiz

function iniciarQuiz() {
    var pontuacao = 0;

    // Loop para fazer as perguntas
    for (var i = 0; i < perguntas.length; i++) {
        var respostaUsuario = prompt(perguntas[i]);

        // Verifica se a resposta do usuário está correta
        if (respostaUsuario.toLowerCase() === respostas[i].toLowerCase()) {
            pontuacao++;
        }
    }
1
    // Mostra a pontuação na tela
    document.getElementById('resultado').innerHTML = `Voce acertou ${pontuacao} de ${perguntas.length} perguntas`;
}

// VALIDANDO OS CAMPOS DO CONTATO

// Declarando as variáveis
const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const obsInput = document.querySelector("#c-obs");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    //verifica se o nome esta vazio
    if(nameInput.value === ""){
        alert("Preencha seu nome");
        return;
    }

    //verifica se o email esta vazio
    if(emailInput.value === ""){
        alert("Preencha seu seu email");
        return;
    }

    //verifica se o telefone esta vazio
    if(obsInput.value === ""){
        alert("Preencha a mensagem");
        return;
    }

  // se todos os capos estiverem preenchidos enviar form
  form.submit();
  alert('Mensagem enviada com sucesso! Enviaremos uma resposta assim que possível :)')
});