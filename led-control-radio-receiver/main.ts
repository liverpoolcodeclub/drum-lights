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
    totalLedsToLight = (threshold - minThreshold) / increment + 1
    totalRowsToLight = (totalLedsToLight - totalLedsToLight % 5) / 5
    basic.clearScreen()
    for (let index2 = 0; index2 <= totalRowsToLight - 1; index2++) {
        led.plot(0, index2)
        led.plot(1, index2)
        led.plot(2, index2)
        led.plot(3, index2)
        led.plot(4, index2)
    }
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

radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    if (receivedNumber > threshold) {
        strip.showColor(getColorForGroup(group))
    } else {
        strip.clear()
        strip.show()
    }
})

input.onButtonPressed(Button.A, () => {
    threshold = Math.max(threshold - increment, minThreshold)
    displayThreshold()
})

input.onButtonPressed(Button.B, () => {
    threshold = Math.min(threshold + increment, maxThreshold)
    displayThreshold()
})

input.onButtonPressed(Button.AB, () => {
    basic.clearScreen()
    basic.showNumber(threshold, 75)
    basic.pause(500)
    displayThreshold()
})

group = 9
index = 0
increment = 50
threshold = 1500
minThreshold = 1000
maxThreshold = 2200
strip = neopixel.create(DigitalPin.P0, 60, NeoPixelMode.RGB)

radio.setGroup(group)
displayThreshold()
