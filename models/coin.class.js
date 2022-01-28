class Coin extends MovableObject {

    offsetRight = 20;
    offsetLeft = 20;
    offsetTop = 20;
    offsetBottom = 20;

    IMAGES = ASSETS['IMAGES']['coins'];

    constructor(){
        super(); //enables access to extended class
        this.loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES);
        this.y = 100;
        this.x = 200 + Math.random() * 2000;
        this.animate();  
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 400);
    }
}