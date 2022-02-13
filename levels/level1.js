const level1 = new Level(
    [
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken(),
        new Chicken()
    ],
    [
        new Endboss(2500, 60),
    ],
    [
        new Coin(400, 300),
        new Coin(450, 250),
        new Coin(500, 200),
        new Coin(550, 150),
        new Coin(600, 200),
        new Coin(650, 250),
        new Coin(700, 300),
        new Coin(1850, 300),
        new Coin(1900, 250),
        new Coin(1950, 200),
        new Coin(2000, 150),
        new Coin(2050, 200),
        new Coin(2100, 250),
        new Coin(2150, 300),
        new Coin(3850, 400),
        new Coin(3900, 250),
        new Coin(3950, 200),
        new Coin(4000, 150),
        new Coin(4050, 200),
        new Coin(4100, 250),
        new Coin(4150, 300),
    ],
    [
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle(),
        new Bottle()
    ],
        createClouds(100), //"," necessary otherwise console doesnt allow
    [
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', -719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),
        new BackgroundObject('img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
        new BackgroundObject('img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3)
    ]
);

/**
* Creates as much clouds as amount and gives as array back
* @param {number} amount - how much clouds will be created
* @returns - the array "clouds"
*/
function createClouds(amount) {
    let clouds = [];
    for (let i = 0; i < amount; i++) {
        clouds.push(new Cloud(800 * i)); //new picture at x = 800 so it looks even
    }

    return clouds;
}