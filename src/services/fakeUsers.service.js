import { faker } from "@faker-js/faker";
import { createHash } from "../utils/index.js";

export async function generateFakeUsers(qtty=100) {
    const users = [];

    for(let i=0; i<qtty; i++) users.push({
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    email: faker.internet.email(),
    password: await createHash('coder123'),
    role: faker.helpers.arrayElement(['user', 'admin']),
    pets: []
});

    return users;
}