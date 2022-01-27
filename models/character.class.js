class Character extends MovableObject {

    y = 135;
    height = 300;
    speed = 10;
    world; //world.class.js
    hasPlayed = false;
    energy = 100;
    groundPos = 120;
    
    idleTime = 5001;
    lastIdle = new Date().getTime();

    throwableObjects = [];

    AUDIOS = ASSETS['AUDIOS'];
    IMAGES = ASSETS['IMAGES'];

    constructor() {
        super(); //enables access to extended class
        this.loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
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
                /* this.AUDIOS['move_sound'].play(); */
            }

            if (this.world.keyboard.LEFT && this.x > 0) {
                this.moveLeft();
                this.otherDirection = true;
                /* this.AUDIOS['move_sound'].play(); */
            }

            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump();
            }

            this.world.camera_x = -this.x + 100; //camera gets linked to character
        }, 1000 / 60); //60 FPS 

        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES['dead']);
                this.jump();
                this.groundPos = 1000;
                if (!this.hasPlayed) {
                    /* this.AUDIOS['dead_sound'].play(); */
                    this.hasPlayed = true;
                } 
                this.speed = 0;
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES['hit']);
                /* this.AUDIOS['hurt_sound'].play(); */
            } else if (this.isAboveGround() && !this.isDead()) {
                this.playAnimation(this.IMAGES['jumping']);
                if (!this.hasPlayed) {
                    /* this.AUDIOS['jump_sound'].play(); */
                    this.hasPlayed = true;
                } 
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES['walking']);
            } else {
                if (this.lastIdle == 0) {
                    this.lastIdle = new Date().getTime();
                }
                let timepassed = new Date().getTime() - this.lastIdle;
                if (timepassed > 5000) {
                    this.playAnimation(this.IMAGES['longIdle']);
                } else {
                    this.playAnimation(this.IMAGES['idle']);
                }
            }
        }, 100); //not as quick as 1000/60
    }
}