import mongoose from 'mongoose';
import Question from '../../models/Question.mjs';
import Quiz from '../../models/Quiz.mjs';
import connectDB from '../../db/conn.mjs';

const DISCQuestions = [
  {
    title: "DISC Signal Frequencies",
    text: "I am most satisfied when:",
    options: [
      { text: "I achieve big goals", type: "D" },
      { text: "I connect meaningfully with others", type: "I" },
      { text: "I provide support and stability", type: "S" },
      { text: "I complete work thoroughly and accurately", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "When working in a team, I usually:",
    options: [
      { text: "Take charge and set the direction", type: "D" },
      { text: "Encourage and motivate others", type: "I" },
      { text: "Help keep harmony and support", type: "S" },
      { text: "Focus on details and quality", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "I tend to make decisions based on:",
    options: [
      { text: "What will get results fastest", type: "D" },
      { text: "How it affects people emotionally", type: "I" },
      { text: "Keeping everyone comfortable", type: "S" },
      { text: "Following facts and data precisely", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "In stressful situations, I usually:",
    options: [
      { text: "Push harder to overcome challenges", type: "D" },
      { text: "Seek social support and talk it out", type: "I" },
      { text: "Stay calm and try to maintain stability", type: "S" },
      { text: "Analyze all details carefully", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "I am most energized when:",
    options: [
      { text: "I am leading and making quick decisions", type: "D" },
      { text: "I am socializing and inspiring others", type: "I" },
      { text: "I am helping others and building trust", type: "S" },
      { text: "I am organizing and perfecting tasks", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "When approaching new tasks, I prefer to:",
    options: [
      { text: "Jump right in and take control", type: "D" },
      { text: "Get input and build enthusiasm", type: "I" },
      { text: "Follow established procedures", type: "S" },
      { text: "Plan carefully before acting", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "Others describe me as:",
    options: [
      { text: "Assertive and determined", type: "D" },
      { text: "Friendly and persuasive", type: "I" },
      { text: "Dependable and patient", type: "S" },
      { text: "Precise and analytical", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "I handle conflict by:",
    options: [
      { text: "Confronting the problem directly", type: "D" },
      { text: "Trying to smooth things over with communication", type: "I" },
      { text: "Avoiding confrontation and seeking peace", type: "S" },
      { text: "Analyzing causes and finding logical solutions", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "I prefer to be recognized for:",
    options: [
      { text: "My leadership and results", type: "D" },
      { text: "My enthusiasm and charm", type: "I" },
      { text: "My loyalty and helpfulness", type: "S" },
      { text: "My accuracy and knowledge", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "When under pressure, I:",
    options: [
      { text: "Take quick action to regain control", type: "D" },
      { text: "Reach out for social support", type: "I" },
      { text: "Stay calm and patient", type: "S" },
      { text: "Focus on details and facts", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "My work style is best described as:",
    options: [
      { text: "Competitive and goal-oriented", type: "D" },
      { text: "Collaborative and persuasive", type: "I" },
      { text: "Consistent and supportive", type: "S" },
      { text: "Systematic and precise", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "When I want to influence others, I:",
    options: [
      { text: "Use logic and data", type: "C" },
      { text: "Use charm and enthusiasm", type: "I" },
      { text: "Show confidence and assertiveness", type: "D" },
      { text: "Demonstrate reliability and patience", type: "S" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "I get frustrated when:",
    options: [
      { text: "People waste time and avoid decisions", type: "D" },
      { text: "People are cold or unresponsive", type: "I" },
      { text: "People are pushy or impatient", type: "S" },
      { text: "People are careless or inaccurate", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "I prefer environments that are:",
    options: [
      { text: "Fast-paced and challenging", type: "D" },
      { text: "Friendly and social", type: "I" },
      { text: "Stable and predictable", type: "S" },
      { text: "Organized and detail-oriented", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "My communication style is:",
    options: [
      { text: "Direct and to the point", type: "D" },
      { text: "Expressive and animated", type: "I" },
      { text: "Patient and attentive", type: "S" },
      { text: "Careful and methodical", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "I am motivated by:",
    options: [
      { text: "Winning and success", type: "D" },
      { text: "Recognition and social approval", type: "I" },
      { text: "Security and belonging", type: "S" },
      { text: "Accuracy and expertise", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "I handle change by:",
    options: [
      { text: "Taking charge and adapting quickly", type: "D" },
      { text: "Getting others excited about the change", type: "I" },
      { text: "Helping others adjust patiently", type: "S" },
      { text: "Analyzing the details before proceeding", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "When I set goals, I:",
    options: [
      { text: "Set challenging targets and push hard", type: "D" },
      { text: "Set social and inspiring goals", type: "I" },
      { text: "Set realistic and steady goals", type: "S" },
      { text: "Set detailed and measurable goals", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "I prefer to be recognized for my:",
    options: [
      { text: "Leadership and drive", type: "D" },
      { text: "Charisma and friendliness", type: "I" },
      { text: "Loyalty and kindness", type: "S" },
      { text: "Precision and knowledge", type: "C" }
    ]
  },
  {
    title: "DISC Signal Frequencies",
    text: "In a group, I am often the one who:",
    options: [
      { text: "Takes the lead and pushes results", type: "D" },
      { text: "Engages and energizes the group", type: "I" },
      { text: "Keeps peace and supports others", type: "S" },
      { text: "Provides structure and quality control", type: "C" }
    ]
  }
];

// Function for seeding 
const seedDISCQuestions = async () => {
  try {
    await connectDB();

    for (const q of DISCQuestions) {
      const quiz = await Quiz.findOne({ title: q.title });

      if (!quiz) {
        console.warn(`Quiz not found: ${q.title}`);
        continue;
      }

      const { title, ...questionData } = q;

      const newQuestion = new Question({
        ...questionData,
        quiz: quiz._id
      });

      const savedQuestion = await newQuestion.save();

      if (!quiz.questions) quiz.questions = [];
      quiz.questions.push(savedQuestion._id);
      await quiz.save();

      console.log(`Added DISC question: "${q.text}"`);
    }

    console.log('All DISC questions seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding DISC questions:', error);
    process.exit(1);
  }
};

seedDISCQuestions();