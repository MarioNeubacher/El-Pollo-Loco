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
    let element = document.getElementById("id-audioImg")
    
    if (soundMuted) {
        soundMuted = false;
        element.src = "img/sound.png";
        world.character.walking_sound.volume=1;
    } else {
        soundMuted = true;
        element.src = "img/nosound.png"
        world.character.walking_sound.volume=0;
    }
}

function setMusic() {
    let element = document.getElementById("id-musicImg")
    
    if (musicMuted) {
        musicMuted = false;
        element.src = "img/music.png";
        world.gameMusic.volume=1;
    } else {
        musicMuted = true;
        element.src = "img/mute-music.png"
        world.gameMusic.volume=0;
    }
}

function fullscreen() {
    canvas.requestFullscreen();
}

window.addEventListener("keydown", (e) => { //arrow keys only triggered by onkeydown, not onkeypress
    console.log(e.keyCode);
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

    if (e.keyCode == 68) {
        keyboard.D = true;
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
        keyboard.D = false;
    }
});