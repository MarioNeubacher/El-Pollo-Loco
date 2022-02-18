class MovableObject extends DrawableObject {
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    lastHit = 0;
    groundPos = 0;

    moveRight() {
        this.lastIdle = 0;
        this.x += this.speed;
    }

    moveLeft() {
        this.lastIdle = 0;
        this.x -= this.speed;
    }

    jump() {
        this.lastIdle = 0;
        this.speedY = 30;
    }

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration; //- to fall down
            }
        }, 40);
    }

    isAboveGround() {
        return this.y < this.groundPos;
    }

    hit() {
        this.lastIdle = 0;
        this.currentImage = 0; //always starts animation with first image
        this.energy -= 5;
        if (this.energy > 0) {
            this.lastHit = new Date().getTime(); //ms from 1970
        } else {
            this.energy = 0;
        }
    }

    /**
     * Function gets triggered when 'true' that hit during the last ..s
     * @returns - true, if hit during the last ..s
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Difference in ms
        timepassed = timepassed / 1000; //difference in s
        return timepassed < 1.5;
    }

    /**
     * 
     * @returns - true, if energy = 0 
     */
    isDead() {
        return this.energy == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 7 % 6; => 1, Rest 1
        // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5 etc.
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    getBottomPos() {
        return this.y + this.height;
    }

    getTopPos() {
        return this.y;
    }
}