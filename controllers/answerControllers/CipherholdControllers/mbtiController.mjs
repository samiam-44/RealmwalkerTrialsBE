import mongoose from 'mongoose'
import Description from '../../../models/Descriptions.mjs';
import { MBTIResult } from '../../../logic/CipherholdLogic/mbti.mjs';
import Question from '../../../models/Question.mjs';
import Result from '../../../models/Result.mjs';
 

/**
 * GET /mbti/questions
 * Fetch all MBTI-related questions
 */
export async function getMBTIQuestions(req, res) {
  try {
    const questions = await Question.find({});
    res.json(questions);
  } catch (err) {
    console.error('Failed to retrieve MBTI questions:', err);
    res.status(500).json({ error: "Unable to fetch MBTI questions." });
  }
}

/**
 * POST /mbti/submit
 * Submit MBTI answers and return type, title, and description
 */
export async function calculateMBTIResult(req, res) {
  try {
    const userAnswers = req.body.answers; // Example ['E', 'N', 'T', 'J']
    const type = MBTIResult(userAnswers); // Calculate MBTI type from answers

    const mbtiDoc = await Description.findOne({ type });

    if (!mbtiDoc) {
      return res.status(404).json({ error: 'MBTI type not found in descriptions.' });
    }

    res.json({
      testName: mbtiDoc.testName,
      type: mbtiDoc.type,
      title: mbtiDoc.title,
      description: mbtiDoc.description
    });
  } catch (error) {
    console.error('Error calculating MBTI result:', error);
    res.status(500).json({ error: 'An error occurred while processing MBTI answers.' });
  }
}

/**
 * GET /mbti/descriptions
 * Retrieve all MBTI type descriptions
 */
export async function getMBTIDescriptions(req, res) {
  try {
    const descriptions = await Description.find({});
    res.json(descriptions);
  } catch (err) {
    console.error('Failed to retrieve MBTI descriptions:', err);
    res.status(500).json({ error: "Unable to fetch MBTI descriptions." });
  }
}

/**
 * GET /mbti/results/:id
 * Retrieve a saved MBTI result by its database ID
 */
export async function getMBTIResultById(req, res) {
  const id = req.params.id;// deefines id
    // Check if id is a valid ObjectId
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Invalid result ID format." });
  }
  try {
    const result = await Result.findById(req.params.id);
    if (!result) {
      return res.status(404).json({ error: "No MBTI result found with that ID." });
    }
    res.json(result);
  } catch (err) {
    console.error('Failed to retrieve MBTI result by ID:', err);
    res.status(500).json({ error: "Error fetching MBTI result." });
  }
}

/**
 * POST /mbti/results
 * Save a new MBTI result to the database
 */
export async function saveMBTIResult(req, res) {
  try {
    const newResult = new Result(req.body);
    const saved = await newResult.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Failed to save MBTI result:', err);
    res.status(500).json({ error: "Could not save the MBTI result." });
  }
}


