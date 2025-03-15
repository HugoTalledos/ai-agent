import { ReminderDate } from "./ReminderDate";

export class Reminder {
    id: string
    name: string;
    detail: string;
    date: ReminderDate;
    priority: number;
    userId: string;

    constructor(id: string, name: string, detail: string, date: ReminderDate, priority: number, userId: string) {
        this.id = id;
        this.name = name;
        this.detail = detail;
        this.date = date;
        this.priority = priority;
        this.userId = userId;
    }

    static canCreateMoreReminders(currentReminders: Reminder[]): boolean {
        return currentReminders.length < 5;
    }
}