import mongoose from 'mongoose';  // Needed for ObjectId conversion
import Question from '../../models/Question.mjs';
import Description from '../../models/Descriptions.mjs'; 

export async function calculateEnneagramScore(answers) {
  if (!answers || !Array.isArray(answers)) {
    throw new Error("Invalid answers format");
  }

  // Convert questionId strings to ObjectId instances safely, filtering out invalid ones
  const questionIds = answers
    .map(a => {
      try {
        return new mongoose.Types.ObjectId(a.questionId);
      } catch (err) {
        console.warn('Invalid ObjectId:', a.questionId);
        return null; // skip invalid ids
      }
    })
    .filter(id => id !== null);

  // Fetch all questions with these IDs from DB
  const questions = await Question.find({ _id: { $in: questionIds } });

  // Initialize scores object for types 1 through 9
  const scores = Object.fromEntries([...Array(9)].map((_, i) => [i + 1, 0]));

  for (const ans of answers) {
    // Find matching question by ObjectId
    const question = questions.find(q => q._id.equals(new mongoose.Types.ObjectId(ans.questionId)));
    if (!question) continue; // skip if question not found

    const val = Number(ans.selectedValue);

    // Only count valid values between 1 and 9
    if (val >= 1 && val <= 9) {
      scores[val] += 1;
    }
  }

  // Find max score among all types
  const maxScore = Math.max(...Object.values(scores));

  // Get all types that have the max score (in case of ties)
  const topTypes = Object.entries(scores)
    .filter(([_, score]) => score === maxScore)
    .map(([type]) => type);

  // Choose the first top type for lookup
  const topType = topTypes[0];

  // Convert topType to string and trim spaces to ensure DB match
  const topTypeClean = topType.toString().trim();

  // Find description matching the testName and type (exsmple "Type 1")
  const fullResult = await Description.findOne({
    testName: 'Enneagram Sigils',
    type: `Type ${topTypeClean}`
  });

  return { scores, topTypes, fullResult };
}
