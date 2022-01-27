class ThrowableObject extends MovableObject {

    AUDIOS = ASSETS['AUDIOS'];
    IMAGES = ASSETS['IMAGES'];

    groundPos = 362.5;
    bottleTime = 100;
    hasPlayed = false;
    isBroken = false;
    chickenHit = false;

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
        this.fly();
        this.break();
    }

    fly() {
        setInterval(() => {
            if (this.isAboveGround()) {
                this.x += 15;
                this.playAnimation(this.IMAGES['bottle_throw']);
            }
        }, 50);
    }

    break() {
        setInterval(() => {
            /* if (!this.hasPlayed) {
                this.AUDIOS['glass_sound'].play();
                this.hasPlayed = true;
            } */
            this.playAnimation(this.IMAGES['bottle_splash']);
            this.isBroken = true;
        }, this.bottleTime);
    }
}