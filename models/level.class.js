class Level {
    enemies;
    coins;
    bottles;
    clouds;
    backgroundObjects;
    level_end_x = 2200;
    
    constructor(enemies, coins, bottles, clouds, backgroundObjects) { //fils the global variables with data from the arrays in level1.js
        this.enemies = enemies;
        this.coins = coins;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}