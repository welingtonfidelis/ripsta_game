class BotaoGerenciador {
    constructor(texto, x, y, textACtion) {
        this.texto = texto;
        this.x = x;
        this.y = y;

        this.botao = createButton(this.texto);
        this.botao.addClass('botao-tela-inicial');

        this.botao.mousePressed(() => {
            this._alteraCena();
            cenaAtual = textACtion;
        });
    }

    draw() {
        this.botao.position(this.x, this.y);
        this.botao.center('horizontal');
    }

    _alteraCena() {
        this.botao.remove();
    }
}