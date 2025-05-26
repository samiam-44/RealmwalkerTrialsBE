import Quiz from '../models/Quiz.mjs';

/**
 * Get all quizzes
 * @route GET /api/quizzes
 */
export async function getAllQuizzes(req, res, next) {
    try { //Find all quizzes and populate the realm and questions
        const quizzes = await Quiz.find().populate('realm').populate('questions');
        res.json(quizzes); //respond with all quiz data asJson
    } catch (err) {
        next(err) //Pass error to error handling middleware
    }
}

/**
 * Get a single quiz by ID
 * @route GET /api/quizzes/:id
 */
export async function getQuizById(req, res, next) {
    try {
        const quiz = await Quiz.findById(req.params.id).populate('realm').populate('questions');
        if (!quiz) {
            return res.status(404).json({ msg: 'Quiz not found' })
        }
        res.json(quiz)
    } catch (err) {
        next(err);

    }
}

