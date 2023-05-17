let Número = 0
basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P2, 1)
    music.playTone(494, music.beat(BeatFraction.Whole))
    basic.pause(10000)
    Número = 9
    for (let index = 0; index < 9; index++) {
        basic.showNumber(Número)
        basic.pause(200)
        Número += -1
    }
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P2, 0)
    pins.digitalWritePin(DigitalPin.P1, 1)
    Número = 2
    for (let index = 0; index < 2; index++) {
        basic.showNumber(Número)
        basic.pause(200)
        Número += -1
    }
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P4, 1)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(20000)
    Número = 9
    for (let index = 0; index < 9; index++) {
        basic.showNumber(Número)
        basic.pause(200)
        Número += -1
    }
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P4, 0)
})
