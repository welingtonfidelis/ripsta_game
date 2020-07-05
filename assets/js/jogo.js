class Jogo {
    constructor() {
        this.indice = 0;

        this.mapa = [
            { inimigo: 0, velocidade: 10 },
            { inimigo: 1, velocidade: 15 },
            { inimigo: 1, velocidade: 30 },
            { inimigo: 2, velocidade: 40 },
        ];
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        pontuacao = new Pontuacao();
        vida = new Vida(3, 3);

        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 20, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 50, 20, 52, 50, 104, 90, 10);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width, 0, 200, 200, 400, 400, 10);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 50, 200, 100, 75, 200, 150, 10);

        inimigos = [inimigo, inimigoGrande, inimigoVoador];
    }

    keyPressed() {
        if (key === 'ArrowUp' || key === ' ') {
            personagem.pula();
            somDoPulo.play();
        }
    }

    draw() {
        cenario.exibe();
        cenario.move();

        personagem.exibe();
        personagem.aplicaGravidade();

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        const linhaAtual = this.mapa[this.indice];

        const inimigo = inimigos[linhaAtual.inimigo];

        inimigo.velocidade = linhaAtual.velocidade; //parseInt(random(10, 30))
        inimigo.exibe();
        inimigo.move();

        if (inimigo.x < -inimigo.largura) {
            this.indice++;

            inimigo.reaparece();

            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }

        vida.draw();

        if (personagem.estaColidindo(inimigo)) {
            vida.perdeVida();
            personagem.tornarInvencivel();

            if (vida.vidas <= 0) {
                //pontuacao.limpaPonto();
                noLoop();
                image(imagemGameOver, width / 2 - 200, height / 3);
            }
        }
    }
}