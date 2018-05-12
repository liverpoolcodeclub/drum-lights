let strip: neopixel.Strip = null

strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)

strip.setBrightness(255)

basic.showIcon(IconNames.Chessboard)

basic.forever(() => {
    strip.showColor(neopixel.rgb(255, 0, 0))
    basic.pause(500)
    strip.showColor(neopixel.rgb(255, 255, 0))
    basic.pause(500)
    strip.showColor(neopixel.rgb(0, 255, 0))
    basic.pause(500)
    strip.showColor(neopixel.rgb(0, 255, 255))
    basic.pause(500)
    strip.showColor(neopixel.rgb(0, 0, 255))
    basic.pause(500)
    strip.showColor(neopixel.rgb(255, 0, 255))
    basic.pause(500)
})
