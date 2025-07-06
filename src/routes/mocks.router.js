import { Router } from "express";
import { createFakePets, createFakeUsers, getFakePets, getFakeUsers } from "../controllers/mocks.controller.js";

/**
 * @swagger
 * /api/mocks/mockingpets:
 *   get:
 *     summary: Obtener mascotas falsas
 *     tags: [Mocks]
 *     responses:
 *       200:
 *         description: Lista de mascotas mock
 * 
 * /api/mocks/mockingusers:
 *   get:
 *     summary: Obtener usuarios falsos
 *     tags: [Mocks]
 *     responses:
 *       200:
 *         description: Lista de usuarios mock
 * 
 * /api/mocks/generateData/pets/{qtty}:
 *   post:
 *     summary: Generar mascotas mock
 *     tags: [Mocks]
 *     parameters:
 *       - in: path
 *         name: qtty
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mascotas mock generadas
 *       400:
 *         description: Cantidad inválida
 * 
 * /api/mocks/generateData/users/{qtty}:
 *   post:
 *     summary: Generar usuarios mock
 *     tags: [Mocks]
 *     parameters:
 *       - in: path
 *         name: qtty
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuarios mock generados
 *       400:
 *         description: Cantidad inválida
 */

const router = Router();

router.get('/mockingpets', getFakePets);
router.get('/mockingusers', getFakeUsers);
router.post('/generateData/pets/:qtty', createFakePets);
router.post('/generateData/users/:qtty', createFakeUsers);

export default router;