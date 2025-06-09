// Import dependencies
import mongoose from 'mongoose';
import Question from '../../models/Question.mjs';
import Quiz from '../../models/Quiz.mjs';
import connectDB from '../../db/conn.mjs';


// Array of Enneagram-related questions
const EnneagramQuestions = [

    {
        title: "Enneagram Sigils",
        text: "I strive for perfection in all I do.",
        options: [
            { text: "Agree", value: "1" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I work hard to be helpful to others.",
        options: [
            { text: "Agree", value: "2" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I want to be seen as successful and admired.",
        options: [
            { text: "Agree", value: "3" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I often feel misunderstood and emotionally deep.",
        options: [
            { text: "Agree", value: "4" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I rely on logic and knowledge to navigate life.",
        options: [
            { text: "Agree", value: "5" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I’m always preparing for what could go wrong.",
        options: [
            { text: "Agree", value: "6" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I seek excitement and avoid pain at all costs.",
        options: [
            { text: "Agree", value: "7" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I assert control to protect myself and others.",
        options: [
            { text: "Agree", value: "8" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I go along with others to keep the peace.",
        options: [
            { text: "Agree", value: "9" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "Criticism hits me harder than most people.",
        options: [
            { text: "Agree", value: "1" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I often sacrifice my own needs for others.",
        options: [
            { text: "Agree", value: "2" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "Achieving goals gives me a sense of identity.",
        options: [
            { text: "Agree", value: "3" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I feel emotions more intensely than others.",
        options: [
            { text: "Agree", value: "4" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I need time alone to recharge and reflect.",
        options: [
            { text: "Agree", value: "5" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I’m skeptical of others until I know they’re safe.",
        options: [
            { text: "Agree", value: "6" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I like to keep my options open and avoid being tied down.",
        options: [
            { text: "Agree", value: "7" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I confront issues head-on without hesitation.",
        options: [
            { text: "Agree", value: "8" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "Harmony is more important than getting my way.",
        options: [
            { text: "Agree", value: "9" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I hold myself to very high standards and dislike making mistakes.",
        options: [
            { text: "Agree", value: "1" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I find great satisfaction in supporting and caring for others.",
        options: [
            { text: "Agree", value: "2" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I feel driven to excel and be recognized for my achievements.",
        options: [
            { text: "Agree", value: "3" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I experience emotions in a profound way and value authenticity.",
        options: [
            { text: "Agree", value: "4" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I prefer to gather information and analyze before acting.",
        options: [
            { text: "Agree", value: "5" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I tend to worry about what might go wrong and prepare accordingly.",
        options: [
            { text: "Agree", value: "6" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I enjoy new experiences and dislike feeling confined or limited.",
        options: [
            { text: "Agree", value: "7" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I am comfortable taking charge and standing up for myself and others.",
        options: [
            { text: "Agree", value: "8" },
            { text: "Disagree", value: "0" }
        ]
    },
    {
        title: "Enneagram Sigils",
        text: "I value peace and avoid conflict whenever possible.",
        options: [
            { text: "Agree", value: "9" },
            { text: "Disagree", value: "0" }
        ]
    }
];

// Main function to seed Enneagram questions
const seedEnneagramQuestions = async () => {
    try {
        // Connect to MongoDB database
        await connectDB();

        // Loop through each Enneagram question
        for (const q of EnneagramQuestions) {
            // Find the quiz document that this question belongs to
            const quiz = await Quiz.findOne({ title: q.title });

            // Skip if quiz not found
            if (!quiz) {
                console.warn(`Quiz not found: ${q.title}`);
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
