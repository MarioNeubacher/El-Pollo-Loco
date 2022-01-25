class Chicken extends MovableObject {
    y = 360;
    height = 60;
    width = 80;
    energy = 5;
    AUDIOS = ASSETS['AUDIOS'];
    hasPlayed = false;
    groundPos = 120;
    
    IMAGES = ASSETS['IMAGES'];

    constructor() {
        super(); //enables access to extended class
        this.loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES['chicken_walking']);
        this.loadImages(this.IMAGES['chicken_dead']);
        this.x = 200 + Math.random() * 2250; //math.random generates random number between 0 and 1 = range is 200 to 700
        this.speed = 0.15 + Math.random() * 0.5;
        this.animate();  
        this.applyGravity();
    }

    animate(){
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            if (this.energy > 0) {
                this.playAnimation(this.IMAGES['chicken_walking']);
            } else {
                this.playAnimation(this.IMAGES['chicken_dead']);  
                this.speed = 0;
                this.applyGravity();
                this.groundPos = 1000;
                if(!this.hasPlayed){
                    this.AUDIOS['chicken_sound'].play();
                    this.hasPlayed = true;
                }
            }
        }, 100);
    }
}