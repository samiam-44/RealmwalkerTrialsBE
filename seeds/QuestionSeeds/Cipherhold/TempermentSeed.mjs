import mongoose from 'mongoose';
import Question from '../../../models/Question.mjs';
import Quiz from '../../../models/Quiz.mjs';
import connectDB from '../../../db/conn.mjs';

const TemperamentQuestions = [
  {
    title: "Temperament Archives",
    text: "When faced with a new project, I usually:",
    options: [
      { text: "Get excited and rally others to join me", type: "Sanguine" },
      { text: "Take control and set clear goals", type: "Choleric" },
      { text: "Plan carefully and analyze every detail", type: "Melancholic" },
      { text: "Prefer to support quietly and keep things steady", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "In social gatherings, I tend to:",
    options: [
      { text: "Be the center of attention and tell stories", type: "Sanguine" },
      { text: "Lead conversations and organize activities", type: "Choleric" },
      { text: "Observe quietly and reflect on the people", type: "Melancholic" },
      { text: "Enjoy listening and making others feel comfortable", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "When making decisions, I rely mostly on:",
    options: [
      { text: "My intuition and enthusiasm", type: "Sanguine" },
      { text: "My logic and determination", type: "Choleric" },
      { text: "My careful analysis and facts", type: "Melancholic" },
      { text: "My calmness and desire for harmony", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "I handle conflict by:",
    options: [
      { text: "Trying to lighten the mood and move on", type: "Sanguine" },
      { text: "Confronting it directly and finding a solution", type: "Choleric" },
      { text: "Thinking deeply before responding", type: "Melancholic" },
      { text: "Avoiding it and seeking peace", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "My work style is best described as:",
    options: [
      { text: "Flexible and spontaneous", type: "Sanguine" },
      { text: "Focused and goal-oriented", type: "Choleric" },
      { text: "Meticulous and organized", type: "Melancholic" },
      { text: "Consistent and dependable", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "When stressed, I tend to:",
    options: [
      { text: "Seek social support and distraction", type: "Sanguine" },
      { text: "Become impatient and assertive", type: "Choleric" },
      { text: "Withdraw and worry", type: "Melancholic" },
      { text: "Become passive and avoid problems", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "My communication style is:",
    options: [
      { text: "Warm and expressive", type: "Sanguine" },
      { text: "Direct and commanding", type: "Choleric" },
      { text: "Careful and precise", type: "Melancholic" },
      { text: "Gentle and calm", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "I am motivated most by:",
    options: [
      { text: "Fun and social connection", type: "Sanguine" },
      { text: "Achievement and challenge", type: "Choleric" },
      { text: "Perfection and meaning", type: "Melancholic" },
      { text: "Stability and peace", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "In a team, I usually:",
    options: [
      { text: "Bring energy and enthusiasm", type: "Sanguine" },
      { text: "Take the lead and make decisions", type: "Choleric" },
      { text: "Provide detailed planning and quality control", type: "Melancholic" },
      { text: "Support others and keep harmony", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "I feel most comfortable when:",
    options: [
      { text: "Surrounded by friends and laughter", type: "Sanguine" },
      { text: "In control of my goals and progress", type: "Choleric" },
      { text: "In a quiet and orderly environment", type: "Melancholic" },
      { text: "In a calm, supportive setting", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "When learning new things, I prefer:",
    options: [
      { text: "Group discussions and interactive activities", type: "Sanguine" },
      { text: "Challenging tasks that test my skills", type: "Choleric" },
      { text: "Thorough research and reflection", type: "Melancholic" },
      { text: "Step-by-step guidance and patience", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "My friends describe me as:",
    options: [
      { text: "Fun-loving and outgoing", type: "Sanguine" },
      { text: "Driven and determined", type: "Choleric" },
      { text: "Thoughtful and serious", type: "Melancholic" },
      { text: "Loyal and dependable", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "When faced with criticism, I tend to:",
    options: [
      { text: "Brush it off quickly and move on", type: "Sanguine" },
      { text: "Defend my position firmly", type: "Choleric" },
      { text: "Take it to heart and reflect deeply", type: "Melancholic" },
      { text: "Try to keep peace and avoid confrontation", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "I recharge best by:",
    options: [
      { text: "Spending time with friends and having fun", type: "Sanguine" },
      { text: "Working towards a new goal or project", type: "Choleric" },
      { text: "Having quiet time alone to think", type: "Melancholic" },
      { text: "Relaxing in a calm, familiar environment", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "My ideal work environment is:",
    options: [
      { text: "Dynamic and social", type: "Sanguine" },
      { text: "Fast-paced and challenging", type: "Choleric" },
      { text: "Structured and detailed", type: "Melancholic" },
      { text: "Stable and supportive", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "When solving problems, I tend to:",
    options: [
      { text: "Brainstorm with others and think creatively", type: "Sanguine" },
      { text: "Take charge and find quick solutions", type: "Choleric" },
      { text: "Analyze all the details carefully", type: "Melancholic" },
      { text: "Look for peaceful, compromise solutions", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "I express my emotions by:",
    options: [
      { text: "Being lively and openly expressive", type: "Sanguine" },
      { text: "Being direct and assertive", type: "Choleric" },
      { text: "Being reserved and thoughtful", type: "Melancholic" },
      { text: "Being calm and steady", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "My main strength is:",
    options: [
      { text: "Making friends easily", type: "Sanguine" },
      { text: "Leading and motivating others", type: "Choleric" },
      { text: "Being detail-oriented and responsible", type: "Melancholic" },
      { text: "Being reliable and supportive", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "When working under pressure, I:",
    options: [
      { text: "Stay energetic and optimistic", type: "Sanguine" },
      { text: "Focus on tasks and push forward", type: "Choleric" },
      { text: "Become serious and careful", type: "Melancholic" },
      { text: "Stay calm and steady", type: "Phlegmatic" }
    ]
  },
  {
    title: "Temperament Archives",
    text: "I feel happiest when:",
    options: [
      { text: "Surrounded by people and fun activities", type: "Sanguine" },
      { text: "Achieving important goals", type: "Choleric" },
      { text: "Creating something meaningful and perfect", type: "Melancholic" },
      { text: "Enjoying peace and quiet", type: "Phlegmatic" }
    ]
  },
];

const seedTemperamentQuestions = async () => {
  try {
    await connectDB();

    for (const q of TemperamentQuestions) {
      const quiz = await Quiz.findOne({ title: q.title });
      if (!quiz) {
        console.warn(`Quiz not found: ${q.title}`);
        continue;
      }

      const { title, ...questionData } = q;

      const newQuestion = new Question({
        ...questionData,
        quiz: quiz._id,
      });

      const savedQuestion = await newQuestion.save();

      if (!quiz.questions) quiz.questions = [];
      quiz.questions.push(savedQuestion._id);
      await quiz.save();

      console.log(`Added question: "${q.text}" to quiz: "${quiz.title}"`);
    }

    console.log('All Temperament Archives questions seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding Temperament Archives questions:', error);
    process.exit(1);
  }
};

seedTemperamentQuestions();

