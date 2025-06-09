// Import dependencies
import mongoose from 'mongoose';
import Question from '../../models/Question.mjs';
import Quiz from '../../models/Quiz.mjs';
import connectDB from '../../db/conn.mjs';

// Array of Enneagram-related questions
const EnneagramQuestions = [

    {
        quizTitle: "Enneagram Sigils",
        text: "I strive for perfection in all I do.",
        options: [
            { text: "Agree", value: "1" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I work hard to be helpful to others.",
        options: [
            { text: "Agree", value: "2" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I want to be seen as successful and admired.",
        options: [
            { text: "Agree", value: "3" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I often feel misunderstood and emotionally deep.",
        options: [
            { text: "Agree", value: "4" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I rely on logic and knowledge to navigate life.",
        options: [
            { text: "Agree", value: "5" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I’m always preparing for what could go wrong.",
        options: [
            { text: "Agree", value: "6" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I seek excitement and avoid pain at all costs.",
        options: [
            { text: "Agree", value: "7" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I assert control to protect myself and others.",
        options: [
            { text: "Agree", value: "8" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I go along with others to keep the peace.",
        options: [
            { text: "Agree", value: "9" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "Criticism hits me harder than most people.",
        options: [
            { text: "Agree", value: "1" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I often sacrifice my own needs for others.",
        options: [
            { text: "Agree", value: "2" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "Achieving goals gives me a sense of identity.",
        options: [
            { text: "Agree", value: "3" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I feel emotions more intensely than others.",
        options: [
            { text: "Agree", value: "4" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I need time alone to recharge and reflect.",
        options: [
            { text: "Agree", value: "5" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I’m skeptical of others until I know they’re safe.",
        options: [
            { text: "Agree", value: "6" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I like to keep my options open and avoid being tied down.",
        options: [
            { text: "Agree", value: "7" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I confront issues head-on without hesitation.",
        options: [
            { text: "Agree", value: "8" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "Harmony is more important than getting my way.",
        options: [
            { text: "Agree", value: "9" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I hold myself to very high standards and dislike making mistakes.",
        options: [
            { text: "Agree", value: "1" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I find great satisfaction in supporting and caring for others.",
        options: [
            { text: "Agree", value: "2" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I feel driven to excel and be recognized for my achievements.",
        options: [
            { text: "Agree", value: "3" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I experience emotions in a profound way and value authenticity.",
        options: [
            { text: "Agree", value: "4" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I prefer to gather information and analyze before acting.",
        options: [
            { text: "Agree", value: "5" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I tend to worry about what might go wrong and prepare accordingly.",
        options: [
            { text: "Agree", value: "6" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I enjoy new experiences and dislike feeling confined or limited.",
        options: [
            { text: "Agree", value: "7" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I am comfortable taking charge and standing up for myself and others.",
        options: [
            { text: "Agree", value: "8" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "Enneagram Sigils",
        text: "I value peace and avoid conflict whenever possible.",
        options: [
            { text: "Agree", value: "9" },
            { text: "Disagree", value: "0" }
        ]
    },
    //OCEAN PROTOCOL----------------------------------------------------------
    {
        quizTitle: "OCEAN Protocol",
        text: "I have a vivid imagination.",
        options: [
            { text: "Agree", value: "O" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I enjoy thinking about abstract concepts.",
        options: [
            { text: "Agree", value: "O" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I am full of ideas.",
        options: [
            { text: "Agree", value: "O" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I enjoy artistic and creative experiences.",
        options: [
            { text: "Agree", value: "O" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I tend to be original and come up with new ideas.",
        options: [
            { text: "Agree", value: "O" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I am curious about many different things.",
        options: [
            { text: "Agree", value: "O" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I prefer variety over routine.",
        options: [
            { text: "Agree", value: "O" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I have a rich vocabulary.",
        options: [
            { text: "Agree", value: "O" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I pay attention to details.",
        options: [
            { text: "Agree", value: "C" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I follow a schedule.",
        options: [
            { text: "Agree", value: "C" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I like order.",
        options: [
            { text: "Agree", value: "C" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I always complete tasks successfully.",
        options: [
            { text: "Agree", value: "C" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I make plans and stick to them.",
        options: [
            { text: "Agree", value: "C" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I am exacting in my work.",
        options: [
            { text: "Agree", value: "C" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I get chores done right away.",
        options: [
            { text: "Agree", value: "C" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I do things according to a plan.",
        options: [
            { text: "Agree", value: "C" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I feel comfortable around people.",
        options: [
            { text: "Agree", value: "E" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I am the life of the party.",
        options: [
            { text: "Agree", value: "E" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I start conversations.",
        options: [
            { text: "Agree", value: "E" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I talk to a lot of different people at parties.",
        options: [
            { text: "Agree", value: "E" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I don’t mind being the center of attention.",
        options: [
            { text: "Agree", value: "E" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I make friends easily.",
        options: [
            { text: "Agree", value: "E" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I am skilled in handling social situations.",
        options: [
            { text: "Agree", value: "E" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I am outgoing and sociable.",
        options: [
            { text: "Agree", value: "E" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I sympathize with others’ feelings.",
        options: [
            { text: "Agree", value: "A" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I take time out for others.",
        options: [
            { text: "Agree", value: "A" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I feel others’ emotions.",
        options: [
            { text: "Agree", value: "A" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I make people feel at ease.",
        options: [
            { text: "Agree", value: "A" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I am interested in people.",
        options: [
            { text: "Agree", value: "A" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I have a soft heart.",
        options: [
            { text: "Agree", value: "A" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I am helpful and unselfish with others.",
        options: [
            { text: "Agree", value: "A" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I trust others.",
        options: [
            { text: "Agree", value: "A" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I get stressed out easily.",
        options: [
            { text: "Agree", value: "N" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I worry about things.",
        options: [
            { text: "Agree", value: "N" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I am easily disturbed.",
        options: [
            { text: "Agree", value: "N" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I change my mood a lot.",
        options: [
            { text: "Agree", value: "N" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I get irritated easily.",
        options: [
            { text: "Agree", value: "N" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I often feel blue.",
        options: [
            { text: "Agree", value: "N" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I get upset easily.",
        options: [
            { text: "Agree", value: "N" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        quizTitle: "OCEAN Protocol",
        text: "I have frequent mood swings.",
        options: [
            { text: "Agree", value: "N" },
            { text: "Disagree", value: "0" }
        ]
    },
];

// Main function to seed Enneagram questions
const seedEnneagramQuestions = async () => {
    try {
        // Connect to MongoDB database
        await connectDB();

        // Loop through each Enneagram question
        for (const q of EnneagramQuestions) {
            // Find the quiz document that this question belongs to
            const quiz = await Quiz.findOne({ title: q.quizTitle });

            // Skip if quiz not found
            if (!quiz) {
                console.warn(`Quiz not found: ${q.quizTitle}`);
                continue;
            }

            // Remove quizTitle before creating question document
            const { quizTitle, ...questionData } = q;

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

            console.log(`Added Enneagram question: "${q.text}"`);
        }

        console.log('All Enneagram questions seeded successfully.');
        process.exit(0); // Exit successfully
    } catch (error) {
        console.error('Error seeding Enneagram questions:', error);
        process.exit(1); // Exit with error
    }
};

// Run the seed function
seedEnneagramQuestions();
