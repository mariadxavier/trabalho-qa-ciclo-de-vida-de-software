// -------------CARROSSEL:-------------------------

//   quando clicarmos no botão temos que mostrar a imagem de fundo e o texto correspondente

//- dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const modelos = document.querySelectorAll('.modelo');
const botoesNav = document.querySelectorAll('.button-nav');

//- dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        desativarImagemSelecionada();

        mostrarImagemSelecionada(indice);

        desativarDescriaoSelecionada();

        mostrarDescricaoSelecionada(indice);
    })
});

botoesNav.forEach((button, valor) => {
    button.addEventListener('click', () => {
        desativarSecaoSelecionada();
        mostrarSecaoSelecionada(valor);
    })
})

function mostrarImagemSelecionada(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function desativarImagemSelecionada() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

function mostrarDescricaoSelecionada(indice) {
    modelos[indice].classList.add('ativo');
}

function desativarDescriaoSelecionada() {
    const descricaoSelecionada = document.querySelector('.ativo');
    descricaoSelecionada.classList.remove('ativo');
}

function mostrarSecaoSelecionada(valor) {
    botoesNav[valor].classList.add('atual');
}

function desativarSecaoSelecionada() {
    const secaoSelecionada = document.querySelector('.atual');
    secaoSelecionada.classList.remove('atual');
}

// --------------------SCROLL SUAVE:------------------
const element = document.body;

function scrollTo(element) {
    document.querySelector(element).scrollIntoView({behavior: "smooth"});   

}

document.querySelector("#menuInicio").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#landing")
})

document.querySelector("#menuIntro").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#intro")
})

document.querySelector("#menuEtapas").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#etapas")
})

document.querySelector("#menuImportancia").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#importancia")
})

document.querySelector("#menuModelos").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#modelos")
})

document.querySelector("#menuConclusao").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#conclusao")
})


document.querySelector("#menuContatos").addEventListener('click', function(event){
    event.preventDefault();
    scrollTo("#contatos")
})

// MENU ACOMPANHANDO:
