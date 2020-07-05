function calculaMatriz(imagem, alturaPersonagem, larguraPersonagem) {
    let matriz = [];

    for (let i = 0; i < imagem.height; i += alturaPersonagem) {
        for (let j = 0; j < imagem.width; j += larguraPersonagem) {
            matriz.push([j, i]);
        }
    }

    return matriz;
}

class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);
        this.variacaoY = variacaoY;
        this.alturaPersonagem = 270;
        this.larguraPersonagem = 220;
        this.invencivel = false;

        //this.matriz = calculaMatriz(imagem, this.alturaPersonagem, this.larguraPersonagem);

        this.yInicial = height - this.altura - variacaoY;
        this.y = this.yInicial;

        this.gravidade = 6;
        this.velocidadePulo = 0;
        this.alturaPulo = -50;
        this.pulos = 0;
    }

    pula() {
        if (this.pulos < 2) {
            this.velocidadePulo = this.alturaPulo;
            this.pulos++;
        }
    }

    aplicaGravidade() {
        this.y += this.velocidadePulo;
        this.velocidadePulo += this.gravidade;

        if (this.y > this.yInicial) {
            this.y = this.yInicial;
            this.pulos = 0;
        }
    }

    tornarInvencivel() {
        this.invencivel = true;

        setTimeout(() => {
            this.invencivel = false;
        }, 1000);
    }

    estaColidindo(inimigo) {
        if (this.invencivel) return false;

        const precisao = .7;
        //noFill();
        //rect(this.x, this.y, this.largura * precisao, this.altura * precisao);
        //rect(inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
        return collideRectRect(this.x, this.y, this.largura * precisao, this.altura * precisao, inimigo.x, inimigo.y, inimigo.largura * precisao, inimigo.altura * precisao);
    }
}