import mongoose from 'mongoose';
import Question from '../../../models/Question.mjs';
import Quiz from '../../../models/Quiz.mjs';
import connectDB from '../../../db/conn.mjs';

const OCEANQuestions = [
{
    title: "OCEAN Protocol",
    text: "I have a vivid imagination.",
    options: [
        { text: "Agree", value: "O" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I enjoy thinking about abstract concepts.",
    options: [
        { text: "Agree", value: "O" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I am full of ideas.",
    options: [
        { text: "Agree", value: "O" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I enjoy artistic and creative experiences.",
    options: [
        { text: "Agree", value: "O" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I tend to be original and come up with new ideas.",
    options: [
        { text: "Agree", value: "O" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I am curious about many different things.",
    options: [
        { text: "Agree", value: "O" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I prefer variety over routine.",
    options: [
        { text: "Agree", value: "O" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I have a rich vocabulary.",
    options: [
        { text: "Agree", value: "O" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I pay attention to details.",
    options: [
        { text: "Agree", value: "C" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I follow a schedule.",
    options: [
        { text: "Agree", value: "C" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I like order.",
    options: [
        { text: "Agree", value: "C" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I always complete tasks successfully.",
    options: [
        { text: "Agree", value: "C" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I make plans and stick to them.",
    options: [
        { text: "Agree", value: "C" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I am exacting in my work.",
    options: [
        { text: "Agree", value: "C" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I get chores done right away.",
    options: [
        { text: "Agree", value: "C" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I do things according to a plan.",
    options: [
        { text: "Agree", value: "C" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I feel comfortable around people.",
    options: [
        { text: "Agree", value: "E" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I am the life of the party.",
    options: [
        { text: "Agree", value: "E" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I start conversations.",
    options: [
        { text: "Agree", value: "E" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I talk to a lot of different people at parties.",
    options: [
        { text: "Agree", value: "E" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I don’t mind being the center of attention.",
    options: [
        { text: "Agree", value: "E" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I make friends easily.",
    options: [
        { text: "Agree", value: "E" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I am skilled in handling social situations.",
    options: [
        { text: "Agree", value: "E" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I am outgoing and sociable.",
    options: [
        { text: "Agree", value: "E" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I sympathize with others’ feelings.",
    options: [
        { text: "Agree", value: "A" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I take time out for others.",
    options: [
        { text: "Agree", value: "A" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I feel others’ emotions.",
    options: [
        { text: "Agree", value: "A" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I make people feel at ease.",
    options: [
        { text: "Agree", value: "A" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I am interested in people.",
    options: [
        { text: "Agree", value: "A" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I have a soft heart.",
    options: [
        { text: "Agree", value: "A" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I am helpful and unselfish with others.",
    options: [
        { text: "Agree", value: "A" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I trust others.",
    options: [
        { text: "Agree", value: "A" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I get stressed out easily.",
    options: [
        { text: "Agree", value: "N" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I worry about things.",
    options: [
        { text: "Agree", value: "N" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I am easily disturbed.",
    options: [
        { text: "Agree", value: "N" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I change my mood a lot.",
    options: [
        { text: "Agree", value: "N" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I get irritated easily.",
    options: [
        { text: "Agree", value: "N" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I often feel blue.",
    options: [
        { text: "Agree", value: "N" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I get upset easily.",
    options: [
        { text: "Agree", value: "N" },
        { text: "Disagree", value: "0" }
    ]
},
{
    title: "OCEAN Protocol",
    text: "I have frequent mood swings.",
    options: [
        { text: "Agree", value: "N" },
        { text: "Disagree", value: "0" }
    ]
}
]

const seedOCEANQuestions = async () => {
  try {
    await connectDB();

    // Check for existing quiz or create it
    let quiz = await Quiz.findOne({ title: 'OCEAN Protocol' });

    if (!quiz) {
      quiz = new Quiz({
        title: 'OCEAN Protocol',
        description: 'OCEAN Personality Dimensions',
        questions: [],
      });
      await quiz.save();
      console.log('Created new quiz: OCEAN Protocol');
    }

    // Loop through each OCEAN question
    for (const q of OCEANQuestions) {
      const { title, ...questionData } = q;

      const newQuestion = new Question({
        ...questionData,
        quiz: quiz._id,
      });

      const savedQuestion = await newQuestion.save();

      if (!quiz.questions) quiz.questions = [];
      quiz.questions.push(savedQuestion._id);

      console.log(`Added OCEAN question: "${q.text}"`);
    }

    await quiz.save(); // Save updated quiz with questions
    console.log('All OCEAN questions seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding OCEAN questions:', error);
    process.exit(1);
  }
};

seedOCEANQuestions();