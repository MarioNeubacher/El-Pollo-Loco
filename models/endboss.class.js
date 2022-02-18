class Endboss extends CollidableObject {

    height = 400;
    width = 250;
    energy = 25;
    speed = 1.5;
    hasPlayed = false;

    IMAGES = ASSETS['IMAGES'];
    AUDIOS = ASSETS['AUDIOS'];

    chickensLittle = [];

    offset = {
        top: 50,
        left: 0,
        right: 0,
        bottom: 0
    };

    constructor(x, y) {
        super(); //enables access to extended class
        this.loadImage(this.IMAGES['endboss_aggressive'][0]);
        this.loadImages();
        this.spawnChicks();
        this.x = x;
        this.y = y;
        this.animate();
        this.applyGravity();
    }

    //filters through all the arrays in the array 'IMAGES'
    loadImages() {
        for (const status in this.IMAGES) {
            super.loadImages(this.IMAGES[status]);
        }
    }

    animate() {
        this.movement = setInterval(() => {
            if (!this.isDead()) {
                if (this.isHurt()) {
                    this.playAttack();
                } else {
                    this.playAggressive();
                }
            } else {
                this.playDead();
                this.youWon();
            }
        }, 200);
    }

    playDead() {
        clearInterval(this.movement); //only once speedY in jump()
        this.groundPos = 1000;
        this.jump();
        this.animation = setInterval(() => {
            this.playAnimation(this.IMAGES['endboss_dead']);
        }, 200);
        setTimeout(() => {
            clearInterval(this.animation);
        }, 200 * 3);
    }

    youWon() {
        this.AUDIOS['won_sound'].play();
        document.getElementById('id-gameOver').classList.remove('d-none');
        setTimeout(() => {
            location.reload();
        }, 5000);
    }

    playAttack() {
        this.playAnimation(this.IMAGES['endboss_hurt']);
        this.AUDIOS['endboss_sound'].play();
        this.x -= 50;
    }

    playAggressive() {
        this.speed = 2.5;
        this.moveLeft();
        this.playAnimation(this.IMAGES['endboss_attack']);
    }

    spawnChicks() {
        setInterval(() => {
            if (!this.isDead()) {
                let object = new ChickenLittle(this.x, 375);
                this.chickensLittle.push(object); //push to remove it with splice afterwards
            }
        }, 5000)
    }
}