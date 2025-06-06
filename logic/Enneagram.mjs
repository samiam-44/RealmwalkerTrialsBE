import Quiz from '../models/Quiz.mjs';
import Question from '../models/Question.mjs';

//Get quiz questions
async function getEnneagramQuestions(req, res) {
    try {
        const quiz = await Quiz.findOne({ title: "Enneagram Sigils" });
        if (!quiz) return res.status(404).json({ error: "Enneagram trial not found" });

        const questions = await Question.find({ quiz: quiz._id })
        res.json({ questions });
    } catch (err) {
        console.error("Error fetching Enneagram questions:", err);
        res.status(500).json({ error: 'Server error'});
    }
};

//Scoring
async function calculateEnneagram(req, res) {
    try { 
        const { answers } = req.body;
       
        
    if (!answers || !Array.isArray(answers)) {
      return res.status(400).json({ error: "Invalid answers format" });
    }

    // Load questions from DB to validate and get values
    const questionIds = answers.map(a => a.questionId);
    const questions = await Question.find({ _id: { $in: questionIds } });

        // Initialize scores for types 1 through 9
    const scores = {
         1: 0, 
         2: 0, 
         3: 0, 
         4: 0, 
         5: 0, 
         6: 0, 
         7: 0, 
         8: 0, 
         9: 0 
        };

        // Calculate score by matching answer value to the scores object
    for (const ans of answers) {
      const question = questions.find(q => q._id.equals(ans.questionId));
      if (!question) continue; // ignore invalid question id

     // if 0, ignore — means disagreement / no points
     const val = Number(ans.selectedValue);
      if (val >= 1 && val <= 9) {
        scores[val] += val;
      }
    }

    // Find the highest scoring Enneagram type(s)
    const maxScore = Math.max(...Object.values(scores));
    const topTypes = Object.entries(scores)
      .filter(([type, score]) => score === maxScore)
      .map(([type]) => type);

    res.json({ scores, topTypes });
} catch (err) {
    console.error("Error calculating Enneagram result:", err);
    res.status(500).json({ error: "Server error" });
  }
}

export default { getEnneagramQuestions, calculateEnneagram }