import { faker, fakerDE, fakerEN, fakerFR } from '@faker-js/faker';

export function createRandomUser() {
    const maxDate = new Date(); // Current date
    const minDate = new Date();
    minDate.setFullYear(maxDate.getFullYear() - 1); // Set minimum date to 1 year ago

    const oldStatusDate = faker.date.between(minDate, maxDate);

    const newMaxDate = new Date();
    newMaxDate.setFullYear(maxDate.getFullYear() + 1); // Set maximum date to 1 year in the future
    const newStatusDate = faker.date.between(maxDate, newMaxDate);

    const plateTypes = ['commercial', 'private', 'government', 'temporary'];
    const plateType = faker.helpers.arrayElement(plateTypes);

    // Convert datecreated to a JavaScript Date object
    const datecreated = new Date(faker.date.recent());

    return {
        plateNumber: faker.string.alphanumeric(10),
        plateType,
        datecreated,
        oldStatus: oldStatusDate.toISOString(),
        newStatus: newStatusDate.toISOString(),
    };
}



export const USERS = faker.helpers.multiple(createRandomUser, {
    count: 30,
});
