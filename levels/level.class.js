class Level {
    level_end_x = 2200;

    enemies;
    coins;
    bottles;
    clouds;
    backgroundObjects;
    
    //var from world.js
    constructor(enemies, coins, bottles, clouds, backgroundObjects) { 
        this.enemies = enemies;
        this.coins = coins;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}