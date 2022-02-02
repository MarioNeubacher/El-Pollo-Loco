class Cloud extends CollidableObject {
    y = 0;
    height = 350;
    width = 800;
    world;

    IMAGES = ASSETS['IMAGES']['cloud'];

    constructor(x) {
        super(); //enables access to extended class
        this.loadImage(this.IMAGES);
        this.xInit = x;
        this.x = x;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);
    }
}