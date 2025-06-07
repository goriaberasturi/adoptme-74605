import { faker } from "@faker-js/faker";

export async function generateFakePets(qtty=100) {
    const pets = [];

    for(let i=0; i<qtty; i++) pets.push({
            name: faker.animal.petName(),
            specie: faker.animal.type(),
            birthDate: faker.date.birthdate(),
            adopted: false,
            image: faker.internet.url()
    });

    return pets;
}