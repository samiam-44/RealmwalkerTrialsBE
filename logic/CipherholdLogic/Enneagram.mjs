import Question from '../../models/Question.mjs';
import Description from '../../models/Descriptions.mjs'; 

export async function calculateEnneagramScore(answers) {
  if (!answers || !Array.isArray(answers)) {
    throw new Error("Invalid answers format");
  }

  const questionIds = answers.map(a => a.questionId);
  const questions = await Question.find({ _id: { $in: questionIds } });

  const scores = Object.fromEntries([...Array(9)].map((_, i) => [i + 1, 0]));

  for (const ans of answers) {
    const question = questions.find(q => q._id.equals(ans.questionId));
    if (!question) continue;

    const val = Number(ans.selectedValue);
    if (val >= 1 && val <= 9) {
      scores[val] += 1;
    }
  }

  const maxScore = Math.max(...Object.values(scores));
  const topTypes = Object.entries(scores)
    .filter(([_, score]) => score === maxScore)
    .map(([type]) => type);

  const topType = topTypes[0];

  const fullResult = await Description.findOne({
    testName: 'Enneagram',
    type: `Type ${topType}`
  });

  return { scores, topTypes, fullResult };
}
