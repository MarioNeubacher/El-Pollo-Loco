class DrawableObject {
    img;
    imageCache = {}; //has to be an object not an array
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;

    /**
     * First image unchangeable
     * @param {} path - relative path
     */ 
    loadImage(path) {
        this.img = new Image(); //"new Image()" is same as 'document.getElementById('image').innerHTML = <img src="">'
        this.img.src = path; //updates img variable
    }

     /**
     * Enables to change images 
     * @param {Array} arr - assets.js
     */
    loadImages(arr) { 
        arr.forEach((path) => {
            let img = new Image(); 
            img.src = path; 
            this.imageCache[path] = img; //updates img variable
        });
    }

    draw(ctx) {
        try {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height); 
        } catch(e) {
            console.error('Error, Image not found', this.img); 
        }
    }

    drawFrame(ctx) {
        if (this instanceof Character || this instanceof Endboss || this instanceof Chicken || this instanceof Bottle || this instanceof Coin || this instanceof ThrowableObject) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'transparent';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

   /*  drawInfo(ctx) {
        if (this instanceof Coin) {
            ctx.beginPath();
            ctx.font = "15px Arial";
            ctx.fillText(`${this.x}, ${this.y}`, this.x, this.y);
        }
    } */
}