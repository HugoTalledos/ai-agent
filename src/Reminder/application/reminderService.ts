import { Reminder } from "../domain/reminder";
import { ReminderDate } from "../domain/ReminderDate";
import { ReminderNotFound } from "../domain/ReminderErrors";
import { ReminderRepository } from "../domain/reminderRepository";

export class ReminderService {
    reminderRepository: ReminderRepository

    // En el constructor irian todas las dependencias
    constructor(reminderRepository: ReminderRepository) {
        this.reminderRepository = reminderRepository
    }

    createReminder(
        id: string,
        name: string,
        detail:string,
        date: Date,
        priority: number
    ): Promise<void> {
        const reminder = new Reminder(id, name, detail, new ReminderDate(date), priority)
        return this.reminderRepository.create(reminder)
    }

    editReminder(
        id: string,
        name: string,
        detail:string,
        date: Date,
        priority: number
    ): Promise<void> {
        const reminder = new Reminder(id, name, detail, new ReminderDate(date), priority)
        return this.reminderRepository.update(reminder)
    }

    getAll(): Promise<Reminder[]> {
        return this.reminderRepository.getAll();
    }

    async getReminderById(id: string): Promise<Reminder | null> {
        const response = await this.reminderRepository.getById(id);

        if (!response) throw new ReminderNotFound('Recordatorio no encontrado');
        return response;
    }

    removeReminder(id: string): Promise<void> {
        return this.reminderRepository.delete(id);
    }
}