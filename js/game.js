let canvas;
let world;

let keyboard = new Keyboard();

let soundMuted = false;
let musicMuted = false;

function init() {
    document.getElementById('id-game').classList.remove('d-none');
    document.getElementById('id-startScreen').classList.add('d-none');
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function setSound() {
    let element = document.getElementById('id-audioImg');

    if (soundMuted == true) {
        world.AUDIOS['stamp_sound'].volume = 1;
        world.AUDIOS['coin_sound'].volume = 1;
        world.AUDIOS['collectBottle_sound'].volume = 1;
        world.character.AUDIOS['move_sound'].volume = 1;
        world.character.AUDIOS['jump_sound'].object
        world.character.AUDIOS['dead_sound'].volume = 1;
        world.character.AUDIOS['hurt_sound'].volume = 1;
        world.endboss.AUDIOS['won_sound'].volume = 
        world.endboss.AUDIOS['endboss_sound'].volume = 1;
        for (let i = 0; i < world.character.throwableObjects.length; i++) {
            abbrev = world.character.throwableObjects[i].AUDIOS;
                abbrev['throw_sound'].volume = 1;
                abbrev['bottleOnGround_sound'].volume = 1;
                abbrev['glass_sound'].volume = 1;
        }
        for (let i = 0; i < level1.enemies.length; i++) {
            const element = level1.enemies[i].AUDIOS;
                element['chicken_sound'].volume = 1;
        }
        for (let i = 0; i < world.endboss.chickensLittle.length; i++) {
            const element = world.endboss.chickensLittle[i].AUDIOS;
                element['chickenLittle_sound'].volume = 1;
        }
        element.src = "img/sound.png";
        soundMuted = false;
    } else {
        world.AUDIOS['stamp_sound'].volume = 0;
        world.AUDIOS['coin_sound'].volume = 0;
        world.AUDIOS['collectBottle_sound'].volume = 0;
        world.character.AUDIOS['move_sound'].volume = 0;
        world.character.AUDIOS['jump_sound'].volume = 0;
        world.character.AUDIOS['dead_sound'].volume = 0;
        world.character.AUDIOS['hurt_sound'].volume = 0;
        world.endboss.AUDIOS['won_sound'].volume = 0;
        world.endboss.AUDIOS['endboss_sound'].volume = 0;
        for (let i = 0; i < world.character.throwableObjects.length; i++) {
            abbrev = world.character.throwableObjects[i].AUDIOS;
                abbrev['throw_sound'].volume = 0;
                abbrev['bottleOnGround_sound'].volume = 0;
                abbrev['glass_sound'].volume = 0;
        }
        for (let i = 0; i < level1.enemies.length; i++) {
            const element = level1.enemies[i].AUDIOS;
                element['chicken_sound'].volume = 0;
        }
        for (let i = 0; i < world.endboss.chickensLittle.length; i++) {
            const element = world.endboss.chickensLittle[i].AUDIOS;
                element['chickenLittle_sound'].volume = 0;
        }
        element.src = "img/nosound.png"
        soundMuted = true;
    }
}

function setMusic() {
    let element = document.getElementById("id-musicImg")

    if (musicMuted == true) {
        world.gameMusic.volume = 1;
        element.src = "img/music.png";
        musicMuted = false;
    } else {
        world.gameMusic.volume = 0;
        element.src = "img/mute-music.png";
        musicMuted = true;
    }
}

function fullscreen() {
    canvas.requestFullscreen();
}

window.addEventListener("keydown", (e) => { //arrow keys only triggered by onkeydown, not onkeypress
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }

    if (e.keyCode == 38) {
        keyboard.UP = true;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }

    if (e.keyCode == 68 && e.repeat == false) {
        if (keyboard.THROW_START < keyboard.THROW_END && !keyboard.D) {
            keyboard.THROW_START = new Date().getTime();
            keyboard.D = true;
        }
    }
});

window.addEventListener("keyup", (e) => { //arrow keys only triggered by onkeydown, not onkeypress
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }

    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }

    if (e.keyCode == 38) {
        keyboard.UP = false;
    }

    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }

    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }

    if (e.keyCode == 68) {
        keyboard.THROW_END = new Date().getTime();
        keyboard.D = false;
    }
});