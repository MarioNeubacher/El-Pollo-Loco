class CoinBar extends DrawableObject {
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/20_ .png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/80_ copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/100_ copia 2.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES[0]); //necessary to access the parent functions
        this.x = 215;
        this.y = 5;
        this.width = 200;
        this.height = 60;
    }
}