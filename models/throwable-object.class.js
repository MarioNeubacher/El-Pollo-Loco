class ThrowableObject extends MovableObject {

    constructor (x, y) {
        super().loadImage('img/7.Marcadores/Icono/Botella.png'); //super() only once, after that use this
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw() {
        this.speedY = 30;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;   
        }, 25);
    }
}