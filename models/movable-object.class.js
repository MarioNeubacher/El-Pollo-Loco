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
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < this.groundPos;
    }

    /**
     * 
     * @param {string} mo - world.js collide...()
     * @returns 
     */
    isColliding(mo) { 
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    hit() {
        this.lastIdle = 0;
        this.energy -= 5;
        if (this.energy > 0) {
            this.lastHit = new Date().getTime(); //ms from 1970
        } else {
            this.isDead();
        }
    }

    /**
     * Function gets triggered when 'true' that hit during the last ..s
     * @returns - true, if hit during the last ..s
     */
    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Difference in ms
        timepassed = timepassed / 1000; //difference in s
        return timepassed < 0.5; 
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
}