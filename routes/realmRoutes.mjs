import express from 'express';
import {
  getAllRealms,
  createRealm,
  updateRealm,
  deleteRealm,
} from '../controllers/realmController.mjs';

const router = express.Router();

// GET /api/realms - fetch all realms
router.get('/', getAllRealms);

// POST /api/realms - create new realm
router.post('/', createRealm);

// PUT /api/realms/:id - update realm by ID
router.put('/:id', updateRealm);

// DELETE /api/realms/:id - delete realm by ID
router.delete('/:id', deleteRealm);

export default router;
