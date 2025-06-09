import Question from '../../../models/Question.mjs';
import EnneagramResult from '../../../models/AnswerModels/CipherholdModels/EnneagramModel.mjs';
import { calculateEnneagramScore } from '../../../logic/CipherholdLogic/Enneagram.mjs';

// Get Enneagram questions
export const getEnneagramQuestions = async (req, res) => {
  try {
    const questions = await Question.find({ Title: "Enneagram Sigils" });
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Enneagram questions." });
  }
};

// Handle Enneagram submission
export const calculateEnneagramResult = async (req, res) => {
  try {
    const answers = req.body.answers;

    // Delegate to logic function
    const { scores, topTypes, fullResult } = await calculateEnneagramScore(answers);

    if (!fullResult) {
      return res.status(404).json({ error: "Enneagram type not found." });
    }

    res.json({
      scores,
      type: fullResult.type,
      title: fullResult.title,
      description: fullResult.description,
      coreMotivation: fullResult.coreMotivation,
      coreFear: fullResult.coreFear,
      strengths: fullResult.strengths,
      challenges: fullResult.challenges,
      idealCareers: fullResult.idealCareers,
      addictionTendencies: fullResult.addictionTendencies,
      compatibility: fullResult.compatibility,
      growthPath: fullResult.growthPath
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to calculate Enneagram result." });
  }
};


