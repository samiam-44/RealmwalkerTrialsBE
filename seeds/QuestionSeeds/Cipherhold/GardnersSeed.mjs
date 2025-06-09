import mongoose from 'mongoose';
import Question from '../../models/Question.mjs';
import Quiz from '../../models/Quiz.mjs';
import connectDB from '../../db/conn.mjs';

const GardnersQuestions = [
    {
        title: "Gardner's Intelligence",
        text: "I enjoy reading books and writing stories or essays.",
        intelligenceType: "Linguistic",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I find it easy to learn new words and use them in conversation.",
        intelligenceType: "Linguistic",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I enjoy solving word puzzles or playing word games like Scrabble.",
        intelligenceType: "Linguistic",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I often keep a journal or write notes and reflections.",
        intelligenceType: "Linguistic",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I enjoy working with numbers and solving math problems.",
        intelligenceType: "Logical-Mathematical",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I like to find patterns and analyze relationships between ideas.",
        intelligenceType: "Logical-Mathematical",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I enjoy playing strategy games or solving logic puzzles.",
        intelligenceType: "Logical-Mathematical",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I can easily perform mental math calculations.",
        intelligenceType: "Logical-Mathematical",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I like to draw, doodle, or visualize things in my head.",
        intelligenceType: "Spatial",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I enjoy designing things or building models.",
        intelligenceType: "Spatial",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I’m good at reading maps, charts, and diagrams.",
        intelligenceType: "Spatial",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I can easily picture objects or scenes from different angles.",
        intelligenceType: "Spatial",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I learn best when I move or do something physical.",
        intelligenceType: "Bodily-Kinesthetic",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I enjoy dancing, sports, or physical activities.",
        intelligenceType: "Bodily-Kinesthetic",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I use gestures and hands when I talk or explain things.",
        intelligenceType: "Bodily-Kinesthetic",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I enjoy working with tools, hands-on activities, or crafts.",
        intelligenceType: "Bodily-Kinesthetic",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I can recognize and remember melodies or rhythms easily.",
        intelligenceType: "Musical",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I enjoy listening to or playing music regularly.",
        intelligenceType: "Musical",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I often tap rhythms or hum without thinking.",
        intelligenceType: "Musical",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I can play a musical instrument or sing well.",
        intelligenceType: "Musical",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I enjoy working in teams or group settings.",
        intelligenceType: "Interpersonal",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I can easily understand others’ feelings or points of view.",
        intelligenceType: "Interpersonal",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I enjoy helping or teaching others.",
        intelligenceType: "Interpersonal",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "People often come to me for advice or support.",
        intelligenceType: "Interpersonal",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I spend a lot of time reflecting on my thoughts and feelings.",
        intelligenceType: "Intrapersonal",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I understand my strengths and weaknesses well.",
        intelligenceType: "Intrapersonal",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I like to set goals and evaluate my own progress.",
        intelligenceType: "Intrapersonal",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I prefer working independently over group work.",
        intelligenceType: "Intrapersonal",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I enjoy being outdoors and exploring nature.",
        intelligenceType: "Naturalistic",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I can recognize different types of plants, animals, or rocks.",
        intelligenceType: "Naturalistic",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I feel calm or inspired when surrounded by nature.",
        intelligenceType: "Naturalistic",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
    {
        title: "Gardner's Intelligence",
        text: "I’m interested in environmental issues and sustainability.",
        intelligenceType: "Naturalistic",
        options: [{ text: "Yes", value: 1 }, { text: "No", value: 0 }]
    },
];

const seedGardnersQuestions = async () => {
    try {
        await connectDB();

        for (const q of GardnersQuestions) {
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

        console.log("All Gardner's Intelligence questions seeded successfully.");
        process.exit(0);
    } catch (error) {
        console.error("Error seeding Gardner's Intelligence questions:", error);
        process.exit(1);
    }
};

seedGardnersQuestions();

