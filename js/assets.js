const ASSETS = {
    AUDIOS: {
        coin_sound: new Audio('audio/coin.mp3'),
        move_sound: new Audio('audio/running.mp3'),
        jump_sound: new Audio('audio/jump.mp3'),
        hurt_sound: new Audio('audio/hurt.mp3'),
        dead_sound: new Audio('audio/dead.mp3'),
        collectBottle_sound: new Audio('audio/collectBottle.mp3'),
        glass_sound: new Audio('audio/glass.mp3'),
        throw_sound: new Audio('audio/throw.mp3')
    },

    IMAGES: {
        walking: [
            'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
        ],
        jumping: [
            'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'
        ],
        idle: [
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-1.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-2.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-3.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-4.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-5.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-6.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-7.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-8.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-9.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/IDLE/I-10.png'
        ],
        longIdle: [
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-11.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-12.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-13.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-14.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-15.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-16.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-17.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-18.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-19.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/1.IDLE/LONG_IDLE/I-20.png'
        ],
        dead: [
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
        ],
        hit: [
            'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
            'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
        ]
    },

    IMAGES_ENERGY_BAR: [
        'img/7.Marcadores/Barra/Marcador vida/Naranja/0_ .png',
        'img/7.Marcadores/Barra/Marcador vida/Naranja/20__1.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
        'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
    ],
    IMAGES_COIN_BAR: [
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Naranja/20_ .png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/80_  copia 2.png',
        'img/7.Marcadores/Barra/Marcador moneda/Verde/100_ copia 2.png'
    ],
    IMAGES_BOTTLE_BAR: [
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Naranja/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.png'
    ]
}