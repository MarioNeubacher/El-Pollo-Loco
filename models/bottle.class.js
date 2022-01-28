class Bottle extends MovableObject {

    offsetRight = 20;
    offsetLeft = 20;
    offsetTop = 20;
    offsetBottom = 20;

    IMAGES = ASSETS['IMAGES']['bottles'];

    constructor() {
        super(); //enables access to extended class
        let position = Math.random() * 1;
        let positionRounded = Math.round(position);
        this.loadImage(this.IMAGES[positionRounded]);
        this.y = 325;
        this.x = 200 + Math.random() * 2000;
        this.height = 100;
        this.width = 100;
    }

    
}