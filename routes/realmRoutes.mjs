import express from 'express';
import { getAllRealms, createRealm } from '../controllers/realmController.mjs';

const router = express.Router();

//GET /api/realms - fetch all realms
router.get('/', getAllRealms);

//POST /api/realms - create a new realm
router.post('/', createRealm);

export default router