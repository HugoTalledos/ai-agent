import { Reminder } from "../domain/reminder";
import { ReminderRepository } from "../domain/reminderRepository";

/**
 * Estas clases que implementan las ReminderRepository son las que relaizan la conexion a bd
 */
export class InMemoryReminderRepository implements ReminderRepository {

    private reminders: Map<string, Reminder> = new Map();

    async create(reminder: Reminder): Promise<void> {
        this.reminders.set(reminder.id, reminder);
    }

    async update(reminder: Reminder): Promise<void> {
        if (!this.reminders.has(reminder.id)) {
            throw new Error("Reminder not found.");
        }
        this.reminders.set(reminder.id, reminder);
    }

    async getAll(): Promise<Reminder[]> {
        return Array.from(this.reminders.values());
    }

    async getById(id: string): Promise<Reminder | null> {
        return this.reminders.get(id) || null;
    }

    async delete(id: string): Promise<void> {
        if (!this.reminders.has(id)) {
            throw new Error("Reminder not found.");
        }
        this.reminders.delete(id);
    }

    async getAllByUserId(userId: string): Promise<Reminder[]> {
        return Array.from(this.reminders.values()).filter(reminder => reminder.userId === userId);
    }
}
