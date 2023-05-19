let Número = 0
function P4P5P6 (_0o1: number) {
    pins.digitalWritePin(DigitalPin.P4, _0o1)
    pins.digitalWritePin(DigitalPin.P5, _0o1)
    pins.digitalWritePin(DigitalPin.P6, _0o1)
    return
}
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
    P4P5P6(1)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.pause(20000)
    Número = 9
    for (let index = 0; index < 9; index++) {
        basic.showNumber(Número)
        basic.pause(200)
        Número += -1
    }
    basic.clearScreen()
    P4P5P6(0)
})
