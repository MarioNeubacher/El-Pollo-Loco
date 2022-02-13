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

        this.animation = setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES['endboss_dead']);
            }
        }, 200);
    }

    playDead() {
        this.groundPos = 1000;
        this.jump();
        clearInterval(this.enemyCollision); //no enemy can hit pepe after endboss is dead 
        clearInterval(this.movement);
        setTimeout(() => {
            clearInterval(this.animation);
        }, 200 * 2);
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
        this.jump();
        this.speedY = 10;
        this.x -= 50;
        setTimeout(() => {
            this.y = 60;
        }, 1500);
    }

    playAggressive() {
        this.speed = 2.5;
        this.moveLeft();
        this.playAnimation(this.IMAGES['endboss_attack']);
    }

    spawnChicks() {
        setInterval(() => {
            let object = new ChickenLittle(this.x, 375);
            this.chickensLittle.push(object); //push to remove it with splice afterwards
        }, 5000)
    }
}