class ThrowableObject extends MovableObject {

    hasPlayed = false;
    AUDIOS = ASSETS['AUDIOS'];
    groundPos = 320;
    isBroken = false;

    IMAGES_THROW = [
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    IMAGES_SPLASH = [
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png',
    ];

    /**
     * 
     * @param {numbers} x - checkThrowObjects - world.js
     * @param {numbers} y - checkThrowObjects - world.js
     */
    constructor(x, y) {
        super(); //enables access to extended class
        this.loadImage('img/7.Marcadores/Icono/Botella.png'); //super() only once, after that use this
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_SPLASH);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw() {
        this.speedY = 25;
        this.applyGravity();
        this.AUDIOS['throw_sound'].play();
        setInterval(() => {
            if (this.isAboveGround()) {
                this.x += 15;
                this.playAnimation(this.IMAGES_THROW);
            } else {
                this.playAnimation(this.IMAGES_SPLASH);
                if (!this.hasPlayed) {
                    this.AUDIOS['glass_sound'].play();
                    this.hasPlayed = true;
                }  
                this.isBroken = true;
            }
        }, 50);
    }
}