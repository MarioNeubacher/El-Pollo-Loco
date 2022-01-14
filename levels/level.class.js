class Level {
    level_end_x = 2200;

    enemies;
    coins;
    bottles;
    clouds;
    backgroundObjects;
    
    /**
     * Sets them as global variables
     * @param {Array} enemies - level1.js
     * @param {Array} coins - level1.js
     * @param {Array} bottles - level1.js
     * @param {Array} clouds - level1.js
     * @param {Array} backgroundObjects - level1.js
     */
    constructor(enemies, coins, bottles, clouds, backgroundObjects) { 
        this.enemies = enemies;
        this.coins = coins;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}