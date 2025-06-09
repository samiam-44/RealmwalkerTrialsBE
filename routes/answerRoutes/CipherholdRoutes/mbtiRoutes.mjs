import express from 'express';
import {
  getMBTIQuestions,
  calculateMBTIResult,
  getMBTIDescriptions,
  getMBTIResultById,
  saveMBTIResult
} from '../../../controllers/answerControllers/CipherholdControllers/mbtiController.mjs';

const router = express.Router();

// get all mbti q's
router.get('/mbti/questions', getMBTIQuestions);

// submmit ansrs + get result
router.post('/mbti/submit', calculateMBTIResult);

// get all type descs
router.get('/mbti/descriptions', getMBTIDescriptions);

// get result by _id
router.get('/mbti/results/:id', getMBTIResultById);

// save result to db
router.post('/mbti/save-result', saveMBTIResult);

export default router;

