import Description from '../../../models/Descriptions.mjs';
import { MBTIResult } from '../../../logic/CipherholdLogic/mbti.mjs';

export async function calculateMBTIResult(req, res) {
  try {
    const userAnswers = req.body.answers; // e.g., ['E', 'N', 'T', 'J']
    const type = MBTIResult(userAnswers);

    const mbtiDoc = await Description.findOne({ type });


    if (!mbtiDoc) {
      return res.status(404).json({ error: 'MBTI type not found' });
    }

    res.json({
      testName: mbtiDoc.testName,
      type: mbtiDoc.type,
      title: mbtiDoc.title,
      description: mbtiDoc.description // full nested object returned
    });
  } catch (error) {
    console.error('MBTI calculation error:', error);
    res.status(500).json({ error: 'Internal server error during MBTI calculation' });
  }
}


