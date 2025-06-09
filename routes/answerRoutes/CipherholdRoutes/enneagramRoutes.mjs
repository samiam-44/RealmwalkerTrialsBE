import express from 'express';
import {
  getEnneagramQuestions,
  calculateEnneagramResult,
  getAllEnneagramDescriptions,
  getUserEnneagramResults,
  saveEnneagramResult
} from '../../../controllers/answerControllers/CipherholdControllers/enneagramController.mjs';

const router = express.Router();

// get all enneagram q's
router.get('/enneagram/questions', getEnneagramQuestions);

// submmit ansrs + get type
router.post('/enneagram/submit', calculateEnneagramResult);

// get descs for all types
router.get('/enneagram/descriptions', getAllEnneagramDescriptions);

// get user's past results
router.get('/enneagram/results/:userId', getUserEnneagramResults);

// save result to db
router.post('/enneagram/save-result', saveEnneagramResult);

export default router;


