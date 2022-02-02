class World {
    level = level1;
    canvas; //game.js
    ctx;
    keyboard; //game.js
    camera_x = 0;
    assets;
    isAlive = true;

    throwableObj;

    AUDIOS = ASSETS['AUDIOS'];

    energyBar = new EnergyBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    /*  endbossEnergyBar = new EndbossEnergyBar(); */

    character = new Character();
    coins = new Coin();
    bottle = new Bottle();
    chicken = new Chicken();
    endboss = new Endboss();

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        /* this.gameMusic.play(); */
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
    }

    checkCollisions() {
        this.checkEnemyCollision();
        this.collideCoin();
        this.collideBottle();
    }

    checkEnemyCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy) && !enemy.isDead()) { //!enemy.isDead so 1 chicken can die 
                if (this.character.isStamping(enemy)) {
                    enemy.hit();
                    this.checkDeadEnemy(enemy);
                } else {
                    this.character.hit();
                    this.energyBar.energyAmount -= 1;
                    this.energyBar.setPercentage(this.energyBar.energyAmount);
                }
            }
        });
    }

    checkBrokenObjects(object) {
        if (object.isBroken == true) {
            setTimeout(() => {
                let i = this.character.throwableObjects.indexOf(object); //to determine which bottle
                this.character.throwableObjects.splice(i, 1);
            }, 125 * 6); //6 splash Animation pics
        }
    }

    collideCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.coinBar.coinAmount += 21;
                this.coinBar.setPercentage(this.coinBar.coinAmount);
                this.level.coins.splice(index, 1);
                /*  this.AUDIOS['coin_sound'].play(); */
            }
        });
    }

    collideBottle() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.level.bottles.splice(index, 1);
                this.bottleBar.bottleAmount++;
                this.bottleBar.setPercentage(this.bottleBar.bottleAmount);
                /* this.AUDIOS['collectBottle_sound'].play(); */
            }
        });
    }

    checkBottleCollision() {
        this.character.throwableObjects.forEach((object) => {
            this.bottleOnGround(object);
            this.bottleOnChicken(object);
            this.bottleOnEndboss(object);
            this.checkBrokenObjects(object);
        });
    }

    bottleOnGround(object) {
        this.level.enemies.forEach((enemy) => {
            if (!object.isColliding(enemy) && object.isLittleAboveGroundForSplashIntervallDelay() && !object.isBroken) {
                object.break();
            }
            if (!object.isColliding(enemy) && object.isLittleAboveGroundForGlassSoundDelay() && !object.isBroken) {
                object.glasssound();
            }
        });
    }

    bottleOnChicken(object) {
        this.level.enemies.forEach((enemy) => {
            if (object.isColliding(enemy) && !object.isBroken) {
                enemy.hit();
                this.checkDeadEnemy(enemy);
                object.break();
            }
        });
    }

    bottleOnEndboss(object) {
        this.level.endboss.forEach((endboss) => {
            if (object.isColliding(endboss) && !object.isBroken) {
                endboss.hit();
                object.break();
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

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); /* canvas gets cleared */
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0);
        this.addObjectsToMap(this.level.clouds); //has to be over statusbar&character to be behind it on canvas

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.enemies);
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
        /* this.addToMap(this.endbossEnergyBar); */
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
        mo.drawFrame(this.ctx);

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