function setup() {
    createCanvas(windowWidth, windowHeight);

    frameRate(40);
    somDoJogo.loop();

    jogo = new Jogo();
    jogo.setup();

    botaoGerenciador = new BotaoGerenciador('INICIAR', width / 2, height / 2, 'jogo');

    telaInicial = new TelaInicial();

    cenas = {
        jogo,
        telaInicial
    };
}

function keyPressed() {
    jogo.keyPressed();
}

function draw() {
    cenas[cenaAtual].draw();
}