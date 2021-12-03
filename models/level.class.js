class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200;
    
    constructor(enemies, clouds, backgroundObjects) { //fils the global variables with data
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
    }
}