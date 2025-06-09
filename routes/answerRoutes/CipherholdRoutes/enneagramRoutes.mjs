import express from 'express';
import { getEnneagramQuestions, calculateEnneagramResult } from '../../controllers/answerControllers/CipherholdControllers/enneagramController.mjs';

const router = express.Router();

router.get('/enneagram/questions', getEnneagramQuestions);
router.post('/enneagram/submit', calculateEnneagramResult);

export default router;
