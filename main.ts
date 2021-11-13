// Početni položaj servo motora za pokretanje štrcaljke
pins.servoWritePin(AnalogPin.P0, 20)
// Postavka komunikacijskog kanala
radio.setGroup(1)
basic.forever(function () {
    if (sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    ) <= 10) {
        // Pokreni motor za prskanje dez.sredstvom
        pins.servoWritePin(AnalogPin.P0, 110)
        // Pošalji signal drugom micro:bitu da je prolaz slobodan
        radio.sendNumber(1)
        // Vrijeme potrebno da se osoba udalji od dezinfikatora
        basic.pause(500)
    } else {
        // Ako nije vrati servo u početni položaj
        pins.servoWritePin(AnalogPin.P0, 20)
    }
})
