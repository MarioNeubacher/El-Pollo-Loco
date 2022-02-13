class EnergyBar extends DrawableObject {

    energyAmount = 25;

    IMAGES = ASSETS['IMAGES']['energy_bar'];

    constructor() {
        super(); //enables access to extended class
        this.loadImages(this.IMAGES);
        this.x = 10;
        this.y = 0;
        this.width = 200;
        this.height = 50;
        this.setPercentage(25);
    }

    /**
     * 
     * @param {string} percentage - world.class.js 
     */
    setPercentage(percentage) {
        this.percentage = percentage; //set it as global variable
        let path = this.IMAGES[this.resolveImagesIndex()];
        this.img = this.imageCache[path]; //updates img variable in drawableObjects 
    }

    resolveImagesIndex() {
        if (this.percentage == 25) {
            return 5;
        } else if (this.percentage == 20) {
            return 4;
        } else if (this.percentage == 15) {
            return 3;
        } else if (this.percentage == 10) {
            return 2;
        } else if (this.percentage == 5) {
            return 1;
        } else {
            return 0;
        }
    }
}