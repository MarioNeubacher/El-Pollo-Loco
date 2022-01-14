class Cloud extends MovableObject {
    y = 0;
    height = 350;
    width = 800;
    IMAGES_CLOUDS = [
        'img/5.Fondo/Capas/4.nubes/Completo.png'
    ];
    world;

    constructor(x) {
        super(); //enables access to extended class
        this.loadImage('img/5.Fondo/Capas/4.nubes/Completo.png');
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