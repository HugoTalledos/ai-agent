export class ReminderDate {
    value: Date
    constructor(date: Date) {
        this.value = date
        this.ensureIsValid()
    }

    private ensureIsValid() {
        if(this.value < new Date()) {
            throw new Error("El recordatorio tiene que estar en una fecha futura")
        }
    }
}