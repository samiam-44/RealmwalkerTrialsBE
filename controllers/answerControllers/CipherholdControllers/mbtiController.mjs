import Description from '../../../models/Descriptions.mjs';
import { MBTIResult } from '../../../logic/CipherholdLogic/mbti.mjs';
import Question from '../../../models/Question.mjs';
import Result from '../../../models/Result.mjs';

// GET all MBTI questions - fetch mbti q's
export async function getMBTIQuestions(req, res) {
  try {
    const questions = await Question.find({ Title: "MBTI Alignment Matrix" });
    res.json(questions);
  } catch (err) {
    console.error('error gettin mbti q:', err);
    res.status(500).json({ error: "cant fetch mbti q's" });
  }
}

// POST MBTI answers - submit ansrs and get result
export async function calculateMBTIResult(req, res) {
  try {
    const userAnswers = req.body.answers; // like ['E', 'N', 'T', 'J']
    const type = MBTIResult(userAnswers); // helper to figure out type

    const mbtiDoc = await Description.findOne({ type });

    if (!mbtiDoc) {
      return res.status(404).json({ error: 'MBTI type not found' });
    }

    res.json({
      testName: mbtiDoc.testName,
      type: mbtiDoc.type,
      title: mbtiDoc.title,
      description: mbtiDoc.description // full nested desc obj
    });
  } catch (error) {
    console.error('MBTI calculation error:', error);
    res.status(500).json({ error: 'error doing mbti calc' });
  }
}

// GET all MBTI descriptions - for type descs
export async function getMBTIDescriptions(req, res) {
  try {
    const descriptions = await Description.find({ testName: "MBTI" });
    res.json(descriptions);
  } catch (err) {
    console.error('cant fetch mbti descs:', err);
    res.status(500).json({ error: "cant fetch mbti descs" });
  }
}

// GET a saved result by ID - pull old result
export async function getMBTIResultById(req, res) {
  try {
    const result = await SavedMBTIResult.findById(req.params.id);
    if (!result) return res.status(404).json({ error: "result not found" });
    res.json(result);
  } catch (err) {
    console.error('err fetchin old mbti result:', err);
    res.status(500).json({ error: "err gettin result" });
  }
}

// POST to save a new MBTI result - save it
export async function saveMBTIResult(req, res) {
  try {
    const newResult = new SavedMBTIResult(req.body);
    const saved = await newResult.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('err savin mbti result:', err);
    res.status(500).json({ error: "couldnt save mbti result" });
  }
}


