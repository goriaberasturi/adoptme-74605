import { Router } from "express";
import { createFakePets, createFakeUsers, getFakePets, getFakeUsers } from "../controllers/mocks.controller.js";

const router = Router();

router.get('/mockingpets', getFakePets);
router.get('/mockingusers', getFakeUsers);
router.post('/generateData/pets/:qtty', createFakePets);
router.post('/generateData/users/:qtty', createFakeUsers);

export default router;