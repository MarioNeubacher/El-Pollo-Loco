class Character extends CollidableObject {

    y = 135;
    x = 0;
    height = 300;
    speed = 10;
    world; //world.class.js
    hasPlayed = false;
    groundPos = 110;
    energy = 25;
    movement;
    animation;
    jumping;

    idleTime = 5001;
    lastIdle = new Date().getTime();

    AUDIOS = ASSETS['AUDIOS'];
    IMAGES = ASSETS['IMAGES'];

    throwableObjects = [];

    offset = {
        top: 200,
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
        this.movement = setInterval(() => {
            if (!this.world.endboss.isDead()) {
                this.AUDIOS['move_sound'].pause();
                if (!this.isDead()) {
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
                    if (this.conditionThrowBottle()) {
                        this.playThrow();
                    }
                } else {
                    this.groundPos = 1000;
                    this.jump();
                    clearInterval(this.world.enemyStampCollision); //character doesnt stamp on chicken after isDead()
                    clearInterval(this.movement); //no movement possible after death
                    if (!this.hasPlayed) {
                        this.AUDIOS['dead_sound'].play();
                        this.hasPlayed = true;
                    }
                }
                this.world.camera_x = -this.x + 100; //camera gets linked to character
            }
        }, 1000 / 60); // 60 FPS

        this.animation = setInterval(() => {
            if (!this.world.endboss.isDead()) {
                if (this.isDead()) {
                    this.playDead();
                    this.youLost();
                } else if (this.isHurt()) {
                    this.playAnimation(this.IMAGES['hit']);
                    this.AUDIOS['hurt_sound'].play();
                } else if (this.isAboveGround() && !this.isDead()) {
                    this.playAnimation(this.IMAGES['jumping']);
                    if (!this.hasPlayed) {
                        this.AUDIOS['jump_sound'].play();
                        this.hasPlayed = true;
                    }
                } else if (this.movesBothSides()) {
                    this.playAnimation(this.IMAGES['walking']);
                } else {
                    this.playIdle();
                }
            }
        }, 100);
    }

    playDead() {
        this.playAnimation(this.IMAGES['dead']);
        setTimeout(() => {
            clearInterval(this.animation);
        }, 100 * 10); //animation intervall x images amount
    }

    youLost() {
        document.getElementById('id-gameLost').classList.remove('d-none');
        setTimeout(() => {
            location.reload();
        }, 5000);
    }

    movesBothSides() {
        return this.world.keyboard.RIGHT || this.world.keyboard.LEFT;
    }

    conditionThrowBottle() {
        return this.world.keyboard.D && this.world.bottleBar.bottleAmount > 0 && this.world.keyboard.THROW_START > this.world.keyboard.THROW_END;
    }

    playThrow() {
        this.world.keyboard.THROW_END = new Date().getTime();
        this.lastIdle = 0;
        let object = new ThrowableObject(this.x + 100, this.y + 100);
        this.throwableObjects.push(object);
        this.world.bottleBar.bottleAmount -= 1;
        this.world.bottleBar.setPercentage(this.world.bottleBar.bottleAmount);
    }

    isStamping(collection) { //world.js
        return super.getBottomPos() - collection.getTopPos() <= 20;
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