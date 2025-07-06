import request from 'supertest';
import { expect } from 'chai';
import app from './../src/app.js';

import UserModel from './../src/dao/models/User.js';
import PetModel from './../src/dao/models/Pet.js';
import AdoptionModel from './../src/dao/models/Adoption.js';

describe('Adoptions API', () => {
    let uid, pid, adoptedPid, aid;

    before(async () => {
        const user = await UserModel.create({
            first_name: 'Test',
            last_name: 'User',
            email: 'test@example.com',
            password: 'hashedpass'
        });

        const pet = await PetModel.create({
            name: 'Firulais',
            specie: 'dog',
            birthDate: '2022-01-13',
            adopted: false
        });
        const adoptedPet = await PetModel.create({
            name: 'Michi',
            specie: 'cat',
            birthDate: '2022-01-13',
            adopted: true
        });

        uid = user._id.toString();
        pid = pet._id.toString();
        adoptedPid = adoptedPet._id.toString()
    });

    after(async () => {
        await AdoptionModel.deleteMany({ owner: uid });
        await UserModel.findByIdAndDelete(uid);
        await PetModel.findByIdAndDelete(pid);
    });

    describe('POST /api/adoptions/:uid/:pid', () => {
        it('deberia crear una adopcion con usuario y mascota validos', async () => {
            const res = await request(app).post(`/api/adoptions/${uid}/${pid}`);
            expect(res.status).to.equal(201);
            expect(res.body).to.have.property('message', 'Pet adopted');
            expect(res.body.payload).to.have.property('owner').eql(String(uid));
            expect(res.body.payload).to.have.property('pet').eql(String(pid));
            aid = res.body.payload._id;
        });

        it('deberia fallar si el usuario no existe', async () => {
            const fakeUid = '000000000000000000000000';

            const res = await request(app).post(`/api/adoptions/${fakeUid}/${pid}`);
            expect(res.status).to.equal(404);
            expect(res.body).to.have.property('error', 'user Not found');
        });

        it('deberia fallar si la mascota no existe', async () => {
            const fakePid = '000000000000000000000000';

            const res = await request(app).post(`/api/adoptions/${uid}/${fakePid}`);
            expect(res.status).to.equal(404);
            expect(res.body).to.have.property('error', 'Pet not found');
        });

        it('deberia fallar si la mascota ya fue adoptada', async () => {
            const res = await request(app).post(`/api/adoptions/${uid}/${adoptedPid}`);
            expect(res.status).to.equal(400);
            expect(res.body).to.have.property('error', 'Pet is already adopted');
        });

    });

    describe('GET /api/adoptions', () => {
        it('deberia devolver todas las adopciones', async () => {
            const res = await request(app).get('/api/adoptions');
            expect(res.status).to.equal(200);
            expect(res.body.payload).to.be.an('array');
        });
    });

    describe('GET /api/adoptions/:aid', () => {
        it('deberia devolver una adopcion existente', async () => {
            const res = await request(app).get(`/api/adoptions/${aid}`);
            expect(res.status).to.equal(200);
            expect(res.body.payload).to.have.property('_id').eql(aid);
            expect(res.body.payload).to.have.property('owner');
            expect(res.body.payload).to.have.property('pet');
        });

        it('deberia fallar si la mascota no existe', async () => {
            const fakeAid = '000000000000000000000000';

            const res = await request(app).get(`/api/adoptions/${fakeAid}`);
            expect(res.status).to.equal(404);
            expect(res.body).to.have.property('error', 'Adoption not found');
        });
    });
});