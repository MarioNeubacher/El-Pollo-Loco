class ThrowableObject extends CollidableObject {

    AUDIOS = ASSETS['AUDIOS'];
    IMAGES = ASSETS['IMAGES'];

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

        if (soundMuted) {
            this.AUDIOS['throw_sound'].volume = 0;
            this.AUDIOS['bottleOnGround_sound'].volume = 0;
            this.AUDIOS['glass_sound'].volume = 0;
        }
    }

    //filters through all the arrays in the array 'IMAGES'
    loadImages() {
        for (const status in this.IMAGES) {
            super.loadImages(this.IMAGES[status]);
        }
    }

    throw() {
        this.AUDIOS['throw_sound'].play();
        this.speedY = 25;
        this.applyGravity();
        this.flying = setInterval(() => {
            if (this.isAboveGround()) {
                this.x += 30;
                this.playAnimation(this.IMAGES['bottle_throw']);
            } else {
                this.breakOnGround();
            }
        }, 80);
    }

    breakOnGround() {
        clearInterval(this.flying);
        this.AUDIOS['bottleOnGround_sound'].play();
    }

    break() { //world.js
        this.groundPos = this.y;
        setInterval(() => {
            this.playAnimation(this.IMAGES['bottle_splash']);
        }, 200);
        this.isBroken = true;
        clearInterval(this.flying);
        if (!this.hasPlayed) {
            this.AUDIOS['glass_sound'].play();
            this.hasPlayed = true;
        }
    }
}