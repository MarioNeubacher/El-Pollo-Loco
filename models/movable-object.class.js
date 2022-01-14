class MovableObject extends DrawableObject { 
    speed = 0.15;
    otherDirection = false;
    speedY = 0;
    acceleration = 2.5;
    
    lastHit = 0;
    groundPos = 130;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration; //- to fall down
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) { //Throw object should always fall
            return true;
        } else {
            return this.y < this.groundPos;
        }
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
        this.energyAmount -= 5;
        if (this.energyAmount < 0) {
            this.energyAmount = 0;
        } else {
            this.lastHit = new Date().getTime(); //ms from 1970
        }
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Difference in ms
        timepassed = timepassed / 1000; //difference in s
        return timepassed < 0.5; //hit during last ..s, returns "true"
    }

    isDead() {
        return this.energyAmount == 0;
    }

    playAnimation(images) {
        let i = this.currentImage % images.length; // let i = 7 % 6; => 1, Rest 1
        // i = 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5 etc.
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    moveRight() {
        this.x += this.speed;
    }

    moveLeft() {
        this.x -= this.speed;
    }

    jump() {
        this.speedY = 30;
    }
}