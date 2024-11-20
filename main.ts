radio.onReceivedString(function (receivedString) {
    if (receivedString == "進む") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedString == "右") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    } else if (receivedString == "左") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
    }
})
radio.setGroup(123)
basic.showIcon(IconNames.Heart)
