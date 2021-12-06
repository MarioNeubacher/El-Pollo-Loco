class Coin extends CollectableObject{

    y = 100;
    x = 200 + Math.random() * 2200;

    constructor(){
        super();
        this.loadImage('img/8.Coin/Moneda2.png'); 
    }
}