let adjust = 0
let hours = 0
let time = ""
let seconds = 0
let mins = 0
input.onGesture(Gesture.Shake, function () {
    let ampm = 0
    adjust = hours
    if (ampm) {
        if (hours > 12) {
            adjust = hours - 12
        } else {
            if (hours == 0) {
                adjust = 12
            }
        }
    }
    time = "" + adjust
    time = "" + time + ":"
    time = "" + time + seconds / 10
    time = "" + time + seconds % 10
    if (ampm) {
        if (hours > 11) {
            time = "" + time + "PM"
        } else {
            time = "" + time + "AM"
        }
    }
    basic.showString(time)
})
basic.forever(function () {
    basic.pause(1000)
    if (seconds < 59) {
        seconds += 1
    } else {
        seconds = 0
        if (mins < 23) {
            mins += 1
        } else {
            mins = 0
            if (hours < 12) {
                hours += 1
            }
        }
    }
})
