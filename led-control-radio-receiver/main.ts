let index = 0
let increment = 0
let strip: neopixel.Strip = null
let threshold = 0
let minThreshold = 0
let maxThreshold = 0
let totalRowsToLight = 0
let totalLedsToLight = 0
let group = 0

function displayThreshold()  {
    // We multiply threshold by -1 to make the maths easier.
    totalLedsToLight = (((threshold * -1) - maxThreshold) / increment ) + 1
    totalRowsToLight = (totalLedsToLight - totalLedsToLight % 5) / 5
    basic.clearScreen()
    // Draw the full rows (if there are any).
    for (let index2 = 0; index2 <= totalRowsToLight - 1; index2++) {
        led.plot(0, index2)
        led.plot(1, index2)
        led.plot(2, index2)
        led.plot(3, index2)
        led.plot(4, index2)
    }
    // Draw the final, partial row (if there is one).
    for (let index3 = 0; index3 <= totalLedsToLight % 5 - 1; index3++) {
        led.plot(index3, totalRowsToLight)
    }
}

function getColorForGroup(group: number): number {
    if ( group < 5 ) {
        return neopixel.colors(NeoPixelColors.Blue)
    } else if ( group < 7 ) {
        return neopixel.colors(NeoPixelColors.Green)
    } else if ( group < 7 ) {
        return neopixel.colors(NeoPixelColors.Yellow)
    } else {
        return neopixel.colors(NeoPixelColors.White)
    }
}

// We’re only interested in negative acceleration readings
// (see the README) so we check whether the receivedNumber
// is *below* our threshold (default threshold is -500).
radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    if (receivedNumber < threshold) {
        strip.showColor(getColorForGroup(group))
    } else {
        strip.clear()
        strip.show()
    }
})

// The threshold is displayed as a bar, filling Left-to-Right.
// The longer the bar, the *further* below zero the threshold is.
// Therefore it makes sense that pressing button A, on the left
// of the screen, should make the threshold less negative and
// closer to zero.
input.onButtonPressed(Button.A, () => {
    threshold = Math.min(threshold + increment, maxThreshold)
    displayThreshold()
})

// The threshold is displayed as a bar, filling Left-to-Right.
// The longer the bar, the *further* below zero the threshold is.
// Therefore it makes sense that pressing button B, on the right
// of the screen, should make the threshold even more negative,
// and further away from zero.
input.onButtonPressed(Button.B, () => {
    threshold = Math.max(threshold - increment, minThreshold)
    displayThreshold()
})

input.onButtonPressed(Button.AB, () => {
    basic.clearScreen()
    basic.showNumber(threshold, 75)
    basic.pause(500)
    displayThreshold()
})

group = 1
index = 0
increment = 100
threshold = -500
minThreshold = -2000
maxThreshold = 0
strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)

radio.setGroup(group)
displayThreshold()
