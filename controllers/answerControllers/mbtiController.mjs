import express from 'express';
import MBTI from '../models/AnswerModels/MBTImodel.mjs';
import { MBTIResult } from '../logic/mbti.mjs';

const router = express.Router()

async function handleMBTIQuiz(req, res) {
  const userAnswers = req.body.answers; // e.g., ['E', 'N', 'T', 'J', ...]
  const typeCode = MBTIResult(userAnswers);
  const mbtiDoc = await MBTI.findOne({ typeCode });

  if (!mbtiDoc) {
    return res.status(404).json({ error: 'MBTI type not found' });
  }

  // Save result in Result model

  res.json({
    type: mbtiDoc.typeCode,
    title: mbtiDoc.title,
    description: mbtiDoc.descriptionText
  });
}
export default router
