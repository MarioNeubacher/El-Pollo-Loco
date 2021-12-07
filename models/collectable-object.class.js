class CollectableObject extends DrawableObject {

    coin_sound = new Audio('audio/coin.mp3');
    bottle_sound = new Audio('audio/bottle.mp3');

    /**
     * This function checks if this is instance of Coin or Bottle
     */
    collectObject() {
        if (this instanceof Coin) {
            this.collectCoin();
        } else if (this instanceof Bottle) {
            this.collectBottle();
        }
    }

    /**
     * Collect the coins
     */
     collectCoin() {
        this.playAudio(this.coin_sound);
        world.coinBar.push(this);
        this.removeObjectFromMap(world.coins);
    }

    /**
     * Collect the bottles
     */
    collectBottle() {
        this.playAudio(this.bottle_sound);
        world.bottleBar.push(this);
        this.removeObjectFromMap(world.bottles);
    }

    /**
     * This function removes the collected object from the map
     * 
     * @param {Array.<Object>} co - This is the array from which the collectable object gets removed
     */
    removeObjectFromMap(co) {
        let index = co.indexOf(this);
        co.splice(index, 1);
    }
}