class World {
    level = level1;
    canvas; //game.js
    ctx;
    keyboard; //game.js
    camera_x = 0;
    assets;
    isAlive = true;

    AUDIOS = ASSETS['AUDIOS'];
    IMAGES = ASSETS['IMAGES'];
    gameMusic = ASSETS['MUSIC']['gameMusic'];

    energyBar = new EnergyBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    endbossEnergyBar = new EndbossEnergyBar();
    endbossIcon = new EndbossIcon();
    character = new Character();
    coins = new Coin();
    bottle = new Bottle();
    chicken = new Chicken();
    endboss = level1.endboss[0];
    throwableObject = this.character.throwableObjects;
    chickenLittle = new ChickenLittle();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.gameMusic.play();
        this.gameMusic.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
    }

    /**
     * To use world in those models
     */
    setWorld() {
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkBottleCollision();
        }, 20);
        this.enemyStampCollision = setInterval(() => {
            this.checkEnemyStampCollision();
        }, 20);
        this.enemyCollision = setInterval(() => {
            this.checkEnemyCollision();
        }, 1000);
    }

    checkCollisions() {
        this.collideCoin();
        this.collideBottle();
    }

    checkEnemyStampCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.isDead() && !this.character.isHurt()) { //!enemy.isDead = one chicken can die 
                if (this.character.isStamping(enemy)) {
                    enemy.hit();
                    this.checkDeadEnemy(enemy);
                    this.AUDIOS['stamp_sound'].play();
                }
            }
        });

        this.endboss.chickensLittle.forEach((chickenLittle) => {
            if (this.character.isColliding(chickenLittle) && !chickenLittle.isDead() && !this.character.isHurt()) { //!enemy.isDead = one chicken can die 
                if (this.character.isStamping(chickenLittle)) {
                    chickenLittle.hit();
                    this.checkDeadChickenLittle(chickenLittle);
                    this.AUDIOS['stamp_sound'].play();
                }
            }
        });
    }

    checkEnemyCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.isDead()) { //!enemy.isDead = one chicken can die 
                this.character.hit();
                this.energyBar.energyAmount -= 5;
                this.energyBar.setPercentage(this.energyBar.energyAmount);
            }
        });

        this.endboss.chickensLittle.forEach((chickenLittle) => {
            if (this.character.isColliding(chickenLittle) && !chickenLittle.isDead()) { //!enemy.isDead = one chicken can die 
                this.character.hit();
                this.energyBar.energyAmount -= 5;
                this.energyBar.setPercentage(this.energyBar.energyAmount);
            }
        });

        this.level.endboss.forEach((endboss) => {
            if (this.character.isColliding(endboss) && !endboss.isDead()) { //!enemy.isDead = one chicken can die 
                this.character.hit();
                this.energyBar.energyAmount -= 5;
                this.energyBar.setPercentage(this.energyBar.energyAmount);
            }
        });
    }

    collideCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.coinBar.coinAmount += 21;
                this.coinBar.setPercentage(this.coinBar.coinAmount);
                this.level.coins.splice(index, 1);
                 this.AUDIOS['coin_sound'].play();
            }
        });
    }

    collideBottle() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottles.splice(index, 1);
                this.bottleBar.bottleAmount++;
                this.bottleBar.setPercentage(this.bottleBar.bottleAmount);
                this.AUDIOS['collectBottle_sound'].play();
            }
        });
    }

    checkDeadEnemy(enemy) {
        if (enemy.isDead()) {
            setTimeout(() => {
                let i = this.level.enemies.indexOf(enemy); //to seperate
                this.level.enemies.splice(i, 1);
            }, 2000);
        }
    }

    checkDeadChickenLittle(chickenLittle) {
        if (chickenLittle.isDead()) {
            setTimeout(() => {
                let i = this.endboss.chickensLittle.indexOf(chickenLittle); //to seperate
                this.endboss.chickensLittle.splice(i, 1);
            }, 2000);
        }
    }

    checkBottleCollision() {
        this.character.throwableObjects.forEach((object) => {
            this.bottleOnChicken(object);
            this.bottleOnChickenLittle(object);
            this.bottleOnEndboss(object);
            this.checkBrokenObjects(object);
        });
    }

    bottleOnChicken(object) {
        this.level.enemies.forEach((enemy) => {
            if (object.isColliding(enemy) && !object.isBroken && object.isAboveGround()) {
                enemy.hit();
                this.checkDeadEnemy(enemy);
                object.break();
                object.isBroken = true;
            }
        });
    }

    bottleOnChickenLittle(object) {
        this.endboss.chickensLittle.forEach((chickenLittle) => {
            if (object.isColliding(chickenLittle) && !object.isBroken && object.isAboveGround()) {
                chickenLittle.hit();
                this.checkDeadChickenLittle(chickenLittle);
                object.break();
                object.isBroken = true;
            }
        });
    }

    bottleOnEndboss(object) {
        this.level.endboss.forEach((endboss) => {
            if (object.isColliding(endboss) && !object.isBroken && object.isAboveGround()) {
                endboss.hit();
                this.endbossEnergyBar.energyAmount -= 1;
                this.endbossEnergyBar.setPercentage(this.endbossEnergyBar.energyAmount);
                object.break();
                object.isBroken = true;
            }
        });
    }

    checkBrokenObjects(object) {
        if (object.isBroken == true) {
            setTimeout(() => {
                let i = this.character.throwableObjects.indexOf(object); //to determine which bottle
                this.character.throwableObjects.splice(i, 1);
            }, 200 * 5); //break() 200ms intervall x 6 splash images 
            object.isBroken = false;
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); /* canvas gets cleared */
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addObjectsToMap(this.level.clouds); //has to be over statusbar&character to be behind it on canvas

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.endboss.chickensLittle);
        this.addObjectsToMap(this.level.endboss);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.character.throwableObjects);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

        // --------- Space for fixed Objects ---------
        this.addToMap(this.energyBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.endbossEnergyBar);
        this.addToMap(this.endbossIcon);
        // --------- Space for fixed Objects End ---------world.

        /* draw() fires as often as graphic card is able to = FPS */
        let self = this;
        requestAnimationFrame(function () {
            self.draw(); /* self bc "this" doesnt function here anymore */
        });
    }

    /**
     * 
     * @param {string} objects - draw()
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * 
     * @param {string} mo - draw()
     */
    addToMap(mo) {
        if (mo.otherDirection) {
            this.flipImage(mo);
        }

        mo.draw(this.ctx);
        /* mo.drawFrame(this.ctx); */
        /*   mo.drawInfo(this.ctx); */

        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    /**
     * 
     * @param {string} mo - addToMap()
     */
    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    /**
     * 
     * @param {string} mo - addToMap()
     */
    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}