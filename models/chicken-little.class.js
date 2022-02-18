class ChickenLittle extends CollidableObject {
    height = 45;
    width = 60;
    energy = 5;
    hasPlayed = false;
    groundPos = 120;

    AUDIOS = ASSETS['AUDIOS'];
    IMAGES = ASSETS['IMAGES'];

    constructor(x, y) {
        super(); //enables access to extended class
        this.loadImage(this.IMAGES['chicken_little_walking'][0]);
        this.loadImages();
        this.x = x;
        this.y = y;
        this.speed = 5 + Math.random() * 0.9;
        this.animate();
        this.applyGravity();

        
        if (soundMuted) {
            this.AUDIOS['chickenLittle_sound'].volume = 0;
        }
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
        }, 50);

        setInterval(() => {
            if (this.energy > 0) {
                this.playAnimation(this.IMAGES['chicken_little_walking']);
            } else {
                this.playAnimation(this.IMAGES['chicken_little_dead']);
                this.speed = 0;
                if (!this.hasPlayed) {
                    this.AUDIOS['chickenLittle_sound'].play();
                    this.hasPlayed = true;
                }
            }
        }, 100);
    }
}