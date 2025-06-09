import express from 'express';
import { getEnneagramQuestions, calculateEnneagramResult } from '../../controllers/answerControllers/enneagramController.mjs';

const router = express.Router();

router.get('/enneagram/questions', getEnneagramQuestions);
router.post('/enneagram/submit', calculateEnneagramResult);

export default router;
