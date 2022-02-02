class Coin extends CollidableObject {

    IMAGES = ASSETS['IMAGES']['coins'];

    constructor(){
        super(); //enables access to extended class
        this.loadImage(this.IMAGES[0]);
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