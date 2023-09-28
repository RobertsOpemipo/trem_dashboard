// fake dataset
import { faker } from '@faker-js/faker';


export function createRandomUser() {
    return {
        profile: faker.image.avatar(),
        vehicleId: faker.vehicle.vin(),
        ownerFName: faker.person.firstName(),
        ownerLName: faker.person.lastName(),
        vehicleCategory: faker.vehicle.vehicle(),
        plateNumber: faker.string.alphanumeric(10),
        vehicleType: faker.vehicle.type(),
        
    };
}


export const USERS = faker.helpers.multiple(createRandomUser, {
    count: 30,
});