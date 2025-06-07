import { generateFakePets } from "../services/fakePets.service.js";
import { generateFakeUsers } from "../services/fakeUsers.service.js";
import { petsService, usersService } from './../services/index.js'

export const getFakePets = async (req, res) => {
    try {
        const pets = await generateFakePets(100);

        return res.status(200).send(pets);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

export const getFakeUsers = async (req, res) => {
    try {
        const users = await generateFakeUsers(50);

        return res.status(200).send(users);
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

export const createFakePets = async (req, res) => {
    try {
        const { qtty } = req.params;

        const quantity = Number(qtty);
        if (!Number.isInteger(quantity) || quantity <= 0 || quantity > 200) return res.status(400).send({ error: 'Indique una cantidad numerica entre 1 y 200' });

        const fakePets = await generateFakePets(quantity);

        const newPets = await Promise.all(fakePets.map(pet => petsService.create(pet)));

        res.status(201).send({ created: newPets.length, newPets });
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}

export const createFakeUsers = async (req, res) => {
    try {
        const { qtty } = req.params;

        const quantity = Number(qtty);
        if (!Number.isInteger(quantity) || quantity <= 0 || quantity > 200) return res.status(400).send({ error: 'Indique una cantidad numerica entre 1 y 200' });

        const fakeUsers = await generateFakeUsers(quantity);

        const newUsers = await Promise.all(fakeUsers.map(usr => usersService.create(usr)));

        res.status(201).send({ created: newUsers.length, newUsers });
    } catch (error) {
        res.status(500).send({ error: error.message })
    }
}