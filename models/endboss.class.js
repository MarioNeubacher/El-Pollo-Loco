class Endboss extends CollidableObject {

    height = 400;
    width = 250;
    y = 60;
    energy = 25;
    
    IMAGES = ASSETS['IMAGES'];

    constructor() {
        super(); //enables access to extended class
        this.loadImage(this.IMAGES['endboss'][0]);
        this.loadImages();
        this.x = 2500;
        this.animate();
    }

    //filters through all the arrays in the array 'IMAGES'
    loadImages() { 
        for (const status in this.IMAGES) {
            super.loadImages(this.IMAGES[status]);
        }
    }

    animate() {
        setInterval(() => {
            if (this.isHurt()) {
                this.playAnimation(this.IMAGES['endboss_hurt']);
            } else {
                this.playAnimation(this.IMAGES['endboss']);
            }
        }, 200);
    }
}