class Pontuacao {
    constructor() {
        this.pontos = 0;
    }

    exibe() {
        textAlign(RIGHT);
        textSize(50);
        fill('#fff');
        text(parseInt(this.pontos), width - 20, 50);
    }

    adicionarPonto() {
        this.pontos += 0.2;
    }

    limpaPonto() {
        this.pontos = 0;
    }
}