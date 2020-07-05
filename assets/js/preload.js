function preload() {
    imagemCenario = loadImage('assets/images/scenario/floresta.png');
    imagemGameOver = loadImage('assets/images/scenario/game-over.png');
    imagemTelaInicial = loadImage('assets/images/scenario/telaInicial.png');
    imagemPersonagem = loadImage('assets/images/character/correndo.png');
    imagemInimigo = loadImage('assets/images/character/gotinha.png');
    imagemInimigoGrande = loadImage('assets/images/character/troll.png');
    imagemInimigoVoador = loadImage('assets/images/character/gotinha-voadora.png');
    imagemVida = loadImage('assets/images/util/coracao.png');

    fonteTelaInicial = loadFont('assets/fonts/fonteTelaInicial.otf');

    somDoJogo = loadSound('assets/sounds/trilha_jogo.mp3');
    somDoPulo = loadSound('assets/sounds/somPulo.mp3');
}