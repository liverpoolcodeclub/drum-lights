let group = 0
group = 1

radio.setGroup(group)

radio.onDataPacketReceived( ({ receivedNumber }) =>  {
    serial.writeLine("group " + group + ", " + receivedNumber)
})

input.onButtonPressed(Button.A, () => {
    group = Math.max(group - 1, 0)
    radio.setGroup(group)
})

input.onButtonPressed(Button.B, () => {
    group = Math.min(group + 1, 255)
    radio.setGroup(group)
})

basic.forever(() => {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showNumber(group)
    basic.pause(500)
})
