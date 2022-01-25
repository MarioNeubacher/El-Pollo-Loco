class EnergyBar extends DrawableObject {

    energyAmount = 100;

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador vida/Naranja/0_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/20__1.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
    ];

    constructor() {
        super(); //enables access to extended class
        this.loadImages(this.IMAGES);
        this.x = 20;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(100);
    }

    /**
     * 
     * @param {string} percentage - changeStatusbar() world.class.js 
     */
    setPercentage(percentage) {
        this.percentage = percentage; //set it as global variable
        let path = this.IMAGES[this.resolveImagesIndex()];
        this.img = this.imageCache[path]; //updates img variable in drawableObjects 
    }

    resolveImagesIndex() {
        if (this.percentage == 100) {
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