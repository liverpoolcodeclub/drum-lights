let group = 0

group = 1
radio.setGroup(group)

basic.forever(() => {
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showNumber(group)
    basic.pause(500)
})

basic.forever(() => {
    radio.sendNumber(input.acceleration(Dimension.Z))
})
