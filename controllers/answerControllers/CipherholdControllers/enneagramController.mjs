import mongoose from 'mongoose';
import Description from '../../../models/Descriptions.mjs';
import Question from '../../../models/Question.mjs';
import Result from '../../../models/Result.mjs';
import { calculateEnneagramScore } from '../../../logic/CipherholdLogic/Enneagram.mjs';

/**
 * GET /enneagram/questions
 * Fetch all Enneagram-related questions
 */
export async function getEnneagramQuestions(req, res) {
  try {
    const questions = await Question.find({});
    res.json(questions);
  } catch (err) {
    console.error('Failed to retrieve Enneagram questions:', err);
    res.status(500).json({ error: 'Unable to fetch Enneagram questions.' });
  }
}

/**
 * POST /enneagram/submit
 * Submit Enneagram answers and return type, title, and description
 */
export async function calculateEnneagramResult(req, res) {
  try {
    const userAnswers = req.body.answers;
    const { scores, topTypes, fullResult } = await calculateEnneagramScore(userAnswers);

    if (!fullResult) {
      return res.status(404).json({ error: 'Enneagram type not found in descriptions.' });
    }

    res.json({
      testName: fullResult.testName,
      type: fullResult.type,
      title: fullResult.title,
      description: fullResult.description
    });
  } catch (error) {
    console.error('Error calculating Enneagram result:', error);
    res.status(500).json({ error: 'An error occurred while processing Enneagram answers.' });
  }
}

/**
 * GET /enneagram/descriptions
 * Retrieve all Enneagram type descriptions
 */
export async function getEnneagramDescriptions(req, res) {
  try {
    const descriptions = await Description.find({});
    res.json(descriptions);
  } catch (err) {
    console.error('Failed to retrieve Enneagram descriptions:', err);
    res.status(500).json({ error: 'Unable to fetch Enneagram descriptions.' });
  }
}

/**
 * GET /enneagram/results/:id
 * Retrieve a saved Enneagram result by its database ID
 */
export async function getEnneagramResultById(req, res) {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: 'Invalid result ID format.' });
  }

  try {
    const result = await Result.findById(id);
    if (!result) {
      return res.status(404).json({ error: 'No Enneagram result found with that ID.' });
    }
    res.json(result);
  } catch (err) {
    console.error('Failed to retrieve Enneagram result by ID:', err);
    res.status(500).json({ error: 'Error fetching Enneagram result.' });
  }
}

/**
 * POST /enneagram/results
 * Save a new Enneagram result to the database
 */
export async function saveEnneagramResult(req, res) {
  try {
    const newResult = new Result(req.body);
    const saved = await newResult.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error('Failed to save Enneagram result:', err);
    res.status(500).json({ error: 'Could not save the Enneagram result.' });
  }
}

