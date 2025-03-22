import { ReminderService } from "../../reminder/application/reminderService";
import { InMemoryReminderRepository } from "../../reminder/infrastructure/inMemoryReminderRepository";

const reminderRepository = new InMemoryReminderRepository()
export const ServiceContainer = {
    reminder: new ReminderService(reminderRepository)
}