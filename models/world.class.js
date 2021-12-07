class World {
    character = new Character();
    level = level1;
    canvas; //game.js
    ctx;
    keyboard; //game.js
    camera_x = 0;
    statusBar = new StatusBar();
    coinBar = new CoinBar();
    coins = [new Coin()];
    bottleBar = new BottleBar();
    bottles = [new Bottle()];
    collectableObjects = new CollectableObject();
    throwableObjects = [];
    gameMusic = new Audio('audio/gameMusic.mp3');

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
        this.gameMusic.play();
    }

    setWorld() {
        this.character.world = this; //link "keyboard" to "world" 
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 200);
    }

    checkThrowObjects() {
        if (this.keyboard.D) {
            let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
            this.throwableObjects.push(bottle);
        }
    }

    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy)) {
                this.character.hit();
                this.statusBar.setPercentage(this.character.energy);
            }
            if (this.bottle.isColliding(bottle)) {
                this.collectableObjects.collectObject();
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
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.coins);
        this.addObjectsToMap(this.bottles);
        this.ctx.translate(-this.camera_x, 0);

        this.addToMap(this.statusBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);

        /* draw() fires as often as graphic card is able to = FPS */
        let self = this;
        requestAnimationFrame(function () {
            self.draw(); /* self bc "this" doesnt function here anymore */
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

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

    flipImage(mo) {
        this.ctx.save();
        this.ctx.translate(mo.width, 0);
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1;
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }
}