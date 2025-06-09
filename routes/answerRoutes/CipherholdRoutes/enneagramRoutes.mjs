import express from 'express';
import {
  getEnneagramQuestions,
  calculateEnneagramResult,
  getAllEnneagramDescriptions,
  getUserEnneagramResults,
  saveEnneagramResult
} from '../../../controllers/answerControllers/CipherholdControllers/enneagramControllers.mjs';

const router = express.Router();

router.get('/enneagram/questions', getEnneagramQuestions);
router.post('/enneagram/submit', calculateEnneagramResult);
router.get('/enneagram/descriptions', getAllEnneagramDescriptions);
router.get('/enneagram/results/:userId', getUserEnneagramResults); // Optional, if you save user results
router.post('/enneagram/save-result', saveEnneagramResult); // Optional, to save user result

export default router;

