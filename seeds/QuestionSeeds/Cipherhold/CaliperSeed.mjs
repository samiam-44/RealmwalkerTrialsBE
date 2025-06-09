import mongoose from 'mongoose';
import Question from '../../../models/Question.mjs';
import Quiz from '../../../models/Quiz.mjs';
import connectDB from '../../../db/conn.mjs';

const CaliperQuestions = [
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Assertiveness",
        facet: "Confidence",
        text: "I feel comfortable leading others and taking initiative.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Assertiveness",
        facet: "Persuasiveness",
        text: "I enjoy persuading others to see my point of view.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Assertiveness",
        facet: "Dominance",
        text: "I avoid taking charge even when I know the best course of action.",
        reverse: true,
        options: [
            { text: "Strongly Disagree", value: 5 },
            { text: "Disagree", value: 4 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 2 },
            { text: "Strongly Agree", value: 1 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Urgency",
        facet: "Drive",
        text: "I work best when I have tight deadlines and pressure.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Urgency",
        facet: "Impatience",
        text: "I get frustrated when things move too slowly.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Urgency",
        facet: "Restlessness",
        text: "I feel uneasy when there’s nothing urgent to do.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Self-Discipline",
        facet: "Consistency",
        text: "I often have trouble sticking with my goals.",
        reverse: true,
        options: [
            { text: "Strongly Disagree", value: 5 },
            { text: "Disagree", value: 4 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 2 },
            { text: "Strongly Agree", value: 1 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Self-Discipline",
        facet: "Persistence",
        text: "I usually finish tasks even when they are difficult or boring.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Self-Discipline",
        facet: "Planning",
        text: "I often jump into tasks without planning.",
        reverse: true,
        options: [
            { text: "Strongly Disagree", value: 5 },
            { text: "Disagree", value: 4 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 2 },
            { text: "Strongly Agree", value: 1 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Thoroughness",
        facet: "Detail Orientation",
        text: "I carefully check over work for accuracy before submission.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Thoroughness",
        facet: "Precision",
        text: "I notice small errors or inconsistencies in data or text.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Thoroughness",
        facet: "Responsibility",
        text: "I feel a strong obligation to complete tasks accurately and thoroughly.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Openness",
        facet: "Creativity",
        text: "I often come up with innovative solutions to problems.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Openness",
        facet: "Curiosity",
        text: "I enjoy exploring new topics even if they’re unfamiliar to me.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Openness",
        facet: "Flexibility",
        text: "I resist changing my routines or viewpoints.",
        reverse: true,
        options: [
            { text: "Strongly Disagree", value: 5 },
            { text: "Disagree", value: 4 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 2 },
            { text: "Strongly Agree", value: 1 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Skepticism",
        facet: "Questioning",
        text: "I rarely accept things at face value without questioning.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Skepticism",
        facet: "Cynicism",
        text: "I tend to be suspicious of others' motives.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Skepticism",
        facet: "Guardedness",
        text: "I am cautious when revealing personal information.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Risk-Taking",
        facet: "Boldness",
        text: "I enjoy taking big chances, even if the outcome is uncertain.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Risk-Taking",
        facet: "Adventurousness",
        text: "I actively seek out new and potentially risky experiences.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Risk-Taking",
        facet: "Spontaneity",
        text: "I often act on impulse without considering the consequences.",
        reverse: true,
        options: [
            { text: "Strongly Disagree", value: 5 },
            { text: "Disagree", value: 4 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 2 },
            { text: "Strongly Agree", value: 1 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Empathy",
        facet: "Compassion",
        text: "I feel concerned for people who are less fortunate than me.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Empathy",
        facet: "Understanding",
        text: "I can easily put myself in someone else's shoes.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Empathy",
        facet: "Sensitivity",
        text: "I sometimes overlook how my words or actions affect others.",
        reverse: true,
        options: [
            { text: "Strongly Disagree", value: 5 },
            { text: "Disagree", value: 4 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 2 },
            { text: "Strongly Agree", value: 1 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Openness",
        facet: "Creativity",
        text: "I often come up with original and imaginative ideas.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Openness",
        facet: "Flexibility",
        text: "I am uncomfortable with unexpected changes in routine.",
        reverse: true,
        options: [
            { text: "Strongly Disagree", value: 5 },
            { text: "Disagree", value: 4 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 2 },
            { text: "Strongly Agree", value: 1 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Skepticism",
        facet: "Caution",
        text: "I tend to question others’ motives before trusting them.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Skepticism",
        facet: "Critical Thinking",
        text: "I prefer to analyze all sides before accepting an idea.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Skepticism",
        facet: "Distrust",
        text: "I often assume people have hidden agendas.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Sociability",
        facet: "Friendliness",
        text: "I find it easy to make new friends.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Sociability",
        facet: "Talkativeness",
        text: "I often dominate conversations.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Sociability",
        facet: "Outgoingness",
        text: "I feel energized by social interaction.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Empathy",
        facet: "Compassion",
        text: "I often feel the emotions of others strongly.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Empathy",
        facet: "Sensitivity",
        text: "I tend to be deeply affected by criticism.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Empathy",
        facet: "Supportiveness",
        text: "I try to comfort people who are upset or anxious.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Assertiveness",
        facet: "Initiative",
        text: "I tend to take charge in group situations without being asked.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Urgency",
        facet: "Energetic Pace",
        text: "I prefer to complete tasks quickly rather than slowly and carefully.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Self-Discipline",
        facet: "Goal Setting",
        text: "I regularly set clear goals and work steadily toward them.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Thoroughness",
        facet: "Accuracy",
        text: "I double-check my work to avoid careless mistakes.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Openness",
        facet: "Adaptability",
        text: "I adjust easily to unexpected changes in plans or routines.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Skepticism",
        facet: "Doubt",
        text: "I sometimes question my own beliefs or assumptions.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Risk-Taking",
        facet: "Cautiousness",
        text: "I avoid taking risks unless I am certain of the outcome.",
        reverse: true,
        options: [
            { text: "Strongly Disagree", value: 5 },
            { text: "Disagree", value: 4 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 2 },
            { text: "Strongly Agree", value: 1 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Empathy",
        facet: "Listening",
        text: "I listen carefully to others’ feelings and perspectives.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    },
    {
        quizTitle: "Caliper Alignment Core",
        trait: "Empathy",
        facet: "Supportiveness",
        text: "I offer help to people who are struggling without being asked.",
        reverse: false,
        options: [
            { text: "Strongly Disagree", value: 1 },
            { text: "Disagree", value: 2 },
            { text: "Neutral", value: 3 },
            { text: "Agree", value: 4 },
            { text: "Strongly Agree", value: 5 }
        ]
    }
]

// Seeder function for Caliper quiz questions
const seedCaliperQuestions = async () => {
    try {

        await connectDB();

        // Iterate through each question
        for (const q of CaliperQuestions) {
            // Look up the quiz document by its title
            const quiz = await Quiz.findOne({ title: q.quizTitle });

            // If quiz doesn't exist, skip this question
            if (!quiz) {
                console.warn(`Quiz not found: ${q.quizTitle}`);
                continue;
            }

            // Remove quizTitle so it's not saved as part of the question doc
            const { quizTitle, ...questionData } = q;

            // Create a new Question linked to the quiz
            const newQuestion = new Question({
                ...questionData,
                quiz: quiz._id
            });

            // Save the question to the database
            const savedQuestion = await newQuestion.save();

            // Add the question to the quiz's `questions` array if it exists
            if (!quiz.questions) quiz.questions = [];
            quiz.questions.push(savedQuestion._id);

            // Save the updated quiz document
            await quiz.save();

            console.log(`Added Caliper question: "${q.text}" under ${q.trait}/${q.facet}`);
        }

        console.log('All Caliper questions seeded successfully.');
        process.exit(0); // Exit success
    } catch (error) {
        console.error('Error seeding Caliper questions:', error);
        process.exit(1); // Exit failure
    }
};

// Run the seeding function
seedCaliperQuestions();