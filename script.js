// Ik heb voor mijn project een tutorial gebruikt van Chris Courses van een sidescroller game
// YT: https://www.youtube.com/watch?v=4q2vvZn5aoo

// Verder heb ik een korte tutorial gebruikt om te leren hoe ik fotos kan importeren want de
// manier hoe Chris het deed lukte bij mij niet. Hij gebruikte import
// YT: https://www.youtube.com/watch?v=STdbrEojilM


var canvas = document.querySelector('canvas');

var c = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

// De zwaartekracht blijft hetzelfde. Hoe hoger de waarde, hoe sneller de speler zou vallen

const gravity = 0.5;

var ground = new Image();
ground.src = 'img/Platform.png'

var tallground = new Image();
tallground.src = 'img/TallPlatform.png'

var wideground = new Image();
wideground.src = 'img/WidePlatform.png'

var movingplatform = new Image();
movingplatform.src = 'img/MovingPlatform.png'

var sky = new Image();
sky.src = 'img/Sky.png'

var clouds = new Image();
clouds.src = 'img/Clouds.png'

var mushroom = new Image();
mushroom.src = 'img/MushroomPlatform.png'

var brick = new Image();
brick.src = 'img/Brick.png'

var pipe = new Image();
pipe.src = 'img/WarpPipe.png'

var pipeupsidedown = new Image();
pipeupsidedown.src = 'img/WarpPipeUpsidedown.png'

var pipeside = new Image();
pipeside.src = 'img/WarpPipeSide.png'

var signintro = new Image();
signintro.src = 'img/SignIntro.png'

var signlevel1 = new Image();
signlevel1.src = 'img/SignLevel1.png'

var signlevel2 = new Image();
signlevel2.src = 'img/SignLevel2.png'

var goomba = new Image();
goomba.src = 'img/Goomba.png'

var bullet = new Image();
bullet.src = 'img/BulletBill.png'

var plant = new Image();
plant.src = 'img/Plant.png'

var undergroundgoomba = new Image();
undergroundgoomba.src = 'img/UndergroundGoomba.png'

var undergroundplatform = new Image();
undergroundplatform.src = 'img/UndergroundPlatform.png'

var undergroundbackground = new Image();
undergroundbackground.src = 'img/UndergroundBackground.png'

var undergroundbricks = new Image();
undergroundbricks.src = 'img/UndergroundBricks.png'

var flagpole = new Image();
flagpole.src = 'img/Flagpole.png'

var flag = new Image();
flag.src = 'img/Flag.png'

var castle = new Image();
castle.src = 'img/Castle.png'

var castleforeground = new Image();
castleforeground.src = 'img/CastleForeground.png'

var MarioStandRight = new Image();
MarioStandRight.src = 'img/MarioStandRight.png'

var MarioStandLeft = new Image();
MarioStandLeft.src = 'img/MarioStandLeft.png'


// Alle classes! De meeste classes zijn hetzelfde behalve Player, Flag, Goomba en een paar anderen
// De constructor zorgt ervoor dat je dingen kunt "maken" in een class
// Ik heb voor elke afbeelding in mijn project een aparte variable en een aparte class

// draw() is een naam die ik zelf erin heb gezet, deze kan ik later met animate()
//  op het scherm zetten
// update() gebruik ik als er unieke bewegingen in zitten (zoals zwaartekracht)

class Player {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.width = 45
        this.height = 60.4
        this.speed = 7
        this.sprites = {
            right: MarioStandRight,
            left: MarioStandLeft,
        }

        this.currentSprite = this.sprites.right
    }

    draw() {
        c.drawImage(
            this.currentSprite,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y <=
            canvas.height)
            this.velocity.y += gravity //gravity zorgt ervoor dat de speler steeds sneller valt
    }
}

class Goomba {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: -0.2,
            y: 0,
        }
        this.width = goomba.width
        this.height = goomba.height

    }

    draw() {
        c.drawImage(
            goomba,
            this.position.x,
            this.position.y,
        )
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

class UndergroundGoomba {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: -0.2,
            y: 0,
        }
        this.width = undergroundgoomba.width
        this.height = undergroundgoomba.height

    }

    draw() {
        c.drawImage(
            undergroundgoomba,
            this.position.x,
            this.position.y,
        )
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

class Bullet {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: -2,
            y: 0,
        }
        this.width = bullet.width
        this.height = bullet.height

    }

    draw() {
        c.drawImage(
            bullet,
            this.position.x,
            this.position.y,
        )
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
    }
}

class Plant {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.width = plant.width
        this.height = plant.height
    }

    draw() {
        c.drawImage(
            plant,
            this.position.x,
            this.position.y,
        )
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.y > 400) {
            this.velocity.y = -1
        } else if (this.position.y < 300) {
            this.velocity.y = 1
        }
    }
}

class Moving {
    constructor({
        x,
        y,
    }) {
        this.position = {
            x,
            y
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.width = movingplatform.width
        this.height = movingplatform.height
    }

    draw() {
        c.drawImage(
            movingplatform,
            this.position.x,
            this.position.y,
        )
    }

    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        if (this.position.x + scrollOffset > 2500) {
            this.velocity.x = -3
        } else if (this.position.x + scrollOffset < 1501) {
            this.velocity.x = 3
        }
    }
}



class Platform {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = ground.width
        this.height = ground.height
    }

    draw() {
        c.drawImage(ground, this.position.x, this.position.y)
    }
}

class TallPlatform {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = tallground.width
        this.height = tallground.height
    }

    draw() {
        c.drawImage(tallground, this.position.x, this.position.y)
    }
}

class WidePlatform {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = wideground.width
        this.height = wideground.height
    }
    draw() {
        c.drawImage(wideground, this.position.x, this.position.y)
    }
}


class MushroomPlatform {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = mushroom.width
        this.height = mushroom.height
    }

    draw() {
        c.drawImage(mushroom, this.position.x, this.position.y)
    }
}

class BrickBlock {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = brick.width
        this.height = brick.height
    }

    draw() {
        c.drawImage(brick, this.position.x, this.position.y)
    }
}

class UndergroundBricks {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = undergroundbricks.width
        this.height = brick.height
    }

    draw() {
        c.drawImage(undergroundbricks, this.position.x, this.position.y)
    }
}

class UndergroundBackground {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = undergroundbackground.width
        this.height = undergroundbackground.height
    }

    draw() {
        c.drawImage(undergroundbackground, this.position.x, this.position.y)
    }
}

class UndergroundPlatform {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = undergroundplatform.width
        this.height = undergroundplatform.height
    }

    draw() {
        c.drawImage(undergroundplatform, this.position.x, this.position.y)
    }
}

class WarpPipe {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = pipe.width
        this.height = pipe.height
    }

    draw() {
        c.drawImage(pipe, this.position.x, this.position.y)
    }
}

class WarpPipeUpsidedown {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = pipeupsidedown.width
        this.height = pipeupsidedown.height
    }

    draw() {
        c.drawImage(pipeupsidedown, this.position.x, this.position.y)
    }
}

class SignIntro {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = signintro.width / 2
        this.height = signintro.height / 2
    }

    draw() {
        c.drawImage(signintro, this.position.x, this.position.y)
    }
}

class SignLevel1 {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = signlevel1.width
        this.height = signlevel1.height
    }

    draw() {
        c.drawImage(signlevel1, this.position.x, this.position.y)
    }
}

class SignLevel2 {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = signlevel2.width
        this.height = signlevel2.height
    }

    draw() {
        c.drawImage(signlevel2, this.position.x, this.position.y)
    }
}

class Flagpole {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = flagpole.width
        this.height = flagpole.height
    }

    draw() {
        c.drawImage(flagpole, this.position.x, this.position.y)
    }
}

class Flag {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.velocity = {
            x: 0,
            y: 0,
        }
        this.width = flag.width
        this.height = flag.height
    }

    draw() {
        c.drawImage(flag, this.position.x, this.position.y)
    }
    update() {
        this.draw()
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y <=
            canvas.height - 111 && this.position.x < player.position.x + player.width)
            this.velocity.y = 3, console.log('You win!')
        else this.velocity.y = 0
    }
}

class Castle {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = castle.width
        this.height = castle.height
    }

    draw() {
        c.drawImage(castle, this.position.x, this.position.y)
    }
}

class Castleforeground {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = castleforeground.width
        this.height = castleforeground.height
    }

    draw() {
        c.drawImage(castleforeground, this.position.x, this.position.y)
    }
}

class WarpPipeSide {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = pipeside.width
        this.height = pipeside.height
    }

    draw() {
        c.drawImage(pipeside, this.position.x, this.position.y)
    }
}

class Sky {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = sky.width
        this.height = sky.height
    }

    draw() {
        c.drawImage(sky, this.position.x, this.position.y)
    }
}

class Clouds {
    constructor({
        x,
        y
    }) {
        this.position = {
            x,
            y,
        }
        this.width = clouds.width
        this.height = clouds.height
    }

    draw() {
        c.drawImage(clouds, this.position.x, this.position.y)
    }
}


// Deze vars zijn leeg want ze worden later ingevuld bij de functie 'init', deze functie wordt aan het begin
// van het spel geladen en wanneer het spel reset wordt (bv. waneer de speler in een gat valt)

// De keys zijn const want die veranderen niet. Je gaat niet ineens andere toetsen in moeten drukken

var obstacles = []

var background = []

var foreground = []

var generic = []

var player = []

var danger = []

var enemies = []

var finish = []

var platforms = []

var movingplatforms = []

const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

var scrollOffset = 0



function init() {
    background = [
        new Sky({
            x: 0,
            y: 0
        }),
        new Clouds({
            x: 0,
            y: -100
        })
    ]

    foreground = [
        new Castleforeground({
            x: 3400 + castle.width - castleforeground.width,
            y: 221.51
        }),
    ]

    player = new Player({
        x: 100,
        y: 300
    })

    enemies = [
        new Goomba({
            x: 500,
            y: 422
        }),
        new Goomba({
            x: 1400,
            y: 422
        }),
        new Goomba({
            x: 2700,
            y: 422
        }),
        new Bullet({
            x: 3500,
            y: 300
        }),
    ]

    danger = []

    movingplatforms = []

    platforms = [
        new MushroomPlatform({
            x: 700,
            y: 350
        }),
        new TallPlatform({
            x: ground.width + ground.width + 200 - tallground.width,
            y: 350
        }),
        new Platform({
            x: -30,
            y: 465
        }),
        new Platform({
            x: ground.width + 60,
            y: 465
        }),
        new WidePlatform({
            x: ground.width + ground.width + 500,
            y: 465
        }),
    ]

    obstacles = [
        new BrickBlock({
            x: 300,
            y: 250
        }),
        new BrickBlock({
            x: 299 + brick.height,
            y: 250
        }),
        new WarpPipe({
            x: 2700,
            y: 350
        }),
    ]

    generic = [
        new SignIntro({
            x: 500,
            y: -400
        }),
        new SignLevel1({
            x: 1000,
            y: -400
        }),
        new Flagpole({
            x: 3000,
            y: 100
        }),
        new Castle({
            x: 3400,
            y: 33
        }),
    ]

    finish = new Flag({
        x: 3024,
        y: 100
    })



    scrollOffset = 0
}

function init2() {
    background = [
        new UndergroundBackground({
            x: 0,
            y: 0
        }),
    ]

    foreground = [
        new WarpPipeSide({
            x: 3700,
            y: 390
        }),
        new WarpPipeUpsidedown({
            x: 100,
            y: 0
        }),
    ]

    player = new Player({
        x: 110,
        y: 0
    })

    enemies = [
        new UndergroundGoomba({
            x: 501,
            y: 422
        }),
        new Bullet({
            x: 1600,
            y: 320
        }),
        new Bullet({
            x: 1700,
            y: 220
        }),
        new Bullet({
            x: 3000,
            y: 320
        }),
        new Bullet({
            x: 3000,
            y: 330 + bullet.height
        }),
        new Bullet({
            x: 3000,
            y: 340 + bullet.height + bullet.height
        }),
        new Bullet({
            x: 3500,
            y: 200
        }),
        new Bullet({
            x: 3500,
            y: 210 + bullet.height
        }),
        new Bullet({
            x: 3500,
            y: 220 + bullet.height + bullet.height
        }),
        new Bullet({
            x: 4000,
            y: 320
        }),
        new Bullet({
            x: 4000,
            y: 330 + bullet.height
        }),
        new Bullet({
            x: 4000,
            y: 340 + bullet.height + bullet.height
        }),

    ]

    danger = [
        new Plant({
            x: 915,
            y: 422
        }),
        new Plant({
            x: 3015,
            y: 422
        }),
        new Plant({
            x: 3115,
            y: 452
        }),
        new Plant({
            x: 3215,
            y: 482
        }),
        new Plant({
            x: 3315,
            y: 512
        }),
        new Plant({
            x: 3415,
            y: 542
        }),
    ]

    movingplatforms = [
        new Moving({
            x: 2501,
            y: 400
        }),
    ]

    platforms = [
        new UndergroundPlatform({
            x: -1000,
            y: 465
        }),
        new MushroomPlatform({
            x: 2600,
            y: 465
        }),
        new MushroomPlatform({
            x: 2730,
            y: 465
        }),
        new MushroomPlatform({
            x: 2860,
            y: 465
        }),
        new UndergroundPlatform({
            x: 3500,
            y: 465
        }),
    ]

    obstacles = [

        new UndergroundBricks({
            x: -690,
            y: 50
        }),
        new UndergroundBricks({
            x: 180,
            y: 50
        }),
        new WarpPipe({
            x: 900,
            y: 360
        }),
        new WarpPipe({
            x: 3000,
            y: 360
        }),
        new WarpPipe({
            x: 3100,
            y: 360
        }),
        new WarpPipe({
            x: 3200,
            y: 360
        }),
        new WarpPipe({
            x: 3300,
            y: 360
        }),
        new WarpPipe({
            x: 3400,
            y: 360
        }),
    ]

    generic = [
        new SignLevel2({
            x: 500,
            y: -350
        }),
    ]

    finish = new Flag({
        x: 4000,
        y: -300
    })



    scrollOffset = 0
}


//Op canvas zetten, de update functies hebben hun eigen bewegingen in een class zitten
// zoals de speler die beinvloed wordt door zwaartekracht en de vlag die naar beneden gaat.
function animate() {
    requestAnimationFrame(animate)
    c.fillStyle = 'White',
    c.fillRect(0, 0, canvas.width, canvas.height)

    background.forEach((background) => {
        background.draw()
    })
    danger.forEach((danger) => {
        danger.update()
    })
    obstacles.forEach((obstacles) => {
        obstacles.draw()
    })
    generic.forEach((generic) => {
        generic.draw()
    })
    platforms.forEach((platform) => {
        platform.draw()
    })
    enemies.forEach((enemies) => {
        enemies.update()
    })
    movingplatforms.forEach((movingplatforms) => {
        movingplatforms.update()
    })
    finish.update()
    player.update()
    foreground.forEach((foreground) => {
        foreground.draw()
    })



    // Speler besturen (links en rechts)
    // Rechts
    if (keys.right.pressed && player.position.x < 500 ||
        (keys.right.pressed && scrollOffset === 2758)) {
        player.velocity.x = player.speed
        // Links
    } else if (
        (keys.left.pressed && player.position.x > 100) ||
        (keys.left.pressed && scrollOffset === 0 &&
            player.position.x > 0)
    ) {
        player.velocity.x = -player.speed
    } else {
        player.velocity.x = 0

        //Platforms en achtergronden mee laten gaan
        if (keys.right.pressed) {
            scrollOffset += player.speed
            platforms.forEach((platform) => {
                platform.position.x -= player.speed
            })
            obstacles.forEach((obstacles) => {
                obstacles.position.x -= player.speed
            })
            finish.position.x -= player.speed
            generic.forEach((generic) => {
                generic.position.x -= player.speed
            })
            enemies.forEach((enemies) => {
                enemies.position.x -= player.speed
            })
            danger.forEach((danger) => {
                danger.position.x -= player.speed
            })
            movingplatforms.forEach((movingplatforms) => {
                movingplatforms.position.x -= player.speed
            })
            background.forEach((background) => {
                background.position.x -= player.speed * 0.66
            })
            foreground.forEach((foreground) => {
                foreground.position.x -= player.speed
            })
        } else if (keys.left.pressed && scrollOffset > 0 &&
            player.position.x) {
            scrollOffset -= player.speed
            platforms.forEach((platform) => {
                platform.position.x += player.speed
            })
            obstacles.forEach((obstacles) => {
                obstacles.position.x += player.speed
            })
            finish.position.x += player.speed
            generic.forEach((generic) => {
                generic.position.x += player.speed
            })
            enemies.forEach((enemies) => {
                enemies.position.x += player.speed
            })
            danger.forEach((danger) => {
                danger.position.x += player.speed
            })
            movingplatforms.forEach((movingplatforms) => {
                movingplatforms.position.x += player.speed
            })
            background.forEach((background) => {
                background.position.x += player.speed * 0.66
            })
            foreground.forEach((foreground) => {
                foreground.position.x += player.speed
            })
        }
    }

    // Platform collision (alleen de bovenkant)
    platforms.forEach((platform) => {
        if (player.position.y + player.height <=
            platform.position.y &&
            player.position.y + player.height + player.velocity.y >=
            platform.position.y &&
            player.position.x + player.width >=
            platform.position.x &&
            player.position.x <=
            platform.position.x + platform.width) {
            player.velocity.y = 0
        }
    })

    // Platform collision (de bewegende) (alleen de bovenkant)
    movingplatforms.forEach((movingplatforms) => {
        if (player.position.y + player.height <=
            movingplatforms.position.y &&
            player.position.y + player.height + player.velocity.y >=
            movingplatforms.position.y &&
            player.position.x + player.width >=
            movingplatforms.position.x &&
            player.position.x <=
            movingplatforms.position.x + movingplatforms.width) {
            player.velocity.y = 0
        }
    })

    // Obstakel collision
    obstacles.forEach((obstacles) => {
        // Obstakel collision bovenkant
        if (player.position.y + player.height <=
            obstacles.position.y &&
            player.position.y + player.height + player.velocity.y >=
            obstacles.position.y &&
            player.position.x + player.width >=
            obstacles.position.x &&
            player.position.x <=
            obstacles.position.x + obstacles.width) {
            player.velocity.y = 0
        }

        // Obstakel collision linkerkant
        if (player.position.x + player.width <=
            obstacles.position.x &&
            player.position.x + player.width + player.velocity.x >=
            obstacles.position.x &&
            player.position.y + player.height >=
            obstacles.position.y &&
            player.position.y <=
            obstacles.position.y + obstacles.height
        ) {
            player.velocity.x = 0
        }

        // Obstakel collision rechterkant
        if (player.position.x >= obstacles.position.x + obstacles.width &&
            player.position.x + player.velocity.x <=
            obstacles.position.x + obstacles.width &&
            player.position.y + player.height >=
            obstacles.position.y &&
            player.position.y <=
            obstacles.position.y + obstacles.height
        ) {
            player.velocity.x = 0
        }

        // Obstakel collision onderkant
        if (player.position.y >= obstacles.position.y + obstacles.height &&
            player.position.y + player.velocity.y <=
            obstacles.position.y + obstacles.height &&
            player.position.x + player.width >=
            obstacles.position.x &&
            player.position.x <=
            obstacles.position.x + obstacles.width
        ) {
            player.velocity.y = 0
        }
    })

    // Vijanden
    enemies.forEach((enemies) => {
        // Bovenop vijand springen > vijand weg en speler gaat omhoog
        if (player.position.y + player.height <=
            enemies.position.y &&
            player.position.y + player.height + player.velocity.y >=
            enemies.position.y &&
            player.position.x + player.width >=
            enemies.position.x &&
            player.position.x <=
            enemies.position.x + enemies.width) {
            enemies.position.y = 2000, player.velocity.y = -15
        }
        // Goomba linkerkant aanraken > Game over
        if (player.position.x + player.width <=
            enemies.position.x &&
            player.position.x + player.width + player.velocity.x - enemies.velocity.x >=
            enemies.position.x &&
            player.position.y + player.height >=
            enemies.position.y &&
            player.position.y <=
            enemies.position.y + enemies.height
        ) {
            {
                init(), console.log("You died.. idiot.")
            }
        }

        // Goomba rechterkant aanraken > Game over
        if (player.position.x >= enemies.position.x + enemies.width &&
            player.position.x + player.velocity.x <=
            enemies.position.x + enemies.width &&
            player.position.y + player.height >=
            enemies.position.y &&
            player.position.y <=
            enemies.position.y + enemies.height
        ) {
            {
                init(), console.log("You died.. idiot.")
            }
        }
    })




    // Als je in een gat valt laad de init() en reset het spel
    if (player.position.y > canvas.height + 200) {
        init(), console.log("You died.. idiot.")
    }

    // Als je voorbij het kasteel bent laadt de volgende init() en begint level 2
    if (player.position.x > 1030) {
        init2()
    }


    danger.forEach((danger) => {
        // Plant collision bovenkant
        if (player.position.y + player.height <=
            danger.position.y &&
            player.position.y + player.height + player.velocity.y >=
            danger.position.y &&
            player.position.x + player.width >=
            danger.position.x &&
            player.position.x <=
            danger.position.x + danger.width
        ) {
            init(), console.log("You died.. idiot.")
        }

        // Plant collision linkerkant
        if (player.position.x + player.width <=
            danger.position.x &&
            player.position.x + player.width + player.velocity.x >=
            danger.position.x &&
            player.position.y + player.height >=
            danger.position.y &&
            player.position.y <=
            danger.position.y + danger.height
        ) {
            init(), console.log("You died.. idiot.")
        }

        // Plant collision rechterkant
        if (player.position.x >= danger.position.x + danger.width &&
            player.position.x + player.velocity.x <=
            danger.position.x + danger.width &&
            player.position.y + player.height >=
            danger.position.y &&
            player.position.y <=
            danger.position.y + danger.height
        ) {
            init(), console.log("You died.. idiot.")
        }

    })
}

// Game Over wanneer je plant aanraakt


init()
animate()


//Hotkeys (A, S, D, W)
addEventListener('keydown', ({
    keyCode
}) => {
    switch (keyCode) {
        case 65:
            keys.left.pressed = true
            player.currentSprite = player.sprites.left
            break

        case 83:
            break

        case 68:
            keys.right.pressed = true
            player.currentSprite = player.sprites.right
            break

        case 87:
            if (player.velocity.y === 0) {
                player.velocity.y -= 15
            }
            break
    }
})

addEventListener('keyup', ({
    keyCode
}) => {
    switch (keyCode) {
        case 65:
            keys.left.pressed = false
            break

        case 83:

            break

        case 68:
            keys.right.pressed = false
            break

        case 87:

            break
    }
})