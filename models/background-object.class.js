class BackgroundObject extends CollidableObject {
    
    width = 720;
    height = 480;
    constructor(imagePath, x) {
        super(); //enables access to extended class
        this.loadImage(imagePath);
        this.x = x;
        this.y = 480 - this.height; 
    }
}