class Coin extends MovableObject {

    y = 100;
    x = 200 + Math.random() * 2000;

    constructor(){
        super(); //enables access to extended class
        this.loadImage('img/8.Coin/Moneda2.png'); 
    }
}