radio.setFrequencyBand(0)
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(1)
    basic.showLeds(`
        # # # . .
        . # . . #
        . # . # #
        . . . . #
        . . . . #
        `)
    basic.pause(500)
    radio.sendString("Z")
    basic.showLeds(`
        # # # . .
        . # . # .
        . # # . #
        . . # # #
        . . # . #
        `)
    basic.pause(500)
})
