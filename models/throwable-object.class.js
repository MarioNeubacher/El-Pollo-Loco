class ThrowableObject extends CollidableObject {

    AUDIOS = ASSETS['AUDIOS'];
    IMAGES = ASSETS['IMAGES'];

    throwableObject;

    groundPos = 362.5;
    hasPlayed = false;
    isBroken = false;

    /**
     * 
     * @param {numbers} x - character.js
     * @param {numbers} y - character.js
     */
    constructor(x, y) {
        super(); //enables access to extended class
        this.loadImage(this.IMAGES['bottle_throw'][0]); //super() only once, after that use this
        this.loadImages();
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    //filters through all the arrays in the array 'IMAGES'
    loadImages() { 
        for (const status in this.IMAGES) {
            super.loadImages(this.IMAGES[status]);
        }
    }

    throw() {
        /* this.AUDIOS['throw_sound'].play(); */
        this.speedY = 25;
        this.applyGravity();
        setInterval(() => {
            if (this.isAboveGround()) {
                this.x += 30;
                this.playAnimation(this.IMAGES['bottle_throw']);
            }
        }, 100);
    }

    glasssound() {
        /* if (!this.hasPlayed) {
            this.AUDIOS['glass_sound'].play();
            this.hasPlayed = true;
        } */
    }

    break() {
        setInterval(() => {
            this.playAnimation(this.IMAGES['bottle_splash']);
        }, 125); 
        this.isBroken = true;
    }
}