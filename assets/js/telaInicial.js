class TelaInicial {
    constructor() {}

    draw() {
        this._imagemFundo();
        this._texto();
        this._botao();
    }

    _imagemFundo() {
        image(imagemTelaInicial, 0, 0, width, height);
    }

    _texto() {
        textFont(fonteTelaInicial);
        textSize(50);
        textAlign(CENTER);

        text('As aventuras de ', width / 2, height / 3);

        textSize(120);
        text('Hipsta', width / 2, height / 5 * 3);
    }

    _botao() {
        botaoGerenciador.y = height / 7 * 5;
        botaoGerenciador.draw();
    }
}