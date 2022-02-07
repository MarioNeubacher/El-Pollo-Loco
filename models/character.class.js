class Character extends CollidableObject {

    y = 135;
    x = 0;
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

    offset = {
        top: 100,
        left: 0,
        right: 0,
        bottom: 0
    };

    constructor() {
        super(); //enables access to extended class
        this.loadImage(this.IMAGES['walking'][0]);
        this.loadImages();
        this.applyGravity();
        this.animate();
    }

    //filters through all the arrays in the array 'IMAGES'
    loadImages() {
        for (const status in this.IMAGES) {
            super.loadImages(this.IMAGES[status]);
        }
    }

    animate() {
        //Keboard
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

            if (this.throwBottle()) {
                this.playThrow();
            }

            this.world.camera_x = -this.x + 100; //camera gets linked to character
        }, 1000 / 60); //60 FPS 

        //Animations
        setInterval(() => {
            if (this.isDead()) {
                this.playDead();
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES['hit']);
                /* this.AUDIOS['hurt_sound'].play(); */
            } else if (this.isAboveGround() && !this.isDead()) {
                this.playAnimation(this.IMAGES['jumping']);
                if (!this.hasPlayed) {
                    /* this.AUDIOS['jump_sound'].play(); */
                    this.hasPlayed = true;
                }
            } else if (this.movesBothSides()) {
                this.playAnimation(this.IMAGES['walking']);
            } else {
                this.playIdle();
            }
        }, 100); 
    }

    movesBothSides() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
    }

    throwBottle() {
        return this.world.keyboard.D && this.world.bottleBar.bottleAmount > 0 && this.world.keyboard.THROW_START > this.world.keyboard.THROW_END;
    }

    playThrow() {
        this.world.keyboard.THROW_END = new Date().getTime();
        this.lastIdle = 0;
        let object = new ThrowableObject(this.x + 100, this.y + 100); //+100 bc it starts infront infront of pepe
        this.throwableObjects.push(object);
        this.world.bottleBar.bottleAmount -= 1;
        this.world.bottleBar.setPercentage(this.world.bottleBar.bottleAmount);
    }

    isStamping(collection) { //world.js
        return super.getBottomPos() - collection.getTopPos() <= 20;
    }

    playDead() {
        this.playAnimation(this.IMAGES['dead']);
        this.jump();
        this.groundPos = 1000;
        this.speed = 0;
        /* if (!this.hasPlayed) {
            this.AUDIOS['dead_sound'].play();
            this.hasPlayed = true;
        } */
    }

    playIdle() {
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
}