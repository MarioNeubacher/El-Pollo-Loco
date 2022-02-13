const ASSETS = {
    AUDIOS: {
        chicken_sound: new Audio('audio/chicken.mp3'),
        coin_sound: new Audio('audio/coin.mp3'),
        collectBottle_sound: new Audio('audio/collectBottle.mp3'),
        bottleOnGround_sound: new Audio('audio/bottleOnGround.mp3'),
        dead_sound: new Audio('audio/dead.mp3'),
        won_sound: new Audio('audio/won.mp3'),
        glass_sound: new Audio('audio/glass.mp3'),
        hurt_sound: new Audio('audio/hurt.mp3'),
        jump_sound: new Audio('audio/jump.mp3'),
        move_sound: new Audio('audio/running.mp3'),
        stamp_sound: new Audio('audio/stamp.mp3'),
        chickenLittle_sound: new Audio('audio/peep.mp3'),
        endboss_sound: new Audio('audio/endboss.mp3'),
        throw_sound: new Audio('audio/throw.mp3')
    },
    MUSIC: {
        gameMusic: new Audio('audio/gameMusic.mp3'),
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
        ],
        cloud: [
            'img/5.Fondo/Capas/4.nubes/Completo.png'
        ],
        coins: [
            'img/8.Coin/Moneda1.png',
            'img/8.Coin/Moneda2.png'
        ],
        bottles: [
            'img/6.botella/2.Botella_enterrada1.png',
            'img/6.botella/2.Botella_enterrada2.png'
        ],
        chicken_walking: [
            'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
            'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
            'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
        ],
        chicken_dead: [
            'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'
        ],
        chicken_little_walking: [
            'img/3.Secuencias_Enemy_básico/Versión_pollito/1.Paso_derecho.png',
            'img/3.Secuencias_Enemy_básico/Versión_pollito/2.Centro.png',
            'img/3.Secuencias_Enemy_básico/Versión_pollito/3.Paso_izquierdo.png'
        ],
        chicken_little_dead: [
            'img/3.Secuencias_Enemy_básico/Versión_pollito/4.Muerte.png'
        ],
        bottle_throw: [
            'img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
            'img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
            'img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
            'img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
        ],
        bottle_splash: [
            'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
            'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
            'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
            'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
            'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
            'img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
        ],
        energy_bar: [
            'img/7.Marcadores/Barra/Marcador vida/Naranja/0_ .png',
            'img/7.Marcadores/Barra/Marcador vida/Naranja/20__1.png',
            'img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
            'img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
            'img/7.Marcadores/Barra/Marcador vida/verde/80_.png',
            'img/7.Marcadores/Barra/Marcador vida/verde/100_.png'
        ],
        coin_bar: [
            'img/7.Marcadores/Barra/Marcador moneda/Naranja/0_.png',
            'img/7.Marcadores/Barra/Marcador moneda/Naranja/20_ .png',
            'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
            'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
            'img/7.Marcadores/Barra/Marcador moneda/Verde/80_  copia 2.png',
            'img/7.Marcadores/Barra/Marcador moneda/Verde/100_ copia 2.png'
        ],
        bottle_bar: [
            'img/7.Marcadores/Barra/Marcador_botella/Naranja/0_.png',
            'img/7.Marcadores/Barra/Marcador_botella/Naranja/20_.png',
            'img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
            'img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
            'img/7.Marcadores/Barra/Marcador_botella/Verde/80_.png',
            'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.png'
        ],
        endboss_energy_bar: [
            'img/7.Marcadores/Marcadorvida_enemy/Naranja.png',
            'img/7.Marcadores/Marcadorvida_enemy/Azul.png',
            'img/7.Marcadores/Marcadorvida_enemy/Vede.png'
        ],
        endboss_icon: [
            'img/7.Marcadores/Icono/Mesa de trabajo 130.png'
        ],
        endboss_aggressive: [
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
        ],
        endboss_attack: [
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png'
        ],
        endboss_hurt: [
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
        ],
        endboss_dead: [
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
            'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png'
        ],
        game_over: [
            'img/9.Intro _ Outro Image/_Game over_ screen/3.Game over.png',
            'img/9.Intro _ Outro Image/_Game over_ screen/1.you lost.png'
        ]
    }
}