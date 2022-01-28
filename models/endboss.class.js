class Endboss extends MovableObject {

    height = 400;
    width = 250;
    y = 60;

    offsetRight = 10;
    offsetLeft = 30;
    offsetTop = 50;
    offsetBottom = 10;
    
    IMAGES = ASSETS['IMAGES']['endboss'];

    constructor() {
        super(); //enables access to extended class
        this.loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.x = 2500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 200);
    }
}