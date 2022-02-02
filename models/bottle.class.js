class Bottle extends CollidableObject {

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