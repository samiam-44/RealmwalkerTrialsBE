import Question from '../../models/Question.mjs'; 
import EnneagramResult from '../../models/AnswerModels/CipherholdModels/EnneagramModel.mjs';

// This function takes user answers and calculates their Enneagram type
export async function calculateEnneagramScore(answers) {
  // Validate that answers exist and are in array format
  if (!answers || !Array.isArray(answers)) {
    throw new Error("Invalid answers format");
  }

  // Extract question IDs from answers
  const questionIds = answers.map(a => a.questionId);
  
  // Fetch matching questions from the database
  const questions = await Question.find({ _id: { $in: questionIds } });

  // Initialize scores object for each Enneagram type (1 through 9)
  const scores = Object.fromEntries([...Array(9)].map((_, i) => [i + 1, 0]));

  // Loop through each answer and add 1 point to the selected Enneagram type
  for (const ans of answers) {
    const question = questions.find(q => q._id.equals(ans.questionId));
    if (!question) continue;

    const val = Number(ans.selectedValue);

    // Only count scores from 1 to 9 (skip "0" or invalid values)
    if (val >= 1 && val <= 9) {
      scores[val] += 1;
    }
  }

  // Determine the highest score among all types
  const maxScore = Math.max(...Object.values(scores));

  // Get all types that share the top score
  const topTypes = Object.entries(scores)
    .filter(([_, score]) => score === maxScore)
    .map(([type]) => type);

  // Pick the first type as the primary result
  const topType = topTypes[0];

  // Fetch full result description from Enneagram model
  const fullResult = await EnneagramResult.findOne({ type: `Type ${topType}` });

  // Return the full breakdown
  return { scores, topTypes, fullResult };
}