class EndbossIcon extends MovableObject {

    IMAGE_ENDBOSS = ASSETS['IMAGES']['endboss_icon'];

    constructor() {
        super(); //enables access to extended class
        this.loadImage(this.IMAGE_ENDBOSS);
        this.x = 410;
        this.y = 7.5;
        this.width = 50;
        this.height = 60;
    }
}