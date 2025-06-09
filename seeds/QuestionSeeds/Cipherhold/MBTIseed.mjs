//QUESTIONS FOR CipherholdREAlM
import mongoose from 'mongoose';
import Question from '../../models/Question.mjs';
import Quiz from '../../models/Quiz.mjs';
import connectDB from '../../db/conn.mjs';


const MBTIQuestions = [
  //MEYER BRIGGS TEST
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You find it takes effort to introduce yourself to other people.",
    options: [
      { text: "Agree", value: "I" },
      { text: "Disagree", value: "E" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You consider yourself more practical than creative.",
    options: [
      { text: "Agree", value: "S" },
      { text: "Disagree", value: "N" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "Winning a debate matters less to you than making sure no one gets upset.",
    options: [
      { text: "Agree", value: "F" },
      { text: "Disagree", value: "T" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You get energized going to social events that involve many interactions.",
    options: [
      { text: "Agree", value: "E" },
      { text: "Disagree", value: "I" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You often spend time exploring unrealistic and impractical ideas, yet intriguing ones.",
    options: [
      { text: "Agree", value: "N" },
      { text: "Disagree", value: "S" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "Your travel plans are more likely to look like a rough list of ideas than a detailed itinerary.",
    options: [
      { text: "Agree", value: "P" },
      { text: "Disagree", value: "J" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You often think about what you should have said in a conversation long after it has taken place.",
    options: [
      { text: "Agree", value: "I" },
      { text: "Disagree", value: "E" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "If your friend is sad about something, your first instinct is to support them emotionally, not try to solve their problem.",
    options: [
      { text: "Agree", value: "F" },
      { text: "Disagree", value: "T" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You rarely second-guess the choices that you’ve made.",
    options: [
      { text: "Agree", value: "J" },
      { text: "Disagree", value: "P" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You find it easy to empathize with a person whose experiences are very different from yours.",
    options: [
      { text: "Agree", value: "F" },
      { text: "Disagree", value: "T" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You prefer to completely finish one project before starting another.",
    options: [
      { text: "Agree", value: "J" },
      { text: "Disagree", value: "P" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You are more inclined to follow your head than your heart.",
    options: [
      { text: "Agree", value: "T" },
      { text: "Disagree", value: "F" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You usually prefer just doing what you feel like at any given moment instead of planning a particular daily routine.",
    options: [
      { text: "Agree", value: "P" },
      { text: "Disagree", value: "J" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You enjoy participating in group activities.",
    options: [
      { text: "Agree", value: "E" },
      { text: "Disagree", value: "I" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You like books and movies that make you come up with your own interpretation of the ending.",
    options: [
      { text: "Agree", value: "N" },
      { text: "Disagree", value: "S" }
    ]
  },
  {
    quizTitle: "Myers-Briggs Codex (MBTI)",
    text: "You trust experience more than theoretical concepts.",
    options: [
      { text: "Agree", value: "S" },
      { text: "Disagree", value: "N" }
    ]
  }
]

// Main function to seed MBTI questions
const seedMBTIQuestions = async () => {
  try {
    // Connect to databse
    await connectDB();

    // Loop through each MBTI question
    for (const q of MBTIQuestions) {
      // Find the quiz document that this question belongs to
      const quiz = await Quiz.findOne({ title: q.quizTitle });

      // Skip this question if the quiz isn't found in the database
      if (!quiz) {
        console.warn(`Quiz not found: ${q.quizTitle}`);
        continue;
      }

      // Remove quizTitle before saving question document
      const { quizTitle, ...questionData } = q;

      // Create a new Question document, linking to quiz by ID
      const newQuestion = new Question({
        ...questionData,
        quiz: quiz._id,
      });

      // Save the question to the database
      const savedQuestion = await newQuestion.save();

      // Add the question reference to the quiz document (if array exists)
      if (!quiz.questions) quiz.questions = [];
      quiz.questions.push(savedQuestion._id);

      // Save the updated quiz document
      await quiz.save();

      console.log(`Added MBTI question: "${q.text}"`);
    }

    console.log('All MBTI questions seeded successfully.');
    process.exit(0); // Exit script cleanly
  } catch (error) {
    console.error('Error seeding MBTI questions:', error);
    process.exit(1); // Exit with failure
  }
};

// Run the seed function
seedMBTIQuestions();