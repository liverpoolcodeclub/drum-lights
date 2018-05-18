let strip: neopixel.Strip = null
let threshold = 0
let group = 0

function getColorForGroup(group: number): number {
    if ( group < 5 ) {
        // Dobra, front four
        return neopixel.colors(NeoPixelColors.Orange)
    } else if ( group < 7 ) {
        // Repinique (tenor/tom-tom), middle right two
        return neopixel.colors(NeoPixelColors.White)
    } else if ( group < 9 ) {
        // Caixa (snare drum), middle left two
        return neopixel.colors(NeoPixelColors.Blue)
    } else {
        // Surdo (bass drum), back four
        return neopixel.colors(NeoPixelColors.Green)
    }
}

function getDrumNameForGroup(group: number): string {
    if (group == 1) {
        return "DOBRA"
    } else if (group == 5) {
        return "REPINIQUE"
    } else if (group == 7) {
        return "CAIXA"
    } else {
        return "SURDO"
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

input.onButtonPressed(Button.A, () => {
    if (group == 1) {
        group = 9
    } else if (group == 5) {
        group = 1
    } else if (group == 7) {
        group = 5
    } else {
        group = 7
    }
    radio.setGroup(group)
})

input.onButtonPressed(Button.B, () => {
    if (group == 1) {
        group = 5
    } else if (group == 5) {
        group = 7
    } else if (group == 7) {
        group = 9
    } else {
        group = 1
    }
    radio.setGroup(group)
})

basic.forever(() => {
    basic.showString(getDrumNameForGroup(group), 75)
})

group = 1
threshold = -500
strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)

radio.setGroup(group)
strip.clear()
strip.show()
