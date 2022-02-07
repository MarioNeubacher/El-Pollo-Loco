class Coin extends CollidableObject{
    
    width = 100;
    height = 100;

    IMAGES = ASSETS['IMAGES']['coins'];

    constructor(x, y) {
        super(); //enables access to extended class
        this.loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.animates();
        this.x = x;
        this.y = y;
    }

    animates() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 400);
    }
}