// routes/api/results/enneagramRoutes.mjs
import express from 'express';
import {
  getEnneagramQuestions,
  calculateEnneagramResult,
 getEnneagramDescriptions, 
 getEnneagramResultById,
  saveEnneagramResult
} from '../../../controllers/answerControllers/CipherholdControllers/enneagramController.mjs';

const router = express.Router();

router.get('/enneagram/questions', getEnneagramQuestions);
router.post('/enneagram/submit', calculateEnneagramResult);
router.get('/enneagram/descriptions', getEnneagramDescriptions);
router.get('/enneagram/results/:userId', getEnneagramResultById);
router.post('/enneagram/save-result', saveEnneagramResult);

export default router;



