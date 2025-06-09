import MBTI from '../../../models/AnswerModels/CipherholdModels/MBTImodel.mjs';
import { MBTIResult } from '../../../logic/CipherholdLogic/mbti.mjs';

export async function calculateMBTIResult(req, res) {
  try {
    const userAnswers = req.body.answers; // e.g., ['E', 'N', 'T', 'J']
    const type = MBTIResult(userAnswers);

    const mbtiDoc = await MBTI.findOne({ type });

    if (!mbtiDoc) {
      return res.status(404).json({ error: 'MBTI type not found' });
    }

    res.json({
      type: mbtiDoc.type,
      title: mbtiDoc.title,
      description: mbtiDoc.description // full nested object returned
    });
  } catch (error) {
    console.error('MBTI calculation error:', error);
    res.status(500).json({ error: 'Internal server error during MBTI calculation' });
  }
}


