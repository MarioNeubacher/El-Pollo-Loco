class Level {
    level_end_x = 2200;

    enemies;
    endboss;
    coins;
    bottles;
    clouds;
    backgroundObjects;
    
    //var from world.js
    constructor(enemies, endboss, coins, bottles, clouds, backgroundObjects) { 
        this.enemies = enemies;
        this.endboss = endboss;
        this.coins = coins;
        this.bottles = bottles;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}