class World { 
    level = level1;
    canvas; //game.js
    ctx;
    keyboard; //game.js
    camera_x = 0;
    assets;

    throwableObjects = [];

    energyBar = new EnergyBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();

    energyAmount = 100;
    coinAmount = 0;
    bottleAmount = 0;

    character = new Character();
    coins = new Coin();
    bottle = new Bottle();
    chicken = new Chicken();

    gameMusic = new Audio('audio/gameMusic.mp3');

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

    /**
     * Updates every 200ms 
     */
    run() {
        setInterval(() => {
            this.checkThrowObjects();
            this.checkCollisions();
        }, 20);
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.bottleAmount > 0 && this.keyboard.THROW_START > this.keyboard.THROW_END) {
            this.keyboard.THROW_END = new Date().getTime();
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100); //+100 bc it starts infront infront of pepe
            this.throwableObjects.push(bottle);
            this.bottleAmount -= 1;
            this.bottleBar.setPercentage(this.bottleAmount);
        }
    }

    checkCollisions() {
       this.collideEnemy();
       this.collideCoin();
       this.collideBottle(); 
       this.bottleHit();
    }

    bottleHit() {
        this.throwableObjects.forEach((ThrowableObject) => {
            this.bottleOnChicken(ThrowableObject);
        });
    }

    /**
     * 
     * @param {string} object - checkBottleCollisison()
     */
    bottleOnChicken(object) {
        this.level.enemies.forEach((chicken) => {
            if (chicken.isColliding(object)) {
                let positionChicken = this.level.enemies.indexOf(chicken);
                this.level.enemies[positionChicken].hit();
                object.bottleHits();
                this.level.enemies[positionChicken].state == 'dead';
            }
        });

    }

    collideEnemy() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
            }
        });
    }



    collideCoin() {
        this.level.coins.forEach((coin, index) => {
            if (this.character.isColliding(coin)) {
                this.coinAmount += 21;
                this.coinBar.setPercentage(this.coinAmount); 
                this.level.coins.splice(index, 1);
            }
        });
    }

    collideBottle() {
        this.level.bottles.forEach((bottle, index) => {
            if (this.character.isColliding(bottle)) {
                this.bottleAmount++;
                this.bottleBar.setPercentage(this.bottleAmount);
                this.level.bottles.splice(index, 1);
            }
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); /* canvas gets cleared */
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgroundObjects);
        this.ctx.translate(-this.camera_x, 0); 
        this.addObjectsToMap(this.level.clouds); //has to be over statusbar&character to be behind it on canvas

        this.ctx.translate(this.camera_x, 0); 

        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);
        this.addObjectsToMap(this.throwableObjects);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

         // --------- Space for fixed Objects ---------
        this.addToMap(this.energyBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
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