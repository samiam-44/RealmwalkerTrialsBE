import Question from '../../../models/Question.mjs';
import Description from '../../../models/Descriptions.mjs';
import { calculateEnneagramScore } from '../../../logic/CipherholdLogic/Enneagram.mjs';

// ------------------------------
// GET /enneagram/questions
// Fetch all Enneagram test questions to display on frontend
// Filtering by "Title" field to only get relevant questions for Enneagram
// ------------------------------
export const getEnneagramQuestions = async (req, res) => {
  try {
    const questions = await Question.find({ Title: "Enneagram Sigils" });
    res.json(questions);
  } catch (error) {
    console.error("Failed to fetch Enneagram questions:", error);
    res.status(500).json({ error: "Failed to fetch Enneagram questions." });
  }
};

// ------------------------------
// POST /enneagram/submit
// Accept user answers, calculate Enneagram scores and type,
// then return full result description with detailed info
// ------------------------------
export const calculateEnneagramResult = async (req, res) => {
  try {
    const answers = req.body.answers; // Expecting array of { questionId, selectedValue }

    // Call the logic function that calculates scores and fetches full result
    const { scores, topTypes, fullResult } = await calculateEnneagramScore(answers);

    if (!fullResult) {
      return res.status(404).json({ error: "Enneagram type not found." });
    }

    // Return a rich JSON response with all details for the frontend
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
    console.error("Failed to calculate Enneagram result:", error);
    res.status(500).json({ error: "Failed to calculate Enneagram result." });
  }
};

// ------------------------------
// GET /enneagram/descriptions
// Return all Enneagram personality descriptions (all 9 types)
// ------------------------------
export const getAllEnneagramDescriptions = async (req, res) => {
  try {
    const descriptions = await Description.find({ Title: "Enneagram" });
    res.json(descriptions);
  } catch (error) {
    console.error("Failed to fetch Enneagram descriptions:", error);
    res.status(500).json({ error: "Failed to fetch Enneagram descriptions." });
  }
};

// ------------------------------
// GET /enneagram/results/:userId
// OPTIONAL: If you store user test results, fetch previous results by userId

// ------------------------------
export const getUserEnneagramResults = async (req, res) => {
  try {
    const userId = req.params.userId;

    //  replace 'UserResults' with  actual Mongoose model for saved results
    const userResults = await UserResults.find({ userId, testType: 'enneagram' });

    if (!userResults || userResults.length === 0) {
      return res.status(404).json({ error: "No saved Enneagram results found for this user." });
    }

    res.json(userResults);
  } catch (error) {
    console.error("Failed to fetch user Enneagram results:", error);
    res.status(500).json({ error: "Failed to fetch user Enneagram results." });
  }
};

// ------------------------------
// POST /enneagram/save-result

// ------------------------------
export const saveEnneagramResult = async (req, res) => {
  try {
    const { userId, result } = req.body;

    if (!userId || !result) {
      return res.status(400).json({ error: "User ID and result data are required." });
    }

    const newResult = new UserResults({
      userId,
      testType: 'enneagram',
      result,
      createdAt: new Date()
    });

    await newResult.save();

    res.status(201).json({ message: "Enneagram result saved successfully.", newResult });
  } catch (error) {
    console.error("Failed to save Enneagram result:", error);
    res.status(500).json({ error: "Failed to save Enneagram result." });
  }
};



