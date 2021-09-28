let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let suffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        LightColor(elementColor, Number(i) + 1);
    }
}

let LightColor = (element, number) => {
    number = number * 1000;
    setTimeout (() => {
        element.classList.add('selected');
    }, number - 500);
    setTimeout(() => {
        element.classList.remove('selected')
    });
}


// checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder [i] != order[i]){
            gameOver();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando próximo nível!`);
        nextLevel();
    }
}

// clique do user
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    },500); 
}


// função que retorna a cor
let createColorElement = (color) => {
    if(color == 0) {
        return green;
    } else if (color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }
}

//função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nNão foi desta vez!\nClique em OK para jogar novamente`);
    order = [];
    clickedOrder = [];
    
    playGame();
}

// função início do jogo
let playGame = () => {
    alert(`Bem vindo ao Genius! Iniciando novo jogo!`)
    score = 0;

    nextLevel();
}

// função para ir ao próximo nível do jogo
let nextLevel = () => {
    score++;
    suffleOrder();
}

//evento de clique para as cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();