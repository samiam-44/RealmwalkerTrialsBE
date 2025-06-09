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

// Main function to seed Enneagram questions
const seedOCEANQuestions = async () => {
    try {
        // Connect to MongoDB database
        await connectDB();

        // Loop through each Enneagram question
        for (const q of OCEANQuestions) {
            // Find the quiz document that this question belongs to
            const quiz = await Quiz.findOne({ title: q.Title });

            // Skip if quiz not found
            if (!quiz) {
                console.warn(`Quiz not found: ${q.Title}`);
                continue;
            }

            // Remove quizTitle before creating question document
            const { Title, ...questionData } = q;

            // Create and save the question with reference to the quiz ID
            const newQuestion = new Question({
                ...questionData,
                quiz: quiz._id,
            });

            const savedQuestion = await newQuestion.save();

            // Add this question to the quiz's question list
            if (!quiz.questions) quiz.questions = [];
            quiz.questions.push(savedQuestion._id);

            await quiz.save(); // Save the updated quiz document

            console.log(`Added OCEAN question: "${q.text}"`);
        }

        console.log('All OCEAN questions seeded successfully.');
        process.exit(0); // Exit successfully
    } catch (error) {
        console.error('Error seeding Enneagram questions:', error);
        process.exit(1); // Exit with error
    }
};

// Run the seed function
seedOCEANQuestions();