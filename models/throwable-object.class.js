class ThrowableObject extends MovableObject {

    AUDIOS = ASSETS['AUDIOS'];
    IMAGES = ASSETS['IMAGES'];

    groundPos = 362.5;
    hasPlayed = false;
    isBroken = false;

    offsetRight = 0;
    offsetLeft = 0;
    offsetTop = 0;
    offsetBottom = 0;

    /**
     * 
     * @param {numbers} x - checkThrowObjects - world.js
     * @param {numbers} y - checkThrowObjects - world.js
     */
    constructor(x, y) {
        super(); //enables access to extended class
        this.loadImage('img/7.Marcadores/Icono/Botella.png'); //super() only once, after that use this
        this.loadImages(this.IMAGES['bottle_throw']);
        this.loadImages(this.IMAGES['bottle_splash']);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
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