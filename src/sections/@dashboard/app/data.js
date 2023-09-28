import { faker } from '@faker-js/faker';

// Generate car data
function generateCarData() {
  return {
    brand: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    year: faker.vehicle.year(),
    color: faker.vehicle.color(),
    price: faker.datatype.number({ min: 10000, max: 50000 }),
  };
}

// Create an array of car data
const carData = [...Array(10)].map(generateCarData);
