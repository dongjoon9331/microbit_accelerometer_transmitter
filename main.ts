let x = 0
radio.setGroup(1)
basic.showString("M")
basic.forever(function () {
    x = input.acceleration(Dimension.X) ** 2
    x += input.acceleration(Dimension.Y) ** 2
    x += input.acceleration(Dimension.Z) ** 2
    x = Math.sqrt(x)
    radio.sendNumber(x)
})
