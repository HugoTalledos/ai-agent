import { ReminderDate } from "./ReminderDate";

export class Reminder {
    id: string
    name: string;
    detail: string;
    date: ReminderDate;
    priority: number;

    constructor(id: string, name: string, detail: string, date: ReminderDate, priority: number) {
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.date = date;
        this.priority = priority;
    }
}