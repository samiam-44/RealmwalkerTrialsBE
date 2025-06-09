import express from 'express';
import { calculateMBTIResult } from '../../controllers/answerControllers/mbtiController.mjs';

const router = express.Router();

router.post('/mbti/submit', calculateMBTIResult);

export default router;
