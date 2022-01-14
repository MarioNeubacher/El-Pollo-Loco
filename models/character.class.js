class Character extends MovableObject {

    height = 300;
    y = 40;
    speed = 10;
    world; //world.class.js
    hasPlayed = false;

    AUDIOS = ASSETS['AUDIOS'];
    IMAGES = ASSETS['IMAGES'];

    constructor() {
        super(); //enables access to extended class
        this.loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png'); //super() necessary to use functions from extended class
        this.loadImages();
        this.applyGravity();
        this.animate();
    }

    loadImages() { //filters through all the arrays in the array 'IMAGES'
        for (const status in this.IMAGES) {
            super.loadImages(this.IMAGES[status]);
        }
    }

    animate() {
        setInterval(() => {
            this.AUDIOS['move_sound'].pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                this.moveRight();
                this.otherDirection = false;
                this.AUDIOS['move_sound'].play();
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                this.AUDIOS['move_sound'].play();
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
                this.AUDIOS['jump_sound'].play();
            }

            this.world.camera_x = -this.x + 100; //camera gets linked to character
        }, 1000 / 60);

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES['dead']);
                if (!this.isAboveGround()) {
                    this.jump();
                    this.groundPos = 1000;
                }
                if (!this.hasPlayed) {
                    /* this.AUDIOS['dead_sound'].play(); */
                    this.hasPlayed = true;
                } 
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES['hit']);
                /* this.AUDIOS['hurt_sound'].play(); */
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES['jumping']);
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES['walking']);
            } else {
                this.playAnimation(this.IMAGES['idle']);
            }
        }, 100);
    }
}