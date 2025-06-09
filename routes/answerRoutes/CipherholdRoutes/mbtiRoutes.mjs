import express from 'express';
import { calculateMBTIResult } from '../../../controllers/answerControllers/CipherholdControllers/mbtiController.mjs';

const router = express.Router();
router.post('/submit', calculateMBTIResult);


export default router;
