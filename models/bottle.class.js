class Bottle extends MovableObject {

    IMAGES = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];

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