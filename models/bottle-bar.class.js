class BottleBar extends DrawableObject {

    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.png'
    ];

    constructor () { 
        super(); //enables access to extended class
        this.loadImages(this.IMAGES); 
        this.x = 420;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
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
        if (this.percentage > 4) {
            return 5;
        } else if (this.percentage > 3) {
            return 4;
        } else if (this.percentage > 2) {
            return 3;
        } else if (this.percentage > 1) {
            return 2;
        } else if (this.percentage > 0) {
            return 1;
        } else {
            return 0;
        }
    }
}