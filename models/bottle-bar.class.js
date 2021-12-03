class BottleBar extends DrawableObject {
    IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES[0]); //necessary to access the parent functions
        this.x = 420;
        this.y = 5;
        this.width = 200;
        this.height = 60;
    }
}