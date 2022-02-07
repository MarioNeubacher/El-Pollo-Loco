class Chicken extends CollidableObject {
    y = 360;
    height = 60;
    width = 80;
    energy = 5;
    hasPlayed = false;
    groundPos = 120;

    AUDIOS = ASSETS['AUDIOS'];
    IMAGES = ASSETS['IMAGES'];

    offset = {
        top: 10,
        left: 0,
        right: 0,
        bottom: 0
    };

    constructor() {
        super(); //enables access to extended class
        this.loadImage(this.IMAGES['chicken_walking'][0]);
        this.loadImages();
        this.x = 200 + Math.random() * 2250; //math.random generates random number between 0 and 1 = range is 200 to 700
        this.speed = 0.80 + Math.random() * 0.5;
        this.animate();
        this.applyGravity();
    }

    //filters through all the arrays in the array 'IMAGES'
    loadImages() { 
        for (const status in this.IMAGES) {
            super.loadImages(this.IMAGES[status]);
        }
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 100);

        setInterval(() => {
            if (this.energy > 0) {
                this.playAnimation(this.IMAGES['chicken_walking']);
            } else {
                this.playAnimation(this.IMAGES['chicken_dead']);
                this.speed = 0;
                /* if (!this.hasPlayed) {
                    this.AUDIOS['chicken_sound'].play();
                    this.hasPlayed = true;
                } */
            }
        }, 100);
    }
}