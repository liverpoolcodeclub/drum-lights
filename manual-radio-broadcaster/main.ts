let group = 0
let increment = 0
let threshold = 0
let minThreshold = 0
let maxThreshold = 0
let totalRowsToLight = 0
let index = 0
let totalLedsToLight = 0

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

input.onButtonPressed(Button.B, () => {
    threshold = Math.min(threshold + increment, maxThreshold)
    displayThreshold()
})

input.onButtonPressed(Button.A, () => {
    threshold = Math.max(threshold - increment, minThreshold)
    displayThreshold()
})

index = 0
increment = 50
threshold = 1500
minThreshold = 1000
maxThreshold = 2200
group = 1

radio.setGroup(group)

displayThreshold()

basic.forever(() => {
    if (input.buttonIsPressed(Button.AB)) {
        radio.sendNumber(threshold + 1)
    } else {
        radio.sendNumber(0)
    }
    basic.pause(100)
})
