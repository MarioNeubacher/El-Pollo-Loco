class EndbossEnergyBar extends DrawableObject {

    energyAmount = 5;

    IMAGES = ASSETS['IMAGES']['energy_bar'];

    constructor() {
        super(); //enables access to extended class
        this.loadImages(this.IMAGES);
        this.x = 415;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setPercentage(5);
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
        if (this.percentage == 5) {
            return 5;
        } else if (this.percentage == 4) {
            return 4;
        } else if (this.percentage == 3) {
            return 3;
        } else if (this.percentage == 2) {
            return 2;
        } else if (this.percentage == 1) {
            return 1;
        } else {
            return 0;
        }
    }
}