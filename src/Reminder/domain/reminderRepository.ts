import { Reminder } from "./reminder";

export interface ReminderRepository {
    create(reminder: Reminder): Promise<void>
    update(reminder: Reminder): Promise<void>
    getAll(): Promise<Reminder[]>
    getById(id: string): Promise<Reminder | null>
    delete(id: string): Promise<void>
}