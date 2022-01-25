class CoinBar extends DrawableObject {

    coinAmount = 0;

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/20_ .png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/80_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/100_ copia 2.png'
    ];

    constructor() {
        super(); //enables access to extended class
        this.loadImages(this.IMAGES);
        this.x = 220;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }

    /**
     * 
     * @param {string} percentage - checkCollisions() world.class.js 
     */
    setPercentage(percentage) {
        this.percentage = percentage; //set it as global variable
        let path = this.IMAGES[this.resolveImagesIndex()];
        this.img = this.imageCache[path]; //updates img variable in drawableObjects 
    }

    resolveImagesIndex() {
        if (this.percentage > 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}