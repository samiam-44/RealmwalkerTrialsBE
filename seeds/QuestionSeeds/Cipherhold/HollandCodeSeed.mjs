import mongoose from 'mongoose';
import Question from '../../models/Question.mjs';
import Quiz from '../../models/Quiz.mjs';
import connectDB from '../../db/conn.mjs';

const HollandQuestions = [
    {
        quizTitle: "Holland Code Extractor",
        text: "Lay brick or tile",
        options: [
            { text: "Dislike", value: 1 },
            { text: "Slightly Dislike", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Slightly Enjoy", value: 4 },
            { text: "Enjoy", value: 5 }
        ]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Solve complex math problems",
        options: [
            { text: "Dislike", value: 1 },
            { text: "Slightly Dislike", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Slightly Enjoy", value: 4 },
            { text: "Enjoy", value: 5 }
        ]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Write a story, article, or play",
        options: [
            { text: "Dislike", value: 1 },
            { text: "Slightly Dislike", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Slightly Enjoy", value: 4 },
            { text: "Enjoy", value: 5 }
        ]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Teach children how to read",
        options: [
            { text: "Dislike", value: 1 },
            { text: "Slightly Dislike", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Slightly Enjoy", value: 4 },
            { text: "Enjoy", value: 5 }
        ]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Start your own business",
        options: [
            { text: "Dislike", value: 1 },
            { text: "Slightly Dislike", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Slightly Enjoy", value: 4 },
            { text: "Enjoy", value: 5 }
        ]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Keep detailed financial records",
        options: [
            { text: "Dislike", value: 1 },
            { text: "Slightly Dislike", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Slightly Enjoy", value: 4 },
            { text: "Enjoy", value: 5 }
        ]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Fix a car engine",
        options: [
            { text: "Dislike", value: 1 },
            { text: "Slightly Dislike", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Slightly Enjoy", value: 4 },
            { text: "Enjoy", value: 5 }
        ]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Conduct laboratory experiments",
        options: [
            { text: "Dislike", value: 1 },
            { text: "Slightly Dislike", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Slightly Enjoy", value: 4 },
            { text: "Enjoy", value: 5 }
        ]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Paint, draw, or sculpt",
        options: [
            { text: "Dislike", value: 1 },
            { text: "Slightly Dislike", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Slightly Enjoy", value: 4 },
            { text: "Enjoy", value: 5 }
        ]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Care for sick people",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 },
        { text: "Neutral", value: 3 },
        { text: "Slightly Enjoy", value: 4 },
        { text: "Enjoy", value: 5 }
        ]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Convince others to see things your way",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Organize schedules or appointments",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Work outdoors building something",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Analyze scientific data",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Perform in a play or film",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Help people overcome personal challenges",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Lead a fundraising campaign",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Keep track of office supplies",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Install and maintain plumbing systems",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Research medical conditions",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Design clothing or interior spaces",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Work as a volunteer for a social cause",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Plan and execute a marketing campaign",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Maintain database systems",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Use power tools and construction equipment",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Study the behavior of animals or people",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Compose music or songs",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Train or coach a team",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Develop a business plan",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
    {
        quizTitle: "Holland Code Extractor",
        text: "Enter data into spreadsheets accurately",
        options: [{ text: "Dislike", value: 1 }, { text: "Slightly Dislike", value: 2 }, { text: "Neutral", value: 3 }, { text: "Slightly Enjoy", value: 4 }, { text: "Enjoy", value: 5 }]
    },
];

const seedHollandQuestions = async () => {
    try {
        await connectDB();

        for (const q of HollandQuestions) {
            const quiz = await Quiz.findOne({ title: q.quizTitle });
            if (!quiz) {
                console.warn(`Quiz not found: ${q.quizTitle}`);
                continue;
            }

            const { quizTitle, ...questionData } = q;

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

        console.log('All Holland Code Extractor questions seeded successfully.');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding Holland Code Extractor questions:', error);
        process.exit(1);
    }
};

seedHollandQuestions();
