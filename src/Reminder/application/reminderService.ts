import { Reminder } from "../domain/reminder";
import { ReminderDate } from "../domain/ReminderDate";
import { ReminderExeeded, ReminderNotFound } from "../domain/ReminderErrors";
import { ReminderRepository } from "../domain/reminderRepository";


/**
 * Por lo que estoy entendiendo aca debería ir logica mas compleja como validaciones antes de guardar y asi
 */
export class ReminderService {
    reminderRepository: ReminderRepository

    // En el constructor irian todas las dependencias
    constructor(reminderRepository: ReminderRepository) {
        this.reminderRepository = reminderRepository
    }

    async createReminder(
        id: string,
        name: string,
        detail:string,
        date: Date,
        priority: number,
        userId: string,
    ): Promise<void> {
        const userReminders = await this.reminderRepository.getAllByUserId(userId);

        if(Reminder.canCreateMoreReminders(userReminders)) {
            throw new ReminderExeeded('Has alcanzado el maximo de recordatorios')
        }

        const reminder = new Reminder(id, name, detail, new ReminderDate(date), priority, userId)
        return this.reminderRepository.create(reminder)
    }

    editReminder(
        id: string,
        name: string,
        detail:string,
        date: Date,
        priority: number,
        userId: string
    ): Promise<void> {
        const reminder = new Reminder(id, name, detail, new ReminderDate(date), priority, userId)
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